import React from 'react';
import logo from './img/logo.png';

export default function ExampleL() {
    return (
        <>
        
            <div style={{ backgroundColor: '#11111D', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '30rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ width: '389x' }} />
                        <h2 style={{ color: '#FFFFFF', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>Data Collection System</h2>
                        <p style={{ color: '#FFFFFF', textAlign: 'center' }}>business value co.td</p>
                    </div>

                    <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', width: '300px' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login BOXXX</h2>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
