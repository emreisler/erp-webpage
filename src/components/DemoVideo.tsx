import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const DemoVideo: React.FC = () => {
    return (
        <section id="demo" style={{ padding: '2rem', textAlign: 'center' }}>
            <Title level={2}>Demo Video</Title>
            <Card style={{ maxWidth: '800px', margin: '1rem auto', borderRadius: '10px' }}>
                <video width="100%" controls>
                    <source src="../assets/erp-demo.mov" type="video/mov" />
                    Your browser does not support the video tag.
                </video>
            </Card>
        </section>
    );
};

export default DemoVideo;