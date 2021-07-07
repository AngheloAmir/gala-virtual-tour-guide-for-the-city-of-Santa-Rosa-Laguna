import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListDialog   from '../../../Utility/ListDialog';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setCurrentTour, setSelectTourOpen } from '../localstateAPI/actions';
import { Responsive, useResponsive } from '../../../Utility/useResponsive';
import { getTours } from '../functions/Options';

export default function SelectTourList() {
    const { localState, localDispatch} :LocalStateAPI = React.useContext(localContextProvider);
    const responsive :Responsive = useResponsive();
    const TOURS = getTours();

    const styles = StyleSheet.create({
        container: {
            position: 'absolute', 
            zIndex: 25,
        },
        listdialog: {
            top: (responsive.height - 400) / 8,
        }
    });

    return (
        <View style={styles.container} >
            { localState.isSelectTourOpen &&
                <View style={{width: 2000, height: 2000, position: 'absolute', top: 0, backgroundColor: 'rgba(0,0,0,.5)'}}>
                </View>
            }

            { localState.isSelectTourOpen &&
                <View style={styles.listdialog}>
                    <ListDialog title='Select Self Guided Tours'
                        isshow={true} items={TOURS}
                        onSelect={(item, index) => {
                            localDispatch( setCurrentTour(item, index) );
                            localDispatch( setSelectTourOpen(false) );
                        }}
                        onCancel={() => localDispatch( setSelectTourOpen(false) )}
                    />
                </View> 
            }
        </View>
    )
}