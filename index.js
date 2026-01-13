const timeEl = document.getElementById('time');
const timeformatEl = document.getElementById('timeformat');
const dateEl = document.getElementById('date');

document.addEventListener('DOMContentLoaded', () => {
    showTime(); // Run immediately to avoid 1-second delay
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    // Time Logic
    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // Format AM/PM
    const ampm = hr >= 12 ? 'PM' : 'AM';

    // Convert 24hr to 12hr
    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'

    // Pad Zeroes
    hr = hr < 10 ? `0${hr}` : hr;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    timeEl.innerHTML = `${hr}:${mins}:${secs}`;
    timeformatEl.innerHTML = ampm;

    // Date Logic
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString(undefined, options);

    dateEl.innerHTML = dateString;
}
