

function Master() {
    let cache = {}
    return function fibonical(n) {
        if (n in cache) {
            return cache[n]
        } else {
            //logic of fib
            if (n < 2) {
                return n
            } else {
                cache[n] = fibonical(n - 1) + fibonical(n - 2)
                return cache[n]
            }
        }
    }
}

let fibLogic = Master()
console.log(fibLogic(8))
