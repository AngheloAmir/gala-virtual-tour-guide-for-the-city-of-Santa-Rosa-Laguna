/*
    Find a path between two points, then return an array of {lat, lng}
    to be used in polyline marker.

    Returns an array of location (path way - polyline)
*/
interface Location {
    lat :number;
    lng :number;
}

/*
    bayan           14.313759,121.112418
    SM --           14.313375,121.099721
    KFC complex     14.29353,121.103716,
    enchanted       14.281996,121.097719
    
*/

export async function FindPath(from :Location, to :Location) {
    const position1 = from; //{lat: 14.313759, lng: 121.112418, };
    const position2 = to; //{lat: 14.281996, lng: 121.097719,  };

    //First, obtain the node (street nodes in OSM) that connects two places
    const osrm_response = await fetch(`http://router.project-osrm.org/route/v1/driving/${position1.lng},${position1.lat};${position2.lng},${position2.lat}?alternatives=false&annotations=nodes`);
    const result        = await osrm_response.json();
    const nodes         = result.routes[0].legs[0].annotation.nodes;
    const stringnode    = nodes.map((node :any) => { return "" + node });

    //Then, convert each nodes into actual latitude and logitude position thru overpass-api
    const overpass_res  = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];node(id:${stringnode});out;`);
    const opresult      = await overpass_res.json();

    //However, the result position is returned in alphabetical order not in the path way order. The code fix it
    const pathway :Array<Location> = nodes.map( (anode :number) => {
        let temp :any;
        for(let i = 0; i < opresult.elements.length; i++) {
            if(opresult.elements[i].id === anode) {
                temp = { lat: opresult.elements[i].lat, lng: opresult.elements[i].lon }
                break;
            }
        }
        return temp;
    });

    return pathway;
}
