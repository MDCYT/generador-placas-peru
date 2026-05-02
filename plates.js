const ZONAS = {
  A: 'Lima y Callao',
  B: 'Lima y Callao',
  C: 'Lima y Callao',
  D: 'Lima y Callao',
  F: 'Lima y Callao',
  H: 'Ancash',
  K: 'Amazonas / Cajamarca / Lambayeque',
  L: 'Loreto',
  M: 'Amazonas / Cajamarca / Lambayeque',
  P: 'Tumbes / Piura',
  S: 'San Martin',
  T: 'La Libertad',
  U: 'Ucayali',
  V: 'Arequipa',
  W: 'Huanuco / Junin / Pasco',
  X: 'Apurimac / Cusco / Madre de Dios',
  Y: 'Ayacucho / Ica / Huancavelica',
  Z: 'Moquegua / Puno / Tacna',
};

const ZONA_LETRAS = {
  A: ['A', 'B', 'C', 'D', 'F'],
  P: ['P'],
  M: ['M', 'K'],
  T: ['T'],
  H: ['H'],
  W: ['W'],
  S: ['S'],
  L: ['L'],
  U: ['U'],
  V: ['V'],
  X: ['X'],
  Y: ['Y'],
  Z: ['Z'],
};

const SPECIAL_SUBTYPES = {
  policial: [
    { value: 'PL', label: 'Policia Nacional', prefix: 'EPL' },
  ],
  emergencia: [
    { value: 'AM', label: 'Ambulancia', prefix: 'EAM' },
    { value: 'CB', label: 'Bomberos', prefix: 'ECB' },
  ],
  gubernamental: [
    { value: 'GN', label: 'Gobierno nacional', prefix: 'EGN' },
    { value: 'GR', label: 'Gobierno regional', prefix: 'EGR' },
    { value: 'GM', label: 'Gobierno municipal', prefix: 'EGM' },
  ],
  diplomatico: [
    { value: 'CD', label: 'Cuerpo diplomatico', prefix: 'ECD' },
    { value: 'CC', label: 'Cuerpo consular', prefix: 'ECC' },
    { value: 'MI', label: 'Mision internacional', prefix: 'EMI' },
    { value: 'TA', label: 'Tecnico administrativo', prefix: 'ETA' },
  ],
  exhibicion: [
    { value: 'EX', label: 'Exhibicion', prefix: 'EEX' },
  ],
  rotativa: [
    { value: 'RO', label: 'Rotativa', prefix: 'ERO' },
  ],
  temporal: [
    { value: 'ZA', label: 'Internamiento temporal', prefix: 'EZA' },
  ],
};

