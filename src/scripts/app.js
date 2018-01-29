
import startGame from './start.js';

$((function(){
    const startBtn = $('#btnStart');
    const sec = $('.start');
    startGame(startBtn,sec );
    console.log($('.start'));

    const moveLegs = () => {
        const leftLeg = $('#leftLeg');
        const rightLeg = $('#rightLeg');
        const box = $('.about__box');
        console.log(leftLeg)
  
        box.animate({
            // transform: 'rotate(90deg)',
            opacity: '1',
            left: '70%'
        }, 5000)
    }

    moveLegs();
}()));

