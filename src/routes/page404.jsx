import React from 'react'
import styles404 from './page404.module.css'
import { Link } from 'react-router-dom'
const Page404 = () => {
  return (
    <main className='center'>
        <p className={styles404.glitch}>
            <span aria-hidden="true">
                404
            </span>
            <span>
                404
            </span>
            <span aria-hidden="true">
                404
            </span>
        </p>
            <div className='center my-2'>
              <p>Content not found</p>
              <div className='center'>

              <Link to='/'>
                <button className='button'>
                    <span>Go home</span>
                </button>
              </Link>
              </div>
            </div>
    </main>
  )
}

export default Page404