const TIPOS_CONFIG = {
  particular: {
    nombre: 'Particular',
    formato: 'liviano',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#ffffff',
    headerText: '#050505',
    bandMode: 'top',
    sample: 'A1B-234',
    info: 'Placa blanca para vehiculos particulares. La primera letra identifica la zona registral.',
  },
  taxi: {
    nombre: 'Taxi',
    formato: 'liviano',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#ffd400',
    headerText: '#050505',
    bandMode: 'top',
    sample: 'ATX-123',
    info: 'Placa blanca con franja amarilla para servicio de taxi o colectivo.',
  },
  urbano: {
    nombre: 'Transporte urbano',
    formato: 'liviano',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#18a957',
    headerText: '#050505',
    bandMode: 'top',
    sample: 'AUR-123',
    info: 'Placa blanca con franja verde para transporte urbano e interurbano de pasajeros.',
  },
  interprovincial: {
    nombre: 'Interprovincial',
    formato: 'liviano',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#f28a1a',
    headerText: '#050505',
    bandMode: 'top',
    sample: 'AIP-123',
    info: 'Placa blanca con franja naranja para transporte interprovincial.',
  },
  turismo: {
    nombre: 'Turismo',
    formato: 'liviano',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#7d2db6',
    headerText: '#050505',
    bandMode: 'top',
    sample: 'ATU-123',
    info: 'Placa blanca con franja morada para vehiculos destinados al turismo.',
  },
  carga: {
    nombre: 'Carga',
    formato: 'liviano',
    fondo: '#e5e100',
    texto: '#08006b',
    borde: '#08006b',
    header: '#e5e100',
    headerText: '#08006b',
    bandMode: 'plain',
    sample: 'CZA-123',
    info: 'Placa amarilla para transporte de mercaderias y vehiculos de carga.',
  },
  remolque: {
    nombre: 'Remolque',
    formato: 'liviano',
    fondo: '#e5e100',
    texto: '#08006b',
    borde: '#08006b',
    header: '#ffffff',
    headerText: '#08006b',
    bandMode: 'top',
    sample: 'RZA-123',
    info: 'Placa amarilla con franja blanca para remolques y semirremolques.',
  },
  moto: {
    nombre: 'Motocicleta',
    formato: 'moto',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#ffffff',
    headerText: '#050505',
    bandMode: 'plain',
    sample: 'AB-1234',
    info: 'Placa mas cuadrada para vehiculos menores, con holograma, QR y codigo de seguridad.',
  },
  mototaxi: {
    nombre: 'Mototaxi',
    formato: 'moto',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#ffd400',
    headerText: '#050505',
    bandMode: 'top',
    sample: 'MB-1234',
    info: 'Placa de vehiculo menor con franja amarilla para mototaxi o moto carga.',
  },
  policial: {
    nombre: 'Policia',
    formato: 'especial',
    fondo: '#0f612e',
    texto: '#ffffff',
    borde: '#0a351b',
    header: '#0f612e',
    headerText: '#ffffff',
    specialKey: 'policial',
    sample: 'EPL-123',
    info: 'Placa especial para unidades policiales. La E inicial se dibuja reducida como categoria especial.',
  },
  emergencia: {
    nombre: 'Emergencia',
    formato: 'especial',
    fondo: '#c91822',
    texto: '#ffffff',
    borde: '#7e0f15',
    header: '#c91822',
    headerText: '#ffffff',
    specialKey: 'emergencia',
    sample: 'EAM-123',
    info: 'Placa especial para ambulancias, bomberos y servicios de emergencia.',
  },
  gubernamental: {
    nombre: 'Gubernamental',
    formato: 'especial',
    fondo: '#ffffff',
    texto: '#0b1678',
    borde: '#0b1678',
    header: '#ffffff',
    headerText: '#0b1678',
    specialKey: 'gubernamental',
    sample: 'EGN-123',
    info: 'Placa especial para entidades publicas nacionales, regionales o municipales.',
  },
  diplomatico: {
    nombre: 'Diplomatico',
    formato: 'especial',
    fondo: '#ffffff',
    texto: '#c50014',
    borde: '#c50014',
    header: '#ffffff',
    headerText: '#c50014',
    specialKey: 'diplomatico',
    sample: 'ECD-123',
    info: 'Placa especial de gracia para cuerpo diplomatico, consular y misiones internacionales.',
  },
  exhibicion: {
    nombre: 'Exhibicion',
    formato: 'especial',
    fondo: '#f39a22',
    texto: '#050505',
    borde: '#111111',
    header: '#f39a22',
    headerText: '#050505',
    specialKey: 'exhibicion',
    sample: 'EEX-123',
    info: 'Placa especial para vehiculos en exhibicion.',
  },
  rotativa: {
    nombre: 'Rotativa',
    formato: 'especial',
    fondo: '#ffffff',
    texto: '#2c73b0',
    borde: '#2c73b0',
    header: '#ffffff',
    headerText: '#2c73b0',
    specialKey: 'rotativa',
    sample: 'ERO-123',
    info: 'Placa especial rotativa para uso temporal de circulacion o traslado.',
  },
  temporal: {
    nombre: 'Temporal',
    formato: 'especial',
    fondo: '#e5e100',
    texto: '#08006b',
    borde: '#08006b',
    header: '#e5e100',
    headerText: '#08006b',
    specialKey: 'temporal',
    sample: 'EZA-123',
    info: 'Placa especial temporal. El formato EZA-123 mantiene la E inicial mas pequena.',
  },
  personalizada: {
    nombre: 'Personalizada',
    formato: 'custom',
    fondo: '#ffffff',
    texto: '#050505',
    borde: '#111111',
    header: '#8a008a',
    headerText: '#050505',
    sample: 'A1B-234',
    info: 'Modo visual libre para crear una placa personalizada o decorativa.',
  },
};

