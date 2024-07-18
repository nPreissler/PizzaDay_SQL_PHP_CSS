function compraRealizada(){
    alert('Transfira os BitCoins para a chave que será informada na entrega')
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
});