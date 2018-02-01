
const moveFigure = () => {
    const leftLeg = $('#leftLeg');
    const rightLeg = $('#rightLeg');
    const box = $('.figure__box');

  
    box.animate({
        display: 'block',
        transform: 'rotate(100deg)',
        top: '60%',
        left: '30%',
        opacity: 1
    }, 4000)

  
        
}

    

const showFigure = () => {
    const sec = $('.start');
    sec.css('display', 'none');

    const figure = $('#figure');
   
    moveFigure();
  
  
}

const startGame = () => {
  const startBtn = $('#btnStart');
  const about = $('#aboutSec');
  const startLink = $('#startLink');
  const moveLink = $('#moveLink');
    startBtn.on('click', () => showFigure());
    startLink.on('click', () => {
        moveLink.css('opacity', '1');
        about.css('display', 'flex');
        about.css('align-items', 'flex-start');
        
    })
    moveLink.on('click', () => {
        const choice = $('#choiceSec');
        console.log(choice);
        about.css('display', 'none');
        choice.css('display', 'block');

    });


}

export default startGame;
