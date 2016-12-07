// ------------------------------------
// Constants
// ------------------------------------
export const DATA_RECEIVED = 'DATA_RECEIVED'

// ------------------------------------
// Actions
// ------------------------------------
export function dataRecieved (value = []) {
  return {
    type    : DATA_RECEIVED,
    payload : value
  }
}

export const actions = {
  dataRecieved
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DATA_RECEIVED]: (state = [], action) => state.concat([{
    uuid: state.length,
    text: 'feed text' + new Date(),
    title: 'this is the feed titlt' + new Date(),
    published: new Date(),
  }])
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function feedReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
