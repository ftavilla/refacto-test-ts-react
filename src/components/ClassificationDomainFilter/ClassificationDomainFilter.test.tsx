import React from 'react';
import ClassificationDomainFilter from './ClassificationDomainFilter.component';
import {render, screen} from "@testing-library/react"



describe('components', () => {
    describe('ClassificationDomainFilter', () => {
        it('should display a classification select with 5 classifications', () => {
            const classifications = ["OK", "NK", "BL"]
            render(<ClassificationDomainFilter classifications={classifications}/>)

            classifications.forEach((classification: string) => expect(screen.getByText(classification)).toBeTruthy())
        })

        it('should display an empty classification select when classifications list is empty', () => {
            render(<ClassificationDomainFilter classifications={[]}/>)
            expect(screen.queryByRole('listbox')).not.toBeNull()
            expect(screen.queryByRole('option')).toBeNull()
        })
    })
})
