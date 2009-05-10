function __CLASS__() {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // %        note 1: Not a function in PHP, so in experimental
    // %        note 2: This function depends on the non-standard caller property of Function instances
    // %        note 3: Also requires 'this' object to be passed in as an argument, unlike PHP
    // *     example 1: function MyClass () {}
    // *     example 1: MyClass.prototype.myMethod = function myActualMethodName () {return __CLASS__(this);};
    // *     example 1: var myobj = new MyClass();
    // *     example 1: myobj.myMethod();
    // *     returns 1: 'MyClass'

    return arguments.callee.caller && arguments[0].constructor.name;
}