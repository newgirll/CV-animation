
const moveFigure = () => {
    const leftLeg = $('#leftLeg');
    const rightLeg = $('#rightLeg');
    const box = $('.figure__box');

  
    box.animate({
        display: 'block',
        transform: 'rotate(100deg)',
        top: '70%',
        left: '10%',
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
  const cloud = $('.figure__class--cloud');
    startBtn.on('click', () => showFigure());
    startLink.on('click', () => {
        moveLink.css('opacity', '1');
        about.css('display', 'flex');
        about.css('align-items', 'flex-start');
        cloud.text("Kiedyś moje życie kręciło się wokół piłki do siatkówki. Byłam z nią związana od 4 klasy podstawówki z małymi przerwami i wiele się od niej nauczyłam. Znam smak zarówno porażki jak i zwycięstwa. W tym okresie poznałam masę cudwnych osób i nawiązałam przyjaźnie, które trwają do dzisiaj. Siatkówa wpoiła we mnie zadasy fair-play, współpracy zespołowej.")
        
    })
    moveLink.on('click', () => {
        const choice = $('#choiceSec');
        about.css('display', 'none');
        choice.css('display', 'block');
        cloud.text('A teraz zdecyduj, którą drogę wybierasz. Traditional, czy funny one?');

    });


}

export default startGame;
