import axios from './axios'
import { DomainType } from '../types'

// Sends a POST request to retrieve domain information.
export const getInformation = (data : { domain: DomainType }) => axios.post(`/api/domain`, data)
