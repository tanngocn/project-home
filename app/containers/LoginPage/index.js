import React from 'react';
import Wrapper from 'components/LoginPage/Wrapper';
import FormBox from 'components/Form/Box';
import TitleBox from 'components/Form/Title';
import Box from 'components/Form/FormBox';
import FromGroup from 'components/Form/formGroup/style';
import Input from 'components/Form/formGroup/InputStyle';
import Label from 'components/Form/formGroup/LabelStyle';
import SubmitButton from 'components/Common/SubmitButton';
// Banner
import BannerBox from 'components/LoginPage/banner/box';
import TitleBanner from 'components/LoginPage/banner/Title';
import { themes } from 'components/themes/_variables';
import cake1 from 'images/cake1.jpg';
function LoginPage() {
  return (
    <Wrapper themes={themes}>
      <Box>
        <FormBox themes={themes}>
          <TitleBox themes={themes}>Login</TitleBox>
          <form className="form">
            <FromGroup>
              <Input
                type="text"
                name="username"
                id="username"
                themes={themes}
              />
              <Label htmlFor="username">Username:</Label>
            </FromGroup>
            <FromGroup>
              <Input
                type="password"
                name="username"
                id="password"
                themes={themes}
              />
              <Label htmlFor="password" themes={themes}>
                Password:
              </Label>
            </FromGroup>
            <FromGroup>
              <SubmitButton type="submit" themes={themes}>
                Login
              </SubmitButton>
            </FromGroup>
          </form>
        </FormBox>
        <BannerBox themes={themes} cake1={cake1}>
          <TitleBanner>Welcome to Page </TitleBanner>
          {/* <p className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p> */}
        </BannerBox>
      </Box>
    </Wrapper>
  );
}

export default LoginPage;
