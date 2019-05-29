import {
  GAME_SQUARE_WIDTH, GAME_SQUARE_HEIGHT,
} from '../../../constants/gameConstants';
import './hero.css';
import { actions } from '../../../constants/actionConstants';

class Hero {
  constructor(heroInfo) {
    this.heroPerson = document.createElement('div');
    this.heroPerson.id = 'heroPerson';
    this.heroPerson.style.width = `${GAME_SQUARE_WIDTH}px`;
    this.heroPerson.style.height = `${GAME_SQUARE_HEIGHT}px`;
    this.heroPerson.style.top = `${heroInfo.top}px`;
    this.heroPerson.style.left = `${heroInfo.left}px`;
    this.heroPerson.innerHTML = heroInfo.name;
    this.firstPlayerAction = heroInfo.firstPlayerAction;
    this.arrayOfKeys = [];
    if (heroInfo.secondPlayerAction) this.secondPlayerAction = heroInfo.secondPlayerAction;
    document.addEventListener('keydown', event => this.playersAction(event));
    document.addEventListener('keyup', event => this.playersAction(event));
    document.body.appendChild(this.heroPerson);
    setInterval(() => {
      this.playersMovie();
    }, 20);
  }

  playersAction(event) {
    if (event.type === 'keydown' && this.arrayOfKeys.indexOf(event.keyCode) === -1) {
      this.arrayOfKeys.push(event.keyCode);
    }
    if (event.type === 'keyup' && this.arrayOfKeys.indexOf(event.keyCode) !== -1) {
      const keyToDelete = this.arrayOfKeys.indexOf(event.keyCode);
      this.arrayOfKeys.splice(keyToDelete, 1);
    }
  }

  playersMovie() {
    const {
      KEY_GO_LEFT, KEY_GO_RIGHT, KEY_GO_DOWN, KEY_GO_UP, SET_BOMB,
    } = this.firstPlayerAction || this.secondPlayerAction;
    this.arrayOfKeys.forEach((key) => {
      switch (key) {
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
    });
  }
}

export default Hero;
