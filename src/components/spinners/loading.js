import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div>
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        );
    }
}

export default Loading;
