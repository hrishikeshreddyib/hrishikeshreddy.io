/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const secretMessage = document.getElementById('secretMessage');

    if (revealButton && secretMessage) {
        revealButton.addEventListener('click', () => {
            secretMessage.style.display = 'block';
            revealButton.style.display = 'none';
        });
    }
});
