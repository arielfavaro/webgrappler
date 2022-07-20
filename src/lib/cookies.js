import Cookies from 'js-cookie';
import { v4 as uuidv4, validate as uuidValidate, version as uuidVersion } from 'uuid';

const options = {
    cookie_name: 'webgrappler_identity',
    expires: 365, // days
    sameSite: 'Lax',
    secure: true,
}

function uuidValidateV4(uuid) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

function handleCookieIdentity() {
    const cookie_value = Cookies.get(options.cookie_name);

    const uuid = uuidValidateV4(cookie_value) ? cookie_value : uuidv4();

    Cookies.set(options.cookie_name, uuid, {
        expires: options.expires,
        sameSite: options.sameSite,
        secure: options.secure
    });
}

function getCookieIdentity() {
    return Cookies.get(options.cookie_name);
}

handleCookieIdentity();

export { getCookieIdentity }