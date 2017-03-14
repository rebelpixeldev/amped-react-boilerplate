import { connect } from 'react-redux'
import { AmpedGlobal } from '../components/AmpedGlobal'

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
	user : true,
	settings : state.settings,

});

export default connect(mapStateToProps, mapDispatchToProps)(AmpedGlobal);
