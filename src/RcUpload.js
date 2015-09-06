/**
 * RcUpload Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Upload = require("rc-upload");
let {Button, ButtonGroup} = require("uxcore-button");
let assign = require("object-assign");

class RcUpload extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        let options = {
            action: me.props.action,
            data: me.props.data,
            onStart: me.props.onStart,
            onSuccess: me.props.onSuccess,
            onProgress: me.props.onProgress
        }
        return (
            <div className="kuma-rc-upload">
                <Upload {...options}>
                    <Button size={me.props.buttonSize}><i className="kuma-icon kuma-icon-add"></i>点击上传</Button>
                </Upload>
            </div>
        );
    }
}

RcUpload.defaultProps = {
    buttonSize: "medium",
    data: {},
    onStart: function() {},
    onSuccess: function() {},
    onProgress: function() {}
}


// http://facebook.github.io/react/docs/reusable-components.html
RcUpload.propTypes = {
}

RcUpload.displayName = "RcUpload";

module.exports = RcUpload;