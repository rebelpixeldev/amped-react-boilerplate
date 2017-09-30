import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import createStore from './store/createStore'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

const store = createStore(history);
const routes = require('./routes').default(store);
const initialState = window.___INITIAL_STATE__


import { Dashboard } from './components/views';

import { AmpedApp, AmpedLayout } from 'amped-react-core/Core';


class AppContainer extends Component {
  // static propTypes = {
  //   routes : PropTypes.object.isRequired,
  //   store  : PropTypes.object.isRequired
  // }

  shouldComponentUpdate () {
    return false
  }

  render () {
	  const AmpedLayoutComponent = AmpedLayout();
    return (
	    <AmpedApp store={store} history={history}>
            <Route exact path="/" component={Dashboard} />
        </AmpedApp>
    )
  }
}

export default AppContainer
