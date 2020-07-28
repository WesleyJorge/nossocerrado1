/*
  LINKS PARA O VIDEO:
  PARTE 1: https://youtu.be/OLgc_r6IYgU
  PARTE 2: https://youtu.be/9DCPSMMWwJg
*/


var x = 290;         //BLOCO DE SELEÇÃO MENU
var y = 90;
var opcao = 1;
var tela = 0;

var z = 300;        //BLOCO TELA FINAL
var w = 325;

var h = 240;        //BLOCO GAMEOVER
var d = 345;

var pontos = 0;      //BARRA DE PONTOS e NIVEL
var nivel = 1;
var barradepontos = 9997;
var vidas = 3;

var xEspaco = 150, yEspaco = 100, rEspaco = 50;      //BLOCOS
var xEspaco2 = 350, yEspaco2 = 100, rEspaco2 = 50;
var xEspaco3 = 550, yEspaco3 = 100, rEspaco3 = 50;

var posXI = 100;      //PLANTA
var posYI = 400;
var raio = 50;

var posXI2 = 300;    //GAFANHOTO
var posYI2 = 400;
var raio2 = 50;

var posXI3 = 430;    //RÃ 
var posYI3 = 400;
var raio3 = 50;

var xEspaco4 = 50, yEspaco4 = 100, rEspaco4 = 50;      //BLOCOS FASE 2
var xEspaco5 = 250, yEspaco5 = 100, rEspaco5 = 50;
var xEspaco6 = 450, yEspaco6 = 100, rEspaco6 = 50;
var xEspaco7 = 650, yEspaco7 = 100, rEspaco7 = 50;

var posXI4 = 100;      //CAPIM
var posYI4 = 400;
var raio4 = 50;

var posXI5 = 300;    //PREÁ
var posYI5 = 400;
var raio5 = 50;

var posXI6 = 420;    //JARARACA
var posYI6 = 400;
var raio6 = 50;

var posXI7 = 650;    //Decompositor1
var posYI7 = 400;
var raio7 = 50;


var xEspaco8 = 50, yEspaco8 = 100, rEspaco8 = 50;      //BLOCOS FASE 3
var xEspaco11 = 250, yEspaco11 = 100, rEspaco11 = 50;
var xEspaco9 = 450, yEspaco9 = 100, rEspaco9 = 50;
var xEspaco10 = 650, yEspaco10 = 100, rEspaco10 = 50;

var posXI8 = 540;      //ARVORE  
var posYI8 = 400;
var raio8 = 50;

var posXI11 = 420;    //SABIÁ    
var posYI11 = 400;
var raio11 = 50;

var posXI9 = 300;    //LOBOGUARA  
var posYI9 = 400;
var raio9 = 50;

var posXI10 = 180;    //Decompositor2  
var posYI10= 400;
var raio10 = 50;

let img;
function preload(){
  img = loadImage('Planta1.jpg');    //IMG FASE 1
  img2 = loadImage('gafanhoto.jpg');
  img3 = loadImage('RA.jpg');
  img4 = loadImage('seta2.png');
  img5 = loadImage('Franc.jpg');
  img6 = loadImage('Wes.jpg');
  
  img10 = loadImage("capim1.jpg");    // IMG FASE 2
  img11 = loadImage("prea.jpg");
  img12 = loadImage("jararaca.jpeg");
  img13 = loadImage("Decompositor1.jpg");
  
  img14 = loadImage("arvore.jpg");    //IMG FASE 3
  img15 = loadImage("loboguara1.jpg");
  img16 = loadImage("Decompositor2.jpg");
  img17 = loadImage("sabia.jpg");
  
  img18 = loadImage("floresta1.png");
}

