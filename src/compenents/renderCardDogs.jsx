import React, { Suspense, lazy, useContext } from 'react'
import { Link } from 'react-router-dom'
import { DogDetailsContext } from '../../context/DogContext'
const CardComponent = lazy(() => import('./card'))

export const RenderCardDogs = ({ dogs }) => {
  const { setDogDetails } = useContext(DogDetailsContext)
  return (
    <div className='columns-3-2-1'>
    {
      dogs?.map((dog) => (
        <div key={dog.id}>
          <Suspense fallback={<div>Loading</div>}>
            <Link to={`/dog/${dog.id}`} onClick={() => setDogDetails(dog)}>
                <CardComponent id={dog?.id} name={dog?.name} imgURL={dog?.image} />
            </Link>
          </Suspense>
        </div>
      ))
    }
    </div>
  )
}

export default RenderCardDogs