/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app.js */ \"./src/app.js\");\n\r\n\r\nwindow.onload = () => {\r\n  \"use strict\";\r\n\r\n  if (\"serviceWorker\" in navigator) {\r\n    navigator.serviceWorker.register(\"./sw.js\");\r\n  }\r\n\r\n  Object(_src_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return app; });\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _book_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-list */ \"./src/book-list.js\");\n/* harmony import */ var _book_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-details */ \"./src/book-details.js\");\n/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound-service */ \"./src/sound-service.js\");\n/* harmony import */ var _lib_componentFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/componentFactory */ \"./src/lib/componentFactory.js\");\n/** Future: Import files */\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction app(){\r\n\r\n  _sound_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].open().then(soundService => {\r\n    let factory = new _lib_componentFactory__WEBPACK_IMPORTED_MODULE_4__[\"default\"]([\r\n\r\n    ]);\r\n  \r\n    let router = document.createElement(\"router-outlet\");\r\n    document.querySelector('#app').appendChild(router);\r\n    router.init(factory);\r\n  })\r\n\r\n\r\n  // function showAudio(sound){\r\n\r\n  //   console.log(sound);\r\n  //   let container = document.createElement('div');\r\n  //   container.className = 'audio';\r\n  \r\n  //   let title = document.createElement('h5');\r\n  //   title.innerText = sound.id;\r\n  //   container.appendChild(title);\r\n  \r\n  \r\n  //   let audio = document.createElement('audio');\r\n  //   audio.src = URL.createObjectURL(sound.blob);\r\n  //   audio.controls = true;\r\n  //   container.appendChild(audio);\r\n  \r\n  //   // audioDownload.href = recordedAudio.src;\r\n  //   // audioDownload.download = \"audio.mp3\";\r\n  //   // audioDownload.innerHTML = \"Download\";\r\n  \r\n  //   document.getElementById('sounds').appendChild(container);\r\n  \r\n  // }\r\n  \r\n  // function storeAudio(blob){\r\n    \r\n  //   let id = document.querySelector(\"#id\").value;\r\n  //   soundService.addSound(id, blob).then((sound) => {\r\n  //     showAudio(sound);\r\n  //   })\r\n  // }\r\n  \r\n  \r\n  // function startRecording() {\r\n  //   startRecord.disabled = true;\r\n  //   stopRecord.disabled = false;\r\n  //   audio = [];\r\n  //   recordedAudio.controls = false;\r\n  //   rec.start();\r\n  // }\r\n  \r\n  // function stopRecording() {\r\n  //   startRecord.disabled = false;\r\n  //   stopRecord.disabled = true;\r\n  //   rec.stop();\r\n  // }\r\n  \r\n  // function init() {\r\n  \r\n  //   if (!navigator.mediaDevices) {\r\n  //     console.log(\"Sorry, getUserMedia is not supported\");\r\n  //     return;\r\n  //   }\r\n    \r\n  \r\n  //   navigator.mediaDevices.getUserMedia({ audio: true })\r\n  //     .then(stream => {\r\n  //       rec = new MediaRecorder(stream);\r\n  //       rec.ondataavailable = e => {\r\n  //         audio.push(e.data);\r\n  //         if (rec.state == \"inactive\") {\r\n  //           let blob = new Blob(audio, {\r\n  //             type: \"audio/x-mpeg-3\"\r\n  //           });\r\n  \r\n  //           storeAudio(blob);\r\n  //         }\r\n  //       };\r\n  //     }).catch(e => console.log(e));\r\n  \r\n  //   //open DB\r\n  //   soundService.open().then(() => {\r\n  //     soundService.getAllSounds().then(sounds => {\r\n  //       console.log(sounds);\r\n  //       sounds.forEach(s => showAudio(s));\r\n  //     })\r\n  //   })\r\n  // }\r\n  \r\n  //window.addEventListener(\"DOMContentLoaded\", init, false);\r\n  \r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/book-details.js":
/*!*****************************!*\
  !*** ./src/book-details.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound-service */ \"./src/sound-service.js\");\n\r\n\r\nclass BookDetails extends HTMLElement {\r\n\r\n    constructor(){\r\n        super();\r\n\r\n    }\r\n\r\n    init(soundService){\r\n\r\n        let name = this.getAttribute('name');\r\n        this.book = JSON.parse(localStorage.getItem(name)) || {\r\n            name: name,\r\n            chapters: [\r\n                \"hoofdstuk_1\"\r\n            ]\r\n        };\r\n\r\n        //title\r\n        let title = document.createElement('h1');\r\n        title.innerText =  this.book.name;\r\n        this.appendChild(title);\r\n\r\n        //chapter-list\r\n        this.chapterscontainer = document.createElement('div');\r\n        this.chapterscontainer.className = \"chapter-list\";\r\n        this.appendChild(this.chapterscontainer);\r\n\r\n        //add button\r\n        let add = document.createElement('button');\r\n        add.innerText = '+';\r\n        add.addEventListener('click', () => { this.addChapter()});\r\n        this.appendChild(add);\r\n\r\n        this.renderChapters();\r\n    }\r\n\r\n    addChapter() {\r\n\r\n    }\r\n\r\n    renderChapters(){\r\n        if(!this.book.chapters)\r\n            return;\r\n\r\n        this.book.chapters.forEach(c => {\r\n            _sound_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSound(c).then(sound => {\r\n                this.showAudio(sound);\r\n            })\r\n        })\r\n    }\r\n\r\n    showAudio(sound){\r\n\r\n        let chapter = document.createElement('div');\r\n        chapter.className = 'chapter';\r\n\r\n        let title = document.createElement('h5');\r\n        title.innerText = sound.id;\r\n        chapter.appendChild(title);\r\n\r\n\r\n        let audio = document.createElement('audio');\r\n        audio.src = URL.createObjectURL(sound.blob);\r\n        audio.controls = true;\r\n        chapter.appendChild(audio);\r\n\r\n        // audioDownload.href = recordedAudio.src;\r\n        // audioDownload.download = \"audio.mp3\";\r\n        // audioDownload.innerHTML = \"Download\";\r\n\r\n        this.chapterscontainer.appendChild(chapter);\r\n\r\n      }\r\n}\r\n\r\ncustomElements.define('book-details', BookDetails);\r\n\n\n//# sourceURL=webpack:///./src/book-details.js?");

