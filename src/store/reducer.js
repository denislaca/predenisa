let initialState = {
  user: 'mikx',
  room: 'hello',
  roomData: [
    {user: 'mikx', text: 'hello everyone',},
    {user: 'someone', text: 'hi!',},
    {user: 'someone2', text: 'hi2!',},
    {user: 'someone3', text: 'hi3!',},
    {user: 'someone4', text: 'hi4!',},
    {user: 'someone4', text: 'hi4!',},
    {user: 'someone4', text: 'hi4!',},
    {user: 'someone4', text: 'hi4!',},
    {user: 'someone4', text: 'hi4!',},
    {user: 'someone4', text: 'hi4!',},
    {user: 'someone4', text: 'hi4!',},
  ],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainReducer
