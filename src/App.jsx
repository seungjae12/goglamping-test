import { Outlet } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import styled from "styled-components";

export default function App() {
  return (
    <Area>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Area>
  );
}

const Area = styled.div`
  height: 100vh;
`;

// 코드 수정 주석