function setup(){
  createCanvas(800, 500);
  imageMode(CENTER);
  image(img, 50, 150, 80,80);       //FASE 1
  image(img2, 150, 180, 80, 80);
  image(img3, 200, 220, 80, 80);
  
  image(img10, 50, 150, 80, 80);    //FASE 2
  image(img11, 150, 180, 80, 80);
  image(img12, 200, 220, 80, 80);
  image(img13, 250, 250, 80, 80);
  
  image(img14, 50, 150, 80, 80);    //FASE 3
  image(img15, 150, 180, 80, 80);
  image(img16, 200, 220, 80, 80);
  image(img17, 250, 250, 80, 80);
  
}

function draw() {
  if(tela == -1){
    gameover();
  }
  if(tela == 0){
  background("#F48C06");
    menu();
  }
  if(tela == 1){
  background("#DDA15E");
    fase1();
  }
  if(tela == 2){
  background("#2EC4B6");
    instrucoes();
  }
  if(tela == 3){
  background("#0081A7");
    creditos();
  }
  if(tela == 5){     //NIVEIS
    fase2();
  }
  if(tela == 6){
    fase3(); 
  }
  if(tela == 7){
    telafinal();
  }
}

function menu(){
  rect(x, y, 180, 40);
  textSize(44);
  text("NOSSO CERRADO", 200, 50);
  textSize(32);
  text("Jogar", 300, 120);
  text("Instruções", 300, 200);
  text("Créditos", 300, 280);
  image(img18, 10, 400, 1200, 200);
  image(img18, 250, 400, 1200, 200);
}

function keyPressed(){             
  if(key == "ArrowUp" && y>120){
    y = y-80;
    opcao = opcao-1;
  }
  if(key == "ArrowDown" && y<180){
    y = y+80;
    opcao = opcao+1;
  }
  if(key == "Enter"){
    tela = opcao;
  }
  if(key == "Escape"){
    tela = 0;
  } 
}

function instrucoes(){
  textSize(38);
  text("INSTRUÇÕES", 270, 50);
  textSize(25);
  text("Público alvo: Crianças do ensino fundamental 1.", 20, 100);
  textSize(25);
  text("Matéria: Ciências 4º ano.", 20, 150);
  textSize(25);
  text("BNCC: (EF04CI04) Analisar e construir cadeias alimentares simples.", 20, 200);
  textSize(25);
  text("O jogo consiste na construção de uma cadeira alimentar, com os ani-",20,250);
  textSize(25);
  text("mais do cerrado brasileiro.", 20, 275);
}

function creditos(){
  textSize(30);
  text("CRÉDITOS", 20, 50);
  textSize(30);
  image(img5, 350, 100, 160, 160);
  text("Educadora: Francisca Chagas da Silva Ferreira", 50, 225);
  textSize(30);
  image(img6, 350, 320, 160, 160);
  text("Programador: Wesley Jorge da Silva Ferreira", 50, 450);
  
}


function gameover(){
  background("#D62828")
  rect(h, d, 280, 50);
  textSize(32);
  text("TENTE NOVAMENTE!!", 220, 50);
  textSize(30);
  text("VOCÊ CONSEGUE!", 245, 150);
  textSize(25);
  text("TENTAR NOVAMENTE", 250, 380);
  text("MENU INICIAL", 300, 450);
}


