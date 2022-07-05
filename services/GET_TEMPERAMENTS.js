import { API_URL } from "./API_URL"

export const GET_TEMPERAMENTS = async () => {
    try {
        const res = await fetch(`${API_URL}/temperaments`)
        const temperaments = res.json()
        return temperaments
    } catch (error) {
        console.error(error)
    }
}