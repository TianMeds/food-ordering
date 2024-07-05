import { useEffect, useState } from 'react';
import { getAuthStatus } from '@/utils/auth'; // Adjust this import according to your actual auth utility or API

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            try {
                const status = await getAuthStatus(); // Replace this with your actual auth check logic
                setIsLoggedIn(status);
            } catch (error) {
                console.error('Error fetching auth status:', error);
            }
        };

        fetchAuthStatus();
    }, []);

    return { isLoggedIn };
};

export default useAuth;
