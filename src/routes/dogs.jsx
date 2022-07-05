import React, { useState, useEffect, useContext } from 'react'
import RenderCardDogs from '../compenents/renderCardDogs'
import { GET_DOGS } from '../../services/GET_DOGS';
import Pagination from '../compenents/pagination';
import { useLocation } from "react-router-dom"
import { GET_TEMPERAMENTS } from '../../services/GET_TEMPERAMENTS';
import { BreedNameContext } from '../../context/BreedNameProvider'
import DataList from '../compenents/dataList';
const sortByData = ["name", "weight_min"]

export default function DogsPage() {
    const { search} = useLocation()
    const { breedName } = useContext(BreedNameContext)
    const [filterBy, setfilterBy] = useState(window.localStorage.getItem('filterBy') || '')
    const [numberOfPages, setNumberOfPages] = useState(1)
    const [page, setPage] = useState(Number(search.split('=')[1]) || 1)
    const [isAscendant, setIsAscendant] = useState(false)
    const [sortBy, setSortBy] = useState(window.localStorage.getItem('sortBy') || 'name')
    const [dogs, setDogs] = useState([])
    const [temperaments, setTemperaments] = useState([])

    useEffect(() => {
        GET_DOGS({ page, name: breedName, isAscendant, sortBy, filterBy }).then((res) => {
            setNumberOfPages(res.numberOfPages)
            setDogs(res?.data)
        })
    }, [page, breedName, isAscendant, sortBy, filterBy])

    useEffect(() => {
        GET_TEMPERAMENTS().then(setTemperaments).catch(console.error)

    }, [])

    const handelSortByChange = (value) => {
        setSortBy(value)
        window.localStorage.setItem('sortBy', value)
    }

    const handlerFilterChange = (value) => {
        setfilterBy(value)
        window.localStorage.setItem('filterBy', value)
    }

    return (
        <main className='pb-5 my-2'>
            <div className='flex gap-1 md-col'>
                <button htmlFor='isAscendant' className='button' onClick={() => setIsAscendant(!isAscendant)}> 
                    <span>
                        {
                            isAscendant ? 'Descendant': 'Ascendant'
                        }
                    </span>
                </button>
                <span className='center subline'>Sort by</span>
                <DataList selected={sortBy} data={sortByData} setSelected={handelSortByChange} />
                <span className='center subline'>Filter by</span>
                <DataList selected={filterBy} data={temperaments.map(({ temperament }) => temperament)} setSelected={handlerFilterChange} defaultValue={''} defaultText={'All dogs'} />
            </div>
            <RenderCardDogs dogs={dogs} />
            <Pagination setPage={setPage} page={page} lastPage={numberOfPages} />
        </main>
    )
}
