import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
    return (
        <section style={{ textAlign: 'center', padding: '3rem 2rem', background: '#1abc9c', color: '#fff' }}>
            <Title level={2} style={{ color: '#fff' }}>Welcome to MRP Lite Application</Title>
            <Paragraph style={{ fontSize: '1.2rem' }}>
                Streamline your business processes and boost productivity.
            </Paragraph>
        </section>
    );
};

export default HeroSection;