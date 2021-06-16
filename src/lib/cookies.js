// import { SHA256 } from 'crypto-js';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

const options = {
    cookie_name: 'webgrappler_identity',
    expires: 10 * 365, //Math.pow(2, 31),
    sameSite: 'strict',
    secure: true,
}

// const cookies_api = Cookies.withAttributes({ expires: options.expires, sameSite: options.sameSite });

function verifyIdentity() {
    if (!Cookies.get(options.cookie_name)) {
        Cookies.set(options.cookie_name, uuidv4(), { expires: options.expires, sameSite: options.sameSite });
    }
}

function getCookieIdentity() {
    return Cookies.get(options.cookie_name);
}

verifyIdentity();

export { getCookieIdentity }