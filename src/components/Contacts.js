import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact => {
            return contact.id !== id;
        })
        this.setState({
            contacts: newContacts
        });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <div>
                            {contacts.map(contact => {
                                return <Contact
                                    key={contact.id}
                                    contact={contact}
                                    deleteClickHandle={this.deleteContact.bind(this, contact.id)}
                                />
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;