import React,{Component} from 'react';
import {Container,Header,Input,Item,Button,Text,Content} from 'native-base';
export default class SearchScreen extends Component
{
    render()
    {
        return(
        
            <Container>
                <Header searchBar style={{backgroundColor:'#F0F3F4',marginTop:25}}>
                    <Item>
                        <Input placeholder="Search Twitter" style={{backgroundColor:'#F0F3F4'}} />
                    </Item>
                </Header>

                <Content style={{backgroundColor:'#AED6F1'}}>
                </Content>
            </Container>
        );
    }
}