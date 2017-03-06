let initialState = {
  user: 'mikx',
  room: 'hello',
  roomData: [
    {user: 'mikx', text: 'hello everyone',},
    {user: 'someone', text: 'hi!',},
  ],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainReducer
