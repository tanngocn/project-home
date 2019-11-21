/*
 * App
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import AppWrapper from 'components/App';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { themes } from 'components/themes/_variables';
import Loading from 'components/Loading';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <AppWrapper themes={themes}>
      <Helmet defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/loading" component={Loading} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
