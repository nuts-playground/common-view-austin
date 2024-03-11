import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    padding: 100px 20px 0;
    width: 100%;
    height: 1000px;
`;
const Wrap = styled.div`
    max-width: 1160px;
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
`;
const ProjectImg = styled.div`
    width: 100%;
    height: 200px;
    background-color: #e2e2e2;
`;
const ProjectText = styled.div`
    height: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
`;
const projectVariants = {
    visible: { top: -10 },
};

export const Home = () => {
    return (
        <Container>
            <Wrap>
                <Wrapper>
                    <div style={{ flex: 1 }}></div>
                    <ProjectWrap>
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <ProjectList variants={projectVariants} whileHover="visible">
                                <ProjectImg />
                                <ProjectText>
                                    <h1 style={{ marginBottom: '10px' }}>프로젝트 이름</h1>
                                    <p>프로젝트 설명</p>
                                </ProjectText>
                            </ProjectList>
                        ))}
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
    );
};
