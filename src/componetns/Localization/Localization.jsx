import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useQuery } from '../../hooks/useQuery'
import {
  setCurrLocale,
  setCurrNamespace,
  setJsonsRequest,
  setLocalesRequest,
  setNamespacesRequest,
} from '../../redux/reducers/localization.reducer'
import {
  Container,
  Main,
  Option,
  Selector,
  SelectorBox,
  Table,
  Tbody,
} from './Localization.styles'

export const Localization = () => {
  const dispatch = useDispatch()
  const { data: locales } = useQuery(setLocalesRequest, {
    base: 'localization',
    type: 'locales',
  })
  const { data: namespaces } = useQuery(setNamespacesRequest, {
    base: 'localization',
    type: 'namespaces',
  })
  const currLocale = useSelector(state => state.localization.currLocale)
  const currNamespace = useSelector(state => state.localization.currNamespace)
  const { data: jsons, refetch } = useQuery(setJsonsRequest, {
    base: 'localization',
    type: 'jsons',
    skip: true,
    args: {
      currLocale: currLocale,
      currNamespace: currNamespace,
    },
  })

  useEffect(() => {
    if (currLocale && currNamespace && !getCurrJsonObj()) refetch()
  }, [currLocale, currNamespace])

  const getCurrJsonObj = useCallback(() => {
    return jsons.find(
      obj => obj.locale === currLocale && obj.namespace === currNamespace,
    )
  }, [currLocale, currNamespace, jsons])

  return (
    <Main>
      <Container>
        <SelectorBox>
          <Selector
            value={currLocale}
            onChange={e => dispatch(setCurrLocale(e.target.value))}
          >
            {locales?.map(val => (
              <Option>{val}</Option>
            ))}
          </Selector>
          <Selector
            value={currNamespace}
            onChange={e => dispatch(setCurrNamespace(e.target.value))}
          >
            {namespaces?.map(val => (
              <Option>{val}</Option>
            ))}
          </Selector>
        </SelectorBox>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <Tbody>
            {getCurrJsonObj() &&
              Object.entries(getCurrJsonObj().json).map(([key, value]) => (
                <tr>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
          </Tbody>
        </Table>
      </Container>
    </Main>
  )
}
