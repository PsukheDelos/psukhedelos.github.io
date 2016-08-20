function gracecode_musical () {
  this.definitionModule = "musical";
  this.definitionLine = 0;
  lineNumber = 183
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rectangle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 184
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "musical";
      obj1.definitionLine = 184;
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
            lineNumber = 191
            lineNumber = 1
            lineNumber = 190
            onSelf = true;
            var call4 = callmethod(this, "colour", [0]);
            var call5 = callmethod(var_ctx,"fillStyle:=", [1], call4);
            lineNumber = 191
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
        func3.definitionLine = 189;
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
            lineNumber = 197
            var if26 = var_done;
            lineNumber = 194
            onSelf = true;
            var call28 = callmethod(this, "width", [0]);
            var quotient30 = callmethod(call28, "/", [1], new GraceNum(2));
            onSelf = true;
            var call32 = callmethod(this, "x", [0]);
            var diff34 = callmethod(call32, "-", [1], quotient30);
            var call36 = callmethod(var_p,"x", [0]);
            var opresult38 = callmethod(call36, "<", [1], diff34);
            if (Grace_isTrue(opresult38)) {
              lineNumber = 196
              lineNumber = 195
              var bool39 = new GraceBoolean(false)
              return bool39
            }
            lineNumber = 200
            var if40 = var_done;
            lineNumber = 197
            onSelf = true;
            var call42 = callmethod(this, "width", [0]);
            var quotient44 = callmethod(call42, "/", [1], new GraceNum(2));
            onSelf = true;
            var call46 = callmethod(this, "x", [0]);
            var opresult48 = callmethod(call46, "+", [1], quotient44);
            var call50 = callmethod(var_p,"x", [0]);
            var opresult52 = callmethod(call50, ">", [1], opresult48);
            if (Grace_isTrue(opresult52)) {
              lineNumber = 199
              lineNumber = 198
              var bool53 = new GraceBoolean(false)
              return bool53
            }
            lineNumber = 203
            var if54 = var_done;
            lineNumber = 200
            onSelf = true;
            var call56 = callmethod(this, "height", [0]);
            var quotient58 = callmethod(call56, "/", [1], new GraceNum(2));
            onSelf = true;
            var call60 = callmethod(this, "y", [0]);
            var diff62 = callmethod(call60, "-", [1], quotient58);
            var call64 = callmethod(var_p,"y", [0]);
            var opresult66 = callmethod(call64, "<", [1], diff62);
            if (Grace_isTrue(opresult66)) {
              lineNumber = 202
              lineNumber = 201
              var bool67 = new GraceBoolean(false)
              return bool67
            }
            lineNumber = 206
            var if68 = var_done;
            lineNumber = 203
            onSelf = true;
            var call70 = callmethod(this, "height", [0]);
            var quotient72 = callmethod(call70, "/", [1], new GraceNum(2));
            onSelf = true;
            var call74 = callmethod(this, "y", [0]);
            var opresult76 = callmethod(call74, "+", [1], quotient72);
            var call78 = callmethod(var_p,"y", [0]);
            var opresult80 = callmethod(call78, ">", [1], opresult76);
            if (Grace_isTrue(opresult80)) {
              lineNumber = 205
              lineNumber = 204
              var bool81 = new GraceBoolean(false)
              return bool81
            }
            lineNumber = 207
            lineNumber = 206
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
        func25.definitionLine = 193;
        func25.definitionModule = "musical";
        var func83 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func83.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 210
            lineNumber = 209
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
        func83.definitionLine = 208;
        func83.definitionModule = "musical";
        sourceObject = obj1;
        lineNumber = 185
        var call85 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj1.superobj = call85;
        obj1._value = call85._value;
        sourceObject = obj1;
        lineNumber = 186
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
        lineNumber = 187;
        moduleName = "musical";
        lineNumber = 186
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 187
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
        lineNumber = 188;
        moduleName = "musical";
        lineNumber = 187
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 188
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
        lineNumber = 189;
        moduleName = "musical";
        lineNumber = 188
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
  func0.definitionLine = 183;
  func0.definitionModule = "musical";
  var func90 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj91 = Grace_allocObject();
      obj91.definitionModule = "musical";
      obj91.definitionLine = 184;
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
            lineNumber = 191
            lineNumber = 203
            lineNumber = 190
            onSelf = true;
            var call94 = callmethod(this, "colour", [0]);
            var call95 = callmethod(var_ctx,"fillStyle:=", [1], call94);
            lineNumber = 191
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
        func93.definitionLine = 189;
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
            lineNumber = 197
            var if116 = var_done;
            lineNumber = 194
            onSelf = true;
            var call118 = callmethod(this, "width", [0]);
            var quotient120 = callmethod(call118, "/", [1], new GraceNum(2));
            onSelf = true;
            var call122 = callmethod(this, "x", [0]);
            var diff124 = callmethod(call122, "-", [1], quotient120);
            var call126 = callmethod(var_p,"x", [0]);
            var opresult128 = callmethod(call126, "<", [1], diff124);
            if (Grace_isTrue(opresult128)) {
              lineNumber = 196
              lineNumber = 195
              var bool129 = new GraceBoolean(false)
              return bool129
            }
            lineNumber = 200
            var if130 = var_done;
            lineNumber = 197
            onSelf = true;
            var call132 = callmethod(this, "width", [0]);
            var quotient134 = callmethod(call132, "/", [1], new GraceNum(2));
            onSelf = true;
            var call136 = callmethod(this, "x", [0]);
            var opresult138 = callmethod(call136, "+", [1], quotient134);
            var call140 = callmethod(var_p,"x", [0]);
            var opresult142 = callmethod(call140, ">", [1], opresult138);
            if (Grace_isTrue(opresult142)) {
              lineNumber = 199
              lineNumber = 198
              var bool143 = new GraceBoolean(false)
              return bool143
            }
            lineNumber = 203
            var if144 = var_done;
            lineNumber = 200
            onSelf = true;
            var call146 = callmethod(this, "height", [0]);
            var quotient148 = callmethod(call146, "/", [1], new GraceNum(2));
            onSelf = true;
            var call150 = callmethod(this, "y", [0]);
            var diff152 = callmethod(call150, "-", [1], quotient148);
            var call154 = callmethod(var_p,"y", [0]);
            var opresult156 = callmethod(call154, "<", [1], diff152);
            if (Grace_isTrue(opresult156)) {
              lineNumber = 202
              lineNumber = 201
              var bool157 = new GraceBoolean(false)
              return bool157
            }
            lineNumber = 206
            var if158 = var_done;
            lineNumber = 203
            onSelf = true;
            var call160 = callmethod(this, "height", [0]);
            var quotient162 = callmethod(call160, "/", [1], new GraceNum(2));
            onSelf = true;
            var call164 = callmethod(this, "y", [0]);
            var opresult166 = callmethod(call164, "+", [1], quotient162);
            var call168 = callmethod(var_p,"y", [0]);
            var opresult170 = callmethod(call168, ">", [1], opresult166);
            if (Grace_isTrue(opresult170)) {
              lineNumber = 205
              lineNumber = 204
              var bool171 = new GraceBoolean(false)
              return bool171
            }
            lineNumber = 207
            lineNumber = 206
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
        func115.definitionLine = 193;
        func115.definitionModule = "musical";
        var func173 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func173.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 210
            lineNumber = 209
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
        func173.definitionLine = 208;
        func173.definitionModule = "musical";
        sourceObject = obj91;
        lineNumber = 185
        var call175 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj91.superobj = call175;
        obj91._value = call175._value;
        sourceObject = obj91;
        lineNumber = 186
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
        lineNumber = 187;
        moduleName = "musical";
        lineNumber = 186
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 187
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
        lineNumber = 188;
        moduleName = "musical";
        lineNumber = 187
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 188
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
        lineNumber = 189;
        moduleName = "musical";
        lineNumber = 188
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
  lineNumber = 220
  var type180 = new GraceType("SniffCircle");
  var var_SniffCircle = type180;
  type180.typeMethods.push("x");
  type180.typeMethods.push("y");
  type180.typeMethods.push("radius");
  type180.typeMethods.push("colour");
  lineNumber = 203
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
  func181.definitionLine = 203;
  func181.definitionModule = "musical";
  var type_SniffCircle = var_SniffCircle;
  lineNumber = 220
  var func182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func182.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (circle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 221
      var obj183 = Grace_allocObject();
      obj183.definitionModule = "musical";
      obj183.definitionLine = 221;
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
            lineNumber = 227
            lineNumber = 203
            lineNumber = 226
            onSelf = true;
            var call186 = callmethod(this, "colour", [0]);
            var call187 = callmethod(var_ctx,"fillStyle:=", [1], call186);
            lineNumber = 227
            var call188 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 228
            onSelf = true;
            var call189 = callmethod(this, "x", [0]);
            onSelf = true;
            var call190 = callmethod(this, "y", [0]);
            onSelf = true;
            var call191 = callmethod(this, "radius", [0]);
            var call192 = callmethod(var_ctx,"arc", [5], call189, call190, call191, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 229
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
        func185.definitionLine = 225;
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
            lineNumber = 233
            lineNumber = 232
            onSelf = true;
            var call195 = callmethod(this, "x", [0]);
            var call197 = callmethod(var_p,"x", [0]);
            var diff199 = callmethod(call197, "-", [1], call195);
            var var_dx = diff199;
            lineNumber = 233;
            moduleName = "musical";
            lineNumber = 232
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 234
            lineNumber = 233
            onSelf = true;
            var call200 = callmethod(this, "y", [0]);
            var call202 = callmethod(var_p,"y", [0]);
            var diff204 = callmethod(call202, "-", [1], call200);
            var var_dy = diff204;
            lineNumber = 234;
            moduleName = "musical";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 235
            lineNumber = 234
            var prod208 = callmethod(var_dy, "*", [1], var_dy);
            var prod212 = callmethod(var_dx, "*", [1], var_dx);
            var opresult214 = callmethod(prod212, "+", [1], prod208);
            var opresult216 = callmethod(opresult214, "^", [1], new GraceNum(0.5));
            var var_dist = opresult216;
            lineNumber = 235;
            moduleName = "musical";
            lineNumber = 234
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 238
            var if217 = var_done;
            lineNumber = 235
            onSelf = true;
            var call218 = callmethod(this, "radius", [0]);
            var opresult221 = callmethod(var_dist, "<=", [1], call218);
            if (Grace_isTrue(opresult221)) {
              lineNumber = 237
              lineNumber = 236
              var bool222 = new GraceBoolean(true)
              return bool222
            }
            lineNumber = 239
            lineNumber = 238
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
        func194.definitionLine = 231;
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
            lineNumber = 251
            var if225 = var_done;
            lineNumber = 241
            var call226 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call226)) {
              lineNumber = 243
              lineNumber = 242
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
              lineNumber = 243;
              moduleName = "musical";
              lineNumber = 242
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 246
              var if246 = var_done;
              lineNumber = 243
              var opresult249 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult249)) {
                lineNumber = 245
                lineNumber = 244
                var bool250 = new GraceBoolean(true)
                return bool250
              }
              lineNumber = 249
              var if251 = var_done;
              lineNumber = 246
              onSelf = true;
              var call252 = callmethod(this, "radius", [0]);
              var call254 = callmethod(var_other,"radius", [0]);
              var opresult256 = callmethod(call254, "+", [1], call252);
              var opresult260 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult262 = callmethod(opresult260, "<", [1], opresult256);
              if (Grace_isTrue(opresult262)) {
                lineNumber = 248
                lineNumber = 247
                var bool263 = new GraceBoolean(true)
                return bool263
              }
              lineNumber = 250
              lineNumber = 249
              var bool264 = new GraceBoolean(false)
              return bool264
            }
            lineNumber = 251
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
        func224.definitionLine = 240;
        func224.definitionModule = "musical";
        sourceObject = obj183;
        lineNumber = 222
        var call266 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj183.superobj = call266;
        obj183._value = call266._value;
        sourceObject = obj183;
        lineNumber = 223
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
        lineNumber = 224;
        moduleName = "musical";
        lineNumber = 223
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        lineNumber = 224
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
        lineNumber = 225;
        moduleName = "musical";
        lineNumber = 224
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
  func182.definitionLine = 220;
  func182.definitionModule = "musical";
  var func270 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj271 = Grace_allocObject();
      obj271.definitionModule = "musical";
      obj271.definitionLine = 221;
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
            lineNumber = 227
            lineNumber = 246
            lineNumber = 226
            onSelf = true;
            var call274 = callmethod(this, "colour", [0]);
            var call275 = callmethod(var_ctx,"fillStyle:=", [1], call274);
            lineNumber = 227
            var call276 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 228
            onSelf = true;
            var call277 = callmethod(this, "x", [0]);
            onSelf = true;
            var call278 = callmethod(this, "y", [0]);
            onSelf = true;
            var call279 = callmethod(this, "radius", [0]);
            var call280 = callmethod(var_ctx,"arc", [5], call277, call278, call279, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 229
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
        func273.definitionLine = 225;
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
            lineNumber = 233
            lineNumber = 232
            onSelf = true;
            var call283 = callmethod(this, "x", [0]);
            var call285 = callmethod(var_p,"x", [0]);
            var diff287 = callmethod(call285, "-", [1], call283);
            var var_dx = diff287;
            lineNumber = 233;
            moduleName = "musical";
            lineNumber = 232
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 234
            lineNumber = 233
            onSelf = true;
            var call288 = callmethod(this, "y", [0]);
            var call290 = callmethod(var_p,"y", [0]);
            var diff292 = callmethod(call290, "-", [1], call288);
            var var_dy = diff292;
            lineNumber = 234;
            moduleName = "musical";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 235
            lineNumber = 234
            var prod296 = callmethod(var_dy, "*", [1], var_dy);
            var prod300 = callmethod(var_dx, "*", [1], var_dx);
            var opresult302 = callmethod(prod300, "+", [1], prod296);
            var opresult304 = callmethod(opresult302, "^", [1], new GraceNum(0.5));
            var var_dist = opresult304;
            lineNumber = 235;
            moduleName = "musical";
            lineNumber = 234
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 238
            var if305 = var_done;
            lineNumber = 235
            onSelf = true;
            var call306 = callmethod(this, "radius", [0]);
            var opresult309 = callmethod(var_dist, "<=", [1], call306);
            if (Grace_isTrue(opresult309)) {
              lineNumber = 237
              lineNumber = 236
              var bool310 = new GraceBoolean(true)
              return bool310
            }
            lineNumber = 239
            lineNumber = 238
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
        func282.definitionLine = 231;
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
            lineNumber = 251
            var if313 = var_done;
            lineNumber = 241
            var call314 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call314)) {
              lineNumber = 243
              lineNumber = 242
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
              lineNumber = 243;
              moduleName = "musical";
              lineNumber = 242
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 246
              var if334 = var_done;
              lineNumber = 243
              var opresult337 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult337)) {
                lineNumber = 245
                lineNumber = 244
                var bool338 = new GraceBoolean(true)
                return bool338
              }
              lineNumber = 249
              var if339 = var_done;
              lineNumber = 246
              onSelf = true;
              var call340 = callmethod(this, "radius", [0]);
              var call342 = callmethod(var_other,"radius", [0]);
              var opresult344 = callmethod(call342, "+", [1], call340);
              var opresult348 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult350 = callmethod(opresult348, "<", [1], opresult344);
              if (Grace_isTrue(opresult350)) {
                lineNumber = 248
                lineNumber = 247
                var bool351 = new GraceBoolean(true)
                return bool351
              }
              lineNumber = 250
              lineNumber = 249
              var bool352 = new GraceBoolean(false)
              return bool352
            }
            lineNumber = 251
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
        func312.definitionLine = 240;
        func312.definitionModule = "musical";
        sourceObject = obj271;
        lineNumber = 222
        var call354 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj271.superobj = call354;
        obj271._value = call354._value;
        sourceObject = obj271;
        lineNumber = 223
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
        lineNumber = 224;
        moduleName = "musical";
        lineNumber = 223
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        lineNumber = 224
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
        lineNumber = 225;
        moduleName = "musical";
        lineNumber = 224
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
  lineNumber = 256
  var func358 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func358.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 257
      var obj359 = Grace_allocObject();
      obj359.definitionModule = "musical";
      obj359.definitionLine = 257;
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
            lineNumber = 263
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
        func361.definitionLine = 262;
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
            lineNumber = 267
            lineNumber = 263
            lineNumber = 266
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
        func364.definitionLine = 265;
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
            lineNumber = 269
            var call368 = callmethod(var_ctx,"save", [0]);
            lineNumber = 270
            onSelf = true;
            var call369 = callmethod(this, "x", [0]);
            onSelf = true;
            var call370 = callmethod(this, "y", [0]);
            var call371 = callmethod(var_ctx,"translate", [2], call369, call370);
            lineNumber = 271
            onSelf = true;
            var call375 = callmethod(this, "angle", [0]);
            var opresult377 = callmethod(call375, "+", [1], new GraceNum(180));
            var call378 = callmethod(opresult377,"prefix-", [0]);
            var quotient380 = callmethod(call378, "/", [1], new GraceNum(180));
            var prod382 = callmethod(quotient380, "*", [1], new GraceNum(3.1415));
            var call383 = callmethod(var_ctx,"rotate", [1], prod382);
            lineNumber = 272
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
            lineNumber = 273
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
        func367.definitionLine = 268;
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
            lineNumber = 278
            onSelf = true;
            var call403 = callmethod(this, "angle", [0]);
            var opresult405 = callmethod(call403, "+", [1], new GraceNum(180));
            var call406 = callmethod(opresult405,"prefix-", [0]);
            var quotient408 = callmethod(call406, "/", [1], new GraceNum(180));
            var prod410 = callmethod(quotient408, "*", [1], new GraceNum(3.1415));
            var call411 = callmethod(var_trig,"cos", [1], prod410);
            var var_c = call411;
            lineNumber = 278;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 279
            onSelf = true;
            var call415 = callmethod(this, "angle", [0]);
            var opresult417 = callmethod(call415, "+", [1], new GraceNum(180));
            var call418 = callmethod(opresult417,"prefix-", [0]);
            var quotient420 = callmethod(call418, "/", [1], new GraceNum(180));
            var prod422 = callmethod(quotient420, "*", [1], new GraceNum(3.1415));
            var call423 = callmethod(var_trig,"sin", [1], prod422);
            var var_s = call423;
            lineNumber = 279;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 281
            lineNumber = 280
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
            lineNumber = 281;
            moduleName = "musical";
            lineNumber = 280
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 282
            lineNumber = 281
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
            lineNumber = 282;
            moduleName = "musical";
            lineNumber = 281
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 285
            var if462 = var_done;
            lineNumber = 282
            onSelf = true;
            var call464 = callmethod(this, "width", [0]);
            var call465 = callmethod(call464,"prefix-", [0]);
            var quotient467 = callmethod(call465, "/", [1], new GraceNum(2));
            var opresult470 = callmethod(var_rotatedX, "<", [1], quotient467);
            if (Grace_isTrue(opresult470)) {
              lineNumber = 284
              lineNumber = 283
              var bool471 = new GraceBoolean(false)
              return bool471
            }
            lineNumber = 288
            var if472 = var_done;
            lineNumber = 285
            onSelf = true;
            var call474 = callmethod(this, "width", [0]);
            var quotient476 = callmethod(call474, "/", [1], new GraceNum(2));
            var opresult479 = callmethod(var_rotatedX, ">", [1], quotient476);
            if (Grace_isTrue(opresult479)) {
              lineNumber = 287
              lineNumber = 286
              var bool480 = new GraceBoolean(false)
              return bool480
            }
            lineNumber = 291
            var if481 = var_done;
            lineNumber = 288
            onSelf = true;
            var call483 = callmethod(this, "height", [0]);
            var call484 = callmethod(call483,"prefix-", [0]);
            var quotient486 = callmethod(call484, "/", [1], new GraceNum(2));
            var opresult489 = callmethod(var_rotatedY, "<", [1], quotient486);
            if (Grace_isTrue(opresult489)) {
              lineNumber = 290
              lineNumber = 289
              var bool490 = new GraceBoolean(false)
              return bool490
            }
            lineNumber = 294
            var if491 = var_done;
            lineNumber = 291
            onSelf = true;
            var call493 = callmethod(this, "height", [0]);
            var quotient495 = callmethod(call493, "/", [1], new GraceNum(2));
            var opresult498 = callmethod(var_rotatedY, ">", [1], quotient495);
            if (Grace_isTrue(opresult498)) {
              lineNumber = 293
              lineNumber = 292
              var bool499 = new GraceBoolean(false)
              return bool499
            }
            lineNumber = 295
            lineNumber = 294
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
        func399.definitionLine = 275;
        func399.definitionModule = "musical";
        sourceObject = obj359;
        lineNumber = 258
        var call501 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj359.superobj = call501;
        obj359._value = call501._value;
        sourceObject = obj359;
        lineNumber = 259
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
        lineNumber = 260;
        moduleName = "musical";
        lineNumber = 259
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 260
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
        lineNumber = 261;
        moduleName = "musical";
        lineNumber = 260
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 261
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
        lineNumber = 261;
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
  func358.definitionLine = 256;
  func358.definitionModule = "musical";
  var func508 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj509 = Grace_allocObject();
      obj509.definitionModule = "musical";
      obj509.definitionLine = 257;
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
            lineNumber = 263
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
        func511.definitionLine = 262;
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
            lineNumber = 267
            lineNumber = 263
            lineNumber = 266
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
        func514.definitionLine = 265;
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
            lineNumber = 269
            var call518 = callmethod(var_ctx,"save", [0]);
            lineNumber = 270
            onSelf = true;
            var call519 = callmethod(this, "x", [0]);
            onSelf = true;
            var call520 = callmethod(this, "y", [0]);
            var call521 = callmethod(var_ctx,"translate", [2], call519, call520);
            lineNumber = 271
            onSelf = true;
            var call525 = callmethod(this, "angle", [0]);
            var opresult527 = callmethod(call525, "+", [1], new GraceNum(180));
            var call528 = callmethod(opresult527,"prefix-", [0]);
            var quotient530 = callmethod(call528, "/", [1], new GraceNum(180));
            var prod532 = callmethod(quotient530, "*", [1], new GraceNum(3.1415));
            var call533 = callmethod(var_ctx,"rotate", [1], prod532);
            lineNumber = 272
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
            lineNumber = 273
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
        func517.definitionLine = 268;
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
            lineNumber = 278
            onSelf = true;
            var call553 = callmethod(this, "angle", [0]);
            var opresult555 = callmethod(call553, "+", [1], new GraceNum(180));
            var call556 = callmethod(opresult555,"prefix-", [0]);
            var quotient558 = callmethod(call556, "/", [1], new GraceNum(180));
            var prod560 = callmethod(quotient558, "*", [1], new GraceNum(3.1415));
            var call561 = callmethod(var_trig,"cos", [1], prod560);
            var var_c = call561;
            lineNumber = 278;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 279
            onSelf = true;
            var call565 = callmethod(this, "angle", [0]);
            var opresult567 = callmethod(call565, "+", [1], new GraceNum(180));
            var call568 = callmethod(opresult567,"prefix-", [0]);
            var quotient570 = callmethod(call568, "/", [1], new GraceNum(180));
            var prod572 = callmethod(quotient570, "*", [1], new GraceNum(3.1415));
            var call573 = callmethod(var_trig,"sin", [1], prod572);
            var var_s = call573;
            lineNumber = 279;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 281
            lineNumber = 280
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
            lineNumber = 281;
            moduleName = "musical";
            lineNumber = 280
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 282
            lineNumber = 281
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
            lineNumber = 282;
            moduleName = "musical";
            lineNumber = 281
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 285
            var if612 = var_done;
            lineNumber = 282
            onSelf = true;
            var call614 = callmethod(this, "width", [0]);
            var call615 = callmethod(call614,"prefix-", [0]);
            var quotient617 = callmethod(call615, "/", [1], new GraceNum(2));
            var opresult620 = callmethod(var_rotatedX, "<", [1], quotient617);
            if (Grace_isTrue(opresult620)) {
              lineNumber = 284
              lineNumber = 283
              var bool621 = new GraceBoolean(false)
              return bool621
            }
            lineNumber = 288
            var if622 = var_done;
            lineNumber = 285
            onSelf = true;
            var call624 = callmethod(this, "width", [0]);
            var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
            var opresult629 = callmethod(var_rotatedX, ">", [1], quotient626);
            if (Grace_isTrue(opresult629)) {
              lineNumber = 287
              lineNumber = 286
              var bool630 = new GraceBoolean(false)
              return bool630
            }
            lineNumber = 291
            var if631 = var_done;
            lineNumber = 288
            onSelf = true;
            var call633 = callmethod(this, "height", [0]);
            var call634 = callmethod(call633,"prefix-", [0]);
            var quotient636 = callmethod(call634, "/", [1], new GraceNum(2));
            var opresult639 = callmethod(var_rotatedY, "<", [1], quotient636);
            if (Grace_isTrue(opresult639)) {
              lineNumber = 290
              lineNumber = 289
              var bool640 = new GraceBoolean(false)
              return bool640
            }
            lineNumber = 294
            var if641 = var_done;
            lineNumber = 291
            onSelf = true;
            var call643 = callmethod(this, "height", [0]);
            var quotient645 = callmethod(call643, "/", [1], new GraceNum(2));
            var opresult648 = callmethod(var_rotatedY, ">", [1], quotient645);
            if (Grace_isTrue(opresult648)) {
              lineNumber = 293
              lineNumber = 292
              var bool649 = new GraceBoolean(false)
              return bool649
            }
            lineNumber = 295
            lineNumber = 294
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
        func549.definitionLine = 275;
        func549.definitionModule = "musical";
        sourceObject = obj509;
        lineNumber = 258
        var call651 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj509.superobj = call651;
        obj509._value = call651._value;
        sourceObject = obj509;
        lineNumber = 259
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
        lineNumber = 260;
        moduleName = "musical";
        lineNumber = 259
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 260
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
        lineNumber = 261;
        moduleName = "musical";
        lineNumber = 260
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 261
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
        lineNumber = 261;
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
  lineNumber = 299
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
      lineNumber = 300
      var obj659 = Grace_allocObject();
      obj659.definitionModule = "musical";
      obj659.definitionLine = 300;
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
            lineNumber = 306
            lineNumber = 261
            lineNumber = 305
            onSelf = true;
            var call662 = callmethod(this, "colour", [0]);
            var call663 = callmethod(var_ctx,"fillStyle:=", [1], call662);
            lineNumber = 307
            lineNumber = 261
            lineNumber = 306
            var string664 = new GraceString("20px sans-serif");
            var call665 = callmethod(var_ctx,"font:=", [1], string664);
            lineNumber = 312
            var if666 = var_done;
            lineNumber = 307
            var string667 = new GraceString("");
            onSelf = true;
            var call669 = callmethod(this, "label", [0]);
            var opresult671 = callmethod(call669, "!=", [1], string667);
            if (Grace_isTrue(opresult671)) {
              lineNumber = 308
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
              lineNumber = 310
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
        func661.definitionLine = 304;
        func661.definitionModule = "musical";
        sourceObject = obj659;
        lineNumber = 301
        var call704 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj659.superobj = call704;
        obj659._value = call704._value;
        sourceObject = obj659;
        lineNumber = 302
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
        lineNumber = 303;
        moduleName = "musical";
        lineNumber = 302
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string705)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        lineNumber = 303
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
        lineNumber = 304;
        moduleName = "musical";
        lineNumber = 303
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
  func658.definitionLine = 299;
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
      obj710.definitionLine = 300;
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
            lineNumber = 306
            lineNumber = 310
            lineNumber = 305
            onSelf = true;
            var call713 = callmethod(this, "colour", [0]);
            var call714 = callmethod(var_ctx,"fillStyle:=", [1], call713);
            lineNumber = 307
            lineNumber = 310
            lineNumber = 306
            var string715 = new GraceString("20px sans-serif");
            var call716 = callmethod(var_ctx,"font:=", [1], string715);
            lineNumber = 312
            var if717 = var_done;
            lineNumber = 307
            var string718 = new GraceString("");
            onSelf = true;
            var call720 = callmethod(this, "label", [0]);
            var opresult722 = callmethod(call720, "!=", [1], string718);
            if (Grace_isTrue(opresult722)) {
              lineNumber = 308
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
              lineNumber = 310
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
        func712.definitionLine = 304;
        func712.definitionModule = "musical";
        sourceObject = obj710;
        lineNumber = 301
        var call755 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj710.superobj = call755;
        obj710._value = call755._value;
        sourceObject = obj710;
        lineNumber = 302
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
        lineNumber = 303;
        moduleName = "musical";
        lineNumber = 302
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string756)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        lineNumber = 303
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
        lineNumber = 304;
        moduleName = "musical";
        lineNumber = 303
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
  lineNumber = 329
  var func760 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func760.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 330
      var string761 = new GraceString("2d");
      var call762 = callmethod(var_backingCanvas,"getContext", [1], string761);
      var var_ctx = call762;
      lineNumber = 330;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ctx' to be of type Unknown"))
      lineNumber = 332
      lineNumber = 310
      lineNumber = 331
      var call763 = callmethod(var_ctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 332
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
  func760.definitionLine = 329;
  func760.definitionModule = "musical";
  lineNumber = 334
  var func765 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func765.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 338
      lineNumber = 337
      var var_count = new GraceNum(0);
      lineNumber = 338;
      moduleName = "musical";
      lineNumber = 337
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_count)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'count' to be of type Unknown"))
      lineNumber = 338
      lineNumber = 355
      var block766 = Grace_allocObject();
      block766.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block766.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block766.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block766.methods["match"] = GraceBlock_match;
      block766.methods["prefix?"] = GraceBlock_lift;
      block766.receiver = this;
      block766.className = 'block<musical:355>';
      block766.real = function(
        var_b
      ) {
        sourceObject = this;
        lineNumber = 340
        lineNumber = 339
        var opresult769 = callmethod(var_count, "+", [1], new GraceNum(1));
        var_count = opresult769;
        lineNumber = 340
        var string770 = new GraceString("blocks");
        var call771 = callmethod(var_dom,"window", [0]);
        var call772 = callmethod(call771,"console", [0]);
        var call773 = callmethod(call772,"log", [1], string770);
        lineNumber = 341
        var call774 = callmethod(var_dom,"window", [0]);
        var call775 = callmethod(call774,"console", [0]);
        var call776 = callmethod(call775,"log", [1], var_count);
        return call776;
      };
      var call777 = callmethod(Grace_prelude,"for()do", [1, 1], var_blocks, block766);
      return call777
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
  ];
  func765.variableArities = [
    false,
  ];
  this.methods["always"] = func765;
  func765.definitionLine = 334;
  func765.definitionModule = "musical";
  lineNumber = 356
  var func778 = function(argcv) {
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func778.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func778.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 357
      lineNumber = 359
      var block779 = Grace_allocObject();
      block779.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block779.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block779.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block779.methods["match"] = GraceBlock_match;
      block779.methods["prefix?"] = GraceBlock_lift;
      block779.receiver = this;
      block779.className = 'block<musical:359>';
      block779.real = function(
      ) {
        sourceObject = this;
        var if780 = var_done;
        lineNumber = 358
        var call781 = callmethod(var_c,"apply", [0]);
        if (Grace_isTrue(call781)) {
          var call782 = callmethod(var_b,"apply", [0]);
          if780 = call782;
        }
        return if780;
      };
      lineNumber = 357
      var call783 = callmethod(var_stepBlocks,"push", [1], block779);
      return call783
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func778.paramCounts = [
    1,
    1,
  ];
  func778.variableArities = [
    false,
    false,
  ];
  this.methods["whenever()do"] = func778;
  func778.definitionLine = 356;
  func778.definitionModule = "musical";
  lineNumber = 361
  var func784 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func784.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (hue)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func784.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (saturation)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func784.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (lightness)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 363
      lineNumber = 362
      var string785 = new GraceString("%)");
      var string788 = new GraceString("%, ");
      var string791 = new GraceString(", ");
      var string794 = new GraceString("hsl(");
      var opresult796 = callmethod(string794, "++", [1], var_h);
      var opresult798 = callmethod(opresult796, "++", [1], string791);
      var opresult800 = callmethod(opresult798, "++", [1], var_s);
      var opresult802 = callmethod(opresult800, "++", [1], string788);
      var opresult804 = callmethod(opresult802, "++", [1], var_l);
      var opresult806 = callmethod(opresult804, "++", [1], string785);
      return opresult806
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func784.paramCounts = [
    1,
    1,
    1,
  ];
  func784.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["hue()saturation()lightness"] = func784;
  func784.definitionLine = 361;
  func784.definitionModule = "musical";
  lineNumber = 364
  var func807 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func807.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (h)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func807.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (s)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func807.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (l)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 365
      onSelf = true;
      var call808 = callmethod(this, "hue()saturation()lightness", [1, 1, 1], var_h, var_s, var_l);
      return call808
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func807.paramCounts = [
    1,
    1,
    1,
  ];
  func807.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["h()s()l"] = func807;
  func807.definitionLine = 364;
  func807.definitionModule = "musical";
  lineNumber = 367
  var func809 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func809.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 371
      var if810 = var_done;
      lineNumber = 368
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 370
        lineNumber = 369
        var bool811 = new GraceBoolean(false)
        return bool811
      }
      lineNumber = 372
      lineNumber = 371
      var bool812 = new GraceBoolean(true)
      var_initialised = bool812;
      lineNumber = 373
      lineNumber = 372
      var call813 = callmethod(var_dom,"document", [0]);
      var_document = call813;
      lineNumber = 373
      var string814 = new GraceString("standard-canvas");
      var call815 = callmethod(var_document,"getElementById", [1], string814);
      var_canvas = call815;
      lineNumber = 375
      lineNumber = 374
      var call816 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call816;
      lineNumber = 376
      lineNumber = 375
      var call817 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call817;
      lineNumber = 376
      var quotient820 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient823 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call824 = callmethod(var_point,"x()y", [1, 1], quotient820, quotient823);
      var_centre = call824;
      lineNumber = 377
      var quotient827 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call828 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient827);
      var_leftCentre = call828;
      lineNumber = 378
      var quotient831 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call832 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient831);
      var_rightCentre = call832;
      lineNumber = 382
      lineNumber = 375
      lineNumber = 379
      var call833 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 387
      var block834 = Grace_allocObject();
      block834.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block834.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block834.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block834.methods["match"] = GraceBlock_match;
      block834.methods["prefix?"] = GraceBlock_lift;
      block834.receiver = this;
      block834.className = 'block<musical:387>';
      block834.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 384
        lineNumber = 383
        var call836 = callmethod(var_canvas,"offsetWidth", [0]);
        var call838 = callmethod(var_canvas,"offsetLeft", [0]);
        var call840 = callmethod(var_ev,"clientX", [0]);
        var diff842 = callmethod(call840, "-", [1], call838);
        var quotient844 = callmethod(diff842, "/", [1], call836);
        var prod846 = callmethod(quotient844, "*", [1], var_canvasHeight);
        var var_x = prod846;
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
        var call848 = callmethod(var_canvas,"offsetHeight", [0]);
        var call851 = callmethod(var_canvas,"offsetTop", [0]);
        var call853 = callmethod(var_ev,"clientY", [0]);
        var diff855 = callmethod(call853, "-", [1], call851);
        var diff857 = callmethod(diff855, "-", [1], new GraceNum(7));
        var quotient859 = callmethod(diff857, "/", [1], call848);
        var prod861 = callmethod(quotient859, "*", [1], var_canvasHeight);
        var var_y = prod861;
        lineNumber = 385;
        moduleName = "musical";
        lineNumber = 384
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 385
        lineNumber = 384
        lineNumber = 385
        var call862 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call863 = callmethod(var_mouse,"position:=", [1], call862);
        return call863;
      };
      var_mouseMoveListener = block834;
      lineNumber = 387
      var string864 = new GraceString("mousemove");
      var call865 = callmethod(var_canvas,"addEventListener", [2], string864, var_mouseMoveListener);
      lineNumber = 403
      var block866 = Grace_allocObject();
      block866.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block866.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block866.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block866.methods["match"] = GraceBlock_match;
      block866.methods["prefix?"] = GraceBlock_lift;
      block866.receiver = this;
      block866.className = 'block<musical:403>';
      block866.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 390
        lineNumber = 389
        var call868 = callmethod(var_canvas,"offsetWidth", [0]);
        var call870 = callmethod(var_canvas,"offsetLeft", [0]);
        var call872 = callmethod(var_ev,"clientX", [0]);
        var diff874 = callmethod(call872, "-", [1], call870);
        var quotient876 = callmethod(diff874, "/", [1], call868);
        var prod878 = callmethod(quotient876, "*", [1], var_canvasHeight);
        var var_x = prod878;
        lineNumber = 390;
        moduleName = "musical";
        lineNumber = 389
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 391
        lineNumber = 390
        var call880 = callmethod(var_canvas,"offsetHeight", [0]);
        var call882 = callmethod(var_canvas,"offsetTop", [0]);
        var call884 = callmethod(var_ev,"clientY", [0]);
        var diff886 = callmethod(call884, "-", [1], call882);
        var quotient888 = callmethod(diff886, "/", [1], call880);
        var prod890 = callmethod(quotient888, "*", [1], var_canvasHeight);
        var var_y = prod890;
        lineNumber = 391;
        moduleName = "musical";
        lineNumber = 390
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 395
        var if891 = var_done;
        lineNumber = 391
        var opresult894 = callmethod(var_y, "<", [1], new GraceNum(20));
        var diff898 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var opresult901 = callmethod(var_x, ">", [1], diff898);
        var opresult903 = callmethod(opresult901, "&&", [1], opresult894);
        if (Grace_isTrue(opresult903)) {
          lineNumber = 392
          var call904 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 393
          onSelf = true;
          var call905 = callmethod(this, "stop", [0]);
          if891 = call905;
        }
        lineNumber = 395
        var call906 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call906;
        lineNumber = 395;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 396
        lineNumber = 402
        var block907 = Grace_allocObject();
        block907.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block907.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block907.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block907.methods["match"] = GraceBlock_match;
        block907.methods["prefix?"] = GraceBlock_lift;
        block907.receiver = this;
        block907.className = 'block<musical:402>';
        block907.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 401
          var if908 = var_done;
          lineNumber = 397
          var call909 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call909)) {
            lineNumber = 398
            var call910 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 399
            var call911 = callmethod(var_ev,"preventDefault", [0]);
            if908 = call911;
          }
          return if908;
        };
        var call912 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block907);
        return call912;
      };
      var_mouseDownListener = block866;
      lineNumber = 403
      var string913 = new GraceString("mousedown");
      var call914 = callmethod(var_canvas,"addEventListener", [2], string913, var_mouseDownListener);
      return call914
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func809.paramCounts = [
    0,
  ];
  func809.variableArities = [
    false,
  ];
  this.methods["initialise"] = func809;
  func809.definitionLine = 367;
  func809.definitionModule = "musical";
  lineNumber = 405
  var func915 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func915.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 407
      lineNumber = 406
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
  func915.paramCounts = [
    1,
  ];
  func915.variableArities = [
    false,
  ];
  this.methods["background"] = func915;
  func915.definitionLine = 405;
  func915.definitionModule = "musical";
  lineNumber = 408
  var func916 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func916.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 409
      var call917 = callmethod(var_randomModule,"random", [0]);
      var prod920 = callmethod(var_n, "*", [1], call917);
      var call921 = callmethod(prod920,"truncate", [0]);
      return call921
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func916.paramCounts = [
    1,
  ];
  func916.variableArities = [
    false,
  ];
  this.methods["random"] = func916;
  func916.definitionLine = 408;
  func916.definitionModule = "musical";
  lineNumber = 412
  var func922 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func922.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 424
      var if923 = var_done;
      lineNumber = 413
      var call924 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call924)) {
        lineNumber = 414
        var call925 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call925;
        lineNumber = 414;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 416
        lineNumber = 409
        lineNumber = 415
        var call926 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 416
        var call927 = callmethod(var_audio,"play", [0]);
        if923 = call927;
      } else {
        lineNumber = 418
        var string928 = new GraceString("audio");
        var call929 = callmethod(var_dom,"document", [0]);
        var call930 = callmethod(call929,"createElement", [1], string928);
        var var_audio = call930;
        lineNumber = 418;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 419
        var call931 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 421
        lineNumber = 418
        lineNumber = 420
        var call932 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 421
        var call933 = callmethod(var_audio,"load", [0]);
        lineNumber = 422
        var call934 = callmethod(var_audio,"play", [0]);
        if923 = call934;
      }
      return if923
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func922.paramCounts = [
    1,
  ];
  func922.variableArities = [
    false,
  ];
  this.methods["playSound"] = func922;
  func922.definitionLine = 412;
  func922.definitionModule = "musical";
  lineNumber = 425
  var func935 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func935.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 430
      var if936 = var_done;
      lineNumber = 426
      var call937 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call937)) {
        lineNumber = 427
        var call938 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call938;
        lineNumber = 427;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 428
        var call939 = callmethod(var_audio,"pause", [0]);
        if936 = call939;
      }
      return if936
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func935.paramCounts = [
    1,
  ];
  func935.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func935;
  func935.definitionLine = 425;
  func935.definitionModule = "musical";
  lineNumber = 431
  var func940 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func940.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 432
      onSelf = true;
      var call941 = callmethod(this, "initialise", [0]);
      lineNumber = 435
      lineNumber = 434
      var bool942 = new GraceBoolean(false)
      var_stopRunning = bool942;
      lineNumber = 435
      var string943 = new GraceString("canvas");
      var call944 = callmethod(var_dom,"document", [0]);
      var call945 = callmethod(call944,"createElement", [1], string943);
      var_backingCanvas = call945;
      lineNumber = 437
      lineNumber = 435
      lineNumber = 436
      var call946 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 438
      lineNumber = 435
      lineNumber = 437
      var call947 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 438
      var string948 = new GraceString("2d");
      var call949 = callmethod(var_backingCanvas,"getContext", [1], string948);
      var_backingContext = call949;
      lineNumber = 439
      var string950 = new GraceString("2d");
      var call951 = callmethod(var_canvas,"getContext", [1], string950);
      var var_mctx = call951;
      lineNumber = 439;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 440
      var block952 = Grace_allocObject();
      block952.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block952.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block952.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block952.methods["match"] = GraceBlock_match;
      block952.methods["prefix?"] = GraceBlock_lift;
      block952.receiver = this;
      block952.className = 'block<musical:440>';
      block952.real = function(
      ) {
        sourceObject = this;
        var call953 = callmethod(var_stopRunning,"prefix!", [0]);
        return call953;
      };
      lineNumber = 457
      var block954 = Grace_allocObject();
      block954.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block954.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block954.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block954.methods["match"] = GraceBlock_match;
      block954.methods["prefix?"] = GraceBlock_lift;
      block954.receiver = this;
      block954.className = 'block<musical:457>';
      block954.real = function(
      ) {
        sourceObject = this;
        lineNumber = 441
        lineNumber = 444
        var block955 = Grace_allocObject();
        block955.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block955.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block955.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block955.methods["match"] = GraceBlock_match;
        block955.methods["prefix?"] = GraceBlock_lift;
        block955.receiver = this;
        block955.className = 'block<musical:444>';
        block955.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 442
          var call956 = callmethod(var_obj,"step", [0]);
          return call956;
        };
        var call957 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block955);
        lineNumber = 444
        lineNumber = 447
        var block958 = Grace_allocObject();
        block958.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block958.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block958.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block958.methods["match"] = GraceBlock_match;
        block958.methods["prefix?"] = GraceBlock_lift;
        block958.receiver = this;
        block958.className = 'block<musical:447>';
        block958.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 445
          var call959 = callmethod(var_step,"apply", [0]);
          return call959;
        };
        var call960 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block958);
        lineNumber = 448
        lineNumber = 445
        lineNumber = 447
        var call961 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 448
        var call962 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 449
        var call963 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 450
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
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 451
          var call965 = callmethod(var_obj,"draw", [1], var_mctx);
          return call965;
        };
        var call966 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block964);
        lineNumber = 454
        lineNumber = 445
        lineNumber = 453
        var string967 = new GraceString("red");
        var call968 = callmethod(var_mctx,"fillStyle:=", [1], string967);
        lineNumber = 454
        var diff971 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call972 = callmethod(var_mctx,"fillRect", [4], diff971, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call972;
      };
      lineNumber = 440
      var call973 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block952, new GraceNum(10), block954);
      lineNumber = 457
      var call974 = callmethod(var_dom,"window", [0]);
      var call975 = callmethod(call974,"t_stop", [0]);
      return call975
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
  this.methods["start"] = func940;
  func940.definitionLine = 431;
  func940.definitionModule = "musical";
  lineNumber = 460
  var func976 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func976.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 462
      lineNumber = 461
      var bool977 = new GraceBoolean(true)
      var_stopRunning = bool977;
      lineNumber = 462
      var string978 = new GraceString("mousedown");
      var call979 = callmethod(var_canvas,"removeEventListener", [2], string978, var_mouseDownListener);
      lineNumber = 463
      var string980 = new GraceString("mousemove");
      var call981 = callmethod(var_canvas,"removeEventListener", [2], string980, var_mouseMoveListener);
      lineNumber = 465
      var call982 = callmethod(var_dom,"window", [0]);
      var call983 = callmethod(call982,"t_stop", [0]);
      return call983
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func976.paramCounts = [
    0,
  ];
  func976.variableArities = [
    false,
  ];
  this.methods["stop"] = func976;
  func976.definitionLine = 460;
  func976.definitionModule = "musical";
  lineNumber = 467
  var func984 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func984.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 468
      onSelf = true;
      var call985 = callmethod(this, "start", [0]);
      lineNumber = 470
      var call986 = callmethod(var_dom,"window", [0]);
      var call987 = callmethod(call986,"t_play", [0]);
      return call987
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func984.paramCounts = [
    1,
  ];
  func984.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func984;
  func984.definitionLine = 467;
  func984.definitionModule = "musical";
  lineNumber = 496
  var func988 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func988.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 501
      var if989 = var_done;
      lineNumber = 497
      var bool990 = new GraceBoolean(true)
      var opresult993 = callmethod(var_applyFlat, "==", [1], bool990);
      if (Grace_isTrue(opresult993)) {
        lineNumber = 498
        var string994 = new GraceString("");
        var string997 = new GraceString("b");
        var string1000 = new GraceString("");
        var opresult1002 = callmethod(string1000, "++", [1], var_note);
        var opresult1004 = callmethod(opresult1002, "++", [1], string997);
        var opresult1006 = callmethod(opresult1004, "++", [1], var_octave);
        var opresult1008 = callmethod(opresult1006, "++", [1], string994);
        var call1009 = callmethod(var_dom,"window", [0]);
        var call1010 = callmethod(call1009,"t_add", [1], opresult1008);
        lineNumber = 500
        return var_done
      }
      lineNumber = 505
      var if1011 = var_done;
      lineNumber = 501
      var bool1012 = new GraceBoolean(true)
      var opresult1015 = callmethod(var_applySharp, "==", [1], bool1012);
      if (Grace_isTrue(opresult1015)) {
        lineNumber = 502
        var string1016 = new GraceString("");
        var string1019 = new GraceString("#");
        var string1022 = new GraceString("");
        var opresult1024 = callmethod(string1022, "++", [1], var_note);
        var opresult1026 = callmethod(opresult1024, "++", [1], string1019);
        var opresult1028 = callmethod(opresult1026, "++", [1], var_octave);
        var opresult1030 = callmethod(opresult1028, "++", [1], string1016);
        var call1031 = callmethod(var_dom,"window", [0]);
        var call1032 = callmethod(call1031,"t_add", [1], opresult1030);
        lineNumber = 504
        return var_done
      }
      lineNumber = 505
      var string1033 = new GraceString("");
      var string1036 = new GraceString("");
      var string1039 = new GraceString("");
      var opresult1041 = callmethod(string1039, "++", [1], var_note);
      var opresult1043 = callmethod(opresult1041, "++", [1], string1036);
      var opresult1045 = callmethod(opresult1043, "++", [1], var_octave);
      var opresult1047 = callmethod(opresult1045, "++", [1], string1033);
      var call1048 = callmethod(var_dom,"window", [0]);
      var call1049 = callmethod(call1048,"t_add", [1], opresult1047);
      return call1049
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func988.paramCounts = [
    1,
  ];
  func988.variableArities = [
    false,
  ];
  this.methods["Note"] = func988;
  func988.definitionLine = 496;
  func988.definitionModule = "musical";
  lineNumber = 508
  var func1050 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1050.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 509
      var string1051 = new GraceString("C");
      onSelf = true;
      var call1052 = callmethod(this, "Note", [1], string1051);
      return call1052
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1050.paramCounts = [
    0,
  ];
  func1050.variableArities = [
    false,
  ];
  this.methods["C"] = func1050;
  func1050.definitionLine = 508;
  func1050.definitionModule = "musical";
  lineNumber = 511
  var func1053 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1053.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 512
      var string1054 = new GraceString("D");
      onSelf = true;
      var call1055 = callmethod(this, "Note", [1], string1054);
      return call1055
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1053.paramCounts = [
    0,
  ];
  func1053.variableArities = [
    false,
  ];
  this.methods["D"] = func1053;
  func1053.definitionLine = 511;
  func1053.definitionModule = "musical";
  lineNumber = 514
  var func1056 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1056.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 515
      var string1057 = new GraceString("E");
      onSelf = true;
      var call1058 = callmethod(this, "Note", [1], string1057);
      return call1058
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1056.paramCounts = [
    0,
  ];
  func1056.variableArities = [
    false,
  ];
  this.methods["E"] = func1056;
  func1056.definitionLine = 514;
  func1056.definitionModule = "musical";
  lineNumber = 517
  var func1059 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1059.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 518
      var string1060 = new GraceString("F");
      onSelf = true;
      var call1061 = callmethod(this, "Note", [1], string1060);
      return call1061
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1059.paramCounts = [
    0,
  ];
  func1059.variableArities = [
    false,
  ];
  this.methods["F"] = func1059;
  func1059.definitionLine = 517;
  func1059.definitionModule = "musical";
  lineNumber = 520
  var func1062 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1062.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 521
      var string1063 = new GraceString("G");
      onSelf = true;
      var call1064 = callmethod(this, "Note", [1], string1063);
      return call1064
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1062.paramCounts = [
    0,
  ];
  func1062.variableArities = [
    false,
  ];
  this.methods["G"] = func1062;
  func1062.definitionLine = 520;
  func1062.definitionModule = "musical";
  lineNumber = 523
  var func1065 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1065.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 524
      var string1066 = new GraceString("A");
      onSelf = true;
      var call1067 = callmethod(this, "Note", [1], string1066);
      return call1067
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1065.paramCounts = [
    0,
  ];
  func1065.variableArities = [
    false,
  ];
  this.methods["A"] = func1065;
  func1065.definitionLine = 523;
  func1065.definitionModule = "musical";
  lineNumber = 526
  var func1068 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1068.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 527
      var string1069 = new GraceString("B");
      onSelf = true;
      var call1070 = callmethod(this, "Note", [1], string1069);
      return call1070
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1068.paramCounts = [
    0,
  ];
  func1068.variableArities = [
    false,
  ];
  this.methods["B"] = func1068;
  func1068.definitionLine = 526;
  func1068.definitionModule = "musical";
  lineNumber = 530
  var func1071 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1071.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 532
      lineNumber = 531
      var bool1072 = new GraceBoolean(true)
      var_applyFlat = bool1072;
      lineNumber = 532
      var call1073 = callmethod(var_note,"apply", [0]);
      lineNumber = 534
      lineNumber = 533
      var bool1074 = new GraceBoolean(false)
      var_applyFlat = bool1074;
      return bool1074
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
  this.methods["flat"] = func1071;
  func1071.definitionLine = 530;
  func1071.definitionModule = "musical";
  lineNumber = 535
  var func1075 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1075.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 537
      lineNumber = 536
      var bool1076 = new GraceBoolean(true)
      var_applySharp = bool1076;
      lineNumber = 537
      var call1077 = callmethod(var_note,"apply", [0]);
      lineNumber = 539
      lineNumber = 538
      var bool1078 = new GraceBoolean(false)
      var_applySharp = bool1078;
      return bool1078
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
  this.methods["sharp"] = func1075;
  func1075.definitionLine = 535;
  func1075.definitionModule = "musical";
  lineNumber = 541
  var func1079 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1079.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1079.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 543
      lineNumber = 542
      var var_oldOctave = var_octave;
      lineNumber = 543;
      moduleName = "musical";
      lineNumber = 542
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 544
      lineNumber = 543
      var_octave = var_num;
      lineNumber = 544
      var call1080 = callmethod(var_notes,"apply", [0]);
      lineNumber = 546
      lineNumber = 545
      var_octave = var_oldOctave;
      return var_oldOctave
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1079.paramCounts = [
    1,
    1,
  ];
  func1079.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1079;
  func1079.definitionLine = 541;
  func1079.definitionModule = "musical";
  lineNumber = 551
  var func1081 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1081.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 552
      var call1082 = callmethod(var_dom,"window", [0]);
      var call1083 = callmethod(call1082,"t_init", [0]);
      lineNumber = 553
      var call1084 = callmethod(var_blocks,"apply", [0]);
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
  this.methods["Instrument"] = func1081;
  func1081.definitionLine = 551;
  func1081.definitionModule = "musical";
  lineNumber = 556
  var func1085 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1085.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 557
      onSelf = true;
      var call1086 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 558
      var call1087 = callmethod(var_dom,"window", [0]);
      var call1088 = callmethod(call1087,"t_synth_mono", [0]);
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
  this.methods["monoSynth"] = func1085;
  func1085.definitionLine = 556;
  func1085.definitionModule = "musical";
  lineNumber = 561
  var func1089 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1089.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 562
      onSelf = true;
      var call1090 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 563
      var call1091 = callmethod(var_dom,"window", [0]);
      var call1092 = callmethod(call1091,"t_synth_pluck", [0]);
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
  this.methods["pluckSynth"] = func1089;
  func1089.definitionLine = 561;
  func1089.definitionModule = "musical";
  lineNumber = 566
  var func1093 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1093.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 567
      onSelf = true;
      var call1094 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 568
      var call1095 = callmethod(var_dom,"window", [0]);
      var call1096 = callmethod(call1095,"t_synth_poly", [0]);
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
  this.methods["polySynth"] = func1093;
  func1093.definitionLine = 566;
  func1093.definitionModule = "musical";
  lineNumber = 571
  var func1097 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1097.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 572
      onSelf = true;
      var call1098 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 573
      var call1099 = callmethod(var_dom,"window", [0]);
      var call1100 = callmethod(call1099,"t_synth_fm", [0]);
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
  this.methods["fmSynth"] = func1097;
  func1097.definitionLine = 571;
  func1097.definitionModule = "musical";
  lineNumber = 576
  var func1101 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1101.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 577
      onSelf = true;
      var call1102 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 578
      var call1103 = callmethod(var_dom,"window", [0]);
      var call1104 = callmethod(call1103,"t_synth_membrane", [0]);
      return call1104
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
  this.methods["membraneSynth"] = func1101;
  func1101.definitionLine = 576;
  func1101.definitionModule = "musical";
  lineNumber = 581
  var func1105 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1105.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 582
      onSelf = true;
      var call1106 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 583
      var call1107 = callmethod(var_dom,"window", [0]);
      var call1108 = callmethod(call1107,"t_synth_duo", [0]);
      return call1108
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1105.paramCounts = [
    1,
  ];
  func1105.variableArities = [
    false,
  ];
  this.methods["duoSynth"] = func1105;
  func1105.definitionLine = 581;
  func1105.definitionModule = "musical";
  lineNumber = 589
  var func1109 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1109.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 593
      var if1110 = var_done;
      lineNumber = 590
      var bool1111 = new GraceBoolean(true)
      var opresult1114 = callmethod(var_applyChorus, "==", [1], bool1111);
      if (Grace_isTrue(opresult1114)) {
        lineNumber = 591
        var call1115 = callmethod(var_dom,"window", [0]);
        var call1116 = callmethod(call1115,"t_effect_chorus", [0]);
        if1110 = call1116;
      }
      lineNumber = 596
      var if1117 = var_done;
      lineNumber = 593
      var bool1118 = new GraceBoolean(true)
      var opresult1121 = callmethod(var_applyReverb, "==", [1], bool1118);
      if (Grace_isTrue(opresult1121)) {
        lineNumber = 594
        var call1122 = callmethod(var_dom,"window", [0]);
        var call1123 = callmethod(call1122,"t_effect_reverb", [0]);
        if1117 = call1123;
      }
      lineNumber = 599
      var if1124 = var_done;
      lineNumber = 596
      var bool1125 = new GraceBoolean(true)
      var opresult1128 = callmethod(var_applyAutowah, "==", [1], bool1125);
      if (Grace_isTrue(opresult1128)) {
        lineNumber = 597
        var call1129 = callmethod(var_dom,"window", [0]);
        var call1130 = callmethod(call1129,"t_effect_autowah", [0]);
        if1124 = call1130;
      }
      lineNumber = 602
      var if1131 = var_done;
      lineNumber = 599
      var bool1132 = new GraceBoolean(true)
      var opresult1135 = callmethod(var_applyCheby, "==", [1], bool1132);
      if (Grace_isTrue(opresult1135)) {
        lineNumber = 600
        var call1136 = callmethod(var_dom,"window", [0]);
        var call1137 = callmethod(call1136,"t_effect_cheby", [0]);
        if1131 = call1137;
      }
      lineNumber = 602
      var call1138 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 603
      var call1139 = callmethod(var_dom,"window", [0]);
      var call1140 = callmethod(call1139,"t_effect_reset", [0]);
      return call1140
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1109.paramCounts = [
    1,
  ];
  func1109.variableArities = [
    false,
  ];
  this.methods["Effect"] = func1109;
  func1109.definitionLine = 589;
  func1109.definitionModule = "musical";
  lineNumber = 606
  var func1141 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1141.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 608
      lineNumber = 607
      var bool1142 = new GraceBoolean(true)
      var_applyChorus = bool1142;
      lineNumber = 608
      onSelf = true;
      var call1143 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 610
      lineNumber = 609
      var bool1144 = new GraceBoolean(false)
      var_applyChorus = bool1144;
      return bool1144
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
  this.methods["Chorus"] = func1141;
  func1141.definitionLine = 606;
  func1141.definitionModule = "musical";
  lineNumber = 612
  var func1145 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1145.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 614
      lineNumber = 613
      var bool1146 = new GraceBoolean(true)
      var_applyReverb = bool1146;
      lineNumber = 614
      onSelf = true;
      var call1147 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 616
      lineNumber = 615
      var bool1148 = new GraceBoolean(false)
      var_applyReverb = bool1148;
      return bool1148
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1145.paramCounts = [
    1,
  ];
  func1145.variableArities = [
    false,
  ];
  this.methods["Reverb"] = func1145;
  func1145.definitionLine = 612;
  func1145.definitionModule = "musical";
  lineNumber = 618
  var func1149 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1149.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 620
      lineNumber = 619
      var bool1150 = new GraceBoolean(true)
      var_applyAutowah = bool1150;
      lineNumber = 620
      onSelf = true;
      var call1151 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 622
      lineNumber = 621
      var bool1152 = new GraceBoolean(false)
      var_applyAutowah = bool1152;
      return bool1152
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1149.paramCounts = [
    1,
  ];
  func1149.variableArities = [
    false,
  ];
  this.methods["Autowah"] = func1149;
  func1149.definitionLine = 618;
  func1149.definitionModule = "musical";
  lineNumber = 624
  var func1153 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1153.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 626
      lineNumber = 625
      var bool1154 = new GraceBoolean(true)
      var_applyCheby = bool1154;
      lineNumber = 626
      onSelf = true;
      var call1155 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 628
      lineNumber = 627
      var bool1156 = new GraceBoolean(false)
      var_applyCheby = bool1156;
      return bool1156
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
  this.methods["Cheby"] = func1153;
  func1153.definitionLine = 624;
  func1153.definitionModule = "musical";
  lineNumber = 632
  var func1157 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1157.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 633
      var call1158 = callmethod(var_dom,"window", [0]);
      var call1159 = callmethod(call1158,"t_bpm", [1], var_bpm);
      return call1159
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1157.paramCounts = [
    1,
  ];
  func1157.variableArities = [
    false,
  ];
  this.methods["SetBPM"] = func1157;
  func1157.definitionLine = 632;
  func1157.definitionModule = "musical";
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
  var call1160 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1160;
  this.data = call1160.data;
  this._value = call1160._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 633
  var func1161 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1161.paramCounts[0])
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
  func1161.paramCounts = [
    0,
  ];
  func1161.variableArities = [
    false,
  ];
  this.methods["document"] = func1161;
  func1161.definitionLine = 633;
  func1161.definitionModule = "musical";
  lineNumber = 633
  var func1162 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1162.paramCounts[0])
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
  func1162.paramCounts = [
    1,
  ];
  func1162.variableArities = [
    false,
  ];
  this.methods["document:="] = func1162;
  func1162.definitionLine = 633;
  func1162.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 633
  var func1163 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1163.paramCounts[0])
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
  func1163.paramCounts = [
    0,
  ];
  func1163.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1163;
  func1163.definitionLine = 633;
  func1163.definitionModule = "musical";
  lineNumber = 633
  var func1164 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1164.paramCounts[0])
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
  func1164.paramCounts = [
    1,
  ];
  func1164.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1164;
  func1164.definitionLine = 633;
  func1164.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 633
  var func1165 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1165.paramCounts[0])
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
  func1165.paramCounts = [
    0,
  ];
  func1165.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1165;
  func1165.definitionLine = 633;
  func1165.definitionModule = "musical";
  lineNumber = 633
  var func1166 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1166.paramCounts[0])
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
  func1166.paramCounts = [
    1,
  ];
  func1166.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1166;
  func1166.definitionLine = 633;
  func1166.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 633
  var func1167 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1167.paramCounts[0])
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
  func1167.paramCounts = [
    0,
  ];
  func1167.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1167;
  func1167.definitionLine = 633;
  func1167.definitionModule = "musical";
  lineNumber = 633
  var func1168 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1168.paramCounts[0])
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
  func1168.paramCounts = [
    1,
  ];
  func1168.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1168;
  func1168.definitionLine = 633;
  func1168.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 633
  var func1169 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1169.paramCounts[0])
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
  func1169.paramCounts = [
    0,
  ];
  func1169.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1169;
  func1169.definitionLine = 633;
  func1169.definitionModule = "musical";
  lineNumber = 633
  var func1170 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1170.paramCounts[0])
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
  func1170.paramCounts = [
    1,
  ];
  func1170.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1170;
  func1170.definitionLine = 633;
  func1170.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 633
  var func1171 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1171.paramCounts[0])
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
  func1171.paramCounts = [
    0,
  ];
  func1171.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1171;
  func1171.definitionLine = 633;
  func1171.definitionModule = "musical";
  lineNumber = 633
  var func1172 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1172.paramCounts[0])
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
  func1172.paramCounts = [
    1,
  ];
  func1172.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1172;
  func1172.definitionLine = 633;
  func1172.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1173 = callmethod(var_dom,"window", [0]);
  var call1174 = callmethod(call1173,"Math", [0]);
  var var_trig = call1174;
  var func1175 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1175.paramCounts[0])
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
  func1175.paramCounts = [
    0,
  ];
  func1175.variableArities = [
    false,
  ];
  this.methods["trig"] = func1175;
  func1175.definitionLine = 15;
  func1175.definitionModule = "musical";
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
  var func1176 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1176.paramCounts[0])
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
  func1176.paramCounts = [
    0,
  ];
  func1176.variableArities = [
    false,
  ];
  this.methods["PI"] = func1176;
  func1176.definitionLine = 15;
  func1176.definitionModule = "musical";
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
  var bool1177 = new GraceBoolean(false)
  var var_stopRunning = bool1177;
  lineNumber = 15
  var func1178 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1178.paramCounts[0])
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
  func1178.paramCounts = [
    0,
  ];
  func1178.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1178;
  func1178.definitionLine = 15;
  func1178.definitionModule = "musical";
  lineNumber = 15
  var func1179 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1179.paramCounts[0])
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
  func1179.paramCounts = [
    1,
  ];
  func1179.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1179;
  func1179.definitionLine = 15;
  func1179.definitionModule = "musical";
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
  var bool1180 = new GraceBoolean(false)
  var var_initialised = bool1180;
  lineNumber = 15
  var func1181 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1181.paramCounts[0])
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
  func1181.paramCounts = [
    0,
  ];
  func1181.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1181;
  func1181.definitionLine = 15;
  func1181.definitionModule = "musical";
  lineNumber = 15
  var func1182 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1182.paramCounts[0])
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
  func1182.paramCounts = [
    1,
  ];
  func1182.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1182;
  func1182.definitionLine = 15;
  func1182.definitionModule = "musical";
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
  var string1183 = new GraceString("white");
  var var_backgroundColour = string1183;
  lineNumber = 15
  var func1184 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1184.paramCounts[0])
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
  func1184.paramCounts = [
    0,
  ];
  func1184.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1184;
  func1184.definitionLine = 15;
  func1184.definitionModule = "musical";
  lineNumber = 15
  var func1185 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1185.paramCounts[0])
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
  func1185.paramCounts = [
    1,
  ];
  func1185.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1185;
  func1185.definitionLine = 15;
  func1185.definitionModule = "musical";
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
  var call1186 = callmethod(var_collections,"list", [0]);
  var call1187 = callmethod(call1186,"new", [0]);
  var var_registeredObjects = call1187;
  var func1188 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1188.paramCounts[0])
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
  func1188.paramCounts = [
    0,
  ];
  func1188.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1188;
  func1188.definitionLine = 21;
  func1188.definitionModule = "musical";
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
  var call1189 = callmethod(var_collections,"list", [0]);
  var call1190 = callmethod(call1189,"new", [0]);
  var var_stepBlocks = call1190;
  var func1191 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1191.paramCounts[0])
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
  func1191.paramCounts = [
    0,
  ];
  func1191.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1191;
  func1191.definitionLine = 22;
  func1191.definitionModule = "musical";
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
  var call1192 = callmethod(var_collections,"map", [0]);
  var call1193 = callmethod(call1192,"new", [0]);
  var var_audioTags = call1193;
  var func1194 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1194.paramCounts[0])
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
  func1194.paramCounts = [
    0,
  ];
  func1194.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1194;
  func1194.definitionLine = 23;
  func1194.definitionModule = "musical";
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
  var func1195 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1195.paramCounts[0])
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
  func1195.paramCounts = [
    0,
  ];
  func1195.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1195;
  func1195.definitionLine = 23;
  func1195.definitionModule = "musical";
  lineNumber = 23
  var func1196 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1196.paramCounts[0])
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
  func1196.paramCounts = [
    1,
  ];
  func1196.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1196;
  func1196.definitionLine = 23;
  func1196.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1197 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1197.paramCounts[0])
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
  func1197.paramCounts = [
    0,
  ];
  func1197.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1197;
  func1197.definitionLine = 23;
  func1197.definitionModule = "musical";
  lineNumber = 23
  var func1198 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1198.paramCounts[0])
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
  func1198.paramCounts = [
    1,
  ];
  func1198.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1198;
  func1198.definitionLine = 23;
  func1198.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1199 = new GraceString("left");
  var var_left = string1199;
  lineNumber = 23
  var func1200 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1200.paramCounts[0])
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
  func1200.paramCounts = [
    0,
  ];
  func1200.variableArities = [
    false,
  ];
  this.methods["left"] = func1200;
  func1200.definitionLine = 23;
  func1200.definitionModule = "musical";
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
  var string1201 = new GraceString("right");
  var var_right = string1201;
  lineNumber = 23
  var func1202 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1202.paramCounts[0])
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
  func1202.paramCounts = [
    0,
  ];
  func1202.variableArities = [
    false,
  ];
  this.methods["right"] = func1202;
  func1202.definitionLine = 23;
  func1202.definitionModule = "musical";
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
  var string1203 = new GraceString("top");
  var var_top = string1203;
  lineNumber = 23
  var func1204 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1204.paramCounts[0])
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
  func1204.paramCounts = [
    0,
  ];
  func1204.variableArities = [
    false,
  ];
  this.methods["top"] = func1204;
  func1204.definitionLine = 23;
  func1204.definitionModule = "musical";
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
  var string1205 = new GraceString("bottom");
  var var_bottom = string1205;
  lineNumber = 23
  var func1206 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1206.paramCounts[0])
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
  func1206.paramCounts = [
    0,
  ];
  func1206.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1206;
  func1206.definitionLine = 23;
  func1206.definitionModule = "musical";
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
  var func1207 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1207.paramCounts[0])
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
  func1207.paramCounts = [
    0,
  ];
  func1207.variableArities = [
    false,
  ];
  this.methods["centre"] = func1207;
  func1207.definitionLine = 23;
  func1207.definitionModule = "musical";
  lineNumber = 23
  var func1208 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    1,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1208;
  func1208.definitionLine = 23;
  func1208.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1209 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    0,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1209;
  func1209.definitionLine = 23;
  func1209.definitionModule = "musical";
  lineNumber = 23
  var func1210 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    1,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1210;
  func1210.definitionLine = 23;
  func1210.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1211 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1211.paramCounts[0])
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
  func1211.paramCounts = [
    0,
  ];
  func1211.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1211;
  func1211.definitionLine = 23;
  func1211.definitionModule = "musical";
  lineNumber = 23
  var func1212 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1212.paramCounts[0])
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
  func1212.paramCounts = [
    1,
  ];
  func1212.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1212;
  func1212.definitionLine = 23;
  func1212.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1213 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1213.paramCounts[0])
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
  func1213.paramCounts = [
    0,
  ];
  func1213.variableArities = [
    false,
  ];
  this.methods["above"] = func1213;
  func1213.definitionLine = 23;
  func1213.definitionModule = "musical";
  lineNumber = 23
  var func1214 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1214.paramCounts[0])
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
  func1214.paramCounts = [
    1,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["above:="] = func1214;
  func1214.definitionLine = 23;
  func1214.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    0,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1215;
  func1215.definitionLine = 23;
  func1215.definitionModule = "musical";
  lineNumber = 23
  var func1216 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1216.paramCounts[0])
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
  func1216.paramCounts = [
    1,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1216;
  func1216.definitionLine = 23;
  func1216.definitionModule = "musical";
  lineNumber = 40
  var func1217 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    0,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["point"] = func1217;
  func1217.definitionLine = 40;
  func1217.definitionModule = "musical";
  var obj1218 = Grace_allocObject();
  obj1218.definitionModule = "musical";
  obj1218.definitionLine = 40;
  obj1218.outer = this;
  var reader_musical_outer_1219 = function() {
    return this.outer;
  }
  obj1218.methods["outer"] = reader_musical_outer_1219;
  function obj_init_1218() {
    var origSuperDepth = superDepth;
    superDepth = obj1218;
    obj1218.annotations = [];
    var func1220 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1220.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1220.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1221 = Grace_allocObject();
        obj1221.definitionModule = "musical";
        obj1221.definitionLine = 40;
        obj1221.outer = this;
        var reader_musical_outer_1222 = function() {
          return this.outer;
        }
        obj1221.methods["outer"] = reader_musical_outer_1222;
        function obj_init_1221() {
          var origSuperDepth = superDepth;
          superDepth = obj1221;
          obj1221.annotations = [];
          var func1223 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1225 = callmethod(this, "x", [0]);
              var diff1227 = callmethod(call1225, "-", [1], var_dx);
              onSelf = true;
              var call1228 = callmethod(this, "y", [0]);
              var call1229 = callmethod(var_point,"x()y", [1, 1], diff1227, call1228);
              return call1229
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
          obj1221.methods["left"] = func1223;
          func1223.definitionLine = 43;
          func1223.definitionModule = "musical";
          var func1230 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1230.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1232 = callmethod(this, "x", [0]);
              var opresult1234 = callmethod(call1232, "+", [1], var_dx);
              onSelf = true;
              var call1235 = callmethod(this, "y", [0]);
              var call1236 = callmethod(var_point,"x()y", [1, 1], opresult1234, call1235);
              return call1236
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1230.paramCounts = [
            1,
          ];
          func1230.variableArities = [
            false,
          ];
          obj1221.methods["right"] = func1230;
          func1230.definitionLine = 44;
          func1230.definitionModule = "musical";
          var func1237 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1237.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1238 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1240 = callmethod(this, "y", [0]);
              var diff1242 = callmethod(call1240, "-", [1], var_dy);
              var call1243 = callmethod(var_point,"x()y", [1, 1], call1238, diff1242);
              return call1243
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1237.paramCounts = [
            1,
          ];
          func1237.variableArities = [
            false,
          ];
          obj1221.methods["up"] = func1237;
          func1237.definitionLine = 45;
          func1237.definitionModule = "musical";
          var func1244 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1245 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1247 = callmethod(this, "y", [0]);
              var opresult1249 = callmethod(call1247, "+", [1], var_dy);
              var call1250 = callmethod(var_point,"x()y", [1, 1], call1245, opresult1249);
              return call1250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1244.paramCounts = [
            1,
          ];
          func1244.variableArities = [
            false,
          ];
          obj1221.methods["down"] = func1244;
          func1244.definitionLine = 46;
          func1244.definitionModule = "musical";
          sourceObject = obj1221;
          lineNumber = 41
          obj1221.data["x"] = var_x__39__;
          var reader_musical_x_1251 = function() {
            return this.data["x"];
          }
          reader_musical_x_1251.def = true;
          obj1221.methods["x"] = reader_musical_x_1251;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1221;
          lineNumber = 42
          obj1221.data["y"] = var_y__39__;
          var reader_musical_y_1252 = function() {
            return this.data["y"];
          }
          reader_musical_y_1252.def = true;
          obj1221.methods["y"] = reader_musical_y_1252;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1221;
          sourceObject = obj1221;
          sourceObject = obj1221;
          sourceObject = obj1221;
          superDepth = origSuperDepth;
        }
        obj_init_1221.apply(obj1221, []);
        return obj1221
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
      1,
    ];
    func1220.variableArities = [
      false,
      false,
    ];
    obj1218.methods["x()y"] = func1220;
    func1220.definitionLine = 40;
    func1220.definitionModule = "musical";
    var func1253 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1254 = Grace_allocObject();
        obj1254.definitionModule = "musical";
        obj1254.definitionLine = 40;
        var inho1254 = inheritingObject;
        while (inho1254.superobj) inho1254 = inho1254.superobj;
        inho1254.superobj = obj1254;
        obj1254.data = inheritingObject.data;
        obj1254.outer = this;
        var reader_musical_outer_1255 = function() {
          return this.outer;
        }
        obj1254.methods["outer"] = reader_musical_outer_1255;
        function obj_init_1254() {
          var origSuperDepth = superDepth;
          superDepth = obj1254;
          obj1254.annotations = [];
          var func1256 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1256.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1258 = callmethod(this, "x", [0]);
              var diff1260 = callmethod(call1258, "-", [1], var_dx);
              onSelf = true;
              var call1261 = callmethod(this, "y", [0]);
              var call1262 = callmethod(var_point,"x()y", [1, 1], diff1260, call1261);
              return call1262
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1256.paramCounts = [
            1,
          ];
          func1256.variableArities = [
            false,
          ];
          obj1254.methods["left"] = func1256;
          func1256.definitionLine = 43;
          func1256.definitionModule = "musical";
          var func1263 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1265 = callmethod(this, "x", [0]);
              var opresult1267 = callmethod(call1265, "+", [1], var_dx);
              onSelf = true;
              var call1268 = callmethod(this, "y", [0]);
              var call1269 = callmethod(var_point,"x()y", [1, 1], opresult1267, call1268);
              return call1269
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1263.paramCounts = [
            1,
          ];
          func1263.variableArities = [
            false,
          ];
          obj1254.methods["right"] = func1263;
          func1263.definitionLine = 44;
          func1263.definitionModule = "musical";
          var func1270 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1271 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1273 = callmethod(this, "y", [0]);
              var diff1275 = callmethod(call1273, "-", [1], var_dy);
              var call1276 = callmethod(var_point,"x()y", [1, 1], call1271, diff1275);
              return call1276
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1270.paramCounts = [
            1,
          ];
          func1270.variableArities = [
            false,
          ];
          obj1254.methods["up"] = func1270;
          func1270.definitionLine = 45;
          func1270.definitionModule = "musical";
          var func1277 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1278 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1280 = callmethod(this, "y", [0]);
              var opresult1282 = callmethod(call1280, "+", [1], var_dy);
              var call1283 = callmethod(var_point,"x()y", [1, 1], call1278, opresult1282);
              return call1283
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1277.paramCounts = [
            1,
          ];
          func1277.variableArities = [
            false,
          ];
          obj1254.methods["down"] = func1277;
          func1277.definitionLine = 46;
          func1277.definitionModule = "musical";
          sourceObject = obj1254;
          lineNumber = 41
          obj1254.data["x"] = var_x__39__;
          var reader_musical_x_1284 = function() {
            return this.data["x"];
          }
          reader_musical_x_1284.def = true;
          obj1254.methods["x"] = reader_musical_x_1284;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1254;
          lineNumber = 42
          obj1254.data["y"] = var_y__39__;
          var reader_musical_y_1285 = function() {
            return this.data["y"];
          }
          reader_musical_y_1285.def = true;
          obj1254.methods["y"] = reader_musical_y_1285;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1254;
          sourceObject = obj1254;
          sourceObject = obj1254;
          sourceObject = obj1254;
          superDepth = origSuperDepth;
        }
        obj_init_1254.apply(inheritingObject, []);
        return obj1254
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1218.methods["x()y()object"] = func1253;
    var func1286 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1287 = new GraceString("class point");
        return string1287
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1286.paramCounts = [
    ];
    func1286.variableArities = [
    ];
    obj1218.methods["asDebugString"] = func1286;
    func1286.definitionLine = 40;
    func1286.definitionModule = "musical";
    sourceObject = obj1218;
    sourceObject = obj1218;
    superDepth = origSuperDepth;
  }
  obj_init_1218.apply(obj1218, []);
  var var_point = obj1218;
  lineNumber = 48
  var func1288 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1288.paramCounts[0])
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
  func1288.paramCounts = [
    0,
  ];
  func1288.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1288;
  func1288.definitionLine = 48;
  func1288.definitionModule = "musical";
  var obj1289 = Grace_allocObject();
  obj1289.definitionModule = "musical";
  obj1289.definitionLine = 48;
  obj1289.outer = this;
  var reader_musical_outer_1290 = function() {
    return this.outer;
  }
  obj1289.methods["outer"] = reader_musical_outer_1290;
  function obj_init_1289() {
    var origSuperDepth = superDepth;
    superDepth = obj1289;
    obj1289.annotations = [];
    var func1291 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1291.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1292 = Grace_allocObject();
        obj1292.definitionModule = "musical";
        obj1292.definitionLine = 48;
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
            if (argcv[0] !=  func1294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1295 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1296 = Grace_allocObject();
              block1296.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1296.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1296.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1296.methods["match"] = GraceBlock_match;
              block1296.methods["prefix?"] = GraceBlock_lift;
              block1296.receiver = this;
              block1296.className = 'block<musical:63>';
              block1296.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1297 = callmethod(var_b,"apply", [0]);
                return call1297;
              };
              var call1298 = callmethod(Grace_prelude,"for()do", [1, 1], call1295, block1296);
              lineNumber = 63
              onSelf = true;
              var call1299 = callmethod(this, "tick", [0]);
              return call1299
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1294.paramCounts = [
            0,
          ];
          func1294.variableArities = [
            false,
          ];
          obj1292.methods["step"] = func1294;
          func1294.definitionLine = 59;
          func1294.definitionModule = "musical";
          var func1300 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1300.paramCounts[0])
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
          func1300.paramCounts = [
            0,
          ];
          func1300.variableArities = [
            false,
          ];
          obj1292.methods["tick"] = func1300;
          func1300.definitionLine = 66;
          func1300.definitionModule = "musical";
          var func1301 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1301.paramCounts[0])
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
          func1301.paramCounts = [
            1,
          ];
          func1301.variableArities = [
            false,
          ];
          obj1292.methods["draw"] = func1301;
          func1301.definitionLine = 67;
          func1301.definitionModule = "musical";
          var func1302 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1303 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1304 = callmethod(this, "destX:=", [1], call1303);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1305 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1306 = callmethod(this, "destY:=", [1], call1305);
              return call1306
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1302.paramCounts = [
            1,
          ];
          func1302.variableArities = [
            false,
          ];
          obj1292.methods["moveTo"] = func1302;
          func1302.definitionLine = 68;
          func1302.definitionModule = "musical";
          var func1307 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1308 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1309 = callmethod(this, "x:=", [1], call1308);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1310 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1311 = callmethod(this, "y:=", [1], call1310);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1312 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1313 = callmethod(this, "destX:=", [1], call1312);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1314 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1315 = callmethod(this, "destY:=", [1], call1314);
              return call1315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1307.paramCounts = [
            1,
          ];
          func1307.variableArities = [
            false,
          ];
          obj1292.methods["jumpTo"] = func1307;
          func1307.definitionLine = 72;
          func1307.definitionModule = "musical";
          var func1316 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1317 = new GraceBoolean(false)
              return bool1317
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1316.paramCounts = [
            1,
          ];
          func1316.variableArities = [
            false,
          ];
          obj1292.methods["isPointOver"] = func1316;
          func1316.definitionLine = 78;
          func1316.definitionModule = "musical";
          var func1318 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1318.paramCounts[0])
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
          func1318.paramCounts = [
            0,
          ];
          func1318.variableArities = [
            false,
          ];
          obj1292.methods["mousedown"] = func1318;
          func1318.definitionLine = 79;
          func1318.definitionModule = "musical";
          var func1319 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1319.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1320 = callmethod(this, "alwaysBlocks", [0]);
              var call1321 = callmethod(call1320,"push", [1], var_b);
              return call1321
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1319.paramCounts = [
            1,
          ];
          func1319.variableArities = [
            false,
          ];
          obj1292.methods["always"] = func1319;
          func1319.definitionLine = 80;
          func1319.definitionModule = "musical";
          var func1322 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1322.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1322.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1323 = Grace_allocObject();
              block1323.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1323.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1323.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1323.methods["match"] = GraceBlock_match;
              block1323.methods["prefix?"] = GraceBlock_lift;
              block1323.receiver = this;
              block1323.className = 'block<musical:89>';
              block1323.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1324 = var_done;
                lineNumber = 85
                var call1325 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1325)) {
                  lineNumber = 86
                  var call1326 = callmethod(var_b,"apply", [0]);
                  if1324 = call1326;
                }
                return if1324;
              };
              onSelf = true;
              var call1327 = callmethod(this, "always", [1], block1323);
              return call1327
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1322.paramCounts = [
            1,
            1,
          ];
          func1322.variableArities = [
            false,
            false,
          ];
          obj1292.methods["whenever()do"] = func1322;
          func1322.definitionLine = 83;
          func1322.definitionModule = "musical";
          var func1328 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1328.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1332 = callmethod(this, "angle", [0]);
              var quotient1334 = callmethod(call1332, "/", [1], new GraceNum(180));
              var prod1336 = callmethod(quotient1334, "*", [1], var_PI);
              var call1337 = callmethod(var_trig,"cos", [1], prod1336);
              var prod1339 = callmethod(call1337, "*", [1], var_dist);
              var var_y__39__ = prod1339;
              lineNumber = 92;
              moduleName = "musical";
              lineNumber = 91
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1343 = callmethod(this, "angle", [0]);
              var quotient1345 = callmethod(call1343, "/", [1], new GraceNum(180));
              var prod1347 = callmethod(quotient1345, "*", [1], var_PI);
              var call1348 = callmethod(var_trig,"sin", [1], prod1347);
              var prod1350 = callmethod(call1348, "*", [1], var_dist);
              var var_x__39__ = prod1350;
              lineNumber = 93;
              moduleName = "musical";
              lineNumber = 92
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 94
              lineNumber = 86
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1352 = callmethod(this, "x", [0]);
              var opresult1354 = callmethod(call1352, "+", [1], var_x__39__);
              onSelf = true;
              var call1355 = callmethod(this, "x:=", [1], opresult1354);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1357 = callmethod(this, "y", [0]);
              var opresult1359 = callmethod(call1357, "+", [1], var_y__39__);
              onSelf = true;
              var call1360 = callmethod(this, "y:=", [1], opresult1359);
              return call1360
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1328.paramCounts = [
            1,
          ];
          func1328.variableArities = [
            false,
          ];
          obj1292.methods["forward"] = func1328;
          func1328.definitionLine = 90;
          func1328.definitionModule = "musical";
          var func1361 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1361.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1362 = Grace_allocObject();
              block1362.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1362.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1362.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1362.methods["match"] = GraceBlock_match;
              block1362.methods["prefix?"] = GraceBlock_lift;
              block1362.receiver = this;
              block1362.className = 'block<musical:97>';
              block1362.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1364 = callmethod(this, "angle", [0]);
                var opresult1366 = callmethod(call1364, "<", [1], new GraceNum(0));
                return opresult1366;
              };
              lineNumber = 100
              var block1367 = Grace_allocObject();
              block1367.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1367.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1367.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1367.methods["match"] = GraceBlock_match;
              block1367.methods["prefix?"] = GraceBlock_lift;
              block1367.receiver = this;
              block1367.className = 'block<musical:100>';
              block1367.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1369 = callmethod(this, "angle", [0]);
                var opresult1371 = callmethod(call1369, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1372 = callmethod(this, "angle:=", [1], opresult1371);
                return call1372;
              };
              var call1373 = callmethod(Grace_prelude,"while()do", [1, 1], block1362, block1367);
              lineNumber = 100
              var block1374 = Grace_allocObject();
              block1374.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1374.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1374.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1374.methods["match"] = GraceBlock_match;
              block1374.methods["prefix?"] = GraceBlock_lift;
              block1374.receiver = this;
              block1374.className = 'block<musical:100>';
              block1374.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1376 = callmethod(this, "angle", [0]);
                var opresult1378 = callmethod(call1376, ">", [1], new GraceNum(360));
                return opresult1378;
              };
              lineNumber = 103
              var block1379 = Grace_allocObject();
              block1379.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1379.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1379.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1379.methods["match"] = GraceBlock_match;
              block1379.methods["prefix?"] = GraceBlock_lift;
              block1379.receiver = this;
              block1379.className = 'block<musical:103>';
              block1379.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1381 = callmethod(this, "angle", [0]);
                var diff1383 = callmethod(call1381, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1384 = callmethod(this, "angle:=", [1], diff1383);
                return call1384;
              };
              var call1385 = callmethod(Grace_prelude,"while()do", [1, 1], block1374, block1379);
              return call1385
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1361.paramCounts = [
            0,
          ];
          func1361.variableArities = [
            false,
          ];
          obj1292.methods["normaliseAngle"] = func1361;
          func1361.definitionLine = 96;
          func1361.definitionModule = "musical";
          var func1386 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1386.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 106
              lineNumber = 86
              lineNumber = 106
              lineNumber = 105
              onSelf = true;
              var call1388 = callmethod(this, "angle", [0]);
              var opresult1390 = callmethod(call1388, "+", [1], var_degrees);
              onSelf = true;
              var call1391 = callmethod(this, "angle:=", [1], opresult1390);
              lineNumber = 106
              onSelf = true;
              var call1392 = callmethod(this, "normaliseAngle", [0]);
              return call1392
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1386.paramCounts = [
            1,
          ];
          func1386.variableArities = [
            false,
          ];
          obj1292.methods["turn"] = func1386;
          func1386.definitionLine = 104;
          func1386.definitionModule = "musical";
          var func1393 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1393.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1394 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1395 = callmethod(this, "x", [0]);
              var call1396 = callmethod(var_point,"x()y", [1, 1], call1395, new GraceNum(0));
              onSelf = true;
              var call1397 = callmethod(this, "isPointOver", [1], call1396);
              if (Grace_isTrue(call1397)) {
                lineNumber = 111
                lineNumber = 110
                var bool1398 = new GraceBoolean(true)
                return bool1398
              }
              lineNumber = 115
              var if1399 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1400 = callmethod(this, "x", [0]);
              var call1401 = callmethod(var_point,"x()y", [1, 1], call1400, var_canvasHeight);
              onSelf = true;
              var call1402 = callmethod(this, "isPointOver", [1], call1401);
              if (Grace_isTrue(call1402)) {
                lineNumber = 114
                lineNumber = 113
                var bool1403 = new GraceBoolean(true)
                return bool1403
              }
              lineNumber = 118
              var if1404 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1405 = callmethod(this, "y", [0]);
              var call1406 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1405);
              onSelf = true;
              var call1407 = callmethod(this, "isPointOver", [1], call1406);
              if (Grace_isTrue(call1407)) {
                lineNumber = 117
                lineNumber = 116
                var bool1408 = new GraceBoolean(true)
                return bool1408
              }
              lineNumber = 121
              var if1409 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1410 = callmethod(this, "y", [0]);
              var call1411 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1410);
              onSelf = true;
              var call1412 = callmethod(this, "isPointOver", [1], call1411);
              if (Grace_isTrue(call1412)) {
                lineNumber = 120
                lineNumber = 119
                var bool1413 = new GraceBoolean(true)
                return bool1413
              }
              lineNumber = 122
              lineNumber = 121
              var bool1414 = new GraceBoolean(false)
              return bool1414
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1393.paramCounts = [
            0,
          ];
          func1393.variableArities = [
            false,
          ];
          obj1292.methods["touchingEdge"] = func1393;
          func1393.definitionLine = 108;
          func1393.definitionModule = "musical";
          var func1415 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1415.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 125
              lineNumber = 124
              var var_dx = new GraceNum(0);
              lineNumber = 125;
              moduleName = "musical";
              lineNumber = 124
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 126
              lineNumber = 125
              var var_dy = new GraceNum(0);
              lineNumber = 126;
              moduleName = "musical";
              lineNumber = 125
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 129
              var if1416 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1417 = callmethod(this, "x", [0]);
              var call1418 = callmethod(var_point,"x()y", [1, 1], call1417, new GraceNum(0));
              onSelf = true;
              var call1419 = callmethod(this, "isPointOver", [1], call1418);
              if (Grace_isTrue(call1419)) {
                lineNumber = 127
                onSelf = true;
                var call1420 = callmethod(this, "bounceFrom", [1], var_top);
                if1416 = call1420;
              }
              lineNumber = 132
              var if1421 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1422 = callmethod(this, "x", [0]);
              var call1423 = callmethod(var_point,"x()y", [1, 1], call1422, var_canvasHeight);
              onSelf = true;
              var call1424 = callmethod(this, "isPointOver", [1], call1423);
              if (Grace_isTrue(call1424)) {
                lineNumber = 130
                onSelf = true;
                var call1425 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1421 = call1425;
              }
              lineNumber = 135
              var if1426 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1427 = callmethod(this, "y", [0]);
              var call1428 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1427);
              onSelf = true;
              var call1429 = callmethod(this, "isPointOver", [1], call1428);
              if (Grace_isTrue(call1429)) {
                lineNumber = 133
                onSelf = true;
                var call1430 = callmethod(this, "bounceFrom", [1], var_left);
                if1426 = call1430;
              }
              lineNumber = 138
              var if1431 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1432 = callmethod(this, "y", [0]);
              var call1433 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1432);
              onSelf = true;
              var call1434 = callmethod(this, "isPointOver", [1], call1433);
              if (Grace_isTrue(call1434)) {
                lineNumber = 136
                onSelf = true;
                var call1435 = callmethod(this, "bounceFrom", [1], var_right);
                if1431 = call1435;
              }
              lineNumber = 138
              var block1436 = Grace_allocObject();
              block1436.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1436.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1436.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1436.methods["match"] = GraceBlock_match;
              block1436.methods["prefix?"] = GraceBlock_lift;
              block1436.receiver = this;
              block1436.className = 'block<musical:138>';
              block1436.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1437 = callmethod(this, "touchingEdge", [0]);
                return call1437;
              };
              lineNumber = 141
              var block1438 = Grace_allocObject();
              block1438.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1438.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1438.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1438.methods["match"] = GraceBlock_match;
              block1438.methods["prefix?"] = GraceBlock_lift;
              block1438.receiver = this;
              block1438.className = 'block<musical:141>';
              block1438.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1439 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1439;
              };
              var call1440 = callmethod(Grace_prelude,"while()do", [1, 1], block1436, block1438);
              return call1440
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1415.paramCounts = [
            0,
          ];
          func1415.variableArities = [
            false,
          ];
          obj1292.methods["bounce"] = func1415;
          func1415.definitionLine = 123;
          func1415.definitionModule = "musical";
          var func1441 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1441.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1442 = var_done;
              lineNumber = 143
              var string1443 = new GraceString("left");
              var opresult1446 = callmethod(var_dir, "==", [1], string1443);
              if (Grace_isTrue(opresult1446)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1447 = callmethod(this, "angle", [0]);
                var diff1450 = callmethod(new GraceNum(360), "-", [1], call1447);
                onSelf = true;
                var call1451 = callmethod(this, "angle:=", [1], diff1450);
                if1442 = call1451;
              }
              lineNumber = 149
              var if1452 = var_done;
              lineNumber = 146
              var string1453 = new GraceString("right");
              var opresult1456 = callmethod(var_dir, "==", [1], string1453);
              if (Grace_isTrue(opresult1456)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1457 = callmethod(this, "angle", [0]);
                var diff1460 = callmethod(new GraceNum(360), "-", [1], call1457);
                onSelf = true;
                var call1461 = callmethod(this, "angle:=", [1], diff1460);
                if1452 = call1461;
              }
              lineNumber = 152
              var if1462 = var_done;
              lineNumber = 149
              var string1463 = new GraceString("top");
              var opresult1466 = callmethod(var_dir, "==", [1], string1463);
              if (Grace_isTrue(opresult1466)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1467 = callmethod(this, "angle", [0]);
                var diff1470 = callmethod(new GraceNum(180), "-", [1], call1467);
                onSelf = true;
                var call1471 = callmethod(this, "angle:=", [1], diff1470);
                if1462 = call1471;
              }
              lineNumber = 155
              var if1472 = var_done;
              lineNumber = 152
              var string1473 = new GraceString("bottom");
              var opresult1476 = callmethod(var_dir, "==", [1], string1473);
              if (Grace_isTrue(opresult1476)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1477 = callmethod(this, "angle", [0]);
                var diff1480 = callmethod(new GraceNum(180), "-", [1], call1477);
                onSelf = true;
                var call1481 = callmethod(this, "angle:=", [1], diff1480);
                if1472 = call1481;
              }
              lineNumber = 155
              onSelf = true;
              var call1482 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1483 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1483
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1441.paramCounts = [
            1,
          ];
          func1441.variableArities = [
            false,
          ];
          obj1292.methods["bounceFrom"] = func1441;
          func1441.definitionLine = 142;
          func1441.definitionModule = "musical";
          var func1484 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1484.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1485 = var_done;
              lineNumber = 159
              var call1486 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1488 = callmethod(this, "x", [0]);
              var opresult1490 = callmethod(call1488, ">", [1], call1486);
              if (Grace_isTrue(opresult1490)) {
                lineNumber = 160
                onSelf = true;
                var call1491 = callmethod(this, "bounceFrom", [1], var_left);
                if1485 = call1491;
              }
              lineNumber = 165
              var if1492 = var_done;
              lineNumber = 162
              var call1493 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1495 = callmethod(this, "x", [0]);
              var opresult1497 = callmethod(call1495, "<", [1], call1493);
              if (Grace_isTrue(opresult1497)) {
                lineNumber = 163
                onSelf = true;
                var call1498 = callmethod(this, "bounceFrom", [1], var_right);
                if1492 = call1498;
              }
              lineNumber = 165
              var block1499 = Grace_allocObject();
              block1499.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1499.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1499.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1499.methods["match"] = GraceBlock_match;
              block1499.methods["prefix?"] = GraceBlock_lift;
              block1499.receiver = this;
              block1499.className = 'block<musical:165>';
              block1499.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1500 = callmethod(this, "touching", [1], var_other);
                return call1500;
              };
              lineNumber = 168
              var block1501 = Grace_allocObject();
              block1501.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1501.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1501.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1501.methods["match"] = GraceBlock_match;
              block1501.methods["prefix?"] = GraceBlock_lift;
              block1501.receiver = this;
              block1501.className = 'block<musical:168>';
              block1501.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1502 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1502;
              };
              var call1503 = callmethod(Grace_prelude,"while()do", [1, 1], block1499, block1501);
              return call1503
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1484.paramCounts = [
            1,
          ];
          func1484.variableArities = [
            false,
          ];
          obj1292.methods["bounceOff"] = func1484;
          func1484.definitionLine = 158;
          func1484.definitionModule = "musical";
          var func1504 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1504.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1505 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1506 = callmethod(this, "y", [0]);
              var call1507 = callmethod(var_point,"x()y", [1, 1], call1505, call1506);
              var call1508 = callmethod(var_other,"isPointOver", [1], call1507);
              return call1508
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1504.paramCounts = [
            1,
          ];
          func1504.variableArities = [
            false,
          ];
          obj1292.methods["touching"] = func1504;
          func1504.definitionLine = 169;
          func1504.definitionModule = "musical";
          var func1509 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1509.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1510 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1511 = callmethod(this, "y", [0]);
              var call1513 = callmethod(var_other,"y", [0]);
              var opresult1515 = callmethod(call1513, "!=", [1], call1511);
              onSelf = true;
              var call1517 = callmethod(this, "x", [0]);
              var call1519 = callmethod(var_other,"x", [0]);
              var opresult1521 = callmethod(call1519, "!=", [1], call1517);
              var opresult1523 = callmethod(opresult1521, "||", [1], opresult1515);
              if (Grace_isTrue(opresult1523)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1526 = callmethod(this, "x", [0]);
                var call1528 = callmethod(var_other,"x", [0]);
                var diff1530 = callmethod(call1528, "-", [1], call1526);
                onSelf = true;
                var call1531 = callmethod(this, "y", [0]);
                var call1533 = callmethod(var_other,"y", [0]);
                var diff1535 = callmethod(call1533, "-", [1], call1531);
                var call1536 = callmethod(var_trig,"atan2", [2], diff1530, diff1535);
                var prod1538 = callmethod(call1536, "*", [1], new GraceNum(180));
                var quotient1540 = callmethod(prod1538, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1541 = callmethod(this, "angle:=", [1], quotient1540);
                if1510 = call1541;
              }
              lineNumber = 176
              onSelf = true;
              var call1542 = callmethod(this, "normaliseAngle", [0]);
              return call1542
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1509.paramCounts = [
            1,
          ];
          func1509.variableArities = [
            false,
          ];
          obj1292.methods["face"] = func1509;
          func1509.definitionLine = 172;
          func1509.definitionModule = "musical";
          var func1543 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1544 = new GraceString("2d");
              var call1545 = callmethod(var_backingCanvas,"getContext", [1], string1544);
              onSelf = true;
              var call1546 = callmethod(this, "draw", [1], call1545);
              return call1546
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1543.paramCounts = [
            0,
          ];
          func1543.variableArities = [
            false,
          ];
          obj1292.methods["stamp"] = func1543;
          func1543.definitionLine = 178;
          func1543.definitionModule = "musical";
          sourceObject = obj1292;
          lineNumber = 49
          var call1547 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1548 = callmethod(call1547, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1549 = callmethod(call1548, "initialise", [0]);
          sourceObject = obj1292;
          lineNumber = 50
          var call1550 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1292;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1292;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1292;
          lineNumber = 53
          var call1551 = callmethod(var_collections,"list", [0]);
          var call1552 = callmethod(call1551,"new", [0]);
          obj1292.data["alwaysBlocks"] = call1552;
          var reader_musical_alwaysBlocks_1553 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1553.def = true;
          reader_musical_alwaysBlocks_1553.confidential = true;
          obj1292.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1553;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1552)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1292;
          lineNumber = 55
          lineNumber = 54
          var quotient1556 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1292.data["x"] = quotient1556;
          var reader_musical_x_1557 = function() {
            return this.data["x"];
          }
          obj1292.methods["x"] = reader_musical_x_1557;
          obj1292.data["x"] = quotient1556;
          var writer_musical_x_1557 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1292.methods["x:="] = writer_musical_x_1557;
          writer_musical_x_1557.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1556)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1292.mutable = true;
          sourceObject = obj1292;
          lineNumber = 56
          lineNumber = 55
          var quotient1560 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1292.data["y"] = quotient1560;
          var reader_musical_y_1561 = function() {
            return this.data["y"];
          }
          obj1292.methods["y"] = reader_musical_y_1561;
          obj1292.data["y"] = quotient1560;
          var writer_musical_y_1561 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1292.methods["y:="] = writer_musical_y_1561;
          writer_musical_y_1561.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1560)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1292.mutable = true;
          sourceObject = obj1292;
          lineNumber = 56
          onSelf = true;
          var call1562 = callmethod(this, "x", [0]);
          obj1292.data["destX"] = call1562;
          var reader_musical_destX_1563 = function() {
            return this.data["destX"];
          }
          obj1292.methods["destX"] = reader_musical_destX_1563;
          obj1292.data["destX"] = call1562;
          var writer_musical_destX_1563 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1292.methods["destX:="] = writer_musical_destX_1563;
          reader_musical_destX_1563.confidential = true;
          writer_musical_destX_1563.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1562)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1292.mutable = true;
          sourceObject = obj1292;
          lineNumber = 57
          onSelf = true;
          var call1564 = callmethod(this, "y", [0]);
          obj1292.data["destY"] = call1564;
          var reader_musical_destY_1565 = function() {
            return this.data["destY"];
          }
          obj1292.methods["destY"] = reader_musical_destY_1565;
          obj1292.data["destY"] = call1564;
          var writer_musical_destY_1565 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1292.methods["destY:="] = writer_musical_destY_1565;
          reader_musical_destY_1565.confidential = true;
          writer_musical_destY_1565.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1564)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1292.mutable = true;
          sourceObject = obj1292;
          lineNumber = 58
          obj1292.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1566 = function() {
            return this.data["angle"];
          }
          obj1292.methods["angle"] = reader_musical_angle_1566;
          obj1292.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1566 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1292.methods["angle:="] = writer_musical_angle_1566;
          reader_musical_angle_1566.confidential = true;
          writer_musical_angle_1566.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1292.mutable = true;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          sourceObject = obj1292;
          superDepth = origSuperDepth;
        }
        obj_init_1292.apply(obj1292, []);
        return obj1292
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1291.paramCounts = [
      0,
    ];
    func1291.variableArities = [
      false,
    ];
    obj1289.methods["new"] = func1291;
    func1291.definitionLine = 48;
    func1291.definitionModule = "musical";
    var func1567 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1568 = Grace_allocObject();
        obj1568.definitionModule = "musical";
        obj1568.definitionLine = 48;
        var inho1568 = inheritingObject;
        while (inho1568.superobj) inho1568 = inho1568.superobj;
        inho1568.superobj = obj1568;
        obj1568.data = inheritingObject.data;
        obj1568.outer = this;
        var reader_musical_outer_1569 = function() {
          return this.outer;
        }
        obj1568.methods["outer"] = reader_musical_outer_1569;
        function obj_init_1568() {
          var origSuperDepth = superDepth;
          superDepth = obj1568;
          obj1568.annotations = [];
          var func1570 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1570.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1571 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1572 = Grace_allocObject();
              block1572.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1572.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1572.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1572.methods["match"] = GraceBlock_match;
              block1572.methods["prefix?"] = GraceBlock_lift;
              block1572.receiver = this;
              block1572.className = 'block<musical:63>';
              block1572.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1573 = callmethod(var_b,"apply", [0]);
                return call1573;
              };
              var call1574 = callmethod(Grace_prelude,"for()do", [1, 1], call1571, block1572);
              lineNumber = 63
              onSelf = true;
              var call1575 = callmethod(this, "tick", [0]);
              return call1575
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1570.paramCounts = [
            0,
          ];
          func1570.variableArities = [
            false,
          ];
          obj1568.methods["step"] = func1570;
          func1570.definitionLine = 59;
          func1570.definitionModule = "musical";
          var func1576 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1576.paramCounts[0])
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
          func1576.paramCounts = [
            0,
          ];
          func1576.variableArities = [
            false,
          ];
          obj1568.methods["tick"] = func1576;
          func1576.definitionLine = 66;
          func1576.definitionModule = "musical";
          var func1577 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1577.paramCounts[0])
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
          func1577.paramCounts = [
            1,
          ];
          func1577.variableArities = [
            false,
          ];
          obj1568.methods["draw"] = func1577;
          func1577.definitionLine = 67;
          func1577.definitionModule = "musical";
          var func1578 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1578.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1579 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1580 = callmethod(this, "destX:=", [1], call1579);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1581 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1582 = callmethod(this, "destY:=", [1], call1581);
              return call1582
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1578.paramCounts = [
            1,
          ];
          func1578.variableArities = [
            false,
          ];
          obj1568.methods["moveTo"] = func1578;
          func1578.definitionLine = 68;
          func1578.definitionModule = "musical";
          var func1583 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1583.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1584 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1585 = callmethod(this, "x:=", [1], call1584);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1586 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1587 = callmethod(this, "y:=", [1], call1586);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1588 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1589 = callmethod(this, "destX:=", [1], call1588);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1590 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1591 = callmethod(this, "destY:=", [1], call1590);
              return call1591
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1583.paramCounts = [
            1,
          ];
          func1583.variableArities = [
            false,
          ];
          obj1568.methods["jumpTo"] = func1583;
          func1583.definitionLine = 72;
          func1583.definitionModule = "musical";
          var func1592 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1592.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1593 = new GraceBoolean(false)
              return bool1593
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1592.paramCounts = [
            1,
          ];
          func1592.variableArities = [
            false,
          ];
          obj1568.methods["isPointOver"] = func1592;
          func1592.definitionLine = 78;
          func1592.definitionModule = "musical";
          var func1594 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1594.paramCounts[0])
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
          func1594.paramCounts = [
            0,
          ];
          func1594.variableArities = [
            false,
          ];
          obj1568.methods["mousedown"] = func1594;
          func1594.definitionLine = 79;
          func1594.definitionModule = "musical";
          var func1595 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1595.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1596 = callmethod(this, "alwaysBlocks", [0]);
              var call1597 = callmethod(call1596,"push", [1], var_b);
              return call1597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1595.paramCounts = [
            1,
          ];
          func1595.variableArities = [
            false,
          ];
          obj1568.methods["always"] = func1595;
          func1595.definitionLine = 80;
          func1595.definitionModule = "musical";
          var func1598 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1598.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1598.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1599 = Grace_allocObject();
              block1599.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1599.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1599.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1599.methods["match"] = GraceBlock_match;
              block1599.methods["prefix?"] = GraceBlock_lift;
              block1599.receiver = this;
              block1599.className = 'block<musical:89>';
              block1599.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1600 = var_done;
                lineNumber = 85
                var call1601 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1601)) {
                  lineNumber = 86
                  var call1602 = callmethod(var_b,"apply", [0]);
                  if1600 = call1602;
                }
                return if1600;
              };
              onSelf = true;
              var call1603 = callmethod(this, "always", [1], block1599);
              return call1603
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1598.paramCounts = [
            1,
            1,
          ];
          func1598.variableArities = [
            false,
            false,
          ];
          obj1568.methods["whenever()do"] = func1598;
          func1598.definitionLine = 83;
          func1598.definitionModule = "musical";
          var func1604 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1608 = callmethod(this, "angle", [0]);
              var quotient1610 = callmethod(call1608, "/", [1], new GraceNum(180));
              var prod1612 = callmethod(quotient1610, "*", [1], var_PI);
              var call1613 = callmethod(var_trig,"cos", [1], prod1612);
              var prod1615 = callmethod(call1613, "*", [1], var_dist);
              var var_y__39__ = prod1615;
              lineNumber = 92;
              moduleName = "musical";
              lineNumber = 91
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1619 = callmethod(this, "angle", [0]);
              var quotient1621 = callmethod(call1619, "/", [1], new GraceNum(180));
              var prod1623 = callmethod(quotient1621, "*", [1], var_PI);
              var call1624 = callmethod(var_trig,"sin", [1], prod1623);
              var prod1626 = callmethod(call1624, "*", [1], var_dist);
              var var_x__39__ = prod1626;
              lineNumber = 93;
              moduleName = "musical";
              lineNumber = 92
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 94
              lineNumber = 86
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1628 = callmethod(this, "x", [0]);
              var opresult1630 = callmethod(call1628, "+", [1], var_x__39__);
              onSelf = true;
              var call1631 = callmethod(this, "x:=", [1], opresult1630);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1633 = callmethod(this, "y", [0]);
              var opresult1635 = callmethod(call1633, "+", [1], var_y__39__);
              onSelf = true;
              var call1636 = callmethod(this, "y:=", [1], opresult1635);
              return call1636
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1604.paramCounts = [
            1,
          ];
          func1604.variableArities = [
            false,
          ];
          obj1568.methods["forward"] = func1604;
          func1604.definitionLine = 90;
          func1604.definitionModule = "musical";
          var func1637 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1637.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1638 = Grace_allocObject();
              block1638.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1638.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1638.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1638.methods["match"] = GraceBlock_match;
              block1638.methods["prefix?"] = GraceBlock_lift;
              block1638.receiver = this;
              block1638.className = 'block<musical:97>';
              block1638.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1640 = callmethod(this, "angle", [0]);
                var opresult1642 = callmethod(call1640, "<", [1], new GraceNum(0));
                return opresult1642;
              };
              lineNumber = 100
              var block1643 = Grace_allocObject();
              block1643.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1643.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1643.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1643.methods["match"] = GraceBlock_match;
              block1643.methods["prefix?"] = GraceBlock_lift;
              block1643.receiver = this;
              block1643.className = 'block<musical:100>';
              block1643.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1645 = callmethod(this, "angle", [0]);
                var opresult1647 = callmethod(call1645, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1648 = callmethod(this, "angle:=", [1], opresult1647);
                return call1648;
              };
              var call1649 = callmethod(Grace_prelude,"while()do", [1, 1], block1638, block1643);
              lineNumber = 100
              var block1650 = Grace_allocObject();
              block1650.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1650.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1650.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1650.methods["match"] = GraceBlock_match;
              block1650.methods["prefix?"] = GraceBlock_lift;
              block1650.receiver = this;
              block1650.className = 'block<musical:100>';
              block1650.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1652 = callmethod(this, "angle", [0]);
                var opresult1654 = callmethod(call1652, ">", [1], new GraceNum(360));
                return opresult1654;
              };
              lineNumber = 103
              var block1655 = Grace_allocObject();
              block1655.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1655.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1655.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1655.methods["match"] = GraceBlock_match;
              block1655.methods["prefix?"] = GraceBlock_lift;
              block1655.receiver = this;
              block1655.className = 'block<musical:103>';
              block1655.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1657 = callmethod(this, "angle", [0]);
                var diff1659 = callmethod(call1657, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1660 = callmethod(this, "angle:=", [1], diff1659);
                return call1660;
              };
              var call1661 = callmethod(Grace_prelude,"while()do", [1, 1], block1650, block1655);
              return call1661
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1637.paramCounts = [
            0,
          ];
          func1637.variableArities = [
            false,
          ];
          obj1568.methods["normaliseAngle"] = func1637;
          func1637.definitionLine = 96;
          func1637.definitionModule = "musical";
          var func1662 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1662.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 106
              lineNumber = 86
              lineNumber = 106
              lineNumber = 105
              onSelf = true;
              var call1664 = callmethod(this, "angle", [0]);
              var opresult1666 = callmethod(call1664, "+", [1], var_degrees);
              onSelf = true;
              var call1667 = callmethod(this, "angle:=", [1], opresult1666);
              lineNumber = 106
              onSelf = true;
              var call1668 = callmethod(this, "normaliseAngle", [0]);
              return call1668
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1662.paramCounts = [
            1,
          ];
          func1662.variableArities = [
            false,
          ];
          obj1568.methods["turn"] = func1662;
          func1662.definitionLine = 104;
          func1662.definitionModule = "musical";
          var func1669 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1669.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1670 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1671 = callmethod(this, "x", [0]);
              var call1672 = callmethod(var_point,"x()y", [1, 1], call1671, new GraceNum(0));
              onSelf = true;
              var call1673 = callmethod(this, "isPointOver", [1], call1672);
              if (Grace_isTrue(call1673)) {
                lineNumber = 111
                lineNumber = 110
                var bool1674 = new GraceBoolean(true)
                return bool1674
              }
              lineNumber = 115
              var if1675 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1676 = callmethod(this, "x", [0]);
              var call1677 = callmethod(var_point,"x()y", [1, 1], call1676, var_canvasHeight);
              onSelf = true;
              var call1678 = callmethod(this, "isPointOver", [1], call1677);
              if (Grace_isTrue(call1678)) {
                lineNumber = 114
                lineNumber = 113
                var bool1679 = new GraceBoolean(true)
                return bool1679
              }
              lineNumber = 118
              var if1680 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1681 = callmethod(this, "y", [0]);
              var call1682 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1681);
              onSelf = true;
              var call1683 = callmethod(this, "isPointOver", [1], call1682);
              if (Grace_isTrue(call1683)) {
                lineNumber = 117
                lineNumber = 116
                var bool1684 = new GraceBoolean(true)
                return bool1684
              }
              lineNumber = 121
              var if1685 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1686 = callmethod(this, "y", [0]);
              var call1687 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1686);
              onSelf = true;
              var call1688 = callmethod(this, "isPointOver", [1], call1687);
              if (Grace_isTrue(call1688)) {
                lineNumber = 120
                lineNumber = 119
                var bool1689 = new GraceBoolean(true)
                return bool1689
              }
              lineNumber = 122
              lineNumber = 121
              var bool1690 = new GraceBoolean(false)
              return bool1690
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1669.paramCounts = [
            0,
          ];
          func1669.variableArities = [
            false,
          ];
          obj1568.methods["touchingEdge"] = func1669;
          func1669.definitionLine = 108;
          func1669.definitionModule = "musical";
          var func1691 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1691.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 125
              lineNumber = 124
              var var_dx = new GraceNum(0);
              lineNumber = 125;
              moduleName = "musical";
              lineNumber = 124
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 126
              lineNumber = 125
              var var_dy = new GraceNum(0);
              lineNumber = 126;
              moduleName = "musical";
              lineNumber = 125
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 129
              var if1692 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1693 = callmethod(this, "x", [0]);
              var call1694 = callmethod(var_point,"x()y", [1, 1], call1693, new GraceNum(0));
              onSelf = true;
              var call1695 = callmethod(this, "isPointOver", [1], call1694);
              if (Grace_isTrue(call1695)) {
                lineNumber = 127
                onSelf = true;
                var call1696 = callmethod(this, "bounceFrom", [1], var_top);
                if1692 = call1696;
              }
              lineNumber = 132
              var if1697 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1698 = callmethod(this, "x", [0]);
              var call1699 = callmethod(var_point,"x()y", [1, 1], call1698, var_canvasHeight);
              onSelf = true;
              var call1700 = callmethod(this, "isPointOver", [1], call1699);
              if (Grace_isTrue(call1700)) {
                lineNumber = 130
                onSelf = true;
                var call1701 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1697 = call1701;
              }
              lineNumber = 135
              var if1702 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1703 = callmethod(this, "y", [0]);
              var call1704 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1703);
              onSelf = true;
              var call1705 = callmethod(this, "isPointOver", [1], call1704);
              if (Grace_isTrue(call1705)) {
                lineNumber = 133
                onSelf = true;
                var call1706 = callmethod(this, "bounceFrom", [1], var_left);
                if1702 = call1706;
              }
              lineNumber = 138
              var if1707 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1708 = callmethod(this, "y", [0]);
              var call1709 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1708);
              onSelf = true;
              var call1710 = callmethod(this, "isPointOver", [1], call1709);
              if (Grace_isTrue(call1710)) {
                lineNumber = 136
                onSelf = true;
                var call1711 = callmethod(this, "bounceFrom", [1], var_right);
                if1707 = call1711;
              }
              lineNumber = 138
              var block1712 = Grace_allocObject();
              block1712.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1712.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1712.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1712.methods["match"] = GraceBlock_match;
              block1712.methods["prefix?"] = GraceBlock_lift;
              block1712.receiver = this;
              block1712.className = 'block<musical:138>';
              block1712.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1713 = callmethod(this, "touchingEdge", [0]);
                return call1713;
              };
              lineNumber = 141
              var block1714 = Grace_allocObject();
              block1714.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1714.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1714.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1714.methods["match"] = GraceBlock_match;
              block1714.methods["prefix?"] = GraceBlock_lift;
              block1714.receiver = this;
              block1714.className = 'block<musical:141>';
              block1714.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1715 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1715;
              };
              var call1716 = callmethod(Grace_prelude,"while()do", [1, 1], block1712, block1714);
              return call1716
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
          obj1568.methods["bounce"] = func1691;
          func1691.definitionLine = 123;
          func1691.definitionModule = "musical";
          var func1717 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1717.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1718 = var_done;
              lineNumber = 143
              var string1719 = new GraceString("left");
              var opresult1722 = callmethod(var_dir, "==", [1], string1719);
              if (Grace_isTrue(opresult1722)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1723 = callmethod(this, "angle", [0]);
                var diff1726 = callmethod(new GraceNum(360), "-", [1], call1723);
                onSelf = true;
                var call1727 = callmethod(this, "angle:=", [1], diff1726);
                if1718 = call1727;
              }
              lineNumber = 149
              var if1728 = var_done;
              lineNumber = 146
              var string1729 = new GraceString("right");
              var opresult1732 = callmethod(var_dir, "==", [1], string1729);
              if (Grace_isTrue(opresult1732)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1733 = callmethod(this, "angle", [0]);
                var diff1736 = callmethod(new GraceNum(360), "-", [1], call1733);
                onSelf = true;
                var call1737 = callmethod(this, "angle:=", [1], diff1736);
                if1728 = call1737;
              }
              lineNumber = 152
              var if1738 = var_done;
              lineNumber = 149
              var string1739 = new GraceString("top");
              var opresult1742 = callmethod(var_dir, "==", [1], string1739);
              if (Grace_isTrue(opresult1742)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1743 = callmethod(this, "angle", [0]);
                var diff1746 = callmethod(new GraceNum(180), "-", [1], call1743);
                onSelf = true;
                var call1747 = callmethod(this, "angle:=", [1], diff1746);
                if1738 = call1747;
              }
              lineNumber = 155
              var if1748 = var_done;
              lineNumber = 152
              var string1749 = new GraceString("bottom");
              var opresult1752 = callmethod(var_dir, "==", [1], string1749);
              if (Grace_isTrue(opresult1752)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1753 = callmethod(this, "angle", [0]);
                var diff1756 = callmethod(new GraceNum(180), "-", [1], call1753);
                onSelf = true;
                var call1757 = callmethod(this, "angle:=", [1], diff1756);
                if1748 = call1757;
              }
              lineNumber = 155
              onSelf = true;
              var call1758 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1759 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1759
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1717.paramCounts = [
            1,
          ];
          func1717.variableArities = [
            false,
          ];
          obj1568.methods["bounceFrom"] = func1717;
          func1717.definitionLine = 142;
          func1717.definitionModule = "musical";
          var func1760 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1760.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1761 = var_done;
              lineNumber = 159
              var call1762 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1764 = callmethod(this, "x", [0]);
              var opresult1766 = callmethod(call1764, ">", [1], call1762);
              if (Grace_isTrue(opresult1766)) {
                lineNumber = 160
                onSelf = true;
                var call1767 = callmethod(this, "bounceFrom", [1], var_left);
                if1761 = call1767;
              }
              lineNumber = 165
              var if1768 = var_done;
              lineNumber = 162
              var call1769 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1771 = callmethod(this, "x", [0]);
              var opresult1773 = callmethod(call1771, "<", [1], call1769);
              if (Grace_isTrue(opresult1773)) {
                lineNumber = 163
                onSelf = true;
                var call1774 = callmethod(this, "bounceFrom", [1], var_right);
                if1768 = call1774;
              }
              lineNumber = 165
              var block1775 = Grace_allocObject();
              block1775.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1775.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1775.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1775.methods["match"] = GraceBlock_match;
              block1775.methods["prefix?"] = GraceBlock_lift;
              block1775.receiver = this;
              block1775.className = 'block<musical:165>';
              block1775.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1776 = callmethod(this, "touching", [1], var_other);
                return call1776;
              };
              lineNumber = 168
              var block1777 = Grace_allocObject();
              block1777.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1777.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1777.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1777.methods["match"] = GraceBlock_match;
              block1777.methods["prefix?"] = GraceBlock_lift;
              block1777.receiver = this;
              block1777.className = 'block<musical:168>';
              block1777.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1778 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1778;
              };
              var call1779 = callmethod(Grace_prelude,"while()do", [1, 1], block1775, block1777);
              return call1779
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1760.paramCounts = [
            1,
          ];
          func1760.variableArities = [
            false,
          ];
          obj1568.methods["bounceOff"] = func1760;
          func1760.definitionLine = 158;
          func1760.definitionModule = "musical";
          var func1780 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1780.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1781 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1782 = callmethod(this, "y", [0]);
              var call1783 = callmethod(var_point,"x()y", [1, 1], call1781, call1782);
              var call1784 = callmethod(var_other,"isPointOver", [1], call1783);
              return call1784
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1780.paramCounts = [
            1,
          ];
          func1780.variableArities = [
            false,
          ];
          obj1568.methods["touching"] = func1780;
          func1780.definitionLine = 169;
          func1780.definitionModule = "musical";
          var func1785 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1785.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1786 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1787 = callmethod(this, "y", [0]);
              var call1789 = callmethod(var_other,"y", [0]);
              var opresult1791 = callmethod(call1789, "!=", [1], call1787);
              onSelf = true;
              var call1793 = callmethod(this, "x", [0]);
              var call1795 = callmethod(var_other,"x", [0]);
              var opresult1797 = callmethod(call1795, "!=", [1], call1793);
              var opresult1799 = callmethod(opresult1797, "||", [1], opresult1791);
              if (Grace_isTrue(opresult1799)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1802 = callmethod(this, "x", [0]);
                var call1804 = callmethod(var_other,"x", [0]);
                var diff1806 = callmethod(call1804, "-", [1], call1802);
                onSelf = true;
                var call1807 = callmethod(this, "y", [0]);
                var call1809 = callmethod(var_other,"y", [0]);
                var diff1811 = callmethod(call1809, "-", [1], call1807);
                var call1812 = callmethod(var_trig,"atan2", [2], diff1806, diff1811);
                var prod1814 = callmethod(call1812, "*", [1], new GraceNum(180));
                var quotient1816 = callmethod(prod1814, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1817 = callmethod(this, "angle:=", [1], quotient1816);
                if1786 = call1817;
              }
              lineNumber = 176
              onSelf = true;
              var call1818 = callmethod(this, "normaliseAngle", [0]);
              return call1818
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1785.paramCounts = [
            1,
          ];
          func1785.variableArities = [
            false,
          ];
          obj1568.methods["face"] = func1785;
          func1785.definitionLine = 172;
          func1785.definitionModule = "musical";
          var func1819 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1819.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1820 = new GraceString("2d");
              var call1821 = callmethod(var_backingCanvas,"getContext", [1], string1820);
              onSelf = true;
              var call1822 = callmethod(this, "draw", [1], call1821);
              return call1822
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1819.paramCounts = [
            0,
          ];
          func1819.variableArities = [
            false,
          ];
          obj1568.methods["stamp"] = func1819;
          func1819.definitionLine = 178;
          func1819.definitionModule = "musical";
          sourceObject = obj1568;
          lineNumber = 49
          var call1823 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1824 = callmethod(call1823, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1825 = callmethod(call1824, "initialise", [0]);
          sourceObject = obj1568;
          lineNumber = 50
          var call1826 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1568;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1568;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1568;
          lineNumber = 53
          var call1827 = callmethod(var_collections,"list", [0]);
          var call1828 = callmethod(call1827,"new", [0]);
          obj1568.data["alwaysBlocks"] = call1828;
          var reader_musical_alwaysBlocks_1829 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1829.def = true;
          reader_musical_alwaysBlocks_1829.confidential = true;
          obj1568.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1829;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1828)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1568;
          lineNumber = 55
          lineNumber = 54
          var quotient1832 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1568.data["x"] = quotient1832;
          var reader_musical_x_1833 = function() {
            return this.data["x"];
          }
          obj1568.methods["x"] = reader_musical_x_1833;
          obj1568.data["x"] = quotient1832;
          var writer_musical_x_1833 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1568.methods["x:="] = writer_musical_x_1833;
          writer_musical_x_1833.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1832)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1568.mutable = true;
          sourceObject = obj1568;
          lineNumber = 56
          lineNumber = 55
          var quotient1836 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1568.data["y"] = quotient1836;
          var reader_musical_y_1837 = function() {
            return this.data["y"];
          }
          obj1568.methods["y"] = reader_musical_y_1837;
          obj1568.data["y"] = quotient1836;
          var writer_musical_y_1837 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1568.methods["y:="] = writer_musical_y_1837;
          writer_musical_y_1837.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1836)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1568.mutable = true;
          sourceObject = obj1568;
          lineNumber = 56
          onSelf = true;
          var call1838 = callmethod(this, "x", [0]);
          obj1568.data["destX"] = call1838;
          var reader_musical_destX_1839 = function() {
            return this.data["destX"];
          }
          obj1568.methods["destX"] = reader_musical_destX_1839;
          obj1568.data["destX"] = call1838;
          var writer_musical_destX_1839 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1568.methods["destX:="] = writer_musical_destX_1839;
          reader_musical_destX_1839.confidential = true;
          writer_musical_destX_1839.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1838)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1568.mutable = true;
          sourceObject = obj1568;
          lineNumber = 57
          onSelf = true;
          var call1840 = callmethod(this, "y", [0]);
          obj1568.data["destY"] = call1840;
          var reader_musical_destY_1841 = function() {
            return this.data["destY"];
          }
          obj1568.methods["destY"] = reader_musical_destY_1841;
          obj1568.data["destY"] = call1840;
          var writer_musical_destY_1841 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1568.methods["destY:="] = writer_musical_destY_1841;
          reader_musical_destY_1841.confidential = true;
          writer_musical_destY_1841.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1840)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1568.mutable = true;
          sourceObject = obj1568;
          lineNumber = 58
          obj1568.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1842 = function() {
            return this.data["angle"];
          }
          obj1568.methods["angle"] = reader_musical_angle_1842;
          obj1568.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1842 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1568.methods["angle:="] = writer_musical_angle_1842;
          reader_musical_angle_1842.confidential = true;
          writer_musical_angle_1842.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1568.mutable = true;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          sourceObject = obj1568;
          superDepth = origSuperDepth;
        }
        obj_init_1568.apply(inheritingObject, []);
        return obj1568
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1289.methods["new()object"] = func1567;
    var func1843 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1844 = new GraceString("class drawable");
        return string1844
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1843.paramCounts = [
    ];
    func1843.variableArities = [
    ];
    obj1289.methods["asDebugString"] = func1843;
    func1843.definitionLine = 48;
    func1843.definitionModule = "musical";
    sourceObject = obj1289;
    sourceObject = obj1289;
    superDepth = origSuperDepth;
  }
  obj_init_1289.apply(obj1289, []);
  var var_drawable = obj1289;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1845 = Grace_allocObject();
  obj1845.definitionModule = "musical";
  obj1845.definitionLine = 316;
  obj1845.outer = this;
  var reader_musical_outer_1846 = function() {
    return this.outer;
  }
  obj1845.methods["outer"] = reader_musical_outer_1846;
  function obj_init_1845() {
    var origSuperDepth = superDepth;
    superDepth = obj1845;
    obj1845.annotations = [];
    var func1847 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1847.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1848 = callmethod(this, "position", [0]);
        var call1849 = callmethod(call1848,"x", [0]);
        return call1849
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1847.paramCounts = [
      0,
    ];
    func1847.variableArities = [
      false,
    ];
    obj1845.methods["x"] = func1847;
    func1847.definitionLine = 318;
    func1847.definitionModule = "musical";
    var func1850 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1850.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1851 = callmethod(this, "position", [0]);
        var call1852 = callmethod(call1851,"y", [0]);
        return call1852
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1850.paramCounts = [
      0,
    ];
    func1850.variableArities = [
      false,
    ];
    obj1845.methods["y"] = func1850;
    func1850.definitionLine = 321;
    func1850.definitionModule = "musical";
    var func1853 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1853.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1854 = callmethod(this, "position", [0]);
        return call1854
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1853.paramCounts = [
      0,
    ];
    func1853.variableArities = [
      false,
    ];
    obj1845.methods["location"] = func1853;
    func1853.definitionLine = 324;
    func1853.definitionModule = "musical";
    sourceObject = obj1845;
    lineNumber = 317
    var call1855 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1845.data["position"] = call1855;
    var reader_musical_position_1856 = function() {
      return this.data["position"];
    }
    obj1845.methods["position"] = reader_musical_position_1856;
    obj1845.data["position"] = call1855;
    var writer_musical_position_1856 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1845.methods["position:="] = writer_musical_position_1856;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1855)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1845.mutable = true;
    sourceObject = obj1845;
    sourceObject = obj1845;
    sourceObject = obj1845;
    superDepth = origSuperDepth;
  }
  obj_init_1845.apply(obj1845, []);
  var var_mouse = obj1845;
  lineNumber = 322
  var func1857 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1857.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 316
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1857.paramCounts = [
    0,
  ];
  func1857.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1857;
  func1857.definitionLine = 322;
  func1857.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 408
  lineNumber = 467
  lineNumber = 483
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1858 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1858.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 483
      return var_octave
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1858.paramCounts = [
    0,
  ];
  func1858.variableArities = [
    false,
  ];
  this.methods["octave"] = func1858;
  func1858.definitionLine = 322;
  func1858.definitionModule = "musical";
  lineNumber = 322
  var func1859 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1859.paramCounts[0])
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
  func1859.paramCounts = [
    1,
  ];
  func1859.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1859;
  func1859.definitionLine = 322;
  func1859.definitionModule = "musical";
  lineNumber = 483;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 485
  lineNumber = 486
  lineNumber = 485
  var bool1860 = new GraceBoolean(false)
  var var_applyFlat = bool1860;
  lineNumber = 322
  var func1861 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1861.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 485
      return var_applyFlat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1861.paramCounts = [
    0,
  ];
  func1861.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1861;
  func1861.definitionLine = 322;
  func1861.definitionModule = "musical";
  lineNumber = 322
  var func1862 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1862.paramCounts[0])
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
  func1862.paramCounts = [
    1,
  ];
  func1862.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1862;
  func1862.definitionLine = 322;
  func1862.definitionModule = "musical";
  lineNumber = 486;
  moduleName = "musical";
  lineNumber = 485
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 488
  lineNumber = 486
  var bool1863 = new GraceBoolean(false)
  var var_applySharp = bool1863;
  lineNumber = 322
  var func1864 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1864.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 486
      return var_applySharp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1864.paramCounts = [
    0,
  ];
  func1864.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1864;
  func1864.definitionLine = 322;
  func1864.definitionModule = "musical";
  lineNumber = 322
  var func1865 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1865.paramCounts[0])
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
  func1865.paramCounts = [
    1,
  ];
  func1865.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1865;
  func1865.definitionLine = 322;
  func1865.definitionModule = "musical";
  lineNumber = 488;
  moduleName = "musical";
  lineNumber = 486
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 488
  lineNumber = 489
  lineNumber = 488
  var bool1866 = new GraceBoolean(false)
  var var_applyChorus = bool1866;
  lineNumber = 322
  var func1867 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1867.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 488
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1867.paramCounts = [
    0,
  ];
  func1867.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1867;
  func1867.definitionLine = 322;
  func1867.definitionModule = "musical";
  lineNumber = 322
  var func1868 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1868.paramCounts[0])
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
  func1868.paramCounts = [
    1,
  ];
  func1868.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1868;
  func1868.definitionLine = 322;
  func1868.definitionModule = "musical";
  lineNumber = 489;
  moduleName = "musical";
  lineNumber = 488
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 490
  lineNumber = 489
  var bool1869 = new GraceBoolean(false)
  var var_applyReverb = bool1869;
  lineNumber = 322
  var func1870 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1870.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 489
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1870.paramCounts = [
    0,
  ];
  func1870.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1870;
  func1870.definitionLine = 322;
  func1870.definitionModule = "musical";
  lineNumber = 322
  var func1871 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1871.paramCounts[0])
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
  func1871.paramCounts = [
    1,
  ];
  func1871.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1871;
  func1871.definitionLine = 322;
  func1871.definitionModule = "musical";
  lineNumber = 490;
  moduleName = "musical";
  lineNumber = 489
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 491
  lineNumber = 490
  var bool1872 = new GraceBoolean(false)
  var var_applyAutowah = bool1872;
  lineNumber = 322
  var func1873 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1873.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 490
      return var_applyAutowah
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
  this.methods["applyAutowah"] = func1873;
  func1873.definitionLine = 322;
  func1873.definitionModule = "musical";
  lineNumber = 322
  var func1874 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1874.paramCounts[0])
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
  func1874.paramCounts = [
    1,
  ];
  func1874.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1874;
  func1874.definitionLine = 322;
  func1874.definitionModule = "musical";
  lineNumber = 491;
  moduleName = "musical";
  lineNumber = 490
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 496
  lineNumber = 491
  var bool1875 = new GraceBoolean(false)
  var var_applyCheby = bool1875;
  lineNumber = 322
  var func1876 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1876.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 491
      return var_applyCheby
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1876.paramCounts = [
    0,
  ];
  func1876.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1876;
  func1876.definitionLine = 322;
  func1876.definitionModule = "musical";
  lineNumber = 322
  var func1877 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1877.paramCounts[0])
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
  func1877.paramCounts = [
    1,
  ];
  func1877.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1877;
  func1877.definitionLine = 322;
  func1877.definitionModule = "musical";
  lineNumber = 496;
  moduleName = "musical";
  lineNumber = 491
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 496
  lineNumber = 526
  lineNumber = 535
  lineNumber = 541
  lineNumber = 551
  lineNumber = 556
  lineNumber = 561
  lineNumber = 566
  lineNumber = 571
  lineNumber = 576
  lineNumber = 581
  lineNumber = 589
  lineNumber = 606
  lineNumber = 612
  lineNumber = 618
  lineNumber = 624
  lineNumber = 632
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "path:\n musical\nclasses:\n point\n drawable\nfresh:value:\n colour:=\n x:=\n normaliseAngle\n colour\n label:=\n x\n y\n label\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n turn\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\nconfidential:\nfresh:image:\n x:=\n height:=\n normaliseAngle\n width:=\n x\n y\n width\n stamp\n angle\n url\n bounceOff\n bounce\n destX:=\n touching\n turn\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n url:=\n face\n bounceFrom\n always\n touchingEdge\n imgTag\n step\n destY:=\n whenever()do\nfresh-methods:\n rectangle\n circle\n image\n value\nconstructors-of:drawable:\n new\nmodules:\n mgcollections\n StandardPrelude\nconstructors-of:point:\n x()y\nfresh:circle:\n colour:=\n x:=\n normaliseAngle\n colour\n x\n y\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n turn\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n radius\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n radius:=\n whenever()do\nfresh:rectangle:\n colour:=\n asString\n x:=\n height:=\n normaliseAngle\n colour\n width:=\n x\n y\n width\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n turn\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n Note\n C\n D\n E\n F\n G\n A\n B\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nmethods-of:point.x()y:\n left\n right\n down\n up\n x\n y\nmethods-of:drawable.new:\n tick\n draw\n x:=\n y:=\n normaliseAngle\n forward\n alwaysBlocks\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n stamp\n angle\n face\n bounceFrom\n always\n x\n bounce\n touchingEdge\n bounceOff\n step\n destX:=\n destY:=\n touching\n whenever()do\n turn\n destX\n destY\n";
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
    "method always(blocks) {",
    "    // dom.window.console.log(\"always\")",
    "    // blocks.apply",
    "    var count := 0",
    "    for (blocks) do {b->",
    "        count := count + 1",
    "        dom.window.console.log(\"blocks\")",
    "        dom.window.console.log(count)",
    "    }",
    "    // stopRunning := false",
    "    // dom.while { !stopRunning } waiting 10 do {",
    "    //     dom.window.console.log(\"dom.while\")",
    "    //     for (registeredObjects) do {obj->",
    "    //         dom.window.console.log(\"registeredObjects\")",
    "    //         obj.step",
    "    //     }",
    "    //     for (blocks) do {step->",
    "    //         dom.window.console.log(\"blocks\");",
    "    //         step.apply",
    "    //     }",
    "    // }",
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
    "    // dom.window.console.log(\"start\");",
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
    "    //Graceful Music",
    "    dom.window.t_stop();",
    "",
    "}",
    "method stop {",
    "    stopRunning := true",
    "    canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "    //Graceful Music",
    "    dom.window.t_stop();",
    "}",
    "method atModuleEnd(module) {",
    "    start",
    "    //Graceful Music",
    "    dom.window.t_play();",
    "    // dom.window.console.log(\"moduleend\")",
    "}",
    "",
    "",
    "",
    "// ******************",
    "// * Graceful Music *",
    "// ******************",
    "",
    "// * Variables",
    "// ******************",
    "",
    "var octave := 4;",
    "",
    "var applyFlat := false",
    "var applySharp := false",
    "",
    "var applyChorus := false",
    "var applyReverb := false",
    "var applyAutowah := false",
    "var applyCheby := false",
    "",
    "// * Notes",
    "// ******************",
    "",
    "method Note(note){",
    "    if (applyFlat == true) then {",
    "        dom.window.t_add(\"{note}b{octave}\")",
    "        return",
    "    }",
    "    if (applySharp == true) then {",
    "        dom.window.t_add(\"{note}#{octave}\")",
    "        return",
    "    }",
    "    dom.window.t_add(\"{note}{octave}\")",
    "}",
    "",
    "method C(){",
    "    Note(\"C\")",
    "}",
    "method D(){",
    "    Note(\"D\")",
    "}",
    "method E(){",
    "    Note(\"E\")",
    "}",
    "method F(){",
    "    Note(\"F\")",
    "}",
    "method G(){",
    "    Note(\"G\")",
    "}",
    "method A(){",
    "    Note(\"A\")",
    "}",
    "method B(){",
    "    Note(\"B\")",
    "}",
    "",
    "method flat(note){",
    "    applyFlat := true",
    "    note.apply",
    "    applyFlat := false",
    "}",
    "method sharp(note){",
    "    applySharp := true",
    "    note.apply",
    "    applySharp := false",
    "}",
    "",
    "method octave(num)on(notes){",
    "    var oldOctave := octave",
    "    octave := num",
    "    notes.apply",
    "    octave := oldOctave",
    "}",
    "",
    "// * Instruments",
    "// ******************",
    "",
    "method Instrument(blocks){",
    "    dom.window.t_init()",
    "    blocks.apply",
    "}",
    "",
    "method monoSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_mono();",
    "}",
    "",
    "method pluckSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_pluck();",
    "}",
    "",
    "method polySynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_poly();",
    "}",
    "",
    "method fmSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_fm();",
    "}",
    "",
    "method membraneSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_membrane();",
    "}",
    "",
    "method duoSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_duo();",
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
    "//percentage, can i contrain this number from 0 - 100?",
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
    "",
    "// method bass(blocks) {",
    "//     dom.window.t_init()",
    "//     playing := true",
    "//     blocks.apply",
    "//     playing := false",
    "",
    "//     dom.window.t_bass()",
    "    ",
    "//     dom.window.console.log(\"func: play\")",
    "",
    "",
    "",
    "",
    "",
    "    // var count := 0",
    "    // dom.window.console.log(count)",
    "    // count := count + 1",
    "    // dom.window.console.log(count)",
    "    // dom.window.console.log(test.apply)",
    "    // for (test) do {t->",
    "    //     count := count + 1",
    "    //     dom.window.console.log(\"blocks\")",
    "    //     dom.window.console.log(count)",
    "    // }",
    "    // blocks.apply",
    "    // dom.window.Tone.Transport.start();",
    "// }",
    "",
    "//Effects",
    "",
    "",
    "// method note {",
    "//     dom.window.console.log(\"note\")",
    "// }",
    "",
    "// method sequence(){",
    "    ",
    "// }",
    "",
    "",
    "",
    "// import \"mgcollections\" as collections",
    "// import \"dom\" as dom",
    "// import \"math\" as randomModule",
    "",
    "// import \"StandardPrelude\" as sp",
    "// inherits sp.new",
    "",
    "// var document",
    "// var canvas",
    "// var backingCanvas",
    "// var backingContext",
    "// var mouseDownListener",
    "// var mouseMoveListener",
    "",
    "// def trig = dom.window.Math",
    "// def PI = 3.14159",
    "",
    "// var stopRunning := false",
    "// var initialised := false",
    "// var backgroundColour := \"white\"",
    "// def registeredObjects = collections.list.new",
    "// def stepBlocks = collections.list.new",
    "// def audioTags = collections.map.new",
    "",
    "// var canvasWidth",
    "// var canvasHeight",
    "",
    "// def left = \"left\"",
    "// def right = \"right\"",
    "// def top = \"top\"",
    "// def bottom = \"bottom\"",
    "",
    "// var centre",
    "// var leftCentre",
    "// var rightCentre",
    "",
    "// var above",
    "// var Δ",
    "",
    "// class point.x(x')y(y') {",
    "//     def x is public = x'",
    "//     def y is public = y'",
    "//     method left(dx) { point.x(x - dx)y(y) }",
    "//     method right(dx) { point.x(x + dx)y(y) }",
    "//     method up(dy) { point.x(x)y(y - dy) }",
    "//     method down(dy) { point.x(x)y(y + dy) }",
    "// }",
    "// class drawable.new {",
    "//     initialise",
    "//     registeredObjects.push(self)",
    "//     above := self",
    "//     Δ := self",
    "//     def alwaysBlocks = collections.list.new",
    "//     var x is readable := canvasWidth / 2",
    "//     var y is readable := canvasHeight / 2",
    "//     var destX := x",
    "//     var destY := y",
    "//     var angle := 180",
    "//     method step {",
    "//         for (alwaysBlocks) do {b->",
    "//             b.apply",
    "//         }",
    "//         tick",
    "//     }",
    "//     method tick {}",
    "//     method draw(ctx) {}",
    "//     method moveTo(p) {",
    "//         destX := p.x",
    "//         destY := p.y",
    "//     }",
    "//     method jumpTo(p) {",
    "//         x := p.x",
    "//         y := p.y",
    "//         destX := x",
    "//         destY := y",
    "//     }",
    "//     method isPointOver(p) { false }",
    "//     method mousedown {}",
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
    "//     method forward(dist) {",
    "//         def y' = trig.cos(angle / 180 * PI) * dist",
    "//         def x' = trig.sin(angle / 180 * PI) * dist",
    "//         x := x + x'",
    "//         y := y + y'",
    "//     }",
    "//     method normaliseAngle {",
    "//         while {angle < 0} do {",
    "//             angle := angle + 360",
    "//         }",
    "//         while {angle > 360} do {",
    "//             angle := angle - 360",
    "//         }",
    "//     }",
    "//     method turn(degrees) {",
    "//         angle := angle + degrees",
    "//         normaliseAngle",
    "//     }",
    "//     method touchingEdge {",
    "//         if (isPointOver(point.x(x)y(0))) then {",
    "//             return true",
    "//         }",
    "//         if (isPointOver(point.x(x)y(canvasHeight))) then {",
    "//             return true",
    "//         }",
    "//         if (isPointOver(point.x(0)y(y))) then {",
    "//             return true",
    "//         }",
    "//         if (isPointOver(point.x(canvasWidth)y(y))) then {",
    "//             return true",
    "//         }",
    "//         return false",
    "//     }",
    "//     method bounce {",
    "//         var dx := 0",
    "//         var dy := 0",
    "//         if (isPointOver(point.x(x)y(0))) then {",
    "//             bounceFrom(top)",
    "//         }",
    "//         if (isPointOver(point.x(x)y(canvasHeight))) then {",
    "//             bounceFrom(bottom)",
    "//         }",
    "//         if (isPointOver(point.x(0)y(y))) then {",
    "//             bounceFrom(left)",
    "//         }",
    "//         if (isPointOver(point.x(canvasWidth)y(y))) then {",
    "//             bounceFrom(right)",
    "//         }",
    "//         while { touchingEdge } do {",
    "//             forward 1",
    "//         }",
    "//     }",
    "//     method bounceFrom(dir) {",
    "//         if (dir == \"left\") then {",
    "//             angle := 360 - angle",
    "//         }",
    "//         if (dir == \"right\") then {",
    "//             angle := 360 - angle",
    "//         }",
    "//         if (dir == \"top\") then {",
    "//             angle := 180 - angle",
    "//         }",
    "//         if (dir == \"bottom\") then {",
    "//             angle := 180 - angle",
    "//         }",
    "//         normaliseAngle",
    "//         forward 2",
    "//     }",
    "//     method bounceOff(other) {",
    "//         if (x > other.x) then {",
    "//             bounceFrom(left)",
    "//         }",
    "//         if (x < other.x) then {",
    "//             bounceFrom(right)",
    "//         }",
    "//         while { touching(other) } do {",
    "//             forward 1",
    "//         }",
    "//     }",
    "//     method touching(other) {",
    "//         other.isPointOver(point.x(x)y(y))",
    "//     }",
    "//     method face(other) {",
    "//         if ((other.x != x) || (other.y != y)) then {",
    "//             angle := trig.atan2(other.x - x, other.y - y) * 180 / 3.1415",
    "//         }",
    "//         normaliseAngle",
    "//     }",
    "//     method stamp {",
    "//         draw(backingCanvas.getContext(\"2d\"))",
    "//     }",
    "// }",
    "",
    "// method rectangle {",
    "//     object {",
    "//         inherits drawable.new",
    "//         var width := 100",
    "//         var height := 50",
    "//         var colour := \"blue\"",
    "//         method draw(ctx) {",
    "//             ctx.fillStyle := colour",
    "//             ctx.fillRect(x - width / 2, y - height / 2, width, height)",
    "//         }",
    "//         method isPointOver(p) {",
    "//             if (p.x < (x - width / 2)) then {",
    "//                 return false",
    "//             }",
    "//             if (p.x > (x + width / 2)) then {",
    "//                 return false",
    "//             }",
    "//             if (p.y < (y - height / 2)) then {",
    "//                 return false",
    "//             }",
    "//             if (p.y > (y + height / 2)) then {",
    "//                 return false",
    "//             }",
    "//             return true",
    "//         }",
    "//         method asString {",
    "//             return \"rectangle\"",
    "//         }",
    "//     }",
    "// }",
    "",
    "// type SniffCircle = {",
    "//     x -> Number",
    "//     y -> Number",
    "//     radius -> Number",
    "//     colour -> String",
    "// }",
    "// method circle {",
    "//     object {",
    "//         inherits drawable.new",
    "//         var radius is readable := 25",
    "//         var colour is readable := \"green\"",
    "//         method draw(ctx) {",
    "//             ctx.fillStyle := colour",
    "//             ctx.beginPath",
    "//             ctx.arc(x, y, radius, 0, 6.283)",
    "//             ctx.fill",
    "//         }",
    "//         method isPointOver(p) {",
    "//             def dx = (p.x - x)",
    "//             def dy = (p.y - y)",
    "//             def dist = (dx * dx + dy * dy) ^ 0.5",
    "//             if (dist <= radius) then {",
    "//                 return true",
    "//             }",
    "//             return false",
    "//         }",
    "//         method touching(other) {",
    "//             if (SniffCircle.match(other)) then {",
    "//                 def n2 = (((x - other.x) ^ 2) + ((y - other.y) ^ 2))",
    "//                 if (n2 == 0) then {",
    "//                     return true",
    "//                 }",
    "//                 if ((n2 ^ 0.5) < (other.radius + radius)) then {",
    "//                     return true",
    "//                 }",
    "//                 return false",
    "//             }",
    "//             super.touching(other)",
    "//         }",
    "//     }",
    "// }",
    "",
    "// method image {",
    "//     object {",
    "//         inherits drawable.new",
    "//         var width := 64",
    "//         var height := 64",
    "//         def imgTag = dom.document.createElement(\"img\")",
    "//         method url {",
    "//             imgTag.src",
    "//         }",
    "//         method url:=(s) {",
    "//             imgTag.src := s",
    "//         }",
    "//         method draw(ctx) {",
    "//             ctx.save",
    "//             ctx.translate(x, y)",
    "//             ctx.rotate(-(angle + 180) / 180 * 3.1415)",
    "//             ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "//             ctx.restore",
    "//         }",
    "//         method isPointOver(p) {",
    "//             // Rotate p and express it relative to (x, y), then just",
    "//             // check whether it's within the bounds of the rectangle.",
    "//             def c = trig.cos(-(angle + 180) / 180 * 3.1415)",
    "//             def s = trig.sin(-(angle + 180) / 180 * 3.1415)",
    "//             def rotatedX = c * (p.x - x) - s * (p.y - y)",
    "//             def rotatedY = s * (p.x - x) + c * (p.y - y)",
    "//             if (rotatedX < (-width / 2)) then {",
    "//                 return false",
    "//             }",
    "//             if (rotatedX > (width / 2)) then {",
    "//                 return false",
    "//             }",
    "//             if (rotatedY < (-height / 2)) then {",
    "//                 return false",
    "//             }",
    "//             if (rotatedY > (height / 2)) then {",
    "//                 return false",
    "//             }",
    "//             return true",
    "//         }",
    "//     }",
    "// }",
    "",
    "// method value(b) {",
    "//     object {",
    "//         inherits drawable.new",
    "//         var colour := \"blue\"",
    "//         var label := \"\"",
    "//         method draw(ctx) {",
    "//             ctx.fillStyle := colour",
    "//             ctx.font := \"20px sans-serif\"",
    "//             if (label != \"\") then {",
    "//                 ctx.fillText(\"{label} {b.apply}\", x, y)",
    "//             } else {",
    "//                 ctx.fillText(\"{b.apply}\", x, y)",
    "//             }",
    "//         }",
    "//     }",
    "// }",
    "",
    "// def mouse = object {",
    "//     var position is public := point.x(0)y(0)",
    "//     method x {",
    "//         position.x",
    "//     }",
    "//     method y {",
    "//         position.y",
    "//     }",
    "//     method location {",
    "//         position",
    "//     }",
    "// }",
    "",
    "// method clear {",
    "//     def ctx = backingCanvas.getContext(\"2d\")",
    "//     ctx.fillStyle := backgroundColour",
    "//     ctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "// }",
    "",
    "// //Graceful Music",
    "",
    "// //plays a timbre note",
    "// method note {",
    "//     dom.window.console.log(\"note\")",
    "// }",
    "",
    "// method play(block) {",
    "//     def playBlocks = collections.list.new",
    "//     playBlocks.push(block)",
    "//     for (playBlocks) do {b->",
    "//         b.apply",
    "//     }",
    "//     dom.window.console.log(\"play\");",
    "// }",
    "",
    "// method note2 (note){",
    "//     dom.window.t_note(note);",
    "// }",
    "",
    "// // method instrument(i)note(n){",
    "// //     return \"{i},{n}\";",
    "// // }",
    "",
    "// //plays a timbre sin",
    "// // method sin (freq_mul) {",
    "// //     dom.window.console.log(freq_mul);",
    "// //     dom.window.t_sin(freq_mul);",
    "// // }",
    "",
    "// // method freq(f)mul(m) {",
    "// //     dom.window.console.log(\"HI\");",
    "// //     return \"{f},{m}\";",
    "// // } ",
    "",
    "// // method gymnopedie {",
    "// //     dom.window.t_gymnopedie();",
    "// // }",
    "",
    "// // method always(b) {",
    "// //     stepBlocks.push(b)",
    "// // }",
    "// // method whenever(c)do(b) {",
    "// //     stepBlocks.push({",
    "// //         if (c.apply) then { b.apply }",
    "// //     })",
    "// // }",
    "",
    "",
    "",
    "// method hue(h)saturation(s)lightness(l) {",
    "//     return \"hsl({h}, {s}%, {l}%)\"",
    "// }",
    "// method h(h)s(s)l(l) {",
    "//     hue(h)saturation(s)lightness(l)",
    "// }",
    "// method initialise {",
    "//     if (initialised) then {",
    "//         return false",
    "//     }",
    "//     initialised := true",
    "//     document := dom.document",
    "//     canvas := document.getElementById(\"standard-canvas\")",
    "//     canvasWidth := canvas.width",
    "//     canvasHeight := canvas.height",
    "//     centre := point.x(canvasWidth / 2)y(canvasHeight / 2)",
    "//     leftCentre := point.x(0)y(canvasHeight / 2)",
    "//     rightCentre := point.x(canvasWidth)y(canvasHeight / 2)",
    "//     mouse.position := centre",
    "//     // Save the listener functions so that we can remove them",
    "//     // later on.",
    "//     mouseMoveListener := { ev ->",
    "//         def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "//         def y = (ev.clientY - canvas.offsetTop - 7) / canvas.offsetHeight * canvasHeight",
    "//         mouse.position := point.x(x)y(y)",
    "//     }",
    "//     canvas.addEventListener(\"mousemove\", mouseMoveListener)",
    "//     mouseDownListener := { ev ->",
    "//         def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "//         def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "//         if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "//             ev.preventDefault",
    "//             stop",
    "//         }",
    "//         def p = point.x(x)y(y)",
    "//         for (registeredObjects) do {obj->",
    "//             if (obj.isPointOver(p)) then {",
    "//                 obj.mousedown",
    "//                 ev.preventDefault",
    "//             }",
    "//         }",
    "//     }",
    "//     canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "// }",
    "// method background(col) {",
    "//     backgroundColour := col",
    "// }",
    "// method random(n) {",
    "//     (n * randomModule.random).truncate",
    "// }",
    "// method randomPoint {",
    "//     point.x(canvasWidth / 10 + random(canvasWidth * 0.8))",
    "//         y(canvasHeight / 10 + random(canvasHeight * 0.8))",
    "// }",
    "// method playSound {",
    "//     dom.window.T(\"sin\").play()",
    "//     // if (audioTags.contains(url)) then {",
    "//     //     def audio = audioTags.get(url)",
    "//     //     audio.currentTime := 0",
    "//     //     audio.play",
    "//     // } else {",
    "//     //     def audio = dom.document.createElement \"audio\"",
    "//     //     audioTags.put(url, audio)",
    "//     //     audio.src := url",
    "//     //     audio.load",
    "//     //     audio.play",
    "//     // }",
    "// }",
    "// method stopSound(url) {",
    "//     if (audioTags.contains(url)) then {",
    "//         def audio = audioTags.get(url)",
    "//         audio.pause",
    "//     }",
    "// }",
    "// method start {",
    "//     initialise",
    "//     stopRunning := false",
    "//     backingCanvas := dom.document.createElement(\"canvas\")",
    "//     backingCanvas.height := canvasHeight",
    "//     backingCanvas.width := canvasWidth",
    "//     backingContext := backingCanvas.getContext(\"2d\")",
    "//     def mctx = canvas.getContext(\"2d\")",
    "//     dom.while { !stopRunning } waiting 10 do {",
    "//         for (registeredObjects) do {obj->",
    "//             obj.step",
    "//         }",
    "//         for (stepBlocks) do {step->",
    "//             step.apply",
    "//         }",
    "//         mctx.fillStyle := backgroundColour",
    "//         mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "//         mctx.drawImage(backingCanvas, 0, 0)",
    "//         for (registeredObjects) do {obj->",
    "//             obj.draw(mctx)",
    "//         }",
    "//         mctx.fillStyle := \"red\"",
    "//         mctx.fillRect(canvasWidth - 20, 0, 20, 20)",
    "//     }",
    "// }",
    "// method stop {",
    "//     stopRunning := true",
    "//     dom.window.t_reset();",
    "//     canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "//     canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "",
    "// }",
    "// method atModuleEnd(module) {",
    "//     start",
    "// }",
    "",
  ];
}
