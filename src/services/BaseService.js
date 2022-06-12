import Store from "../store";

export const authHeader = () => {
    const { currentUser} = Store.state;
    
    return {
        'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        'authorization': 'Bearer '+ currentUser?.token,
    };

}