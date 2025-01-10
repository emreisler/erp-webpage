import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

interface Plan {
    name: string;
    price: string;
    features: string[];
}

const plans: Plan[] = [
    { name: 'Basic', price: '$19.99/month', features: ['Feature A', 'Feature B'] },
    { name: 'Pro', price: '$49.99/month', features: ['Feature A', 'Feature B', 'Feature C'] },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" style={{ padding: '2rem', backgroundColor: '#f7f9fc' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>Pricing</Title>
            <Row gutter={[16, 16]} justify="center">
                {plans.map((plan, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <Card
                            title={plan.name}
                            bordered
                            style={{ textAlign: 'center' }}
                            hoverable
                        >
                            <Title level={3} style={{ color: '#16a085' }}>{plan.price}</Title>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <Text>{feature}</Text>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Pricing;