import { ActionError, defineAction } from 'astro:actions';
import { getSecret } from 'astro:env/server';
import { z } from 'astro/zod';

// Best-effort limit per server instance. A platform firewall rule is the stronger control.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export const server = {
  enquiry: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string({ error: 'Enter your name' }).trim().min(1, 'Enter your name').max(120, 'Name must be 120 characters or fewer'),
      email: z.email({ error: 'Enter an email address in the format name@example.com' }).max(200),
      phone: z.string().trim().max(40, 'Phone number must be 40 characters or fewer').optional(),
      type: z.enum(['home', 'business', 'maintenance', 'other'], { error: 'Choose what your enquiry is about' }),
      message: z.string({ error: 'Tell us a little about the job' }).trim().min(10, 'Tell us a little about the job').max(5000, 'Message must be 5,000 characters or fewer'),
      website: z.string().optional(),
    }),
    handler: async (input, context) => {
      // Hidden from people, so a value here means a bot. Report success and drop it.
      if (input.website) return { delivery: 'sent' as const };

      if (isLimited(context.clientAddress)) {
        throw new ActionError({ code: 'TOO_MANY_REQUESTS', message: 'Too many enquiries. Please call us instead.' });
      }

      const apiKey = getSecret('RESEND_API_KEY');
      const to = getSecret('ENQUIRY_TO');
      const from = getSecret('ENQUIRY_FROM');

      // Nothing is sent or stored until delivery has been configured.
      if (!apiKey || !to || !from) return { delivery: 'off' as const };

      const { Resend } = await import('resend');
      const { error } = await new Resend(apiKey).emails.send({
        from,
        to,
        replyTo: input.email,
        subject: `Website enquiry (${input.type}) from ${input.name}`,
        text: [
          `Name: ${input.name}`,
          `Email: ${input.email}`,
          `Phone: ${input.phone || 'Not given'}`,
          `About: ${input.type}`,
          '',
          input.message,
        ].join('\n'),
      });
      if (error) throw new ActionError({ code: 'INTERNAL_SERVER_ERROR', message: 'The enquiry could not be sent.' });

      return { delivery: 'sent' as const };
    },
  }),
};
