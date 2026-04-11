const generateBtn = document.getElementById('generate-btn');
const paletteContainer = document.querySelector('.palette-container');
const copyBtn = document.querySelector('.copy-btn');

generateBtn.addEventListener('click', generatePalette);

paletteContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('copy-btn')) {
    console.log('Copy button clicked');
    console.log('Target element:', e.target);
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showSuccess(e.target))
      .catch((err) => console.error('Failed to copy: ', err));
  } else if (e.target.classList.contains('color')) {
    console.log(e.target);
    const hexValue =
      e.target.nextElementSibling.querySelector('.hex-value').textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showSuccess(e.target.nextElementSibling.querySelector('.copy-btn')),
      )
      .catch((err) => console.error('Failed to copy: ', err));
  }
});

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }
  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll('.color-box');
  console.log('Updating palette display with colors:', colorBoxes);
  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector('.color');
    const hexValue = box.querySelector('.hex-value');
    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

function showSuccess(element) {
  element.classList.remove('far', 'fa-copy');
  element.classList.add('fas', 'fa-check');
  element.style.color = '#48bb78';
  setTimeout(() => {
    element.classList.remove('fas', 'fa-check');
    element.classList.add('far', 'fa-copy');
    element.style.color = '#333';
  }, 1500);
}
// generatePalette();
