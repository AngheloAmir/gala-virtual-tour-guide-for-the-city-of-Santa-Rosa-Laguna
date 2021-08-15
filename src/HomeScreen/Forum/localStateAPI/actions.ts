/*
*/
import { ActionInterface, actionType, Thread } from "./interface";

export function setThreads(threads :Thread) :ActionInterface{
    return {
        type: actionType.setThreads, payload: threads
    }
}
