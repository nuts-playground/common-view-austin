import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div``;

const Area = styled.div<IDrag>`
    opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
    background-color: white;
    padding: 10px;
    border-radius: 8px;
`;
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
                {(magic, snapshot) => (
                    <Area
                        isDragging={snapshot.isDragging}
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                    >
                        {toDoText}
                    </Area>
                )}
            </Draggable>
        </Container>
    );
};
