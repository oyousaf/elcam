// An original section drawing of a house and an office block. Each room is a service.

export type Drawing = 'house' | 'office';

export type Room = {
  id: string; // matches the service content id
  no: string;
  short: string;
  drawing: Drawing;
  box: [number, number, number, number];
  labelAt?: [number, number];
  detail: string;
};

export const rooms: Room[] = [
  {
    id: 'homes/garage-conversions-extensions',
    no: '01',
    short: 'Conversion',
    drawing: 'house',
    box: [30, 440, 140, 120],
    detail: `
      <path class="d" d="M36 474V560"/>
      <path d="M72 524H136M80 524V560M128 524V560"/>
      <path d="M122 524V498L106 488M100 484l12 8"/>
      <rect x="84" y="534" width="20" height="26"/>
      <rect x="62" y="492" width="26" height="18"/>
      <path d="M62 504l8-6 7 5 5-3 6 5"/>`,
  },
  {
    id: 'homes/kitchens-bathrooms',
    no: '02',
    short: 'Kitchen',
    drawing: 'house',
    box: [370, 430, 220, 130],
    detail: `
      <rect x="444" y="430" width="12" height="12"/>
      <path d="M447 433h6M447 439h6"/>
      <rect x="470" y="512" width="110" height="48"/>
      <path d="M470 522H580M497 522V560M525 522V560M552 522V560"/>
      <rect x="490" y="452" width="90" height="24"/>
      <path d="M520 452V476M550 452V476"/>
      <path d="M520 512V498a7 7 0 0 1 14 0"/>
      <path d="M384 522H440M392 522V560M432 522V560"/>
      <path d="M412 430V474M402 484a10 10 0 0 1 20 0Z"/>`,
  },
  {
    id: 'homes/tiling',
    no: '03',
    short: 'Tiling',
    drawing: 'house',
    box: [370, 290, 80, 140],
    detail: `
      <rect class="tiles" x="370" y="340" width="80" height="90"/>
      <rect x="378" y="404" width="64" height="20" rx="8"/>
      <path d="M430 404V372H414M414 372v6"/>
      <path d="M388 424v6M432 424v6"/>`,
  },
  {
    id: 'homes/carpentry-joinery',
    no: '04',
    short: 'Joinery',
    drawing: 'house',
    box: [310, 290, 60, 270],
    detail: `
      <path d="M310 560h6v-13h6v-13h6v-13h6v-13h6v-13h6v-13h6v-13h6v-13h6v-13h6"/>
      <path d="M314 524 366 420M314 524v-8M366 420v8"/>
      <rect x="322" y="344" width="36" height="86"/>
      <rect x="327" y="350" width="26" height="30"/>
      <rect x="327" y="386" width="26" height="38"/>
      <circle cx="352" cy="392" r="1.5"/>`,
  },
  {
    id: 'homes/painting-decorating',
    no: '05',
    short: 'Decorating',
    drawing: 'house',
    box: [170, 290, 140, 140],
    detail: `
      <rect class="paint" x="170" y="290" width="66" height="140"/>
      <rect x="228" y="346" width="40" height="12" rx="2"/>
      <path d="M268 352h8v14h-27v14"/>
      <path d="M249 380v22"/>
      <path d="M248 430V414H302V430M248 414V406a4 4 0 0 1 4-4h14v12"/>`,
  },
  {
    id: 'maintenance/plumbing',
    no: '06',
    short: 'Plumbing',
    drawing: 'office',
    box: [30, 170, 60, 390],
    labelAt: [33, 204],
    detail: `
      <path d="M50 130V560M68 170V560"/>
      <path d="M50 240H90M68 370H90M50 500H90"/>
      <circle cx="50" cy="290" r="5"/>
      <path d="M46 286l8 8M54 286l-8 8"/>
      <circle cx="68" cy="440" r="5"/>
      <path d="M64 436l8 8M72 436l-8 8"/>
      <path d="M44 330h12M62 330h12M44 470h12M62 470h12"/>`,
  },
  {
    id: 'maintenance/electrical',
    no: '07',
    short: 'Electrical',
    drawing: 'office',
    box: [300, 300, 230, 130],
    detail: `
      <rect x="326" y="344" width="44" height="62"/>
      <path d="M332 356h32M332 368h32M332 380h32M332 392h32M340 350v50M348 350v50M356 350v50"/>
      <path d="M348 344V316H500V300"/>
      <path d="M420 316V336M408 346a12 12 0 0 1 24 0ZM480 316V336M468 346a12 12 0 0 1 24 0Z"/>
      <rect x="414" y="404" width="16" height="12"/>
      <rect x="474" y="404" width="16" height="12"/>
      <path d="M448 366l-8 18h8l-6 16 16-22h-9l7-12Z"/>`,
  },
  {
    id: 'maintenance/insurance-work',
    no: '08',
    short: 'Insurance',
    drawing: 'office',
    box: [90, 430, 210, 130],
    detail: `
      <rect x="198" y="466" width="62" height="48"/>
      <path d="M192 480l74-8M192 500l74 6M212 460l12 60"/>
      <path d="M158 430c0 12 6 14 6 24M174 430c0 8-5 12-5 22M150 462c-3 5-3 8 0 8s3-3 0-8ZM166 480c-3 5-3 8 0 8s3-3 0-8Z"/>
      <path d="M144 536l4 24h24l4-24Z"/>
      <path d="M284 430l-8 18 10 12-10 16 8 14"/>`,
  },
  {
    id: 'businesses/contract-maintenance',
    no: '09',
    short: 'Contracts',
    drawing: 'office',
    box: [300, 430, 230, 130],
    detail: `
      <path d="M360 560 386 470 412 560M372 520H400M378 496H394M386 470l26 90"/>
      <rect x="440" y="470" width="42" height="56"/>
      <path d="M452 470v-5h18v5"/>
      <path d="M447 484l3 3 5-6M447 498l3 3 5-6M447 512l3 3 5-6M460 484h16M460 498h16M460 512h16"/>
      <rect x="492" y="526" width="30" height="24"/>
      <path d="M492 538H522M500 526v-6h14v6"/>
      <circle cx="498" cy="555" r="4"/><circle cx="516" cy="555" r="4"/>`,
  },
  {
    id: 'businesses/fire-doors',
    no: '10',
    short: 'Fire doors',
    drawing: 'office',
    box: [90, 300, 210, 130],
    detail: `
      <rect class="w" x="170" y="334" width="62" height="96"/>
      <rect x="186" y="348" width="18" height="42"/>
      <path class="d" d="M176 430V340H226V430"/>
      <path d="M176 334l22-7h22"/>
      <circle cx="224" cy="396" r="2"/>
      <path class="d" d="M232 430a58 58 0 0 1 54-58"/>
      <rect x="182" y="310" width="38" height="14"/>
      <path d="M190 317h20M204 313l6 4-6 4"/>`,
  },
  {
    id: 'businesses/partitioning-suspended-ceilings',
    no: '11',
    short: 'Partitions + ceilings',
    drawing: 'office',
    box: [90, 170, 440, 130],
    labelAt: [97, 214],
    detail: `
      <path d="M90 192H530"/>
      <path d="M120 170v22M170 170v22M220 170v22M270 170v22M320 170v22M370 170v22M420 170v22M470 170v22M510 170v22"/>
      <path d="M130 192v5M180 192v5M230 192v5M280 192v5M330 192v5M380 192v5M430 192v5M480 192v5"/>
      <rect x="146" y="192" width="46" height="5"/>
      <rect x="296" y="192" width="46" height="5"/>
      <rect x="446" y="192" width="46" height="5"/>
      <path d="M232 197V300M238 197V300M372 197V300M378 197V300"/>
      <path class="d" d="M232 250H238M372 250H378"/>
      <path d="M255 262H355M270 262V300M340 262V300"/>
      <path d="M396 300v-22h14M500 300v-22h-14M396 262H510"/>`,
  },
];

