import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.bgColor};
    transition: all 0.2s;
    width: 100%;
    padding: 20px;
`;

const Wrap = styled.div`
    max-width: 1160px;
    margin: auto;
`;
const Logo = styled.h1``;
const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const NavList = styled.li`
    font-size: 20px;
    margin-left: 50px;
`;

export const Header = () => {
    const isDark = useRecoilValue(isDarkAtom);
    const setIsDark = useSetRecoilState(isDarkAtom);
    return (
        <Container>
            <Wrap>
                <Nav>
                    <Logo>로고</Logo>
                    <NavList style={{ flex: 1 }}></NavList>
                    <NavList>navList1</NavList>
                    <NavList>navList2</NavList>
                    <NavList>navList3</NavList>
                    <NavList>navList4</NavList>
                    <NavList>
                        <button
                            onClick={() => {
                                setIsDark((prev) => !prev);
                            }}
                        >
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </NavList>
                </Nav>
            </Wrap>
        </Container>
    );
};
