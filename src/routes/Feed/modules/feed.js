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
  [DATA_RECEIVED] : (state = [], action) => state.concat([{a:state.length}])
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function feedReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
