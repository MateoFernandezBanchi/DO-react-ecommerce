import React from 'react'
import {Link} from 'react-router-dom'
import { useSearchContext } from '../../context/SearchContext'

const SearchUI = () => {
    const { search, saveSearch} = useSearchContext ()
    const searchProduct = (e) => {
        e.preventDefault()
        if (search.trim() === '') return;
    }

    return ( 

        <div>
        <form className="form-inline my-2 my-lg-0 searchForm"
            onSubmit= {searchProduct}
        >
 
            <input className="form-control2 mr-sm-2" 
            type="search" placeholder="¿Que deseas buscar?" aria-label="Search" 
            onChange = {e => saveSearch(e.target.value)}
            />
           <Link to='./productos'> <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Buscar </button></Link>

        </form>
        </div>
     );
}
 
export default SearchUI;