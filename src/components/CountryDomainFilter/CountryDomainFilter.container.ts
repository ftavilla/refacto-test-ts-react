import CountryDomainFilter from './CountryDomainFilter.component';
import {connect} from 'react-redux'
import {getCountries} from '../../redux/domains/selectors';
import {AppState} from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  countries: getCountries(state)
})

export default connect(mapStateToProps)(CountryDomainFilter)
