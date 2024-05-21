// Set your target date and time here
const targetDate = new Date("2024-05-21T13:00:00"); // Changed target date to May 21, 2024 at 1:00 PM

const countdown = document.getElementById('countdown');
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const linkElement = document.createElement('a'); // Create a link element
const para = document.getElementById('show');

const getTimeRemaining = () => {
  const today = new Date();
  const difference = targetDate.getTime() - today.getTime();

  // Calculate remaining days, hours, minutes, and seconds
  const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the countdown display
  daysSpan.textContent = remainingDays;
  hoursSpan.textContent = String(remainingHours).padStart(2, '0');
  minutesSpan.textContent = String(remainingMinutes).padStart(2, '0');
  secondsSpan.textContent = String(remainingSeconds).padStart(2, '0');

}

getTimeRemaining();
   

setInterval(getTimeRemaining, 1000); // Update the timer every second

