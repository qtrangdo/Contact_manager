import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, event) => {
        event.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {
            id: uuid(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact })


        //clear input field after submit
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>
                                Add Contact
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label='Name'
                                        name='name'
                                        placeholder='Enter Name...'
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        label='Email'
                                        type= 'email'
                                        name='email'
                                        placeholder='Enter Email...'
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        label='Phone'
                                        name='phone'
                                        placeholder='Enter Phone Number...'
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                    <input type='submit' value='Add Contact'
                                        className='btn btn-light btn-block'
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddContact;