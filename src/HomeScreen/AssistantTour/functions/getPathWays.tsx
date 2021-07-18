/*
    return a MapShape (polyline) that draws between two points
*/
import { NAVCOLORS } from './options';

interface Position {
    lat :number; lng: number
}

export async function GetPathWays(id :number, current :Position, destination :Position, isRed? :boolean) {
    try {
        const paths :any = await FindPath(current, destination);
        if(isRed) return {
        // @ts-ignore
        //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
            shapeType: 'polyline', id: id + '', color: 'red', positions: [...paths], 
        }
        return {
        // @ts-ignore
        //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
            shapeType: 'polyline', id: id + '', color: NAVCOLORS[id], positions: [...paths], 
        }
    } catch(err) {
        throw err;
    }
}

async function FindPath(from :Position, to :Position) {
    try {
        const position1 = from;
        const position2 = to;

        //First, obtain the node (street nodes in OSM) that connects two places
        const osrm_response = await fetch(`http://router.project-osrm.org/route/v1/highway/${position1.lng},${position1.lat};${position2.lng},${position2.lat}?alternatives=false&annotations=nodes`);
        const result        = await osrm_response.json();
        const nodes         = result.routes[0].legs[0].annotation.nodes;
        const stringnode    = nodes.map((node :any) => { return "" + node });

        //Then, convert each nodes into actual latitude and logitude position thru overpass-api
        const overpass_res  = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];node(id:${stringnode});out;`);
        const opresult      = await overpass_res.json();

        //However, the result position is returned in alphabetical order not in the path way order. The code fix it
        const pathway :Array<Position> = nodes.map( (anode :number) => {
            let temp :any;
            for(let i = 0; i < opresult.elements.length; i++) {
                if(opresult.elements[i].id === anode) {
                    temp = { lat: opresult.elements[i].lat, lng: opresult.elements[i].lon }
                    break;
                }
            }
            return temp;
        });

        //replace the first node and the last node based on the location of the two
        //this ensure that line do not overlap with markers
        pathway[0] = position1;
        pathway[pathway.length - 1] = position2;

        return pathway;
    } catch(err) {
        throw new Error(err); 
    }
}
