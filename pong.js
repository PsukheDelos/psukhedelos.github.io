function gracecode_pong () {
  this.definitionModule = "pong";
  this.definitionLine = 0;
  lineNumber = 4
  // Import of dom
  if (typeof gracecode_dom == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module dom'));
  var var_dom = do_import("dom", gracecode_dom);
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
    moduleName = "pong";
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
  func1.definitionModule = "pong";
  lineNumber = 9;
  moduleName = "pong";
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
    moduleName = "pong";
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
  func4.definitionModule = "pong";
  lineNumber = 9;
  moduleName = "pong";
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
  block13.className = 'block<pong:17>';
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
    moduleName = "pong";
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
  func29.definitionModule = "pong";
  lineNumber = 17;
  moduleName = "pong";
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
    moduleName = "pong";
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
  func32.definitionModule = "pong";
  lineNumber = 18;
  moduleName = "pong";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_ctx)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'ctx' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 17
  lineNumber = 20
  var string33 = new GraceString("black");
  var call34 = callmethod(var_ctx,"fillStyle:=", [1], string33);
  lineNumber = 21
  var call35 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(250));
  lineNumber = 23
  var obj36 = Grace_allocObject();
  obj36.definitionModule = "pong";
  obj36.definitionLine = 23;
  obj36.outer = this;
  var reader_pong_outer_37 = function() {
    return this.outer;
  }
  obj36.methods["outer"] = reader_pong_outer_37;
  function obj_init_36() {
    var origSuperDepth = superDepth;
    superDepth = obj36;
    obj36.annotations = [];
    var func38 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func38.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 29
        var call39 = callmethod(var_ctx,"beginPath", [0]);
        lineNumber = 31
        lineNumber = 29
        lineNumber = 30
        var string40 = new GraceString("white");
        var call41 = callmethod(var_ctx,"fillStyle:=", [1], string40);
        lineNumber = 31
        onSelf = true;
        var call43 = callmethod(this, "x", [0]);
        var diff45 = callmethod(call43, "-", [1], new GraceNum(5));
        onSelf = true;
        var call47 = callmethod(this, "y", [0]);
        var diff49 = callmethod(call47, "-", [1], new GraceNum(5));
        var call50 = callmethod(var_ctx,"fillRect", [4], diff45, diff49, new GraceNum(10), new GraceNum(10));
        return call50
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func38.paramCounts = [
      0,
    ];
    func38.variableArities = [
      false,
    ];
    obj36.methods["draw"] = func38;
    func38.definitionLine = 28;
    func38.definitionModule = "pong";
    var func51 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func51.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (live)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 35
        lineNumber = 34
        onSelf = true;
        var call53 = callmethod(this, "x", [0]);
        var opresult55 = callmethod(call53, "<", [1], new GraceNum(500));
        onSelf = true;
        var call58 = callmethod(this, "x", [0]);
        var opresult60 = callmethod(call58, ">", [1], new GraceNum(0));
        var opresult62 = callmethod(opresult60, "&&", [1], opresult55);
        return opresult62
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func51.paramCounts = [
      0,
    ];
    func51.variableArities = [
      false,
    ];
    obj36.methods["live"] = func51;
    func51.definitionLine = 33;
    func51.definitionModule = "pong";
    var func63 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func63.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 38
        lineNumber = 29
        lineNumber = 38
        lineNumber = 37
        onSelf = true;
        var call64 = callmethod(this, "dx", [0]);
        onSelf = true;
        var call66 = callmethod(this, "x", [0]);
        var opresult68 = callmethod(call66, "+", [1], call64);
        onSelf = true;
        var call69 = callmethod(this, "x:=", [1], opresult68);
        lineNumber = 39
        lineNumber = 29
        lineNumber = 39
        lineNumber = 38
        onSelf = true;
        var call70 = callmethod(this, "dy", [0]);
        onSelf = true;
        var call72 = callmethod(this, "y", [0]);
        var opresult74 = callmethod(call72, "+", [1], call70);
        onSelf = true;
        var call75 = callmethod(this, "y:=", [1], opresult74);
        lineNumber = 42
        var if76 = var_done;
        lineNumber = 39
        onSelf = true;
        var call78 = callmethod(this, "y", [0]);
        var opresult80 = callmethod(call78, "<=", [1], new GraceNum(0));
        if (Grace_isTrue(opresult80)) {
          lineNumber = 41
          lineNumber = 29
          lineNumber = 41
          lineNumber = 40
          onSelf = true;
          var call81 = callmethod(this, "dy", [0]);
          var call82 = callmethod(call81,"prefix-", [0]);
          onSelf = true;
          var call83 = callmethod(this, "dy:=", [1], call82);
          if76 = call83;
        }
        lineNumber = 46
        var if84 = var_done;
        lineNumber = 42
        onSelf = true;
        var call86 = callmethod(this, "y", [0]);
        var opresult88 = callmethod(call86, ">=", [1], new GraceNum(250));
        if (Grace_isTrue(opresult88)) {
          lineNumber = 44
          lineNumber = 29
          lineNumber = 44
          lineNumber = 43
          onSelf = true;
          var call89 = callmethod(this, "dy", [0]);
          var call90 = callmethod(call89,"prefix-", [0]);
          onSelf = true;
          var call91 = callmethod(this, "dy:=", [1], call90);
          if84 = call91;
        }
        lineNumber = 59
        var if92 = var_done;
        lineNumber = 46
        onSelf = true;
        var call94 = callmethod(this, "x", [0]);
        var opresult96 = callmethod(call94, "<=", [1], new GraceNum(15));
        if (Grace_isTrue(opresult96)) {
          lineNumber = 51
          var if97 = var_done;
          lineNumber = 47
          var call99 = callmethod(var_paddle,"y", [0]);
          var diff101 = callmethod(call99, "-", [1], new GraceNum(20));
          onSelf = true;
          var call103 = callmethod(this, "y", [0]);
          var opresult105 = callmethod(call103, ">", [1], diff101);
          var call108 = callmethod(var_paddle,"y", [0]);
          var opresult110 = callmethod(call108, "+", [1], new GraceNum(20));
          onSelf = true;
          var call112 = callmethod(this, "y", [0]);
          var opresult114 = callmethod(call112, "<", [1], opresult110);
          var opresult116 = callmethod(opresult114, "&&", [1], opresult105);
          if (Grace_isTrue(opresult116)) {
            lineNumber = 49
            lineNumber = 47
            lineNumber = 49
            lineNumber = 48
            onSelf = true;
            var call117 = callmethod(this, "dx", [0]);
            var call118 = callmethod(call117,"prefix-", [0]);
            onSelf = true;
            var call119 = callmethod(this, "dx:=", [1], call118);
            if97 = call119;
          }
          lineNumber = 54
          var if120 = var_done;
          lineNumber = 51
          var call122 = callmethod(var_paddle,"y", [0]);
          var opresult124 = callmethod(call122, "+", [1], new GraceNum(10));
          onSelf = true;
          var call126 = callmethod(this, "y", [0]);
          var opresult128 = callmethod(call126, ">", [1], opresult124);
          var call131 = callmethod(var_paddle,"y", [0]);
          var opresult133 = callmethod(call131, "+", [1], new GraceNum(20));
          onSelf = true;
          var call135 = callmethod(this, "y", [0]);
          var opresult137 = callmethod(call135, "<", [1], opresult133);
          var opresult139 = callmethod(opresult137, "&&", [1], opresult128);
          if (Grace_isTrue(opresult139)) {
            lineNumber = 53
            lineNumber = 51
            lineNumber = 53
            lineNumber = 52
            onSelf = true;
            var call141 = callmethod(this, "dy", [0]);
            var opresult143 = callmethod(call141, "+", [1], new GraceNum(0.5));
            onSelf = true;
            var call144 = callmethod(this, "dy:=", [1], opresult143);
            if120 = call144;
          }
          lineNumber = 57
          var if145 = var_done;
          lineNumber = 54
          var call147 = callmethod(var_paddle,"y", [0]);
          var diff149 = callmethod(call147, "-", [1], new GraceNum(20));
          onSelf = true;
          var call151 = callmethod(this, "y", [0]);
          var opresult153 = callmethod(call151, ">", [1], diff149);
          var call156 = callmethod(var_paddle,"y", [0]);
          var diff158 = callmethod(call156, "-", [1], new GraceNum(10));
          onSelf = true;
          var call160 = callmethod(this, "y", [0]);
          var opresult162 = callmethod(call160, "<", [1], diff158);
          var opresult164 = callmethod(opresult162, "&&", [1], opresult153);
          if (Grace_isTrue(opresult164)) {
            lineNumber = 56
            lineNumber = 54
            lineNumber = 56
            lineNumber = 55
            onSelf = true;
            var call166 = callmethod(this, "dy", [0]);
            var diff168 = callmethod(call166, "-", [1], new GraceNum(0.5));
            onSelf = true;
            var call169 = callmethod(this, "dy:=", [1], diff168);
            if145 = call169;
          }
          if92 = if145;
        }
        lineNumber = 71
        var if170 = var_done;
        lineNumber = 59
        onSelf = true;
        var call172 = callmethod(this, "x", [0]);
        var opresult174 = callmethod(call172, ">=", [1], new GraceNum(485));
        if (Grace_isTrue(opresult174)) {
          lineNumber = 64
          var if175 = var_done;
          lineNumber = 60
          var call177 = callmethod(var_paddle2,"y", [0]);
          var diff179 = callmethod(call177, "-", [1], new GraceNum(20));
          onSelf = true;
          var call181 = callmethod(this, "y", [0]);
          var opresult183 = callmethod(call181, ">", [1], diff179);
          var call186 = callmethod(var_paddle2,"y", [0]);
          var opresult188 = callmethod(call186, "+", [1], new GraceNum(20));
          onSelf = true;
          var call190 = callmethod(this, "y", [0]);
          var opresult192 = callmethod(call190, "<", [1], opresult188);
          var opresult194 = callmethod(opresult192, "&&", [1], opresult183);
          if (Grace_isTrue(opresult194)) {
            lineNumber = 62
            lineNumber = 60
            lineNumber = 62
            lineNumber = 61
            onSelf = true;
            var call195 = callmethod(this, "dx", [0]);
            var call196 = callmethod(call195,"prefix-", [0]);
            onSelf = true;
            var call197 = callmethod(this, "dx:=", [1], call196);
            if175 = call197;
          }
          lineNumber = 67
          var if198 = var_done;
          lineNumber = 64
          var call200 = callmethod(var_paddle,"y", [0]);
          var opresult202 = callmethod(call200, "+", [1], new GraceNum(10));
          onSelf = true;
          var call204 = callmethod(this, "y", [0]);
          var opresult206 = callmethod(call204, ">", [1], opresult202);
          var call209 = callmethod(var_paddle,"y", [0]);
          var opresult211 = callmethod(call209, "+", [1], new GraceNum(20));
          onSelf = true;
          var call213 = callmethod(this, "y", [0]);
          var opresult215 = callmethod(call213, "<", [1], opresult211);
          var opresult217 = callmethod(opresult215, "&&", [1], opresult206);
          if (Grace_isTrue(opresult217)) {
            lineNumber = 66
            lineNumber = 64
            lineNumber = 66
            lineNumber = 65
            onSelf = true;
            var call219 = callmethod(this, "dy", [0]);
            var opresult221 = callmethod(call219, "+", [1], new GraceNum(0.5));
            onSelf = true;
            var call222 = callmethod(this, "dy:=", [1], opresult221);
            if198 = call222;
          }
          lineNumber = 70
          var if223 = var_done;
          lineNumber = 67
          var call225 = callmethod(var_paddle,"y", [0]);
          var diff227 = callmethod(call225, "-", [1], new GraceNum(20));
          onSelf = true;
          var call229 = callmethod(this, "y", [0]);
          var opresult231 = callmethod(call229, ">", [1], diff227);
          var call234 = callmethod(var_paddle,"y", [0]);
          var diff236 = callmethod(call234, "-", [1], new GraceNum(10));
          onSelf = true;
          var call238 = callmethod(this, "y", [0]);
          var opresult240 = callmethod(call238, "<", [1], diff236);
          var opresult242 = callmethod(opresult240, "&&", [1], opresult231);
          if (Grace_isTrue(opresult242)) {
            lineNumber = 69
            lineNumber = 67
            lineNumber = 69
            lineNumber = 68
            onSelf = true;
            var call244 = callmethod(this, "dy", [0]);
            var diff246 = callmethod(call244, "-", [1], new GraceNum(0.5));
            onSelf = true;
            var call247 = callmethod(this, "dy:=", [1], diff246);
            if223 = call247;
          }
          if170 = if223;
        }
        return if170
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func63.paramCounts = [
      0,
    ];
    func63.variableArities = [
      false,
    ];
    obj36.methods["step"] = func63;
    func63.definitionLine = 36;
    func63.definitionModule = "pong";
    sourceObject = obj36;
    lineNumber = 24
    obj36.data["x"] = new GraceNum(250);
    var reader_pong_x_248 = function() {
      return this.data["x"];
    }
    obj36.methods["x"] = reader_pong_x_248;
    obj36.data["x"] = new GraceNum(250);
    var writer_pong_x_248 = function(argcv, o) {
      this.data["x"] = o;
    }
    obj36.methods["x:="] = writer_pong_x_248;
    writer_pong_x_248.confidential = true;
    lineNumber = 25;
    moduleName = "pong";
    lineNumber = 24
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(250))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'x' to be of type Unknown"))
    obj36.mutable = true;
    sourceObject = obj36;
    lineNumber = 25
    obj36.data["y"] = new GraceNum(125);
    var reader_pong_y_249 = function() {
      return this.data["y"];
    }
    obj36.methods["y"] = reader_pong_y_249;
    obj36.data["y"] = new GraceNum(125);
    var writer_pong_y_249 = function(argcv, o) {
      this.data["y"] = o;
    }
    obj36.methods["y:="] = writer_pong_y_249;
    writer_pong_y_249.confidential = true;
    lineNumber = 26;
    moduleName = "pong";
    lineNumber = 25
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(125))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'y' to be of type Unknown"))
    obj36.mutable = true;
    sourceObject = obj36;
    lineNumber = 27
    lineNumber = 26
    var call250 = callmethod(new GraceNum(1),"prefix-", [0]);
    obj36.data["dx"] = call250;
    var reader_pong_dx_251 = function() {
      return this.data["dx"];
    }
    obj36.methods["dx"] = reader_pong_dx_251;
    obj36.data["dx"] = call250;
    var writer_pong_dx_251 = function(argcv, o) {
      this.data["dx"] = o;
    }
    obj36.methods["dx:="] = writer_pong_dx_251;
    writer_pong_dx_251.confidential = true;
    lineNumber = 27;
    moduleName = "pong";
    lineNumber = 26
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call250)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'dx' to be of type Unknown"))
    obj36.mutable = true;
    sourceObject = obj36;
    lineNumber = 28
    lineNumber = 27
    var call252 = callmethod(new GraceNum(0.75),"prefix-", [0]);
    obj36.data["dy"] = call252;
    var reader_pong_dy_253 = function() {
      return this.data["dy"];
    }
    obj36.methods["dy"] = reader_pong_dy_253;
    obj36.data["dy"] = call252;
    var writer_pong_dy_253 = function(argcv, o) {
      this.data["dy"] = o;
    }
    obj36.methods["dy:="] = writer_pong_dy_253;
    reader_pong_dy_253.confidential = true;
    writer_pong_dy_253.confidential = true;
    lineNumber = 28;
    moduleName = "pong";
    lineNumber = 27
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call252)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'dy' to be of type Unknown"))
    obj36.mutable = true;
    sourceObject = obj36;
    sourceObject = obj36;
    sourceObject = obj36;
    superDepth = origSuperDepth;
  }
  obj_init_36.apply(obj36, []);
  var var_ball = obj36;
  lineNumber = 67
  var func254 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func254.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ball)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "pong";
    try {
      lineNumber = 23
      return var_ball
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func254.paramCounts = [
    0,
  ];
  func254.variableArities = [
    false,
  ];
  this.methods["ball"] = func254;
  func254.definitionLine = 67;
  func254.definitionModule = "pong";
  lineNumber = 23;
  moduleName = "pong";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_ball)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'ball' to be of type Unknown"))
  lineNumber = 75
  var obj255 = Grace_allocObject();
  obj255.definitionModule = "pong";
  obj255.definitionLine = 75;
  obj255.outer = this;
  var reader_pong_outer_256 = function() {
    return this.outer;
  }
  obj255.methods["outer"] = reader_pong_outer_256;
  function obj_init_255() {
    var origSuperDepth = superDepth;
    superDepth = obj255;
    obj255.annotations = [];
    var func257 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func257.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 82
        var if258 = var_done;
        lineNumber = 79
        onSelf = true;
        var call259 = callmethod(this, "y", [0]);
        onSelf = true;
        var call261 = callmethod(this, "mouseY", [0]);
        var opresult263 = callmethod(call261, "<", [1], call259);
        if (Grace_isTrue(opresult263)) {
          lineNumber = 81
          lineNumber = 67
          lineNumber = 81
          lineNumber = 80
          onSelf = true;
          var call265 = callmethod(this, "y", [0]);
          var diff267 = callmethod(call265, "-", [1], new GraceNum(2));
          onSelf = true;
          var call268 = callmethod(this, "y:=", [1], diff267);
          if258 = call268;
        }
        lineNumber = 85
        var if269 = var_done;
        lineNumber = 82
        onSelf = true;
        var call270 = callmethod(this, "y", [0]);
        onSelf = true;
        var call272 = callmethod(this, "mouseY", [0]);
        var opresult274 = callmethod(call272, ">", [1], call270);
        if (Grace_isTrue(opresult274)) {
          lineNumber = 84
          lineNumber = 67
          lineNumber = 84
          lineNumber = 83
          onSelf = true;
          var call276 = callmethod(this, "y", [0]);
          var opresult278 = callmethod(call276, "+", [1], new GraceNum(2));
          onSelf = true;
          var call279 = callmethod(this, "y:=", [1], opresult278);
          if269 = call279;
        }
        return if269
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func257.paramCounts = [
      0,
    ];
    func257.variableArities = [
      false,
    ];
    obj255.methods["step"] = func257;
    func257.definitionLine = 78;
    func257.definitionModule = "pong";
    var func280 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func280.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 87
        var call281 = callmethod(var_ctx,"beginPath", [0]);
        lineNumber = 89
        lineNumber = 87
        lineNumber = 88
        var string282 = new GraceString("white");
        var call283 = callmethod(var_ctx,"fillStyle:=", [1], string282);
        lineNumber = 89
        onSelf = true;
        var call285 = callmethod(this, "y", [0]);
        var diff287 = callmethod(call285, "-", [1], new GraceNum(20));
        var call288 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), diff287, new GraceNum(10), new GraceNum(40));
        return call288
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func280.paramCounts = [
      0,
    ];
    func280.variableArities = [
      false,
    ];
    obj255.methods["draw"] = func280;
    func280.definitionLine = 86;
    func280.definitionModule = "pong";
    sourceObject = obj255;
    lineNumber = 76
    obj255.data["y"] = new GraceNum(125);
    var reader_pong_y_289 = function() {
      return this.data["y"];
    }
    obj255.methods["y"] = reader_pong_y_289;
    obj255.data["y"] = new GraceNum(125);
    var writer_pong_y_289 = function(argcv, o) {
      this.data["y"] = o;
    }
    obj255.methods["y:="] = writer_pong_y_289;
    writer_pong_y_289.confidential = true;
    lineNumber = 77;
    moduleName = "pong";
    lineNumber = 76
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(125))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'y' to be of type Unknown"))
    obj255.mutable = true;
    sourceObject = obj255;
    lineNumber = 77
    obj255.data["mouseY"] = new GraceNum(125);
    var reader_pong_mouseY_290 = function() {
      return this.data["mouseY"];
    }
    obj255.methods["mouseY"] = reader_pong_mouseY_290;
    obj255.data["mouseY"] = new GraceNum(125);
    var writer_pong_mouseY_290 = function(argcv, o) {
      this.data["mouseY"] = o;
    }
    obj255.methods["mouseY:="] = writer_pong_mouseY_290;
    lineNumber = 78;
    moduleName = "pong";
    lineNumber = 77
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(125))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'mouseY' to be of type Unknown"))
    obj255.mutable = true;
    sourceObject = obj255;
    sourceObject = obj255;
    superDepth = origSuperDepth;
  }
  obj_init_255.apply(obj255, []);
  var var_paddle = obj255;
  lineNumber = 87
  var func291 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func291.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (paddle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "pong";
    try {
      lineNumber = 75
      return var_paddle
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func291.paramCounts = [
    0,
  ];
  func291.variableArities = [
    false,
  ];
  this.methods["paddle"] = func291;
  func291.definitionLine = 87;
  func291.definitionModule = "pong";
  lineNumber = 75;
  moduleName = "pong";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_paddle)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'paddle' to be of type Unknown"))
  lineNumber = 93
  var obj292 = Grace_allocObject();
  obj292.definitionModule = "pong";
  obj292.definitionLine = 93;
  obj292.outer = this;
  var reader_pong_outer_293 = function() {
    return this.outer;
  }
  obj292.methods["outer"] = reader_pong_outer_293;
  function obj_init_292() {
    var origSuperDepth = superDepth;
    superDepth = obj292;
    obj292.annotations = [];
    var func294 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func294.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 116
        var if295 = var_done;
        lineNumber = 97
        var call297 = callmethod(var_ball,"dx", [0]);
        var opresult299 = callmethod(call297, "<", [1], new GraceNum(0));
        if (Grace_isTrue(opresult299)) {
          lineNumber = 103
          var if300 = var_done;
          lineNumber = 100
          onSelf = true;
          var call302 = callmethod(this, "y", [0]);
          var opresult304 = callmethod(call302, "<", [1], new GraceNum(125));
          if (Grace_isTrue(opresult304)) {
            lineNumber = 102
            lineNumber = 97
            lineNumber = 102
            lineNumber = 101
            onSelf = true;
            var call306 = callmethod(this, "y", [0]);
            var opresult308 = callmethod(call306, "+", [1], new GraceNum(2));
            onSelf = true;
            var call309 = callmethod(this, "y:=", [1], opresult308);
            if300 = call309;
          }
          lineNumber = 106
          var if310 = var_done;
          lineNumber = 103
          onSelf = true;
          var call312 = callmethod(this, "y", [0]);
          var opresult314 = callmethod(call312, ">", [1], new GraceNum(125));
          if (Grace_isTrue(opresult314)) {
            lineNumber = 105
            lineNumber = 97
            lineNumber = 105
            lineNumber = 104
            onSelf = true;
            var call316 = callmethod(this, "y", [0]);
            var diff318 = callmethod(call316, "-", [1], new GraceNum(2));
            onSelf = true;
            var call319 = callmethod(this, "y:=", [1], diff318);
            if310 = call319;
          }
          if295 = if310;
        } else {
          lineNumber = 112
          var if320 = var_done;
          lineNumber = 109
          var call321 = callmethod(var_ball,"y", [0]);
          onSelf = true;
          var call323 = callmethod(this, "y", [0]);
          var opresult325 = callmethod(call323, "<", [1], call321);
          if (Grace_isTrue(opresult325)) {
            lineNumber = 111
            lineNumber = 109
            lineNumber = 111
            lineNumber = 110
            onSelf = true;
            var call327 = callmethod(this, "y", [0]);
            var opresult329 = callmethod(call327, "+", [1], new GraceNum(2));
            onSelf = true;
            var call330 = callmethod(this, "y:=", [1], opresult329);
            if320 = call330;
          }
          lineNumber = 115
          var if331 = var_done;
          lineNumber = 112
          var call332 = callmethod(var_ball,"y", [0]);
          onSelf = true;
          var call334 = callmethod(this, "y", [0]);
          var opresult336 = callmethod(call334, ">", [1], call332);
          if (Grace_isTrue(opresult336)) {
            lineNumber = 114
            lineNumber = 112
            lineNumber = 114
            lineNumber = 113
            onSelf = true;
            var call338 = callmethod(this, "y", [0]);
            var diff340 = callmethod(call338, "-", [1], new GraceNum(2));
            onSelf = true;
            var call341 = callmethod(this, "y:=", [1], diff340);
            if331 = call341;
          }
          if295 = if331;
        }
        return if295
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func294.paramCounts = [
      0,
    ];
    func294.variableArities = [
      false,
    ];
    obj292.methods["step"] = func294;
    func294.definitionLine = 96;
    func294.definitionModule = "pong";
    var func342 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func342.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "pong";
      try {
        lineNumber = 118
        var call343 = callmethod(var_ctx,"beginPath", [0]);
        lineNumber = 120
        lineNumber = 118
        lineNumber = 119
        var string344 = new GraceString("white");
        var call345 = callmethod(var_ctx,"fillStyle:=", [1], string344);
        lineNumber = 120
        onSelf = true;
        var call347 = callmethod(this, "y", [0]);
        var diff349 = callmethod(call347, "-", [1], new GraceNum(20));
        var call350 = callmethod(var_ctx,"fillRect", [4], new GraceNum(490), diff349, new GraceNum(10), new GraceNum(40));
        return call350
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func342.paramCounts = [
      0,
    ];
    func342.variableArities = [
      false,
    ];
    obj292.methods["draw"] = func342;
    func342.definitionLine = 117;
    func342.definitionModule = "pong";
    sourceObject = obj292;
    lineNumber = 94
    obj292.data["y"] = new GraceNum(125);
    var reader_pong_y_351 = function() {
      return this.data["y"];
    }
    obj292.methods["y"] = reader_pong_y_351;
    obj292.data["y"] = new GraceNum(125);
    var writer_pong_y_351 = function(argcv, o) {
      this.data["y"] = o;
    }
    obj292.methods["y:="] = writer_pong_y_351;
    writer_pong_y_351.confidential = true;
    lineNumber = 95;
    moduleName = "pong";
    lineNumber = 94
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(125))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'y' to be of type Unknown"))
    obj292.mutable = true;
    sourceObject = obj292;
    lineNumber = 95
    obj292.data["mouseY"] = new GraceNum(125);
    var reader_pong_mouseY_352 = function() {
      return this.data["mouseY"];
    }
    obj292.methods["mouseY"] = reader_pong_mouseY_352;
    obj292.data["mouseY"] = new GraceNum(125);
    var writer_pong_mouseY_352 = function(argcv, o) {
      this.data["mouseY"] = o;
    }
    obj292.methods["mouseY:="] = writer_pong_mouseY_352;
    lineNumber = 96;
    moduleName = "pong";
    lineNumber = 95
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], new GraceNum(125))))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'mouseY' to be of type Unknown"))
    obj292.mutable = true;
    sourceObject = obj292;
    sourceObject = obj292;
    superDepth = origSuperDepth;
  }
  obj_init_292.apply(obj292, []);
  var var_paddle2 = obj292;
  lineNumber = 118
  var func353 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func353.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (paddle2)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "pong";
    try {
      lineNumber = 93
      return var_paddle2
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func353.paramCounts = [
    0,
  ];
  func353.variableArities = [
    false,
  ];
  this.methods["paddle2"] = func353;
  func353.definitionLine = 118;
  func353.definitionModule = "pong";
  lineNumber = 93;
  moduleName = "pong";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_paddle2)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'paddle2' to be of type Unknown"))
  lineNumber = 128
  var block354 = Grace_allocObject();
  block354.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block354.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block354.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block354.methods["match"] = GraceBlock_match;
  block354.methods["prefix?"] = GraceBlock_lift;
  block354.receiver = this;
  block354.className = 'block<pong:128>';
  block354.real = function(
    var_ev
  ) {
    sourceObject = this;
    lineNumber = 127
    lineNumber = 118
    lineNumber = 127
    var call355 = callmethod(var_canvas,"offsetTop", [0]);
    var call357 = callmethod(var_ev,"clientY", [0]);
    var diff359 = callmethod(call357, "-", [1], call355);
    lineNumber = 126
    var call360 = callmethod(var_paddle,"mouseY:=", [1], diff359);
    return call360;
  };
  var var_mouseMoveListener = block354;
  lineNumber = 127
  var func361 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func361.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "pong";
    try {
      lineNumber = 126
      return var_mouseMoveListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func361.paramCounts = [
    0,
  ];
  func361.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func361;
  func361.definitionLine = 127;
  func361.definitionModule = "pong";
  lineNumber = 128;
  moduleName = "pong";
  lineNumber = 126
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouseMoveListener)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouseMoveListener' to be of type Unknown"))
  lineNumber = 128
  var string362 = new GraceString("mousemove");
  var call363 = callmethod(var_canvas,"addEventListener", [2], string362, var_mouseMoveListener);
  lineNumber = 140
  lineNumber = 150
  var block364 = Grace_allocObject();
  block364.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block364.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block364.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block364.methods["match"] = GraceBlock_match;
  block364.methods["prefix?"] = GraceBlock_lift;
  block364.receiver = this;
  block364.className = 'block<pong:150>';
  block364.real = function(
  ) {
    sourceObject = this;
    lineNumber = 141
    var string365 = new GraceString("mousemove");
    var call366 = callmethod(var_canvas,"removeEventListener", [2], string365, var_mouseMoveListener);
    lineNumber = 143
    lineNumber = 127
    lineNumber = 142
    var string367 = new GraceString("50px sans-serif");
    var call368 = callmethod(var_ctx,"font:=", [1], string367);
    lineNumber = 144
    lineNumber = 127
    lineNumber = 143
    var string369 = new GraceString("center");
    var call370 = callmethod(var_ctx,"textAlign:=", [1], string369);
    lineNumber = 145
    lineNumber = 127
    lineNumber = 144
    var string371 = new GraceString("middle");
    var call372 = callmethod(var_ctx,"textBaseline:=", [1], string371);
    lineNumber = 150
    var if373 = var_done;
    lineNumber = 145
    var call375 = callmethod(var_ball,"x", [0]);
    var opresult377 = callmethod(call375, "<", [1], new GraceNum(250));
    if (Grace_isTrue(opresult377)) {
      lineNumber = 146
      var string378 = new GraceString("You lose!");
      var call379 = callmethod(var_ctx,"fillText", [3], string378, new GraceNum(250), new GraceNum(125));
      if373 = call379;
    } else {
      lineNumber = 148
      var string380 = new GraceString("You win!");
      var call381 = callmethod(var_ctx,"fillText", [3], string380, new GraceNum(250), new GraceNum(125));
      if373 = call381;
    }
    return if373;
  };
  lineNumber = 131
  var block382 = Grace_allocObject();
  block382.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block382.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block382.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block382.methods["match"] = GraceBlock_match;
  block382.methods["prefix?"] = GraceBlock_lift;
  block382.receiver = this;
  block382.className = 'block<pong:131>';
  block382.real = function(
  ) {
    sourceObject = this;
    var call383 = callmethod(var_ball,"live", [0]);
    return call383;
  };
  lineNumber = 140
  var block384 = Grace_allocObject();
  block384.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block384.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block384.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block384.methods["match"] = GraceBlock_match;
  block384.methods["prefix?"] = GraceBlock_lift;
  block384.receiver = this;
  block384.className = 'block<pong:140>';
  block384.real = function(
  ) {
    sourceObject = this;
    lineNumber = 132
    var call385 = callmethod(var_ball,"step", [0]);
    lineNumber = 133
    var call386 = callmethod(var_paddle,"step", [0]);
    lineNumber = 134
    var call387 = callmethod(var_paddle2,"step", [0]);
    lineNumber = 136
    lineNumber = 134
    lineNumber = 135
    var string388 = new GraceString("black");
    var call389 = callmethod(var_ctx,"fillStyle:=", [1], string388);
    lineNumber = 136
    var call390 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(250));
    lineNumber = 137
    var call391 = callmethod(var_ball,"draw", [0]);
    lineNumber = 138
    var call392 = callmethod(var_paddle,"draw", [0]);
    lineNumber = 139
    var call393 = callmethod(var_paddle2,"draw", [0]);
    return call393;
  };
  lineNumber = 131
  var call394 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block382, new GraceNum(5), block384);
  var call395 = callmethod(call394,"then", [1], block364);
  return this;
}
gracecode_pong.imports = [
'dom',
];
if (gctCache)
  gctCache['pong'] = "public:\n document\n ts\n canvas\n ctx\n ball\n paddle\n paddle2\n mouseMoveListener\nconfidential:\nmodules:\nfresh-methods:\npath:\n pong\nclasses:\n";
