import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from '@mui/material';


const ProfilePage = () => {
  return (
    <Box className="flex justify-center items-center w-full h-full  m-0 p-0">

      <div className="w-full max-w-lg">
        <div>
          {/* Avatar */}
          <div className="flex justify-center mb-6 ">
            <Avatar
              alt="Profile Picture"
              src="/logo192.ico"
              sx={{ width: 96, height: 96 }}
              className='shadow-lg'
            />
          </div>

          <Typography variant="h5" align="center" gutterBottom>
            Profile
          </Typography>
          <Typography
            variant="body2"
            align="center"
            className="text-gray-500 mb-6"
          >
            This information will be displayed publicly so be careful what you share.
          </Typography>

          {/* Fields */}
          <form className="space-y-4">
            <TextField label="Username" fullWidth variant="outlined" name="username"  />
            <TextField label="Email" fullWidth variant="outlined" type="email" name="email" />
            <TextField label="Password" fullWidth variant="outlined" type="password" name="password" />
            <TextField label="Confirm Password" fullWidth variant="outlined" type="password" name="confirmPassword" />
            <TextField label="About" fullWidth variant="outlined" multiline rows={3} name="about" />

            {/* Save Button */}
            <div className="pt-4">
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default ProfilePage;