function fase1(){
  textSize(20);
  text("Vidas: "+vidas, 10, 50);
  text("Pontos = " + pontos, 350, 50);
  textSize(20);
  text("Produtor: ", 50,330);
  textSize(20);
  text("Consumidores: ", 250, 330);
  rect(xEspaco, yEspaco, 2*rEspaco, 2*rEspaco);
  rect(xEspaco2, yEspaco2, 2*rEspaco2, 2*rEspaco2);
  rect(xEspaco3, yEspaco3, 2*rEspaco3, 2*rEspaco3);
  image(img4, 300, 150, 80, 80);
  image(img4, 500, 150, 80, 80);
  if(mouseIsPressed && dist(posXI, posYI, mouseX, mouseY) < raio){
    posXI = mouseX;
    posYI = mouseY;
}
  else{
      if(mouseIsPressed && dist(posXI2, posYI2, mouseX, mouseY) < raio2){
    posXI2 = mouseX;
    posYI2 = mouseY;
    }
    else{
        if(mouseIsPressed && dist(posXI3, posYI3, mouseX, mouseY) < raio3){
    posXI3 = mouseX;
    posYI3 = mouseY;
    }
  }
}
  image(img, posXI, posYI, 2*raio, 2*raio);
  image(img2, posXI2, posYI2, 2*raio2, 2*raio2);
  image(img3, posXI3, posYI3, 2*raio3, 2*raio3);
  if(dist(xEspaco+50, yEspaco+25, posXI, posYI-25) < rEspaco + raio-25){
      posXI = 200;
      posYI = 150;
      pontos = 2500;
  }
  else{
      if(dist(xEspaco2+50, yEspaco2+25, posXI, posYI-25) < rEspaco2 + raio-25 || dist(xEspaco3+50, yEspaco3+25, posXI, posYI-25) < rEspaco3 + raio-25){
        posXI = 100;
        posYI = 400;
        vidas--;
      }
  }
  if(dist(xEspaco2+50, yEspaco2+25, posXI2, posYI2-25) < rEspaco2 + raio2-25){
      posXI2 = 400;
      posYI2 = 150;
      pontos = pontos+2500;
  }
  else{
      if(dist(xEspaco+50, yEspaco+25, posXI2, posYI2-25) < rEspaco + raio2-25 || dist(xEspaco3+50, yEspaco3+25, posXI2, posYI2-25) < rEspaco3 + raio2-25){
        posXI2 = 300;
        posYI2 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco3+50, yEspaco3+25, posXI3, posYI3-25) < rEspaco3 + raio3-25){
      posXI3 = 600;
      posYI3 = 150;
      pontos = pontos+5000;
  }
  else{
      if(dist(xEspaco+50, yEspaco+25, posXI3, posYI3-25) < rEspaco + raio3-25 || dist(xEspaco2+50, yEspaco2+25, posXI3, posYI3-25) < rEspaco2 + raio2-25){
        posXI3 = 430;
        posYI3 = 400;
        vidas--;
      }
  }
  if( pontos >= barradepontos){     //NIVEL
    tela = tela+4;
    barradepontos = barradepontos+2000;
  }
  if(vidas<1){
    gameover();
  }
}

                      //FASE 2
