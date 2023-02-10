import { TouchableOpacity, Text, View } from "react-native"
import { buttonBackgroundHelper, buttonReport, buttonText, buttonTextSmall } from "../../styles/swipe"
import { Kiss, Marry, Avoid, Report, Info, Picture } from "../Elements/Icons"

import { animateKissButton, animateMarryButton, animateAvoidButton } from "../../utils/swipe"
import { SwipeButtonInterfaceX, SwipeButtonInterfaceY } from "../../utils/interfaces"


export const KissButton = ({x, screenWidth, opacity, uid}: SwipeButtonInterfaceX) => (<TouchableOpacity style={{...buttonBackgroundHelper, alignSelf: 'flex-end'}}
    onPress={() => {animateKissButton(x, screenWidth, opacity, uid)}}
    >
    <Kiss/>
    <Text style={[buttonText]}>Kiss</Text>
    </TouchableOpacity>)

export const MarryButton = ({y, screenHeight, opacity, uid}: SwipeButtonInterfaceY) => (<TouchableOpacity style={buttonBackgroundHelper}
    onPress={() => {animateMarryButton(y, screenHeight, opacity, uid)}}
    >
    <Marry/>
    <Text style={buttonText}>Marry</Text>
    </TouchableOpacity>)
    
export const AvoidButton = ({x, screenWidth, opacity, uid}: SwipeButtonInterfaceX) => (<TouchableOpacity style={{...buttonBackgroundHelper, alignSelf: 'flex-end'}}
    onPress={() => {animateAvoidButton(x, screenWidth, opacity, uid)}}
    >
    <Avoid/>
    <Text style={buttonText}>Avoid</Text>
    </TouchableOpacity>)
    
export const ReportButton = () => (<View style={buttonReport}>
    <Report/>
    <Text style={buttonTextSmall}>Report</Text>
    </View>)
    
interface InfoProps {toggle: Boolean}

export const InfoButton = (props: InfoProps) => {
    if (props.toggle) {
        return (<TouchableOpacity style={buttonBackgroundHelper}>
            <Info/>
            <Text style={buttonText}>Info</Text>
            </TouchableOpacity>)}
    else {
        return(<TouchableOpacity style={buttonBackgroundHelper}>
        <Picture/>
        <Text style={buttonText}>Picture</Text>
        </TouchableOpacity>)}    
}