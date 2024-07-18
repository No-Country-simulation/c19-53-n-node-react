import './Home.css';
import { Link } from 'react-router-dom';
import MenuHome from '../../components/MenuHome/MenuHome';
import Footer from '../../components/Footer';
import NavExample from '../../components/InputComponents/NavExample';
import MoneyButton from '../../components/InputComponents/MoneyButton'

function Home() {
    const availableAmount = '1.234.56';

    return (
        <div className="home-container relative ">
            <NavExample />
            <div className="content-wrapper">
                <MenuHome />
                <div className="ml-96 mt-24 absolute ">
                    <Link to='/banking' >
                        <MoneyButton amount={availableAmount}/>
                    </Link>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;