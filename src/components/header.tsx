import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atoms';
import { onToDo } from '../atoms';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
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
    align-items: center;
`;
const NavList = styled.li`
    font-size: 20px;
    margin-left: 50px;
    position: relative;
`;
const Circle = styled(motion.span)`
    width: 5px;
    height: 5px;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: orange;
    border-radius: 5px;
`;

export const Header = () => {
    const isDark = useRecoilValue(isDarkAtom);
    const setIsDark = useSetRecoilState(isDarkAtom);
    const setOnToDo = useSetRecoilState(onToDo);
    const toDoOpen = () => {
        setOnToDo((prev) => !prev);
    };
    const homeMatch = useMatch('/');
    const introMatch = useMatch('introduce');
    const toDoMatch = useMatch('toDo');
    const nav4Match = useMatch('nav4');
    return (
        <Container>
            <Wrap>
                <Nav>
                    <Logo>로고</Logo>
                    <NavList style={{ flex: 1 }}></NavList>
                    <NavList>
                        <Link to="/">
                            Home
                            {homeMatch ? <Circle layoutId="nav" /> : null}
                        </Link>
                    </NavList>
                    <NavList>
                        <Link to="introduce">
                            Produce
                            {introMatch ? <Circle layoutId="nav" /> : null}
                        </Link>
                    </NavList>
                    <NavList>
                        <Link to="toDo">
                            To do
                            {toDoMatch ? <Circle layoutId="nav" /> : null}
                        </Link>
                    </NavList>
                    <NavList>
                        <Link to="nav4">
                            nav4
                            {nav4Match ? <Circle layoutId="nav" /> : null}
                        </Link>
                    </NavList>
                    {/* <NavList>
                        <button
                            onClick={() => {
                                setIsDark((prev) => !prev);
                            }}
                        >
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button onClick={toDoOpen}>Write To Do</button>
                    </NavList> */}
                </Nav>
            </Wrap>
        </Container>
    );
};
