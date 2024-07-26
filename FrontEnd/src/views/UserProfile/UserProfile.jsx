import React from 'react';
import MenuHome from '../../components/MenuHome/MenuHome';
import './UserProfile.css'

function UserProfile() {

    const user = {
        name: 'Emanuel Nieto',
        email: 'emanuel@example.com',
        balance: '1.23'
    };
    return (
        <div className="home-container relative ">
            <div className="content-wrapper">
                <MenuHome />
                <div className=" ml-40 mt-40 bg-white text-zinc-700 font-bold w-96 h-80 rounded-lg flex flex-col shadow-lg">
                    <div className='p-6 '>
                    <div className="profile-header mb-4">
                        <h2 className="text-2xl font-bold">Tu Perfil</h2>
                    </div>
                    <div className="profile-details">
                        <div className="mb-2">
                            <label className="block text-gray-600">Nombre:</label>
                            <span className="text-gray-800">{user.name}</span>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-600">Correo Electrónico:</label>
                            <span className="text-gray-800">{user.email}</span>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-600">Saldo:</label>
                            <span className="text-gray-800">${user.balance}</span>
                        </div>
                    </div>
                    <div className="profile-actions mt-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                            Editar Perfil
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;