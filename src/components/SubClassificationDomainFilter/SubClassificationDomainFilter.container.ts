import SubClassificationDomainFilter from './SubClassificationDomainFilter.component';
import {connect} from 'react-redux'
import {AppState} from '../../redux/store';
import {getSubClassifications} from "../../redux/domains/selectors"

const mapStateToProps = (state: AppState) => ({
  subClassifications: getSubClassifications(state)
})

export default connect(mapStateToProps)(SubClassificationDomainFilter)
