import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch(action.type){
    case SET_LOADING:
      return {...state, isLoading:true}
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      const newStories = state.hits.filter((story) => story.objectID !== action.payload)
      return {...state, hits:newStories}
    default:
      throw new Error(`no matching "${action.type}" action`)
  }
}
export default reducer