const shell: Record<Drawing, string> = {
  house: `
    <rect class="ground" x="0" y="560" width="670" height="26"/>
    <path class="w" d="M0 560H670"/>
    <path class="w" d="M170 560V290H450V430M370 290V430M170 430H450M310 290V560"/>
    <path class="w" d="M30 560V440M22 440H170"/>
    <path class="w" d="M450 430H590V560"/>
    <path class="w" d="M146 300 310 140 474 300M170 290 310 154 450 290"/>
    <path d="M392 212V168H418V236"/>
    <path d="M388 168H422"/>
    <path d="M222 240 310 240M250 212H370M280 184H340"/>
    <path d="M490 430 504 404H536L550 430ZM520 404V430"/>
    <path d="M196 524H284V548H196ZM196 524V514a6 6 0 0 1 6-6H278a6 6 0 0 1 6 6V524M204 548v12M276 548v12"/>
    <rect x="222" y="454" width="36" height="34"/>
    <path d="M240 454V488"/>
    <circle cx="632" cy="498" r="26"/>
    <path d="M632 560V496M632 526 618 510M632 516 646 502"/>
    <path d="M30 612H590M30 604v16M590 604v16"/>`,
  office: `
    <rect class="ground" x="0" y="560" width="560" height="26"/>
    <path class="w" d="M0 560H560"/>
    <path class="w" d="M30 560V170H530V560"/>
    <path class="w" d="M22 170H538M90 170V560M90 300H530M90 430H530M300 300V560"/>
    <rect x="384" y="128" width="84" height="42"/>
    <circle cx="426" cy="149" r="13"/>
    <path d="M426 136V162M413 149H439"/>
    <path d="M500 170V112M514 170V112M500 128H514M500 142H514M500 156H514"/>
    <path d="M30 612H530M30 604v16M530 604v16"/>`,
};

