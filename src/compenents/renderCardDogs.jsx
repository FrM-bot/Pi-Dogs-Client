import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
const CardComponent = lazy(() => import('./card'))

export const RenderCardDogs = ({ dogs }) => {
    console.log({dogs})
  return (
    <div className='columns-3-2-1'>
    {
      dogs?.map((dog) => (
        <div key={dog.id}>
          <Suspense fallback={<div>Loading</div>}>
            <Link to={`/dog/${dog.id}`}>
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