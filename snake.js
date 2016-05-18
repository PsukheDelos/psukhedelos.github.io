function gracecode_snake () {
  this.definitionModule = "snake";
  this.definitionLine = 0;
  lineNumber = 2
  // Import of dom
  if (typeof gracecode_dom == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module dom'));
  var var_dom = do_import("dom", gracecode_dom);
  lineNumber = 3
  // Import of math
  if (typeof gracecode_math == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module math'));
  var var_math = do_import("math", gracecode_math);
  lineNumber = 9
  lineNumber = 6
  var call0 = callmethod(var_dom,"document", [0]);
  var var_document = call0;
  var func1 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      return var_document
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1.paramCounts = [
    0,
  ];
  func1.variableArities = [
    false,
  ];
  this.methods["document"] = func1;
  func1.definitionLine = 6;
  func1.definitionModule = "snake";
  lineNumber = 9;
  moduleName = "snake";
  lineNumber = 6
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_document)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'document' to be of type Unknown"))
  lineNumber = 9
  var string2 = new GraceString("output-select");
  var call3 = callmethod(var_document,"getElementById", [1], string2);
  var var_ts = call3;
  lineNumber = 6
  var func4 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func4.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ts)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 9
      return var_ts
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func4.paramCounts = [
    0,
  ];
  func4.variableArities = [
    false,
  ];
  this.methods["ts"] = func4;
  func4.definitionLine = 6;
  func4.definitionModule = "snake";
  lineNumber = 9;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_ts)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'ts' to be of type Unknown"))
  lineNumber = 10
  var call6 = callmethod(var_ts,"options", [0]);
  var call7 = callmethod(call6,"length", [0]);
  var diff9 = callmethod(call7, "-", [1], new GraceNum(1));
  var opresult12 = callmethod(new GraceNum(0), "..", [1], diff9);
  lineNumber = 17
  var block13 = Grace_allocObject();
  block13.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block13.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block13.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block13.methods["match"] = GraceBlock_match;
  block13.methods["prefix?"] = GraceBlock_lift;
  block13.receiver = this;
  block13.className = 'block<snake:17>';
  block13.real = function(
    var_i
  ) {
    sourceObject = this;
    lineNumber = 15
    var if14 = var_done;
    lineNumber = 11
    var string15 = new GraceString("canvas");
    var call17 = callmethod(var_ts,"options", [0]);
    var call18 = callmethod(call17,"item", [1], var_i);
    var call19 = callmethod(call18,"value", [0]);
    var opresult21 = callmethod(call19, "==", [1], string15);
    if (Grace_isTrue(opresult21)) {
      lineNumber = 13
      lineNumber = 11
      lineNumber = 12
      var call22 = callmethod(var_ts,"selectedIndex:=", [1], var_i);
      lineNumber = 13
      var call23 = callmethod(var_dom,"window", [0]);
      var call24 = callmethod(call23,"outputswitch", [0]);
      if14 = call24;
    }
    return if14;
  };
  var call25 = callmethod(Grace_prelude,"for()do", [1, 1], opresult12, block13);
  lineNumber = 10
  lineNumber = 17
  var string26 = new GraceString("standard-canvas");
  var call27 = callmethod(var_dom,"document", [0]);
  var call28 = callmethod(call27,"getElementById", [1], string26);
  var var_canvas = call28;
  var func29 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func29.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      return var_canvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func29.paramCounts = [
    0,
  ];
  func29.variableArities = [
    false,
  ];
  this.methods["canvas"] = func29;
  func29.definitionLine = 17;
  func29.definitionModule = "snake";
  lineNumber = 17;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_canvas)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'canvas' to be of type Unknown"))
  lineNumber = 18
  var string30 = new GraceString("2d");
  var call31 = callmethod(var_canvas,"getContext", [1], string30);
  var var_ctx = call31;
  lineNumber = 17
  var func32 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ctx)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 18
      return var_ctx
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func32.paramCounts = [
    0,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["ctx"] = func32;
  func32.definitionLine = 17;
  func32.definitionModule = "snake";
  lineNumber = 18;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_ctx)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'ctx' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 17
  lineNumber = 20
  var string33 = new GraceString("white");
  var call34 = callmethod(var_ctx,"fillStyle:=", [1], string33);
  lineNumber = 21
  var call35 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
  lineNumber = 23
  var obj36 = Grace_allocObject();
  obj36.definitionModule = "snake";
  obj36.definitionLine = 23;
  obj36.outer = this;
  var reader_snake_outer_37 = function() {
    return this.outer;
  }
  obj36.methods["outer"] = reader_snake_outer_37;
  function obj_init_36() {
    var origSuperDepth = superDepth;
    superDepth = obj36;
    obj36.annotations = [];
    sourceObject = obj36;
    lineNumber = 24
    var bool38 = new GraceBoolean(true)
    obj36.data["live"] = bool38;
    var reader_snake_live_39 = function() {
      return this.data["live"];
    }
    obj36.methods["live"] = reader_snake_live_39;
    obj36.data["live"] = bool38;
    var writer_snake_live_39 = function(argcv, o) {
      this.data["live"] = o;
    }
    obj36.methods["live:="] = writer_snake_live_39;
    lineNumber = 25;
    moduleName = "snake";
    lineNumber = 24
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], bool38)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'live' to be of type Unknown"))
    obj36.mutable = true;
    sourceObject = obj36;
    lineNumber = 25
    obj36.data["score"] = new GraceNum(1);
    var reader_snake_score_40 = function() {
      return this.data["score"];
    }
    obj36.methods["score"] = reader_snake_score_40;
    obj36.data["score"] = new GraceNum(1);
    var writer_snake_score_40 = function(argcv, o) {
      this.data["score"] = o;
    }
    obj36.methods["score:="] = writer_snake_score_40;
    lineNumber = 26;
    moduleName = "snake";
    lineNumber = 25
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(1))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'score' to be of type Unknown"))
    obj36.mutable = true;
    superDepth = origSuperDepth;
  }
  obj_init_36.apply(obj36, []);
  var var_game = obj36;
  lineNumber = 17
  var func41 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func41.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (game)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 23
      return var_game
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func41.paramCounts = [
    0,
  ];
  func41.variableArities = [
    false,
  ];
  this.methods["game"] = func41;
  func41.definitionLine = 17;
  func41.definitionModule = "snake";
  lineNumber = 23;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_game)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'game' to be of type Unknown"))
  lineNumber = 28
  var func42 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func42.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (point)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      return var_point
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func42.paramCounts = [
    0,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["point"] = func42;
  func42.definitionLine = 28;
  func42.definitionModule = "snake";
  var obj43 = Grace_allocObject();
  obj43.definitionModule = "snake";
  obj43.definitionLine = 28;
  obj43.outer = this;
  var reader_snake_outer_44 = function() {
    return this.outer;
  }
  obj43.methods["outer"] = reader_snake_outer_44;
  function obj_init_43() {
    var origSuperDepth = superDepth;
    superDepth = obj43;
    obj43.annotations = [];
    var func45 = function(argcv) {
      var curarg = 1;
      var var_xp = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func45.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ofX)"));
      var var_yp = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func45.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (ofY)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        var obj46 = Grace_allocObject();
        obj46.definitionModule = "snake";
        obj46.definitionLine = 28;
        obj46.outer = this;
        var reader_snake_outer_47 = function() {
          return this.outer;
        }
        obj46.methods["outer"] = reader_snake_outer_47;
        function obj_init_46() {
          var origSuperDepth = superDepth;
          superDepth = obj46;
          obj46.annotations = [];
          sourceObject = obj46;
          lineNumber = 29
          obj46.data["x"] = var_xp;
          var reader_snake_x_48 = function() {
            return this.data["x"];
          }
          obj46.methods["x"] = reader_snake_x_48;
          obj46.data["x"] = var_xp;
          var writer_snake_x_48 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj46.methods["x:="] = writer_snake_x_48;
          lineNumber = 30;
          moduleName = "snake";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_xp)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj46.mutable = true;
          sourceObject = obj46;
          lineNumber = 30
          obj46.data["y"] = var_yp;
          var reader_snake_y_49 = function() {
            return this.data["y"];
          }
          obj46.methods["y"] = reader_snake_y_49;
          obj46.data["y"] = var_yp;
          var writer_snake_y_49 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj46.methods["y:="] = writer_snake_y_49;
          lineNumber = 31;
          moduleName = "snake";
          lineNumber = 30
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_yp)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj46.mutable = true;
          superDepth = origSuperDepth;
        }
        obj_init_46.apply(obj46, []);
        return obj46
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func45.paramTypes = [];
    func45.paramTypes.push([type_Number, "xp"]);
    func45.paramTypes.push([type_Number, "yp"]);
    func45.paramCounts = [
      1,
      1,
    ];
    func45.variableArities = [
      false,
      false,
    ];
    obj43.methods["ofX()ofY"] = func45;
    func45.definitionLine = 28;
    func45.definitionModule = "snake";
    var func50 = function(argcv) {
      var curarg = 1;
      var var_xp = arguments[curarg];
      curarg++;
      var var_yp = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj51 = Grace_allocObject();
        obj51.definitionModule = "snake";
        obj51.definitionLine = 28;
        var inho51 = inheritingObject;
        while (inho51.superobj) inho51 = inho51.superobj;
        inho51.superobj = obj51;
        obj51.data = inheritingObject.data;
        obj51.outer = this;
        var reader_snake_outer_52 = function() {
          return this.outer;
        }
        obj51.methods["outer"] = reader_snake_outer_52;
        function obj_init_51() {
          var origSuperDepth = superDepth;
          superDepth = obj51;
          obj51.annotations = [];
          sourceObject = obj51;
          lineNumber = 29
          obj51.data["x"] = var_xp;
          var reader_snake_x_53 = function() {
            return this.data["x"];
          }
          obj51.methods["x"] = reader_snake_x_53;
          obj51.data["x"] = var_xp;
          var writer_snake_x_53 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj51.methods["x:="] = writer_snake_x_53;
          lineNumber = 30;
          moduleName = "snake";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_xp)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj51.mutable = true;
          sourceObject = obj51;
          lineNumber = 30
          obj51.data["y"] = var_yp;
          var reader_snake_y_54 = function() {
            return this.data["y"];
          }
          obj51.methods["y"] = reader_snake_y_54;
          obj51.data["y"] = var_yp;
          var writer_snake_y_54 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj51.methods["y:="] = writer_snake_y_54;
          lineNumber = 31;
          moduleName = "snake";
          lineNumber = 30
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_yp)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj51.mutable = true;
          superDepth = origSuperDepth;
        }
        obj_init_51.apply(inheritingObject, []);
        return obj51
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func50.paramTypes = [];
    func50.paramTypes.push([type_Number, "xp"]);
    func50.paramTypes.push([type_Number, "yp"]);
    obj43.methods["ofX()ofY()object"] = func50;
    var func55 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 28
        var string56 = new GraceString("class point");
        return string56
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func55.paramCounts = [
    ];
    func55.variableArities = [
    ];
    obj43.methods["asDebugString"] = func55;
    func55.definitionLine = 28;
    func55.definitionModule = "snake";
    sourceObject = obj43;
    sourceObject = obj43;
    superDepth = origSuperDepth;
  }
  obj_init_43.apply(obj43, []);
  var var_point = obj43;
  lineNumber = 33
  var call57 = callmethod(var_point,"ofX()ofY", [1, 1], new GraceNum(250), new GraceNum(250));
  var var_pointIni = call57;
  lineNumber = 28
  var func58 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func58.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pointIni)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 33
      return var_pointIni
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func58.paramCounts = [
    0,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["pointIni"] = func58;
  func58.definitionLine = 28;
  func58.definitionModule = "snake";
  lineNumber = 28
  var func59 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func59.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pointIni:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      var_pointIni = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func59.paramCounts = [
    1,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["pointIni:="] = func59;
  func59.definitionLine = 28;
  func59.definitionModule = "snake";
  lineNumber = 33;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_pointIni)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'pointIni' to be of type Unknown"))
  lineNumber = 34
  var call60 = callmethod(var_point,"ofX()ofY", [1, 1], new GraceNum(240), new GraceNum(250));
  var var_pointTwo = call60;
  lineNumber = 28
  var func61 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func61.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pointTwo)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 34
      return var_pointTwo
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func61.paramCounts = [
    0,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["pointTwo"] = func61;
  func61.definitionLine = 28;
  func61.definitionModule = "snake";
  lineNumber = 28
  var func62 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func62.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pointTwo:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      var_pointTwo = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func62.paramCounts = [
    1,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["pointTwo:="] = func62;
  func62.definitionLine = 28;
  func62.definitionModule = "snake";
  lineNumber = 34;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_pointTwo)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'pointTwo' to be of type Unknown"))
  lineNumber = 36
  var obj63 = Grace_allocObject();
  obj63.definitionModule = "snake";
  obj63.definitionLine = 36;
  obj63.outer = this;
  var reader_snake_outer_64 = function() {
    return this.outer;
  }
  obj63.methods["outer"] = reader_snake_outer_64;
  function obj_init_63() {
    var origSuperDepth = superDepth;
    superDepth = obj63;
    obj63.annotations = [];
    var func65 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func65.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (movement)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 68
        var if66 = var_done;
        lineNumber = 43
        onSelf = true;
        var call68 = callmethod(this, "elements", [0]);
        var idxres69 = call68.methods["[]"].call(call68, [1], new GraceNum(1));
        var call70 = callmethod(idxres69,"y", [0]);
        var opresult72 = callmethod(call70, "==", [1], new GraceNum(0));
        var call75 = callmethod(var_direction,"keyCode", [0]);
        var opresult77 = callmethod(call75, "==", [1], new GraceNum(38));
        var opresult79 = callmethod(opresult77, "&&", [1], opresult72);
        if (Grace_isTrue(opresult79)) {
          lineNumber = 45
          lineNumber = 43
          lineNumber = 44
          onSelf = true;
          var call80 = callmethod(this, "elements", [0]);
          var idxres81 = call80.methods["[]"].call(call80, [1], new GraceNum(1));
          var call82 = callmethod(idxres81,"y:=", [1], new GraceNum(490));
          if66 = call82;
        } else {
          lineNumber = 47
          var if83 = var_done;
          lineNumber = 45
          onSelf = true;
          var call85 = callmethod(this, "elements", [0]);
          var idxres86 = call85.methods["[]"].call(call85, [1], new GraceNum(1));
          var call87 = callmethod(idxres86,"x", [0]);
          var opresult89 = callmethod(call87, "==", [1], new GraceNum(0));
          var call92 = callmethod(var_direction,"keyCode", [0]);
          var opresult94 = callmethod(call92, "==", [1], new GraceNum(37));
          var opresult96 = callmethod(opresult94, "&&", [1], opresult89);
          if (Grace_isTrue(opresult96)) {
            lineNumber = 47
            lineNumber = 45
            lineNumber = 46
            onSelf = true;
            var call97 = callmethod(this, "elements", [0]);
            var idxres98 = call97.methods["[]"].call(call97, [1], new GraceNum(1));
            var call99 = callmethod(idxres98,"x:=", [1], new GraceNum(490));
            if83 = call99;
          } else {
            lineNumber = 49
            var if100 = var_done;
            lineNumber = 47
            onSelf = true;
            var call102 = callmethod(this, "elements", [0]);
            var idxres103 = call102.methods["[]"].call(call102, [1], new GraceNum(1));
            var call104 = callmethod(idxres103,"y", [0]);
            var opresult106 = callmethod(call104, "==", [1], new GraceNum(490));
            var call109 = callmethod(var_direction,"keyCode", [0]);
            var opresult111 = callmethod(call109, "==", [1], new GraceNum(40));
            var opresult113 = callmethod(opresult111, "&&", [1], opresult106);
            if (Grace_isTrue(opresult113)) {
              lineNumber = 49
              lineNumber = 47
              lineNumber = 48
              onSelf = true;
              var call114 = callmethod(this, "elements", [0]);
              var idxres115 = call114.methods["[]"].call(call114, [1], new GraceNum(1));
              var call116 = callmethod(idxres115,"y:=", [1], new GraceNum(0));
              if100 = call116;
            } else {
              lineNumber = 51
              var if117 = var_done;
              lineNumber = 49
              onSelf = true;
              var call119 = callmethod(this, "elements", [0]);
              var idxres120 = call119.methods["[]"].call(call119, [1], new GraceNum(1));
              var call121 = callmethod(idxres120,"x", [0]);
              var opresult123 = callmethod(call121, "==", [1], new GraceNum(490));
              var call126 = callmethod(var_direction,"keyCode", [0]);
              var opresult128 = callmethod(call126, "==", [1], new GraceNum(39));
              var opresult130 = callmethod(opresult128, "&&", [1], opresult123);
              if (Grace_isTrue(opresult130)) {
                lineNumber = 51
                lineNumber = 49
                lineNumber = 50
                onSelf = true;
                var call131 = callmethod(this, "elements", [0]);
                var idxres132 = call131.methods["[]"].call(call131, [1], new GraceNum(1));
                var call133 = callmethod(idxres132,"x:=", [1], new GraceNum(0));
                if117 = call133;
              } else {
                lineNumber = 53
                lineNumber = 49
                lineNumber = 53
                lineNumber = 52
                var call134 = callmethod(var_direction,"dx", [0]);
                onSelf = true;
                var call136 = callmethod(this, "elements", [0]);
                var idxres137 = call136.methods["[]"].call(call136, [1], new GraceNum(1));
                var call138 = callmethod(idxres137,"x", [0]);
                var opresult140 = callmethod(call138, "+", [1], call134);
                onSelf = true;
                var call141 = callmethod(this, "elements", [0]);
                var idxres142 = call141.methods["[]"].call(call141, [1], new GraceNum(1));
                var call143 = callmethod(idxres142,"x:=", [1], opresult140);
                lineNumber = 55
                lineNumber = 52
                lineNumber = 55
                lineNumber = 53
                var call144 = callmethod(var_direction,"dy", [0]);
                onSelf = true;
                var call146 = callmethod(this, "elements", [0]);
                var idxres147 = call146.methods["[]"].call(call146, [1], new GraceNum(1));
                var call148 = callmethod(idxres147,"y", [0]);
                var opresult150 = callmethod(call148, "+", [1], call144);
                onSelf = true;
                var call151 = callmethod(this, "elements", [0]);
                var idxres152 = call151.methods["[]"].call(call151, [1], new GraceNum(1));
                var call153 = callmethod(idxres152,"y:=", [1], opresult150);
                lineNumber = 55
                onSelf = true;
                var call154 = callmethod(this, "elements", [0]);
                var call155 = callmethod(call154,"size", [0]);
                var opresult158 = callmethod(new GraceNum(2), "..", [1], call155);
                lineNumber = 61
                var block159 = Grace_allocObject();
                block159.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block159.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block159.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block159.methods["match"] = GraceBlock_match;
                block159.methods["prefix?"] = GraceBlock_lift;
                block159.receiver = this;
                block159.className = 'block<snake:61>';
                block159.real = function(
                  var_i
                ) {
                  sourceObject = this;
                  lineNumber = 59
                  var if160 = var_done;
                  lineNumber = 56
                  onSelf = true;
                  var call161 = callmethod(this, "elements", [0]);
                  var idxres162 = call161.methods["[]"].call(call161, [1], var_i);
                  var call163 = callmethod(idxres162,"y", [0]);
                  onSelf = true;
                  var call165 = callmethod(this, "elements", [0]);
                  var idxres166 = call165.methods["[]"].call(call165, [1], new GraceNum(1));
                  var call167 = callmethod(idxres166,"y", [0]);
                  var opresult169 = callmethod(call167, "==", [1], call163);
                  onSelf = true;
                  var call171 = callmethod(this, "elements", [0]);
                  var idxres172 = call171.methods["[]"].call(call171, [1], var_i);
                  var call173 = callmethod(idxres172,"x", [0]);
                  onSelf = true;
                  var call175 = callmethod(this, "elements", [0]);
                  var idxres176 = call175.methods["[]"].call(call175, [1], new GraceNum(1));
                  var call177 = callmethod(idxres176,"x", [0]);
                  var opresult179 = callmethod(call177, "==", [1], call173);
                  var opresult181 = callmethod(opresult179, "&&", [1], opresult169);
                  if (Grace_isTrue(opresult181)) {
                    lineNumber = 58
                    lineNumber = 56
                    lineNumber = 57
                    var bool182 = new GraceBoolean(false)
                    var call183 = callmethod(var_game,"live:=", [1], bool182);
                    if160 = call183;
                  }
                  return if160;
                };
                var call184 = callmethod(Grace_prelude,"for()do", [1, 1], opresult158, block159);
                lineNumber = 67
                var if185 = var_done;
                lineNumber = 61
                var call186 = callmethod(var_apple,"y", [0]);
                onSelf = true;
                var call188 = callmethod(this, "elements", [0]);
                var idxres189 = call188.methods["[]"].call(call188, [1], new GraceNum(1));
                var call190 = callmethod(idxres189,"y", [0]);
                var opresult192 = callmethod(call190, "==", [1], call186);
                var call194 = callmethod(var_apple,"x", [0]);
                onSelf = true;
                var call196 = callmethod(this, "elements", [0]);
                var idxres197 = call196.methods["[]"].call(call196, [1], new GraceNum(1));
                var call198 = callmethod(idxres197,"x", [0]);
                var opresult200 = callmethod(call198, "==", [1], call194);
                var opresult202 = callmethod(opresult200, "&&", [1], opresult192);
                if (Grace_isTrue(opresult202)) {
                  lineNumber = 62
                  var call203 = callmethod(var_apple,"appears", [0]);
                  lineNumber = 63
                  var call204 = callmethod(var_direction,"dx", [0]);
                  onSelf = true;
                  var call206 = callmethod(this, "elements", [0]);
                  onSelf = true;
                  var call207 = callmethod(this, "elements", [0]);
                  var call208 = callmethod(call207,"size", [0]);
                  var idxres209 = call206.methods["[]"].call(call206, [1], call208);
                  var call210 = callmethod(idxres209,"x", [0]);
                  var opresult212 = callmethod(call210, "+", [1], call204);
                  var call213 = callmethod(var_direction,"dy", [0]);
                  onSelf = true;
                  var call215 = callmethod(this, "elements", [0]);
                  onSelf = true;
                  var call216 = callmethod(this, "elements", [0]);
                  var call217 = callmethod(call216,"size", [0]);
                  var idxres218 = call215.methods["[]"].call(call215, [1], call217);
                  var call219 = callmethod(idxres218,"y", [0]);
                  var opresult221 = callmethod(call219, "+", [1], call213);
                  var call222 = callmethod(var_point,"ofX()ofY", [1, 1], opresult212, opresult221);
                  var var_newPoint = call222;
                  lineNumber = 63;
                  moduleName = "snake";
                  if (!Grace_isTrue(callmethod(var_Unknown, "match",
                    [1], var_newPoint)))
                      throw new GraceExceptionPacket(TypeErrorObject,
                            new GraceString("expected "
                            + "initial value of var 'newPoint' to be of type Unknown"))
                  lineNumber = 64
                  onSelf = true;
                  var call223 = callmethod(this, "elements", [0]);
                  var call224 = callmethod(call223,"push", [1], var_newPoint);
                  lineNumber = 66
                  lineNumber = 63
                  lineNumber = 66
                  lineNumber = 65
                  var call226 = callmethod(var_game,"score", [0]);
                  var opresult228 = callmethod(call226, "+", [1], new GraceNum(1));
                  var call229 = callmethod(var_game,"score:=", [1], opresult228);
                  if185 = call229;
                }
                if117 = if185;
              }
              if100 = if117;
            }
            if83 = if100;
          }
          if66 = if83;
        }
        lineNumber = 68
        onSelf = true;
        var call230 = callmethod(this, "elements", [0]);
        var call231 = callmethod(call230,"size", [0]);
        var opresult234 = callmethod(new GraceNum(2), "..", [1], call231);
        lineNumber = 72
        var block235 = Grace_allocObject();
        block235.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block235.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block235.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block235.methods["match"] = GraceBlock_match;
        block235.methods["prefix?"] = GraceBlock_lift;
        block235.receiver = this;
        block235.className = 'block<snake:72>';
        block235.real = function(
          var_i
        ) {
          sourceObject = this;
          lineNumber = 70
          lineNumber = 68
          lineNumber = 69
          onSelf = true;
          var call236 = callmethod(this, "elements", [0]);
          onSelf = true;
          var call239 = callmethod(this, "elements", [0]);
          var call240 = callmethod(call239,"size", [0]);
          var opresult242 = callmethod(call240, "+", [1], new GraceNum(1));
          var diff244 = callmethod(opresult242, "-", [1], var_i);
          var idxres245 = call236.methods["[]"].call(call236, [1], diff244);
          var call246 = callmethod(idxres245,"x", [0]);
          onSelf = true;
          var call247 = callmethod(this, "elements", [0]);
          onSelf = true;
          var call250 = callmethod(this, "elements", [0]);
          var call251 = callmethod(call250,"size", [0]);
          var opresult253 = callmethod(call251, "+", [1], new GraceNum(2));
          var diff255 = callmethod(opresult253, "-", [1], var_i);
          var idxres256 = call247.methods["[]"].call(call247, [1], diff255);
          var call257 = callmethod(idxres256,"x:=", [1], call246);
          lineNumber = 71
          lineNumber = 69
          lineNumber = 70
          onSelf = true;
          var call258 = callmethod(this, "elements", [0]);
          onSelf = true;
          var call261 = callmethod(this, "elements", [0]);
          var call262 = callmethod(call261,"size", [0]);
          var opresult264 = callmethod(call262, "+", [1], new GraceNum(1));
          var diff266 = callmethod(opresult264, "-", [1], var_i);
          var idxres267 = call258.methods["[]"].call(call258, [1], diff266);
          var call268 = callmethod(idxres267,"y", [0]);
          onSelf = true;
          var call269 = callmethod(this, "elements", [0]);
          onSelf = true;
          var call272 = callmethod(this, "elements", [0]);
          var call273 = callmethod(call272,"size", [0]);
          var opresult275 = callmethod(call273, "+", [1], new GraceNum(2));
          var diff277 = callmethod(opresult275, "-", [1], var_i);
          var idxres278 = call269.methods["[]"].call(call269, [1], diff277);
          var call279 = callmethod(idxres278,"y:=", [1], call268);
          return call279;
        };
        var call280 = callmethod(Grace_prelude,"for()do", [1, 1], opresult234, block235);
        return call280
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func65.paramCounts = [
      0,
    ];
    func65.variableArities = [
      false,
    ];
    obj63.methods["movement"] = func65;
    func65.definitionLine = 42;
    func65.definitionModule = "snake";
    var func281 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func281.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 76
        lineNumber = 70
        lineNumber = 75
        var string282 = new GraceString("black");
        var call283 = callmethod(var_ctx,"fillStyle:=", [1], string282);
        lineNumber = 76
        onSelf = true;
        var call284 = callmethod(this, "elements", [0]);
        var call285 = callmethod(call284,"size", [0]);
        var opresult288 = callmethod(new GraceNum(1), "..", [1], call285);
        lineNumber = 79
        var block289 = Grace_allocObject();
        block289.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block289.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block289.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block289.methods["match"] = GraceBlock_match;
        block289.methods["prefix?"] = GraceBlock_lift;
        block289.receiver = this;
        block289.className = 'block<snake:79>';
        block289.real = function(
          var_i
        ) {
          sourceObject = this;
          lineNumber = 77
          onSelf = true;
          var call290 = callmethod(this, "elements", [0]);
          var idxres291 = call290.methods["[]"].call(call290, [1], var_i);
          var call292 = callmethod(idxres291,"x", [0]);
          onSelf = true;
          var call293 = callmethod(this, "elements", [0]);
          var idxres294 = call293.methods["[]"].call(call293, [1], var_i);
          var call295 = callmethod(idxres294,"y", [0]);
          var call296 = callmethod(var_ctx,"fillRect", [4], call292, call295, new GraceNum(10), new GraceNum(10));
          return call296;
        };
        var call297 = callmethod(Grace_prelude,"for()do", [1, 1], opresult288, block289);
        return call297
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func281.paramCounts = [
      0,
    ];
    func281.variableArities = [
      false,
    ];
    obj63.methods["draw"] = func281;
    func281.definitionLine = 74;
    func281.definitionModule = "snake";
    sourceObject = obj63;
    lineNumber = 37
    obj63.data["size"] = new GraceNum(3);
    var reader_snake_size_298 = function() {
      return this.data["size"];
    }
    obj63.methods["size"] = reader_snake_size_298;
    obj63.data["size"] = new GraceNum(3);
    var writer_snake_size_298 = function(argcv, o) {
      this.data["size"] = o;
    }
    obj63.methods["size:="] = writer_snake_size_298;
    reader_snake_size_298.confidential = true;
    writer_snake_size_298.confidential = true;
    lineNumber = 38;
    moduleName = "snake";
    lineNumber = 37
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(3))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'size' to be of type Unknown"))
    obj63.mutable = true;
    sourceObject = obj63;
    lineNumber = 38
    var array299 = new GraceList([
    ]);

    obj63.data["elements"] = array299;
    var reader_snake_elements_300 = function() {
      return this.data["elements"];
    }
    obj63.methods["elements"] = reader_snake_elements_300;
    obj63.data["elements"] = array299;
    var writer_snake_elements_300 = function(argcv, o) {
      this.data["elements"] = o;
    }
    obj63.methods["elements:="] = writer_snake_elements_300;
    writer_snake_elements_300.confidential = true;
    lineNumber = 39;
    moduleName = "snake";
    lineNumber = 38
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], array299)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'elements' to be of type Unknown"))
    obj63.mutable = true;
    sourceObject = obj63;
    lineNumber = 39
    onSelf = true;
    var call301 = callmethod(this, "elements", [0]);
    var call302 = callmethod(call301,"push", [1], var_pointIni);
    sourceObject = obj63;
    lineNumber = 40
    onSelf = true;
    var call303 = callmethod(this, "elements", [0]);
    var call304 = callmethod(call303,"push", [1], var_pointTwo);
    sourceObject = obj63;
    sourceObject = obj63;
    superDepth = origSuperDepth;
  }
  obj_init_63.apply(obj63, []);
  var var_snake = obj63;
  lineNumber = 77
  var func305 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func305.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (snake)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 36
      return var_snake
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func305.paramCounts = [
    0,
  ];
  func305.variableArities = [
    false,
  ];
  this.methods["snake"] = func305;
  func305.definitionLine = 77;
  func305.definitionModule = "snake";
  lineNumber = 36;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_snake)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'snake' to be of type Unknown"))
  lineNumber = 82
  var obj306 = Grace_allocObject();
  obj306.definitionModule = "snake";
  obj306.definitionLine = 82;
  obj306.outer = this;
  var reader_snake_outer_307 = function() {
    return this.outer;
  }
  obj306.methods["outer"] = reader_snake_outer_307;
  function obj_init_306() {
    var origSuperDepth = superDepth;
    superDepth = obj306;
    obj306.annotations = [];
    var func308 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func308.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (appears)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 88
        lineNumber = 77
        lineNumber = 88
        lineNumber = 87
        var call310 = callmethod(var_math,"random", [0]);
        var prod312 = callmethod(call310, "*", [1], new GraceNum(50));
        onSelf = true;
        var call313 = callmethod(this, "x:=", [1], prod312);
        lineNumber = 89
        lineNumber = 87
        lineNumber = 89
        lineNumber = 88
        onSelf = true;
        var call315 = callmethod(this, "x", [0]);
        var modulus317 = callmethod(call315, "%", [1], new GraceNum(1));
        onSelf = true;
        var call319 = callmethod(this, "x", [0]);
        var diff321 = callmethod(call319, "-", [1], modulus317);
        onSelf = true;
        var call322 = callmethod(this, "x:=", [1], diff321);
        lineNumber = 90
        lineNumber = 87
        lineNumber = 90
        lineNumber = 89
        onSelf = true;
        var call324 = callmethod(this, "x", [0]);
        var prod326 = callmethod(call324, "*", [1], new GraceNum(10));
        onSelf = true;
        var call327 = callmethod(this, "x:=", [1], prod326);
        lineNumber = 90
        var string328 = new GraceString("");
        onSelf = true;
        var call330 = callmethod(this, "x", [0]);
        var string332 = new GraceString("x is now ");
        var opresult334 = callmethod(string332, "++", [1], call330);
        var opresult336 = callmethod(opresult334, "++", [1], string328);
        var call337 = Grace_print(opresult336);
        lineNumber = 93
        lineNumber = 87
        lineNumber = 93
        lineNumber = 92
        var call339 = callmethod(var_math,"random", [0]);
        var prod341 = callmethod(call339, "*", [1], new GraceNum(50));
        onSelf = true;
        var call342 = callmethod(this, "y:=", [1], prod341);
        lineNumber = 94
        lineNumber = 92
        lineNumber = 94
        lineNumber = 93
        onSelf = true;
        var call344 = callmethod(this, "y", [0]);
        var modulus346 = callmethod(call344, "%", [1], new GraceNum(1));
        onSelf = true;
        var call348 = callmethod(this, "y", [0]);
        var diff350 = callmethod(call348, "-", [1], modulus346);
        onSelf = true;
        var call351 = callmethod(this, "y:=", [1], diff350);
        lineNumber = 95
        lineNumber = 92
        lineNumber = 95
        lineNumber = 94
        onSelf = true;
        var call353 = callmethod(this, "y", [0]);
        var prod355 = callmethod(call353, "*", [1], new GraceNum(10));
        onSelf = true;
        var call356 = callmethod(this, "y:=", [1], prod355);
        lineNumber = 95
        var string357 = new GraceString("");
        onSelf = true;
        var call359 = callmethod(this, "y", [0]);
        var string361 = new GraceString("y is now ");
        var opresult363 = callmethod(string361, "++", [1], call359);
        var opresult365 = callmethod(opresult363, "++", [1], string357);
        var call366 = Grace_print(opresult365);
        return call366
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func308.paramCounts = [
      0,
    ];
    func308.variableArities = [
      false,
    ];
    obj306.methods["appears"] = func308;
    func308.definitionLine = 86;
    func308.definitionModule = "snake";
    var func367 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func367.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 100
        lineNumber = 92
        lineNumber = 99
        var string368 = new GraceString("red");
        var call369 = callmethod(var_ctx,"fillStyle:=", [1], string368);
        lineNumber = 100
        onSelf = true;
        var call370 = callmethod(this, "x", [0]);
        onSelf = true;
        var call371 = callmethod(this, "y", [0]);
        var call372 = callmethod(var_ctx,"fillRect", [4], call370, call371, new GraceNum(10), new GraceNum(10));
        return call372
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func367.paramCounts = [
      0,
    ];
    func367.variableArities = [
      false,
    ];
    obj306.methods["draw"] = func367;
    func367.definitionLine = 98;
    func367.definitionModule = "snake";
    sourceObject = obj306;
    obj306.data["x"] = undefined;
    var reader_snake_x_373 = function() {
      return this.data["x"];
    }
    obj306.methods["x"] = reader_snake_x_373;
    obj306.data["x"] = undefined;
    var writer_snake_x_373 = function(argcv, o) {
      this.data["x"] = o;
    }
    obj306.methods["x:="] = writer_snake_x_373;
    obj306.mutable = true;
    sourceObject = obj306;
    obj306.data["y"] = undefined;
    var reader_snake_y_374 = function() {
      return this.data["y"];
    }
    obj306.methods["y"] = reader_snake_y_374;
    obj306.data["y"] = undefined;
    var writer_snake_y_374 = function(argcv, o) {
      this.data["y"] = o;
    }
    obj306.methods["y:="] = writer_snake_y_374;
    obj306.mutable = true;
    sourceObject = obj306;
    sourceObject = obj306;
    superDepth = origSuperDepth;
  }
  obj_init_306.apply(obj306, []);
  var var_apple = obj306;
  lineNumber = 92
  var func375 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func375.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (apple)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 82
      return var_apple
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func375.paramCounts = [
    0,
  ];
  func375.variableArities = [
    false,
  ];
  this.methods["apple"] = func375;
  func375.definitionLine = 92;
  func375.definitionModule = "snake";
  lineNumber = 82;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_apple)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'apple' to be of type Unknown"))
  lineNumber = 104
  var obj376 = Grace_allocObject();
  obj376.definitionModule = "snake";
  obj376.definitionLine = 104;
  obj376.outer = this;
  var reader_snake_outer_377 = function() {
    return this.outer;
  }
  obj376.methods["outer"] = reader_snake_outer_377;
  function obj_init_376() {
    var origSuperDepth = superDepth;
    superDepth = obj376;
    obj376.annotations = [];
    var func378 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func378.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (updateKeyCode)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 116
        var if379 = var_done;
        lineNumber = 112
        onSelf = true;
        var call381 = callmethod(this, "keyCode", [0]);
        onSelf = true;
        var call383 = callmethod(this, "keyCodeTemp", [0]);
        var diff385 = callmethod(call383, "-", [1], call381);
        var opresult387 = callmethod(diff385, "!=", [1], new GraceNum(2));
        var call389 = callmethod(new GraceNum(2),"prefix-", [0]);
        onSelf = true;
        var call391 = callmethod(this, "keyCode", [0]);
        onSelf = true;
        var call393 = callmethod(this, "keyCodeTemp", [0]);
        var diff395 = callmethod(call393, "-", [1], call391);
        var opresult397 = callmethod(diff395, "!=", [1], call389);
        var opresult399 = callmethod(opresult397, "&&", [1], opresult387);
        if (Grace_isTrue(opresult399)) {
          lineNumber = 115
          lineNumber = 92
          lineNumber = 114
          onSelf = true;
          var call400 = callmethod(this, "keyCodeTemp", [0]);
          onSelf = true;
          var call401 = callmethod(this, "keyCode:=", [1], call400);
          if379 = call401;
        }
        return if379
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func378.paramCounts = [
      0,
    ];
    func378.variableArities = [
      false,
    ];
    obj376.methods["updateKeyCode"] = func378;
    func378.definitionLine = 111;
    func378.definitionModule = "snake";
    var func402 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func402.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (updateMove)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "snake";
      try {
        lineNumber = 120
        onSelf = true;
        var call403 = callmethod(this, "updateKeyCode", [0]);
        lineNumber = 135
        var if404 = var_done;
        lineNumber = 122
        onSelf = true;
        var call406 = callmethod(this, "keyCode", [0]);
        var opresult408 = callmethod(call406, "==", [1], new GraceNum(38));
        if (Grace_isTrue(opresult408)) {
          lineNumber = 124
          lineNumber = 92
          lineNumber = 123
          onSelf = true;
          var call409 = callmethod(this, "dx:=", [1], new GraceNum(0));
          lineNumber = 125
          lineNumber = 92
          lineNumber = 125
          lineNumber = 124
          var call410 = callmethod(new GraceNum(10),"prefix-", [0]);
          onSelf = true;
          var call411 = callmethod(this, "dy:=", [1], call410);
          if404 = call411;
        } else {
          lineNumber = 128
          var if412 = var_done;
          lineNumber = 125
          onSelf = true;
          var call414 = callmethod(this, "keyCode", [0]);
          var opresult416 = callmethod(call414, "==", [1], new GraceNum(37));
          if (Grace_isTrue(opresult416)) {
            lineNumber = 127
            lineNumber = 92
            lineNumber = 127
            lineNumber = 126
            var call417 = callmethod(new GraceNum(10),"prefix-", [0]);
            onSelf = true;
            var call418 = callmethod(this, "dx:=", [1], call417);
            lineNumber = 128
            lineNumber = 92
            lineNumber = 127
            onSelf = true;
            var call419 = callmethod(this, "dy:=", [1], new GraceNum(0));
            if412 = call419;
          } else {
            lineNumber = 131
            var if420 = var_done;
            lineNumber = 128
            onSelf = true;
            var call422 = callmethod(this, "keyCode", [0]);
            var opresult424 = callmethod(call422, "==", [1], new GraceNum(40));
            if (Grace_isTrue(opresult424)) {
              lineNumber = 130
              lineNumber = 92
              lineNumber = 129
              onSelf = true;
              var call425 = callmethod(this, "dx:=", [1], new GraceNum(0));
              lineNumber = 131
              lineNumber = 92
              lineNumber = 130
              onSelf = true;
              var call426 = callmethod(this, "dy:=", [1], new GraceNum(10));
              if420 = call426;
            } else {
              lineNumber = 135
              var if427 = var_done;
              lineNumber = 131
              onSelf = true;
              var call429 = callmethod(this, "keyCode", [0]);
              var opresult431 = callmethod(call429, "==", [1], new GraceNum(39));
              if (Grace_isTrue(opresult431)) {
                lineNumber = 133
                lineNumber = 92
                lineNumber = 132
                onSelf = true;
                var call432 = callmethod(this, "dx:=", [1], new GraceNum(10));
                lineNumber = 134
                lineNumber = 92
                lineNumber = 133
                onSelf = true;
                var call433 = callmethod(this, "dy:=", [1], new GraceNum(0));
                if427 = call433;
              }
              if420 = if427;
            }
            if412 = if420;
          }
          if404 = if412;
        }
        return if404
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func402.paramCounts = [
      0,
    ];
    func402.variableArities = [
      false,
    ];
    obj376.methods["updateMove"] = func402;
    func402.definitionLine = 118;
    func402.definitionModule = "snake";
    sourceObject = obj376;
    lineNumber = 105
    obj376.data["keyCode"] = new GraceNum(40);
    var reader_snake_keyCode_434 = function() {
      return this.data["keyCode"];
    }
    obj376.methods["keyCode"] = reader_snake_keyCode_434;
    obj376.data["keyCode"] = new GraceNum(40);
    var writer_snake_keyCode_434 = function(argcv, o) {
      this.data["keyCode"] = o;
    }
    obj376.methods["keyCode:="] = writer_snake_keyCode_434;
    lineNumber = 106;
    moduleName = "snake";
    lineNumber = 105
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(40))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'keyCode' to be of type Unknown"))
    obj376.mutable = true;
    sourceObject = obj376;
    lineNumber = 106
    obj376.data["keyCodeTemp"] = new GraceNum(40);
    var reader_snake_keyCodeTemp_435 = function() {
      return this.data["keyCodeTemp"];
    }
    obj376.methods["keyCodeTemp"] = reader_snake_keyCodeTemp_435;
    obj376.data["keyCodeTemp"] = new GraceNum(40);
    var writer_snake_keyCodeTemp_435 = function(argcv, o) {
      this.data["keyCodeTemp"] = o;
    }
    obj376.methods["keyCodeTemp:="] = writer_snake_keyCodeTemp_435;
    lineNumber = 108;
    moduleName = "snake";
    lineNumber = 106
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(40))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'keyCodeTemp' to be of type Unknown"))
    obj376.mutable = true;
    sourceObject = obj376;
    lineNumber = 109
    lineNumber = 108
    var call436 = callmethod(new GraceNum(10),"prefix-", [0]);
    obj376.data["dx"] = call436;
    var reader_snake_dx_437 = function() {
      return this.data["dx"];
    }
    obj376.methods["dx"] = reader_snake_dx_437;
    obj376.data["dx"] = call436;
    var writer_snake_dx_437 = function(argcv, o) {
      this.data["dx"] = o;
    }
    obj376.methods["dx:="] = writer_snake_dx_437;
    writer_snake_dx_437.confidential = true;
    lineNumber = 109;
    moduleName = "snake";
    lineNumber = 108
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call436)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'dx' to be of type Unknown"))
    obj376.mutable = true;
    sourceObject = obj376;
    lineNumber = 109
    obj376.data["dy"] = new GraceNum(0);
    var reader_snake_dy_438 = function() {
      return this.data["dy"];
    }
    obj376.methods["dy"] = reader_snake_dy_438;
    obj376.data["dy"] = new GraceNum(0);
    var writer_snake_dy_438 = function(argcv, o) {
      this.data["dy"] = o;
    }
    obj376.methods["dy:="] = writer_snake_dy_438;
    writer_snake_dy_438.confidential = true;
    lineNumber = 111;
    moduleName = "snake";
    lineNumber = 109
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(0))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'dy' to be of type Unknown"))
    obj376.mutable = true;
    sourceObject = obj376;
    sourceObject = obj376;
    superDepth = origSuperDepth;
  }
  obj_init_376.apply(obj376, []);
  var var_direction = obj376;
  lineNumber = 92
  var func439 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func439.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (direction)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      lineNumber = 104
      return var_direction
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func439.paramCounts = [
    0,
  ];
  func439.variableArities = [
    false,
  ];
  this.methods["direction"] = func439;
  func439.definitionLine = 92;
  func439.definitionModule = "snake";
  lineNumber = 104;
  moduleName = "snake";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_direction)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'direction' to be of type Unknown"))
  lineNumber = 141
  var block440 = Grace_allocObject();
  block440.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block440.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block440.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block440.methods["match"] = GraceBlock_match;
  block440.methods["prefix?"] = GraceBlock_lift;
  block440.receiver = this;
  block440.className = 'block<snake:141>';
  block440.real = function(
    var_ev
  ) {
    sourceObject = this;
    lineNumber = 140
    lineNumber = 92
    lineNumber = 140
    var call441 = callmethod(var_ev,"keyCode", [0]);
    var call442 = callmethod(var_direction,"keyCodeTemp:=", [1], call441);
    return call442;
  };
  var var_keyboardListener = block440;
  var func443 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func443.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyboardListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "snake";
    try {
      return var_keyboardListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func443.paramCounts = [
    0,
  ];
  func443.variableArities = [
    false,
  ];
  this.methods["keyboardListener"] = func443;
  func443.definitionLine = 140;
  func443.definitionModule = "snake";
  lineNumber = 141;
  moduleName = "snake";
  lineNumber = 140
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_keyboardListener)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'keyboardListener' to be of type Unknown"))
  lineNumber = 141
  var string444 = new GraceString("keydown");
  var bool445 = new GraceBoolean(true)
  var call446 = callmethod(var_document,"addEventListener", [3], string444, var_keyboardListener, bool445);
  lineNumber = 146
  var call447 = callmethod(var_apple,"appears", [0]);
  lineNumber = 148
  lineNumber = 157
  lineNumber = 162
  var block448 = Grace_allocObject();
  block448.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block448.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block448.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block448.methods["match"] = GraceBlock_match;
  block448.methods["prefix?"] = GraceBlock_lift;
  block448.receiver = this;
  block448.className = 'block<snake:162>';
  block448.real = function(
  ) {
    sourceObject = this;
    lineNumber = 159
    lineNumber = 146
    lineNumber = 158
    var string449 = new GraceString("50px sans-serif");
    var call450 = callmethod(var_ctx,"font:=", [1], string449);
    lineNumber = 160
    lineNumber = 146
    lineNumber = 159
    var string451 = new GraceString("center");
    var call452 = callmethod(var_ctx,"textAlign:=", [1], string451);
    lineNumber = 161
    lineNumber = 146
    lineNumber = 160
    var string453 = new GraceString("middle");
    var call454 = callmethod(var_ctx,"textBaseline:=", [1], string453);
    lineNumber = 161
    var string455 = new GraceString("");
    var call457 = callmethod(var_game,"score", [0]);
    var string459 = new GraceString("Score : ");
    var opresult461 = callmethod(string459, "++", [1], call457);
    var opresult463 = callmethod(opresult461, "++", [1], string455);
    var call464 = callmethod(var_ctx,"fillText", [3], opresult463, new GraceNum(250), new GraceNum(125));
    return call464;
  };
  lineNumber = 148
  var block465 = Grace_allocObject();
  block465.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block465.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block465.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block465.methods["match"] = GraceBlock_match;
  block465.methods["prefix?"] = GraceBlock_lift;
  block465.receiver = this;
  block465.className = 'block<snake:148>';
  block465.real = function(
  ) {
    sourceObject = this;
    var call466 = callmethod(var_game,"live", [0]);
    return call466;
  };
  lineNumber = 157
  var block467 = Grace_allocObject();
  block467.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block467.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block467.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block467.methods["match"] = GraceBlock_match;
  block467.methods["prefix?"] = GraceBlock_lift;
  block467.receiver = this;
  block467.className = 'block<snake:157>';
  block467.real = function(
  ) {
    sourceObject = this;
    lineNumber = 150
    var call468 = callmethod(var_direction,"updateMove", [0]);
    lineNumber = 151
    var call469 = callmethod(var_snake,"movement", [0]);
    lineNumber = 154
    lineNumber = 151
    lineNumber = 153
    var string470 = new GraceString("white");
    var call471 = callmethod(var_ctx,"fillStyle:=", [1], string470);
    lineNumber = 154
    var call472 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
    lineNumber = 155
    var call473 = callmethod(var_snake,"draw", [0]);
    lineNumber = 156
    var call474 = callmethod(var_apple,"draw", [0]);
    return call474;
  };
  lineNumber = 148
  var call475 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block465, new GraceNum(42), block467);
  var call476 = callmethod(call475,"then", [1], block448);
  return this;
}
gracecode_snake.imports = [
'dom',
'math',
];
if (gctCache)
  gctCache['snake'] = "methods-of:point.ofX()ofY:\n y:=\n x:=\n x\n y\nfresh-methods:\nmodules:\npublic:\n document\n ts\n canvas\n ctx\n game\n point\n pointIni\n pointIni:=\n pointTwo\n pointTwo:=\n snake\n apple\n direction\n keyboardListener\npath:\n snake\nclasses:\n point\nconstructors-of:point:\n ofX()ofY\nconfidential:\n";
