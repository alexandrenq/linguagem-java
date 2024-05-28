//Variáveis da boliha 
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;


//Variáveis do oponente 
let xraqueteOponente = 585;
let yraqueteOponente = 150;

//velocidde da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//Variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo 
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
   createCanvas(600, 400);
     
 }  
  
  function draw() {
    background("green");
    mostraBolinha();
    movimentoBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xraqueteOponente, yRaquete);
    mostraRaquete(xraqueteOponente, yraqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar()
    marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha() {
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha; 
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
    
  }
  
  

}


function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha + raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
  
}


function movimentaRaqueteOponente() {
   if (keyIsDown(87)) {
     yraqueteOponente -= 10;
   }
  if (keyIsDown(83)){
    yraqueteOponente += 10;
  }
  
}


function incluiPlacar() {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}


function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
if(xBolinha < 10) {
  pontosDoOponente += 1;
  ponto.play();
}
}


function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}
      
    
