export default function healthIndicator(obj) {
  if (obj.health > 50) {
    return 'healthy';
  }
  if (obj.health < 50 && obj.health > 15) {
    return 'wounded';
  }
  if (obj.health < 15) {
    return 'critical';
  }
}

const person = {
  name: 'Маг',
  health: 90,
};

healthIndicator(person);
console.log(person)