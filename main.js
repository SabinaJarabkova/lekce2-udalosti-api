// tady je místo pro náš program
console.log("Ahoj");

let nadpis = document.querySelector('h1');

nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

//nadpis.classList.add('ctverecek');

let pocitadlo = 0;
function priNajetiNaCtverec() {
  console.log("test" + pocitadlo);
  pocitadlo = pocitadlo + 1;
  // alebo pocitadlo++
}

function zmenStyl() {
  nadpis.classList.toggle('zeleny');
}

function tucnePismo() {
  let odstavec = document.querySelector('p');
  odstavec.style.fontWeight = 'bold';
}

function normalnePismo() {
  let odstavec = document.querySelector('p');
  odstavec.style.fontWeight = 'normal';
}

function zmenBarvu() {
  //let barva = document.querySelector('.tlacidlo');
  let barva = document.querySelector('.odstavec');
  //barva.classList.add('cervena');
  barva.classList.toggle('cervena');
  //barva.style.color = 'red';
}

function zvacseniePisma() {
  let odstavec = document.querySelector('.odstavec');
  let computedSize = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
  odstavec.style.fontSize = (parseFloat(computedSize) + 1) + 'px';
  //odstavec.style.fontSize = '16px'
  //odstavec.style.fontSize = parseFloat(odstavec.style.fontSize) + 1 + "px";
}

//moze byt pomenovane aj udalost, je to na mne - v zatvorke
function stiskKlavesy(event) {
  console.log(event);
  console.log(event.key);
}

function startAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Zapinam piesen...');
  audioFile.play();
}

function pauseAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Pauzujem piesen...');
  audioFile.pause();
}

function volMin() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Stišujem pieseň...');
  audioFile.volume = 0;
}

function volNorm() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Normálna hlasitsť piesne...');
  audioFile.volume = 0.5;
}

function volMax() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Maximalna hlasitosť piesne...');
  audioFile.volume = 1;
}

function presunNaZaciatok() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Presúvam pieseň na začiatok...');
  audioFile.currentTime = 0;
}