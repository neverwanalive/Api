import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useQuery = (request, { base, type, skip, args }) => {
  const data = useSelector(state => state[base][type])
  const dispatch = useDispatch()
  const refetch = () => {
    dispatch(request(args))
  }
  useEffect(() => {
    if (request && !skip && data.length === 0) dispatch(request(args))
  }, [])

  return { data, refetch }
}
