import React from 'react';
import WrapperPage from 'components/Main/WrapperPage';
import AboutList from 'components/AboutPage/AboutList';
import AboutItem from 'components/AboutPage/AboutItem';
import AboutTilte from 'components/AboutPage/AboutTitle';
// Item
import Item from 'components/AboutPage/itemList/item';
import Ul from 'components/Common/UlDefault';
import { themes } from 'components/themes/_variables';
import { Helmet } from 'react-helmet';
function AboutPage() {
  return (
    <WrapperPage themes={themes}>
      <Helmet>
        <title>About page</title>
        <meta
          name="description"
          content="A React.js Boilerplate applicatiheon Aboutpage"
        />
      </Helmet>
      <AboutList>
        <AboutItem themes={themes}>
          <AboutTilte>Sản phẩm</AboutTilte>
          <Ul>
            <Item className="item">
              {' '}
              Sản phẩm luôn đảm bảo an toàn, vệ sinh
            </Item>
            <Item className="item"> Sản phẩm Phong phú, đa dạng</Item>
            <Item className="item"> 3</Item>
            <Item className="item"> 4</Item>
          </Ul>
        </AboutItem>
        <AboutItem themes={themes}>
          <AboutTilte>Chất lượng</AboutTilte>
          <Ul>
            <Item className="item"> 1</Item>
            <Item className="item"> 2</Item>
            <Item className="item"> 3</Item>
            <Item className="item"> 4</Item>
          </Ul>
        </AboutItem>
        <AboutItem themes={themes}>
          <AboutTilte>Chất lượng</AboutTilte>
          <Ul>
            <Item className="item"> 1</Item>
            <Item className="item"> 2</Item>
            <Item className="item"> 3</Item>
            <Item className="item"> 4</Item>
          </Ul>
        </AboutItem>
        <AboutItem themes={themes}>
          <AboutTilte>Chất lượng</AboutTilte>
          <Ul>
            <Item className="item"> 1</Item>
            <Item className="item"> 2</Item>
            <Item className="item"> 3</Item>
            <Item className="item"> 4</Item>
          </Ul>
        </AboutItem>
      </AboutList>
    </WrapperPage>
  );
}

export default AboutPage;
