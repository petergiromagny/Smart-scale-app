export default (gender, weight, height, age, physicalActivity) => {
  let calorieObj = 0;
  let multiplyPhysicalActivity = 0;
  const heightMeter = height / 100;

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

  switch (gender) {
    case 'male':
      calorieObj = parseInt(
        (13.707 * weight + 492.3 * heightMeter - 6.673 * age + 77.607) *
          multiplyPhysicalActivity,
        10
      );
      break;
    case 'female':
      calorieObj = parseInt(
        (9.5634 * weight + 184.96 * heightMeter - 4.6756 * age + 655.0955) *
          multiplyPhysicalActivity,
        10
      );
      break;

    default:
      calorieObj = 0;
      break;
  }

  return calorieObj;
};
