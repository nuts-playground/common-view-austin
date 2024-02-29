import styled from 'styled-components';

const Container = styled.div`
    padding: 100px 20px 0;
    width: 100%;
    height: 1000px;
`;
const Wrap = styled.div`
    max-width: 1160px;
    margin: auto;
`;

export const Home = () => {
    return (
        <Container>
            <Wrap></Wrap>
        </Container>
    );
};
