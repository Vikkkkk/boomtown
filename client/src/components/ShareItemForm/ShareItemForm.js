import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from './helpers/TextField'
import { withStyles } from '@material-ui/core/styles'
import ItemsContainer from '../../containers/ItemsContainer'

class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.input = React.createRef()
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value })
  // }

  handleSubmit(values) {
    console.log('Controlled in: ' + values)
    // console.log('Uncontrolled in: ' + this.input.current.value)
    // event.preventDefault()
  }

  validate() {}

  render() {
    const { classes } = this.props
    return (
      <Form
        onSubmit={this.handleSubmit}
        initialValues={{}}
        validate={this.validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Button color="primary" variant="contained">
              Upload an image
            </Button>
            <div>
              <label>Name: </label>
              <Field
                name="name"
                component={TextField}
                type="text"
                label="Name"
              />
            </div>
            <div>
              <label>Desription: </label>
              <Field
                name="description"
                component={TextField}
                type="text"
                label="Description"
              />
            </div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Tags</InputLabel>

              <ItemsContainer>
                {({ tagData: { loading, error, tags } }) => {
                  if (loading) return '...lodading'
                  if (error) return 'Error, Sorry bud'
                  return (
                    <Select
                      value=""
                      onChange=""
                      inputProps={{ title: 'name', id: 'id' }}
                    >
                      {tags.map(item => (
                        <MenuItem value={item.id}>{item.title}</MenuItem>
                      ))}
                    </Select>
                  )
                }}
              </ItemsContainer>

              <input type="submit" value="Submit" />
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </FormControl>
          </form>
        )}
      />
    )
  }
}

export default withStyles(styles)(ShareForm)
