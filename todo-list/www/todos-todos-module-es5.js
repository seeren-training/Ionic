(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-todos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-list/todo-list.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-list/todo-list.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodoListTodoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list *ngIf=\"loadingService.state else loading\">\n  <ion-item *ngFor=\"let number of [0, 1, 2, 3, 4]\">\n    <ion-avatar slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    <ion-label>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ng-template #loading>\n  <ion-grid *ngIf=\"!loadingService.state && !todoList?.length else list\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center empty-message\">\n      <ion-col size=\"6\">\n        {{ 0 === todoList?.length ? \"Let's start by adding a Todo\" : \"An error occurs\" }}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ng-template>\n\n<ng-template #list>\n  <ion-list>\n    <ion-item [routerLink]=\"[todo.name]\" *ngFor=\"let todo of todoList\" [color]=\"todo.state == 'DOING' ? 'success' : 'danger'\">\n      <ion-icon [name]=\"todo.state == 'DOING' ? 'flag-outline' : 'close'\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>{{ todo.name }}</h2>\n        <p>{{ todo.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ng-template>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodoTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" [class.doing]=\"todo?.state == 'DOING'\"\n        [class.done]=\"todo?.state == 'DONE'\" [class.todo]=\"form\">\n        <ion-col *ngIf=\"todo else todoForm\" size=\"9\">\n            <h2 class=\"name\">\n                {{ todo.name}}\n            </h2>\n            <p class=\"description\">\n                {{ todo.description }}\n            </p>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n<ng-template #todoForm>\n    <form *ngIf=\"form\" [formGroup]=\"form\">\n        <ion-item class=\"name\">\n            <ion-label position=\"floating\">Todo</ion-label>\n            <ion-input formControlName=\"name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"description\">\n            <ion-label position=\"floating\">Description</ion-label>\n            <ion-textarea formControlName=\"description\"></ion-textarea>\n        </ion-item>\n    </form>\n</ng-template>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTodosTodosComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-buttons *ngIf=\"'/' !== url\" slot=\"start\" (click)=\"locationService.back()\">\r\n                <ion-button color=\"dark\">\r\n                    <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n                </ion-button>\r\n            </ion-buttons>\r\n            <ion-title>{{ titleService.getTitle() }}</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-progress-bar *ngIf=\"loadingService.state\" type=\"indeterminate\"></ion-progress-bar>\r\n        <router-outlet></router-outlet>\r\n    </ion-content>\r\n    <ion-footer [ngSwitch]=\"url\">\r\n        <ion-button *ngSwitchCase=\"'/'\" [disabled]=\"loadingService.state\" routerLink=\"/new\" expand=\"full\"\r\n            color=\"primary\">Todo</ion-button>\r\n        <ion-button *ngSwitchCase=\"'/new'\" [disabled]=\"loadingService.state\" (click)=\"doing()\" expand=\"full\"\r\n            color=\"success\">Doing</ion-button>\r\n        <ion-button *ngSwitchDefault (click)=\"done()\" [disabled]=\"loadingService.state\" expand=\"full\" color=\"danger\">\r\n            Done\r\n        </ion-button>\r\n    </ion-footer>\r\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/shared/services/loading.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/loading.service.ts ***!
      \****************************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppSharedServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService() {
          _classCallCheck(this, LoadingService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.state = false;
          this.observable = this.subject.asObservable();
        }

        _createClass(LoadingService, [{
          key: "start",
          value: function start() {
            return this.next(true);
          }
        }, {
          key: "stop",
          value: function stop() {
            return this.next(false);
          }
        }, {
          key: "next",
          value: function next(state) {
            if (state !== this.state) {
              this.state = state;
              this.subject.next(this.state);
              return true;
            }

            return false;
          }
        }]);

        return LoadingService;
      }();

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
      /***/
    },

    /***/
    "./src/app/todos/shared/state.enum.model.ts":
    /*!**************************************************!*\
      !*** ./src/app/todos/shared/state.enum.model.ts ***!
      \**************************************************/

    /*! exports provided: State */

    /***/
    function srcAppTodosSharedStateEnumModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "State", function () {
        return State;
      });

      var State;

      (function (State) {
        State["TODO"] = "TODO";
        State["DOING"] = "DOING";
        State["DONE"] = "DONE";
      })(State || (State = {}));
      /***/

    },

    /***/
    "./src/app/todos/shared/state.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/todos/shared/state.service.ts ***!
      \***********************************************/

    /*! exports provided: StateService */

    /***/
    function srcAppTodosSharedStateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/loading.service */
      "./src/app/shared/services/loading.service.ts");
      /* harmony import */


      var _state_enum_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./state.enum.model */
      "./src/app/todos/shared/state.enum.model.ts");
      /* harmony import */


      var _todo_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todo-form.service */
      "./src/app/todos/shared/todo-form.service.ts");
      /* harmony import */


      var _todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./todo.service */
      "./src/app/todos/shared/todo.service.ts");

      var StateService = /*#__PURE__*/function () {
        function StateService(todo, todoForm, loading) {
          _classCallCheck(this, StateService);

          this.todo = todo;
          this.todoForm = todoForm;
          this.loading = loading;
        }

        _createClass(StateService, [{
          key: "doing",
          value: function doing() {
            var _this = this;

            return this.todoForm.form.valid ? this.todo.post({
              name: this.todoForm.form.get('name').value,
              description: this.todoForm.form.get('description').value,
              state: _state_enum_model__WEBPACK_IMPORTED_MODULE_4__["State"].DOING
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.todoForm.form.reset();
            })) : this.todo.get();
          }
        }, {
          key: "done",
          value: function done(todo) {
            var _this2 = this;

            if (_state_enum_model__WEBPACK_IMPORTED_MODULE_4__["State"].DONE === todo.state) {
              return this.todo["delete"](todo);
            }

            todo.state = _state_enum_model__WEBPACK_IMPORTED_MODULE_4__["State"].DONE;
            this.loading.start();
            return this.todo.put(this.todo.todoList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this2.loading.stop();
            }, function () {
              return todo.state = _state_enum_model__WEBPACK_IMPORTED_MODULE_4__["State"].DOING;
            }));
          }
        }]);

        return StateService;
      }();

      StateService.ctorParameters = function () {
        return [{
          type: _todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }, {
          type: _todo_form_service__WEBPACK_IMPORTED_MODULE_5__["TodoFormService"]
        }, {
          type: src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
        }];
      };

      StateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StateService);
      /***/
    },

    /***/
    "./src/app/todos/shared/todo-form.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/todos/shared/todo-form.service.ts ***!
      \***************************************************/

    /*! exports provided: TodoFormService */

    /***/
    function srcAppTodosSharedTodoFormServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoFormService", function () {
        return TodoFormService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var TodoFormService = function TodoFormService(builderService) {
        _classCallCheck(this, TodoFormService);

        this.builderService = builderService;
        this.form = this.builderService.group({
          name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      };

      TodoFormService.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      };

      TodoFormService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TodoFormService);
      /***/
    },

    /***/
    "./src/app/todos/shared/todo.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/todos/shared/todo.service.ts ***!
      \**********************************************/

    /*! exports provided: TodoService */

    /***/
    function srcAppTodosSharedTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoService", function () {
        return TodoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/loading.service */
      "./src/app/shared/services/loading.service.ts");

      var TodoService = /*#__PURE__*/function () {
        function TodoService(http, loading) {
          _classCallCheck(this, TodoService);

          this.http = http;
          this.loading = loading;
        }

        _createClass(TodoService, [{
          key: "get",
          value: function get() {
            var _this3 = this;

            if (this.todoList) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.todoList);
            }

            this.loading.start();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jsonbin.url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "secret-key": src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jsonbin.key
              })
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (todoList) {
              _this3.loading.stop();

              _this3.todoList = todoList;
            }));
          }
        }, {
          key: "post",
          value: function post(todo) {
            var _this4 = this;

            this.todoList.push(todo);
            this.loading.start();
            return this.put(this.todoList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              return _this4.loading.stop();
            }, function () {
              return _this4.todoList.pop();
            }));
          }
        }, {
          key: "put",
          value: function put(todoList) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jsonbin.url, todoList, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "secret-key": src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jsonbin.key,
                "versioning": "false",
                "Content-Type": "application/json"
              })
            });
          }
        }, {
          key: "delete",
          value: function _delete(todo) {
            var _this5 = this;

            var index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
            this.loading.start();
            return this.put(this.todoList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              return _this5.loading.stop();
            }, function () {
              return _this5.todoList.splice(index, 0, todo);
            }));
          }
        }, {
          key: "findByName",
          value: function findByName(name) {
            return this.todo = this.todoList.find(function (todo) {
              return name === todo.name;
            });
          }
        }]);

        return TodoService;
      }();

      TodoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }];
      };

      TodoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TodoService);
      /***/
    },

    /***/
    "./src/app/todos/todo-list/todo-list.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/todos/todo-list/todo-list.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodoListTodoListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  min-height: 100%;\n}\n\nion-list {\n  padding: 0;\n  width: 100%;\n}\n\n.empty-message {\n  text-align: center;\n  height: 100%;\n  font-weight: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbXB0eS1tZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/todos/todo-list/todo-list.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/todos/todo-list/todo-list.component.ts ***!
      \********************************************************/

    /*! exports provided: TodoListComponent */

    /***/
    function srcAppTodosTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
        return TodoListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/loading.service */
      "./src/app/shared/services/loading.service.ts");
      /* harmony import */


      var _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/todo.service */
      "./src/app/todos/shared/todo.service.ts");

      var TodoListComponent = /*#__PURE__*/function () {
        function TodoListComponent(loadingService, todoService) {
          _classCallCheck(this, TodoListComponent);

          this.loadingService = loadingService;
          this.todoService = todoService;
        }

        _createClass(TodoListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.show();
          }
        }, {
          key: "show",
          value: function show() {
            var _this6 = this;

            this.todoService.get().subscribe(function (todoList) {
              return _this6.todoList = todoList;
            });
          }
        }]);

        return TodoListComponent;
      }();

      TodoListComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]
        }];
      };

      TodoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todo-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo-list/todo-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todo-list.component.scss */
        "./src/app/todos/todo-list/todo-list.component.scss"))["default"]]
      })], TodoListComponent);
      /***/
    },

    /***/
    "./src/app/todos/todo/todo.component.scss":
    /*!************************************************!*\
      !*** ./src/app/todos/todo/todo.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodoTodoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  min-height: 100%;\n  justify-content: center;\n}\n\nform {\n  text-align: center;\n}\n\nform ion-item {\n  --background: transparent;\n  --color: var(--ion-color-light);\n}\n\nform .name,\nform .description {\n  text-align: center;\n}\n\nion-row {\n  color: var(--ion-color-light);\n  text-align: center;\n  height: 100%;\n  padding-bottom: 2em;\n}\n\nion-row.todo {\n  background-color: var(--ion-color-primary);\n}\n\nion-row.doing {\n  background-color: var(--ion-color-success);\n}\n\nion-row.done {\n  background-color: var(--ion-color-danger);\n}\n\nion-row .name {\n  font-weight: 300;\n  font-size: 3em;\n}\n\nion-row .description {\n  font-weight: 300;\n  font-size: 0.8m;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLCtCQUFBO0FBRVI7O0FBQUk7O0VBRUksa0JBQUE7QUFFUjs7QUFDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNJLDBDQUFBO0FBR1I7O0FBREk7RUFDSSwwQ0FBQTtBQUdSOztBQURJO0VBQ0kseUNBQUE7QUFHUjs7QUFESTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcbiAgICAubmFtZSxcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbmlvbi1yb3cge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gICAgJi50b2RvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICAmLmRvaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICB9XHJcbiAgICAmLmRvbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/todos/todo/todo.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/todos/todo/todo.component.ts ***!
      \**********************************************/

    /*! exports provided: TodoComponent */

    /***/
    function srcAppTodosTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
        return TodoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/loading.service */
      "./src/app/shared/services/loading.service.ts");
      /* harmony import */


      var _shared_todo_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/todo-form.service */
      "./src/app/todos/shared/todo-form.service.ts");
      /* harmony import */


      var _shared_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/todo.service */
      "./src/app/todos/shared/todo.service.ts");

      var TodoComponent = /*#__PURE__*/function () {
        function TodoComponent(loadingService, titleService, routeService, routerService, todoService, todoFormService) {
          _classCallCheck(this, TodoComponent);

          this.loadingService = loadingService;
          this.titleService = titleService;
          this.routeService = routeService;
          this.routerService = routerService;
          this.todoService = todoService;
          this.todoFormService = todoFormService;
        }

        _createClass(TodoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.titleService.setTitle("Todo");
            var name = null;
            this.todoService.get().subscribe(function () {
              if (!(name = _this7.routeService.snapshot.params.name)) {
                _this7.form = _this7.todoFormService.form;
              } else if (!(_this7.todo = _this7.todoService.findByName(name))) {
                _this7.routerService.navigate(["/"]);
              }
            });
          }
        }]);

        return TodoComponent;
      }();

      TodoComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }, {
          type: _shared_todo_form_service__WEBPACK_IMPORTED_MODULE_5__["TodoFormService"]
        }];
      };

      TodoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todo/todo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todo.component.scss */
        "./src/app/todos/todo/todo.component.scss"))["default"]]
      })], TodoComponent);
      /***/
    },

    /***/
    "./src/app/todos/todos-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/todos/todos-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: TodosRoutingModule */

    /***/
    function srcAppTodosTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function () {
        return TodosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todo-list/todo-list.component */
      "./src/app/todos/todo-list/todo-list.component.ts");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./todo/todo.component */
      "./src/app/todos/todo/todo.component.ts");
      /* harmony import */


      var _todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todos.component */
      "./src/app/todos/todos.component.ts");

      var routes = [{
        path: '',
        component: _todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"],
        children: [{
          path: '',
          component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
        }, {
          path: 'new',
          component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]
        }, {
          path: ':name',
          component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]
        }]
      }];

      var TodosRoutingModule = function TodosRoutingModule() {
        _classCallCheck(this, TodosRoutingModule);
      };

      TodosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], TodosRoutingModule);
      /***/
    },

    /***/
    "./src/app/todos/todos.component.scss":
    /*!********************************************!*\
      !*** ./src/app/todos/todos.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTodosTodosComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-progress-bar {\n  position: absolute;\n  z-index: 9;\n}\n\nion-footer ion-button {\n  margin: 0 !important;\n  height: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFSTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvdG9kb3MvdG9kb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/todos/todos.component.ts":
    /*!******************************************!*\
      !*** ./src/app/todos/todos.component.ts ***!
      \******************************************/

    /*! exports provided: TodosComponent */

    /***/
    function srcAppTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
        return TodosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/loading.service */
      "./src/app/shared/services/loading.service.ts");
      /* harmony import */


      var _shared_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/todo.service */
      "./src/app/todos/shared/todo.service.ts");
      /* harmony import */


      var _shared_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/state.service */
      "./src/app/todos/shared/state.service.ts");

      var TodosComponent = /*#__PURE__*/function () {
        function TodosComponent(changeService, routerService, titleService, locationService, loadingService, todoService, stateService) {
          _classCallCheck(this, TodosComponent);

          this.changeService = changeService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.locationService = locationService;
          this.loadingService = loadingService;
          this.todoService = todoService;
          this.stateService = stateService;
        }

        _createClass(TodosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.routerService.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this8.titleService.setTitle("Todo's");

                _this8.url = _this8.routerService.url;
              }
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this.changeService.detectChanges();
          }
        }, {
          key: "done",
          value: function done() {
            var _this9 = this;

            this.stateService.done(this.todoService.todo).subscribe(function () {
              return _this9.routerService.navigate(['/']);
            });
          }
        }, {
          key: "doing",
          value: function doing() {
            var _this10 = this;

            this.stateService.doing().subscribe(function () {
              return _this10.routerService.navigate(['/']);
            });
          }
        }]);

        return TodosComponent;
      }();

      TodosComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"]
        }, {
          type: _shared_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"]
        }];
      };

      TodosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./todos.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./todos.component.scss */
        "./src/app/todos/todos.component.scss"))["default"]]
      })], TodosComponent);
      /***/
    },

    /***/
    "./src/app/todos/todos.module.ts":
    /*!***************************************!*\
      !*** ./src/app/todos/todos.module.ts ***!
      \***************************************/

    /*! exports provided: TodosModule */

    /***/
    function srcAppTodosTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodosModule", function () {
        return TodosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todos.component */
      "./src/app/todos/todos.component.ts");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./todo/todo.component */
      "./src/app/todos/todo/todo.component.ts");
      /* harmony import */


      var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./todo-list/todo-list.component */
      "./src/app/todos/todo-list/todo-list.component.ts");
      /* harmony import */


      var _todos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./todos-routing.module */
      "./src/app/todos/todos-routing.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var TodosModule = function TodosModule() {
        _classCallCheck(this, TodosModule);
      };

      TodosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _todos_routing_module__WEBPACK_IMPORTED_MODULE_6__["TodosRoutingModule"]]
      })], TodosModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=todos-todos-module-es5.js.map