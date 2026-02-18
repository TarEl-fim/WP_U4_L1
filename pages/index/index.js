const alph = 'abcdefghijklmnopqrstuvwxyz';
let shift = 0;

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

  const submit = document.createElement('div');
  submit.id = 'subButton';
  submit.onclick = function(){encrypt()};
  body.appendChild(submit);



  InputBox.addEventListener('input',function() {
    OutputBox.innerText = this.value;
  })

}

function encrypt(){
  console.log('yo mahmuh');
}