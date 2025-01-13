import React from 'react';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <AntHeader style={{ backgroundColor: '#2c3e50', display: 'flex', alignItems: 'center' }}>
            <h1 style={{ color: '#ecf0f1', margin: '0 1rem', fontSize: '1.5rem' }}>MRP Lite</h1>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ backgroundColor: '#2c3e50', flex: 1 }}
                items={[
                    { key: '1', label: <span style={{ color: '#ecf0f1' }} onClick={() => handleScroll('capabilities')}>Capabilities</span> },
                    { key: '2', label: <span style={{ color: '#ecf0f1' }} onClick={() => handleScroll('pricing')}>Pricing</span> },
                    { key: '3', label: <span style={{ color: '#ecf0f1' }} onClick={() => handleScroll('contact')}>Contact</span> },
                ]}
            />
        </AntHeader>
    );
};

export default Header;