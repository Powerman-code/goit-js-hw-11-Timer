import '../css/common.css';

// const logMessage = () => {
//     console.log('Лог при вызове ф-и');
// };

// console.log('Лог до');

// setTimeout(() => {
//     console.log('Лог при вызове ф-и');
// }, 2000);

// console.log('Лог после');

// -------------Отменяем вызов таймаута----------

// console.log('Лог до');

// const logger = time => {
//     console.log('Лог при вызове ф-и');
// };

// const timerId = setTimeout(logger, 2000, 2000);
// // идентификатор таймаута
// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);
// if (shouldCancelTimer) {
//     clearTimeout(timerId);
//     // если хотим отчистить таймер, передаем его идентификатор
// }

// console.log('Лог после');

// ----------Метод setInterval (callback, delay, args)

// const logger = time => {
//     console.log(`Лог каждый ${time}ms - ${Date.now()}`);
// };

// console.log('Лог до');
// setInterval(logger, 2000, 2000)
// console.log('Лог после');

// ----------------Метод clearInterval(id)----------------

// const logger = time => {
//     console.log(`Лог каждый ${time}ms - ${Date.now()}`);
// };

// const intervalId = setInterval(logger, 2000, 2000);
// // идентификатор интервала
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//     clearInterval(intervalId);
//     // если хотим отчистить интервал, передаем его идентификатор
// }

// ------------------------Напоминалка-------------------------------



/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// /*
//  * Функции
//  */
// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add('is-visible');

//   timeoutId = setTimeout(() => {
//     console.log('Закрываем алерт автоматически чтобы не висел');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }


const refs = {
    daysRef: document.querySelector('[data-value="days"]'),
    hoursRef: document.querySelector('[data-value="hours"]'),
    minsRef: document.querySelector('[data-value="mins"]'),
    secsRef: document.querySelector('[data-value="secs"]'),

};

console.log(refs.daysRef);

class Timer {

}

const timer = {
    start() {
        // const currentDate = Date.now();
        const targetDate = new Date('December 1, 2020');


        setInterval(() => {
            const currentDate = Date.now();

            // const currentTime = Date.now();
            const deltaTime = targetDate - currentDate;
            const time = getTimeComponents(deltaTime);
            // const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            // console.log(currentTime);
            console.log(deltaTime);
            // console.log(`Days ${days}, ${hours}::${mins}:${secs}`);
            updateTimerInterface(time);
        }, 1000);
    },
};

timer.start();

// const targetDate = new Date('December 1, 2020');
// const deltaTime = targetDate - currentDate;
// console.log(date);

function pad(value) {
    return String(value).padStart(2, '0');
};

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
};

function updateTimerInterface({ days, hours, mins, secs }) {
    refs.daysRef.textContent = `${days}`;
    refs.hoursRef.textContent = `${hours}`;
    refs.minsRef.textContent = `${mins}`;
    refs.secsRef.textContent = `${secs}`;
};

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });