import { $ } from '../utils/select-dom.js'
import { validateFloat, validateInt } from '../utils/validations.js'

export default class Inputs {
  billInput = $('#bill-input')
  customInput = $('.input-group__input--custom')
  peopleInput = $('#people-input')
  btns = null

  constructor(calculator) {
    this.calculator = calculator
    this.onInitInputs()
  }

  onInitInputs() {
    this.billInput.oninput = (e) => {
      if (!validateFloat(e.target.value) || !e.target.value.trim()) {
        e.target.value = e.target.value.slice(0, -1)
        return
      }

      this.btns.btnReset.removeAttribute('disabled')
      this.calculator.billValue = parseFloat(e.target.value)
      this.calculator.calculateTip()
    }

    this.customInput.onfocus = () => {
      this.btns.btns.forEach((btn) => {
        btn.classList.remove('button--active')
      })
    }

    this.customInput.oninput = (e) => {
      if (!validateInt(e.target.value) || !e.target.value.trim()) {
        e.target.value = e.target.value.slice(0, -1)
        return
      }

      this.btns.btnReset.removeAttribute('disabled')
      this.calculator.tipValue = parseInt(e.target.value)
      this.calculator.calculateTip()
    }

    this.peopleInput.oninput = (e) => {
      if (e.target.value === '0') {
        this.calculator.tipError.style.display = 'block'
        this.peopleInput.classList.add('input-group__input--error')
      }

      if (!validateInt(e.target.value) || !e.target.value.trim()) {
        e.target.value = e.target.value.slice(0, -1)
        return
      }

      this.btns.btnReset.removeAttribute('disabled')
      this.calculator.peopleValue = parseInt(e.target.value)
      this.calculator.calculateTip()
    }
  }

  setButtons(buttons) {
    this.btns = buttons
  }
}
