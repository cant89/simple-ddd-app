import React, { FunctionComponent } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LANG from '#/shared/languages/en';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  progress: ({ margin = '0' }: { margin?: string }) => ({
    margin
  }),
  label: {
    marginTop: spacing(1)
  },
  boxCentered: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

type TProps = {
  withLabel?: boolean;
  size?: number;
  margin?: string;
  centered?: boolean;
};

const CircularLoader: FunctionComponent<TProps> = ({
  withLabel,
  size = 40,
  margin,
  centered
}) => {
  const classes = useStyles({ margin });

  return (
    <Box className={centered ? classes.boxCentered : ''}>
      <CircularProgress className={classes.progress} size={size} />

      {withLabel ? (
        <Typography variant="h2" className={classes.label}>
          {LANG.GENERAL.LOADING}
        </Typography>
      ) : null}
    </Box>
  );
};

export default CircularLoader;
