export const GET_DOGS = async ({ page, name, isAscendant, sortBy, filterBy }) => {
    try {
        const getPage = Number(page) || 1
        const breadName = name || ''
        const ascedant = isAscendant || false
        const sort = sortBy || 'name'
        const filter = filterBy || ''
        const response = await fetch(`http://localhost:3001/dogs?name=${breadName}&page=${getPage}&isAscendant=${ascedant}&sortBy=${sort}&filterBy=${filter}`)
        const dogs = response.json()
        return dogs
    } catch (error) {
        console.error(error)
    }
}