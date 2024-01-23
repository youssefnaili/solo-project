
    $("#signup").click(function(){
    var username = $("#uname").val();
    var email = $("#mail").val();
    var password = $("#psw").val();
    console.log ('test',username,email,password)
    if(username==='' || email==='' ||password===''){
        alert ('please fill in all fields to start playing')
    }else if((password.length) <8 ){
            alert('your password should be at least 8')

        }

    })




    function startPlay() {

        var  questions = [
            { question: 'What is the capital of France?',
             answer: 'paris' },
            { question: 'What is the capital of Japan?',
             answer: 'tokyo' },
            { question: 'What is the capital of Brazil?',
             answer: 'brasilia' },
            { question: 'What is the capital of Australia?',
             answer: 'canberra' },
            { question: 'What is the capital of Canada?',
             answer: 'ottawa' }
        ]
         
        var score = 0;
    
        for (var i = 0; i < questions.length; i++) {
            var playerAnswer =prompt(questions[i].question);
    
            if (playerAnswer=== questions[i].answer) {
                score++;
            }
        }
    
        if (score >= 3) {
            alert (`Congratulations! You won with a score of ${score}/5.`);
        } else {
            alert (`Sorry, you lost. Your score is ${score}/5. Better luck next time!`);
        }
    }



    


            
                var num = Math.floor(Math.random() * 100);
                var userChoice;
            
                $("#odd").click(function() {
                    userChoice = "odd";
                    checkNumber();
                });
            
                $("#even").click(function() {
                    userChoice = "even";
                    checkNumber();
                });
                function checkNumber() {
                    
                    if ((num % 2 === 0 && userChoice === "even") || (num % 2 !== 0 && userChoice === "odd")) {
                        alert("You guessed correctly!");
                    } else {
                        alert("Sorry, wrong guess. The number was " + num);
                    }
                }


                
                    
                $('#next').click(function () {
                    $('#next').attr('href',"index3.html") 
                })
            















    // function startQuiz() {

    //     var  questions = [
    //         { question: 'What is the capital of France?',
    //          answer: 'Paris' },
    //         { question: 'What is the capital of Japan?',
    //          answer: 'Tokyo' },
    //         { question: 'What is the capital of Brazil?',
    //          answer: 'Brasilia' },
    //         { question: 'What is the capital of Australia?',
    //          answer: 'Canberra' },
    //         { question: 'What is the capital of Canada?',
    //          answer: 'Ottawa' }
    //     ]
         
    //     var score = 0;
    
    //     for (var i = 0; i < questions.length; i++) {
    //         var playerAnswer =prompt(questions[i].question);
    
    //         if (playerAnswer=== questions[i].answer) {
    //             score++;
    //         }
    //     }
    
    //     if (score >= 3) {
    //         alert (`Congratulations! You won with a score of ${score}/5.`);
    //     } else {
    //         alert (`Sorry, you lost. Your score is ${score}/5. Better luck next time!`);
    //     }
    // }

