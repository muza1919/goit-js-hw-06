const sizeControl = document.querySelector('#font-size-control');
const textAbracadabra = document.querySelector('#text');

sizeControl.addEventListener('change', event => {
    textAbracadabra.style.fontSize = `${event.target.value}px`;
})

// console.dir(textAbracadabra)