const body = document.querySelector('body');
document.addEventListener('click', pop);
function pop(event) {
    const x = event.x, y = event.y;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.addEventListener('click', e => {
        button.remove();
        e.stopPropagation();
    });
    body.append(button);
}
