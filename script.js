const gameBoard = (()=>{

    let board = new Array(9);
    return {board};
})();

const displayController = (()=>{

    const board = document.querySelector(".board");
    let mark = "X";

    function render(arr){
        board.textContent = "";
        for(let i=0;i<9;i++){
            const block = document.createElement("div"); 
            block.classList.add("block");
            block.setAttribute("onclick",`displayController.marker(${i},gameBoard.board)`);
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


displayController.render(gameBoard.board);

