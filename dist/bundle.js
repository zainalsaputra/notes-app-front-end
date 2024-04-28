/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  background-color: #ffffff3c;\r\n  color: #eeece3;\r\n}\r\n\r\n.container {\r\n  width: 800px;\r\n}\r\n\r\nheader {\r\n  background-color: #232e3f;\r\n  color: #ffffff;\r\n  padding: 15px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\nheader h1 {\r\n  margin: 0;\r\n  font-weight: 550;\r\n}\r\n\r\nnote-header {\r\n  letter-spacing: 2px;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  justify-content: center;\r\n}\r\n\r\n.note {\r\n  max-width: 100%;\r\n}\r\n\r\nform {\r\n  margin-top: 20px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #2e476b;\r\n}\r\n\r\n.filter {\r\n  margin-bottom: 40px;\r\n  padding: 32px;\r\n  color: #232e3f;\r\n  text-align: center;\r\n  width: 100%;\r\n  border: groove;\r\n}\r\n\r\n.filter > h2 {\r\n  margin-top: -5px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n#filterNotes {\r\n  font-size: 18px;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  color: #232e3f;\r\n  width: 100%;\r\n  padding: 12px 8px;\r\n  margin-top: 20px;\r\n  background-color: white;\r\n  backdrop-filter: blur(10px);\r\n  -webkit-backdrop-filter: blur(10px);\r\n  border: groove;\r\n  display: block;\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n#filterNotes > option {\r\n  color: #232e3f;\r\n  background-color: white;\r\n}\r\n\r\n#filterNotes:hover,\r\n#filterNotes:focus-visible {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.filter {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.focused {\r\n  border: 1px double #232e3f;\r\n}\r\n\r\n.note-list {\r\n  min-width: 350px;\r\n  backdrop-filter: blur(10px);\r\n  -webkit-backdrop-filter: blur(10px);\r\n  margin-block: 1rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));\r\n  column-gap: 32px;\r\n  row-gap: 32px;\r\n}\r\n\r\n.note-item {\r\n  padding: 20px;\r\n  background-color: #ffffff;\r\n  transition: transform 0.3s ease;\r\n  max-width: 100%;\r\n  min-width: 384px;\r\n  overflow: auto;\r\n  border: groove;\r\n}\r\n\r\n.note-title {\r\n  color: #232e3f;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.note-body {\r\n  color: #000000;\r\n  white-space: pre-line;\r\n  font-size: 18px;\r\n  font-weight: lighter;\r\n  max-width: 100%;\r\n  padding: 40px;\r\n  margin: 10px 0 10px;\r\n  border: groove;\r\n}\r\n\r\n.note-item:hover,\r\n.note-item:focus-visible {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.loading-spinner {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));\r\n  backdrop-filter: blur(50px);\r\n  -webkit-backdrop-filter: blur(50px);\r\n  display: none;\r\n  z-index: 9999;\r\n}\r\n\r\n.spinner {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  border: 5px solid #f3f3f3;\r\n  border-top: 5px solid #232e3f;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\nfooter {\r\n  background-color: #232e3f;\r\n  /* Sesuaikan warna footer */\r\n  color: #fff;\r\n  padding: 15px 0px;\r\n  text-align: center;\r\n  /* position: fixed; */\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.action > .button-archived {\r\n  transition: 0.2s;\r\n  transform: translateY(5px);\r\n  font-size: 15px;\r\n  padding: 7px 12px;\r\n  color: #ffffff;\r\n\r\n  /* background: url(\"../img/archive-note.png\");\r\n  background-size: contain;\r\n  cursor: pointer; */\r\n  margin-left: auto;\r\n  background-color: #232e3f;\r\n  border: none;\r\n}\r\n\r\n.action > .button-unarchived {\r\n  transition: 0.2s;\r\n  transform: translateY(5px);\r\n  font-size: 15px;\r\n  padding: 7px 12px;\r\n  color: #ffffff;\r\n\r\n  /* background: url(\"../img/archive-note.png\");\r\n  background-size: contain;\r\n  cursor: pointer; */\r\n  margin-left: auto;\r\n  background-color: #232e3f;\r\n  border: none;\r\n}\r\n\r\n.action > .button-recovery-note {\r\n  transition: 0.2s;\r\n  transform: translateY(5px);\r\n  font-size: 15px;\r\n  padding: 7px 12px;\r\n  color: #ffffff;\r\n\r\n  /* background: url(\"../img/recovery-note.png\");\r\n  background-size: contain;\r\n  cursor: pointer; */\r\n  margin-left: auto;\r\n  background-color: #232e3f;\r\n  border: none;\r\n}\r\n\r\n.action > .button-delete {\r\n  transition: 0.2s;\r\n  transform: translateY(5px);\r\n  font-size: 15px;\r\n  padding: 7px 12px;\r\n  color: #ffffff;\r\n\r\n  /* background: url(\"../img/icons-delete.png\");\r\n  background-size: contain;\r\n  cursor: pointer; */\r\n  margin-left: 14px;\r\n  background-color: #232e3f;\r\n  border: none;\r\n}\r\n\r\n.action > .button-archived:hover {\r\n  background-color: #2f3d53;\r\n}\r\n\r\n.action > .button-unarchived:hover {\r\n  background-color: #2f3d53;\r\n}\r\n\r\n.action > .button-delete:hover {\r\n  background-color: #2f3d53;\r\n}\r\n\r\n.action > .button-recovery-note:hover {\r\n  background-color: #2f3d53;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: translate(-50%, -50%) rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -50%) rotate(360deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  main {\r\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n  main {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-bar.js */ \"./src/components/header-bar.js\");\n/* harmony import */ var _header_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_bar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-bar.js */ \"./src/components/footer-bar.js\");\n/* harmony import */ var _footer_bar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_bar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _note_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-form.js */ \"./src/components/note-form.js\");\n/* harmony import */ var _note_form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_note_form_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/component.js?");

