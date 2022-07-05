export const GET_TEMPERAMENTS = async () => {
    try {
        const res = await fetch('http://localhost:3001/temperaments')
        const temperaments = res.json()
        return temperaments
    } catch (error) {
        console.error(error)
    }
}