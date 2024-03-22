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
    major: string;
    backColor: string;
}
export const usersState = atom<IUsers[]>({
    key: 'usersState',
    default: [
        { name: '에릭', major: 'Javascript Dev', backColor: 'rgb(30 192 120)' },
        { name: '그린', major: 'Backend Dev', backColor: 'rgb(45 180 0)' },
        { name: '호세', major: 'Javascript Dev', backColor: 'rgb(45 180 0)' },
        { name: '아이언', major: 'Backend Dev', backColor: 'rgb(28 57 187)' },
        { name: '조니', major: 'Backend Dev', backColor: 'rgb(140 140 255)' },
        { name: '테오', major: 'Frontend Dev', backColor: 'rgb(255 255 0)' },
        { name: '오스틴', major: 'Frontend Dev', backColor: '#FF6F0F;' },
    ],
});
