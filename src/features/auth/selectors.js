const userSelector = state => state.auth.user || localStorage.getItem('login');
const loginHintSelector = state => state.auth.loginHint;

export {
    userSelector,
    loginHintSelector,
};