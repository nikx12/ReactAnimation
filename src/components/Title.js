import React from 'react'
import styled from 'styled-components';
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: red;
`;

const Wrapper= styled.section`
paddding: 4em;
background: black;
`;
class TitleDemo extends React.Component{
    render(){
       return( <Wrapper>
            <Title>
                HELLO THIS IS WORKING!!!
            </Title>
        </Wrapper>
    )}
}

export default TitleDemo;