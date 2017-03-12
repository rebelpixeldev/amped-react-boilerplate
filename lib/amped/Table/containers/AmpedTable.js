import { connect } from 'react-redux'
import AmpedTable from '../components/AmpedTable'

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
	user : true,
	settings : state.settings,

});

export default connect(mapStateToProps, mapDispatchToProps)(AmpedTable);
