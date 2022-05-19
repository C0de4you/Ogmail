const userSelector = state => state.auth.user;
const loginHintSelector = state => state.auth.loginHint;

export {
    userSelector,
    loginHintSelector,
};