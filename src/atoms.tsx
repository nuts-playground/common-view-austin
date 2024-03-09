import { atom } from 'recoil';

export const isDarkAtom = atom({
    key: 'isDark',
    default: false,
});

export const startTextAtom = atom({
    key: 'startText',
    default: true,
});

export const onToDo = atom({
    key: 'onToDo',
    default: false,
});
export interface IToDo {
    id: number;
    text: string;
}
interface IState {
    [key: string]: IToDo[];
}
export const toDoState = atom<IState>({
    key: 'toDoState',
    default: {
        'To Do': [{ id: 215515, text: 'hello' }],
        Done: [{ id: 12515, text: 'hi' }],
    },
});
