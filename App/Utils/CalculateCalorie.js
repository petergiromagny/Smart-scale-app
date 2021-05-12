let calorieObj = '';
let multiplyPhysicalActivity = 0;

export default (gender, weight, height, age, physicalActivity) => {
  switch (physicalActivity) {
    case 'sedentary':
      multiplyPhysicalActivity = 1.375;
      break;
    case 'light':
      multiplyPhysicalActivity = 1.56;
      break;
    case 'moderate':
      multiplyPhysicalActivity = 1.64;
      break;
    case 'intense':
      multiplyPhysicalActivity = 1.82;
      break;

    default:
      break;
  }

  if (gender === 'male') {
    calorieObj =
      (13.707 * weight + 492.3 * height - 6.673 * age + 77.607) *
      multiplyPhysicalActivity;
  } else {
    calorieObj =
      (13.707 * weight + 492.3 * height - 6.673 * age + 77.607) *
      multiplyPhysicalActivity;
  }

  return calorieObj;
};
