import Buttons from './buttons.js'
import Inputs from './inputs.js'
import { $ } from '../utils/select-dom.js'

export default class Calculator {
  billValue = 0.0
  tipValue = 0
  peopleValue = 0

  // DOM
  amount = $('#amount')
  total = $('#total')
  tipError = $('.tip__error')
  peopleInput = $('#people-input')

  init() {
    const buttons = new Buttons(this)
    const inputs = new Inputs(this)

    // Set the inputs to the buttons
    buttons.setInputs(inputs)
    // Set the buttons to the inputs
    inputs.setButtons(buttons)
  }

  calculateTip() {
    if (this.peopleValue >= 1) {
      this.tipError.style.display = 'none'
      this.peopleInput.classList.remove('input-group__input--error')

      let tipAmount = (this.billValue * (this.tipValue / 100)) / this.peopleValue
      let total = (this.billValue + tipAmount) / this.peopleValue

      this.amount.textContent = `$${tipAmount.toFixed(2)}`
      this.total.textContent = `$${total.toFixed(2)}`
    }
  }
}
