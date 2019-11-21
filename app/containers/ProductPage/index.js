import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import WrapperPage from 'components/Main/WrapperPage';
import SidebarWrapper from 'components/ProductPage/sidebar/Wrapper';
import TitlePage from 'components/Common/TitlePage';
import ContentWrapper from 'components/ProductPage/content/Wrapper';
import ProductBox from 'components/ProductPage';
import FilterBtn from 'components/ProductPage/sidebar/filterButton';

// Form
import FormGroup from 'components/ProductPage/sidebar/radioStyle';
import Input from 'components/Form/formGroup/InputStyle';
import Label from 'components/Form/formGroup/LabelStyle';
import { themes } from 'components/themes/_variables';

function ProductPage() {
  const [show, setShow] = useState(false);
  return (
    <WrapperPage themes={themes}>
      <Helmet>
        <title>Products page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <ProductBox>
        <SidebarWrapper themes={themes} className={show ? '' : 'hide'}>
          <FilterBtn
            onClick={() => setShow(!show)}
            themes={themes}
            className={show ? 'active' : ''}
          >
            <i className="fas fa-filter" />
          </FilterBtn>
          <TitlePage themes={themes}>Category</TitlePage>
          <FormGroup className="cate-item">
            <Input
              type="radio"
              className="cate__radio"
              name="cate"
              id="cate1"
              themes={themes}
            />
            <Label htmlFor="cate1" themes={themes}>
              Love
            </Label>
          </FormGroup>
          <FormGroup className="cate-item">
            <Input
              type="radio"
              className="cate__radio"
              name="cate"
              id="cate2"
              themes={themes}
            />
            <Label htmlFor="cate2" themes={themes}>
              Love
            </Label>
          </FormGroup>
          <FormGroup className="cate-item">
            <Input
              type="radio"
              className="cate__radio"
              name="cate"
              id="cate3"
              themes={themes}
            />
            <Label htmlFor="cate3" themes={themes}>
              Love
            </Label>
          </FormGroup>
          <FormGroup className="cate-item">
            <Input
              type="radio"
              className="cate__radio"
              name="cate"
              id="cate4"
              themes={themes}
            />
            <Label htmlFor="cate4" themes={themes}>
              Love
            </Label>
          </FormGroup>
        </SidebarWrapper>
        <ContentWrapper themes={themes}>Content</ContentWrapper>
      </ProductBox>
    </WrapperPage>
  );
}

export default ProductPage;
