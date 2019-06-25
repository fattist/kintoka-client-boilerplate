import Auth0 from 'react-native-auth0';
import Config from 'react-native-config';

export default class a0 {
    constructor() {
        this.client = new Auth0({ domain: Config.AUTH0_DOMAIN, clientId: Config.AUTH0_CLIENT_ID });
    }

    info(token) {
        return new Promise(async (resolve, reject) => {
            try {
                return resolve(await this.client.auth.userInfo({ token: token }));
            } catch(error) {
                reject(error);
            }
        })
    }

    login(username, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const req = await this.client.auth.passwordRealm({
                    username: username,
                    password: password,
                    audience: Config.AUTH0_AUDIENCE,
                    realm: 'Username-Password-Authentication',
                    scope: 'openid'
                });

                return resolve(req);
            } catch (error) {
                reject(error);
            }
        });
    }

    register({ email, password, username, phone }) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.client.auth.createUser({
                    email: email,
                    password: password,
                    username: username,
                    metadata: { phone: `+1${phone}` },
                    connection: 'Username-Password-Authentication'
                });

                return resolve(user);
            } catch (error) {
                reject(error);
            }
        });
    }
}