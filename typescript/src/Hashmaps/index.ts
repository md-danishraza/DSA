console.log("hashmap simple implemenation!");

// key of string and number value of custom type
class HashMap<K extends string | number, V> {
  private buckets: Array<Array<[K, V]>>;
  private size: number;

  constructor(size: number = 100) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Simple hash function for strings and numbers
  private hash(key: K): number {
    let hash = 0;
    const keyString = String(key);

    for (let i = 0; i < keyString.length; i++) {
      hash = (hash << 5) + hash + keyString.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % this.size;
  }

  // Set value for key
  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket[i][1] = value; // Update existing
        return;
      }
    }

    bucket.push([key, value]); // Add new entry
  }

  // Get value by key
  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [existingKey, value] of bucket) {
      if (existingKey === key) {
        return value;
      }
    }

    return undefined; // Not found
  }

  // Remove entry by key
  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false; // Not found
  }
}

const map = new HashMap<string, number>();

map.set("apple", 10);
map.set("banana", 20);

console.log(map.get("apple"));
console.log(map.get("banana"));
console.log(map.get("orange"));

map.delete("apple");
console.log(map.get("apple"));
