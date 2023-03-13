import { Appearance } from "react-native";
import { android } from "./themes/android";

export let setTheme = Appearance.getColorScheme() === 'dark' ? android.dark : android.light

  
//https://m3.material.io/theme-builder#/custom