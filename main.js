let btns = document.querySelectorAll('.btn');
let result = document.querySelector('.result');
let call =['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let conditions = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
];

const ticTacToe = (element, index) =>{
 element.value = currentPlayer;
 element.disabled = true;
 call[index] = currentPlayer;
 currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
result.innerHTML = `player ${currentPlayer} Turn`
 for(let i =0; i< conditions.length; i++){
  let condition = conditions[i];
  let a = call[condition[0]];
  let b = call[condition[1]];
  let c = call[condition[2]];
  if(a == '' || b == '' || c == ''){
   continue;
  }
  if((a == b) && (b == c)){
   result.innerHTML = `player ${a} won`;
   btns.forEach((btn)=>btn.disabled = true);
  }
 }
};

function reset(){
 call =['', '', '', '', '', '', '', '', ''];
 btns.forEach((btn) =>{
  btn.value = ''
 });
 currentPlayer = 'X';
 result.innerHTML ='player X Turn';
 btns.forEach((btn) => btn.disabled = false);
};
document.querySelector('.resetBtn').addEventListener('click', reset);
btns.forEach((btn, i) =>{
 btn.addEventListener('click', ()=> ticTacToe(btn, i))
})
