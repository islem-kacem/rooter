import React, { useState } from 'react';
import { TextField, Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddMovieModal({ moviesData, setMoviesData }) {
  const [open, setOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    id : "",
    title : "",
    posterURL : '',
    description : "",
    rate : "",
  })

  //open and close Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //change method content
  const handleChange = (e) => { setNewMovie({...newMovie, [e.target.name]: e.target.value})}

  //method adding a movie
  const addMovie = (newMovie) => {setMoviesData([...moviesData, newMovie])}
  

  return (
    <div>
      <Button onClick={handleOpen}>ADD A MOVIE</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Movie!
            </Typography>
            <TextField 
                id="outlined-basic" 
                label="Movie Title" 
                variant="outlined"
                placeholder='Movie Title'
                name='title'
                onChange={handleChange} 
                />
            <TextField 
                id="outlined-basic" 
                label="poster URL" 
                variant="outlined"
                placeholder='poster URL'
                name='posterURL'
                onChange={handleChange} 
                />
            <TextField 
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                placeholder='Description'
                name='description'
                onChange={handleChange} 
                />
            <TextField 
                id="outlined-basic" 
                label="Rate" 
                variant="outlined"
                placeholder='Rate'
                name='rate'
                onChange={handleChange} 
                />
                <Button onClick={() => {
                    addMovie({...newMovie, id: Math.random() * 1000})
                }}>Add</Button>
                <Button onClick={handleClose} >Close</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}