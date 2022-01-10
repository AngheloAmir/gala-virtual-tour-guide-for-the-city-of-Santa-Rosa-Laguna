/*
    return a MapShape (polyline) that draws between two points.
    The returned value is readily to be used with Expoleaftlet
*/
import { NAVCOLORS } from './options';
import { MapShape } from "expo-leaflet";

interface Position {
    lat :number; lng: number
}

interface returnedPath {
    navpath     :MapShape;
    distance    :number;
}

interface FindPathInteface {
    paths       :Array<Position>;
    distance    :number;
}

export async function GetPathWays(id :number, current :Position, destination :Position, isRed? :boolean)  :Promise<returnedPath> {
    try {
        const paths :FindPathInteface = await FindPath(current, destination);

        if(isRed) return {
            distance: paths.distance,
            navpath: {
            // @ts-ignore
            //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
                shapeType: 'polyline', id: id + '', color: 'red', positions: [...paths.paths],
            } 
        }
        return {
            distance: paths.distance,
            navpath: {
                // @ts-ignore
                //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
                shapeType: 'polyline', id: id + '', color: NAVCOLORS[id], positions: [...paths.paths],
            }
        }
    } catch(err) {
        throw err;
    }
}

async function FindPath(from :Position, to :Position) :Promise<FindPathInteface> {
    const position1 = from;
    const position2 = to;

    let osrm_response :any;
    let result        :any;
    let stringnode    :string;
    let nodes         :any;
    let overpass_res  :any;
    let opresult      :any;
    let distance      :number;
   
    //First, obtain the node (street nodes in OSM) that connects two places
    try {
        osrm_response = await fetch(`http://router.project-osrm.org/route/v1/highway/${position1.lng},${position1.lat};${position2.lng},${position2.lat}?alternatives=false&annotations=nodes`);
        result        = await osrm_response.json();
        nodes         = result.routes[0].legs[0].annotation.nodes;
        stringnode    = nodes.map((node :any) => { return "" + node });
        distance      = result.routes[0].legs[0].distance;
    }
    catch(err) {
        console.error('router.project-osrm.org. Result was: ' + JSON.stringify(result) );
        throw new Error('Cant make an API request to router.project-osrm.org. ' + err);
    }

    //Then, convert each nodes into actual latitude and logitude position thru overpass-api
    try {
        overpass_res  = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];node(id:${stringnode});out;`);
        opresult      = await overpass_res.json();
    }
    catch(err) {
        console.error('www.overpass-api.de. Result was: ' + JSON.stringify(opresult) );
        throw new Error('Cant make an API request to www.overpass-api.de. ' + err);
    }

    //However, the result position is returned in alphabetical order not in the path way order. The code fix it
    try {
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

        return {
            paths :pathway,
            distance: distance
        }
    }
    catch(err) {
        console.error('Error after processing API request');
        throw new Error('Error occured after processing API results. ' + err);
    }
}
