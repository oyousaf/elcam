// A decorative drafting crosshair and coordinate readout over the drawing.
const sheet = document.querySelector<HTMLElement>('[data-crosshair]');
const readout = sheet?.querySelector<HTMLElement>('[data-readout]');
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (sheet && readout && fine && !reduced) {
  let frame = 0;
  sheet.addEventListener(
    'pointermove',
    (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = sheet.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;
        sheet.style.setProperty('--cx', `${x}px`);
        sheet.style.setProperty('--cy', `${y}px`);
        readout.textContent = `X ${String(Math.round(x)).padStart(4, '0')}  Y ${String(Math.round(y)).padStart(4, '0')}`;
      });
    },
    { passive: true },
  );
}
