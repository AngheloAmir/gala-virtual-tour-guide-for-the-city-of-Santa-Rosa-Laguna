import React from "react";
import { Text } from "react-native";
import DialogBoxWindow from './DialogBox';

export interface propsReceive {
    title    :string;
    text     :string;
    isshow   :boolean;
    ok       :() => void;
    cancel?  :() => void;
}

export default function AlertBox(props :propsReceive) {
    return (
        <DialogBoxWindow
            title={props.title}
            isshow={props.isshow}
            ok={props.ok}
            cancel={props.cancel}
            dialogContent={() => dialogContent(props.text)}
        />
    );
}

function dialogContent(text :string) {
    return (
        <Text style={{fontSize: 20, lineHeight: 30, paddingHorizontal: 8}}>{text}</Text>
    )
}
