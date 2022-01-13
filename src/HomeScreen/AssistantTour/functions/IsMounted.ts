/*
    A variable that holds whether Assistant Tour is mounted or not.
    The value is set only by AssistantTourIndex.tsx
*/

export let isMounted :boolean;
export function setMountedState(state :boolean) {
    //console.log('Assitant Tour is: ' + (state ? 'mounted' : 'remove'));
    isMounted = state;
}
