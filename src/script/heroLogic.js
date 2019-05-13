import '../css/modules/hero_logic.css';
import actions from '../constants/actionConstants';


class OurHero {
  constructor(heroName) {
    this.heroName = heroName;

    const gameWindowToAddPlayer = document.getElementById('game_window');
    this.player = document.createElement('div');
    this.player.className = 'player_hero';
    window.addEventListener('keypress', event => this.playerGoForAWalk(event));
    gameWindowToAddPlayer.appendChild(this.player);
  }

  playerGoToSomewhere(player, action) {
    const { style } = player;
    switch (action) {
      case actions.ACTION_DOWN:
        style.top = `${this.getPxValue(style.top) + 1}px`;
        break;
      case actions.ACTION_RIGHT:
        style.left = `${this.getPxValue(style.left) - 1}px`;
        break;
      case actions.ACTION_LEFT:
        style.left = `${this.getPxValue(style.left) + 1}px`;
        break;
      case actions.ACTION_UP:
        style.top = `${this.getPxValue(style.top) - 1}px`;
        break;
      default: break;
    }
  }

  getPxValue(pxValue) {
    return parseFloat(pxValue);
  }
}

export default OurHero;
