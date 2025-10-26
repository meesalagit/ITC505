// script.js
// Bubble Sort demo with DOM updates

// Grab DOM elements
const numberInput   = document.getElementById("numberInput");
const sortBtn       = document.getElementById("sortBtn");
const randomBtn     = document.getElementById("randomBtn");
const originalOut   = document.getElementById("originalOutput");
const sortedOut     = document.getElementById("sortedOutput");
const statsOut      = document.getElementById("statsOutput");
const stepsOut      = document.getElementById("stepsOutput");

/**
 * Convert user input string ("9,4, 12 ,1") -> [9,4,12,1]
 * - trims spaces
 * - ignores blanks
 * - ignores non-numbers
 */
function parseInput(str) {
    return str
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => Number(s))
        .filter(n => !Number.isNaN(n));
}

/**
 * Bubble Sort with trace.
 * Returns { sortedArray, swapCount, stepsText }
 */
function bubbleSortWithTrace(arr) {
    const a = arr.slice(); // don't mutate original
    const n = a.length;
    let swapped = true;
    let pass = 0;
    let totalSwaps = 0;
    let traceLines = [];

    traceLines.push(`Initial: [${a.join(", ")}]`);

    while (swapped) {
        swapped = false;
        pass++;
        traceLines.push(`Pass ${pass}:`);
        for (let i = 0; i < n - 1; i++) {
            traceLines.push(
                `  Compare a[${i}]=${a[i]} and a[${i+1}]=${a[i+1]}`
            );
            if (a[i] > a[i + 1]) {
                // swap
                const temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                totalSwaps++;
                swapped = true;
                traceLines.push(
                    `    Swap -> [${a.join(", ")}]`
                );
            }
        }
    }

    traceLines.push(`Done. Final sorted: [${a.join(", ")}]`);
    traceLines.push(`Total swaps: ${totalSwaps}`);

    return {
        sortedArray: a,
        swapCount: totalSwaps,
        stepsText: traceLines.join("\n")
    };
}

/**
 * Push results into the page
 */
function renderResult(originalArr, resultObj) {
    originalOut.textContent = `[${originalArr.join(", ")}]`;
    sortedOut.textContent   = `[${resultObj.sortedArray.join(", ")}]`;
    statsOut.textContent    =
        `Total elements: ${originalArr.length}\n` +
        `Total swaps: ${resultObj.swapCount}`;
    stepsOut.textContent    = resultObj.stepsText;
}

/**
 * Sort button click
 */
function handleSortClick() {
    const arr = parseInput(numberInput.value);
    if (arr.length === 0) {
        alert("Please enter at least one valid number.");
        return;
    }
    const result = bubbleSortWithTrace(arr);
    renderResult(arr, result);
}

/**
 * Random demo button click
 * Generate 5 random ints between 1 and 99
 */
function handleRandomClick() {
    const demo = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 99) + 1
    );
    numberInput.value = demo.join(", ");
    const result = bubbleSortWithTrace(demo);
    renderResult(demo, result);
}

// Attach events
sortBtn.addEventListener("click", handleSortClick);
randomBtn.addEventListener("click", handleRandomClick);
