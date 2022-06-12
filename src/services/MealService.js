import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";
import { authHeader } from "./BaseService";

const API_URL  = BASE_API_URL + '/api/meal';

class MealService {

    findAllByRestaurant(rest_id){
        return axios.get(API_URL + '/retrieve-meal-by-rest/'+rest_id);
    }


    delete(){
        return null;
    }

    edit(){
        return null;
    }
  
}

export default new MealService();