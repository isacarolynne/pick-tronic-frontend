import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Layout, Row, Space, Col, Form, Input, Button } from 'antd';

import studentIllustration from '../../assets/images/undraw_studying_re_deca.svg';

const { Content } = Layout;
const { Title } = Typography

const StudentLoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);

    navigate('/students/equipments', { replace: true });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Content>
        <Row style={{ height: '100%' }}>
          <Col span={12}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

              height: '100%',
            }}>
              <img src={studentIllustration} alt="Student Illustration" />
            </div>
          </Col>
          <Col span={12} style={{ backgroundColor: '#FFF' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Space direction='vertical' size={120} style={{ display: 'flex' }}>
                <Title level={3} style={{ textAlign: 'center' }}>ALUNOS</Title>

                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Matrícula"
                    name="login"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Senha"
                    name="password"
                    rules={[{ required: true, message: 'Campo obrigatório' }]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Entrar
                    </Button>
                  </Form.Item>
                </Form>
              </Space>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default StudentLoginPage;
