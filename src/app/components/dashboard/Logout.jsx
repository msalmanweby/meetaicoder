import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Logout() {
    const [showDialog, setShowDialog] = useState(false);
    const router = useRouter();

    const handleLogoutClick = () => {
        setShowDialog(true);
    };

    const handleCancel = () => {
        setShowDialog(false);
    };

    const handleConfirm = () => {
        // Remove Bearer token from localStorage
        localStorage.removeItem('Bearer');
        
        // Redirect to login page
        router.push('/signin/admin');

        setShowDialog(false);
    };

    return (
        <>
            <button onClick={handleLogoutClick} className='flex p-2 rounded-[10px] bg-gray-900'>
                <Image 
                    src='/dashboard/logout.svg' 
                    height={24} 
                    width={24} 
                    alt='logout'
                />
            </button>
            
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-lg font-semibold">Confirm Logout</h2>
                        <p>Are you sure you want to logout?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded mr-2">
                                Cancel
                            </button>
                            <button onClick={handleConfirm} className="px-4 py-2 bg-red-500 text-white rounded">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Logout;
