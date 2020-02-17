import React, { Component } from 'react';
import data from "./data"; 

const socialMediaList = data.SocialMedias;

class SocialMediaList extends Component {
	render() {
		return (
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 
export default SocialMediaList;