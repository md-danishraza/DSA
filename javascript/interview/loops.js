function chargingStations(n) {
  let levels = 0;
  for (let i = 1; i <= n; i++) {
    if (i <= n) {
      levels += 1;
      n -= i;
    } else {
      break;
    }
  }
  return levels;
}

console.log(chargingStations(10));
