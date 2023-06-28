
const board = document.querySelector(".board");

const gameBoard = (()=>{

    let board   =   ["O","X","X","X","X","O","O","O","X"];
    return {board};
})();

const displayController = (()=>{

})();

const Player = (name,symbol) => {
    this.name = name;
    this.symbol = symbol;
    return {name,symbol};
};

const player1 = Player("Tanjiro");
const player2 = Player("Muzan");

function render(arr){
    for(let i=0;i<9;i++){
        const block = document.createElement("div"); 
        block.classList.add("block");
        block.textContent = arr[i];
        board.appendChild(block);
    }
}

render(gameBoard.board);

// COMMIT 