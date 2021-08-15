/*
*/

import React from 'react';
import { ForumDataInterface } from './interface';

export const localContextProvider :React.Context<any> = React.createContext(null);

export function createDefaultState() :ForumDataInterface {
    return {
        forum: [
        ]
    }
}
