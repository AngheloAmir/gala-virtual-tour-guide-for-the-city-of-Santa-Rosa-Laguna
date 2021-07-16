/*
    A function that determine if two points are close to each other
*/

interface Position {
    lat :number;
    lng :number;
}

export default function isClose( pointA :Position, pointB :Position, howclose :number) :boolean {
    const distance = Math.sqrt(Math.pow(pointA.lat - pointB.lat, 2) + Math.pow((pointA.lng - pointB.lng), 2))
    if( distance <= howclose ) return true;
    return false;
}