/***/ }),

/***/ "./src/components/footer-bar.js":
/*!**************************************!*\
  !*** ./src/components/footer-bar.js ***!
  \**************************************/
/***/ (() => {

eval("class NoteFooter extends HTMLElement {\r\n  connectedCallback() {\r\n    this.innerHTML = `\r\n      <footer>\r\n        <p>© ${new Date().getFullYear()} Notes Application</p>\r\n      </footer>\r\n    `;\r\n  }\r\n}\r\ncustomElements.define(\"note-footer\", NoteFooter);\r\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/footer-bar.js?");

/***/ }),

/***/ "./src/components/header-bar.js":
/*!**************************************!*\
  !*** ./src/components/header-bar.js ***!
  \**************************************/
/***/ (() => {

eval("class NoteHeader extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.shadowRoot.innerHTML = `\r\n      <h1>Notes Application</h1>\r\n    `;\r\n  }\r\n}\r\ncustomElements.define(\"note-header\", NoteHeader);\r\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/header-bar.js?");

/***/ }),

/***/ "./src/components/note-form.js":
/*!*************************************!*\
  !*** ./src/components/note-form.js ***!
  \*************************************/
/***/ (() => {

eval("class NoteForm extends HTMLElement {\r\n  _shadowRoot = null;\r\n  _style = null;\r\n\r\n  constructor() {\r\n    super();\r\n\r\n    this._shadowRoot = this.attachShadow({ mode: \"open\" });\r\n    this._style = document.createElement(\"style\");\r\n\r\n    this.customValidationTitleHandler = this.customValidationTitleHandler.bind(this);\r\n    this.customValidationBodyHandler = this.customValidationBodyHandler.bind(this);\r\n  }\r\n\r\n  _updateStyle() {\r\n    this._style.textContent = `\r\n        input,\r\n        textarea {\r\n            font-size: 18px;\r\n            font-family: \"Ubuntu\", sans-serif;\r\n        }\r\n\r\n        form>label {\r\n            color: #232e3f;\r\n            font-size: 18px;\r\n            font-weight: bold;\r\n        }\r\n\r\n        form {\r\n            min-width: 350px;\r\n            padding: 32px;\r\n            border: groove;\r\n        }\r\n\r\n        form>h2 {\r\n            color: #232e3f;\r\n            text-align: center;\r\n            margin-top: -5px;\r\n            margin-bottom: 25px;\r\n        }\r\n\r\n        form>.input-title,\r\n        textarea {\r\n            margin-bottom: 24px;\r\n            backdrop-filter: blur(10px);\r\n            -webkit-backdrop-filter: blur(10px);\r\n            border: groove;\r\n            display: block;\r\n            width: 97%;\r\n            padding: 12px 8px;\r\n        }\r\n\r\n        form>.add-note {\r\n            margin-top: 48px;\r\n            background-color: #232e3f;\r\n            backdrop-filter: blur(10px);\r\n            -webkit-backdrop-filter: blur(10px);\r\n            border: 0px;\r\n            border: none;\r\n            color: white;\r\n            display: block;\r\n            width: 100%;\r\n            padding: 12px 8px;\r\n            cursor: pointer;\r\n            transition: transform 0.3s ease;\r\n        }\r\n\r\n        form>.add-note:hover,\r\n        form>.add-note:focus-visible {\r\n            transform: translateY(-5px);\r\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n            background-color: #2f3d53;\r\n        }\r\n\r\n        .validation-message {\r\n            margin-block-start: 0.5rem;\r\n            color: red;\r\n        }\r\n\r\n      `;\r\n  }\r\n\r\n  _emptyContent() {\r\n    this._shadowRoot.innerHTML = \"\";\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.render();\r\n    this.setupEventListeners();\r\n  }\r\n\r\n  render() {\r\n    this._emptyContent();\r\n    this._updateStyle();\r\n\r\n    this._shadowRoot.appendChild(this._style);\r\n    this._shadowRoot.innerHTML += `\r\n        <form id=\"noteForm\">\r\n            <h2>Create Note</h2>\r\n            <input class=\"input-title\" type=\"text\" id=\"title\" name=\"title\" placeholder=\"Title\" required>\r\n            <p id=\"titleValidation\" class=\"validation-message\" aria-live=\"polite\"></p>\r\n            <textarea id=\"body\" name=\"body\" rows=\"4\" placeholder=\"Body\" required></textarea>\r\n            <p id=\"bodyValidation\" class=\"validation-message\" aria-live=\"polite\"></p>\r\n            <input class=\"add-note\" type=\"submit\" value=\"Add Note\">\r\n        </form>\r\n      `;\r\n\r\n    this._shadowRoot.querySelector(\"#noteForm\").addEventListener(\"submit\", this.onSubmit.bind(this));\r\n  }\r\n\r\n  onSubmit(event) {\r\n    event.preventDefault();\r\n    const title = this._shadowRoot.querySelector(\"#title\").value;\r\n    const body = this._shadowRoot.querySelector(\"#body\").value;\r\n\r\n    const addNoteEvent = new CustomEvent(\"addNote\", {\r\n      detail: { title, body },\r\n      bubbles: true,\r\n      composed: true,\r\n    });\r\n    this.dispatchEvent(addNoteEvent);\r\n\r\n    this._shadowRoot.querySelector(\"#title\").value = \"\";\r\n    this._shadowRoot.querySelector(\"#body\").value = \"\";\r\n  }\r\n\r\n  setupEventListeners() {\r\n    const titleInput = this._shadowRoot.querySelector(\"#title\");\r\n    const bodyInput = this._shadowRoot.querySelector(\"#body\");\r\n\r\n    titleInput.addEventListener(\"input\", this.customValidationTitleHandler);\r\n    bodyInput.addEventListener(\"input\", this.customValidationBodyHandler);\r\n  }\r\n\r\n  customValidationTitleHandler(event) {\r\n    const titleInput = event.target;\r\n    const titleValidationMessage = this._shadowRoot.querySelector(\"#titleValidation\");\r\n\r\n    if (!titleInput.value.trim()) {\r\n      titleValidationMessage.innerText = \"Title is required.\";\r\n    } else {\r\n      titleValidationMessage.innerText = \"\";\r\n    }\r\n  }\r\n\r\n  customValidationBodyHandler(event) {\r\n    const bodyInput = event.target;\r\n    const bodyValidationMessage = this._shadowRoot.querySelector(\"#bodyValidation\");\r\n\r\n    if (!bodyInput.value.trim()) {\r\n      bodyValidationMessage.innerText = \"Body is required.\";\r\n    } else {\r\n      bodyValidationMessage.innerText = \"\";\r\n    }\r\n  }\r\n}\r\n\r\ncustomElements.define(\"note-form\", NoteForm);\r\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/note-form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/component.js */ \"./src/components/component.js\");\n/* harmony import */ var _script_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/main.js */ \"./src/script/main.js\");\n\r\n\r\n\r\n\r\n(0,_script_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/index.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main() {\r\n  const baseUrl = \"https://notes-api.dicoding.dev/v2\";\r\n\r\n  const renderAllNotes = (notes) => {\r\n    const noteListElement = document.querySelector(\"#noteList\");\r\n    noteListElement.innerHTML = \"\";\r\n\r\n    notes.forEach((note) => {\r\n      const noteItem = document.createElement(\"div\");\r\n      noteItem.classList.add(\"note-item\");\r\n      noteItem.setAttribute(\"tabindex\", \"0\");\r\n\r\n      const noteTitle = document.createElement(\"h3\");\r\n      noteTitle.classList.add(\"note-title\");\r\n      noteTitle.innerText = note.title;\r\n\r\n      const noteBody = document.createElement(\"p\");\r\n      noteBody.classList.add(\"note-body\");\r\n      noteBody.innerText = note.body;\r\n\r\n      const buttonArchived = document.createElement(\"button\");\r\n      buttonArchived.setAttribute(\"type\", \"button\");\r\n      buttonArchived.innerText = \"Archive\";\r\n\r\n      const buttonTrash = document.createElement(\"button\");\r\n      buttonTrash.classList.add(\"button-delete\");\r\n      buttonTrash.innerText = \"Delete\";\r\n\r\n      buttonTrash.setAttribute(\"type\", \"button\");\r\n      buttonTrash.addEventListener(\"click\", function () {\r\n        const confirmation = confirm(\"Are you sure??\");\r\n        if (confirmation) {\r\n          removeNote(note.id);\r\n        }\r\n      });\r\n\r\n      if (note.archived) {\r\n        buttonArchived.classList.add(\"button-unarchived\");\r\n        buttonArchived.innerText = \"Unarchived\";\r\n        buttonArchived.addEventListener(\"click\", function () {\r\n          unArchiveNote(note.id);\r\n        });\r\n      } else {\r\n        buttonArchived.classList.add(\"button-archived\");\r\n        buttonArchived.addEventListener(\"click\", function () {\r\n          archiveNote(note.id);\r\n        });\r\n      }\r\n\r\n      const buttonContainer = document.createElement(\"div\");\r\n      buttonContainer.classList.add(\"action\");\r\n      buttonContainer.append(buttonArchived, buttonTrash);\r\n\r\n      noteItem.append(noteTitle, noteBody, buttonContainer);\r\n      noteListElement.appendChild(noteItem);\r\n    });\r\n  };\r\n\r\n  const addNote = async (note) => {\r\n    try {\r\n      showLoadingSpinner();\r\n      const options = {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: JSON.stringify(note),\r\n      };\r\n      const response = await fetch(`${baseUrl}/notes`, options);\r\n      const responseJson = await response.json();\r\n      showResponseMessage(responseJson.message);\r\n      getUnArchived();\r\n    } catch (error) {\r\n      showResponseMessage(error);\r\n    } finally {\r\n      hideLoadingSpinner();\r\n    }\r\n  };\r\n\r\n  const getUnArchived = async () => {\r\n    try {\r\n      showLoadingSpinner();\r\n      const response = await fetch(`${baseUrl}/notes`);\r\n      const responseJson = await response.json();\r\n\r\n      if (responseJson.data.length > 0) {\r\n        renderAllNotes(responseJson.data);\r\n      } else {\r\n        showResponseMessage(\"Note Empty\");\r\n        renderAllNotes(responseJson.data);\r\n      }\r\n    } catch (error) {\r\n      showResponseMessage(error);\r\n    } finally {\r\n      hideLoadingSpinner();\r\n    }\r\n  };\r\n\r\n  const getArchived = async () => {\r\n    try {\r\n      showLoadingSpinner();\r\n      const response = await fetch(`${baseUrl}/notes/archived`);\r\n      const responseJson = await response.json();\r\n\r\n      if (responseJson.data.length > 0) {\r\n        renderAllNotes(responseJson.data);\r\n      } else {\r\n        showResponseMessage(\"Note Empty\");\r\n        renderAllNotes(responseJson.data);\r\n      }\r\n    } catch (error) {\r\n      showResponseMessage(error);\r\n    } finally {\r\n      hideLoadingSpinner();\r\n    }\r\n  };\r\n\r\n  const removeNote = (noteId) => {\r\n    showLoadingSpinner();\r\n    fetch(`${baseUrl}/notes/${noteId}`, {\r\n      method: \"DELETE\",\r\n    })\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((responseJson) => {\r\n        showResponseMessage(responseJson.message);\r\n        if (filterNotes.selectedIndex == 0) {\r\n          getUnArchived();\r\n        } else {\r\n          getArchived();\r\n        }\r\n      })\r\n      .catch((error) => {\r\n        showResponseMessage(error);\r\n      })\r\n      .finally(() => {\r\n        hideLoadingSpinner();\r\n      });\r\n  };\r\n\r\n  const archiveNote = async (id) => {\r\n    try {\r\n      const options = {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n      };\r\n      const response = await fetch(`${baseUrl}/notes/${id}/archive`, options);\r\n      const responseJson = await response.json();\r\n      showResponseMessage(responseJson.message);\r\n      getUnArchived();\r\n    } catch (error) {\r\n      showResponseMessage(error);\r\n    }\r\n  };\r\n\r\n  const unArchiveNote = async (id) => {\r\n    try {\r\n      const options = {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n      };\r\n      const response = await fetch(`${baseUrl}/notes/${id}/unarchive`, options);\r\n      const responseJson = await response.json();\r\n      showResponseMessage(responseJson.message);\r\n      getArchived();\r\n    } catch (error) {\r\n      showResponseMessage(error);\r\n    }\r\n  };\r\n\r\n  const showResponseMessage = (message) => {\r\n    alert(message);\r\n  };\r\n\r\n  document.addEventListener(\"DOMContentLoaded\", () => {\r\n    getUnArchived();\r\n    filterNotes.selectedIndex = 0;\r\n  });\r\n\r\n  document.addEventListener(\"addNote\", function (event) {\r\n    const { title, body } = event.detail;\r\n\r\n    const newNote = {\r\n      title: title,\r\n      body: body,\r\n    };\r\n\r\n    addNote(newNote);\r\n    filterNotes.selectedIndex = 0;\r\n  });\r\n\r\n  const showLoadingSpinner = () => {\r\n    document.getElementById(\"loadingSpinner\").style.display = \"block\";\r\n  };\r\n\r\n  const hideLoadingSpinner = () => {\r\n    document.getElementById(\"loadingSpinner\").style.display = \"none\";\r\n  };\r\n\r\n  const filterNotes = document.getElementById(\"filterNotes\");\r\n\r\n  filterNotes.addEventListener(\"change\", function () {\r\n    if (filterNotes.selectedIndex == 0) {\r\n      getUnArchived();\r\n    } else {\r\n      getArchived();\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\r\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/script/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;