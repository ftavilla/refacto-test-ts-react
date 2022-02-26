import React from 'react';
import DomainFilter from './DomainFilter.component';
import {render, screen} from "@testing-library/react"
import createStore from '../../redux/store'
import {receiveDomains} from "../../redux/domains/actions"
import {Provider} from "react-redux"


const storedDomains = ["US_OK-WOK", "FR_NK-WOL", "FR_OK-NPP", "EN_NK-NRP", "EN_BL-WOL"]

const expected = {
    classifications: ["OK", "NK", "BL"],
    countries: ["US", "FR", "EN"],
    subClassifications: ["WOK", "WOL", "NPP", "NRP"]
}

const store = createStore();

store.dispatch(receiveDomains([
    'US_OK-WOK',
    'FR_NK-WOL',
    'FR_OK-NPP',
    'EN_NK-NRP',
    'EN_BL-WOL',
]))

export const StoreProvider: React.FC = ({children}) => <Provider store={store}>{children}</Provider>

describe('components', () => {
    describe('DomainFilter', () => {
        it('should display the user the filters', () => {
            render(<DomainFilter domains={storedDomains}/>, {wrapper: StoreProvider})
            expect(screen.getAllByRole('listbox')).toHaveLength(3);
        })

        it('should display a country select with 3 countries', () => {
            render(<DomainFilter domains={storedDomains}/>, {wrapper: StoreProvider})

            expected.countries.forEach((country: string) => expect(screen.getByText(country)).toBeTruthy())
        })

        it('should display a classification select with 3 classifications', () => {
            render(<DomainFilter domains={storedDomains}/>, {wrapper: StoreProvider})

            expected.classifications.forEach((classification: string) => expect(screen.getByText(classification)).toBeTruthy())
        })

        it('should display a subClassifications select with 4 subClassifications', () => {
            render(<DomainFilter domains={storedDomains}/>, {wrapper: StoreProvider})

            expected.subClassifications.forEach((subClassification: string) => expect(screen.getByText(subClassification)).toBeTruthy())
        })
    })
})
