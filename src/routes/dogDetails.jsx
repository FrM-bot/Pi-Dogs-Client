import React, { useEffect, useState, useContext } from 'react'
import styles from '../styles/dogDetail.module.css'
import { useParams, Link } from 'react-router-dom'
import { GET_DOG } from '../../services/GET_DOG'
import { DogDetailsContext } from '../../context/DogContext'

const DogDetails = () => {
  const { dogDetails, setDogDetails } = useContext(DogDetailsContext)

  const { id } = useParams()

  useEffect(() => {
    if (!dogDetails) {
      GET_DOG(id).then(setDogDetails)
    }
  }, [id, dogDetails])

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
            <img src={dogDetails?.image} alt="" className={styles.img_details} />
          </div>
        </div>

        <div className='flex flex-column justify-center gap-1'>
          <div className=''>
            <span className='subline'>
              Bred: {`${dogDetails?.name} years`}
            </span>
  
          </div>

          <div className='subline my-2'>
            <span className='subline'>
              Life span: {`${dogDetails?.life_span_min} years`}
            </span>
          </div>

          <div className='subline my-2'>
            <span className='subline'>
              Weight: {`${dogDetails?.weight_min} kg - ${dogDetails?.weight_max} kg`}
            </span>
          </div>

          <div className='subline my-2'>
            <span className='subline'>
            Height: {`${dogDetails?.height_min} cm - ${dogDetails?.height_max} cm`}
            </span>
          </div>

          <div className='subline my-2'>
            <span className='subline'>
            Bred for: {dogDetails?.bred_for}
            </span>
          </div>
          <div className='subline my-2'>
            <span className='subline'>
            Breed group: {dogDetails?.breed_group}
            </span>
          </div>

          <div>
            <span>
              temperaments: 
            </span>

              {
                 dogDetails?.Temperaments?.map(({ temperament }) => (
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