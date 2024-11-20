const API_URL = 'https://673c7b8396b8dcd5f3fa3fd7.mockapi.io/beauty';

const calendarTable = document.getElementById('calendar-table');
const modal = document.getElementById('modal');
const form = document.getElementById('booking-form');
const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const prevWeekBtn = document.getElementById('prev-week');
const nextWeekBtn = document.getElementById('next-week');
const modalBtn = document.getElementById('modal_btn');
const bookingBtn = document.querySelectorAll('.btn_booking');

let currentWeekStart = new Date();
let bookedSlots = [];
let pendingBooking = null;

const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
];
const services = ['Манікюр/педикюр', 'Макіяж', 'Брови/Вії'];

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function generateWeek(startDate) {
  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    week.push(date);
  }
  return week;
}

async function fetchBookedSlots() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok)
      throw new Error('Помилка завантаження даних по бронювання');
    bookedSlots = await response.json();
    generateCalendar();
  } catch (error) {
    console.error('Помилка:', error);
  }
}

function isServiceBooked(date, time, service) {
  return bookedSlots.some(
    slot => slot.date === date && slot.time === time && slot.service === service
  );
}

function openModal(key, service) {
  pendingBooking = { key, service };
  modal.classList.add('active');
}

function openModalBtn() {
  modalBtn.style.display = 'flex';
}

function closeModal() {
  modal.classList.remove('active');
  pendingBooking = null;
  modalBtn.style.display = 'none';
}

bookingBtn.forEach(button => {
  button.addEventListener('click', openModalBtn);
});

document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', closeModal);
});

window.addEventListener('click', event => {
  if (event.target === modal || event.target === modalBtn) closeModal();
});

function generateCalendar() {
  const currentDate = new Date();
  const week = generateWeek(currentWeekStart);
  if (currentWeekStart <= new Date()) {
    prevWeekBtn.classList.add('hidden');
  } else {
    prevWeekBtn.classList.remove('hidden');
  }

  calendarTable.innerHTML = '';

  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th></th>
    ${week
      .map(
        day =>
          `<th>${day.toLocaleDateString('uk-UA', {
            month: 'short',
            day: '2-digit',
            weekday: 'short',
          })}</th>`
      )
      .join('')
      .toUpperCase()}
  `;
  headerRow.classList.add('headerRowContent');
  calendarTable.appendChild(headerRow);

  timeSlots.forEach(time => {
    const row = document.createElement('tr');

    const timeCell = document.createElement('td');
    timeCell.textContent = time;
    timeCell.classList.add('timeCellTime');
    row.appendChild(timeCell);

    week.forEach(date => {
      const key = `${formatDate(date)} ${time}`;
      const cell = document.createElement('td');

      const isPast =
        date < currentDate ||
        (date.toDateString() === currentDate.toDateString() &&
          time <= currentDate.toTimeString().slice(0, 5));

      if (isPast) {
        cell.classList.add('disabled');
        cell.textContent = '';
      } else {
        services.forEach(service => {
          const isBooked = isServiceBooked(formatDate(date), time, service);
          const button = document.createElement('button');
          button.textContent = service;
          button.disabled = isBooked;
          button.classList.add('calendarServisesContent');

          if (isBooked) {
            button.classList.add('disabled');
          }

          button.addEventListener('click', () => openModal(key, service));
          cell.appendChild(button);
        });
      }
      row.appendChild(cell);
    });

    calendarTable.appendChild(row);
  });
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!pendingBooking) {
    alert('Дані про бронювання відсутні. Спробуйте знову.');
    return;
  }

  const name = nameInput.value;
  const phone = phoneInput.value;
  const [date, time] = pendingBooking.key.split(' ');
  const booking = { date, time, service: pendingBooking.service, name, phone };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking),
    });

    if (response.ok) {
      bookedSlots.push(await response.json());
      closeModal();
      nameInput.value = '';
      phoneInput.value = '';
      generateCalendar();
      alert(
        `Бронювання підтверджено на ${date} ${time} (${pendingBooking.service}).`
      );
    } else {
      alert('Помилка при бронюванні.');
    }
  } catch (error) {
    console.error('Помилка мережі:', error);
  }
});

nextWeekBtn.addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  fetchBookedSlots();
});

prevWeekBtn.addEventListener('click', () => {
  currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  fetchBookedSlots();
});

fetchBookedSlots();
