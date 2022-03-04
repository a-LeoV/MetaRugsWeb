import { Card, Button, Content, Image } from "antd";
import metagif from "./Images/MetaRugsTGif.gif";
import { Link } from 'react-router-dom'
import { useRUGBalance2 } from "hooks/useRUGBalance2";
import movie from "../vedio/movie2.mp4";
import movieArb from "../vedio/movie_arb.mp4";
import movieBnb from "../vedio/movie_bnb.mp4";
import moviePol from "../vedio/movie_pol.mp4";
import { useEffect } from "react";
import test from "../vedio/test.png";
import binaly from "../vedio/Binaly.png";
import aleo from "../vedio/aleoBW.png";
import test2 from "../vedio/test2.png";
import "./styles/home.css";
import { BsStarHalf } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BsWindowDock, BsGlobe2, BsHash, BsCloudCheck, BsEye, BsTwitter } from "react-icons/bs";
import { GiMeltingIceCube, GiHastyGrave } from "react-icons/gi";


//  <Card style={styles.card} title={<h1 style={styles.title}>👋 Welcome rugged fellas</h1>}>
{
  /* <Button style={styles.buttons}> {"You have " + totalNFTs + " dirty Crypto Rugs"}</Button>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: "center"}} >
 <Image src={metagif} width={540} height={540} />
 </div>
 </Card> */
}

