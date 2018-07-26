const styles = theme => ({
  headline: {
    fontWeight: 700,
    color: theme.palette.text.primary,
    fontSize: theme.typography.display4.fontSize,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.display2.fontSize
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 420,
    '& div': { width: '100%', padding: 2 }
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  uploadButton: {
    marginTop: 20
  },
  fileUpload: {
    display: 'none'
  },
  checkboxIcon: {
    fontSize: 35
  }
})

export default styles
