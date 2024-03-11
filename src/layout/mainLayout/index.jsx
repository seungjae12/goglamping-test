import styled from "styled-components";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function MainLayout({ children }) {
  return (
    <Area>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </Area>
  );
}

const Area = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChildrenWrapper = styled.main`
  flex: 1;
`;