/***/ }),

/***/ "./src/book-list.js":
/*!**************************!*\
  !*** ./src/book-list.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/component.js */ \"./src/lib/component.js\");\n\r\n\r\nclass BookListComponent extends _lib_component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(){\r\n        super();\r\n    }\r\n\r\n    init(){\r\n\r\n        //title\r\n        let title = document.createElement('h1');\r\n        title.innerText = \"Book list\";\r\n        this.appendChild(title);\r\n\r\n        //books-list\r\n        this.bookscontainer = document.createElement('div');\r\n        this.bookscontainer.className = \"book-list\";\r\n        this.appendChild(this.bookscontainer);\r\n\r\n        //add button\r\n        let add = document.createElement('button');\r\n        add.innerText = '+';\r\n        add.addEventListener('click', () => { this.addBook()});\r\n        this.appendChild(add);\r\n\r\n        //books\r\n        this.books = JSON.parse(localStorage.getItem('books')) || [];\r\n        this.renderBooks();\r\n    }\r\n\r\n\r\n    addBook(){\r\n        let name = prompt(\"Enter the name of the book\"); \r\n        this.books.push({ name: name});\r\n        localStorage.setItem('books', JSON.stringify(this.books));\r\n        this.renderBooks();\r\n    }\r\n\r\n    renderBooks(){\r\n        this.bookscontainer.innerHTML = \"\";\r\n\r\n        this.books.forEach(b => { \r\n            let book = document.createElement('div');\r\n            book.className = 'book';\r\n            book.innerText = b.name;\r\n            book.addEventListener('click', () => this.navigateToBook(b.name));\r\n            this.bookscontainer.appendChild(book);\r\n        })\r\n    }\r\n\r\n    navigateToBook(name){\r\n        super.navigateTo('/book-details/' + name);\r\n    }\r\n\r\n}\r\n\r\n//<book-list></book-list>\r\ncustomElements.define('book-list', BookListComponent);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookListComponent);\n\n//# sourceURL=webpack:///./src/book-list.js?");

/***/ }),

/***/ "./src/lib/component.js":
/*!******************************!*\
  !*** ./src/lib/component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n\r\nclass Component extends HTMLElement \r\n{\r\n    constructor(){\r\n        super();\r\n    }\r\n\r\n    navigateTo(url)\r\n    {\r\n        location.hash = '#' + url;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/lib/component.js?");

/***/ }),

