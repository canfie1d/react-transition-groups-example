import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './Home';
import Contact from './Contact';

export default class TransitionRoutes extends React.Component {
  render() {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    const timeout = {
      enter: 300,
      exit: 300
    };

    return (
      <TransitionGroup component="main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="route-wrapper">
            <Switch location={this.props.location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </section>
          </CSSTransition>
      </TransitionGroup>
    );
  }
}
