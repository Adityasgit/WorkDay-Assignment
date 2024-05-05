import { Card, CardContent } from "@mui/material";
import React from "react";
import "./JobCard.css";
const cardheight = window.innerWidth > 750 ? 550 : 450;
const cardwidth = window.innerWidth > 750 ? 250 : 177;
function capitalizeFirstChar(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const JobCard = ({ info }) => {
  const [h, setH] = React.useState(cardheight);
  return (
    <div className="">
      <Card
        sx={{
          maxWidth: cardwidth,
          minWidth: cardwidth,
          minHeight: cardheight,
          borderRadius: 2,
          maxHeight: h,
          position: h === cardheight ? "relative" : "absolute",
          zIndex: h === cardheight ? 0 : 1,
        }}
        className="card"
      >
        <CardContent className="cardbody">
          <div
            style={{
              height: window.innerWidth > 750 ? "14vmax" : "21vmax",
              paddingTop: "1vmax",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ height: "50%" }} className="top">
              {" "}
              <div style={{ position: "relative" }}>
                <img
                  src={info.logoUrl}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    position: "absolute",
                    top: "6px",
                    left: "-6px",
                  }}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "0.7fr 1fr 0.5fr",
                  padding: "2px",
                }}
              >
                <div
                  style={{
                    color: "gray",
                    letterSpacing: "1px",
                    fontSize: "15px",
                  }}
                >
                  {capitalizeFirstChar(info.companyName)}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  {capitalizeFirstChar(info.jobRole)}
                </div>
                <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                  {capitalizeFirstChar(info.location)}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "30%",
                fontSize: "13px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "#3b3b98",
                  fontWeight: "bold",
                }}
              >
                {`  Estimated Salary: ₹${
                  info.minJdSalary ? info.minJdSalary : "0"
                } - ${info.maxJdSalary ? info.maxJdSalary : "~"} LPA✅`}
              </div>
            </div>
            <div
              style={{ height: "10%", fontWeight: "bold", fontSize: "15px" }}
            >
              About Company:
            </div>
            <div
              style={{
                height: "10%",
                fontWeight: "bolder",
                fontSize: "12px",
                marginTop: "3px",
              }}
            >
              About us
            </div>
          </div>
          <div
            className="des"
            style={
              h === cardheight
                ? { height: "16vmax", overflow: "hidden" }
                : { height: "fit-content" }
            }
          >
            {info.jobDetailsFromCompany}
          </div>
          <button
            className=""
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              boxShadow: h === cardheight ? "0px -16px 25px white" : "",
            }}
            onClick={() => setH(h === cardheight ? 10000000000 : cardheight)}
          >
            {h === cardheight ? "see more" : "see less"}
          </button>
          <div>
            <div
              style={{ fontSize: "small", color: "grey", letterSpacing: "2px" }}
            >
              Minimun Experience
            </div>
            <div
              style={{ fontSize: "13px", fontWeight: "bold", padding: "3px" }}
            >{`${info.minExp ? info.minExp : 0} years`}</div>
          </div>
          <div
            style={{
              height: "8vmax",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            className="links"
          >
            <button style={{ backgroundColor: "green" }}>⚡Easy Apply</button>
            <button>👨‍⚖️👩‍⚖️👩‍💼Unlock referral asks</button>
          </div>
        </CardContent>
      </Card>
      {h !== cardheight ? (
        <Card
          sx={{
            maxWidth: cardwidth,
            minWidth: cardwidth,
            minHeight: cardheight,
            borderRadius: 2,
            maxHeight: cardheight,
          }}
          className="card"
        ></Card>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JobCard;
