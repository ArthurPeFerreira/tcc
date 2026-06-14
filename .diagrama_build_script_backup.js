const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
let rough = require('roughjs');
if (rough && rough.default) rough = rough.default;

const FONT = '/usr/share/fonts/opentype/comic-neue/ComicNeue-Regular.otf';
const FONTB = '/usr/share/fonts/opentype/comic-neue/ComicNeue-Bold.otf';
registerFont(FONT, { family: 'Comic Neue' });
registerFont(FONTB, { family: 'Comic Neue', weight: 'bold' });

const W = 1300, H = 620;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');
const rc = rough.canvas(canvas);

// background
const BG = '#171717';
ctx.fillStyle = BG;
ctx.fillRect(0, 0, W, H);

const STROKE = '#e8e8e8';
const TXT = '#ededed';
const GREEN = '#51cf66';
const ORANGE = '#f0883c';

function roundRectPath(x, y, w, h, r) {
  return `M${x + r},${y} h${w - 2 * r} a${r},${r} 0 0 1 ${r},${r} v${h - 2 * r} a${r},${r} 0 0 1 ${-r},${r} h${-(w - 2 * r)} a${r},${r} 0 0 1 ${-r},${-r} v${-(h - 2 * r)} a${r},${r} 0 0 1 ${r},${-r} z`;
}

function box(x, y, w, h, r = 16) {
  rc.path(roundRectPath(x, y, w, h, r), {
    stroke: STROKE, strokeWidth: 1.6, roughness: 1.1, bowing: 0.8, fill: 'none',
  });
}

function text(str, cx, cy, size = 20, color = TXT, bold = false, align = 'center') {
  ctx.fillStyle = color;
  ctx.font = `${bold ? 'bold ' : ''}${size}px "Comic Neue"`;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.fillText(str, cx, cy);
}

function multiText(lines, cx, cy, size, color, bold, lineGap) {
  const lh = size * 1.25 + (lineGap || 0);
  const startY = cy - ((lines.length - 1) * lh) / 2;
  lines.forEach((l, i) => text(l, cx, startY + i * lh, size, color, bold));
}

// paragraph wrap
function wrap(str, maxW, size) {
  ctx.font = `${size}px "Comic Neue"`;
  const words = str.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; }
    else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}

function arrow(x1, y1, x2, y2, color, dashed = false) {
  const opt = { stroke: color, strokeWidth: 2, roughness: 1.0 };
  if (dashed) { opt.strokeLineDash = [7, 6]; }
  rc.line(x1, y1, x2, y2, opt);
  // arrowhead
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const len = 13, spread = 0.42;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - len * Math.cos(ang - spread), y2 - len * Math.sin(ang - spread));
  ctx.lineTo(x2 - len * Math.cos(ang + spread), y2 - len * Math.sin(ang + spread));
  ctx.closePath();
  ctx.fill();
}

// ---------- COMPONENTS ----------

// Fullstack Next.js (left)
const fs_ = { x: 40, y: 235, w: 200, h: 140 };
box(fs_.x, fs_.y, fs_.w, fs_.h);
multiText(['Fullstack', 'Next.js', '(Front + Back)'], fs_.x + fs_.w / 2, fs_.y + fs_.h / 2, 21, TXT, false);

// Container Dados Armazenados (center)
const cont = { x: 440, y: 70, w: 300, h: 480 };
box(cont.x, cont.y, cont.w, cont.h);
text('Dados Armazenados', cont.x + cont.w / 2, cont.y + 40, 22, TXT, false);

// Postgres
const pg = { x: 475, y: 150, w: 230, h: 150 };
box(pg.x, pg.y, pg.w, pg.h);
multiText(['Banco de Dados', '(Postgres)'], pg.x + pg.w / 2, pg.y + pg.h / 2, 21, TXT, false);

// Redis
const rd = { x: 475, y: 360, w: 230, h: 150 };
box(rd.x, rd.y, rd.w, rd.h);
multiText(['Servidor de Cache', '(Redis)'], rd.x + rd.w / 2, rd.y + rd.h / 2, 21, TXT, false);

