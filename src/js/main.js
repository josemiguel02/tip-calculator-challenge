import Calculator from './models/calculator.js'

function Main() {
  const calculator = new Calculator()

  // Initialize the calculator
  calculator.init()
}

document.addEventListener('DOMContentLoaded', Main)
