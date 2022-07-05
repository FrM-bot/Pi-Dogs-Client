import React, { useState } from 'react'
import DataListStyles from './dataList.module.css'
import menuStyles from './menu.module.css'

const DataList = ({ data, selected, setSelected, defaultValue, defaultText }) => {
    const [showData, setshowData] = useState(false)

    const onSelect = (text) => {
        setshowData(false)
        setSelected(text)
    }

    return (
        <>
            {
                showData && <div className={menuStyles.click_to_close} onClick={() => setshowData(false)} />
            }

            <div className={DataListStyles.container_data}>
                <button className='button w-100' onClick={() => setshowData(!showData)}>
                    <span>{selected.replace('_', ' ') || defaultText}</span>
                </button>
                {
                    showData &&
                    <div className={DataListStyles.data_list}>
                        {
                            defaultText &&
                            <span className={DataListStyles.text} onClick={() => onSelect(defaultValue)}>{defaultText}</span>
                        }
                        {
                            data?.map((text) => (
                                <span key={text} className={DataListStyles.text} onClick={() => onSelect(text)}>
                                    {
                                        text.replace('_', ' ')
                                    }
                                </span>
                            ))
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default DataList