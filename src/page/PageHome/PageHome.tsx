import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export interface IPageHome {}

const PageHome: React.FC<IPageHome> = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1'>Home</Typography>
    </Container>
  );
};

export default React.memo(PageHome);
