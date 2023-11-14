import "./css/styles.css";
import { ageCalculator } from "./../src/age-calculator.js";

window.addEventListener("load", () => {
  document
    .querySelector("#form")
    .addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission(e) {
  e.preventDefault();
  const age = document.querySelector("#age").value;
  const newPerson = ageCalculator(age);
  new planetList = [newPerson.earth,newPerson.mercury,newPerson.venus,newPerson.mars,newPerson.jupiter]
  planetList.forEach((year)=> {
    const paragraph = document.createElement("p")
    paragraph.append("Age in")
  })

}
