

var soundService = {};
initIndexDB();

/** 
 * File layout:
 * - Interface functions
 * - Scoped functions
 */

/**
 * Opens a connection to IndexDB and the 'sound' objec store.
 * Returns a promise with the sound store.
 */
soundService.open = function() {
  return new Promise((resolve, reject) => {
    var version = 1;
    var request = indexedDB.open("voorlezen", version);
  
    // We can only create Object stores in a versionchange transaction.
    request.onupgradeneeded = function(e) {
      var db = e.target.result;
  
      // A versionchange transaction is started automatically.
      e.target.transaction.onerror = onerror;
  
      if(db.objectStoreNames.contains("sound")) {
        db.deleteObjectStore("sound");
      }
  
      var store = db.createObjectStore("sound",
        {keyPath: "id"});
    };
  
    //
    request.onsuccess = function(e) {
      soundService.db = e.target.result; //add DB to sound service
      resolve(soundService);
    };
  
    //request.onerror = soundService.indexedDB.onerror;
    request.onerror = (e) => reject(e);
  })
  
};

/**
 * AddSound
 * returns a blob
 */
soundService.addSound = function(id, blob) {
  return new Promise((resolve, reject) => {
    
    let arraybuffer = blobToArrayBuffer(blob);

    //read array buffer
    arraybuffer.then(sound => {
  
      var trans = soundService.db.transaction(["sound"], "readwrite");
      var store = trans.objectStore("sound");
  
      var data = {
        "blob": sound,
        "id": id
      };
  
      var request = store.put(data);
  
      request.onsuccess = function(e) {
        resolve({
          id: id,
          blob: blob
        });
      };
  
      request.onerror = function(e) {
        onError(e); //internal
        reject(e);
      };
    })
  })
};

/***
 * DeleteSound
 * @id the id of the sound to delete
 */
soundService.deleteSound = function(id) {
  return new promise((resolve, reject) => {
    var trans = soundService.db.transaction(["todo"], "readwrite");
    var store = trans.objectStore("todo");
  
    var request = store.delete(id);
  
    request.onsuccess = function(e) {
      resolve();
    };
  
    request.onerror = function(e) {
      onError(e);
      reject(e);
    };
  })
  
};

soundService.getSound = function(key) {
  return new Promise(function(resolve, reject) {
    var trans = soundService.db.transaction(["sound"], "readwrite");
    var store = trans.objectStore("sound");
    let request = store.get(key);
    request.onsuccess = (e) => { 
      var sound = e.target.result;
      if(!!sound == false)
        return;

      sound.blob = arrayBufferToBlob(sound.blob);
      resolve(sound);
    }
  })

}


/**
 * GetAllSounds()
 */
soundService.getAllSounds = function() {


  var trans = soundService.db.transaction(["sound"], "readwrite");
  var store = trans.objectStore("sound");
  var allSounds = [];

  return new Promise((resolve, reject) => {

    //count how many successes will trigger to get all the items
    store.count().onsuccess = (e) => {

      var counter = 0;
      var count = e.target.result;

       // Get everything in the store;
      var keyRange = IDBKeyRange.lowerBound(0);
      var cursorRequest = store.openCursor(keyRange);

      console.log(`Getting ${count} sounds`)
    
      cursorRequest.onsuccess = function(e) {

        var result = e.target.result;
        if(!!result == false)
          return;

        let sound = result.value;
        sound.blob = arrayBufferToBlob(sound.blob);
        allSounds.push(sound);

        counter++;

        if(counter < count){  
          result.continue();
        }
        else{
          resolve(allSounds); //emit response
        }
      };
    
      cursorRequest.onerror = (error) => {
        onError(e);
        reject(e);
      }
    }
  }); 
};

/**
 * initIndexDB()
 * This scoped function initlializes IndexDB for different browsers
 */
function initIndexDB(){
  //window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;

  if ('webkitIndexedDB' in window) {
   window.IDBTransaction = window.webkitIDBTransaction;
    window.IDBKeyRange = window.webkitIDBKeyRange;
  }
}

/**
 * OnError
 * This scoped function is used internally
 * @param {*} error 
 */
function onError(error){
  console.log("Sound service error:")
  console.log(error);
}

/**
 * arrayBufferToBlob
 * This scoped function transforms an array buffer into a blob.
 * @param {*The buffer to transform } buffer 
 * @param {* The type, default mp4} type 
 */
function arrayBufferToBlob(buffer, type) {
  return new Blob([buffer], {type: type});
}

/**
 * blobToArrayBuffer
 * This scoped function transforms a blob into an array buffer.
 * @param {*The sound blob} blob 
 */
function blobToArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      resolve(reader.result);
    });
    reader.addEventListener('error', reject);
    reader.readAsArrayBuffer(blob);
  });
}

export default soundService;