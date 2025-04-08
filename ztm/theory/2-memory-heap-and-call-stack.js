// As we know Javascript engine like v8 engine convert our high level code machine-readable code, to do this it has to pass through few steps as we already know,
// can check out javascript-engine.js file to see the steps.
// To perform all the steps in engine we need memory that memory is divided into two parts, call stack and memory heap.


// Memory Heap: is a place to store information, allocate memory, use memory,  release memory
// Call Stack: we need to track where we are in our code so we can run our code in order


// Example:
// Call Stack + Memory Heap
const month = 11; // we just tell the memory heap via engine to allocate memory for month variable
const son = { // we just tell the memory heap via engine to allocate memory for son object and its values
    first: 'Zayaan',
    last: 'Islam',
}

function calculate(){
    return 11 + 1;
}

calculate() // Any time we call calculate it's going to looking memory where it's located in memory using call stack

// NOTE: Memory Heap is open we can allocate memory in any places,