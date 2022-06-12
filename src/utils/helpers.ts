export const getEquipmentStatusText = (status: string) => {
  if (status === 'LOCATED') {
    return 'LOCADO';
  }

  return 'DEVOLVIDO'
}
