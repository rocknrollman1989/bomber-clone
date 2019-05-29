import {
  GAME_SQUARE_WIDTH, GAME_SQUARE_HEIGHT,
} from '../../../constants/gameConstants';
import './hero.css';
import { actions } from '../../../constants/actionConstants';

class Hero {
  constructor(heroInfo) {
    this.name = heroInfo.name;
    this.heroPerson = document.createElement('div');
    this.heroPerson.id = 'heroPerson';
    this.heroPerson.style.width = `${GAME_SQUARE_WIDTH}px`;
    this.heroPerson.style.height = `${GAME_SQUARE_HEIGHT}px`;
    this.heroPerson.style.top = `${heroInfo.top}px`;
    this.heroPerson.style.left = `${heroInfo.left}px`;
    this.firstPlayerAction = heroInfo.firstPlayerAction;
    if (heroInfo.secondPlayerAction) this.secondPlayerAction = heroInfo.secondPlayerAction;
    document.addEventListener('keydown', event => this.playersAction(event));
    document.body.appendChild(this.heroPerson);
  }

  playersAction(event) {
    const {
      KEY_GO_LEFT, KEY_GO_RIGHT, KEY_GO_DOWN, KEY_GO_UP, SET_BOMB,
    } = this.firstPlayerAction || this.secondPlayerAction;
    switch (event.keyCode) {
      case KEY_GO_LEFT: this.playerIsMoving(actions.ACTION_LEFT, this.heroPerson);
        break;
      case KEY_GO_RIGHT: this.playerIsMoving(actions.ACTION_RIGHT, this.heroPerson);
        break;
      case KEY_GO_DOWN: this.playerIsMoving(actions.ACTION_DOWN, this.heroPerson);
        break;
      case KEY_GO_UP: this.playerIsMoving(actions.ACTION_UP, this.heroPerson);
        break;
      case SET_BOMB: this.playerIsMoving(actions.SET_BOMB, this.heroPerson);
        break;
      default: break;
    }
  }
}


export default Hero;
