import React from 'react'
import styled from 'styled-components'
import Iphone from '../img/Iphone.png'
import AnimatedShape from './AnimatedShape';

const Container = styled.div `
    display: flex;
`;

const Left = styled.div `
    width: 50%;
`;

const Image = styled.img `
    width:  80%;
`;

const Right = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.span `
    font-size: 70px;
`

const SubTitle = styled.span `
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`

const Desc = styled.p `
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

const Button = styled.button `
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`

const Feature = () => {
    return (
        <Container>
            <Left>
            <Image src={Iphone} />
            </Left>
            <Right>
                <Title>
                    <b>good</b> design <br/>
                    <b>good</b> business
                </Title>
                <SubTitle>Good designs means good business</SubTitle>
                <Desc>Good designs means good business, and when you stay with the design, you will see that cat is doing what God wants Goat to tell his grandman, because tuesday is the day of the sun, not the sunday who is close to my neignbours wifes house.</Desc>
                <Button>Contact</Button>
            </Right>
            <AnimatedShape/>
        </Container>
    )
}

export default Feature