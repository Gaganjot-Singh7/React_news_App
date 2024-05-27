
import { useContextValue } from './Context.jsx';

function Stories() {

    const { isLoading, hits,removeIteam } = useContextValue();


    if (isLoading) {
        return <>
            <h1 className='font-bold text-3xl text-center'>Loading....</h1>
        </>
    }

    return (
        <>
            
            {hits.map((data) => {
                const { title, author, num_comments, objectID, url } = data
                return (<div className='text-center text-black bg-white border border-black rounded-3xl p-3 m-8' key={objectID}  >

                    <p><h2 className='font-bold'>{title}</h2>
                        <span className='text-blue-600 font-bold'>By {author}</span> | <span>{num_comments}Comments</span>
                        <p>
                            <button className="outline-red-600  bg-white text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-300"><a href={url} target='_blank'>Read More</a></button>
                            <button className="outline-red-600  bg-white text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-md transition-colors duration-300" onClick={()=>{
                                removeIteam(objectID)
                                console.log("value removed",objectID);
                            }}>Remove</button>
                        </p>

                    </p>
                </div>)
            })}
        </>


    )
}

export default Stories