import React, {Component} from 'react';

// Static assets
import avatar from '../../img/avatar-placeholder.svg';

class ChildToggle extends Component {
    render() {
        return (
            <div className="child-toggle">
                <img src={avatar} className="child-avatar" alt="Child Avatar" />
            </div>
        );
    }
}

export default ChildToggle;
