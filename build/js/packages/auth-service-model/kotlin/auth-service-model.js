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
  var charSequenceGet = kotlin_kotlin.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.b;
  var protoOf = kotlin_kotlin.$_$.e;
  var classMeta = kotlin_kotlin.$_$.d;
  var VOID = kotlin_kotlin.$_$.g;
  var setMetadataFor = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  setMetadataFor(User, 'User', classMeta);
  //endregion
  function isValidCardNumber(number) {
    if (!(number.length === 16))
      return false;
    var sum = 0;
    var inductionVariable = number.length - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var digit = Char__minus_impl_a2frrh(charSequenceGet(number, i), _Char___init__impl__6a9atx(48));
        if ((i % 2 | 0) === 0) {
          digit = imul(digit, 2);
          if (digit > 9)
            digit = digit - 9 | 0;
        }
        sum = sum + digit | 0;
      }
       while (0 <= inductionVariable);
    return (sum % 10 | 0) === 0;
  }
  function User() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
  }
  protoOf(User).p = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(User).q = function () {
    return this.id;
  };
  protoOf(User).r = function (_set____db54di) {
    this.firstName = _set____db54di;
  };
  protoOf(User).s = function () {
    return this.firstName;
  };
  protoOf(User).t = function (_set____db54di) {
    this.lastName = _set____db54di;
  };
  protoOf(User).u = function () {
    return this.lastName;
  };
  //region block: exports
  function $jsExportAll$(_) {
    var $ru = _.ru || (_.ru = {});
    var $ru$timmson = $ru.timmson || ($ru.timmson = {});
    var $ru$timmson$authService = $ru$timmson.authService || ($ru$timmson.authService = {});
    var $ru$timmson$authService$model = $ru$timmson$authService.model || ($ru$timmson$authService.model = {});
    $ru$timmson$authService$model.isValidCardNumber = isValidCardNumber;
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
