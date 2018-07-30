const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    background: theme.palette.secondary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 10
    },
    paddingTop: '25px !important'
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})

export default styles