export default function Home({ isServerInfo }) {
  const { totalNFTs } = useRUGBalance2();

  return (
    <div className="home container">
      <div
        className="startup"
        id="New"
        style={{ margin: "100px 0" }}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-anchor-placement="top-center"
      >
        <h1>
          Welcome to <span className="startup_blue">MetaRugs</span>
        </h1>
        <h2>
        A Never-ending NFT collection of 3D rugs immortalising notable crypto exploits, hacks and rug pulls.
        </h2>
        <h2>
        We don't love the rugs -- We remember them.
        </h2>
        <div className="button_group">
          <button className="blue">Get started</button>
          <button className="gray">View on OpenSea</button>
        </div>

        <video autoPlay muted loop className="vedio" controls>
          <source src={movie} type="video/mp4" />
        </video>
      </div>
      <div
        className="startup"
        id="new2"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-anchor-placement="top-center"
      >
        <h1>7,400 beautiful <span className="startup_blue">Rugs</span></h1>
        <h2>
        MetaRugs 1.0 collection was idealized and build by frustrated rugged users in rescue of 
        <a target="_blank" onClick={()=> window.open("https://opensea.io/collection/thecryptorugs", "_blank" )}> CryptoRugs </a>
         -- an abandoned NFT project with awful art and a great idea. Anyone can burn a CryptoRug in exchange for a random MetaRug or mint one with ETH.
        </h2>
      </div>
      <div className="workflow">
        <div
          className="workflow_item"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <div className="icons_div">
            <div className="icons">
              <BsHash className="icon2"/>
            </div>
          </div>
          <h2>Provenance Hash</h2>
          <p>
            MetaRugs 1.0 NFTs are verifiably determined before minting starts. Our Provenance Hash is a SHA-256 hash value result of input full metadata + videos CIDs. 
          </p>
        </div>
        <div
          className="workflow_item"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <div className="icons_div">
            <div className="icons">
              <BsCloudCheck className="icon2" />
            </div>
          </div>
          <h2>Descentralized Database</h2>
          <p>
            Both metadata JSONs and mp4 artwork renders are 100% hosted on IPFS and Filecoin with web3.storage for a secure and permanent availability.
          </p>
        </div>
        <div
          className="workflow_item"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <div className="icons_div">
            <div className="icons">
              <BsGlobe2 className="icon2" />
            </div>
          </div>
          <h2>Governance</h2>
          <p>
          Rugs meet democracy in MR. DAO. Holders of MetaRugs 1.0 NFTs steer the future of MetaRugs via signature voting in the snapshot platform.
          </p>
        </div>
        <div
          className="workflow_item"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <div className="icons_div">
            <div className="icons">
              <BsEye className="icon2" />
            </div>
          </div>
          <h2>Long-term Vision</h2>
          <p>
            MetaRugs 2.0 is a limitless collection where users are able to mint the "Rug of the month". Rugs never stop being pulled -- so we keep them coming.
          </p>
        </div>
        <div
          className="workflow_item"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <div className="icons_div">
            <div className="icons">
            <GiMeltingIceCube className="icon2" />
            </div>
          </div>
          <h2>Unfreezing Capital</h2>
          <p>
          NFT scene is crowded with hopeless NFT projects and we are the safety net. Propose a R.I.P. for MR. DAO and get your "favorite" worthless collection whitelisted. 
          </p>
        </div>
        <div
          className="workflow_item"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          <div className="icons_div">
            <div className="icons">
            <GiHastyGrave className="icon2" />
            </div>
          </div>
          <h2>NFT Graveyard</h2>
          <p>
          Perhaps you have bought in and fallen victim to one or two failed NFTs? We don't judge, come bury the worthless NFTs in your wallet and get $RUGD rewards.
          </p>
        </div>
      </div>
      <div
        className="startup"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
      >
        <h1><span className="startup_blue">Rugs</span> have never been this <span className="startup_blue">Meta</span></h1>
        <h2>
         We've been baptized before Zuck made Meta sound like a bad word.
        </h2>
        <h2>
          Please bear with us.
        </h2>
      </div>
      <div className="workflow_img_right">
        <div
          className="lightning"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          <p className="blue">DATA-DRIVEN ODDS</p>
          <h2 className="data">Social and economic impact</h2>
          <p className="gray">
          MetaRugs 1.0 collection odds were carefully crafted to reflect social and economic impact concerning each Rug Event. 
          Economic impact of hacks/scams/exploits have been classified in equally weighted BTC and fiat terms. Social impact is measured by a log regression of Google Trends searches.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-easing="linear">
        <video autoPlay muted loop className="vedio2" controls>
          <source src={movieBnb} type="video/mp4" />
        </video>
        </div>
      </div>
      <div className="workflow_img_right">
        <div data-aos="fade-right" data-aos-easing="linear">
        <video autoPlay muted loop className="vedio2" controls>
          <source src={moviePol} type="video/mp4" />
        </video>
        </div>
        <div
          className="lightning"
          data-aos="fade-left"
          data-aos-easing="linear"
        >
          <p className="blue">NFT GRAVEYARD</p>
          <h2 className="data">Bury worthless NFTs and get $RUGD</h2>
          <p className="gray">
          What happened to CryptoRugs is but a symptom of a much worse, deep disease. We don't want it to spread, do we? 
          Don't let those worthless NFTs in your wallet you don't even remember buying, remind you of your costly mistakes -- Bury them and receive $RUGD rewards. 
          </p>
        </div>
      </div>
      <div className="workflow_img_right border_B">
        <div
          className="lightning"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          <p className="blue">SPRAY & PRAY</p>
          <h2 className="data">Multi-chain approach in all levels</h2>
          <p className="gray">
          MetaRugs home is ETH but we celebrate all chains. You can find your favorite chain as a floating artifact beside our Rugs.
          Furthermore, NFT Graveyard and $RUGD token is expected to launch on all chains that MR. DAO see fit.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-easing="linear">
        <video autoPlay muted loop className="vedio2" controls>
          <source src={movieArb} type="video/mp4" />
        </video>
        </div>
      </div>
      <div
        className="startup"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
      >
        <h1><span className="startup_blue">MetaRugs</span> Team</h1>
       </div>
      
      <div
        className="testimonials"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
      >
        
        <div className="test_items">
        <div className="test_icon">
        <Image 
                preview={false}
                
                src={binaly}
                 alt=""
                 style={{
                  height: "130px",
                  width: "130px",
                  borderRadius: "50%",
                  marginTop: "-120px",
                  float: "center",
                  border: "solid 4px white",
                }}
                
              />
              <p>
          BinAly
          </p>
              </div>
          <img
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              marginBottom: "1rem",
             
            }}
            src={test}
            alt=""
          />
          <p>
          Experienced Game Designer, crypto curious and Role-playing Games lover. BinAly is the legend behind MetaRugs stunning artwork renders.
          </p>
          <img
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              marginBottom: "1rem",
              float: "right",
            }}
            src={test2}
            alt=""
          />
         
           <BsTwitter className="icon3" />
           <p style={{ position: "absolute", top: "360px", left: "250px",}} >
          @BinAly
          </p>
         
        </div>
      
        <div className="test_items">
        <div className="test_icon">
        <Image 
                preview={false}
                
                src={aleo}
                 alt=""
                 style={{
                  height: "130px",
                  width: "130px",
                  borderRadius: "50%",
                  marginTop: "-120px",
                  float: "center",
                  border: "solid 4px white",
                }}
                
              />
              <p>
          aLeo
          </p>
              </div>
          <img
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              marginBottom: "1rem",
            }}
            src={test}
            alt=""
          />
          <p>
            CEO of MetaRugs, crypto enthusiast since 2017, ETH miner, rug lover. aLeo idealized MetaRugs, co-directed Rugs design, manages the descentralized database, smartcontract and website coding and still finds time to shitpost on twitter.   
          </p>
          <img
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              marginBottom: "1rem",
              float: "right",
            }}
            src={test2}
            alt=""
          />
           <BsTwitter className="icon4" />
           <p style={{ position: "absolute", top: "360px", left: "830px",}} >
          @MetaRugs
          </p>
          
        </div>
      </div>
      <div
        className="startup"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
             >
        <h2>
         Special thanks to Toff33, Okabe, Worksmarter, Bart, Jason and Eman for their effort and brainstorming on MetaRugs early days.
        </h2>
      </div>
     
     
     

      <div className="layout">
        <h2>Ready to get MetaRugged?</h2>
        
        <div className="button_group2">
        <button  className="gray2" onClick={()=> window.open("https://opensea.io/collection/thecryptorugs", "_blank" )}>Enter MR. DAO <AiOutlineArrowRight
              style={{ width: ".9rem", cursor: "pointer", height: ".9rem" }}
            />  </button>
    
        </div>
      
      </div>
    
    </div>
    
  );
}
