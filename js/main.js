!function(e){var c={};function n(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=c,n.d=function(e,c,t){n.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,c){if(1&c&&(e=n(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var r in e)n.d(t,r,function(c){return e[c]}.bind(null,r));return t},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,"a",c),c},n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst descriptionTextarea = document.querySelector(".container-form__description--js");\r\nconst descriptionSave = document.querySelector(".container-form__save--js");\r\nconst descriptionLoad = document.querySelector(".container-form__load--js");\r\n\r\n// descriptionTextarea.addEventListener("keyup", (e) => {\r\n\r\n// });\r\n\r\ndescriptionSave.addEventListener("click", e => {\r\n  localStorage.setItem("simple-description", descriptionTextarea.value);\r\n});\r\n\r\ndescriptionLoad.addEventListener("click", e => {\r\n  if (localStorage.getItem("simple-description")) {\r\n    descriptionTextarea.value = localStorage.getItem("simple-description");\r\n  }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZm9ybV9fZGVzY3JpcHRpb24tLWpzXCIpO1xyXG5jb25zdCBkZXNjcmlwdGlvblNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1mb3JtX19zYXZlLS1qc1wiKTtcclxuY29uc3QgZGVzY3JpcHRpb25Mb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZm9ybV9fbG9hZC0tanNcIik7XHJcblxyXG4vLyBkZXNjcmlwdGlvblRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG5cclxuLy8gfSk7XHJcblxyXG5kZXNjcmlwdGlvblNhdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2ltcGxlLWRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUpO1xyXG59KTtcclxuXHJcbmRlc2NyaXB0aW9uTG9hZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2ltcGxlLWRlc2NyaXB0aW9uXCIpKSB7XHJcbiAgICBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaW1wbGUtZGVzY3JpcHRpb25cIik7XHJcbiAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);