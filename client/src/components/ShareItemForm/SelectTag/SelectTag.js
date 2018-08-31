import React, { Component } from 'react'
import ItemsContainer from '../../../containers/ItemsContainer'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { Checkbox, InputLabel } from '@material-ui/core'
import { Field } from 'react-final-form'

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

export default class SelectTag extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTags: [] }
  }

  handleChange = event => {
    this.setState({ selectedTags: event.target.value })
  }

  render() {

    return (
      <ItemsContainer>
        {({ tagData: { loading, error, tags } }) => {
          if (loading) return '...lodading'
          if (error) return 'Error, Sorry bud'
          return (
            <Select
              value={this.state.selectedTags}
              multiple
              renderValue={selected => selected.join(', ')}
              onChange={event => this.handleChange(event)}
              MenuProps={MenuProps}
            >
              {tags.map(tag => (
                <MenuItem key={tag.id} value={tag.title}>
                  <Field
                    name="tags"
                    type="checkbox"
                    value={JSON.stringify(tag)}
                  >
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
          )
        }}
      </ItemsContainer>
    )
  }
}
