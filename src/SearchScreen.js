import React,{Component} from 'react';
import {Container} from 'native-base';
export default class SearchScreen extends Component
{
    render()
    {
        return
        (
            <Container>
                <Header Searchbar>
                <Input placeholder="Search Twitter" />
                </Header>

                
            </Container>
        );
    }
}