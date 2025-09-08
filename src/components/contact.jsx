import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DownloadIcon from '@mui/icons-material/Download';
export default function Contact() {

    return (
        <>
            <div id='contact' className="contactContainer flex flex-col items-center justify-center bg-white rounded-xl mb-15 overflow-hidden">
                {/* <h1 className="text-3xl">Contact</h1> */}
                <div className="flex flex-col sm:flex-row justify-center items-center w-50 w-fit">
                    <div className="flex justify-center items-center p-30 flex-wrap text-7xl leading-20 w-full h-full bg-sky-100">
                        <h1 style={{fontFamily: "Cambria"}}>SEND <br/> ME A <br/>MESSAGE</h1>
                    </div>
                    <div className="flex flex-col justify-center gap-5 items-left m-10 w-auto p-10" >
                        <h1
                            className="text-3xl cursor-pointer hover:underline transition duration-200"
                            style={{ fontFamily: 'Cambo' }}
                            onClick={() => navigator.clipboard.writeText("JeramyDaradal@gmail.com")}
                            title="Click to copy"
                            >
                            JeramyDaradal@gmail.com
                        </h1>
                        <div className='flex items-center'>
                            <LinkedInIcon fontSize='large'/>
                            <h1 className="underline mx-2" style={{ fontFamily: 'Cambo' }}><a href="https://www.linkedin.com/in/jeramy-daradal-a281b1366">Jeramy Daradal</a></h1>
                        </div>
                        <div className='flex items-center'>
                            <PhoneAndroidIcon fontSize='large'/>
                            <h1 className=" cursor-pointer hover:underline transition duration-200"
                            style={{ fontFamily: 'Cambo' }}
                            onClick={() => navigator.clipboard.writeText("+63-9622683998")}
                            title="Click to copy">+63-9622683998</h1>
                            <h1> /</h1>
                            <h1 className=" cursor-pointer hover:underline transition duration-200"
                            style={{ fontFamily: 'Cambo' }}
                            onClick={() => navigator.clipboard.writeText("+63-9171387916")}
                            title="Click to copy">+63-9171387916</h1>
                        </div>
                        <div className="resume mt-10">
                            <a href="./Jeramy-Caleb-Daradal-CV.pdf" download><button className="p-5 rounded-full"><DownloadIcon/> My Resume</button></a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}