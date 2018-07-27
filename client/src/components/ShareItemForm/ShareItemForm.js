import React, { Component, Fragment } from 'react'
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
import { Checkbox, Typography } from '@material-ui/core'
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
      selectedTags: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileRef = React.createRef()
  }
  handleSubmit(values) {
    console.log('Controlled in: ' + values)
  }
  handleChange = event => {
    this.setState({ selectedTags: event.target.value })
  }
  handleCheckbox = event => {
    console.log(event.target.value)
    this.setState({
      selectedTags: event.target.value
    })
  }
  // componentWillUnmount = () => {
  //   this.props.resetForm()
  // }
  handleImageSelect = event => {
    this.setState({ fileSelected: event.target.files[0] })
  }
  handleImageReset = () => {
    this.setState({ fileSelected: false })
    this.fileRef.current.value = ''
    this.props.resetImage()
  }
  handleImageUploadSelect = () => {
    this.fileRef.current.click()
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

  // sends new item to db
  async saveItem(values, tags, addItem) {
    const {
      validity,
      files: [file]
    } = this.fileRef.current

    if (!validity.valid) return

    try {
      const itemData = {
        ...values,
        tags: this.applyTags(tags)
      }
      await addItem.mutation({
        variables: {
          item: itemData,
          image: file
        }
      })
      this.setState({ done: true })
    } catch (e) {
      console.log(e)
    }
  }

  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    )
  }
  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ')
  }

  validate() {}

  render() {
    const { classes, resetImage, updateNewItem, resetNewItem } = this.props
    const { fileSelected } = this.state
    return (
      <ItemsContainer>
        {({ addItem, tagData: { loading, error, tags } }) => {
          if (loading) return '...lodading'
          if (error) return 'Error, Sorry bud'

          return (
            <Form
              onSubmit={values => this.saveItem(values, tags, addItem)}
              initialValues={{}}
              validate={this.validate}
              render={({
                handleSubmit,
                reset,
                submitting,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <FormSpy
                    subscription={{ values: true }}
                    component={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, tags, updateNewItem)
                      }
                      return ''
                    }}
                  />
                  <Typography variant="display4" className={classes.headline}>
                    Share. Borrow. Prosper.
                  </Typography>
                  <Field name="imageurl">
                    {(input, meta) => (
                      <Fragment>
                        <Button
                          variant="contained"
                          fullwidth
                          color="primary"
                          onClick={
                            fileSelected
                              ? this.handleImageReset
                              : this.handleImageUploadSelect
                          }
                        >
                          {fileSelected ? 'Reset Image' : 'Select an Image'}
                        </Button>
                        <input
                          onChange={e => {
                            this.handleImageSelect(e)
                          }}
                          type="file"
                          accept="image/*"
                          hidden
                          ref={this.fileRef}
                        />
                      </Fragment>
                    )}
                  </Field>

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

                    <Select
                      multiple
                      value={this.state.selectedTags}
                      onChange={e => this.handleCheckbox(e)}
                      renderValue={selected => {
                        return this.generateTagsText(tags, selected)
                      }}
                    >
                      {tags &&
                        tags.map(tag => (
                          <MenuItem key={tag.id} value={tag.id}>
                            <Checkbox
                              checked={
                                this.state.selectedTags.indexOf(tag.id) > -1
                              }
                            />
                            {tag.title}
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