const LETRAS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'.split('');
const ALPHANUM = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789'.split('');

const estado = {
  tipo: 'particular',
  zona: 'A',
  codigoManual: '',
  subtipo: '',
  codigoGenerado: '',
  custom: {
    fondo: '#ffffff',
    texto: '#000000',
    borde: '#111111',
    header: '#8a008a',
    bandEnabled: true,
  },
};

const canvas = document.getElementById('plate-canvas');
const tipoGrid = document.getElementById('tipo-grid');
const zonaField = document.getElementById('zona-field');
const subtipoField = document.getElementById('subtipo-field');
const subtipoSelect = document.getElementById('subtipo-select');
const customPanel = document.getElementById('custom-panel');
const customInput = document.getElementById('custom-code');
const previewTitle = document.getElementById('preview-title');
const metaTipo = document.getElementById('meta-tipo');
const metaZona = document.getElementById('meta-zona');
const metaCodigo = document.getElementById('meta-codigo');
const metaFormato = document.getElementById('meta-formato');
const infoText = document.getElementById('info-text');
const batchPanel = document.getElementById('batch-panel');
const batchGrid = document.getElementById('batch-grid');

function rnd(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pad(num, len) {
  return String(num).padStart(len, '0');
}

function luminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function shade(hex, amount) {
  const value = hex.replace('#', '');
  const num = parseInt(value, 16);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp((num >> 16) + amount);
  const g = clamp(((num >> 8) & 255) + amount);
  const b = clamp((num & 255) + amount);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function getActiveConfig() {
  const base = { ...TIPOS_CONFIG[estado.tipo] };
  if (estado.tipo === 'personalizada') {
    base.fondo = estado.custom.fondo;
    base.texto = estado.custom.texto;
    base.borde = estado.custom.borde;
    base.header = estado.custom.header;
    base.headerText = luminance(estado.custom.header) > 0.52 ? '#050505' : '#ffffff';
    base.bandMode = estado.custom.bandEnabled ? 'top' : 'plain';
  }
  return base;
}

function getSubtypes(tipo = estado.tipo) {
  const cfg = TIPOS_CONFIG[tipo];
  return cfg?.specialKey ? SPECIAL_SUBTYPES[cfg.specialKey] || [] : [];
}

function getCurrentPrefix() {
  const subtypes = getSubtypes();
  if (!subtypes.length) return 'EZA';
  return subtypes.find((item) => item.value === estado.subtipo)?.prefix || subtypes[0].prefix;
}

function generarCodigo(tipo, zonaKey) {
  const cfg = TIPOS_CONFIG[tipo];
  const letraZona = rnd(ZONA_LETRAS[zonaKey] || ['A']);

  if (cfg.formato === 'moto') {
    return `${letraZona}${rnd(LETRAS)}-${pad(Math.floor(Math.random() * 10000), 4)}`;
  }

  if (cfg.formato === 'especial') {
    return `${getCurrentPrefix()}-${pad(Math.floor(Math.random() * 1000), 3)}`;
  }

  const first = tipo === 'carga' ? 'C' : tipo === 'remolque' ? 'R' : letraZona;
  return `${first}${rnd(ALPHANUM)}${rnd(LETRAS)}-${pad(Math.floor(Math.random() * 1000), 3)}`;
}

function validarCodigo(raw) {
  const cod = raw.toUpperCase().replace(/\s/g, '');
  const normalized = cod.includes('-')
    ? cod
    : cod.length === 6 ? `${cod.slice(0, 3)}-${cod.slice(3)}`
    : cod.length === 7 ? `${cod.slice(0, 2)}-${cod.slice(2)}`
    : cod;

  const valid = [
    /^[A-Z0-9]{3}-\d{3}$/,
    /^[A-Z]{2}-\d{4}$/,
    /^E[A-Z]{2}-\d{3}$/,
  ].some((pattern) => pattern.test(normalized));

  return valid ? normalized : null;
}

function formatoLabel(tipo) {
  const formato = TIPOS_CONFIG[tipo].formato;
  if (formato === 'moto') return 'AB-1234';
  if (formato === 'especial') return 'eXX-123';
  if (formato === 'custom') return 'Libre';
  return 'ABC-123';
}

function zonaLabel() {
  const letras = ZONA_LETRAS[estado.zona] || [estado.zona];
  return ZONAS[letras[0]] || 'Nacional';
}

function renderTypeButtons() {
  tipoGrid.innerHTML = Object.entries(TIPOS_CONFIG).map(([key, cfg]) => `
    <button class="card-btn ${key === estado.tipo ? 'active' : ''}" type="button" data-tipo="${key}">
      <i class="swatch" style="--swatch:${cfg.fondo}; border-color:${cfg.borde}"></i>
      <span>${cfg.nombre}</span>
    </button>
  `).join('');
}

function renderSubtypes() {
  const subtypes = getSubtypes();
  subtipoField.classList.toggle('hidden', !subtypes.length);
  subtipoSelect.innerHTML = subtypes.map((item) => (
    `<option value="${item.value}">${item.prefix} - ${item.label}</option>`
  )).join('');

  if (subtypes.length && !subtypes.some((item) => item.value === estado.subtipo)) {
    estado.subtipo = subtypes[0].value;
  }
  subtipoSelect.value = estado.subtipo;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function topBand(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x, y + h);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h);
  ctx.closePath();
}

function drawPeruFlag(ctx, x, y, w, h) {
  ctx.fillStyle = '#d50000';
  ctx.fillRect(x, y, w / 3, h);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x + w / 3, y, w / 3, h);
  ctx.fillStyle = '#d50000';
  ctx.fillRect(x + (w / 3) * 2, y, w / 3, h);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#111111';
  ctx.strokeRect(x, y, w, h);
}

