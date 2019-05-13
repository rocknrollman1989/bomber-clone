import HeroLogic from './heroLogic';
import actions from '../constants/actionConstants';

class FirstPlayer extends HeroLogic {
  constructor(name) {
    super(name);
    this.player.style.top = '15px';
    this.player.style.left = '15px';
  }

  playerGoForAWalk(event) {
    let action;
    switch (event.keyCode) {
      case 115:
        action = actions.ACTION_DOWN;
        break;
      case 97:
        action = actions.ACTION_RIGHT;
        break;
      case 100:
        action = actions.ACTION_LEFT;
        break;
      case 119:
        action = actions.ACTION_UP;
        break;
      default: break;
    }
    if (action) super.playerGoToSomewhere(this.player, action);
  }
}

export default FirstPlayer;
