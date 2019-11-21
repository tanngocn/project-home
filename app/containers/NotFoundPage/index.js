/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { themes } from 'components/themes/_variables';
import { Helmet } from 'react-helmet';
// Page notfound styled component
import Wrapper from 'components/NotFoundPage/wrapperPage';
import TitlePage from 'components/NotFoundPage/titlePage';
import SubTitlePage from 'components/NotFoundPage/subTitlePage';
import ContentPage from 'components/NotFoundPage/contentPage';
import BtnPage from 'components/NotFoundPage/buttonPage';
import WrapperPage from 'components/Main/WrapperPage';

export default function NotFound() {
  return (
    <WrapperPage themes={themes}>
      <Wrapper themes={themes}>
        <Helmet>
          <title>404 Page not found</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <TitlePage themes={themes}>Opps!</TitlePage>
        <SubTitlePage themes={themes}>404 - page not found</SubTitlePage>
        <ContentPage themes={themes}>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </ContentPage>
        <BtnPage to="/" themes={themes}>
          Go to HomePage
        </BtnPage>
      </Wrapper>
    </WrapperPage>
  );
}
