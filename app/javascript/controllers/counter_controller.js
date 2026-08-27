import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["value"]

  increment() {
    const value = Number(this.valueTarget.value) + 1
    this.valueTarget.value = value
  }
}
