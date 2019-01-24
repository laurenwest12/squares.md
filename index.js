const colors = ['blue', 'green', 'yellow','orange']

colors.forEach(color => {
    const square = document.createElement('div')
    square.className = 'square'
    square.id = `${color}`
    square.style.backgroundColor = `${color}`
    document.querySelector('.squareContainer').appendChild(square)
})

const showButton = document.querySelector('#show')

showButton.addEventListener('click', function () {
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => square.style.display = 'none');
})

const hideButton = document.querySelector('#hide')

hideButton.addEventListener('click', function () {
    
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.display = '')
})

function toggleFunction (color) {
  const x = document.getElementById(`#${color}`);
  if (x.style.display === "none") {
    x.style.display = '';
  } else {
    x.style.display = 'none';
  }
}

colors.forEach(color => {
    const button = document.createElement('BUTTON')
    button.id = 'toggle'
    const colorProper = color.slice(0,1).toUpperCase() + color.slice(1)
    button.innerHTML = `Toggle ${colorProper}`
    document.querySelector('.buttonContainer').appendChild(button)
})

const toggleButtons = document.querySelectorAll('#toggle')

toggleButtons.addEventListener('click', toggleFunction(blue))
