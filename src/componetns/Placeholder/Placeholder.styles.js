import styled from "styled-components";
import { Table as RBTable } from 'react-bootstrap'


export const Main = styled.div`
   
`

export const Table = styled(RBTable)`
    margin-top: 75px;
    user-select: none;
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
`

export const Tbody = styled.tbody`
    cursor: pointer;
`