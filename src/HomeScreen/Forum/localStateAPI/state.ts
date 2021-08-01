/*
*/

import React from 'react';
import { ForumDataInterface } from './interface';

export const localContextProvider :React.Context<any> = React.createContext(null);

export function createDefaultState() :ForumDataInterface {
    return {
        forum: [
            {
                username: 'temp1',
                avatar: 5,
                uid: '123456789',
                threadtitle: 'temp thread title',
                threadtext: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae modi deserunt totam quibusdam voluptate optio alias voluptates, aliquam dolorum',
                threadid: 123456789,
                threaddate: 'August 1, 9:00am'
            },
            {
                username: 'temp2',
                avatar: 2,
                uid: '111111111',
                threadtitle: 'what the heck',
                threadtext: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae modi deserunt totam quibusdam voluptate optio alias voluptates, aliquam dolorum',
                threadid: 123456789,
                threaddate: 'August 1, 12:00pm'
            },
        ],
        currentThread:  {
            username: 'temp1',
            avatar: 5,
            uid: '123456789',
            threadtitle: 'temp thread title',
            threadtext: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae modi deserunt totam quibusdam voluptate optio alias voluptates, aliquam dolorum',
            threadid: 123456789,
            threaddate: 'August 1, 9:00am',
            replies: [
                {
                    replyid: '12313',
                    username: 'hehehehe',
                    avatar: 2,
                    uid: '1234644',
                    time: 'August 1, 10:00am',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, culpa.'
                },
                {
                    replyid: '12313',
                    username: 'what the',
                    avatar: 7,
                    uid: '1234644',
                    time: 'August 1, 11:00am',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, culpa.'
                },
            ]
        }//end of current thread
    }//end of return
}
