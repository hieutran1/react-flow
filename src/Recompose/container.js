import {connect} from 'react-redux';
import {compose, withHandlers} from 'recompose';

import {actions} from './actions.js';

export const withMyActionHandlers = compose(
  connect(mapStateToProps, {
    myAction: actions.myAction,
  })
  withHandlers({
    onClick: props => event => {
      event.preventDefault()
      props.myAction(event.target.value)
    },
  })
)