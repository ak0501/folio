import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "./Card";
import { ProjectItems } from "./ProjectItems";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 120,
    width: 100,
  },
  control: {
    padding: theme.spacing(4),
  },
}));
const Projects = () => {
  return (
    <div>
      <Grid container className={useStyles.root} spacing={2}>
        <Grid item sm={12}>
          <Grid container justify="center" spacing={10}>
            {ProjectItems.map((item, index) => (
              <Grid key={index} item>
                <Paper className={useStyles.paper} />
                <Card
                  key={index}
                  title={item.Title}
                  avatar={item.id}
                  image={item.image}
                  description={item.description}
                  paragraph={item.paragraph}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Projects;
