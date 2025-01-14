import React from 'react';
import { Layout, Typography, Space, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Paragraph, Text } = Typography;

const Contact: React.FC = () => {
    return (
        <AntFooter
            id="contact"
            style={{
                textAlign: 'center',
                backgroundColor: '#001529',
                color: '#ffffff',
                padding: '2rem',
            }}
        >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {/* Contact Information */}
                <div>
                    <MailOutlined style={{ fontSize: '1.5rem', marginRight: '0.5rem', color: '#1890ff' }} />
                    <Text style={{ fontSize: '1.2rem', color: '#ffffff' }}>contact@mrplite.cloud</Text>
                </div>

                <Divider style={{ borderColor: '#10bbbb' }} />

                {/* Social Media Links */}
                <Space size="large">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookOutlined style={{ fontSize: '1.5rem', color: '#4267B2' }} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterOutlined style={{ fontSize: '1.5rem', color: '#1DA1F2' }} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined style={{ fontSize: '1.5rem', color: '#0077B5' }} />
                    </a>
                </Space>

                <Divider style={{ borderColor: '#10bbbb' }} />

                {/* Footer Text */}
                <Paragraph style={{ margin: 0, color: '#ffffff' }}>
                    &copy; {new Date().getFullYear()} MRP Lite. All rights reserved.
                </Paragraph>
            </Space>
        </AntFooter>
    );
};

export default Contact;