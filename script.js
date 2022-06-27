const colorsChoice = document.querySelector('#colorsChoice');
const game = document.querySelector('#game');
const cursor = document.querySelector('#cursor');
game.width = 1200
game.height = 600
const gridCellSize = 10

const ctx = game.getContext('2d');
const gridCtx = game.getContext('2d');

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

function addPixelIntoGame(){

        const x = cursor.offsetLeft
        const y = cursor.offsetTop - game.offsetTop

        console.log("click");
        
        ctx.beginPath();
        ctx.fillStyle = currentColorChoice;
        ctx.fillRect(x, y, gridCellSize, gridCellSize);
}
cursor.addEventListener('click', (e) =>{
    addPixelIntoGame()
})
game.addEventListener('click', () =>{
    addPixelIntoGame()
})




function drawGrids(ctx, width, height, cellWidth, cellHeight) {

    ctx.beginPath();
    ctx.strokeStyle = '#ccc';

    for(let i = 0; i < width; i++){
        ctx.moveTo(i * cellWidth, 0);
        ctx.lineTo(i * cellWidth, height);
    }
    for(let i = 0; i < height; i++){
        ctx.moveTo(0, i * cellHeight);
        ctx.lineTo(width, i * cellHeight);
    }
    ctx.stroke()
}
drawGrids(gridCtx, game.width, game.height, gridCellSize, gridCellSize);

game.addEventListener('mousemove', (e) =>{
    console.log('x :', e.clientX);
    console.log('y :', e.clientY);

    const cursorLeft = e.clientX - (cursor.offsetWidth / 2);
    const cursorTop = e.clientY - (cursor.offsetHeight / 2);

    cursor.style.left = `${Math.floor(cursorLeft / gridCellSize) * gridCellSize}px`;
    cursor.style.top = `${Math.floor(cursorTop / gridCellSize) * gridCellSize}px`;
})
