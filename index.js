// EASY
/* Simple Elevator */

function goto (level, button) {
  if (typeof (level) === 'number' && typeof (button) === 'string') {
    const parseIntButton = parseInt(button)
    if (level % 1 === 0 && parseIntButton % 1 === 0) {
      if (level >= 0 && level <= 3 && parseIntButton >= 0 && parseIntButton <= 3) {
        return parseIntButton - level
      } else return 0
    } else return 0
  } else return 0
}

console.log(goto(3, undefined))
