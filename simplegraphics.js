function gracecode_simplegraphics () {
  this.definitionModule = "simplegraphics";
  this.definitionLine = 0;
  lineNumber = 36
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 38
      lineNumber = 37
      var call1 = callmethod(var_dom,"document", [0]);
      var_document = call1;
      lineNumber = 38
      var string2 = new GraceString("output-select");
      var call3 = callmethod(var_document,"getElementById", [1], string2);
      var var_ts = call3;
      lineNumber = 38;
      moduleName = "simplegraphics";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ts)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ts' to be of type Unknown"))
      lineNumber = 39
      var call5 = callmethod(var_ts,"options", [0]);
      var call6 = callmethod(call5,"length", [0]);
      var diff8 = callmethod(call6, "-", [1], new GraceNum(1));
      var opresult11 = callmethod(new GraceNum(0), "..", [1], diff8);
      lineNumber = 45
      var block12 = Grace_allocObject();
      block12.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block12.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block12.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block12.methods["match"] = GraceBlock_match;
      block12.methods["prefix?"] = GraceBlock_lift;
      block12.receiver = this;
      block12.className = 'block<simplegraphics:45>';
      block12.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 44
        var if13 = var_done;
        lineNumber = 40
        var string14 = new GraceString("canvas");
        var call16 = callmethod(var_ts,"options", [0]);
        var call17 = callmethod(call16,"item", [1], var_i);
        var call18 = callmethod(call17,"value", [0]);
        var opresult20 = callmethod(call18, "==", [1], string14);
        if (Grace_isTrue(opresult20)) {
          lineNumber = 42
          lineNumber = 40
          lineNumber = 41
          var call21 = callmethod(var_ts,"selectedIndex:=", [1], var_i);
          lineNumber = 42
          var call22 = callmethod(var_dom,"window", [0]);
          var call23 = callmethod(call22,"outputswitch", [0]);
          if13 = call23;
        }
        return if13;
      };
      var call24 = callmethod(Grace_prelude,"for()do", [1, 1], opresult11, block12);
      lineNumber = 45
      var string25 = new GraceString("standard-canvas");
      var call26 = callmethod(var_document,"getElementById", [1], string25);
      var_canvas = call26;
      lineNumber = 46
      var string27 = new GraceString("2d");
      var call28 = callmethod(var_canvas,"getContext", [1], string27);
      var_ctx = call28;
      lineNumber = 48
      lineNumber = 42
      lineNumber = 47
      var call29 = callmethod(var_ctx,"lineWidth:=", [1], new GraceNum(1));
      lineNumber = 49
      lineNumber = 42
      lineNumber = 48
      var string30 = new GraceString("black");
      var call31 = callmethod(var_ctx,"fillStyle:=", [1], string30);
      lineNumber = 49
      var call32 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(250));
      return call32
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
    0,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["initialise"] = func0;
  func0.definitionLine = 36;
  func0.definitionModule = "simplegraphics";
  lineNumber = 52
  var func33 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    var var_w = arguments[curarg];
    curarg++;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func33.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fillRect)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func33.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (with)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 54
      lineNumber = 42
      lineNumber = 53
      var call34 = callmethod(var_col,"asDomString", [0]);
      var call35 = callmethod(var_ctx,"fillStyle:=", [1], call34);
      lineNumber = 54
      var call36 = callmethod(var_ctx,"fillRect", [4], var_x, var_y, var_w, var_h);
      return call36
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func33.paramCounts = [
    4,
    1,
  ];
  func33.variableArities = [
    false,
    false,
  ];
  this.methods["fillRect()with"] = func33;
  func33.definitionLine = 52;
  func33.definitionModule = "simplegraphics";
  lineNumber = 57
  var func37 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func37.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fillCircle)"));
    var var_radius = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func37.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (radius)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func37.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (with)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 59
      lineNumber = 53
      lineNumber = 58
      var call38 = callmethod(var_col,"asDomString", [0]);
      var call39 = callmethod(var_ctx,"fillStyle:=", [1], call38);
      lineNumber = 59
      var call40 = callmethod(var_ctx,"beginPath", [0]);
      lineNumber = 60
      var call41 = callmethod(var_ctx,"moveTo", [2], var_x, var_y);
      lineNumber = 61
      var prod44 = callmethod(var_Pi, "*", [1], new GraceNum(2));
      var bool45 = new GraceBoolean(true)
      var call46 = callmethod(var_ctx,"arc", [6], var_x, var_y, var_radius, new GraceNum(0), prod44, bool45);
      lineNumber = 62
      var call47 = callmethod(var_ctx,"fill", [0]);
      lineNumber = 63
      var call48 = callmethod(var_ctx,"closePath", [0]);
      return call48
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func37.paramCounts = [
    2,
    1,
    1,
  ];
  func37.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["fillCircle()radius()with"] = func37;
  func37.definitionLine = 57;
  func37.definitionModule = "simplegraphics";
  lineNumber = 66
  var func49 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    var var_w = arguments[curarg];
    curarg++;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawRect)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func49.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (in)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 68
      lineNumber = 63
      lineNumber = 67
      var call50 = callmethod(var_col,"asDomString", [0]);
      var call51 = callmethod(var_ctx,"strokeStyle:=", [1], call50);
      lineNumber = 68
      var call52 = callmethod(var_ctx,"beginPath", [0]);
      lineNumber = 69
      var call53 = callmethod(var_ctx,"rect", [4], var_x, var_y, var_w, var_h);
      lineNumber = 70
      var call54 = callmethod(var_ctx,"stroke", [0]);
      lineNumber = 71
      var call55 = callmethod(var_ctx,"closePath", [0]);
      return call55
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func49.paramCounts = [
    4,
    1,
  ];
  func49.variableArities = [
    false,
    false,
  ];
  this.methods["drawRect()in"] = func49;
  func49.definitionLine = 66;
  func49.definitionModule = "simplegraphics";
  lineNumber = 74
  var func56 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func56.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawLineFrom)"));
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func56.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (to)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func56.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (in)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 76
      lineNumber = 71
      lineNumber = 75
      var call57 = callmethod(var_col,"asDomString", [0]);
      var call58 = callmethod(var_ctx,"strokeStyle:=", [1], call57);
      lineNumber = 76
      var call59 = callmethod(var_ctx,"beginPath", [0]);
      lineNumber = 77
      var call60 = callmethod(var_ctx,"moveTo", [2], var_x, var_y);
      lineNumber = 78
      var call61 = callmethod(var_ctx,"lineTo", [2], var_x__39__, var_y__39__);
      lineNumber = 79
      var call62 = callmethod(var_ctx,"stroke", [0]);
      lineNumber = 80
      var call63 = callmethod(var_ctx,"closePath", [0]);
      return call63
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func56.paramCounts = [
    2,
    2,
    1,
  ];
  func56.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["drawLineFrom()to()in"] = func56;
  func56.definitionLine = 74;
  func56.definitionModule = "simplegraphics";
  lineNumber = 83
  var func64 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func64.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawSectorAt)"));
    var var_radius = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func64.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (radius)"));
    var var_angle1 = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func64.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (from)"));
    var var_angle2 = arguments[curarg];
    curarg++;
    if (argcv[3] !=  func64.paramCounts[3])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 4 (to)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[4] !=  func64.paramCounts[4])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 5 (in)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 84
      var call65 = callmethod(var_ctx,"beginPath", [0]);
      lineNumber = 86
      lineNumber = 84
      lineNumber = 85
      var call66 = callmethod(var_col,"asDomString", [0]);
      var call67 = callmethod(var_ctx,"fillStyle:=", [1], call66);
      lineNumber = 86
      var call68 = callmethod(var_ctx,"moveTo", [2], var_x, var_y);
      lineNumber = 87
      var call69 = callmethod(var_ctx,"arc", [5], var_x, var_y, var_radius, var_angle1, var_angle2);
      lineNumber = 88
      var call70 = callmethod(var_ctx,"fill", [0]);
      lineNumber = 89
      var call71 = callmethod(var_ctx,"closePath", [0]);
      return call71
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func64.paramCounts = [
    2,
    1,
    1,
    1,
    1,
  ];
  func64.variableArities = [
    false,
    false,
    false,
    false,
    false,
  ];
  this.methods["drawSectorAt()radius()from()to()in"] = func64;
  func64.definitionLine = 83;
  func64.definitionModule = "simplegraphics";
  lineNumber = 91
  var func72 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func72.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawArcAround)"));
    var var_radius = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func72.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (radius)"));
    var var_width = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func72.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (width)"));
    var var_angle1 = arguments[curarg];
    curarg++;
    if (argcv[3] !=  func72.paramCounts[3])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 4 (from)"));
    var var_angle2 = arguments[curarg];
    curarg++;
    if (argcv[4] !=  func72.paramCounts[4])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 5 (to)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[5] !=  func72.paramCounts[5])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 6 (in)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 92
      var call73 = callmethod(var_ctx,"beginPath", [0]);
      lineNumber = 94
      lineNumber = 92
      lineNumber = 93
      var call74 = callmethod(var_col,"asDomString", [0]);
      var call75 = callmethod(var_ctx,"fillStyle:=", [1], call74);
      lineNumber = 94
      var call76 = callmethod(var_ctx,"arc", [5], var_x, var_y, var_radius, var_angle1, var_angle2);
      lineNumber = 95
      var diff79 = callmethod(var_radius, "-", [1], var_width);
      var bool80 = new GraceBoolean(true)
      var call81 = callmethod(var_ctx,"arc", [6], var_x, var_y, diff79, var_angle2, var_angle1, bool80);
      lineNumber = 96
      var call82 = callmethod(var_ctx,"fill", [0]);
      lineNumber = 97
      var call83 = callmethod(var_ctx,"closePath", [0]);
      return call83
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func72.paramCounts = [
    2,
    1,
    1,
    1,
    1,
    1,
  ];
  func72.variableArities = [
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  this.methods["drawArcAround()radius()width()from()to()in"] = func72;
  func72.definitionLine = 91;
  func72.definitionModule = "simplegraphics";
  lineNumber = 100
  var func84 = function(argcv) {
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func84.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (write)"));
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func84.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (at)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func84.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (in)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 102
      lineNumber = 97
      lineNumber = 101
      var string85 = new GraceString("10pt sans-serif");
      var call86 = callmethod(var_ctx,"font:=", [1], string85);
      lineNumber = 103
      lineNumber = 97
      lineNumber = 102
      var call87 = callmethod(var_col,"asDomString", [0]);
      var call88 = callmethod(var_ctx,"fillStyle:=", [1], call87);
      lineNumber = 103
      var call89 = callmethod(var_ctx,"fillText", [3], var_s, var_x, var_y);
      return call89
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func84.paramCounts = [
    1,
    2,
    1,
  ];
  func84.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["write()at()in"] = func84;
  func84.definitionLine = 100;
  func84.definitionModule = "simplegraphics";
  lineNumber = 105
  var func90 = function(argcv) {
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func90.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (write)"));
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func90.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (at)"));
    var var_size = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func90.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (size)"));
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[3] !=  func90.paramCounts[3])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 4 (in)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 107
      lineNumber = 102
      lineNumber = 106
      var call91 = callmethod(var_col,"asDomString", [0]);
      var call92 = callmethod(var_ctx,"fillStyle:=", [1], call91);
      lineNumber = 108
      lineNumber = 106
      lineNumber = 107
      var string93 = new GraceString("px sans-serif");
      var string96 = new GraceString("");
      var opresult98 = callmethod(string96, "++", [1], var_size);
      var opresult100 = callmethod(opresult98, "++", [1], string93);
      var call101 = callmethod(var_ctx,"font:=", [1], opresult100);
      lineNumber = 108
      var call102 = callmethod(var_ctx,"beginPath", [0]);
      lineNumber = 109
      var call103 = callmethod(var_ctx,"fillText", [3], var_s, var_x, var_y);
      lineNumber = 110
      var call104 = callmethod(var_ctx,"fill", [0]);
      lineNumber = 111
      var call105 = callmethod(var_ctx,"closePath", [0]);
      return call105
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func90.paramCounts = [
    1,
    2,
    1,
    1,
  ];
  func90.variableArities = [
    false,
    false,
    false,
    false,
  ];
  this.methods["write()at()size()in"] = func90;
  func90.definitionLine = 105;
  func90.definitionModule = "simplegraphics";
  lineNumber = 113
  var func106 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func106.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (end)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      return var_done
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func106.paramCounts = [
    0,
  ];
  func106.variableArities = [
    false,
  ];
  this.methods["end"] = func106;
  func106.definitionLine = 113;
  func106.definitionModule = "simplegraphics";
  lineNumber = 1
  // Import of dom
  if (typeof gracecode_dom == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module dom'));
  var var_dom = do_import("dom", gracecode_dom);
  lineNumber = 4
  var var_document;
  lineNumber = 111
  var func107 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func107.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 3
      return var_document
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func107.paramCounts = [
    0,
  ];
  func107.variableArities = [
    false,
  ];
  this.methods["document"] = func107;
  func107.definitionLine = 111;
  func107.definitionModule = "simplegraphics";
  lineNumber = 111
  var func108 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      var_document = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func108.paramCounts = [
    1,
  ];
  func108.variableArities = [
    false,
  ];
  this.methods["document:="] = func108;
  func108.definitionLine = 111;
  func108.definitionModule = "simplegraphics";
  lineNumber = 5
  var var_canvas;
  lineNumber = 111
  var func109 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func109.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 4
      return var_canvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func109.paramCounts = [
    0,
  ];
  func109.variableArities = [
    false,
  ];
  this.methods["canvas"] = func109;
  func109.definitionLine = 111;
  func109.definitionModule = "simplegraphics";
  lineNumber = 111
  var func110 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func110.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      var_canvas = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func110.paramCounts = [
    1,
  ];
  func110.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func110;
  func110.definitionLine = 111;
  func110.definitionModule = "simplegraphics";
  lineNumber = 7
  var var_ctx;
  lineNumber = 111
  var func111 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func111.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ctx)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 5
      return var_ctx
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func111.paramCounts = [
    0,
  ];
  func111.variableArities = [
    false,
  ];
  this.methods["ctx"] = func111;
  func111.definitionLine = 111;
  func111.definitionModule = "simplegraphics";
  lineNumber = 111
  var func112 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func112.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ctx:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      var_ctx = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func112.paramCounts = [
    1,
  ];
  func112.variableArities = [
    false,
  ];
  this.methods["ctx:="] = func112;
  func112.definitionLine = 111;
  func112.definitionModule = "simplegraphics";
  lineNumber = 7
  var obj113 = Grace_allocObject();
  obj113.definitionModule = "simplegraphics";
  obj113.definitionLine = 7;
  obj113.outer = this;
  var reader_simplegraphics_outer_114 = function() {
    return this.outer;
  }
  obj113.methods["outer"] = reader_simplegraphics_outer_114;
  function obj_init_113() {
    var origSuperDepth = superDepth;
    superDepth = obj113;
    obj113.annotations = [];
    var func115 = function(argcv) {
      var curarg = 1;
      var var_r = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func115.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (r)"));
      var var_g = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func115.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (g)"));
      var var_b = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func115.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (b)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "simplegraphics";
      try {
        lineNumber = 9
        var obj116 = Grace_allocObject();
        obj116.definitionModule = "simplegraphics";
        obj116.definitionLine = 9;
        obj116.outer = this;
        var reader_simplegraphics_outer_117 = function() {
          return this.outer;
        }
        obj116.methods["outer"] = reader_simplegraphics_outer_117;
        function obj_init_116() {
          var origSuperDepth = superDepth;
          superDepth = obj116;
          obj116.annotations = [];
          var func118 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func118.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asDomString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 11
              var string119 = new GraceString(")");
              var string122 = new GraceString(", ");
              var string125 = new GraceString(", ");
              var string128 = new GraceString("rgb(");
              var opresult130 = callmethod(string128, "++", [1], var_r);
              var opresult132 = callmethod(opresult130, "++", [1], string125);
              var opresult134 = callmethod(opresult132, "++", [1], var_g);
              var opresult136 = callmethod(opresult134, "++", [1], string122);
              var opresult138 = callmethod(opresult136, "++", [1], var_b);
              var opresult140 = callmethod(opresult138, "++", [1], string119);
              return opresult140
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func118.paramCounts = [
            0,
          ];
          func118.variableArities = [
            false,
          ];
          obj116.methods["asDomString"] = func118;
          func118.definitionLine = 10;
          func118.definitionModule = "simplegraphics";
          var func141 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func141.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 14
              onSelf = true;
              var call142 = callmethod(this, "asDomString", [0]);
              return call142
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func141.paramCounts = [
            0,
          ];
          func141.variableArities = [
            false,
          ];
          obj116.methods["asString"] = func141;
          func141.definitionLine = 13;
          func141.definitionModule = "simplegraphics";
          sourceObject = obj116;
          sourceObject = obj116;
          superDepth = origSuperDepth;
        }
        obj_init_116.apply(obj116, []);
        return obj116
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func115.paramCounts = [
      1,
      1,
      1,
    ];
    func115.variableArities = [
      false,
      false,
      false,
    ];
    obj113.methods["r()g()b"] = func115;
    func115.definitionLine = 8;
    func115.definitionModule = "simplegraphics";
    var func143 = function(argcv) {
      var curarg = 1;
      var var_r = arguments[curarg];
      curarg++;
      var var_g = arguments[curarg];
      curarg++;
      var var_b = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj144 = Grace_allocObject();
        obj144.definitionModule = "simplegraphics";
        obj144.definitionLine = 9;
        var inho144 = inheritingObject;
        while (inho144.superobj) inho144 = inho144.superobj;
        inho144.superobj = obj144;
        obj144.data = inheritingObject.data;
        obj144.outer = this;
        var reader_simplegraphics_outer_145 = function() {
          return this.outer;
        }
        obj144.methods["outer"] = reader_simplegraphics_outer_145;
        function obj_init_144() {
          var origSuperDepth = superDepth;
          superDepth = obj144;
          obj144.annotations = [];
          var func146 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func146.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asDomString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 11
              var string147 = new GraceString(")");
              var string150 = new GraceString(", ");
              var string153 = new GraceString(", ");
              var string156 = new GraceString("rgb(");
              var opresult158 = callmethod(string156, "++", [1], var_r);
              var opresult160 = callmethod(opresult158, "++", [1], string153);
              var opresult162 = callmethod(opresult160, "++", [1], var_g);
              var opresult164 = callmethod(opresult162, "++", [1], string150);
              var opresult166 = callmethod(opresult164, "++", [1], var_b);
              var opresult168 = callmethod(opresult166, "++", [1], string147);
              return opresult168
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func146.paramCounts = [
            0,
          ];
          func146.variableArities = [
            false,
          ];
          obj144.methods["asDomString"] = func146;
          func146.definitionLine = 10;
          func146.definitionModule = "simplegraphics";
          var func169 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func169.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 14
              onSelf = true;
              var call170 = callmethod(this, "asDomString", [0]);
              return call170
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func169.paramCounts = [
            0,
          ];
          func169.variableArities = [
            false,
          ];
          obj144.methods["asString"] = func169;
          func169.definitionLine = 13;
          func169.definitionModule = "simplegraphics";
          sourceObject = obj144;
          sourceObject = obj144;
          superDepth = origSuperDepth;
        }
        obj_init_144.apply(inheritingObject, []);
        return obj144
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj113.methods["r()g()b()object"] = func143;
    var func171 = function(argcv) {
      var curarg = 1;
      var var_h = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func171.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (h)"));
      var var_s = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func171.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (s)"));
      var var_l = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func171.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (l)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "simplegraphics";
      try {
        lineNumber = 19
        var obj172 = Grace_allocObject();
        obj172.definitionModule = "simplegraphics";
        obj172.definitionLine = 19;
        obj172.outer = this;
        var reader_simplegraphics_outer_173 = function() {
          return this.outer;
        }
        obj172.methods["outer"] = reader_simplegraphics_outer_173;
        function obj_init_172() {
          var origSuperDepth = superDepth;
          superDepth = obj172;
          obj172.annotations = [];
          var func174 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func174.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asDomString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 21
              var string175 = new GraceString("%)");
              var string178 = new GraceString("%, ");
              var string181 = new GraceString(", ");
              var string184 = new GraceString("hsl(");
              var opresult186 = callmethod(string184, "++", [1], var_h);
              var opresult188 = callmethod(opresult186, "++", [1], string181);
              var opresult190 = callmethod(opresult188, "++", [1], var_s);
              var opresult192 = callmethod(opresult190, "++", [1], string178);
              var opresult194 = callmethod(opresult192, "++", [1], var_l);
              var opresult196 = callmethod(opresult194, "++", [1], string175);
              return opresult196
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func174.paramCounts = [
            0,
          ];
          func174.variableArities = [
            false,
          ];
          obj172.methods["asDomString"] = func174;
          func174.definitionLine = 20;
          func174.definitionModule = "simplegraphics";
          var func197 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func197.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 24
              onSelf = true;
              var call198 = callmethod(this, "asDomString", [0]);
              return call198
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func197.paramCounts = [
            0,
          ];
          func197.variableArities = [
            false,
          ];
          obj172.methods["asString"] = func197;
          func197.definitionLine = 23;
          func197.definitionModule = "simplegraphics";
          sourceObject = obj172;
          sourceObject = obj172;
          superDepth = origSuperDepth;
        }
        obj_init_172.apply(obj172, []);
        return obj172
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func171.paramCounts = [
      1,
      1,
      1,
    ];
    func171.variableArities = [
      false,
      false,
      false,
    ];
    obj113.methods["h()s()l"] = func171;
    func171.definitionLine = 18;
    func171.definitionModule = "simplegraphics";
    var func199 = function(argcv) {
      var curarg = 1;
      var var_h = arguments[curarg];
      curarg++;
      var var_s = arguments[curarg];
      curarg++;
      var var_l = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj200 = Grace_allocObject();
        obj200.definitionModule = "simplegraphics";
        obj200.definitionLine = 19;
        var inho200 = inheritingObject;
        while (inho200.superobj) inho200 = inho200.superobj;
        inho200.superobj = obj200;
        obj200.data = inheritingObject.data;
        obj200.outer = this;
        var reader_simplegraphics_outer_201 = function() {
          return this.outer;
        }
        obj200.methods["outer"] = reader_simplegraphics_outer_201;
        function obj_init_200() {
          var origSuperDepth = superDepth;
          superDepth = obj200;
          obj200.annotations = [];
          var func202 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func202.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asDomString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 21
              var string203 = new GraceString("%)");
              var string206 = new GraceString("%, ");
              var string209 = new GraceString(", ");
              var string212 = new GraceString("hsl(");
              var opresult214 = callmethod(string212, "++", [1], var_h);
              var opresult216 = callmethod(opresult214, "++", [1], string209);
              var opresult218 = callmethod(opresult216, "++", [1], var_s);
              var opresult220 = callmethod(opresult218, "++", [1], string206);
              var opresult222 = callmethod(opresult220, "++", [1], var_l);
              var opresult224 = callmethod(opresult222, "++", [1], string203);
              return opresult224
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func202.paramCounts = [
            0,
          ];
          func202.variableArities = [
            false,
          ];
          obj200.methods["asDomString"] = func202;
          func202.definitionLine = 20;
          func202.definitionModule = "simplegraphics";
          var func225 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "simplegraphics";
            try {
              lineNumber = 24
              onSelf = true;
              var call226 = callmethod(this, "asDomString", [0]);
              return call226
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func225.paramCounts = [
            0,
          ];
          func225.variableArities = [
            false,
          ];
          obj200.methods["asString"] = func225;
          func225.definitionLine = 23;
          func225.definitionModule = "simplegraphics";
          sourceObject = obj200;
          sourceObject = obj200;
          superDepth = origSuperDepth;
        }
        obj_init_200.apply(inheritingObject, []);
        return obj200
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj113.methods["h()s()l()object"] = func199;
    sourceObject = obj113;
    sourceObject = obj113;
    superDepth = origSuperDepth;
  }
  obj_init_113.apply(obj113, []);
  var var_Colour = obj113;
  lineNumber = 111
  var func227 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func227.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Colour)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 7
      return var_Colour
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func227.paramCounts = [
    0,
  ];
  func227.variableArities = [
    false,
  ];
  this.methods["Colour"] = func227;
  func227.definitionLine = 111;
  func227.definitionModule = "simplegraphics";
  lineNumber = 7;
  moduleName = "simplegraphics";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_Colour)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'Colour' to be of type Unknown"))
  lineNumber = 31
  lineNumber = 29
  var var_Color = var_Colour;
  lineNumber = 111
  var func228 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func228.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Color)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 29
      return var_Color
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func228.paramCounts = [
    0,
  ];
  func228.variableArities = [
    false,
  ];
  this.methods["Color"] = func228;
  func228.definitionLine = 111;
  func228.definitionModule = "simplegraphics";
  lineNumber = 31;
  moduleName = "simplegraphics";
  lineNumber = 29
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_Color)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'Color' to be of type Unknown"))
  lineNumber = 31
  lineNumber = 33
  lineNumber = 31
  var var_Pi = new GraceNum(3.141592653589793);
  lineNumber = 111
  var func229 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func229.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Pi)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 31
      return var_Pi
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func229.paramCounts = [
    0,
  ];
  func229.variableArities = [
    false,
  ];
  this.methods["Pi"] = func229;
  func229.definitionLine = 111;
  func229.definitionModule = "simplegraphics";
  lineNumber = 33;
  moduleName = "simplegraphics";
  lineNumber = 31
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_Pi)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'Pi' to be of type Unknown"))
  lineNumber = 33
  var call230 = callmethod(var_Colour,"r()g()b", [1, 1, 1], new GraceNum(255), new GraceNum(255), new GraceNum(255));
  var var_white = call230;
  lineNumber = 111
  var func231 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func231.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (white)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 33
      return var_white
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func231.paramCounts = [
    0,
  ];
  func231.variableArities = [
    false,
  ];
  this.methods["white"] = func231;
  func231.definitionLine = 111;
  func231.definitionModule = "simplegraphics";
  lineNumber = 33;
  moduleName = "simplegraphics";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_white)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'white' to be of type Unknown"))
  lineNumber = 34
  var call232 = callmethod(var_Colour,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(0));
  var var_black = call232;
  lineNumber = 111
  var func233 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func233.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (black)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "simplegraphics";
    try {
      lineNumber = 34
      return var_black
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func233.paramCounts = [
    0,
  ];
  func233.variableArities = [
    false,
  ];
  this.methods["black"] = func233;
  func233.definitionLine = 111;
  func233.definitionModule = "simplegraphics";
  lineNumber = 34;
  moduleName = "simplegraphics";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_black)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'black' to be of type Unknown"))
  lineNumber = 36
  lineNumber = 52
  lineNumber = 57
  lineNumber = 66
  lineNumber = 74
  lineNumber = 91
  return this;
}
gracecode_simplegraphics.imports = [
'dom',
];
if (gctCache)
  gctCache['simplegraphics'] = "path:\n simplegraphics\nclasses:\n Colour\nmethods-of:Colour.r()g()b:\n asDomString\n asString\nconfidential:\nmodules:\nfresh-methods:\nmethods-of:Colour.h()s()l:\n asDomString\n asString\npublic:\n document\n document:=\n canvas\n canvas:=\n ctx\n ctx:=\n Colour\n Color\n Pi\n white\n black\n initialise\n fillRect()with\n fillCircle()radius()with\n drawRect()in\n drawLineFrom()to()in\n drawSectorAt()radius()from()to()in\n drawArcAround()radius()width()from()to()in\n write()at()in\n write()at()size()in\n end\nconstructors-of:Colour:\n r()g()b\n h()s()l\n";
if (originalSourceLines) {
  originalSourceLines["simplegraphics"] = [
    "import \"dom\" as dom",
    "",
    "var document",
    "var canvas",
    "var ctx",
    "",
    "def Colour = object {",
    "    method r(r)g(g)b(b) {",
    "        object {",
    "            method asDomString {",
    "                \"rgb({r}, {g}, {b})\"",
    "            }",
    "            method asString {",
    "                asDomString",
    "            }",
    "        }",
    "    }",
    "    method h(h)s(s)l(l) {",
    "        object {",
    "            method asDomString {",
    "                \"hsl({h}, {s}%, {l}%)\"",
    "            }",
    "            method asString {",
    "                asDomString",
    "            }",
    "        }",
    "    }",
    "}",
    "def Color = Colour",
    "",
    "def Pi = 3.141592653589793",
    "",
    "def white = Colour.r 255 g 255 b 255",
    "def black = Colour.r 0 g 0 b 0",
    "",
    "method initialise {",
    "    document := dom.document",
    "    def ts = document.getElementById(\"output-select\")",
    "    for (0..(ts.options.length-1)) do {i->",
    "        if (ts.options.item(i).value == \"canvas\") then {",
    "            ts.selectedIndex := i",
    "            dom.window.outputswitch",
    "        }",
    "    }",
    "    canvas := document.getElementById(\"standard-canvas\")",
    "    ctx := canvas.getContext(\"2d\")",
    "    ctx.lineWidth := 1",
    "    ctx.fillStyle := \"black\"",
    "    ctx.fillRect(0, 0, 500, 250)",
    "}",
    "",
    "method fillRect(x, y, w, h)with(col) {",
    "    ctx.fillStyle := col.asDomString",
    "    ctx.fillRect(x, y, w, h)",
    "}",
    "",
    "method fillCircle(x,y)radius(radius)with(col) {",
    "    ctx.fillStyle := col.asDomString",
    "    ctx.beginPath",
    "    ctx.moveTo(x,y)",
    "    ctx.arc(x, y, radius, 0, Pi * 2, true)",
    "    ctx.fill",
    "    ctx.closePath",
    "}",
    "",
    "method drawRect(x, y, w, h)in(col) {",
    "    ctx.strokeStyle := col.asDomString",
    "    ctx.beginPath",
    "    ctx.rect(x,y,w,h)",
    "    ctx.stroke",
    "    ctx.closePath",
    "}",
    "",
    "method drawLineFrom(x,y)to(x', y')in(col) {",
    "    ctx.strokeStyle := col.asDomString",
    "    ctx.beginPath",
    "    ctx.moveTo(x,y)",
    "    ctx.lineTo(x', y')",
    "    ctx.stroke",
    "    ctx.closePath",
    "}",
    "",
    "method drawSectorAt(x,y)radius(radius)from(angle1)to(angle2)in(col) {",
    "    ctx.beginPath",
    "    ctx.fillStyle := col.asDomString",
    "    ctx.moveTo(x,y)",
    "    ctx.arc(x, y, radius, angle1, angle2)",
    "    ctx.fill",
    "    ctx.closePath",
    "}",
    "method drawArcAround(x,y) radius(radius) width(width) from(angle1) to(angle2) in(col) {",
    "    ctx.beginPath",
    "    ctx.fillStyle := col.asDomString",
    "    ctx.arc(x, y, radius, angle1, angle2)",
    "    ctx.arc(x, y, radius - width, angle2, angle1, true)",
    "    ctx.fill",
    "    ctx.closePath",
    "}",
    "",
    "method write(s) at(x,y) in(col) {",
    "    ctx.font := \"10pt sans-serif\"",
    "    ctx.fillStyle := col.asDomString",
    "    ctx.fillText(s, x, y)",
    "}",
    "method write(s) at(x,y) size(size) in(col) {",
    "    ctx.fillStyle := col.asDomString",
    "    ctx.font := \"{size}px sans-serif\"",
    "    ctx.beginPath",
    "    ctx.fillText(s, x, y)",
    "    ctx.fill",
    "    ctx.closePath",
    "}",
    "method end {",
    "    // No-op here",
    "}",
  ];
}
