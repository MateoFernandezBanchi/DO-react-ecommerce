import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom' 


const SearchUI = () => {
     const [ search, saveSearch] = useState ()
    const [submitvalid, setSubmitvalid ] = useState(false)
    // const [search, setSearch] = useState ('cama')

    const searchProduct = (e) => {
        e.preventDefault()
        setSubmitvalid(true)
        if (search.trim() === '') return;
    }
        let navigate = useNavigate();
        function handleClick() {
          navigate(`/productos/search/${search}`)
        }
    return ( 
       <div>
           {/* {submitvalid? <Redirect to={`/productos/search/${search}`} /> : 
           <Redirect to='/productos' />} */}
            
        <form className="form-inline my-2 my-lg-0 searchForm"
            onSubmit= {searchProduct}
        >
            <input className="form-control2 mr-sm-2" 
            type="search" placeholder="¿Que deseas buscar?" aria-label="Search" 
             onChange = {e => saveSearch(e.target.value)}
            />
            <button style={{margin:'0 auto'}} className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick={handleClick}>Buscar 
                 </button>
                
        </form>
        </div>
      
     );
}
 
export default SearchUI;