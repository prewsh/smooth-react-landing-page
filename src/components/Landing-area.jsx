import React from 'react'
import styled from 'styled-components'
import prewsh from '../img/prewsh.png'
import AnimatedShape from './AnimatedShape';


const Container = styled.div `
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`;

const Left = styled.div `
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1 `
    width: 60%;
    font-size: 60px;
`;

const Desc = styled.p `
    width: 60%;
    fonst-size: 20px;
    margin-top: 20px;

`;

const Info = styled.div `
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button `
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`;

const Contact = styled.div `
    display: flex;
    flex-direction: column;
`;

const Phone = styled.div `
    color: #f0667d;
    font-weight: bold;
`;

const ContactText = styled.div `
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div `
    width: 40%;
`;

const Image = styled.img `
    width: 100%;
`;


export const Landing = () => {
    return (
        <Container>
            <Left>
                <Title>This is me, in an Adventure</Title>
                <Desc>This is de tail of the chicken that when you see a styon in tyhe wing, of an elephant the yearn of a widow is described as an arewa tortoise.</Desc>
                <Info>
                    <Button>Hire Me</Button>
                    <Contact>
                        <Phone>Call 081-615-657-45</Phone>
                        <ContactText>For Enquiry</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={prewsh} />
            </Right>
            <AnimatedShape/>
        </Container>
    );
}


export default Landing;