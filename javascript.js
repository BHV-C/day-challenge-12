
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  console.log(getComputerChoice());

/* task 4 */
 const playRound = (playerSection, computerSection) =>{
    
    var n1 = {
        data: 'scissors',
    };
    var n2 = {
        data: 'rock',
    };
    var n3 = {
        data: 'paper',
    };
    n1.next =n2;
    n2.next =n3;
    n3.next =n1;

    var n_res = n1;

    while(playerSection != n_res.data) {
        n_res = n_res.next;
    }
    var res; // the first element for player win's number, the second element for win's number of the computer.

    if(computerSection ==  playerSection) {
        // alert("Equality");
    }else if(computerSection == n_res.next.data){
        res = "Computer win"
        // alert(res);
        
    }else {
        res = "Player win"
        // alert(res);
    }
    return res;
  }

  /* task 5 */

  function game() {
    var res=null;
    var n_computer_win =0, n_player_win = 0;
    for (let i = 0; i <5;i++) {
        var computerSection = getComputerChoice();
        do {
            playerSection = prompt("Enter a string among the next three strings : 'rock', 'paper','scissors' ");
            playerSection = playerSection.toLowerCase();
        
        }while(playerSection != "rock" && playerSection != "paper" && playerSection != "scissors");
        if (playRound(playerSection,computerSection) == "Player win") {
            n_player_win++;
            alert(`Player win  ${playerSection} beats ${computerSection}`);
        }else if (playRound(playerSection,computerSection) == "Computer win") {
            n_computer_win++;
            alert(`Computer win ${computerSection} beats ${playerSection}`);
        } else {
            alert(`Equality ${playerSection} match ${computerSection}`);
        }
        
    }
    
    if (n_player_win > n_computer_win) {
        alert("Player winner");
    }else if (n_player_win < n_computer_win) {
        alert("Computer winner");
    }else alert("Computer and Player have equalized score");
    return false;
  }
