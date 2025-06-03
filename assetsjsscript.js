/* Todo o conteúdo JavaScript que estava na tag <script> */
const DOM = {
    authModal: document.getElementById('authModal'),
    openLogin: document.getElementById('openLogin'),
    // ... resto das seleções ...
};

const state = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    userData: JSON.parse(localStorage.getItem('userData')) || {}
};

function initApp() {
    if (state.isLoggedIn) {
        document.querySelector('.auth-buttons').style.display = 'none';
        DOM.userMenu.style.display = 'block';
        
        if (state.userData.name) {
            DOM.userAvatar.innerHTML = state.userData.name.charAt(0).toUpperCase();
        }
    }
}

// ... resto das funções ...