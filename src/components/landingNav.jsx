import './landingNav.css'
import DownloadIcon from '@mui/icons-material/Download';

function landingNav(){
    return(
        <>
            <div className="flex justify-center items-center h-24 w-auto rounded-full primaryBgColor navContainer">
                <div className="imageContainer primaryBgColor w-auto rounded-full">
                    <img className="w-60 rounded-full" src="./DSC_0015.jpg" alt="logo" />
                </div>
                <div className="menuButton ml-5 flex gap-2">
                    <button className="p-2 text-lg"> Home</button>
                    <button className="p-2 text-lg">Experience</button>
                    <button className="p-2 text-lg">Skills</button>
                    <button className="p-2 text-lg">Contact</button>
                </div>
                <div className="resume ml-50 mr-5">
                    <a href="./Jeramy-Caleb-Daradal-CV.pdf" download><button className="p-5 rounded-full"><DownloadIcon/> My Resume</button></a>
                </div>
            </div>
        </>
    )
}

export default landingNav