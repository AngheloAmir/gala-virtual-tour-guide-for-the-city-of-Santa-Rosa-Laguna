/*
    A global styling
*/
interface globalstyle {
    border              :any;
    date                :any;
    defaultBackground   :any;
    defaultfontSize     :any;
    text                :any;
    textbold            :any;
    shadow              :any;
}

const GlobalStyle :globalstyle = {
    border: {
        borderColor:    'rgba(115, 170, 220, 1)',
        borderWidth:    1,
    },
    date: {
        fontSize:       16,
        fontWeight:     '300',
        color:          'gray',
    },
    defaultBackground: {
        backgroundColor: 'rgba(230, 240, 250, 1)',
    },
    defaultfontSize: {
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    textbold: {
        fontSize:       16,
        fontWeight:     'bold',
    },
    shadow: {
        shadowOffset:   {width: 3, height: 3},
        shadowRadius:   5,
        shadowOpacity:  0.2,
    },
};
export default GlobalStyle;
