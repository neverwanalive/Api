import { domains } from '../constants/domains'

export const apiRequest = async (baseUrlType, queryParams) => {
    const response = await fetch(`${domains[baseUrlType]}/${queryParams}`)
    const data = await response.json()
    return data
}