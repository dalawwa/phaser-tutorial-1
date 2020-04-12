import Phaser from 'phaser';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

var game = new Phaser.Game(config);

    function preload () {
      this.load.image('sky', 'assets/sky.png');
      this.load.image('ground', 'assets/platform.png');
      this.load.image('star', 'assets/star.png');
      this.load.image('bomb', 'assets/bomb.png');
      this.load.spritesheet('dude',
          'assets/dude.png',
          { frameWidth: 32, frameHeight: 48 }
      );
      console.log('preload', this)
    }

function create ()
{
  this.add.image(400, 300, 'sky');

  emitter.startFollow(logo);
}
