class Form {
  constructor() {
    this.boyButton = createButton("boy");
    this.title = createElement("h1", "nome do jogo");
    this.greeting = createElement("h2");
    this.girlButton = createButton("girl");
    this.playButton = createButton("play");
  }

  //posicionando os elementos
  setElementsPosition() {
    this.title.position(120, 0);
    this.girlButton.position(width / 2 - 250, height / 2 - 20);
    this.boyButton.position(width / 2 + 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.playButton.position(width / 2 - 100, height / 2 + 100);
  }

  setElementsStyle() {
    this.title.class("resetText");
    this.boyButton.class("customButton");
    this.girlButton.class("customButton");
    this.greeting.class("greeting");
    this.playButton.class("customButton");
    this.playButton.hide();
  }

  handleMousePressed() {
    this.boyButton.mousePressed(() => {
      this.boyButton.hide();
      this.girlButton.hide();
      var message = `vamos acordar o João, <br>`;
      this.handlePlayButton(message)
      //this.greeting.html(message);
    });

    this.girlButton.mousePressed(() => {
      this.boyButton.hide();
      this.girlButton.hide();
      var message = `vamos acordar a Gabi, <br>`;
      this.handlePlayButton(message)
      //this.greeting.html(message);
    });
  }

  handlePlayButton(message){
    this.greeting.html(message);
    this.playButton.show();
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      gameState = 1;
    });
  }

  hide() {
    this.greeting.hide();
    this.boyButton.hide();
    this.girlButton.hide();
    this.playButton.hide();
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
