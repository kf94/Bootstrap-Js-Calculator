const calculator = {
  sum : 0,
  numString : "",
  calculation : "",
  num1 : function() {
    const but = document.querySelector('#back');
    but.addEventListener('click', function() {
      this.numString += "1";
      document.querySelector('#display').value = this.numString;
    });
  }
};

let numString = '';
let calculation = '';
let sum = 0;
const but1 = document.querySelector('#n1');
but1.addEventListener('click',function() {
  numString += 1;
  document.querySelector('#display').value = numString;
});

const but2 = document.querySelector('#n2');
but2.addEventListener('click',function() {
  numString += 2;
  document.querySelector('#display').value = numString;
});

const but3 = document.querySelector('#n3');
but3.addEventListener('click',function() {
  numString += 3;
  document.querySelector('#display').value = numString;
});

const but4 = document.querySelector('#n4');
but4.addEventListener('click',function() {
  numString += 4;
  document.querySelector('#display').value = numString;
});

const but5 = document.querySelector('#n5');
but5.addEventListener('click',function() {
  numString += 5;
  document.querySelector('#display').value = numString;
});

const but6 = document.querySelector('#n6');
but6.addEventListener('click',function() {
  numString += 6;
  document.querySelector('#display').value = numString;
});

const but7 = document.querySelector('#n7');
but7.addEventListener('click',function() {
  numString += 7;
  document.querySelector('#display').value = numString;
});

const but8 = document.querySelector('#n8');
but8.addEventListener('click',function() {
  numString += 8;
  document.querySelector('#display').value = numString;
});

const but9 = document.querySelector('#n9');
but9.addEventListener('click',function() {
  numString += 9;
  document.querySelector('#display').value = numString;
});

const but0 = document.querySelector('#n0');
but0.addEventListener('click',function() {
  numString += 0;
  document.querySelector('#display').value = numString;
});

const butDec = document.querySelector('#dec');
butDec.addEventListener('click',function() {
  numString += '.';
  document.querySelector('#display').value = numString;
});

const butPlus = document.querySelector('#plus');
butPlus.addEventListener('click',function() {
  if (!numString == '') {
    calculation += eval(numString);
  }
  //calculation = eval(calculation);
  calculation += '+';
  numString = '';
});

const butMinus = document.querySelector('#minus');
butMinus.addEventListener('click',function() {
  if (!numString == '') {
    calculation += eval(numString);
  }
  //calculation = eval(calculation);
  calculation += '-';
  numString = '';
});

const butMultiply = document.querySelector('#multiply');
butMultiply.addEventListener('click',function() {
  if (!numString == '') {
    calculation += eval(numString);
  }
  //calculation = eval(calculation);
  calculation += '*';
  numString = '';
});

const butDivide = document.querySelector('#divide');
butDivide.addEventListener('click',function() {
  if (!numString == '') {
    calculation += eval(numString);
  }
  //calculation = eval(calculation);
  calculation += '/';
  numString = '';
});

const butEqual = document.querySelector('#equal');
butEqual.addEventListener('click',function() {
  calculation += eval(numString);
  sum = eval(calculation);
  document.querySelector('#display').value = sum;
  numString = '';
});

const butClear = document.querySelector('#clear');
butClear.addEventListener('click',function() {
  calculation = '';
  numString = '';
  sum = 0;
  document.querySelector('#display').value = sum;
});