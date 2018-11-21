import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    // need to use arrow func so the onShowClick
    // has access to this. of the state
    onShowClick = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }

    onDeleteClick = () =>{
        this.props.deleteClickHandle();
    }

    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <div className='card card-body mb-3'>
                <h4>
                    {name}
                    <i
                        onClick={this.onShowClick}
                        className="fas fa-angle-down"
                        style={{ cursor:'pointer'}}
                    ></i>
                    <i  
                        onClick={this.onDeleteClick}
                        className='fas fa-times'
                        style={{ cursor: 'pointer', float: 'right', color: 'red'}}
                    ></i></h4>
                {showContactInfo
                    ? (<ul className='list-group'>
                        <li className='list-group-item'>Email: {email}</li>
                        <li className='list-group-item'>Phone: {phone}</li>
                      </ul>)
                    : null }

            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandle: PropTypes.func.isRequired
}

export default Contact;