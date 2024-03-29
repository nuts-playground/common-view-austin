import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const UserImg = styled.div`
    width: 100px;
    height: 100px;
    display: block;
    background-color: black;
`;

export const userCard = () => {
    <Container>
        <UserImg></UserImg>
    </Container>;
};
