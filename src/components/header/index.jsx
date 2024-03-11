import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderArea>
      <h1>
        <Link to="/">G.O Glamping</Link>
      </h1>

      <NavWrapper>
        <ul>
          <li>
            <Link to="/room-view">객실보기</Link>
          </li>
          <li>
            <Link to="/facility-guide">시설안내</Link>
          </li>
          <li>
            <Link to="/booking">예약하기</Link>
          </li>
          <li>
            <Link to="/usage-guide">이용안내</Link>
          </li>
          <li>
            <Link to="/how-to-get-here">오시는길</Link>
          </li>
        </ul>
      </NavWrapper>

      <ul>
        <li>전화기</li>
        <li>카톡</li>
      </ul>
    </HeaderArea>
  );
}

const HeaderArea = styled.header`
  display: flex;
  justify-content: space-between;
`;

const NavWrapper = styled.nav``;
