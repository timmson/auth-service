(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'auth-service-model'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'auth-service-model'.");
    }
    root['auth-service-model'] = factory(typeof this['auth-service-model'] === 'undefined' ? {} : this['auth-service-model'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.b;
  var classMeta = kotlin_kotlin.$_$.a;
  var VOID = kotlin_kotlin.$_$.d;
  var setMetadataFor = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MyUser, 'MyUser', classMeta);
  //endregion
  function MyUser() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
  }
  protoOf(MyUser).a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(MyUser).b = function () {
    return this.id;
  };
  protoOf(MyUser).c = function (_set____db54di) {
    this.firstName = _set____db54di;
  };
  protoOf(MyUser).d = function () {
    return this.firstName;
  };
  protoOf(MyUser).e = function (_set____db54di) {
    this.lastName = _set____db54di;
  };
  protoOf(MyUser).f = function () {
    return this.lastName;
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $ru = _.ru || (_.ru = {});
    var $ru$timmson = $ru.timmson || ($ru.timmson = {});
    var $ru$timmson$authService = $ru$timmson.authService || ($ru$timmson.authService = {});
    var $ru$timmson$authService$model = $ru$timmson$authService.model || ($ru$timmson$authService.model = {});
    $ru$timmson$authService$model.MyUser = MyUser;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=auth-service-model.js.map
