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
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.c;
  var last = kotlin_kotlin.$_$.g;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a;
  var charSequenceGet = kotlin_kotlin.$_$.b;
  var protoOf = kotlin_kotlin.$_$.e;
  var classMeta = kotlin_kotlin.$_$.d;
  var VOID = kotlin_kotlin.$_$.h;
  var setMetadataFor = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  setMetadataFor(User, 'User', classMeta);
  //endregion
  function isValidLuna(number) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(number) === 0)
      return false;
    // Inline function 'kotlin.code' call
    var tmp0_get_code_gknlva = last(number);
    var sum = Char__toInt_impl_vasixd(tmp0_get_code_gknlva);
    var parity = number.length % 2 | 0;
    var inductionVariable = number.length - 2 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.code' call
        var tmp1_get_code_jtnknr = charSequenceGet(number, i);
        var summand = Char__toInt_impl_vasixd(tmp1_get_code_jtnknr);
        if ((i % 2 | 0) === parity) {
          var product = imul(summand, 2);
          summand = product > 9 ? product - 9 | 0 : product;
        }
        sum = sum + summand | 0;
      }
       while (0 <= inductionVariable);
    return (sum % 10 | 0) === 0;
  }
  function User() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
  }
  protoOf(User).q = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(User).r = function () {
    return this.id;
  };
  protoOf(User).s = function (_set____db54di) {
    this.firstName = _set____db54di;
  };
  protoOf(User).t = function () {
    return this.firstName;
  };
  protoOf(User).u = function (_set____db54di) {
    this.lastName = _set____db54di;
  };
  protoOf(User).v = function () {
    return this.lastName;
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $ru = _.ru || (_.ru = {});
    var $ru$timmson = $ru.timmson || ($ru.timmson = {});
    var $ru$timmson$authService = $ru$timmson.authService || ($ru$timmson.authService = {});
    var $ru$timmson$authService$model = $ru$timmson$authService.model || ($ru$timmson$authService.model = {});
    $ru$timmson$authService$model.isValidLuna = isValidLuna;
    var $ru = _.ru || (_.ru = {});
    var $ru$timmson = $ru.timmson || ($ru.timmson = {});
    var $ru$timmson$authService = $ru$timmson.authService || ($ru$timmson.authService = {});
    var $ru$timmson$authService$model = $ru$timmson$authService.model || ($ru$timmson$authService.model = {});
    $ru$timmson$authService$model.User = User;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=auth-service-model.js.map
