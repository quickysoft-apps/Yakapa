import React, { StatelessComponent } from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  text: string;
}

export const name = 'Admin';

export const Root: StatelessComponent<Props> = props => (
  <Button variant="contained" color="primary">
    Another plugin {props.text}
  </Button>
);
