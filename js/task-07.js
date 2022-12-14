const sizeControl = document.querySelector('#font-size-control');
const textAbracadabra = document.querySelector('#text');

sizeControl.addEventListener('input', event => {
    textAbracadabra.style.fontSize = `${event.target.value}px`;
})

// console.dir(textAbracadabra)