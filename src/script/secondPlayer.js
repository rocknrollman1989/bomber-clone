import HeroLogic from './heroLogic';
import actions from '../constants/actionConstants';

class SecondPlayer extends HeroLogic {
  constructor(name) {
    super(name);
    const { innerHeight, innerWidth } = window;
    this.player.style.top = `${innerHeight - 45}px`;
    this.player.style.left = `${innerWidth - 45}px`;
  }

  playerGoForAWalk(keyPressed) {
    let action;
    Object.keys(keyPressed).forEach((key) => {
      switch (keyPressed[key]) {
        case 40:
          action = actions.ACTION_DOWN;
          break;
        case 39:
          action = actions.ACTION_RIGHT;
          break;
        case 37:
          action = actions.ACTION_LEFT;
          break;
        case 38:
          action = actions.ACTION_UP;
          break;
        default: break;
      }
      if (action) super.playerGoToSomewhere(this.player, action);
    });
  }
}

export default SecondPlayer;
