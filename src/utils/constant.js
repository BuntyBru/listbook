import axios from "axios";
export const URL = "https://dev-api.strataprop.com";
export const API_URL = "https://dev-api.strataprop.com";
export const staging_URL = "https://dev-api.strataprop.com";
export const my_app = axios.create({ baseURL: API_URL });
export const my_staging_app = axios.create({ baseURL: staging_URL });