if (originalSourceLines) {
  originalSourceLines["snake"] = [
    "// Snake by Tom Dupisre",
    "import \"dom\" as dom",
    "import \"math\" as math",
    "",
    "",
    "def document = dom.document",
    "",
    "// Activate the canvas tab if it isn't already",
    "def ts = document.getElementById(\"output-select\")",
    "for (0..(ts.options.length-1)) do { i ->",
    "    if (ts.options.item(i).value == \"canvas\") then {",
    "        ts.selectedIndex := i",
    "        dom.window.outputswitch",
    "    }",
    "}",
    "",
    "def canvas = dom.document.getElementById(\"standard-canvas\")",
    "def ctx = canvas.getContext(\"2d\")",
    "",
    "ctx.fillStyle := \"white\"",
    "ctx.fillRect(0, 0, 500, 500)",
    "",
    "def game = object {",
    "    var live is readable, writable := true",
    "    var score is readable, writable := 1",
    "}",
    "",
    "class point.ofX ( xp : Number) ofY ( yp : Number) {",
    "    var x is readable, writable := xp",
    "    var y is readable, writable := yp",
    "}",
    "",
    "var pointIni := point.ofX 250 ofY 250",
    "var pointTwo := point.ofX 240 ofY 250",
    "",
    "def snake = object {",
    "    var size := 3",
    "    var elements is readable := []",
    "    elements.push(pointIni)",
    "    elements.push(pointTwo)",
    "",
    "    method movement {",
    "        if ((direction.keyCode == 38) && (elements[1].y == 0)) then {",
    "            elements[1].y := 490",
    "        } elseif {(direction.keyCode == 37) && (elements[1].x == 0)} then {",
    "            elements[1].x := 490",
    "        } elseif {(direction.keyCode == 40) && (elements[1].y == 490)} then {",
    "            elements[1].y := 0",
    "        } elseif {(direction.keyCode == 39) && (elements[1].x == 490)} then {",
    "            elements[1].x := 0",
    "        } else {",
    "            elements[1].x := elements[1].x + direction.dx",
    "            elements[1].y := elements[1].y + direction.dy",
    "            // In case we eat our tail",
    "            for (2..elements.size) do { i ->",
    "                if ((elements[1].x == elements[i].x) && (elements[1].y == elements[i].y)) then {",
    "                    game.live := false",
    "                }",
    "            }",
    "            // In case we catch an apple",
    "            if ((elements[1].x == apple.x) && (elements[1].y == apple.y)) then {",
    "                 apple.appears",
    "                 var newPoint := point.ofX (elements[elements.size].x + direction.dx) ofY (elements[elements.size].y + direction.dy)",
    "                 elements.push(newPoint)",
    "                 game.score := game.score + 1",
    "            }",
    "        }",
    "        for (2..elements.size) do { i ->",
    "            elements[elements.size+2-i].x := elements[elements.size+1-i].x",
    "            elements[elements.size+2-i].y := elements[elements.size+1-i].y",
    "        }",
    "    }",
    "",
    "    method draw {",
    "        ctx.fillStyle := \"black\"",
    "        for (1..elements.size) do { i ->",
    "            ctx.fillRect(elements[i].x, elements[i].y , 10, 10)",
    "        }",
    "    }",
    "}",
    "",
    "def apple = object {",
    "    var x is readable, writable",
    "    var y is readable, writable",
    "",
    "    method appears {",
    "        x := math.random * 50",
    "        x := x - (x % 1)",
    "        x := x * 10",
    "        print(\"x is now {x}\")",
    "",
    "        y := math.random * 50",
    "        y := y - (y % 1)",
    "        y := y * 10",
    "        print(\"y is now {y}\")",
    "    }",
    "",
    "    method draw {",
    "        ctx.fillStyle := \"red\"",
    "        ctx.fillRect(x, y , 10, 10)",
    "    }",
    "}",
    "",
    "def direction = object {",
    "    var keyCode is readable, writable := 40",
    "    var keyCodeTemp is readable, writable := 40",
    "",
    "    var dx is readable := -10",
    "    var dy is readable := 0",
    "",
    "    method updateKeyCode {",
    "        if (((keyCodeTemp - keyCode) != -2) && ((keyCodeTemp - keyCode) != 2))",
    "            then {",
    "                keyCode := keyCodeTemp",
    "            }",
    "    }",
    "",
    "    method updateMove {",
    "",
    "        updateKeyCode",
    "",
    "        if (keyCode == 38) then {",
    "            dx :=  0",
    "            dy := -10",
    "        } elseif {keyCode == 37} then {",
    "            dx :=  -10",
    "            dy := 0",
    "        } elseif {keyCode == 40} then {",
    "            dx :=  0",
    "            dy := 10",
    "        } elseif {keyCode == 39} then {",
    "            dx :=  10",
    "            dy := 0",
    "        }",
    "    }",
    "}",
    "",
    "",
    "",
    "def keyboardListener = { ev -> direction.keyCodeTemp := ev.keyCode }",
    "document.addEventListener(\"keydown\", keyboardListener, true)",
    "",
    "",
    "",
    "// We initialize the apple :",
    "apple.appears",
    "",
    "dom.while {game.live} waiting 42 do {",
    "",
    "    direction.updateMove",
    "    snake.movement",
    "",
    "    ctx.fillStyle := \"white\"",
    "    ctx.fillRect(0, 0, 500, 500)",
    "    snake.draw",
    "    apple.draw",
    "}.then { // When the while loop terminates, run this block.",
    "    ctx.font := \"50px sans-serif\"",
    "    ctx.textAlign := \"center\"",
    "    ctx.textBaseline := \"middle\"",
    "    ctx.fillText(\"Score : {game.score}\", 250, 125)",
    "    }",
  ];
}
