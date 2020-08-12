import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export interface IPageHistory {}

const PageHistory: React.FC<IPageHistory> = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h1'>History</Typography>
    </Container>
  );
};

export default React.memo(PageHistory);
