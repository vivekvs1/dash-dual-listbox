/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import {ColorPicker} from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            displayColorPicker: false,
            Color: {
                hex:'#f22'
            },
        }
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
                <div>
                    <ColorPicker color='#f22'/>
                </div>
            )
        }
    }

    export
    default
    App;

