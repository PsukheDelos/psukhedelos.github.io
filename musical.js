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
  lineNumber = 362
  var func765 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func765.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (hue)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func765.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (saturation)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func765.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (lightness)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 364
      lineNumber = 363
      var string766 = new GraceString("%)");
      var string769 = new GraceString("%, ");
      var string772 = new GraceString(", ");
      var string775 = new GraceString("hsl(");
      var opresult777 = callmethod(string775, "++", [1], var_h);
      var opresult779 = callmethod(opresult777, "++", [1], string772);
      var opresult781 = callmethod(opresult779, "++", [1], var_s);
      var opresult783 = callmethod(opresult781, "++", [1], string769);
      var opresult785 = callmethod(opresult783, "++", [1], var_l);
      var opresult787 = callmethod(opresult785, "++", [1], string766);
      return opresult787
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func765.paramCounts = [
    1,
    1,
    1,
  ];
  func765.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["hue()saturation()lightness"] = func765;
  func765.definitionLine = 362;
  func765.definitionModule = "musical";
  lineNumber = 365
  var func788 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func788.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (h)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func788.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (s)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func788.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (l)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 366
      onSelf = true;
      var call789 = callmethod(this, "hue()saturation()lightness", [1, 1, 1], var_h, var_s, var_l);
      return call789
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func788.paramCounts = [
    1,
    1,
    1,
  ];
  func788.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["h()s()l"] = func788;
  func788.definitionLine = 365;
  func788.definitionModule = "musical";
  lineNumber = 368
  var func790 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func790.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 373
      var if791 = var_done;
      lineNumber = 370
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 372
        lineNumber = 371
        var bool792 = new GraceBoolean(false)
        return bool792
      }
      lineNumber = 374
      lineNumber = 373
      var bool793 = new GraceBoolean(true)
      var_initialised = bool793;
      lineNumber = 375
      lineNumber = 374
      var call794 = callmethod(var_dom,"document", [0]);
      var_document = call794;
      lineNumber = 375
      var string795 = new GraceString("standard-canvas");
      var call796 = callmethod(var_document,"getElementById", [1], string795);
      var_canvas = call796;
      lineNumber = 377
      lineNumber = 376
      var call797 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call797;
      lineNumber = 378
      lineNumber = 377
      var call798 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call798;
      lineNumber = 378
      var quotient801 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient804 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call805 = callmethod(var_point,"x()y", [1, 1], quotient801, quotient804);
      var_centre = call805;
      lineNumber = 379
      var quotient808 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call809 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient808);
      var_leftCentre = call809;
      lineNumber = 380
      var quotient812 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call813 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient812);
      var_rightCentre = call813;
      lineNumber = 384
      lineNumber = 377
      lineNumber = 381
      var call814 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 389
      var block815 = Grace_allocObject();
      block815.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block815.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block815.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block815.methods["match"] = GraceBlock_match;
      block815.methods["prefix?"] = GraceBlock_lift;
      block815.receiver = this;
      block815.className = 'block<musical:389>';
      block815.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 386
        lineNumber = 385
        var call817 = callmethod(var_canvas,"offsetWidth", [0]);
        var call819 = callmethod(var_canvas,"offsetLeft", [0]);
        var call821 = callmethod(var_ev,"clientX", [0]);
        var diff823 = callmethod(call821, "-", [1], call819);
        var quotient825 = callmethod(diff823, "/", [1], call817);
        var prod827 = callmethod(quotient825, "*", [1], var_canvasHeight);
        var var_x = prod827;
        lineNumber = 386;
        moduleName = "musical";
        lineNumber = 385
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 387
        lineNumber = 386
        var call829 = callmethod(var_canvas,"offsetHeight", [0]);
        var call832 = callmethod(var_canvas,"offsetTop", [0]);
        var call834 = callmethod(var_ev,"clientY", [0]);
        var diff836 = callmethod(call834, "-", [1], call832);
        var diff838 = callmethod(diff836, "-", [1], new GraceNum(7));
        var quotient840 = callmethod(diff838, "/", [1], call829);
        var prod842 = callmethod(quotient840, "*", [1], var_canvasHeight);
        var var_y = prod842;
        lineNumber = 387;
        moduleName = "musical";
        lineNumber = 386
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 387
        lineNumber = 386
        lineNumber = 387
        var call843 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call844 = callmethod(var_mouse,"position:=", [1], call843);
        return call844;
      };
      var_mouseMoveListener = block815;
      lineNumber = 389
      var string845 = new GraceString("mousemove");
      var call846 = callmethod(var_canvas,"addEventListener", [2], string845, var_mouseMoveListener);
      lineNumber = 405
      var block847 = Grace_allocObject();
      block847.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block847.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block847.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block847.methods["match"] = GraceBlock_match;
      block847.methods["prefix?"] = GraceBlock_lift;
      block847.receiver = this;
      block847.className = 'block<musical:405>';
      block847.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 392
        lineNumber = 391
        var call849 = callmethod(var_canvas,"offsetWidth", [0]);
        var call851 = callmethod(var_canvas,"offsetLeft", [0]);
        var call853 = callmethod(var_ev,"clientX", [0]);
        var diff855 = callmethod(call853, "-", [1], call851);
        var quotient857 = callmethod(diff855, "/", [1], call849);
        var prod859 = callmethod(quotient857, "*", [1], var_canvasHeight);
        var var_x = prod859;
        lineNumber = 392;
        moduleName = "musical";
        lineNumber = 391
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 394
        lineNumber = 392
        var call861 = callmethod(var_canvas,"offsetHeight", [0]);
        var call863 = callmethod(var_canvas,"offsetTop", [0]);
        var call865 = callmethod(var_ev,"clientY", [0]);
        var diff867 = callmethod(call865, "-", [1], call863);
        var quotient869 = callmethod(diff867, "/", [1], call861);
        var prod871 = callmethod(quotient869, "*", [1], var_canvasHeight);
        var var_y = prod871;
        lineNumber = 394;
        moduleName = "musical";
        lineNumber = 392
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 394
        var call872 = callmethod(var_ev,"preventDefault", [0]);
        lineNumber = 397
        var call873 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call873;
        lineNumber = 397;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 398
        lineNumber = 404
        var block874 = Grace_allocObject();
        block874.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block874.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block874.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block874.methods["match"] = GraceBlock_match;
        block874.methods["prefix?"] = GraceBlock_lift;
        block874.receiver = this;
        block874.className = 'block<musical:404>';
        block874.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 403
          var if875 = var_done;
          lineNumber = 399
          var call876 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call876)) {
            lineNumber = 400
            var call877 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 401
            var call878 = callmethod(var_ev,"preventDefault", [0]);
            if875 = call878;
          }
          return if875;
        };
        var call879 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block874);
        return call879;
      };
      var_mouseDownListener = block847;
      lineNumber = 405
      var string880 = new GraceString("mousedown");
      var call881 = callmethod(var_canvas,"addEventListener", [2], string880, var_mouseDownListener);
      return call881
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func790.paramCounts = [
    0,
  ];
  func790.variableArities = [
    false,
  ];
  this.methods["initialise"] = func790;
  func790.definitionLine = 368;
  func790.definitionModule = "musical";
  lineNumber = 407
  var func882 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func882.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 409
      lineNumber = 408
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
  func882.paramCounts = [
    1,
  ];
  func882.variableArities = [
    false,
  ];
  this.methods["background"] = func882;
  func882.definitionLine = 407;
  func882.definitionModule = "musical";
  lineNumber = 410
  var func883 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func883.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 411
      var call884 = callmethod(var_randomModule,"random", [0]);
      var prod887 = callmethod(var_n, "*", [1], call884);
      var call888 = callmethod(prod887,"truncate", [0]);
      return call888
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func883.paramCounts = [
    1,
  ];
  func883.variableArities = [
    false,
  ];
  this.methods["random"] = func883;
  func883.definitionLine = 410;
  func883.definitionModule = "musical";
  lineNumber = 414
  var func889 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func889.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 426
      var if890 = var_done;
      lineNumber = 415
      var call891 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call891)) {
        lineNumber = 416
        var call892 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call892;
        lineNumber = 416;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 418
        lineNumber = 411
        lineNumber = 417
        var call893 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 418
        var call894 = callmethod(var_audio,"play", [0]);
        if890 = call894;
      } else {
        lineNumber = 420
        var string895 = new GraceString("audio");
        var call896 = callmethod(var_dom,"document", [0]);
        var call897 = callmethod(call896,"createElement", [1], string895);
        var var_audio = call897;
        lineNumber = 420;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 421
        var call898 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 423
        lineNumber = 420
        lineNumber = 422
        var call899 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 423
        var call900 = callmethod(var_audio,"load", [0]);
        lineNumber = 424
        var call901 = callmethod(var_audio,"play", [0]);
        if890 = call901;
      }
      return if890
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func889.paramCounts = [
    1,
  ];
  func889.variableArities = [
    false,
  ];
  this.methods["playSound"] = func889;
  func889.definitionLine = 414;
  func889.definitionModule = "musical";
  lineNumber = 427
  var func902 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func902.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 432
      var if903 = var_done;
      lineNumber = 428
      var call904 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call904)) {
        lineNumber = 429
        var call905 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call905;
        lineNumber = 429;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 430
        var call906 = callmethod(var_audio,"pause", [0]);
        if903 = call906;
      }
      return if903
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func902.paramCounts = [
    1,
  ];
  func902.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func902;
  func902.definitionLine = 427;
  func902.definitionModule = "musical";
  lineNumber = 433
  var func907 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func907.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 434
      onSelf = true;
      var call908 = callmethod(this, "initialise", [0]);
      lineNumber = 437
      lineNumber = 436
      var bool909 = new GraceBoolean(false)
      var_stopRunning = bool909;
      lineNumber = 437
      var string910 = new GraceString("canvas");
      var call911 = callmethod(var_dom,"document", [0]);
      var call912 = callmethod(call911,"createElement", [1], string910);
      var_backingCanvas = call912;
      lineNumber = 439
      lineNumber = 437
      lineNumber = 438
      var call913 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 440
      lineNumber = 437
      lineNumber = 439
      var call914 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 440
      var string915 = new GraceString("2d");
      var call916 = callmethod(var_backingCanvas,"getContext", [1], string915);
      var_backingContext = call916;
      lineNumber = 441
      var string917 = new GraceString("2d");
      var call918 = callmethod(var_canvas,"getContext", [1], string917);
      var var_mctx = call918;
      lineNumber = 441;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 443
      lineNumber = 437
      lineNumber = 442
      var call919 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 443
      var call920 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
      lineNumber = 444
      var call921 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
      lineNumber = 445
      var block922 = Grace_allocObject();
      block922.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block922.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block922.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block922.methods["match"] = GraceBlock_match;
      block922.methods["prefix?"] = GraceBlock_lift;
      block922.receiver = this;
      block922.className = 'block<musical:445>';
      block922.real = function(
      ) {
        sourceObject = this;
        var call923 = callmethod(var_stopRunning,"prefix!", [0]);
        return call923;
      };
      lineNumber = 464
      var block924 = Grace_allocObject();
      block924.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block924.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block924.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block924.methods["match"] = GraceBlock_match;
      block924.methods["prefix?"] = GraceBlock_lift;
      block924.receiver = this;
      block924.className = 'block<musical:464>';
      block924.real = function(
      ) {
        sourceObject = this;
        lineNumber = 446
        lineNumber = 449
        var block925 = Grace_allocObject();
        block925.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block925.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block925.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block925.methods["match"] = GraceBlock_match;
        block925.methods["prefix?"] = GraceBlock_lift;
        block925.receiver = this;
        block925.className = 'block<musical:449>';
        block925.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 447
          var call926 = callmethod(var_obj,"step", [0]);
          return call926;
        };
        var call927 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block925);
        lineNumber = 449
        lineNumber = 460
        var block928 = Grace_allocObject();
        block928.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block928.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block928.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block928.methods["match"] = GraceBlock_match;
        block928.methods["prefix?"] = GraceBlock_lift;
        block928.receiver = this;
        block928.className = 'block<musical:460>';
        block928.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 450
          var call929 = callmethod(var_step,"apply", [0]);
          return call929;
        };
        var call930 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block928);
        return call930;
      };
      lineNumber = 445
      var call931 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block922, new GraceNum(10), block924);
      return call931
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func907.paramCounts = [
    0,
  ];
  func907.variableArities = [
    false,
  ];
  this.methods["start"] = func907;
  func907.definitionLine = 433;
  func907.definitionModule = "musical";
  lineNumber = 465
  var func932 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func932.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 470
      lineNumber = 466
      var bool933 = new GraceBoolean(true)
      var_stopRunning = bool933;
      lineNumber = 470
      var call934 = callmethod(var_dom,"window", [0]);
      var call935 = callmethod(call934,"t_stop", [0]);
      lineNumber = 471
      var call936 = callmethod(var_dom,"window", [0]);
      var call937 = callmethod(call936,"t_reset", [0]);
      return call937
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func932.paramCounts = [
    0,
  ];
  func932.variableArities = [
    false,
  ];
  this.methods["stop"] = func932;
  func932.definitionLine = 465;
  func932.definitionModule = "musical";
  lineNumber = 473
  var func938 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func938.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 474
      onSelf = true;
      var call939 = callmethod(this, "start", [0]);
      lineNumber = 476
      var call940 = callmethod(var_dom,"window", [0]);
      var call941 = callmethod(call940,"t_play", [0]);
      return call941
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func938.paramCounts = [
    1,
  ];
  func938.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func938;
  func938.definitionLine = 473;
  func938.definitionModule = "musical";
  lineNumber = 533
  var func942 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func942.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 539
      var if943 = var_done;
      lineNumber = 535
      var bool944 = new GraceBoolean(true)
      var opresult947 = callmethod(var_applyFlat, "==", [1], bool944);
      if (Grace_isTrue(opresult947)) {
        lineNumber = 536
        var string948 = new GraceString("");
        var string951 = new GraceString("b");
        var string954 = new GraceString("");
        var opresult956 = callmethod(string954, "++", [1], var_note);
        var opresult958 = callmethod(opresult956, "++", [1], string951);
        var opresult960 = callmethod(opresult958, "++", [1], var_octave);
        var opresult962 = callmethod(opresult960, "++", [1], string948);
        var call963 = callmethod(var_dom,"window", [0]);
        var call964 = callmethod(call963,"t_add", [2], opresult962, var_id);
        lineNumber = 538
        lineNumber = 537
        var string965 = new GraceString("b");
        var string968 = new GraceString("");
        var opresult970 = callmethod(string968, "++", [1], var_note);
        var opresult972 = callmethod(opresult970, "++", [1], string965);
        return opresult972
      }
      lineNumber = 543
      var if973 = var_done;
      lineNumber = 539
      var bool974 = new GraceBoolean(true)
      var opresult977 = callmethod(var_applySharp, "==", [1], bool974);
      if (Grace_isTrue(opresult977)) {
        lineNumber = 540
        var string978 = new GraceString("");
        var string981 = new GraceString("#");
        var string984 = new GraceString("");
        var opresult986 = callmethod(string984, "++", [1], var_note);
        var opresult988 = callmethod(opresult986, "++", [1], string981);
        var opresult990 = callmethod(opresult988, "++", [1], var_octave);
        var opresult992 = callmethod(opresult990, "++", [1], string978);
        var call993 = callmethod(var_dom,"window", [0]);
        var call994 = callmethod(call993,"t_add", [2], opresult992, var_id);
        lineNumber = 542
        lineNumber = 541
        var string995 = new GraceString("#");
        var string998 = new GraceString("");
        var opresult1000 = callmethod(string998, "++", [1], var_note);
        var opresult1002 = callmethod(opresult1000, "++", [1], string995);
        return opresult1002
      }
      lineNumber = 543
      var string1003 = new GraceString("");
      var string1006 = new GraceString("");
      var string1009 = new GraceString("");
      var opresult1011 = callmethod(string1009, "++", [1], var_note);
      var opresult1013 = callmethod(opresult1011, "++", [1], string1006);
      var opresult1015 = callmethod(opresult1013, "++", [1], var_octave);
      var opresult1017 = callmethod(opresult1015, "++", [1], string1003);
      var call1018 = callmethod(var_dom,"window", [0]);
      var call1019 = callmethod(call1018,"t_add", [2], opresult1017, var_id);
      lineNumber = 545
      lineNumber = 544
      var string1020 = new GraceString("");
      var string1023 = new GraceString("");
      var opresult1025 = callmethod(string1023, "++", [1], var_note);
      var opresult1027 = callmethod(opresult1025, "++", [1], string1020);
      return opresult1027
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func942.paramCounts = [
    2,
  ];
  func942.variableArities = [
    false,
  ];
  this.methods["Note"] = func942;
  func942.definitionLine = 533;
  func942.definitionModule = "musical";
  lineNumber = 567
  var func1028 = function(argcv) {
    var curarg = 1;
    var var_cond = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1028.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (while)"));
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1028.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
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
  func1028.paramCounts = [
    1,
    1,
  ];
  func1028.variableArities = [
    false,
    false,
  ];
  this.methods["while()do"] = func1028;
  func1028.definitionLine = 567;
  func1028.definitionModule = "musical";
  lineNumber = 622
  var func1029 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1029.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 623
      var string1030 = new GraceString("C");
      onSelf = true;
      var call1031 = callmethod(this, "Note", [2], string1030, var_id);
      return call1031
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
  this.methods["C"] = func1029;
  func1029.definitionLine = 622;
  func1029.definitionModule = "musical";
  lineNumber = 625
  var func1032 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1032.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 626
      var string1033 = new GraceString("D");
      onSelf = true;
      var call1034 = callmethod(this, "Note", [2], string1033, var_id);
      return call1034
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1032.paramCounts = [
    1,
  ];
  func1032.variableArities = [
    false,
  ];
  this.methods["D"] = func1032;
  func1032.definitionLine = 625;
  func1032.definitionModule = "musical";
  lineNumber = 628
  var func1035 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1035.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 629
      var string1036 = new GraceString("E");
      onSelf = true;
      var call1037 = callmethod(this, "Note", [2], string1036, var_id);
      return call1037
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1035.paramCounts = [
    1,
  ];
  func1035.variableArities = [
    false,
  ];
  this.methods["E"] = func1035;
  func1035.definitionLine = 628;
  func1035.definitionModule = "musical";
  lineNumber = 631
  var func1038 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1038.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 632
      var string1039 = new GraceString("F");
      onSelf = true;
      var call1040 = callmethod(this, "Note", [2], string1039, var_id);
      return call1040
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1038.paramCounts = [
    1,
  ];
  func1038.variableArities = [
    false,
  ];
  this.methods["F"] = func1038;
  func1038.definitionLine = 631;
  func1038.definitionModule = "musical";
  lineNumber = 634
  var func1041 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1041.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 635
      var string1042 = new GraceString("G");
      onSelf = true;
      var call1043 = callmethod(this, "Note", [2], string1042, var_id);
      return call1043
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
  this.methods["G"] = func1041;
  func1041.definitionLine = 634;
  func1041.definitionModule = "musical";
  lineNumber = 637
  var func1044 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1044.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 638
      var string1045 = new GraceString("A");
      onSelf = true;
      var call1046 = callmethod(this, "Note", [2], string1045, var_id);
      return call1046
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1044.paramCounts = [
    1,
  ];
  func1044.variableArities = [
    false,
  ];
  this.methods["A"] = func1044;
  func1044.definitionLine = 637;
  func1044.definitionModule = "musical";
  lineNumber = 640
  var func1047 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1047.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 641
      var string1048 = new GraceString("B");
      onSelf = true;
      var call1049 = callmethod(this, "Note", [2], string1048, var_id);
      return call1049
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
  this.methods["B"] = func1047;
  func1047.definitionLine = 640;
  func1047.definitionModule = "musical";
  lineNumber = 643
  var func1050 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1050.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Rest)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 644
      var string1051 = new GraceString("null");
      var call1052 = callmethod(var_dom,"window", [0]);
      var call1053 = callmethod(call1052,"t_add", [2], string1051, var_id);
      lineNumber = 646
      lineNumber = 645
      var string1054 = new GraceString("Rest");
      return string1054
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1050.paramCounts = [
    1,
  ];
  func1050.variableArities = [
    false,
  ];
  this.methods["Rest"] = func1050;
  func1050.definitionLine = 643;
  func1050.definitionModule = "musical";
  lineNumber = 648
  var func1055 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1055.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 650
      lineNumber = 649
      var bool1056 = new GraceBoolean(true)
      var_applyFlat = bool1056;
      lineNumber = 651
      lineNumber = 650
      var call1057 = callmethod(var_note,"apply", [0]);
      var var_ret = call1057;
      lineNumber = 651;
      moduleName = "musical";
      lineNumber = 650
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 652
      lineNumber = 651
      var bool1058 = new GraceBoolean(false)
      var_applyFlat = bool1058;
      lineNumber = 653
      lineNumber = 652
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1055.paramCounts = [
    1,
  ];
  func1055.variableArities = [
    false,
  ];
  this.methods["flat"] = func1055;
  func1055.definitionLine = 648;
  func1055.definitionModule = "musical";
  lineNumber = 654
  var func1059 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1059.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 656
      lineNumber = 655
      var bool1060 = new GraceBoolean(true)
      var_applySharp = bool1060;
      lineNumber = 657
      lineNumber = 656
      var call1061 = callmethod(var_note,"apply", [0]);
      var var_ret = call1061;
      lineNumber = 657;
      moduleName = "musical";
      lineNumber = 656
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 658
      lineNumber = 657
      var bool1062 = new GraceBoolean(false)
      var_applySharp = bool1062;
      lineNumber = 659
      lineNumber = 658
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1059.paramCounts = [
    1,
  ];
  func1059.variableArities = [
    false,
  ];
  this.methods["sharp"] = func1059;
  func1059.definitionLine = 654;
  func1059.definitionModule = "musical";
  lineNumber = 661
  var func1063 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1063.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1063.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 663
      lineNumber = 662
      var var_oldOctave = var_octave;
      lineNumber = 663;
      moduleName = "musical";
      lineNumber = 662
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 664
      lineNumber = 663
      var_octave = var_num;
      lineNumber = 665
      lineNumber = 664
      var call1064 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1064;
      lineNumber = 665;
      moduleName = "musical";
      lineNumber = 664
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 666
      lineNumber = 665
      var_octave = var_oldOctave;
      lineNumber = 667
      lineNumber = 666
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1063.paramCounts = [
    1,
    1,
  ];
  func1063.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1063;
  func1063.definitionLine = 661;
  func1063.definitionModule = "musical";
  lineNumber = 672
  var func1065 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1065.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 677
      var if1066 = var_done;
      lineNumber = 673
      var bool1067 = new GraceBoolean(true)
      var opresult1070 = callmethod(var_firstPass, "==", [1], bool1067);
      if (Grace_isTrue(opresult1070)) {
        lineNumber = 674
        var call1071 = callmethod(var_dom,"window", [0]);
        var call1072 = callmethod(call1071,"t_reset", [0]);
        lineNumber = 676
        lineNumber = 675
        var bool1073 = new GraceBoolean(false)
        var_firstPass = bool1073;
        if1066 = bool1073;
      }
      lineNumber = 677
      var call1074 = callmethod(var_dom,"window", [0]);
      var call1075 = callmethod(call1074,"t_init", [0]);
      lineNumber = 678
      var call1076 = callmethod(var_blocks,"apply", [0]);
      return call1076
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1065.paramCounts = [
    1,
  ];
  func1065.variableArities = [
    false,
  ];
  this.methods["Instrument"] = func1065;
  func1065.definitionLine = 672;
  func1065.definitionModule = "musical";
  lineNumber = 681
  var func1077 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1077.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 682
      onSelf = true;
      var call1078 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 683
      var call1079 = callmethod(var_dom,"window", [0]);
      var call1080 = callmethod(call1079,"t_synth_mono", [3], var_timing, var_volume, var_playbackrate);
      return call1080
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1077.paramCounts = [
    1,
  ];
  func1077.variableArities = [
    false,
  ];
  this.methods["monoSynth"] = func1077;
  func1077.definitionLine = 681;
  func1077.definitionModule = "musical";
  lineNumber = 686
  var func1081 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1081.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 687
      onSelf = true;
      var call1082 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 688
      var call1083 = callmethod(var_dom,"window", [0]);
      var call1084 = callmethod(call1083,"t_synth_pluck", [3], var_timing, var_volume, var_playbackrate);
      return call1084
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1081.paramCounts = [
    1,
  ];
  func1081.variableArities = [
    false,
  ];
  this.methods["pluckSynth"] = func1081;
  func1081.definitionLine = 686;
  func1081.definitionModule = "musical";
  lineNumber = 691
  var func1085 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1085.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 692
      onSelf = true;
      var call1086 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 693
      var call1087 = callmethod(var_dom,"window", [0]);
      var call1088 = callmethod(call1087,"t_synth_poly", [3], var_timing, var_volume, var_playbackrate);
      return call1088
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1085.paramCounts = [
    1,
  ];
  func1085.variableArities = [
    false,
  ];
  this.methods["polySynth"] = func1085;
  func1085.definitionLine = 691;
  func1085.definitionModule = "musical";
  lineNumber = 696
  var func1089 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1089.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 697
      onSelf = true;
      var call1090 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 698
      var call1091 = callmethod(var_dom,"window", [0]);
      var call1092 = callmethod(call1091,"t_synth_fm", [3], var_timing, var_volume, var_playbackrate);
      return call1092
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1089.paramCounts = [
    1,
  ];
  func1089.variableArities = [
    false,
  ];
  this.methods["fmSynth"] = func1089;
  func1089.definitionLine = 696;
  func1089.definitionModule = "musical";
  lineNumber = 701
  var func1093 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1093.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 702
      onSelf = true;
      var call1094 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 703
      var call1095 = callmethod(var_dom,"window", [0]);
      var call1096 = callmethod(call1095,"t_synth_membrane", [3], var_timing, var_volume, var_playbackrate);
      return call1096
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1093.paramCounts = [
    1,
  ];
  func1093.variableArities = [
    false,
  ];
  this.methods["membraneSynth"] = func1093;
  func1093.definitionLine = 701;
  func1093.definitionModule = "musical";
  lineNumber = 706
  var func1097 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1097.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 707
      onSelf = true;
      var call1098 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 708
      var call1099 = callmethod(var_dom,"window", [0]);
      var call1100 = callmethod(call1099,"t_synth_duo", [3], var_timing, var_volume, var_playbackrate);
      return call1100
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1097.paramCounts = [
    1,
  ];
  func1097.variableArities = [
    false,
  ];
  this.methods["duoSynth"] = func1097;
  func1097.definitionLine = 706;
  func1097.definitionModule = "musical";
  lineNumber = 711
  var func1101 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1101.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (arpeggio)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 716
      var if1102 = var_done;
      lineNumber = 712
      var bool1103 = new GraceBoolean(true)
      var opresult1106 = callmethod(var_firstPass, "==", [1], bool1103);
      if (Grace_isTrue(opresult1106)) {
        lineNumber = 713
        var call1107 = callmethod(var_dom,"window", [0]);
        var call1108 = callmethod(call1107,"t_reset", [0]);
        lineNumber = 715
        lineNumber = 714
        var bool1109 = new GraceBoolean(false)
        var_firstPass = bool1109;
        if1102 = bool1109;
      }
      lineNumber = 716
      var call1110 = callmethod(var_dom,"window", [0]);
      var call1111 = callmethod(call1110,"t_synth_arpeggio", [1], var_note);
      return call1111
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
  this.methods["arpeggio"] = func1101;
  func1101.definitionLine = 711;
  func1101.definitionModule = "musical";
  lineNumber = 722
  var func1112 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1112.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 726
      var if1113 = var_done;
      lineNumber = 723
      var bool1114 = new GraceBoolean(true)
      var opresult1117 = callmethod(var_applyChorus, "==", [1], bool1114);
      if (Grace_isTrue(opresult1117)) {
        lineNumber = 724
        var call1118 = callmethod(var_dom,"window", [0]);
        var call1119 = callmethod(call1118,"t_effect_chorus", [0]);
        if1113 = call1119;
      }
      lineNumber = 729
      var if1120 = var_done;
      lineNumber = 726
      var bool1121 = new GraceBoolean(true)
      var opresult1124 = callmethod(var_applyReverb, "==", [1], bool1121);
      if (Grace_isTrue(opresult1124)) {
        lineNumber = 727
        var call1125 = callmethod(var_dom,"window", [0]);
        var call1126 = callmethod(call1125,"t_effect_reverb", [0]);
        if1120 = call1126;
      }
      lineNumber = 732
      var if1127 = var_done;
      lineNumber = 729
      var bool1128 = new GraceBoolean(true)
      var opresult1131 = callmethod(var_applyAutowah, "==", [1], bool1128);
      if (Grace_isTrue(opresult1131)) {
        lineNumber = 730
        var call1132 = callmethod(var_dom,"window", [0]);
        var call1133 = callmethod(call1132,"t_effect_autowah", [0]);
        if1127 = call1133;
      }
      lineNumber = 735
      var if1134 = var_done;
      lineNumber = 732
      var bool1135 = new GraceBoolean(true)
      var opresult1138 = callmethod(var_applyCheby, "==", [1], bool1135);
      if (Grace_isTrue(opresult1138)) {
        lineNumber = 733
        var call1139 = callmethod(var_dom,"window", [0]);
        var call1140 = callmethod(call1139,"t_effect_cheby", [0]);
        if1134 = call1140;
      }
      lineNumber = 735
      var call1141 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 736
      var call1142 = callmethod(var_dom,"window", [0]);
      var call1143 = callmethod(call1142,"t_effect_reset", [0]);
      return call1143
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1112.paramCounts = [
    1,
  ];
  func1112.variableArities = [
    false,
  ];
  this.methods["Effect"] = func1112;
  func1112.definitionLine = 722;
  func1112.definitionModule = "musical";
  lineNumber = 739
  var func1144 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1144.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 741
      lineNumber = 740
      var bool1145 = new GraceBoolean(true)
      var_applyChorus = bool1145;
      lineNumber = 741
      onSelf = true;
      var call1146 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 743
      lineNumber = 742
      var bool1147 = new GraceBoolean(false)
      var_applyChorus = bool1147;
      return bool1147
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1144.paramCounts = [
    1,
  ];
  func1144.variableArities = [
    false,
  ];
  this.methods["Chorus"] = func1144;
  func1144.definitionLine = 739;
  func1144.definitionModule = "musical";
  lineNumber = 745
  var func1148 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1148.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 747
      lineNumber = 746
      var bool1149 = new GraceBoolean(true)
      var_applyReverb = bool1149;
      lineNumber = 747
      onSelf = true;
      var call1150 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 749
      lineNumber = 748
      var bool1151 = new GraceBoolean(false)
      var_applyReverb = bool1151;
      return bool1151
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1148.paramCounts = [
    1,
  ];
  func1148.variableArities = [
    false,
  ];
  this.methods["Reverb"] = func1148;
  func1148.definitionLine = 745;
  func1148.definitionModule = "musical";
  lineNumber = 751
  var func1152 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1152.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 753
      lineNumber = 752
      var bool1153 = new GraceBoolean(true)
      var_applyAutowah = bool1153;
      lineNumber = 753
      onSelf = true;
      var call1154 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 755
      lineNumber = 754
      var bool1155 = new GraceBoolean(false)
      var_applyAutowah = bool1155;
      return bool1155
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1152.paramCounts = [
    1,
  ];
  func1152.variableArities = [
    false,
  ];
  this.methods["Autowah"] = func1152;
  func1152.definitionLine = 751;
  func1152.definitionModule = "musical";
  lineNumber = 757
  var func1156 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1156.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 759
      lineNumber = 758
      var bool1157 = new GraceBoolean(true)
      var_applyCheby = bool1157;
      lineNumber = 759
      onSelf = true;
      var call1158 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 761
      lineNumber = 760
      var bool1159 = new GraceBoolean(false)
      var_applyCheby = bool1159;
      return bool1159
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1156.paramCounts = [
    1,
  ];
  func1156.variableArities = [
    false,
  ];
  this.methods["Cheby"] = func1156;
  func1156.definitionLine = 757;
  func1156.definitionModule = "musical";
  lineNumber = 765
  var func1160 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1160.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 766
      var call1161 = callmethod(var_dom,"window", [0]);
      var call1162 = callmethod(call1161,"t_bpm", [1], var_bpm);
      return call1162
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1160.paramCounts = [
    1,
  ];
  func1160.variableArities = [
    false,
  ];
  this.methods["SetBPM"] = func1160;
  func1160.definitionLine = 765;
  func1160.definitionModule = "musical";
  lineNumber = 769
  var func1163 = function(argcv) {
    var curarg = 1;
    var var_rate = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1163.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (PlayBackRatePercentage)"));
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1163.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 772
      lineNumber = 770
      var var_oldRate = var_playbackrate;
      lineNumber = 772;
      moduleName = "musical";
      lineNumber = 770
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldRate)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldRate' to be of type Unknown"))
      lineNumber = 774
      lineNumber = 772
      var quotient1166 = callmethod(var_rate, "/", [1], new GraceNum(100));
      var_playbackrate = quotient1166;
      lineNumber = 775
      lineNumber = 774
      var call1167 = callmethod(var_blocks,"apply", [0]);
      var var_ret = call1167;
      lineNumber = 775;
      moduleName = "musical";
      lineNumber = 774
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 776
      lineNumber = 775
      var_playbackrate = var_oldRate;
      lineNumber = 777
      lineNumber = 776
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1163.paramCounts = [
    1,
    1,
  ];
  func1163.variableArities = [
    false,
    false,
  ];
  this.methods["PlayBackRatePercentage()on"] = func1163;
  func1163.definitionLine = 769;
  func1163.definitionModule = "musical";
  lineNumber = 780
  var func1168 = function(argcv) {
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1168.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Time)"));
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1168.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 782
      lineNumber = 781
      var var_oldTiming = var_timing;
      lineNumber = 782;
      moduleName = "musical";
      lineNumber = 781
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldTiming)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldTiming' to be of type Unknown"))
      lineNumber = 783
      lineNumber = 782
      var_timing = var_t;
      lineNumber = 784
      lineNumber = 783
      var call1169 = callmethod(var_blocks,"apply", [0]);
      var var_ret = call1169;
      lineNumber = 784;
      moduleName = "musical";
      lineNumber = 783
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 785
      lineNumber = 784
      var_timing = var_oldTiming;
      lineNumber = 786
      lineNumber = 785
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1168.paramCounts = [
    1,
    1,
  ];
  func1168.variableArities = [
    false,
    false,
  ];
  this.methods["Time()on"] = func1168;
  func1168.definitionLine = 780;
  func1168.definitionModule = "musical";
  lineNumber = 788
  var func1170 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1170.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (quarter)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 790
      lineNumber = 789
      var string1171 = new GraceString("4n");
      return string1171
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1170.paramCounts = [
    0,
  ];
  func1170.variableArities = [
    false,
  ];
  this.methods["quarter"] = func1170;
  func1170.definitionLine = 788;
  func1170.definitionModule = "musical";
  lineNumber = 792
  var func1172 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1172.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (eighth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 794
      lineNumber = 793
      var string1173 = new GraceString("8n");
      return string1173
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1172.paramCounts = [
    0,
  ];
  func1172.variableArities = [
    false,
  ];
  this.methods["eighth"] = func1172;
  func1172.definitionLine = 792;
  func1172.definitionModule = "musical";
  lineNumber = 796
  var func1174 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1174.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sixteenth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 798
      lineNumber = 797
      var string1175 = new GraceString("16n");
      return string1175
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1174.paramCounts = [
    0,
  ];
  func1174.variableArities = [
    false,
  ];
  this.methods["sixteenth"] = func1174;
  func1174.definitionLine = 796;
  func1174.definitionModule = "musical";
  lineNumber = 802
  var func1176 = function(argcv) {
    var curarg = 1;
    var var_v = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1176.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (VolumePercentage)"));
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1176.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 807
      lineNumber = 803
      var var_oldVolume = var_volume;
      lineNumber = 807;
      moduleName = "musical";
      lineNumber = 803
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldVolume)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldVolume' to be of type Unknown"))
      lineNumber = 809
      lineNumber = 807
      var var_c = var_v;
      lineNumber = 809;
      moduleName = "musical";
      lineNumber = 807
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_c)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'c' to be of type Unknown"))
      lineNumber = 815
      var if1177 = var_done;
      lineNumber = 809
      var opresult1180 = callmethod(var_v, ">", [1], new GraceNum(100));
      if (Grace_isTrue(opresult1180)) {
        lineNumber = 811
        lineNumber = 810
        var_c = new GraceNum(100);
        if1177 = new GraceNum(100);
      }
      lineNumber = 816
      lineNumber = 815
      var call1181 = callmethod(new GraceNum(1),"prefix-", [0]);
      var diff1187 = callmethod(new GraceNum(100), "-", [1], var_c);
      var quotient1189 = callmethod(diff1187, "/", [1], new GraceNum(100));
      var prod1191 = callmethod(quotient1189, "*", [1], new GraceNum(80));
      var prod1193 = callmethod(prod1191, "*", [1], call1181);
      var_volume = prod1193;
      lineNumber = 816
      var call1194 = callmethod(var_dom,"window", [0]);
      var call1195 = callmethod(call1194,"console", [0]);
      var call1196 = callmethod(call1195,"log", [1], var_volume);
      lineNumber = 829
      lineNumber = 828
      var call1197 = callmethod(var_blocks,"apply", [0]);
      var var_ret = call1197;
      lineNumber = 829;
      moduleName = "musical";
      lineNumber = 828
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 830
      lineNumber = 829
      var_volume = var_oldVolume;
      lineNumber = 831
      lineNumber = 830
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1176.paramCounts = [
    1,
    1,
  ];
  func1176.variableArities = [
    false,
    false,
  ];
  this.methods["VolumePercentage()on"] = func1176;
  func1176.definitionLine = 802;
  func1176.definitionModule = "musical";
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
  var call1198 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1198;
  this.data = call1198.data;
  this._value = call1198._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 828
  var func1199 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1199.paramCounts[0])
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
  func1199.paramCounts = [
    0,
  ];
  func1199.variableArities = [
    false,
  ];
  this.methods["document"] = func1199;
  func1199.definitionLine = 828;
  func1199.definitionModule = "musical";
  lineNumber = 828
  var func1200 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1200.paramCounts[0])
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
  func1200.paramCounts = [
    1,
  ];
  func1200.variableArities = [
    false,
  ];
  this.methods["document:="] = func1200;
  func1200.definitionLine = 828;
  func1200.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 828
  var func1201 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1201.paramCounts[0])
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
  func1201.paramCounts = [
    0,
  ];
  func1201.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1201;
  func1201.definitionLine = 828;
  func1201.definitionModule = "musical";
  lineNumber = 828
  var func1202 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1202.paramCounts[0])
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
  func1202.paramCounts = [
    1,
  ];
  func1202.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1202;
  func1202.definitionLine = 828;
  func1202.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 828
  var func1203 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1203.paramCounts[0])
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
  func1203.paramCounts = [
    0,
  ];
  func1203.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1203;
  func1203.definitionLine = 828;
  func1203.definitionModule = "musical";
  lineNumber = 828
  var func1204 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1204.paramCounts[0])
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
  func1204.paramCounts = [
    1,
  ];
  func1204.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1204;
  func1204.definitionLine = 828;
  func1204.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 828
  var func1205 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1205.paramCounts[0])
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
  func1205.paramCounts = [
    0,
  ];
  func1205.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1205;
  func1205.definitionLine = 828;
  func1205.definitionModule = "musical";
  lineNumber = 828
  var func1206 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1206.paramCounts[0])
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
  func1206.paramCounts = [
    1,
  ];
  func1206.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1206;
  func1206.definitionLine = 828;
  func1206.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 828
  var func1207 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1207.paramCounts[0])
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
  func1207.paramCounts = [
    0,
  ];
  func1207.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1207;
  func1207.definitionLine = 828;
  func1207.definitionModule = "musical";
  lineNumber = 828
  var func1208 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    1,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1208;
  func1208.definitionLine = 828;
  func1208.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 828
  var func1209 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    0,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1209;
  func1209.definitionLine = 828;
  func1209.definitionModule = "musical";
  lineNumber = 828
  var func1210 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    1,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1210;
  func1210.definitionLine = 828;
  func1210.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1211 = callmethod(var_dom,"window", [0]);
  var call1212 = callmethod(call1211,"Math", [0]);
  var var_trig = call1212;
  var func1213 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1213.paramCounts[0])
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
  func1213.paramCounts = [
    0,
  ];
  func1213.variableArities = [
    false,
  ];
  this.methods["trig"] = func1213;
  func1213.definitionLine = 15;
  func1213.definitionModule = "musical";
  lineNumber = 16;
  moduleName = "musical";
  lineNumber = 15
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_trig)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'trig' to be of type Unknown"))
  lineNumber = 18
  lineNumber = 16
  var var_PI = new GraceNum(3.14159);
  lineNumber = 15
  var func1214 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1214.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (PI)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 16
      return var_PI
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1214.paramCounts = [
    0,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["PI"] = func1214;
  func1214.definitionLine = 15;
  func1214.definitionModule = "musical";
  lineNumber = 18;
  moduleName = "musical";
  lineNumber = 16
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_PI)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'PI' to be of type Unknown"))
  lineNumber = 18
  lineNumber = 19
  lineNumber = 18
  var bool1215 = new GraceBoolean(false)
  var var_stopRunning = bool1215;
  lineNumber = 15
  var func1216 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1216.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopRunning)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 18
      return var_stopRunning
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1216.paramCounts = [
    0,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1216;
  func1216.definitionLine = 15;
  func1216.definitionModule = "musical";
  lineNumber = 15
  var func1217 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    1,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1217;
  func1217.definitionLine = 15;
  func1217.definitionModule = "musical";
  lineNumber = 19;
  moduleName = "musical";
  lineNumber = 18
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stopRunning)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'stopRunning' to be of type Unknown"))
  lineNumber = 20
  lineNumber = 19
  var bool1218 = new GraceBoolean(false)
  var var_initialised = bool1218;
  lineNumber = 15
  var func1219 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1219.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 19
      return var_initialised
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1219.paramCounts = [
    0,
  ];
  func1219.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1219;
  func1219.definitionLine = 15;
  func1219.definitionModule = "musical";
  lineNumber = 15
  var func1220 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1220.paramCounts[0])
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
  func1220.paramCounts = [
    1,
  ];
  func1220.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1220;
  func1220.definitionLine = 15;
  func1220.definitionModule = "musical";
  lineNumber = 20;
  moduleName = "musical";
  lineNumber = 19
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_initialised)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'initialised' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 20
  var string1221 = new GraceString("white");
  var var_backgroundColour = string1221;
  lineNumber = 15
  var func1222 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1222.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backgroundColour)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 20
      return var_backgroundColour
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1222.paramCounts = [
    0,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1222;
  func1222.definitionLine = 15;
  func1222.definitionModule = "musical";
  lineNumber = 15
  var func1223 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    1,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1223;
  func1223.definitionLine = 15;
  func1223.definitionModule = "musical";
  lineNumber = 21;
  moduleName = "musical";
  lineNumber = 20
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_backgroundColour)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'backgroundColour' to be of type Unknown"))
  lineNumber = 22
  lineNumber = 21
  var call1224 = callmethod(var_collections,"list", [0]);
  var call1225 = callmethod(call1224,"new", [0]);
  var var_registeredObjects = call1225;
  var func1226 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1226.paramCounts[0])
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
  func1226.paramCounts = [
    0,
  ];
  func1226.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1226;
  func1226.definitionLine = 21;
  func1226.definitionModule = "musical";
  lineNumber = 22;
  moduleName = "musical";
  lineNumber = 21
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_registeredObjects)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'registeredObjects' to be of type Unknown"))
  lineNumber = 24
  lineNumber = 22
  var call1227 = callmethod(var_collections,"list", [0]);
  var call1228 = callmethod(call1227,"new", [0]);
  var var_stepBlocks = call1228;
  var func1229 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    0,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1229;
  func1229.definitionLine = 22;
  func1229.definitionModule = "musical";
  lineNumber = 24;
  moduleName = "musical";
  lineNumber = 22
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stepBlocks)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'stepBlocks' to be of type Unknown"))
  lineNumber = 24
  lineNumber = 26
  lineNumber = 24
  var call1230 = callmethod(var_collections,"map", [0]);
  var call1231 = callmethod(call1230,"new", [0]);
  var var_audioTags = call1231;
  var func1232 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1232.paramCounts[0])
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
  func1232.paramCounts = [
    0,
  ];
  func1232.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1232;
  func1232.definitionLine = 24;
  func1232.definitionModule = "musical";
  lineNumber = 26;
  moduleName = "musical";
  lineNumber = 24
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_audioTags)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'audioTags' to be of type Unknown"))
  lineNumber = 26
  lineNumber = 27
  var var_canvasWidth;
  lineNumber = 24
  var func1233 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1233.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasWidth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 26
      return var_canvasWidth
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1233.paramCounts = [
    0,
  ];
  func1233.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1233;
  func1233.definitionLine = 24;
  func1233.definitionModule = "musical";
  lineNumber = 24
  var func1234 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1234.paramCounts[0])
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
  func1234.paramCounts = [
    1,
  ];
  func1234.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1234;
  func1234.definitionLine = 24;
  func1234.definitionModule = "musical";
  lineNumber = 29
  var var_canvasHeight;
  lineNumber = 24
  var func1235 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1235.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasHeight)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 27
      return var_canvasHeight
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1235.paramCounts = [
    0,
  ];
  func1235.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1235;
  func1235.definitionLine = 24;
  func1235.definitionModule = "musical";
  lineNumber = 24
  var func1236 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1236.paramCounts[0])
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
  func1236.paramCounts = [
    1,
  ];
  func1236.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1236;
  func1236.definitionLine = 24;
  func1236.definitionModule = "musical";
  lineNumber = 29
  lineNumber = 30
  lineNumber = 29
  var string1237 = new GraceString("left");
  var var_left = string1237;
  lineNumber = 24
  var func1238 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1238.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 29
      return var_left
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1238.paramCounts = [
    0,
  ];
  func1238.variableArities = [
    false,
  ];
  this.methods["left"] = func1238;
  func1238.definitionLine = 24;
  func1238.definitionModule = "musical";
  lineNumber = 30;
  moduleName = "musical";
  lineNumber = 29
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_left)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'left' to be of type Unknown"))
  lineNumber = 31
  lineNumber = 30
  var string1239 = new GraceString("right");
  var var_right = string1239;
  lineNumber = 24
  var func1240 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1240.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 30
      return var_right
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1240.paramCounts = [
    0,
  ];
  func1240.variableArities = [
    false,
  ];
  this.methods["right"] = func1240;
  func1240.definitionLine = 24;
  func1240.definitionModule = "musical";
  lineNumber = 31;
  moduleName = "musical";
  lineNumber = 30
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_right)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'right' to be of type Unknown"))
  lineNumber = 32
  lineNumber = 31
  var string1241 = new GraceString("top");
  var var_top = string1241;
  lineNumber = 24
  var func1242 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1242.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (top)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 31
      return var_top
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1242.paramCounts = [
    0,
  ];
  func1242.variableArities = [
    false,
  ];
  this.methods["top"] = func1242;
  func1242.definitionLine = 24;
  func1242.definitionModule = "musical";
  lineNumber = 32;
  moduleName = "musical";
  lineNumber = 31
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_top)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'top' to be of type Unknown"))
  lineNumber = 34
  lineNumber = 32
  var string1243 = new GraceString("bottom");
  var var_bottom = string1243;
  lineNumber = 24
  var func1244 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1244.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bottom)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 32
      return var_bottom
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1244.paramCounts = [
    0,
  ];
  func1244.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1244;
  func1244.definitionLine = 24;
  func1244.definitionModule = "musical";
  lineNumber = 34;
  moduleName = "musical";
  lineNumber = 32
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_bottom)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'bottom' to be of type Unknown"))
  lineNumber = 34
  lineNumber = 35
  var var_centre;
  lineNumber = 24
  var func1245 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1245.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (centre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 34
      return var_centre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1245.paramCounts = [
    0,
  ];
  func1245.variableArities = [
    false,
  ];
  this.methods["centre"] = func1245;
  func1245.definitionLine = 24;
  func1245.definitionModule = "musical";
  lineNumber = 24
  var func1246 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1246.paramCounts[0])
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
  func1246.paramCounts = [
    1,
  ];
  func1246.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1246;
  func1246.definitionLine = 24;
  func1246.definitionModule = "musical";
  lineNumber = 36
  var var_leftCentre;
  lineNumber = 24
  var func1247 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1247.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (leftCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 35
      return var_leftCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1247.paramCounts = [
    0,
  ];
  func1247.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1247;
  func1247.definitionLine = 24;
  func1247.definitionModule = "musical";
  lineNumber = 24
  var func1248 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1248.paramCounts[0])
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
  func1248.paramCounts = [
    1,
  ];
  func1248.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1248;
  func1248.definitionLine = 24;
  func1248.definitionModule = "musical";
  lineNumber = 38
  var var_rightCentre;
  lineNumber = 24
  var func1249 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1249.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rightCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 36
      return var_rightCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1249.paramCounts = [
    0,
  ];
  func1249.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1249;
  func1249.definitionLine = 24;
  func1249.definitionModule = "musical";
  lineNumber = 24
  var func1250 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1250.paramCounts[0])
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
  func1250.paramCounts = [
    1,
  ];
  func1250.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1250;
  func1250.definitionLine = 24;
  func1250.definitionModule = "musical";
  lineNumber = 38
  lineNumber = 39
  var var_above;
  lineNumber = 24
  var func1251 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1251.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (above)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 38
      return var_above
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1251.paramCounts = [
    0,
  ];
  func1251.variableArities = [
    false,
  ];
  this.methods["above"] = func1251;
  func1251.definitionLine = 24;
  func1251.definitionModule = "musical";
  lineNumber = 24
  var func1252 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1252.paramCounts[0])
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
  func1252.paramCounts = [
    1,
  ];
  func1252.variableArities = [
    false,
  ];
  this.methods["above:="] = func1252;
  func1252.definitionLine = 24;
  func1252.definitionModule = "musical";
  lineNumber = 41
  var var___916__;
  lineNumber = 24
  var func1253 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1253.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Δ)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 39
      return var___916__
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1253.paramCounts = [
    0,
  ];
  func1253.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1253;
  func1253.definitionLine = 24;
  func1253.definitionModule = "musical";
  lineNumber = 24
  var func1254 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1254.paramCounts[0])
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
  func1254.paramCounts = [
    1,
  ];
  func1254.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1254;
  func1254.definitionLine = 24;
  func1254.definitionModule = "musical";
  lineNumber = 41
  var func1255 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1255.paramCounts[0])
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
  func1255.paramCounts = [
    0,
  ];
  func1255.variableArities = [
    false,
  ];
  this.methods["point"] = func1255;
  func1255.definitionLine = 41;
  func1255.definitionModule = "musical";
  var obj1256 = Grace_allocObject();
  obj1256.definitionModule = "musical";
  obj1256.definitionLine = 41;
  obj1256.outer = this;
  var reader_musical_outer_1257 = function() {
    return this.outer;
  }
  obj1256.methods["outer"] = reader_musical_outer_1257;
  function obj_init_1256() {
    var origSuperDepth = superDepth;
    superDepth = obj1256;
    obj1256.annotations = [];
    var func1258 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1258.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1258.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1259 = Grace_allocObject();
        obj1259.definitionModule = "musical";
        obj1259.definitionLine = 41;
        obj1259.outer = this;
        var reader_musical_outer_1260 = function() {
          return this.outer;
        }
        obj1259.methods["outer"] = reader_musical_outer_1260;
        function obj_init_1259() {
          var origSuperDepth = superDepth;
          superDepth = obj1259;
          obj1259.annotations = [];
          var func1261 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1263 = callmethod(this, "x", [0]);
              var diff1265 = callmethod(call1263, "-", [1], var_dx);
              onSelf = true;
              var call1266 = callmethod(this, "y", [0]);
              var call1267 = callmethod(var_point,"x()y", [1, 1], diff1265, call1266);
              return call1267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1261.paramCounts = [
            1,
          ];
          func1261.variableArities = [
            false,
          ];
          obj1259.methods["left"] = func1261;
          func1261.definitionLine = 44;
          func1261.definitionModule = "musical";
          var func1268 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1270 = callmethod(this, "x", [0]);
              var opresult1272 = callmethod(call1270, "+", [1], var_dx);
              onSelf = true;
              var call1273 = callmethod(this, "y", [0]);
              var call1274 = callmethod(var_point,"x()y", [1, 1], opresult1272, call1273);
              return call1274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1268.paramCounts = [
            1,
          ];
          func1268.variableArities = [
            false,
          ];
          obj1259.methods["right"] = func1268;
          func1268.definitionLine = 45;
          func1268.definitionModule = "musical";
          var func1275 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1276 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1278 = callmethod(this, "y", [0]);
              var diff1280 = callmethod(call1278, "-", [1], var_dy);
              var call1281 = callmethod(var_point,"x()y", [1, 1], call1276, diff1280);
              return call1281
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1275.paramCounts = [
            1,
          ];
          func1275.variableArities = [
            false,
          ];
          obj1259.methods["up"] = func1275;
          func1275.definitionLine = 46;
          func1275.definitionModule = "musical";
          var func1282 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 47
              onSelf = true;
              var call1283 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1285 = callmethod(this, "y", [0]);
              var opresult1287 = callmethod(call1285, "+", [1], var_dy);
              var call1288 = callmethod(var_point,"x()y", [1, 1], call1283, opresult1287);
              return call1288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1282.paramCounts = [
            1,
          ];
          func1282.variableArities = [
            false,
          ];
          obj1259.methods["down"] = func1282;
          func1282.definitionLine = 47;
          func1282.definitionModule = "musical";
          sourceObject = obj1259;
          lineNumber = 42
          obj1259.data["x"] = var_x__39__;
          var reader_musical_x_1289 = function() {
            return this.data["x"];
          }
          reader_musical_x_1289.def = true;
          obj1259.methods["x"] = reader_musical_x_1289;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1259;
          lineNumber = 43
          obj1259.data["y"] = var_y__39__;
          var reader_musical_y_1290 = function() {
            return this.data["y"];
          }
          reader_musical_y_1290.def = true;
          obj1259.methods["y"] = reader_musical_y_1290;
          lineNumber = 44;
          moduleName = "musical";
          lineNumber = 43
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1259;
          sourceObject = obj1259;
          sourceObject = obj1259;
          sourceObject = obj1259;
          superDepth = origSuperDepth;
        }
        obj_init_1259.apply(obj1259, []);
        return obj1259
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1258.paramCounts = [
      1,
      1,
    ];
    func1258.variableArities = [
      false,
      false,
    ];
    obj1256.methods["x()y"] = func1258;
    func1258.definitionLine = 41;
    func1258.definitionModule = "musical";
    var func1291 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1292 = Grace_allocObject();
        obj1292.definitionModule = "musical";
        obj1292.definitionLine = 41;
        var inho1292 = inheritingObject;
        while (inho1292.superobj) inho1292 = inho1292.superobj;
        inho1292.superobj = obj1292;
        obj1292.data = inheritingObject.data;
        obj1292.outer = this;
        var reader_musical_outer_1293 = function() {
          return this.outer;
        }
        obj1292.methods["outer"] = reader_musical_outer_1293;
        function obj_init_1292() {
          var origSuperDepth = superDepth;
          superDepth = obj1292;
          obj1292.annotations = [];
          var func1294 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1296 = callmethod(this, "x", [0]);
              var diff1298 = callmethod(call1296, "-", [1], var_dx);
              onSelf = true;
              var call1299 = callmethod(this, "y", [0]);
              var call1300 = callmethod(var_point,"x()y", [1, 1], diff1298, call1299);
              return call1300
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1294.paramCounts = [
            1,
          ];
          func1294.variableArities = [
            false,
          ];
          obj1292.methods["left"] = func1294;
          func1294.definitionLine = 44;
          func1294.definitionModule = "musical";
          var func1301 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1303 = callmethod(this, "x", [0]);
              var opresult1305 = callmethod(call1303, "+", [1], var_dx);
              onSelf = true;
              var call1306 = callmethod(this, "y", [0]);
              var call1307 = callmethod(var_point,"x()y", [1, 1], opresult1305, call1306);
              return call1307
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1301.paramCounts = [
            1,
          ];
          func1301.variableArities = [
            false,
          ];
          obj1292.methods["right"] = func1301;
          func1301.definitionLine = 45;
          func1301.definitionModule = "musical";
          var func1308 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1308.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1309 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1311 = callmethod(this, "y", [0]);
              var diff1313 = callmethod(call1311, "-", [1], var_dy);
              var call1314 = callmethod(var_point,"x()y", [1, 1], call1309, diff1313);
              return call1314
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1308.paramCounts = [
            1,
          ];
          func1308.variableArities = [
            false,
          ];
          obj1292.methods["up"] = func1308;
          func1308.definitionLine = 46;
          func1308.definitionModule = "musical";
          var func1315 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 47
              onSelf = true;
              var call1316 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1318 = callmethod(this, "y", [0]);
              var opresult1320 = callmethod(call1318, "+", [1], var_dy);
              var call1321 = callmethod(var_point,"x()y", [1, 1], call1316, opresult1320);
              return call1321
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
          obj1292.methods["down"] = func1315;
          func1315.definitionLine = 47;
          func1315.definitionModule = "musical";
          sourceObject = obj1292;
          lineNumber = 42
          obj1292.data["x"] = var_x__39__;
          var reader_musical_x_1322 = function() {
            return this.data["x"];
          }
          reader_musical_x_1322.def = true;
          obj1292.methods["x"] = reader_musical_x_1322;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1292;
          lineNumber = 43
          obj1292.data["y"] = var_y__39__;
          var reader_musical_y_1323 = function() {
            return this.data["y"];
          }
          reader_musical_y_1323.def = true;
          obj1292.methods["y"] = reader_musical_y_1323;
          lineNumber = 44;
          moduleName = "musical";
          lineNumber = 43
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          superDepth = origSuperDepth;
        }
        obj_init_1292.apply(inheritingObject, []);
        return obj1292
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1256.methods["x()y()object"] = func1291;
    var func1324 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 41
        var string1325 = new GraceString("class point");
        return string1325
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1324.paramCounts = [
    ];
    func1324.variableArities = [
    ];
    obj1256.methods["asDebugString"] = func1324;
    func1324.definitionLine = 41;
    func1324.definitionModule = "musical";
    sourceObject = obj1256;
    sourceObject = obj1256;
    superDepth = origSuperDepth;
  }
  obj_init_1256.apply(obj1256, []);
  var var_point = obj1256;
  lineNumber = 49
  var func1326 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1326.paramCounts[0])
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
  func1326.paramCounts = [
    0,
  ];
  func1326.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1326;
  func1326.definitionLine = 49;
  func1326.definitionModule = "musical";
  var obj1327 = Grace_allocObject();
  obj1327.definitionModule = "musical";
  obj1327.definitionLine = 49;
  obj1327.outer = this;
  var reader_musical_outer_1328 = function() {
    return this.outer;
  }
  obj1327.methods["outer"] = reader_musical_outer_1328;
  function obj_init_1327() {
    var origSuperDepth = superDepth;
    superDepth = obj1327;
    obj1327.annotations = [];
    var func1329 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1329.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1330 = Grace_allocObject();
        obj1330.definitionModule = "musical";
        obj1330.definitionLine = 49;
        obj1330.outer = this;
        var reader_musical_outer_1331 = function() {
          return this.outer;
        }
        obj1330.methods["outer"] = reader_musical_outer_1331;
        function obj_init_1330() {
          var origSuperDepth = superDepth;
          superDepth = obj1330;
          obj1330.annotations = [];
          var func1332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1332.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 61
              onSelf = true;
              var call1333 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 64
              var block1334 = Grace_allocObject();
              block1334.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1334.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1334.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1334.methods["match"] = GraceBlock_match;
              block1334.methods["prefix?"] = GraceBlock_lift;
              block1334.receiver = this;
              block1334.className = 'block<musical:64>';
              block1334.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 62
                var call1335 = callmethod(var_b,"apply", [0]);
                return call1335;
              };
              var call1336 = callmethod(Grace_prelude,"for()do", [1, 1], call1333, block1334);
              lineNumber = 64
              onSelf = true;
              var call1337 = callmethod(this, "tick", [0]);
              return call1337
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1332.paramCounts = [
            0,
          ];
          func1332.variableArities = [
            false,
          ];
          obj1330.methods["step"] = func1332;
          func1332.definitionLine = 60;
          func1332.definitionModule = "musical";
          var func1338 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1338.paramCounts[0])
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
          func1338.paramCounts = [
            0,
          ];
          func1338.variableArities = [
            false,
          ];
          obj1330.methods["tick"] = func1338;
          func1338.definitionLine = 67;
          func1338.definitionModule = "musical";
          var func1339 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1339.paramCounts[0])
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
          func1339.paramCounts = [
            1,
          ];
          func1339.variableArities = [
            false,
          ];
          obj1330.methods["draw"] = func1339;
          func1339.definitionLine = 68;
          func1339.definitionModule = "musical";
          var func1340 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 71
              lineNumber = 62
              lineNumber = 70
              var call1341 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1342 = callmethod(this, "destX:=", [1], call1341);
              lineNumber = 72
              lineNumber = 70
              lineNumber = 71
              var call1343 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1344 = callmethod(this, "destY:=", [1], call1343);
              return call1344
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
          obj1330.methods["moveTo"] = func1340;
          func1340.definitionLine = 69;
          func1340.definitionModule = "musical";
          var func1345 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1345.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 75
              lineNumber = 71
              lineNumber = 74
              var call1346 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1347 = callmethod(this, "x:=", [1], call1346);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              var call1348 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1349 = callmethod(this, "y:=", [1], call1348);
              lineNumber = 77
              lineNumber = 75
              lineNumber = 76
              onSelf = true;
              var call1350 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1351 = callmethod(this, "destX:=", [1], call1350);
              lineNumber = 78
              lineNumber = 75
              lineNumber = 77
              onSelf = true;
              var call1352 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1353 = callmethod(this, "destY:=", [1], call1352);
              return call1353
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1345.paramCounts = [
            1,
          ];
          func1345.variableArities = [
            false,
          ];
          obj1330.methods["jumpTo"] = func1345;
          func1345.definitionLine = 73;
          func1345.definitionModule = "musical";
          var func1354 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1354.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 79
              var bool1355 = new GraceBoolean(false)
              return bool1355
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1354.paramCounts = [
            1,
          ];
          func1354.variableArities = [
            false,
          ];
          obj1330.methods["isPointOver"] = func1354;
          func1354.definitionLine = 79;
          func1354.definitionModule = "musical";
          var func1356 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1356.paramCounts[0])
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
          func1356.paramCounts = [
            0,
          ];
          func1356.variableArities = [
            false,
          ];
          obj1330.methods["mousedown"] = func1356;
          func1356.definitionLine = 80;
          func1356.definitionModule = "musical";
          var func1357 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1357.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 82
              onSelf = true;
              var call1358 = callmethod(this, "alwaysBlocks", [0]);
              var call1359 = callmethod(call1358,"push", [1], var_b);
              return call1359
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1357.paramCounts = [
            1,
          ];
          func1357.variableArities = [
            false,
          ];
          obj1330.methods["always"] = func1357;
          func1357.definitionLine = 81;
          func1357.definitionModule = "musical";
          var func1360 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1360.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1360.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 85
              lineNumber = 90
              var block1361 = Grace_allocObject();
              block1361.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1361.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1361.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1361.methods["match"] = GraceBlock_match;
              block1361.methods["prefix?"] = GraceBlock_lift;
              block1361.receiver = this;
              block1361.className = 'block<musical:90>';
              block1361.real = function(
              ) {
                sourceObject = this;
                lineNumber = 89
                var if1362 = var_done;
                lineNumber = 86
                var call1363 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1363)) {
                  lineNumber = 87
                  var call1364 = callmethod(var_b,"apply", [0]);
                  if1362 = call1364;
                }
                return if1362;
              };
              onSelf = true;
              var call1365 = callmethod(this, "always", [1], block1361);
              return call1365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1360.paramCounts = [
            1,
            1,
          ];
          func1360.variableArities = [
            false,
            false,
          ];
          obj1330.methods["whenever()do"] = func1360;
          func1360.definitionLine = 84;
          func1360.definitionModule = "musical";
          var func1366 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1370 = callmethod(this, "angle", [0]);
              var quotient1372 = callmethod(call1370, "/", [1], new GraceNum(180));
              var prod1374 = callmethod(quotient1372, "*", [1], var_PI);
              var call1375 = callmethod(var_trig,"cos", [1], prod1374);
              var prod1377 = callmethod(call1375, "*", [1], var_dist);
              var var_y__39__ = prod1377;
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
              var call1381 = callmethod(this, "angle", [0]);
              var quotient1383 = callmethod(call1381, "/", [1], new GraceNum(180));
              var prod1385 = callmethod(quotient1383, "*", [1], var_PI);
              var call1386 = callmethod(var_trig,"sin", [1], prod1385);
              var prod1388 = callmethod(call1386, "*", [1], var_dist);
              var var_x__39__ = prod1388;
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
              var call1390 = callmethod(this, "x", [0]);
              var opresult1392 = callmethod(call1390, "+", [1], var_x__39__);
              onSelf = true;
              var call1393 = callmethod(this, "x:=", [1], opresult1392);
              lineNumber = 96
              lineNumber = 87
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call1395 = callmethod(this, "y", [0]);
              var opresult1397 = callmethod(call1395, "+", [1], var_y__39__);
              onSelf = true;
              var call1398 = callmethod(this, "y:=", [1], opresult1397);
              return call1398
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1366.paramCounts = [
            1,
          ];
          func1366.variableArities = [
            false,
          ];
          obj1330.methods["forward"] = func1366;
          func1366.definitionLine = 91;
          func1366.definitionModule = "musical";
          var func1399 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 98
              var block1400 = Grace_allocObject();
              block1400.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1400.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1400.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1400.methods["match"] = GraceBlock_match;
              block1400.methods["prefix?"] = GraceBlock_lift;
              block1400.receiver = this;
              block1400.className = 'block<musical:98>';
              block1400.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1402 = callmethod(this, "angle", [0]);
                var opresult1404 = callmethod(call1402, "<", [1], new GraceNum(0));
                return opresult1404;
              };
              lineNumber = 101
              var block1405 = Grace_allocObject();
              block1405.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1405.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1405.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1405.methods["match"] = GraceBlock_match;
              block1405.methods["prefix?"] = GraceBlock_lift;
              block1405.receiver = this;
              block1405.className = 'block<musical:101>';
              block1405.real = function(
              ) {
                sourceObject = this;
                lineNumber = 100
                lineNumber = 87
                lineNumber = 100
                lineNumber = 99
                onSelf = true;
                var call1407 = callmethod(this, "angle", [0]);
                var opresult1409 = callmethod(call1407, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1410 = callmethod(this, "angle:=", [1], opresult1409);
                return call1410;
              };
              lineNumber = 98
              var call1411 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1412 = callmethod(call1411, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1413 = callmethod(call1412, "while()do", [1, 1], block1400, block1405);
              lineNumber = 101
              var block1414 = Grace_allocObject();
              block1414.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1414.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1414.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1414.methods["match"] = GraceBlock_match;
              block1414.methods["prefix?"] = GraceBlock_lift;
              block1414.receiver = this;
              block1414.className = 'block<musical:101>';
              block1414.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1416 = callmethod(this, "angle", [0]);
                var opresult1418 = callmethod(call1416, ">", [1], new GraceNum(360));
                return opresult1418;
              };
              lineNumber = 104
              var block1419 = Grace_allocObject();
              block1419.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1419.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1419.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1419.methods["match"] = GraceBlock_match;
              block1419.methods["prefix?"] = GraceBlock_lift;
              block1419.receiver = this;
              block1419.className = 'block<musical:104>';
              block1419.real = function(
              ) {
                sourceObject = this;
                lineNumber = 103
                lineNumber = 98
                lineNumber = 103
                lineNumber = 102
                onSelf = true;
                var call1421 = callmethod(this, "angle", [0]);
                var diff1423 = callmethod(call1421, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1424 = callmethod(this, "angle:=", [1], diff1423);
                return call1424;
              };
              lineNumber = 101
              var call1425 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1426 = callmethod(call1425, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1427 = callmethod(call1426, "while()do", [1, 1], block1414, block1419);
              return call1427
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1399.paramCounts = [
            0,
          ];
          func1399.variableArities = [
            false,
          ];
          obj1330.methods["normaliseAngle"] = func1399;
          func1399.definitionLine = 97;
          func1399.definitionModule = "musical";
          var func1428 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1428.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 107
              lineNumber = 101
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call1430 = callmethod(this, "angle", [0]);
              var opresult1432 = callmethod(call1430, "+", [1], var_degrees);
              onSelf = true;
              var call1433 = callmethod(this, "angle:=", [1], opresult1432);
              lineNumber = 107
              onSelf = true;
              var call1434 = callmethod(this, "normaliseAngle", [0]);
              return call1434
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1428.paramCounts = [
            1,
          ];
          func1428.variableArities = [
            false,
          ];
          obj1330.methods["turn"] = func1428;
          func1428.definitionLine = 105;
          func1428.definitionModule = "musical";
          var func1435 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1435.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 113
              var if1436 = var_done;
              lineNumber = 110
              onSelf = true;
              var call1437 = callmethod(this, "x", [0]);
              var call1438 = callmethod(var_point,"x()y", [1, 1], call1437, new GraceNum(0));
              onSelf = true;
              var call1439 = callmethod(this, "isPointOver", [1], call1438);
              if (Grace_isTrue(call1439)) {
                lineNumber = 112
                lineNumber = 111
                var bool1440 = new GraceBoolean(true)
                return bool1440
              }
              lineNumber = 116
              var if1441 = var_done;
              lineNumber = 113
              onSelf = true;
              var call1442 = callmethod(this, "x", [0]);
              var call1443 = callmethod(var_point,"x()y", [1, 1], call1442, var_canvasHeight);
              onSelf = true;
              var call1444 = callmethod(this, "isPointOver", [1], call1443);
              if (Grace_isTrue(call1444)) {
                lineNumber = 115
                lineNumber = 114
                var bool1445 = new GraceBoolean(true)
                return bool1445
              }
              lineNumber = 119
              var if1446 = var_done;
              lineNumber = 116
              onSelf = true;
              var call1447 = callmethod(this, "y", [0]);
              var call1448 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1447);
              onSelf = true;
              var call1449 = callmethod(this, "isPointOver", [1], call1448);
              if (Grace_isTrue(call1449)) {
                lineNumber = 118
                lineNumber = 117
                var bool1450 = new GraceBoolean(true)
                return bool1450
              }
              lineNumber = 122
              var if1451 = var_done;
              lineNumber = 119
              onSelf = true;
              var call1452 = callmethod(this, "y", [0]);
              var call1453 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1452);
              onSelf = true;
              var call1454 = callmethod(this, "isPointOver", [1], call1453);
              if (Grace_isTrue(call1454)) {
                lineNumber = 121
                lineNumber = 120
                var bool1455 = new GraceBoolean(true)
                return bool1455
              }
              lineNumber = 123
              lineNumber = 122
              var bool1456 = new GraceBoolean(false)
              return bool1456
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1435.paramCounts = [
            0,
          ];
          func1435.variableArities = [
            false,
          ];
          obj1330.methods["touchingEdge"] = func1435;
          func1435.definitionLine = 109;
          func1435.definitionModule = "musical";
          var func1457 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1457.paramCounts[0])
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
              var if1458 = var_done;
              lineNumber = 127
              onSelf = true;
              var call1459 = callmethod(this, "x", [0]);
              var call1460 = callmethod(var_point,"x()y", [1, 1], call1459, new GraceNum(0));
              onSelf = true;
              var call1461 = callmethod(this, "isPointOver", [1], call1460);
              if (Grace_isTrue(call1461)) {
                lineNumber = 128
                onSelf = true;
                var call1462 = callmethod(this, "bounceFrom", [1], var_top);
                if1458 = call1462;
              }
              lineNumber = 133
              var if1463 = var_done;
              lineNumber = 130
              onSelf = true;
              var call1464 = callmethod(this, "x", [0]);
              var call1465 = callmethod(var_point,"x()y", [1, 1], call1464, var_canvasHeight);
              onSelf = true;
              var call1466 = callmethod(this, "isPointOver", [1], call1465);
              if (Grace_isTrue(call1466)) {
                lineNumber = 131
                onSelf = true;
                var call1467 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1463 = call1467;
              }
              lineNumber = 136
              var if1468 = var_done;
              lineNumber = 133
              onSelf = true;
              var call1469 = callmethod(this, "y", [0]);
              var call1470 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1469);
              onSelf = true;
              var call1471 = callmethod(this, "isPointOver", [1], call1470);
              if (Grace_isTrue(call1471)) {
                lineNumber = 134
                onSelf = true;
                var call1472 = callmethod(this, "bounceFrom", [1], var_left);
                if1468 = call1472;
              }
              lineNumber = 139
              var if1473 = var_done;
              lineNumber = 136
              onSelf = true;
              var call1474 = callmethod(this, "y", [0]);
              var call1475 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1474);
              onSelf = true;
              var call1476 = callmethod(this, "isPointOver", [1], call1475);
              if (Grace_isTrue(call1476)) {
                lineNumber = 137
                onSelf = true;
                var call1477 = callmethod(this, "bounceFrom", [1], var_right);
                if1473 = call1477;
              }
              lineNumber = 139
              var block1478 = Grace_allocObject();
              block1478.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1478.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1478.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1478.methods["match"] = GraceBlock_match;
              block1478.methods["prefix?"] = GraceBlock_lift;
              block1478.receiver = this;
              block1478.className = 'block<musical:139>';
              block1478.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1479 = callmethod(this, "touchingEdge", [0]);
                return call1479;
              };
              lineNumber = 142
              var block1480 = Grace_allocObject();
              block1480.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1480.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1480.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1480.methods["match"] = GraceBlock_match;
              block1480.methods["prefix?"] = GraceBlock_lift;
              block1480.receiver = this;
              block1480.className = 'block<musical:142>';
              block1480.real = function(
              ) {
                sourceObject = this;
                lineNumber = 140
                onSelf = true;
                var call1481 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1481;
              };
              lineNumber = 139
              var call1482 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1483 = callmethod(call1482, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1484 = callmethod(call1483, "while()do", [1, 1], block1478, block1480);
              return call1484
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1457.paramCounts = [
            0,
          ];
          func1457.variableArities = [
            false,
          ];
          obj1330.methods["bounce"] = func1457;
          func1457.definitionLine = 124;
          func1457.definitionModule = "musical";
          var func1485 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1485.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 147
              var if1486 = var_done;
              lineNumber = 144
              var string1487 = new GraceString("left");
              var opresult1490 = callmethod(var_dir, "==", [1], string1487);
              if (Grace_isTrue(opresult1490)) {
                lineNumber = 146
                lineNumber = 139
                lineNumber = 146
                lineNumber = 145
                onSelf = true;
                var call1491 = callmethod(this, "angle", [0]);
                var diff1494 = callmethod(new GraceNum(360), "-", [1], call1491);
                onSelf = true;
                var call1495 = callmethod(this, "angle:=", [1], diff1494);
                if1486 = call1495;
              }
              lineNumber = 150
              var if1496 = var_done;
              lineNumber = 147
              var string1497 = new GraceString("right");
              var opresult1500 = callmethod(var_dir, "==", [1], string1497);
              if (Grace_isTrue(opresult1500)) {
                lineNumber = 149
                lineNumber = 139
                lineNumber = 149
                lineNumber = 148
                onSelf = true;
                var call1501 = callmethod(this, "angle", [0]);
                var diff1504 = callmethod(new GraceNum(360), "-", [1], call1501);
                onSelf = true;
                var call1505 = callmethod(this, "angle:=", [1], diff1504);
                if1496 = call1505;
              }
              lineNumber = 153
              var if1506 = var_done;
              lineNumber = 150
              var string1507 = new GraceString("top");
              var opresult1510 = callmethod(var_dir, "==", [1], string1507);
              if (Grace_isTrue(opresult1510)) {
                lineNumber = 152
                lineNumber = 139
                lineNumber = 152
                lineNumber = 151
                onSelf = true;
                var call1511 = callmethod(this, "angle", [0]);
                var diff1514 = callmethod(new GraceNum(180), "-", [1], call1511);
                onSelf = true;
                var call1515 = callmethod(this, "angle:=", [1], diff1514);
                if1506 = call1515;
              }
              lineNumber = 156
              var if1516 = var_done;
              lineNumber = 153
              var string1517 = new GraceString("bottom");
              var opresult1520 = callmethod(var_dir, "==", [1], string1517);
              if (Grace_isTrue(opresult1520)) {
                lineNumber = 155
                lineNumber = 139
                lineNumber = 155
                lineNumber = 154
                onSelf = true;
                var call1521 = callmethod(this, "angle", [0]);
                var diff1524 = callmethod(new GraceNum(180), "-", [1], call1521);
                onSelf = true;
                var call1525 = callmethod(this, "angle:=", [1], diff1524);
                if1516 = call1525;
              }
              lineNumber = 156
              onSelf = true;
              var call1526 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 157
              onSelf = true;
              var call1527 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1527
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1485.paramCounts = [
            1,
          ];
          func1485.variableArities = [
            false,
          ];
          obj1330.methods["bounceFrom"] = func1485;
          func1485.definitionLine = 143;
          func1485.definitionModule = "musical";
          var func1528 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1528.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 163
              var if1529 = var_done;
              lineNumber = 160
              var call1530 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1532 = callmethod(this, "x", [0]);
              var opresult1534 = callmethod(call1532, ">", [1], call1530);
              if (Grace_isTrue(opresult1534)) {
                lineNumber = 161
                onSelf = true;
                var call1535 = callmethod(this, "bounceFrom", [1], var_left);
                if1529 = call1535;
              }
              lineNumber = 166
              var if1536 = var_done;
              lineNumber = 163
              var call1537 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1539 = callmethod(this, "x", [0]);
              var opresult1541 = callmethod(call1539, "<", [1], call1537);
              if (Grace_isTrue(opresult1541)) {
                lineNumber = 164
                onSelf = true;
                var call1542 = callmethod(this, "bounceFrom", [1], var_right);
                if1536 = call1542;
              }
              lineNumber = 166
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
              block1543.className = 'block<musical:166>';
              block1543.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1544 = callmethod(this, "touching", [1], var_other);
                return call1544;
              };
              lineNumber = 169
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
              block1545.className = 'block<musical:169>';
              block1545.real = function(
              ) {
                sourceObject = this;
                lineNumber = 167
                onSelf = true;
                var call1546 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1546;
              };
              lineNumber = 166
              var call1547 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1548 = callmethod(call1547, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1549 = callmethod(call1548, "while()do", [1, 1], block1543, block1545);
              return call1549
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1528.paramCounts = [
            1,
          ];
          func1528.variableArities = [
            false,
          ];
          obj1330.methods["bounceOff"] = func1528;
          func1528.definitionLine = 159;
          func1528.definitionModule = "musical";
          var func1550 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1550.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 171
              onSelf = true;
              var call1551 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1552 = callmethod(this, "y", [0]);
              var call1553 = callmethod(var_point,"x()y", [1, 1], call1551, call1552);
              var call1554 = callmethod(var_other,"isPointOver", [1], call1553);
              return call1554
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1550.paramCounts = [
            1,
          ];
          func1550.variableArities = [
            false,
          ];
          obj1330.methods["touching"] = func1550;
          func1550.definitionLine = 170;
          func1550.definitionModule = "musical";
          var func1555 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1555.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 177
              var if1556 = var_done;
              lineNumber = 174
              onSelf = true;
              var call1557 = callmethod(this, "y", [0]);
              var call1559 = callmethod(var_other,"y", [0]);
              var opresult1561 = callmethod(call1559, "!=", [1], call1557);
              onSelf = true;
              var call1563 = callmethod(this, "x", [0]);
              var call1565 = callmethod(var_other,"x", [0]);
              var opresult1567 = callmethod(call1565, "!=", [1], call1563);
              var opresult1569 = callmethod(opresult1567, "||", [1], opresult1561);
              if (Grace_isTrue(opresult1569)) {
                lineNumber = 176
                lineNumber = 174
                lineNumber = 176
                lineNumber = 175
                onSelf = true;
                var call1572 = callmethod(this, "x", [0]);
                var call1574 = callmethod(var_other,"x", [0]);
                var diff1576 = callmethod(call1574, "-", [1], call1572);
                onSelf = true;
                var call1577 = callmethod(this, "y", [0]);
                var call1579 = callmethod(var_other,"y", [0]);
                var diff1581 = callmethod(call1579, "-", [1], call1577);
                var call1582 = callmethod(var_trig,"atan2", [2], diff1576, diff1581);
                var prod1584 = callmethod(call1582, "*", [1], new GraceNum(180));
                var quotient1586 = callmethod(prod1584, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1587 = callmethod(this, "angle:=", [1], quotient1586);
                if1556 = call1587;
              }
              lineNumber = 177
              onSelf = true;
              var call1588 = callmethod(this, "normaliseAngle", [0]);
              return call1588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1555.paramCounts = [
            1,
          ];
          func1555.variableArities = [
            false,
          ];
          obj1330.methods["face"] = func1555;
          func1555.definitionLine = 173;
          func1555.definitionModule = "musical";
          var func1589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 180
              var string1590 = new GraceString("2d");
              var call1591 = callmethod(var_backingCanvas,"getContext", [1], string1590);
              onSelf = true;
              var call1592 = callmethod(this, "draw", [1], call1591);
              return call1592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1589.paramCounts = [
            0,
          ];
          func1589.variableArities = [
            false,
          ];
          obj1330.methods["stamp"] = func1589;
          func1589.definitionLine = 179;
          func1589.definitionModule = "musical";
          sourceObject = obj1330;
          lineNumber = 50
          var call1593 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1594 = callmethod(call1593, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1595 = callmethod(call1594, "initialise", [0]);
          sourceObject = obj1330;
          lineNumber = 51
          var call1596 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1330;
          lineNumber = 53
          lineNumber = 52
          var_above = this;
          sourceObject = obj1330;
          lineNumber = 54
          lineNumber = 53
          var___916__ = this;
          sourceObject = obj1330;
          lineNumber = 54
          var call1597 = callmethod(var_collections,"list", [0]);
          var call1598 = callmethod(call1597,"new", [0]);
          obj1330.data["alwaysBlocks"] = call1598;
          var reader_musical_alwaysBlocks_1599 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1599.def = true;
          reader_musical_alwaysBlocks_1599.confidential = true;
          obj1330.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1599;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1598)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1330;
          lineNumber = 56
          lineNumber = 55
          var quotient1602 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1330.data["x"] = quotient1602;
          var reader_musical_x_1603 = function() {
            return this.data["x"];
          }
          obj1330.methods["x"] = reader_musical_x_1603;
          obj1330.data["x"] = quotient1602;
          var writer_musical_x_1603 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1330.methods["x:="] = writer_musical_x_1603;
          writer_musical_x_1603.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1602)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1330.mutable = true;
          sourceObject = obj1330;
          lineNumber = 57
          lineNumber = 56
          var quotient1606 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1330.data["y"] = quotient1606;
          var reader_musical_y_1607 = function() {
            return this.data["y"];
          }
          obj1330.methods["y"] = reader_musical_y_1607;
          obj1330.data["y"] = quotient1606;
          var writer_musical_y_1607 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1330.methods["y:="] = writer_musical_y_1607;
          writer_musical_y_1607.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1606)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1330.mutable = true;
          sourceObject = obj1330;
          lineNumber = 57
          onSelf = true;
          var call1608 = callmethod(this, "x", [0]);
          obj1330.data["destX"] = call1608;
          var reader_musical_destX_1609 = function() {
            return this.data["destX"];
          }
          obj1330.methods["destX"] = reader_musical_destX_1609;
          obj1330.data["destX"] = call1608;
          var writer_musical_destX_1609 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1330.methods["destX:="] = writer_musical_destX_1609;
          reader_musical_destX_1609.confidential = true;
          writer_musical_destX_1609.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1608)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1330.mutable = true;
          sourceObject = obj1330;
          lineNumber = 58
          onSelf = true;
          var call1610 = callmethod(this, "y", [0]);
          obj1330.data["destY"] = call1610;
          var reader_musical_destY_1611 = function() {
            return this.data["destY"];
          }
          obj1330.methods["destY"] = reader_musical_destY_1611;
          obj1330.data["destY"] = call1610;
          var writer_musical_destY_1611 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1330.methods["destY:="] = writer_musical_destY_1611;
          reader_musical_destY_1611.confidential = true;
          writer_musical_destY_1611.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1330.mutable = true;
          sourceObject = obj1330;
          lineNumber = 59
          obj1330.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1612 = function() {
            return this.data["angle"];
          }
          obj1330.methods["angle"] = reader_musical_angle_1612;
          obj1330.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1612 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1330.methods["angle:="] = writer_musical_angle_1612;
          reader_musical_angle_1612.confidential = true;
          writer_musical_angle_1612.confidential = true;
          lineNumber = 60;
          moduleName = "musical";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1330.mutable = true;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          sourceObject = obj1330;
          superDepth = origSuperDepth;
        }
        obj_init_1330.apply(obj1330, []);
        return obj1330
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1329.paramCounts = [
      0,
    ];
    func1329.variableArities = [
      false,
    ];
    obj1327.methods["new"] = func1329;
    func1329.definitionLine = 49;
    func1329.definitionModule = "musical";
    var func1613 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1614 = Grace_allocObject();
        obj1614.definitionModule = "musical";
        obj1614.definitionLine = 49;
        var inho1614 = inheritingObject;
        while (inho1614.superobj) inho1614 = inho1614.superobj;
        inho1614.superobj = obj1614;
        obj1614.data = inheritingObject.data;
        obj1614.outer = this;
        var reader_musical_outer_1615 = function() {
          return this.outer;
        }
        obj1614.methods["outer"] = reader_musical_outer_1615;
        function obj_init_1614() {
          var origSuperDepth = superDepth;
          superDepth = obj1614;
          obj1614.annotations = [];
          var func1616 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 61
              onSelf = true;
              var call1617 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 64
              var block1618 = Grace_allocObject();
              block1618.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1618.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1618.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1618.methods["match"] = GraceBlock_match;
              block1618.methods["prefix?"] = GraceBlock_lift;
              block1618.receiver = this;
              block1618.className = 'block<musical:64>';
              block1618.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 62
                var call1619 = callmethod(var_b,"apply", [0]);
                return call1619;
              };
              var call1620 = callmethod(Grace_prelude,"for()do", [1, 1], call1617, block1618);
              lineNumber = 64
              onSelf = true;
              var call1621 = callmethod(this, "tick", [0]);
              return call1621
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1616.paramCounts = [
            0,
          ];
          func1616.variableArities = [
            false,
          ];
          obj1614.methods["step"] = func1616;
          func1616.definitionLine = 60;
          func1616.definitionModule = "musical";
          var func1622 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1622.paramCounts[0])
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
          func1622.paramCounts = [
            0,
          ];
          func1622.variableArities = [
            false,
          ];
          obj1614.methods["tick"] = func1622;
          func1622.definitionLine = 67;
          func1622.definitionModule = "musical";
          var func1623 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1623.paramCounts[0])
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
          func1623.paramCounts = [
            1,
          ];
          func1623.variableArities = [
            false,
          ];
          obj1614.methods["draw"] = func1623;
          func1623.definitionLine = 68;
          func1623.definitionModule = "musical";
          var func1624 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1624.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 71
              lineNumber = 62
              lineNumber = 70
              var call1625 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1626 = callmethod(this, "destX:=", [1], call1625);
              lineNumber = 72
              lineNumber = 70
              lineNumber = 71
              var call1627 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1628 = callmethod(this, "destY:=", [1], call1627);
              return call1628
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1624.paramCounts = [
            1,
          ];
          func1624.variableArities = [
            false,
          ];
          obj1614.methods["moveTo"] = func1624;
          func1624.definitionLine = 69;
          func1624.definitionModule = "musical";
          var func1629 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 75
              lineNumber = 71
              lineNumber = 74
              var call1630 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1631 = callmethod(this, "x:=", [1], call1630);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              var call1632 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1633 = callmethod(this, "y:=", [1], call1632);
              lineNumber = 77
              lineNumber = 75
              lineNumber = 76
              onSelf = true;
              var call1634 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1635 = callmethod(this, "destX:=", [1], call1634);
              lineNumber = 78
              lineNumber = 75
              lineNumber = 77
              onSelf = true;
              var call1636 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1637 = callmethod(this, "destY:=", [1], call1636);
              return call1637
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1629.paramCounts = [
            1,
          ];
          func1629.variableArities = [
            false,
          ];
          obj1614.methods["jumpTo"] = func1629;
          func1629.definitionLine = 73;
          func1629.definitionModule = "musical";
          var func1638 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 79
              var bool1639 = new GraceBoolean(false)
              return bool1639
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1638.paramCounts = [
            1,
          ];
          func1638.variableArities = [
            false,
          ];
          obj1614.methods["isPointOver"] = func1638;
          func1638.definitionLine = 79;
          func1638.definitionModule = "musical";
          var func1640 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1640.paramCounts[0])
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
          func1640.paramCounts = [
            0,
          ];
          func1640.variableArities = [
            false,
          ];
          obj1614.methods["mousedown"] = func1640;
          func1640.definitionLine = 80;
          func1640.definitionModule = "musical";
          var func1641 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1641.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 82
              onSelf = true;
              var call1642 = callmethod(this, "alwaysBlocks", [0]);
              var call1643 = callmethod(call1642,"push", [1], var_b);
              return call1643
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1641.paramCounts = [
            1,
          ];
          func1641.variableArities = [
            false,
          ];
          obj1614.methods["always"] = func1641;
          func1641.definitionLine = 81;
          func1641.definitionModule = "musical";
          var func1644 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1644.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1644.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 85
              lineNumber = 90
              var block1645 = Grace_allocObject();
              block1645.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1645.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1645.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1645.methods["match"] = GraceBlock_match;
              block1645.methods["prefix?"] = GraceBlock_lift;
              block1645.receiver = this;
              block1645.className = 'block<musical:90>';
              block1645.real = function(
              ) {
                sourceObject = this;
                lineNumber = 89
                var if1646 = var_done;
                lineNumber = 86
                var call1647 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1647)) {
                  lineNumber = 87
                  var call1648 = callmethod(var_b,"apply", [0]);
                  if1646 = call1648;
                }
                return if1646;
              };
              onSelf = true;
              var call1649 = callmethod(this, "always", [1], block1645);
              return call1649
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1644.paramCounts = [
            1,
            1,
          ];
          func1644.variableArities = [
            false,
            false,
          ];
          obj1614.methods["whenever()do"] = func1644;
          func1644.definitionLine = 84;
          func1644.definitionModule = "musical";
          var func1650 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1650.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1654 = callmethod(this, "angle", [0]);
              var quotient1656 = callmethod(call1654, "/", [1], new GraceNum(180));
              var prod1658 = callmethod(quotient1656, "*", [1], var_PI);
              var call1659 = callmethod(var_trig,"cos", [1], prod1658);
              var prod1661 = callmethod(call1659, "*", [1], var_dist);
              var var_y__39__ = prod1661;
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
              var call1665 = callmethod(this, "angle", [0]);
              var quotient1667 = callmethod(call1665, "/", [1], new GraceNum(180));
              var prod1669 = callmethod(quotient1667, "*", [1], var_PI);
              var call1670 = callmethod(var_trig,"sin", [1], prod1669);
              var prod1672 = callmethod(call1670, "*", [1], var_dist);
              var var_x__39__ = prod1672;
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
              var call1674 = callmethod(this, "x", [0]);
              var opresult1676 = callmethod(call1674, "+", [1], var_x__39__);
              onSelf = true;
              var call1677 = callmethod(this, "x:=", [1], opresult1676);
              lineNumber = 96
              lineNumber = 87
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call1679 = callmethod(this, "y", [0]);
              var opresult1681 = callmethod(call1679, "+", [1], var_y__39__);
              onSelf = true;
              var call1682 = callmethod(this, "y:=", [1], opresult1681);
              return call1682
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1650.paramCounts = [
            1,
          ];
          func1650.variableArities = [
            false,
          ];
          obj1614.methods["forward"] = func1650;
          func1650.definitionLine = 91;
          func1650.definitionModule = "musical";
          var func1683 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1683.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 98
              var block1684 = Grace_allocObject();
              block1684.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1684.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1684.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1684.methods["match"] = GraceBlock_match;
              block1684.methods["prefix?"] = GraceBlock_lift;
              block1684.receiver = this;
              block1684.className = 'block<musical:98>';
              block1684.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1686 = callmethod(this, "angle", [0]);
                var opresult1688 = callmethod(call1686, "<", [1], new GraceNum(0));
                return opresult1688;
              };
              lineNumber = 101
              var block1689 = Grace_allocObject();
              block1689.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1689.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1689.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1689.methods["match"] = GraceBlock_match;
              block1689.methods["prefix?"] = GraceBlock_lift;
              block1689.receiver = this;
              block1689.className = 'block<musical:101>';
              block1689.real = function(
              ) {
                sourceObject = this;
                lineNumber = 100
                lineNumber = 87
                lineNumber = 100
                lineNumber = 99
                onSelf = true;
                var call1691 = callmethod(this, "angle", [0]);
                var opresult1693 = callmethod(call1691, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1694 = callmethod(this, "angle:=", [1], opresult1693);
                return call1694;
              };
              lineNumber = 98
              var call1695 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1696 = callmethod(call1695, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1697 = callmethod(call1696, "while()do", [1, 1], block1684, block1689);
              lineNumber = 101
              var block1698 = Grace_allocObject();
              block1698.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1698.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1698.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1698.methods["match"] = GraceBlock_match;
              block1698.methods["prefix?"] = GraceBlock_lift;
              block1698.receiver = this;
              block1698.className = 'block<musical:101>';
              block1698.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1700 = callmethod(this, "angle", [0]);
                var opresult1702 = callmethod(call1700, ">", [1], new GraceNum(360));
                return opresult1702;
              };
              lineNumber = 104
              var block1703 = Grace_allocObject();
              block1703.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1703.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1703.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1703.methods["match"] = GraceBlock_match;
              block1703.methods["prefix?"] = GraceBlock_lift;
              block1703.receiver = this;
              block1703.className = 'block<musical:104>';
              block1703.real = function(
              ) {
                sourceObject = this;
                lineNumber = 103
                lineNumber = 98
                lineNumber = 103
                lineNumber = 102
                onSelf = true;
                var call1705 = callmethod(this, "angle", [0]);
                var diff1707 = callmethod(call1705, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1708 = callmethod(this, "angle:=", [1], diff1707);
                return call1708;
              };
              lineNumber = 101
              var call1709 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1710 = callmethod(call1709, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1711 = callmethod(call1710, "while()do", [1, 1], block1698, block1703);
              return call1711
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1683.paramCounts = [
            0,
          ];
          func1683.variableArities = [
            false,
          ];
          obj1614.methods["normaliseAngle"] = func1683;
          func1683.definitionLine = 97;
          func1683.definitionModule = "musical";
          var func1712 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1712.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 107
              lineNumber = 101
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call1714 = callmethod(this, "angle", [0]);
              var opresult1716 = callmethod(call1714, "+", [1], var_degrees);
              onSelf = true;
              var call1717 = callmethod(this, "angle:=", [1], opresult1716);
              lineNumber = 107
              onSelf = true;
              var call1718 = callmethod(this, "normaliseAngle", [0]);
              return call1718
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1712.paramCounts = [
            1,
          ];
          func1712.variableArities = [
            false,
          ];
          obj1614.methods["turn"] = func1712;
          func1712.definitionLine = 105;
          func1712.definitionModule = "musical";
          var func1719 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1719.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 113
              var if1720 = var_done;
              lineNumber = 110
              onSelf = true;
              var call1721 = callmethod(this, "x", [0]);
              var call1722 = callmethod(var_point,"x()y", [1, 1], call1721, new GraceNum(0));
              onSelf = true;
              var call1723 = callmethod(this, "isPointOver", [1], call1722);
              if (Grace_isTrue(call1723)) {
                lineNumber = 112
                lineNumber = 111
                var bool1724 = new GraceBoolean(true)
                return bool1724
              }
              lineNumber = 116
              var if1725 = var_done;
              lineNumber = 113
              onSelf = true;
              var call1726 = callmethod(this, "x", [0]);
              var call1727 = callmethod(var_point,"x()y", [1, 1], call1726, var_canvasHeight);
              onSelf = true;
              var call1728 = callmethod(this, "isPointOver", [1], call1727);
              if (Grace_isTrue(call1728)) {
                lineNumber = 115
                lineNumber = 114
                var bool1729 = new GraceBoolean(true)
                return bool1729
              }
              lineNumber = 119
              var if1730 = var_done;
              lineNumber = 116
              onSelf = true;
              var call1731 = callmethod(this, "y", [0]);
              var call1732 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1731);
              onSelf = true;
              var call1733 = callmethod(this, "isPointOver", [1], call1732);
              if (Grace_isTrue(call1733)) {
                lineNumber = 118
                lineNumber = 117
                var bool1734 = new GraceBoolean(true)
                return bool1734
              }
              lineNumber = 122
              var if1735 = var_done;
              lineNumber = 119
              onSelf = true;
              var call1736 = callmethod(this, "y", [0]);
              var call1737 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1736);
              onSelf = true;
              var call1738 = callmethod(this, "isPointOver", [1], call1737);
              if (Grace_isTrue(call1738)) {
                lineNumber = 121
                lineNumber = 120
                var bool1739 = new GraceBoolean(true)
                return bool1739
              }
              lineNumber = 123
              lineNumber = 122
              var bool1740 = new GraceBoolean(false)
              return bool1740
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1719.paramCounts = [
            0,
          ];
          func1719.variableArities = [
            false,
          ];
          obj1614.methods["touchingEdge"] = func1719;
          func1719.definitionLine = 109;
          func1719.definitionModule = "musical";
          var func1741 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1741.paramCounts[0])
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
              var if1742 = var_done;
              lineNumber = 127
              onSelf = true;
              var call1743 = callmethod(this, "x", [0]);
              var call1744 = callmethod(var_point,"x()y", [1, 1], call1743, new GraceNum(0));
              onSelf = true;
              var call1745 = callmethod(this, "isPointOver", [1], call1744);
              if (Grace_isTrue(call1745)) {
                lineNumber = 128
                onSelf = true;
                var call1746 = callmethod(this, "bounceFrom", [1], var_top);
                if1742 = call1746;
              }
              lineNumber = 133
              var if1747 = var_done;
              lineNumber = 130
              onSelf = true;
              var call1748 = callmethod(this, "x", [0]);
              var call1749 = callmethod(var_point,"x()y", [1, 1], call1748, var_canvasHeight);
              onSelf = true;
              var call1750 = callmethod(this, "isPointOver", [1], call1749);
              if (Grace_isTrue(call1750)) {
                lineNumber = 131
                onSelf = true;
                var call1751 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1747 = call1751;
              }
              lineNumber = 136
              var if1752 = var_done;
              lineNumber = 133
              onSelf = true;
              var call1753 = callmethod(this, "y", [0]);
              var call1754 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1753);
              onSelf = true;
              var call1755 = callmethod(this, "isPointOver", [1], call1754);
              if (Grace_isTrue(call1755)) {
                lineNumber = 134
                onSelf = true;
                var call1756 = callmethod(this, "bounceFrom", [1], var_left);
                if1752 = call1756;
              }
              lineNumber = 139
              var if1757 = var_done;
              lineNumber = 136
              onSelf = true;
              var call1758 = callmethod(this, "y", [0]);
              var call1759 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1758);
              onSelf = true;
              var call1760 = callmethod(this, "isPointOver", [1], call1759);
              if (Grace_isTrue(call1760)) {
                lineNumber = 137
                onSelf = true;
                var call1761 = callmethod(this, "bounceFrom", [1], var_right);
                if1757 = call1761;
              }
              lineNumber = 139
              var block1762 = Grace_allocObject();
              block1762.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1762.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1762.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1762.methods["match"] = GraceBlock_match;
              block1762.methods["prefix?"] = GraceBlock_lift;
              block1762.receiver = this;
              block1762.className = 'block<musical:139>';
              block1762.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1763 = callmethod(this, "touchingEdge", [0]);
                return call1763;
              };
              lineNumber = 142
              var block1764 = Grace_allocObject();
              block1764.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1764.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1764.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1764.methods["match"] = GraceBlock_match;
              block1764.methods["prefix?"] = GraceBlock_lift;
              block1764.receiver = this;
              block1764.className = 'block<musical:142>';
              block1764.real = function(
              ) {
                sourceObject = this;
                lineNumber = 140
                onSelf = true;
                var call1765 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1765;
              };
              lineNumber = 139
              var call1766 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1767 = callmethod(call1766, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1768 = callmethod(call1767, "while()do", [1, 1], block1762, block1764);
              return call1768
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1741.paramCounts = [
            0,
          ];
          func1741.variableArities = [
            false,
          ];
          obj1614.methods["bounce"] = func1741;
          func1741.definitionLine = 124;
          func1741.definitionModule = "musical";
          var func1769 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1769.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 147
              var if1770 = var_done;
              lineNumber = 144
              var string1771 = new GraceString("left");
              var opresult1774 = callmethod(var_dir, "==", [1], string1771);
              if (Grace_isTrue(opresult1774)) {
                lineNumber = 146
                lineNumber = 139
                lineNumber = 146
                lineNumber = 145
                onSelf = true;
                var call1775 = callmethod(this, "angle", [0]);
                var diff1778 = callmethod(new GraceNum(360), "-", [1], call1775);
                onSelf = true;
                var call1779 = callmethod(this, "angle:=", [1], diff1778);
                if1770 = call1779;
              }
              lineNumber = 150
              var if1780 = var_done;
              lineNumber = 147
              var string1781 = new GraceString("right");
              var opresult1784 = callmethod(var_dir, "==", [1], string1781);
              if (Grace_isTrue(opresult1784)) {
                lineNumber = 149
                lineNumber = 139
                lineNumber = 149
                lineNumber = 148
                onSelf = true;
                var call1785 = callmethod(this, "angle", [0]);
                var diff1788 = callmethod(new GraceNum(360), "-", [1], call1785);
                onSelf = true;
                var call1789 = callmethod(this, "angle:=", [1], diff1788);
                if1780 = call1789;
              }
              lineNumber = 153
              var if1790 = var_done;
              lineNumber = 150
              var string1791 = new GraceString("top");
              var opresult1794 = callmethod(var_dir, "==", [1], string1791);
              if (Grace_isTrue(opresult1794)) {
                lineNumber = 152
                lineNumber = 139
                lineNumber = 152
                lineNumber = 151
                onSelf = true;
                var call1795 = callmethod(this, "angle", [0]);
                var diff1798 = callmethod(new GraceNum(180), "-", [1], call1795);
                onSelf = true;
                var call1799 = callmethod(this, "angle:=", [1], diff1798);
                if1790 = call1799;
              }
              lineNumber = 156
              var if1800 = var_done;
              lineNumber = 153
              var string1801 = new GraceString("bottom");
              var opresult1804 = callmethod(var_dir, "==", [1], string1801);
              if (Grace_isTrue(opresult1804)) {
                lineNumber = 155
                lineNumber = 139
                lineNumber = 155
                lineNumber = 154
                onSelf = true;
                var call1805 = callmethod(this, "angle", [0]);
                var diff1808 = callmethod(new GraceNum(180), "-", [1], call1805);
                onSelf = true;
                var call1809 = callmethod(this, "angle:=", [1], diff1808);
                if1800 = call1809;
              }
              lineNumber = 156
              onSelf = true;
              var call1810 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 157
              onSelf = true;
              var call1811 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1811
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1769.paramCounts = [
            1,
          ];
          func1769.variableArities = [
            false,
          ];
          obj1614.methods["bounceFrom"] = func1769;
          func1769.definitionLine = 143;
          func1769.definitionModule = "musical";
          var func1812 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1812.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 163
              var if1813 = var_done;
              lineNumber = 160
              var call1814 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1816 = callmethod(this, "x", [0]);
              var opresult1818 = callmethod(call1816, ">", [1], call1814);
              if (Grace_isTrue(opresult1818)) {
                lineNumber = 161
                onSelf = true;
                var call1819 = callmethod(this, "bounceFrom", [1], var_left);
                if1813 = call1819;
              }
              lineNumber = 166
              var if1820 = var_done;
              lineNumber = 163
              var call1821 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1823 = callmethod(this, "x", [0]);
              var opresult1825 = callmethod(call1823, "<", [1], call1821);
              if (Grace_isTrue(opresult1825)) {
                lineNumber = 164
                onSelf = true;
                var call1826 = callmethod(this, "bounceFrom", [1], var_right);
                if1820 = call1826;
              }
              lineNumber = 166
              var block1827 = Grace_allocObject();
              block1827.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1827.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1827.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1827.methods["match"] = GraceBlock_match;
              block1827.methods["prefix?"] = GraceBlock_lift;
              block1827.receiver = this;
              block1827.className = 'block<musical:166>';
              block1827.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1828 = callmethod(this, "touching", [1], var_other);
                return call1828;
              };
              lineNumber = 169
              var block1829 = Grace_allocObject();
              block1829.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1829.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1829.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1829.methods["match"] = GraceBlock_match;
              block1829.methods["prefix?"] = GraceBlock_lift;
              block1829.receiver = this;
              block1829.className = 'block<musical:169>';
              block1829.real = function(
              ) {
                sourceObject = this;
                lineNumber = 167
                onSelf = true;
                var call1830 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1830;
              };
              lineNumber = 166
              var call1831 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1832 = callmethod(call1831, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1833 = callmethod(call1832, "while()do", [1, 1], block1827, block1829);
              return call1833
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1812.paramCounts = [
            1,
          ];
          func1812.variableArities = [
            false,
          ];
          obj1614.methods["bounceOff"] = func1812;
          func1812.definitionLine = 159;
          func1812.definitionModule = "musical";
          var func1834 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1834.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 171
              onSelf = true;
              var call1835 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1836 = callmethod(this, "y", [0]);
              var call1837 = callmethod(var_point,"x()y", [1, 1], call1835, call1836);
              var call1838 = callmethod(var_other,"isPointOver", [1], call1837);
              return call1838
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1834.paramCounts = [
            1,
          ];
          func1834.variableArities = [
            false,
          ];
          obj1614.methods["touching"] = func1834;
          func1834.definitionLine = 170;
          func1834.definitionModule = "musical";
          var func1839 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1839.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 177
              var if1840 = var_done;
              lineNumber = 174
              onSelf = true;
              var call1841 = callmethod(this, "y", [0]);
              var call1843 = callmethod(var_other,"y", [0]);
              var opresult1845 = callmethod(call1843, "!=", [1], call1841);
              onSelf = true;
              var call1847 = callmethod(this, "x", [0]);
              var call1849 = callmethod(var_other,"x", [0]);
              var opresult1851 = callmethod(call1849, "!=", [1], call1847);
              var opresult1853 = callmethod(opresult1851, "||", [1], opresult1845);
              if (Grace_isTrue(opresult1853)) {
                lineNumber = 176
                lineNumber = 174
                lineNumber = 176
                lineNumber = 175
                onSelf = true;
                var call1856 = callmethod(this, "x", [0]);
                var call1858 = callmethod(var_other,"x", [0]);
                var diff1860 = callmethod(call1858, "-", [1], call1856);
                onSelf = true;
                var call1861 = callmethod(this, "y", [0]);
                var call1863 = callmethod(var_other,"y", [0]);
                var diff1865 = callmethod(call1863, "-", [1], call1861);
                var call1866 = callmethod(var_trig,"atan2", [2], diff1860, diff1865);
                var prod1868 = callmethod(call1866, "*", [1], new GraceNum(180));
                var quotient1870 = callmethod(prod1868, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1871 = callmethod(this, "angle:=", [1], quotient1870);
                if1840 = call1871;
              }
              lineNumber = 177
              onSelf = true;
              var call1872 = callmethod(this, "normaliseAngle", [0]);
              return call1872
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1839.paramCounts = [
            1,
          ];
          func1839.variableArities = [
            false,
          ];
          obj1614.methods["face"] = func1839;
          func1839.definitionLine = 173;
          func1839.definitionModule = "musical";
          var func1873 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1873.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 180
              var string1874 = new GraceString("2d");
              var call1875 = callmethod(var_backingCanvas,"getContext", [1], string1874);
              onSelf = true;
              var call1876 = callmethod(this, "draw", [1], call1875);
              return call1876
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1873.paramCounts = [
            0,
          ];
          func1873.variableArities = [
            false,
          ];
          obj1614.methods["stamp"] = func1873;
          func1873.definitionLine = 179;
          func1873.definitionModule = "musical";
          sourceObject = obj1614;
          lineNumber = 50
          var call1877 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1878 = callmethod(call1877, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1879 = callmethod(call1878, "initialise", [0]);
          sourceObject = obj1614;
          lineNumber = 51
          var call1880 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1614;
          lineNumber = 53
          lineNumber = 52
          var_above = this;
          sourceObject = obj1614;
          lineNumber = 54
          lineNumber = 53
          var___916__ = this;
          sourceObject = obj1614;
          lineNumber = 54
          var call1881 = callmethod(var_collections,"list", [0]);
          var call1882 = callmethod(call1881,"new", [0]);
          obj1614.data["alwaysBlocks"] = call1882;
          var reader_musical_alwaysBlocks_1883 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1883.def = true;
          reader_musical_alwaysBlocks_1883.confidential = true;
          obj1614.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1883;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1882)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1614;
          lineNumber = 56
          lineNumber = 55
          var quotient1886 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1614.data["x"] = quotient1886;
          var reader_musical_x_1887 = function() {
            return this.data["x"];
          }
          obj1614.methods["x"] = reader_musical_x_1887;
          obj1614.data["x"] = quotient1886;
          var writer_musical_x_1887 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1614.methods["x:="] = writer_musical_x_1887;
          writer_musical_x_1887.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1886)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 57
          lineNumber = 56
          var quotient1890 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1614.data["y"] = quotient1890;
          var reader_musical_y_1891 = function() {
            return this.data["y"];
          }
          obj1614.methods["y"] = reader_musical_y_1891;
          obj1614.data["y"] = quotient1890;
          var writer_musical_y_1891 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1614.methods["y:="] = writer_musical_y_1891;
          writer_musical_y_1891.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1890)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 57
          onSelf = true;
          var call1892 = callmethod(this, "x", [0]);
          obj1614.data["destX"] = call1892;
          var reader_musical_destX_1893 = function() {
            return this.data["destX"];
          }
          obj1614.methods["destX"] = reader_musical_destX_1893;
          obj1614.data["destX"] = call1892;
          var writer_musical_destX_1893 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1614.methods["destX:="] = writer_musical_destX_1893;
          reader_musical_destX_1893.confidential = true;
          writer_musical_destX_1893.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1892)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 58
          onSelf = true;
          var call1894 = callmethod(this, "y", [0]);
          obj1614.data["destY"] = call1894;
          var reader_musical_destY_1895 = function() {
            return this.data["destY"];
          }
          obj1614.methods["destY"] = reader_musical_destY_1895;
          obj1614.data["destY"] = call1894;
          var writer_musical_destY_1895 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1614.methods["destY:="] = writer_musical_destY_1895;
          reader_musical_destY_1895.confidential = true;
          writer_musical_destY_1895.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1894)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 59
          obj1614.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1896 = function() {
            return this.data["angle"];
          }
          obj1614.methods["angle"] = reader_musical_angle_1896;
          obj1614.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1896 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1614.methods["angle:="] = writer_musical_angle_1896;
          reader_musical_angle_1896.confidential = true;
          writer_musical_angle_1896.confidential = true;
          lineNumber = 60;
          moduleName = "musical";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          sourceObject = obj1614;
          superDepth = origSuperDepth;
        }
        obj_init_1614.apply(inheritingObject, []);
        return obj1614
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1327.methods["new()object"] = func1613;
    var func1897 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 49
        var string1898 = new GraceString("class drawable");
        return string1898
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1897.paramCounts = [
    ];
    func1897.variableArities = [
    ];
    obj1327.methods["asDebugString"] = func1897;
    func1897.definitionLine = 49;
    func1897.definitionModule = "musical";
    sourceObject = obj1327;
    sourceObject = obj1327;
    superDepth = origSuperDepth;
  }
  obj_init_1327.apply(obj1327, []);
  var var_drawable = obj1327;
  lineNumber = 184
  lineNumber = 221
  lineNumber = 257
  lineNumber = 300
  lineNumber = 317
  var obj1899 = Grace_allocObject();
  obj1899.definitionModule = "musical";
  obj1899.definitionLine = 317;
  obj1899.outer = this;
  var reader_musical_outer_1900 = function() {
    return this.outer;
  }
  obj1899.methods["outer"] = reader_musical_outer_1900;
  function obj_init_1899() {
    var origSuperDepth = superDepth;
    superDepth = obj1899;
    obj1899.annotations = [];
    var func1901 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1901.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 320
        onSelf = true;
        var call1902 = callmethod(this, "position", [0]);
        var call1903 = callmethod(call1902,"x", [0]);
        return call1903
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1901.paramCounts = [
      0,
    ];
    func1901.variableArities = [
      false,
    ];
    obj1899.methods["x"] = func1901;
    func1901.definitionLine = 319;
    func1901.definitionModule = "musical";
    var func1904 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1904.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 323
        onSelf = true;
        var call1905 = callmethod(this, "position", [0]);
        var call1906 = callmethod(call1905,"y", [0]);
        return call1906
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1904.paramCounts = [
      0,
    ];
    func1904.variableArities = [
      false,
    ];
    obj1899.methods["y"] = func1904;
    func1904.definitionLine = 322;
    func1904.definitionModule = "musical";
    var func1907 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1907.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 326
        onSelf = true;
        var call1908 = callmethod(this, "position", [0]);
        return call1908
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1907.paramCounts = [
      0,
    ];
    func1907.variableArities = [
      false,
    ];
    obj1899.methods["location"] = func1907;
    func1907.definitionLine = 325;
    func1907.definitionModule = "musical";
    sourceObject = obj1899;
    lineNumber = 318
    var call1909 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1899.data["position"] = call1909;
    var reader_musical_position_1910 = function() {
      return this.data["position"];
    }
    obj1899.methods["position"] = reader_musical_position_1910;
    obj1899.data["position"] = call1909;
    var writer_musical_position_1910 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1899.methods["position:="] = writer_musical_position_1910;
    lineNumber = 318;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1909)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1899.mutable = true;
    sourceObject = obj1899;
    sourceObject = obj1899;
    sourceObject = obj1899;
    superDepth = origSuperDepth;
  }
  obj_init_1899.apply(obj1899, []);
  var var_mouse = obj1899;
  lineNumber = 323
  var func1911 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1911.paramCounts[0])
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
  func1911.paramCounts = [
    0,
  ];
  func1911.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1911;
  func1911.definitionLine = 323;
  func1911.definitionModule = "musical";
  lineNumber = 317;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 330
  lineNumber = 410
  lineNumber = 473
  lineNumber = 515
  var var_octave = new GraceNum(4);
  lineNumber = 323
  var func1912 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1912.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 515
      return var_octave
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1912.paramCounts = [
    0,
  ];
  func1912.variableArities = [
    false,
  ];
  this.methods["octave"] = func1912;
  func1912.definitionLine = 323;
  func1912.definitionModule = "musical";
  lineNumber = 323
  var func1913 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1913.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_octave = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1913.paramCounts = [
    1,
  ];
  func1913.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1913;
  func1913.definitionLine = 323;
  func1913.definitionModule = "musical";
  lineNumber = 515;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 516
  var string1914 = new GraceString("4n");
  var var_timing = string1914;
  lineNumber = 323
  var func1915 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1915.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (timing)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 516
      return var_timing
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1915.paramCounts = [
    0,
  ];
  func1915.variableArities = [
    false,
  ];
  this.methods["timing"] = func1915;
  func1915.definitionLine = 323;
  func1915.definitionModule = "musical";
  lineNumber = 323
  var func1916 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1916.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (timing:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_timing = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1916.paramCounts = [
    1,
  ];
  func1916.variableArities = [
    false,
  ];
  this.methods["timing:="] = func1916;
  func1916.definitionLine = 323;
  func1916.definitionModule = "musical";
  lineNumber = 516;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_timing)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'timing' to be of type Unknown"))
  lineNumber = 517
  var call1917 = callmethod(new GraceNum(80),"prefix-", [0]);
  var var_volume = call1917;
  lineNumber = 323
  var func1918 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1918.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (volume)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 517
      return var_volume
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1918.paramCounts = [
    0,
  ];
  func1918.variableArities = [
    false,
  ];
  this.methods["volume"] = func1918;
  func1918.definitionLine = 323;
  func1918.definitionModule = "musical";
  lineNumber = 323
  var func1919 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1919.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (volume:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_volume = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1919.paramCounts = [
    1,
  ];
  func1919.variableArities = [
    false,
  ];
  this.methods["volume:="] = func1919;
  func1919.definitionLine = 323;
  func1919.definitionModule = "musical";
  lineNumber = 517;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_volume)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'volume' to be of type Unknown"))
  lineNumber = 518
  var var_playbackrate = new GraceNum(1);
  lineNumber = 323
  var func1920 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1920.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playbackrate)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 518
      return var_playbackrate
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1920.paramCounts = [
    0,
  ];
  func1920.variableArities = [
    false,
  ];
  this.methods["playbackrate"] = func1920;
  func1920.definitionLine = 323;
  func1920.definitionModule = "musical";
  lineNumber = 323
  var func1921 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1921.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playbackrate:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_playbackrate = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1921.paramCounts = [
    1,
  ];
  func1921.variableArities = [
    false,
  ];
  this.methods["playbackrate:="] = func1921;
  func1921.definitionLine = 323;
  func1921.definitionModule = "musical";
  lineNumber = 518;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_playbackrate)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'playbackrate' to be of type Unknown"))
  lineNumber = 520
  lineNumber = 521
  lineNumber = 520
  var bool1922 = new GraceBoolean(false)
  var var_applyFlat = bool1922;
  lineNumber = 323
  var func1923 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1923.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 520
      return var_applyFlat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1923.paramCounts = [
    0,
  ];
  func1923.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1923;
  func1923.definitionLine = 323;
  func1923.definitionModule = "musical";
  lineNumber = 323
  var func1924 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1924.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_applyFlat = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1924.paramCounts = [
    1,
  ];
  func1924.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1924;
  func1924.definitionLine = 323;
  func1924.definitionModule = "musical";
  lineNumber = 521;
  moduleName = "musical";
  lineNumber = 520
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 523
  lineNumber = 521
  var bool1925 = new GraceBoolean(false)
  var var_applySharp = bool1925;
  lineNumber = 323
  var func1926 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1926.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 521
      return var_applySharp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1926.paramCounts = [
    0,
  ];
  func1926.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1926;
  func1926.definitionLine = 323;
  func1926.definitionModule = "musical";
  lineNumber = 323
  var func1927 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1927.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_applySharp = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1927.paramCounts = [
    1,
  ];
  func1927.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1927;
  func1927.definitionLine = 323;
  func1927.definitionModule = "musical";
  lineNumber = 523;
  moduleName = "musical";
  lineNumber = 521
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 523
  lineNumber = 524
  lineNumber = 523
  var bool1928 = new GraceBoolean(false)
  var var_applyChorus = bool1928;
  lineNumber = 323
  var func1929 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1929.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 523
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1929.paramCounts = [
    0,
  ];
  func1929.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1929;
  func1929.definitionLine = 323;
  func1929.definitionModule = "musical";
  lineNumber = 323
  var func1930 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1930.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_applyChorus = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1930.paramCounts = [
    1,
  ];
  func1930.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1930;
  func1930.definitionLine = 323;
  func1930.definitionModule = "musical";
  lineNumber = 524;
  moduleName = "musical";
  lineNumber = 523
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 525
  lineNumber = 524
  var bool1931 = new GraceBoolean(false)
  var var_applyReverb = bool1931;
  lineNumber = 323
  var func1932 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1932.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 524
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1932.paramCounts = [
    0,
  ];
  func1932.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1932;
  func1932.definitionLine = 323;
  func1932.definitionModule = "musical";
  lineNumber = 323
  var func1933 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1933.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_applyReverb = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1933.paramCounts = [
    1,
  ];
  func1933.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1933;
  func1933.definitionLine = 323;
  func1933.definitionModule = "musical";
  lineNumber = 525;
  moduleName = "musical";
  lineNumber = 524
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 526
  lineNumber = 525
  var bool1934 = new GraceBoolean(false)
  var var_applyAutowah = bool1934;
  lineNumber = 323
  var func1935 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1935.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 525
      return var_applyAutowah
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1935.paramCounts = [
    0,
  ];
  func1935.variableArities = [
    false,
  ];
  this.methods["applyAutowah"] = func1935;
  func1935.definitionLine = 323;
  func1935.definitionModule = "musical";
  lineNumber = 323
  var func1936 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1936.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_applyAutowah = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1936.paramCounts = [
    1,
  ];
  func1936.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1936;
  func1936.definitionLine = 323;
  func1936.definitionModule = "musical";
  lineNumber = 526;
  moduleName = "musical";
  lineNumber = 525
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 528
  lineNumber = 526
  var bool1937 = new GraceBoolean(false)
  var var_applyCheby = bool1937;
  lineNumber = 323
  var func1938 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1938.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 526
      return var_applyCheby
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1938.paramCounts = [
    0,
  ];
  func1938.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1938;
  func1938.definitionLine = 323;
  func1938.definitionModule = "musical";
  lineNumber = 323
  var func1939 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1939.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_applyCheby = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1939.paramCounts = [
    1,
  ];
  func1939.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1939;
  func1939.definitionLine = 323;
  func1939.definitionModule = "musical";
  lineNumber = 528;
  moduleName = "musical";
  lineNumber = 526
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 528
  lineNumber = 533
  lineNumber = 528
  var bool1940 = new GraceBoolean(true)
  var var_firstPass = bool1940;
  lineNumber = 323
  var func1941 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1941.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 528
      return var_firstPass
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1941.paramCounts = [
    0,
  ];
  func1941.variableArities = [
    false,
  ];
  this.methods["firstPass"] = func1941;
  func1941.definitionLine = 323;
  func1941.definitionModule = "musical";
  lineNumber = 323
  var func1942 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1942.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_firstPass = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1942.paramCounts = [
    1,
  ];
  func1942.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1942;
  func1942.definitionLine = 323;
  func1942.definitionModule = "musical";
  lineNumber = 533;
  moduleName = "musical";
  lineNumber = 528
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 533
  lineNumber = 567
  lineNumber = 643
  lineNumber = 654
  lineNumber = 661
  lineNumber = 672
  lineNumber = 681
  lineNumber = 686
  lineNumber = 691
  lineNumber = 696
  lineNumber = 701
  lineNumber = 706
  lineNumber = 711
  lineNumber = 722
  lineNumber = 739
  lineNumber = 745
  lineNumber = 751
  lineNumber = 757
  lineNumber = 765
  lineNumber = 769
  lineNumber = 780
  lineNumber = 788
  lineNumber = 792
  lineNumber = 796
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "modules:\n StandardPrelude\n mgcollections\nfresh-methods:\n rectangle\n circle\n image\n value\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n timing\n timing:=\n volume\n volume:=\n playbackrate\n playbackrate:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n while()do\n C\n D\n E\n F\n G\n A\n B\n Rest\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\n PlayBackRatePercentage()on\n Time()on\n quarter\n eighth\n sixteenth\n VolumePercentage()on\nfresh:circle:\n angle:=\n mousedown\n isPointOver\n alwaysBlocks\n destY:=\n touching\n turn\n tick\n draw\n x:=\n x\n y\n moveTo\n jumpTo\n stamp\n angle\n radius\n radius:=\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n step\n destX:=\n bounce\n whenever()do\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\nfresh:rectangle:\n angle:=\n asString\n mousedown\n isPointOver\n alwaysBlocks\n destY:=\n touching\n turn\n tick\n height:=\n draw\n x:=\n width:=\n x\n y\n moveTo\n height\n jumpTo\n width\n stamp\n angle\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n step\n destX:=\n bounce\n whenever()do\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\nmethods-of:point.x()y:\n y\n left\n right\n up\n down\n x\nconstructors-of:point:\n x()y\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n angle:=\n mousedown\n isPointOver\n alwaysBlocks\n destY:=\n touching\n turn\n tick\n draw\n x:=\n label:=\n x\n y\n moveTo\n jumpTo\n label\n stamp\n angle\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n step\n destX:=\n bounce\n whenever()do\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\nconfidential:\nfresh:image:\n angle:=\n mousedown\n isPointOver\n url:=\n alwaysBlocks\n destY:=\n touching\n turn\n tick\n height:=\n draw\n x:=\n width:=\n x\n y\n moveTo\n height\n jumpTo\n width\n stamp\n angle\n face\n bounceFrom\n always\n url\n touchingEdge\n bounceOff\n imgTag\n step\n destX:=\n bounce\n whenever()do\n destX\n destY\n y:=\n normaliseAngle\n forward\nmethods-of:drawable.new:\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n stamp\n angle\n turn\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n step\n destX:=\n destY:=\n touching\n alwaysBlocks\n whenever()do\n destX\n destY\n tick\n draw\n x:=\n y:=\n normaliseAngle\n forward\n bounce\n x\nconstructors-of:drawable:\n new\n";
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
    "def trig = dom.window.Math",
    "def PI = 3.14159",
    "",
    "var stopRunning := false",
    "var initialised := false",
    "var backgroundColour := \"white\"",
    "def registeredObjects = collections.list.new",
    "def stepBlocks = collections.list.new",
    "// def alwaysBlocks = collections.list.new",
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
    "",
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
    "// method always(blocks) {",
    "//     // dom.window.console.log(\"always\")",
    "//     // blocks.apply",
    "//     var count := 0",
    "//     for (blocks) do {b->",
    "//         count := count + 1",
    "//         dom.window.console.log(\"blocks\")",
    "//         dom.window.console.log(count)",
    "//     }",
    "//     // stopRunning := false",
    "//     // dom.while { !stopRunning } waiting 10 do {",
    "//     //     dom.window.console.log(\"dom.while\")",
    "//     //     for (registeredObjects) do {obj->",
    "//     //         dom.window.console.log(\"registeredObjects\")",
    "//     //         obj.step",
    "//     //     }",
    "//     //     for (blocks) do {step->",
    "//     //         dom.window.console.log(\"blocks\");",
    "//     //         step.apply",
    "//     //     }",
    "//     // }",
    "// }",
    "// method whenever(c)do(b) {",
    "//     stepBlocks.push({",
    "//         if (c.apply) then { b.apply }",
    "//     })",
    "// }",
    "method hue(h)saturation(s)lightness(l) {",
    "    return \"hsl({h}, {s}%, {l}%)\"",
    "}",
    "method h(h)s(s)l(l) {",
    "    hue(h)saturation(s)lightness(l)",
    "}",
    "method initialise {",
    "    // dom.window.console.log(\"initialise\")",
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
    "        // if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "        ev.preventDefault",
    "        // stop",
    "        // }",
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
    "",
    "method playSound(url) {",
    "    if (audioTags.contains(url)) then {",
    "        def audio = audioTags.get(url)",
    "        audio.currentTime := 0",
    "        audio.play",
    "    } else {",
    "        def audio = dom.document.createElement \"audio\"",
    "        audioTags.put(url, audio)",
    "        audio.src := url",
    "        audio.load",
    "        audio.play",
    "    }",
    "}",
    "method stopSound(url) {",
    "    if (audioTags.contains(url)) then {",
    "        def audio = audioTags.get(url)",
    "        audio.pause",
    "    }",
    "}",
    "method start {",
    "    initialise",
    "",
    "    stopRunning := false",
    "    backingCanvas := dom.document.createElement(\"canvas\")",
    "    backingCanvas.height := canvasHeight",
    "    backingCanvas.width := canvasWidth",
    "    backingContext := backingCanvas.getContext(\"2d\")",
    "    def mctx = canvas.getContext(\"2d\")",
    "    mctx.fillStyle := backgroundColour",
    "    mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "    mctx.drawImage(backingCanvas, 0, 0)",
    "    dom.while { !stopRunning } waiting 10 do {",
    "        for (registeredObjects) do {obj->",
    "            obj.step",
    "        }",
    "        for (stepBlocks) do {step->",
    "            step.apply",
    "        }",
    "        // mctx.fillStyle := backgroundColour",
    "        // mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        // mctx.drawImage(backingCanvas, 0, 0)",
    "        // for (registeredObjects) do {obj->",
    "        //     obj.draw(mctx)",
    "        // }",
    "        // mctx.fillStyle := \"red\"",
    "        // mctx.fillRect(canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)",
    "    }",
    "    // mctx.fillStyle := \"green\"",
    "    // mctx.fillRect(canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)",
    "",
    "}",
    "method stop {",
    "    stopRunning := true",
    "    // canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    // canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "    //Graceful Music",
    "    dom.window.t_stop();",
    "    dom.window.t_reset();",
    "}",
    "method atModuleEnd(module) {",
    "    start",
    "    //Graceful Music",
    "    dom.window.t_play();",
    "}",
    "",
    "",
    "",
    "// ******************",
    "// * Graceful Music *",
    "// ******************",
    "",
    "// * Improvements",
    "// ******************",
    "",
    "//  - Can I contrain number parameters? For example, from 0 - 100?",
    "//  - Adjust amount of Effect",
    "//  - Stretch Goal: Being able to run individual components - this was noted by Rahul as well",
    "",
    "//DONE: ",
    "//  - rests: this can be accopmlished with null",
    "//  - live editing: adding in and changes happen in realtime if compiler",
    "//  - on delete, don't start playing if not already playing",
    "//  - dialects, checker see if we can check blocks, type checking, in dialect.js",
    "//  - volume/timing",
    "//  - is there a way to get access to data-serialiser-index, this would allow highlighting individual notes",
    "",
    "",
    "//TODO: ",
    "// - look at engineering requirements, sample reports, and evaluation story",
    "// - justify why you're doing these things",
    "// - match scratch music ",
    "// - setting up requirements, 1-6, everything refers back to those goals",
    "// - think about how to structure report to make the case that it's engineering",
    "// - artifact submission in week 9, to resolve any issues",
    "// - mandatatory draft submission between week 7 and week 9",
    "// - solid complete draft by end of week 9",
    "// - week 7 when back",
    "",
    "// * Variables",
    "// ******************",
    "",
    "var octave := 4;",
    "var timing := \"4n\";",
    "var volume := -80;",
    "var playbackrate := 1;",
    "",
    "var applyFlat := false",
    "var applySharp := false",
    "",
    "var applyChorus := false",
    "var applyReverb := false",
    "var applyAutowah := false",
    "var applyCheby := false",
    "",
    "var firstPass := true",
    "",
    "// * Notes",
    "// ******************",
    "",
    "method Note(note,id){",
    "    // dom.window.console.log(note);",
    "    if (applyFlat == true) then {",
    "        dom.window.t_add(\"{note}b{octave}\",id)",
    "        return \"{note}b\"",
    "    }",
    "    if (applySharp == true) then {",
    "        dom.window.t_add(\"{note}#{octave}\",id)",
    "        return \"{note}#\"",
    "    }",
    "    dom.window.t_add(\"{note}{octave}\",id)",
    "    return \"{note}\"",
    "}",
    "",
    "// def alwaysBlocks = collections.list.new",
    "",
    "// method step {",
    "//     for (alwaysBlocks) do {b->",
    "//         b.apply",
    "//     }",
    "//     tick",
    "",
    "// }",
    "// method always(b) {",
    "//     alwaysBlocks.push(b)",
    "// }",
    "// method whenever(cond)do(b) {",
    "//     always {",
    "//         if (cond.apply) then {",
    "//             b.apply",
    "//         }",
    "//     }",
    "// }",
    "",
    "method while(cond)do(b){",
    "    // dom.window.console.log(\"while\");",
    "    // if (cond) then {",
    "    //     b.apply",
    "    // }",
    "    // for (registeredObjects) do {obj->",
    "    //     obj.step",
    "    // }",
    "    // for (stepBlocks) do {step->",
    "    //     step.apply",
    "    // }",
    "",
    "    // for (b) do {step->",
    "    //     dom.window.console.log(step);",
    "    //     step.apply",
    "    // }",
    "        //     for (stepBlocks) do {step->",
    "        //     step.apply",
    "        // }",
    "    // dom.window.console.log(\"HI\");",
    "    // dom.window.console.log(cond);",
    "    // dom.window.console.log(b);",
    "    // while(cond) do {",
    "    //     dom.window.console.log(\"while\")",
    "    //     for (b) do {step->",
    "    //         dom.window.console.log(step);",
    "    //         step.apply",
    "    //     }",
    "    //     cond = false;",
    "    // }",
    "}",
    "",
    "// method always(b) {",
    "//     stepBlocks.push(b)",
    "// }",
    "// method while(c)do(b) {",
    "",
    "",
    "//     dom.window.console.log(c);",
    "//     stepBlocks.push({",
    "//         if (c.apply) then { b.apply }",
    "//     })",
    "// }",
    "",
    "//     method always(b) {",
    "//         alwaysBlocks.push(b)",
    "//     }",
    "//     method whenever(cond)do(b) {",
    "//         always {",
    "//             if (cond.apply) then {",
    "//                 b.apply",
    "//             }",
    "//         }",
    "//     }",
    "",
    "method C(id){",
    "    Note(\"C\",id)",
    "}",
    "method D(id){",
    "    Note(\"D\",id)",
    "}",
    "method E(id){",
    "    Note(\"E\",id)",
    "}",
    "method F(id){",
    "    Note(\"F\",id)",
    "}",
    "method G(id){",
    "    Note(\"G\",id)",
    "}",
    "method A(id){",
    "    Note(\"A\",id)",
    "}",
    "method B(id){",
    "    Note(\"B\",id)",
    "}",
    "method Rest(id){",
    "    dom.window.t_add(\"null\",id)",
    "    return \"Rest\"",
    "}",
    "",
    "method flat(note){",
    "    applyFlat := true",
    "    var ret := note.apply",
    "    applyFlat := false",
    "    return ret ",
    "}",
    "method sharp(note){",
    "    applySharp := true",
    "    var ret := note.apply",
    "    applySharp := false",
    "    return ret",
    "}",
    "",
    "method octave(num)on(notes){",
    "    var oldOctave := octave",
    "    octave := num",
    "    var ret := notes.apply",
    "    octave := oldOctave",
    "    return ret",
    "}",
    "",
    "// * Instruments",
    "// ******************",
    "",
    "method Instrument(blocks){",
    "    if (firstPass == true) then {",
    "        dom.window.t_reset()",
    "        firstPass := false",
    "    }",
    "    dom.window.t_init()",
    "    blocks.apply",
    "}",
    "",
    "method monoSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_mono(timing, volume, playbackrate)",
    "}",
    "",
    "method pluckSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_pluck(timing, volume, playbackrate)",
    "}",
    "",
    "method polySynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_poly(timing, volume, playbackrate)",
    "}",
    "",
    "method fmSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_fm(timing, volume, playbackrate)",
    "}",
    "",
    "method membraneSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_membrane(timing, volume, playbackrate)",
    "}",
    "",
    "method duoSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_duo(timing, volume, playbackrate)",
    "}",
    "",
    "method arpeggio(note){",
    "    if (firstPass == true) then {",
    "        dom.window.t_reset()",
    "        firstPass := false",
    "    }",
    "    dom.window.t_synth_arpeggio(note);",
    "}",
    "",
    "// * Effects",
    "// ******************",
    "",
    "method Effect(blocks){",
    "    if (applyChorus == true) then {",
    "        dom.window.t_effect_chorus()",
    "    }",
    "    if (applyReverb == true) then {",
    "        dom.window.t_effect_reverb()",
    "    }",
    "    if (applyAutowah == true) then {",
    "        dom.window.t_effect_autowah()",
    "    }",
    "    if (applyCheby == true) then {",
    "        dom.window.t_effect_cheby()",
    "    }",
    "    blocks.apply",
    "    dom.window.t_effect_reset()",
    "}",
    "",
    "method Chorus(blocks){",
    "    applyChorus := true",
    "    Effect(blocks)",
    "    applyChorus := false",
    "}",
    "",
    "method Reverb(blocks){",
    "    applyReverb := true",
    "    Effect(blocks)",
    "    applyReverb := false",
    "}",
    "",
    "method Autowah(blocks){",
    "    applyAutowah := true",
    "    Effect(blocks)",
    "    applyAutowah := false",
    "}",
    "",
    "method Cheby(blocks){",
    "    applyCheby := true",
    "    Effect(blocks)",
    "    applyCheby := false",
    "}",
    "",
    "// * Timing",
    "// ******************",
    "method SetBPM(bpm){",
    "    dom.window.t_bpm(bpm);",
    "}",
    "",
    "method PlayBackRatePercentage(rate)on(blocks){",
    "    var oldRate := playbackrate",
    "    ",
    "    playbackrate := rate / 100",
    " ",
    "    var ret := blocks.apply",
    "    playbackrate := oldRate",
    "    return ret",
    "}",
    "",
    "// Removed these methods from project for now, did not feel right",
    "method Time(t)on(blocks){",
    "    var oldTiming := timing",
    "    timing := t",
    "    var ret := blocks.apply",
    "    timing := oldTiming",
    "    return ret",
    "}",
    "",
    "method quarter(){",
    "    return \"4n\"",
    "}",
    "",
    "method eighth(){",
    "    return \"8n\"",
    "}",
    "",
    "method sixteenth(){",
    "    return \"16n\"",
    "}",
    "",
    "// * Volume",
    "// ******************",
    "method VolumePercentage(v)on(blocks){",
    "    var oldVolume := volume",
    "    // dom.window.console.log()",
    "    // volume := -v;",
    "",
    "    var c := v",
    "",
    "    if (v > 100) then {",
    "        c := 100",
    "    }",
    "",
    "",
    "",
    "    volume := (100-c) / 100 * 80 * -1",
    "    dom.window.console.log(volume)",
    "    // volume := volume * (v / 100)",
    "",
    "    // //constrain max volume",
    "    // if(v > 100) then {",
    "    //     //max volume: 0dB",
    "    //     volume := 0 ",
    "    // } else {",
    "    //     //constrain dB between -50 and 0",
    "    //     volume := -80 + (v/100)*50        ",
    "    // }",
    " ",
    "    var ret := blocks.apply",
    "    volume := oldVolume",
    "    return ret",
    "}",
    "",
    "",
    "",
  ];
}
