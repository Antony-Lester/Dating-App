import { Alert } from "react-native";
import { useSelector } from "react-redux"
import store from "../store/store";
import { LOG_REMOVE } from "../store/taskTypes";

export const removeCheck = ({ name }: {name : string}) => { 
    
    Alert.alert(
        //title
        `Avoid ${name} Permanently?`,
        //body
        'If they did something bad you should report them',
        [
            {
                text: 'Avoid',
                onPress: () => { console.log('Avoid Check: Avoid Pressed'); store.dispatch({ type: LOG_REMOVE}) },
                style: 'default',
            },
            { text: 'Report', onPress: () => console.log('Avoid Check: Report Pressed') },
            {
                text: 'Cancel',
                onPress: () => console.log('Avoid Check: Cancel Pressed'),
                style: 'cancel',
            },
          ],
        { cancelable: true }
        //clicking out side of alert will not cancel
      );
    
    console.log(name)
}



//