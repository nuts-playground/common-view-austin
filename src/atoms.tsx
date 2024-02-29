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
        '해야 할 것': [{ id: 1, text: 'hello' }],
        '완료한 것': [],
    },
});
