"use client";
import { Button, Grid } from "@mui/material";
import React from "react";
import "./dashboard.css";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();

  return (
    <div className="container">
      <Button
        sx={{ m: 2 }}
        onClick={() => router.push("/posts")}
        variant="contained"
      >
        Got to Posts
      </Button>
      <Button
        sx={{ m: 2 }}
        onClick={() => router.push("/gallery")}
        variant="contained"
      >
        Go to Gallery
      </Button>
      <Button
        sx={{ m: 2 }}
        onClick={() => router.push("/todos-charts")}
        variant="contained"
      >
        Go to Todos Charts
      </Button>
    </div>
  );
}

export default Dashboard;
