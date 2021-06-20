
import React from 'react';
import './SearchBox.css'
const SearchBox=({onInputChange})=>{
    return(
        <div className="search-container">
        <input 
        onChange={(event)=>onInputChange()}
placeholder="Type Keywords" className="search-input"/>
        </div>
    )

}
export default SearchBox;