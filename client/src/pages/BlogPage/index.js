import React, { Component } from 'react';
import CustomCardGroup from '../../components/CustomCardGroup';

class BlogPage extends Component {

    render() {
        return (
            <CustomCardGroup 
            image="BlogImage"
            name="BlogName"
            summary="BlogSummary"
            buttonOneLink="blogposturl"
            buttonOneText="Read Post"
            buttonTwoLink="buttonTwoURL"
            buttonTwoText="Button Two"/>
        );
    }

};

export default BlogPage;