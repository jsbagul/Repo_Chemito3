const toggleBtn = document.getElementById('toggleBtn');
const text = document.getElementById('text');

toggleBtn.addEventListener('click', () => {
    if (text.style.display === 'none') {
        text.style.display = 'block';
        toggleBtn.textContent = 'Hide Text';
    } else {
        text.style.display = 'none';
        toggleBtn.textContent = 'Show Text';
    }
});