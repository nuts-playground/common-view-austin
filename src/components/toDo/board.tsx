import { Droppable } from 'react-beautiful-dnd';
import { Snapshot } from 'recoil';
import styled from 'styled-components';
import { IToDo } from '../../atoms';
import { useForm } from 'react-hook-form';
import { BoardList } from './boardList';
const Container = styled.div`
    background-color: white;
    width: calc(50% - 10px);
    min-height: 400px;

    border-radius: 8px;
    margin-top: 30px;
    padding: 20px;
`;
const Input = styled.input`
    display: inline-block;
    width: 100%;
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const Title = styled.h2`
    font-size: 18px;
    text-align: center;
    padding: 20px 0;
`;
const Form = styled.form``;
const Area = styled.div<IArea>`
    width: 100%;
    padding: 10px;
    margin-top: 20px;

    flex-grow: 1;
    background-color: #eee;
`;

interface IBoard {
    boardId: string;
    toDos: IToDo[];
}
interface IForm {
    toDo: string;
}
interface IArea {
    isDraggingOver: boolean;
}

export const Board = ({ boardId, toDos }: IBoard) => {
    console.log(boardId);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const onValid = ({ toDo }: IForm) => {
        console.log(toDo);
        setValue('toDo', '');
    };
    return (
        <Container>
            <Wrap>
                <Title>{boardId}</Title>
                <Form onSubmit={handleSubmit(onValid)}>
                    <Input
                        {...register('toDo', { required: true })}
                        type="text"
                        placeholder={`Write here ${boardId}`}
                    />
                </Form>

                <Droppable droppableId={boardId}>
                    {(magic, snapshot) => {
                        return (
                            <Area
                                isDraggingOver={snapshot.isDraggingOver}
                                ref={magic.innerRef}
                                {...magic.droppableProps}
                            >
                                {toDos?.map((toDo, index) => {
                                    return (
                                        <BoardList key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index} />
                                    );
                                })}
                                {magic.placeholder}
                            </Area>
                        );
                    }}
                </Droppable>
            </Wrap>
        </Container>
    );
};
