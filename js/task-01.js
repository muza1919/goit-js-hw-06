const categEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categEl.length)

categEl.forEach(item => {
    console.log ('Category: ', item.firstElementChild.textContent);
    console.log ('Elements: ', item.lastElementChild.children.length);
})