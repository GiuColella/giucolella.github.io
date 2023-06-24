import Header from './header/Header';
import Navbar from './navbar/Navbar';
import './home.css'


export default function Home(){

    return(
        <>
        <div className='cont__home'>
            <div className='cont_header'>
                <Header/>
            </div>
            <div className='cont_carrousel borde'>

            </div>
            <div className='cont_navbar'>
                <Navbar/>
            </div>
            <div className='cont_aside borde'>

            </div>
            <div className='cont_section borde'>

            </div>
            <div className='cont_footer borde'>

            </div>
        </div>
        </>
    );
}