import React from 'react'

const Card = ({ id, imgURL, name }) => {
    return (
            <div className="card inline-block">

                <div className='img-container'>
                    <img src={imgURL} alt={name} />
                </div>

                <div className='card-content'>
                    <span className='link'>
                        {
                            name
                        }
                    </span>
                </div>
            </div>
    )
}

export default Card