let app = new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns.unshift({
        isPlayer: true,
        text: 'Start game',
      });
    },
    stopGame: function () {
      this.gameIsRunning = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns.unshift({
        isPlayer: false,
        text: 'Stop game',
        
      });
    },
    attack: function () {
      let damage = this.calculDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + damage,
      });
      this.checkWin();
      this.monsterAttack();
    },
    specialAttack: function () {
      let damage = this.calculDamage(10, 20);
      this.monsterHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hit hard monster for ' + damage,
      });
      this.monsterAttack()
    },
    monsterAttack: function () {
      let damage = this.calculDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hit player for ' + damage,
      });
      
    },
    heal: function () {
      let maxHealth = this.playerHealth + 10;
      maxHealth = maxHealth <= 100 ? maxHealth : 100;
      this.playerHealth = maxHealth;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10',
      });
    },
    calculDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        if (confirm('You lost! Wanna new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        if (confirm('Congratulation! You won. Play again?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
