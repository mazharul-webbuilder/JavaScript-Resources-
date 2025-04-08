// Garbage Collection

// JavaScript uses a garbage collection system to manage memory allocation and deallocation.
// When a variable is no longer in use, the memory associated with it is automatically released.

// Example
let son = {
    first: 'Zayaan',
    last: 'Islam',
}

// Here we just tell the memory heap via engine to allocate memory for son object and its values, now the of old son first and last will be released vai garbage collection
son = null;


// Another Example:
function sonInfo() {
    let baby = {
        first: 'Zayaan',
        last: 'Islam',
    }

    return 1 + 2;
}

sonInfo() // Here after function call baby will be released