import React from 'react'
import { Banner } from './Banner'

export const InfoSection = ({text, imageSource, flexDirection}) => {
  return (
    <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Banner styleProps={{width:'75%',flexDirection:flexDirection}}>
          <span style={{ fontSize: "0.4rem", fontWeight:500 }}>
            {text}
          </span>
          <img
            style={{ height: "50vh" }}
            alt="uni-card"
            src={imageSource}
            // src="https://www.uni.cards/images/one_percent_cashback.png"
          />
        </Banner>
      </div>
  )
}
