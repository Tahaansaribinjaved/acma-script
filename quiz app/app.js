fetch('https://opentdb.com/api.php?amount=10')
  .then(data => data.json())
  .then((data) => {
    let ques = document.getElementById('question');
    let opt1 = document.getElementById('opt1');
    let opt2 = document.getElementById('opt2');
    let opt3 = document.getElementById('opt3');
    let opt4 = document.getElementById('opt4');
    let opt1Label = document.getElementById('opt1Label');
    let opt2Label = document.getElementById('opt2Label');
    let opt3Label = document.getElementById('opt3Label');
    let opt4Label = document.getElementById('opt4Label');
    let option = document.getElementsByName('option');
    let btn = document.getElementById('btn');

    // Assuming your HTML structure supports this, you can update your questions and answers like this
    let currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);

    function showQuestion(index) {
      ques.innerHTML = data[index].question;
      opt1.value = data[index].correct_answer;
      opt1Label.innerHTML = data[index].correct_answer;
      opt2.value = data[index].incorrect_answers[0];
      opt2Label.innerHTML = data[index].incorrect_answers[0];
      opt3.value = data[index].incorrect_answers[1];
      opt3Label.innerHTML = data[index].incorrect_answers[1];
      opt4.value = data[index].incorrect_answers[2];
      opt4Label.innerHTML = data[index].incorrect_answers[2];
    }

    // Add event listeners for your buttons to navigate through questions
    btn.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < data.length) {
        showQuestion(currentQuestionIndex);
      } else {
        // Handle quiz completion or other actions when all questions are answered
        // You can show a message or calculate the score here.
      }
    });

  })
  .catch((error) => {
    console.error('An error occurred:', error);
    // Handle the error gracefully, such as displaying an error message to the user.
  });
            
            
            
            
            
            
            
            
            
            
            // fetch('https://opentdb.com/api.php?amount=10')
            // .then(data => data.json())
// .then((data) => {
//     console.log(data)
//     // function next(){
    //     let ques = document.getElementById('question');
    //     let opt1 = document.getElementById('opt1');
    //     let opt2 = document.getElementById('opt2');
    //             let opt3 = document.getElementById('opt3');
//             let opt4 = document.getElementById('opt4');
//             let opt1Label = document.getElementById('opt1Label');
//             let opt2Label = document.getElementById('opt2Label');
//             let opt3Label = document.getElementById('opt3Label');
//             let opt4Label = document.getElementById('opt4Label');
//             let option = document.getElementsByName('option')
//             let btn = document.getElementById('btn')
    
//             // for (let i = 0; i < data.results.length; i++) {
//             //     ques.innerHTML = data.results[i].question;
//             //     opt1.value = data.results[i].correct_answer;
//             //     opt1Label.innerHTML = data.results[i].correct_answer;
//             //     opt2.value = data.results[i].incorrect_answers[0];
//             //     opt2Label.innerHTML = data.results[i].incorrect_answers[0];
//             //     opt3.value = data.results[i].incorrect_answers[1];
//             //     opt3Label.innerHTML = data.results[i].incorrect_answers[1];
//             //     opt4.value = data.results[i].incorrect_answers[2];
//             //     opt4Label.innerHTML = data.results[i].incorrect_answers[2];
//             // }
//             // btn.disabled= true
//     // for(let i= 0 ;i < option.length ; i++){
//         // if(option[i].checked){
//             // option[i].checked = false
//             // btn.disabled= false
    
//         // }
//     // }
//     //   console.log(option)
    
// // }
// // next()
// })
//         .catch(err => console.log(err));
    