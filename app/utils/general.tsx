/** @format */
export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function timeWaiting(date : Date) { 
    let seconds = Math.floor((new Date().getTime() - date.getTime())/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    let weeks = Math.floor(days/7);
    let months = Math.floor(weeks / 4.345);
    let years = Math.floor(months/12)
    if (years) { return `Waiting ${years} year${years > 1 ? 's' : ''}` }
    if (months) { return `Waiting ${months} month${months > 1 ? 's' : ''}` }
    if (weeks) { return `Waiting ${weeks} week${weeks > 1 ? 's' : ''}` }
    if (days) { return `Waiting ${days} day${days > 1 ? 's' : ''}` }
    if (hours) { return `Waiting ${hours} hour${hours > 1 ? 's' : ''}` }
    return minutes ? `Waiting ${minutes} min${years > 1 ? 's' : ''}` : ''
}
  
export const defaultBlurhash: String = '|IIX%9t7uPoe-pj[ROayRj0KWBt7ofxua#aefjRjtRf+wIjZM{WBozWBofEMoL%NWVD%oLWBf6tR%Nayn~WVRPj[bHf6j[s.oLayWBR+ofj[j[aeo}ayRjWCoKofkCj[t7-:fkIUjts:ayoea#WDxafkM|f6kCa}xaayR*'