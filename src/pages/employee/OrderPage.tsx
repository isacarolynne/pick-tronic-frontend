import React from 'react';

import { Typography, Layout, Row, Space, Table, Col } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { formatDateToBrazilian } from '../../utils/date-time';
import { getEquipmentStatusText } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { Order } from '../../constants/types';

const { Content, Header } = Layout;
const { Title } = Typography

const OrderPage = () => {
  const columns: ColumnsType<Order> = [
    {
      title: 'Data da Locação',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: text => <span>{formatDateToBrazilian(text)}</span>,
    },
    {
      title: 'Aluno',
      dataIndex: ['student', 'firstName'],
      key: 'studentFirstName',
    },
    {
      title: 'Matrícula',
      dataIndex: ['student', 'registration'],
      key: 'studentRegistration',
    },
    {
      title: 'Equipamento',
      dataIndex: ['equipment', 'name'],
      key: 'equipmentName',
    },
    {
      title: 'No. de Série',
      dataIndex: ['equipment', 'serialNumber'],
      key: 'equipmentSerialNumber',
    },
    {
      title: 'Data da Devolução',
      dataIndex: 'deliveredAt',
      key: 'deliveredAt',
      render: text => <span>{formatDateToBrazilian(text)}</span>,
    },
    {
      title: 'Situação',
      dataIndex: 'status',
      key: 'status',
      render: text => {
        const status = getEquipmentStatusText(text);

        return <span style={{ backgroundColor: status === 'LOCADO' ? 'yellow' : 'green', color: status === 'DEVOLVIDO' ? 'white' : 'black' }}><b>{status}</b></span>
      },
    },
  ];

  const data: Order[] = [
    {
      key: '1',
      id: "f6d0a27d-ee65-4c3b-972a-277a511d4abd",
      createdAt: "2022-06-11T22:02:19.563Z",
      deliveredAt: "2022-06-18T22:02:19.559Z",
      status: "LOCATED",
      student: {
        id: "66102795-d31a-4314-9c61-b4b58cafe4cf",
        createdAt: "2022-06-11T21:04:52.454Z",
        registration: "2022061101234",
        firstName: "Fellipe Thomás",
        lastName: "Vieira Pires"
      },
      equipment: {
        id: "d1df9d8d-b2b4-4468-9a43-de720fc77abc",
        createdAt: "2022-06-11T21:05:47.031Z",
        serialNumber: "0447839827",
        name: "Arduino 4ª Geração",
        status: "AVAILABLE"
      }
    },
    {
      key: '2',
      id: "f6d0a27d-ee65-4c3b-972a-277a511d4abd",
      createdAt: "2022-06-11T22:02:19.563Z",
      deliveredAt: "2022-06-18T22:02:19.559Z",
      status: "DELIVERED",
      student: {
        id: "66102795-d31a-4314-9c61-b4b58cafe4cf",
        createdAt: "2022-06-11T21:04:52.454Z",
        registration: "2022061101234",
        firstName: "Fellipe Thomás",
        lastName: "Vieira Pires"
      },
      equipment: {
        id: "d1df9d8d-b2b4-4468-9a43-de720fc77abc",
        createdAt: "2022-06-11T21:05:47.031Z",
        serialNumber: "6717839123",
        name: "Trilha Eletrônica",
        status: "AVAILABLE"
      }
    },
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: '#fff' }}>
        <Link replace to="/">Sair</Link>
      </Header>
      <Content style={{ height: '100%' }}>
        <Space direction='vertical' size={100} style={{ display: 'flex', marginTop: '60px' }}>
          <Row>
            <Col span={12} offset={2}>
              <Title level={3}>Histórico de Locações</Title>
            </Col>
          </Row>

          <Row justify='center'>
            <Col span={20}>
              <Table columns={columns} dataSource={data} />
            </Col>
          </Row>
        </Space>
      </Content>
    </Layout>
  );
}

export default OrderPage;
