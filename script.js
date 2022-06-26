const colorsChoice = document.querySelector('#colorsChoice');
const game = document.querySelector('#game');
game.width = 1200
game.height = 600

const ctx = game.getContext('2d');

const colorList = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF'];
let currentColorChoice = colorList[6];

colorList.forEach(color => {
    const colorItem = document.createElement('div');
    colorItem.style.backgroundColor = color;
    colorsChoice.appendChild(colorItem);

    colorItem.addEventListener('click', () => {
        currentColorChoice = color

        colorItem.innerHTML = `<i class="fa-solid fa-check"></i>`

        setTimeout(() => {
            colorItem.innerHTML = ''
        },1000)
    })
})

game.addEventListener('click', (e) => {
    const x = e.clientX
    const y = e.clientY - game.offsetTop
    
    ctx.beginPath();
    ctx.fillStyle = currentColorChoice;
    ctx.fillRect(x, y, 50, 50);
})
