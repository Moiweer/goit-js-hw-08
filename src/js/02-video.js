import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
 const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime)
    console.log(currentTime);
}
const getCurrentTime = localStorage.getItem('videoplayer-current-time');

player
    .setCurrentTime(getCurrentTime)
    .then(function (seconds) { })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
            default:
            break;
    }
});
