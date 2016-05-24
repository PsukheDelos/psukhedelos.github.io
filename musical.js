function gracecode_musical () {
  this.definitionModule = "musical";
  this.definitionLine = 0;
  lineNumber = 184
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rectangle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 185
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "musical";
      obj1.definitionLine = 185;
      obj1.outer = this;
      var reader_musical_outer_2 = function() {
        return this.outer;
      }
      obj1.methods["outer"] = reader_musical_outer_2;
      function obj_init_1() {
        var origSuperDepth = superDepth;
        superDepth = obj1;
        obj1.annotations = [];
        var func3 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func3.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 192
            lineNumber = 1
            lineNumber = 191
            onSelf = true;
            var call4 = callmethod(this, "colour", [0]);
            var call5 = callmethod(var_ctx,"fillStyle:=", [1], call4);
            lineNumber = 192
            onSelf = true;
            var call7 = callmethod(this, "width", [0]);
            var quotient9 = callmethod(call7, "/", [1], new GraceNum(2));
            onSelf = true;
            var call11 = callmethod(this, "x", [0]);
            var diff13 = callmethod(call11, "-", [1], quotient9);
            onSelf = true;
            var call15 = callmethod(this, "height", [0]);
            var quotient17 = callmethod(call15, "/", [1], new GraceNum(2));
            onSelf = true;
            var call19 = callmethod(this, "y", [0]);
            var diff21 = callmethod(call19, "-", [1], quotient17);
            onSelf = true;
            var call22 = callmethod(this, "width", [0]);
            onSelf = true;
            var call23 = callmethod(this, "height", [0]);
            var call24 = callmethod(var_ctx,"fillRect", [4], diff13, diff21, call22, call23);
            return call24
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func3.paramCounts = [
          1,
        ];
        func3.variableArities = [
          false,
        ];
        obj1.methods["draw"] = func3;
        func3.definitionLine = 190;
        func3.definitionModule = "musical";
        var func25 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func25.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 198
            var if26 = var_done;
            lineNumber = 195
            onSelf = true;
            var call28 = callmethod(this, "width", [0]);
            var quotient30 = callmethod(call28, "/", [1], new GraceNum(2));
            onSelf = true;
            var call32 = callmethod(this, "x", [0]);
            var diff34 = callmethod(call32, "-", [1], quotient30);
            var call36 = callmethod(var_p,"x", [0]);
            var opresult38 = callmethod(call36, "<", [1], diff34);
            if (Grace_isTrue(opresult38)) {
              lineNumber = 197
              lineNumber = 196
              var bool39 = new GraceBoolean(false)
              return bool39
            }
            lineNumber = 201
            var if40 = var_done;
            lineNumber = 198
            onSelf = true;
            var call42 = callmethod(this, "width", [0]);
            var quotient44 = callmethod(call42, "/", [1], new GraceNum(2));
            onSelf = true;
            var call46 = callmethod(this, "x", [0]);
            var opresult48 = callmethod(call46, "+", [1], quotient44);
            var call50 = callmethod(var_p,"x", [0]);
            var opresult52 = callmethod(call50, ">", [1], opresult48);
            if (Grace_isTrue(opresult52)) {
              lineNumber = 200
              lineNumber = 199
              var bool53 = new GraceBoolean(false)
              return bool53
            }
            lineNumber = 204
            var if54 = var_done;
            lineNumber = 201
            onSelf = true;
            var call56 = callmethod(this, "height", [0]);
            var quotient58 = callmethod(call56, "/", [1], new GraceNum(2));
            onSelf = true;
            var call60 = callmethod(this, "y", [0]);
            var diff62 = callmethod(call60, "-", [1], quotient58);
            var call64 = callmethod(var_p,"y", [0]);
            var opresult66 = callmethod(call64, "<", [1], diff62);
            if (Grace_isTrue(opresult66)) {
              lineNumber = 203
              lineNumber = 202
              var bool67 = new GraceBoolean(false)
              return bool67
            }
            lineNumber = 207
            var if68 = var_done;
            lineNumber = 204
            onSelf = true;
            var call70 = callmethod(this, "height", [0]);
            var quotient72 = callmethod(call70, "/", [1], new GraceNum(2));
            onSelf = true;
            var call74 = callmethod(this, "y", [0]);
            var opresult76 = callmethod(call74, "+", [1], quotient72);
            var call78 = callmethod(var_p,"y", [0]);
            var opresult80 = callmethod(call78, ">", [1], opresult76);
            if (Grace_isTrue(opresult80)) {
              lineNumber = 206
              lineNumber = 205
              var bool81 = new GraceBoolean(false)
              return bool81
            }
            lineNumber = 208
            lineNumber = 207
            var bool82 = new GraceBoolean(true)
            return bool82
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func25.paramCounts = [
          1,
        ];
        func25.variableArities = [
          false,
        ];
        obj1.methods["isPointOver"] = func25;
        func25.definitionLine = 194;
        func25.definitionModule = "musical";
        var func83 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func83.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 211
            lineNumber = 210
            var string84 = new GraceString("rectangle");
            return string84
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func83.paramCounts = [
          0,
        ];
        func83.variableArities = [
          false,
        ];
        obj1.methods["asString"] = func83;
        func83.definitionLine = 209;
        func83.definitionModule = "musical";
        sourceObject = obj1;
        lineNumber = 186
        var call85 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj1.superobj = call85;
        obj1._value = call85._value;
        sourceObject = obj1;
        lineNumber = 187
        obj1.data["width"] = new GraceNum(100);
        var reader_musical_width_86 = function() {
          return this.data["width"];
        }
        obj1.methods["width"] = reader_musical_width_86;
        obj1.data["width"] = new GraceNum(100);
        var writer_musical_width_86 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj1.methods["width:="] = writer_musical_width_86;
        reader_musical_width_86.confidential = true;
        writer_musical_width_86.confidential = true;
        lineNumber = 188;
        moduleName = "musical";
        lineNumber = 187
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 188
        obj1.data["height"] = new GraceNum(50);
        var reader_musical_height_87 = function() {
          return this.data["height"];
        }
        obj1.methods["height"] = reader_musical_height_87;
        obj1.data["height"] = new GraceNum(50);
        var writer_musical_height_87 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj1.methods["height:="] = writer_musical_height_87;
        reader_musical_height_87.confidential = true;
        writer_musical_height_87.confidential = true;
        lineNumber = 189;
        moduleName = "musical";
        lineNumber = 188
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 189
        var string88 = new GraceString("blue");
        obj1.data["colour"] = string88;
        var reader_musical_colour_89 = function() {
          return this.data["colour"];
        }
        obj1.methods["colour"] = reader_musical_colour_89;
        obj1.data["colour"] = string88;
        var writer_musical_colour_89 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj1.methods["colour:="] = writer_musical_colour_89;
        reader_musical_colour_89.confidential = true;
        writer_musical_colour_89.confidential = true;
        lineNumber = 190;
        moduleName = "musical";
        lineNumber = 189
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string88)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        sourceObject = obj1;
        sourceObject = obj1;
        superDepth = origSuperDepth;
      }
      obj_init_1.apply(obj1, []);
      return obj1
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
  this.methods["rectangle"] = func0;
  func0.definitionLine = 184;
  func0.definitionModule = "musical";
  var func90 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj91 = Grace_allocObject();
      obj91.definitionModule = "musical";
      obj91.definitionLine = 185;
      var inho91 = inheritingObject;
      while (inho91.superobj) inho91 = inho91.superobj;
      inho91.superobj = obj91;
      obj91.data = inheritingObject.data;
      obj91.outer = this;
      var reader_musical_outer_92 = function() {
        return this.outer;
      }
      obj91.methods["outer"] = reader_musical_outer_92;
      function obj_init_91() {
        var origSuperDepth = superDepth;
        superDepth = obj91;
        obj91.annotations = [];
        var func93 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func93.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 192
            lineNumber = 204
            lineNumber = 191
            onSelf = true;
            var call94 = callmethod(this, "colour", [0]);
            var call95 = callmethod(var_ctx,"fillStyle:=", [1], call94);
            lineNumber = 192
            onSelf = true;
            var call97 = callmethod(this, "width", [0]);
            var quotient99 = callmethod(call97, "/", [1], new GraceNum(2));
            onSelf = true;
            var call101 = callmethod(this, "x", [0]);
            var diff103 = callmethod(call101, "-", [1], quotient99);
            onSelf = true;
            var call105 = callmethod(this, "height", [0]);
            var quotient107 = callmethod(call105, "/", [1], new GraceNum(2));
            onSelf = true;
            var call109 = callmethod(this, "y", [0]);
            var diff111 = callmethod(call109, "-", [1], quotient107);
            onSelf = true;
            var call112 = callmethod(this, "width", [0]);
            onSelf = true;
            var call113 = callmethod(this, "height", [0]);
            var call114 = callmethod(var_ctx,"fillRect", [4], diff103, diff111, call112, call113);
            return call114
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func93.paramCounts = [
          1,
        ];
        func93.variableArities = [
          false,
        ];
        obj91.methods["draw"] = func93;
        func93.definitionLine = 190;
        func93.definitionModule = "musical";
        var func115 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func115.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 198
            var if116 = var_done;
            lineNumber = 195
            onSelf = true;
            var call118 = callmethod(this, "width", [0]);
            var quotient120 = callmethod(call118, "/", [1], new GraceNum(2));
            onSelf = true;
            var call122 = callmethod(this, "x", [0]);
            var diff124 = callmethod(call122, "-", [1], quotient120);
            var call126 = callmethod(var_p,"x", [0]);
            var opresult128 = callmethod(call126, "<", [1], diff124);
            if (Grace_isTrue(opresult128)) {
              lineNumber = 197
              lineNumber = 196
              var bool129 = new GraceBoolean(false)
              return bool129
            }
            lineNumber = 201
            var if130 = var_done;
            lineNumber = 198
            onSelf = true;
            var call132 = callmethod(this, "width", [0]);
            var quotient134 = callmethod(call132, "/", [1], new GraceNum(2));
            onSelf = true;
            var call136 = callmethod(this, "x", [0]);
            var opresult138 = callmethod(call136, "+", [1], quotient134);
            var call140 = callmethod(var_p,"x", [0]);
            var opresult142 = callmethod(call140, ">", [1], opresult138);
            if (Grace_isTrue(opresult142)) {
              lineNumber = 200
              lineNumber = 199
              var bool143 = new GraceBoolean(false)
              return bool143
            }
            lineNumber = 204
            var if144 = var_done;
            lineNumber = 201
            onSelf = true;
            var call146 = callmethod(this, "height", [0]);
            var quotient148 = callmethod(call146, "/", [1], new GraceNum(2));
            onSelf = true;
            var call150 = callmethod(this, "y", [0]);
            var diff152 = callmethod(call150, "-", [1], quotient148);
            var call154 = callmethod(var_p,"y", [0]);
            var opresult156 = callmethod(call154, "<", [1], diff152);
            if (Grace_isTrue(opresult156)) {
              lineNumber = 203
              lineNumber = 202
              var bool157 = new GraceBoolean(false)
              return bool157
            }
            lineNumber = 207
            var if158 = var_done;
            lineNumber = 204
            onSelf = true;
            var call160 = callmethod(this, "height", [0]);
            var quotient162 = callmethod(call160, "/", [1], new GraceNum(2));
            onSelf = true;
            var call164 = callmethod(this, "y", [0]);
            var opresult166 = callmethod(call164, "+", [1], quotient162);
            var call168 = callmethod(var_p,"y", [0]);
            var opresult170 = callmethod(call168, ">", [1], opresult166);
            if (Grace_isTrue(opresult170)) {
              lineNumber = 206
              lineNumber = 205
              var bool171 = new GraceBoolean(false)
              return bool171
            }
            lineNumber = 208
            lineNumber = 207
            var bool172 = new GraceBoolean(true)
            return bool172
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
        ];
        func115.variableArities = [
          false,
        ];
        obj91.methods["isPointOver"] = func115;
        func115.definitionLine = 194;
        func115.definitionModule = "musical";
        var func173 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func173.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 211
            lineNumber = 210
            var string174 = new GraceString("rectangle");
            return string174
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func173.paramCounts = [
          0,
        ];
        func173.variableArities = [
          false,
        ];
        obj91.methods["asString"] = func173;
        func173.definitionLine = 209;
        func173.definitionModule = "musical";
        sourceObject = obj91;
        lineNumber = 186
        var call175 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj91.superobj = call175;
        obj91._value = call175._value;
        sourceObject = obj91;
        lineNumber = 187
        obj91.data["width"] = new GraceNum(100);
        var reader_musical_width_176 = function() {
          return this.data["width"];
        }
        obj91.methods["width"] = reader_musical_width_176;
        obj91.data["width"] = new GraceNum(100);
        var writer_musical_width_176 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj91.methods["width:="] = writer_musical_width_176;
        reader_musical_width_176.confidential = true;
        writer_musical_width_176.confidential = true;
        lineNumber = 188;
        moduleName = "musical";
        lineNumber = 187
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 188
        obj91.data["height"] = new GraceNum(50);
        var reader_musical_height_177 = function() {
          return this.data["height"];
        }
        obj91.methods["height"] = reader_musical_height_177;
        obj91.data["height"] = new GraceNum(50);
        var writer_musical_height_177 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj91.methods["height:="] = writer_musical_height_177;
        reader_musical_height_177.confidential = true;
        writer_musical_height_177.confidential = true;
        lineNumber = 189;
        moduleName = "musical";
        lineNumber = 188
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 189
        var string178 = new GraceString("blue");
        obj91.data["colour"] = string178;
        var reader_musical_colour_179 = function() {
          return this.data["colour"];
        }
        obj91.methods["colour"] = reader_musical_colour_179;
        obj91.data["colour"] = string178;
        var writer_musical_colour_179 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj91.methods["colour:="] = writer_musical_colour_179;
        reader_musical_colour_179.confidential = true;
        writer_musical_colour_179.confidential = true;
        lineNumber = 190;
        moduleName = "musical";
        lineNumber = 189
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string178)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        sourceObject = obj91;
        sourceObject = obj91;
        superDepth = origSuperDepth;
      }
      obj_init_91.apply(inheritingObject, []);
      return obj91
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["rectangle()object"] = func90;
  lineNumber = 221
  var type180 = new GraceType("SniffCircle");
  var var_SniffCircle = type180;
  type180.typeMethods.push("x");
  type180.typeMethods.push("y");
  type180.typeMethods.push("radius");
  type180.typeMethods.push("colour");
  lineNumber = 204
  var func181 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func181.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SniffCircle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      return var_SniffCircle
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func181.paramCounts = [
    0,
  ];
  func181.variableArities = [
    false,
  ];
  this.methods["SniffCircle"] = func181;
  func181.definitionLine = 204;
  func181.definitionModule = "musical";
  var type_SniffCircle = var_SniffCircle;
  lineNumber = 221
  var func182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func182.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (circle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 222
      var obj183 = Grace_allocObject();
      obj183.definitionModule = "musical";
      obj183.definitionLine = 222;
      obj183.outer = this;
      var reader_musical_outer_184 = function() {
        return this.outer;
      }
      obj183.methods["outer"] = reader_musical_outer_184;
      function obj_init_183() {
        var origSuperDepth = superDepth;
        superDepth = obj183;
        obj183.annotations = [];
        var func185 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func185.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 228
            lineNumber = 204
            lineNumber = 227
            onSelf = true;
            var call186 = callmethod(this, "colour", [0]);
            var call187 = callmethod(var_ctx,"fillStyle:=", [1], call186);
            lineNumber = 228
            var call188 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 229
            onSelf = true;
            var call189 = callmethod(this, "x", [0]);
            onSelf = true;
            var call190 = callmethod(this, "y", [0]);
            onSelf = true;
            var call191 = callmethod(this, "radius", [0]);
            var call192 = callmethod(var_ctx,"arc", [5], call189, call190, call191, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 230
            var call193 = callmethod(var_ctx,"fill", [0]);
            return call193
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func185.paramCounts = [
          1,
        ];
        func185.variableArities = [
          false,
        ];
        obj183.methods["draw"] = func185;
        func185.definitionLine = 226;
        func185.definitionModule = "musical";
        var func194 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func194.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 234
            lineNumber = 233
            onSelf = true;
            var call195 = callmethod(this, "x", [0]);
            var call197 = callmethod(var_p,"x", [0]);
            var diff199 = callmethod(call197, "-", [1], call195);
            var var_dx = diff199;
            lineNumber = 234;
            moduleName = "musical";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 235
            lineNumber = 234
            onSelf = true;
            var call200 = callmethod(this, "y", [0]);
            var call202 = callmethod(var_p,"y", [0]);
            var diff204 = callmethod(call202, "-", [1], call200);
            var var_dy = diff204;
            lineNumber = 235;
            moduleName = "musical";
            lineNumber = 234
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 236
            lineNumber = 235
            var prod208 = callmethod(var_dy, "*", [1], var_dy);
            var prod212 = callmethod(var_dx, "*", [1], var_dx);
            var opresult214 = callmethod(prod212, "+", [1], prod208);
            var opresult216 = callmethod(opresult214, "^", [1], new GraceNum(0.5));
            var var_dist = opresult216;
            lineNumber = 236;
            moduleName = "musical";
            lineNumber = 235
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 239
            var if217 = var_done;
            lineNumber = 236
            onSelf = true;
            var call218 = callmethod(this, "radius", [0]);
            var opresult221 = callmethod(var_dist, "<=", [1], call218);
            if (Grace_isTrue(opresult221)) {
              lineNumber = 238
              lineNumber = 237
              var bool222 = new GraceBoolean(true)
              return bool222
            }
            lineNumber = 240
            lineNumber = 239
            var bool223 = new GraceBoolean(false)
            return bool223
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func194.paramCounts = [
          1,
        ];
        func194.variableArities = [
          false,
        ];
        obj183.methods["isPointOver"] = func194;
        func194.definitionLine = 232;
        func194.definitionModule = "musical";
        var func224 = function(argcv) {
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func224.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 252
            var if225 = var_done;
            lineNumber = 242
            var call226 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call226)) {
              lineNumber = 244
              lineNumber = 243
              var call228 = callmethod(var_other,"y", [0]);
              onSelf = true;
              var call230 = callmethod(this, "y", [0]);
              var diff232 = callmethod(call230, "-", [1], call228);
              var opresult234 = callmethod(diff232, "^", [1], new GraceNum(2));
              var call237 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call239 = callmethod(this, "x", [0]);
              var diff241 = callmethod(call239, "-", [1], call237);
              var opresult243 = callmethod(diff241, "^", [1], new GraceNum(2));
              var opresult245 = callmethod(opresult243, "+", [1], opresult234);
              var var_n2 = opresult245;
              lineNumber = 244;
              moduleName = "musical";
              lineNumber = 243
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 247
              var if246 = var_done;
              lineNumber = 244
              var opresult249 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult249)) {
                lineNumber = 246
                lineNumber = 245
                var bool250 = new GraceBoolean(true)
                return bool250
              }
              lineNumber = 250
              var if251 = var_done;
              lineNumber = 247
              onSelf = true;
              var call252 = callmethod(this, "radius", [0]);
              var call254 = callmethod(var_other,"radius", [0]);
              var opresult256 = callmethod(call254, "+", [1], call252);
              var opresult260 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult262 = callmethod(opresult260, "<", [1], opresult256);
              if (Grace_isTrue(opresult262)) {
                lineNumber = 249
                lineNumber = 248
                var bool263 = new GraceBoolean(true)
                return bool263
              }
              lineNumber = 251
              lineNumber = 250
              var bool264 = new GraceBoolean(false)
              return bool264
            }
            lineNumber = 252
            var call265 = callmethodsuper(this, "touching", [1], var_other);
            return call265
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func224.paramCounts = [
          1,
        ];
        func224.variableArities = [
          false,
        ];
        obj183.methods["touching"] = func224;
        func224.definitionLine = 241;
        func224.definitionModule = "musical";
        sourceObject = obj183;
        lineNumber = 223
        var call266 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj183.superobj = call266;
        obj183._value = call266._value;
        sourceObject = obj183;
        lineNumber = 224
        obj183.data["radius"] = new GraceNum(25);
        var reader_musical_radius_267 = function() {
          return this.data["radius"];
        }
        obj183.methods["radius"] = reader_musical_radius_267;
        obj183.data["radius"] = new GraceNum(25);
        var writer_musical_radius_267 = function(argcv, o) {
          this.data["radius"] = o;
        }
        obj183.methods["radius:="] = writer_musical_radius_267;
        writer_musical_radius_267.confidential = true;
        lineNumber = 225;
        moduleName = "musical";
        lineNumber = 224
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        lineNumber = 225
        var string268 = new GraceString("green");
        obj183.data["colour"] = string268;
        var reader_musical_colour_269 = function() {
          return this.data["colour"];
        }
        obj183.methods["colour"] = reader_musical_colour_269;
        obj183.data["colour"] = string268;
        var writer_musical_colour_269 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj183.methods["colour:="] = writer_musical_colour_269;
        writer_musical_colour_269.confidential = true;
        lineNumber = 226;
        moduleName = "musical";
        lineNumber = 225
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string268)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        sourceObject = obj183;
        sourceObject = obj183;
        superDepth = origSuperDepth;
      }
      obj_init_183.apply(obj183, []);
      return obj183
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func182.paramCounts = [
    0,
  ];
  func182.variableArities = [
    false,
  ];
  this.methods["circle"] = func182;
  func182.definitionLine = 221;
  func182.definitionModule = "musical";
  var func270 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj271 = Grace_allocObject();
      obj271.definitionModule = "musical";
      obj271.definitionLine = 222;
      var inho271 = inheritingObject;
      while (inho271.superobj) inho271 = inho271.superobj;
      inho271.superobj = obj271;
      obj271.data = inheritingObject.data;
      obj271.outer = this;
      var reader_musical_outer_272 = function() {
        return this.outer;
      }
      obj271.methods["outer"] = reader_musical_outer_272;
      function obj_init_271() {
        var origSuperDepth = superDepth;
        superDepth = obj271;
        obj271.annotations = [];
        var func273 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func273.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 228
            lineNumber = 247
            lineNumber = 227
            onSelf = true;
            var call274 = callmethod(this, "colour", [0]);
            var call275 = callmethod(var_ctx,"fillStyle:=", [1], call274);
            lineNumber = 228
            var call276 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 229
            onSelf = true;
            var call277 = callmethod(this, "x", [0]);
            onSelf = true;
            var call278 = callmethod(this, "y", [0]);
            onSelf = true;
            var call279 = callmethod(this, "radius", [0]);
            var call280 = callmethod(var_ctx,"arc", [5], call277, call278, call279, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 230
            var call281 = callmethod(var_ctx,"fill", [0]);
            return call281
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func273.paramCounts = [
          1,
        ];
        func273.variableArities = [
          false,
        ];
        obj271.methods["draw"] = func273;
        func273.definitionLine = 226;
        func273.definitionModule = "musical";
        var func282 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func282.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 234
            lineNumber = 233
            onSelf = true;
            var call283 = callmethod(this, "x", [0]);
            var call285 = callmethod(var_p,"x", [0]);
            var diff287 = callmethod(call285, "-", [1], call283);
            var var_dx = diff287;
            lineNumber = 234;
            moduleName = "musical";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 235
            lineNumber = 234
            onSelf = true;
            var call288 = callmethod(this, "y", [0]);
            var call290 = callmethod(var_p,"y", [0]);
            var diff292 = callmethod(call290, "-", [1], call288);
            var var_dy = diff292;
            lineNumber = 235;
            moduleName = "musical";
            lineNumber = 234
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 236
            lineNumber = 235
            var prod296 = callmethod(var_dy, "*", [1], var_dy);
            var prod300 = callmethod(var_dx, "*", [1], var_dx);
            var opresult302 = callmethod(prod300, "+", [1], prod296);
            var opresult304 = callmethod(opresult302, "^", [1], new GraceNum(0.5));
            var var_dist = opresult304;
            lineNumber = 236;
            moduleName = "musical";
            lineNumber = 235
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 239
            var if305 = var_done;
            lineNumber = 236
            onSelf = true;
            var call306 = callmethod(this, "radius", [0]);
            var opresult309 = callmethod(var_dist, "<=", [1], call306);
            if (Grace_isTrue(opresult309)) {
              lineNumber = 238
              lineNumber = 237
              var bool310 = new GraceBoolean(true)
              return bool310
            }
            lineNumber = 240
            lineNumber = 239
            var bool311 = new GraceBoolean(false)
            return bool311
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func282.paramCounts = [
          1,
        ];
        func282.variableArities = [
          false,
        ];
        obj271.methods["isPointOver"] = func282;
        func282.definitionLine = 232;
        func282.definitionModule = "musical";
        var func312 = function(argcv) {
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func312.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 252
            var if313 = var_done;
            lineNumber = 242
            var call314 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call314)) {
              lineNumber = 244
              lineNumber = 243
              var call316 = callmethod(var_other,"y", [0]);
              onSelf = true;
              var call318 = callmethod(this, "y", [0]);
              var diff320 = callmethod(call318, "-", [1], call316);
              var opresult322 = callmethod(diff320, "^", [1], new GraceNum(2));
              var call325 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call327 = callmethod(this, "x", [0]);
              var diff329 = callmethod(call327, "-", [1], call325);
              var opresult331 = callmethod(diff329, "^", [1], new GraceNum(2));
              var opresult333 = callmethod(opresult331, "+", [1], opresult322);
              var var_n2 = opresult333;
              lineNumber = 244;
              moduleName = "musical";
              lineNumber = 243
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 247
              var if334 = var_done;
              lineNumber = 244
              var opresult337 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult337)) {
                lineNumber = 246
                lineNumber = 245
                var bool338 = new GraceBoolean(true)
                return bool338
              }
              lineNumber = 250
              var if339 = var_done;
              lineNumber = 247
              onSelf = true;
              var call340 = callmethod(this, "radius", [0]);
              var call342 = callmethod(var_other,"radius", [0]);
              var opresult344 = callmethod(call342, "+", [1], call340);
              var opresult348 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult350 = callmethod(opresult348, "<", [1], opresult344);
              if (Grace_isTrue(opresult350)) {
                lineNumber = 249
                lineNumber = 248
                var bool351 = new GraceBoolean(true)
                return bool351
              }
              lineNumber = 251
              lineNumber = 250
              var bool352 = new GraceBoolean(false)
              return bool352
            }
            lineNumber = 252
            var call353 = callmethodsuper(this, "touching", [1], var_other);
            return call353
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func312.paramCounts = [
          1,
        ];
        func312.variableArities = [
          false,
        ];
        obj271.methods["touching"] = func312;
        func312.definitionLine = 241;
        func312.definitionModule = "musical";
        sourceObject = obj271;
        lineNumber = 223
        var call354 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj271.superobj = call354;
        obj271._value = call354._value;
        sourceObject = obj271;
        lineNumber = 224
        obj271.data["radius"] = new GraceNum(25);
        var reader_musical_radius_355 = function() {
          return this.data["radius"];
        }
        obj271.methods["radius"] = reader_musical_radius_355;
        obj271.data["radius"] = new GraceNum(25);
        var writer_musical_radius_355 = function(argcv, o) {
          this.data["radius"] = o;
        }
        obj271.methods["radius:="] = writer_musical_radius_355;
        writer_musical_radius_355.confidential = true;
        lineNumber = 225;
        moduleName = "musical";
        lineNumber = 224
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        lineNumber = 225
        var string356 = new GraceString("green");
        obj271.data["colour"] = string356;
        var reader_musical_colour_357 = function() {
          return this.data["colour"];
        }
        obj271.methods["colour"] = reader_musical_colour_357;
        obj271.data["colour"] = string356;
        var writer_musical_colour_357 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj271.methods["colour:="] = writer_musical_colour_357;
        writer_musical_colour_357.confidential = true;
        lineNumber = 226;
        moduleName = "musical";
        lineNumber = 225
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string356)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        sourceObject = obj271;
        sourceObject = obj271;
        superDepth = origSuperDepth;
      }
      obj_init_271.apply(inheritingObject, []);
      return obj271
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["circle()object"] = func270;
  lineNumber = 257
  var func358 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func358.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 258
      var obj359 = Grace_allocObject();
      obj359.definitionModule = "musical";
      obj359.definitionLine = 258;
      obj359.outer = this;
      var reader_musical_outer_360 = function() {
        return this.outer;
      }
      obj359.methods["outer"] = reader_musical_outer_360;
      function obj_init_359() {
        var origSuperDepth = superDepth;
        superDepth = obj359;
        obj359.annotations = [];
        var func361 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func361.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 264
            onSelf = true;
            var call362 = callmethod(this, "imgTag", [0]);
            var call363 = callmethod(call362,"src", [0]);
            return call363
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
        obj359.methods["url"] = func361;
        func361.definitionLine = 263;
        func361.definitionModule = "musical";
        var func364 = function(argcv) {
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func364.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url:=)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 268
            lineNumber = 264
            lineNumber = 267
            onSelf = true;
            var call365 = callmethod(this, "imgTag", [0]);
            var call366 = callmethod(call365,"src:=", [1], var_s);
            return call366
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func364.paramCounts = [
          1,
        ];
        func364.variableArities = [
          false,
        ];
        obj359.methods["url:="] = func364;
        func364.definitionLine = 266;
        func364.definitionModule = "musical";
        var func367 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func367.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 270
            var call368 = callmethod(var_ctx,"save", [0]);
            lineNumber = 271
            onSelf = true;
            var call369 = callmethod(this, "x", [0]);
            onSelf = true;
            var call370 = callmethod(this, "y", [0]);
            var call371 = callmethod(var_ctx,"translate", [2], call369, call370);
            lineNumber = 272
            onSelf = true;
            var call375 = callmethod(this, "angle", [0]);
            var opresult377 = callmethod(call375, "+", [1], new GraceNum(180));
            var call378 = callmethod(opresult377,"prefix-", [0]);
            var quotient380 = callmethod(call378, "/", [1], new GraceNum(180));
            var prod382 = callmethod(quotient380, "*", [1], new GraceNum(3.1415));
            var call383 = callmethod(var_ctx,"rotate", [1], prod382);
            lineNumber = 273
            onSelf = true;
            var call384 = callmethod(this, "imgTag", [0]);
            onSelf = true;
            var call386 = callmethod(this, "width", [0]);
            var call387 = callmethod(call386,"prefix-", [0]);
            var quotient389 = callmethod(call387, "/", [1], new GraceNum(2));
            onSelf = true;
            var call391 = callmethod(this, "height", [0]);
            var call392 = callmethod(call391,"prefix-", [0]);
            var quotient394 = callmethod(call392, "/", [1], new GraceNum(2));
            onSelf = true;
            var call395 = callmethod(this, "width", [0]);
            onSelf = true;
            var call396 = callmethod(this, "height", [0]);
            var call397 = callmethod(var_ctx,"drawImage", [5], call384, quotient389, quotient394, call395, call396);
            lineNumber = 274
            var call398 = callmethod(var_ctx,"restore", [0]);
            return call398
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func367.paramCounts = [
          1,
        ];
        func367.variableArities = [
          false,
        ];
        obj359.methods["draw"] = func367;
        func367.definitionLine = 269;
        func367.definitionModule = "musical";
        var func399 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func399.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 279
            onSelf = true;
            var call403 = callmethod(this, "angle", [0]);
            var opresult405 = callmethod(call403, "+", [1], new GraceNum(180));
            var call406 = callmethod(opresult405,"prefix-", [0]);
            var quotient408 = callmethod(call406, "/", [1], new GraceNum(180));
            var prod410 = callmethod(quotient408, "*", [1], new GraceNum(3.1415));
            var call411 = callmethod(var_trig,"cos", [1], prod410);
            var var_c = call411;
            lineNumber = 279;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 280
            onSelf = true;
            var call415 = callmethod(this, "angle", [0]);
            var opresult417 = callmethod(call415, "+", [1], new GraceNum(180));
            var call418 = callmethod(opresult417,"prefix-", [0]);
            var quotient420 = callmethod(call418, "/", [1], new GraceNum(180));
            var prod422 = callmethod(quotient420, "*", [1], new GraceNum(3.1415));
            var call423 = callmethod(var_trig,"sin", [1], prod422);
            var var_s = call423;
            lineNumber = 280;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 282
            lineNumber = 281
            onSelf = true;
            var call424 = callmethod(this, "y", [0]);
            var call426 = callmethod(var_p,"y", [0]);
            var diff428 = callmethod(call426, "-", [1], call424);
            var prod431 = callmethod(var_s, "*", [1], diff428);
            onSelf = true;
            var call433 = callmethod(this, "x", [0]);
            var call435 = callmethod(var_p,"x", [0]);
            var diff437 = callmethod(call435, "-", [1], call433);
            var prod440 = callmethod(var_c, "*", [1], diff437);
            var diff442 = callmethod(prod440, "-", [1], prod431);
            var var_rotatedX = diff442;
            lineNumber = 282;
            moduleName = "musical";
            lineNumber = 281
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 283
            lineNumber = 282
            onSelf = true;
            var call443 = callmethod(this, "y", [0]);
            var call445 = callmethod(var_p,"y", [0]);
            var diff447 = callmethod(call445, "-", [1], call443);
            var prod450 = callmethod(var_c, "*", [1], diff447);
            onSelf = true;
            var call452 = callmethod(this, "x", [0]);
            var call454 = callmethod(var_p,"x", [0]);
            var diff456 = callmethod(call454, "-", [1], call452);
            var prod459 = callmethod(var_s, "*", [1], diff456);
            var opresult461 = callmethod(prod459, "+", [1], prod450);
            var var_rotatedY = opresult461;
            lineNumber = 283;
            moduleName = "musical";
            lineNumber = 282
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 286
            var if462 = var_done;
            lineNumber = 283
            onSelf = true;
            var call464 = callmethod(this, "width", [0]);
            var call465 = callmethod(call464,"prefix-", [0]);
            var quotient467 = callmethod(call465, "/", [1], new GraceNum(2));
            var opresult470 = callmethod(var_rotatedX, "<", [1], quotient467);
            if (Grace_isTrue(opresult470)) {
              lineNumber = 285
              lineNumber = 284
              var bool471 = new GraceBoolean(false)
              return bool471
            }
            lineNumber = 289
            var if472 = var_done;
            lineNumber = 286
            onSelf = true;
            var call474 = callmethod(this, "width", [0]);
            var quotient476 = callmethod(call474, "/", [1], new GraceNum(2));
            var opresult479 = callmethod(var_rotatedX, ">", [1], quotient476);
            if (Grace_isTrue(opresult479)) {
              lineNumber = 288
              lineNumber = 287
              var bool480 = new GraceBoolean(false)
              return bool480
            }
            lineNumber = 292
            var if481 = var_done;
            lineNumber = 289
            onSelf = true;
            var call483 = callmethod(this, "height", [0]);
            var call484 = callmethod(call483,"prefix-", [0]);
            var quotient486 = callmethod(call484, "/", [1], new GraceNum(2));
            var opresult489 = callmethod(var_rotatedY, "<", [1], quotient486);
            if (Grace_isTrue(opresult489)) {
              lineNumber = 291
              lineNumber = 290
              var bool490 = new GraceBoolean(false)
              return bool490
            }
            lineNumber = 295
            var if491 = var_done;
            lineNumber = 292
            onSelf = true;
            var call493 = callmethod(this, "height", [0]);
            var quotient495 = callmethod(call493, "/", [1], new GraceNum(2));
            var opresult498 = callmethod(var_rotatedY, ">", [1], quotient495);
            if (Grace_isTrue(opresult498)) {
              lineNumber = 294
              lineNumber = 293
              var bool499 = new GraceBoolean(false)
              return bool499
            }
            lineNumber = 296
            lineNumber = 295
            var bool500 = new GraceBoolean(true)
            return bool500
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func399.paramCounts = [
          1,
        ];
        func399.variableArities = [
          false,
        ];
        obj359.methods["isPointOver"] = func399;
        func399.definitionLine = 276;
        func399.definitionModule = "musical";
        sourceObject = obj359;
        lineNumber = 259
        var call501 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj359.superobj = call501;
        obj359._value = call501._value;
        sourceObject = obj359;
        lineNumber = 260
        obj359.data["width"] = new GraceNum(64);
        var reader_musical_width_502 = function() {
          return this.data["width"];
        }
        obj359.methods["width"] = reader_musical_width_502;
        obj359.data["width"] = new GraceNum(64);
        var writer_musical_width_502 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj359.methods["width:="] = writer_musical_width_502;
        reader_musical_width_502.confidential = true;
        writer_musical_width_502.confidential = true;
        lineNumber = 261;
        moduleName = "musical";
        lineNumber = 260
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 261
        obj359.data["height"] = new GraceNum(64);
        var reader_musical_height_503 = function() {
          return this.data["height"];
        }
        obj359.methods["height"] = reader_musical_height_503;
        obj359.data["height"] = new GraceNum(64);
        var writer_musical_height_503 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj359.methods["height:="] = writer_musical_height_503;
        reader_musical_height_503.confidential = true;
        writer_musical_height_503.confidential = true;
        lineNumber = 262;
        moduleName = "musical";
        lineNumber = 261
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 262
        var string504 = new GraceString("img");
        var call505 = callmethod(var_dom,"document", [0]);
        var call506 = callmethod(call505,"createElement", [1], string504);
        obj359.data["imgTag"] = call506;
        var reader_musical_imgTag_507 = function() {
          return this.data["imgTag"];
        }
        reader_musical_imgTag_507.def = true;
        reader_musical_imgTag_507.confidential = true;
        obj359.methods["imgTag"] = reader_musical_imgTag_507;
        lineNumber = 262;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], call506)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'imgTag' to be of type Unknown"))
        sourceObject = obj359;
        sourceObject = obj359;
        sourceObject = obj359;
        sourceObject = obj359;
        superDepth = origSuperDepth;
      }
      obj_init_359.apply(obj359, []);
      return obj359
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func358.paramCounts = [
    0,
  ];
  func358.variableArities = [
    false,
  ];
  this.methods["image"] = func358;
  func358.definitionLine = 257;
  func358.definitionModule = "musical";
  var func508 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj509 = Grace_allocObject();
      obj509.definitionModule = "musical";
      obj509.definitionLine = 258;
      var inho509 = inheritingObject;
      while (inho509.superobj) inho509 = inho509.superobj;
      inho509.superobj = obj509;
      obj509.data = inheritingObject.data;
      obj509.outer = this;
      var reader_musical_outer_510 = function() {
        return this.outer;
      }
      obj509.methods["outer"] = reader_musical_outer_510;
      function obj_init_509() {
        var origSuperDepth = superDepth;
        superDepth = obj509;
        obj509.annotations = [];
        var func511 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func511.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 264
            onSelf = true;
            var call512 = callmethod(this, "imgTag", [0]);
            var call513 = callmethod(call512,"src", [0]);
            return call513
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func511.paramCounts = [
          0,
        ];
        func511.variableArities = [
          false,
        ];
        obj509.methods["url"] = func511;
        func511.definitionLine = 263;
        func511.definitionModule = "musical";
        var func514 = function(argcv) {
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func514.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url:=)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 268
            lineNumber = 264
            lineNumber = 267
            onSelf = true;
            var call515 = callmethod(this, "imgTag", [0]);
            var call516 = callmethod(call515,"src:=", [1], var_s);
            return call516
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func514.paramCounts = [
          1,
        ];
        func514.variableArities = [
          false,
        ];
        obj509.methods["url:="] = func514;
        func514.definitionLine = 266;
        func514.definitionModule = "musical";
        var func517 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func517.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 270
            var call518 = callmethod(var_ctx,"save", [0]);
            lineNumber = 271
            onSelf = true;
            var call519 = callmethod(this, "x", [0]);
            onSelf = true;
            var call520 = callmethod(this, "y", [0]);
            var call521 = callmethod(var_ctx,"translate", [2], call519, call520);
            lineNumber = 272
            onSelf = true;
            var call525 = callmethod(this, "angle", [0]);
            var opresult527 = callmethod(call525, "+", [1], new GraceNum(180));
            var call528 = callmethod(opresult527,"prefix-", [0]);
            var quotient530 = callmethod(call528, "/", [1], new GraceNum(180));
            var prod532 = callmethod(quotient530, "*", [1], new GraceNum(3.1415));
            var call533 = callmethod(var_ctx,"rotate", [1], prod532);
            lineNumber = 273
            onSelf = true;
            var call534 = callmethod(this, "imgTag", [0]);
            onSelf = true;
            var call536 = callmethod(this, "width", [0]);
            var call537 = callmethod(call536,"prefix-", [0]);
            var quotient539 = callmethod(call537, "/", [1], new GraceNum(2));
            onSelf = true;
            var call541 = callmethod(this, "height", [0]);
            var call542 = callmethod(call541,"prefix-", [0]);
            var quotient544 = callmethod(call542, "/", [1], new GraceNum(2));
            onSelf = true;
            var call545 = callmethod(this, "width", [0]);
            onSelf = true;
            var call546 = callmethod(this, "height", [0]);
            var call547 = callmethod(var_ctx,"drawImage", [5], call534, quotient539, quotient544, call545, call546);
            lineNumber = 274
            var call548 = callmethod(var_ctx,"restore", [0]);
            return call548
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func517.paramCounts = [
          1,
        ];
        func517.variableArities = [
          false,
        ];
        obj509.methods["draw"] = func517;
        func517.definitionLine = 269;
        func517.definitionModule = "musical";
        var func549 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func549.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 279
            onSelf = true;
            var call553 = callmethod(this, "angle", [0]);
            var opresult555 = callmethod(call553, "+", [1], new GraceNum(180));
            var call556 = callmethod(opresult555,"prefix-", [0]);
            var quotient558 = callmethod(call556, "/", [1], new GraceNum(180));
            var prod560 = callmethod(quotient558, "*", [1], new GraceNum(3.1415));
            var call561 = callmethod(var_trig,"cos", [1], prod560);
            var var_c = call561;
            lineNumber = 279;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 280
            onSelf = true;
            var call565 = callmethod(this, "angle", [0]);
            var opresult567 = callmethod(call565, "+", [1], new GraceNum(180));
            var call568 = callmethod(opresult567,"prefix-", [0]);
            var quotient570 = callmethod(call568, "/", [1], new GraceNum(180));
            var prod572 = callmethod(quotient570, "*", [1], new GraceNum(3.1415));
            var call573 = callmethod(var_trig,"sin", [1], prod572);
            var var_s = call573;
            lineNumber = 280;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 282
            lineNumber = 281
            onSelf = true;
            var call574 = callmethod(this, "y", [0]);
            var call576 = callmethod(var_p,"y", [0]);
            var diff578 = callmethod(call576, "-", [1], call574);
            var prod581 = callmethod(var_s, "*", [1], diff578);
            onSelf = true;
            var call583 = callmethod(this, "x", [0]);
            var call585 = callmethod(var_p,"x", [0]);
            var diff587 = callmethod(call585, "-", [1], call583);
            var prod590 = callmethod(var_c, "*", [1], diff587);
            var diff592 = callmethod(prod590, "-", [1], prod581);
            var var_rotatedX = diff592;
            lineNumber = 282;
            moduleName = "musical";
            lineNumber = 281
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 283
            lineNumber = 282
            onSelf = true;
            var call593 = callmethod(this, "y", [0]);
            var call595 = callmethod(var_p,"y", [0]);
            var diff597 = callmethod(call595, "-", [1], call593);
            var prod600 = callmethod(var_c, "*", [1], diff597);
            onSelf = true;
            var call602 = callmethod(this, "x", [0]);
            var call604 = callmethod(var_p,"x", [0]);
            var diff606 = callmethod(call604, "-", [1], call602);
            var prod609 = callmethod(var_s, "*", [1], diff606);
            var opresult611 = callmethod(prod609, "+", [1], prod600);
            var var_rotatedY = opresult611;
            lineNumber = 283;
            moduleName = "musical";
            lineNumber = 282
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 286
            var if612 = var_done;
            lineNumber = 283
            onSelf = true;
            var call614 = callmethod(this, "width", [0]);
            var call615 = callmethod(call614,"prefix-", [0]);
            var quotient617 = callmethod(call615, "/", [1], new GraceNum(2));
            var opresult620 = callmethod(var_rotatedX, "<", [1], quotient617);
            if (Grace_isTrue(opresult620)) {
              lineNumber = 285
              lineNumber = 284
              var bool621 = new GraceBoolean(false)
              return bool621
            }
            lineNumber = 289
            var if622 = var_done;
            lineNumber = 286
            onSelf = true;
            var call624 = callmethod(this, "width", [0]);
            var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
            var opresult629 = callmethod(var_rotatedX, ">", [1], quotient626);
            if (Grace_isTrue(opresult629)) {
              lineNumber = 288
              lineNumber = 287
              var bool630 = new GraceBoolean(false)
              return bool630
            }
            lineNumber = 292
            var if631 = var_done;
            lineNumber = 289
            onSelf = true;
            var call633 = callmethod(this, "height", [0]);
            var call634 = callmethod(call633,"prefix-", [0]);
            var quotient636 = callmethod(call634, "/", [1], new GraceNum(2));
            var opresult639 = callmethod(var_rotatedY, "<", [1], quotient636);
            if (Grace_isTrue(opresult639)) {
              lineNumber = 291
              lineNumber = 290
              var bool640 = new GraceBoolean(false)
              return bool640
            }
            lineNumber = 295
            var if641 = var_done;
            lineNumber = 292
            onSelf = true;
            var call643 = callmethod(this, "height", [0]);
            var quotient645 = callmethod(call643, "/", [1], new GraceNum(2));
            var opresult648 = callmethod(var_rotatedY, ">", [1], quotient645);
            if (Grace_isTrue(opresult648)) {
              lineNumber = 294
              lineNumber = 293
              var bool649 = new GraceBoolean(false)
              return bool649
            }
            lineNumber = 296
            lineNumber = 295
            var bool650 = new GraceBoolean(true)
            return bool650
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func549.paramCounts = [
          1,
        ];
        func549.variableArities = [
          false,
        ];
        obj509.methods["isPointOver"] = func549;
        func549.definitionLine = 276;
        func549.definitionModule = "musical";
        sourceObject = obj509;
        lineNumber = 259
        var call651 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj509.superobj = call651;
        obj509._value = call651._value;
        sourceObject = obj509;
        lineNumber = 260
        obj509.data["width"] = new GraceNum(64);
        var reader_musical_width_652 = function() {
          return this.data["width"];
        }
        obj509.methods["width"] = reader_musical_width_652;
        obj509.data["width"] = new GraceNum(64);
        var writer_musical_width_652 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj509.methods["width:="] = writer_musical_width_652;
        reader_musical_width_652.confidential = true;
        writer_musical_width_652.confidential = true;
        lineNumber = 261;
        moduleName = "musical";
        lineNumber = 260
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 261
        obj509.data["height"] = new GraceNum(64);
        var reader_musical_height_653 = function() {
          return this.data["height"];
        }
        obj509.methods["height"] = reader_musical_height_653;
        obj509.data["height"] = new GraceNum(64);
        var writer_musical_height_653 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj509.methods["height:="] = writer_musical_height_653;
        reader_musical_height_653.confidential = true;
        writer_musical_height_653.confidential = true;
        lineNumber = 262;
        moduleName = "musical";
        lineNumber = 261
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 262
        var string654 = new GraceString("img");
        var call655 = callmethod(var_dom,"document", [0]);
        var call656 = callmethod(call655,"createElement", [1], string654);
        obj509.data["imgTag"] = call656;
        var reader_musical_imgTag_657 = function() {
          return this.data["imgTag"];
        }
        reader_musical_imgTag_657.def = true;
        reader_musical_imgTag_657.confidential = true;
        obj509.methods["imgTag"] = reader_musical_imgTag_657;
        lineNumber = 262;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], call656)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'imgTag' to be of type Unknown"))
        sourceObject = obj509;
        sourceObject = obj509;
        sourceObject = obj509;
        sourceObject = obj509;
        superDepth = origSuperDepth;
      }
      obj_init_509.apply(inheritingObject, []);
      return obj509
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["image()object"] = func508;
  lineNumber = 300
  var func658 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func658.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (value)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 301
      var obj659 = Grace_allocObject();
      obj659.definitionModule = "musical";
      obj659.definitionLine = 301;
      obj659.outer = this;
      var reader_musical_outer_660 = function() {
        return this.outer;
      }
      obj659.methods["outer"] = reader_musical_outer_660;
      function obj_init_659() {
        var origSuperDepth = superDepth;
        superDepth = obj659;
        obj659.annotations = [];
        var func661 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func661.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 307
            lineNumber = 262
            lineNumber = 306
            onSelf = true;
            var call662 = callmethod(this, "colour", [0]);
            var call663 = callmethod(var_ctx,"fillStyle:=", [1], call662);
            lineNumber = 308
            lineNumber = 262
            lineNumber = 307
            var string664 = new GraceString("20px sans-serif");
            var call665 = callmethod(var_ctx,"font:=", [1], string664);
            lineNumber = 313
            var if666 = var_done;
            lineNumber = 308
            var string667 = new GraceString("");
            onSelf = true;
            var call669 = callmethod(this, "label", [0]);
            var opresult671 = callmethod(call669, "!=", [1], string667);
            if (Grace_isTrue(opresult671)) {
              lineNumber = 309
              var string672 = new GraceString("");
              var call674 = callmethod(var_b,"apply", [0]);
              var string676 = new GraceString(" ");
              onSelf = true;
              var call678 = callmethod(this, "label", [0]);
              var string680 = new GraceString("");
              var opresult682 = callmethod(string680, "++", [1], call678);
              var opresult684 = callmethod(opresult682, "++", [1], string676);
              var opresult686 = callmethod(opresult684, "++", [1], call674);
              var opresult688 = callmethod(opresult686, "++", [1], string672);
              onSelf = true;
              var call689 = callmethod(this, "x", [0]);
              onSelf = true;
              var call690 = callmethod(this, "y", [0]);
              var call691 = callmethod(var_ctx,"fillText", [3], opresult688, call689, call690);
              if666 = call691;
            } else {
              lineNumber = 311
              var string692 = new GraceString("");
              var call694 = callmethod(var_b,"apply", [0]);
              var string696 = new GraceString("");
              var opresult698 = callmethod(string696, "++", [1], call694);
              var opresult700 = callmethod(opresult698, "++", [1], string692);
              onSelf = true;
              var call701 = callmethod(this, "x", [0]);
              onSelf = true;
              var call702 = callmethod(this, "y", [0]);
              var call703 = callmethod(var_ctx,"fillText", [3], opresult700, call701, call702);
              if666 = call703;
            }
            return if666
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func661.paramCounts = [
          1,
        ];
        func661.variableArities = [
          false,
        ];
        obj659.methods["draw"] = func661;
        func661.definitionLine = 305;
        func661.definitionModule = "musical";
        sourceObject = obj659;
        lineNumber = 302
        var call704 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj659.superobj = call704;
        obj659._value = call704._value;
        sourceObject = obj659;
        lineNumber = 303
        var string705 = new GraceString("blue");
        obj659.data["colour"] = string705;
        var reader_musical_colour_706 = function() {
          return this.data["colour"];
        }
        obj659.methods["colour"] = reader_musical_colour_706;
        obj659.data["colour"] = string705;
        var writer_musical_colour_706 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj659.methods["colour:="] = writer_musical_colour_706;
        reader_musical_colour_706.confidential = true;
        writer_musical_colour_706.confidential = true;
        lineNumber = 304;
        moduleName = "musical";
        lineNumber = 303
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string705)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        lineNumber = 304
        var string707 = new GraceString("");
        obj659.data["label"] = string707;
        var reader_musical_label_708 = function() {
          return this.data["label"];
        }
        obj659.methods["label"] = reader_musical_label_708;
        obj659.data["label"] = string707;
        var writer_musical_label_708 = function(argcv, o) {
          this.data["label"] = o;
        }
        obj659.methods["label:="] = writer_musical_label_708;
        reader_musical_label_708.confidential = true;
        writer_musical_label_708.confidential = true;
        lineNumber = 305;
        moduleName = "musical";
        lineNumber = 304
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string707)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'label' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        superDepth = origSuperDepth;
      }
      obj_init_659.apply(obj659, []);
      return obj659
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func658.paramCounts = [
    1,
  ];
  func658.variableArities = [
    false,
  ];
  this.methods["value"] = func658;
  func658.definitionLine = 300;
  func658.definitionModule = "musical";
  var func709 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj710 = Grace_allocObject();
      obj710.definitionModule = "musical";
      obj710.definitionLine = 301;
      var inho710 = inheritingObject;
      while (inho710.superobj) inho710 = inho710.superobj;
      inho710.superobj = obj710;
      obj710.data = inheritingObject.data;
      obj710.outer = this;
      var reader_musical_outer_711 = function() {
        return this.outer;
      }
      obj710.methods["outer"] = reader_musical_outer_711;
      function obj_init_710() {
        var origSuperDepth = superDepth;
        superDepth = obj710;
        obj710.annotations = [];
        var func712 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func712.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 307
            lineNumber = 311
            lineNumber = 306
            onSelf = true;
            var call713 = callmethod(this, "colour", [0]);
            var call714 = callmethod(var_ctx,"fillStyle:=", [1], call713);
            lineNumber = 308
            lineNumber = 311
            lineNumber = 307
            var string715 = new GraceString("20px sans-serif");
            var call716 = callmethod(var_ctx,"font:=", [1], string715);
            lineNumber = 313
            var if717 = var_done;
            lineNumber = 308
            var string718 = new GraceString("");
            onSelf = true;
            var call720 = callmethod(this, "label", [0]);
            var opresult722 = callmethod(call720, "!=", [1], string718);
            if (Grace_isTrue(opresult722)) {
              lineNumber = 309
              var string723 = new GraceString("");
              var call725 = callmethod(var_b,"apply", [0]);
              var string727 = new GraceString(" ");
              onSelf = true;
              var call729 = callmethod(this, "label", [0]);
              var string731 = new GraceString("");
              var opresult733 = callmethod(string731, "++", [1], call729);
              var opresult735 = callmethod(opresult733, "++", [1], string727);
              var opresult737 = callmethod(opresult735, "++", [1], call725);
              var opresult739 = callmethod(opresult737, "++", [1], string723);
              onSelf = true;
              var call740 = callmethod(this, "x", [0]);
              onSelf = true;
              var call741 = callmethod(this, "y", [0]);
              var call742 = callmethod(var_ctx,"fillText", [3], opresult739, call740, call741);
              if717 = call742;
            } else {
              lineNumber = 311
              var string743 = new GraceString("");
              var call745 = callmethod(var_b,"apply", [0]);
              var string747 = new GraceString("");
              var opresult749 = callmethod(string747, "++", [1], call745);
              var opresult751 = callmethod(opresult749, "++", [1], string743);
              onSelf = true;
              var call752 = callmethod(this, "x", [0]);
              onSelf = true;
              var call753 = callmethod(this, "y", [0]);
              var call754 = callmethod(var_ctx,"fillText", [3], opresult751, call752, call753);
              if717 = call754;
            }
            return if717
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func712.paramCounts = [
          1,
        ];
        func712.variableArities = [
          false,
        ];
        obj710.methods["draw"] = func712;
        func712.definitionLine = 305;
        func712.definitionModule = "musical";
        sourceObject = obj710;
        lineNumber = 302
        var call755 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj710.superobj = call755;
        obj710._value = call755._value;
        sourceObject = obj710;
        lineNumber = 303
        var string756 = new GraceString("blue");
        obj710.data["colour"] = string756;
        var reader_musical_colour_757 = function() {
          return this.data["colour"];
        }
        obj710.methods["colour"] = reader_musical_colour_757;
        obj710.data["colour"] = string756;
        var writer_musical_colour_757 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj710.methods["colour:="] = writer_musical_colour_757;
        reader_musical_colour_757.confidential = true;
        writer_musical_colour_757.confidential = true;
        lineNumber = 304;
        moduleName = "musical";
        lineNumber = 303
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string756)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        lineNumber = 304
        var string758 = new GraceString("");
        obj710.data["label"] = string758;
        var reader_musical_label_759 = function() {
          return this.data["label"];
        }
        obj710.methods["label"] = reader_musical_label_759;
        obj710.data["label"] = string758;
        var writer_musical_label_759 = function(argcv, o) {
          this.data["label"] = o;
        }
        obj710.methods["label:="] = writer_musical_label_759;
        reader_musical_label_759.confidential = true;
        writer_musical_label_759.confidential = true;
        lineNumber = 305;
        moduleName = "musical";
        lineNumber = 304
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string758)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'label' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        superDepth = origSuperDepth;
      }
      obj_init_710.apply(inheritingObject, []);
      return obj710
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["value()object"] = func709;
  lineNumber = 330
  var func760 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func760.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 331
      var string761 = new GraceString("2d");
      var call762 = callmethod(var_backingCanvas,"getContext", [1], string761);
      var var_ctx = call762;
      lineNumber = 331;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ctx' to be of type Unknown"))
      lineNumber = 333
      lineNumber = 311
      lineNumber = 332
      var call763 = callmethod(var_ctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 333
      var call764 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
      return call764
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func760.paramCounts = [
    0,
  ];
  func760.variableArities = [
    false,
  ];
  this.methods["clear"] = func760;
  func760.definitionLine = 330;
  func760.definitionModule = "musical";
  lineNumber = 335
  var func765 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func765.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
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
  func765.paramCounts = [
    0,
  ];
  func765.variableArities = [
    false,
  ];
  this.methods["note"] = func765;
  func765.definitionLine = 335;
  func765.definitionModule = "musical";
  lineNumber = 340
  var func766 = function(argcv) {
    var curarg = 1;
    var var_freq = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func766.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sin)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 341
      var call767 = callmethod(var_dom,"window", [0]);
      var call768 = callmethod(call767,"alert", [1], var_freq);
      lineNumber = 342
      var call769 = callmethod(var_dom,"window", [0]);
      var call770 = callmethod(call769,"t_sin", [2], var_freq, new GraceNum(0.5));
      return call770
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func766.paramCounts = [
    1,
  ];
  func766.variableArities = [
    false,
  ];
  this.methods["sin"] = func766;
  func766.definitionLine = 340;
  func766.definitionModule = "musical";
  lineNumber = 346
  var func771 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func771.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 347
      var call772 = callmethod(var_stepBlocks,"push", [1], var_b);
      return call772
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func771.paramCounts = [
    1,
  ];
  func771.variableArities = [
    false,
  ];
  this.methods["always"] = func771;
  func771.definitionLine = 346;
  func771.definitionModule = "musical";
  lineNumber = 349
  var func773 = function(argcv) {
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func773.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func773.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 350
      lineNumber = 352
      var block774 = Grace_allocObject();
      block774.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block774.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block774.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block774.methods["match"] = GraceBlock_match;
      block774.methods["prefix?"] = GraceBlock_lift;
      block774.receiver = this;
      block774.className = 'block<musical:352>';
      block774.real = function(
      ) {
        sourceObject = this;
        var if775 = var_done;
        lineNumber = 351
        var call776 = callmethod(var_c,"apply", [0]);
        if (Grace_isTrue(call776)) {
          var call777 = callmethod(var_b,"apply", [0]);
          if775 = call777;
        }
        return if775;
      };
      lineNumber = 350
      var call778 = callmethod(var_stepBlocks,"push", [1], block774);
      return call778
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func773.paramCounts = [
    1,
    1,
  ];
  func773.variableArities = [
    false,
    false,
  ];
  this.methods["whenever()do"] = func773;
  func773.definitionLine = 349;
  func773.definitionModule = "musical";
  lineNumber = 354
  var func779 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func779.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (hue)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func779.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (saturation)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func779.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (lightness)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 356
      lineNumber = 355
      var string780 = new GraceString("%)");
      var string783 = new GraceString("%, ");
      var string786 = new GraceString(", ");
      var string789 = new GraceString("hsl(");
      var opresult791 = callmethod(string789, "++", [1], var_h);
      var opresult793 = callmethod(opresult791, "++", [1], string786);
      var opresult795 = callmethod(opresult793, "++", [1], var_s);
      var opresult797 = callmethod(opresult795, "++", [1], string783);
      var opresult799 = callmethod(opresult797, "++", [1], var_l);
      var opresult801 = callmethod(opresult799, "++", [1], string780);
      return opresult801
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func779.paramCounts = [
    1,
    1,
    1,
  ];
  func779.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["hue()saturation()lightness"] = func779;
  func779.definitionLine = 354;
  func779.definitionModule = "musical";
  lineNumber = 357
  var func802 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func802.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (h)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func802.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (s)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func802.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (l)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 358
      onSelf = true;
      var call803 = callmethod(this, "hue()saturation()lightness", [1, 1, 1], var_h, var_s, var_l);
      return call803
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func802.paramCounts = [
    1,
    1,
    1,
  ];
  func802.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["h()s()l"] = func802;
  func802.definitionLine = 357;
  func802.definitionModule = "musical";
  lineNumber = 360
  var func804 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func804.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 364
      var if805 = var_done;
      lineNumber = 361
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 363
        lineNumber = 362
        var bool806 = new GraceBoolean(false)
        return bool806
      }
      lineNumber = 365
      lineNumber = 364
      var bool807 = new GraceBoolean(true)
      var_initialised = bool807;
      lineNumber = 366
      lineNumber = 365
      var call808 = callmethod(var_dom,"document", [0]);
      var_document = call808;
      lineNumber = 366
      var string809 = new GraceString("standard-canvas");
      var call810 = callmethod(var_document,"getElementById", [1], string809);
      var_canvas = call810;
      lineNumber = 368
      lineNumber = 367
      var call811 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call811;
      lineNumber = 369
      lineNumber = 368
      var call812 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call812;
      lineNumber = 369
      var quotient815 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient818 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call819 = callmethod(var_point,"x()y", [1, 1], quotient815, quotient818);
      var_centre = call819;
      lineNumber = 370
      var quotient822 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call823 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient822);
      var_leftCentre = call823;
      lineNumber = 371
      var quotient826 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call827 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient826);
      var_rightCentre = call827;
      lineNumber = 375
      lineNumber = 368
      lineNumber = 372
      var call828 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 380
      var block829 = Grace_allocObject();
      block829.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block829.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block829.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block829.methods["match"] = GraceBlock_match;
      block829.methods["prefix?"] = GraceBlock_lift;
      block829.receiver = this;
      block829.className = 'block<musical:380>';
      block829.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 377
        lineNumber = 376
        var call831 = callmethod(var_canvas,"offsetWidth", [0]);
        var call833 = callmethod(var_canvas,"offsetLeft", [0]);
        var call835 = callmethod(var_ev,"clientX", [0]);
        var diff837 = callmethod(call835, "-", [1], call833);
        var quotient839 = callmethod(diff837, "/", [1], call831);
        var prod841 = callmethod(quotient839, "*", [1], var_canvasHeight);
        var var_x = prod841;
        lineNumber = 377;
        moduleName = "musical";
        lineNumber = 376
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 378
        lineNumber = 377
        var call843 = callmethod(var_canvas,"offsetHeight", [0]);
        var call846 = callmethod(var_canvas,"offsetTop", [0]);
        var call848 = callmethod(var_ev,"clientY", [0]);
        var diff850 = callmethod(call848, "-", [1], call846);
        var diff852 = callmethod(diff850, "-", [1], new GraceNum(7));
        var quotient854 = callmethod(diff852, "/", [1], call843);
        var prod856 = callmethod(quotient854, "*", [1], var_canvasHeight);
        var var_y = prod856;
        lineNumber = 378;
        moduleName = "musical";
        lineNumber = 377
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 378
        lineNumber = 377
        lineNumber = 378
        var call857 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call858 = callmethod(var_mouse,"position:=", [1], call857);
        return call858;
      };
      var_mouseMoveListener = block829;
      lineNumber = 380
      var string859 = new GraceString("mousemove");
      var call860 = callmethod(var_canvas,"addEventListener", [2], string859, var_mouseMoveListener);
      lineNumber = 396
      var block861 = Grace_allocObject();
      block861.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block861.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block861.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block861.methods["match"] = GraceBlock_match;
      block861.methods["prefix?"] = GraceBlock_lift;
      block861.receiver = this;
      block861.className = 'block<musical:396>';
      block861.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 383
        lineNumber = 382
        var call863 = callmethod(var_canvas,"offsetWidth", [0]);
        var call865 = callmethod(var_canvas,"offsetLeft", [0]);
        var call867 = callmethod(var_ev,"clientX", [0]);
        var diff869 = callmethod(call867, "-", [1], call865);
        var quotient871 = callmethod(diff869, "/", [1], call863);
        var prod873 = callmethod(quotient871, "*", [1], var_canvasHeight);
        var var_x = prod873;
        lineNumber = 383;
        moduleName = "musical";
        lineNumber = 382
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 384
        lineNumber = 383
        var call875 = callmethod(var_canvas,"offsetHeight", [0]);
        var call877 = callmethod(var_canvas,"offsetTop", [0]);
        var call879 = callmethod(var_ev,"clientY", [0]);
        var diff881 = callmethod(call879, "-", [1], call877);
        var quotient883 = callmethod(diff881, "/", [1], call875);
        var prod885 = callmethod(quotient883, "*", [1], var_canvasHeight);
        var var_y = prod885;
        lineNumber = 384;
        moduleName = "musical";
        lineNumber = 383
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 388
        var if886 = var_done;
        lineNumber = 384
        var opresult889 = callmethod(var_y, "<", [1], new GraceNum(20));
        var diff893 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var opresult896 = callmethod(var_x, ">", [1], diff893);
        var opresult898 = callmethod(opresult896, "&&", [1], opresult889);
        if (Grace_isTrue(opresult898)) {
          lineNumber = 385
          var call899 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 386
          onSelf = true;
          var call900 = callmethod(this, "stop", [0]);
          if886 = call900;
        }
        lineNumber = 388
        var call901 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call901;
        lineNumber = 388;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 389
        lineNumber = 395
        var block902 = Grace_allocObject();
        block902.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block902.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block902.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block902.methods["match"] = GraceBlock_match;
        block902.methods["prefix?"] = GraceBlock_lift;
        block902.receiver = this;
        block902.className = 'block<musical:395>';
        block902.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 394
          var if903 = var_done;
          lineNumber = 390
          var call904 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call904)) {
            lineNumber = 391
            var call905 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 392
            var call906 = callmethod(var_ev,"preventDefault", [0]);
            if903 = call906;
          }
          return if903;
        };
        var call907 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block902);
        return call907;
      };
      var_mouseDownListener = block861;
      lineNumber = 396
      var string908 = new GraceString("mousedown");
      var call909 = callmethod(var_canvas,"addEventListener", [2], string908, var_mouseDownListener);
      return call909
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func804.paramCounts = [
    0,
  ];
  func804.variableArities = [
    false,
  ];
  this.methods["initialise"] = func804;
  func804.definitionLine = 360;
  func804.definitionModule = "musical";
  lineNumber = 398
  var func910 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func910.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 400
      lineNumber = 399
      var_backgroundColour = var_col;
      return var_col
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func910.paramCounts = [
    1,
  ];
  func910.variableArities = [
    false,
  ];
  this.methods["background"] = func910;
  func910.definitionLine = 398;
  func910.definitionModule = "musical";
  lineNumber = 401
  var func911 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func911.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 402
      var call912 = callmethod(var_randomModule,"random", [0]);
      var prod915 = callmethod(var_n, "*", [1], call912);
      var call916 = callmethod(prod915,"truncate", [0]);
      return call916
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func911.paramCounts = [
    1,
  ];
  func911.variableArities = [
    false,
  ];
  this.methods["random"] = func911;
  func911.definitionLine = 401;
  func911.definitionModule = "musical";
  lineNumber = 404
  var func917 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func917.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (randomPoint)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 405
      var prod920 = callmethod(var_canvasWidth, "*", [1], new GraceNum(0.8));
      onSelf = true;
      var call921 = callmethod(this, "random", [1], prod920);
      var quotient925 = callmethod(var_canvasWidth, "/", [1], new GraceNum(10));
      var opresult927 = callmethod(quotient925, "+", [1], call921);
      lineNumber = 406
      var prod930 = callmethod(var_canvasHeight, "*", [1], new GraceNum(0.8));
      onSelf = true;
      var call931 = callmethod(this, "random", [1], prod930);
      var quotient935 = callmethod(var_canvasHeight, "/", [1], new GraceNum(10));
      var opresult937 = callmethod(quotient935, "+", [1], call931);
      lineNumber = 405
      var call938 = callmethod(var_point,"x()y", [1, 1], opresult927, opresult937);
      return call938
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func917.paramCounts = [
    0,
  ];
  func917.variableArities = [
    false,
  ];
  this.methods["randomPoint"] = func917;
  func917.definitionLine = 404;
  func917.definitionModule = "musical";
  lineNumber = 408
  var func939 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func939.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 409
      var string940 = new GraceString("sin");
      var call941 = callmethod(var_dom,"window", [0]);
      var call942 = callmethod(call941,"T", [1], string940);
      var call943 = callmethod(call942,"play", [0]);
      return call943
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func939.paramCounts = [
    0,
  ];
  func939.variableArities = [
    false,
  ];
  this.methods["playSound"] = func939;
  func939.definitionLine = 408;
  func939.definitionModule = "musical";
  lineNumber = 422
  var func944 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func944.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 427
      var if945 = var_done;
      lineNumber = 423
      var call946 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call946)) {
        lineNumber = 424
        var call947 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call947;
        lineNumber = 424;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 425
        var call948 = callmethod(var_audio,"pause", [0]);
        if945 = call948;
      }
      return if945
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func944.paramCounts = [
    1,
  ];
  func944.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func944;
  func944.definitionLine = 422;
  func944.definitionModule = "musical";
  lineNumber = 428
  var func949 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func949.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 429
      onSelf = true;
      var call950 = callmethod(this, "initialise", [0]);
      lineNumber = 431
      lineNumber = 430
      var bool951 = new GraceBoolean(false)
      var_stopRunning = bool951;
      lineNumber = 431
      var string952 = new GraceString("canvas");
      var call953 = callmethod(var_dom,"document", [0]);
      var call954 = callmethod(call953,"createElement", [1], string952);
      var_backingCanvas = call954;
      lineNumber = 433
      lineNumber = 431
      lineNumber = 432
      var call955 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 434
      lineNumber = 431
      lineNumber = 433
      var call956 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 434
      var string957 = new GraceString("2d");
      var call958 = callmethod(var_backingCanvas,"getContext", [1], string957);
      var_backingContext = call958;
      lineNumber = 435
      var string959 = new GraceString("2d");
      var call960 = callmethod(var_canvas,"getContext", [1], string959);
      var var_mctx = call960;
      lineNumber = 435;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 436
      var block961 = Grace_allocObject();
      block961.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block961.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block961.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block961.methods["match"] = GraceBlock_match;
      block961.methods["prefix?"] = GraceBlock_lift;
      block961.receiver = this;
      block961.className = 'block<musical:436>';
      block961.real = function(
      ) {
        sourceObject = this;
        var call962 = callmethod(var_stopRunning,"prefix!", [0]);
        return call962;
      };
      lineNumber = 452
      var block963 = Grace_allocObject();
      block963.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block963.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block963.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block963.methods["match"] = GraceBlock_match;
      block963.methods["prefix?"] = GraceBlock_lift;
      block963.receiver = this;
      block963.className = 'block<musical:452>';
      block963.real = function(
      ) {
        sourceObject = this;
        lineNumber = 437
        lineNumber = 440
        var block964 = Grace_allocObject();
        block964.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block964.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block964.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block964.methods["match"] = GraceBlock_match;
        block964.methods["prefix?"] = GraceBlock_lift;
        block964.receiver = this;
        block964.className = 'block<musical:440>';
        block964.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 438
          var call965 = callmethod(var_obj,"step", [0]);
          return call965;
        };
        var call966 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block964);
        lineNumber = 440
        lineNumber = 443
        var block967 = Grace_allocObject();
        block967.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block967.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block967.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block967.methods["match"] = GraceBlock_match;
        block967.methods["prefix?"] = GraceBlock_lift;
        block967.receiver = this;
        block967.className = 'block<musical:443>';
        block967.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 441
          var call968 = callmethod(var_step,"apply", [0]);
          return call968;
        };
        var call969 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block967);
        lineNumber = 444
        lineNumber = 441
        lineNumber = 443
        var call970 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 444
        var call971 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 445
        var call972 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 446
        lineNumber = 449
        var block973 = Grace_allocObject();
        block973.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block973.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block973.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block973.methods["match"] = GraceBlock_match;
        block973.methods["prefix?"] = GraceBlock_lift;
        block973.receiver = this;
        block973.className = 'block<musical:449>';
        block973.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 447
          var call974 = callmethod(var_obj,"draw", [1], var_mctx);
          return call974;
        };
        var call975 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block973);
        lineNumber = 450
        lineNumber = 441
        lineNumber = 449
        var string976 = new GraceString("red");
        var call977 = callmethod(var_mctx,"fillStyle:=", [1], string976);
        lineNumber = 450
        var diff980 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call981 = callmethod(var_mctx,"fillRect", [4], diff980, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call981;
      };
      lineNumber = 436
      var call982 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block961, new GraceNum(10), block963);
      return call982
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func949.paramCounts = [
    0,
  ];
  func949.variableArities = [
    false,
  ];
  this.methods["start"] = func949;
  func949.definitionLine = 428;
  func949.definitionModule = "musical";
  lineNumber = 453
  var func983 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func983.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 455
      lineNumber = 454
      var bool984 = new GraceBoolean(true)
      var_stopRunning = bool984;
      lineNumber = 455
      var string985 = new GraceString("mousedown");
      var call986 = callmethod(var_canvas,"removeEventListener", [2], string985, var_mouseDownListener);
      lineNumber = 456
      var string987 = new GraceString("mousemove");
      var call988 = callmethod(var_canvas,"removeEventListener", [2], string987, var_mouseMoveListener);
      return call988
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func983.paramCounts = [
    0,
  ];
  func983.variableArities = [
    false,
  ];
  this.methods["stop"] = func983;
  func983.definitionLine = 453;
  func983.definitionModule = "musical";
  lineNumber = 458
  var func989 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func989.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 459
      onSelf = true;
      var call990 = callmethod(this, "start", [0]);
      return call990
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func989.paramCounts = [
    1,
  ];
  func989.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func989;
  func989.definitionLine = 458;
  func989.definitionModule = "musical";
  lineNumber = 1
  // Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module collections'));
  var var_collections = do_import("mgcollections", gracecode_mgcollections);
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
      new GraceString('could not find module randomModule'));
  var var_randomModule = do_import("math", gracecode_math);
  lineNumber = 5
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 6
  var call991 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call991;
  this.data = call991.data;
  this._value = call991._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 441
  var func992 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func992.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 8
      return var_document
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func992.paramCounts = [
    0,
  ];
  func992.variableArities = [
    false,
  ];
  this.methods["document"] = func992;
  func992.definitionLine = 441;
  func992.definitionModule = "musical";
  lineNumber = 441
  var func993 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func993.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
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
  func993.paramCounts = [
    1,
  ];
  func993.variableArities = [
    false,
  ];
  this.methods["document:="] = func993;
  func993.definitionLine = 441;
  func993.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 441
  var func994 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func994.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 9
      return var_canvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func994.paramCounts = [
    0,
  ];
  func994.variableArities = [
    false,
  ];
  this.methods["canvas"] = func994;
  func994.definitionLine = 441;
  func994.definitionModule = "musical";
  lineNumber = 441
  var func995 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func995.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
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
  func995.paramCounts = [
    1,
  ];
  func995.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func995;
  func995.definitionLine = 441;
  func995.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 441
  var func996 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func996.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingCanvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 10
      return var_backingCanvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func996.paramCounts = [
    0,
  ];
  func996.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func996;
  func996.definitionLine = 441;
  func996.definitionModule = "musical";
  lineNumber = 441
  var func997 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func997.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingCanvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_backingCanvas = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func997.paramCounts = [
    1,
  ];
  func997.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func997;
  func997.definitionLine = 441;
  func997.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 441
  var func998 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func998.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingContext)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 11
      return var_backingContext
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func998.paramCounts = [
    0,
  ];
  func998.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func998;
  func998.definitionLine = 441;
  func998.definitionModule = "musical";
  lineNumber = 441
  var func999 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func999.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingContext:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_backingContext = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func999.paramCounts = [
    1,
  ];
  func999.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func999;
  func999.definitionLine = 441;
  func999.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 441
  var func1000 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1000.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 12
      return var_mouseDownListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1000.paramCounts = [
    0,
  ];
  func1000.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1000;
  func1000.definitionLine = 441;
  func1000.definitionModule = "musical";
  lineNumber = 441
  var func1001 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1001.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_mouseDownListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1001.paramCounts = [
    1,
  ];
  func1001.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1001;
  func1001.definitionLine = 441;
  func1001.definitionModule = "musical";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 441
  var func1002 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1002.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 13
      return var_mouseMoveListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1002.paramCounts = [
    0,
  ];
  func1002.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1002;
  func1002.definitionLine = 441;
  func1002.definitionModule = "musical";
  lineNumber = 441
  var func1003 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1003.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_mouseMoveListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1003.paramCounts = [
    1,
  ];
  func1003.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1003;
  func1003.definitionLine = 441;
  func1003.definitionModule = "musical";
  lineNumber = 17
  lineNumber = 18
  lineNumber = 17
  var call1004 = callmethod(var_dom,"window", [0]);
  var call1005 = callmethod(call1004,"Math", [0]);
  var var_trig = call1005;
  var func1006 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1006.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (trig)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      return var_trig
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1006.paramCounts = [
    0,
  ];
  func1006.variableArities = [
    false,
  ];
  this.methods["trig"] = func1006;
  func1006.definitionLine = 17;
  func1006.definitionModule = "musical";
  lineNumber = 18;
  moduleName = "musical";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_trig)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'trig' to be of type Unknown"))
  lineNumber = 20
  lineNumber = 18
  var var_PI = new GraceNum(3.14159);
  lineNumber = 17
  var func1007 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1007.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (PI)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 18
      return var_PI
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1007.paramCounts = [
    0,
  ];
  func1007.variableArities = [
    false,
  ];
  this.methods["PI"] = func1007;
  func1007.definitionLine = 17;
  func1007.definitionModule = "musical";
  lineNumber = 20;
  moduleName = "musical";
  lineNumber = 18
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_PI)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'PI' to be of type Unknown"))
  lineNumber = 20
  lineNumber = 21
  lineNumber = 20
  var bool1008 = new GraceBoolean(false)
  var var_stopRunning = bool1008;
  lineNumber = 17
  var func1009 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1009.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopRunning)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 20
      return var_stopRunning
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1009.paramCounts = [
    0,
  ];
  func1009.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1009;
  func1009.definitionLine = 17;
  func1009.definitionModule = "musical";
  lineNumber = 17
  var func1010 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1010.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopRunning:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_stopRunning = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1010.paramCounts = [
    1,
  ];
  func1010.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1010;
  func1010.definitionLine = 17;
  func1010.definitionModule = "musical";
  lineNumber = 21;
  moduleName = "musical";
  lineNumber = 20
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stopRunning)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'stopRunning' to be of type Unknown"))
  lineNumber = 22
  lineNumber = 21
  var bool1011 = new GraceBoolean(false)
  var var_initialised = bool1011;
  lineNumber = 17
  var func1012 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1012.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 21
      return var_initialised
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1012.paramCounts = [
    0,
  ];
  func1012.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1012;
  func1012.definitionLine = 17;
  func1012.definitionModule = "musical";
  lineNumber = 17
  var func1013 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1013.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_initialised = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1013.paramCounts = [
    1,
  ];
  func1013.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1013;
  func1013.definitionLine = 17;
  func1013.definitionModule = "musical";
  lineNumber = 22;
  moduleName = "musical";
  lineNumber = 21
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_initialised)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'initialised' to be of type Unknown"))
  lineNumber = 23
  lineNumber = 22
  var string1014 = new GraceString("white");
  var var_backgroundColour = string1014;
  lineNumber = 17
  var func1015 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1015.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backgroundColour)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 22
      return var_backgroundColour
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1015.paramCounts = [
    0,
  ];
  func1015.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1015;
  func1015.definitionLine = 17;
  func1015.definitionModule = "musical";
  lineNumber = 17
  var func1016 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1016.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backgroundColour:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_backgroundColour = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1016.paramCounts = [
    1,
  ];
  func1016.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1016;
  func1016.definitionLine = 17;
  func1016.definitionModule = "musical";
  lineNumber = 23;
  moduleName = "musical";
  lineNumber = 22
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_backgroundColour)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'backgroundColour' to be of type Unknown"))
  lineNumber = 24
  lineNumber = 23
  var call1017 = callmethod(var_collections,"list", [0]);
  var call1018 = callmethod(call1017,"new", [0]);
  var var_registeredObjects = call1018;
  var func1019 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1019.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (registeredObjects)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      return var_registeredObjects
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1019.paramCounts = [
    0,
  ];
  func1019.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1019;
  func1019.definitionLine = 23;
  func1019.definitionModule = "musical";
  lineNumber = 24;
  moduleName = "musical";
  lineNumber = 23
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_registeredObjects)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'registeredObjects' to be of type Unknown"))
  lineNumber = 25
  lineNumber = 24
  var call1020 = callmethod(var_collections,"list", [0]);
  var call1021 = callmethod(call1020,"new", [0]);
  var var_stepBlocks = call1021;
  var func1022 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1022.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stepBlocks)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      return var_stepBlocks
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1022.paramCounts = [
    0,
  ];
  func1022.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1022;
  func1022.definitionLine = 24;
  func1022.definitionModule = "musical";
  lineNumber = 25;
  moduleName = "musical";
  lineNumber = 24
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stepBlocks)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'stepBlocks' to be of type Unknown"))
  lineNumber = 27
  lineNumber = 25
  var call1023 = callmethod(var_collections,"map", [0]);
  var call1024 = callmethod(call1023,"new", [0]);
  var var_audioTags = call1024;
  var func1025 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1025.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (audioTags)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      return var_audioTags
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1025.paramCounts = [
    0,
  ];
  func1025.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1025;
  func1025.definitionLine = 25;
  func1025.definitionModule = "musical";
  lineNumber = 27;
  moduleName = "musical";
  lineNumber = 25
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_audioTags)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'audioTags' to be of type Unknown"))
  lineNumber = 27
  lineNumber = 28
  var var_canvasWidth;
  lineNumber = 25
  var func1026 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1026.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasWidth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 27
      return var_canvasWidth
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1026.paramCounts = [
    0,
  ];
  func1026.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1026;
  func1026.definitionLine = 25;
  func1026.definitionModule = "musical";
  lineNumber = 25
  var func1027 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1027.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasWidth:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_canvasWidth = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1027.paramCounts = [
    1,
  ];
  func1027.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1027;
  func1027.definitionLine = 25;
  func1027.definitionModule = "musical";
  lineNumber = 30
  var var_canvasHeight;
  lineNumber = 25
  var func1028 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1028.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasHeight)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 28
      return var_canvasHeight
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1028.paramCounts = [
    0,
  ];
  func1028.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1028;
  func1028.definitionLine = 25;
  func1028.definitionModule = "musical";
  lineNumber = 25
  var func1029 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1029.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasHeight:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_canvasHeight = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1029.paramCounts = [
    1,
  ];
  func1029.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1029;
  func1029.definitionLine = 25;
  func1029.definitionModule = "musical";
  lineNumber = 30
  lineNumber = 31
  lineNumber = 30
  var string1030 = new GraceString("left");
  var var_left = string1030;
  lineNumber = 25
  var func1031 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1031.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 30
      return var_left
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1031.paramCounts = [
    0,
  ];
  func1031.variableArities = [
    false,
  ];
  this.methods["left"] = func1031;
  func1031.definitionLine = 25;
  func1031.definitionModule = "musical";
  lineNumber = 31;
  moduleName = "musical";
  lineNumber = 30
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_left)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'left' to be of type Unknown"))
  lineNumber = 32
  lineNumber = 31
  var string1032 = new GraceString("right");
  var var_right = string1032;
  lineNumber = 25
  var func1033 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1033.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 31
      return var_right
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1033.paramCounts = [
    0,
  ];
  func1033.variableArities = [
    false,
  ];
  this.methods["right"] = func1033;
  func1033.definitionLine = 25;
  func1033.definitionModule = "musical";
  lineNumber = 32;
  moduleName = "musical";
  lineNumber = 31
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_right)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'right' to be of type Unknown"))
  lineNumber = 33
  lineNumber = 32
  var string1034 = new GraceString("top");
  var var_top = string1034;
  lineNumber = 25
  var func1035 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1035.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (top)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 32
      return var_top
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1035.paramCounts = [
    0,
  ];
  func1035.variableArities = [
    false,
  ];
  this.methods["top"] = func1035;
  func1035.definitionLine = 25;
  func1035.definitionModule = "musical";
  lineNumber = 33;
  moduleName = "musical";
  lineNumber = 32
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_top)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'top' to be of type Unknown"))
  lineNumber = 35
  lineNumber = 33
  var string1036 = new GraceString("bottom");
  var var_bottom = string1036;
  lineNumber = 25
  var func1037 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1037.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bottom)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 33
      return var_bottom
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1037.paramCounts = [
    0,
  ];
  func1037.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1037;
  func1037.definitionLine = 25;
  func1037.definitionModule = "musical";
  lineNumber = 35;
  moduleName = "musical";
  lineNumber = 33
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_bottom)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'bottom' to be of type Unknown"))
  lineNumber = 35
  lineNumber = 36
  var var_centre;
  lineNumber = 25
  var func1038 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1038.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (centre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 35
      return var_centre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1038.paramCounts = [
    0,
  ];
  func1038.variableArities = [
    false,
  ];
  this.methods["centre"] = func1038;
  func1038.definitionLine = 25;
  func1038.definitionModule = "musical";
  lineNumber = 25
  var func1039 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1039.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (centre:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_centre = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1039.paramCounts = [
    1,
  ];
  func1039.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1039;
  func1039.definitionLine = 25;
  func1039.definitionModule = "musical";
  lineNumber = 37
  var var_leftCentre;
  lineNumber = 25
  var func1040 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1040.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (leftCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 36
      return var_leftCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1040.paramCounts = [
    0,
  ];
  func1040.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1040;
  func1040.definitionLine = 25;
  func1040.definitionModule = "musical";
  lineNumber = 25
  var func1041 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1041.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (leftCentre:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_leftCentre = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1041.paramCounts = [
    1,
  ];
  func1041.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1041;
  func1041.definitionLine = 25;
  func1041.definitionModule = "musical";
  lineNumber = 39
  var var_rightCentre;
  lineNumber = 25
  var func1042 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1042.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rightCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 37
      return var_rightCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1042.paramCounts = [
    0,
  ];
  func1042.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1042;
  func1042.definitionLine = 25;
  func1042.definitionModule = "musical";
  lineNumber = 25
  var func1043 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1043.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rightCentre:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_rightCentre = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1043.paramCounts = [
    1,
  ];
  func1043.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1043;
  func1043.definitionLine = 25;
  func1043.definitionModule = "musical";
  lineNumber = 39
  lineNumber = 40
  var var_above;
  lineNumber = 25
  var func1044 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1044.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (above)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 39
      return var_above
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1044.paramCounts = [
    0,
  ];
  func1044.variableArities = [
    false,
  ];
  this.methods["above"] = func1044;
  func1044.definitionLine = 25;
  func1044.definitionModule = "musical";
  lineNumber = 25
  var func1045 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1045.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (above:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_above = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1045.paramCounts = [
    1,
  ];
  func1045.variableArities = [
    false,
  ];
  this.methods["above:="] = func1045;
  func1045.definitionLine = 25;
  func1045.definitionModule = "musical";
  lineNumber = 42
  var var___916__;
  lineNumber = 25
  var func1046 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1046.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Δ)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 40
      return var___916__
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1046.paramCounts = [
    0,
  ];
  func1046.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1046;
  func1046.definitionLine = 25;
  func1046.definitionModule = "musical";
  lineNumber = 25
  var func1047 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1047.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Δ:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var___916__ = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1047.paramCounts = [
    1,
  ];
  func1047.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1047;
  func1047.definitionLine = 25;
  func1047.definitionModule = "musical";
  lineNumber = 42
  var func1048 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1048.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (point)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
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
  func1048.paramCounts = [
    0,
  ];
  func1048.variableArities = [
    false,
  ];
  this.methods["point"] = func1048;
  func1048.definitionLine = 42;
  func1048.definitionModule = "musical";
  var obj1049 = Grace_allocObject();
  obj1049.definitionModule = "musical";
  obj1049.definitionLine = 42;
  obj1049.outer = this;
  var reader_musical_outer_1050 = function() {
    return this.outer;
  }
  obj1049.methods["outer"] = reader_musical_outer_1050;
  function obj_init_1049() {
    var origSuperDepth = superDepth;
    superDepth = obj1049;
    obj1049.annotations = [];
    var func1051 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1051.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1051.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1052 = Grace_allocObject();
        obj1052.definitionModule = "musical";
        obj1052.definitionLine = 42;
        obj1052.outer = this;
        var reader_musical_outer_1053 = function() {
          return this.outer;
        }
        obj1052.methods["outer"] = reader_musical_outer_1053;
        function obj_init_1052() {
          var origSuperDepth = superDepth;
          superDepth = obj1052;
          obj1052.annotations = [];
          var func1054 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1054.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1056 = callmethod(this, "x", [0]);
              var diff1058 = callmethod(call1056, "-", [1], var_dx);
              onSelf = true;
              var call1059 = callmethod(this, "y", [0]);
              var call1060 = callmethod(var_point,"x()y", [1, 1], diff1058, call1059);
              return call1060
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1054.paramCounts = [
            1,
          ];
          func1054.variableArities = [
            false,
          ];
          obj1052.methods["left"] = func1054;
          func1054.definitionLine = 45;
          func1054.definitionModule = "musical";
          var func1061 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1061.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1063 = callmethod(this, "x", [0]);
              var opresult1065 = callmethod(call1063, "+", [1], var_dx);
              onSelf = true;
              var call1066 = callmethod(this, "y", [0]);
              var call1067 = callmethod(var_point,"x()y", [1, 1], opresult1065, call1066);
              return call1067
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1061.paramCounts = [
            1,
          ];
          func1061.variableArities = [
            false,
          ];
          obj1052.methods["right"] = func1061;
          func1061.definitionLine = 46;
          func1061.definitionModule = "musical";
          var func1068 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1068.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 47
              onSelf = true;
              var call1069 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1071 = callmethod(this, "y", [0]);
              var diff1073 = callmethod(call1071, "-", [1], var_dy);
              var call1074 = callmethod(var_point,"x()y", [1, 1], call1069, diff1073);
              return call1074
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1068.paramCounts = [
            1,
          ];
          func1068.variableArities = [
            false,
          ];
          obj1052.methods["up"] = func1068;
          func1068.definitionLine = 47;
          func1068.definitionModule = "musical";
          var func1075 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1075.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 48
              onSelf = true;
              var call1076 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1078 = callmethod(this, "y", [0]);
              var opresult1080 = callmethod(call1078, "+", [1], var_dy);
              var call1081 = callmethod(var_point,"x()y", [1, 1], call1076, opresult1080);
              return call1081
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1075.paramCounts = [
            1,
          ];
          func1075.variableArities = [
            false,
          ];
          obj1052.methods["down"] = func1075;
          func1075.definitionLine = 48;
          func1075.definitionModule = "musical";
          sourceObject = obj1052;
          lineNumber = 43
          obj1052.data["x"] = var_x__39__;
          var reader_musical_x_1082 = function() {
            return this.data["x"];
          }
          reader_musical_x_1082.def = true;
          obj1052.methods["x"] = reader_musical_x_1082;
          lineNumber = 44;
          moduleName = "musical";
          lineNumber = 43
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1052;
          lineNumber = 44
          obj1052.data["y"] = var_y__39__;
          var reader_musical_y_1083 = function() {
            return this.data["y"];
          }
          reader_musical_y_1083.def = true;
          obj1052.methods["y"] = reader_musical_y_1083;
          lineNumber = 45;
          moduleName = "musical";
          lineNumber = 44
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1052;
          sourceObject = obj1052;
          sourceObject = obj1052;
          sourceObject = obj1052;
          superDepth = origSuperDepth;
        }
        obj_init_1052.apply(obj1052, []);
        return obj1052
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1051.paramCounts = [
      1,
      1,
    ];
    func1051.variableArities = [
      false,
      false,
    ];
    obj1049.methods["x()y"] = func1051;
    func1051.definitionLine = 42;
    func1051.definitionModule = "musical";
    var func1084 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1085 = Grace_allocObject();
        obj1085.definitionModule = "musical";
        obj1085.definitionLine = 42;
        var inho1085 = inheritingObject;
        while (inho1085.superobj) inho1085 = inho1085.superobj;
        inho1085.superobj = obj1085;
        obj1085.data = inheritingObject.data;
        obj1085.outer = this;
        var reader_musical_outer_1086 = function() {
          return this.outer;
        }
        obj1085.methods["outer"] = reader_musical_outer_1086;
        function obj_init_1085() {
          var origSuperDepth = superDepth;
          superDepth = obj1085;
          obj1085.annotations = [];
          var func1087 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1087.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1089 = callmethod(this, "x", [0]);
              var diff1091 = callmethod(call1089, "-", [1], var_dx);
              onSelf = true;
              var call1092 = callmethod(this, "y", [0]);
              var call1093 = callmethod(var_point,"x()y", [1, 1], diff1091, call1092);
              return call1093
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1087.paramCounts = [
            1,
          ];
          func1087.variableArities = [
            false,
          ];
          obj1085.methods["left"] = func1087;
          func1087.definitionLine = 45;
          func1087.definitionModule = "musical";
          var func1094 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1094.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1096 = callmethod(this, "x", [0]);
              var opresult1098 = callmethod(call1096, "+", [1], var_dx);
              onSelf = true;
              var call1099 = callmethod(this, "y", [0]);
              var call1100 = callmethod(var_point,"x()y", [1, 1], opresult1098, call1099);
              return call1100
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1094.paramCounts = [
            1,
          ];
          func1094.variableArities = [
            false,
          ];
          obj1085.methods["right"] = func1094;
          func1094.definitionLine = 46;
          func1094.definitionModule = "musical";
          var func1101 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1101.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 47
              onSelf = true;
              var call1102 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1104 = callmethod(this, "y", [0]);
              var diff1106 = callmethod(call1104, "-", [1], var_dy);
              var call1107 = callmethod(var_point,"x()y", [1, 1], call1102, diff1106);
              return call1107
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1101.paramCounts = [
            1,
          ];
          func1101.variableArities = [
            false,
          ];
          obj1085.methods["up"] = func1101;
          func1101.definitionLine = 47;
          func1101.definitionModule = "musical";
          var func1108 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1108.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 48
              onSelf = true;
              var call1109 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1111 = callmethod(this, "y", [0]);
              var opresult1113 = callmethod(call1111, "+", [1], var_dy);
              var call1114 = callmethod(var_point,"x()y", [1, 1], call1109, opresult1113);
              return call1114
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1108.paramCounts = [
            1,
          ];
          func1108.variableArities = [
            false,
          ];
          obj1085.methods["down"] = func1108;
          func1108.definitionLine = 48;
          func1108.definitionModule = "musical";
          sourceObject = obj1085;
          lineNumber = 43
          obj1085.data["x"] = var_x__39__;
          var reader_musical_x_1115 = function() {
            return this.data["x"];
          }
          reader_musical_x_1115.def = true;
          obj1085.methods["x"] = reader_musical_x_1115;
          lineNumber = 44;
          moduleName = "musical";
          lineNumber = 43
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1085;
          lineNumber = 44
          obj1085.data["y"] = var_y__39__;
          var reader_musical_y_1116 = function() {
            return this.data["y"];
          }
          reader_musical_y_1116.def = true;
          obj1085.methods["y"] = reader_musical_y_1116;
          lineNumber = 45;
          moduleName = "musical";
          lineNumber = 44
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1085;
          sourceObject = obj1085;
          sourceObject = obj1085;
          sourceObject = obj1085;
          superDepth = origSuperDepth;
        }
        obj_init_1085.apply(inheritingObject, []);
        return obj1085
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1049.methods["x()y()object"] = func1084;
    var func1117 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 42
        var string1118 = new GraceString("class point");
        return string1118
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1117.paramCounts = [
    ];
    func1117.variableArities = [
    ];
    obj1049.methods["asDebugString"] = func1117;
    func1117.definitionLine = 42;
    func1117.definitionModule = "musical";
    sourceObject = obj1049;
    sourceObject = obj1049;
    superDepth = origSuperDepth;
  }
  obj_init_1049.apply(obj1049, []);
  var var_point = obj1049;
  lineNumber = 50
  var func1119 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1119.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawable)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      return var_drawable
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1119.paramCounts = [
    0,
  ];
  func1119.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1119;
  func1119.definitionLine = 50;
  func1119.definitionModule = "musical";
  var obj1120 = Grace_allocObject();
  obj1120.definitionModule = "musical";
  obj1120.definitionLine = 50;
  obj1120.outer = this;
  var reader_musical_outer_1121 = function() {
    return this.outer;
  }
  obj1120.methods["outer"] = reader_musical_outer_1121;
  function obj_init_1120() {
    var origSuperDepth = superDepth;
    superDepth = obj1120;
    obj1120.annotations = [];
    var func1122 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1122.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1123 = Grace_allocObject();
        obj1123.definitionModule = "musical";
        obj1123.definitionLine = 50;
        obj1123.outer = this;
        var reader_musical_outer_1124 = function() {
          return this.outer;
        }
        obj1123.methods["outer"] = reader_musical_outer_1124;
        function obj_init_1123() {
          var origSuperDepth = superDepth;
          superDepth = obj1123;
          obj1123.annotations = [];
          var func1125 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1125.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 62
              onSelf = true;
              var call1126 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 65
              var block1127 = Grace_allocObject();
              block1127.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1127.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1127.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1127.methods["match"] = GraceBlock_match;
              block1127.methods["prefix?"] = GraceBlock_lift;
              block1127.receiver = this;
              block1127.className = 'block<musical:65>';
              block1127.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 63
                var call1128 = callmethod(var_b,"apply", [0]);
                return call1128;
              };
              var call1129 = callmethod(Grace_prelude,"for()do", [1, 1], call1126, block1127);
              lineNumber = 65
              onSelf = true;
              var call1130 = callmethod(this, "tick", [0]);
              return call1130
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1125.paramCounts = [
            0,
          ];
          func1125.variableArities = [
            false,
          ];
          obj1123.methods["step"] = func1125;
          func1125.definitionLine = 61;
          func1125.definitionModule = "musical";
          var func1131 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1131.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
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
          func1131.paramCounts = [
            0,
          ];
          func1131.variableArities = [
            false,
          ];
          obj1123.methods["tick"] = func1131;
          func1131.definitionLine = 67;
          func1131.definitionModule = "musical";
          var func1132 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1132.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
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
          func1132.paramCounts = [
            1,
          ];
          func1132.variableArities = [
            false,
          ];
          obj1123.methods["draw"] = func1132;
          func1132.definitionLine = 68;
          func1132.definitionModule = "musical";
          var func1133 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1133.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 71
              lineNumber = 63
              lineNumber = 70
              var call1134 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1135 = callmethod(this, "destX:=", [1], call1134);
              lineNumber = 72
              lineNumber = 70
              lineNumber = 71
              var call1136 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1137 = callmethod(this, "destY:=", [1], call1136);
              return call1137
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1133.paramCounts = [
            1,
          ];
          func1133.variableArities = [
            false,
          ];
          obj1123.methods["moveTo"] = func1133;
          func1133.definitionLine = 69;
          func1133.definitionModule = "musical";
          var func1138 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1138.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 75
              lineNumber = 71
              lineNumber = 74
              var call1139 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1140 = callmethod(this, "x:=", [1], call1139);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              var call1141 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1142 = callmethod(this, "y:=", [1], call1141);
              lineNumber = 77
              lineNumber = 75
              lineNumber = 76
              onSelf = true;
              var call1143 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1144 = callmethod(this, "destX:=", [1], call1143);
              lineNumber = 78
              lineNumber = 75
              lineNumber = 77
              onSelf = true;
              var call1145 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1146 = callmethod(this, "destY:=", [1], call1145);
              return call1146
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1138.paramCounts = [
            1,
          ];
          func1138.variableArities = [
            false,
          ];
          obj1123.methods["jumpTo"] = func1138;
          func1138.definitionLine = 73;
          func1138.definitionModule = "musical";
          var func1147 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1147.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 79
              var bool1148 = new GraceBoolean(false)
              return bool1148
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1147.paramCounts = [
            1,
          ];
          func1147.variableArities = [
            false,
          ];
          obj1123.methods["isPointOver"] = func1147;
          func1147.definitionLine = 79;
          func1147.definitionModule = "musical";
          var func1149 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1149.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mousedown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
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
          func1149.paramCounts = [
            0,
          ];
          func1149.variableArities = [
            false,
          ];
          obj1123.methods["mousedown"] = func1149;
          func1149.definitionLine = 80;
          func1149.definitionModule = "musical";
          var func1150 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1150.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 82
              onSelf = true;
              var call1151 = callmethod(this, "alwaysBlocks", [0]);
              var call1152 = callmethod(call1151,"push", [1], var_b);
              return call1152
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1150.paramCounts = [
            1,
          ];
          func1150.variableArities = [
            false,
          ];
          obj1123.methods["always"] = func1150;
          func1150.definitionLine = 81;
          func1150.definitionModule = "musical";
          var func1153 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1153.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1153.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 85
              lineNumber = 90
              var block1154 = Grace_allocObject();
              block1154.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1154.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1154.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1154.methods["match"] = GraceBlock_match;
              block1154.methods["prefix?"] = GraceBlock_lift;
              block1154.receiver = this;
              block1154.className = 'block<musical:90>';
              block1154.real = function(
              ) {
                sourceObject = this;
                lineNumber = 89
                var if1155 = var_done;
                lineNumber = 86
                var call1156 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1156)) {
                  lineNumber = 87
                  var call1157 = callmethod(var_b,"apply", [0]);
                  if1155 = call1157;
                }
                return if1155;
              };
              onSelf = true;
              var call1158 = callmethod(this, "always", [1], block1154);
              return call1158
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1153.paramCounts = [
            1,
            1,
          ];
          func1153.variableArities = [
            false,
            false,
          ];
          obj1123.methods["whenever()do"] = func1153;
          func1153.definitionLine = 84;
          func1153.definitionModule = "musical";
          var func1159 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1163 = callmethod(this, "angle", [0]);
              var quotient1165 = callmethod(call1163, "/", [1], new GraceNum(180));
              var prod1167 = callmethod(quotient1165, "*", [1], var_PI);
              var call1168 = callmethod(var_trig,"cos", [1], prod1167);
              var prod1170 = callmethod(call1168, "*", [1], var_dist);
              var var_y__39__ = prod1170;
              lineNumber = 93;
              moduleName = "musical";
              lineNumber = 92
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1174 = callmethod(this, "angle", [0]);
              var quotient1176 = callmethod(call1174, "/", [1], new GraceNum(180));
              var prod1178 = callmethod(quotient1176, "*", [1], var_PI);
              var call1179 = callmethod(var_trig,"sin", [1], prod1178);
              var prod1181 = callmethod(call1179, "*", [1], var_dist);
              var var_x__39__ = prod1181;
              lineNumber = 94;
              moduleName = "musical";
              lineNumber = 93
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 95
              lineNumber = 87
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1183 = callmethod(this, "x", [0]);
              var opresult1185 = callmethod(call1183, "+", [1], var_x__39__);
              onSelf = true;
              var call1186 = callmethod(this, "x:=", [1], opresult1185);
              lineNumber = 96
              lineNumber = 87
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call1188 = callmethod(this, "y", [0]);
              var opresult1190 = callmethod(call1188, "+", [1], var_y__39__);
              onSelf = true;
              var call1191 = callmethod(this, "y:=", [1], opresult1190);
              return call1191
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1159.paramCounts = [
            1,
          ];
          func1159.variableArities = [
            false,
          ];
          obj1123.methods["forward"] = func1159;
          func1159.definitionLine = 91;
          func1159.definitionModule = "musical";
          var func1192 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1192.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 98
              var block1193 = Grace_allocObject();
              block1193.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1193.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1193.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1193.methods["match"] = GraceBlock_match;
              block1193.methods["prefix?"] = GraceBlock_lift;
              block1193.receiver = this;
              block1193.className = 'block<musical:98>';
              block1193.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1195 = callmethod(this, "angle", [0]);
                var opresult1197 = callmethod(call1195, "<", [1], new GraceNum(0));
                return opresult1197;
              };
              lineNumber = 101
              var block1198 = Grace_allocObject();
              block1198.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1198.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1198.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1198.methods["match"] = GraceBlock_match;
              block1198.methods["prefix?"] = GraceBlock_lift;
              block1198.receiver = this;
              block1198.className = 'block<musical:101>';
              block1198.real = function(
              ) {
                sourceObject = this;
                lineNumber = 100
                lineNumber = 87
                lineNumber = 100
                lineNumber = 99
                onSelf = true;
                var call1200 = callmethod(this, "angle", [0]);
                var opresult1202 = callmethod(call1200, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1203 = callmethod(this, "angle:=", [1], opresult1202);
                return call1203;
              };
              var call1204 = callmethod(Grace_prelude,"while()do", [1, 1], block1193, block1198);
              lineNumber = 101
              var block1205 = Grace_allocObject();
              block1205.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1205.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1205.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1205.methods["match"] = GraceBlock_match;
              block1205.methods["prefix?"] = GraceBlock_lift;
              block1205.receiver = this;
              block1205.className = 'block<musical:101>';
              block1205.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1207 = callmethod(this, "angle", [0]);
                var opresult1209 = callmethod(call1207, ">", [1], new GraceNum(360));
                return opresult1209;
              };
              lineNumber = 104
              var block1210 = Grace_allocObject();
              block1210.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1210.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1210.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1210.methods["match"] = GraceBlock_match;
              block1210.methods["prefix?"] = GraceBlock_lift;
              block1210.receiver = this;
              block1210.className = 'block<musical:104>';
              block1210.real = function(
              ) {
                sourceObject = this;
                lineNumber = 103
                lineNumber = 87
                lineNumber = 103
                lineNumber = 102
                onSelf = true;
                var call1212 = callmethod(this, "angle", [0]);
                var diff1214 = callmethod(call1212, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1215 = callmethod(this, "angle:=", [1], diff1214);
                return call1215;
              };
              var call1216 = callmethod(Grace_prelude,"while()do", [1, 1], block1205, block1210);
              return call1216
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1192.paramCounts = [
            0,
          ];
          func1192.variableArities = [
            false,
          ];
          obj1123.methods["normaliseAngle"] = func1192;
          func1192.definitionLine = 97;
          func1192.definitionModule = "musical";
          var func1217 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1217.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 107
              lineNumber = 87
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call1219 = callmethod(this, "angle", [0]);
              var opresult1221 = callmethod(call1219, "+", [1], var_degrees);
              onSelf = true;
              var call1222 = callmethod(this, "angle:=", [1], opresult1221);
              lineNumber = 107
              onSelf = true;
              var call1223 = callmethod(this, "normaliseAngle", [0]);
              return call1223
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1217.paramCounts = [
            1,
          ];
          func1217.variableArities = [
            false,
          ];
          obj1123.methods["turn"] = func1217;
          func1217.definitionLine = 105;
          func1217.definitionModule = "musical";
          var func1224 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1224.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 113
              var if1225 = var_done;
              lineNumber = 110
              onSelf = true;
              var call1226 = callmethod(this, "x", [0]);
              var call1227 = callmethod(var_point,"x()y", [1, 1], call1226, new GraceNum(0));
              onSelf = true;
              var call1228 = callmethod(this, "isPointOver", [1], call1227);
              if (Grace_isTrue(call1228)) {
                lineNumber = 112
                lineNumber = 111
                var bool1229 = new GraceBoolean(true)
                return bool1229
              }
              lineNumber = 116
              var if1230 = var_done;
              lineNumber = 113
              onSelf = true;
              var call1231 = callmethod(this, "x", [0]);
              var call1232 = callmethod(var_point,"x()y", [1, 1], call1231, var_canvasHeight);
              onSelf = true;
              var call1233 = callmethod(this, "isPointOver", [1], call1232);
              if (Grace_isTrue(call1233)) {
                lineNumber = 115
                lineNumber = 114
                var bool1234 = new GraceBoolean(true)
                return bool1234
              }
              lineNumber = 119
              var if1235 = var_done;
              lineNumber = 116
              onSelf = true;
              var call1236 = callmethod(this, "y", [0]);
              var call1237 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1236);
              onSelf = true;
              var call1238 = callmethod(this, "isPointOver", [1], call1237);
              if (Grace_isTrue(call1238)) {
                lineNumber = 118
                lineNumber = 117
                var bool1239 = new GraceBoolean(true)
                return bool1239
              }
              lineNumber = 122
              var if1240 = var_done;
              lineNumber = 119
              onSelf = true;
              var call1241 = callmethod(this, "y", [0]);
              var call1242 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1241);
              onSelf = true;
              var call1243 = callmethod(this, "isPointOver", [1], call1242);
              if (Grace_isTrue(call1243)) {
                lineNumber = 121
                lineNumber = 120
                var bool1244 = new GraceBoolean(true)
                return bool1244
              }
              lineNumber = 123
              lineNumber = 122
              var bool1245 = new GraceBoolean(false)
              return bool1245
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1224.paramCounts = [
            0,
          ];
          func1224.variableArities = [
            false,
          ];
          obj1123.methods["touchingEdge"] = func1224;
          func1224.definitionLine = 109;
          func1224.definitionModule = "musical";
          var func1246 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1246.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 126
              lineNumber = 125
              var var_dx = new GraceNum(0);
              lineNumber = 126;
              moduleName = "musical";
              lineNumber = 125
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 127
              lineNumber = 126
              var var_dy = new GraceNum(0);
              lineNumber = 127;
              moduleName = "musical";
              lineNumber = 126
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 130
              var if1247 = var_done;
              lineNumber = 127
              onSelf = true;
              var call1248 = callmethod(this, "x", [0]);
              var call1249 = callmethod(var_point,"x()y", [1, 1], call1248, new GraceNum(0));
              onSelf = true;
              var call1250 = callmethod(this, "isPointOver", [1], call1249);
              if (Grace_isTrue(call1250)) {
                lineNumber = 128
                onSelf = true;
                var call1251 = callmethod(this, "bounceFrom", [1], var_top);
                if1247 = call1251;
              }
              lineNumber = 133
              var if1252 = var_done;
              lineNumber = 130
              onSelf = true;
              var call1253 = callmethod(this, "x", [0]);
              var call1254 = callmethod(var_point,"x()y", [1, 1], call1253, var_canvasHeight);
              onSelf = true;
              var call1255 = callmethod(this, "isPointOver", [1], call1254);
              if (Grace_isTrue(call1255)) {
                lineNumber = 131
                onSelf = true;
                var call1256 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1252 = call1256;
              }
              lineNumber = 136
              var if1257 = var_done;
              lineNumber = 133
              onSelf = true;
              var call1258 = callmethod(this, "y", [0]);
              var call1259 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1258);
              onSelf = true;
              var call1260 = callmethod(this, "isPointOver", [1], call1259);
              if (Grace_isTrue(call1260)) {
                lineNumber = 134
                onSelf = true;
                var call1261 = callmethod(this, "bounceFrom", [1], var_left);
                if1257 = call1261;
              }
              lineNumber = 139
              var if1262 = var_done;
              lineNumber = 136
              onSelf = true;
              var call1263 = callmethod(this, "y", [0]);
              var call1264 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1263);
              onSelf = true;
              var call1265 = callmethod(this, "isPointOver", [1], call1264);
              if (Grace_isTrue(call1265)) {
                lineNumber = 137
                onSelf = true;
                var call1266 = callmethod(this, "bounceFrom", [1], var_right);
                if1262 = call1266;
              }
              lineNumber = 139
              var block1267 = Grace_allocObject();
              block1267.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1267.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1267.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1267.methods["match"] = GraceBlock_match;
              block1267.methods["prefix?"] = GraceBlock_lift;
              block1267.receiver = this;
              block1267.className = 'block<musical:139>';
              block1267.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1268 = callmethod(this, "touchingEdge", [0]);
                return call1268;
              };
              lineNumber = 142
              var block1269 = Grace_allocObject();
              block1269.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1269.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1269.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1269.methods["match"] = GraceBlock_match;
              block1269.methods["prefix?"] = GraceBlock_lift;
              block1269.receiver = this;
              block1269.className = 'block<musical:142>';
              block1269.real = function(
              ) {
                sourceObject = this;
                lineNumber = 140
                onSelf = true;
                var call1270 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1270;
              };
              var call1271 = callmethod(Grace_prelude,"while()do", [1, 1], block1267, block1269);
              return call1271
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1246.paramCounts = [
            0,
          ];
          func1246.variableArities = [
            false,
          ];
          obj1123.methods["bounce"] = func1246;
          func1246.definitionLine = 124;
          func1246.definitionModule = "musical";
          var func1272 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1272.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 147
              var if1273 = var_done;
              lineNumber = 144
              var string1274 = new GraceString("left");
              var opresult1277 = callmethod(var_dir, "==", [1], string1274);
              if (Grace_isTrue(opresult1277)) {
                lineNumber = 146
                lineNumber = 87
                lineNumber = 146
                lineNumber = 145
                onSelf = true;
                var call1278 = callmethod(this, "angle", [0]);
                var diff1281 = callmethod(new GraceNum(360), "-", [1], call1278);
                onSelf = true;
                var call1282 = callmethod(this, "angle:=", [1], diff1281);
                if1273 = call1282;
              }
              lineNumber = 150
              var if1283 = var_done;
              lineNumber = 147
              var string1284 = new GraceString("right");
              var opresult1287 = callmethod(var_dir, "==", [1], string1284);
              if (Grace_isTrue(opresult1287)) {
                lineNumber = 149
                lineNumber = 87
                lineNumber = 149
                lineNumber = 148
                onSelf = true;
                var call1288 = callmethod(this, "angle", [0]);
                var diff1291 = callmethod(new GraceNum(360), "-", [1], call1288);
                onSelf = true;
                var call1292 = callmethod(this, "angle:=", [1], diff1291);
                if1283 = call1292;
              }
              lineNumber = 153
              var if1293 = var_done;
              lineNumber = 150
              var string1294 = new GraceString("top");
              var opresult1297 = callmethod(var_dir, "==", [1], string1294);
              if (Grace_isTrue(opresult1297)) {
                lineNumber = 152
                lineNumber = 87
                lineNumber = 152
                lineNumber = 151
                onSelf = true;
                var call1298 = callmethod(this, "angle", [0]);
                var diff1301 = callmethod(new GraceNum(180), "-", [1], call1298);
                onSelf = true;
                var call1302 = callmethod(this, "angle:=", [1], diff1301);
                if1293 = call1302;
              }
              lineNumber = 156
              var if1303 = var_done;
              lineNumber = 153
              var string1304 = new GraceString("bottom");
              var opresult1307 = callmethod(var_dir, "==", [1], string1304);
              if (Grace_isTrue(opresult1307)) {
                lineNumber = 155
                lineNumber = 87
                lineNumber = 155
                lineNumber = 154
                onSelf = true;
                var call1308 = callmethod(this, "angle", [0]);
                var diff1311 = callmethod(new GraceNum(180), "-", [1], call1308);
                onSelf = true;
                var call1312 = callmethod(this, "angle:=", [1], diff1311);
                if1303 = call1312;
              }
              lineNumber = 156
              onSelf = true;
              var call1313 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 157
              onSelf = true;
              var call1314 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1314
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1272.paramCounts = [
            1,
          ];
          func1272.variableArities = [
            false,
          ];
          obj1123.methods["bounceFrom"] = func1272;
          func1272.definitionLine = 143;
          func1272.definitionModule = "musical";
          var func1315 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 163
              var if1316 = var_done;
              lineNumber = 160
              var call1317 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1319 = callmethod(this, "x", [0]);
              var opresult1321 = callmethod(call1319, ">", [1], call1317);
              if (Grace_isTrue(opresult1321)) {
                lineNumber = 161
                onSelf = true;
                var call1322 = callmethod(this, "bounceFrom", [1], var_left);
                if1316 = call1322;
              }
              lineNumber = 166
              var if1323 = var_done;
              lineNumber = 163
              var call1324 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1326 = callmethod(this, "x", [0]);
              var opresult1328 = callmethod(call1326, "<", [1], call1324);
              if (Grace_isTrue(opresult1328)) {
                lineNumber = 164
                onSelf = true;
                var call1329 = callmethod(this, "bounceFrom", [1], var_right);
                if1323 = call1329;
              }
              lineNumber = 166
              var block1330 = Grace_allocObject();
              block1330.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1330.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1330.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1330.methods["match"] = GraceBlock_match;
              block1330.methods["prefix?"] = GraceBlock_lift;
              block1330.receiver = this;
              block1330.className = 'block<musical:166>';
              block1330.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1331 = callmethod(this, "touching", [1], var_other);
                return call1331;
              };
              lineNumber = 169
              var block1332 = Grace_allocObject();
              block1332.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1332.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1332.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1332.methods["match"] = GraceBlock_match;
              block1332.methods["prefix?"] = GraceBlock_lift;
              block1332.receiver = this;
              block1332.className = 'block<musical:169>';
              block1332.real = function(
              ) {
                sourceObject = this;
                lineNumber = 167
                onSelf = true;
                var call1333 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1333;
              };
              var call1334 = callmethod(Grace_prelude,"while()do", [1, 1], block1330, block1332);
              return call1334
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1315.paramCounts = [
            1,
          ];
          func1315.variableArities = [
            false,
          ];
          obj1123.methods["bounceOff"] = func1315;
          func1315.definitionLine = 159;
          func1315.definitionModule = "musical";
          var func1335 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 171
              onSelf = true;
              var call1336 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1337 = callmethod(this, "y", [0]);
              var call1338 = callmethod(var_point,"x()y", [1, 1], call1336, call1337);
              var call1339 = callmethod(var_other,"isPointOver", [1], call1338);
              return call1339
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1335.paramCounts = [
            1,
          ];
          func1335.variableArities = [
            false,
          ];
          obj1123.methods["touching"] = func1335;
          func1335.definitionLine = 170;
          func1335.definitionModule = "musical";
          var func1340 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 177
              var if1341 = var_done;
              lineNumber = 174
              onSelf = true;
              var call1342 = callmethod(this, "y", [0]);
              var call1344 = callmethod(var_other,"y", [0]);
              var opresult1346 = callmethod(call1344, "!=", [1], call1342);
              onSelf = true;
              var call1348 = callmethod(this, "x", [0]);
              var call1350 = callmethod(var_other,"x", [0]);
              var opresult1352 = callmethod(call1350, "!=", [1], call1348);
              var opresult1354 = callmethod(opresult1352, "||", [1], opresult1346);
              if (Grace_isTrue(opresult1354)) {
                lineNumber = 176
                lineNumber = 174
                lineNumber = 176
                lineNumber = 175
                onSelf = true;
                var call1357 = callmethod(this, "x", [0]);
                var call1359 = callmethod(var_other,"x", [0]);
                var diff1361 = callmethod(call1359, "-", [1], call1357);
                onSelf = true;
                var call1362 = callmethod(this, "y", [0]);
                var call1364 = callmethod(var_other,"y", [0]);
                var diff1366 = callmethod(call1364, "-", [1], call1362);
                var call1367 = callmethod(var_trig,"atan2", [2], diff1361, diff1366);
                var prod1369 = callmethod(call1367, "*", [1], new GraceNum(180));
                var quotient1371 = callmethod(prod1369, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1372 = callmethod(this, "angle:=", [1], quotient1371);
                if1341 = call1372;
              }
              lineNumber = 177
              onSelf = true;
              var call1373 = callmethod(this, "normaliseAngle", [0]);
              return call1373
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1340.paramCounts = [
            1,
          ];
          func1340.variableArities = [
            false,
          ];
          obj1123.methods["face"] = func1340;
          func1340.definitionLine = 173;
          func1340.definitionModule = "musical";
          var func1374 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 180
              var string1375 = new GraceString("2d");
              var call1376 = callmethod(var_backingCanvas,"getContext", [1], string1375);
              onSelf = true;
              var call1377 = callmethod(this, "draw", [1], call1376);
              return call1377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1374.paramCounts = [
            0,
          ];
          func1374.variableArities = [
            false,
          ];
          obj1123.methods["stamp"] = func1374;
          func1374.definitionLine = 179;
          func1374.definitionModule = "musical";
          sourceObject = obj1123;
          lineNumber = 51
          var call1378 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1379 = callmethod(call1378, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1380 = callmethod(call1379, "initialise", [0]);
          sourceObject = obj1123;
          lineNumber = 52
          var call1381 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1123;
          lineNumber = 54
          lineNumber = 53
          var_above = this;
          sourceObject = obj1123;
          lineNumber = 55
          lineNumber = 54
          var___916__ = this;
          sourceObject = obj1123;
          lineNumber = 55
          var call1382 = callmethod(var_collections,"list", [0]);
          var call1383 = callmethod(call1382,"new", [0]);
          obj1123.data["alwaysBlocks"] = call1383;
          var reader_musical_alwaysBlocks_1384 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1384.def = true;
          reader_musical_alwaysBlocks_1384.confidential = true;
          obj1123.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1384;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1383)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1123;
          lineNumber = 57
          lineNumber = 56
          var quotient1387 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1123.data["x"] = quotient1387;
          var reader_musical_x_1388 = function() {
            return this.data["x"];
          }
          obj1123.methods["x"] = reader_musical_x_1388;
          obj1123.data["x"] = quotient1387;
          var writer_musical_x_1388 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1123.methods["x:="] = writer_musical_x_1388;
          writer_musical_x_1388.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1387)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1123.mutable = true;
          sourceObject = obj1123;
          lineNumber = 58
          lineNumber = 57
          var quotient1391 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1123.data["y"] = quotient1391;
          var reader_musical_y_1392 = function() {
            return this.data["y"];
          }
          obj1123.methods["y"] = reader_musical_y_1392;
          obj1123.data["y"] = quotient1391;
          var writer_musical_y_1392 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1123.methods["y:="] = writer_musical_y_1392;
          writer_musical_y_1392.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1391)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1123.mutable = true;
          sourceObject = obj1123;
          lineNumber = 58
          onSelf = true;
          var call1393 = callmethod(this, "x", [0]);
          obj1123.data["destX"] = call1393;
          var reader_musical_destX_1394 = function() {
            return this.data["destX"];
          }
          obj1123.methods["destX"] = reader_musical_destX_1394;
          obj1123.data["destX"] = call1393;
          var writer_musical_destX_1394 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1123.methods["destX:="] = writer_musical_destX_1394;
          reader_musical_destX_1394.confidential = true;
          writer_musical_destX_1394.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1393)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1123.mutable = true;
          sourceObject = obj1123;
          lineNumber = 59
          onSelf = true;
          var call1395 = callmethod(this, "y", [0]);
          obj1123.data["destY"] = call1395;
          var reader_musical_destY_1396 = function() {
            return this.data["destY"];
          }
          obj1123.methods["destY"] = reader_musical_destY_1396;
          obj1123.data["destY"] = call1395;
          var writer_musical_destY_1396 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1123.methods["destY:="] = writer_musical_destY_1396;
          reader_musical_destY_1396.confidential = true;
          writer_musical_destY_1396.confidential = true;
          lineNumber = 60;
          moduleName = "musical";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1395)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1123.mutable = true;
          sourceObject = obj1123;
          lineNumber = 60
          obj1123.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1397 = function() {
            return this.data["angle"];
          }
          obj1123.methods["angle"] = reader_musical_angle_1397;
          obj1123.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1397 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1123.methods["angle:="] = writer_musical_angle_1397;
          reader_musical_angle_1397.confidential = true;
          writer_musical_angle_1397.confidential = true;
          lineNumber = 61;
          moduleName = "musical";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1123.mutable = true;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          sourceObject = obj1123;
          superDepth = origSuperDepth;
        }
        obj_init_1123.apply(obj1123, []);
        return obj1123
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1122.paramCounts = [
      0,
    ];
    func1122.variableArities = [
      false,
    ];
    obj1120.methods["new"] = func1122;
    func1122.definitionLine = 50;
    func1122.definitionModule = "musical";
    var func1398 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1399 = Grace_allocObject();
        obj1399.definitionModule = "musical";
        obj1399.definitionLine = 50;
        var inho1399 = inheritingObject;
        while (inho1399.superobj) inho1399 = inho1399.superobj;
        inho1399.superobj = obj1399;
        obj1399.data = inheritingObject.data;
        obj1399.outer = this;
        var reader_musical_outer_1400 = function() {
          return this.outer;
        }
        obj1399.methods["outer"] = reader_musical_outer_1400;
        function obj_init_1399() {
          var origSuperDepth = superDepth;
          superDepth = obj1399;
          obj1399.annotations = [];
          var func1401 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 62
              onSelf = true;
              var call1402 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 65
              var block1403 = Grace_allocObject();
              block1403.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1403.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1403.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1403.methods["match"] = GraceBlock_match;
              block1403.methods["prefix?"] = GraceBlock_lift;
              block1403.receiver = this;
              block1403.className = 'block<musical:65>';
              block1403.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 63
                var call1404 = callmethod(var_b,"apply", [0]);
                return call1404;
              };
              var call1405 = callmethod(Grace_prelude,"for()do", [1, 1], call1402, block1403);
              lineNumber = 65
              onSelf = true;
              var call1406 = callmethod(this, "tick", [0]);
              return call1406
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1401.paramCounts = [
            0,
          ];
          func1401.variableArities = [
            false,
          ];
          obj1399.methods["step"] = func1401;
          func1401.definitionLine = 61;
          func1401.definitionModule = "musical";
          var func1407 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1407.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
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
          func1407.paramCounts = [
            0,
          ];
          func1407.variableArities = [
            false,
          ];
          obj1399.methods["tick"] = func1407;
          func1407.definitionLine = 67;
          func1407.definitionModule = "musical";
          var func1408 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
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
          func1408.paramCounts = [
            1,
          ];
          func1408.variableArities = [
            false,
          ];
          obj1399.methods["draw"] = func1408;
          func1408.definitionLine = 68;
          func1408.definitionModule = "musical";
          var func1409 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1409.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 71
              lineNumber = 63
              lineNumber = 70
              var call1410 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1411 = callmethod(this, "destX:=", [1], call1410);
              lineNumber = 72
              lineNumber = 70
              lineNumber = 71
              var call1412 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1413 = callmethod(this, "destY:=", [1], call1412);
              return call1413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1409.paramCounts = [
            1,
          ];
          func1409.variableArities = [
            false,
          ];
          obj1399.methods["moveTo"] = func1409;
          func1409.definitionLine = 69;
          func1409.definitionModule = "musical";
          var func1414 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 75
              lineNumber = 71
              lineNumber = 74
              var call1415 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1416 = callmethod(this, "x:=", [1], call1415);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              var call1417 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1418 = callmethod(this, "y:=", [1], call1417);
              lineNumber = 77
              lineNumber = 75
              lineNumber = 76
              onSelf = true;
              var call1419 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1420 = callmethod(this, "destX:=", [1], call1419);
              lineNumber = 78
              lineNumber = 75
              lineNumber = 77
              onSelf = true;
              var call1421 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1422 = callmethod(this, "destY:=", [1], call1421);
              return call1422
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1414.paramCounts = [
            1,
          ];
          func1414.variableArities = [
            false,
          ];
          obj1399.methods["jumpTo"] = func1414;
          func1414.definitionLine = 73;
          func1414.definitionModule = "musical";
          var func1423 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 79
              var bool1424 = new GraceBoolean(false)
              return bool1424
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1423.paramCounts = [
            1,
          ];
          func1423.variableArities = [
            false,
          ];
          obj1399.methods["isPointOver"] = func1423;
          func1423.definitionLine = 79;
          func1423.definitionModule = "musical";
          var func1425 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1425.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mousedown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
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
          func1425.paramCounts = [
            0,
          ];
          func1425.variableArities = [
            false,
          ];
          obj1399.methods["mousedown"] = func1425;
          func1425.definitionLine = 80;
          func1425.definitionModule = "musical";
          var func1426 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1426.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 82
              onSelf = true;
              var call1427 = callmethod(this, "alwaysBlocks", [0]);
              var call1428 = callmethod(call1427,"push", [1], var_b);
              return call1428
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1426.paramCounts = [
            1,
          ];
          func1426.variableArities = [
            false,
          ];
          obj1399.methods["always"] = func1426;
          func1426.definitionLine = 81;
          func1426.definitionModule = "musical";
          var func1429 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1429.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1429.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 85
              lineNumber = 90
              var block1430 = Grace_allocObject();
              block1430.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1430.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1430.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1430.methods["match"] = GraceBlock_match;
              block1430.methods["prefix?"] = GraceBlock_lift;
              block1430.receiver = this;
              block1430.className = 'block<musical:90>';
              block1430.real = function(
              ) {
                sourceObject = this;
                lineNumber = 89
                var if1431 = var_done;
                lineNumber = 86
                var call1432 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1432)) {
                  lineNumber = 87
                  var call1433 = callmethod(var_b,"apply", [0]);
                  if1431 = call1433;
                }
                return if1431;
              };
              onSelf = true;
              var call1434 = callmethod(this, "always", [1], block1430);
              return call1434
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1429.paramCounts = [
            1,
            1,
          ];
          func1429.variableArities = [
            false,
            false,
          ];
          obj1399.methods["whenever()do"] = func1429;
          func1429.definitionLine = 84;
          func1429.definitionModule = "musical";
          var func1435 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1435.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1439 = callmethod(this, "angle", [0]);
              var quotient1441 = callmethod(call1439, "/", [1], new GraceNum(180));
              var prod1443 = callmethod(quotient1441, "*", [1], var_PI);
              var call1444 = callmethod(var_trig,"cos", [1], prod1443);
              var prod1446 = callmethod(call1444, "*", [1], var_dist);
              var var_y__39__ = prod1446;
              lineNumber = 93;
              moduleName = "musical";
              lineNumber = 92
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1450 = callmethod(this, "angle", [0]);
              var quotient1452 = callmethod(call1450, "/", [1], new GraceNum(180));
              var prod1454 = callmethod(quotient1452, "*", [1], var_PI);
              var call1455 = callmethod(var_trig,"sin", [1], prod1454);
              var prod1457 = callmethod(call1455, "*", [1], var_dist);
              var var_x__39__ = prod1457;
              lineNumber = 94;
              moduleName = "musical";
              lineNumber = 93
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 95
              lineNumber = 87
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1459 = callmethod(this, "x", [0]);
              var opresult1461 = callmethod(call1459, "+", [1], var_x__39__);
              onSelf = true;
              var call1462 = callmethod(this, "x:=", [1], opresult1461);
              lineNumber = 96
              lineNumber = 87
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call1464 = callmethod(this, "y", [0]);
              var opresult1466 = callmethod(call1464, "+", [1], var_y__39__);
              onSelf = true;
              var call1467 = callmethod(this, "y:=", [1], opresult1466);
              return call1467
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1435.paramCounts = [
            1,
          ];
          func1435.variableArities = [
            false,
          ];
          obj1399.methods["forward"] = func1435;
          func1435.definitionLine = 91;
          func1435.definitionModule = "musical";
          var func1468 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1468.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 98
              var block1469 = Grace_allocObject();
              block1469.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1469.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1469.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1469.methods["match"] = GraceBlock_match;
              block1469.methods["prefix?"] = GraceBlock_lift;
              block1469.receiver = this;
              block1469.className = 'block<musical:98>';
              block1469.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1471 = callmethod(this, "angle", [0]);
                var opresult1473 = callmethod(call1471, "<", [1], new GraceNum(0));
                return opresult1473;
              };
              lineNumber = 101
              var block1474 = Grace_allocObject();
              block1474.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1474.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1474.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1474.methods["match"] = GraceBlock_match;
              block1474.methods["prefix?"] = GraceBlock_lift;
              block1474.receiver = this;
              block1474.className = 'block<musical:101>';
              block1474.real = function(
              ) {
                sourceObject = this;
                lineNumber = 100
                lineNumber = 87
                lineNumber = 100
                lineNumber = 99
                onSelf = true;
                var call1476 = callmethod(this, "angle", [0]);
                var opresult1478 = callmethod(call1476, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1479 = callmethod(this, "angle:=", [1], opresult1478);
                return call1479;
              };
              var call1480 = callmethod(Grace_prelude,"while()do", [1, 1], block1469, block1474);
              lineNumber = 101
              var block1481 = Grace_allocObject();
              block1481.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1481.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1481.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1481.methods["match"] = GraceBlock_match;
              block1481.methods["prefix?"] = GraceBlock_lift;
              block1481.receiver = this;
              block1481.className = 'block<musical:101>';
              block1481.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1483 = callmethod(this, "angle", [0]);
                var opresult1485 = callmethod(call1483, ">", [1], new GraceNum(360));
                return opresult1485;
              };
              lineNumber = 104
              var block1486 = Grace_allocObject();
              block1486.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1486.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1486.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1486.methods["match"] = GraceBlock_match;
              block1486.methods["prefix?"] = GraceBlock_lift;
              block1486.receiver = this;
              block1486.className = 'block<musical:104>';
              block1486.real = function(
              ) {
                sourceObject = this;
                lineNumber = 103
                lineNumber = 87
                lineNumber = 103
                lineNumber = 102
                onSelf = true;
                var call1488 = callmethod(this, "angle", [0]);
                var diff1490 = callmethod(call1488, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1491 = callmethod(this, "angle:=", [1], diff1490);
                return call1491;
              };
              var call1492 = callmethod(Grace_prelude,"while()do", [1, 1], block1481, block1486);
              return call1492
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1468.paramCounts = [
            0,
          ];
          func1468.variableArities = [
            false,
          ];
          obj1399.methods["normaliseAngle"] = func1468;
          func1468.definitionLine = 97;
          func1468.definitionModule = "musical";
          var func1493 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1493.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 107
              lineNumber = 87
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call1495 = callmethod(this, "angle", [0]);
              var opresult1497 = callmethod(call1495, "+", [1], var_degrees);
              onSelf = true;
              var call1498 = callmethod(this, "angle:=", [1], opresult1497);
              lineNumber = 107
              onSelf = true;
              var call1499 = callmethod(this, "normaliseAngle", [0]);
              return call1499
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1493.paramCounts = [
            1,
          ];
          func1493.variableArities = [
            false,
          ];
          obj1399.methods["turn"] = func1493;
          func1493.definitionLine = 105;
          func1493.definitionModule = "musical";
          var func1500 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1500.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 113
              var if1501 = var_done;
              lineNumber = 110
              onSelf = true;
              var call1502 = callmethod(this, "x", [0]);
              var call1503 = callmethod(var_point,"x()y", [1, 1], call1502, new GraceNum(0));
              onSelf = true;
              var call1504 = callmethod(this, "isPointOver", [1], call1503);
              if (Grace_isTrue(call1504)) {
                lineNumber = 112
                lineNumber = 111
                var bool1505 = new GraceBoolean(true)
                return bool1505
              }
              lineNumber = 116
              var if1506 = var_done;
              lineNumber = 113
              onSelf = true;
              var call1507 = callmethod(this, "x", [0]);
              var call1508 = callmethod(var_point,"x()y", [1, 1], call1507, var_canvasHeight);
              onSelf = true;
              var call1509 = callmethod(this, "isPointOver", [1], call1508);
              if (Grace_isTrue(call1509)) {
                lineNumber = 115
                lineNumber = 114
                var bool1510 = new GraceBoolean(true)
                return bool1510
              }
              lineNumber = 119
              var if1511 = var_done;
              lineNumber = 116
              onSelf = true;
              var call1512 = callmethod(this, "y", [0]);
              var call1513 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1512);
              onSelf = true;
              var call1514 = callmethod(this, "isPointOver", [1], call1513);
              if (Grace_isTrue(call1514)) {
                lineNumber = 118
                lineNumber = 117
                var bool1515 = new GraceBoolean(true)
                return bool1515
              }
              lineNumber = 122
              var if1516 = var_done;
              lineNumber = 119
              onSelf = true;
              var call1517 = callmethod(this, "y", [0]);
              var call1518 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1517);
              onSelf = true;
              var call1519 = callmethod(this, "isPointOver", [1], call1518);
              if (Grace_isTrue(call1519)) {
                lineNumber = 121
                lineNumber = 120
                var bool1520 = new GraceBoolean(true)
                return bool1520
              }
              lineNumber = 123
              lineNumber = 122
              var bool1521 = new GraceBoolean(false)
              return bool1521
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1500.paramCounts = [
            0,
          ];
          func1500.variableArities = [
            false,
          ];
          obj1399.methods["touchingEdge"] = func1500;
          func1500.definitionLine = 109;
          func1500.definitionModule = "musical";
          var func1522 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1522.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 126
              lineNumber = 125
              var var_dx = new GraceNum(0);
              lineNumber = 126;
              moduleName = "musical";
              lineNumber = 125
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 127
              lineNumber = 126
              var var_dy = new GraceNum(0);
              lineNumber = 127;
              moduleName = "musical";
              lineNumber = 126
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 130
              var if1523 = var_done;
              lineNumber = 127
              onSelf = true;
              var call1524 = callmethod(this, "x", [0]);
              var call1525 = callmethod(var_point,"x()y", [1, 1], call1524, new GraceNum(0));
              onSelf = true;
              var call1526 = callmethod(this, "isPointOver", [1], call1525);
              if (Grace_isTrue(call1526)) {
                lineNumber = 128
                onSelf = true;
                var call1527 = callmethod(this, "bounceFrom", [1], var_top);
                if1523 = call1527;
              }
              lineNumber = 133
              var if1528 = var_done;
              lineNumber = 130
              onSelf = true;
              var call1529 = callmethod(this, "x", [0]);
              var call1530 = callmethod(var_point,"x()y", [1, 1], call1529, var_canvasHeight);
              onSelf = true;
              var call1531 = callmethod(this, "isPointOver", [1], call1530);
              if (Grace_isTrue(call1531)) {
                lineNumber = 131
                onSelf = true;
                var call1532 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1528 = call1532;
              }
              lineNumber = 136
              var if1533 = var_done;
              lineNumber = 133
              onSelf = true;
              var call1534 = callmethod(this, "y", [0]);
              var call1535 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1534);
              onSelf = true;
              var call1536 = callmethod(this, "isPointOver", [1], call1535);
              if (Grace_isTrue(call1536)) {
                lineNumber = 134
                onSelf = true;
                var call1537 = callmethod(this, "bounceFrom", [1], var_left);
                if1533 = call1537;
              }
              lineNumber = 139
              var if1538 = var_done;
              lineNumber = 136
              onSelf = true;
              var call1539 = callmethod(this, "y", [0]);
              var call1540 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1539);
              onSelf = true;
              var call1541 = callmethod(this, "isPointOver", [1], call1540);
              if (Grace_isTrue(call1541)) {
                lineNumber = 137
                onSelf = true;
                var call1542 = callmethod(this, "bounceFrom", [1], var_right);
                if1538 = call1542;
              }
              lineNumber = 139
              var block1543 = Grace_allocObject();
              block1543.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1543.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1543.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1543.methods["match"] = GraceBlock_match;
              block1543.methods["prefix?"] = GraceBlock_lift;
              block1543.receiver = this;
              block1543.className = 'block<musical:139>';
              block1543.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1544 = callmethod(this, "touchingEdge", [0]);
                return call1544;
              };
              lineNumber = 142
              var block1545 = Grace_allocObject();
              block1545.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1545.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1545.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1545.methods["match"] = GraceBlock_match;
              block1545.methods["prefix?"] = GraceBlock_lift;
              block1545.receiver = this;
              block1545.className = 'block<musical:142>';
              block1545.real = function(
              ) {
                sourceObject = this;
                lineNumber = 140
                onSelf = true;
                var call1546 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1546;
              };
              var call1547 = callmethod(Grace_prelude,"while()do", [1, 1], block1543, block1545);
              return call1547
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1522.paramCounts = [
            0,
          ];
          func1522.variableArities = [
            false,
          ];
          obj1399.methods["bounce"] = func1522;
          func1522.definitionLine = 124;
          func1522.definitionModule = "musical";
          var func1548 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1548.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 147
              var if1549 = var_done;
              lineNumber = 144
              var string1550 = new GraceString("left");
              var opresult1553 = callmethod(var_dir, "==", [1], string1550);
              if (Grace_isTrue(opresult1553)) {
                lineNumber = 146
                lineNumber = 87
                lineNumber = 146
                lineNumber = 145
                onSelf = true;
                var call1554 = callmethod(this, "angle", [0]);
                var diff1557 = callmethod(new GraceNum(360), "-", [1], call1554);
                onSelf = true;
                var call1558 = callmethod(this, "angle:=", [1], diff1557);
                if1549 = call1558;
              }
              lineNumber = 150
              var if1559 = var_done;
              lineNumber = 147
              var string1560 = new GraceString("right");
              var opresult1563 = callmethod(var_dir, "==", [1], string1560);
              if (Grace_isTrue(opresult1563)) {
                lineNumber = 149
                lineNumber = 87
                lineNumber = 149
                lineNumber = 148
                onSelf = true;
                var call1564 = callmethod(this, "angle", [0]);
                var diff1567 = callmethod(new GraceNum(360), "-", [1], call1564);
                onSelf = true;
                var call1568 = callmethod(this, "angle:=", [1], diff1567);
                if1559 = call1568;
              }
              lineNumber = 153
              var if1569 = var_done;
              lineNumber = 150
              var string1570 = new GraceString("top");
              var opresult1573 = callmethod(var_dir, "==", [1], string1570);
              if (Grace_isTrue(opresult1573)) {
                lineNumber = 152
                lineNumber = 87
                lineNumber = 152
                lineNumber = 151
                onSelf = true;
                var call1574 = callmethod(this, "angle", [0]);
                var diff1577 = callmethod(new GraceNum(180), "-", [1], call1574);
                onSelf = true;
                var call1578 = callmethod(this, "angle:=", [1], diff1577);
                if1569 = call1578;
              }
              lineNumber = 156
              var if1579 = var_done;
              lineNumber = 153
              var string1580 = new GraceString("bottom");
              var opresult1583 = callmethod(var_dir, "==", [1], string1580);
              if (Grace_isTrue(opresult1583)) {
                lineNumber = 155
                lineNumber = 87
                lineNumber = 155
                lineNumber = 154
                onSelf = true;
                var call1584 = callmethod(this, "angle", [0]);
                var diff1587 = callmethod(new GraceNum(180), "-", [1], call1584);
                onSelf = true;
                var call1588 = callmethod(this, "angle:=", [1], diff1587);
                if1579 = call1588;
              }
              lineNumber = 156
              onSelf = true;
              var call1589 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 157
              onSelf = true;
              var call1590 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1590
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1548.paramCounts = [
            1,
          ];
          func1548.variableArities = [
            false,
          ];
          obj1399.methods["bounceFrom"] = func1548;
          func1548.definitionLine = 143;
          func1548.definitionModule = "musical";
          var func1591 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 163
              var if1592 = var_done;
              lineNumber = 160
              var call1593 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1595 = callmethod(this, "x", [0]);
              var opresult1597 = callmethod(call1595, ">", [1], call1593);
              if (Grace_isTrue(opresult1597)) {
                lineNumber = 161
                onSelf = true;
                var call1598 = callmethod(this, "bounceFrom", [1], var_left);
                if1592 = call1598;
              }
              lineNumber = 166
              var if1599 = var_done;
              lineNumber = 163
              var call1600 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1602 = callmethod(this, "x", [0]);
              var opresult1604 = callmethod(call1602, "<", [1], call1600);
              if (Grace_isTrue(opresult1604)) {
                lineNumber = 164
                onSelf = true;
                var call1605 = callmethod(this, "bounceFrom", [1], var_right);
                if1599 = call1605;
              }
              lineNumber = 166
              var block1606 = Grace_allocObject();
              block1606.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1606.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1606.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1606.methods["match"] = GraceBlock_match;
              block1606.methods["prefix?"] = GraceBlock_lift;
              block1606.receiver = this;
              block1606.className = 'block<musical:166>';
              block1606.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1607 = callmethod(this, "touching", [1], var_other);
                return call1607;
              };
              lineNumber = 169
              var block1608 = Grace_allocObject();
              block1608.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1608.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1608.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1608.methods["match"] = GraceBlock_match;
              block1608.methods["prefix?"] = GraceBlock_lift;
              block1608.receiver = this;
              block1608.className = 'block<musical:169>';
              block1608.real = function(
              ) {
                sourceObject = this;
                lineNumber = 167
                onSelf = true;
                var call1609 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1609;
              };
              var call1610 = callmethod(Grace_prelude,"while()do", [1, 1], block1606, block1608);
              return call1610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1591.paramCounts = [
            1,
          ];
          func1591.variableArities = [
            false,
          ];
          obj1399.methods["bounceOff"] = func1591;
          func1591.definitionLine = 159;
          func1591.definitionModule = "musical";
          var func1611 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1611.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 171
              onSelf = true;
              var call1612 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1613 = callmethod(this, "y", [0]);
              var call1614 = callmethod(var_point,"x()y", [1, 1], call1612, call1613);
              var call1615 = callmethod(var_other,"isPointOver", [1], call1614);
              return call1615
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1611.paramCounts = [
            1,
          ];
          func1611.variableArities = [
            false,
          ];
          obj1399.methods["touching"] = func1611;
          func1611.definitionLine = 170;
          func1611.definitionModule = "musical";
          var func1616 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 177
              var if1617 = var_done;
              lineNumber = 174
              onSelf = true;
              var call1618 = callmethod(this, "y", [0]);
              var call1620 = callmethod(var_other,"y", [0]);
              var opresult1622 = callmethod(call1620, "!=", [1], call1618);
              onSelf = true;
              var call1624 = callmethod(this, "x", [0]);
              var call1626 = callmethod(var_other,"x", [0]);
              var opresult1628 = callmethod(call1626, "!=", [1], call1624);
              var opresult1630 = callmethod(opresult1628, "||", [1], opresult1622);
              if (Grace_isTrue(opresult1630)) {
                lineNumber = 176
                lineNumber = 174
                lineNumber = 176
                lineNumber = 175
                onSelf = true;
                var call1633 = callmethod(this, "x", [0]);
                var call1635 = callmethod(var_other,"x", [0]);
                var diff1637 = callmethod(call1635, "-", [1], call1633);
                onSelf = true;
                var call1638 = callmethod(this, "y", [0]);
                var call1640 = callmethod(var_other,"y", [0]);
                var diff1642 = callmethod(call1640, "-", [1], call1638);
                var call1643 = callmethod(var_trig,"atan2", [2], diff1637, diff1642);
                var prod1645 = callmethod(call1643, "*", [1], new GraceNum(180));
                var quotient1647 = callmethod(prod1645, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1648 = callmethod(this, "angle:=", [1], quotient1647);
                if1617 = call1648;
              }
              lineNumber = 177
              onSelf = true;
              var call1649 = callmethod(this, "normaliseAngle", [0]);
              return call1649
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1616.paramCounts = [
            1,
          ];
          func1616.variableArities = [
            false,
          ];
          obj1399.methods["face"] = func1616;
          func1616.definitionLine = 173;
          func1616.definitionModule = "musical";
          var func1650 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1650.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 180
              var string1651 = new GraceString("2d");
              var call1652 = callmethod(var_backingCanvas,"getContext", [1], string1651);
              onSelf = true;
              var call1653 = callmethod(this, "draw", [1], call1652);
              return call1653
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1650.paramCounts = [
            0,
          ];
          func1650.variableArities = [
            false,
          ];
          obj1399.methods["stamp"] = func1650;
          func1650.definitionLine = 179;
          func1650.definitionModule = "musical";
          sourceObject = obj1399;
          lineNumber = 51
          var call1654 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1655 = callmethod(call1654, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1656 = callmethod(call1655, "initialise", [0]);
          sourceObject = obj1399;
          lineNumber = 52
          var call1657 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1399;
          lineNumber = 54
          lineNumber = 53
          var_above = this;
          sourceObject = obj1399;
          lineNumber = 55
          lineNumber = 54
          var___916__ = this;
          sourceObject = obj1399;
          lineNumber = 55
          var call1658 = callmethod(var_collections,"list", [0]);
          var call1659 = callmethod(call1658,"new", [0]);
          obj1399.data["alwaysBlocks"] = call1659;
          var reader_musical_alwaysBlocks_1660 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1660.def = true;
          reader_musical_alwaysBlocks_1660.confidential = true;
          obj1399.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1660;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1659)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1399;
          lineNumber = 57
          lineNumber = 56
          var quotient1663 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1399.data["x"] = quotient1663;
          var reader_musical_x_1664 = function() {
            return this.data["x"];
          }
          obj1399.methods["x"] = reader_musical_x_1664;
          obj1399.data["x"] = quotient1663;
          var writer_musical_x_1664 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1399.methods["x:="] = writer_musical_x_1664;
          writer_musical_x_1664.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1663)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1399.mutable = true;
          sourceObject = obj1399;
          lineNumber = 58
          lineNumber = 57
          var quotient1667 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1399.data["y"] = quotient1667;
          var reader_musical_y_1668 = function() {
            return this.data["y"];
          }
          obj1399.methods["y"] = reader_musical_y_1668;
          obj1399.data["y"] = quotient1667;
          var writer_musical_y_1668 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1399.methods["y:="] = writer_musical_y_1668;
          writer_musical_y_1668.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1667)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1399.mutable = true;
          sourceObject = obj1399;
          lineNumber = 58
          onSelf = true;
          var call1669 = callmethod(this, "x", [0]);
          obj1399.data["destX"] = call1669;
          var reader_musical_destX_1670 = function() {
            return this.data["destX"];
          }
          obj1399.methods["destX"] = reader_musical_destX_1670;
          obj1399.data["destX"] = call1669;
          var writer_musical_destX_1670 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1399.methods["destX:="] = writer_musical_destX_1670;
          reader_musical_destX_1670.confidential = true;
          writer_musical_destX_1670.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1669)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1399.mutable = true;
          sourceObject = obj1399;
          lineNumber = 59
          onSelf = true;
          var call1671 = callmethod(this, "y", [0]);
          obj1399.data["destY"] = call1671;
          var reader_musical_destY_1672 = function() {
            return this.data["destY"];
          }
          obj1399.methods["destY"] = reader_musical_destY_1672;
          obj1399.data["destY"] = call1671;
          var writer_musical_destY_1672 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1399.methods["destY:="] = writer_musical_destY_1672;
          reader_musical_destY_1672.confidential = true;
          writer_musical_destY_1672.confidential = true;
          lineNumber = 60;
          moduleName = "musical";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1671)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1399.mutable = true;
          sourceObject = obj1399;
          lineNumber = 60
          obj1399.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1673 = function() {
            return this.data["angle"];
          }
          obj1399.methods["angle"] = reader_musical_angle_1673;
          obj1399.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1673 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1399.methods["angle:="] = writer_musical_angle_1673;
          reader_musical_angle_1673.confidential = true;
          writer_musical_angle_1673.confidential = true;
          lineNumber = 61;
          moduleName = "musical";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1399.mutable = true;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          sourceObject = obj1399;
          superDepth = origSuperDepth;
        }
        obj_init_1399.apply(inheritingObject, []);
        return obj1399
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1120.methods["new()object"] = func1398;
    var func1674 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 50
        var string1675 = new GraceString("class drawable");
        return string1675
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1674.paramCounts = [
    ];
    func1674.variableArities = [
    ];
    obj1120.methods["asDebugString"] = func1674;
    func1674.definitionLine = 50;
    func1674.definitionModule = "musical";
    sourceObject = obj1120;
    sourceObject = obj1120;
    superDepth = origSuperDepth;
  }
  obj_init_1120.apply(obj1120, []);
  var var_drawable = obj1120;
  lineNumber = 184
  lineNumber = 221
  lineNumber = 257
  lineNumber = 300
  lineNumber = 317
  var obj1676 = Grace_allocObject();
  obj1676.definitionModule = "musical";
  obj1676.definitionLine = 317;
  obj1676.outer = this;
  var reader_musical_outer_1677 = function() {
    return this.outer;
  }
  obj1676.methods["outer"] = reader_musical_outer_1677;
  function obj_init_1676() {
    var origSuperDepth = superDepth;
    superDepth = obj1676;
    obj1676.annotations = [];
    var func1678 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1678.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 320
        onSelf = true;
        var call1679 = callmethod(this, "position", [0]);
        var call1680 = callmethod(call1679,"x", [0]);
        return call1680
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1678.paramCounts = [
      0,
    ];
    func1678.variableArities = [
      false,
    ];
    obj1676.methods["x"] = func1678;
    func1678.definitionLine = 319;
    func1678.definitionModule = "musical";
    var func1681 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1681.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 323
        onSelf = true;
        var call1682 = callmethod(this, "position", [0]);
        var call1683 = callmethod(call1682,"y", [0]);
        return call1683
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1681.paramCounts = [
      0,
    ];
    func1681.variableArities = [
      false,
    ];
    obj1676.methods["y"] = func1681;
    func1681.definitionLine = 322;
    func1681.definitionModule = "musical";
    var func1684 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1684.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 326
        onSelf = true;
        var call1685 = callmethod(this, "position", [0]);
        return call1685
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1684.paramCounts = [
      0,
    ];
    func1684.variableArities = [
      false,
    ];
    obj1676.methods["location"] = func1684;
    func1684.definitionLine = 325;
    func1684.definitionModule = "musical";
    sourceObject = obj1676;
    lineNumber = 318
    var call1686 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1676.data["position"] = call1686;
    var reader_musical_position_1687 = function() {
      return this.data["position"];
    }
    obj1676.methods["position"] = reader_musical_position_1687;
    obj1676.data["position"] = call1686;
    var writer_musical_position_1687 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1676.methods["position:="] = writer_musical_position_1687;
    lineNumber = 318;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1686)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1676.mutable = true;
    sourceObject = obj1676;
    sourceObject = obj1676;
    sourceObject = obj1676;
    superDepth = origSuperDepth;
  }
  obj_init_1676.apply(obj1676, []);
  var var_mouse = obj1676;
  lineNumber = 323
  var func1688 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1688.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 317
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1688.paramCounts = [
    0,
  ];
  func1688.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1688;
  func1688.definitionLine = 323;
  func1688.definitionModule = "musical";
  lineNumber = 317;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 335
  lineNumber = 340
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "fresh:value:\n face\n bounceFrom\n always\n touchingEdge\n step\n destY\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n label:=\n x\n y\n label\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n destX\n turn\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\nconfidential:\nfresh:image:\n face\n bounceFrom\n always\n touchingEdge\n imgTag\n step\n destY\n destY:=\n whenever()do\n x:=\n height:=\n normaliseAngle\n width:=\n x\n y\n width\n stamp\n angle\n url\n bounceOff\n bounce\n destX:=\n touching\n destX\n turn\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n url:=\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n note\n sin\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n randomPoint\n playSound\n stopSound\n start\n stop\n atModuleEnd\nconstructors-of:point:\n x()y\nmethods-of:point.x()y:\n down\n up\n x\n y\n left\n right\nfresh:circle:\n face\n bounceFrom\n always\n touchingEdge\n step\n destY\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n x\n y\n stamp\n angle\n bounceOff\n bounce\n destX:=\n radius:=\n touching\n destX\n turn\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n radius\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:rectangle:\n face\n bounceFrom\n always\n touchingEdge\n step\n destY\n destY:=\n whenever()do\n colour:=\n x:=\n height:=\n normaliseAngle\n colour\n width:=\n x\n y\n width\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n asString\n destX\n turn\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\nmethods-of:drawable.new:\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n whenever()do\n step\n turn\n destX:=\n destY:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n x:=\n normaliseAngle\n y:=\n forward\n bounce\n x\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n stamp\n angle\npath:\n musical\nclasses:\n point\n drawable\n";
if (originalSourceLines) {
  originalSourceLines["musical"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "import \"math\" as randomModule",
    "",
    "import \"StandardPrelude\" as sp",
    "inherits sp.new",
    "",
    "var document",
    "var canvas",
    "var backingCanvas",
    "var backingContext",
    "var mouseDownListener",
    "var mouseMoveListener",
    "",
    "// def timbre = dom.window.timbre",
    "",
    "def trig = dom.window.Math",
    "def PI = 3.14159",
    "",
    "var stopRunning := false",
    "var initialised := false",
    "var backgroundColour := \"white\"",
    "def registeredObjects = collections.list.new",
    "def stepBlocks = collections.list.new",
    "def audioTags = collections.map.new",
    "",
    "var canvasWidth",
    "var canvasHeight",
    "",
    "def left = \"left\"",
    "def right = \"right\"",
    "def top = \"top\"",
    "def bottom = \"bottom\"",
    "",
    "var centre",
    "var leftCentre",
    "var rightCentre",
    "",
    "var above",
    "var Δ",
    "",
    "class point.x(x')y(y') {",
    "    def x is public = x'",
    "    def y is public = y'",
    "    method left(dx) { point.x(x - dx)y(y) }",
    "    method right(dx) { point.x(x + dx)y(y) }",
    "    method up(dy) { point.x(x)y(y - dy) }",
    "    method down(dy) { point.x(x)y(y + dy) }",
    "}",
    "class drawable.new {",
    "    initialise",
    "    registeredObjects.push(self)",
    "    above := self",
    "    Δ := self",
    "    def alwaysBlocks = collections.list.new",
    "    var x is readable := canvasWidth / 2",
    "    var y is readable := canvasHeight / 2",
    "    var destX := x",
    "    var destY := y",
    "    var angle := 180",
    "    method step {",
    "        for (alwaysBlocks) do {b->",
    "            b.apply",
    "        }",
    "        tick",
    "    }",
    "    method tick {}",
    "    method draw(ctx) {}",
    "    method moveTo(p) {",
    "        destX := p.x",
    "        destY := p.y",
    "    }",
    "    method jumpTo(p) {",
    "        x := p.x",
    "        y := p.y",
    "        destX := x",
    "        destY := y",
    "    }",
    "    method isPointOver(p) { false }",
    "    method mousedown {}",
    "    method always(b) {",
    "        alwaysBlocks.push(b)",
    "    }",
    "    method whenever(cond)do(b) {",
    "        always {",
    "            if (cond.apply) then {",
    "                b.apply",
    "            }",
    "        }",
    "    }",
    "    method forward(dist) {",
    "        def y' = trig.cos(angle / 180 * PI) * dist",
    "        def x' = trig.sin(angle / 180 * PI) * dist",
    "        x := x + x'",
    "        y := y + y'",
    "    }",
    "    method normaliseAngle {",
    "        while {angle < 0} do {",
    "            angle := angle + 360",
    "        }",
    "        while {angle > 360} do {",
    "            angle := angle - 360",
    "        }",
    "    }",
    "    method turn(degrees) {",
    "        angle := angle + degrees",
    "        normaliseAngle",
    "    }",
    "    method touchingEdge {",
    "        if (isPointOver(point.x(x)y(0))) then {",
    "            return true",
    "        }",
    "        if (isPointOver(point.x(x)y(canvasHeight))) then {",
    "            return true",
    "        }",
    "        if (isPointOver(point.x(0)y(y))) then {",
    "            return true",
    "        }",
    "        if (isPointOver(point.x(canvasWidth)y(y))) then {",
    "            return true",
    "        }",
    "        return false",
    "    }",
    "    method bounce {",
    "        var dx := 0",
    "        var dy := 0",
    "        if (isPointOver(point.x(x)y(0))) then {",
    "            bounceFrom(top)",
    "        }",
    "        if (isPointOver(point.x(x)y(canvasHeight))) then {",
    "            bounceFrom(bottom)",
    "        }",
    "        if (isPointOver(point.x(0)y(y))) then {",
    "            bounceFrom(left)",
    "        }",
    "        if (isPointOver(point.x(canvasWidth)y(y))) then {",
    "            bounceFrom(right)",
    "        }",
    "        while { touchingEdge } do {",
    "            forward 1",
    "        }",
    "    }",
    "    method bounceFrom(dir) {",
    "        if (dir == \"left\") then {",
    "            angle := 360 - angle",
    "        }",
    "        if (dir == \"right\") then {",
    "            angle := 360 - angle",
    "        }",
    "        if (dir == \"top\") then {",
    "            angle := 180 - angle",
    "        }",
    "        if (dir == \"bottom\") then {",
    "            angle := 180 - angle",
    "        }",
    "        normaliseAngle",
    "        forward 2",
    "    }",
    "    method bounceOff(other) {",
    "        if (x > other.x) then {",
    "            bounceFrom(left)",
    "        }",
    "        if (x < other.x) then {",
    "            bounceFrom(right)",
    "        }",
    "        while { touching(other) } do {",
    "            forward 1",
    "        }",
    "    }",
    "    method touching(other) {",
    "        other.isPointOver(point.x(x)y(y))",
    "    }",
    "    method face(other) {",
    "        if ((other.x != x) || (other.y != y)) then {",
    "            angle := trig.atan2(other.x - x, other.y - y) * 180 / 3.1415",
    "        }",
    "        normaliseAngle",
    "    }",
    "    method stamp {",
    "        draw(backingCanvas.getContext(\"2d\"))",
    "    }",
    "}",
    "",
    "method rectangle {",
    "    object {",
    "        inherits drawable.new",
    "        var width := 100",
    "        var height := 50",
    "        var colour := \"blue\"",
    "        method draw(ctx) {",
    "            ctx.fillStyle := colour",
    "            ctx.fillRect(x - width / 2, y - height / 2, width, height)",
    "        }",
    "        method isPointOver(p) {",
    "            if (p.x < (x - width / 2)) then {",
    "                return false",
    "            }",
    "            if (p.x > (x + width / 2)) then {",
    "                return false",
    "            }",
    "            if (p.y < (y - height / 2)) then {",
    "                return false",
    "            }",
    "            if (p.y > (y + height / 2)) then {",
    "                return false",
    "            }",
    "            return true",
    "        }",
    "        method asString {",
    "            return \"rectangle\"",
    "        }",
    "    }",
    "}",
    "",
    "type SniffCircle = {",
    "    x -> Number",
    "    y -> Number",
    "    radius -> Number",
    "    colour -> String",
    "}",
    "method circle {",
    "    object {",
    "        inherits drawable.new",
    "        var radius is readable := 25",
    "        var colour is readable := \"green\"",
    "        method draw(ctx) {",
    "            ctx.fillStyle := colour",
    "            ctx.beginPath",
    "            ctx.arc(x, y, radius, 0, 6.283)",
    "            ctx.fill",
    "        }",
    "        method isPointOver(p) {",
    "            def dx = (p.x - x)",
    "            def dy = (p.y - y)",
    "            def dist = (dx * dx + dy * dy) ^ 0.5",
    "            if (dist <= radius) then {",
    "                return true",
    "            }",
    "            return false",
    "        }",
    "        method touching(other) {",
    "            if (SniffCircle.match(other)) then {",
    "                def n2 = (((x - other.x) ^ 2) + ((y - other.y) ^ 2))",
    "                if (n2 == 0) then {",
    "                    return true",
    "                }",
    "                if ((n2 ^ 0.5) < (other.radius + radius)) then {",
    "                    return true",
    "                }",
    "                return false",
    "            }",
    "            super.touching(other)",
    "        }",
    "    }",
    "}",
    "",
    "method image {",
    "    object {",
    "        inherits drawable.new",
    "        var width := 64",
    "        var height := 64",
    "        def imgTag = dom.document.createElement(\"img\")",
    "        method url {",
    "            imgTag.src",
    "        }",
    "        method url:=(s) {",
    "            imgTag.src := s",
    "        }",
    "        method draw(ctx) {",
    "            ctx.save",
    "            ctx.translate(x, y)",
    "            ctx.rotate(-(angle + 180) / 180 * 3.1415)",
    "            ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "            ctx.restore",
    "        }",
    "        method isPointOver(p) {",
    "            // Rotate p and express it relative to (x, y), then just",
    "            // check whether it's within the bounds of the rectangle.",
    "            def c = trig.cos(-(angle + 180) / 180 * 3.1415)",
    "            def s = trig.sin(-(angle + 180) / 180 * 3.1415)",
    "            def rotatedX = c * (p.x - x) - s * (p.y - y)",
    "            def rotatedY = s * (p.x - x) + c * (p.y - y)",
    "            if (rotatedX < (-width / 2)) then {",
    "                return false",
    "            }",
    "            if (rotatedX > (width / 2)) then {",
    "                return false",
    "            }",
    "            if (rotatedY < (-height / 2)) then {",
    "                return false",
    "            }",
    "            if (rotatedY > (height / 2)) then {",
    "                return false",
    "            }",
    "            return true",
    "        }",
    "    }",
    "}",
    "",
    "method value(b) {",
    "    object {",
    "        inherits drawable.new",
    "        var colour := \"blue\"",
    "        var label := \"\"",
    "        method draw(ctx) {",
    "            ctx.fillStyle := colour",
    "            ctx.font := \"20px sans-serif\"",
    "            if (label != \"\") then {",
    "                ctx.fillText(\"{label} {b.apply}\", x, y)",
    "            } else {",
    "                ctx.fillText(\"{b.apply}\", x, y)",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "def mouse = object {",
    "    var position is public := point.x(0)y(0)",
    "    method x {",
    "        position.x",
    "    }",
    "    method y {",
    "        position.y",
    "    }",
    "    method location {",
    "        position",
    "    }",
    "}",
    "",
    "method clear {",
    "    def ctx = backingCanvas.getContext(\"2d\")",
    "    ctx.fillStyle := backgroundColour",
    "    ctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "}",
    "method note {",
    "    //dom.window.T(\"sin\").play();",
    "    // dom.window.alert(\"HI\");",
    "}",
    "",
    "method sin (freq) {",
    "    dom.window.alert(freq);",
    "    dom.window.t_sin(freq, 0.5);",
    "    // dom.window.T(\"sin\").play();",
    "}",
    "",
    "method always(b) {",
    "    stepBlocks.push(b)",
    "}",
    "method whenever(c)do(b) {",
    "    stepBlocks.push({",
    "        if (c.apply) then { b.apply }",
    "    })",
    "}",
    "method hue(h)saturation(s)lightness(l) {",
    "    return \"hsl({h}, {s}%, {l}%)\"",
    "}",
    "method h(h)s(s)l(l) {",
    "    hue(h)saturation(s)lightness(l)",
    "}",
    "method initialise {",
    "    if (initialised) then {",
    "        return false",
    "    }",
    "    initialised := true",
    "    document := dom.document",
    "    canvas := document.getElementById(\"standard-canvas\")",
    "    canvasWidth := canvas.width",
    "    canvasHeight := canvas.height",
    "    centre := point.x(canvasWidth / 2)y(canvasHeight / 2)",
    "    leftCentre := point.x(0)y(canvasHeight / 2)",
    "    rightCentre := point.x(canvasWidth)y(canvasHeight / 2)",
    "    mouse.position := centre",
    "    // Save the listener functions so that we can remove them",
    "    // later on.",
    "    mouseMoveListener := { ev ->",
    "        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "        def y = (ev.clientY - canvas.offsetTop - 7) / canvas.offsetHeight * canvasHeight",
    "        mouse.position := point.x(x)y(y)",
    "    }",
    "    canvas.addEventListener(\"mousemove\", mouseMoveListener)",
    "    mouseDownListener := { ev ->",
    "        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "        def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "        if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "            ev.preventDefault",
    "            stop",
    "        }",
    "        def p = point.x(x)y(y)",
    "        for (registeredObjects) do {obj->",
    "            if (obj.isPointOver(p)) then {",
    "                obj.mousedown",
    "                ev.preventDefault",
    "            }",
    "        }",
    "    }",
    "    canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "}",
    "method background(col) {",
    "    backgroundColour := col",
    "}",
    "method random(n) {",
    "    (n * randomModule.random).truncate",
    "}",
    "method randomPoint {",
    "    point.x(canvasWidth / 10 + random(canvasWidth * 0.8))",
    "        y(canvasHeight / 10 + random(canvasHeight * 0.8))",
    "}",
    "method playSound {",
    "    dom.window.T(\"sin\").play()",
    "    // if (audioTags.contains(url)) then {",
    "    //     def audio = audioTags.get(url)",
    "    //     audio.currentTime := 0",
    "    //     audio.play",
    "    // } else {",
    "    //     def audio = dom.document.createElement \"audio\"",
    "    //     audioTags.put(url, audio)",
    "    //     audio.src := url",
    "    //     audio.load",
    "    //     audio.play",
    "    // }",
    "}",
    "method stopSound(url) {",
    "    if (audioTags.contains(url)) then {",
    "        def audio = audioTags.get(url)",
    "        audio.pause",
    "    }",
    "}",
    "method start {",
    "    initialise",
    "    stopRunning := false",
    "    backingCanvas := dom.document.createElement(\"canvas\")",
    "    backingCanvas.height := canvasHeight",
    "    backingCanvas.width := canvasWidth",
    "    backingContext := backingCanvas.getContext(\"2d\")",
    "    def mctx = canvas.getContext(\"2d\")",
    "    dom.while { !stopRunning } waiting 10 do {",
    "        for (registeredObjects) do {obj->",
    "            obj.step",
    "        }",
    "        for (stepBlocks) do {step->",
    "            step.apply",
    "        }",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        for (registeredObjects) do {obj->",
    "            obj.draw(mctx)",
    "        }",
    "        mctx.fillStyle := \"red\"",
    "        mctx.fillRect(canvasWidth - 20, 0, 20, 20)",
    "    }",
    "}",
    "method stop {",
    "    stopRunning := true",
    "    canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "}",
    "method atModuleEnd(module) {",
    "    start",
    "}",
    "",
  ];
}
