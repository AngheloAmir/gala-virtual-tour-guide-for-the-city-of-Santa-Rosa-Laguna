/*
    return the distance from one geolocation to another
*/

interface Position {
    lat :number; lng: number
}

export async function getDistance(from :Position, to :Position) :Promise<number | null> {
    try {
        const osrm_response = await fetch(`http://router.project-osrm.org/route/v1/highway/${from.lng},${from.lat};${to.lng},${to.lat}?alternatives=false&annotations=nodes`);
        const result        = await osrm_response.json();
        const distance      = result.routes[0].legs[0].distance;
        return distance;
    }
    catch(err) {
        return null;
    }
}
