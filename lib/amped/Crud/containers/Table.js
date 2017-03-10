import { connect } from 'react-redux'
import Table from '../components/Table'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
	user : true,
	site : {
		name : 'Amped'// @TODO should be in a global reducer
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Table)
