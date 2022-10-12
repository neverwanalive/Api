import React from 'react'
import { useParams } from 'react-router-dom'

import Profile_Image from '../../assets/Profile_Image.png'
import { useQuery } from '../../hooks/useQuery'
import { setUserDataRequest } from '../../redux/reducers/placeholder.reducer'
import {
  Background,
  Box,
  CompanyBox,
  Email,
  Image,
  InfoBox,
  InfoTitle,
  Main,
  PhotoBox,
  Title,
  Username,
} from './User.styles'

export const User = () => {
  const { userId } = useParams()
  const { data: users } = useQuery(setUserDataRequest, {
    base: 'placeholder',
    type: 'users',
  })

  const user = users?.find(user => user.id === parseInt(userId))

  return (
    <Main>
      <Background>
        <PhotoBox>
          <Image>
            <img
              style={{ width: '260px', height: '200px' }}
              src={Profile_Image}
              alt='Profile'
            />
          </Image>
          <Username>{user?.username}</Username>
          <Email>{user?.email}</Email>
        </PhotoBox>
        <InfoBox>
          <Title>Profile Information</Title>
          <InfoTitle>ID</InfoTitle>
          <Box>{user?.id}</Box>
          <InfoTitle>Name</InfoTitle>
          <Box>{user?.name}</Box>
          <InfoTitle>Phone</InfoTitle>
          <Box>{user?.phone}</Box>
          <InfoTitle>Website</InfoTitle>
          <Box>{user?.website}</Box>
          <Title>Adress</Title>
          <InfoTitle>Street</InfoTitle>
          <Box>{user?.address.street}</Box>
          <InfoTitle>Suite</InfoTitle>
          <Box>{user?.address.suite}</Box>
          <InfoTitle>City</InfoTitle>
          <Box>{user?.address.city}</Box>
          <InfoTitle>Zipcode</InfoTitle>
          <Box>{user?.address.zipcode}</Box>
          <InfoTitle>Lat, Lng</InfoTitle>
          <Box>
            {user?.address.geo.lat}, {user?.address.geo.lng}
          </Box>
        </InfoBox>
        <CompanyBox>
          <Title>Company</Title>
          <InfoTitle>Name</InfoTitle>
          <Box>{user?.company.name}</Box>
          <InfoTitle>CatchPhrase</InfoTitle>
          <Box>{user?.company.catchPhrase}</Box>
          <InfoTitle>BS</InfoTitle>
          <Box>{user?.company.bs}</Box>
        </CompanyBox>
      </Background>
    </Main>
  )
}
