import { connect } from 'react-redux'
import Table from '../components/Table'

const mapStateToProps = (state) => ({
	user : true,
	settings : state.amped.settings
});

export default connect(mapStateToProps)(Table)
