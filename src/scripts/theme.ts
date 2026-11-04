type Theme = 'device' | 'light' | 'dark';

const KEY = 'elcam-theme';
const root = document.documentElement;
const radios = [...document.querySelectorAll<HTMLInputElement>('input[name="theme"]')];
const metas = [...document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')];

function read(): Theme {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === 'light' || saved === 'dark' ? saved : 'device';
  } catch {
    return 'device';
  }
}

function apply(theme: Theme) {
  if (theme === 'device') delete root.dataset.theme;
  else root.dataset.theme = theme;
  for (const meta of metas) {
    meta.media = theme === 'device' ? (meta.dataset.media ?? '') : 'all';
    meta.content = theme === 'device' ? (meta.dataset.color ?? '') : theme === 'dark' ? '#0a1560' : '#f2f0e8';
  }
  for (const radio of radios) radio.checked = radio.value === theme;
}

function change(theme: Theme, from: HTMLElement) {
  try {
    if (theme === 'device') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, theme);
  } catch {}

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduced) return apply(theme);

  // Wipes the new theme outwards from the control that was used.
  const box = from.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.classList.add('theme-changing');
  const transition = document.startViewTransition(() => apply(theme));
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 550, easing: 'cubic-bezier(.6,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
      );
    })
    .catch(() => {});
  transition.finished.finally(() => root.classList.remove('theme-changing'));
}

apply(read());
for (const radio of radios) {
  radio.addEventListener('change', () => change(radio.value as Theme, radio.parentElement ?? radio));
}
addEventListener('storage', (event) => {
  if (event.key === KEY) apply(read());
});
addEventListener('pageshow', () => apply(read()));