function drawSlot(ctx, x, y) {
  roundRect(ctx, x, y, 42, 16, 8);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#1a1a1a';
  ctx.stroke();
}

function drawHologram(ctx, x, y, w, h, codigo) {
  const grad = ctx.createLinearGradient(x, y, x + w, y + h);
  grad.addColorStop(0, 'rgba(255,255,255,.58)');
  grad.addColorStop(.45, 'rgba(142,170,205,.44)');
  grad.addColorStop(1, 'rgba(255,255,255,.18)');
  ctx.fillStyle = grad;
  roundRect(ctx, x, y, w, h, 13);
  ctx.fill();
  ctx.fillStyle = 'rgba(80,85,95,.72)';
  ctx.font = `900 ${Math.max(14, h * .32)}px "Barlow Condensed", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(codigo.replace('-', ''), x + w / 2, y + h / 2 + 1);
}

function drawQr(ctx, x, y, size, seedText) {
  const cells = 25;
  const cell = size / cells;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, size, size);

  const seed = seedText.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const drawFinder = (fx, fy) => {
    ctx.fillStyle = '#050505';
    ctx.fillRect(x + fx * cell, y + fy * cell, cell * 7, cell * 7);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + (fx + 1) * cell, y + (fy + 1) * cell, cell * 5, cell * 5);
    ctx.fillStyle = '#050505';
    ctx.fillRect(x + (fx + 2) * cell, y + (fy + 2) * cell, cell * 3, cell * 3);
  };

  drawFinder(0, 0);
  drawFinder(cells - 7, 0);
  drawFinder(0, cells - 7);

  ctx.fillStyle = '#101010';
  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      const inFinder =
        (row < 8 && col < 8) ||
        (row < 8 && col > cells - 9) ||
        (row > cells - 9 && col < 8);
      if (inFinder) continue;

      const timing = (row === 6 || col === 6) && (row + col) % 2 === 0;
      const data = ((row * 17 + col * 23 + seed) % 7 < 3) || ((row ^ col ^ seed) % 11 === 0);
      if (timing || data) ctx.fillRect(x + col * cell, y + row * cell, Math.ceil(cell), Math.ceil(cell));
    }
  }

  ctx.fillStyle = '#30a8d6';
  ctx.fillRect(x + cell * 12, y + cell * 12, cell * 2, cell * 2);
  ctx.strokeStyle = '#d9dde6';
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, size, size);
}

function drawCode(ctx, codigo, cfg, x, y, maxWidth, fontSize, special, verticalScale = 1) {
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillStyle = cfg.texto;
  ctx.shadowColor = 'rgba(0,0,0,.16)';
  ctx.shadowBlur = 2;
  ctx.shadowOffsetY = 2;
  ctx.save();
  ctx.translate(0, y);
  ctx.scale(1, verticalScale);

  if (special && codigo.startsWith('E')) {
    const rest = codigo.slice(1);
    ctx.font = `900 ${fontSize * .64}px "Archivo Black", "Barlow Condensed", sans-serif`;
    ctx.fillText('E', x, 0);
    const eWidth = ctx.measureText('E').width + 8;
    ctx.font = `900 ${fontSize}px "Archivo Black", "Barlow Condensed", sans-serif`;
    ctx.fillText(rest, x + eWidth, 0, maxWidth - eWidth);
  } else {
    ctx.font = `900 ${fontSize}px "Archivo Black", "Barlow Condensed", sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(codigo, x + maxWidth / 2, 0, maxWidth);
  }

  ctx.restore();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
}

