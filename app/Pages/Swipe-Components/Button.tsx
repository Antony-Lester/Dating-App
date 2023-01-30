import { TouchableOpacity, TouchableHighlight, Text, View } from "react-native"
import { buttonBackground, buttonReport, buttonInfo, buttonText, buttonTextSmall } from "../../styles/swipe"
import { Kiss, Marry, Avoid, Report, Info, Picture } from "../Elements/Icons"
import { ArrowLeft, ArrowUp, ArrowRight } from "../Elements/Icons"

import { animateKiss, animateMarry, animateAvoid } from "../../utils/swipe"
import store from "../../store/store"
import { LOG_KISS, LOG_MARRY, LOG_AVOID } from "../../store/taskTypes"
export const KissButton = () => (<TouchableOpacity style={buttonBackground}
    //onPress={() => {animateKiss(x, screenWidth, opacity);
    //store.dispatch({ type: LOG_KISS, payload: candidate.uid })}}
    >
    <Kiss/>
    <ArrowLeft/>
    <Text style={[buttonText]}>Kiss</Text>
    </TouchableOpacity>)

export const MarryButton = () => (<TouchableOpacity style={buttonBackground}
    //onPress={() => {animateMarry(y, screenHeight, opacity);
    //store.dispatch({ type: LOG_MARRY, payload: candidate.uid })}}
    >
    <Marry/>
    <ArrowUp/>
    <Text style={buttonText}>Marry</Text>
    </TouchableOpacity>)
    
export const AvoidButton = () => (<TouchableOpacity style={buttonBackground}
    //onPress={() => {animateAvoid(x, screenWidth, opacity);
    //store.dispatch({ type: LOG_AVOID, payload: candidate.uid })}}
    >
    <Avoid/>
    <ArrowRight/>
    <Text style={buttonText}>Avoid</Text>
    </TouchableOpacity>)
    
export const ReportButton = () => (<View style={buttonReport}>
    <Report/>
    <Text style={buttonTextSmall}>Report</Text>
    </View>)
    
interface InfoProps {toggle: Boolean}

export const InfoButton = (props: InfoProps) => {
    if (props.toggle) {return (<View style={buttonInfo}>
            <Info/><Text style={buttonTextSmall}>Info</Text></View>)}
    else {return(<View style={buttonInfo}>
        <Picture/><Text style={buttonTextSmall}>Picture </Text></View>)}    
}