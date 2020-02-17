import React from 'react';

class ContactRow extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.contact.name}</td>
          <td>{this.props.contact.phone}</td>
          <td>{this.props.contact.email}</td>
        </tr>
      );
    }
  }
  
  
  
  export default ContactRow;
  