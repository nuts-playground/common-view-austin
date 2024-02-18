import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${(props) => props.theme.footerBgColor};
    color: ${(props) => props.theme.footerTextColor};
`;
export const Footer = () => {
    return <Container>푸터</Container>;
};
