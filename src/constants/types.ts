export type Equipment = {
  key: string;
  name: string;
  serialNumber: string;
}

export type Order = {
  key: string;
  id: string;
  createdAt: string;
  deliveredAt: string;
  status: string;
  student: {
    id: string;
    createdAt: string;
    registration: string;
    firstName: string;
    lastName: string;
  },
  equipment: {
    id: string;
    createdAt: string;
    serialNumber: string;
    name: string;
    status: string;
  }
}
