import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 8px;
`;
const Title = styled.div`
    font-size: 16px;
`;
const Area = styled.div<IDrag>``;
interface IBoardList {
    toDoId: number;
    toDoText: string;
    index: number;
}
interface IDrag {
    isDragging: boolean;
}
export const BoardList = ({ toDoId, toDoText, index }: IBoardList) => {
    return (
        <Container>
            <Draggable draggableId={toDoId + ''} index={index}>
                {(magic, snapshot) => {
                    return (
                        <Area
                            isDragging={snapshot.isDragging}
                            ref={magic.innerRef}
                            {...magic.dragHandleProps}
                            {...magic.draggableProps}
                        >
                            <Title>{toDoText}</Title>
                        </Area>
                    );
                }}
            </Draggable>
        </Container>
    );
};
