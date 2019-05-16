import './game_window.css';

class GameWindow {
  constructor() {
    this.displayHeight = window.innerHeight;
    this.displayWight = window.innerWidth;

    const gameWindow = document.createElement('div');
    gameWindow.id = 'game_window';
    gameWindow.style.width = `${this.displayWight}px`;
    gameWindow.style.height = `${this.displayHeight}px`;
    document.body.appendChild(gameWindow);
    this.print();
  }

  print() {
    console.log(this.displayHeight);
  }
}

// class CreateObstacles {
//   constructor() {

//   }
// }

export default GameWindow;
