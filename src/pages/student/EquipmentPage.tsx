import React, { useState } from 'react';

import { Typography, Layout, Row, Space, Table, Col, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { Equipment } from '../../constants/types';
import { Link } from 'react-router-dom';

const { Content, Header } = Layout;
const { Title } = Typography

const EquipmentPage = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const columns: ColumnsType<Equipment> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'No. de Série',
      dataIndex: 'serialNumber',
      key: 'serialNumber',
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Button type='primary' onClick={() => {
          setSelectedEquipment(record);
        }}>ALUGAR</Button>
      ),
    },
  ];

  const data: Equipment[] = [
    {
      key: '1',
      name: 'Arduino 3ª Geração',
      serialNumber: "1237839321",
    },
    {
      key: '2',
      name: 'Arduino 2ª Geração',
      serialNumber: "5647839999",
    },
    {
      key: '3',
      name: 'Trilha Elétrica',
      serialNumber: "0227999421",
    },
  ];

  const handleCancel = () => {
    setSelectedEquipment(null);
  }

  const handleOk = () => {
    console.log('handleOk')
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: '#fff' }}>
        <Link replace to="/">Sair</Link>
      </Header>
      <Content style={{ height: '100%' }}>
        <Space direction='vertical' size={100} style={{ display: 'flex', marginTop: '60px' }}>
          <Row>
            <Col span={12} offset={2}>
              <Title level={3}>Equipamentos Disponíveis</Title>
            </Col>
          </Row>

          <Row justify='center'>
            <Col span={20}>
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </Space>

        {selectedEquipment && (
          <Modal
            centered
            title="Alugar equipamento"
            visible={Boolean(selectedEquipment)}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Title level={5} style={{ textAlign: 'center' }}>Deseja alugar o equipamento <b>{selectedEquipment.name}</b> ?</Title>
          </Modal>
        )}
      </Content>
    </Layout>
  );
}

export default EquipmentPage;
