import { AppState } from '../store'
import {DomainConfig} from "./types"


const initialData: DomainConfig = {countries: [], classifications: [], subClassifications: []}

const extractData = (domains: string[]): DomainConfig =>
    domains.reduce((acc: any, domain: string) => {
      const country = domain.substring(0, 2);
      const classification = domain.substring(3, 5);
      const subClassification = domain.substring(6);

      return {
        countries: [...acc.countries, ...(!acc.countries.includes(country) ? [country] : [])],
        classifications: [...acc.classifications, ...(!acc.classifications.includes(classification) ? [classification] : [])],
        subClassifications: [...acc.subClassifications, ...(!acc.subClassifications.includes(subClassification) ? [subClassification] : [])]
      }
    }, initialData)

export function getDomains(state: AppState): string[] {
    return state.domains
}

export function getCountries(state: AppState): string[] {
  return extractData(state.domains).countries
}

export function getClassifications(state: AppState): string[] {
  return extractData(state.domains).classifications
}
