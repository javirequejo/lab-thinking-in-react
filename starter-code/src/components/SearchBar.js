import React from 'react';

export default ({onSearch}) => {
    return (
      <form>
        <input className="input is-medium" type="text" placeholder="Search a product" onChange={(e) => onSearch(e.target.value)}/>
      </form>
    )
  }
