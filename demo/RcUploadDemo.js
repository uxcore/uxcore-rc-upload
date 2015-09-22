/**
 * RcUpload Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let RcUpload = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let me = this;
        let options = {
            action: "/upload",
            data: {a:1},
            onStart: function(file){
                console.log('onStart',file.name || file.value);
            },
            onSuccess: function(ret) {
                console.log('onSuccess',ret);
            },
            onProgress: function(step) {
                console.log(arguments);
                console.log('onProgress',step);
            },
            onError: function(err, res, file) {
                console.log(err);
                console.log(res);
                console.log(file.name);
            }
        }
        return (
            <div>
                <RcUpload {...options}/>
            </div>
        );
    }
};

module.exports = Demo;
