class Player {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
    this.score = 0;
    this.life = 185;
    this.player = createSprite(this.positionX, this.positionY);
  }

  playerControls() {
    if (keyIsDown(UP_ARROW)) {
      this.player.position.y -= 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.player.position.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.player.position.x += 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.player.position.y += 5;
    }
  }
}
