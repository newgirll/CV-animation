
const moveFigure = () => {
    const leftLeg = $('#leftLeg');
    const rightLeg = $('#rightLeg');
    const box = $('.figure__box');

  
    box.animate({
        display: 'block',
        transform: 'rotate(100deg)',
        top: '50%',
        left: '40%',
        opacity: 1
    }, 4000)
        
}

    

const showFigure = () => {
    const sec = $('.start');
    sec.css('display', 'none');

    const figure = $('#figure');
    const about = $('#aboutSec');
    moveFigure();
    about.css('display', 'flex');
    about.css('align-items', 'flex-end');
  
}

const startGame = () => {
  const startBtn = $('#btnStart');
    startBtn.on('click', () => showFigure());


}

export default startGame;
