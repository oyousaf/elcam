export const site = {
  name: 'Elcam Property Maintenance',
  legalName: 'Elcam Property Maintenance Ltd',
  companyNumber: '04106094',
  phone: '01908 508331',
  phoneHref: 'tel:+441908508331',
  email: 'epm.info@elcam.org',
  address: ['6 Upper Wood Close', 'Milton Keynes', 'Buckinghamshire', 'MK5 7GH'],
  area: 'Milton Keynes, Aylesbury and the surrounding area',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6+Upper+Wood+Close%2C+Milton+Keynes%2C+MK5+7GH',
  facebook: 'https://www.facebook.com/100064933740211/',
  x: 'https://x.com/elcamproperty',
};

export const nav = [
  { label: 'Homes', href: '/homes/' },
  { label: 'Businesses', href: '/businesses/' },
  { label: 'Maintenance', href: '/maintenance/' },
  { label: 'Our work', href: '/our-work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const testimonials = {
  homeowner: {
    quote: 'Many thanks for carrying out works to the landing floor and sitting room wall at my property recently, I’m very pleased with the works and would not hesitate to recommend you in the future.',
    by: 'Homeowner, Milton Keynes',
  },
  renovation: {
    quote: 'Many thanks for the support in completing Phase 2! Great job once again.',
    by: 'Homeowners, Milton Keynes',
  },
  decorating: {
    quote: 'I am really pleased with the quality of work your guys did with the ceiling and decoration. Even though some of the work carried out was very messy, they left the place very clean each day – I was impressed.',
    by: 'Customer, Milton Keynes',
  },
  facilities: {
    quote: 'They have gradually progressed to the top of my list of preferred contractors. I find them very competitive when it comes to pricing and the level of workmanship is of a very high standard.',
    by: 'Purchasing and facilities manager, Milton Keynes manufacturer',
  },
  fitout: {
    quote: 'The price they gave us was the most competitive of the four quotes we obtained and we have been very pleased with the standard of workmanship, the attention to detail shown by the workmen and the overall quality of finish achieved.',
    by: 'Business manager, on a new meeting room and conference suite',
  },
} as const;

export type TestimonialKey = keyof typeof testimonials;
export type GroupKey = 'homes' | 'businesses' | 'maintenance';

export const groups: Record<GroupKey, {
  label: string;
  metaTitle: string;
  description: string;
  title: string;
  lede: string;
  body: string[];
  cta: string;
  image: string;
  testimonial?: TestimonialKey;
}> = {
  homes: {
    label: 'For homes',
    metaTitle: 'Home maintenance and refurbishment in Milton Keynes',
    description: 'Extensions, garage conversions, kitchens, bathrooms, tiling, joinery and decorating in Milton Keynes, starting with a free site inspection and written estimate.',
    title: 'Home refurbishment, from one room to a full extension',
    lede: 'Begin with a free site inspection, followed by a full, detailed written estimate.',
    body: [
      'We have assembled a team with qualifications and expertise across a range of skills, and work together on projects large and small.',
      'Once you approve the estimate, we arrange a date and timescale for the work to be completed.',
    ],
    cta: 'Book your free site inspection',
    image: 'homes',
    testimonial: 'homeowner',
  },
  businesses: {
    label: 'For businesses',
    metaTitle: 'Office fit-outs and commercial maintenance in Milton Keynes',
    description: 'Office renovations and fit-outs, contract maintenance, fire door inspections, partitioning and suspended ceilings for businesses in Milton Keynes.',
    title: 'Office fit-outs and building work that fit around your business',
    lede: 'Once approved plans are received, we can carry out the full fit-out: power, lighting, data and comms, bespoke partitioning, suspended ceilings, carpeting and safety flooring.',
    body: [
      'Our skilled team of tradesmen undertake renovations and office fit-outs, working flexible hours around your business wherever we can.',
      'Ask us for a complete refit, or use one of the specialist services below.',
    ],
    cta: 'Arrange a quote for your premises',
    image: 'businesses',
    testimonial: 'facilities',
  },
  maintenance: {
    label: 'Maintenance',
    metaTitle: 'Building maintenance services in Milton Keynes',
    description: 'One-off, weekly, monthly or quarterly building maintenance in Milton Keynes and beyond, from light fittings and plumbing to decoration, locks and doors.',
    title: 'Building maintenance on a schedule that suits you',
    lede: 'One-off, weekly, monthly or quarterly visits, for companies throughout Milton Keynes and further afield.',
    body: [
      'We keep your building in good working order, checking and maintaining everything from light fittings, ceiling tiles and toilets to decoration, locks and doors.',
      'We can also arrange and carry out office moves. The services below are available as a one-off or as part of a regular contract.',
    ],
    cta: 'Talk to us about maintenance',
    image: 'maintenance',
  },
};
