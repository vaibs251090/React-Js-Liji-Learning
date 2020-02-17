import React, { Component } from "react";
 
class StaticList extends Component {
  state = {};
 
  render() {
    return (
      <React.Fragment>
        <ul class="list-group">
          <li class="list-group-item list-group-item-primary">UK</li>
          <li class="list-group-item list-group-item-primary">US</li>
          <li class="list-group-item list-group-item-primary">Australia</li>
          <li class="list-group-item list-group-item-primary">Canada</li>
          <li class="list-group-item list-group-item-primary">Armenia</li>
        </ul>
      </React.Fragment>
    );
  }
}
 
export default StaticList;