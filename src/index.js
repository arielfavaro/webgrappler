import axios from "axios";
import './lib/cookies';
import { getCookieIdentity } from "./lib/cookies";

const config = {
    endpoint: '/webgrappler',
}

function track(event_name = 'page_view', data = {}) {
    axios.post(config.endpoint, {
        event_name: event_name,
        identification: getCookieIdentity(),
        data: data,
    }).then(() => {

    }).catch((error) => {
        console.error('WebGrapper error:', error);
    });
}

export { config, track }