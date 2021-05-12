const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const colors2 = ['Gold', 'Orchid', 'LightSkyBlue', '#f56991', 'lightgreen'];
const SQUARES = 1000;

// Generates div elemnts based on the square count
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

// Sets color on square on mouseover (hover)
function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Reset to default black color of mouseout event
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

// Fetch random ocolor from array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
