/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        Show the list of Tours (as Dialog Box) avaible to be choose from by the user.

    * VISIBLE WHEN
      the localState.isSelectTourOpen is true (when the select tour is pressed by the user).

*/
import React from 'react';
import ListDialog   from '../../../Utility/ListDialog';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setCurrentTour, setSelectTourOpen } from '../localstateAPI/actions';
import { getTours } from '../functions/options';

export default function SelectTourList() {
    const { localState, localDispatch} :LocalStateAPI = React.useContext(localContextProvider);
    const TOURS = getTours();

    return (
        <ListDialog title='Select Self Guided Tours'
            isshow={localState.isSelectTourOpen} items={TOURS}
            onSelect={(item, index) => {
                localDispatch( setCurrentTour(item, index) );
                localDispatch( setSelectTourOpen(false) );
            }}
            onCancel={() => localDispatch( setSelectTourOpen(false) )}
        />
    )
}
