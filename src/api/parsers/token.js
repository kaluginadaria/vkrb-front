export default (data) => {
    return {
        accessToken: data['access_token'],
        expiresIn: data['expires_in'] * 1000,
        tokenType: data['token_type'],
        scope: data['scope'],
        refreshToken: data['refresh_token'],
    }
};
