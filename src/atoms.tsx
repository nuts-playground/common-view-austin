import { atom } from 'recoil';
//
export const isDarkAtom = atom({
    key: 'isDark',
    default: false,
});

export const startTextAtom = atom({
    key: 'startText',
    default: true,
});
