

import JobListHeader from '../components/JobListHeader';
import JobList from '../components/JobList';

import { useJobs } from '../hooks/useJobs';

const Home = () => {

    const { jobs, isLoading, isError, error } = useJobs()



    // decide what to render 
    let content;
    if (isLoading) content = <p>Loading.. </p>
    if (!isLoading && isError) content = <p  >{error}</p>
    if (!isLoading && !isError && jobs?.length === 0) {
        return content = <p>No job Found !!</p>
    }
    if (!isLoading && !isError && jobs?.length > 0) {

        content = jobs.map(job => <JobList
            key={job.id
            } job={job} />)

    }


    return (
        <>
            <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 class="lws-section-title">All Available Jobs</h1>
                    <JobListHeader />
                </div>


                {
                    content
                }

            </main>



        </>
    );
};

export default Home;