import React from 'react'
import styled from 'styled-components'
import laptop from '../img/laptop.png'
import MiniCards from './MiniCards'

const Container = styled.div `
    display: flex;
`

const Left = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img `
    margin: 150px auto;
    width: 100%
`

const Right = styled.div `
    width: 50%;
`

const Wrapper = styled.div `
    padding: 50px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1 `
`

const Desc = styled.p `
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`

const CardContent = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`



const Service = () => {
    return (

            <Container>
                <Left>
                    <Image src={laptop} />
                </Left>
                <Right>
                    <Wrapper>
                        <Title>Simple start process</Title>
                        <Desc>Good designs means good business, and when you stay with the design, you will see that cat is doing what God wants Goat to tell his grandman, because tuesday is the day of the sun, not the sunday who is close to my neignbours wifes house.</Desc>
                    </Wrapper>
                    <MiniCards/>
                    <MiniCards/>
                    <MiniCards/>
                </Right>
            </Container>

    )
}

export default Service
