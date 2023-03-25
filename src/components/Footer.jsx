import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" py="24px">
      <img src={Logo} alt="logo" style={{height: '60px' }} />
    </Stack>
    {/* <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by Dhanesh</Typography> */}
  </Box>
);

export default Footer;