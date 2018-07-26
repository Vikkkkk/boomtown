const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20,
      paddingTop: 80
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit * 20
    }
  }
})

export default styles
