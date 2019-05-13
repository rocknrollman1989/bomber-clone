import '../css/modules/player_bomb.css';

export default class PlayerBomb {
  constructor(top, left) {
    this.bomb = document.createElement('div');
    this.bomb.className = 'heroes_bomb';
    this.bomb.style.top = top;
    this.bomb.style.left = left;
    this.gameWindowToAddPlayer = document.getElementById('game_window');
    this.gameWindowToAddPlayer.appendChild(this.bomb);
    this.removeBomb();
  }

  removeBomb() {
    setTimeout(() => this.gameWindowToAddPlayer.removeChild(this.bomb), 3000);
  }
}
