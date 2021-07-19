/* function timeToDecimalNumber(hour,minutes) {
    if (minutes > 60) {
        return 'Para 8:42 coloque /"8" em horas e /"42 em minutos"'
    }
    const decimalHour = minutes * 100 / 60;
    const timeToDecimalNumberResult = hour + ',' + decimalHour;
    //const timeToDecimalNumberResultFloor = timeToDecimalNumberResult.toFixed(1);
    console.log(`Em termos de dura?ðo, ${hour}:${minutes} é o mesmo que ${timeToDecimalNumberResult} horas`)
} 

timeToDecimalNumber(8,42);
*/

/* function durationToDecimalHours(hours, minutes, hourValue) {
    const totalMinutes = hours * 60 + minutes
    const decimalHours = totalMinutes / 60;
    const floorDecimalHours = decimalHours.toFixed(1);
    console.log(`${floorDecimalHours} horas de trabalho a R$ ${hourValue}`);
    console.log(`R$ ${(floorDecimalHours * hourValue).toFixed(2)}`);
} */

/* function calcValuePerDuration(hours, minutes, hourValue) {
    const decimalHours = (hours * 60 + minutes) /60;
    const floorDecimalHours = decimalHours.toFixed(1);
    console.log(`${floorDecimalHours} horas de trabalho a R$ ${hourValue} por hora totalizam R$ ${(floorDecimalHours * hourValue).toFixed(2)}`);
} */

function durationToDecimalHours(hours, minutes, seconds = 00) {
    const decimalHours = (hours * 60 + minutes + seconds/60) /60;
    const floorDecimalHours = decimalHours.toFixed(1);
    console.log(`${hours}:${minutes}:${seconds} equivale a ${floorDecimalHours} horas`);
}



