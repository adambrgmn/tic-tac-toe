export default function aiLevel(state = 1, action) {
  switch (action.type) {
    case 'SET_AI_LEVEL':
      if (action.level >= 0 && action.level <= 2) {
        return action.level;
      }

      return state;
    default:
      return state;
  }
}
