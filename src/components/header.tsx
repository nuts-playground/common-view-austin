import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../atoms';
import { onToDo } from '../atoms';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    padding: 20px;
    z-index: 10;
`;

const Wrap = styled.div`
    max-width: 1160px;
    margin: auto;
`;
const Logo = styled(motion.svg)`
    width: 40px;
    height: 40px;
    fill: orange;
    path {
        stroke: black;
        stroke-width: 2px;
    }
`;
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

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    margin-left: 50px;
`;

const SearchInput = styled(motion.input)`
    position: relative;
    right: 25px;
    padding: 7px 5px 7px 30px;
    background-color: transparent;
    border: 1px solid #e5e7eb;
    /* border: 1px solid black; */
    border-radius: 10px;
    transform-origin: right center;
`;
const SearchLogo = styled(motion.svg)`
    width: 15px;
    height: 15px;
    position: relative;
    fill: rgb(107 114 128);

    z-index: 2;
    /* left: 25px; */
`;

const logoVariants = {
    start: { fillOpacity: 1 },
    hover: { fillOpacity: [1, 0, 1], transition: { repeat: Infinity } },
};

interface IKeyword {
    keyword: string;
}

export const Header = () => {
    const { register, handleSubmit, setValue } = useForm<IKeyword>();
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
    const [clickSearch, setClickSearch] = useState(false);
    const onValid = ({ keyword }: IKeyword) => {
        setValue('keyword', '');
    };

    const onClickSearch = () => {
        setClickSearch((prev) => !prev);
    };
    const searchSubmit = () => {};
    return (
        <Container>
            <Wrap>
                <Nav>
                    <Logo
                        variants={logoVariants}
                        initial="start"
                        whileHover="hover"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
                    </Logo>
                    <NavList style={{ flex: 1 }}></NavList>
                    <SearchForm onSubmit={handleSubmit(onValid)}>
                        <SearchLogo
                            animate={{ left: clickSearch ? 0 : 180 }}
                            transition={{ type: 'linear' }}
                            onClick={onClickSearch}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </SearchLogo>
                        <SearchInput
                            {...register('keyword', { required: true, minLength: 1 })}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: clickSearch ? 1 : 0 }}
                            transition={{ type: 'linear' }}
                        />
                    </SearchForm>

                    <NavList>
                        <Link to="/">
                            Home
                            {homeMatch ? <Circle layoutId="nav" /> : null}
                        </Link>
                    </NavList>
                    <NavList>
                        <Link to="introduce">
                            Introduce
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
                    <NavList>
                        {/* <button
                            onClick={() => {
                                setIsDark((prev) => !prev);
                            }}
                        >
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </button> */}
                        <button onClick={toDoOpen}>Write To Do</button>
                    </NavList>
                </Nav>
            </Wrap>
        </Container>
    );
};
