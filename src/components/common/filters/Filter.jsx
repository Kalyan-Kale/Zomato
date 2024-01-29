import React from 'react'
import './filter.css'

const Filter = ({filterlist}) => {
  return (
    <div>
        <div className='filter max-width'>
        {filterlist && filterlist.map((filter)=>{
            return <div key={filter.id} className='filter-item'>  <span className='filter-icon'>{filter.icon}</span>
            <span className='filter-title'>{filter.title}</span></div>
        })}
    </div>
    </div>
  )
}

export default Filter