function fase2(){
  background("#2A9D8F");
  textSize(20);
  text("Vidas: "+vidas, 10, 50);
  text("Pontos = "+pontos, 350, 50);
  textSize(20);
  text("Produtor: ", 50,330);
  textSize(20);
  text("Consumidores: ", 250, 330);
  textSize(20);
  text("Decompositores: ", 600, 330);
  rect(xEspaco4, yEspaco4, 2*rEspaco4, 2*rEspaco4);
  rect(xEspaco5, yEspaco5, 2*rEspaco5, 2*rEspaco5);
  rect(xEspaco6, yEspaco6, 2*rEspaco6, 2*rEspaco6);
  rect(xEspaco7, yEspaco7, 2*rEspaco7, 2*rEspaco7);
  image(img4, 200, 150, 80, 80);
  image(img4, 400, 150, 80, 80);
  image(img4, 600, 150, 80, 80);
  if(mouseIsPressed && dist(posXI4, posYI4, mouseX, mouseY) < raio4){
    posXI4 = mouseX;
    posYI4 = mouseY;
}
  else{
      if(mouseIsPressed && dist(posXI5, posYI5, mouseX, mouseY) < raio5){
    posXI5 = mouseX;
    posYI5 = mouseY;
    }
    else{
        if(mouseIsPressed && dist(posXI6, posYI6, mouseX, mouseY) < raio6){
    posXI6 = mouseX;
    posYI6 = mouseY;
    }
    else{
        if(mouseIsPressed && dist(posXI7, posYI7, mouseX, mouseY) < raio7){
    posXI7 = mouseX;
    posYI7 = mouseY;
    }
    }
  }
}
  image(img10, posXI4, posYI4, 2*raio4, 2*raio4);
  image(img11, posXI5, posYI5, 2*raio5, 2*raio5);
  image(img12, posXI6, posYI6, 2*raio6, 2*raio6);
  image(img13, posXI7, posYI7, 2*raio7, 2*raio7);
  if(dist(xEspaco4+50, yEspaco4+25, posXI4, posYI4-25) < rEspaco4 + raio4-25){
      posXI4 = 100;
      posYI4 = 150;
      pontos = 2500;
  }
  else{
      if(dist(xEspaco5+50, yEspaco5+25, posXI4, posYI4-25) < rEspaco5 + raio5-25 || dist(xEspaco6+50, yEspaco6+25, posXI4, posYI4-25) < rEspaco6 + raio6-25 || dist(xEspaco7+50, yEspaco7+25, posXI4, posYI4-25) < rEspaco7 + raio7-25){
        posXI4 = 100;
        posYI4 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco5+50, yEspaco5+25, posXI5, posYI5-25) < rEspaco5 + raio5-25){
      posXI5 = 300;
      posYI5 = 150;
      pontos = pontos+2500;
  }
  else{
      if(dist(xEspaco4+50, yEspaco4+25, posXI5, posYI5-25) < rEspaco4 + raio5-25 || dist(xEspaco6+50, yEspaco6+25, posXI5, posYI5-25) < rEspaco6 + raio5-25 || dist(xEspaco7+50, yEspaco7+25, posXI5, posYI5-25) < rEspaco5 + raio5){
        posXI5 = 300;
        posYI5 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco6+50, yEspaco6+25, posXI6, posYI6-25) < rEspaco6 + raio6-25){
      posXI6 = 500;
      posYI6 = 150;
      pontos = pontos+2500;
  }
  else{
      if(dist(xEspaco4+50, yEspaco4+25, posXI6, posYI6-25) < rEspaco4 + raio6-25 || dist(xEspaco5+50, yEspaco5+25, posXI6, posYI6-25) < rEspaco5 + raio5-25 || dist(xEspaco7+50, yEspaco7+25, posXI6, posYI6-25) < rEspaco7 + raio7){
        posXI6 = 430;
        posYI6 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco7+50, yEspaco7+25, posXI7, posYI7-25) < rEspaco7 + raio7-25){
      posXI7 = 700;
      posYI7 = 150;
      pontos = pontos+4500;
  }
  else{
      if(dist(xEspaco4+50, yEspaco4+25, posXI7, posYI7-25) < rEspaco4 + raio7-25 || dist(xEspaco5+50, yEspaco5+25, posXI7, posYI7-25) < rEspaco5 + raio5-25 || dist(xEspaco6+50, yEspaco6+25, posXI7, posYI7-25) < rEspaco6 + raio6-25){
        posXI7 = 650;
        posYI7 = 400;
        vidas--;
      }
  }
  if( pontos >= barradepontos){     //NIVEL
    tela = tela+1;
    barradepontos = barradepontos+2000;
  }
  if(vidas<1){
    gameover();
  }

}


                      //FASE 3
