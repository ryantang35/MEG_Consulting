import styled from "styled-components";
import timeline from "../../Images/Application/timeline.png"
import coffee from "../../Images/Application/coffee.png"
import north from "../../Images/Application/north.png"

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #F1D7BC;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: start;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const GridContainer = styled.div`
    margin: 15vh 15vw 15vh 15vw;
    height: 81vh;
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    transform: translateX( .5vw);
    @media (max-aspect-ratio: 610/835){
        height: 54vh;
        margin-top: 25vh;
    }
`

const LogoContainer = styled.div`
    outline: solid 3px #1e1e1e;
    height: 27vh;
    width: 20vw;
    margin:1.5px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-aspect-ratio: 1217/835){
    display: none;
    }
`

const TimelineContainer = styled.div`
    height: 27vh;
    width: 57vw;
    outline: solid 3px #1e1e1e;
    margin:1.5px;
    padding-right:3px;
    background-image: url(${timeline});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    @media (max-aspect-ratio: 1217/835){
    width: 79vw;
    }
`

const InfoContainer = styled.div`
    height: 54vh;
    width:20vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-aspect-ratio: 1217/835){
    width: 26vw;
    }
    @media (max-aspect-ratio: 610/835){
        display:none;
    }
`

const FaqContainer = styled.div`
    height: 54vh;
    width:20vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-aspect-ratio: 1217/835){
    display: none;
    }
`

const NewLine = styled.div`
    height:0;
    width:100vw;
`

const CenterContainer = styled.div`
    height: 54vh;
    width: 37vw;
    outline: solid 3px #1e1e1e;
    margin: 1.5px;
    display:flex;
    flex-direction: column;

    @media (max-aspect-ratio: 1217/835){
    width: 53vw;
    }

    @media (max-aspect-ratio: 610/835){
        height:27vh;
        width: 80vw;
    }
`

const ApplyContainer = styled.div`
    height:27vh;
    outline: solid 3px #1e1e1e;
    margin-bottom: .75px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MoreContainer = styled.div`
    height:27vh;
    outline: solid 3px #1e1e1e;
    margin-top: .75px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-aspect-ratio: 610/835){
        display:none;
    }
`

const TextContainer = styled.div`
    display: inline-block;
    margin-left: 2vw;
    margin-right: 2vw;
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-evenly;
`

const TitleText = styled.h1`
    font-size: 2.5vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const HeaderText = styled.h1`
    font-size: 1.7vmax;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const BodyText = styled.p`
  display: inline-block;
  font-size: calc(2.7vmin);
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  word-wrap: break-word;
`;

const SmallSpacer = styled.div`
    height:1vh;
    width:100%;
`

const ImageContainer = styled.div`
    width:100%;
    height: 25vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    background-image: url(${north});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const SoonContainer = styled.div`
    background-color: rgba(255, 176, 97,.9);
    width: 50%;
    height: 50%;
    transform: rotate(10deg) ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25%;
    left: 25%;
`

function MenuSection() {
    return (
      <SectionContainer>
        <GridContainer>
            <LogoContainer>
                <TextContainer>
                    <TitleText style={{width:"16vw"}}>Our Application Tracker</TitleText>
                </TextContainer>
            </LogoContainer>
            <TimelineContainer>
            </TimelineContainer>
            <NewLine/>
            <FaqContainer>
                <TextContainer>
                    <HeaderText>FAQ's:</HeaderText>
                    <BodyText>
                        Q: I'm not in Ross, can I still apply? <br/> A: Yes, we accept all majors! <br/>
                        Q: Any advice to help me get in? <br/> A: There's a lot &#40;scroll down!&#41;, but being yourself and putting your best foot forward is the most important advice we have. <br/>
                    </BodyText>
                </TextContainer>
            </FaqContainer>
            <CenterContainer>
                <a href= "https://docs.google.com/forms/d/e/1FAIpQLSeHCJl6mIQEAhO2DPE_1x8zasWhHH_C8zrzZ_AK3pMhmnZ0BQ/viewform" target="_blank" style={{textDecoration: "none"}}>
                    <ApplyContainer>                    
                        <TextContainer>
                            <TitleText style={{width:"100%", textAlign: "center", textDecoration: "underline", fontSize:"250%"}}>Apply Now</TitleText>
                        </TextContainer>
                    </ApplyContainer>
                </a>
                <MoreContainer>
                    <TextContainer>
                        <HeaderText>Maximize Your Recruiting Experience</HeaderText>
                        <SmallSpacer/>
                        <BodyText>Ross club recruiting can be an intimidating experience, but we're here to help you get through it and to help you get the most out of it! Below we have advice and our recruiting philosophy that'll help</BodyText>
                    </TextContainer>
                </MoreContainer>
            </CenterContainer>
            <InfoContainer>
                <TextContainer>
                    <TitleText style={{textAlign: "center"}}>Next Event</TitleText>
                    <ImageContainer/>
                    <HeaderText style={{textAlign: "center", width: "100%"}}>Festifall North</HeaderText>
                    <BodyText style={{textAlign: "center", width: "100%"}}> Gerstacker Grove <br/> 8/30 at 5-8 pm </BodyText>
                </TextContainer>
            </InfoContainer>
            <NewLine/>
        </GridContainer>  
      </SectionContainer>
    );
  }
  
  export default MenuSection;