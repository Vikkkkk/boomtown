const RESET_IMAGE = 'RESET_IMAGE'
const RESET_NEW_ITEM = 'RESET_NEW_ITEM'
const UPDATE_NEW_ITEM = 'UPDATE_NEW_ITEM'

export const resetImage = () => ({ type: RESET_IMAGE })
export const resetNewItem = () => ({ type: RESET_NEW_ITEM })
export const updateNewItem = item => ({ type: UPDATE_NEW_ITEM, payload: item })

const initalState = {
  title: 'Item Title',
  description: 'Describe your item',
  tags: [],
  created: new Date(),
  imageUrl:
    'https://dummyimage.com/600x400/ffa600/000000&text=Select+your+Image',
  itemowner: {
    fullname: 'stu'
  }
}

export default (state = initalState, action) => {
  switch (action.type) {
    case RESET_IMAGE: {
      return { ...state, image: initalState.imageUrl }
    }
    case RESET_NEW_ITEM: {
      return { ...initalState }
    }
    case UPDATE_NEW_ITEM: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}
