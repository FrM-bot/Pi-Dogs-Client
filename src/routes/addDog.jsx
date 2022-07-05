import React, { useState, useEffect, useRef } from 'react'

import { GET_TEMPERAMENTS } from '../../services/GET_TEMPERAMENTS'
import { POST_DOG } from '../../services/POST_DOG'
import inputStyles from '../styles/input.module.css'
import formStyles from '../styles/form.module.css'
import { useNavigate } from 'react-router-dom'
import InputComponent from '../compenents/inputComponent'

const onlyStringValidator = (value) => {
    const stringValidator = /[0-9]/
    return stringValidator.test(value)
}

const AddDog = () => {
    const navigate = useNavigate()
    const [temperaments, setTemperaments] = useState([])
    const temperamentInputRef = useRef(null)
    // const [temperamentsToSend, setTemperamentsToSend] = useState([])
    const [error, setError] = useState({
        name: '',
        bred_for: '',
        breed_group: '',
        height_min: '',
        weight_min: '',
        height_max: '',
        weight_max: '',
        life_span_min: '',
        image: '',
        dogTemperaments: ''
    })
    const [isPassed, setIsPassed] = useState(false)
    const [dog, setDog] = useState({
        name: '',
        bred_for: '',
        breed_group: '',
        height_min: 0,
        weight_min: 0,
        height_max: 0,
        weight_max: 0,
        life_span_min: 0,
        image: '',
        dogTemperaments: []
    })

    const clearError = (key) => {
        setError({
            ...error,
            [key]: ''
        })
    }
    const setErrorFn = (key, value) => {
        setError({
            ...error,
            [key]: value
        })
    }

    useEffect(() => {
        GET_TEMPERAMENTS().then(setTemperaments).catch(console.error)
        for (const key in error) {
            clearError(key)
        }
    }, [])
    const addTemperament = (value) => {
        const temperamentToAdd = temperaments.find(({ temperament }) => temperament === value)
        if (!temperamentToAdd) {
            throw new Error('Selecciona un temperamento de la lista')
        }
        const temperamentsFilter = temperaments.filter(temperament => temperamentToAdd.id !== temperament.id)
        setTemperaments(temperamentsFilter)
        setDog({
            ...dog,
            dogTemperaments: [...dog.dogTemperaments, temperamentToAdd]
        })
        clearTemperament()
    }
    const removeTemperament = (id) => {

        const temperamentsFilter = dog.dogTemperaments.filter(temperament => id !== temperament.id)
        setDog({
            ...dog,
            dogTemperaments: temperamentsFilter
        })
    }
    const handlerKeyDown = (e) => {
        e.preventDefault()

        if (e.code === 'Enter' && e.target.value?.length > 0) {
            addTemperament(e.target.value)
        }
    }
    // console.log(temperamentsToSend)

    const onSubmit = e => {
        e.preventDefault()

        if (dog.height_min > dog.height_max) {
            return alert(`${dog.height_min} no puede ser mayor a ${dog.height_max}`)
        }

        console.log(dog.weight_min > dog.weight_max, dog.weight_min, dog.weight_max)
        if (dog.weight_min > dog.weight_max) {
            return alert(`${dog.weight_min} no puede ser mayor a ${dog.weight_max}`)
        }

        
        if (dog.dogTemperaments.length === 0) {
            return setErrorFn('dogTemperaments', 'Debes agregar al menos un temperamento.')
        } else {
            clearError('dogTemperaments')
        }

        for (const key in error) {
            if (error[key]) {
                return alert(error[key])
            }
        }

        POST_DOG(dog).then((res) => {
            console.log({res})
            if (res?.message) {
                alert(res?.message)
            }
            navigate(`/dog/${res?.id}`)
        })
        // console.log('se envia')
    }
    const handlerInputChange = (e) => {
        // console.log(e.target.name, e.target.value)
        // console.log(stringVAlidator.test(dog.name))
        // const stringVAlidator = /[0-9]/
        const keysValidatorLengthAndNotNumber = {
            name: true,
            bred_for: true,
            breed_group: true,

        }

        const value = e.target.value
        const key = e.target.name
        if ((value.length < 4 || onlyStringValidator(value)) && (keysValidatorLengthAndNotNumber[key]))  {
            return setErrorFn(key, 'Debe tener una longitud mayor a 4 caracteres y no debe conterner números.')
        } 
        else {
            clearError(key)
        }

        if (((value >= 50 || value <= 0) || !onlyStringValidator(value)) && (key === 'life_span_min'))  {
            return setErrorFn(key, 'Debe conterner solo números y debe ser un valor de entre 1 a 50.')
        } 
        else {
            clearError(key)
        }
        // console.log(e)

        if (e.target.type === 'number') {
            setDog({
                ...dog,
                [key]: Number(value)
            })
        }
        if (e.target.type === 'text') {
            setDog({
                ...dog,
                [key]: value.trim()
            })
        }
    }
    // console.log({ dog })
    const clearTemperament = () => {
        temperamentInputRef.current.value = ''
    }
    // console.log(import.meta.env.VITE_MAGIC_PASS)
    if (!isPassed) {
        return (
            <main>
                <form className={formStyles.form}>
                    <label htmlFor="magicWord">Introduce la palabra mágica</label>
                    <div className='subline w-100'>
                        <input type="text" name='magicWord' className={inputStyles.input} onChange={({ target }) => target.value === import.meta.env.VITE_MAGIC_PASS && setIsPassed(true)}/>
                    </div>
                </form>
            </main>
        )
    }
    return (
        <main>
            <form onSubmit={onSubmit} className={formStyles.form}>
                <fieldset className={formStyles.fieldset}>
                    <legend>Dog</legend>

                    <InputComponent handlerInputChange={handlerInputChange} error={error.name} labelName={'name'} type={'text'} name={'name'} minLength={4} />
                    <InputComponent handlerInputChange={handlerInputChange} error={error.bred_for} labelName={'Bred for'} type={'text'} name={'bred_for'} minLength={4} />
                    <InputComponent handlerInputChange={handlerInputChange} error={error.breed_group} labelName={'Breed group'} type={'text'} name={'breed_group'} minLength={4} />



                    <InputComponent handlerInputChange={handlerInputChange} error={error.image} labelName={'image'} name={'image'} type={'text'} minLength={10} />


               


                    <div className={'flex gap-1 md-col w-100'}>

                        <InputComponent handlerInputChange={handlerInputChange} labelName={'height_min'} name={'height_min'} type={'number'} minValue={1} maxValueLength={3} />
                        <InputComponent handlerInputChange={handlerInputChange} error={error.height_max} labelName={'height_max'} name={'height_max'} type={'number'} minValue={1} maxValueLength={3} />
        

                        
                    </div>

                    <div className={'flex gap-1 md-col'}>
                        <InputComponent handlerInputChange={handlerInputChange} labelName={'weight_min'} name={'weight_min'} type={'number'} minValue={0} maxValueLength={3} />
       
                        <InputComponent handlerInputChange={handlerInputChange} error={error.weight_max} labelName={'weight_max'} name={'weight_max'} type={'number'} minValue={1} maxValueLength={3} />
                    </div>


                    <InputComponent handlerInputChange={handlerInputChange} error={error.life_span_min} labelName={'life_span_min'} name={'life_span_min'} type={'number'} minValue={1} maxValueLength={2} />


                    <div className={'flex gap-1 md-col'}>
                        <label htmlFor='temperamnets' className='subline center'><span>Choose a temperament from this list:
                            </span> </label>
                        <div className='flex w-100'>

                            <input ref={temperamentInputRef} placeholder="touch here" className={`${inputStyles.input_temperament} w-100`} list="temperaments" name="temperamnets" onKeyDown={handlerKeyDown} />
                                <button className='button' type='button' onClick={clearTemperament}>
                                    <span>Clear</span>
                                </button>
                        </div>
                        <button className='button' type='button' onClick={() => addTemperament(temperamentInputRef.current.value)}>
                            <span>
                                Add
                            </span>
                        </button>
                    </div>
                    {
                        error.dogTemperaments &&
                        <span>
                            {
                                error.dogTemperaments
                            }
                        </span>
                    }
                    <datalist id="temperaments">
                        {
                            temperaments.map(({ temperament, id }) => (
                                <option key={id} value={temperament} />
                            ))
                        }
                    </datalist>
                    {
                        dog?.dogTemperaments.length > 0 &&
                        (
                            <div className='flex gap-1 wrap'>
                                <span className='subline'>Temperaments:</span>
                                <div >

                                {
                                    dog?.dogTemperaments.map(({ temperament, id }) => (
                                        <span key={id} className='link  m-1' onClick={() => removeTemperament(id)}>
                                            {
                                                temperament
                                            }
                                        </span>
                                    ))
                                }
                                </div>
                            </div>
                        )
                    }
                </fieldset>
                <button className='button' onSubmit={onSubmit} type='submit' >
                    <span>

                        Submit
                    </span>
                </button>
            </form>
        </main>
    )
}

export default AddDog
