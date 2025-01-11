import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

const causes = [
    {
        title: 'Academic Integrity (Ethics)',
        description: 'Promote ethical practices and academic honesty to ensure fair opportunities.',
        image: '/images/Academics.webp',
        link: '/causes/academic-integrity',
    },
    {
        title: 'Social Justice',
        description: 'Raise awareness and support efforts to combat corporate greed and its impact on ordinary lives.',
        image: '/images/SocialJustice.webp',
        link: '/causes/corporate-greed',
    },
    {
        title: 'Gender Rights',
        description: 'Advocate for equal rights and opportunities for all genders.',
        image: '/images/DAGenderRights.webp',
        link: '/causes/gender-rights',
    },
];

const FeaturedCauses = () => {
    return (
      <Box sx={{ mt: 5, px: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: 'black' }}>
          Featured Causes
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {causes.map((cause, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                background: `url(${cause.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                marginBottom: '15px',
              }}
            />
            <Box sx={{ textAlign: 'center', padding: '10px' }}>
              <Typography variant="h5" gutterBottom>{cause.title}</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{cause.description}</Typography>
              <Button
                variant="contained"
                color="secondary"
                href={cause.link}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default FeaturedCauses;