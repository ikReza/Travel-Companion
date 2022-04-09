import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
