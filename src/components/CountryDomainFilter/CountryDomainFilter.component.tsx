import React from 'react';

interface CountryDomainFilterProps {
    countries: string[],
}

const CountryDomainFilter: React.FC<CountryDomainFilterProps>  = ({countries}) =>
    (<select name="countries" multiple>
        {countries.map(country => (
            <option value={country} key={country}>{country}</option>
        ))}
    </select>)

export default CountryDomainFilter
