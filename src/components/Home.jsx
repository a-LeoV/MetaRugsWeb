import { Card, Button, Content } from "antd";
import Image from "rc-image";
import metagif from "./Images/MetaRugsTGif.gif";
import { useRUGBalance2 } from "hooks/useRUGBalance2";
import movie from "../vedio/movie2.mp4";
import { useEffect } from "react";
import test from "../vedio/test.png";
import "./styles/home.css";
import { BsStarHalf } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BsWindowDock, BsGlobe2 } from "react-icons/bs";

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
        <h1>Build up the whole picture</h1>
        <h2>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
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
              <BsStarHalf className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
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
              <BsWindowDock className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
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
              <BsGlobe2 className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
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
              <GiBrain className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
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
              <BiLike className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
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
              <FiSettings className="icon" />
            </div>
          </div>
          <h2>Robust Workflow</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
      </div>
      <div
        className="startup"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
      >
        <h1>Workflow that just works</h1>
        <h2>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </h2>
      </div>
      <div className="workflow_img_right">
        <div
          className="lightning"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          <p className="blue">LIGHTNING FAST WORKFLOW</p>
          <h2 className="data">Data-driven insights</h2>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-easing="linear">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
            alt=""
          />
        </div>
      </div>
      <div className="workflow_img_right">
        <div data-aos="fade-right" data-aos-easing="linear">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
            alt=""
          />
        </div>
        <div
          className="lightning"
          data-aos="fade-left"
          data-aos-easing="linear"
        >
          <p className="blue">LIGHTNING FAST WORKFLOW</p>
          <h2 className="data">Data-driven insights</h2>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="workflow_img_right border_B">
        <div
          className="lightning"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          <p className="blue">LIGHTNING FAST WORKFLOW</p>
          <h2 className="data">Data-driven insights</h2>
          <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-easing="linear">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="startup"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
      >
        <h1>Customer testimonials</h1>
        <h2>
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </h2>
      </div>
      <div
        className="testimonials"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="linear"
      >
        <div className="test_items">
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
            — Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum cillum dolore eu fugiat.
          </p>
        </div>
        <div className="test_items">
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
            — Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum cillum dolore eu fugiat.
          </p>
        </div>
        <div className="test_items">
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
            — Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      <div className="layout">
        <h2>For previewing layouts and visual?</h2>
        <div className="input_cotnainer">
          <input type="text" placeholder="Your best email" />
          <div className="icons_con">
            <AiOutlineArrowRight
              style={{ width: ".9rem", cursor: "pointer", height: ".9rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
