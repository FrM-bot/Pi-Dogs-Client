import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDogDetails } from '../../redux/dogState'

const CardComponent = lazy(() => import('./card'))

export const RenderCardDogs = ({ dogs }) => {
  const dispatch = useDispatch()

  return (
    <div className='columns-3-2-1'>
    {
      dogs?.map((dog) => (
        <div key={dog.id}>
          <Suspense fallback={<div>Loading</div>}>
            <Link to={`/dog/${dog.id}`} onClick={() => dispatch(setDogDetails(dog))}>
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