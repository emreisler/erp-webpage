import React, { useState } from 'react';
import { Card, Row, Col, Typography, Modal } from 'antd';

import partList from "../assets/erp-photos/erp-part-list.png"
import stockList from "../assets/erp-photos/stock-list.png"
import tcCreation from "../assets/erp-photos/tc-creation.png"
import operationList from "../assets/erp-photos/operation-list.png"
import operatorScreen from "../assets/erp-photos/operator-screen.png"
import createPo from "../assets/erp-photos/create-production-order.png"

const { Title, Paragraph } = Typography;

interface Picture {
    title: string;
    description: string;
    imageUrl: string;
}

const capabilities: Picture[] = [
    {
        title: 'Detail Part Planning',
        description: 'Get a clear view of your business operations with our intuitive dashboard.',
        imageUrl: partList,
    },
    {
        title: 'Stock Management',
        description: 'Get a clear view of your stock quantities.',
        imageUrl: stockList,
    },
    {
        title: 'Create Production Orders',
        description: 'Create production orders from part/assembly planning definitions.',
        imageUrl: createPo,
    },
    {
        title: 'Operator Screen',
        description: 'Stamp completed operations.',
        imageUrl: operatorScreen,
    },
    {
        title: 'Integrate New Task Centers',
        description: 'Integrate new task centers to erp system easily to let them use in part/assembly plannings.',
        imageUrl: tcCreation,
    },
    {
        title: 'Dashboard Overview',
        description: 'Get a clear view of your business operations with our intuitive dashboard.',
        imageUrl: 'https://via.placeholder.com/600x400', // Replace with your image URL
    },
    {
        title: 'Inventory Management',
        description: 'Easily track and manage your inventory in real-time.',
        imageUrl: 'https://via.placeholder.com/600x400', // Replace with your image URL
    },
    {
        title: 'Report Generation',
        description: 'Generate detailed reports to make informed business decisions.',
        imageUrl: 'https://via.placeholder.com/600x400', // Replace with your image URL
    },
];

const Capabilities: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setCurrentImage(null);
    };

    return (
        <section id="pictures" style={{ padding: '2rem', backgroundColor: '#f7f9fc' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>Pictures</Title>
            <Row gutter={[16, 16]} justify="center">
                {capabilities.map((picture, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt={picture.title}
                                    src={picture.imageUrl}
                                    style={{ borderRadius: '10px', cursor: 'pointer' }}
                                    onClick={() => handleImageClick(picture.imageUrl)}
                                />
                            }
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Title level={4}>{picture.title}</Title>
                            <Paragraph>{picture.description}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal for Image Expansion */}
            <Modal
                visible={isModalVisible}
                footer={null}
                onCancel={handleModalClose}
                centered
                width="80%"
                bodyStyle={{ padding: 0 }}
            >
                <img
                    src={currentImage || ''}
                    alt="Expanded View"
                    style={{ width: '100%', borderRadius: '10px' }}
                />
            </Modal>
        </section>
    );
};

export default Capabilities;