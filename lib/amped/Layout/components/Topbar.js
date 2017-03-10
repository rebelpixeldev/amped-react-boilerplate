import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


export const Topbar = ( { user, site } ) => (
	<AppBar
		zDepth={2}
		title={site.name}
		iconElementRight={user ? <Logged /> : <Login />}
	/>
);

class Login extends Component {
	static muiName = 'FlatButton';

	render() {
		return (
			<FlatButton {...this.props} label="Login" />
		);
	}
}

const Logged = (props) => {
	const flexStyle = {display:'flex', 'align-items':'center'}
	return (
		<div style={flexStyle}>
		<span style={flexStyle}>
			<Avatar style={{'margin-right':12}}>A</Avatar> Letter Avatar
		</span>
			<IconMenu
				{...props}
				iconButtonElement={
					<IconButton><MoreVertIcon /></IconButton>
				}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			>
				<MenuItem primaryText="Refresh" />
				<MenuItem primaryText="Help" />
				<MenuItem primaryText="Sign out" />
			</IconMenu>
		</div>
	);
}

export default Topbar;