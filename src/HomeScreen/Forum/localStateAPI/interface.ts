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
    threaddate  :string;
};

export interface ReadThread {
    username    :string;
    avatar      :number;
    uid         :string;
    threadtitle :string;
    threadtext  :string;
    threadid    :number;
    threaddate  :string;
    replies     :Array<ThreadReply>;
}

export interface ThreadReply {
    replyid     :string;
    username    :string;
    avatar      :number;
    uid         :string;
    time        :string;
    text        :string;
}
