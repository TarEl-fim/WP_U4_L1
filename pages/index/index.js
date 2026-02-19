const alph = 'abcdefghijklmnopqrstuvwxyz';
let shift = 0;

console.log(alph[-1])

function genTextInp(){  
  const body = document.getElementsByTagName('body')[0];

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div1.id = 'box1';
  div2.id = 'box2';

  const OutputBox = document.createElement('div');
  OutputBox.id = 'Output';
  
  const InputBox = document.createElement('textarea');
  const counterButton = document.createElement('div');
  div2.appendChild(counterButton);

  InputBox.type = 'text';

  InputBox.id = 'Input';
  div1.appendChild(InputBox);
  div1.appendChild(OutputBox);

  body.appendChild(div1);
  body.appendChild(div2);

  const shifter = document.createElement('div');

  shifter.id = 'shiftCount';

  const subtract = document.createElement('div');
  const counter = document.createElement('div');
  const add = document.createElement('div');

  subtract.id = '-';
  subtract.textContent = subtract.id;
  add.id = '+';
  add.textContent = add.id;
  counter.id = 'count';
  counter.textContent = shift;

  subtract.onclick = function(){change_shift(this)};
  add.onclick = function(){change_shift(this)};

  shifter.appendChild(subtract);
  shifter.appendChild(counter);
  shifter.appendChild(add);

  const encrypt = document.createElement('div');
  encrypt.className = 'subButton';
  encrypt.id = 'encrypt';
  encrypt.onclick = function(){de_encrypt(this)};

  const decrypt = document.createElement('div');
  decrypt.className = 'subButton';
  decrypt.id = 'decrypt';
  decrypt.onclick = function(){de_encrypt(this)};
  
  div2.appendChild(encrypt);
  div2.appendChild(shifter);
  div2.appendChild(decrypt);

}

function change_shift(button){
  const counter = document.getElementById('count');
  if (button.id == '+'){
    if (counter.textContent != 26){
      shift += 1;
    }
  }else{
    if (counter.textContent != 0){
      shift -= 1;
    }
  }

  counter.textContent = shift;
}

function de_encrypt(button){

  const inp = document.getElementById('Input');
  const out = document.getElementById('Output');

  if (button.id == 'decrypt'){
    shifter = -(shift);
    console.log('decoded')
  }else{
    shifter = shift;
    console.log('encoded')
  }

  const strInp = inp.value;
  let returnStr = ''

  for(let i = 0;i<strInp.length;i++){
    if(strInp[i]==' '){
      returnStr += ' ';
    }else{
      let num = alph.indexOf(strInp[i].toLowerCase());
      let value = num+shifter;

      let letter = alph[Math.abs(26+value)%26];

      returnStr += letter;
    }
  }

  out.innerText = returnStr;

}