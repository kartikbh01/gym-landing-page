import { getMembers } from "./utils.js";

const membersContainer = document.querySelector("#membersContainer");

const members = getMembers();

if (members.length === 0) {
  membersContainer.innerHTML = `
    <tr>
      <td colspan="9" style="text-align:center;">
        <p class="empty-message">No members registered yet.</p>
      </td>
    </tr>
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
