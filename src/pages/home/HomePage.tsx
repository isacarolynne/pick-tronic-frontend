import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Typography, Layout, Row, Space } from 'antd';

import accountCircleRedIcon from '../../assets/images/account_circle_red.svg'

const { Content } = Layout;
const { Title } = Typography

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ height: '100vh' }}>
      <Content style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Space direction='vertical' size={120} style={{ display: 'flex' }}>
          <Row justify='center'>
            <Title>LOCAÇÃO DE EQUIPAMENTOS ELETRÔNICOS</Title>
          </Row>

          <Row align='middle' justify='center'>
            <Space size={200}>
              <Card bordered={false} style={{ width: 300, backgroundColor: '#4CB7D8' }} onClick={() => navigate('auth/students')}>
                <Row justify='center'>
                  <img src={accountCircleRedIcon} alt="Account circle" />
                </Row>

                <Row justify='center'>
                  <Title level={3} style={{ color: '#FFF', paddingTop: '10px' }}>ALUNOS</Title>
                </Row>
              </Card>

              <Card bordered={false} style={{ width: 300, backgroundColor: '#4CB7D8' }} onClick={() => navigate('auth/employees')}>
                <Row justify='center'>
                  <img src={accountCircleRedIcon} alt="Account circle" />
                </Row>

                <Row justify='center'>
                  <Title level={3} style={{ color: '#FFF', paddingTop: '10px' }}>FUNCIONÁRIOS</Title>
                </Row>
              </Card>
            </Space>
          </Row>
        </Space>
      </Content>
    </Layout>
  );
}

export default HomePage;
