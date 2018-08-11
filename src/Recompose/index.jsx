// @flow

import React from 'react'
import SelectedText from "./selectedText";

const store = {
    choices: {
        one: {text: 'One!', value: 'one'},
        two: {text: 'Two!', value: 'two'},
        three: {text: 'Three!', value: 'three'},
    },
    selected: 'two',
};

export default () => (
    <SelectedText {...store}/>
);