const gameBoard = (()=>{

    let board = new Array(9);
    const getBoard =() => board;

    let winner;

    const secDialog = document.getElementById("secDialog");
    const announce = document.querySelector(".result");

    function check (a,b,c) {
        let arr = getBoard();
        if((arr[a]==arr[b] && arr[b]==arr[c])&&(arr[a]!=undefined && arr[b]!=undefined && arr[c]!=undefined)){
            winner = arr[a];
            return true;
        }
    }

    function result(p1,p2){
        let arr = getBoard();
        if(check(0,1,2)||check(3,4,5)||check(6,7,8)||check(0,3,6)||check(1,4,7)||check(2,5,8)||check(0,4,8)||check(2,4,6)){
            console.log(p1.name);
            winner = (winner=="X")?p1.name:p2.name;
            announce.textContent = `Winner is: ${winner}`;
            secDialog.showModal();
        }
        if(!arr.includes(undefined)){
            announce.textContent = "Tie";
            secDialog.showModal();
        }
    }

    return {getBoard,result};
})();

const displayController = (()=>{

    const board = document.querySelector(".board");
    let mark = "X";

    const player = document.querySelector(".player");

    const dialog  = document.getElementById("favDialog");
    const player1  = document.getElementById("player1");
    const player2  = document.getElementById("player2");
    const submit  = document.getElementById("confirmBtn");

    let p1;
    let p2;

    function render(arr){
        board.textContent = "";
        for(let i=0;i<9;i++){
            const block = document.createElement("div"); 
            block.classList.add("block");
            block.setAttribute("onclick",`displayController.marker(${i},gameBoard.getBoard())`);
            if(arr[i]!=undefined){
                block.textContent = arr[i];
            }
            board.appendChild(block);
        }
    }

    function marker(i,board){
        if(board[i]!=undefined){
            return;
        }
        if(board[i]==undefined){
            board[i] = mark;
            render(board);
            gameBoard.result(p1,p2);
        }
        mark = (mark=="X")?"O":"X";
        player.textContent = (player.textContent==p1.name) ? p2.name : p1.name;
    }

    window.addEventListener("load",()=>{
        dialog.showModal();
    });

    submit.addEventListener("click",(event)=>{
        event.preventDefault();
        p1 =  Player(player1.value,"X");
        p2 = Player(player2.value,"O");
        player.textContent = p1.name;
        gameBoard.result(p1,p2);
        dialog.close();
    });
    
    return {render,marker,player1,player2};
})();

const Player = (name,symbol) => {
    this.name = name;
    this.symbol = symbol;
    return {name,symbol};
};

displayController.render(gameBoard.getBoard());