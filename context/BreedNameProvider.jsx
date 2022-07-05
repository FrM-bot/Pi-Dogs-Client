import { createContext, useState } from "react"

export const BreedNameContext = createContext({
  breedName: '',
  setBreedName: (value) => {}
})


const BreedNameProvider = ({ children }) => {
  const [breedName, setBreedName] = useState('')
  return (
    <BreedNameContext.Provider value={{ breedName, setBreedName }}>
        {
          children
        }
    </BreedNameContext.Provider>
  )
}

export default BreedNameProvider