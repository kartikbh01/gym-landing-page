const joinForm = document.querySelector(".join-form");
let nameInput;
let emailInput;
let phoneInput;
let ageInput;
let heightInput;
let weightInput;
let planInput;
let bmiText;
let currentBMIStatus = "";

function updateBMIResult() {
  if (!heightInput || !weightInput || !bmiText) {
    return;
  }

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!height || !weight) {
    bmiText.textContent = "Fill your details to see BMI result";
    currentBMIStatus = "";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    currentBMIStatus = "Underweight";
  } else if (bmi < 25) {
    currentBMIStatus = "Healthy Weight";
  } else if (bmi < 30) {
    currentBMIStatus = "Overweight";
  } else {
    currentBMIStatus = "Obese";
  }

  bmiText.textContent = currentBMIStatus;
}

if (joinForm) {
  nameInput = document.querySelector("#name");
  emailInput = document.querySelector("#email");
  phoneInput = document.querySelector("#phone");
  ageInput = document.querySelector("#age");
  heightInput = document.querySelector("#height");
  weightInput = document.querySelector("#weight");
  planInput = document.querySelector("#plan");
  bmiText = document.querySelector("#bmiText");

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

    const existingMembers =
      JSON.parse(localStorage.getItem("gymMembers")) || [];
    existingMembers.push(memberData);
    localStorage.setItem("gymMembers", JSON.stringify(existingMembers));

    alert("Registration submitted successfully!");

    joinForm.reset();
    bmiText.textContent = "Fill your details to see BMI result";
    currentBMIStatus = "";
  });
}

/* Members Page */

const membersContainer = document.querySelector("#membersContainer");

const clearMembersBtn = document.querySelector("#clearMembersBtn");

if (membersContainer) {
  const members = JSON.parse(localStorage.getItem("gymMembers")) || [];

  if (members.length === 0) {
    membersContainer.innerHTML = `
      <p class="empty-message" style="text-align:center;">
        No members registered yet.
      </p>
    `;
  } else {
    members.forEach((member) => {
      const row = document.createElement("tr");

      row.innerHTML = `
    <td>${member.name}</td>
    <td>${member.email}</td>
    <td>${member.phone}</td>
    <td>${member.age}</td>
    <td>${member.height} cm</td>
    <td>${member.weight} kg</td>
    <td>${member.bmiStatus}</td>
    <td>${member.selectedPlan}</td>
    <td>${member.joinedAt}</td>
  `;

      membersContainer.appendChild(row);
    });
  }
}
