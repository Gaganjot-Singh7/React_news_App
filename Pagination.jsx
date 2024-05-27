import React from 'react'
import { useContextValue } from './src/Context.jsx'

function Pagination() {
    const { page, nPages,Increase,Decrease } = useContextValue()
    return (
        <div className='text-center'>
            <button onClick={()=>{console.log("Prev clicked");
                Decrease()}} className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded">
                Prev
            </button>
            <span className='font-bold'>{page +1 } of {nPages}</span>
            <button onClick={()=>{Increase()}} className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded">Next</button>
        </div>
    )
}

export default Pagination