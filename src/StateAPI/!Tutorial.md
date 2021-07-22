### Tutorial usage:
    A component must be first an direct/indirectly child of App.tsx

    The component will something look like this:

    ```typescript
        import React from 'react';
        import { View, Text, Button } from 'react-native';
        import { contextProvider, StateAPI } from './StateAPI/state';
        import { setdataText } from './StateAPI/Actions'

        export default function MyComponent() {
            const { state, dispatch } :StateAPI = React.useContext(contextProvider);
            return (
                <View>
                    <Text> { state.data.text } </Text>
                    <Button
                        onPress={ () => dispatch(setdataText('The data is change!')) }
                        title="Click me"
                        color="#841584"
                        accessibilityLabel="Learn more click me"
                    />
                </View>
            );
        }
    ```

        Firstly, the "contextProvider" must be imported because it contains the reference where the global state variable
    and dispacth action is stored. The import "StateAPI" is optional and it is used for type checking.
    Then, import the required dispacth actions. A dispatch actions are functions that return a type of "ActionInteface"
    that is used by an dispatch found in "StateAPI" object.

        After imports were made, it is time to create an object type of "StateAPI" with this line of code:

    ```typescript
        const { state, dispatch } :StateAPI = React.useContext(contextProvider);
    ```
        In order to use the Apps state data, just use state.<n>.<n> like:
            <Text> { state.data.text } </Text>
    
*/