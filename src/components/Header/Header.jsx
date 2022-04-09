// import { Autocomplete } from "@react-google-maps/api";
import { AppBar } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  ToolbarX,
  Title,
  SeacrhArea,
  SearchIcon,
  InputSearch,
  BoxContainer,
} from "./styles";

const Header = () => {
  return (
    <AppBar position="static">
      <ToolbarX>
        <Title variant="h5">Travel Advisor</Title>
        <BoxContainer>
          <Title variant="h6">Explore new places</Title>

          {/* <Autocomplete> */}
          <SeacrhArea>
            <SearchIcon>
              <Search />
            </SearchIcon>
            <InputSearch placeholder="Search..." />
          </SeacrhArea>
          {/* </Autocomplete> */}
        </BoxContainer>
      </ToolbarX>
    </AppBar>
  );
};

export default Header;
