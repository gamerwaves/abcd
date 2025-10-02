document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('alphabetButton');
    let currentCharCode = 97;

    button.addEventListener('click', () => {
        currentCharCode = currentCharCode < 122 ? currentCharCode + 1 : 97;
        button.textContent = String.fromCharCode(currentCharCode);
    });
});