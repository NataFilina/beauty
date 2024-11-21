const API_URL = 'https://673c7b8396b8dcd5f3fa3fd7.mockapi.io/beauty';

const bookingCalendarCcontainer = document.querySelector(
  '.booking_calendar_container'
);
const bookingContainerBtns = document.querySelector('.booking_container_btns');
const calendarTable = document.getElementById('calendar-table');
const modal = document.getElementById('modal');
const form = document.getElementById('booking-form');
const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const prevWeekBtn = document.getElementById('prev-week');
const nextWeekBtn = document.getElementById('next-week');
const modalBtn = document.getElementById('modal_btn');
const modalMasters = document.getElementById('modal_masters');
const bookingBtn = document.querySelectorAll('.btn_booking');
const bookingBtnMasters = document.getElementById('booking_btn_masters');
const modalMastersSelect = document.getElementById('modal_masters_select');
const bookingBtnArrS = document.querySelector('.booking_btn_arr_s');
const bookingBtnArrM = document.querySelector('.booking_btn_arr_m');
const bookingBtnServices = document.getElementById('booking_btn_services');
const bookingContainerBtnsTop = document.querySelector(
  '.booking_container_btns_top'
);
const modalPrice = document.getElementById('modal_price');

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
let services = ['Манікюр/педикюр', 'Макіяж', 'Брови/Вії'];

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
  modalMasters.classList.remove('active');
  modalPrice.classList.remove('active');
  pendingBooking = null;
  modalBtn.style.display = 'none';
  bookingBtnArrM.classList.remove('booking_btn_arr_down');
  bookingBtnArrS.classList.remove('booking_btn_arr_down');
}

function openModalPrice() {
  modalPrice.classList.add('active');
  bookingBtnArrS.classList.add('booking_btn_arr_down');
}
bookingBtnServices.addEventListener('click', openModalPrice);
bookingBtnMasters.addEventListener('click', openModalMasters);

bookingBtn.forEach(button => {
  button.addEventListener('click', openModalBtn);
});

document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', closeModal);
});

window.addEventListener('click', event => {
  if (
    event.target === modal ||
    event.target === modalBtn ||
    event.target === modalMasters ||
    event.target === modalPrice
  )
    closeModal();
});

function generateCalendar() {
  const currentDate = new Date();
  const week = generateWeek(currentWeekStart);
  const currentTime = currentDate.toTimeString().slice(0, 5);

  if (currentWeekStart <= currentDate) {
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

      const isToday = date.toDateString() === currentDate.toDateString();
      const isPast = date < currentDate && isToday && time <= currentTime;

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

function openModalMasters() {
  modalMasters.classList.add('active');
  switch (modalMastersSelect.options[modalMastersSelect.selectedIndex].text) {
    case 'Анна':
      services = ['Манікюр/педикюр'];
      bookingCalendarCcontainer.style.height = '400px';
      bookingContainerBtns.style.height = '400px';
      break;
    case 'Ольга':
      services = ['Брови/Вії'];
      bookingCalendarCcontainer.style.height = '290px';
      bookingContainerBtns.style.height = '290px';
      break;
    case 'Марія':
      services = ['Макіяж'];
      bookingCalendarCcontainer.style.height = '290px';
      bookingContainerBtns.style.height = '290px';
      break;
    default:
      services = ['Манікюр/педикюр', 'Макіяж', 'Брови/Вії'];
      bookingCalendarCcontainer.style.height = '790px';
      bookingContainerBtns.style.height = '790px';
      break;
  }
  generateCalendar();
}

modalMastersSelect.addEventListener('change', openModalMasters);
bookingBtnMasters.addEventListener('click', () => {
  bookingBtnArrM.classList.add('booking_btn_arr_down');
});

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
