import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss';


// export default class ExampleComponent extends Component {
//     render() {
//         const {id, label, setProps, value} = this.props;
//
//         return (
//             <div id={id}>
//                 ExampleComponent: {label}
//                 <input
//                     value={value}
//                     onChange={e => {
//                         /*
//                          * Send the new value to the parent component.
//                          # setProps is a prop that is automatically supplied
//                          * by dash's front-end ("dash-renderer").
//                          * In a Dash app, this will send the data back to the
//                          * Python Dash app server.
//                          * If the component properties are not "subscribed"
//                          * to by a Dash callback, then Dash dash-renderer
//                          * will not pass through `setProps` and it is expected
//                          * that the component manages its own state.
//                          */
//                          if (setProps) {
//                              setProps({
//                                 value: e.target.value
//                             });
//                         } else {
//                             this.setState({
//                                 value: e.target.value
//                             })
//                         }
//                     }}
//                 />
//             </div>
//         );
//     }
// }

// ExampleComponent.propTypes = {
//     /**
//      * The ID used to identify this component in Dash callbacks
//      */
//     id: PropTypes.string,
//
//     /**
//      * A label that will be printed when this component is rendered.
//      */
//     label: PropTypes.string.isRequired,
//
//     /**
//      * The value displayed in the input
//      */
//     value: PropTypes.string,
//
//     /**
//      * Dash-assigned callback that should be called whenever any of the
//      * properties change
//      */
//     setProps: PropTypes.func
// };




export default class ExampleComponent extends Component {


    constructor() {
        super();
        this.state = {
            displayColorPicker: false,
            color: {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
            },
        }
        // this.setProps = this.setProps.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleClick() {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose() {
        this.setState({displayColorPicker: false})
    };

    handleChange(color) {
        this.setState({color: color.rgb})
        this.setProps({color: color.rgb})
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                },
                swatch: {
                    padding: '4px',
                    background: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        // const {setProps, color} =this.props;

        return (
            <div>
                <div style={styles.swatch} onClick={
                    this.handleClick
                }>
                    <div style={styles.color}/>
                </div>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose}/>
                    <SketchPicker color={this.state.color} onChange={this.handleChange}/>
                </div> : null}

            </div>
        )
    }
}

//
// export default SketchExample

ExampleComponent.propTypes = {

    /**
     * The ID used to identify this component in Dash callbacks
     */
    setProps: PropTypes.func,

    /**
     * The color displayed in the swatch
     */
    color: PropTypes.string,
};