import React, { useContext} from 'react'
import { formatDistance } from 'date-fns'
import { JobContext } from '../hook/use-content'
import { JobDetail} from '../components'
import { useParams} from 'react-router-dom'

function JobDetailContainer() {
    const { id } = useParams();
    console.log(id);
    const {state} = useContext(JobContext)
    const { loading, jobs } = state;
    console.log(jobs);

    const jobId = jobs && jobs.find(prevId => prevId.id !== id);
    console.log(jobId);

    return (
        <div className='details'>
            {loading && <p>Loading...</p>}           
                <JobDetail className='detail-style'>
                    <JobDetail.Sidebar className='side-bar'>
                        <JobDetail.Link to="/">
                            <i className="ri-arrow-left-line"></i>
                            Back to search
                        </JobDetail.Link>
                        <JobDetail.Apply>
                            <JobDetail.Title>How to Apply</JobDetail.Title>
                            <JobDetail.Text dangerouslySetInnerHTML={{ __html: jobId.how_to_apply }}></JobDetail.Text>
                        </JobDetail.Apply>
                    </JobDetail.Sidebar>
                    <JobDetail.Content className="content">
                        <JobDetail.MediumTitle>{jobId.title}</JobDetail.MediumTitle>
                        <JobDetail.Type className>{jobId.type}</JobDetail.Type>
                        <JobDetail.JobDate className="job-date">
                            <i className="ri-timer-2-line"></i>
                            <JobDetail.Time dateTime={jobId.created_at}>
                                {formatDistance(new Date(jobId.created_at), new Date())}
                            </JobDetail.Time>
                        </JobDetail.JobDate>
                        <JobDetail.Company className="company-details">
                            {jobId.company_logo && (
                                <JobDetail.Logo src={jobId.company_logo} alt="company logo" />
                            )}
                            <JobDetail.SmallTitle>{jobId.company}</JobDetail.SmallTitle>
                            <JobDetail.Location className="job-location">
                                <i className="ri-earth-fill"></i>
                                <span>{jobId.location}</span>
                            </JobDetail.Location>
                        </JobDetail.Company>
                        <JobDetail.Description className='description'
                            dangerouslySetInnerHTML={{ __html: jobId.description }}>
                        </JobDetail.Description>
                    </JobDetail.Content>
                </JobDetail>
            )
            )
        </div >
    )
}

export default JobDetailContainer
