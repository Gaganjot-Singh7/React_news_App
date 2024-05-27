import React from 'react'
import { useContextValue } from './Context.jsx'

function Search() {
  const {DataEvent,query}=useContextValue()

  return (
    <div className="  p-4 text-center">
      <input type="text" className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your search term..." value={query} onChange={(e)=>{ DataEvent(e.target.value);
        console.log("input vakue ",e.target.value);
        console.log("query value ",query);
       }}/>
     
    </div>
  )
}

export default Search