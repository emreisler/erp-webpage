import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Paragraph } = Typography;

const Footer: React.FC = () => {
    return (
        <AntFooter style={{ textAlign: 'center', backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
            <Paragraph style={{ margin: 0 }}>Contact us: contact@example.com</Paragraph>
            <Paragraph style={{ margin: 0 }}>Follow us on social media.</Paragraph>
        </AntFooter>
    );
};

export default Footer;