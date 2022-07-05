import { API_URL } from "./API_URL"

export const POST_DOG = async ({
    name,
    bred_for,
    breed_group,
    height_min,
    weight_min,
    height_max,
    weight_max,
    life_span_min,
    image,
    dogTemperaments
}) => {
    try {
        const dogToCreate = {   
            name,
            bred_for,
            breed_group,
            height_min,
            weight_min,
            height_max,
            weight_max,
            life_span_min,
            image, 
            temperamentsIds: dogTemperaments.map(({id}) => id) 
        }
        const response = await fetch(`${API_URL}/dogs`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(dogToCreate)
        })
        const newDog = await response.json()

        return newDog
    } catch (error) {
        console.error(error)
    }
}