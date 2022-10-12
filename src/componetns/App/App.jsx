import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main, ButtonContainer, Container, Button } from './App.styles';

export const App = () => {
    
    return (
        <Main>
            <ButtonContainer>
                <Button to="/">Home</Button>
                <Button to="users">Placeholder</Button>
                <Button to="localization">Localization</Button>
            </ButtonContainer>
            <Container>
                <Outlet/>
            </Container>
        </Main>
    );
}