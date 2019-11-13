import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';
import styled from 'styled-components';

const MainWrapper = styled.div`
  font-family: Helvetica Neue, sans-serif;
  position:relative;
  height: 420px;
  border: 1px solid yellow;
  // flex-direction: row;
  // flex:1;
`;


const Container = styled.div`
  width: 915px;
  height:420px;
  border: 1px dashed red;
  position: relative;
  /* display: inline-block; */
  margin:auto;
  overflow: hidden;
  @media(max-width: 992px) {
    width:600px;
  }
`
const ListingsDiv = styled.div`
  position:relative;
  // border: 1px solid red;
  height: 350px;
  list-style:none;
`;

const PrevButton = styled.button` 
  position: absolute;
  display: inline-block;
  font-family: 'Nanum Myeongjo', serif;
  /* text-align: center; */
  top: 50%;
  transform:translateY(-50%);
  /* background:transparent; */
  /* border:0; */
  cursor:pointer;
  left:0%;
`;

const NextButton = styled.button`
  position: absolute;
  font-family: 'Nanum Myeongjo', serif;
  top:50%;
  display: inline-block;
  transform:translateY(-50%);
  /* background:transparent; */
  /* border:0; */
  cursor:pointer;
  right:0%;

`;

const Title = styled.h2`
  text-align: left;
  padding-left:7.5px;

`;

class Recommendation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currIndex: 0,
      currListing: [],
      allListings: [],
      pic1: [],
      displayPopup: false
    }
    this.nextThree = this.nextThree.bind(this);
    this.prevThree = this.prevThree.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
  }

  componentDidMount () {
    console.log(this.props.listingId)
    axios.get(`http://18.220.48.181/recommendations/${this.props.listingId}`)
      .then((res) => {
        console.log(res.data)
        this.setState({allListings: res.data})
      })
      .catch((err)=> console.log('error from CLIENT AXIOS ************ req', err));
  }

  nextThree (event) {
    const newIndex = this.state.currIndex+1;
    this.setState({currIndex:newIndex});
  }

  prevThree (event) {
    const newIndex = this.state.currIndex-1;
    this.setState({currIndex:newIndex});
  }

  handlePopup (boolean) {
    this.setState({displayPopup: boolean});
  }


  render() {
    return (
      <MainWrapper>
        <PrevButton id="outterLeftArrow" onClick={() => this.prevThree()} disabled={this.state.currIndex===0}> &#8249; </PrevButton>
        <Container>
          <Title>More homes you may like</Title>
          <Listings allListings={this.state.allListings} currIndex={this.state.currIndex} />
        </Container>
        <NextButton id="outterRightArrow" onClick={()=>this.nextThree()} disabled={this.state.currIndex === this.state.allListings.length-3}> &#8250; </NextButton>
      </MainWrapper>
    );
  }
}
export default Recommendation;

// handlePopup={this.state.handlePopup}