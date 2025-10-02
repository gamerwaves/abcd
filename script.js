var current = 0;
var icons = ['boba1.png', 'boba2.png'];
setInterval(function () {
    var icon = (++current % icons.length);
    var url = icons[icon];
    var favicon = document.getElementById('favicon');
    if (favicon) {
        favicon.href = url;
    }
}, 50);
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('alphabetButton');
    let currentCharCode = 97;

    button.addEventListener('click', () => {
        currentCharCode = currentCharCode < 122 ? currentCharCode + 1 : 97;
        button.textContent = String.fromCharCode(currentCharCode);
    });
});