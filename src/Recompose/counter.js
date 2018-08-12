// @flow

import React, { Fragment, Component } from "react";
import {mapProps, withState, withHandlers, compose} from 'recompose';

const myCount = compose(
    withState('count', 'setCount', 0),
    withHandlers({
        incrementCount: props => event => {
            event.preventDefault()
            props.setCount(props.count + 1)
        },
        decrementCount: props => event => {
            event.preventDefault()
            props.setCount(props.count - 1)
        },
    })
);


const myCountProps = mapProps(props => {
    return {
      countInit: props.countInit,
    }
});
const myCountState = withState('count', 'setCount', 0);
const myCountHandler = withHandlers({
    incrementCount: props => event => {
        console.log(props);
        event.preventDefault()
        props.setCount(props.count + 1)
    },
    decrementCount: props => event => {
        event.preventDefault()
        props.setCount(props.count - 1)
    }
});

const myHandler = withHandlers({
    handleClick: props => event => {
        console.log(event)
        props.doSomething()
    },
});

type Props = {
    foo: number,
    count: number,
    incrementCount: number,
    decrementCount: void
}

type State = {
    count: number,
    countPrivate: number,
}

class CountComponent extends Component<Props, State> {
    static defaultProps = {
        foo: '43',
    }
    state = {
        count: 2,
        countPrivate: 2,
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState(prevState => ({
        //         countPrivate: prevState.countPrivate + 1,
        //     }));
        // }, 1000);
    }

    render () {
      const {countInit, count, foo, incrementCount, decrementCount} = this.props
      return (
        <Fragment>
            <div>Default props: {foo}</div>
            <div>Default state: {this.state.countPrivate}</div>

            <div>Count Init: {countInit} - Count: {count}</div>
            <div>
                <button style={{width: 20, height:20}} onClick={incrementCount}>+</button>
                <button style={{width: 20, height:20}} onClick={decrementCount}>-</button>
            </div>
        </Fragment>
      );
    }
}

export default compose(
    myCountProps,
    myCountState,
    myCountHandler
)(CountComponent);