import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-right: 1780px;
    margin-top: 370px;
`   

export const Container = styled.div`
    
`

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    color: black;
    text-decoration: none;
    width: 120px;
    font-size: 20px;
    margin-top: 20px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
`
