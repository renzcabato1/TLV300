import axios from "axios";

// Define the base URL for API requests, using an environment variable if available
const BASE_URL =  import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Include cookies and authentication credentials in requests
})
