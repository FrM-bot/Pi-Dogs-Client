import React from 'react'
import paginationStyles from '../styles/pagination.module.css'
import inputStyles from '../styles/input.module.css'
import { useNavigate } from 'react-router-dom'

const Pagination = ({ setPage, page, lastPage }) => {
    const navigate = useNavigate()
    const handlerChange = (e) => {
        const numberPage = Number(e.target.value)
        if (numberPage <= lastPage) {
            setPage(numberPage)
            navigate(`/dogs?page=${numberPage}`)
        }
    }
    const handlerNextPage = () => {
        if (page < lastPage) {
            setPage(prevPage => prevPage + 1)
            navigate(`/dogs?page=${page + 1}`)
        }
    }
    const handlerPrevPage = () => {
        if (page >= 1) {
            setPage(prevPage => prevPage - 1)
            navigate(`/dogs?page=${page -1 }`)
        }
    }
    return (
        <div className={paginationStyles.pag_container}>
            <button className='button' disabled={page === 1} onClick={handlerPrevPage}>
                <span>Previus</span>
            </button>

            <div className={inputStyles.group_pag}>
                <input className={inputStyles.input} placeholder='page' type="number" min='1' max='18' value={page} onChange={handlerChange} />
            </div>
            <span>of</span>
            <span>{lastPage}</span>

            <button className='button' onClick={handlerNextPage}>
                <span>Next</span>
            </button>
        </div>
    )
}

export default Pagination