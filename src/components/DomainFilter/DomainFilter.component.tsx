import React from 'react';
import CountryDomainFilter from "../CountryDomainFilter"
import ClassificationDomainFilter from "../ClassificationDomainFilter"
import SubClassificationDomainFilter from "../SubClassificationDomainFilter"
import {DomainConfig} from "../../redux/domains/types"

interface State {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
}

interface Props {
    domains: string[]
}

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

class DomainFilter extends React.Component<Props, State> {
    componentDidMount() {
        const {domains} = this.props
        console.log(this.props)
        const {countries, classifications, subClassifications} = extractData(domains)
        this.setState({
            countries,
            classifications,
            subClassifications
        })
    }

    render() {
        const {countries, classifications, subClassifications} = this.state || {
            countries: [],
            classifications: [],
            subClassifications: []
        };

        console.log(this.state)

        return (<>
            <CountryDomainFilter/>
            <ClassificationDomainFilter />
            <SubClassificationDomainFilter subClassifications={subClassifications}/>
        </>)
    }
}

export default DomainFilter
