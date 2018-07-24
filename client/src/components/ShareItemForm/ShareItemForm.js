import React, { Component } from 'react'
// import { render } from 'react-dom'
import styles from './styles'
import { Form, Field, FormSpy } from 'react-final-form'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
// import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from './helpers/TextField'
import { withStyles } from '@material-ui/core/styles'
import ItemsContainer from '../../containers/ItemsContainer'

import { connect } from 'react-redux'
import {
  resetImage,
  updateNewItem,
  dispatch,
  resetNewItem
} from '../../redux/modules/shareItemPreview'
import Select from '@material-ui/core/Select'
import { Checkbox } from '@material-ui/core'
// import SelectTag from './SelectTag'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileSelected: false,
      selectedTags: [],
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(values) {
    console.log('Controlled in: ' + values)
  }
  handleChange = event => {
    this.setState({ selectedTags: event.target.value })
  }

  // converts file to ascii from binary
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.mimeType};base64, ${btoa(
            e.target.result
          )}`
        )
      }
      reader.readAsBinaryString(this.state.fileSelected)
    })
  }

  dispatchUpdate(values, tags, updateNewItem) {
    if (!values.imageUrl && this.state.fileSelected) {
      this.getBase64Url().then(imageUrl => {
        updateNewItem({
          imageUrl
        })
      })
    }

    updateNewItem({
      ...values,
      tags: this.applyTags(tags)
    })
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    )
  }

  validate() {}

  render() {
    const { classes, resetImage, updateNewItem, resetNewItem } = this.props
    return (
      <ItemsContainer>
        {({ tagData: { loading, error, tags } }) => {
          if (loading) return '...lodading'
          if (error) return 'Error, Sorry bud'

          return (
            <Form
              onSubmit={this.handleSubmit}
              initialValues={{}}
              validate={this.validate}
              render={({
                handleSubmit,
                reset,
                submitting,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormSpy
                    subscription={{ values: true }}
                    component={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, tags, updateNewItem)
                      }
                      return ''
                    }}
                  />
                  <Button color="primary" variant="contained">
                    Upload an image
                  </Button>
                  <div>
                    <Field
                      name="title"
                      component={TextField}
                      type="text"
                      label="Name"
                    />
                  </div>
                  <div>
                    <Field
                      name="description"
                      component={TextField}
                      type="text"
                      label="Description"
                    />
                  </div>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Tags</InputLabel>

                    {/* <SelectTag /> */}

                    <Select
                      value={this.state.selectedTags}
                      multiple
                      renderValue={selected => selected.join(', ')}
                      onChange={event => this.handleChange(event)}
                      MenuProps={MenuProps}
                    >
                      {tags.map(tag => (
                        <MenuItem key={tag.id} value={tag.title}>
                          <Field name="tags" type="checkbox" value={tag.title}>
                            {({ input, meta }) => (
                              <React.Fragment>
                                <InputLabel>
                                  <Checkbox {...input} />
                                  {tag.title}
                                </InputLabel>
                              </React.Fragment>
                            )}
                          </Field>
                        </MenuItem>
                      ))}
                    </Select>
                    <input type="submit" value="SHARE" />
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                  </FormControl>
                </form>
              )}
            />
          )
        }}
      </ItemsContainer>
    )
  }
}

// export default

const mapDispatchToProps = dispatch => ({
  updateNewItem(item) {
    dispatch(updateNewItem(item))
  },
  resetNewItem() {
    dispatch(resetNewItem())
  },
  resetImage() {
    dispatch(resetImage())
  }
})

export default connect(
  undefined,
  mapDispatchToProps
)(withStyles(styles)(ShareForm))
