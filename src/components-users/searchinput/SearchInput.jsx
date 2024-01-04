import React from 'react'
import './searchinput.css'
const SearchInput = () => {
  return (
    <div className='search-input'>
      <span className='search-input__header'>953 Việc Làm IT Cho Developer "Chất"</span>
      <div className='search-input__search'>
        <div className='search-input__search-input'>
            <i className='bx bx-search'></i>
            <input placeholder='Tìm kiếm ...'/>
        </div>
        <div>
        <span>NodeJS</span>
        </div>
        <div className='search-input__search-button'>
            <span>Tìm Kiếm</span>
        </div>
        

      </div>
      <div className='search-input__search-box'>
        <a href='/user'>NodeJS</a>
        <a href='/user'>ReactJS</a>
      </div>
    </div>
  )
}

export default SearchInput
