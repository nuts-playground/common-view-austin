import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { ProjectOv } from './projectOv';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Container = styled.div`
    padding: 100px 20px 0;
    width: 100%;
    height: 1000px;
`;
const Wrapp = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 12;
`;
const Row = styled.div`
    display: flex;
    justify-content: center;
`;
const Box = styled(motion.div)`
    width: 700px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    /* transform: translateY(calc(50vh - 250px)) */
`;
const Wrap = styled.div`
    max-width: 1160px;
    min-width: 800px;
    margin: auto;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const ProjectWrap = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 30px;
    width: 70%;
`;
const ProjectList = styled(motion.li)`
    width: 100%;
    height: 300px;
    border-radius: 8px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
    overflow: hidden;
    position: relative;
    h1 {
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        font-size: 14px;
    }
    span {
        font-size: 12px;

        display: inline-block;
        background-color: black;
        padding: 5px;
        color: white;
        width: 70px;
        border-radius: 15px;
        display: flex;
        align-items: center;
    }
`;
const ProjectImg = styled.div`
    width: 100%;
    height: 300px;
    background-color: #e2e2e2;
`;
const ProjectText = styled(motion.div)`
    background-color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 2;
    height: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    opacity: 0;
`;
const ProjectIcon = styled.svg`
    cursor: pointer;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    fill: white;
    path {
        stroke: white;
        stroke-width: 0;
    }
`;
const boxVarinats = {
    visible: {
        transform: `translateY(calc(50vh - 250px))`,
    },
};
const projectVariants = {
    visible: { top: -10 },
};
const infoVariants = {
    visible: { opacity: 1 },
};
interface IBox {
    box: number;
}

export const Home = () => {
    const navigate = useNavigate();
    // const [box, SetBox] = useRecoilState('boxState');
    const [box, setBox] = useState(false);
    const onClickProject = ({ index }: { index: number }) => {
        navigate(`project/${index}`);
        setBox(true);
    };
    console.log(box);
    const projectMatch = useMatch('/project/:listId');
    return (
        <>
            <Container>
                <Wrap>
                    <Wrapper>
                        <div style={{ flex: 1 }}></div>
                        <ProjectWrap>
                            {[1, 2, 3, 4, 5, 6].map((index) => (
                                <ProjectList
                                    layoutId={index + ''}
                                    key={index}
                                    onClick={() => onClickProject({ index })}
                                    variants={projectVariants}
                                    whileHover="visible"
                                >
                                    <ProjectImg />
                                    <ProjectText variants={infoVariants}>
                                        <h1>프로젝트 이름</h1>
                                        <p>프로젝트 설명</p>
                                        <span>
                                            <ProjectIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                            </ProjectIcon>
                                            Github
                                        </span>
                                    </ProjectText>
                                </ProjectList>
                            ))}
                            {projectMatch ? (
                                <AnimatePresence>
                                    {/* <ProjectOv box={box}></ProjectOv> */}
                                    <Wrapp onClick={() => navigate('/')}>
                                        <Row>
                                            <Box layoutId={projectMatch.params.listId} animate="visible"></Box>
                                        </Row>
                                    </Wrapp>
                                </AnimatePresence>
                            ) : null}
                            {/* <ProjectList>
                            <ProjectImg />
                            <ProjectText></ProjectText>
                        </ProjectList>
                        <ProjectList>
                            <ProjectImg />
                            <ProjectText></ProjectText>
                        </ProjectList>
                        <ProjectList>
                            <ProjectImg />
                            <ProjectText></ProjectText>
                        </ProjectList>
                        <ProjectList>
                            <ProjectImg />
                            <ProjectText></ProjectText>
                        </ProjectList>
                        <ProjectList>
                            <ProjectImg />
                            <ProjectText></ProjectText>
                        </ProjectList> */}
                        </ProjectWrap>
                    </Wrapper>
                </Wrap>
            </Container>
        </>
    );
};
