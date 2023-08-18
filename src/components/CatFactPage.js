// src/components/CatFactPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';

function CatFactPage() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Cat Fact Page!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Get ready to learn some interesting cat facts.
      </Typography>
      <Button onClick={fetchCatFact} variant="contained" color="primary">
        Get Cat Fact
      </Button>
      {catFact && (
        <Typography variant="body2" gutterBottom>
          Cat Fact: {catFact}
        </Typography>
      )}
    </Container>
  );
}

export default CatFactPage;
