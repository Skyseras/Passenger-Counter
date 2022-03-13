let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetAll = document.getElementById("reset-btn")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
}

console.log("Let's count people on the subway!")