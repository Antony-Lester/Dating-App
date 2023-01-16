import { View, Text } from "react-native"
import { buttonBackground, buttonReport, buttonInfo, buttonText, buttonTextSmall } from "../../styles/swipe"
import { Kiss, Marry, Avoid, Report, Info, Picture } from "../Elements/Icons"
import { ArrowLeft, ArrowUp, ArrowRight } from "../Elements/Icons"

export const KissButton = () => (<View style={buttonBackground}>
    <Kiss/>
    <ArrowLeft/>
    <Text style={[buttonText]}>Kiss</Text>
    </View>)

export const MarryButton = () => (<View style={buttonBackground}>
    <Marry/>
    <ArrowUp/>
    <Text style={buttonText}>Marry</Text>
    </View>)
    
export const AvoidButton = () => (<View style={buttonBackground}>
    <Avoid/>
    <ArrowRight/>
    <Text style={buttonText}>Avoid</Text>
    </View>)
    
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