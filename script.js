// ─── MENÚ DATA ───
const menuData = {
  entradas: [
    { emoji: '🥗', name: 'Ensalada Mediterránea', desc: 'Tomate, pepino, aceitunas, queso feta y orégano', price: '$4.900' },
    { emoji: '🍞', name: 'Pan con Tomate', desc: 'Pan artesanal con tomate rallado y aceite de oliva', price: '$2.500' },
    { emoji: '🧆', name: 'Hummus Casero', desc: 'Garbanzos, tahini, limón y pimentón ahumado', price: '$3.800' },
    { emoji: '🦐', name: 'Gambas al Ajillo', desc: 'Gambas salteadas con ajo, guindilla y perejil', price: '$6.500' },
  ],
  principales: [
    { emoji: '🐟', name: 'Merluza a la Plancha', desc: 'Con verduras asadas y salsa de alcaparras', price: '$11.900' },
    { emoji: '🥩', name: 'Entrecot a las Brasas', desc: 'Corte premium con chimichurri y papas rústicas', price: '$14.500' },
    { emoji: '🍝', name: 'Pasta al Pesto', desc: 'Linguine con pesto genovés y piñones tostados', price: '$8.900' },
    { emoji: '🫘', name: 'Risotto de Setas', desc: 'Arroz cremoso con hongos silvestres y parmesano', price: '$9.500' },
  ],
  postres: [
    { emoji: '🍮', name: 'Crème Brûlée', desc: 'Clásica crema catalana con caramelo crujiente', price: '$4.200' },
    { emoji: '🍫', name: 'Coulant de Chocolate', desc: 'Bizcocho tibio con corazón fundido y helado', price: '$4.800' },
    { emoji: '🍋', name: 'Tarta de Limón', desc: 'Base crocante, crema de limón y merengue suave', price: '$3.900' },
    { emoji: '🍨', name: 'Helado Artesanal', desc: 'Tres sabores de temporada elaborados en casa', price: '$3.200' },
  ],
  bebidas: [
    { emoji: '🍷', name: 'Vino de la Casa', desc: 'Selección del sommelier, copa o botella', price: '$3.500' },
    { emoji: '🥤', name: 'Limonada Natural', desc: 'Limón fresco, hierbabuena y azúcar de caña', price: '$2.800' },
    { emoji: '☕', name: 'Café de Especialidad', desc: 'Origen único, preparado en V60 o espresso', price: '$2.200' },
    { emoji: '🫖', name: 'Infusiones Premium', desc: 'Selección de tés y hierbas naturales', price: '$1.900' },
  ],
};

// ─── RENDER MENÚ ───
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  menuData[category].forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.innerHTML = `
      <div class="menu-emoji">${item.emoji}</div>
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <span class="menu-price">${item.price}</span>
    `;
    grid.appendChild(card);
  });
}

// ─── TABS ───
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.tab);
  });
});

renderMenu('entradas');

// ─── RESERVAS ───
const form = document.getElementById('reservaForm');
const confirm = document.getElementById('reservaConfirm');
const confirmMsg = document.getElementById('confirmMsg');
const nuevaReservaBtn = document.getElementById('nuevaReserva');

// Set min date to today
const fechaInput = document.getElementById('fecha');
const today = new Date().toISOString().split('T')[0];
fechaInput.setAttribute('min', today);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const personas = document.getElementById('personas').value;

  const fechaFormateada = new Date(fecha + 'T12:00:00').toLocaleDateString('es-CL', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  confirmMsg.textContent = `${nombre}, tu mesa para ${personas} persona(s) está reservada para el ${fechaFormateada} a las ${hora}.`;

  form.classList.add('hidden');
  confirm.classList.remove('hidden');
});

nuevaReservaBtn.addEventListener('click', () => {
  confirm.classList.add('hidden');
  form.classList.remove('hidden');
  form.reset();
});

// ─── NAV TOGGLE MOBILE ───
document.getElementById('navToggle').addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '64px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'white';
  links.style.padding = '20px';
  links.style.borderBottom = '1px solid #e8e2d9';
});