function drawMinorCode(ctx, codigo, cfg, x, y, maxWidth) {
  const clean = codigo.replace('-', '');
  const letters = clean.replace(/\d/g, '') || 'BA';
  const numbers = clean.replace(/\D/g, '').padEnd(4, '0').slice(0, 4);
  const top = numbers.slice(0, 2);
  const bottom = `${numbers.slice(2)}${letters}`.slice(0, 4);

  ctx.fillStyle = cfg.texto;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'alphabetic';
  ctx.shadowColor = 'rgba(0,0,0,.14)';
  ctx.shadowBlur = 2;
  ctx.shadowOffsetY = 2;
  ctx.font = '900 152px "Archivo Black", "Barlow Condensed", sans-serif';
  ctx.fillText(top, x + maxWidth, y, maxWidth);
  ctx.font = '900 145px "Archivo Black", "Barlow Condensed", sans-serif';
  ctx.fillText(bottom, x + maxWidth, y + 122, maxWidth);
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
}

function dibujarPlacaMenor(canvasEl, codigo, cfg) {
  const ctx = canvasEl.getContext('2d');
  const W = 620;
  const H = 540;
  const plateX = 62;
  const plateY = 48;
  const plateW = 496;
  const plateH = 422;
  const bandH = cfg.bandMode === 'top' ? 178 : 0;

  canvasEl.width = W;
  canvasEl.height = H;
  ctx.clearRect(0, 0, W, H);

  roundRect(ctx, plateX + 7, plateY + 10, plateW, plateH, 18);
  ctx.fillStyle = 'rgba(0,0,0,.18)';
  ctx.fill();

  roundRect(ctx, plateX, plateY, plateW, plateH, 18);
  ctx.fillStyle = cfg.fondo;
  ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = cfg.borde;
  ctx.stroke();

  if (bandH) {
    ctx.save();
    topBand(ctx, plateX + 4, plateY + 4, plateW - 8, bandH, 13);
    ctx.clip();
    ctx.fillStyle = cfg.header;
    ctx.fillRect(plateX + 4, plateY + 4, plateW - 8, bandH);
    ctx.restore();
  }

  drawPeruFlag(ctx, plateX + 44, plateY + 60, 78, 50);

  ctx.fillStyle = cfg.headerText;
  ctx.font = '900 44px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('PERU', plateX + 44, plateY + 142);

  ctx.strokeStyle = '#c6c9cf';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(plateX + 10, plateY + plateH - 84);
  ctx.lineTo(plateX + plateW - 10, plateY + plateH - 84);
  ctx.stroke();

  drawHologram(ctx, plateX + 46, plateY + 196, 72, 38, codigo);
  drawQr(ctx, plateX + 58, plateY + 244, 54, codigo);

  ctx.fillStyle = '#0b0b0b';
  ctx.font = '700 14px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`PE${pad(Math.floor(Math.random() * 1000000), 7)}`, plateX + 42, plateY + plateH - 35);

  drawSlot(ctx, plateX + 142, plateY + 28);
  drawSlot(ctx, plateX + 332, plateY + 28);
  drawMinorCode(ctx, codigo, cfg, plateX + 160, plateY + 172, plateW - 196);

  roundRect(ctx, plateX, plateY, plateW, plateH, 18);
  ctx.lineWidth = 8;
  ctx.strokeStyle = cfg.borde;
  ctx.stroke();
}

