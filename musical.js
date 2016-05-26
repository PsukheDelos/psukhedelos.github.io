function gracecode_musical () {
  this.definitionModule = "musical";
  this.definitionLine = 0;
  lineNumber = 182
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rectangle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 183
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "musical";
      obj1.definitionLine = 183;
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
            lineNumber = 190
            lineNumber = 1
            lineNumber = 189
            onSelf = true;
            var call4 = callmethod(this, "colour", [0]);
            var call5 = callmethod(var_ctx,"fillStyle:=", [1], call4);
            lineNumber = 190
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
        func3.definitionLine = 188;
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
            lineNumber = 196
            var if26 = var_done;
            lineNumber = 193
            onSelf = true;
            var call28 = callmethod(this, "width", [0]);
            var quotient30 = callmethod(call28, "/", [1], new GraceNum(2));
            onSelf = true;
            var call32 = callmethod(this, "x", [0]);
            var diff34 = callmethod(call32, "-", [1], quotient30);
            var call36 = callmethod(var_p,"x", [0]);
            var opresult38 = callmethod(call36, "<", [1], diff34);
            if (Grace_isTrue(opresult38)) {
              lineNumber = 195
              lineNumber = 194
              var bool39 = new GraceBoolean(false)
              return bool39
            }
            lineNumber = 199
            var if40 = var_done;
            lineNumber = 196
            onSelf = true;
            var call42 = callmethod(this, "width", [0]);
            var quotient44 = callmethod(call42, "/", [1], new GraceNum(2));
            onSelf = true;
            var call46 = callmethod(this, "x", [0]);
            var opresult48 = callmethod(call46, "+", [1], quotient44);
            var call50 = callmethod(var_p,"x", [0]);
            var opresult52 = callmethod(call50, ">", [1], opresult48);
            if (Grace_isTrue(opresult52)) {
              lineNumber = 198
              lineNumber = 197
              var bool53 = new GraceBoolean(false)
              return bool53
            }
            lineNumber = 202
            var if54 = var_done;
            lineNumber = 199
            onSelf = true;
            var call56 = callmethod(this, "height", [0]);
            var quotient58 = callmethod(call56, "/", [1], new GraceNum(2));
            onSelf = true;
            var call60 = callmethod(this, "y", [0]);
            var diff62 = callmethod(call60, "-", [1], quotient58);
            var call64 = callmethod(var_p,"y", [0]);
            var opresult66 = callmethod(call64, "<", [1], diff62);
            if (Grace_isTrue(opresult66)) {
              lineNumber = 201
              lineNumber = 200
              var bool67 = new GraceBoolean(false)
              return bool67
            }
            lineNumber = 205
            var if68 = var_done;
            lineNumber = 202
            onSelf = true;
            var call70 = callmethod(this, "height", [0]);
            var quotient72 = callmethod(call70, "/", [1], new GraceNum(2));
            onSelf = true;
            var call74 = callmethod(this, "y", [0]);
            var opresult76 = callmethod(call74, "+", [1], quotient72);
            var call78 = callmethod(var_p,"y", [0]);
            var opresult80 = callmethod(call78, ">", [1], opresult76);
            if (Grace_isTrue(opresult80)) {
              lineNumber = 204
              lineNumber = 203
              var bool81 = new GraceBoolean(false)
              return bool81
            }
            lineNumber = 206
            lineNumber = 205
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
        func25.definitionLine = 192;
        func25.definitionModule = "musical";
        var func83 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func83.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 209
            lineNumber = 208
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
        func83.definitionLine = 207;
        func83.definitionModule = "musical";
        sourceObject = obj1;
        lineNumber = 184
        var call85 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj1.superobj = call85;
        obj1._value = call85._value;
        sourceObject = obj1;
        lineNumber = 185
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
        lineNumber = 186;
        moduleName = "musical";
        lineNumber = 185
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 186
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
        lineNumber = 187;
        moduleName = "musical";
        lineNumber = 186
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 187
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
        lineNumber = 188;
        moduleName = "musical";
        lineNumber = 187
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
  func0.definitionLine = 182;
  func0.definitionModule = "musical";
  var func90 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj91 = Grace_allocObject();
      obj91.definitionModule = "musical";
      obj91.definitionLine = 183;
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
            lineNumber = 190
            lineNumber = 202
            lineNumber = 189
            onSelf = true;
            var call94 = callmethod(this, "colour", [0]);
            var call95 = callmethod(var_ctx,"fillStyle:=", [1], call94);
            lineNumber = 190
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
        func93.definitionLine = 188;
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
            lineNumber = 196
            var if116 = var_done;
            lineNumber = 193
            onSelf = true;
            var call118 = callmethod(this, "width", [0]);
            var quotient120 = callmethod(call118, "/", [1], new GraceNum(2));
            onSelf = true;
            var call122 = callmethod(this, "x", [0]);
            var diff124 = callmethod(call122, "-", [1], quotient120);
            var call126 = callmethod(var_p,"x", [0]);
            var opresult128 = callmethod(call126, "<", [1], diff124);
            if (Grace_isTrue(opresult128)) {
              lineNumber = 195
              lineNumber = 194
              var bool129 = new GraceBoolean(false)
              return bool129
            }
            lineNumber = 199
            var if130 = var_done;
            lineNumber = 196
            onSelf = true;
            var call132 = callmethod(this, "width", [0]);
            var quotient134 = callmethod(call132, "/", [1], new GraceNum(2));
            onSelf = true;
            var call136 = callmethod(this, "x", [0]);
            var opresult138 = callmethod(call136, "+", [1], quotient134);
            var call140 = callmethod(var_p,"x", [0]);
            var opresult142 = callmethod(call140, ">", [1], opresult138);
            if (Grace_isTrue(opresult142)) {
              lineNumber = 198
              lineNumber = 197
              var bool143 = new GraceBoolean(false)
              return bool143
            }
            lineNumber = 202
            var if144 = var_done;
            lineNumber = 199
            onSelf = true;
            var call146 = callmethod(this, "height", [0]);
            var quotient148 = callmethod(call146, "/", [1], new GraceNum(2));
            onSelf = true;
            var call150 = callmethod(this, "y", [0]);
            var diff152 = callmethod(call150, "-", [1], quotient148);
            var call154 = callmethod(var_p,"y", [0]);
            var opresult156 = callmethod(call154, "<", [1], diff152);
            if (Grace_isTrue(opresult156)) {
              lineNumber = 201
              lineNumber = 200
              var bool157 = new GraceBoolean(false)
              return bool157
            }
            lineNumber = 205
            var if158 = var_done;
            lineNumber = 202
            onSelf = true;
            var call160 = callmethod(this, "height", [0]);
            var quotient162 = callmethod(call160, "/", [1], new GraceNum(2));
            onSelf = true;
            var call164 = callmethod(this, "y", [0]);
            var opresult166 = callmethod(call164, "+", [1], quotient162);
            var call168 = callmethod(var_p,"y", [0]);
            var opresult170 = callmethod(call168, ">", [1], opresult166);
            if (Grace_isTrue(opresult170)) {
              lineNumber = 204
              lineNumber = 203
              var bool171 = new GraceBoolean(false)
              return bool171
            }
            lineNumber = 206
            lineNumber = 205
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
        func115.definitionLine = 192;
        func115.definitionModule = "musical";
        var func173 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func173.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 209
            lineNumber = 208
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
        func173.definitionLine = 207;
        func173.definitionModule = "musical";
        sourceObject = obj91;
        lineNumber = 184
        var call175 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj91.superobj = call175;
        obj91._value = call175._value;
        sourceObject = obj91;
        lineNumber = 185
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
        lineNumber = 186;
        moduleName = "musical";
        lineNumber = 185
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 186
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
        lineNumber = 187;
        moduleName = "musical";
        lineNumber = 186
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 187
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
        lineNumber = 188;
        moduleName = "musical";
        lineNumber = 187
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
  lineNumber = 219
  var type180 = new GraceType("SniffCircle");
  var var_SniffCircle = type180;
  type180.typeMethods.push("x");
  type180.typeMethods.push("y");
  type180.typeMethods.push("radius");
  type180.typeMethods.push("colour");
  lineNumber = 202
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
  func181.definitionLine = 202;
  func181.definitionModule = "musical";
  var type_SniffCircle = var_SniffCircle;
  lineNumber = 219
  var func182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func182.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (circle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 220
      var obj183 = Grace_allocObject();
      obj183.definitionModule = "musical";
      obj183.definitionLine = 220;
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
            lineNumber = 226
            lineNumber = 202
            lineNumber = 225
            onSelf = true;
            var call186 = callmethod(this, "colour", [0]);
            var call187 = callmethod(var_ctx,"fillStyle:=", [1], call186);
            lineNumber = 226
            var call188 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 227
            onSelf = true;
            var call189 = callmethod(this, "x", [0]);
            onSelf = true;
            var call190 = callmethod(this, "y", [0]);
            onSelf = true;
            var call191 = callmethod(this, "radius", [0]);
            var call192 = callmethod(var_ctx,"arc", [5], call189, call190, call191, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 228
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
        func185.definitionLine = 224;
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
            lineNumber = 232
            lineNumber = 231
            onSelf = true;
            var call195 = callmethod(this, "x", [0]);
            var call197 = callmethod(var_p,"x", [0]);
            var diff199 = callmethod(call197, "-", [1], call195);
            var var_dx = diff199;
            lineNumber = 232;
            moduleName = "musical";
            lineNumber = 231
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 233
            lineNumber = 232
            onSelf = true;
            var call200 = callmethod(this, "y", [0]);
            var call202 = callmethod(var_p,"y", [0]);
            var diff204 = callmethod(call202, "-", [1], call200);
            var var_dy = diff204;
            lineNumber = 233;
            moduleName = "musical";
            lineNumber = 232
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 234
            lineNumber = 233
            var prod208 = callmethod(var_dy, "*", [1], var_dy);
            var prod212 = callmethod(var_dx, "*", [1], var_dx);
            var opresult214 = callmethod(prod212, "+", [1], prod208);
            var opresult216 = callmethod(opresult214, "^", [1], new GraceNum(0.5));
            var var_dist = opresult216;
            lineNumber = 234;
            moduleName = "musical";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 237
            var if217 = var_done;
            lineNumber = 234
            onSelf = true;
            var call218 = callmethod(this, "radius", [0]);
            var opresult221 = callmethod(var_dist, "<=", [1], call218);
            if (Grace_isTrue(opresult221)) {
              lineNumber = 236
              lineNumber = 235
              var bool222 = new GraceBoolean(true)
              return bool222
            }
            lineNumber = 238
            lineNumber = 237
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
        func194.definitionLine = 230;
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
            lineNumber = 250
            var if225 = var_done;
            lineNumber = 240
            var call226 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call226)) {
              lineNumber = 242
              lineNumber = 241
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
              lineNumber = 242;
              moduleName = "musical";
              lineNumber = 241
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 245
              var if246 = var_done;
              lineNumber = 242
              var opresult249 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult249)) {
                lineNumber = 244
                lineNumber = 243
                var bool250 = new GraceBoolean(true)
                return bool250
              }
              lineNumber = 248
              var if251 = var_done;
              lineNumber = 245
              onSelf = true;
              var call252 = callmethod(this, "radius", [0]);
              var call254 = callmethod(var_other,"radius", [0]);
              var opresult256 = callmethod(call254, "+", [1], call252);
              var opresult260 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult262 = callmethod(opresult260, "<", [1], opresult256);
              if (Grace_isTrue(opresult262)) {
                lineNumber = 247
                lineNumber = 246
                var bool263 = new GraceBoolean(true)
                return bool263
              }
              lineNumber = 249
              lineNumber = 248
              var bool264 = new GraceBoolean(false)
              return bool264
            }
            lineNumber = 250
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
        func224.definitionLine = 239;
        func224.definitionModule = "musical";
        sourceObject = obj183;
        lineNumber = 221
        var call266 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj183.superobj = call266;
        obj183._value = call266._value;
        sourceObject = obj183;
        lineNumber = 222
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
        lineNumber = 223;
        moduleName = "musical";
        lineNumber = 222
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        lineNumber = 223
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
        lineNumber = 224;
        moduleName = "musical";
        lineNumber = 223
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
  func182.definitionLine = 219;
  func182.definitionModule = "musical";
  var func270 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj271 = Grace_allocObject();
      obj271.definitionModule = "musical";
      obj271.definitionLine = 220;
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
            lineNumber = 226
            lineNumber = 245
            lineNumber = 225
            onSelf = true;
            var call274 = callmethod(this, "colour", [0]);
            var call275 = callmethod(var_ctx,"fillStyle:=", [1], call274);
            lineNumber = 226
            var call276 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 227
            onSelf = true;
            var call277 = callmethod(this, "x", [0]);
            onSelf = true;
            var call278 = callmethod(this, "y", [0]);
            onSelf = true;
            var call279 = callmethod(this, "radius", [0]);
            var call280 = callmethod(var_ctx,"arc", [5], call277, call278, call279, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 228
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
        func273.definitionLine = 224;
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
            lineNumber = 232
            lineNumber = 231
            onSelf = true;
            var call283 = callmethod(this, "x", [0]);
            var call285 = callmethod(var_p,"x", [0]);
            var diff287 = callmethod(call285, "-", [1], call283);
            var var_dx = diff287;
            lineNumber = 232;
            moduleName = "musical";
            lineNumber = 231
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 233
            lineNumber = 232
            onSelf = true;
            var call288 = callmethod(this, "y", [0]);
            var call290 = callmethod(var_p,"y", [0]);
            var diff292 = callmethod(call290, "-", [1], call288);
            var var_dy = diff292;
            lineNumber = 233;
            moduleName = "musical";
            lineNumber = 232
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 234
            lineNumber = 233
            var prod296 = callmethod(var_dy, "*", [1], var_dy);
            var prod300 = callmethod(var_dx, "*", [1], var_dx);
            var opresult302 = callmethod(prod300, "+", [1], prod296);
            var opresult304 = callmethod(opresult302, "^", [1], new GraceNum(0.5));
            var var_dist = opresult304;
            lineNumber = 234;
            moduleName = "musical";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 237
            var if305 = var_done;
            lineNumber = 234
            onSelf = true;
            var call306 = callmethod(this, "radius", [0]);
            var opresult309 = callmethod(var_dist, "<=", [1], call306);
            if (Grace_isTrue(opresult309)) {
              lineNumber = 236
              lineNumber = 235
              var bool310 = new GraceBoolean(true)
              return bool310
            }
            lineNumber = 238
            lineNumber = 237
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
        func282.definitionLine = 230;
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
            lineNumber = 250
            var if313 = var_done;
            lineNumber = 240
            var call314 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call314)) {
              lineNumber = 242
              lineNumber = 241
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
              lineNumber = 242;
              moduleName = "musical";
              lineNumber = 241
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 245
              var if334 = var_done;
              lineNumber = 242
              var opresult337 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult337)) {
                lineNumber = 244
                lineNumber = 243
                var bool338 = new GraceBoolean(true)
                return bool338
              }
              lineNumber = 248
              var if339 = var_done;
              lineNumber = 245
              onSelf = true;
              var call340 = callmethod(this, "radius", [0]);
              var call342 = callmethod(var_other,"radius", [0]);
              var opresult344 = callmethod(call342, "+", [1], call340);
              var opresult348 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult350 = callmethod(opresult348, "<", [1], opresult344);
              if (Grace_isTrue(opresult350)) {
                lineNumber = 247
                lineNumber = 246
                var bool351 = new GraceBoolean(true)
                return bool351
              }
              lineNumber = 249
              lineNumber = 248
              var bool352 = new GraceBoolean(false)
              return bool352
            }
            lineNumber = 250
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
        func312.definitionLine = 239;
        func312.definitionModule = "musical";
        sourceObject = obj271;
        lineNumber = 221
        var call354 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj271.superobj = call354;
        obj271._value = call354._value;
        sourceObject = obj271;
        lineNumber = 222
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
        lineNumber = 223;
        moduleName = "musical";
        lineNumber = 222
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        lineNumber = 223
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
        lineNumber = 224;
        moduleName = "musical";
        lineNumber = 223
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
  lineNumber = 255
  var func358 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func358.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 256
      var obj359 = Grace_allocObject();
      obj359.definitionModule = "musical";
      obj359.definitionLine = 256;
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
            lineNumber = 262
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
        func361.definitionLine = 261;
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
            lineNumber = 266
            lineNumber = 262
            lineNumber = 265
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
        func364.definitionLine = 264;
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
            lineNumber = 268
            var call368 = callmethod(var_ctx,"save", [0]);
            lineNumber = 269
            onSelf = true;
            var call369 = callmethod(this, "x", [0]);
            onSelf = true;
            var call370 = callmethod(this, "y", [0]);
            var call371 = callmethod(var_ctx,"translate", [2], call369, call370);
            lineNumber = 270
            onSelf = true;
            var call375 = callmethod(this, "angle", [0]);
            var opresult377 = callmethod(call375, "+", [1], new GraceNum(180));
            var call378 = callmethod(opresult377,"prefix-", [0]);
            var quotient380 = callmethod(call378, "/", [1], new GraceNum(180));
            var prod382 = callmethod(quotient380, "*", [1], new GraceNum(3.1415));
            var call383 = callmethod(var_ctx,"rotate", [1], prod382);
            lineNumber = 271
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
            lineNumber = 272
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
        func367.definitionLine = 267;
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
            lineNumber = 277
            onSelf = true;
            var call403 = callmethod(this, "angle", [0]);
            var opresult405 = callmethod(call403, "+", [1], new GraceNum(180));
            var call406 = callmethod(opresult405,"prefix-", [0]);
            var quotient408 = callmethod(call406, "/", [1], new GraceNum(180));
            var prod410 = callmethod(quotient408, "*", [1], new GraceNum(3.1415));
            var call411 = callmethod(var_trig,"cos", [1], prod410);
            var var_c = call411;
            lineNumber = 277;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 278
            onSelf = true;
            var call415 = callmethod(this, "angle", [0]);
            var opresult417 = callmethod(call415, "+", [1], new GraceNum(180));
            var call418 = callmethod(opresult417,"prefix-", [0]);
            var quotient420 = callmethod(call418, "/", [1], new GraceNum(180));
            var prod422 = callmethod(quotient420, "*", [1], new GraceNum(3.1415));
            var call423 = callmethod(var_trig,"sin", [1], prod422);
            var var_s = call423;
            lineNumber = 278;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 280
            lineNumber = 279
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
            lineNumber = 280;
            moduleName = "musical";
            lineNumber = 279
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 281
            lineNumber = 280
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
            lineNumber = 281;
            moduleName = "musical";
            lineNumber = 280
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 284
            var if462 = var_done;
            lineNumber = 281
            onSelf = true;
            var call464 = callmethod(this, "width", [0]);
            var call465 = callmethod(call464,"prefix-", [0]);
            var quotient467 = callmethod(call465, "/", [1], new GraceNum(2));
            var opresult470 = callmethod(var_rotatedX, "<", [1], quotient467);
            if (Grace_isTrue(opresult470)) {
              lineNumber = 283
              lineNumber = 282
              var bool471 = new GraceBoolean(false)
              return bool471
            }
            lineNumber = 287
            var if472 = var_done;
            lineNumber = 284
            onSelf = true;
            var call474 = callmethod(this, "width", [0]);
            var quotient476 = callmethod(call474, "/", [1], new GraceNum(2));
            var opresult479 = callmethod(var_rotatedX, ">", [1], quotient476);
            if (Grace_isTrue(opresult479)) {
              lineNumber = 286
              lineNumber = 285
              var bool480 = new GraceBoolean(false)
              return bool480
            }
            lineNumber = 290
            var if481 = var_done;
            lineNumber = 287
            onSelf = true;
            var call483 = callmethod(this, "height", [0]);
            var call484 = callmethod(call483,"prefix-", [0]);
            var quotient486 = callmethod(call484, "/", [1], new GraceNum(2));
            var opresult489 = callmethod(var_rotatedY, "<", [1], quotient486);
            if (Grace_isTrue(opresult489)) {
              lineNumber = 289
              lineNumber = 288
              var bool490 = new GraceBoolean(false)
              return bool490
            }
            lineNumber = 293
            var if491 = var_done;
            lineNumber = 290
            onSelf = true;
            var call493 = callmethod(this, "height", [0]);
            var quotient495 = callmethod(call493, "/", [1], new GraceNum(2));
            var opresult498 = callmethod(var_rotatedY, ">", [1], quotient495);
            if (Grace_isTrue(opresult498)) {
              lineNumber = 292
              lineNumber = 291
              var bool499 = new GraceBoolean(false)
              return bool499
            }
            lineNumber = 294
            lineNumber = 293
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
        func399.definitionLine = 274;
        func399.definitionModule = "musical";
        sourceObject = obj359;
        lineNumber = 257
        var call501 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj359.superobj = call501;
        obj359._value = call501._value;
        sourceObject = obj359;
        lineNumber = 258
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
        lineNumber = 259;
        moduleName = "musical";
        lineNumber = 258
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 259
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
        lineNumber = 260;
        moduleName = "musical";
        lineNumber = 259
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 260
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
        lineNumber = 260;
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
  func358.definitionLine = 255;
  func358.definitionModule = "musical";
  var func508 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj509 = Grace_allocObject();
      obj509.definitionModule = "musical";
      obj509.definitionLine = 256;
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
            lineNumber = 262
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
        func511.definitionLine = 261;
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
            lineNumber = 266
            lineNumber = 262
            lineNumber = 265
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
        func514.definitionLine = 264;
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
            lineNumber = 268
            var call518 = callmethod(var_ctx,"save", [0]);
            lineNumber = 269
            onSelf = true;
            var call519 = callmethod(this, "x", [0]);
            onSelf = true;
            var call520 = callmethod(this, "y", [0]);
            var call521 = callmethod(var_ctx,"translate", [2], call519, call520);
            lineNumber = 270
            onSelf = true;
            var call525 = callmethod(this, "angle", [0]);
            var opresult527 = callmethod(call525, "+", [1], new GraceNum(180));
            var call528 = callmethod(opresult527,"prefix-", [0]);
            var quotient530 = callmethod(call528, "/", [1], new GraceNum(180));
            var prod532 = callmethod(quotient530, "*", [1], new GraceNum(3.1415));
            var call533 = callmethod(var_ctx,"rotate", [1], prod532);
            lineNumber = 271
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
            lineNumber = 272
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
        func517.definitionLine = 267;
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
            lineNumber = 277
            onSelf = true;
            var call553 = callmethod(this, "angle", [0]);
            var opresult555 = callmethod(call553, "+", [1], new GraceNum(180));
            var call556 = callmethod(opresult555,"prefix-", [0]);
            var quotient558 = callmethod(call556, "/", [1], new GraceNum(180));
            var prod560 = callmethod(quotient558, "*", [1], new GraceNum(3.1415));
            var call561 = callmethod(var_trig,"cos", [1], prod560);
            var var_c = call561;
            lineNumber = 277;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 278
            onSelf = true;
            var call565 = callmethod(this, "angle", [0]);
            var opresult567 = callmethod(call565, "+", [1], new GraceNum(180));
            var call568 = callmethod(opresult567,"prefix-", [0]);
            var quotient570 = callmethod(call568, "/", [1], new GraceNum(180));
            var prod572 = callmethod(quotient570, "*", [1], new GraceNum(3.1415));
            var call573 = callmethod(var_trig,"sin", [1], prod572);
            var var_s = call573;
            lineNumber = 278;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 280
            lineNumber = 279
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
            lineNumber = 280;
            moduleName = "musical";
            lineNumber = 279
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 281
            lineNumber = 280
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
            lineNumber = 281;
            moduleName = "musical";
            lineNumber = 280
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 284
            var if612 = var_done;
            lineNumber = 281
            onSelf = true;
            var call614 = callmethod(this, "width", [0]);
            var call615 = callmethod(call614,"prefix-", [0]);
            var quotient617 = callmethod(call615, "/", [1], new GraceNum(2));
            var opresult620 = callmethod(var_rotatedX, "<", [1], quotient617);
            if (Grace_isTrue(opresult620)) {
              lineNumber = 283
              lineNumber = 282
              var bool621 = new GraceBoolean(false)
              return bool621
            }
            lineNumber = 287
            var if622 = var_done;
            lineNumber = 284
            onSelf = true;
            var call624 = callmethod(this, "width", [0]);
            var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
            var opresult629 = callmethod(var_rotatedX, ">", [1], quotient626);
            if (Grace_isTrue(opresult629)) {
              lineNumber = 286
              lineNumber = 285
              var bool630 = new GraceBoolean(false)
              return bool630
            }
            lineNumber = 290
            var if631 = var_done;
            lineNumber = 287
            onSelf = true;
            var call633 = callmethod(this, "height", [0]);
            var call634 = callmethod(call633,"prefix-", [0]);
            var quotient636 = callmethod(call634, "/", [1], new GraceNum(2));
            var opresult639 = callmethod(var_rotatedY, "<", [1], quotient636);
            if (Grace_isTrue(opresult639)) {
              lineNumber = 289
              lineNumber = 288
              var bool640 = new GraceBoolean(false)
              return bool640
            }
            lineNumber = 293
            var if641 = var_done;
            lineNumber = 290
            onSelf = true;
            var call643 = callmethod(this, "height", [0]);
            var quotient645 = callmethod(call643, "/", [1], new GraceNum(2));
            var opresult648 = callmethod(var_rotatedY, ">", [1], quotient645);
            if (Grace_isTrue(opresult648)) {
              lineNumber = 292
              lineNumber = 291
              var bool649 = new GraceBoolean(false)
              return bool649
            }
            lineNumber = 294
            lineNumber = 293
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
        func549.definitionLine = 274;
        func549.definitionModule = "musical";
        sourceObject = obj509;
        lineNumber = 257
        var call651 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj509.superobj = call651;
        obj509._value = call651._value;
        sourceObject = obj509;
        lineNumber = 258
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
        lineNumber = 259;
        moduleName = "musical";
        lineNumber = 258
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 259
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
        lineNumber = 260;
        moduleName = "musical";
        lineNumber = 259
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 260
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
        lineNumber = 260;
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
  lineNumber = 298
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
      lineNumber = 299
      var obj659 = Grace_allocObject();
      obj659.definitionModule = "musical";
      obj659.definitionLine = 299;
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
            lineNumber = 305
            lineNumber = 260
            lineNumber = 304
            onSelf = true;
            var call662 = callmethod(this, "colour", [0]);
            var call663 = callmethod(var_ctx,"fillStyle:=", [1], call662);
            lineNumber = 306
            lineNumber = 260
            lineNumber = 305
            var string664 = new GraceString("20px sans-serif");
            var call665 = callmethod(var_ctx,"font:=", [1], string664);
            lineNumber = 311
            var if666 = var_done;
            lineNumber = 306
            var string667 = new GraceString("");
            onSelf = true;
            var call669 = callmethod(this, "label", [0]);
            var opresult671 = callmethod(call669, "!=", [1], string667);
            if (Grace_isTrue(opresult671)) {
              lineNumber = 307
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
              lineNumber = 309
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
        func661.definitionLine = 303;
        func661.definitionModule = "musical";
        sourceObject = obj659;
        lineNumber = 300
        var call704 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj659.superobj = call704;
        obj659._value = call704._value;
        sourceObject = obj659;
        lineNumber = 301
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
        lineNumber = 302;
        moduleName = "musical";
        lineNumber = 301
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string705)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        lineNumber = 302
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
        lineNumber = 303;
        moduleName = "musical";
        lineNumber = 302
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
  func658.definitionLine = 298;
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
      obj710.definitionLine = 299;
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
            lineNumber = 305
            lineNumber = 309
            lineNumber = 304
            onSelf = true;
            var call713 = callmethod(this, "colour", [0]);
            var call714 = callmethod(var_ctx,"fillStyle:=", [1], call713);
            lineNumber = 306
            lineNumber = 309
            lineNumber = 305
            var string715 = new GraceString("20px sans-serif");
            var call716 = callmethod(var_ctx,"font:=", [1], string715);
            lineNumber = 311
            var if717 = var_done;
            lineNumber = 306
            var string718 = new GraceString("");
            onSelf = true;
            var call720 = callmethod(this, "label", [0]);
            var opresult722 = callmethod(call720, "!=", [1], string718);
            if (Grace_isTrue(opresult722)) {
              lineNumber = 307
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
              lineNumber = 309
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
        func712.definitionLine = 303;
        func712.definitionModule = "musical";
        sourceObject = obj710;
        lineNumber = 300
        var call755 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj710.superobj = call755;
        obj710._value = call755._value;
        sourceObject = obj710;
        lineNumber = 301
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
        lineNumber = 302;
        moduleName = "musical";
        lineNumber = 301
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string756)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        lineNumber = 302
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
        lineNumber = 303;
        moduleName = "musical";
        lineNumber = 302
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
  lineNumber = 328
  var func760 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func760.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 329
      var string761 = new GraceString("2d");
      var call762 = callmethod(var_backingCanvas,"getContext", [1], string761);
      var var_ctx = call762;
      lineNumber = 329;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ctx' to be of type Unknown"))
      lineNumber = 331
      lineNumber = 309
      lineNumber = 330
      var call763 = callmethod(var_ctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 331
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
  func760.definitionLine = 328;
  func760.definitionModule = "musical";
  lineNumber = 334
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
  func765.definitionLine = 334;
  func765.definitionModule = "musical";
  lineNumber = 339
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
      lineNumber = 340
      var call767 = callmethod(var_dom,"window", [0]);
      var call768 = callmethod(call767,"t_sin", [2], var_freq, new GraceNum(0.5));
      return call768
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
  func766.definitionLine = 339;
  func766.definitionModule = "musical";
  lineNumber = 343
  var func769 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func769.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (gymnopedie)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 344
      var call770 = callmethod(var_dom,"window", [0]);
      var call771 = callmethod(call770,"t_gymnopedie", [0]);
      return call771
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func769.paramCounts = [
    0,
  ];
  func769.variableArities = [
    false,
  ];
  this.methods["gymnopedie"] = func769;
  func769.definitionLine = 343;
  func769.definitionModule = "musical";
  lineNumber = 347
  var func772 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func772.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 348
      var call773 = callmethod(var_stepBlocks,"push", [1], var_b);
      return call773
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func772.paramCounts = [
    1,
  ];
  func772.variableArities = [
    false,
  ];
  this.methods["always"] = func772;
  func772.definitionLine = 347;
  func772.definitionModule = "musical";
  lineNumber = 350
  var func774 = function(argcv) {
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func774.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func774.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 351
      lineNumber = 353
      var block775 = Grace_allocObject();
      block775.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block775.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block775.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block775.methods["match"] = GraceBlock_match;
      block775.methods["prefix?"] = GraceBlock_lift;
      block775.receiver = this;
      block775.className = 'block<musical:353>';
      block775.real = function(
      ) {
        sourceObject = this;
        var if776 = var_done;
        lineNumber = 352
        var call777 = callmethod(var_c,"apply", [0]);
        if (Grace_isTrue(call777)) {
          var call778 = callmethod(var_b,"apply", [0]);
          if776 = call778;
        }
        return if776;
      };
      lineNumber = 351
      var call779 = callmethod(var_stepBlocks,"push", [1], block775);
      return call779
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func774.paramCounts = [
    1,
    1,
  ];
  func774.variableArities = [
    false,
    false,
  ];
  this.methods["whenever()do"] = func774;
  func774.definitionLine = 350;
  func774.definitionModule = "musical";
  lineNumber = 355
  var func780 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func780.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (hue)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func780.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (saturation)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func780.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (lightness)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 357
      lineNumber = 356
      var string781 = new GraceString("%)");
      var string784 = new GraceString("%, ");
      var string787 = new GraceString(", ");
      var string790 = new GraceString("hsl(");
      var opresult792 = callmethod(string790, "++", [1], var_h);
      var opresult794 = callmethod(opresult792, "++", [1], string787);
      var opresult796 = callmethod(opresult794, "++", [1], var_s);
      var opresult798 = callmethod(opresult796, "++", [1], string784);
      var opresult800 = callmethod(opresult798, "++", [1], var_l);
      var opresult802 = callmethod(opresult800, "++", [1], string781);
      return opresult802
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func780.paramCounts = [
    1,
    1,
    1,
  ];
  func780.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["hue()saturation()lightness"] = func780;
  func780.definitionLine = 355;
  func780.definitionModule = "musical";
  lineNumber = 358
  var func803 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func803.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (h)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func803.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (s)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func803.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (l)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 359
      onSelf = true;
      var call804 = callmethod(this, "hue()saturation()lightness", [1, 1, 1], var_h, var_s, var_l);
      return call804
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func803.paramCounts = [
    1,
    1,
    1,
  ];
  func803.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["h()s()l"] = func803;
  func803.definitionLine = 358;
  func803.definitionModule = "musical";
  lineNumber = 361
  var func805 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func805.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 365
      var if806 = var_done;
      lineNumber = 362
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 364
        lineNumber = 363
        var bool807 = new GraceBoolean(false)
        return bool807
      }
      lineNumber = 366
      lineNumber = 365
      var bool808 = new GraceBoolean(true)
      var_initialised = bool808;
      lineNumber = 367
      lineNumber = 366
      var call809 = callmethod(var_dom,"document", [0]);
      var_document = call809;
      lineNumber = 367
      var string810 = new GraceString("standard-canvas");
      var call811 = callmethod(var_document,"getElementById", [1], string810);
      var_canvas = call811;
      lineNumber = 369
      lineNumber = 368
      var call812 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call812;
      lineNumber = 370
      lineNumber = 369
      var call813 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call813;
      lineNumber = 370
      var quotient816 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient819 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call820 = callmethod(var_point,"x()y", [1, 1], quotient816, quotient819);
      var_centre = call820;
      lineNumber = 371
      var quotient823 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call824 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient823);
      var_leftCentre = call824;
      lineNumber = 372
      var quotient827 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call828 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient827);
      var_rightCentre = call828;
      lineNumber = 376
      lineNumber = 369
      lineNumber = 373
      var call829 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 381
      var block830 = Grace_allocObject();
      block830.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block830.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block830.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block830.methods["match"] = GraceBlock_match;
      block830.methods["prefix?"] = GraceBlock_lift;
      block830.receiver = this;
      block830.className = 'block<musical:381>';
      block830.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 378
        lineNumber = 377
        var call832 = callmethod(var_canvas,"offsetWidth", [0]);
        var call834 = callmethod(var_canvas,"offsetLeft", [0]);
        var call836 = callmethod(var_ev,"clientX", [0]);
        var diff838 = callmethod(call836, "-", [1], call834);
        var quotient840 = callmethod(diff838, "/", [1], call832);
        var prod842 = callmethod(quotient840, "*", [1], var_canvasHeight);
        var var_x = prod842;
        lineNumber = 378;
        moduleName = "musical";
        lineNumber = 377
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 379
        lineNumber = 378
        var call844 = callmethod(var_canvas,"offsetHeight", [0]);
        var call847 = callmethod(var_canvas,"offsetTop", [0]);
        var call849 = callmethod(var_ev,"clientY", [0]);
        var diff851 = callmethod(call849, "-", [1], call847);
        var diff853 = callmethod(diff851, "-", [1], new GraceNum(7));
        var quotient855 = callmethod(diff853, "/", [1], call844);
        var prod857 = callmethod(quotient855, "*", [1], var_canvasHeight);
        var var_y = prod857;
        lineNumber = 379;
        moduleName = "musical";
        lineNumber = 378
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 379
        lineNumber = 378
        lineNumber = 379
        var call858 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call859 = callmethod(var_mouse,"position:=", [1], call858);
        return call859;
      };
      var_mouseMoveListener = block830;
      lineNumber = 381
      var string860 = new GraceString("mousemove");
      var call861 = callmethod(var_canvas,"addEventListener", [2], string860, var_mouseMoveListener);
      lineNumber = 397
      var block862 = Grace_allocObject();
      block862.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block862.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block862.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block862.methods["match"] = GraceBlock_match;
      block862.methods["prefix?"] = GraceBlock_lift;
      block862.receiver = this;
      block862.className = 'block<musical:397>';
      block862.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 384
        lineNumber = 383
        var call864 = callmethod(var_canvas,"offsetWidth", [0]);
        var call866 = callmethod(var_canvas,"offsetLeft", [0]);
        var call868 = callmethod(var_ev,"clientX", [0]);
        var diff870 = callmethod(call868, "-", [1], call866);
        var quotient872 = callmethod(diff870, "/", [1], call864);
        var prod874 = callmethod(quotient872, "*", [1], var_canvasHeight);
        var var_x = prod874;
        lineNumber = 384;
        moduleName = "musical";
        lineNumber = 383
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 385
        lineNumber = 384
        var call876 = callmethod(var_canvas,"offsetHeight", [0]);
        var call878 = callmethod(var_canvas,"offsetTop", [0]);
        var call880 = callmethod(var_ev,"clientY", [0]);
        var diff882 = callmethod(call880, "-", [1], call878);
        var quotient884 = callmethod(diff882, "/", [1], call876);
        var prod886 = callmethod(quotient884, "*", [1], var_canvasHeight);
        var var_y = prod886;
        lineNumber = 385;
        moduleName = "musical";
        lineNumber = 384
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 389
        var if887 = var_done;
        lineNumber = 385
        var opresult890 = callmethod(var_y, "<", [1], new GraceNum(20));
        var diff894 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var opresult897 = callmethod(var_x, ">", [1], diff894);
        var opresult899 = callmethod(opresult897, "&&", [1], opresult890);
        if (Grace_isTrue(opresult899)) {
          lineNumber = 386
          var call900 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 387
          onSelf = true;
          var call901 = callmethod(this, "stop", [0]);
          if887 = call901;
        }
        lineNumber = 389
        var call902 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call902;
        lineNumber = 389;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 390
        lineNumber = 396
        var block903 = Grace_allocObject();
        block903.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block903.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block903.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block903.methods["match"] = GraceBlock_match;
        block903.methods["prefix?"] = GraceBlock_lift;
        block903.receiver = this;
        block903.className = 'block<musical:396>';
        block903.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 395
          var if904 = var_done;
          lineNumber = 391
          var call905 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call905)) {
            lineNumber = 392
            var call906 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 393
            var call907 = callmethod(var_ev,"preventDefault", [0]);
            if904 = call907;
          }
          return if904;
        };
        var call908 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block903);
        return call908;
      };
      var_mouseDownListener = block862;
      lineNumber = 397
      var string909 = new GraceString("mousedown");
      var call910 = callmethod(var_canvas,"addEventListener", [2], string909, var_mouseDownListener);
      return call910
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func805.paramCounts = [
    0,
  ];
  func805.variableArities = [
    false,
  ];
  this.methods["initialise"] = func805;
  func805.definitionLine = 361;
  func805.definitionModule = "musical";
  lineNumber = 399
  var func911 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func911.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 401
      lineNumber = 400
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
  func911.paramCounts = [
    1,
  ];
  func911.variableArities = [
    false,
  ];
  this.methods["background"] = func911;
  func911.definitionLine = 399;
  func911.definitionModule = "musical";
  lineNumber = 402
  var func912 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func912.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 403
      var call913 = callmethod(var_randomModule,"random", [0]);
      var prod916 = callmethod(var_n, "*", [1], call913);
      var call917 = callmethod(prod916,"truncate", [0]);
      return call917
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func912.paramCounts = [
    1,
  ];
  func912.variableArities = [
    false,
  ];
  this.methods["random"] = func912;
  func912.definitionLine = 402;
  func912.definitionModule = "musical";
  lineNumber = 405
  var func918 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func918.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (randomPoint)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 406
      var prod921 = callmethod(var_canvasWidth, "*", [1], new GraceNum(0.8));
      onSelf = true;
      var call922 = callmethod(this, "random", [1], prod921);
      var quotient926 = callmethod(var_canvasWidth, "/", [1], new GraceNum(10));
      var opresult928 = callmethod(quotient926, "+", [1], call922);
      lineNumber = 407
      var prod931 = callmethod(var_canvasHeight, "*", [1], new GraceNum(0.8));
      onSelf = true;
      var call932 = callmethod(this, "random", [1], prod931);
      var quotient936 = callmethod(var_canvasHeight, "/", [1], new GraceNum(10));
      var opresult938 = callmethod(quotient936, "+", [1], call932);
      lineNumber = 406
      var call939 = callmethod(var_point,"x()y", [1, 1], opresult928, opresult938);
      return call939
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func918.paramCounts = [
    0,
  ];
  func918.variableArities = [
    false,
  ];
  this.methods["randomPoint"] = func918;
  func918.definitionLine = 405;
  func918.definitionModule = "musical";
  lineNumber = 409
  var func940 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func940.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 410
      var string941 = new GraceString("sin");
      var call942 = callmethod(var_dom,"window", [0]);
      var call943 = callmethod(call942,"T", [1], string941);
      var call944 = callmethod(call943,"play", [0]);
      return call944
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func940.paramCounts = [
    0,
  ];
  func940.variableArities = [
    false,
  ];
  this.methods["playSound"] = func940;
  func940.definitionLine = 409;
  func940.definitionModule = "musical";
  lineNumber = 423
  var func945 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func945.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 428
      var if946 = var_done;
      lineNumber = 424
      var call947 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call947)) {
        lineNumber = 425
        var call948 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call948;
        lineNumber = 425;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 426
        var call949 = callmethod(var_audio,"pause", [0]);
        if946 = call949;
      }
      return if946
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func945.paramCounts = [
    1,
  ];
  func945.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func945;
  func945.definitionLine = 423;
  func945.definitionModule = "musical";
  lineNumber = 429
  var func950 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func950.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 430
      onSelf = true;
      var call951 = callmethod(this, "initialise", [0]);
      lineNumber = 432
      lineNumber = 431
      var bool952 = new GraceBoolean(false)
      var_stopRunning = bool952;
      lineNumber = 432
      var string953 = new GraceString("canvas");
      var call954 = callmethod(var_dom,"document", [0]);
      var call955 = callmethod(call954,"createElement", [1], string953);
      var_backingCanvas = call955;
      lineNumber = 434
      lineNumber = 432
      lineNumber = 433
      var call956 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 435
      lineNumber = 432
      lineNumber = 434
      var call957 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 435
      var string958 = new GraceString("2d");
      var call959 = callmethod(var_backingCanvas,"getContext", [1], string958);
      var_backingContext = call959;
      lineNumber = 436
      var string960 = new GraceString("2d");
      var call961 = callmethod(var_canvas,"getContext", [1], string960);
      var var_mctx = call961;
      lineNumber = 436;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 437
      var block962 = Grace_allocObject();
      block962.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block962.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block962.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block962.methods["match"] = GraceBlock_match;
      block962.methods["prefix?"] = GraceBlock_lift;
      block962.receiver = this;
      block962.className = 'block<musical:437>';
      block962.real = function(
      ) {
        sourceObject = this;
        var call963 = callmethod(var_stopRunning,"prefix!", [0]);
        return call963;
      };
      lineNumber = 453
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
      block964.className = 'block<musical:453>';
      block964.real = function(
      ) {
        sourceObject = this;
        lineNumber = 438
        lineNumber = 441
        var block965 = Grace_allocObject();
        block965.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block965.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block965.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block965.methods["match"] = GraceBlock_match;
        block965.methods["prefix?"] = GraceBlock_lift;
        block965.receiver = this;
        block965.className = 'block<musical:441>';
        block965.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 439
          var call966 = callmethod(var_obj,"step", [0]);
          return call966;
        };
        var call967 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block965);
        lineNumber = 441
        lineNumber = 444
        var block968 = Grace_allocObject();
        block968.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block968.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block968.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block968.methods["match"] = GraceBlock_match;
        block968.methods["prefix?"] = GraceBlock_lift;
        block968.receiver = this;
        block968.className = 'block<musical:444>';
        block968.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 442
          var call969 = callmethod(var_step,"apply", [0]);
          return call969;
        };
        var call970 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block968);
        lineNumber = 445
        lineNumber = 442
        lineNumber = 444
        var call971 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 445
        var call972 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 446
        var call973 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 447
        lineNumber = 450
        var block974 = Grace_allocObject();
        block974.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block974.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block974.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block974.methods["match"] = GraceBlock_match;
        block974.methods["prefix?"] = GraceBlock_lift;
        block974.receiver = this;
        block974.className = 'block<musical:450>';
        block974.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 448
          var call975 = callmethod(var_obj,"draw", [1], var_mctx);
          return call975;
        };
        var call976 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block974);
        lineNumber = 451
        lineNumber = 442
        lineNumber = 450
        var string977 = new GraceString("red");
        var call978 = callmethod(var_mctx,"fillStyle:=", [1], string977);
        lineNumber = 451
        var diff981 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call982 = callmethod(var_mctx,"fillRect", [4], diff981, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call982;
      };
      lineNumber = 437
      var call983 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block962, new GraceNum(10), block964);
      return call983
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func950.paramCounts = [
    0,
  ];
  func950.variableArities = [
    false,
  ];
  this.methods["start"] = func950;
  func950.definitionLine = 429;
  func950.definitionModule = "musical";
  lineNumber = 454
  var func984 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func984.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 456
      lineNumber = 455
      var bool985 = new GraceBoolean(true)
      var_stopRunning = bool985;
      lineNumber = 456
      var call986 = callmethod(var_dom,"window", [0]);
      var call987 = callmethod(call986,"t_reset", [0]);
      lineNumber = 457
      var string988 = new GraceString("mousedown");
      var call989 = callmethod(var_canvas,"removeEventListener", [2], string988, var_mouseDownListener);
      lineNumber = 458
      var string990 = new GraceString("mousemove");
      var call991 = callmethod(var_canvas,"removeEventListener", [2], string990, var_mouseMoveListener);
      return call991
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func984.paramCounts = [
    0,
  ];
  func984.variableArities = [
    false,
  ];
  this.methods["stop"] = func984;
  func984.definitionLine = 454;
  func984.definitionModule = "musical";
  lineNumber = 461
  var func992 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func992.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 462
      onSelf = true;
      var call993 = callmethod(this, "start", [0]);
      return call993
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func992.paramCounts = [
    1,
  ];
  func992.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func992;
  func992.definitionLine = 461;
  func992.definitionModule = "musical";
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
  var call994 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call994;
  this.data = call994.data;
  this._value = call994._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 456
  var func995 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func995.paramCounts[0])
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
  func995.paramCounts = [
    0,
  ];
  func995.variableArities = [
    false,
  ];
  this.methods["document"] = func995;
  func995.definitionLine = 456;
  func995.definitionModule = "musical";
  lineNumber = 456
  var func996 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func996.paramCounts[0])
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
  func996.paramCounts = [
    1,
  ];
  func996.variableArities = [
    false,
  ];
  this.methods["document:="] = func996;
  func996.definitionLine = 456;
  func996.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 456
  var func997 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func997.paramCounts[0])
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
  func997.paramCounts = [
    0,
  ];
  func997.variableArities = [
    false,
  ];
  this.methods["canvas"] = func997;
  func997.definitionLine = 456;
  func997.definitionModule = "musical";
  lineNumber = 456
  var func998 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func998.paramCounts[0])
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
  func998.paramCounts = [
    1,
  ];
  func998.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func998;
  func998.definitionLine = 456;
  func998.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 456
  var func999 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func999.paramCounts[0])
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
  func999.paramCounts = [
    0,
  ];
  func999.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func999;
  func999.definitionLine = 456;
  func999.definitionModule = "musical";
  lineNumber = 456
  var func1000 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1000.paramCounts[0])
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
  func1000.paramCounts = [
    1,
  ];
  func1000.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1000;
  func1000.definitionLine = 456;
  func1000.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 456
  var func1001 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1001.paramCounts[0])
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
  func1001.paramCounts = [
    0,
  ];
  func1001.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1001;
  func1001.definitionLine = 456;
  func1001.definitionModule = "musical";
  lineNumber = 456
  var func1002 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1002.paramCounts[0])
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
  func1002.paramCounts = [
    1,
  ];
  func1002.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1002;
  func1002.definitionLine = 456;
  func1002.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 456
  var func1003 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1003.paramCounts[0])
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
  func1003.paramCounts = [
    0,
  ];
  func1003.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1003;
  func1003.definitionLine = 456;
  func1003.definitionModule = "musical";
  lineNumber = 456
  var func1004 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1004.paramCounts[0])
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
  func1004.paramCounts = [
    1,
  ];
  func1004.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1004;
  func1004.definitionLine = 456;
  func1004.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 456
  var func1005 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1005.paramCounts[0])
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
  func1005.paramCounts = [
    0,
  ];
  func1005.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1005;
  func1005.definitionLine = 456;
  func1005.definitionModule = "musical";
  lineNumber = 456
  var func1006 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1006.paramCounts[0])
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
  func1006.paramCounts = [
    1,
  ];
  func1006.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1006;
  func1006.definitionLine = 456;
  func1006.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1007 = callmethod(var_dom,"window", [0]);
  var call1008 = callmethod(call1007,"Math", [0]);
  var var_trig = call1008;
  var func1009 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1009.paramCounts[0])
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
  func1009.paramCounts = [
    0,
  ];
  func1009.variableArities = [
    false,
  ];
  this.methods["trig"] = func1009;
  func1009.definitionLine = 15;
  func1009.definitionModule = "musical";
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
  var func1010 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1010.paramCounts[0])
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
  func1010.paramCounts = [
    0,
  ];
  func1010.variableArities = [
    false,
  ];
  this.methods["PI"] = func1010;
  func1010.definitionLine = 15;
  func1010.definitionModule = "musical";
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
  var bool1011 = new GraceBoolean(false)
  var var_stopRunning = bool1011;
  lineNumber = 15
  var func1012 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1012.paramCounts[0])
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
  func1012.paramCounts = [
    0,
  ];
  func1012.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1012;
  func1012.definitionLine = 15;
  func1012.definitionModule = "musical";
  lineNumber = 15
  var func1013 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1013.paramCounts[0])
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
  func1013.paramCounts = [
    1,
  ];
  func1013.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1013;
  func1013.definitionLine = 15;
  func1013.definitionModule = "musical";
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
  var bool1014 = new GraceBoolean(false)
  var var_initialised = bool1014;
  lineNumber = 15
  var func1015 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1015.paramCounts[0])
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
  func1015.paramCounts = [
    0,
  ];
  func1015.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1015;
  func1015.definitionLine = 15;
  func1015.definitionModule = "musical";
  lineNumber = 15
  var func1016 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1016.paramCounts[0])
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
  func1016.paramCounts = [
    1,
  ];
  func1016.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1016;
  func1016.definitionLine = 15;
  func1016.definitionModule = "musical";
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
  var string1017 = new GraceString("white");
  var var_backgroundColour = string1017;
  lineNumber = 15
  var func1018 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1018.paramCounts[0])
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
  func1018.paramCounts = [
    0,
  ];
  func1018.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1018;
  func1018.definitionLine = 15;
  func1018.definitionModule = "musical";
  lineNumber = 15
  var func1019 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1019.paramCounts[0])
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
  func1019.paramCounts = [
    1,
  ];
  func1019.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1019;
  func1019.definitionLine = 15;
  func1019.definitionModule = "musical";
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
  var call1020 = callmethod(var_collections,"list", [0]);
  var call1021 = callmethod(call1020,"new", [0]);
  var var_registeredObjects = call1021;
  var func1022 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1022.paramCounts[0])
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
  func1022.paramCounts = [
    0,
  ];
  func1022.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1022;
  func1022.definitionLine = 21;
  func1022.definitionModule = "musical";
  lineNumber = 22;
  moduleName = "musical";
  lineNumber = 21
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_registeredObjects)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'registeredObjects' to be of type Unknown"))
  lineNumber = 23
  lineNumber = 22
  var call1023 = callmethod(var_collections,"list", [0]);
  var call1024 = callmethod(call1023,"new", [0]);
  var var_stepBlocks = call1024;
  var func1025 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1025.paramCounts[0])
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
  func1025.paramCounts = [
    0,
  ];
  func1025.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1025;
  func1025.definitionLine = 22;
  func1025.definitionModule = "musical";
  lineNumber = 23;
  moduleName = "musical";
  lineNumber = 22
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stepBlocks)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'stepBlocks' to be of type Unknown"))
  lineNumber = 25
  lineNumber = 23
  var call1026 = callmethod(var_collections,"map", [0]);
  var call1027 = callmethod(call1026,"new", [0]);
  var var_audioTags = call1027;
  var func1028 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1028.paramCounts[0])
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
  func1028.paramCounts = [
    0,
  ];
  func1028.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1028;
  func1028.definitionLine = 23;
  func1028.definitionModule = "musical";
  lineNumber = 25;
  moduleName = "musical";
  lineNumber = 23
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_audioTags)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'audioTags' to be of type Unknown"))
  lineNumber = 25
  lineNumber = 26
  var var_canvasWidth;
  lineNumber = 23
  var func1029 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1029.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasWidth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 25
      return var_canvasWidth
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1029.paramCounts = [
    0,
  ];
  func1029.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1029;
  func1029.definitionLine = 23;
  func1029.definitionModule = "musical";
  lineNumber = 23
  var func1030 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1030.paramCounts[0])
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
  func1030.paramCounts = [
    1,
  ];
  func1030.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1030;
  func1030.definitionLine = 23;
  func1030.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1031 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1031.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasHeight)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 26
      return var_canvasHeight
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
  this.methods["canvasHeight"] = func1031;
  func1031.definitionLine = 23;
  func1031.definitionModule = "musical";
  lineNumber = 23
  var func1032 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1032.paramCounts[0])
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
  func1032.paramCounts = [
    1,
  ];
  func1032.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1032;
  func1032.definitionLine = 23;
  func1032.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1033 = new GraceString("left");
  var var_left = string1033;
  lineNumber = 23
  var func1034 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1034.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 28
      return var_left
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1034.paramCounts = [
    0,
  ];
  func1034.variableArities = [
    false,
  ];
  this.methods["left"] = func1034;
  func1034.definitionLine = 23;
  func1034.definitionModule = "musical";
  lineNumber = 29;
  moduleName = "musical";
  lineNumber = 28
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_left)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'left' to be of type Unknown"))
  lineNumber = 30
  lineNumber = 29
  var string1035 = new GraceString("right");
  var var_right = string1035;
  lineNumber = 23
  var func1036 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1036.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 29
      return var_right
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1036.paramCounts = [
    0,
  ];
  func1036.variableArities = [
    false,
  ];
  this.methods["right"] = func1036;
  func1036.definitionLine = 23;
  func1036.definitionModule = "musical";
  lineNumber = 30;
  moduleName = "musical";
  lineNumber = 29
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_right)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'right' to be of type Unknown"))
  lineNumber = 31
  lineNumber = 30
  var string1037 = new GraceString("top");
  var var_top = string1037;
  lineNumber = 23
  var func1038 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1038.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (top)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 30
      return var_top
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
  this.methods["top"] = func1038;
  func1038.definitionLine = 23;
  func1038.definitionModule = "musical";
  lineNumber = 31;
  moduleName = "musical";
  lineNumber = 30
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_top)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'top' to be of type Unknown"))
  lineNumber = 33
  lineNumber = 31
  var string1039 = new GraceString("bottom");
  var var_bottom = string1039;
  lineNumber = 23
  var func1040 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1040.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bottom)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 31
      return var_bottom
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
  this.methods["bottom"] = func1040;
  func1040.definitionLine = 23;
  func1040.definitionModule = "musical";
  lineNumber = 33;
  moduleName = "musical";
  lineNumber = 31
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_bottom)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'bottom' to be of type Unknown"))
  lineNumber = 33
  lineNumber = 34
  var var_centre;
  lineNumber = 23
  var func1041 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1041.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (centre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 33
      return var_centre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1041.paramCounts = [
    0,
  ];
  func1041.variableArities = [
    false,
  ];
  this.methods["centre"] = func1041;
  func1041.definitionLine = 23;
  func1041.definitionModule = "musical";
  lineNumber = 23
  var func1042 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1042.paramCounts[0])
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
  func1042.paramCounts = [
    1,
  ];
  func1042.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1042;
  func1042.definitionLine = 23;
  func1042.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1043 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1043.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (leftCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 34
      return var_leftCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1043.paramCounts = [
    0,
  ];
  func1043.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1043;
  func1043.definitionLine = 23;
  func1043.definitionModule = "musical";
  lineNumber = 23
  var func1044 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1044.paramCounts[0])
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
  func1044.paramCounts = [
    1,
  ];
  func1044.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1044;
  func1044.definitionLine = 23;
  func1044.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1045 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1045.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rightCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 35
      return var_rightCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1045.paramCounts = [
    0,
  ];
  func1045.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1045;
  func1045.definitionLine = 23;
  func1045.definitionModule = "musical";
  lineNumber = 23
  var func1046 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1046.paramCounts[0])
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
  func1046.paramCounts = [
    1,
  ];
  func1046.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1046;
  func1046.definitionLine = 23;
  func1046.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1047 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1047.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (above)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 37
      return var_above
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1047.paramCounts = [
    0,
  ];
  func1047.variableArities = [
    false,
  ];
  this.methods["above"] = func1047;
  func1047.definitionLine = 23;
  func1047.definitionModule = "musical";
  lineNumber = 23
  var func1048 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1048.paramCounts[0])
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
  func1048.paramCounts = [
    1,
  ];
  func1048.variableArities = [
    false,
  ];
  this.methods["above:="] = func1048;
  func1048.definitionLine = 23;
  func1048.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1049 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1049.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Δ)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 38
      return var___916__
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1049.paramCounts = [
    0,
  ];
  func1049.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1049;
  func1049.definitionLine = 23;
  func1049.definitionModule = "musical";
  lineNumber = 23
  var func1050 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1050.paramCounts[0])
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
  func1050.paramCounts = [
    1,
  ];
  func1050.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1050;
  func1050.definitionLine = 23;
  func1050.definitionModule = "musical";
  lineNumber = 40
  var func1051 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1051.paramCounts[0])
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
  func1051.paramCounts = [
    0,
  ];
  func1051.variableArities = [
    false,
  ];
  this.methods["point"] = func1051;
  func1051.definitionLine = 40;
  func1051.definitionModule = "musical";
  var obj1052 = Grace_allocObject();
  obj1052.definitionModule = "musical";
  obj1052.definitionLine = 40;
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
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1054.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1054.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1055 = Grace_allocObject();
        obj1055.definitionModule = "musical";
        obj1055.definitionLine = 40;
        obj1055.outer = this;
        var reader_musical_outer_1056 = function() {
          return this.outer;
        }
        obj1055.methods["outer"] = reader_musical_outer_1056;
        function obj_init_1055() {
          var origSuperDepth = superDepth;
          superDepth = obj1055;
          obj1055.annotations = [];
          var func1057 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1057.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1059 = callmethod(this, "x", [0]);
              var diff1061 = callmethod(call1059, "-", [1], var_dx);
              onSelf = true;
              var call1062 = callmethod(this, "y", [0]);
              var call1063 = callmethod(var_point,"x()y", [1, 1], diff1061, call1062);
              return call1063
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1057.paramCounts = [
            1,
          ];
          func1057.variableArities = [
            false,
          ];
          obj1055.methods["left"] = func1057;
          func1057.definitionLine = 43;
          func1057.definitionModule = "musical";
          var func1064 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1064.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1066 = callmethod(this, "x", [0]);
              var opresult1068 = callmethod(call1066, "+", [1], var_dx);
              onSelf = true;
              var call1069 = callmethod(this, "y", [0]);
              var call1070 = callmethod(var_point,"x()y", [1, 1], opresult1068, call1069);
              return call1070
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1064.paramCounts = [
            1,
          ];
          func1064.variableArities = [
            false,
          ];
          obj1055.methods["right"] = func1064;
          func1064.definitionLine = 44;
          func1064.definitionModule = "musical";
          var func1071 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1071.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1072 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1074 = callmethod(this, "y", [0]);
              var diff1076 = callmethod(call1074, "-", [1], var_dy);
              var call1077 = callmethod(var_point,"x()y", [1, 1], call1072, diff1076);
              return call1077
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1071.paramCounts = [
            1,
          ];
          func1071.variableArities = [
            false,
          ];
          obj1055.methods["up"] = func1071;
          func1071.definitionLine = 45;
          func1071.definitionModule = "musical";
          var func1078 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1078.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1079 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1081 = callmethod(this, "y", [0]);
              var opresult1083 = callmethod(call1081, "+", [1], var_dy);
              var call1084 = callmethod(var_point,"x()y", [1, 1], call1079, opresult1083);
              return call1084
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1078.paramCounts = [
            1,
          ];
          func1078.variableArities = [
            false,
          ];
          obj1055.methods["down"] = func1078;
          func1078.definitionLine = 46;
          func1078.definitionModule = "musical";
          sourceObject = obj1055;
          lineNumber = 41
          obj1055.data["x"] = var_x__39__;
          var reader_musical_x_1085 = function() {
            return this.data["x"];
          }
          reader_musical_x_1085.def = true;
          obj1055.methods["x"] = reader_musical_x_1085;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1055;
          lineNumber = 42
          obj1055.data["y"] = var_y__39__;
          var reader_musical_y_1086 = function() {
            return this.data["y"];
          }
          reader_musical_y_1086.def = true;
          obj1055.methods["y"] = reader_musical_y_1086;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1055;
          sourceObject = obj1055;
          sourceObject = obj1055;
          sourceObject = obj1055;
          superDepth = origSuperDepth;
        }
        obj_init_1055.apply(obj1055, []);
        return obj1055
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
      1,
    ];
    func1054.variableArities = [
      false,
      false,
    ];
    obj1052.methods["x()y"] = func1054;
    func1054.definitionLine = 40;
    func1054.definitionModule = "musical";
    var func1087 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1088 = Grace_allocObject();
        obj1088.definitionModule = "musical";
        obj1088.definitionLine = 40;
        var inho1088 = inheritingObject;
        while (inho1088.superobj) inho1088 = inho1088.superobj;
        inho1088.superobj = obj1088;
        obj1088.data = inheritingObject.data;
        obj1088.outer = this;
        var reader_musical_outer_1089 = function() {
          return this.outer;
        }
        obj1088.methods["outer"] = reader_musical_outer_1089;
        function obj_init_1088() {
          var origSuperDepth = superDepth;
          superDepth = obj1088;
          obj1088.annotations = [];
          var func1090 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1090.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1092 = callmethod(this, "x", [0]);
              var diff1094 = callmethod(call1092, "-", [1], var_dx);
              onSelf = true;
              var call1095 = callmethod(this, "y", [0]);
              var call1096 = callmethod(var_point,"x()y", [1, 1], diff1094, call1095);
              return call1096
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1090.paramCounts = [
            1,
          ];
          func1090.variableArities = [
            false,
          ];
          obj1088.methods["left"] = func1090;
          func1090.definitionLine = 43;
          func1090.definitionModule = "musical";
          var func1097 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1097.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1099 = callmethod(this, "x", [0]);
              var opresult1101 = callmethod(call1099, "+", [1], var_dx);
              onSelf = true;
              var call1102 = callmethod(this, "y", [0]);
              var call1103 = callmethod(var_point,"x()y", [1, 1], opresult1101, call1102);
              return call1103
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
          obj1088.methods["right"] = func1097;
          func1097.definitionLine = 44;
          func1097.definitionModule = "musical";
          var func1104 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1104.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1105 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1107 = callmethod(this, "y", [0]);
              var diff1109 = callmethod(call1107, "-", [1], var_dy);
              var call1110 = callmethod(var_point,"x()y", [1, 1], call1105, diff1109);
              return call1110
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1104.paramCounts = [
            1,
          ];
          func1104.variableArities = [
            false,
          ];
          obj1088.methods["up"] = func1104;
          func1104.definitionLine = 45;
          func1104.definitionModule = "musical";
          var func1111 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1111.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1112 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1114 = callmethod(this, "y", [0]);
              var opresult1116 = callmethod(call1114, "+", [1], var_dy);
              var call1117 = callmethod(var_point,"x()y", [1, 1], call1112, opresult1116);
              return call1117
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1111.paramCounts = [
            1,
          ];
          func1111.variableArities = [
            false,
          ];
          obj1088.methods["down"] = func1111;
          func1111.definitionLine = 46;
          func1111.definitionModule = "musical";
          sourceObject = obj1088;
          lineNumber = 41
          obj1088.data["x"] = var_x__39__;
          var reader_musical_x_1118 = function() {
            return this.data["x"];
          }
          reader_musical_x_1118.def = true;
          obj1088.methods["x"] = reader_musical_x_1118;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1088;
          lineNumber = 42
          obj1088.data["y"] = var_y__39__;
          var reader_musical_y_1119 = function() {
            return this.data["y"];
          }
          reader_musical_y_1119.def = true;
          obj1088.methods["y"] = reader_musical_y_1119;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1088;
          sourceObject = obj1088;
          sourceObject = obj1088;
          sourceObject = obj1088;
          superDepth = origSuperDepth;
        }
        obj_init_1088.apply(inheritingObject, []);
        return obj1088
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1052.methods["x()y()object"] = func1087;
    var func1120 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1121 = new GraceString("class point");
        return string1121
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1120.paramCounts = [
    ];
    func1120.variableArities = [
    ];
    obj1052.methods["asDebugString"] = func1120;
    func1120.definitionLine = 40;
    func1120.definitionModule = "musical";
    sourceObject = obj1052;
    sourceObject = obj1052;
    superDepth = origSuperDepth;
  }
  obj_init_1052.apply(obj1052, []);
  var var_point = obj1052;
  lineNumber = 48
  var func1122 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1122.paramCounts[0])
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
  func1122.paramCounts = [
    0,
  ];
  func1122.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1122;
  func1122.definitionLine = 48;
  func1122.definitionModule = "musical";
  var obj1123 = Grace_allocObject();
  obj1123.definitionModule = "musical";
  obj1123.definitionLine = 48;
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
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1126 = Grace_allocObject();
        obj1126.definitionModule = "musical";
        obj1126.definitionLine = 48;
        obj1126.outer = this;
        var reader_musical_outer_1127 = function() {
          return this.outer;
        }
        obj1126.methods["outer"] = reader_musical_outer_1127;
        function obj_init_1126() {
          var origSuperDepth = superDepth;
          superDepth = obj1126;
          obj1126.annotations = [];
          var func1128 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1128.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1129 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1130 = Grace_allocObject();
              block1130.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1130.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1130.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1130.methods["match"] = GraceBlock_match;
              block1130.methods["prefix?"] = GraceBlock_lift;
              block1130.receiver = this;
              block1130.className = 'block<musical:63>';
              block1130.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1131 = callmethod(var_b,"apply", [0]);
                return call1131;
              };
              var call1132 = callmethod(Grace_prelude,"for()do", [1, 1], call1129, block1130);
              lineNumber = 63
              onSelf = true;
              var call1133 = callmethod(this, "tick", [0]);
              return call1133
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1128.paramCounts = [
            0,
          ];
          func1128.variableArities = [
            false,
          ];
          obj1126.methods["step"] = func1128;
          func1128.definitionLine = 59;
          func1128.definitionModule = "musical";
          var func1134 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1134.paramCounts[0])
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
          func1134.paramCounts = [
            0,
          ];
          func1134.variableArities = [
            false,
          ];
          obj1126.methods["tick"] = func1134;
          func1134.definitionLine = 65;
          func1134.definitionModule = "musical";
          var func1135 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1135.paramCounts[0])
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
          func1135.paramCounts = [
            1,
          ];
          func1135.variableArities = [
            false,
          ];
          obj1126.methods["draw"] = func1135;
          func1135.definitionLine = 66;
          func1135.definitionModule = "musical";
          var func1136 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1136.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 69
              lineNumber = 61
              lineNumber = 68
              var call1137 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1138 = callmethod(this, "destX:=", [1], call1137);
              lineNumber = 70
              lineNumber = 68
              lineNumber = 69
              var call1139 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1140 = callmethod(this, "destY:=", [1], call1139);
              return call1140
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1136.paramCounts = [
            1,
          ];
          func1136.variableArities = [
            false,
          ];
          obj1126.methods["moveTo"] = func1136;
          func1136.definitionLine = 67;
          func1136.definitionModule = "musical";
          var func1141 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1141.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 73
              lineNumber = 69
              lineNumber = 72
              var call1142 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1143 = callmethod(this, "x:=", [1], call1142);
              lineNumber = 74
              lineNumber = 72
              lineNumber = 73
              var call1144 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1145 = callmethod(this, "y:=", [1], call1144);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              onSelf = true;
              var call1146 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1147 = callmethod(this, "destX:=", [1], call1146);
              lineNumber = 76
              lineNumber = 73
              lineNumber = 75
              onSelf = true;
              var call1148 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1149 = callmethod(this, "destY:=", [1], call1148);
              return call1149
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1141.paramCounts = [
            1,
          ];
          func1141.variableArities = [
            false,
          ];
          obj1126.methods["jumpTo"] = func1141;
          func1141.definitionLine = 71;
          func1141.definitionModule = "musical";
          var func1150 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1150.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 77
              var bool1151 = new GraceBoolean(false)
              return bool1151
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
          obj1126.methods["isPointOver"] = func1150;
          func1150.definitionLine = 77;
          func1150.definitionModule = "musical";
          var func1152 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1152.paramCounts[0])
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
          func1152.paramCounts = [
            0,
          ];
          func1152.variableArities = [
            false,
          ];
          obj1126.methods["mousedown"] = func1152;
          func1152.definitionLine = 78;
          func1152.definitionModule = "musical";
          var func1153 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1153.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 80
              onSelf = true;
              var call1154 = callmethod(this, "alwaysBlocks", [0]);
              var call1155 = callmethod(call1154,"push", [1], var_b);
              return call1155
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
          ];
          func1153.variableArities = [
            false,
          ];
          obj1126.methods["always"] = func1153;
          func1153.definitionLine = 79;
          func1153.definitionModule = "musical";
          var func1156 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1156.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1156.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 83
              lineNumber = 88
              var block1157 = Grace_allocObject();
              block1157.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1157.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1157.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1157.methods["match"] = GraceBlock_match;
              block1157.methods["prefix?"] = GraceBlock_lift;
              block1157.receiver = this;
              block1157.className = 'block<musical:88>';
              block1157.real = function(
              ) {
                sourceObject = this;
                lineNumber = 87
                var if1158 = var_done;
                lineNumber = 84
                var call1159 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1159)) {
                  lineNumber = 85
                  var call1160 = callmethod(var_b,"apply", [0]);
                  if1158 = call1160;
                }
                return if1158;
              };
              onSelf = true;
              var call1161 = callmethod(this, "always", [1], block1157);
              return call1161
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
            1,
          ];
          func1156.variableArities = [
            false,
            false,
          ];
          obj1126.methods["whenever()do"] = func1156;
          func1156.definitionLine = 82;
          func1156.definitionModule = "musical";
          var func1162 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1162.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 91
              lineNumber = 90
              onSelf = true;
              var call1166 = callmethod(this, "angle", [0]);
              var quotient1168 = callmethod(call1166, "/", [1], new GraceNum(180));
              var prod1170 = callmethod(quotient1168, "*", [1], var_PI);
              var call1171 = callmethod(var_trig,"cos", [1], prod1170);
              var prod1173 = callmethod(call1171, "*", [1], var_dist);
              var var_y__39__ = prod1173;
              lineNumber = 91;
              moduleName = "musical";
              lineNumber = 90
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1177 = callmethod(this, "angle", [0]);
              var quotient1179 = callmethod(call1177, "/", [1], new GraceNum(180));
              var prod1181 = callmethod(quotient1179, "*", [1], var_PI);
              var call1182 = callmethod(var_trig,"sin", [1], prod1181);
              var prod1184 = callmethod(call1182, "*", [1], var_dist);
              var var_x__39__ = prod1184;
              lineNumber = 92;
              moduleName = "musical";
              lineNumber = 91
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 93
              lineNumber = 85
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1186 = callmethod(this, "x", [0]);
              var opresult1188 = callmethod(call1186, "+", [1], var_x__39__);
              onSelf = true;
              var call1189 = callmethod(this, "x:=", [1], opresult1188);
              lineNumber = 94
              lineNumber = 85
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1191 = callmethod(this, "y", [0]);
              var opresult1193 = callmethod(call1191, "+", [1], var_y__39__);
              onSelf = true;
              var call1194 = callmethod(this, "y:=", [1], opresult1193);
              return call1194
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1162.paramCounts = [
            1,
          ];
          func1162.variableArities = [
            false,
          ];
          obj1126.methods["forward"] = func1162;
          func1162.definitionLine = 89;
          func1162.definitionModule = "musical";
          var func1195 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1195.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 96
              var block1196 = Grace_allocObject();
              block1196.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1196.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1196.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1196.methods["match"] = GraceBlock_match;
              block1196.methods["prefix?"] = GraceBlock_lift;
              block1196.receiver = this;
              block1196.className = 'block<musical:96>';
              block1196.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1198 = callmethod(this, "angle", [0]);
                var opresult1200 = callmethod(call1198, "<", [1], new GraceNum(0));
                return opresult1200;
              };
              lineNumber = 99
              var block1201 = Grace_allocObject();
              block1201.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1201.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1201.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1201.methods["match"] = GraceBlock_match;
              block1201.methods["prefix?"] = GraceBlock_lift;
              block1201.receiver = this;
              block1201.className = 'block<musical:99>';
              block1201.real = function(
              ) {
                sourceObject = this;
                lineNumber = 98
                lineNumber = 85
                lineNumber = 98
                lineNumber = 97
                onSelf = true;
                var call1203 = callmethod(this, "angle", [0]);
                var opresult1205 = callmethod(call1203, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1206 = callmethod(this, "angle:=", [1], opresult1205);
                return call1206;
              };
              var call1207 = callmethod(Grace_prelude,"while()do", [1, 1], block1196, block1201);
              lineNumber = 99
              var block1208 = Grace_allocObject();
              block1208.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1208.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1208.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1208.methods["match"] = GraceBlock_match;
              block1208.methods["prefix?"] = GraceBlock_lift;
              block1208.receiver = this;
              block1208.className = 'block<musical:99>';
              block1208.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1210 = callmethod(this, "angle", [0]);
                var opresult1212 = callmethod(call1210, ">", [1], new GraceNum(360));
                return opresult1212;
              };
              lineNumber = 102
              var block1213 = Grace_allocObject();
              block1213.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1213.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1213.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1213.methods["match"] = GraceBlock_match;
              block1213.methods["prefix?"] = GraceBlock_lift;
              block1213.receiver = this;
              block1213.className = 'block<musical:102>';
              block1213.real = function(
              ) {
                sourceObject = this;
                lineNumber = 101
                lineNumber = 85
                lineNumber = 101
                lineNumber = 100
                onSelf = true;
                var call1215 = callmethod(this, "angle", [0]);
                var diff1217 = callmethod(call1215, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1218 = callmethod(this, "angle:=", [1], diff1217);
                return call1218;
              };
              var call1219 = callmethod(Grace_prelude,"while()do", [1, 1], block1208, block1213);
              return call1219
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1195.paramCounts = [
            0,
          ];
          func1195.variableArities = [
            false,
          ];
          obj1126.methods["normaliseAngle"] = func1195;
          func1195.definitionLine = 95;
          func1195.definitionModule = "musical";
          var func1220 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1220.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 105
              lineNumber = 85
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call1222 = callmethod(this, "angle", [0]);
              var opresult1224 = callmethod(call1222, "+", [1], var_degrees);
              onSelf = true;
              var call1225 = callmethod(this, "angle:=", [1], opresult1224);
              lineNumber = 105
              onSelf = true;
              var call1226 = callmethod(this, "normaliseAngle", [0]);
              return call1226
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
          obj1126.methods["turn"] = func1220;
          func1220.definitionLine = 103;
          func1220.definitionModule = "musical";
          var func1227 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1227.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 111
              var if1228 = var_done;
              lineNumber = 108
              onSelf = true;
              var call1229 = callmethod(this, "x", [0]);
              var call1230 = callmethod(var_point,"x()y", [1, 1], call1229, new GraceNum(0));
              onSelf = true;
              var call1231 = callmethod(this, "isPointOver", [1], call1230);
              if (Grace_isTrue(call1231)) {
                lineNumber = 110
                lineNumber = 109
                var bool1232 = new GraceBoolean(true)
                return bool1232
              }
              lineNumber = 114
              var if1233 = var_done;
              lineNumber = 111
              onSelf = true;
              var call1234 = callmethod(this, "x", [0]);
              var call1235 = callmethod(var_point,"x()y", [1, 1], call1234, var_canvasHeight);
              onSelf = true;
              var call1236 = callmethod(this, "isPointOver", [1], call1235);
              if (Grace_isTrue(call1236)) {
                lineNumber = 113
                lineNumber = 112
                var bool1237 = new GraceBoolean(true)
                return bool1237
              }
              lineNumber = 117
              var if1238 = var_done;
              lineNumber = 114
              onSelf = true;
              var call1239 = callmethod(this, "y", [0]);
              var call1240 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1239);
              onSelf = true;
              var call1241 = callmethod(this, "isPointOver", [1], call1240);
              if (Grace_isTrue(call1241)) {
                lineNumber = 116
                lineNumber = 115
                var bool1242 = new GraceBoolean(true)
                return bool1242
              }
              lineNumber = 120
              var if1243 = var_done;
              lineNumber = 117
              onSelf = true;
              var call1244 = callmethod(this, "y", [0]);
              var call1245 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1244);
              onSelf = true;
              var call1246 = callmethod(this, "isPointOver", [1], call1245);
              if (Grace_isTrue(call1246)) {
                lineNumber = 119
                lineNumber = 118
                var bool1247 = new GraceBoolean(true)
                return bool1247
              }
              lineNumber = 121
              lineNumber = 120
              var bool1248 = new GraceBoolean(false)
              return bool1248
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1227.paramCounts = [
            0,
          ];
          func1227.variableArities = [
            false,
          ];
          obj1126.methods["touchingEdge"] = func1227;
          func1227.definitionLine = 107;
          func1227.definitionModule = "musical";
          var func1249 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 124
              lineNumber = 123
              var var_dx = new GraceNum(0);
              lineNumber = 124;
              moduleName = "musical";
              lineNumber = 123
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 125
              lineNumber = 124
              var var_dy = new GraceNum(0);
              lineNumber = 125;
              moduleName = "musical";
              lineNumber = 124
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 128
              var if1250 = var_done;
              lineNumber = 125
              onSelf = true;
              var call1251 = callmethod(this, "x", [0]);
              var call1252 = callmethod(var_point,"x()y", [1, 1], call1251, new GraceNum(0));
              onSelf = true;
              var call1253 = callmethod(this, "isPointOver", [1], call1252);
              if (Grace_isTrue(call1253)) {
                lineNumber = 126
                onSelf = true;
                var call1254 = callmethod(this, "bounceFrom", [1], var_top);
                if1250 = call1254;
              }
              lineNumber = 131
              var if1255 = var_done;
              lineNumber = 128
              onSelf = true;
              var call1256 = callmethod(this, "x", [0]);
              var call1257 = callmethod(var_point,"x()y", [1, 1], call1256, var_canvasHeight);
              onSelf = true;
              var call1258 = callmethod(this, "isPointOver", [1], call1257);
              if (Grace_isTrue(call1258)) {
                lineNumber = 129
                onSelf = true;
                var call1259 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1255 = call1259;
              }
              lineNumber = 134
              var if1260 = var_done;
              lineNumber = 131
              onSelf = true;
              var call1261 = callmethod(this, "y", [0]);
              var call1262 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1261);
              onSelf = true;
              var call1263 = callmethod(this, "isPointOver", [1], call1262);
              if (Grace_isTrue(call1263)) {
                lineNumber = 132
                onSelf = true;
                var call1264 = callmethod(this, "bounceFrom", [1], var_left);
                if1260 = call1264;
              }
              lineNumber = 137
              var if1265 = var_done;
              lineNumber = 134
              onSelf = true;
              var call1266 = callmethod(this, "y", [0]);
              var call1267 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1266);
              onSelf = true;
              var call1268 = callmethod(this, "isPointOver", [1], call1267);
              if (Grace_isTrue(call1268)) {
                lineNumber = 135
                onSelf = true;
                var call1269 = callmethod(this, "bounceFrom", [1], var_right);
                if1265 = call1269;
              }
              lineNumber = 137
              var block1270 = Grace_allocObject();
              block1270.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1270.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1270.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1270.methods["match"] = GraceBlock_match;
              block1270.methods["prefix?"] = GraceBlock_lift;
              block1270.receiver = this;
              block1270.className = 'block<musical:137>';
              block1270.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1271 = callmethod(this, "touchingEdge", [0]);
                return call1271;
              };
              lineNumber = 140
              var block1272 = Grace_allocObject();
              block1272.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1272.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1272.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1272.methods["match"] = GraceBlock_match;
              block1272.methods["prefix?"] = GraceBlock_lift;
              block1272.receiver = this;
              block1272.className = 'block<musical:140>';
              block1272.real = function(
              ) {
                sourceObject = this;
                lineNumber = 138
                onSelf = true;
                var call1273 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1273;
              };
              var call1274 = callmethod(Grace_prelude,"while()do", [1, 1], block1270, block1272);
              return call1274
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
          obj1126.methods["bounce"] = func1249;
          func1249.definitionLine = 122;
          func1249.definitionModule = "musical";
          var func1275 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 145
              var if1276 = var_done;
              lineNumber = 142
              var string1277 = new GraceString("left");
              var opresult1280 = callmethod(var_dir, "==", [1], string1277);
              if (Grace_isTrue(opresult1280)) {
                lineNumber = 144
                lineNumber = 85
                lineNumber = 144
                lineNumber = 143
                onSelf = true;
                var call1281 = callmethod(this, "angle", [0]);
                var diff1284 = callmethod(new GraceNum(360), "-", [1], call1281);
                onSelf = true;
                var call1285 = callmethod(this, "angle:=", [1], diff1284);
                if1276 = call1285;
              }
              lineNumber = 148
              var if1286 = var_done;
              lineNumber = 145
              var string1287 = new GraceString("right");
              var opresult1290 = callmethod(var_dir, "==", [1], string1287);
              if (Grace_isTrue(opresult1290)) {
                lineNumber = 147
                lineNumber = 85
                lineNumber = 147
                lineNumber = 146
                onSelf = true;
                var call1291 = callmethod(this, "angle", [0]);
                var diff1294 = callmethod(new GraceNum(360), "-", [1], call1291);
                onSelf = true;
                var call1295 = callmethod(this, "angle:=", [1], diff1294);
                if1286 = call1295;
              }
              lineNumber = 151
              var if1296 = var_done;
              lineNumber = 148
              var string1297 = new GraceString("top");
              var opresult1300 = callmethod(var_dir, "==", [1], string1297);
              if (Grace_isTrue(opresult1300)) {
                lineNumber = 150
                lineNumber = 85
                lineNumber = 150
                lineNumber = 149
                onSelf = true;
                var call1301 = callmethod(this, "angle", [0]);
                var diff1304 = callmethod(new GraceNum(180), "-", [1], call1301);
                onSelf = true;
                var call1305 = callmethod(this, "angle:=", [1], diff1304);
                if1296 = call1305;
              }
              lineNumber = 154
              var if1306 = var_done;
              lineNumber = 151
              var string1307 = new GraceString("bottom");
              var opresult1310 = callmethod(var_dir, "==", [1], string1307);
              if (Grace_isTrue(opresult1310)) {
                lineNumber = 153
                lineNumber = 85
                lineNumber = 153
                lineNumber = 152
                onSelf = true;
                var call1311 = callmethod(this, "angle", [0]);
                var diff1314 = callmethod(new GraceNum(180), "-", [1], call1311);
                onSelf = true;
                var call1315 = callmethod(this, "angle:=", [1], diff1314);
                if1306 = call1315;
              }
              lineNumber = 154
              onSelf = true;
              var call1316 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 155
              onSelf = true;
              var call1317 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1317
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
          obj1126.methods["bounceFrom"] = func1275;
          func1275.definitionLine = 141;
          func1275.definitionModule = "musical";
          var func1318 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 161
              var if1319 = var_done;
              lineNumber = 158
              var call1320 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1322 = callmethod(this, "x", [0]);
              var opresult1324 = callmethod(call1322, ">", [1], call1320);
              if (Grace_isTrue(opresult1324)) {
                lineNumber = 159
                onSelf = true;
                var call1325 = callmethod(this, "bounceFrom", [1], var_left);
                if1319 = call1325;
              }
              lineNumber = 164
              var if1326 = var_done;
              lineNumber = 161
              var call1327 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1329 = callmethod(this, "x", [0]);
              var opresult1331 = callmethod(call1329, "<", [1], call1327);
              if (Grace_isTrue(opresult1331)) {
                lineNumber = 162
                onSelf = true;
                var call1332 = callmethod(this, "bounceFrom", [1], var_right);
                if1326 = call1332;
              }
              lineNumber = 164
              var block1333 = Grace_allocObject();
              block1333.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1333.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1333.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1333.methods["match"] = GraceBlock_match;
              block1333.methods["prefix?"] = GraceBlock_lift;
              block1333.receiver = this;
              block1333.className = 'block<musical:164>';
              block1333.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1334 = callmethod(this, "touching", [1], var_other);
                return call1334;
              };
              lineNumber = 167
              var block1335 = Grace_allocObject();
              block1335.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1335.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1335.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1335.methods["match"] = GraceBlock_match;
              block1335.methods["prefix?"] = GraceBlock_lift;
              block1335.receiver = this;
              block1335.className = 'block<musical:167>';
              block1335.real = function(
              ) {
                sourceObject = this;
                lineNumber = 165
                onSelf = true;
                var call1336 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1336;
              };
              var call1337 = callmethod(Grace_prelude,"while()do", [1, 1], block1333, block1335);
              return call1337
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1318.paramCounts = [
            1,
          ];
          func1318.variableArities = [
            false,
          ];
          obj1126.methods["bounceOff"] = func1318;
          func1318.definitionLine = 157;
          func1318.definitionModule = "musical";
          var func1338 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 169
              onSelf = true;
              var call1339 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1340 = callmethod(this, "y", [0]);
              var call1341 = callmethod(var_point,"x()y", [1, 1], call1339, call1340);
              var call1342 = callmethod(var_other,"isPointOver", [1], call1341);
              return call1342
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1338.paramCounts = [
            1,
          ];
          func1338.variableArities = [
            false,
          ];
          obj1126.methods["touching"] = func1338;
          func1338.definitionLine = 168;
          func1338.definitionModule = "musical";
          var func1343 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1343.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 175
              var if1344 = var_done;
              lineNumber = 172
              onSelf = true;
              var call1345 = callmethod(this, "y", [0]);
              var call1347 = callmethod(var_other,"y", [0]);
              var opresult1349 = callmethod(call1347, "!=", [1], call1345);
              onSelf = true;
              var call1351 = callmethod(this, "x", [0]);
              var call1353 = callmethod(var_other,"x", [0]);
              var opresult1355 = callmethod(call1353, "!=", [1], call1351);
              var opresult1357 = callmethod(opresult1355, "||", [1], opresult1349);
              if (Grace_isTrue(opresult1357)) {
                lineNumber = 174
                lineNumber = 172
                lineNumber = 174
                lineNumber = 173
                onSelf = true;
                var call1360 = callmethod(this, "x", [0]);
                var call1362 = callmethod(var_other,"x", [0]);
                var diff1364 = callmethod(call1362, "-", [1], call1360);
                onSelf = true;
                var call1365 = callmethod(this, "y", [0]);
                var call1367 = callmethod(var_other,"y", [0]);
                var diff1369 = callmethod(call1367, "-", [1], call1365);
                var call1370 = callmethod(var_trig,"atan2", [2], diff1364, diff1369);
                var prod1372 = callmethod(call1370, "*", [1], new GraceNum(180));
                var quotient1374 = callmethod(prod1372, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1375 = callmethod(this, "angle:=", [1], quotient1374);
                if1344 = call1375;
              }
              lineNumber = 175
              onSelf = true;
              var call1376 = callmethod(this, "normaliseAngle", [0]);
              return call1376
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1343.paramCounts = [
            1,
          ];
          func1343.variableArities = [
            false,
          ];
          obj1126.methods["face"] = func1343;
          func1343.definitionLine = 171;
          func1343.definitionModule = "musical";
          var func1377 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1377.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 178
              var string1378 = new GraceString("2d");
              var call1379 = callmethod(var_backingCanvas,"getContext", [1], string1378);
              onSelf = true;
              var call1380 = callmethod(this, "draw", [1], call1379);
              return call1380
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1377.paramCounts = [
            0,
          ];
          func1377.variableArities = [
            false,
          ];
          obj1126.methods["stamp"] = func1377;
          func1377.definitionLine = 177;
          func1377.definitionModule = "musical";
          sourceObject = obj1126;
          lineNumber = 49
          var call1381 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1382 = callmethod(call1381, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1383 = callmethod(call1382, "initialise", [0]);
          sourceObject = obj1126;
          lineNumber = 50
          var call1384 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1126;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1126;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1126;
          lineNumber = 53
          var call1385 = callmethod(var_collections,"list", [0]);
          var call1386 = callmethod(call1385,"new", [0]);
          obj1126.data["alwaysBlocks"] = call1386;
          var reader_musical_alwaysBlocks_1387 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1387.def = true;
          reader_musical_alwaysBlocks_1387.confidential = true;
          obj1126.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1387;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1386)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1126;
          lineNumber = 55
          lineNumber = 54
          var quotient1390 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1126.data["x"] = quotient1390;
          var reader_musical_x_1391 = function() {
            return this.data["x"];
          }
          obj1126.methods["x"] = reader_musical_x_1391;
          obj1126.data["x"] = quotient1390;
          var writer_musical_x_1391 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1126.methods["x:="] = writer_musical_x_1391;
          writer_musical_x_1391.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1390)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1126.mutable = true;
          sourceObject = obj1126;
          lineNumber = 56
          lineNumber = 55
          var quotient1394 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1126.data["y"] = quotient1394;
          var reader_musical_y_1395 = function() {
            return this.data["y"];
          }
          obj1126.methods["y"] = reader_musical_y_1395;
          obj1126.data["y"] = quotient1394;
          var writer_musical_y_1395 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1126.methods["y:="] = writer_musical_y_1395;
          writer_musical_y_1395.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1394)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1126.mutable = true;
          sourceObject = obj1126;
          lineNumber = 56
          onSelf = true;
          var call1396 = callmethod(this, "x", [0]);
          obj1126.data["destX"] = call1396;
          var reader_musical_destX_1397 = function() {
            return this.data["destX"];
          }
          obj1126.methods["destX"] = reader_musical_destX_1397;
          obj1126.data["destX"] = call1396;
          var writer_musical_destX_1397 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1126.methods["destX:="] = writer_musical_destX_1397;
          reader_musical_destX_1397.confidential = true;
          writer_musical_destX_1397.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1396)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1126.mutable = true;
          sourceObject = obj1126;
          lineNumber = 57
          onSelf = true;
          var call1398 = callmethod(this, "y", [0]);
          obj1126.data["destY"] = call1398;
          var reader_musical_destY_1399 = function() {
            return this.data["destY"];
          }
          obj1126.methods["destY"] = reader_musical_destY_1399;
          obj1126.data["destY"] = call1398;
          var writer_musical_destY_1399 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1126.methods["destY:="] = writer_musical_destY_1399;
          reader_musical_destY_1399.confidential = true;
          writer_musical_destY_1399.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1398)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1126.mutable = true;
          sourceObject = obj1126;
          lineNumber = 58
          obj1126.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1400 = function() {
            return this.data["angle"];
          }
          obj1126.methods["angle"] = reader_musical_angle_1400;
          obj1126.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1400 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1126.methods["angle:="] = writer_musical_angle_1400;
          reader_musical_angle_1400.confidential = true;
          writer_musical_angle_1400.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1126.mutable = true;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          sourceObject = obj1126;
          superDepth = origSuperDepth;
        }
        obj_init_1126.apply(obj1126, []);
        return obj1126
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
    obj1123.methods["new"] = func1125;
    func1125.definitionLine = 48;
    func1125.definitionModule = "musical";
    var func1401 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1402 = Grace_allocObject();
        obj1402.definitionModule = "musical";
        obj1402.definitionLine = 48;
        var inho1402 = inheritingObject;
        while (inho1402.superobj) inho1402 = inho1402.superobj;
        inho1402.superobj = obj1402;
        obj1402.data = inheritingObject.data;
        obj1402.outer = this;
        var reader_musical_outer_1403 = function() {
          return this.outer;
        }
        obj1402.methods["outer"] = reader_musical_outer_1403;
        function obj_init_1402() {
          var origSuperDepth = superDepth;
          superDepth = obj1402;
          obj1402.annotations = [];
          var func1404 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1404.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1405 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1406 = Grace_allocObject();
              block1406.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1406.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1406.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1406.methods["match"] = GraceBlock_match;
              block1406.methods["prefix?"] = GraceBlock_lift;
              block1406.receiver = this;
              block1406.className = 'block<musical:63>';
              block1406.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1407 = callmethod(var_b,"apply", [0]);
                return call1407;
              };
              var call1408 = callmethod(Grace_prelude,"for()do", [1, 1], call1405, block1406);
              lineNumber = 63
              onSelf = true;
              var call1409 = callmethod(this, "tick", [0]);
              return call1409
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1404.paramCounts = [
            0,
          ];
          func1404.variableArities = [
            false,
          ];
          obj1402.methods["step"] = func1404;
          func1404.definitionLine = 59;
          func1404.definitionModule = "musical";
          var func1410 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1410.paramCounts[0])
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
          func1410.paramCounts = [
            0,
          ];
          func1410.variableArities = [
            false,
          ];
          obj1402.methods["tick"] = func1410;
          func1410.definitionLine = 65;
          func1410.definitionModule = "musical";
          var func1411 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1411.paramCounts[0])
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
          func1411.paramCounts = [
            1,
          ];
          func1411.variableArities = [
            false,
          ];
          obj1402.methods["draw"] = func1411;
          func1411.definitionLine = 66;
          func1411.definitionModule = "musical";
          var func1412 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1412.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 69
              lineNumber = 61
              lineNumber = 68
              var call1413 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1414 = callmethod(this, "destX:=", [1], call1413);
              lineNumber = 70
              lineNumber = 68
              lineNumber = 69
              var call1415 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1416 = callmethod(this, "destY:=", [1], call1415);
              return call1416
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1412.paramCounts = [
            1,
          ];
          func1412.variableArities = [
            false,
          ];
          obj1402.methods["moveTo"] = func1412;
          func1412.definitionLine = 67;
          func1412.definitionModule = "musical";
          var func1417 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1417.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 73
              lineNumber = 69
              lineNumber = 72
              var call1418 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1419 = callmethod(this, "x:=", [1], call1418);
              lineNumber = 74
              lineNumber = 72
              lineNumber = 73
              var call1420 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1421 = callmethod(this, "y:=", [1], call1420);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              onSelf = true;
              var call1422 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1423 = callmethod(this, "destX:=", [1], call1422);
              lineNumber = 76
              lineNumber = 73
              lineNumber = 75
              onSelf = true;
              var call1424 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1425 = callmethod(this, "destY:=", [1], call1424);
              return call1425
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1417.paramCounts = [
            1,
          ];
          func1417.variableArities = [
            false,
          ];
          obj1402.methods["jumpTo"] = func1417;
          func1417.definitionLine = 71;
          func1417.definitionModule = "musical";
          var func1426 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1426.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 77
              var bool1427 = new GraceBoolean(false)
              return bool1427
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
          obj1402.methods["isPointOver"] = func1426;
          func1426.definitionLine = 77;
          func1426.definitionModule = "musical";
          var func1428 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1428.paramCounts[0])
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
          func1428.paramCounts = [
            0,
          ];
          func1428.variableArities = [
            false,
          ];
          obj1402.methods["mousedown"] = func1428;
          func1428.definitionLine = 78;
          func1428.definitionModule = "musical";
          var func1429 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1429.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 80
              onSelf = true;
              var call1430 = callmethod(this, "alwaysBlocks", [0]);
              var call1431 = callmethod(call1430,"push", [1], var_b);
              return call1431
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
          ];
          func1429.variableArities = [
            false,
          ];
          obj1402.methods["always"] = func1429;
          func1429.definitionLine = 79;
          func1429.definitionModule = "musical";
          var func1432 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1432.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1432.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 83
              lineNumber = 88
              var block1433 = Grace_allocObject();
              block1433.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1433.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1433.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1433.methods["match"] = GraceBlock_match;
              block1433.methods["prefix?"] = GraceBlock_lift;
              block1433.receiver = this;
              block1433.className = 'block<musical:88>';
              block1433.real = function(
              ) {
                sourceObject = this;
                lineNumber = 87
                var if1434 = var_done;
                lineNumber = 84
                var call1435 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1435)) {
                  lineNumber = 85
                  var call1436 = callmethod(var_b,"apply", [0]);
                  if1434 = call1436;
                }
                return if1434;
              };
              onSelf = true;
              var call1437 = callmethod(this, "always", [1], block1433);
              return call1437
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1432.paramCounts = [
            1,
            1,
          ];
          func1432.variableArities = [
            false,
            false,
          ];
          obj1402.methods["whenever()do"] = func1432;
          func1432.definitionLine = 82;
          func1432.definitionModule = "musical";
          var func1438 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1438.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 91
              lineNumber = 90
              onSelf = true;
              var call1442 = callmethod(this, "angle", [0]);
              var quotient1444 = callmethod(call1442, "/", [1], new GraceNum(180));
              var prod1446 = callmethod(quotient1444, "*", [1], var_PI);
              var call1447 = callmethod(var_trig,"cos", [1], prod1446);
              var prod1449 = callmethod(call1447, "*", [1], var_dist);
              var var_y__39__ = prod1449;
              lineNumber = 91;
              moduleName = "musical";
              lineNumber = 90
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1453 = callmethod(this, "angle", [0]);
              var quotient1455 = callmethod(call1453, "/", [1], new GraceNum(180));
              var prod1457 = callmethod(quotient1455, "*", [1], var_PI);
              var call1458 = callmethod(var_trig,"sin", [1], prod1457);
              var prod1460 = callmethod(call1458, "*", [1], var_dist);
              var var_x__39__ = prod1460;
              lineNumber = 92;
              moduleName = "musical";
              lineNumber = 91
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 93
              lineNumber = 85
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1462 = callmethod(this, "x", [0]);
              var opresult1464 = callmethod(call1462, "+", [1], var_x__39__);
              onSelf = true;
              var call1465 = callmethod(this, "x:=", [1], opresult1464);
              lineNumber = 94
              lineNumber = 85
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1467 = callmethod(this, "y", [0]);
              var opresult1469 = callmethod(call1467, "+", [1], var_y__39__);
              onSelf = true;
              var call1470 = callmethod(this, "y:=", [1], opresult1469);
              return call1470
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1438.paramCounts = [
            1,
          ];
          func1438.variableArities = [
            false,
          ];
          obj1402.methods["forward"] = func1438;
          func1438.definitionLine = 89;
          func1438.definitionModule = "musical";
          var func1471 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1471.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 96
              var block1472 = Grace_allocObject();
              block1472.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1472.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1472.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1472.methods["match"] = GraceBlock_match;
              block1472.methods["prefix?"] = GraceBlock_lift;
              block1472.receiver = this;
              block1472.className = 'block<musical:96>';
              block1472.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1474 = callmethod(this, "angle", [0]);
                var opresult1476 = callmethod(call1474, "<", [1], new GraceNum(0));
                return opresult1476;
              };
              lineNumber = 99
              var block1477 = Grace_allocObject();
              block1477.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1477.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1477.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1477.methods["match"] = GraceBlock_match;
              block1477.methods["prefix?"] = GraceBlock_lift;
              block1477.receiver = this;
              block1477.className = 'block<musical:99>';
              block1477.real = function(
              ) {
                sourceObject = this;
                lineNumber = 98
                lineNumber = 85
                lineNumber = 98
                lineNumber = 97
                onSelf = true;
                var call1479 = callmethod(this, "angle", [0]);
                var opresult1481 = callmethod(call1479, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1482 = callmethod(this, "angle:=", [1], opresult1481);
                return call1482;
              };
              var call1483 = callmethod(Grace_prelude,"while()do", [1, 1], block1472, block1477);
              lineNumber = 99
              var block1484 = Grace_allocObject();
              block1484.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1484.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1484.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1484.methods["match"] = GraceBlock_match;
              block1484.methods["prefix?"] = GraceBlock_lift;
              block1484.receiver = this;
              block1484.className = 'block<musical:99>';
              block1484.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1486 = callmethod(this, "angle", [0]);
                var opresult1488 = callmethod(call1486, ">", [1], new GraceNum(360));
                return opresult1488;
              };
              lineNumber = 102
              var block1489 = Grace_allocObject();
              block1489.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1489.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1489.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1489.methods["match"] = GraceBlock_match;
              block1489.methods["prefix?"] = GraceBlock_lift;
              block1489.receiver = this;
              block1489.className = 'block<musical:102>';
              block1489.real = function(
              ) {
                sourceObject = this;
                lineNumber = 101
                lineNumber = 85
                lineNumber = 101
                lineNumber = 100
                onSelf = true;
                var call1491 = callmethod(this, "angle", [0]);
                var diff1493 = callmethod(call1491, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1494 = callmethod(this, "angle:=", [1], diff1493);
                return call1494;
              };
              var call1495 = callmethod(Grace_prelude,"while()do", [1, 1], block1484, block1489);
              return call1495
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1471.paramCounts = [
            0,
          ];
          func1471.variableArities = [
            false,
          ];
          obj1402.methods["normaliseAngle"] = func1471;
          func1471.definitionLine = 95;
          func1471.definitionModule = "musical";
          var func1496 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1496.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 105
              lineNumber = 85
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call1498 = callmethod(this, "angle", [0]);
              var opresult1500 = callmethod(call1498, "+", [1], var_degrees);
              onSelf = true;
              var call1501 = callmethod(this, "angle:=", [1], opresult1500);
              lineNumber = 105
              onSelf = true;
              var call1502 = callmethod(this, "normaliseAngle", [0]);
              return call1502
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1496.paramCounts = [
            1,
          ];
          func1496.variableArities = [
            false,
          ];
          obj1402.methods["turn"] = func1496;
          func1496.definitionLine = 103;
          func1496.definitionModule = "musical";
          var func1503 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1503.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 111
              var if1504 = var_done;
              lineNumber = 108
              onSelf = true;
              var call1505 = callmethod(this, "x", [0]);
              var call1506 = callmethod(var_point,"x()y", [1, 1], call1505, new GraceNum(0));
              onSelf = true;
              var call1507 = callmethod(this, "isPointOver", [1], call1506);
              if (Grace_isTrue(call1507)) {
                lineNumber = 110
                lineNumber = 109
                var bool1508 = new GraceBoolean(true)
                return bool1508
              }
              lineNumber = 114
              var if1509 = var_done;
              lineNumber = 111
              onSelf = true;
              var call1510 = callmethod(this, "x", [0]);
              var call1511 = callmethod(var_point,"x()y", [1, 1], call1510, var_canvasHeight);
              onSelf = true;
              var call1512 = callmethod(this, "isPointOver", [1], call1511);
              if (Grace_isTrue(call1512)) {
                lineNumber = 113
                lineNumber = 112
                var bool1513 = new GraceBoolean(true)
                return bool1513
              }
              lineNumber = 117
              var if1514 = var_done;
              lineNumber = 114
              onSelf = true;
              var call1515 = callmethod(this, "y", [0]);
              var call1516 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1515);
              onSelf = true;
              var call1517 = callmethod(this, "isPointOver", [1], call1516);
              if (Grace_isTrue(call1517)) {
                lineNumber = 116
                lineNumber = 115
                var bool1518 = new GraceBoolean(true)
                return bool1518
              }
              lineNumber = 120
              var if1519 = var_done;
              lineNumber = 117
              onSelf = true;
              var call1520 = callmethod(this, "y", [0]);
              var call1521 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1520);
              onSelf = true;
              var call1522 = callmethod(this, "isPointOver", [1], call1521);
              if (Grace_isTrue(call1522)) {
                lineNumber = 119
                lineNumber = 118
                var bool1523 = new GraceBoolean(true)
                return bool1523
              }
              lineNumber = 121
              lineNumber = 120
              var bool1524 = new GraceBoolean(false)
              return bool1524
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1503.paramCounts = [
            0,
          ];
          func1503.variableArities = [
            false,
          ];
          obj1402.methods["touchingEdge"] = func1503;
          func1503.definitionLine = 107;
          func1503.definitionModule = "musical";
          var func1525 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1525.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 124
              lineNumber = 123
              var var_dx = new GraceNum(0);
              lineNumber = 124;
              moduleName = "musical";
              lineNumber = 123
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 125
              lineNumber = 124
              var var_dy = new GraceNum(0);
              lineNumber = 125;
              moduleName = "musical";
              lineNumber = 124
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 128
              var if1526 = var_done;
              lineNumber = 125
              onSelf = true;
              var call1527 = callmethod(this, "x", [0]);
              var call1528 = callmethod(var_point,"x()y", [1, 1], call1527, new GraceNum(0));
              onSelf = true;
              var call1529 = callmethod(this, "isPointOver", [1], call1528);
              if (Grace_isTrue(call1529)) {
                lineNumber = 126
                onSelf = true;
                var call1530 = callmethod(this, "bounceFrom", [1], var_top);
                if1526 = call1530;
              }
              lineNumber = 131
              var if1531 = var_done;
              lineNumber = 128
              onSelf = true;
              var call1532 = callmethod(this, "x", [0]);
              var call1533 = callmethod(var_point,"x()y", [1, 1], call1532, var_canvasHeight);
              onSelf = true;
              var call1534 = callmethod(this, "isPointOver", [1], call1533);
              if (Grace_isTrue(call1534)) {
                lineNumber = 129
                onSelf = true;
                var call1535 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1531 = call1535;
              }
              lineNumber = 134
              var if1536 = var_done;
              lineNumber = 131
              onSelf = true;
              var call1537 = callmethod(this, "y", [0]);
              var call1538 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1537);
              onSelf = true;
              var call1539 = callmethod(this, "isPointOver", [1], call1538);
              if (Grace_isTrue(call1539)) {
                lineNumber = 132
                onSelf = true;
                var call1540 = callmethod(this, "bounceFrom", [1], var_left);
                if1536 = call1540;
              }
              lineNumber = 137
              var if1541 = var_done;
              lineNumber = 134
              onSelf = true;
              var call1542 = callmethod(this, "y", [0]);
              var call1543 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1542);
              onSelf = true;
              var call1544 = callmethod(this, "isPointOver", [1], call1543);
              if (Grace_isTrue(call1544)) {
                lineNumber = 135
                onSelf = true;
                var call1545 = callmethod(this, "bounceFrom", [1], var_right);
                if1541 = call1545;
              }
              lineNumber = 137
              var block1546 = Grace_allocObject();
              block1546.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1546.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1546.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1546.methods["match"] = GraceBlock_match;
              block1546.methods["prefix?"] = GraceBlock_lift;
              block1546.receiver = this;
              block1546.className = 'block<musical:137>';
              block1546.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1547 = callmethod(this, "touchingEdge", [0]);
                return call1547;
              };
              lineNumber = 140
              var block1548 = Grace_allocObject();
              block1548.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1548.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1548.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1548.methods["match"] = GraceBlock_match;
              block1548.methods["prefix?"] = GraceBlock_lift;
              block1548.receiver = this;
              block1548.className = 'block<musical:140>';
              block1548.real = function(
              ) {
                sourceObject = this;
                lineNumber = 138
                onSelf = true;
                var call1549 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1549;
              };
              var call1550 = callmethod(Grace_prelude,"while()do", [1, 1], block1546, block1548);
              return call1550
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1525.paramCounts = [
            0,
          ];
          func1525.variableArities = [
            false,
          ];
          obj1402.methods["bounce"] = func1525;
          func1525.definitionLine = 122;
          func1525.definitionModule = "musical";
          var func1551 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1551.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 145
              var if1552 = var_done;
              lineNumber = 142
              var string1553 = new GraceString("left");
              var opresult1556 = callmethod(var_dir, "==", [1], string1553);
              if (Grace_isTrue(opresult1556)) {
                lineNumber = 144
                lineNumber = 85
                lineNumber = 144
                lineNumber = 143
                onSelf = true;
                var call1557 = callmethod(this, "angle", [0]);
                var diff1560 = callmethod(new GraceNum(360), "-", [1], call1557);
                onSelf = true;
                var call1561 = callmethod(this, "angle:=", [1], diff1560);
                if1552 = call1561;
              }
              lineNumber = 148
              var if1562 = var_done;
              lineNumber = 145
              var string1563 = new GraceString("right");
              var opresult1566 = callmethod(var_dir, "==", [1], string1563);
              if (Grace_isTrue(opresult1566)) {
                lineNumber = 147
                lineNumber = 85
                lineNumber = 147
                lineNumber = 146
                onSelf = true;
                var call1567 = callmethod(this, "angle", [0]);
                var diff1570 = callmethod(new GraceNum(360), "-", [1], call1567);
                onSelf = true;
                var call1571 = callmethod(this, "angle:=", [1], diff1570);
                if1562 = call1571;
              }
              lineNumber = 151
              var if1572 = var_done;
              lineNumber = 148
              var string1573 = new GraceString("top");
              var opresult1576 = callmethod(var_dir, "==", [1], string1573);
              if (Grace_isTrue(opresult1576)) {
                lineNumber = 150
                lineNumber = 85
                lineNumber = 150
                lineNumber = 149
                onSelf = true;
                var call1577 = callmethod(this, "angle", [0]);
                var diff1580 = callmethod(new GraceNum(180), "-", [1], call1577);
                onSelf = true;
                var call1581 = callmethod(this, "angle:=", [1], diff1580);
                if1572 = call1581;
              }
              lineNumber = 154
              var if1582 = var_done;
              lineNumber = 151
              var string1583 = new GraceString("bottom");
              var opresult1586 = callmethod(var_dir, "==", [1], string1583);
              if (Grace_isTrue(opresult1586)) {
                lineNumber = 153
                lineNumber = 85
                lineNumber = 153
                lineNumber = 152
                onSelf = true;
                var call1587 = callmethod(this, "angle", [0]);
                var diff1590 = callmethod(new GraceNum(180), "-", [1], call1587);
                onSelf = true;
                var call1591 = callmethod(this, "angle:=", [1], diff1590);
                if1582 = call1591;
              }
              lineNumber = 154
              onSelf = true;
              var call1592 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 155
              onSelf = true;
              var call1593 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1593
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1551.paramCounts = [
            1,
          ];
          func1551.variableArities = [
            false,
          ];
          obj1402.methods["bounceFrom"] = func1551;
          func1551.definitionLine = 141;
          func1551.definitionModule = "musical";
          var func1594 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1594.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 161
              var if1595 = var_done;
              lineNumber = 158
              var call1596 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1598 = callmethod(this, "x", [0]);
              var opresult1600 = callmethod(call1598, ">", [1], call1596);
              if (Grace_isTrue(opresult1600)) {
                lineNumber = 159
                onSelf = true;
                var call1601 = callmethod(this, "bounceFrom", [1], var_left);
                if1595 = call1601;
              }
              lineNumber = 164
              var if1602 = var_done;
              lineNumber = 161
              var call1603 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1605 = callmethod(this, "x", [0]);
              var opresult1607 = callmethod(call1605, "<", [1], call1603);
              if (Grace_isTrue(opresult1607)) {
                lineNumber = 162
                onSelf = true;
                var call1608 = callmethod(this, "bounceFrom", [1], var_right);
                if1602 = call1608;
              }
              lineNumber = 164
              var block1609 = Grace_allocObject();
              block1609.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1609.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1609.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1609.methods["match"] = GraceBlock_match;
              block1609.methods["prefix?"] = GraceBlock_lift;
              block1609.receiver = this;
              block1609.className = 'block<musical:164>';
              block1609.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1610 = callmethod(this, "touching", [1], var_other);
                return call1610;
              };
              lineNumber = 167
              var block1611 = Grace_allocObject();
              block1611.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1611.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1611.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1611.methods["match"] = GraceBlock_match;
              block1611.methods["prefix?"] = GraceBlock_lift;
              block1611.receiver = this;
              block1611.className = 'block<musical:167>';
              block1611.real = function(
              ) {
                sourceObject = this;
                lineNumber = 165
                onSelf = true;
                var call1612 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1612;
              };
              var call1613 = callmethod(Grace_prelude,"while()do", [1, 1], block1609, block1611);
              return call1613
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1594.paramCounts = [
            1,
          ];
          func1594.variableArities = [
            false,
          ];
          obj1402.methods["bounceOff"] = func1594;
          func1594.definitionLine = 157;
          func1594.definitionModule = "musical";
          var func1614 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1614.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 169
              onSelf = true;
              var call1615 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1616 = callmethod(this, "y", [0]);
              var call1617 = callmethod(var_point,"x()y", [1, 1], call1615, call1616);
              var call1618 = callmethod(var_other,"isPointOver", [1], call1617);
              return call1618
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1614.paramCounts = [
            1,
          ];
          func1614.variableArities = [
            false,
          ];
          obj1402.methods["touching"] = func1614;
          func1614.definitionLine = 168;
          func1614.definitionModule = "musical";
          var func1619 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1619.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 175
              var if1620 = var_done;
              lineNumber = 172
              onSelf = true;
              var call1621 = callmethod(this, "y", [0]);
              var call1623 = callmethod(var_other,"y", [0]);
              var opresult1625 = callmethod(call1623, "!=", [1], call1621);
              onSelf = true;
              var call1627 = callmethod(this, "x", [0]);
              var call1629 = callmethod(var_other,"x", [0]);
              var opresult1631 = callmethod(call1629, "!=", [1], call1627);
              var opresult1633 = callmethod(opresult1631, "||", [1], opresult1625);
              if (Grace_isTrue(opresult1633)) {
                lineNumber = 174
                lineNumber = 172
                lineNumber = 174
                lineNumber = 173
                onSelf = true;
                var call1636 = callmethod(this, "x", [0]);
                var call1638 = callmethod(var_other,"x", [0]);
                var diff1640 = callmethod(call1638, "-", [1], call1636);
                onSelf = true;
                var call1641 = callmethod(this, "y", [0]);
                var call1643 = callmethod(var_other,"y", [0]);
                var diff1645 = callmethod(call1643, "-", [1], call1641);
                var call1646 = callmethod(var_trig,"atan2", [2], diff1640, diff1645);
                var prod1648 = callmethod(call1646, "*", [1], new GraceNum(180));
                var quotient1650 = callmethod(prod1648, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1651 = callmethod(this, "angle:=", [1], quotient1650);
                if1620 = call1651;
              }
              lineNumber = 175
              onSelf = true;
              var call1652 = callmethod(this, "normaliseAngle", [0]);
              return call1652
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1619.paramCounts = [
            1,
          ];
          func1619.variableArities = [
            false,
          ];
          obj1402.methods["face"] = func1619;
          func1619.definitionLine = 171;
          func1619.definitionModule = "musical";
          var func1653 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1653.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 178
              var string1654 = new GraceString("2d");
              var call1655 = callmethod(var_backingCanvas,"getContext", [1], string1654);
              onSelf = true;
              var call1656 = callmethod(this, "draw", [1], call1655);
              return call1656
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1653.paramCounts = [
            0,
          ];
          func1653.variableArities = [
            false,
          ];
          obj1402.methods["stamp"] = func1653;
          func1653.definitionLine = 177;
          func1653.definitionModule = "musical";
          sourceObject = obj1402;
          lineNumber = 49
          var call1657 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1658 = callmethod(call1657, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1659 = callmethod(call1658, "initialise", [0]);
          sourceObject = obj1402;
          lineNumber = 50
          var call1660 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1402;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1402;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1402;
          lineNumber = 53
          var call1661 = callmethod(var_collections,"list", [0]);
          var call1662 = callmethod(call1661,"new", [0]);
          obj1402.data["alwaysBlocks"] = call1662;
          var reader_musical_alwaysBlocks_1663 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1663.def = true;
          reader_musical_alwaysBlocks_1663.confidential = true;
          obj1402.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1663;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1662)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1402;
          lineNumber = 55
          lineNumber = 54
          var quotient1666 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1402.data["x"] = quotient1666;
          var reader_musical_x_1667 = function() {
            return this.data["x"];
          }
          obj1402.methods["x"] = reader_musical_x_1667;
          obj1402.data["x"] = quotient1666;
          var writer_musical_x_1667 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1402.methods["x:="] = writer_musical_x_1667;
          writer_musical_x_1667.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1666)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1402.mutable = true;
          sourceObject = obj1402;
          lineNumber = 56
          lineNumber = 55
          var quotient1670 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1402.data["y"] = quotient1670;
          var reader_musical_y_1671 = function() {
            return this.data["y"];
          }
          obj1402.methods["y"] = reader_musical_y_1671;
          obj1402.data["y"] = quotient1670;
          var writer_musical_y_1671 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1402.methods["y:="] = writer_musical_y_1671;
          writer_musical_y_1671.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1670)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1402.mutable = true;
          sourceObject = obj1402;
          lineNumber = 56
          onSelf = true;
          var call1672 = callmethod(this, "x", [0]);
          obj1402.data["destX"] = call1672;
          var reader_musical_destX_1673 = function() {
            return this.data["destX"];
          }
          obj1402.methods["destX"] = reader_musical_destX_1673;
          obj1402.data["destX"] = call1672;
          var writer_musical_destX_1673 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1402.methods["destX:="] = writer_musical_destX_1673;
          reader_musical_destX_1673.confidential = true;
          writer_musical_destX_1673.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1672)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1402.mutable = true;
          sourceObject = obj1402;
          lineNumber = 57
          onSelf = true;
          var call1674 = callmethod(this, "y", [0]);
          obj1402.data["destY"] = call1674;
          var reader_musical_destY_1675 = function() {
            return this.data["destY"];
          }
          obj1402.methods["destY"] = reader_musical_destY_1675;
          obj1402.data["destY"] = call1674;
          var writer_musical_destY_1675 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1402.methods["destY:="] = writer_musical_destY_1675;
          reader_musical_destY_1675.confidential = true;
          writer_musical_destY_1675.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1674)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1402.mutable = true;
          sourceObject = obj1402;
          lineNumber = 58
          obj1402.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1676 = function() {
            return this.data["angle"];
          }
          obj1402.methods["angle"] = reader_musical_angle_1676;
          obj1402.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1676 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1402.methods["angle:="] = writer_musical_angle_1676;
          reader_musical_angle_1676.confidential = true;
          writer_musical_angle_1676.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1402.mutable = true;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          sourceObject = obj1402;
          superDepth = origSuperDepth;
        }
        obj_init_1402.apply(inheritingObject, []);
        return obj1402
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1123.methods["new()object"] = func1401;
    var func1677 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1678 = new GraceString("class drawable");
        return string1678
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1677.paramCounts = [
    ];
    func1677.variableArities = [
    ];
    obj1123.methods["asDebugString"] = func1677;
    func1677.definitionLine = 48;
    func1677.definitionModule = "musical";
    sourceObject = obj1123;
    sourceObject = obj1123;
    superDepth = origSuperDepth;
  }
  obj_init_1123.apply(obj1123, []);
  var var_drawable = obj1123;
  lineNumber = 182
  lineNumber = 219
  lineNumber = 255
  lineNumber = 298
  lineNumber = 315
  var obj1679 = Grace_allocObject();
  obj1679.definitionModule = "musical";
  obj1679.definitionLine = 315;
  obj1679.outer = this;
  var reader_musical_outer_1680 = function() {
    return this.outer;
  }
  obj1679.methods["outer"] = reader_musical_outer_1680;
  function obj_init_1679() {
    var origSuperDepth = superDepth;
    superDepth = obj1679;
    obj1679.annotations = [];
    var func1681 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1681.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 318
        onSelf = true;
        var call1682 = callmethod(this, "position", [0]);
        var call1683 = callmethod(call1682,"x", [0]);
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
    obj1679.methods["x"] = func1681;
    func1681.definitionLine = 317;
    func1681.definitionModule = "musical";
    var func1684 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1684.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 321
        onSelf = true;
        var call1685 = callmethod(this, "position", [0]);
        var call1686 = callmethod(call1685,"y", [0]);
        return call1686
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
    obj1679.methods["y"] = func1684;
    func1684.definitionLine = 320;
    func1684.definitionModule = "musical";
    var func1687 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1687.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 324
        onSelf = true;
        var call1688 = callmethod(this, "position", [0]);
        return call1688
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1687.paramCounts = [
      0,
    ];
    func1687.variableArities = [
      false,
    ];
    obj1679.methods["location"] = func1687;
    func1687.definitionLine = 323;
    func1687.definitionModule = "musical";
    sourceObject = obj1679;
    lineNumber = 316
    var call1689 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1679.data["position"] = call1689;
    var reader_musical_position_1690 = function() {
      return this.data["position"];
    }
    obj1679.methods["position"] = reader_musical_position_1690;
    obj1679.data["position"] = call1689;
    var writer_musical_position_1690 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1679.methods["position:="] = writer_musical_position_1690;
    lineNumber = 316;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1689)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1679.mutable = true;
    sourceObject = obj1679;
    sourceObject = obj1679;
    sourceObject = obj1679;
    superDepth = origSuperDepth;
  }
  obj_init_1679.apply(obj1679, []);
  var var_mouse = obj1679;
  lineNumber = 321
  var func1691 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1691.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 315
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1691.paramCounts = [
    0,
  ];
  func1691.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1691;
  func1691.definitionLine = 321;
  func1691.definitionModule = "musical";
  lineNumber = 315;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 328
  lineNumber = 334
  lineNumber = 339
  lineNumber = 343
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "constructors-of:point:\n x()y\nfresh:circle:\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n radius:=\n mousedown\n isPointOver\n turn\n radius\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n x\n y\n stamp\n angle\n jumpTo\n bounceOff\nfresh:rectangle:\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n turn\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\n colour:=\n x:=\n height:=\n normaliseAngle\n colour\n width:=\n x\n y\n width\n stamp\n angle\n asString\n bounceOff\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n note\n sin\n gymnopedie\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n randomPoint\n playSound\n stopSound\n start\n stop\n atModuleEnd\nmethods-of:point.x()y:\n left\n right\n down\n up\n x\n y\nmethods-of:drawable.new:\n step\n destX:=\n destY:=\n touching\n destX\n destY\n tick\n draw\n x:=\n y:=\n normaliseAngle\n forward\n x\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n whenever()do\n stamp\n turn\n angle\n face\n bounceFrom\n always\n bounce\n touchingEdge\n bounceOff\n alwaysBlocks\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n turn\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n label:=\n x\n y\n label\n stamp\n angle\n bounceOff\nconfidential:\nfresh:image:\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n turn\n url:=\n face\n bounceFrom\n always\n touchingEdge\n imgTag\n step\n destY:=\n whenever()do\n x:=\n height:=\n normaliseAngle\n width:=\n x\n y\n width\n stamp\n angle\n url\n bounceOff\nfresh-methods:\n rectangle\n circle\n image\n value\nconstructors-of:drawable:\n new\nmodules:\n mgcollections\n StandardPrelude\n";
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
    "",
    "method note {",
    "    //dom.window.T(\"sin\").play();",
    "    // dom.window.alert(\"HI\");",
    "}",
    "",
    "method sin (freq) {",
    "    dom.window.t_sin(freq, 0.5);",
    "}",
    "",
    "method gymnopedie {",
    "    dom.window.t_gymnopedie();",
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
    "    dom.window.t_reset();",
    "    canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "",
    "}",
    "method atModuleEnd(module) {",
    "    start",
    "}",
    "",
  ];
}
