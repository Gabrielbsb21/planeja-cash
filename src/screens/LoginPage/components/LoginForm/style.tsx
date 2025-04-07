import { Card as CardUi, Typography, Button as ButtonUi } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(CardUi)(({ theme }) => ({
  maxWidth: 800,
  zIndex: 1,
  position: "relative",
  padding: theme.spacing(4, 4),
  borderRadius: "16px",
  boxShadow: "8px 8px 24px 0px rgba(159, 159, 159, 0.25)",
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.down("md")]: {
    maxWidth: 500,
    padding: theme.spacing(8, 8, 6),
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: 340,
    padding: theme.spacing(4, 3),
  },
}));

export const H1 = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: "2.5rem",
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
  },
}));

export const Button = styled(ButtonUi)(({}) => ({
  display: "flex",
  height: "50px",
  padding: "16px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  alignSelf: "stretch",
  borderRadius: "8px",
  background: "linear-gradient(90deg, #1B2788 100%, #263293 100%)",
  color: "#fff",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "150%",
  "&:disabled": {
    background: "#b0b0b0",
    cursor: "not-allowed",
  },
}));
