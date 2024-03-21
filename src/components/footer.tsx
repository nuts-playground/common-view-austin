import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${(props) => props.theme.footerBgColor};
    color: white;
`;
const Wrap = styled.div`
    max-width: 1160px;
    margin: auto;
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FooterBox = styled.div``;
export const Footer = () => {
    return (
        <Container>
            <Wrap>
                <Row>
                    <FooterBox>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </FooterBox>
                    <FooterBox></FooterBox>
                </Row>
            </Wrap>
        </Container>
    );
};
