// src/Context.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    auth, 
    onAuthStateChanged 
} from './firebase'; 

// --- Initial Data ---
const initialProducts = [
    { 
        id: 'p1', 
        name: 'Wireless Mouse', 
        price: 799, 
        category: 'Mobile Accessories', 
        image: '/images/stock-mouse.jpg', 
        rating: 4.5 
    },
    { 
        id: 'p2', 
        name: 'USB-C Cable (2m)', 
        price: 249, 
        category: 'Mobile Accessories', 
        image: '/images/stock-cable.jpg', 
        rating: 4.0 
    },
    { 
        id: 'p3', 
        name: 'Power Bank 10000mAh', 
        price: 999, 
        category: 'Mobile Accessories', 
        image: '/images/stock-powerbank.jpg', 
        rating: 4.8 
    },
    { 
        id: 'p4', 
        name: 'Noise Cancelling Headphones', 
        price: 549, 
        category: 'Trending', 
        image: '/images/stock-headphone.jpg', 
        rating: 4.6 
    },
    { 
        id: 'p5', 
        name: 'Smartwatch Basic', 
        price: 999, 
        category: 'Trending', 
        image: '/images/stock-watch.jpg', 
        rating: 4.2 
    },
];

// 1. Create the Context object
const AppContext = createContext();

// 2. Custom Hook to consume the context easily
export const useAppContext = () => useContext(AppContext);

// 3. The Provider Component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // FIX: Loading state for stability
    const [cart, setCart] = useState([]);
    const [products] = useState(initialProducts); 
    const categories = ['Trending', 'Mobile Accessories'];

    // --- Firebase Authentication Listener ---
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Firebase Auth State Changed:", currentUser ? currentUser.email : "Logged out");
            setUser(currentUser);
            setLoading(false); // FIX: Set loading to false after initial check
        });
        return unsubscribe; 
    }, []);

    // --- Cart Functions ---
    const addToCart = (product) => {
        setCart(prevCart => {
            const exists = prevCart.find(item => item.id === product.id);
            if (exists) {
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };
    
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // --- Context Value ---
    const value = {
        // State
        user,
        loading, // Exported loading state
        cart,
        products,
        categories,
        cartTotal,
        
        // Actions
        addToCart,
        removeFromCart,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
