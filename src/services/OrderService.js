import { BASE_API_URL } from "@/common/Constants";
import axios from "axios";
import { authHeader } from "./BaseService";

const API_URL  = BASE_API_URL + '/api/order';

class OrderService {

    saveOrder(order, address, cartItems){

        return axios.post(API_URL +'/save', {order,address,cartItems}, {headers: authHeader()});
  
    }

    findall(){
        return axios.get(API_URL + '/find-all-orders');
    }

    findAllOrdersOfUser(){
        return axios.get(API_URL + '/findUserOrders', {headers: authHeader()});
    }
    
 
}

export default new OrderService();