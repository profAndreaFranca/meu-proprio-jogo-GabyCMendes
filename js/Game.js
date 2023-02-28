class Game {
  constructor() {}

  start() {
    console.log("start...")
    player = new Player();
    form = new Form();
    form.display();
    //ARRAY DE POSIÇÕES
    // var obstaclesPositions = [
    //   { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
    //   { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
    //   { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
    //   { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
    //   { x: width / 2, y: height - 2800, image: obstacle2Image },
    //   { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
    //   { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
    //   { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
    //   { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
    //   { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
    //   { x: width / 2, y: height - 5300, image: obstacle1Image },
    //   { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
    // ];
  }
  //MÉTODO ADDSPRITES

  addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;
      if (positions.length > 0) {
        x = positions[i].x;
        y = positions[i].y;
        spriteImage = positions[i].image;
      } else {
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      }

      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }

  handleElements() {
    form.hide();
    form.title.position(40, 50);
    form.title.class("resetText2");
  }

  play() {
    //dentro do play
    console.log("play...")
    this.handleElements();
    this.countTime();
    player.playerControls();
    this.moveCity()
    var cX = 0;
    // while (cidade.position.x >= 100) {
    //   cidade.position.x -= 1;
    //   if (cidade.position.x <= 100) {
    //     cidade.position.x = width / 2;
    //   }
    // }

    drawSprites();
    textSize(30);
    text(tempo, width - 100, 50);
  }

  moveCity(){
    if (keyIsDown(RIGHT_ARROW)) {
      cidade.position.x -= 2
    }
    if (keyIsDown(LEFT_ARROW)) {
      cidade.position.x += 2
    }
    // if (cidade.position.x >= 100) {
    //   cidade.position.x -= 1;
    // }
    // if (cidade.position.x <= 100) {
    //       cidade.position.x = width / 2;
    // }
  }

  countTime() {
    tempo = tempo + Math.round(getFrameRate() / 120);
  }

  handlePowerCoins(index) {
    cars[index - 1].overlap(powerCoins, function (collector, collected) {
      player.score += 21;
      player.update();
      //o sprite é coletado no grupo de colecionáveis que desencadeou
      //o evento
      collected.remove();
    });
  }

  showLife() {
    push(); //inicia uma nova configuração
    image(lifeImage, width / 2 - 130, height - player.positionY - 300, 20, 20);
    fill("white");
    rect(width / 2 - 100, height - player.positionY - 300, 185, 20);
    fill("#f50057");
    rect(width / 2 - 100, height - player.positionY - 300, player.life, 20);
    noStroke();
    pop(); // volta para uma configuração antiga
  }

  showFuelBar() {
    //seu código aqui...
    push();
    image(fuelsImg, width / 2 - 130, height - player.positionY - 250, 20, 20);
    fill("white");
    rect(width / 2 - 100, height - player.positionY - 250, 185, 20);
    fill("gold");
    rect(width / 2 - 100, height - player.positionY - 250, player.fuel, 20);
    noStroke();
    pop();
  }

  showRank() {
    swal({
      //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      title: `Incrível!${"\n"}${player.rank}º lugar`,
      text: "Você alcançou a linha de chegada com sucesso!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok",
    });
  }

  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Oops você perdeu a corrida!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Obrigado por jogar",
    });
  }

  handleObstacleCollision(index) {
    if (cars[index - 1].collide(obstacles)) {
      if (this.leftKeyActive) {
        player.positionX += 100;
      } else {
        player.positionX -= 100;
      }

      //Reduzindo a vida do jogador
      if (player.life > 0) {
        player.life -= 185 / 4;
      }

      player.update();
    }
  }
}
