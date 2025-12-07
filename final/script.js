// Lights Out – JavaScript logic with embellishments

const BOARD_SIZE = 5; // 5x5 grid
let boardState = [];  // 2D array of booleans: true = light ON, false = OFF
let moveCount = 0;

// Initialize everything when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const newGameBtn = document.getElementById("newGameBtn");
    newGameBtn.addEventListener("click", createNewRandomGame);

    createBoard();
    createNewRandomGame(); // start with a random, solvable board
});

/**
 * Create the DOM elements for the board and set up the boardState array.
 */
function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = ""; // clear any existing cells
    boardState = [];

    for (let row = 0; row < BOARD_SIZE; row++) {
        const rowArray = [];
        for (let col = 0; col < BOARD_SIZE; col++) {
            rowArray.push(false); // all OFF to start

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;

            // Click handler for each cell
            cell.addEventListener("click", handleCellClick);

            board.appendChild(cell);
        }
        boardState.push(rowArray);
    }
}

/**
 * Handle a click from the user on a cell.
 * Toggling that cell and its neighbors is one "move".
 */
function handleCellClick(event) {
    const cell = event.currentTarget;
    const row = parseInt(cell.dataset.row, 10);
    const col = parseInt(cell.dataset.col, 10);

    toggleCellAndNeighbors(row, col);

    // embellishment: count moves
    moveCount++;
    updateMoveCount();
    clearStatusWin();

    if (checkWin()) {
        setWinStatus();

        // small timeout so the visual state finishes updating
        setTimeout(() => {
            window.alert("You win!");
        }, 10);
    }
}

/**
 * Toggle the clicked cell and its up/down/left/right neighbors.
 */
function toggleCellAndNeighbors(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col); // up
    toggleCell(row + 1, col); // down
    toggleCell(row, col - 1); // left
    toggleCell(row, col + 1); // right
}

/**
 * Toggle a single cell's boolean state and update its CSS class.
 */
function toggleCell(row, col) {
    if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE) {
        return; // out of bounds
    }

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

/**
 * Create a new random but solvable game state.
 *
 * Strategy:
 *  1. Start from the solved board (all lights OFF).
 *  2. Simulate a bunch of random valid clicks using the same rules
 *     as the player. Any configuration you can reach this way is,
 *     by definition, solvable.
 */
function createNewRandomGame() {
    // Reset to all OFF
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            boardState[row][col] = false;
        }
    }
    updateAllCellsFromState();

    // Apply random moves
    const randomMoves = BOARD_SIZE * BOARD_SIZE * 2; // somewhat arbitrary, but scrambles nicely
    for (let i = 0; i < randomMoves; i++) {
        const r = Math.floor(Math.random() * BOARD_SIZE);
        const c = Math.floor(Math.random() * BOARD_SIZE);
        toggleCellAndNeighbors(r, c);
    }

    // Edge case: if it ended up already solved, scramble again once.
    if (checkWin()) {
        const r = Math.floor(Math.random() * BOARD_SIZE);
        const c = Math.floor(Math.random() * BOARD_SIZE);
        toggleCellAndNeighbors(r, c);
    }

    // Reset embellishment info
    moveCount = 0;
    updateMoveCount();
    const statusEl = document.getElementById("statusMessage");
    if (statusEl) {
        statusEl.textContent = "New puzzle! Turn all the lights off.";
        statusEl.classList.remove("status-win");
    }
}

/**
 * Update the DOM classes to match the current boardState array.
 */
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

/**
 * Check if the puzzle is solved.
 * In this version, the puzzle is solved when ALL lights are OFF (false).
 */
function checkWin() {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (boardState[row][col]) {
                return false; // some light still ON
            }
        }
    }
    return true;
}

/**
 * Embellishment helpers: move counter + status display
 */
function updateMoveCount() {
    const el = document.getElementById("moveCount");
    if (el) {
        el.textContent = moveCount.toString();
    }
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
