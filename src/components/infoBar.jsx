import './infoBar.css'
import SchoolIcon from '@mui/icons-material/School';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';

function infoBar(){
    return(
        <>
            <div className="infoBarContainer flex justify-center items-center h-20 w-auto">
                <div className="mx-5">
                    <h1 className='text-1xl'>
                        <SchoolIcon/>
                        <span>   Siena College of Taytay</span>
                    </h1>
                </div>
                <div className="mx-5">
                    <h1 className='text-1xl'>
                        <CakeIcon/>
                        <span>   24 Years Old</span>
                    </h1>
                </div>
                <div className="mx-5">
                    <h1 className='text-1xl'>
                        <AlternateEmailIcon/>
                        <span>   jeramydaradal@gmail.com</span>
                    </h1>
                </div>
                <div className="mx-5">
                    <h1 className='text-1xl'>
                        <PhoneIcon/>
                        <span>   +63-9622683998/</span>
                        <span> +63-9171387916</span>
                    </h1>
                </div>
                
                
            </div>
            
        </>
    )
}

export default infoBar