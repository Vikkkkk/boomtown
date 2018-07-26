const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      maxHeight: 550
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundImage: 'cover'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'red',
    marginLeft: '-2rem'
  }
})

export default styles
