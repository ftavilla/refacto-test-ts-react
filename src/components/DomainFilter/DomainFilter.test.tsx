import React from 'react';
import DomainFilter from './DomainFilter.component';
import {render, screen} from "@testing-library/react"


const storedDomains = ["US_OK-WOK", "FR_NK-WOL", "FR_OK-NPP", "EN_NK-NRP", "EN_BL-WOL"]

const expected = {
    classifications: ["OK", "NK", "BL"],
    countries: ["US", "FR", "EN"],
    subClassifications: ["WOK", "WOL", "NPP", "NRP"]
}
describe('components', () => {
    describe('DomainFilter', () => {
        it('should display the user the filters', () => {
            render(<DomainFilter domains={storedDomains}/>)
            expect(screen.getAllByRole('listbox')).toHaveLength(3);
        })

        it('should allow a country select with 3 countries', () => {
            render(<DomainFilter domains={storedDomains}/>)

            expected.countries.forEach((country: string) => expect(screen.getByText(country)).toBeTruthy())
        })

        it('should allow a country select with 5 classifications', () => {
            render(<DomainFilter domains={storedDomains}/>)

            expected.classifications.forEach((classification: string) => expect(screen.getByText(classification)).toBeTruthy())
        })

        it('should allow a country select with 4 subClassifications', () => {
            render(<DomainFilter domains={storedDomains}/>)

            expected.subClassifications.forEach((subClassification: string) => expect(screen.getByText(subClassification)).toBeTruthy())
        })
    })
})
