import './Home.css'
import { Link } from 'react-router-dom'
import MenuHome from '../../components/MenuHome/MenuHome'
import Footer from '../../components/Footer'
import NavExample from '../../components/InputComponents/NavExample'

function Home() {
    return (
        <div>
            <NavExample />
            <MenuHome  className='min-h-screen flex flex-col'/>
            <div className="container">
                <div className="link-container">
                    <Link to='/banking' className='flex justify-center items-center w-full h-full'>
                        <span>Dinero disponible</span>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;