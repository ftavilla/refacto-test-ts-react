import ClassificationDomainFilter from './ClassificationDomainFilter.component';
import {connect} from 'react-redux'
import {AppState} from '../../redux/store';
import {getClassifications} from "../../redux/domains/selectors"

const mapStateToProps = (state: AppState) => ({
  classifications: getClassifications(state)
})

export default connect(mapStateToProps)(ClassificationDomainFilter)