/***/ "./src/lib/componentFactory.js":
/*!*************************************!*\
  !*** ./src/lib/componentFactory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentFactory; });\nclass ComponentFactory\r\n{\r\n    constructor(services){\r\n        this.services = services;\r\n    }\r\n\r\n    createComponent(componentName, attributes){\r\n        let comp = document.createElement(componentName);\r\n        \r\n        if(attributes){\r\n            for (var prop in attributes) {\r\n                comp.setAttribute(prop, attributes[prop]);\r\n            }\r\n        }\r\n\r\n        comp.init(this.services);\r\n        return comp;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/lib/componentFactory.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nclass Router extends HTMLElement {\r\n\r\n    constructor(){\r\n        super();    \r\n       }\r\n\r\n    init(componentFactory){\r\n        this.factory = componentFactory;\r\n        this.navigateTo(window.location.hash);\r\n        window.addEventListener(\"hashchange\", () => this.navigateTo(window.location.hash));\r\n    }\r\n\r\n    navigateTo(hash)\r\n    {\r\n        if(hash.includes(\"book-details\"))\r\n        {\r\n            let attributes = {\r\n                name: this.getParam(hash)\r\n            }\r\n\r\n            this.loadComponent('book-details', attributes);\r\n        }\r\n        else //default\r\n        {\r\n            this.loadComponent('book-list');\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Load a commponent into the router-outlet\r\n     * name: selector of the componnent\r\n     * attributes: attributes to add to the component\r\n     */\r\n    loadComponent(name, attributes){\r\n        let comp = this.factory.createComponent(name, attributes);\r\n        this.innerHTML = \"\";\r\n        this.appendChild(comp);\r\n    }\r\n\r\n    getParam(hash){\r\n        let parts = hash.split('/');\r\n        return parts[parts.length -1];\r\n    }\r\n}\r\n\r\ncustomElements.define('router-outlet', Router);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\r\n\r\n/** Helper methods */\r\n\r\n\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sound-service.js":
/*!******************************!*\
  !*** ./src/sound-service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nvar soundService = {};\r\ninitIndexDB();\r\n\r\n/** \r\n * File layout:\r\n * - Interface functions\r\n * - Scoped functions\r\n */\r\n\r\n/**\r\n * Opens a connection to IndexDB and the 'sound' objec store.\r\n * Returns a promise with the sound store.\r\n */\r\nsoundService.open = function() {\r\n  return new Promise((resolve, reject) => {\r\n    var version = 1;\r\n    var request = indexedDB.open(\"voorlezen\", version);\r\n  \r\n    // We can only create Object stores in a versionchange transaction.\r\n    request.onupgradeneeded = function(e) {\r\n      var db = e.target.result;\r\n  \r\n      // A versionchange transaction is started automatically.\r\n      e.target.transaction.onerror = onerror;\r\n  \r\n      if(db.objectStoreNames.contains(\"sound\")) {\r\n        db.deleteObjectStore(\"sound\");\r\n      }\r\n  \r\n      var store = db.createObjectStore(\"sound\",\r\n        {keyPath: \"id\"});\r\n    };\r\n  \r\n    //\r\n    request.onsuccess = function(e) {\r\n      soundService.db = e.target.result; //add DB to sound service\r\n      resolve(soundService);\r\n    };\r\n  \r\n    //request.onerror = soundService.indexedDB.onerror;\r\n    request.onerror = (e) => reject(e);\r\n  })\r\n  \r\n};\r\n\r\n/**\r\n * AddSound\r\n * returns a blob\r\n */\r\nsoundService.addSound = function(id, blob) {\r\n  return new Promise((resolve, reject) => {\r\n    \r\n    let arraybuffer = blobToArrayBuffer(blob);\r\n\r\n    //read array buffer\r\n    arraybuffer.then(sound => {\r\n  \r\n      var trans = soundService.db.transaction([\"sound\"], \"readwrite\");\r\n      var store = trans.objectStore(\"sound\");\r\n  \r\n      var data = {\r\n        \"blob\": sound,\r\n        \"id\": id\r\n      };\r\n  \r\n      var request = store.put(data);\r\n  \r\n      request.onsuccess = function(e) {\r\n        resolve({\r\n          id: id,\r\n          blob: blob\r\n        });\r\n      };\r\n  \r\n      request.onerror = function(e) {\r\n        onError(e); //internal\r\n        reject(e);\r\n      };\r\n    })\r\n  })\r\n};\r\n\r\n/***\r\n * DeleteSound\r\n * @id the id of the sound to delete\r\n */\r\nsoundService.deleteSound = function(id) {\r\n  return new promise((resolve, reject) => {\r\n    var trans = soundService.db.transaction([\"todo\"], \"readwrite\");\r\n    var store = trans.objectStore(\"todo\");\r\n  \r\n    var request = store.delete(id);\r\n  \r\n    request.onsuccess = function(e) {\r\n      resolve();\r\n    };\r\n  \r\n    request.onerror = function(e) {\r\n      onError(e);\r\n      reject(e);\r\n    };\r\n  })\r\n  \r\n};\r\n\r\nsoundService.getSound = function(key) {\r\n  return new Promise(function(resolve, reject) {\r\n    var trans = soundService.db.transaction([\"sound\"], \"readwrite\");\r\n    var store = trans.objectStore(\"sound\");\r\n    let request = store.get(key);\r\n    request.onsuccess = (e) => { \r\n      var sound = e.target.result;\r\n      if(!!sound == false)\r\n        return;\r\n\r\n      sound.blob = arrayBufferToBlob(sound.blob);\r\n      resolve(sound);\r\n    }\r\n  })\r\n\r\n}\r\n\r\n\r\n/**\r\n * GetAllSounds()\r\n */\r\nsoundService.getAllSounds = function() {\r\n\r\n\r\n  var trans = soundService.db.transaction([\"sound\"], \"readwrite\");\r\n  var store = trans.objectStore(\"sound\");\r\n  var allSounds = [];\r\n\r\n  return new Promise((resolve, reject) => {\r\n\r\n    //count how many successes will trigger to get all the items\r\n    store.count().onsuccess = (e) => {\r\n\r\n      var counter = 0;\r\n      var count = e.target.result;\r\n\r\n       // Get everything in the store;\r\n      var keyRange = IDBKeyRange.lowerBound(0);\r\n      var cursorRequest = store.openCursor(keyRange);\r\n\r\n      console.log(`Getting ${count} sounds`)\r\n    \r\n      cursorRequest.onsuccess = function(e) {\r\n\r\n        var result = e.target.result;\r\n        if(!!result == false)\r\n          return;\r\n\r\n        let sound = result.value;\r\n        sound.blob = arrayBufferToBlob(sound.blob);\r\n        allSounds.push(sound);\r\n\r\n        counter++;\r\n\r\n        if(counter < count){  \r\n          result.continue();\r\n        }\r\n        else{\r\n          resolve(allSounds); //emit response\r\n        }\r\n      };\r\n    \r\n      cursorRequest.onerror = (error) => {\r\n        onError(e);\r\n        reject(e);\r\n      }\r\n    }\r\n  }); \r\n};\r\n\r\n/**\r\n * initIndexDB()\r\n * This scoped function initlializes IndexDB for different browsers\r\n */\r\nfunction initIndexDB(){\r\n  //window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;\r\n\r\n  if ('webkitIndexedDB' in window) {\r\n   window.IDBTransaction = window.webkitIDBTransaction;\r\n    window.IDBKeyRange = window.webkitIDBKeyRange;\r\n  }\r\n}\r\n\r\n/**\r\n * OnError\r\n * This scoped function is used internally\r\n * @param {*} error \r\n */\r\nfunction onError(error){\r\n  console.log(\"Sound service error:\")\r\n  console.log(error);\r\n}\r\n\r\n/**\r\n * arrayBufferToBlob\r\n * This scoped function transforms an array buffer into a blob.\r\n * @param {*The buffer to transform } buffer \r\n * @param {* The type, default mp4} type \r\n */\r\nfunction arrayBufferToBlob(buffer, type) {\r\n  return new Blob([buffer], {type: type});\r\n}\r\n\r\n/**\r\n * blobToArrayBuffer\r\n * This scoped function transforms a blob into an array buffer.\r\n * @param {*The sound blob} blob \r\n */\r\nfunction blobToArrayBuffer(blob) {\r\n  return new Promise((resolve, reject) => {\r\n    const reader = new FileReader();\r\n    reader.addEventListener('loadend', (e) => {\r\n      resolve(reader.result);\r\n    });\r\n    reader.addEventListener('error', reject);\r\n    reader.readAsArrayBuffer(blob);\r\n  });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (soundService);\n\n//# sourceURL=webpack:///./src/sound-service.js?");

/***/ })

/******/ });