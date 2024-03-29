import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { usersState } from '../atoms';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
    width: 100%;
    padding: 100px 20px;
`;
const Wrap = styled.div`
    max-width: 900px;
    margin: auto;
`;
const Title = styled(motion.h1)`
    font-size: 26px;
    padding: 40px 0;
`;
const SubTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 20px;
    span {
        color: orange;
    }
`;
const Text = styled.p`
    font-size: 18px;
    /* color: rgb(155, 154, 151); */
    color: #222222;
    line-height: 1.3;
    margin-top: 30px;
    span {
        color: ${(props) => props.theme.textColor};
        font-size: 20px;
        font-weight: 700;
    }
`;
const IntroduceImg = styled.div`
    background-image: url('/introduce.jpeg');
    background-position: center;
    background-size: cover;
    width: 900px;
    height: 400px;
    border-radius: 10px;
    margin: auto;
`;
const UsersWrap = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
`;
const UserBox = styled(motion.li)<{ backColor: string }>`
    width: 100%;
    height: 200px;
    background-color: ${(props) => props.backColor};
    border-radius: 20px;
    color: ${(props) => (props.backColor === 'rgb(255 255 0)' ? 'black ' : 'white')};
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px 0px;
    position: relative;
    top: 0;
`;
const UserImg = styled.img`
    width: 120px;
    height: 120px;
    position: relative;
    top: -40px;
`;
interface IUsers {
    name: string;
}

export const Introduce = () => {
    const users = useRecoilValue(usersState);
    return (
        <Container>
            <Wrap>
                <Title>Not-Working 을 소개합니다 😀</Title>
                <SubTitle>
                    저희 팀은 서로의 개발 경험과 지식을 공유하며 성장하는 것을 <span>목표</span>로 하고 있습니다.
                </SubTitle>
                <IntroduceImg />
                <Title>팀원 소개 👨‍👦‍👦</Title>
                <UsersWrap>
                    {users.map((user) => (
                        <UserBox
                            whileHover={{ top: '-10px' }}
                            transition={{ duration: 0.2 }}
                            backColor={user.backColor}
                        >
                            <UserImg src="/testImg.png"></UserImg>
                            <h1>{user.name}</h1>
                            <p>{user.major}</p>
                        </UserBox>
                    ))}
                </UsersWrap>
            </Wrap>
        </Container>
    );
};
// 우리 팀은 주로 자율적으로 프로젝트를 수행하고, 서로의 개발 경험과
// 지식을 공유하며 성장하는 것을 목표로 하고 있습니다. 이 블로그를 통해 우리의 학습과 성장 과정을
// 기록하고 다른 이들과 경험을 나누며 함께 성장하는 커뮤니티를 형성하고자 합니다. 우리의 목표는
// 개인적인 발전과 함께 팀 전체가 더 나은 프로페셔널로 성장하는 것입니다. 함께 노력하고 서로에게 영감을
// 주며, 우리의 개인 프로젝트를 통해 더 나은 개발자로 성장하는 것을 지향합니다.
