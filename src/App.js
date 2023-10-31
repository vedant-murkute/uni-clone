import "./App.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { GiStarShuriken } from "react-icons/gi";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState, useEffect } from "react";
import { InfoSection } from "./components/InfoSection";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 500;

      if (scrollHeight > triggerHeight) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source
            src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
            type="video/mp4"
          />
        </video>
        <Header></Header>
        <div
          style={{
            width: "75%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Banner>
            <div>
              <span style={{ fontSize: "0.55rem", display: "inline-block" }}>
                <strong>NX Wave.</strong>
                The next-gen credit card for those who love rewards.
              </span>
              <span
                style={{
                  marginTop: "30px",
                  marginBottom: "40px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "0.15rem",
                }}
              >
                1% Cashback
                <GiStarShuriken /> 5x RewardsZero
                <GiStarShuriken /> Forex Markup
              </span>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "black",
                  borderRadius: "10px",
                }}
              >
                <Input></Input>
                <Button
                  text={"Apply Now"}
                  bgColor={"yellow"}
                  textColor={"black"}
                ></Button>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  width: "50%",
                  display: "flex",
                  gap: "5px",
                }}
              >
                <input type="checkbox" />
                <span style={{ fontSize: "12px" }}>
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or WhatsApp to guide you through your application.
                </span>
              </div>
            </div>
            <img
              style={{ height: "50vh" }}
              alt="uni-card"
              src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            />
          </Banner>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <div
          style={{
            width: "52%",
            fontSize: "40px",
            lineHeight: "1.2",
            fontWeight: "500",
          }}
        >
          <span>Earn 1% assured cashback </span>
          <span className="smoked-font">on your spends. Get </span>
          <span>5X more value than cashback </span>
          <span className="smoked-font">
            at Uni Store. Enjoy round the clock{" "}
          </span>
          <span>Whatsapp support. </span>
          <span className="smoked-font">And its </span>
          <span>lifetime free; </span>
          <span className="smoked-font">
            no joining fee, no annual charges.
          </span>
        </div>
        <img
          alt="arrow"
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            padding: "30px",
            background:
              "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
          }}
          src="https://www.uni.cards/images/down_arrow.svg"
        ></img>
      </div>
      <InfoSection
        text={
          "1% assured cashback on your spends.The more you spend, the more you earn."
        }
        imageSource={"https://www.uni.cards/images/one_percent_cashback.png"}
      ></InfoSection>
      <InfoSection
        text={"5x more value than your cashback, only at the Uni Store."}
        imageSource={"https://www.uni.cards/images/five_x_rewards.png"}
        flexDirection={"row-reverse"}
      ></InfoSection>
      <InfoSection
        imageSource={"https://www.uni.cards/images/forex_globe.png"}
        text={"Zero Forex Markup.Go international, without any fees."}
      ></InfoSection>
      {showComponent && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            height: "80px",
            width: "100%",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            backgroundColor: "rgba(245,245,245)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "black",
              borderRadius: "10px",
              height: "70%",
            }}
          >
            <Input></Input>
            <Button
              text={"Apply Now"}
              bgColor={"yellow"}
              textColor={"black"}
            ></Button>
          </div>
          <div
            style={{
              width: "30%",
              display: "flex",
              gap: "5px",
            }}
          >
            <input type="checkbox" />
            <span style={{ fontSize: "12px" }}>
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
