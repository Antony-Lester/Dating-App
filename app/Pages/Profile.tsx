/** @format */
import { useSelector } from 'react-redux';
import Settings from './Profile-Components/Settings';
import Picture from './Profile-Components/Picture';
import Bio from './Profile-Components/Bio';

export default () => {
    const main = useSelector((state : any) => state.app.subPage1)// 'profile','settings'
    const sub = useSelector((state: any) => state.app.subPage2)// 'image', 'info'
    if (main === 'settings') {return(<Settings/>)}
    else { //Profile
        if (sub === 'image') {return(<Picture/>)} else {return(<Bio/>)}
    }
} 