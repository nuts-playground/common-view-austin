import styled from 'styled-components';
import { onToDo } from '../../atoms';
import { useRecoilValue } from 'recoil';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { toDoState } from '../../atoms';
import { Board } from './board';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
`;

const Container = styled.div`
    position: fixed;
    width: 500px;
    /* height: 500px; */
    background-color: skyblue;
    border-radius: 8px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    top: calc(50vh - 250px);
    left: calc(50vw - 250px);
    padding: 30px;
    box-sizing: border-box;
`;
const Title = styled.h2`
    padding: 20px 0;
    font-size: 20px;
    text-align: center;
`;
const BoardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

export const ToDo = () => {
    // const toDoOpen = useRecoilValue(onToDo)/;
    const toDo = useRecoilValue(toDoState);
    const onDragEnd = (info: DropResult) => {
        console.log(info);
    };
    return (
        <Wrapper>
            <DragDropContext onDragEnd={onDragEnd}>
                <Container style={{ opacity: 1 }}>
                    <Title>오늘의 할 일</Title>
                    <BoardWrap>
                        {Object.keys(toDo).map((boardId) => {
                            return <Board boardId={boardId} key={boardId} toDos={toDo[boardId]}></Board>;
                        })}
                    </BoardWrap>
                </Container>
            </DragDropContext>
        </Wrapper>
    );
};
