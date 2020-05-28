import axios from 'axios';

const key = "pk_05205de348e94240ad9d3a74c508521f";

export default axios.create({
    baseURL: 'https://cloud.iexapis.com/stable'
})