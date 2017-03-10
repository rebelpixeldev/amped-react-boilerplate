import { connect } from 'react-redux'
import Form from '../components/Form'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
	user : true,
	site : {
		name : 'Amped'// @TODO should be in a global reducer
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Form)
