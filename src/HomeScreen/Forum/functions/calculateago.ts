/*
    Calculate the time passed
*/

export default function CalculateAgo(threadms :number) :string {
    const ago = Date.now() - threadms;
//check if less than a hour
    if(ago <= (59*60*1000)) {
        let mins = Math.round(ago / (60*1000));
        if(mins <= 1)
            return mins + ' min ago';
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
    if(day >= 30 )
        return 'long time ago';
    return day + ' days ago';
}
