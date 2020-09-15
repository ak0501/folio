import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard({ image, title, para,link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1 " color="textSecondary" component="h2" >
            {para}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="medium" color="primary">
          Share
        </Button> */}
        <Button size="large" color="primary" >
          {<a href={link}>Learn More</a>}
        </Button>
      </CardActions>
    </Card>
  );
}
