//@flow

import React from 'react';
import {compose} from 'recompose';
import {withSelectedText} from './formUtils';

type Props = {
  selectedText: string,
}

function SelectedText (props: Props) {
  return (
    <div>{props.selectedText}</div>
  )
}

export default compose(
  withSelectedText,
)(SelectedText)
