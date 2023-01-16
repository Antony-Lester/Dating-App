import { View, Text } from "react-native"
import { buttonBackground, buttonText } from "../../styles/swipe"
import { Avoid, Kiss, Marry } from "../Elements/Icons"
import { ArrowLeft, ArrowRight, ArrowUp } from "../Elements/Icons"

//background

//text



export const KissButton = () => (<View style={buttonBackground}>
    <Kiss />
    <ArrowLeft/>
    <Text style={[buttonText]}>Kiss</Text>
    </View>)

export const MarryButton = () => (<View style={buttonBackground}>
    <Marry />
    <ArrowUp/>
    <Text style={buttonText}>Marry</Text>
    </View>)

export const AvoidButton = () => (<View style={buttonBackground}>
    <Avoid />
    <ArrowRight/>
    <Text style={buttonText}>Avoid</Text>
    </View>)