import { makeStyles, Theme } from '@material-ui/core/styles'

import { colors } from 'theme'

export default makeStyles((theme: Theme) => ({
  grey: {
    background: `linear-gradient(45deg, ${colors.greyLight} 50%, ${colors.grey} 90%)`,
    borderRadius: 5,
    opacity: 0.6,
  },
  member: {
    alignItems: 'center',
    display: 'flex',
    gridColumnGap: theme.spacing(2),
  },
  opacity: {
    animation: '$opacityAnimation 1s linear',
    animationIterationCount: 'infinite',
  },

  '@keyframes opacityAnimation': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.4,
    },
    '100%': {
      opacity: 1,
    },
  },
}))
