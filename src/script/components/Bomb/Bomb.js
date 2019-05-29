import './bomb.css';
import {
  GAME_SQUARE_WIDTH, GAME_SQUARE_HEIGHT,
} from '../../../constants/gameConstants';

class Bomb {
  constructor(heroPosition) {
    this.flamePositionLeft = `${Number.parseFloat(heroPosition.left) + GAME_SQUARE_HEIGHT / 2}px`;
    this.flamePositionTop = `${Number.parseFloat(heroPosition.top) + GAME_SQUARE_WIDTH / 2}px`;
    this.bomb = document.createElement('div');
    this.bomb.id = 'bomb';
    this.bomb.style.top = `${Number.parseFloat(heroPosition.top) + GAME_SQUARE_WIDTH / 2 - 10}px`;
    this.bomb.style.left = `${Number.parseFloat(heroPosition.left) + GAME_SQUARE_HEIGHT / 2 - 10}px`;
    document.body.appendChild(this.bomb);
    setTimeout(() => this.explosionBomb(), 3000);
  }

  explosionBomb() {
    const longitudFlame = document.createElement('div');
    longitudFlame.className = 'flame longitudFlame';
    const verticalFlame = document.createElement('div');
    verticalFlame.className = 'flame verticalFlame';
    longitudFlame.style.width = '60px';
    verticalFlame.style.width = '60px';
    this.bomb.appendChild(longitudFlame);
    this.bomb.appendChild(verticalFlame);
    const coordinats = {
      left: Number.parseFloat(this.flamePositionLeft),
      top: Number.parseFloat(this.flamePositionTop),
    };
    this.bombIsExpload(coordinats, 60);
    setTimeout(() => {
      document.body.removeChild(this.bomb);
    }, 500);
  }
}

export default Bomb;
