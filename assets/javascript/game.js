window.onload = function () {
            
  var word;
  var wordBlank;
  var answer;              
  var guess;            
  var guesses = [ ];     
  var guessesRemain;        
  var counter;           
  var space;              
  var showGuesses = document.getElementById("myGuesses");

  start = function () {
    big = ["wolverines", "scarlet-knights", "hoosiers", "terrapins", "nittany-lions", "spartans", "buckeyes",
          "hawkeyes", "badgers", "golden-gophers", "cornhuskers", "fighting-illini", "boilermakers", "wildcats"];

    word = big[Math.floor(Math.random() * big.length)];
    word = word.replace(/\z/i, "-");

    guesses = [ ];
    guessesRemain = 10;
    counter = 0;
    space = 0;
    solution();
    remark();
    keypress();
    image();
    console.log(word);
  }
    
  solution = function () {
    wordBlank = document.getElementById('blank');
    answer = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      answer.setAttribute('id', 'the-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } 
      else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordBlank.appendChild(answer);
      answer.appendChild(guess);
    }
  }
  
  remark = function () {
    showGuesses.innerHTML = guessesRemain;
    if (guessesRemain < 1) {
      showGuesses.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space == guesses.length) {
        showGuesses.innerHTML = "You Win!";
        winsTracker.innerHTML = 1; 
      }
    }
  } 

  keypress = function () {
    document.onkeyup = function (event) {
      var guess = String.fromCharCode(event.keyCode).toLowerCase();
      for (var i = 0; i < word.length; i++) {
        if (word[i] == guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }  
      }
      var a = (word.indexOf(guess));
      if (a === -1) {
        guessesRemain -= 1;
        letterGuess.innerHTML = guess;
        remark();
      } else {
        remark();
      }
    }
  }

  image = function() {

    if (word == "wolverines") {
      img.innerHTML = '<img src=assets/images/Michigan.jpg height=200 width=200>'
    }
     if (word == "scarlet-knights") {
      img.innerHTML = '<img src=assets/images/Rutgers.jpg height=200 width=200>'
    }
     if (word == "hoosiers") {
      img.innerHTML = '<img src=assets/images/Indiana.jpg height=200 width=200>'
    }
     if (word == "terrapins") {
      img.innerHTML = '<img src=assets/images/Maryland.jpg height=200 width=200>'
    }
     if (word == "nittany-lions") {
      img.innerHTML = '<img src=assets/images/PennSt.jpg height=200 width=200>'
    }
     if (word == "spartans") {
      img.innerHTML = '<img src=assets/images/MichiganSt.jpg height=200 width=200>'
    }
     if (word == "buckeyes") {
      img.innerHTML = '<img src=assets/images/OhioSt.jpg height=200 width=200>'
    }
     if (word == "hawkeyes") {
      img.innerHTML = '<img src=assets/images/Iowa.jpeg height=200 width=200>'
    }
     if (word == "badgers") {
      img.innerHTML = '<img src=assets/images/Wisconsin.jpg height=200 width=200>'
    }
     if (word == "golden-gophers") {
      img.innerHTML = '<img src=assets/images/Minnesota.jpg height=200 width=200>'
    }
     if (word == "cornhuskers") {
      img.innerHTML = '<img src=assets/images/Nebraska.jpg height=200 width=200>'
    }
     if (word == "fighting-illini") {
      img.innerHTML = '<img src=assets/images/Illinois.jpg height=200 width=200>'
    }
     if (word == "boilermakers") {
      img.innerHTML = '<img src=assets/images/Purdue.jpg height=200 width=200>'
    }
     if (word == "wildcats") {
      img.innerHTML = '<img src=assets/images/Northwestern.jpg height=200 width=200>'
    }
  }

  start();

    document.getElementById('restart').onclick = function() {
    answer.parentNode.removeChild(answer);
    img.innerHTML = "";
    letterGuess.innerHTML = "";
    start();
  }

}