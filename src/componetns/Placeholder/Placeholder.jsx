import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useQuery } from '../../hooks/useQuery'
import { setUserDataRequest } from '../../redux/reducers/placeholder.reducer'
import { Main, Table, Tbody } from './Placeholder.styles'

export const Placeholder = () => {
  const navigate = useNavigate()
  const { data: users } = useQuery(setUserDataRequest, {
    base: 'placeholder',
    type: 'users',
  })

  return (
    <Main>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <Tbody>
          {users?.map(user => (
            <tr onClick={() => navigate(`${user.id}`)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Main>
  )
}
