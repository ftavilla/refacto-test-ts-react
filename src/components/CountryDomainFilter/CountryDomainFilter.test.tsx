import React from 'react';
import CountryDomainFilter from './CountryDomainFilter.component';
import {render, screen} from "@testing-library/react"



describe('components', () => {
    describe('CountryDomainFilter', () => {
        it('should display a country select with 3 countries', () => {
            const countries = ["US", "FR", "EN"]
            render(<CountryDomainFilter countries={countries}/>)

            countries.forEach((country: string) => expect(screen.getByText(country)).toBeTruthy())
        })

        it('should display an empty country select when countries list is empty', () => {
            render(<CountryDomainFilter countries={[]}/>)
            expect(screen.queryByRole('listbox')).not.toBeNull()
            expect(screen.queryByRole('option')).toBeNull()
        })
    })
})
