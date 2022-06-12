import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";

const API_URL  = BASE_API_URL + '/api/user';

class UserService {

    login(User){
        return axios.post(API_URL + '/login', User);
        
    }

}

export default new UserService();