function dibujarPlaca(canvasEl, codigo, cfg) {
  const ctx = canvasEl.getContext('2d');
  const isMoto = cfg.formato === 'moto';
  if (isMoto) {
    dibujarPlacaMenor(canvasEl, codigo, cfg);
    return;
  }

  const W = isMoto ? 680 : 900;
  const H = isMoto ? 390 : 460;
  const padOuter = 26;
  const plateX = padOuter;
  const plateY = padOuter;
  const plateW = W - padOuter * 2;
  const plateH = H - padOuter * 2;
  const radius = isMoto ? 10 : 22;
  const headerH = 74;

  canvasEl.width = W;
  canvasEl.height = H;
  ctx.clearRect(0, 0, W, H);

  roundRect(ctx, plateX + 8, plateY + 12, plateW, plateH, radius);
  ctx.fillStyle = 'rgba(0,0,0,.22)';
  ctx.fill();

  roundRect(ctx, plateX, plateY, plateW, plateH, radius);
  ctx.fillStyle = cfg.fondo;
  ctx.fill();
  ctx.lineWidth = isMoto ? 9 : 12;
  ctx.strokeStyle = cfg.borde;
  ctx.stroke();

  const gloss = ctx.createLinearGradient(0, plateY, 0, plateY + plateH);
  gloss.addColorStop(0, 'rgba(255,255,255,.22)');
  gloss.addColorStop(.38, 'rgba(255,255,255,.03)');
  gloss.addColorStop(1, 'rgba(0,0,0,.08)');
  roundRect(ctx, plateX + 7, plateY + 7, plateW - 14, plateH - 14, radius - 7);
  ctx.fillStyle = gloss;
  ctx.fill();

  if (cfg.bandMode === 'top') {
    ctx.save();
    topBand(ctx, plateX + 5, plateY + 5, plateW - 10, headerH + 16, radius - 7);
    ctx.clip();
    ctx.fillStyle = cfg.header;
    ctx.fillRect(plateX + 5, plateY + 5, plateW - 10, headerH + 16);
    ctx.restore();
  }

  const flagW = 104;
  const flagH = 58;
  drawPeruFlag(ctx, plateX + 30, plateY + 23, flagW, flagH);

  ctx.fillStyle = cfg.headerText;
  ctx.font = '900 64px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '0px';
  ctx.fillText('PERU', plateX + plateW / 2, plateY + 46);

  drawSlot(ctx, plateX + 150, plateY + 24);
  drawSlot(ctx, plateX + plateW - 200, plateY + 24);
  drawSlot(ctx, plateX + 150, plateY + plateH - 47);
  drawSlot(ctx, plateX + plateW - 200, plateY + plateH - 47);

  drawHologram(
    ctx,
    plateX + plateW - 132,
    plateY + 20,
    104,
    58,
    codigo,
  );

  const codeY = plateY + 304;
  const codeX = plateX + 58;
  const codeMax = plateW - 114;
  const fontSize = 214;
  drawCode(ctx, codigo, cfg, codeX, codeY, codeMax, fontSize, cfg.formato === 'especial', 1.28);

  ctx.fillStyle = '#0b0b0b';
  ctx.font = '700 13px "Barlow Condensed", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(pad(Math.floor(Math.random() * 10000000), 7), plateX + 44, plateY + plateH - 30);

  roundRect(ctx, plateX, plateY, plateW, plateH, radius);
  ctx.lineWidth = 12;
  ctx.strokeStyle = cfg.borde;
  ctx.stroke();
}

