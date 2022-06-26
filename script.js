const game = document.querySelector('#game');
game.width = 1200
game.height = 600

const ctx = game.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(250, 50, 50, 50);
