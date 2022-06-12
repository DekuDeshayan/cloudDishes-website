import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";
import { authHeader } from "./BaseService";

const API_URL  = BASE_API_URL + '/api/client';

class CustomerService {

    register(User){
        return axios.post(API_URL + '/sign-up', User);
    }

}

export default new CustomerService();

