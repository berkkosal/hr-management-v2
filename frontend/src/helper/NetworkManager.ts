import axios from "axios";


class NetworkManager {
    private baseURL = "http://localhost:8080/api/v1";

    private headers = {
        "Accept-Language": "tr-TR",
        "Content-Type": "application/json"
    };
    private configuration = {
        "baseURL": this.baseURL,
        "headers": this.headers
    };
    private axiosInstance = axios.create({ ...this.configuration });


    ////**************AXİOS************/////////
    public get = async (url: string, headers?: any, params?: any) => {
        try {
            const response = await this.axiosInstance.get(url, {
                headers,
                params
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public post = async (url: string, data?: any, headers?: any, params?: any) => {
        try {
            const response = await this.axiosInstance.post(url, data, {
                headers,
                params
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }



}
const networkManager = new NetworkManager();
export default networkManager;