import axios from "axios"
 export const  base_url = "http://localhost:8082/api/auth/"

const registerUser =async (user:any)=>{
    console.log(user)
    try {
        const userdetails=await axios.post(`${base_url}register`,user,{withCredentials: true })
        console.log(userdetails)
        return userdetails.data
    } catch (error) {
        console.log(error)
        throw error;
    }
    // return axios.post(`${base_url}register`,user,{withCredentials: true })//here user is a object we mentioned here because we want to send request from user object
    // .then(res=>res.data)
    // .catch(error=>{throw error;});
    
}


const loginUser=async (login:any)=>{
    return axios.post(`${base_url}login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;});
}

export {loginUser,registerUser};