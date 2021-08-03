/*
*/

import React from 'react';
import { ForumDataInterface } from './interface';

export const localContextProvider :React.Context<any> = React.createContext(null);

export function createDefaultState() :ForumDataInterface {
    return {
        forum: [
            {
                username: '123456789012',
                avatar: 5,
                uid: '123456789',
                threadtitle: 'temp thread title asdasdas dsad sad',
                threadtext: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae modi deserunt totam quibusdam voluptate optio alias voluptates, aliquam dolorum',
                threadid: 123456789,
                threaddate: 1627853279508,
            },
            {
                username: 'temp2',
                avatar: 2,
                uid: '111111111',
                threadtitle: 'what the heck adas das das dasdasdas ',
                threadtext: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae modi deserunt totam quibusdam voluptate optio alias voluptates, aliquam dolorum',
                threadid: 123456789,
                threaddate: 1627843179508,
            },
        ],
        currentThread:  {
            username: 'temp1',
            avatar: 5,
            uid: '123456789',
            threadtitle: 'temp thread title',
            threadtext: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae modi deserunt totam quibusdam voluptate optio alias voluptates, aliquam dolorum',
            threadid: 123456789,
            threaddate: 1627853279508,
            replies: [
                {
                    replyid: '12313',
                    username: 'hehehehe',
                    avatar: 2,
                    uid: '1234644',
                    time: 1627853279508,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, culpa.'
                },
                {
                    replyid: '12313',
                    username: 'what the',
                    avatar: 7,
                    uid: '1234644',
                    time: 1627853279508,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, culpa.'
                },
            ]
        }//end of current thread
    }//end of return
}
