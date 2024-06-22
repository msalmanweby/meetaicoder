import axios from 'axios';
import baseUrl from './UrlPatterns';
import Cookies from 'js-cookie';

const fetchData = async () => {
    try {
        const access_token = Cookies.get()
        
        console.log("tokeenn===============", access_token)
        const response = await axios.post(`${baseUrl}authentication/getAdminProfile/`, { withCredentials: true });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data', error);
    }
};

export default fetchData;
