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
    // this.currentThreeListings = this.currentThreeListings.bind(this);
  }

  componentDidMount () {
    // let id = window.location.href.split('/')[4];
    // axios.get("/currentListing", {params: {id:id}}).then(result => {
    //   let listing = result.data[0];
    //   console.log(results.data)
    //   // callback(listing)
    // });
    axios.get("http://13.56.204.195:9004/allHomes")
    // axios.get('http://localhost:9004/allHomes')
      .then((res) => {console.log(res.data);
        this.setState({allListings: res.data})})
      .catch((err)=> console.log('error from CLIENT AXIOS ************ req', err));
 
  }

  // refreshThreeListings () {
  //   const threeListings = this.state.allListings.slice(0, 3);
  //   this.setState({pageListings: threeListings});
  // }

  nextThree (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex+1;
    this.setState({currIndex:newIndex});
    // const threeListings = this.state.allListings.slice(newIndex, newIndex+3);
    // this.setState({pageListings: threeListings, currIndex:newIndex});
  }

  prevThree (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex-1;
    // const threeListings = this.state.allListings.slice(newIndex, newIndex+3);
    this.setState({currIndex:newIndex});
    // this.setState({pageListings: threeListings, currIndex:newIndex});
  }

  handlePopup (boolean) {
    this.setState({displayPopup: boolean});
  }


  render() {
    return (
      // <MainWrapper>
      //   <PrevDiv className="innerdiv">
      //     <PrevButton id="outterLeftArrow" onClick={() => this.prevThree()} disabled={this.state.currIndex===0}> &#8249; </PrevButton>
      //   </PrevDiv>
      //   <Container>
      //     <Title>More homes you may like</Title>
      //     <ListingsDiv>

      //     <Listings allListings={this.state.allListings} currIndex={this.state.currIndex}/>
      //     </ListingsDiv>
      //   </Container>
      //   <NextDiv>   
      //     <NextButton id="outterRightArrow" onClick={()=>this.nextThree()} disabled={this.state.currIndex === this.state.allListings.length-3}> &#8250; </NextButton>
      //   </NextDiv>
      // </MainWrapper>
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