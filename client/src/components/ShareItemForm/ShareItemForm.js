import React, { Component } from 'react'
import { render } from 'react-dom'
import Styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from './helpers/TextField'

class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <form>
          <input
            accept="image/*"
            className=""
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" className="">
              Upload
            </Button>
          </label>
          <div>
            <label>Name Your Item</label>
            <Field
              name="name"
              component={TextField}
              type="text"
              label="First Name"
            />
          </div>
          <div>
            <label>Desribe your item</label>
            <Field
              name="description"
              component={TextField}
              type="text"
              label="Last Name"
            />
          </div>
          <FormControl className="">
            <InputLabel htmlFor="age-simple">Tags</InputLabel>
            <Select
              value=""
              onChange=""
              inputProps={{ name: 'age', id: 'age-simple' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    )
  }
}

export default ShareForm
