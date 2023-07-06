import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

function PostCard({ title, description }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
