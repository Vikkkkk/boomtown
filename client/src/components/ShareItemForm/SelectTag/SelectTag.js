import React, { Component } from 'react'
import ItemsContainer from '../../../containers/ItemsContainer'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { Checkbox, InputLabel } from '@material-ui/core'
import { Field } from 'react-final-form'

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//     maxWidth: 300
//   },
//   chips: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   chip: {
//     margin: theme.spacing.unit / 4
//   }
// })

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
    console.log(this.state)
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
