import { connect } from 'react-redux'
import Avatar from '../components/Avatar'

import '../style/_avatar.scss';

const mapStateToProps = (state) => ({
	user : state.amped.user,
	settings : state.amped.settings
});

export default connect(mapStateToProps)(Avatar);
