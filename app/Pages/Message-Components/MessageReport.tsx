import { Text, TouchableOpacity } from 'react-native'
import { forcedReportContainer, reportContainer, reportText } from '../../styles/message/report'
import { Report } from '../Elements/Icons'
import { MessageInterface } from '../../utils/interfaces'


export const MessageReport = ({ message } : {message:MessageInterface} ) => {
    return (
        <TouchableOpacity style={reportContainer} onPress={()=> console.log('message report clicked', message)}>
            <Text style={reportText}>Report</Text>
            <Report/>
        </TouchableOpacity>)
}

export const ForcedMessageReport = ({ message } : {message:MessageInterface} ) => {
    return (
        <TouchableOpacity style={forcedReportContainer} onPress={()=> console.log('message report clicked', message)}>
            <Text style={reportText}>Report</Text>
            <Report/>
        </TouchableOpacity>)
}