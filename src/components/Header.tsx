import React from 'react';
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
    return (
        <AntHeader style={{ backgroundColor: '#2c3e50', display: 'flex', alignItems: 'center' }}>
            <h1 style={{ color: '#ecf0f1', margin: '0 1rem', fontSize: '1.5rem' }}>ERP Lite</h1>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ backgroundColor: '#2c3e50', flex: 1 }}
                items={[
                    { key: '1', label: <a href="#capabilities" style={{ color: '#ecf0f1' }}>Capabilities</a> },
                    { key: '2', label: <a href="#pricing" style={{ color: '#ecf0f1' }}>Pricing</a> },
                    { key: '3', label: <a href="#demo" style={{ color: '#ecf0f1' }}>Demo</a> },
                ]}
            />
        </AntHeader>
    );
};

export default Header;