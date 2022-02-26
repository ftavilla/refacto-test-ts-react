import React from 'react';

interface SubClassificationDomainFilterProps {
    subClassifications: string[],
}

const SubClassificationDomainFilter: React.FC<SubClassificationDomainFilterProps>  = ({subClassifications}) =>
    (<select name="classification" multiple>
        {subClassifications.map(subClassification => (
            <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
    </select>)

export default SubClassificationDomainFilter
