import axios from 'axios';

/* TODO
Implement them as environment variables
*/
const AUTHOR_ID = 2;
const API_BASE_URL =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

/* The code is creating an instance of the Axios library with a custom configuration. */
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    authorId: AUTHOR_ID,
  },
});

export default api;
