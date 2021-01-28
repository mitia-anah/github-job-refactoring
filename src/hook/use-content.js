import { useReducer} from 'react'
import {JobContext} from '../context/job'

function useContent({children}) {
   const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'LOAD_JSON': {
            return {
                ...state,
                loading: false,
                jobs: action.jobs
            }
        }
        default:
            return state
    }
   }, {
       loading: true,
       jobs:[]
   })

   return (
       <JobContext.Provider value={{state, dispatch}}>
           {children}
       </JobContext.Provider>
   )
}

export {useContent, JobContext}
