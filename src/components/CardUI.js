import React from 'react'
import { Card, Typography, CardContent, CardMedia, Grid, Button } from '@mui/material';


const CardUI = ({ users, loading }) => {
  if (loading) {
    return <h2>Please wait a while. Its Loading...</h2>;
  }
  const handleAdd = () => {

  }
  const handleRemove = () => {

  }
  return (
    <div className='cards'>
      <Grid container sx={{
        margin : '5px',
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        {users.map((user) => (
          <Grid key = {user.id} item sx={{
            display: 'flex',
            width : '180px',
            margin : '8px 3px',
            xs : {
              width : '100%'
            }
          }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="130"
                src={user.avatar}
                alt="profile_img"
              />
              <CardContent>
                <Typography gutterBottom sx={{
                  fontWeight : 'bold',
                  fontSize : '1rem'
                }}>
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Domain : </strong>{user.domain}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Email : </strong>{user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Gender : </strong>{user.gender}
                </Typography>
                {user.available ? <h5>Available</h5> : <h5>Unavailable</h5>}
              </CardContent>
              <Button variant='contained' onClick={handleAdd}>Add To List</Button>
              <Button variant='contained' onClick={handleRemove}>Remove From List</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CardUI;
