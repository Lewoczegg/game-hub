import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bdccf5212b594237891223a926124013'
    }
})