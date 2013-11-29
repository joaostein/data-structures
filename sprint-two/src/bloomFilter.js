var BloomFilter = function (m, k) {
  this._m = m;
  this._n = 0;
  this._storage = 0;
  this._removedStorage = 0;
  this._hashStorage = Array(k);
}

BloomFilter.prototype.add = function(strVal) {
  var mask = this.getMask(strVal);
  this._n += 1;
  this._storage |= mask;
};

BloomFilter.prototype.query = function(strVal) {
  var mask = this.getMask(strVal);
  var test = mask&this._storage;
  return (test !== mask) ? 0 : 1;
};

BloomFilter.prototype.fp = function(strVal) {
};

BloomFilter.prototype.fn = function(strVal) {
};

BloomFilter.prototype.remove = function(strVal) {
};

BloomFilter.prototype.getMask = function(strVal) {
  var mask = 0;
  for (var i = 0; i < this._hashStorage.length; i++) {
    mask |= 1 << this._hashStorage[i](strVal, this._m);
  };
  return mask;
};

BloomFilter.prototype.addHash = function(hashFn) {
  // var counter = 0;
  // var storage = this._hashStorage;
  // for (var i = 0; i < storage.length; i++) {
  //   if (storage[i] === undefined){
  //     counter++;
  //   }
  // };
  // if (counter < storage.length){
  //   storage.push(hashFn);
  // } else {
  //   throw new Error('Hash storage is full!');
  // }
};


