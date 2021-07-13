import React from 'react';
import ListDialog   from '../../../Utility/ListDialog';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setCurrentTour, setSelectTourOpen } from '../localstateAPI/actions';
import { Responsive, useResponsive } from '../../../Utility/useResponsive';
import { getTours } from '../functions/options';

export default function SelectTourList() {
    const { localState, localDispatch} :LocalStateAPI = React.useContext(localContextProvider);
    const responsive :Responsive = useResponsive();
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
