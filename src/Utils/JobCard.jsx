import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import "./JobCard.css";

const JobCard = ({}) => {
  const [h, setH] = React.useState(400);
  return (
    <div className="">
      <Card
        sx={{
          maxWidth: 250,
          minWidth: 250,
          minHeight: 400,
          borderRadius: 2,
          maxHeight: h,
          position: h === 400 ? "relative" : "absolute",
          zIndex: h === 400 ? 0 : 1,
        }}
        className="card"
      >
        <CardContent>
          <button onClick={() => setH(h === 400 ? 10000000 : 400)}>
            see more
          </button>
        </CardContent>
      </Card>
      {h !== 400 ? (
        <Card
          sx={{
            maxWidth: 250,
            minWidth: 250,
            minHeight: 400,
            borderRadius: 2,
            maxHeight: 400,
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
