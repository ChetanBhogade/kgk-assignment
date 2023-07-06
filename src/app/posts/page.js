"use client";
import { Divider, Grid, InputBase, alpha, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Posts() {
  const [postData, setPostData] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState("");

  const fetchPostData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("post data: ", response.data);
        setPostData(response.data);
      })
      .catch((err) => console.log("error: ", err));
  };

  const filteredData = postData.filter((item) => {
    return (
      item?.title?.includes(searchKeywords) ||
      item?.body?.includes(searchKeywords)
    );
  });

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div>
      <h1>Posts Card List</h1>
      <Search>
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchKeywords}
          onChange={(e) => setSearchKeywords(e.target.value)}
        />
      </Search>
      <Divider sx={{ my: 5 }} />
      <Grid container gap={2} justifyContent="space-between">
        {filteredData?.map((item) => {
          return (
            <Grid key={item.id} item md={3}>
              <PostCard title={item?.title} description={item?.body} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Posts;
