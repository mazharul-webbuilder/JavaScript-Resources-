// Memory Leaks

// Memory leaks occur when a program holds on to a resource that is no longer needed or we use memory out of bounds

// Example:
let array = []
while (true) {
    array.push(Math.random()) // We just write a infinite loop which push random number in array and our memory heap will be full and we will get memory leak system will crash
}


// There are three common memory leaks in JavaScript:
// 1> Global Variables
// 2> Event Listeners
// 3> SetInterval

// Note: Memory is a limited resource, if we not release it we will get memory leak

