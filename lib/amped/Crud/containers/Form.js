import { connect } from 'react-redux'
import Form from '../components/Form'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
	user : true,
	settings : state.amped.settings
});

export default connect(mapStateToProps, mapDispatchToProps)(Form)
