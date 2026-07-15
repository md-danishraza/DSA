// max ad in a array of timestamp
// arr = [1,2,3,10] , k=5
// return max no. of ads can be placed such that no
// two ads are less than k unit apart

function maxAds(timestamps, k) {
  // start with first ad at 0
  let ads = 1;
  let lastAd = timestamps[0];

  for (let i = 1; i < timestamps.length; i++) {
    if (timestamps[i] - lastAd >= k) {
      // increase add
      ads += 1;
      lastAd = timestamps[i];
    }
  }

  return ads;
}

console.log(maxAds([1, 2, 3, 10, 15, 20], 5));
