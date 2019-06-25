import Auth0 from 'react-native-auth0';
import Config from 'react-native-config';

export default class a0m {
    constructor() {
        this.audience = `https://${Config.AUTH0_DOMAIN}/api/v2/`;
        this.client = new Auth0({ domain: this.audience, clientId: Config.AUTH0_CLIENT_ID });
    }

    login(username, password, scope = false) {
        return new Promise(async (resolve, reject) => {
            try {
                const req = await this.client.auth.passwordRealm({
                    username: username,
                    password: password,
                    audience: this.audience,
                    realm: 'Username-Password-Authentication',
                    scope: 'openid read:current_user update:current_user_metadata'
                });

                return resolve(req);
            } catch(error) {
                reject(error);
            }
        });
    }

    profile(token, id) {
        return new Promise(async (resolve, reject) => {
            try {
                return resolve(await this.client.users(token).getUser({ id: id }));
            } catch (error) {
                reject(error);
            }
        });
    }
}