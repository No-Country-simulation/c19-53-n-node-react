import './Home.css';
import { Link } from 'react-router-dom';
import MenuHome from '../../components/MenuHome/MenuHome';
import Footer from '../../components/Footer';
import NavExample from '../../components/InputComponents/NavExample';
import MoneyButton from '../../components/InputComponents/MoneyButton'


function Home() {
    const availableAmount = '1.234.56';
    const transactions = [
        { id: 1, date: '2024-07-15', description: 'Pago de nómina', amount: '500.00' },
        { id: 2, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        { id: 3, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        { id: 4, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        { id: 5, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        { id: 6, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        { id: 7, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        { id: 8, date: '2024-07-14', description: 'Compra de suministros', amount: '200.00' },
        // Agrega más transacciones según sea necesario
    ]; 

    return (
        <div className="home-container relative ">
            <NavExample />
            <div className="content-wrapper">
                <MenuHome />
                <div className="flex mt-32 ml-80 ">
                    <Link to='/banking' className='mr-32' >
                        <MoneyButton amount={availableAmount}/>
                    </Link>
                </div>
                    <div className='bg-white w-3/12 h-1/2 mt-32 p-4 rounded-lg shadow-lg flex flex-col'>
                    <h2 className='font-bold text-lg mb-2'>Transacciones recientes</h2>
                    <ul className='flex-grow'>
                        {transactions.map(transaction => (
                            <li key={transaction.id} className='mb-2'>
                                <div className='flex justify-between'>
                                    <span>{transaction.date}</span>
                                    <span>{transaction.description}</span>
                                    <span>{transaction.amount}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link to='/activities' className='block text-blue-500 mt-4 text-center'>
                        Ver toda la actividad
                    </Link>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;