function compose (...funcs) {
  if (funcs.length > 1) {
    function foo (...args) {
      return funcs[0](compose(...funcs.slice(1, undefined))(...args))
    }
    return foo
  } else {
    return funcs[0]
  }
}

/*
// Для теста compose
function a(x){return x+1}
function b(x){return x-3}
function c(x){return x*x}
function d(x){return x/4}

// ((x-3)^2+2)/4 = (x-3)^2 / 4 + 0.5
let test_compose = compose(b,c,a,a,d)

*/

function doMagic (arg) {
  switch (arg.op) {
    case 'plus':
      return arg.a + arg.b
    case 'minus':
      return arg.a - arg, b
    case 'times':
      return arg.a * arg.b
    case 'dividedBy':
      return (arg.a - (arg.a % arg.b)) / arg.b
    default:
      break
  }
}

function zero (arg) {
  if (arg === undefined) {
    return 0
  } else {
    arg.a = 0
    return doMagic(arg)
  }
}
function one (arg) {
  if (arg === undefined) {
    return 1
  } else {
    arg.a = 1
    return doMagic(arg)
  }
}
function two (arg) {
  if (arg === undefined) {
    return 2
  } else {
    arg.a = 2
    return doMagic(arg)
  }
}
function three (arg) {
  if (arg === undefined) {
    return 3
  } else {
    arg.a = 3
    return doMagic(arg)
  }
}
function four (arg) {
  if (arg === undefined) {
    return 4
  } else {
    arg.a = 4
    return doMagic(arg)
  }
}
function five (arg) {
  if (arg === undefined) {
    return 5
  } else {
    arg.a = 5
    return doMagic(arg)
  }
}
function six (arg) {
  if (arg === undefined) {
    return 6
  } else {
    arg.a = 6
    return doMagic(arg)
  }
}
function seven (arg) {
  if (arg === undefined) {
    return 7
  } else {
    arg.a = 7
    return doMagic(arg)
  }
}
function eight (arg) {
  if (arg === undefined) {
    return 8
  } else {
    arg.a = 8
    return doMagic(arg)
  }
}
function nine (arg) {
  if (arg === undefined) {
    return 9
  } else {
    arg.a = 9
    return doMagic(arg)
  }
}

// operations

function plus (x) {
  return { op: 'plus', b: x }
}
function minus (x) {
  return { op: 'minus', b: x }
}
function times (x) {
  return { op: 'times', b: x }
}
function dividedBy (x) {
  return { op: 'dividedBy', b: x }
}
