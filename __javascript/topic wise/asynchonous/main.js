// Promise
const myFirstPromise = new Promise((resolve, reject) => {
    console.log('Promise is executing')
    if (true) {
        resolve('Resolved')
    } else {
        reject('Rejected')
    }
})

myFirstPromise.then((result) => {
    console.log(result)
    return result
}).then((result2) => {
    console.log(result2 + '!') // first result as a parameter in this chaing method
}).catch((error) => {
    console.log('Error', error)
})

// Async & await (Under the hood work Promise, just async await is syntactic sugar of Promise)
// By using async await our asynchronous code more like as synchronous and improve readability

function resolveAfter2Second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async Resolved')
        }, 2000)

        if (false) {
            reject('Async Rejected')
        }
    })
}

async function callAsync() {
    try {
        console.log('Async method calling')
        let result = await resolveAfter2Second()
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

callAsync()