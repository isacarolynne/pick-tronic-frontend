import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";

import EmployeeLoginPage from '../pages/auth/EmployeeLoginPage';
import StudentLoginPage from '../pages/auth/StudentLoginPage';
import OrderPage from '../pages/employee/OrderPage';
import HomePage from '../pages/home/HomePage';
import EquipmentPage from '../pages/student/EquipmentPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="auth">
          <Route path="students" element={<StudentLoginPage />} />
          <Route path="employees" element={<EmployeeLoginPage />} />
        </Route>

        <Route path="students">
          <Route path="equipments" element={<EquipmentPage />} />
        </Route>
        <Route path="employees">
          <Route path="orders" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

