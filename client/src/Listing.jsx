import React from 'react';
import styled from 'styled-components';
import Favorites from './Favorites.jsx';

const Wrapper = styled.span`
  display: inline-block;
  width: 33%;
  margin: 3.5px;
  padding: 4px;
  vertical-align: top;
  color: rbg(72,72,72);
  background-color: #fff;
`
const Image = styled.img`
  display: block;
  width: 290px;
  height: 200px;
  border-radius: 3px;
  :hover {
    color:grey;
  }
`
const TypeCity = styled.p`
  text-align: left;
  line-height: 5px;
  color: #8b7777;
  text-transform: uppercase;
  font-size: 10.5px;
  font-weight: 550;
  padding-top: 3.2px;
`

const Title = styled.p`
  text-align: left; 

  color: #413939;
  font-size: 16px;
  font-weight: 450;
`
const Price = styled.p`
  text-align: left;
  line-height: 5px;
  color: #534848;
  font-size: 12px;
  font-weight: 300;
`
const DivImage = styled.div`
  float:left;
  line-height: 9px;
`
const SpanImage = styled.span`
  float:left;
`

const Star = styled.img`
  width: 10px;
  height: 10px;
  display: inline-block;
  padding-top: 0;
`
const Rating = styled.b`
  font-weight:500;
  color: #493c3c;
  display:left;
`

const Reviews = styled.span`
  display:inline-block;
  line-height: 5px;
  color: grey;
  font-size: 10.8px;
  font-weight: 300;
`
const PicsCarouselWrapper = styled.div`
  position:relative;
`
const Nav = styled.div`
  position: absolute;
  top:180px;
  display:flex;
  /* justify-content:center; */
  padding: 10px 0;
  margin: 0 auto;
  left: 25%;
`

const Bubbles = styled.button` 
  border:0;
  border-radius: 50%;
  background:rgba(255,255,255,.3);
  margin: 0 5px;
  /* text-align:center; */
`
const InnerLeft = styled.button`
  position: absolute;
  top:0;
  height: 200px;
  width: 50px;
  border:0;
  background:rgba(255,255,255,.3);

`
const InnerRight = styled.button`
  position: absolute;
  top:0;
  Right:0;
  height: 200px;
  width: 50px;
  border:0;
  background:rgba(255,255,255,.3);

`
const FavsButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

function Listing (props) {
  return (
    <Wrapper>
      <PicsCarouselWrapper>
        <div>
          <Image src={props.listing.photos[0]} ></Image>
        </div>
        <Nav>
          <Bubbles></Bubbles>
          <Bubbles></Bubbles>
          <Bubbles></Bubbles>
          <Bubbles></Bubbles>
          <Bubbles></Bubbles>
          <Bubbles></Bubbles>
        </Nav>
        <InnerLeft>&#8249;</InnerLeft>
        <InnerRight>&#8250;</InnerRight>
        <FavsButton >&#9825; </FavsButton>
      </PicsCarouselWrapper>
      <TypeCity> {props.listing.type} • {props.listing.location} </TypeCity>
      <Title> {props.listing.title} </Title>
      <Price> ${props.listing.price}/night </Price>
      <DivImage>
        <SpanImage>
          <Star src="https://cdn10.bigcommerce.com/s-npe4l/products/1418/images/2090/M-REC-DGRSTAR---HIGH__37390.1531409269.100.100.jpg?c=2"></Star>
        </SpanImage><Reviews> 
        <Rating>{props.listing.rating}</Rating> ({props.listing.reviewcount}) </Reviews>
      </DivImage>
    </Wrapper>
  )
}
export default Listing;