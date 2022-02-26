import React from 'react';
import SubClassificationDomainFilter from './SubClassificationDomainFilter.component';
import {render, screen} from "@testing-library/react"
import DomainFilter from "../DomainFilter/DomainFilter.component"



describe('components', () => {
    describe('ClassificationDomainFilter', () => {
        it('should display a subClassifications select with 4 subClassifications', () => {
            const subClassifications =["WOK", "WOL", "NPP", "NRP"]
            render(<SubClassificationDomainFilter subClassifications={subClassifications}/>)

            subClassifications.forEach((subClassification: string) => expect(screen.getByText(subClassification)).toBeTruthy())
        })

        it('should display an empty subClassifications select when subClassifications list is empty', () => {
            render(<SubClassificationDomainFilter subClassifications={[]}/>)
            expect(screen.queryByRole('listbox')).not.toBeNull()
            expect(screen.queryByRole('option')).toBeNull()
        })
    })
})
