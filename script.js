//your JS code here. If required.
function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Call the function once to set the initial size
updateWindowSize();

// Attach the updateWindowSize function to the window's resize event
window.addEventListener('resize', updateWindowSize);
