import React from 'react';
import CountryDomainFilter from "../CountryDomainFilter"
import ClassificationDomainFilter from "../ClassificationDomainFilter"
import SubClassificationDomainFilter from "../SubClassificationDomainFilter"

const DomainFilter: React.FC = () => (<>
    <CountryDomainFilter/>
    <ClassificationDomainFilter />
    <SubClassificationDomainFilter />
</>)

export default DomainFilter
