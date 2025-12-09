// Lights Out – JavaScript logic with embellishments

const BOARD_SIZE = 5; // 5x5 grid
let boardState = [];  // 2D array: true = ON, false = OFF
let moveCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    const newGameBtn = document.getElementById("newGameBtn");
    newGameBtn.addEventListener("click", createNewRandomGame);

    createBoard();
    createNewRandomGame();
});

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = "";
    boardState = [];

    for (let row = 0; row < BOARD_SIZE; row++) {
        const rowArray = [];
        for (let col = 0; col < BOARD_SIZE; col++) {
            rowArray.push(false);

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener("click", handleCellClick);

            board.appendChild(cell);
        }
        boardState.push(rowArray);
    }
}

function handleCellClick(event) {
    const cell = event.currentTarget;
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    toggleCellAndNeighbors(row, col);

    moveCount++;
    updateMoveCount();
    clearStatusWin();

    if (checkWin()) {
        setWinStatus();
        setTimeout(() => {
            window.alert("You win!");
        }, 10);
    }
}

function toggleCellAndNeighbors(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col); // up
    toggleCell(row + 1, col); // down
    toggleCell(row, col - 1); // left
    toggleCell(row, col + 1); // right
}

function toggleCell(row, col) {
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) return;

    boardState[row][col] = !boardState[row][col];

    const selector = `.cell[data-row="${row}"][data-col="${col}"]`;
    const cellEl = document.querySelector(selector);
    if (!cellEl) return;

    if (boardState[row][col]) {
        cellEl.classList.add("is-on");
    } else {
        cellEl.classList.remove("is-on");
    }
}

function createNewRandomGame() {
    // reset to all OFF
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            boardState[row][col] = false;
        }
    }
    updateAllCellsFromState();

    // scramble via random valid moves (always solvable)
    const randomMoves = BOARD_SIZE * BOARD_SIZE * 2;
    for (let i = 0; i < randomMoves; i++) {
        const r = Math.floor(Math.random() * BOARD_SIZE);
        const c = Math.floor(Math.random() * BOARD_SIZE);
        toggleCellAndNeighbors(r, c);
    }

    // if somehow solved again, scramble once more
    if (checkWin()) {
        const r = Math.floor(Math.random() * BOARD_SIZE);
        const c = Math.floor(Math.random() * BOARD_SIZE);
        toggleCellAndNeighbors(r, c);
    }

    moveCount = 0;
    updateMoveCount();
    const statusEl = document.getElementById("statusMessage");
    if (statusEl) {
        statusEl.textContent = "New puzzle! Turn all the lights off.";
        statusEl.classList.remove("status-win");
    }
}

function updateAllCellsFromState() {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const selector = `.cell[data-row="${row}"][data-col="${col}"]`;
            const cellEl = document.querySelector(selector);
            if (!cellEl) continue;

            if (boardState[row][col]) {
                cellEl.classList.add("is-on");
            } else {
                cellEl.classList.remove("is-on");
            }
        }
    }
}

function checkWin() {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (boardState[row][col]) return false;
        }
    }
    return true;
}

/* embellishment helpers */
function updateMoveCount() {
    const el = document.getElementById("moveCount");
    if (el) el.textContent = moveCount.toString();
}

function setWinStatus() {
    const statusEl = document.getElementById("statusMessage");
    if (statusEl) {
        statusEl.textContent = "You win! 🎉";
        statusEl.classList.add("status-win");
    }
}

function clearStatusWin() {
    const statusEl = document.getElementById("statusMessage");
    if (statusEl && statusEl.classList.contains("status-win")) {
        statusEl.textContent = "Keep going…";
        statusEl.classList.remove("status-win");
    }
}
