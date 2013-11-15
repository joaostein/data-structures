var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(hash, value);
};

HashTable.prototype.retrieve = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(hash, key);
};

HashTable.prototype.remove = function(value){
  this._storage.each(function (linkedList, hash, storage) {
    if (linkedList && linkedList.contains(value)) {
      storage[hash] = undefined;
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
