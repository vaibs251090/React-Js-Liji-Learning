import React,{Component} from 'react'

class FormSelectOption3 extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        favoriteScriptingLanguage: "ReactJS"
      };
    }
   
    handleSubmitForm(event) {
      alert("Favorite Script: " + this.state.favoriteScriptingLanguage);
      event.preventDefault();
    }
   
    handleChange(event) {
      var value = event.target.value;
   
      this.setState({
        favoriteScriptingLanguage: value
      });
    }
   
    render() {
      return (
        <form onSubmit={event => this.handleSubmitForm(event)}>
          <p>Pick your favorite Scripting Language:</p>
          <select
              value={this.state.favoriteScriptingLanguage}
              onChange={event => this.handleChange(event)}>
            <option value="unix">Unix</option>
            <option value="perl">Perl</option>
            <option value="php">PHP</option>
            <option value="reactjs">ReactJS</option>
          </select>
   
          <input type="submit" value="Submit" />
        </form>
      );
    } 

}

export default FormSelectOption3;