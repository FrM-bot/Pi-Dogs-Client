import React, { useEffect, useState } from 'react'
import styles from '../styles/dogDetail.module.css'
import { useParams, Link } from 'react-router-dom'
import { GET_DOG } from '../../services/GET_DOG'

const DogDetails = () => {
  const { id } = useParams()

  const [dog, setDog] = useState({})

  useEffect(() => {
    GET_DOG(id).then(setDog)
  }, [id])
  return (
    <main>
      <div className='flex flex-start my-2'>
        <Link to={-1}>
          <button className='button'>
            <span>
              Back
            </span>
          </button>
        </Link>
      </div>
      <div className='grid-c2-responsive-lg gap-1 card-v2'>
        <div className='center'>
          <div className='img-container center'>
            <img src={dog?.image} alt="" className={styles.img_details} />
          </div>
        </div>

        <div className='flex flex-column justify-center gap-1'>
          <div className=''>
            <span className='subline'>
              Bred: {`${dog.name} years`}
            </span>
  
          </div>

          <div className='subline my-2'>
            <span className='subline'>
              Life span: {`${dog.life_span_min} years`}
            </span>
          </div>

          <div className='subline my-2'>
            <span className='subline'>
              Weight: {`${dog.weight_min} kg - ${dog.weight_max} kg`}
            </span>
          </div>

          <div className='subline my-2'>
            <span className='subline'>
            Height: {`${dog.height_min} cm - ${dog.height_max} cm`}
            </span>
          </div>

          <div className='subline my-2'>
            <span className='subline'>
            Bred for: {dog?.bred_for}
            </span>
          </div>
          <div className='subline my-2'>
            <span className='subline'>
            Breed group: {dog?.breed_group}
            </span>
          </div>

          <div>
            <span>
              temperaments: 
            </span>

              {
                 dog?.Temperaments?.map(({ temperament }) => (
                      <span className='link m-1' key={temperament}>

                      {
                        temperament
                      }
                      </span>
                 ))
              }

          </div>

        </div>

      </div>

    </main>
  )
}

export default DogDetails