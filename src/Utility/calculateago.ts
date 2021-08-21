/*
    Calculate the time passed
*/

export default function CalculateAgo(threadms :number | undefined) :string {
    if(threadms == undefined ) return 'undefined';
    
    const ago = Date.now() - threadms;
//check if less than a hour
    if(ago <= (59*60*1000)) {
        let mins = Math.round(ago / (60*1000));
        if(mins < 1)
            return 'seconds ago';
        else if(mins == 1)
            return '1 min ago';
        else return mins + ' mins ago';
    }

//check if less than a day
    else if(ago <= (23*60*60*1000)) {
        let hour = Math.round(ago / (60*60*1000));
        if(hour <= 1)
            return hour + ' hour ago';
        else return hour + ' hours ago';
    }
    
    const day = Math.round(ago / (24*60*60*1000));
    if(day === 1)
        return day + ' day ago';
    if(day >= 30 ) {
        const d = new Date(threadms);
        return `${getDay(d.getDay())}, ${d.getDate()} ${getMonth(d.getMonth())}, ${d.getFullYear()}`;
    }
    if(day >= 7 ) {
        const d = new Date(threadms);
        return `${getDay(d.getDay())}, ${d.getDate()} ${getMonth(d.getMonth())}`;
    }
    return day + ' days ago';
}

function getDay(day :number ) {
    switch(day) {
        case 0: return 'Sun';
        case 1: return 'Mon';
        case 2: return 'Tue';
        case 3: return 'Wed';
        case 4: return 'Thu';
        case 5: return 'Fri';
        default: return 'Sat'
    }
}

function getMonth(month :number ) {
    switch(month) {
        case 0: return 'Jan';
        case 1: return 'Feb';
        case 2: return 'Mar';
        case 3: return 'Apr';
        case 4: return 'May';
        case 5: return 'Jun';
        case 6: return 'Jul';
        case 7: return 'Aug';
        case 8: return 'Sep';
        case 9: return 'Oct';
        case 10: return 'Nov';
        default: return 'Dec'
    }
}