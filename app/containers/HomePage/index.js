import React /* { useEffect */, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import WrapperPage from 'components/Main/WrapperPage';
import BannerWrapper from 'components/HomePage/banner/Wrapper';
import LeftWrapper from 'components/HomePage/banner/info/LeftWrapper';
import RightWrapper from 'components/HomePage/banner/info/RightWrapper';
import ImgAside from 'components/HomePage/banner/info/ImgAside';
import ImgSLide from 'components/HomePage/banner/slides/ImgSlide';

// Recommend
import RecommendWrapper from 'components/HomePage/recommend/Wrapper';
import TitlePage from 'components/Common/TitlePage';
import { themes } from 'components/themes/_variables';
// Card
import CardList from 'components/CardBox/Wrapper';
import CardItem from 'components/CardBox/CardBox';
import CardHeader from 'components/CardBox/CardHeader';
import CardImg from 'components/CardBox/CardImg';
// Card body
import CardBody from 'components/CardBox/CardBody';
import CardTitle from 'components/CardBox/content/title';
import CardBtnList from 'components/CardBox/content/BtnList';
import CardBtnItem from 'components/CardBox/content/BtnItem';
import CardDescription from 'components/CardBox/content/description';
import CardParagraph from 'components/CardBox/content/pragraph';

import cake2 from 'images/cake2.jpg';

export function HomePage() {
  return (
    <WrapperPage>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <BannerWrapper className="banner-box">
        <LeftWrapper className="banner__left">
          <ImgSLide
            src="https://via.placeholder.com/150"
            alt="slide__img"
            className="slide__img"
          />
        </LeftWrapper>
        <RightWrapper className="banner__right">
          <ImgAside
            src="https://via.placeholder.com/150"
            alt="aside__img"
            className="aside__img"
          />
          <ImgAside
            src="https://via.placeholder.com/150"
            alt="aside__img"
            className="aside__img"
          />
        </RightWrapper>
      </BannerWrapper>
      <RecommendWrapper themes={themes}>
        <TitlePage themes={themes}>Recommended</TitlePage>
        <CardList>
          <CardItem>
            <CardHeader>
              <CardImg src={cake2} alt="product_img" />
            </CardHeader>
            <CardBody className="card-body">
              <CardTitle className="card-body__title">Name_cake</CardTitle>
              <CardBtnList className="cart-btn">
                <CardBtnItem to="#/" className="--like">
                  <i className="fas fa-heart" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--view">
                  <i className="fas fa-eye" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--buy">
                  <i className="fas fa-cart-plus" />
                </CardBtnItem>
              </CardBtnList>
              <CardDescription>30$</CardDescription>
              <CardParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </CardParagraph>
            </CardBody>
          </CardItem>
          <CardItem>
            <CardHeader>
              <CardImg src={cake2} alt="product_img" />
            </CardHeader>
            <CardBody className="card-body">
              <CardTitle className="card-body__title">Name_cake</CardTitle>
              <CardBtnList className="cart-btn">
                <CardBtnItem to="#/" className="--like">
                  <i className="fas fa-heart" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--view">
                  <i className="fas fa-eye" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--buy">
                  <i className="fas fa-cart-plus" />
                </CardBtnItem>
              </CardBtnList>
              <CardDescription>30$</CardDescription>
              <CardParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </CardParagraph>
            </CardBody>
          </CardItem>
          <CardItem>
            <CardHeader>
              <CardImg src={cake2} alt="product_img" />
            </CardHeader>
            <CardBody className="card-body">
              <CardTitle className="card-body__title">Name_cake</CardTitle>
              <CardBtnList className="cart-btn">
                <CardBtnItem to="#/" className="--like">
                  <i className="fas fa-heart" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--view">
                  <i className="fas fa-eye" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--buy">
                  <i className="fas fa-cart-plus" />
                </CardBtnItem>
              </CardBtnList>
              <CardDescription>30$</CardDescription>
              <CardParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </CardParagraph>
            </CardBody>
          </CardItem>
          <CardItem>
            <CardHeader>
              <CardImg src={cake2} alt="product_img" />
            </CardHeader>
            <CardBody className="card-body">
              <CardTitle className="card-body__title">Name_cake</CardTitle>
              <CardBtnList className="cart-btn">
                <CardBtnItem to="#/" className="--like">
                  <i className="fas fa-heart" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--view">
                  <i className="fas fa-eye" />
                </CardBtnItem>
                <CardBtnItem to="#/" className="--buy">
                  <i className="fas fa-cart-plus" />
                </CardBtnItem>
              </CardBtnList>
              <CardDescription>30$</CardDescription>
              <CardParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </CardParagraph>
            </CardBody>
          </CardItem>
        </CardList>
      </RecommendWrapper>
    </WrapperPage>
  );
}

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default compose(
  // withConnect,
  memo,
)(HomePage);
