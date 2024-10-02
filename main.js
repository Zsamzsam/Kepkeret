import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function updateImage() {
    const url = document.getElementById('basic-url').value;
    let size = document.getElementById('size-input').value;
    const borderColor = document.getElementById('color-picker').value;
    let borderWidth = document.getElementById('border-width-input').value;

    console.log('URL:', url);
    console.log('Size:', size);
    console.log('Border Color:', borderColor);
    console.log('Border Width:', borderWidth);

    const img = document.createElement('img');
    img.src = url;
    img.classList.add('img-fluid');

    if (size) {
        size = size.includes('px') ? size : `${size}px`;
        img.style.width = size;
        img.style.height = 'auto';
    }

    if (borderWidth) {
        borderWidth = borderWidth.includes('px') ? borderWidth : `${borderWidth}px`;
        img.style.border = `${borderWidth} solid ${borderColor}`;
    }

    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
}

document.getElementById('basic-url').addEventListener('blur', updateImage);
document.getElementById('size-input').addEventListener('input', updateImage);
document.getElementById('color-picker').addEventListener('input', updateImage);
document.getElementById('border-width-input').addEventListener('input', updateImage);

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});