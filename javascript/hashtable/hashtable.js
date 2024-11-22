class hash{

    constructor(size = 5){
        // table of size buckets
        this.size = size;
        this.table = new Array(size);
        console.log(this.table);
    }

    // private hash function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        // if there is no array at that index then create one
        // seperate chaining
        if (!this.table[index]) {
          this.table[index] = [];
        }
        // push the key-value pair into the array at that index
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        // if there is an array at that index then loop through it
        const bucket = this.table[index]
        if (bucket) {
            for(let pairs of bucket) {
                const [k,v] = pairs;
                // matching the key 
                if(k===key){
                    return v;
                }
            }
        }
        return undefined;

    }

    getAll(){
        let result = [];
        for(let i=0; i<this.size; i++){
            const bucket = this.table[i];
            if(bucket){
                for(let pairs of bucket){
                    const [k,v] = pairs;
                    result.push([k,v]);
                }
            }
        }
        return result.reverse();
    }




}

let myHash = new hash();

myHash.set('one', 1);

myHash.set('two', 2);

console.log(myHash.get('two')); // 2

console.log(myHash.getAll()); // [ ['one', 1], ['two', 2] ]