const caption: Record<Drawing, string> = {
  house: 'Homes',
  office: 'Businesses and maintenance',
};

export const viewBoxes: Record<Drawing, string> = { house: '0 100 670 530', office: '0 100 560 530' };

// Gives every shape a normalised length so the drawing can trace itself in with CSS.
const trace = (svg: string) => svg.replace(/<(path|rect|circle)\b/g, '<$1 pathLength="1"');

const slug = (id: string) => id.split('/')[1];

export function renderDrawing(drawing: Drawing, prefix: string, focus: string[] = []) {
  const parts = rooms
    .filter((room) => room.drawing === drawing)
    .map((room) => {
      const [x, y, w, h] = room.box;
      const state = focus.length === 0 ? '' : focus.includes(room.id) ? ' is-focus' : ' is-dim';
      return `<a class="room room-${slug(room.id)}${state}" href="/${room.id}/" tabindex="-1">
        <rect class="hit" x="${x}" y="${y}" width="${w}" height="${h}"/>
        <g class="ink">${room.detail}</g>
        <text class="num" x="${x + 7}" y="${y + 20}">${room.no}</text>
        <text class="lbl" x="${room.labelAt?.[0] ?? x + 7}" y="${room.labelAt?.[1] ?? y + 34}">${room.short}</text>
      </a>`;
    })
    .join('');

  const defs = `<defs>
    <pattern id="${prefix}-ground" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V10" class="pat"/></pattern>
    <pattern id="${prefix}-tiles" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" class="pat"/></pattern>
    <pattern id="${prefix}-paint" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><path d="M0 0V7" class="pat"/></pattern>
  </defs>`;

  const markup = trace(shell[drawing] + parts)
    .replace(/class="ground"/g, `class="ground" fill="url(#${prefix}-ground)"`)
    .replace(/class="tiles"/g, `class="tiles" fill="url(#${prefix}-tiles)"`)
    .replace(/class="paint"/g, `class="paint" fill="url(#${prefix}-paint)"`);

  const middle = drawing === 'house' ? 310 : 280;
  return `${defs}${markup}<text class="cap" x="${middle}" y="607" text-anchor="middle">${caption[drawing]}</text>`;
}

// A crop around one room, padded so its neighbours still give context.
export function cropFor(room: Room, ratio = 4 / 3): string {
  const pad = 26;
  const [x, y, w, h] = room.box;
  let cw = w + pad * 2;
  let ch = h + pad * 2;
  if (cw / ch < ratio) cw = ch * ratio;
  else ch = cw / ratio;
  const cx = x + w / 2 - cw / 2;
  const cy = y + h / 2 - ch / 2;
  return `${Math.round(cx)} ${Math.round(cy)} ${Math.round(cw)} ${Math.round(ch)}`;
}
