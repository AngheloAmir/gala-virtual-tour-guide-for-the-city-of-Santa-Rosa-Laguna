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
}

export interface ForumDataInterface {
    forum           :Array<Thread>;
    currentThread?  :ReadThread;
}

export interface Thread {
    username    :string;
    avatar      :number;
    uid         :string;
    threadtitle :string;
    threadtext  :string;
    threadid    :number;
    threaddate  :number;    //from milisecond of epoch time
};

export interface ReadThread {
    username    :string;
    avatar      :number;
    uid         :string;
    threadtitle :string;
    threadtext  :string;
    threadid    :number;
    threaddate  :number;    //from milisecond of epoch time
    replies     :Array<ThreadReply>;
}

export interface ThreadReply {
    replyid     :string;
    username    :string;
    avatar      :number;
    uid         :string;
    time        :number;    //from milisecond of epoch time
    text        :string;
}
