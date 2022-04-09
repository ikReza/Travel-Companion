import { Toolbar, Typography, Box, InputBase } from "@mui/material";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";

export const ToolbarX = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#1f6bde",
});

export const Title = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const BoxContainer = styled(Box)({
  height: "100%",
  // borderStyle: "solid",
  display: "flex",
  alignItems: "center",
});

export const SeacrhArea = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  backgroundColor: alpha("#03a9f4", 0.25),
  "&:hover": { backgroundColor: alpha("#03a9f4", 0.5) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
  transition: "all 0.5s linear",
}));

export const SearchIcon = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InputSearch = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: theme.spacing(6),
}));
