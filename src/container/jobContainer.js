import React, {useEffect, useContext} from 'react'
import  { Job } from '../components'
import { JobContext } from '../hook/use-content';
// import {Link} from 'react-router-dom'
import { formatDistance } from "date-fns";

export default function JobContainer() {
    const { state, dispatch } = useContext(JobContext)
    const { jobs, loading, description, fulltime, location } = state
    

    const formattedDate = (date) => {
        return formatDistance(new Date(date), new Date());
    };

    useEffect(() => {
        async function fetchJobList() {
            const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fulltime}`;
            const res = await fetch(URL)
            console.log(res);
            const jobList = await res.json()
            dispatch({ type: 'LOAD_JSON', jobs: jobList })
        }
        fetchJobList()
    }, [])

    return (
        <Job>
            {loading && <p>Loading...</p>}
            {!loading && jobs.map(list => (
                <Job.Link to={`/job/${list.id}`} href={list.company_url} key={list.id} className="job">
                    <Job.CardGroup key={list.id}>
                        <Job.Logo src={list.company_logo} />
                        <Job.Card>
                            <Job.Location>{list.location}</Job.Location>
                            <Job.Title>{list.title}</Job.Title>
                            <Job.Type className="type">{list.type}</Job.Type>
                        </Job.Card>
                        <Job.JobMeta className="job-meta">
                            <Job.JobLocation className="job-location">
                                <Job.Icon className="icon">
                                    <i className="ri-earth-fill"></i>
                                </Job.Icon>
                                {list.location}
                            </Job.JobLocation>
                            <Job.Date className="job-date">
                                <Job.Icon className="icon">
                                    <i className="ri-timer-2-line"></i>
                                </Job.Icon>
                                <Job.Time dateTime={list.created_at}>
                                    {formattedDate(list.created_at)}
                                </Job.Time>
                            </Job.Date>
                        </Job.JobMeta>
                    </Job.CardGroup>
                </Job.Link>
            ))}
        </Job>            
    )
}