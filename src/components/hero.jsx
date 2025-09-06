import './hero.css'

function hero(){
    return(
        <>
        <div className="mt-20 flex flex-col justify-center items-center heroContainer h-150 text-align-left">
            <div className="flex-col justify-center items-left"><h2 className='text-3xl italic text-neutral-500'>
                Hello! I'm
            </h2>
            <div className="mt-3 flex">
                <h1 className='text-9xl leading-35'>
                JERAMY
            </h1>
            <h1 className='text-9xl leading-35 ml-10 primaryBgColor text-white'>
                CALEB
            </h1>
            
            </div>
            <h1 className='text-9xl leading-50'>
                DARADAL
            </h1>
            </div>
            
            <h2 className='jobTitle text-3xl text-neutral-500'>
                WEB/SOFTWARE DEVELOPER
            </h2>
        </div>
        </>
    )
}

export default hero