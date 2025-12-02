// src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context'; 
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from '../firebase'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                // --- SIGN IN ---
                await signInWithEmailAndPassword(email, password);
                console.log("User successfully signed in.");
            } else {
                // --- SIGN UP ---
                await createUserWithEmailAndPassword(email, password);
                console.log("User successfully created and signed in.");
            }
            
            navigate('/'); 

        } catch (err) {
            const errorMessage = err.message.replace('Firebase: Error (auth/', '').replace(').', '').replace(/-/g, ' ');
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>{isLogin ? 'Sign In to Anuj Tech Mart' : 'Create Anuj Tech Mart Account'}</h2>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password (min 6 characters)" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                
                {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
                </button>
            </form>
            
            <button 
                onClick={() => {
                    setIsLogin(!isLogin);
                    setError(''); 
                }} 
                className="toggle-button"
            >
                {isLogin ? 'New customer? Create an Account' : 'Already have an account? Sign In'}
            </button>
        </div>
    );
};

export default Login;
