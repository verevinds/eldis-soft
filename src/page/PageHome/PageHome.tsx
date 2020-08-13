import * as React from 'react';

import Employees from '../../components/Employees/Employees';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const PageHome: React.FC = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1'>Home</Typography>
      <Employees />
    </Container>
  );
};

export default React.memo(PageHome);
