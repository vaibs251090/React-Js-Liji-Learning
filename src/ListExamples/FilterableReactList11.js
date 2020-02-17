import React from 'react';
import ContactRow from './ContactRow'

  class ContactTable extends React.Component {
    render() {
      var rows = [];
      this.props.contacts.forEach((contact) => {
        if (contact.name.indexOf(this.props.filterText) === -1) {
          return;
        }
        rows.push(<ContactRow contact={contact} />);
      });
      return (
        <table className='table' border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }    
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }  
    render() {
      return (
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
        </form>
      );
    }
  }
  
  class FilterableReactList11 extends React.Component {
    constructor(props) {
      super(props);
      // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
      this.state = {
        filterText: ''
      };
      
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);      
    }  
    handleFilterTextInput(filterText) {
      //Call to setState to update the UI
      this.setState({
        filterText: filterText
      });
      //React knows the state has changed, and calls render() method again to learn what should be on the screen
    }    
    render() {
      return (
        <div>
          <h1>Filterable React List</h1>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />
          <ContactTable
            contacts={this.props.contacts}
            filterText={this.state.filterText}
          />
        </div>
      );
    }
  }
  
  export default FilterableReactList11
  