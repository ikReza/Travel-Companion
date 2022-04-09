import { Typography, MenuItem, InputLabel, Select } from "@mui/material";
import { ListContainer, ListForm } from "./styles";

const List = () => {
  return (
    <ListContainer>
      <Typography variant="h4">
        Restaurants, Hotels, Attractions around you
      </Typography>
      <ListForm>
        <InputLabel>Type</InputLabel>
        <Select value="" onChange={() => {}}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </ListForm>
    </ListContainer>
  );
};

export default List;
