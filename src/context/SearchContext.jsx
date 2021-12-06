import {createContext, useState, useContext} from 'react'
const SearchContext = createContext([])
export const useSearchContext = () => {
    return useContext(SearchContext) 
}

export const SearchContextProvider = ( {children} ) => {
    const [search, saveSearch] = useState('');
  

  
    return (
      <div>
        <SearchContext.Provider
          value={{
              search,
           saveSearch
          }}
        >
            {children}
        </SearchContext.Provider>
      </div>
    );
  }
  