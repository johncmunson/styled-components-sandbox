import React, { Component } from 'react';
import StyledHelloWorld from '../HelloWorld/HelloWorld.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <StyledHelloWorld name='world' />
            </div>
        );
    }
}
