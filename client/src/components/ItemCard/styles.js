const styles = theme => ({
  card: {
    // width: 350
    margin: 8
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    background: 'blue'
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
