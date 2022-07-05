import { useState, useEffect } from 'react'
import RenderCardDogs from '../compenents/renderCardDogs';
import { GET_DOGS } from '../../services/GET_DOGS';
import cardStype from '../styles/logo.module.css'
import indexStyles from './index.module.css'
import { Link } from 'react-router-dom';

export const Index = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
      GET_DOGS({ page: 1}).then(({ data }) => setDogs(data))
    }, [])
  return (
    <main>
      <div className='flex space-between gap-1 lg-col min-h-100 py-2'>
        <div className='center'>

      <div className={cardStype.wrapper}>
            <div className={cardStype.card}>
                <h1>
                  
                  <span className={cardStype.enclosed}>The Wiki</span>Dogs
                </h1>
            </div>
          </div>
      </div>
        <div className='center'>
          <img src="dog.png" alt="Logo" className={indexStyles.dog_logo} />
        </div>
      </div>
      <div className='card-v2 flex space-between align-center mt-4'>
        <span>Some dogs</span>
        <Link to={'/dogs'}>
        <button className='button'>
          <span>
            See all
          </span>
        </button>
        </Link>
      </div>
      <RenderCardDogs dogs={dogs} />
      <div className='flex flex-end'>
        
      </div>
    </main>
  )
}

export default Index