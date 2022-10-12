import { colors } from '@beercode/common-frontend'
import styled from 'styled-components'

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Background = styled.div`
  width: 80%;
  height: 90%;
  background-color: ${colors.WHITE};
  border-radius: 15px;
  display: flex;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.35);
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

export const PhotoBox = styled.div`
  padding: 25px;
  width: 30%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InfoBox = styled.div`
  padding: 25px;
  width: 30%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 15px;
`

export const CompanyBox = styled.div`
  padding: 25px;
  width: 40%;
  font-size: 15px;
`

export const Title = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`

export const InfoTitle = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  margin-top: 10px;
`

export const Box = styled.div`
  padding: 7px;
  margin-top: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
`

export const Image = styled.div`
  margin-top: 100px;
`

export const Email = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
`

export const Username = styled.div`
  font-weight: 500;
`
