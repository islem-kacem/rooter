import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card,CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@mui/material'
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { isPathActive } from "../Helpers/functions";
import { Link, useLocation } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ movie, deleteMovie }) {
  const [expanded, setExpanded] = React.useState(false);
  const { pathname } = useLocation();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: '20px' }} key={movie.id} className="cardMovie" >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {movie.title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={movie.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={movie.posterURL}
        alt={`${movie.title} poster`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      {!isPathActive(pathname, "/movies") && (
          <>
            <IconButton
              aria-label='Delete Movie'
              onClick={() => deleteMovie(movie.id)}
            >
              <DeleteIcon />
            </IconButton>
            <Link to={`/movies/${movie.id}`}>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </Link>
          </>
        )}
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            {movie.description}
          </Typography>
          <Typography>
            {movie.rate}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

MovieCard.defaultProps = {
    id : "0",
    title : "NO TITLE",
    posterURL : "NO POSTER",
    description : "NO DESCRIPTION",
    rate : "*/10",
}

MovieCard.propTypes = {
    movie: PropTypes.object,
    deleteMovie: PropTypes.func,
}