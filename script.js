const gameBoard = (()=>{

    let board = new Array(9);
    const getBoard =() => board;

    let winner ;

    function check (a,b,c) {
        let arr = getBoard();
        if((arr[a]==arr[b] && arr[b]==arr[c])&&(arr[a]!=undefined && arr[b]!=undefined && arr[c]!=undefined)){
            winner = arr[a];
            return true;
        }
    }

    function result(){
        let arr = getBoard();
        if(check(0,1,2)||check(3,4,5)||check(6,7,8)||check(0,3,6)||check(1,4,7)||check(2,5,8)||check(0,4,8)||check(2,4,6)){
            return console.log(`You Won ${winner}`);
        }
        if(!arr.includes(undefined)){
            return console.log("Tie");
        }
    }

    return {getBoard,result};
})();

const displayController = (()=>{

    const board = document.querySelector(".board");
    let mark = "X";

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
        if(board[i]==undefined){
            board[i] = mark;
            render(board);
            gameBoard.result();
        }
        mark = (mark=="X")?"O":"X";
    }

    return {render,marker};
})();

const Player = (name,symbol) => {
    this.name = name;
    this.symbol = symbol;
    return {name,symbol};
};

const player1 = Player("Tanjiro");
const player2 = Player("Muzan");


displayController.render(gameBoard.getBoard());

