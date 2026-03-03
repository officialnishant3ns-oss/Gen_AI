import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000/api/v1",
    withCredentials:true
})

export async function register({username,password,email}) {
   try {
     const response = await api.post('/user/register',
        { username,email,password
        }
     )
     return response.data
   } catch (error) {
    console.log(error)
   }
}
export async function login({password,email}) {
   try {
     const response = await api.post('/user/login',
        { email,password
        }
     )
     return response.data
   } catch (error) {
    console.log(error)
   }
}
export async function logout() {
   try {
     const response = await api.delete('/user/logout'
     )
     return response.data
   } catch (error) {
    console.log(error)
   }
}
export async function getUser() {
   try {
     const response = await api.get('/user/get-user')
     return response.data
   } catch (error) {
    console.log(error)
   }
}