function syncUi() {
  const cfg = getActiveConfig();
  const showZona = cfg.formato === 'liviano' || cfg.formato === 'moto' || cfg.formato === 'custom';

  zonaField.classList.toggle('hidden', !showZona);
  customPanel.classList.toggle('hidden', estado.tipo !== 'personalizada');
  renderSubtypes();

  previewTitle.textContent = `Placa ${cfg.nombre.toLowerCase()}`;
  metaTipo.textContent = cfg.nombre;
  metaZona.textContent = cfg.formato === 'especial' ? 'Especial / Nacional' : zonaLabel();
  metaFormato.textContent = formatoLabel(estado.tipo);
  infoText.textContent = cfg.info;
}

function generar({ forceRandom = false } = {}) {
  const cfg = getActiveConfig();
  let codigo = null;

  if (!forceRandom && estado.codigoManual) {
    codigo = validarCodigo(estado.codigoManual);
    if (!codigo) {
      customInput.classList.add('invalid');
      customInput.style.borderColor = '#c91822';
      setTimeout(() => {
        customInput.classList.remove('invalid');
        customInput.style.borderColor = '';
      }, 1000);
    }
  }

  if (!codigo) codigo = generarCodigo(estado.tipo, estado.zona);
  estado.codigoGenerado = codigo;

  dibujarPlaca(canvas, codigo, cfg);
  metaCodigo.textContent = codigo;
  syncUi();
}

function getExportPayload(codigo = estado.codigoGenerado, cfg = getActiveConfig()) {
  return {
    schema: 'placagen-pe/v1',
    generatedAt: new Date().toISOString(),
    plate: {
      code: codigo,
      type: estado.tipo,
      typeName: cfg.nombre,
      zone: cfg.formato === 'especial' ? null : estado.zona,
      subtype: cfg.formato === 'especial' ? estado.subtipo : null,
      format: cfg.formato,
      colors: {
        background: cfg.fondo,
        text: cfg.texto,
        border: cfg.borde,
        band: cfg.bandMode === 'top' ? cfg.header : null,
      },
    },
  };
}

function downloadText(filename, text, mime = 'application/json') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

async function exportCurrentPlate() {
  if (!estado.codigoGenerado) generar();
  const payload = getExportPayload();
  const code = JSON.stringify(payload, null, 2);
  downloadText(`placa-${estado.codigoGenerado.replace('-', '_')}.json`, code);

  try {
    await navigator.clipboard.writeText(code);
    const btn = document.getElementById('export-code-btn');
    const original = btn.innerHTML;
    btn.textContent = 'JSON copiado';
    setTimeout(() => { btn.innerHTML = original; }, 1200);
  } catch {
    // La descarga queda como respaldo si el navegador bloquea el portapapeles.
  }
}

function makeBatchItem(index) {
  const cfg = getActiveConfig();
  const previousManual = estado.codigoManual;
  estado.codigoManual = '';
  const codigo = generarCodigo(estado.tipo, estado.zona);
  estado.codigoManual = previousManual;

  const tempCanvas = document.createElement('canvas');
  dibujarPlaca(tempCanvas, codigo, cfg);
  return {
    id: index + 1,
    codigo,
    cfg,
    dataUrl: tempCanvas.toDataURL('image/png'),
    exportCode: JSON.stringify(getExportPayload(codigo, cfg), null, 2),
  };
}

