import { calculateBMI, getBMIStatus, saveMember } from "./utils.js";

let nameInput;
let emailInput;
let phoneInput;
let ageInput;
let heightInput;
let weightInput;
let planInput;
let bmiText;
let currentBMIStatus = "";

const joinForm = document.querySelector(".join-form");

if (joinForm) {
  nameInput = document.querySelector("#name");
  emailInput = document.querySelector("#email");
  phoneInput = document.querySelector("#phone");
  ageInput = document.querySelector("#age");
  heightInput = document.querySelector("#height");
  weightInput = document.querySelector("#weight");
  planInput = document.querySelector("#plan");
  bmiText = document.querySelector("#bmiText");

  const updateBMIResult = () => {
    if (!heightInput || !weightInput || !bmiText) return;

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (!height || !weight) {
      bmiText.textContent = "Fill your details to see BMI result";
      currentBMIStatus = "";
      return;
    }

    const bmi = calculateBMI(height, weight);
    currentBMIStatus = getBMIStatus(bmi);
    bmiText.textContent = currentBMIStatus;
  };

  heightInput.addEventListener("input", updateBMIResult);
  weightInput.addEventListener("input", updateBMIResult);

  joinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    updateBMIResult();

    const memberData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      age: ageInput.value,
      height: heightInput.value,
      weight: weightInput.value,
      bmiStatus: currentBMIStatus,
      selectedPlan: planInput.value,
      joinedAt: new Date().toLocaleString(),
    };

    saveMember(memberData);
    alert("Registration submitted successfully!");

    joinForm.reset();
    bmiText.textContent = "Fill your details to see BMI result";
    currentBMIStatus = "";
  });
}