function fase3(){
  background("#FFC857");
  textSize(20);
  text("Vidas: "+vidas, 10, 50);
  text("Pontos = "+pontos, 350, 50);
  rect(xEspaco8, yEspaco8, 2*rEspaco8, 2*rEspaco8);
  rect(xEspaco11, yEspaco11, 2*rEspaco11, 2*rEspaco11);
  rect(xEspaco9, yEspaco9, 2*rEspaco9, 2*rEspaco9);
  rect(xEspaco10, yEspaco10, 2*rEspaco10, 2*rEspaco10);
  image(img4, 200, 150, 80, 80);
  image(img4, 400, 150, 80, 80);
  image(img4, 600, 150, 80, 80);
  if(mouseIsPressed && dist(posXI8, posYI8, mouseX, mouseY) < raio8){
    posXI8 = mouseX;
    posYI8 = mouseY;
}
  else{
      if(mouseIsPressed && dist(posXI11, posYI11, mouseX, mouseY) < raio11){
    posXI11 = mouseX;
    posYI11 = mouseY;
    }
    else{
        if(mouseIsPressed && dist(posXI9, posYI9, mouseX, mouseY) < raio9){
    posXI9 = mouseX;
    posYI9 = mouseY;
    }
    else{
        if(mouseIsPressed && dist(posXI10, posYI10, mouseX, mouseY) < raio10){
    posXI10 = mouseX;
    posYI10 = mouseY;
    }
    }
  }
}
  image(img14, posXI8, posYI8, 2*raio8, 2*raio8);
  image(img17, posXI11, posYI11, 2*raio11, 2*raio11);
  image(img15, posXI9, posYI9, 2*raio9, 2*raio9);
  image(img16, posXI10, posYI10, 2*raio10, 2*raio10);
  if(dist(xEspaco8+50, yEspaco8+25, posXI8, posYI8-25) < rEspaco8 + raio8-25){
      posXI8 = 100;
      posYI8 = 150;
      pontos = 2500;
  }
  else{
      if(dist(xEspaco11+50, yEspaco11+25, posXI8, posYI8-25) < rEspaco11 + raio11-25 || dist(xEspaco9+50, yEspaco9+25, posXI8, posYI8-25) < rEspaco9 + raio9-25 || dist(xEspaco10+50, yEspaco10+25, posXI8, posYI8-25) < rEspaco10 + raio10-25){
        posXI8 = 540;
        posYI8 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco11+50, yEspaco11+25, posXI11, posYI11-25) < rEspaco11 + raio11-25){
      posXI11 = 300;
      posYI11 = 150;
      pontos = pontos+2500;
  }
  else{
      if(dist(xEspaco8+50, yEspaco8+25, posXI11, posYI11-25) < rEspaco8 + raio11-25 || dist(xEspaco9+50, yEspaco9+25, posXI11, posYI11-25) < rEspaco9 + raio11-25 || dist(xEspaco10+50, yEspaco10+25, posXI11, posYI11-25) < rEspaco11 + raio11){
        posXI11 = 420;
        posYI11 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco9+50, yEspaco9+25, posXI9, posYI9-25) < rEspaco9 + raio9-25){
      posXI9 = 500;
      posYI9 = 150;
      pontos = pontos+2500;
  }
  else{
      if(dist(xEspaco8+50, yEspaco8+25, posXI9, posYI9-25) < rEspaco8 + raio9-25 || dist(xEspaco11+50, yEspaco11+25, posXI9, posYI9-25) < rEspaco11 + raio11-25 || dist(xEspaco10+50, yEspaco10+25, posXI9, posYI9-25) < rEspaco10 + raio10){
        posXI9 = 300;
        posYI9 = 400;
        vidas--;
      }
  }
  if(dist(xEspaco10+50, yEspaco10+25, posXI10, posYI10-25) < rEspaco10 + raio10-25){
      posXI10 = 700;
      posYI10 = 150;
      pontos = pontos+6500;
  }
  else{
      if(dist(xEspaco8+50, yEspaco8+25, posXI10, posYI10-25) < rEspaco8 + raio10-25 || dist(xEspaco11+50, yEspaco11+25, posXI10, posYI10-25) < rEspaco11 + raio11-25 || dist(xEspaco9+50, yEspaco9+25, posXI10, posYI10-25) < rEspaco9 + raio9-25){
        posXI10 = 180;
        posYI10 = 400;
        vidas--;
      }
  }
  if( pontos >= barradepontos){    //NIVEL
    tela = tela+1;
    barradepontos = barradepontos+2000;
  }
  if(vidas<1){
    gameover();
  }

}
function telafinal(){
  background("#16DB93");
  rect(z, w, 180, 40);
  textSize(32);
  text("PARABÉNS!!", 290, 50);
  textSize(25);
  text("VOCÊ OBTEVE ÓTIMOS RESULTADOS!", 180, 200);
  textSize(20);
  text("MENU INICIAL", 320, 350 );
}