function generarLote() {
  const countInput = document.getElementById('batch-count');
  const count = Math.max(2, Math.min(24, Number(countInput.value) || 6));
  countInput.value = count;

  const items = Array.from({ length: count }, (_, index) => makeBatchItem(index));
  batchGrid.innerHTML = items.map((item) => `
    <article class="batch-card">
      <img src="${item.dataUrl}" alt="Placa ${item.codigo}">
      <footer>
        <strong>${item.codigo}</strong>
        <button type="button" data-batch-download="${item.id}">PNG</button>
        <button type="button" data-batch-code="${item.id}">JSON</button>
      </footer>
    </article>
  `).join('');

  batchGrid._items = items;
  batchPanel.classList.remove('hidden');
  batchPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generarAleatorio() {
  customInput.value = '';
  estado.codigoManual = '';
  generar({ forceRandom: true });
}

tipoGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.card-btn');
  if (!button) return;
  estado.tipo = button.dataset.tipo;
  renderTypeButtons();
  generar();
});

document.getElementById('zona-select').addEventListener('change', (event) => {
  estado.zona = event.target.value;
  generar();
});

subtipoSelect.addEventListener('change', (event) => {
  estado.subtipo = event.target.value;
  generar();
});

customInput.addEventListener('input', (event) => {
  estado.codigoManual = event.target.value.trim();
  customInput.style.borderColor = '';
});

customInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') generar();
});

document.getElementById('generar-btn').addEventListener('click', () => generar());
document.getElementById('random-btn').addEventListener('click', generarAleatorio);
document.getElementById('nuevo-btn').addEventListener('click', generarAleatorio);
document.getElementById('export-code-btn').addEventListener('click', exportCurrentPlate);
document.getElementById('batch-btn').addEventListener('click', generarLote);
document.getElementById('clear-batch-btn').addEventListener('click', () => {
  batchGrid.innerHTML = '';
  batchGrid._items = [];
  batchPanel.classList.add('hidden');
});

batchGrid.addEventListener('click', async (event) => {
  const pngButton = event.target.closest('[data-batch-download]');
  const codeButton = event.target.closest('[data-batch-code]');
  if (!pngButton && !codeButton) return;

  const id = Number((pngButton || codeButton).dataset.batchDownload || (pngButton || codeButton).dataset.batchCode);
  const item = batchGrid._items?.find((entry) => entry.id === id);
  if (!item) return;

  if (pngButton) {
    const link = document.createElement('a');
    link.download = `placa-${item.codigo.replace('-', '_')}.png`;
    link.href = item.dataUrl;
    link.click();
    return;
  }

  downloadText(`placa-${item.codigo.replace('-', '_')}.json`, item.exportCode);
  try { await navigator.clipboard.writeText(item.exportCode); } catch {}
});

document.getElementById('custom-bg').addEventListener('input', (event) => {
  estado.custom.fondo = event.target.value;
  generar();
});
document.getElementById('custom-text').addEventListener('input', (event) => {
  estado.custom.texto = event.target.value;
  generar();
});
document.getElementById('custom-border').addEventListener('input', (event) => {
  estado.custom.borde = event.target.value;
  generar();
});
document.getElementById('custom-band').addEventListener('input', (event) => {
  estado.custom.header = event.target.value;
  generar();
});
document.getElementById('custom-band-enabled').addEventListener('change', (event) => {
  estado.custom.bandEnabled = event.target.checked;
  generar();
});

document.getElementById('download-btn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = `placa-${estado.codigoGenerado.replace('-', '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});

document.getElementById('copy-btn').addEventListener('click', async () => {
  if (!estado.codigoGenerado) return;
  await navigator.clipboard.writeText(estado.codigoGenerado);
  const btn = document.getElementById('copy-btn');
  const original = btn.innerHTML;
  btn.textContent = 'Copiado';
  setTimeout(() => { btn.innerHTML = original; }, 1200);
});

renderTypeButtons();
renderSubtypes();
document.fonts.ready.then(() => generar());
