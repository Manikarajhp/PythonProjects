        const correctDisplay = document.getElementById('correct');
        const positionDisplay = document.getElementById('position');
        const resultDisplay = document.getElementById('result');
        const restartBtn = document.getElementById('restart-btn');
        const userInput = document.getElementById('userGuess');
        const cheers = [
                          "💪 Keep going, you're doing great!",
                          "😄 Don't give up, success is near!",
                          "🚀 Almost there, stay focused!",
                          "✨ Believe in yourself!",
                          "🎯 Focus and hit the target!",
                          "🏆 Champions never quit!",
                          "😎 You're smarter than you think!",
                          "🌟 Every try makes you better!"
                        ];

        let computerGuess = Math.floor(Math.random()*999);
        computerGuess = computerGuess < 100 ? (computerGuess + 100).toString() : (computerGuess).toString();
        
        function restart(){
            resultDisplay.textContent = "";
            restartBtn.style.display = 'none';
            userInput.value = '';
            computerGuess = Math.floor(Math.random()*999);
            computerGuess = computerGuess < 100 ? (computerGuess + 100).toString() : (computerGuess).toString();
        }

        
        function check(){
            event.preventDefault()
            console.log(computerGuess);
            const userGuess = userInput.value;
            const temp = computerGuess;

            var correct = 0;
            var position = 0;

            for(let i = 0; i < userGuess.length; i++){
                var char = userGuess.charAt(i);
                if(char === temp.charAt(i)){
                    correct++;
                    position++;
                }
                else{
                    if(temp.includes(char)){
                        temp.replace(char, '$');
                        correct++;
                    }
                }
            }

            correctDisplay.textContent = correct;
            positionDisplay.textContent = position;
            if(correct === 3 && position === 3){
                resultDisplay.textContent = "🔥You got this! Try again!";
                restartBtn.style.display = 'block';
            }
            else{
                resultDisplay.textContent = cheers[Math.floor(Math.random() * cheers.length)];
            }
        }