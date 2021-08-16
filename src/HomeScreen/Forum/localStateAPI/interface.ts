/*
*/
export interface LocalStateAPI {
    localState     :ForumDataInterface;
    localDispatch  :React.Dispatch<any>;
}

export interface ActionInterface {
    type        :number;
    payload?    :any;
    index?      :number;
}

export enum actionType {
    test,
    setThreads,
    setCurrentThread,
}

export interface ForumDataInterface {
    forum           :Array<Thread>;
    currentThread?  :Thread;
}


export interface Thread {
    creator     :Creator;
    thread      :TDescription;
    replies?    :Array<TReplies>;
    _id         :string;
    _token      :string;
}

export interface Creator {
    username    :string;
    avatar      :number;
    uid         :string;
}

export interface TDescription {
    title       :string;
    text        :string;
    date        :number;
}

export interface TReplies {
    username    :string;
    avatar      :number;
    time        :number;
    text        :string;
    userid      :string;
    _token      :string;
    _id?        :string;
    isAdmin     :boolean;
}

export interface User {
    username    :string;
    avatar      :number;
    description :string;
    isAdmin     :boolean;
    lastreply   :number;
    _id?        :string;
    _token?     :string;
}
