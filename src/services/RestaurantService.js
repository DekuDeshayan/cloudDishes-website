import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";
import { authHeader } from "./BaseService";

const API_URL  = BASE_API_URL + '/api/restaurant';

class RestaurantService {

    findall(){
        return axios.get(API_URL + '/findall');
    }

    findByGeoLocation(province, district, neigh){

        return axios.get(API_URL + '/geosearch?province='+province+'&district='+district+'&neigh='+neigh);
    }

    findById(id){
        return axios.get(API_URL + '/findById/'+id);
    }
  
}

export default new RestaurantService();