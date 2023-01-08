interface Theme {
    mainLight: string;
    main: string;
    mainDark: string;
    mainText: string;

    subLight: string;
    sub: string;
    subDark: string;
    subText: string;
}
//might need to add: background, surface & error

export const light : Theme = {
    mainLight: '#eeffff',
    main: '#bbdefb',
    mainDark: '#8aacc8',
    mainText: '#000000',

    subLight: '#819ca9',
    sub: '#546e7a',
    subDark: '#29434e',
    subText: '#ffffff',
}
export const dark : Theme = {
    mainLight: '#484848',
    main: '#212121',
    mainDark: '#000000',
    mainText: '#ffffff',

    subLight: '#4f5b62',
    sub: '#263238',
    subDark: '#000a12',
    subText: '#ffffff',
}

export let setTheme : Theme = light