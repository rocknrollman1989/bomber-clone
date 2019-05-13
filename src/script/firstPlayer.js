import HeroLogic from './heroLogic';
import actions from '../constants/actionConstants';

class FirstPlayer extends HeroLogic {
  constructor(name) {
    super(name);
    this.player.style.top = '15px';
    this.player.style.left = '15px';
  }

  playerGoForAWalk(keyPressed) {
    let action;
    Object.keys(keyPressed).forEach((key) => {
      switch (keyPressed[key]) {
        case 83:
          action = actions.ACTION_DOWN;
          break;
        case 68:
          action = actions.ACTION_RIGHT;
          break;
        case 65:
          action = actions.ACTION_LEFT;
          break;
        case 87:
          action = actions.ACTION_UP;
          break;
        case 32:
          super.createBomb(this.player);
          break;
        default: break;
      }
      if (action) super.playerGoToSomewhere(this.player, action);
    });
  }
}

export default FirstPlayer;
