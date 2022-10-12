import styled from "styled-components";
import { Table as RBTable } from 'react-bootstrap'

export const Main = styled.div`
    
`

export const Container = styled.div`
    @keyframes myAnim {
	    0% {
		    opacity: 0;
		    transform: translateY(-250px);
	    }

	    100% {
		    opacity: 1;
		    transform: translateY(0);
	    }
    }
    animation: myAnim 1s ease 0s 1 normal forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SelectorBox = styled.div`
    margin-top: 75px;
`

export const Table = styled(RBTable)`
    width: 300px;
    margin-top: 75px;
    user-select: none;
    td {
        width: 50%;
    }
`

export const Selector = styled.select`
    font-size: 20px;
    cursor: pointer;
`

export const Tbody = styled.tbody`
    cursor: pointer;
`

export const Option = styled.option`
    
`