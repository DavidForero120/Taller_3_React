import axios from 'axios';
const URL = "https://hoteliakuepa.herokuapp.com/";

const apiConnect = axios.create({
    url:URL,
});
export default apiConnect;