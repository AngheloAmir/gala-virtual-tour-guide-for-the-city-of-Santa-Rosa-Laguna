/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        Show the list of Tours (as Dialog Box) avaible to be choose from by the user.

    * VISIBLE WHEN
      the localState.isSelectTourOpen is true (when the select tour is pressed by the user).

*/
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setCurrentTour, setSelectTourOpen } from '../localstateAPI/actions';
import { getTours } from '../functions/options';
import DialogBox from '../../../Utility/DialogBox';

export default function SelectTourList() {
    const { localState, localDispatch} :LocalStateAPI = React.useContext(localContextProvider);
    const TOURS = getTours();

    return (
        <SelectTourDialogBox title='Select Self Guided Tours'
            isshow={localState.isSelectTourOpen} items={TOURS}
            onSelect={(item, index) => {
                localDispatch( setCurrentTour(item, index) );
                localDispatch( setSelectTourOpen(false) );
            }}
            onCancel={() => localDispatch( setSelectTourOpen(false) )}
        />
    )
}

interface propsReceive {
    title    :string;
    isshow   :boolean;
    items    :Array<{
        name         :string;
        description? :string;
    }>;
    onSelect :(item :string, index :number) => void;
    onCancel :() => void;
}

function SelectTourDialogBox(props :propsReceive) {
    return (
        <DialogBox
            title={props.title}
            isshow={props.isshow}
            cancel={props.onCancel}
            dialogContent={() => { return (
                <View>
                { props.items.map((item, index) => {
                    return (
                    <TouchableOpacity key={index} style={index == props.items.length -1 ? styles.itemLast :styles.item }
                            onPress={() => props.onSelect(item.name, index)}>
                        <Text style={styles.text}>{item.name}</Text>
                        { item.description &&
                            <Text style={styles.textDescription}>{item.description}</Text>
                        }   
                    </TouchableOpacity>
                    );
                })}
                </View>
            )}}
        />
    )
}

const styles = StyleSheet.create({
    itemsContainer: {
        width: '95%', marginLeft: '2.5%'
    },
    item: {
        borderColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 1, 
        marginBottom: 8,  paddingLeft: 12,
    },
    itemLast: {
        marginBottom: 8, paddingLeft: 12,
    },
    text: {
        color: 'rgba(60, 80, 160, 1)',
        fontSize: 20, fontWeight: '500', 
    },
    textDescription: {
        fontSize: 18, lineHeight: 28, paddingLeft: 8, padding: 8
    },
});
