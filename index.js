// access the DOM

const boxes = document.querySelectorAll('.box')
const text = document.querySelector('#heading')
const strategy = document.querySelector('#strategy')
const restartBtn = document.querySelector('#restart')

const drawBoard = () => {
    boxes.forEach((box, i) => {
        let styleString = ''
        if (i<3) {
            styleString += 'border-bottom: 3px solid var(--text)' 
        }
        if (i%3===0) {
            styleString += 'border-right: 3px solid var(--text)'
        }
        if (i%3 ===2) {
            styleString += 'border-left: 3px solid var(--text)'
        }
        if (i>5) {
            styleString += 'border-top: 3px solid var(--text)'

        }
        box.style = styleString
    })
}