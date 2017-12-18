export const ADD_RECEPIE = 'ADD_RECEPIE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

//Action Creator
//Adding the recepie action to add to store
export function addRecepie({ day, recepie, meal}) {
  return {
    type: ADD_RECEPIE,
    recepie,
    meal,
  }
}

export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  }
}
