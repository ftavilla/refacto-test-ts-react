import React from 'react';

interface ClassificationDomainFilterProps {
    classifications: string[],
}

const ClassificationDomainFilter: React.FC<ClassificationDomainFilterProps>  = ({classifications}) =>
    (<select name="classification" multiple>
        {classifications.map(classification => (
            <option value={classification} key={classification}>{classification}</option>
        ))}
    </select>)

export default ClassificationDomainFilter
