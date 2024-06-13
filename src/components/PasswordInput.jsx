import React, { useState } from 'react';
import openEyeIcon from '../assets/eye.webp'; // Path to the open eye icon image
import closedEyeIcon from '../assets/show.webp'; // Path to the closed eye icon image

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className='text-primary border border-grey rounded-lg pl-2 h-12'
                style={{ paddingRight: '40px' }}
            />
            <button
                onClick={togglePasswordVisibility}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0'
                }}
            >
                <img
                    src={showPassword ? openEyeIcon : closedEyeIcon}
                    alt={showPassword ? 'Hide password' : 'Show password'}
                    style={{ width: '20px', height: '20px' }}
                />
            </button>
        </div>
    );
};

export default PasswordInput;
