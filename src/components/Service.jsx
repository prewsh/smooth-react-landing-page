import React from 'react'
import styled from 'styled-components'
import laptop from '../img/laptop.png'

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



const Service = () => {
    return (

            <Container>
                <Left>
                    <Image src={laptop} />
                </Left>
                <Right>hhdjjkksooooolskkiiuisytth</Right>
            </Container>

    )
}

export default Service
