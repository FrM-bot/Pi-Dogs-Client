export const GET_DOG = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/dogs/${id}`)
        const dogs = response.json()
        return dogs
    } catch (error) {
        console.log(error)
    }
}