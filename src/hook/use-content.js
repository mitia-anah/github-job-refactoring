import React, { createContext, useReducer } from 'react'
import {JobContext} from '../context/jobContext'

function UseContent({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOAD_JSON': {
                return {
                    ...state,
                    loading: false,
                    jobs: action.jobs
                }
            }
            case 'LOAD_DETAILS': {
                return {
                    ...state,
                    loading: false,
                    details: action.details
                }
            }
            case 'FULLTIME': {
                return { ...state, fulltime: action.fulltime }
            }
            case 'LOCATION': {
                return { ...state, location: action.location }
            }
            case 'DESCRIPTION': {
                return { ...state, description: action.description }
            }
            default:
                return state
        }
    }, {
        loading: true,
        jobs: [],
        details: '',
        description: '',
        location: [],
        fulltime: true
    })

    return (
        <JobContext.Provider value={{ state, dispatch }}>
            {children}
        </JobContext.Provider>
    )
}
export { UseContent, JobContext }
