let min = 1,
max = 20,
winning = Math.floor(Math.random() *9) +1;
guessLeft = 5;

var minNum = document.querySelector('.min-num');
var maxNum = document.querySelector('.max-num');
var guessBtn = document.querySelector('.guess_btn');
var guessValue = document.querySelector('#guess_value');
var guessInput = document.getElementById('guess_input');
var msgText = document.querySelector('.guess_msg');
var msgInput = document.getElementById('guess_msg_val');
var guessText = document.querySelector('.guess_text');

minNum.textContent = min;
maxNum.textContent = max;
        guessText.focus();

guessBtn.addEventListener('click', function(){
    //entering a absurd number
    let guess = parseInt(guessInput.value);
    if(guess < min || guess > max || isNaN(guess))
    {
        setMessege(`enter a number between ${min} and ${max} only`, 'red');
        guessInput.value = "";
        guessText.focus();
    }else{
        //winning the game
        if(guess === winning){
         guess.disabled = true;
         
    guessInput.style.border = 'green';
    setMessege(` ${winning} is correct , YOU WON`, 'green'); 
                    guessText.focus();

        }else {
            //not winning
            //guessleft and game over
            guessLeft -= 1; //for decrementing the guessleft values
            if(guessLeft === 0){
                guess.disabled = true;
               
               
    setMessege(` YOU LOST, ${winning} is correct answer `, 'red'); 
                        guessText.focus();


            }else{
                //guessleft and game continues
               
    setMessege(` ${guessLeft} guesses left` , 'red');
            
                guessInput.value = "";
                        guessText.focus();


            }

        }
    }
});
function setMessege(msg, color){
    msgText.textContent = msg;
    msgText.style.color = color;
}

