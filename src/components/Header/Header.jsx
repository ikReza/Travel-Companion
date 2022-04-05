import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Travel Advisor</Typography>
        <Box display="flex">
          <Typography variant="h6">Explore new places</Typography>
        </Box>
        {/* <Autocomplete> */}
        <div>
          <div>
            <Search />
          </div>
          <InputBase placeholder="Search..." />
        </div>
        {/* </Autocomplete> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
