import '../css/modules/hero_logic.css';
import actions from '../constants/actionConstants';
import PlayerBomb from './playerBomb';


class OurHero {
  constructor(heroName) {
    this.heroName = heroName;
    this.keyPressed = {};

    this.gameWindowToAddPlayer = document.getElementById('game_window');
    this.player = document.createElement('div');
    this.player.className = 'player_hero';
    window.addEventListener('keydown', event => this.isAnyKeyPressed(event));
    window.addEventListener('keyup', event => this.isAnyKeyUpped(event));
    this.gameWindowToAddPlayer.appendChild(this.player);
  }

  isAnyKeyPressed(event) {
    const { keyCode } = event;
    if (keyCode) {
      this.keyPressed[keyCode] = keyCode;
      this.playerGoForAWalk(this.keyPressed);
    }
  }

  isAnyKeyUpped(event) {
    const { keyCode } = event;
    if (keyCode) {
      delete this.keyPressed[keyCode];
      this.playerGoForAWalk(this.keyPresswed = {});
    }
  }

  playerGoToSomewhere(player, action) {
    const { innerHeight, innerWidth } = window;
    const { style } = player;

    switch (action) {
      case actions.ACTION_DOWN:
        if (this.getPxValue(style.top) < innerHeight - 45) style.top = this.getValueToWalk(style.top, '+');
        break;
      case actions.ACTION_RIGHT:
        if (this.getPxValue(style.left) < innerWidth - 45) style.left = this.getValueToWalk(style.left, '+');
        break;
      case actions.ACTION_LEFT:
        if (this.getPxValue(style.left) > 15) style.left = this.getValueToWalk(style.left, '-');
        break;
      case actions.ACTION_UP:
        if (this.getPxValue(style.top) > 15) style.top = this.getValueToWalk(style.top, '-');
        break;
      default: break;
    }
  }

  getPxValue(pxValue) {
    return parseFloat(pxValue);
  }

  getValueToWalk(pxValue, typeOfMathAction) {
    if (typeOfMathAction === '+') {
      return `${this.getPxValue(pxValue) + 1}px`;
    }
    return `${this.getPxValue(pxValue) - 1}px`;
  }

  createBomb(player) {
    const { top, left } = player.style;
    const putTheBomb = new PlayerBomb(top, left);
  }
}

export default OurHero;
