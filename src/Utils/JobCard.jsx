import { Card, CardContent } from "@mui/material";
import React from "react";
import "./JobCard.css";
const cardheight = window.innerWidth > 750 ? 500 : 450;
const cardwidth = window.innerWidth > 750 ? 250 : 177;
const JobCard = () => {
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
              <div>1</div>
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
                    fontSize: "small",
                  }}
                >
                  Emma
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  Software Productivity Engineer
                </div>
                <div style={{ fontSize: "10px", fontWeight: "bold" }}>
                  Bangalore
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
                Estimated Salary: ₹30 - 50 LPA✅
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
            m cupiditate molestiae corporis architecto praesentium tempora ullam
            quae aut cum ratione saepe velit, vero et iure incidunt inventore
            suscipit itaque! Quam, molestias. Fuga dolor iste illum! Molestiae
            repellendus dolorum repudiandae nobis saepe iste? Eligendi, porro!
            Eligendi, commodi. Architecto, iure suscipit tenetur fugit, neque
            qui animi corrupti quibusdam iste ad eius, veniam quam. In molestiae
            iusto hic beatae inventore nobis ipsum quis officiis cumque quae
            accusantium asperiores, numquam ex voluptatibus assumenda natus id
            excepturi tenetur, veniam dicta dolores pariatur? Aliquam sunt
            mollitia necessitatibus. Praesentium repellat possimus ipsam illum
            dignissimos, impedit exercitationem optio aliquid harum, cum ab
            ratione temporibus maxime tenetur quod non enim id nisi ducimus ex
            nulla dolores! Voluptates, provident? Atque, cupiditate!
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
