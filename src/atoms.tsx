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

export const boxState = atom({
    key: 'boxState',
    default: 0,
});

//

interface IUsers {
    name: string;
}
export const usersState = atom<IUsers[]>({
    key: 'usersState',
    default: [
        { name: '오스틴' },
        { name: '호세' },
        { name: '그린' },
        { name: '에릭' },
        { name: '아이언' },
        { name: '에릭' },
        { name: '조니' },
    ],
});
