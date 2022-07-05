import { useContext, useState } from 'react'

import { useNavigate } from "react-router-dom"
import { BreedNameContext } from '../../context/BreedNameProvider'
import { Link } from 'react-router-dom';
import inputStyles from '../styles/input.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setBredName } from '../../redux/nameState';
import cardStype from '../styles/logo.module.css'

const Header = ({ openMenu, showMenu }) => {
  const [isSearch, setIsSearch] = useState(false)
  const breedName = useSelector((state) => state.bredName.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlerChange = (e) => {
    if (e.target.value.length > 0) {
      navigate('/dogs')
    }
    dispatch(setBredName(e.target.value))
  }
  const handlerEnterCapture = (e) => {
    if (e.code === 'Enter') {
      navigate(`/dogs`)
    }
  }
  return (
    <header className='header'>
      <nav className='flex space-between align-center gap-1'>
          <div
            className='button-menu'
            onClick={openMenu}
          >
            <button className={showMenu ? 'button btn-v2 close-open-button button-active' : 'button btn-v2 close-open-button'}>
              <span></span>
              <span></span>
            </button>
          </div>
        {
          !isSearch && 
        <Link to={'/'}>

            <div className={cardStype.wrapper}>
              <div className={cardStype.card}>
                <h1>
                  <span className={cardStype.enclosed}>Henry</span>Dogs
                </h1>
              </div>
            </div>
        </Link>

        }
        {
          isSearch &&
          <div className='subline w-100'>
            <input className={inputStyles.input}
              value={breedName}
              onChange={handlerChange}
              onKeyDown={handlerEnterCapture}
              type="search" />
          </div>
        }
        <div className='flex gap-1'>

          <button className='button btn-v2' onClick={() => {
            dispatch(setBredName(''))


            setIsSearch(!isSearch)
          }}>
            <span className='center'>
              <svg className='icon' aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            </span>

          </button>

        </div>
      </nav>
    </header>
  )
}

export default Header