// tady je místo pro náš program
console.log("Ahoj");

let nadpis = document.querySelector('h1');

nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty');

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

function zmenBarvu() {
  let barva = document.querySelector('.tlacidlo');
  //barva.classList.add('cervena');
  barva.classList.toggle('cervena');
  //barva.style.color = 'red';
}

function zvacseniePisma() {

}