import {
  FormControl,
  Typography,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";

export const ListContainer = styled("div")({
  padding: "25px",
});

export const ListForm = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));
