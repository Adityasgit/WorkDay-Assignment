import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import BluePrint from "../Utils/BluePrint";
import { Checkbox, ListItemText, TextField } from "@mui/material";
import { Utils } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import {
  setCompanyNameAction,
  setIsRemoteAction,
  setLocationAction,
  setRoleAction,
  setMinExperienceAction,
  setMinBasePayAction,
} from "../features/filter/filterReducer";
import "./JobListings.css";
import JobCard from "../Utils/JobCard";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const roles = Utils.getRoles();
const experiences = Utils.getExperiences();
const locations = Utils.getLocations();

function JobListings() {
  const { experience, companyName, location, remote, minBasePay, role } =
    useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <BluePrint
      header={
        <>
          <div>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="role-label">Roles</InputLabel>
              <Select
                labelId="role-label"
                id="role-select"
                multiple
                value={role?.length >= 0 ? role : []}
                onChange={(e) => {
                  const newRole =
                    typeof e.target.value === "string"
                      ? e.target.value.split(",")
                      : e.target.value;
                  dispatch(setRoleAction(newRole));
                }}
                input={<OutlinedInput id="role" label="Roles" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {roles.map((roleOption) => (
                  <MenuItem key={roleOption.value} value={roleOption.value}>
                    <Checkbox checked={role?.includes(roleOption.value)} />
                    <ListItemText primary={roleOption.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: 150 }}>
              <InputLabel id="demo-Experience-select-label">
                Experience
              </InputLabel>
              <Select
                labelId="demo-Experience-select-label"
                id="demo-Experience-select"
                value={experience}
                label="Experience"
                onChange={(e) => {
                  dispatch(setMinExperienceAction(e.target.value));
                }}
              >
                {experiences.map((exp) => (
                  <MenuItem key={exp.value} value={exp.value}>
                    {exp.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-Location-select-label">Remote</InputLabel>
              <Select
                labelId="demo-Location-select-label"
                id="demo-Location-select"
                value={remote}
                label="Location"
                onChange={(e) => {
                  dispatch(setIsRemoteAction(e.target.value));
                }}
              >
                {locations.map((a) => (
                  <MenuItem key={a.value} value={a.value}>
                    {a.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: 170 }}>
              <TextField
                id="outlined-location"
                label="Location"
                variant="outlined"
                value={location}
                onChange={(e) => {
                  dispatch(setLocationAction(e.target.value));
                }}
              />
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: 200 }}>
              <TextField
                id="outlined-name"
                label="Company Name"
                variant="outlined"
                value={companyName}
                onChange={(e) => {
                  dispatch(setCompanyNameAction(e.target.value));
                }}
              />
            </FormControl>
          </div>
          <div>
            {" "}
            <FormControl sx={{ m: 1, width: 250 }}>
              <TextField
                id="outlined-name"
                label="Minimum Base Pay(USD)"
                variant="outlined"
                value={minBasePay}
                onChange={(e) => {
                  dispatch(setMinBasePayAction(e.target.value));
                }}
              />
            </FormControl>
          </div>
        </>
      }
      main={
        <>
          <div className="listings">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </>
      }
    />
  );
}

export default JobListings;
