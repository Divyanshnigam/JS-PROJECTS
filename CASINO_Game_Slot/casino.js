let value1 = document.getElementById('value1')
let value1 = document.getElementById('value2')
let value1 = document.getElementById('value3')

let values = [
    '🤍' ,'💜' ,'💛' ,'💖' ,'💚' ,'🖤' ,'🧡'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}

setInterval(() => {

    value1.innerText = getRandomValue()
    value2.innerText = getRandomValue()
    value3.innerText = getRandomValue()

},300)