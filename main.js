const head = document.querySelector('.head');
const alertScreen = document.querySelector('.alert-screen');
const calculateButton = document.querySelector('.calc-btn');
const container = document.querySelector('.container');
const resultBox = document.querySelector('.playtime');

const playtimes = Array.from(document.querySelectorAll('[data-time]'));

const timesArray = []; //contains the timestamp of each video 

playtimes.forEach(playtime => {
    const time = playtime.dataset['time'];
    timesArray.push(time);
});

const seconds = playtimes
    .map(timestamp => timestamp.dataset.time)
    .map(timeCode => {
        const [mins, seconds] = timeCode.split(':').map(parseFloat);

        return (mins * 60) + seconds;
    })
    .reduce((total, vidseconds) => {
        return total + vidseconds;
    })

let secondsLeft = seconds;

let hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const totalTime = `${hours} : ${mins} : ${secondsLeft}`;
console.log(totalTime)

function disappearAlertScreen() {
    alertScreen.style.opacity = '0';
    container.style.opacity = '1';
    // container.style.filter = 'blur(0px)';
}

let flag = 0;

function showResult() {
    container.style.opacity = '0.1';
    alertScreen.style.opacity = '1';
    // container.style.filter = 'blur(15px)';

    resultBox.textContent = totalTime;
}
if (flag == 1)
    container.addEventListener('click', () => {
        alertScreen.style.opacity = '0';
        container.style.opacity = '1';
    })

flag++;


head.addEventListener('click', disappearAlertScreen);
calculateButton.addEventListener('click', showResult);
