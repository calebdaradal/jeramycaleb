import timelineElements from '../elements/timelineElements.js'
import WorkIcon from '/work.svg'

function Experience(){
    return(
        <>
        <div id="experience" className="experienceContainer w-full">
            
            {timelineElements.map((element) => {

                return <div key={element.id} className='flex m-4 relative justify-center'>
                    <div
                        className='primaryBgColor w-0.5 h-6 translate-x-5 translate-y-63 opacity-60 sm:hidden'
                    ></div>
                    <div
                        className='primaryBgColor w-0.5 h-6 translate-x-80 translate-y-63 opacity-60 sm:hidden'
                    ></div>
                    <div className='hidden items-start w-44 pt-0.5 relative sm:flex'>
                        <div className='w-100 mx-5 text-gray-500 text-sm'>
                            {element.date}
                        </div>
                        <div className='primaryBgColor w-px h-full translate-x-5 translate-y-10 opacity-30'></div>
                        <img src={WorkIcon} alt="work icon" className={`primaryBgColor w-11 p-1 rounded-lg z-20`} />
                        <div className='primaryBgColor w-10 h-px translate-y-5 opacity-30'></div>
                    </div>
                    <div className='border-1 border-gray-300 rounded-lg px-8 py-4 bg-white w-full text-center z-10 sm:w-96'>
                        <div className='text-lg sm:text-xl'>{element.title}</div>
                        <div className='text-gray-500 text-sm mb-6 sm:mb-8 sm:text-md'>{element.location} {"  "} <span className='sm:hidden'>| {element.date}</span></div>
                        <div className='mb-4 text-left'>{element.description}</div>
                        <div className='flex flex-wrap justify-center'>
                            {element.tech.map((tech, index) => {
                                return <span key={index} className='primaryBgColor rounded-xl px-2 py-1 text-xs m-1 text-white'>{tech}</span>
                            })}
                        </div>
                        <div className='text-sm text-gray-500 mt-2'>{element.company} | {element.type}</div>
                        <img src={WorkIcon} alt="work icon" className={`primaryBgColor w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`} />
                            
                    </div>
                    
                </div>
            })}
        </div>
        </>
    )
}

export default Experience
