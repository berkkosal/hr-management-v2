import NetworkManager from "../helper/NetworkManager.ts";
import Endpoints from "../helper/constants/endpoints";

export async function login(email, password) {

    const response = await NetworkManager.post(Endpoints.LOGIN, { email, password });
    const data = await response.data;
    return data;

}