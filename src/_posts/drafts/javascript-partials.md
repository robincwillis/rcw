var partial = function (func /*, 0..n args */) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var allArguments = args.concat(Array.prototype.slice.call(arguments));
        return func.apply(this, allArguments);
    };
};

var f = function (pars) {  };

var pf = partial(f, 200);

pf(/* you can add more arguments */); //invokes f with the previously
                                      //added arguments (in this case, 200);

partial(f, 200);