if (originalSourceLines) {
  originalSourceLines["pong"] = [
    "// A simple \"Pong\" game using the DOM module and canvas",
    "// element.  The left paddle will follow the mouse over",
    "// the canvas.",
    "import \"dom\" as dom",
    "",
    "def document = dom.document",
    "",
    "// Activate the canvas tab if it isn't already",
    "def ts = document.getElementById(\"output-select\")",
    "for (0..(ts.options.length-1)) do {i->",
    "    if (ts.options.item(i).value == \"canvas\") then {",
    "        ts.selectedIndex := i",
    "        dom.window.outputswitch",
    "    }",
    "}",
    "",
    "def canvas = dom.document.getElementById(\"standard-canvas\")",
    "def ctx = canvas.getContext(\"2d\")",
    "",
    "ctx.fillStyle := \"black\"",
    "ctx.fillRect(0, 0, 500, 250)",
    "",
    "def ball = object {",
    "    var x is readable := 250",
    "    var y is readable := 125",
    "    var dx is readable := -1",
    "    var dy := -0.75",
    "    method draw {",
    "        ctx.beginPath",
    "        ctx.fillStyle := \"white\"",
    "        ctx.fillRect(x-5, y-5, 10, 10)",
    "    }",
    "    method live {",
    "        return (x > 0) && (x < 500)",
    "    }",
    "    method step {",
    "        x := x + dx",
    "        y := y + dy",
    "        if (y <= 0) then {",
    "            dy := -dy",
    "        }",
    "        if (y >= 250) then {",
    "            dy := -dy",
    "        }",
    "        // Bouncing off user paddle",
    "        if (x <= 15) then {",
    "            if ((y < (paddle.y + 20)) && (y > (paddle.y - 20))) then {",
    "                dx := -dx",
    "            }",
    "            // Sharp bounces from the corners",
    "            if ((y < (paddle.y + 20)) && (y > (paddle.y + 10))) then {",
    "                dy := dy + 0.5",
    "            }",
    "            if ((y < (paddle.y - 10)) && (y > (paddle.y - 20))) then {",
    "                dy := dy - 0.5",
    "            }",
    "        }",
    "        // Bouncing off computer paddle",
    "        if (x >= 485) then {",
    "            if ((y < (paddle2.y + 20)) && (y > (paddle2.y - 20))) then {",
    "                dx := -dx",
    "            }",
    "            // Sharp bounces from the corners",
    "            if ((y < (paddle.y + 20)) && (y > (paddle.y + 10))) then {",
    "                dy := dy + 0.5",
    "            }",
    "            if ((y < (paddle.y - 10)) && (y > (paddle.y - 20))) then {",
    "                dy := dy - 0.5",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "// The user's paddle",
    "def paddle = object {",
    "    var y is readable := 125",
    "    var mouseY is readable, writable := 125",
    "    method step {",
    "        if (mouseY < y) then {",
    "            y := y - 2",
    "        }",
    "        if (mouseY > y) then {",
    "            y := y + 2",
    "        }",
    "    }",
    "    method draw {",
    "        ctx.beginPath",
    "        ctx.fillStyle := \"white\"",
    "        ctx.fillRect(0, y - 20, 10, 40)",
    "    }",
    "}",
    "// The computer's paddle",
    "def paddle2 = object {",
    "    var y is readable := 125",
    "    var mouseY is readable, writable := 125",
    "    method step {",
    "        if (ball.dx < 0) then {",
    "            // Move towards middle when ball going away",
    "            // from us.",
    "            if (y < 125) then {",
    "                y := y + 2",
    "            }",
    "            if (y > 125) then {",
    "                y := y - 2",
    "            }",
    "        } else {",
    "            // Move towards ball when it's coming",
    "            // towards us.",
    "            if (y < ball.y) then {",
    "                y := y + 2",
    "            }",
    "            if (y > ball.y) then {",
    "                y := y - 2",
    "            }",
    "        }",
    "    }",
    "    method draw {",
    "        ctx.beginPath",
    "        ctx.fillStyle := \"white\"",
    "        ctx.fillRect(490, y - 20, 10, 40)",
    "    }",
    "}",
    "",
    "// Save the listener function so that we can remove it",
    "// later on.",
    "def mouseMoveListener = { ev -> paddle.mouseY :=",
    "ev.clientY - canvas.offsetTop }",
    "canvas.addEventListener(\"mousemove\", mouseMoveListener)",
    "",
    "// Waits 5ms betweeen each iteration of this loop",
    "dom.while {ball.live} waiting 5 do {",
    "    ball.step",
    "    paddle.step",
    "    paddle2.step",
    "    ctx.fillStyle := \"black\"",
    "    ctx.fillRect(0, 0, 500, 250)",
    "    ball.draw",
    "    paddle.draw",
    "    paddle2.draw",
    "}.then { // When the while loop terminates, run this block.",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "    ctx.font := \"50px sans-serif\"",
    "    ctx.textAlign := \"center\"",
    "    ctx.textBaseline := \"middle\"",
    "    if (ball.x < 250) then {",
    "        ctx.fillText(\"You lose!\", 250, 125)",
    "    } else {",
    "        ctx.fillText(\"You win!\", 250, 125)",
    "    }",
    "}",
  ];
}
