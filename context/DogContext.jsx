import { createContext, useState } from "react"

export const DogDetailsContext = createContext({
  dogDetails: {
    bred_for: "",
    breed_group: "",
    height_max: 0,
    height_min: 0,
    id: 0,
    image: "",
    life_span_min: 0,
    name: "",
    Temperaments: [],
    weight_max: 0,
    weight_min: 0
  },
  setDogDetails: (value) => {}
})


const DogDetailsProvider = ({ children }) => {
  const [dogDetails, setDogDetails] = useState()
  return (
    <DogDetailsContext.Provider value={{ dogDetails, setDogDetails }}>
        {
          children
        }
    </DogDetailsContext.Provider>
  )
}

export default DogDetailsProvider