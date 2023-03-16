function showCircle(cx, cy, radius) {

    let div = document.createElement('div');

    div.style.width = 0 + 'px';
    div.style.height = 0 + 'px';
    div.style.top = cx + 'px';
    div.style.left = cy + 'px';

    div.className = 'circle';
    document.body.append(div);

    return new Promise((resolve) => {

        button.onclick = function() {
    
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
        }

        div.addEventListener('transitionend', () => resolve(div));
    });
}

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});