// APScheduler (top right, with note)
const ap = { x: 820, y: 45, w: 440, h: 245 };
box(ap.x, ap.y, ap.w, ap.h);
text('APScheduler', ap.x + ap.w / 2, ap.y + 32, 23, TXT, true);

const note = [
  'Ao iniciar, o APScheduler consulta o banco e carrega todos os pontos cadastrados, com seus tempos de polling (intervalo entre leituras).',
  'Para cada ponto, agenda um job com base nesse tempo. A cada execução, o job aciona o serviço de aquisição via Moleculer (transporte Redis), sinalizando a hora de atualizar aquele ponto.',
  'Ou seja: carrega os pontos do banco → configura os agendamentos → aciona os Workers via Moleculer conforme o tempo de cada ponto.',
];
let ny = ap.y + 60;
const noteSize = 12.5;
ctx.textAlign = 'center';
for (const para of note) {
  const lines = wrap(para, ap.w - 50, noteSize);
  for (const l of lines) { text(l, ap.x + ap.w / 2, ny, noteSize, '#cfcfcf'); ny += noteSize * 1.3; }
  ny += 6;
}

// Workers (bottom right)
const wk = { x: 880, y: 410, w: 320, h: 150 };
box(wk.x, wk.y, wk.w, wk.h);
multiText(['Workers', 'Aquisição de Dados'], wk.x + wk.w / 2, wk.y + 48, 21, TXT, false);
// M1 M2 ... Mn small boxes
const ms = ['M1', 'M2', 'Mn'];
const mbw = 46, mbh = 36, gap = 30;
const totalW = ms.length * mbw + (ms.length - 1) * gap + 40; // include "..."
let mx = wk.x + (wk.w - (ms.length * mbw + (ms.length - 1) * gap)) / 2;
const my = wk.y + wk.h - 50;
ms.forEach((m, i) => {
  box(mx, my, mbw, mbh, 8);
  text(m, mx + mbw / 2, my + mbh / 2, 16, TXT);
  if (i === ms.length - 2) text('•••', mx + mbw + gap / 2, my + mbh / 2, 18, TXT);
  mx += mbw + gap;
});

// ---------- ARROWS ----------

// Fullstack -> Postgres (CRUD)
arrow(fs_.x + fs_.w, fs_.y + 50, cont.x, pg.y + 60, GREEN);
text('CRUD', (fs_.x + fs_.w + cont.x) / 2, fs_.y + 12, 15, ORANGE);

// Fullstack -> Redis (Cache)
arrow(fs_.x + fs_.w, fs_.y + 95, cont.x, rd.y + 70, GREEN);
text('Cache', (fs_.x + fs_.w + cont.x) / 2 + 5, rd.y + 100, 15, ORANGE);

// APScheduler -> Postgres (carrega pontos) -- upper band
arrow(ap.x, ap.y + ap.h - 45, pg.x + pg.w + 2, pg.y + 32, GREEN);
text('Carrega pontos (polling)', 752, 205, 14.5, ORANGE);

// APScheduler -> Workers (Moleculer dispatch) -- right vertical
const molX = ap.x + ap.w / 2;
arrow(molX, ap.y + ap.h, wk.x + wk.w / 2, wk.y, GREEN);
text('Moleculer', molX + 75, (ap.y + ap.h + wk.y) / 2, 16, ORANGE);

// Workers -> Postgres (atualiza dados) -- exits Workers TOP, upper band
arrow(wk.x + 55, wk.y, pg.x + pg.w - 25, pg.y + pg.h, GREEN);
text('Atualiza dados', 812, 330, 14.5, ORANGE);

// Redis -> Moleculer arrow (transporte) dashed -- lower band
const molMidY = (ap.y + ap.h + wk.y) / 2 + 22;
arrow(rd.x + rd.w, rd.y + rd.h - 35, molX, molMidY, GREEN, true);
text('transporte: Redis', 850, 432, 14, ORANGE);

// save
const out = '/home/arthur-ferreira/Desktop/TCC/.diagrama_build/arquitetura.png';
fs.writeFileSync(out, canvas.toBuffer('image/png'));
console.log('saved', out);
