export const calculateBMI = (heightCm, weightKg) => {
  const heightMeters = heightCm / 100;
  return weightKg / (heightMeters * heightMeters);
};

export const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy Weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

export const getMembers = () => {
  return JSON.parse(localStorage.getItem("gymMembers")) || [];
};

export const saveMember = (memberData) => {
  const members = getMembers();
  members.push(memberData);
  localStorage.setItem("gymMembers", JSON.stringify(members));
};

export const clearMembers = () => {
  localStorage.removeItem("gymMembers");
};
