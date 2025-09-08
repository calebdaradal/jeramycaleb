import ProgressBar from './ui-kit/progressBar.jsx'

function Skills(){
    return(
        <>
        <div id="skills" className="bg-neutral-100 skillsContainer flex flex-col justify-center gap-10 items-center rounded-lg shadow-2xs w-7xl">
            <h1 className='text-3xl mt-10   '>SKILLS</h1>
            <div className="flex flex-col sm:flex-row w-full gap-5 sm:gap-10 px-10 sm:px-10">
                <div className="w-full sm:w-1/2 lg:w-1/3">
                <h2 className="text-1xl">ReactJS</h2>
                <ProgressBar progress={80}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">HTML5</h2>
                    <ProgressBar progress={80}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">CSS3</h2>
                    <ProgressBar progress={80}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">Javascript</h2>
                    <ProgressBar progress={80}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">Angular</h2>
                    <ProgressBar progress={80}/>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-5 sm:gap-10 px-10 sm:px-10">
                <div className="w-full sm:w-1/2 lg:w-1/3">
                <h2 className="text-1xl">NodeJS</h2>
                <ProgressBar progress={80} color={"orange"}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">ExpressJS</h2>
                    <ProgressBar progress={60} color={"orange"}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">NextJS</h2>
                    <ProgressBar progress={60} color={"orange"}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">Python</h2>
                    <ProgressBar progress={80} color={"orange"}/>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <h2 className="text-1xl">C#</h2>
                    <ProgressBar progress={60} color={"orange"}/>
                </div>

            </div>
            <div className="flex justify-center items-center w-full gap-10 px-10 sm:px-10 mb-10">
                <div className="w-full sm:w-1/4 lg:w-1/4">
                <h2 className="text-1xl">MySQL</h2>
                <ProgressBar progress={80} color={"orange"}/>
                </div>

            </div>
            
        </div>
        </>
    )
}

export default Skills