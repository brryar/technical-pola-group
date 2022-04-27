import React from "react";
import { Typography, Container } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2 }} variant="h4" color="textPrimary" align="left" gutterBottom>
          Phone List
        </Typography>
      </Container>
    </>
  );
}
