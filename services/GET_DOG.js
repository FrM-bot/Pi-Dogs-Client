import { API_URL } from "./API_URL"
export const GET_DOG = async (id) => {
    try {
        const response = await fetch(`${API_URL}/dogs/${id}`)
        const dogs = response.json()
        return dogs
    } catch (error) {
        console.log(error)
    }
}