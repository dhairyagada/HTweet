import React,{Component} from 'react';
import StyleSheet from 'react-native';
import {Container,Header,Input,Item,Button,Text,Content,Footer,FooterTab} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

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
                <Footer style={{height:45}} >
                <FooterTab style={{backgroundColor:'#FFFFFF'}}>
                    <Button style={{flex:1}}>
                        <Text   style={{fontSize:16,color:'#000000'}}> All </Text>
                    </Button>

                    <Button style={{flex:2}}>
                        <Text   style={{fontSize:16,color:'#000000'}}> Mentions </Text>
                    </Button>
                    <Button style={{flex:1}}/>
                    <Button style={{flex:1}}>
                        <Icon name="settings" color='#2874A6' size={20} />
                    </Button>
                </FooterTab>
                </Footer>
               
            </Container>

        );
    }
}

