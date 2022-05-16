import { $, $$ } from '../utils/select-dom.js'

export default class Buttons {
  btns = $$('.button')
  btnReset = $('.button--reset')
  inputs = null

  constructor(calculator) {
    this.calculator = calculator
    this.onInitButtons()
  }

  onInitButtons() {
    this.btns.forEach((btn) => {
      btn.onclick = this.handleClick.bind(this)
    })

    this.reset()
  }

  handleClick(e) {
    this.btns.forEach((btn) => {
      btn.classList.remove('button--active')

      if (e.target.textContent === btn.textContent) {
        this.inputs.customInput.value = ''

        btn.classList.add('button--active')
        this.btnReset.removeAttribute('disabled')

        this.calculator.tipValue = parseInt(btn.textContent)
      }
    })

    this.calculator.calculateTip()
  }

  reset() {
    this.btnReset.onclick = () => {
      this.calculator.amount.textContent = `$${(0).toFixed(2)}`
      this.calculator.total.textContent = `$${(0).toFixed(2)}`

      this.inputs.billInput.value = ''
      this.btns.forEach((btn) => {
        btn.classList.remove('button--active')
      })

      this.inputs.customInput.value = ''
      this.inputs.peopleInput.value = ''
      this.calculator.tipError.style.display = 'none'
      this.inputs.peopleInput.classList.remove('input-group__input--error')
      this.btnReset.setAttribute('disabled', '')

      // Reset the values
      this.calculator.billValue = 0.0
      this.calculator.tipValue = 0
      this.calculator.peopleValue = 0
    }
  }

  setInputs(inputs) {
    this.inputs = inputs
  }
}
