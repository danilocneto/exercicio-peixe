var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 490,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('tubarao', 'assets/peixes/tubarao.png');

    this.load.image('baiacu', 'assets/peixes/baiacu_lado.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');
}

function create() {
    this.add.image(400, 200, 'mar');
    this.add.image(100, 200, 'baiacu');
    this.add.image(670, 450, 'logo').setScale(0.5);

    peixinho = this.add.image(400, 200, 'tubarao').setOrigin(0.5, 0.5)
    peixinho.setFlip(true, false);
}

function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
