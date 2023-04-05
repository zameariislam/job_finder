import React from 'react';
import Sidebar from '../components/Sidebar';
import JobListHeader from '../components/JobListHeader';
import JobList from '../components/JobList';

const Home = () => {
    return (
        <>

            
                
                
                    <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                            <h1 class="lws-section-title">All Available Jobs</h1>
                            <JobListHeader />
                        </div>
                        <JobList />
                        <JobList />
                        <JobList />
                        <JobList />
                        <JobList />
                        <JobList />
                    </main>
              
            

        </>
    );
};

export default Home;