import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    width: 100%;
    padding: 100px 20px;
`;
const Wrap = styled.div`
    max-width: 800px;
    margin: auto;
`;
const Title = styled(motion.h1)`
    font-size: 42px;
    padding: 40px 0;
`;
const SubTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;
const Text = styled.p`
    font-size: 18px;
    color: rgb(155, 154, 151);
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
    width: 800px;
    height: 400px;
    border-radius: 10px;
    margin: auto;
`;

export const Introduce = () => {
    return (
        <Container>
            <Wrap>
                <Title> Not-Working 을 소개합니다 😀</Title>
                <SubTitle>우리 팀은 서로의 개발 경험과 지식을 공유하며 성장하는 것을 목표로 하고 있습니다.</SubTitle>

                <IntroduceImg />
                <Text>
                    우리 팀은 친한 회사 직원들끼리 모여 개인적인 학습과 개발 능력 향상을 위해 만들어진 팀입니다. 팀
                    이름은 <span>"not-working"</span>으로, 이는 우리가 회사에서의 업무가 아닌 개인 프로젝트와 공부에
                    집중하고자 한다는 의미를 담고 있습니다.
                </Text>
            </Wrap>
        </Container>
    );
};
// 우리 팀은 주로 자율적으로 프로젝트를 수행하고, 서로의 개발 경험과
// 지식을 공유하며 성장하는 것을 목표로 하고 있습니다. 이 블로그를 통해 우리의 학습과 성장 과정을
// 기록하고 다른 이들과 경험을 나누며 함께 성장하는 커뮤니티를 형성하고자 합니다. 우리의 목표는
// 개인적인 발전과 함께 팀 전체가 더 나은 프로페셔널로 성장하는 것입니다. 함께 노력하고 서로에게 영감을
// 주며, 우리의 개인 프로젝트를 통해 더 나은 개발자로 성장하는 것을 지향합니다.
