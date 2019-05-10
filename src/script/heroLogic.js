import '../css/modules/hero_logic.css';

const heroLogick = (amountOfPlayers) => {
  const gameWindowToAddPlayer = document.getElementsByClassName('game_window')[0];
  const player = document.createElement('div');
  player.className = 'player_hero';
  gameWindowToAddPlayer.appendChild(player);

  player.style.top = '150px';
  console.log(player);
  // class OurHero {
  //   constructor(heroName) {
  //     this.name = heroName;
  //   }
  // }
};

export default heroLogick;
