import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="honours-board-tabs"
export default class extends Controller {
  connect() {
    console.log("Connected to honours-board-tabs controller")
  }
}
