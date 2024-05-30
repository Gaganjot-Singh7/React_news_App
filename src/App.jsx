
import { useEffect, useReducer } from 'react'
import Pagination from '../Pagination'
import Search from './Search.jsx'
import Footer from './Footer.jsx'
import Stories from './Stories.jsx'
import './App.css'
import { ContextProvider } from './Context.jsx'
import reducer from './Reducer.jsx'
import Header from './Header.jsx'
function App() {


  //set Change value in search.jsx


  const DataEvent = (e) => {
    dispatch({
      type: "SetInput",
      value: e

    })
  }




  const removeIteam = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: id
      }
    })
  }

  const fetching = async () => {
    try {
      const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`);
      const data = await res.json();
      console.log("data of api ", data);
      dispatch({
        type: "Set_stories",
        payload: {
          nPages: data.nbPages,
          hits: data.hits
        }
      })
    } catch (error) {
      console.log(error);
    }

  }

  const initialState = {
    isLoading: true,
    query: "HTML",
    page: 0,
    nPages: 0,
    hits: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetching()
  }, [state.query,state.page])


//inc dec pagination functionality
const Increase=()=>{
dispatch({
  type:"INC",
  
})
}

const Decrease=()=>{
  dispatch({
    type:"DEC",
    
  })
}





  return (
    <>
      <ContextProvider value={{ ...state, removeIteam, DataEvent,Increase,Decrease }}>
        <div className='bg-purple-200'>
          <Header/>
          <Search />
          <Pagination />
          <Stories />
          <Footer/>
        </div>
      </ContextProvider>
    </>
  )
}

export default App
