import React from 'react'
import styled from 'styled-components';


const Container = styled.div `
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img `
    width: 20px;
`;

const Text = styled.span `

`;

const MiniCards = () => {
    return (
        <Container>
            <Image/>
            <Text>
            Good designs means good business, and when you stay with the design, you will see that cat is doing what God wants Goat to tell his grandman, because tuesday is
            </Text>
        </Container>
    )
}

export default MiniCards
