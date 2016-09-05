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
      lineNumber = 372
      var if810 = var_done;
      lineNumber = 369
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 371
        lineNumber = 370
        var bool811 = new GraceBoolean(false)
        return bool811
      }
      lineNumber = 373
      lineNumber = 372
      var bool812 = new GraceBoolean(true)
      var_initialised = bool812;
      lineNumber = 374
      lineNumber = 373
      var call813 = callmethod(var_dom,"document", [0]);
      var_document = call813;
      lineNumber = 374
      var string814 = new GraceString("standard-canvas");
      var call815 = callmethod(var_document,"getElementById", [1], string814);
      var_canvas = call815;
      lineNumber = 376
      lineNumber = 375
      var call816 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call816;
      lineNumber = 377
      lineNumber = 376
      var call817 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call817;
      lineNumber = 377
      var quotient820 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient823 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call824 = callmethod(var_point,"x()y", [1, 1], quotient820, quotient823);
      var_centre = call824;
      lineNumber = 378
      var quotient827 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call828 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient827);
      var_leftCentre = call828;
      lineNumber = 379
      var quotient831 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call832 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient831);
      var_rightCentre = call832;
      lineNumber = 383
      lineNumber = 376
      lineNumber = 380
      var call833 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 388
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
      block834.className = 'block<musical:388>';
      block834.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 385
        lineNumber = 384
        var call836 = callmethod(var_canvas,"offsetWidth", [0]);
        var call838 = callmethod(var_canvas,"offsetLeft", [0]);
        var call840 = callmethod(var_ev,"clientX", [0]);
        var diff842 = callmethod(call840, "-", [1], call838);
        var quotient844 = callmethod(diff842, "/", [1], call836);
        var prod846 = callmethod(quotient844, "*", [1], var_canvasHeight);
        var var_x = prod846;
        lineNumber = 385;
        moduleName = "musical";
        lineNumber = 384
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 386
        lineNumber = 385
        var call848 = callmethod(var_canvas,"offsetHeight", [0]);
        var call851 = callmethod(var_canvas,"offsetTop", [0]);
        var call853 = callmethod(var_ev,"clientY", [0]);
        var diff855 = callmethod(call853, "-", [1], call851);
        var diff857 = callmethod(diff855, "-", [1], new GraceNum(7));
        var quotient859 = callmethod(diff857, "/", [1], call848);
        var prod861 = callmethod(quotient859, "*", [1], var_canvasHeight);
        var var_y = prod861;
        lineNumber = 386;
        moduleName = "musical";
        lineNumber = 385
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 386
        lineNumber = 385
        lineNumber = 386
        var call862 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call863 = callmethod(var_mouse,"position:=", [1], call862);
        return call863;
      };
      var_mouseMoveListener = block834;
      lineNumber = 388
      var string864 = new GraceString("mousemove");
      var call865 = callmethod(var_canvas,"addEventListener", [2], string864, var_mouseMoveListener);
      lineNumber = 404
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
      block866.className = 'block<musical:404>';
      block866.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 391
        lineNumber = 390
        var call868 = callmethod(var_canvas,"offsetWidth", [0]);
        var call870 = callmethod(var_canvas,"offsetLeft", [0]);
        var call872 = callmethod(var_ev,"clientX", [0]);
        var diff874 = callmethod(call872, "-", [1], call870);
        var quotient876 = callmethod(diff874, "/", [1], call868);
        var prod878 = callmethod(quotient876, "*", [1], var_canvasHeight);
        var var_x = prod878;
        lineNumber = 391;
        moduleName = "musical";
        lineNumber = 390
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 393
        lineNumber = 391
        var call880 = callmethod(var_canvas,"offsetHeight", [0]);
        var call882 = callmethod(var_canvas,"offsetTop", [0]);
        var call884 = callmethod(var_ev,"clientY", [0]);
        var diff886 = callmethod(call884, "-", [1], call882);
        var quotient888 = callmethod(diff886, "/", [1], call880);
        var prod890 = callmethod(quotient888, "*", [1], var_canvasHeight);
        var var_y = prod890;
        lineNumber = 393;
        moduleName = "musical";
        lineNumber = 391
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 393
        var call891 = callmethod(var_ev,"preventDefault", [0]);
        lineNumber = 396
        var call892 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call892;
        lineNumber = 396;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 397
        lineNumber = 403
        var block893 = Grace_allocObject();
        block893.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block893.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block893.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block893.methods["match"] = GraceBlock_match;
        block893.methods["prefix?"] = GraceBlock_lift;
        block893.receiver = this;
        block893.className = 'block<musical:403>';
        block893.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 402
          var if894 = var_done;
          lineNumber = 398
          var call895 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call895)) {
            lineNumber = 399
            var call896 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 400
            var call897 = callmethod(var_ev,"preventDefault", [0]);
            if894 = call897;
          }
          return if894;
        };
        var call898 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block893);
        return call898;
      };
      var_mouseDownListener = block866;
      lineNumber = 404
      var string899 = new GraceString("mousedown");
      var call900 = callmethod(var_canvas,"addEventListener", [2], string899, var_mouseDownListener);
      return call900
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
  lineNumber = 406
  var func901 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func901.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 408
      lineNumber = 407
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
  func901.paramCounts = [
    1,
  ];
  func901.variableArities = [
    false,
  ];
  this.methods["background"] = func901;
  func901.definitionLine = 406;
  func901.definitionModule = "musical";
  lineNumber = 409
  var func902 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func902.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 410
      var call903 = callmethod(var_randomModule,"random", [0]);
      var prod906 = callmethod(var_n, "*", [1], call903);
      var call907 = callmethod(prod906,"truncate", [0]);
      return call907
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
  this.methods["random"] = func902;
  func902.definitionLine = 409;
  func902.definitionModule = "musical";
  lineNumber = 413
  var func908 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func908.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 425
      var if909 = var_done;
      lineNumber = 414
      var call910 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call910)) {
        lineNumber = 415
        var call911 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call911;
        lineNumber = 415;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 417
        lineNumber = 410
        lineNumber = 416
        var call912 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 417
        var call913 = callmethod(var_audio,"play", [0]);
        if909 = call913;
      } else {
        lineNumber = 419
        var string914 = new GraceString("audio");
        var call915 = callmethod(var_dom,"document", [0]);
        var call916 = callmethod(call915,"createElement", [1], string914);
        var var_audio = call916;
        lineNumber = 419;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 420
        var call917 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 422
        lineNumber = 419
        lineNumber = 421
        var call918 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 422
        var call919 = callmethod(var_audio,"load", [0]);
        lineNumber = 423
        var call920 = callmethod(var_audio,"play", [0]);
        if909 = call920;
      }
      return if909
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func908.paramCounts = [
    1,
  ];
  func908.variableArities = [
    false,
  ];
  this.methods["playSound"] = func908;
  func908.definitionLine = 413;
  func908.definitionModule = "musical";
  lineNumber = 426
  var func921 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func921.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 431
      var if922 = var_done;
      lineNumber = 427
      var call923 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call923)) {
        lineNumber = 428
        var call924 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call924;
        lineNumber = 428;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 429
        var call925 = callmethod(var_audio,"pause", [0]);
        if922 = call925;
      }
      return if922
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func921.paramCounts = [
    1,
  ];
  func921.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func921;
  func921.definitionLine = 426;
  func921.definitionModule = "musical";
  lineNumber = 432
  var func926 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func926.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 433
      onSelf = true;
      var call927 = callmethod(this, "initialise", [0]);
      lineNumber = 436
      lineNumber = 435
      var bool928 = new GraceBoolean(false)
      var_stopRunning = bool928;
      lineNumber = 436
      var string929 = new GraceString("canvas");
      var call930 = callmethod(var_dom,"document", [0]);
      var call931 = callmethod(call930,"createElement", [1], string929);
      var_backingCanvas = call931;
      lineNumber = 438
      lineNumber = 436
      lineNumber = 437
      var call932 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 439
      lineNumber = 436
      lineNumber = 438
      var call933 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 439
      var string934 = new GraceString("2d");
      var call935 = callmethod(var_backingCanvas,"getContext", [1], string934);
      var_backingContext = call935;
      lineNumber = 440
      var string936 = new GraceString("2d");
      var call937 = callmethod(var_canvas,"getContext", [1], string936);
      var var_mctx = call937;
      lineNumber = 440;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 442
      lineNumber = 436
      lineNumber = 441
      var call938 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 442
      var call939 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
      lineNumber = 443
      var call940 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
      lineNumber = 444
      var block941 = Grace_allocObject();
      block941.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block941.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block941.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block941.methods["match"] = GraceBlock_match;
      block941.methods["prefix?"] = GraceBlock_lift;
      block941.receiver = this;
      block941.className = 'block<musical:444>';
      block941.real = function(
      ) {
        sourceObject = this;
        var call942 = callmethod(var_stopRunning,"prefix!", [0]);
        return call942;
      };
      lineNumber = 463
      var block943 = Grace_allocObject();
      block943.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block943.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block943.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block943.methods["match"] = GraceBlock_match;
      block943.methods["prefix?"] = GraceBlock_lift;
      block943.receiver = this;
      block943.className = 'block<musical:463>';
      block943.real = function(
      ) {
        sourceObject = this;
        lineNumber = 445
        lineNumber = 448
        var block944 = Grace_allocObject();
        block944.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block944.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block944.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block944.methods["match"] = GraceBlock_match;
        block944.methods["prefix?"] = GraceBlock_lift;
        block944.receiver = this;
        block944.className = 'block<musical:448>';
        block944.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 446
          var call945 = callmethod(var_obj,"step", [0]);
          return call945;
        };
        var call946 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block944);
        lineNumber = 448
        lineNumber = 459
        var block947 = Grace_allocObject();
        block947.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block947.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block947.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block947.methods["match"] = GraceBlock_match;
        block947.methods["prefix?"] = GraceBlock_lift;
        block947.receiver = this;
        block947.className = 'block<musical:459>';
        block947.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 449
          var call948 = callmethod(var_step,"apply", [0]);
          return call948;
        };
        var call949 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block947);
        return call949;
      };
      lineNumber = 444
      var call950 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block941, new GraceNum(10), block943);
      return call950
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func926.paramCounts = [
    0,
  ];
  func926.variableArities = [
    false,
  ];
  this.methods["start"] = func926;
  func926.definitionLine = 432;
  func926.definitionModule = "musical";
  lineNumber = 464
  var func951 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func951.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 469
      lineNumber = 465
      var bool952 = new GraceBoolean(true)
      var_stopRunning = bool952;
      lineNumber = 469
      var call953 = callmethod(var_dom,"window", [0]);
      var call954 = callmethod(call953,"t_stop", [0]);
      lineNumber = 470
      var call955 = callmethod(var_dom,"window", [0]);
      var call956 = callmethod(call955,"t_reset", [0]);
      return call956
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func951.paramCounts = [
    0,
  ];
  func951.variableArities = [
    false,
  ];
  this.methods["stop"] = func951;
  func951.definitionLine = 464;
  func951.definitionModule = "musical";
  lineNumber = 472
  var func957 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func957.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 473
      onSelf = true;
      var call958 = callmethod(this, "start", [0]);
      lineNumber = 475
      var call959 = callmethod(var_dom,"window", [0]);
      var call960 = callmethod(call959,"t_play", [0]);
      return call960
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func957.paramCounts = [
    1,
  ];
  func957.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func957;
  func957.definitionLine = 472;
  func957.definitionModule = "musical";
  lineNumber = 532
  var func961 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func961.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 537
      var if962 = var_done;
      lineNumber = 533
      var bool963 = new GraceBoolean(true)
      var opresult966 = callmethod(var_applyFlat, "==", [1], bool963);
      if (Grace_isTrue(opresult966)) {
        lineNumber = 534
        var string967 = new GraceString("");
        var string970 = new GraceString("b");
        var string973 = new GraceString("");
        var opresult975 = callmethod(string973, "++", [1], var_note);
        var opresult977 = callmethod(opresult975, "++", [1], string970);
        var opresult979 = callmethod(opresult977, "++", [1], var_octave);
        var opresult981 = callmethod(opresult979, "++", [1], string967);
        var call982 = callmethod(var_dom,"window", [0]);
        var call983 = callmethod(call982,"t_add", [2], opresult981, var_id);
        lineNumber = 536
        lineNumber = 535
        var string984 = new GraceString("b");
        var string987 = new GraceString("");
        var opresult989 = callmethod(string987, "++", [1], var_note);
        var opresult991 = callmethod(opresult989, "++", [1], string984);
        return opresult991
      }
      lineNumber = 541
      var if992 = var_done;
      lineNumber = 537
      var bool993 = new GraceBoolean(true)
      var opresult996 = callmethod(var_applySharp, "==", [1], bool993);
      if (Grace_isTrue(opresult996)) {
        lineNumber = 538
        var string997 = new GraceString("");
        var string1000 = new GraceString("#");
        var string1003 = new GraceString("");
        var opresult1005 = callmethod(string1003, "++", [1], var_note);
        var opresult1007 = callmethod(opresult1005, "++", [1], string1000);
        var opresult1009 = callmethod(opresult1007, "++", [1], var_octave);
        var opresult1011 = callmethod(opresult1009, "++", [1], string997);
        var call1012 = callmethod(var_dom,"window", [0]);
        var call1013 = callmethod(call1012,"t_add", [2], opresult1011, var_id);
        lineNumber = 540
        lineNumber = 539
        var string1014 = new GraceString("#");
        var string1017 = new GraceString("");
        var opresult1019 = callmethod(string1017, "++", [1], var_note);
        var opresult1021 = callmethod(opresult1019, "++", [1], string1014);
        return opresult1021
      }
      lineNumber = 541
      var string1022 = new GraceString("");
      var string1025 = new GraceString("");
      var string1028 = new GraceString("");
      var opresult1030 = callmethod(string1028, "++", [1], var_note);
      var opresult1032 = callmethod(opresult1030, "++", [1], string1025);
      var opresult1034 = callmethod(opresult1032, "++", [1], var_octave);
      var opresult1036 = callmethod(opresult1034, "++", [1], string1022);
      var call1037 = callmethod(var_dom,"window", [0]);
      var call1038 = callmethod(call1037,"t_add", [2], opresult1036, var_id);
      lineNumber = 543
      lineNumber = 542
      var string1039 = new GraceString("");
      var string1042 = new GraceString("");
      var opresult1044 = callmethod(string1042, "++", [1], var_note);
      var opresult1046 = callmethod(opresult1044, "++", [1], string1039);
      return opresult1046
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func961.paramCounts = [
    2,
  ];
  func961.variableArities = [
    false,
  ];
  this.methods["Note"] = func961;
  func961.definitionLine = 532;
  func961.definitionModule = "musical";
  lineNumber = 545
  var func1047 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1047.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 546
      var string1048 = new GraceString("C");
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
  this.methods["C"] = func1047;
  func1047.definitionLine = 545;
  func1047.definitionModule = "musical";
  lineNumber = 548
  var func1050 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1050.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 549
      var string1051 = new GraceString("D");
      onSelf = true;
      var call1052 = callmethod(this, "Note", [2], string1051, var_id);
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
    1,
  ];
  func1050.variableArities = [
    false,
  ];
  this.methods["D"] = func1050;
  func1050.definitionLine = 548;
  func1050.definitionModule = "musical";
  lineNumber = 551
  var func1053 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1053.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 552
      var string1054 = new GraceString("E");
      onSelf = true;
      var call1055 = callmethod(this, "Note", [2], string1054, var_id);
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
    1,
  ];
  func1053.variableArities = [
    false,
  ];
  this.methods["E"] = func1053;
  func1053.definitionLine = 551;
  func1053.definitionModule = "musical";
  lineNumber = 554
  var func1056 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1056.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 555
      var string1057 = new GraceString("F");
      onSelf = true;
      var call1058 = callmethod(this, "Note", [2], string1057, var_id);
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
    1,
  ];
  func1056.variableArities = [
    false,
  ];
  this.methods["F"] = func1056;
  func1056.definitionLine = 554;
  func1056.definitionModule = "musical";
  lineNumber = 557
  var func1059 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1059.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 558
      var string1060 = new GraceString("G");
      onSelf = true;
      var call1061 = callmethod(this, "Note", [2], string1060, var_id);
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
    1,
  ];
  func1059.variableArities = [
    false,
  ];
  this.methods["G"] = func1059;
  func1059.definitionLine = 557;
  func1059.definitionModule = "musical";
  lineNumber = 560
  var func1062 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1062.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 561
      var string1063 = new GraceString("A");
      onSelf = true;
      var call1064 = callmethod(this, "Note", [2], string1063, var_id);
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
    1,
  ];
  func1062.variableArities = [
    false,
  ];
  this.methods["A"] = func1062;
  func1062.definitionLine = 560;
  func1062.definitionModule = "musical";
  lineNumber = 563
  var func1065 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1065.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 564
      var string1066 = new GraceString("B");
      onSelf = true;
      var call1067 = callmethod(this, "Note", [2], string1066, var_id);
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
    1,
  ];
  func1065.variableArities = [
    false,
  ];
  this.methods["B"] = func1065;
  func1065.definitionLine = 563;
  func1065.definitionModule = "musical";
  lineNumber = 566
  var func1068 = function(argcv) {
    var curarg = 1;
    var var_id = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1068.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Rest)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 567
      var string1069 = new GraceString("null");
      var call1070 = callmethod(var_dom,"window", [0]);
      var call1071 = callmethod(call1070,"t_add", [2], string1069, var_id);
      lineNumber = 569
      lineNumber = 568
      var string1072 = new GraceString("Rest");
      return string1072
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
  this.methods["Rest"] = func1068;
  func1068.definitionLine = 566;
  func1068.definitionModule = "musical";
  lineNumber = 571
  var func1073 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1073.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 573
      lineNumber = 572
      var bool1074 = new GraceBoolean(true)
      var_applyFlat = bool1074;
      lineNumber = 574
      lineNumber = 573
      var call1075 = callmethod(var_note,"apply", [0]);
      var var_ret = call1075;
      lineNumber = 574;
      moduleName = "musical";
      lineNumber = 573
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 575
      lineNumber = 574
      var bool1076 = new GraceBoolean(false)
      var_applyFlat = bool1076;
      lineNumber = 576
      lineNumber = 575
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1073.paramCounts = [
    1,
  ];
  func1073.variableArities = [
    false,
  ];
  this.methods["flat"] = func1073;
  func1073.definitionLine = 571;
  func1073.definitionModule = "musical";
  lineNumber = 577
  var func1077 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1077.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 579
      lineNumber = 578
      var bool1078 = new GraceBoolean(true)
      var_applySharp = bool1078;
      lineNumber = 580
      lineNumber = 579
      var call1079 = callmethod(var_note,"apply", [0]);
      var var_ret = call1079;
      lineNumber = 580;
      moduleName = "musical";
      lineNumber = 579
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 581
      lineNumber = 580
      var bool1080 = new GraceBoolean(false)
      var_applySharp = bool1080;
      lineNumber = 582
      lineNumber = 581
      return var_ret
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
  this.methods["sharp"] = func1077;
  func1077.definitionLine = 577;
  func1077.definitionModule = "musical";
  lineNumber = 584
  var func1081 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1081.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1081.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 586
      lineNumber = 585
      var var_oldOctave = var_octave;
      lineNumber = 586;
      moduleName = "musical";
      lineNumber = 585
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 587
      lineNumber = 586
      var_octave = var_num;
      lineNumber = 588
      lineNumber = 587
      var call1082 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1082;
      lineNumber = 588;
      moduleName = "musical";
      lineNumber = 587
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 589
      lineNumber = 588
      var_octave = var_oldOctave;
      lineNumber = 590
      lineNumber = 589
      return var_ret
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
    1,
  ];
  func1081.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1081;
  func1081.definitionLine = 584;
  func1081.definitionModule = "musical";
  lineNumber = 595
  var func1083 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1083.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 600
      var if1084 = var_done;
      lineNumber = 596
      var bool1085 = new GraceBoolean(true)
      var opresult1088 = callmethod(var_firstPass, "==", [1], bool1085);
      if (Grace_isTrue(opresult1088)) {
        lineNumber = 597
        var call1089 = callmethod(var_dom,"window", [0]);
        var call1090 = callmethod(call1089,"t_reset", [0]);
        lineNumber = 599
        lineNumber = 598
        var bool1091 = new GraceBoolean(false)
        var_firstPass = bool1091;
        if1084 = bool1091;
      }
      lineNumber = 600
      var call1092 = callmethod(var_dom,"window", [0]);
      var call1093 = callmethod(call1092,"t_init", [0]);
      lineNumber = 601
      var call1094 = callmethod(var_blocks,"apply", [0]);
      return call1094
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1083.paramCounts = [
    1,
  ];
  func1083.variableArities = [
    false,
  ];
  this.methods["Instrument"] = func1083;
  func1083.definitionLine = 595;
  func1083.definitionModule = "musical";
  lineNumber = 604
  var func1095 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1095.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 605
      onSelf = true;
      var call1096 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 606
      var call1097 = callmethod(var_dom,"window", [0]);
      var call1098 = callmethod(call1097,"t_synth_mono", [3], var_timing, var_volume, var_playbackrate);
      return call1098
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1095.paramCounts = [
    1,
  ];
  func1095.variableArities = [
    false,
  ];
  this.methods["monoSynth"] = func1095;
  func1095.definitionLine = 604;
  func1095.definitionModule = "musical";
  lineNumber = 609
  var func1099 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1099.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 610
      onSelf = true;
      var call1100 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 611
      var call1101 = callmethod(var_dom,"window", [0]);
      var call1102 = callmethod(call1101,"t_synth_pluck", [3], var_timing, var_volume, var_playbackrate);
      return call1102
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1099.paramCounts = [
    1,
  ];
  func1099.variableArities = [
    false,
  ];
  this.methods["pluckSynth"] = func1099;
  func1099.definitionLine = 609;
  func1099.definitionModule = "musical";
  lineNumber = 614
  var func1103 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1103.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 615
      onSelf = true;
      var call1104 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 616
      var call1105 = callmethod(var_dom,"window", [0]);
      var call1106 = callmethod(call1105,"t_synth_poly", [3], var_timing, var_volume, var_playbackrate);
      return call1106
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1103.paramCounts = [
    1,
  ];
  func1103.variableArities = [
    false,
  ];
  this.methods["polySynth"] = func1103;
  func1103.definitionLine = 614;
  func1103.definitionModule = "musical";
  lineNumber = 619
  var func1107 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1107.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 620
      onSelf = true;
      var call1108 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 621
      var call1109 = callmethod(var_dom,"window", [0]);
      var call1110 = callmethod(call1109,"t_synth_fm", [3], var_timing, var_volume, var_playbackrate);
      return call1110
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1107.paramCounts = [
    1,
  ];
  func1107.variableArities = [
    false,
  ];
  this.methods["fmSynth"] = func1107;
  func1107.definitionLine = 619;
  func1107.definitionModule = "musical";
  lineNumber = 624
  var func1111 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1111.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 625
      onSelf = true;
      var call1112 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 626
      var call1113 = callmethod(var_dom,"window", [0]);
      var call1114 = callmethod(call1113,"t_synth_membrane", [3], var_timing, var_volume, var_playbackrate);
      return call1114
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
  this.methods["membraneSynth"] = func1111;
  func1111.definitionLine = 624;
  func1111.definitionModule = "musical";
  lineNumber = 629
  var func1115 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1115.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 630
      onSelf = true;
      var call1116 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 631
      var call1117 = callmethod(var_dom,"window", [0]);
      var call1118 = callmethod(call1117,"t_synth_duo", [3], var_timing, var_volume, var_playbackrate);
      return call1118
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1115.paramCounts = [
    1,
  ];
  func1115.variableArities = [
    false,
  ];
  this.methods["duoSynth"] = func1115;
  func1115.definitionLine = 629;
  func1115.definitionModule = "musical";
  lineNumber = 634
  var func1119 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1119.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (arpeggio)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 639
      var if1120 = var_done;
      lineNumber = 635
      var bool1121 = new GraceBoolean(true)
      var opresult1124 = callmethod(var_firstPass, "==", [1], bool1121);
      if (Grace_isTrue(opresult1124)) {
        lineNumber = 636
        var call1125 = callmethod(var_dom,"window", [0]);
        var call1126 = callmethod(call1125,"t_reset", [0]);
        lineNumber = 638
        lineNumber = 637
        var bool1127 = new GraceBoolean(false)
        var_firstPass = bool1127;
        if1120 = bool1127;
      }
      lineNumber = 639
      var call1128 = callmethod(var_dom,"window", [0]);
      var call1129 = callmethod(call1128,"t_synth_arpeggio", [1], var_note);
      return call1129
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1119.paramCounts = [
    1,
  ];
  func1119.variableArities = [
    false,
  ];
  this.methods["arpeggio"] = func1119;
  func1119.definitionLine = 634;
  func1119.definitionModule = "musical";
  lineNumber = 645
  var func1130 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1130.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 649
      var if1131 = var_done;
      lineNumber = 646
      var bool1132 = new GraceBoolean(true)
      var opresult1135 = callmethod(var_applyChorus, "==", [1], bool1132);
      if (Grace_isTrue(opresult1135)) {
        lineNumber = 647
        var call1136 = callmethod(var_dom,"window", [0]);
        var call1137 = callmethod(call1136,"t_effect_chorus", [0]);
        if1131 = call1137;
      }
      lineNumber = 652
      var if1138 = var_done;
      lineNumber = 649
      var bool1139 = new GraceBoolean(true)
      var opresult1142 = callmethod(var_applyReverb, "==", [1], bool1139);
      if (Grace_isTrue(opresult1142)) {
        lineNumber = 650
        var call1143 = callmethod(var_dom,"window", [0]);
        var call1144 = callmethod(call1143,"t_effect_reverb", [0]);
        if1138 = call1144;
      }
      lineNumber = 655
      var if1145 = var_done;
      lineNumber = 652
      var bool1146 = new GraceBoolean(true)
      var opresult1149 = callmethod(var_applyAutowah, "==", [1], bool1146);
      if (Grace_isTrue(opresult1149)) {
        lineNumber = 653
        var call1150 = callmethod(var_dom,"window", [0]);
        var call1151 = callmethod(call1150,"t_effect_autowah", [0]);
        if1145 = call1151;
      }
      lineNumber = 658
      var if1152 = var_done;
      lineNumber = 655
      var bool1153 = new GraceBoolean(true)
      var opresult1156 = callmethod(var_applyCheby, "==", [1], bool1153);
      if (Grace_isTrue(opresult1156)) {
        lineNumber = 656
        var call1157 = callmethod(var_dom,"window", [0]);
        var call1158 = callmethod(call1157,"t_effect_cheby", [0]);
        if1152 = call1158;
      }
      lineNumber = 658
      var call1159 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 659
      var call1160 = callmethod(var_dom,"window", [0]);
      var call1161 = callmethod(call1160,"t_effect_reset", [0]);
      return call1161
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1130.paramCounts = [
    1,
  ];
  func1130.variableArities = [
    false,
  ];
  this.methods["Effect"] = func1130;
  func1130.definitionLine = 645;
  func1130.definitionModule = "musical";
  lineNumber = 662
  var func1162 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1162.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 664
      lineNumber = 663
      var bool1163 = new GraceBoolean(true)
      var_applyChorus = bool1163;
      lineNumber = 664
      onSelf = true;
      var call1164 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 666
      lineNumber = 665
      var bool1165 = new GraceBoolean(false)
      var_applyChorus = bool1165;
      return bool1165
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
  this.methods["Chorus"] = func1162;
  func1162.definitionLine = 662;
  func1162.definitionModule = "musical";
  lineNumber = 668
  var func1166 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1166.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 670
      lineNumber = 669
      var bool1167 = new GraceBoolean(true)
      var_applyReverb = bool1167;
      lineNumber = 670
      onSelf = true;
      var call1168 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 672
      lineNumber = 671
      var bool1169 = new GraceBoolean(false)
      var_applyReverb = bool1169;
      return bool1169
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
  this.methods["Reverb"] = func1166;
  func1166.definitionLine = 668;
  func1166.definitionModule = "musical";
  lineNumber = 674
  var func1170 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1170.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 676
      lineNumber = 675
      var bool1171 = new GraceBoolean(true)
      var_applyAutowah = bool1171;
      lineNumber = 676
      onSelf = true;
      var call1172 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 678
      lineNumber = 677
      var bool1173 = new GraceBoolean(false)
      var_applyAutowah = bool1173;
      return bool1173
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
  this.methods["Autowah"] = func1170;
  func1170.definitionLine = 674;
  func1170.definitionModule = "musical";
  lineNumber = 680
  var func1174 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1174.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 682
      lineNumber = 681
      var bool1175 = new GraceBoolean(true)
      var_applyCheby = bool1175;
      lineNumber = 682
      onSelf = true;
      var call1176 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 684
      lineNumber = 683
      var bool1177 = new GraceBoolean(false)
      var_applyCheby = bool1177;
      return bool1177
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1174.paramCounts = [
    1,
  ];
  func1174.variableArities = [
    false,
  ];
  this.methods["Cheby"] = func1174;
  func1174.definitionLine = 680;
  func1174.definitionModule = "musical";
  lineNumber = 688
  var func1178 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1178.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 689
      var call1179 = callmethod(var_dom,"window", [0]);
      var call1180 = callmethod(call1179,"t_bpm", [1], var_bpm);
      return call1180
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1178.paramCounts = [
    1,
  ];
  func1178.variableArities = [
    false,
  ];
  this.methods["SetBPM"] = func1178;
  func1178.definitionLine = 688;
  func1178.definitionModule = "musical";
  lineNumber = 692
  var func1181 = function(argcv) {
    var curarg = 1;
    var var_rate = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1181.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (PlayBackRatePercentage)"));
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1181.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 695
      lineNumber = 693
      var var_oldRate = var_playbackrate;
      lineNumber = 695;
      moduleName = "musical";
      lineNumber = 693
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldRate)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldRate' to be of type Unknown"))
      lineNumber = 697
      lineNumber = 695
      var quotient1184 = callmethod(var_rate, "/", [1], new GraceNum(100));
      var_playbackrate = quotient1184;
      lineNumber = 698
      lineNumber = 697
      var call1185 = callmethod(var_blocks,"apply", [0]);
      var var_ret = call1185;
      lineNumber = 698;
      moduleName = "musical";
      lineNumber = 697
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 699
      lineNumber = 698
      var_playbackrate = var_oldRate;
      lineNumber = 700
      lineNumber = 699
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1181.paramCounts = [
    1,
    1,
  ];
  func1181.variableArities = [
    false,
    false,
  ];
  this.methods["PlayBackRatePercentage()on"] = func1181;
  func1181.definitionLine = 692;
  func1181.definitionModule = "musical";
  lineNumber = 703
  var func1186 = function(argcv) {
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1186.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Time)"));
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1186.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 705
      lineNumber = 704
      var var_oldTiming = var_timing;
      lineNumber = 705;
      moduleName = "musical";
      lineNumber = 704
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldTiming)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldTiming' to be of type Unknown"))
      lineNumber = 706
      lineNumber = 705
      var_timing = var_t;
      lineNumber = 707
      lineNumber = 706
      var call1187 = callmethod(var_blocks,"apply", [0]);
      var var_ret = call1187;
      lineNumber = 707;
      moduleName = "musical";
      lineNumber = 706
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 708
      lineNumber = 707
      var_timing = var_oldTiming;
      lineNumber = 709
      lineNumber = 708
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1186.paramCounts = [
    1,
    1,
  ];
  func1186.variableArities = [
    false,
    false,
  ];
  this.methods["Time()on"] = func1186;
  func1186.definitionLine = 703;
  func1186.definitionModule = "musical";
  lineNumber = 711
  var func1188 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1188.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (quarter)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 713
      lineNumber = 712
      var string1189 = new GraceString("4n");
      return string1189
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
  this.methods["quarter"] = func1188;
  func1188.definitionLine = 711;
  func1188.definitionModule = "musical";
  lineNumber = 715
  var func1190 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1190.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (eighth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 717
      lineNumber = 716
      var string1191 = new GraceString("8n");
      return string1191
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1190.paramCounts = [
    0,
  ];
  func1190.variableArities = [
    false,
  ];
  this.methods["eighth"] = func1190;
  func1190.definitionLine = 715;
  func1190.definitionModule = "musical";
  lineNumber = 719
  var func1192 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1192.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sixteenth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 721
      lineNumber = 720
      var string1193 = new GraceString("16n");
      return string1193
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
  this.methods["sixteenth"] = func1192;
  func1192.definitionLine = 719;
  func1192.definitionModule = "musical";
  lineNumber = 725
  var func1194 = function(argcv) {
    var curarg = 1;
    var var_v = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1194.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (VolumePercentage)"));
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1194.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 729
      lineNumber = 726
      var var_oldVolume = var_volume;
      lineNumber = 729;
      moduleName = "musical";
      lineNumber = 726
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldVolume)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldVolume' to be of type Unknown"))
      lineNumber = 737
      var if1195 = var_done;
      lineNumber = 729
      var opresult1198 = callmethod(var_v, ">", [1], new GraceNum(100));
      if (Grace_isTrue(opresult1198)) {
        lineNumber = 732
        lineNumber = 731
        var_volume = new GraceNum(0);
        if1195 = new GraceNum(0);
      } else {
        lineNumber = 735
        lineNumber = 734
        var quotient1202 = callmethod(var_v, "/", [1], new GraceNum(100));
        var prod1204 = callmethod(quotient1202, "*", [1], new GraceNum(50));
        var call1206 = callmethod(new GraceNum(80),"prefix-", [0]);
        var opresult1208 = callmethod(call1206, "+", [1], prod1204);
        var_volume = opresult1208;
        if1195 = opresult1208;
      }
      lineNumber = 738
      lineNumber = 737
      var call1209 = callmethod(var_blocks,"apply", [0]);
      var var_ret = call1209;
      lineNumber = 738;
      moduleName = "musical";
      lineNumber = 737
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 739
      lineNumber = 738
      var_volume = var_oldVolume;
      lineNumber = 740
      lineNumber = 739
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1194.paramCounts = [
    1,
    1,
  ];
  func1194.variableArities = [
    false,
    false,
  ];
  this.methods["VolumePercentage()on"] = func1194;
  func1194.definitionLine = 725;
  func1194.definitionModule = "musical";
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
  var call1210 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1210;
  this.data = call1210.data;
  this._value = call1210._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 737
  var func1211 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1211.paramCounts[0])
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
  func1211.paramCounts = [
    0,
  ];
  func1211.variableArities = [
    false,
  ];
  this.methods["document"] = func1211;
  func1211.definitionLine = 737;
  func1211.definitionModule = "musical";
  lineNumber = 737
  var func1212 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1212.paramCounts[0])
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
  func1212.paramCounts = [
    1,
  ];
  func1212.variableArities = [
    false,
  ];
  this.methods["document:="] = func1212;
  func1212.definitionLine = 737;
  func1212.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 737
  var func1213 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1213.paramCounts[0])
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
  func1213.paramCounts = [
    0,
  ];
  func1213.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1213;
  func1213.definitionLine = 737;
  func1213.definitionModule = "musical";
  lineNumber = 737
  var func1214 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1214.paramCounts[0])
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
  func1214.paramCounts = [
    1,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1214;
  func1214.definitionLine = 737;
  func1214.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 737
  var func1215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    0,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1215;
  func1215.definitionLine = 737;
  func1215.definitionModule = "musical";
  lineNumber = 737
  var func1216 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1216.paramCounts[0])
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
  func1216.paramCounts = [
    1,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1216;
  func1216.definitionLine = 737;
  func1216.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 737
  var func1217 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    0,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1217;
  func1217.definitionLine = 737;
  func1217.definitionModule = "musical";
  lineNumber = 737
  var func1218 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1218.paramCounts[0])
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
  func1218.paramCounts = [
    1,
  ];
  func1218.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1218;
  func1218.definitionLine = 737;
  func1218.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 737
  var func1219 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1219.paramCounts[0])
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
  func1219.paramCounts = [
    0,
  ];
  func1219.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1219;
  func1219.definitionLine = 737;
  func1219.definitionModule = "musical";
  lineNumber = 737
  var func1220 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1220.paramCounts[0])
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
  func1220.paramCounts = [
    1,
  ];
  func1220.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1220;
  func1220.definitionLine = 737;
  func1220.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 737
  var func1221 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    0,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1221;
  func1221.definitionLine = 737;
  func1221.definitionModule = "musical";
  lineNumber = 737
  var func1222 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1222.paramCounts[0])
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
  func1222.paramCounts = [
    1,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1222;
  func1222.definitionLine = 737;
  func1222.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1223 = callmethod(var_dom,"window", [0]);
  var call1224 = callmethod(call1223,"Math", [0]);
  var var_trig = call1224;
  var func1225 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    0,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["trig"] = func1225;
  func1225.definitionLine = 15;
  func1225.definitionModule = "musical";
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
  var func1226 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1226.paramCounts[0])
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
  func1226.paramCounts = [
    0,
  ];
  func1226.variableArities = [
    false,
  ];
  this.methods["PI"] = func1226;
  func1226.definitionLine = 15;
  func1226.definitionModule = "musical";
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
  var bool1227 = new GraceBoolean(false)
  var var_stopRunning = bool1227;
  lineNumber = 15
  var func1228 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    0,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1228;
  func1228.definitionLine = 15;
  func1228.definitionModule = "musical";
  lineNumber = 15
  var func1229 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    1,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1229;
  func1229.definitionLine = 15;
  func1229.definitionModule = "musical";
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
  var bool1230 = new GraceBoolean(false)
  var var_initialised = bool1230;
  lineNumber = 15
  var func1231 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1231.paramCounts[0])
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
  func1231.paramCounts = [
    0,
  ];
  func1231.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1231;
  func1231.definitionLine = 15;
  func1231.definitionModule = "musical";
  lineNumber = 15
  var func1232 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1232.paramCounts[0])
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
  func1232.paramCounts = [
    1,
  ];
  func1232.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1232;
  func1232.definitionLine = 15;
  func1232.definitionModule = "musical";
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
  var string1233 = new GraceString("white");
  var var_backgroundColour = string1233;
  lineNumber = 15
  var func1234 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1234.paramCounts[0])
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
  func1234.paramCounts = [
    0,
  ];
  func1234.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1234;
  func1234.definitionLine = 15;
  func1234.definitionModule = "musical";
  lineNumber = 15
  var func1235 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1235.paramCounts[0])
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
  func1235.paramCounts = [
    1,
  ];
  func1235.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1235;
  func1235.definitionLine = 15;
  func1235.definitionModule = "musical";
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
  var call1236 = callmethod(var_collections,"list", [0]);
  var call1237 = callmethod(call1236,"new", [0]);
  var var_registeredObjects = call1237;
  var func1238 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1238.paramCounts[0])
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
  func1238.paramCounts = [
    0,
  ];
  func1238.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1238;
  func1238.definitionLine = 21;
  func1238.definitionModule = "musical";
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
  var call1239 = callmethod(var_collections,"list", [0]);
  var call1240 = callmethod(call1239,"new", [0]);
  var var_stepBlocks = call1240;
  var func1241 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1241.paramCounts[0])
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
  func1241.paramCounts = [
    0,
  ];
  func1241.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1241;
  func1241.definitionLine = 22;
  func1241.definitionModule = "musical";
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
  var call1242 = callmethod(var_collections,"map", [0]);
  var call1243 = callmethod(call1242,"new", [0]);
  var var_audioTags = call1243;
  var func1244 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1244.paramCounts[0])
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
  func1244.paramCounts = [
    0,
  ];
  func1244.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1244;
  func1244.definitionLine = 23;
  func1244.definitionModule = "musical";
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
  var func1245 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1245.paramCounts[0])
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
  func1245.paramCounts = [
    0,
  ];
  func1245.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1245;
  func1245.definitionLine = 23;
  func1245.definitionModule = "musical";
  lineNumber = 23
  var func1246 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1246.paramCounts[0])
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
  func1246.paramCounts = [
    1,
  ];
  func1246.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1246;
  func1246.definitionLine = 23;
  func1246.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1247 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1247.paramCounts[0])
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
  func1247.paramCounts = [
    0,
  ];
  func1247.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1247;
  func1247.definitionLine = 23;
  func1247.definitionModule = "musical";
  lineNumber = 23
  var func1248 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1248.paramCounts[0])
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
  func1248.paramCounts = [
    1,
  ];
  func1248.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1248;
  func1248.definitionLine = 23;
  func1248.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1249 = new GraceString("left");
  var var_left = string1249;
  lineNumber = 23
  var func1250 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1250.paramCounts[0])
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
  func1250.paramCounts = [
    0,
  ];
  func1250.variableArities = [
    false,
  ];
  this.methods["left"] = func1250;
  func1250.definitionLine = 23;
  func1250.definitionModule = "musical";
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
  var string1251 = new GraceString("right");
  var var_right = string1251;
  lineNumber = 23
  var func1252 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1252.paramCounts[0])
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
  func1252.paramCounts = [
    0,
  ];
  func1252.variableArities = [
    false,
  ];
  this.methods["right"] = func1252;
  func1252.definitionLine = 23;
  func1252.definitionModule = "musical";
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
  var string1253 = new GraceString("top");
  var var_top = string1253;
  lineNumber = 23
  var func1254 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1254.paramCounts[0])
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
  func1254.paramCounts = [
    0,
  ];
  func1254.variableArities = [
    false,
  ];
  this.methods["top"] = func1254;
  func1254.definitionLine = 23;
  func1254.definitionModule = "musical";
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
  var string1255 = new GraceString("bottom");
  var var_bottom = string1255;
  lineNumber = 23
  var func1256 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1256.paramCounts[0])
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
  func1256.paramCounts = [
    0,
  ];
  func1256.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1256;
  func1256.definitionLine = 23;
  func1256.definitionModule = "musical";
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
  var func1257 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1257.paramCounts[0])
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
  func1257.paramCounts = [
    0,
  ];
  func1257.variableArities = [
    false,
  ];
  this.methods["centre"] = func1257;
  func1257.definitionLine = 23;
  func1257.definitionModule = "musical";
  lineNumber = 23
  var func1258 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1258.paramCounts[0])
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
  func1258.paramCounts = [
    1,
  ];
  func1258.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1258;
  func1258.definitionLine = 23;
  func1258.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1259 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1259.paramCounts[0])
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
  func1259.paramCounts = [
    0,
  ];
  func1259.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1259;
  func1259.definitionLine = 23;
  func1259.definitionModule = "musical";
  lineNumber = 23
  var func1260 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1260.paramCounts[0])
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
  func1260.paramCounts = [
    1,
  ];
  func1260.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1260;
  func1260.definitionLine = 23;
  func1260.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1261 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1261.paramCounts[0])
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
  func1261.paramCounts = [
    0,
  ];
  func1261.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1261;
  func1261.definitionLine = 23;
  func1261.definitionModule = "musical";
  lineNumber = 23
  var func1262 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1262.paramCounts[0])
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
  func1262.paramCounts = [
    1,
  ];
  func1262.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1262;
  func1262.definitionLine = 23;
  func1262.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1263 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1263.paramCounts[0])
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
  func1263.paramCounts = [
    0,
  ];
  func1263.variableArities = [
    false,
  ];
  this.methods["above"] = func1263;
  func1263.definitionLine = 23;
  func1263.definitionModule = "musical";
  lineNumber = 23
  var func1264 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1264.paramCounts[0])
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
  func1264.paramCounts = [
    1,
  ];
  func1264.variableArities = [
    false,
  ];
  this.methods["above:="] = func1264;
  func1264.definitionLine = 23;
  func1264.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1265 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1265.paramCounts[0])
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
  func1265.paramCounts = [
    0,
  ];
  func1265.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1265;
  func1265.definitionLine = 23;
  func1265.definitionModule = "musical";
  lineNumber = 23
  var func1266 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1266.paramCounts[0])
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
  func1266.paramCounts = [
    1,
  ];
  func1266.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1266;
  func1266.definitionLine = 23;
  func1266.definitionModule = "musical";
  lineNumber = 40
  var func1267 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1267.paramCounts[0])
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
  func1267.paramCounts = [
    0,
  ];
  func1267.variableArities = [
    false,
  ];
  this.methods["point"] = func1267;
  func1267.definitionLine = 40;
  func1267.definitionModule = "musical";
  var obj1268 = Grace_allocObject();
  obj1268.definitionModule = "musical";
  obj1268.definitionLine = 40;
  obj1268.outer = this;
  var reader_musical_outer_1269 = function() {
    return this.outer;
  }
  obj1268.methods["outer"] = reader_musical_outer_1269;
  function obj_init_1268() {
    var origSuperDepth = superDepth;
    superDepth = obj1268;
    obj1268.annotations = [];
    var func1270 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1270.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1270.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1271 = Grace_allocObject();
        obj1271.definitionModule = "musical";
        obj1271.definitionLine = 40;
        obj1271.outer = this;
        var reader_musical_outer_1272 = function() {
          return this.outer;
        }
        obj1271.methods["outer"] = reader_musical_outer_1272;
        function obj_init_1271() {
          var origSuperDepth = superDepth;
          superDepth = obj1271;
          obj1271.annotations = [];
          var func1273 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1275 = callmethod(this, "x", [0]);
              var diff1277 = callmethod(call1275, "-", [1], var_dx);
              onSelf = true;
              var call1278 = callmethod(this, "y", [0]);
              var call1279 = callmethod(var_point,"x()y", [1, 1], diff1277, call1278);
              return call1279
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1273.paramCounts = [
            1,
          ];
          func1273.variableArities = [
            false,
          ];
          obj1271.methods["left"] = func1273;
          func1273.definitionLine = 43;
          func1273.definitionModule = "musical";
          var func1280 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1280.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1282 = callmethod(this, "x", [0]);
              var opresult1284 = callmethod(call1282, "+", [1], var_dx);
              onSelf = true;
              var call1285 = callmethod(this, "y", [0]);
              var call1286 = callmethod(var_point,"x()y", [1, 1], opresult1284, call1285);
              return call1286
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1280.paramCounts = [
            1,
          ];
          func1280.variableArities = [
            false,
          ];
          obj1271.methods["right"] = func1280;
          func1280.definitionLine = 44;
          func1280.definitionModule = "musical";
          var func1287 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1288 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1290 = callmethod(this, "y", [0]);
              var diff1292 = callmethod(call1290, "-", [1], var_dy);
              var call1293 = callmethod(var_point,"x()y", [1, 1], call1288, diff1292);
              return call1293
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1287.paramCounts = [
            1,
          ];
          func1287.variableArities = [
            false,
          ];
          obj1271.methods["up"] = func1287;
          func1287.definitionLine = 45;
          func1287.definitionModule = "musical";
          var func1294 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1295 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1297 = callmethod(this, "y", [0]);
              var opresult1299 = callmethod(call1297, "+", [1], var_dy);
              var call1300 = callmethod(var_point,"x()y", [1, 1], call1295, opresult1299);
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
          obj1271.methods["down"] = func1294;
          func1294.definitionLine = 46;
          func1294.definitionModule = "musical";
          sourceObject = obj1271;
          lineNumber = 41
          obj1271.data["x"] = var_x__39__;
          var reader_musical_x_1301 = function() {
            return this.data["x"];
          }
          reader_musical_x_1301.def = true;
          obj1271.methods["x"] = reader_musical_x_1301;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1271;
          lineNumber = 42
          obj1271.data["y"] = var_y__39__;
          var reader_musical_y_1302 = function() {
            return this.data["y"];
          }
          reader_musical_y_1302.def = true;
          obj1271.methods["y"] = reader_musical_y_1302;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1271;
          sourceObject = obj1271;
          sourceObject = obj1271;
          sourceObject = obj1271;
          superDepth = origSuperDepth;
        }
        obj_init_1271.apply(obj1271, []);
        return obj1271
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
      1,
    ];
    func1270.variableArities = [
      false,
      false,
    ];
    obj1268.methods["x()y"] = func1270;
    func1270.definitionLine = 40;
    func1270.definitionModule = "musical";
    var func1303 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1304 = Grace_allocObject();
        obj1304.definitionModule = "musical";
        obj1304.definitionLine = 40;
        var inho1304 = inheritingObject;
        while (inho1304.superobj) inho1304 = inho1304.superobj;
        inho1304.superobj = obj1304;
        obj1304.data = inheritingObject.data;
        obj1304.outer = this;
        var reader_musical_outer_1305 = function() {
          return this.outer;
        }
        obj1304.methods["outer"] = reader_musical_outer_1305;
        function obj_init_1304() {
          var origSuperDepth = superDepth;
          superDepth = obj1304;
          obj1304.annotations = [];
          var func1306 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1308 = callmethod(this, "x", [0]);
              var diff1310 = callmethod(call1308, "-", [1], var_dx);
              onSelf = true;
              var call1311 = callmethod(this, "y", [0]);
              var call1312 = callmethod(var_point,"x()y", [1, 1], diff1310, call1311);
              return call1312
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1306.paramCounts = [
            1,
          ];
          func1306.variableArities = [
            false,
          ];
          obj1304.methods["left"] = func1306;
          func1306.definitionLine = 43;
          func1306.definitionModule = "musical";
          var func1313 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1313.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1315 = callmethod(this, "x", [0]);
              var opresult1317 = callmethod(call1315, "+", [1], var_dx);
              onSelf = true;
              var call1318 = callmethod(this, "y", [0]);
              var call1319 = callmethod(var_point,"x()y", [1, 1], opresult1317, call1318);
              return call1319
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1313.paramCounts = [
            1,
          ];
          func1313.variableArities = [
            false,
          ];
          obj1304.methods["right"] = func1313;
          func1313.definitionLine = 44;
          func1313.definitionModule = "musical";
          var func1320 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1321 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1323 = callmethod(this, "y", [0]);
              var diff1325 = callmethod(call1323, "-", [1], var_dy);
              var call1326 = callmethod(var_point,"x()y", [1, 1], call1321, diff1325);
              return call1326
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1320.paramCounts = [
            1,
          ];
          func1320.variableArities = [
            false,
          ];
          obj1304.methods["up"] = func1320;
          func1320.definitionLine = 45;
          func1320.definitionModule = "musical";
          var func1327 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1327.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1328 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1330 = callmethod(this, "y", [0]);
              var opresult1332 = callmethod(call1330, "+", [1], var_dy);
              var call1333 = callmethod(var_point,"x()y", [1, 1], call1328, opresult1332);
              return call1333
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1327.paramCounts = [
            1,
          ];
          func1327.variableArities = [
            false,
          ];
          obj1304.methods["down"] = func1327;
          func1327.definitionLine = 46;
          func1327.definitionModule = "musical";
          sourceObject = obj1304;
          lineNumber = 41
          obj1304.data["x"] = var_x__39__;
          var reader_musical_x_1334 = function() {
            return this.data["x"];
          }
          reader_musical_x_1334.def = true;
          obj1304.methods["x"] = reader_musical_x_1334;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1304;
          lineNumber = 42
          obj1304.data["y"] = var_y__39__;
          var reader_musical_y_1335 = function() {
            return this.data["y"];
          }
          reader_musical_y_1335.def = true;
          obj1304.methods["y"] = reader_musical_y_1335;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          superDepth = origSuperDepth;
        }
        obj_init_1304.apply(inheritingObject, []);
        return obj1304
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1268.methods["x()y()object"] = func1303;
    var func1336 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1337 = new GraceString("class point");
        return string1337
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1336.paramCounts = [
    ];
    func1336.variableArities = [
    ];
    obj1268.methods["asDebugString"] = func1336;
    func1336.definitionLine = 40;
    func1336.definitionModule = "musical";
    sourceObject = obj1268;
    sourceObject = obj1268;
    superDepth = origSuperDepth;
  }
  obj_init_1268.apply(obj1268, []);
  var var_point = obj1268;
  lineNumber = 48
  var func1338 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1338.paramCounts[0])
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
  func1338.paramCounts = [
    0,
  ];
  func1338.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1338;
  func1338.definitionLine = 48;
  func1338.definitionModule = "musical";
  var obj1339 = Grace_allocObject();
  obj1339.definitionModule = "musical";
  obj1339.definitionLine = 48;
  obj1339.outer = this;
  var reader_musical_outer_1340 = function() {
    return this.outer;
  }
  obj1339.methods["outer"] = reader_musical_outer_1340;
  function obj_init_1339() {
    var origSuperDepth = superDepth;
    superDepth = obj1339;
    obj1339.annotations = [];
    var func1341 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1341.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1342 = Grace_allocObject();
        obj1342.definitionModule = "musical";
        obj1342.definitionLine = 48;
        obj1342.outer = this;
        var reader_musical_outer_1343 = function() {
          return this.outer;
        }
        obj1342.methods["outer"] = reader_musical_outer_1343;
        function obj_init_1342() {
          var origSuperDepth = superDepth;
          superDepth = obj1342;
          obj1342.annotations = [];
          var func1344 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1344.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1345 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1346 = Grace_allocObject();
              block1346.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1346.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1346.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1346.methods["match"] = GraceBlock_match;
              block1346.methods["prefix?"] = GraceBlock_lift;
              block1346.receiver = this;
              block1346.className = 'block<musical:63>';
              block1346.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1347 = callmethod(var_b,"apply", [0]);
                return call1347;
              };
              var call1348 = callmethod(Grace_prelude,"for()do", [1, 1], call1345, block1346);
              lineNumber = 63
              onSelf = true;
              var call1349 = callmethod(this, "tick", [0]);
              return call1349
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1344.paramCounts = [
            0,
          ];
          func1344.variableArities = [
            false,
          ];
          obj1342.methods["step"] = func1344;
          func1344.definitionLine = 59;
          func1344.definitionModule = "musical";
          var func1350 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1350.paramCounts[0])
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
          func1350.paramCounts = [
            0,
          ];
          func1350.variableArities = [
            false,
          ];
          obj1342.methods["tick"] = func1350;
          func1350.definitionLine = 66;
          func1350.definitionModule = "musical";
          var func1351 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1351.paramCounts[0])
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
          func1351.paramCounts = [
            1,
          ];
          func1351.variableArities = [
            false,
          ];
          obj1342.methods["draw"] = func1351;
          func1351.definitionLine = 67;
          func1351.definitionModule = "musical";
          var func1352 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1352.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1353 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1354 = callmethod(this, "destX:=", [1], call1353);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1355 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1356 = callmethod(this, "destY:=", [1], call1355);
              return call1356
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1352.paramCounts = [
            1,
          ];
          func1352.variableArities = [
            false,
          ];
          obj1342.methods["moveTo"] = func1352;
          func1352.definitionLine = 68;
          func1352.definitionModule = "musical";
          var func1357 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1357.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1358 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1359 = callmethod(this, "x:=", [1], call1358);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1360 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1361 = callmethod(this, "y:=", [1], call1360);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1362 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1363 = callmethod(this, "destX:=", [1], call1362);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1364 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1365 = callmethod(this, "destY:=", [1], call1364);
              return call1365
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
          obj1342.methods["jumpTo"] = func1357;
          func1357.definitionLine = 72;
          func1357.definitionModule = "musical";
          var func1366 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1367 = new GraceBoolean(false)
              return bool1367
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
          obj1342.methods["isPointOver"] = func1366;
          func1366.definitionLine = 78;
          func1366.definitionModule = "musical";
          var func1368 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1368.paramCounts[0])
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
          func1368.paramCounts = [
            0,
          ];
          func1368.variableArities = [
            false,
          ];
          obj1342.methods["mousedown"] = func1368;
          func1368.definitionLine = 79;
          func1368.definitionModule = "musical";
          var func1369 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1369.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1370 = callmethod(this, "alwaysBlocks", [0]);
              var call1371 = callmethod(call1370,"push", [1], var_b);
              return call1371
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1369.paramCounts = [
            1,
          ];
          func1369.variableArities = [
            false,
          ];
          obj1342.methods["always"] = func1369;
          func1369.definitionLine = 80;
          func1369.definitionModule = "musical";
          var func1372 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1372.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1372.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1373 = Grace_allocObject();
              block1373.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1373.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1373.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1373.methods["match"] = GraceBlock_match;
              block1373.methods["prefix?"] = GraceBlock_lift;
              block1373.receiver = this;
              block1373.className = 'block<musical:89>';
              block1373.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1374 = var_done;
                lineNumber = 85
                var call1375 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1375)) {
                  lineNumber = 86
                  var call1376 = callmethod(var_b,"apply", [0]);
                  if1374 = call1376;
                }
                return if1374;
              };
              onSelf = true;
              var call1377 = callmethod(this, "always", [1], block1373);
              return call1377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1372.paramCounts = [
            1,
            1,
          ];
          func1372.variableArities = [
            false,
            false,
          ];
          obj1342.methods["whenever()do"] = func1372;
          func1372.definitionLine = 83;
          func1372.definitionModule = "musical";
          var func1378 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1382 = callmethod(this, "angle", [0]);
              var quotient1384 = callmethod(call1382, "/", [1], new GraceNum(180));
              var prod1386 = callmethod(quotient1384, "*", [1], var_PI);
              var call1387 = callmethod(var_trig,"cos", [1], prod1386);
              var prod1389 = callmethod(call1387, "*", [1], var_dist);
              var var_y__39__ = prod1389;
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
              var call1393 = callmethod(this, "angle", [0]);
              var quotient1395 = callmethod(call1393, "/", [1], new GraceNum(180));
              var prod1397 = callmethod(quotient1395, "*", [1], var_PI);
              var call1398 = callmethod(var_trig,"sin", [1], prod1397);
              var prod1400 = callmethod(call1398, "*", [1], var_dist);
              var var_x__39__ = prod1400;
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
              var call1402 = callmethod(this, "x", [0]);
              var opresult1404 = callmethod(call1402, "+", [1], var_x__39__);
              onSelf = true;
              var call1405 = callmethod(this, "x:=", [1], opresult1404);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1407 = callmethod(this, "y", [0]);
              var opresult1409 = callmethod(call1407, "+", [1], var_y__39__);
              onSelf = true;
              var call1410 = callmethod(this, "y:=", [1], opresult1409);
              return call1410
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1378.paramCounts = [
            1,
          ];
          func1378.variableArities = [
            false,
          ];
          obj1342.methods["forward"] = func1378;
          func1378.definitionLine = 90;
          func1378.definitionModule = "musical";
          var func1411 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1412 = Grace_allocObject();
              block1412.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1412.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1412.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1412.methods["match"] = GraceBlock_match;
              block1412.methods["prefix?"] = GraceBlock_lift;
              block1412.receiver = this;
              block1412.className = 'block<musical:97>';
              block1412.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1414 = callmethod(this, "angle", [0]);
                var opresult1416 = callmethod(call1414, "<", [1], new GraceNum(0));
                return opresult1416;
              };
              lineNumber = 100
              var block1417 = Grace_allocObject();
              block1417.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1417.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1417.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1417.methods["match"] = GraceBlock_match;
              block1417.methods["prefix?"] = GraceBlock_lift;
              block1417.receiver = this;
              block1417.className = 'block<musical:100>';
              block1417.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1419 = callmethod(this, "angle", [0]);
                var opresult1421 = callmethod(call1419, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1422 = callmethod(this, "angle:=", [1], opresult1421);
                return call1422;
              };
              var call1423 = callmethod(Grace_prelude,"while()do", [1, 1], block1412, block1417);
              lineNumber = 100
              var block1424 = Grace_allocObject();
              block1424.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1424.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1424.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1424.methods["match"] = GraceBlock_match;
              block1424.methods["prefix?"] = GraceBlock_lift;
              block1424.receiver = this;
              block1424.className = 'block<musical:100>';
              block1424.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1426 = callmethod(this, "angle", [0]);
                var opresult1428 = callmethod(call1426, ">", [1], new GraceNum(360));
                return opresult1428;
              };
              lineNumber = 103
              var block1429 = Grace_allocObject();
              block1429.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1429.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1429.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1429.methods["match"] = GraceBlock_match;
              block1429.methods["prefix?"] = GraceBlock_lift;
              block1429.receiver = this;
              block1429.className = 'block<musical:103>';
              block1429.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1431 = callmethod(this, "angle", [0]);
                var diff1433 = callmethod(call1431, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1434 = callmethod(this, "angle:=", [1], diff1433);
                return call1434;
              };
              var call1435 = callmethod(Grace_prelude,"while()do", [1, 1], block1424, block1429);
              return call1435
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1411.paramCounts = [
            0,
          ];
          func1411.variableArities = [
            false,
          ];
          obj1342.methods["normaliseAngle"] = func1411;
          func1411.definitionLine = 96;
          func1411.definitionModule = "musical";
          var func1436 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1436.paramCounts[0])
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
              var call1438 = callmethod(this, "angle", [0]);
              var opresult1440 = callmethod(call1438, "+", [1], var_degrees);
              onSelf = true;
              var call1441 = callmethod(this, "angle:=", [1], opresult1440);
              lineNumber = 106
              onSelf = true;
              var call1442 = callmethod(this, "normaliseAngle", [0]);
              return call1442
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1436.paramCounts = [
            1,
          ];
          func1436.variableArities = [
            false,
          ];
          obj1342.methods["turn"] = func1436;
          func1436.definitionLine = 104;
          func1436.definitionModule = "musical";
          var func1443 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1443.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1444 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1445 = callmethod(this, "x", [0]);
              var call1446 = callmethod(var_point,"x()y", [1, 1], call1445, new GraceNum(0));
              onSelf = true;
              var call1447 = callmethod(this, "isPointOver", [1], call1446);
              if (Grace_isTrue(call1447)) {
                lineNumber = 111
                lineNumber = 110
                var bool1448 = new GraceBoolean(true)
                return bool1448
              }
              lineNumber = 115
              var if1449 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1450 = callmethod(this, "x", [0]);
              var call1451 = callmethod(var_point,"x()y", [1, 1], call1450, var_canvasHeight);
              onSelf = true;
              var call1452 = callmethod(this, "isPointOver", [1], call1451);
              if (Grace_isTrue(call1452)) {
                lineNumber = 114
                lineNumber = 113
                var bool1453 = new GraceBoolean(true)
                return bool1453
              }
              lineNumber = 118
              var if1454 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1455 = callmethod(this, "y", [0]);
              var call1456 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1455);
              onSelf = true;
              var call1457 = callmethod(this, "isPointOver", [1], call1456);
              if (Grace_isTrue(call1457)) {
                lineNumber = 117
                lineNumber = 116
                var bool1458 = new GraceBoolean(true)
                return bool1458
              }
              lineNumber = 121
              var if1459 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1460 = callmethod(this, "y", [0]);
              var call1461 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1460);
              onSelf = true;
              var call1462 = callmethod(this, "isPointOver", [1], call1461);
              if (Grace_isTrue(call1462)) {
                lineNumber = 120
                lineNumber = 119
                var bool1463 = new GraceBoolean(true)
                return bool1463
              }
              lineNumber = 122
              lineNumber = 121
              var bool1464 = new GraceBoolean(false)
              return bool1464
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1443.paramCounts = [
            0,
          ];
          func1443.variableArities = [
            false,
          ];
          obj1342.methods["touchingEdge"] = func1443;
          func1443.definitionLine = 108;
          func1443.definitionModule = "musical";
          var func1465 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1465.paramCounts[0])
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
              var if1466 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1467 = callmethod(this, "x", [0]);
              var call1468 = callmethod(var_point,"x()y", [1, 1], call1467, new GraceNum(0));
              onSelf = true;
              var call1469 = callmethod(this, "isPointOver", [1], call1468);
              if (Grace_isTrue(call1469)) {
                lineNumber = 127
                onSelf = true;
                var call1470 = callmethod(this, "bounceFrom", [1], var_top);
                if1466 = call1470;
              }
              lineNumber = 132
              var if1471 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1472 = callmethod(this, "x", [0]);
              var call1473 = callmethod(var_point,"x()y", [1, 1], call1472, var_canvasHeight);
              onSelf = true;
              var call1474 = callmethod(this, "isPointOver", [1], call1473);
              if (Grace_isTrue(call1474)) {
                lineNumber = 130
                onSelf = true;
                var call1475 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1471 = call1475;
              }
              lineNumber = 135
              var if1476 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1477 = callmethod(this, "y", [0]);
              var call1478 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1477);
              onSelf = true;
              var call1479 = callmethod(this, "isPointOver", [1], call1478);
              if (Grace_isTrue(call1479)) {
                lineNumber = 133
                onSelf = true;
                var call1480 = callmethod(this, "bounceFrom", [1], var_left);
                if1476 = call1480;
              }
              lineNumber = 138
              var if1481 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1482 = callmethod(this, "y", [0]);
              var call1483 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1482);
              onSelf = true;
              var call1484 = callmethod(this, "isPointOver", [1], call1483);
              if (Grace_isTrue(call1484)) {
                lineNumber = 136
                onSelf = true;
                var call1485 = callmethod(this, "bounceFrom", [1], var_right);
                if1481 = call1485;
              }
              lineNumber = 138
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
              block1486.className = 'block<musical:138>';
              block1486.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1487 = callmethod(this, "touchingEdge", [0]);
                return call1487;
              };
              lineNumber = 141
              var block1488 = Grace_allocObject();
              block1488.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1488.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1488.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1488.methods["match"] = GraceBlock_match;
              block1488.methods["prefix?"] = GraceBlock_lift;
              block1488.receiver = this;
              block1488.className = 'block<musical:141>';
              block1488.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1489 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1489;
              };
              var call1490 = callmethod(Grace_prelude,"while()do", [1, 1], block1486, block1488);
              return call1490
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1465.paramCounts = [
            0,
          ];
          func1465.variableArities = [
            false,
          ];
          obj1342.methods["bounce"] = func1465;
          func1465.definitionLine = 123;
          func1465.definitionModule = "musical";
          var func1491 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1491.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1492 = var_done;
              lineNumber = 143
              var string1493 = new GraceString("left");
              var opresult1496 = callmethod(var_dir, "==", [1], string1493);
              if (Grace_isTrue(opresult1496)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1497 = callmethod(this, "angle", [0]);
                var diff1500 = callmethod(new GraceNum(360), "-", [1], call1497);
                onSelf = true;
                var call1501 = callmethod(this, "angle:=", [1], diff1500);
                if1492 = call1501;
              }
              lineNumber = 149
              var if1502 = var_done;
              lineNumber = 146
              var string1503 = new GraceString("right");
              var opresult1506 = callmethod(var_dir, "==", [1], string1503);
              if (Grace_isTrue(opresult1506)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1507 = callmethod(this, "angle", [0]);
                var diff1510 = callmethod(new GraceNum(360), "-", [1], call1507);
                onSelf = true;
                var call1511 = callmethod(this, "angle:=", [1], diff1510);
                if1502 = call1511;
              }
              lineNumber = 152
              var if1512 = var_done;
              lineNumber = 149
              var string1513 = new GraceString("top");
              var opresult1516 = callmethod(var_dir, "==", [1], string1513);
              if (Grace_isTrue(opresult1516)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1517 = callmethod(this, "angle", [0]);
                var diff1520 = callmethod(new GraceNum(180), "-", [1], call1517);
                onSelf = true;
                var call1521 = callmethod(this, "angle:=", [1], diff1520);
                if1512 = call1521;
              }
              lineNumber = 155
              var if1522 = var_done;
              lineNumber = 152
              var string1523 = new GraceString("bottom");
              var opresult1526 = callmethod(var_dir, "==", [1], string1523);
              if (Grace_isTrue(opresult1526)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1527 = callmethod(this, "angle", [0]);
                var diff1530 = callmethod(new GraceNum(180), "-", [1], call1527);
                onSelf = true;
                var call1531 = callmethod(this, "angle:=", [1], diff1530);
                if1522 = call1531;
              }
              lineNumber = 155
              onSelf = true;
              var call1532 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1533 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1533
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1491.paramCounts = [
            1,
          ];
          func1491.variableArities = [
            false,
          ];
          obj1342.methods["bounceFrom"] = func1491;
          func1491.definitionLine = 142;
          func1491.definitionModule = "musical";
          var func1534 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1534.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1535 = var_done;
              lineNumber = 159
              var call1536 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1538 = callmethod(this, "x", [0]);
              var opresult1540 = callmethod(call1538, ">", [1], call1536);
              if (Grace_isTrue(opresult1540)) {
                lineNumber = 160
                onSelf = true;
                var call1541 = callmethod(this, "bounceFrom", [1], var_left);
                if1535 = call1541;
              }
              lineNumber = 165
              var if1542 = var_done;
              lineNumber = 162
              var call1543 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1545 = callmethod(this, "x", [0]);
              var opresult1547 = callmethod(call1545, "<", [1], call1543);
              if (Grace_isTrue(opresult1547)) {
                lineNumber = 163
                onSelf = true;
                var call1548 = callmethod(this, "bounceFrom", [1], var_right);
                if1542 = call1548;
              }
              lineNumber = 165
              var block1549 = Grace_allocObject();
              block1549.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1549.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1549.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1549.methods["match"] = GraceBlock_match;
              block1549.methods["prefix?"] = GraceBlock_lift;
              block1549.receiver = this;
              block1549.className = 'block<musical:165>';
              block1549.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1550 = callmethod(this, "touching", [1], var_other);
                return call1550;
              };
              lineNumber = 168
              var block1551 = Grace_allocObject();
              block1551.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1551.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1551.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1551.methods["match"] = GraceBlock_match;
              block1551.methods["prefix?"] = GraceBlock_lift;
              block1551.receiver = this;
              block1551.className = 'block<musical:168>';
              block1551.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1552 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1552;
              };
              var call1553 = callmethod(Grace_prelude,"while()do", [1, 1], block1549, block1551);
              return call1553
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1534.paramCounts = [
            1,
          ];
          func1534.variableArities = [
            false,
          ];
          obj1342.methods["bounceOff"] = func1534;
          func1534.definitionLine = 158;
          func1534.definitionModule = "musical";
          var func1554 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1554.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1555 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1556 = callmethod(this, "y", [0]);
              var call1557 = callmethod(var_point,"x()y", [1, 1], call1555, call1556);
              var call1558 = callmethod(var_other,"isPointOver", [1], call1557);
              return call1558
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1554.paramCounts = [
            1,
          ];
          func1554.variableArities = [
            false,
          ];
          obj1342.methods["touching"] = func1554;
          func1554.definitionLine = 169;
          func1554.definitionModule = "musical";
          var func1559 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1559.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1560 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1561 = callmethod(this, "y", [0]);
              var call1563 = callmethod(var_other,"y", [0]);
              var opresult1565 = callmethod(call1563, "!=", [1], call1561);
              onSelf = true;
              var call1567 = callmethod(this, "x", [0]);
              var call1569 = callmethod(var_other,"x", [0]);
              var opresult1571 = callmethod(call1569, "!=", [1], call1567);
              var opresult1573 = callmethod(opresult1571, "||", [1], opresult1565);
              if (Grace_isTrue(opresult1573)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1576 = callmethod(this, "x", [0]);
                var call1578 = callmethod(var_other,"x", [0]);
                var diff1580 = callmethod(call1578, "-", [1], call1576);
                onSelf = true;
                var call1581 = callmethod(this, "y", [0]);
                var call1583 = callmethod(var_other,"y", [0]);
                var diff1585 = callmethod(call1583, "-", [1], call1581);
                var call1586 = callmethod(var_trig,"atan2", [2], diff1580, diff1585);
                var prod1588 = callmethod(call1586, "*", [1], new GraceNum(180));
                var quotient1590 = callmethod(prod1588, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1591 = callmethod(this, "angle:=", [1], quotient1590);
                if1560 = call1591;
              }
              lineNumber = 176
              onSelf = true;
              var call1592 = callmethod(this, "normaliseAngle", [0]);
              return call1592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1559.paramCounts = [
            1,
          ];
          func1559.variableArities = [
            false,
          ];
          obj1342.methods["face"] = func1559;
          func1559.definitionLine = 172;
          func1559.definitionModule = "musical";
          var func1593 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1593.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1594 = new GraceString("2d");
              var call1595 = callmethod(var_backingCanvas,"getContext", [1], string1594);
              onSelf = true;
              var call1596 = callmethod(this, "draw", [1], call1595);
              return call1596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1593.paramCounts = [
            0,
          ];
          func1593.variableArities = [
            false,
          ];
          obj1342.methods["stamp"] = func1593;
          func1593.definitionLine = 178;
          func1593.definitionModule = "musical";
          sourceObject = obj1342;
          lineNumber = 49
          var call1597 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1598 = callmethod(call1597, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1599 = callmethod(call1598, "initialise", [0]);
          sourceObject = obj1342;
          lineNumber = 50
          var call1600 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1342;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1342;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1342;
          lineNumber = 53
          var call1601 = callmethod(var_collections,"list", [0]);
          var call1602 = callmethod(call1601,"new", [0]);
          obj1342.data["alwaysBlocks"] = call1602;
          var reader_musical_alwaysBlocks_1603 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1603.def = true;
          reader_musical_alwaysBlocks_1603.confidential = true;
          obj1342.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1603;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1602)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1342;
          lineNumber = 55
          lineNumber = 54
          var quotient1606 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1342.data["x"] = quotient1606;
          var reader_musical_x_1607 = function() {
            return this.data["x"];
          }
          obj1342.methods["x"] = reader_musical_x_1607;
          obj1342.data["x"] = quotient1606;
          var writer_musical_x_1607 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1342.methods["x:="] = writer_musical_x_1607;
          writer_musical_x_1607.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1606)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1342.mutable = true;
          sourceObject = obj1342;
          lineNumber = 56
          lineNumber = 55
          var quotient1610 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1342.data["y"] = quotient1610;
          var reader_musical_y_1611 = function() {
            return this.data["y"];
          }
          obj1342.methods["y"] = reader_musical_y_1611;
          obj1342.data["y"] = quotient1610;
          var writer_musical_y_1611 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1342.methods["y:="] = writer_musical_y_1611;
          writer_musical_y_1611.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1342.mutable = true;
          sourceObject = obj1342;
          lineNumber = 56
          onSelf = true;
          var call1612 = callmethod(this, "x", [0]);
          obj1342.data["destX"] = call1612;
          var reader_musical_destX_1613 = function() {
            return this.data["destX"];
          }
          obj1342.methods["destX"] = reader_musical_destX_1613;
          obj1342.data["destX"] = call1612;
          var writer_musical_destX_1613 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1342.methods["destX:="] = writer_musical_destX_1613;
          reader_musical_destX_1613.confidential = true;
          writer_musical_destX_1613.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1612)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1342.mutable = true;
          sourceObject = obj1342;
          lineNumber = 57
          onSelf = true;
          var call1614 = callmethod(this, "y", [0]);
          obj1342.data["destY"] = call1614;
          var reader_musical_destY_1615 = function() {
            return this.data["destY"];
          }
          obj1342.methods["destY"] = reader_musical_destY_1615;
          obj1342.data["destY"] = call1614;
          var writer_musical_destY_1615 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1342.methods["destY:="] = writer_musical_destY_1615;
          reader_musical_destY_1615.confidential = true;
          writer_musical_destY_1615.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1614)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1342.mutable = true;
          sourceObject = obj1342;
          lineNumber = 58
          obj1342.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1616 = function() {
            return this.data["angle"];
          }
          obj1342.methods["angle"] = reader_musical_angle_1616;
          obj1342.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1616 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1342.methods["angle:="] = writer_musical_angle_1616;
          reader_musical_angle_1616.confidential = true;
          writer_musical_angle_1616.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1342.mutable = true;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          sourceObject = obj1342;
          superDepth = origSuperDepth;
        }
        obj_init_1342.apply(obj1342, []);
        return obj1342
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1341.paramCounts = [
      0,
    ];
    func1341.variableArities = [
      false,
    ];
    obj1339.methods["new"] = func1341;
    func1341.definitionLine = 48;
    func1341.definitionModule = "musical";
    var func1617 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1618 = Grace_allocObject();
        obj1618.definitionModule = "musical";
        obj1618.definitionLine = 48;
        var inho1618 = inheritingObject;
        while (inho1618.superobj) inho1618 = inho1618.superobj;
        inho1618.superobj = obj1618;
        obj1618.data = inheritingObject.data;
        obj1618.outer = this;
        var reader_musical_outer_1619 = function() {
          return this.outer;
        }
        obj1618.methods["outer"] = reader_musical_outer_1619;
        function obj_init_1618() {
          var origSuperDepth = superDepth;
          superDepth = obj1618;
          obj1618.annotations = [];
          var func1620 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1620.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1621 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1622 = Grace_allocObject();
              block1622.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1622.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1622.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1622.methods["match"] = GraceBlock_match;
              block1622.methods["prefix?"] = GraceBlock_lift;
              block1622.receiver = this;
              block1622.className = 'block<musical:63>';
              block1622.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1623 = callmethod(var_b,"apply", [0]);
                return call1623;
              };
              var call1624 = callmethod(Grace_prelude,"for()do", [1, 1], call1621, block1622);
              lineNumber = 63
              onSelf = true;
              var call1625 = callmethod(this, "tick", [0]);
              return call1625
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1620.paramCounts = [
            0,
          ];
          func1620.variableArities = [
            false,
          ];
          obj1618.methods["step"] = func1620;
          func1620.definitionLine = 59;
          func1620.definitionModule = "musical";
          var func1626 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1626.paramCounts[0])
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
          func1626.paramCounts = [
            0,
          ];
          func1626.variableArities = [
            false,
          ];
          obj1618.methods["tick"] = func1626;
          func1626.definitionLine = 66;
          func1626.definitionModule = "musical";
          var func1627 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1627.paramCounts[0])
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
          func1627.paramCounts = [
            1,
          ];
          func1627.variableArities = [
            false,
          ];
          obj1618.methods["draw"] = func1627;
          func1627.definitionLine = 67;
          func1627.definitionModule = "musical";
          var func1628 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1628.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1629 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1630 = callmethod(this, "destX:=", [1], call1629);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1631 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1632 = callmethod(this, "destY:=", [1], call1631);
              return call1632
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1628.paramCounts = [
            1,
          ];
          func1628.variableArities = [
            false,
          ];
          obj1618.methods["moveTo"] = func1628;
          func1628.definitionLine = 68;
          func1628.definitionModule = "musical";
          var func1633 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1634 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1635 = callmethod(this, "x:=", [1], call1634);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1636 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1637 = callmethod(this, "y:=", [1], call1636);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1638 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1639 = callmethod(this, "destX:=", [1], call1638);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1640 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1641 = callmethod(this, "destY:=", [1], call1640);
              return call1641
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1633.paramCounts = [
            1,
          ];
          func1633.variableArities = [
            false,
          ];
          obj1618.methods["jumpTo"] = func1633;
          func1633.definitionLine = 72;
          func1633.definitionModule = "musical";
          var func1642 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1643 = new GraceBoolean(false)
              return bool1643
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1642.paramCounts = [
            1,
          ];
          func1642.variableArities = [
            false,
          ];
          obj1618.methods["isPointOver"] = func1642;
          func1642.definitionLine = 78;
          func1642.definitionModule = "musical";
          var func1644 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1644.paramCounts[0])
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
          func1644.paramCounts = [
            0,
          ];
          func1644.variableArities = [
            false,
          ];
          obj1618.methods["mousedown"] = func1644;
          func1644.definitionLine = 79;
          func1644.definitionModule = "musical";
          var func1645 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1646 = callmethod(this, "alwaysBlocks", [0]);
              var call1647 = callmethod(call1646,"push", [1], var_b);
              return call1647
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1645.paramCounts = [
            1,
          ];
          func1645.variableArities = [
            false,
          ];
          obj1618.methods["always"] = func1645;
          func1645.definitionLine = 80;
          func1645.definitionModule = "musical";
          var func1648 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1648.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1648.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1649 = Grace_allocObject();
              block1649.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1649.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1649.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1649.methods["match"] = GraceBlock_match;
              block1649.methods["prefix?"] = GraceBlock_lift;
              block1649.receiver = this;
              block1649.className = 'block<musical:89>';
              block1649.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1650 = var_done;
                lineNumber = 85
                var call1651 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1651)) {
                  lineNumber = 86
                  var call1652 = callmethod(var_b,"apply", [0]);
                  if1650 = call1652;
                }
                return if1650;
              };
              onSelf = true;
              var call1653 = callmethod(this, "always", [1], block1649);
              return call1653
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1648.paramCounts = [
            1,
            1,
          ];
          func1648.variableArities = [
            false,
            false,
          ];
          obj1618.methods["whenever()do"] = func1648;
          func1648.definitionLine = 83;
          func1648.definitionModule = "musical";
          var func1654 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1654.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1658 = callmethod(this, "angle", [0]);
              var quotient1660 = callmethod(call1658, "/", [1], new GraceNum(180));
              var prod1662 = callmethod(quotient1660, "*", [1], var_PI);
              var call1663 = callmethod(var_trig,"cos", [1], prod1662);
              var prod1665 = callmethod(call1663, "*", [1], var_dist);
              var var_y__39__ = prod1665;
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
              var call1669 = callmethod(this, "angle", [0]);
              var quotient1671 = callmethod(call1669, "/", [1], new GraceNum(180));
              var prod1673 = callmethod(quotient1671, "*", [1], var_PI);
              var call1674 = callmethod(var_trig,"sin", [1], prod1673);
              var prod1676 = callmethod(call1674, "*", [1], var_dist);
              var var_x__39__ = prod1676;
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
              var call1678 = callmethod(this, "x", [0]);
              var opresult1680 = callmethod(call1678, "+", [1], var_x__39__);
              onSelf = true;
              var call1681 = callmethod(this, "x:=", [1], opresult1680);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1683 = callmethod(this, "y", [0]);
              var opresult1685 = callmethod(call1683, "+", [1], var_y__39__);
              onSelf = true;
              var call1686 = callmethod(this, "y:=", [1], opresult1685);
              return call1686
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1654.paramCounts = [
            1,
          ];
          func1654.variableArities = [
            false,
          ];
          obj1618.methods["forward"] = func1654;
          func1654.definitionLine = 90;
          func1654.definitionModule = "musical";
          var func1687 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1687.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1688 = Grace_allocObject();
              block1688.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1688.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1688.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1688.methods["match"] = GraceBlock_match;
              block1688.methods["prefix?"] = GraceBlock_lift;
              block1688.receiver = this;
              block1688.className = 'block<musical:97>';
              block1688.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1690 = callmethod(this, "angle", [0]);
                var opresult1692 = callmethod(call1690, "<", [1], new GraceNum(0));
                return opresult1692;
              };
              lineNumber = 100
              var block1693 = Grace_allocObject();
              block1693.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1693.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1693.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1693.methods["match"] = GraceBlock_match;
              block1693.methods["prefix?"] = GraceBlock_lift;
              block1693.receiver = this;
              block1693.className = 'block<musical:100>';
              block1693.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1695 = callmethod(this, "angle", [0]);
                var opresult1697 = callmethod(call1695, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1698 = callmethod(this, "angle:=", [1], opresult1697);
                return call1698;
              };
              var call1699 = callmethod(Grace_prelude,"while()do", [1, 1], block1688, block1693);
              lineNumber = 100
              var block1700 = Grace_allocObject();
              block1700.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1700.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1700.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1700.methods["match"] = GraceBlock_match;
              block1700.methods["prefix?"] = GraceBlock_lift;
              block1700.receiver = this;
              block1700.className = 'block<musical:100>';
              block1700.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1702 = callmethod(this, "angle", [0]);
                var opresult1704 = callmethod(call1702, ">", [1], new GraceNum(360));
                return opresult1704;
              };
              lineNumber = 103
              var block1705 = Grace_allocObject();
              block1705.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1705.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1705.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1705.methods["match"] = GraceBlock_match;
              block1705.methods["prefix?"] = GraceBlock_lift;
              block1705.receiver = this;
              block1705.className = 'block<musical:103>';
              block1705.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1707 = callmethod(this, "angle", [0]);
                var diff1709 = callmethod(call1707, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1710 = callmethod(this, "angle:=", [1], diff1709);
                return call1710;
              };
              var call1711 = callmethod(Grace_prelude,"while()do", [1, 1], block1700, block1705);
              return call1711
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
          obj1618.methods["normaliseAngle"] = func1687;
          func1687.definitionLine = 96;
          func1687.definitionModule = "musical";
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
              lineNumber = 106
              lineNumber = 86
              lineNumber = 106
              lineNumber = 105
              onSelf = true;
              var call1714 = callmethod(this, "angle", [0]);
              var opresult1716 = callmethod(call1714, "+", [1], var_degrees);
              onSelf = true;
              var call1717 = callmethod(this, "angle:=", [1], opresult1716);
              lineNumber = 106
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
          obj1618.methods["turn"] = func1712;
          func1712.definitionLine = 104;
          func1712.definitionModule = "musical";
          var func1719 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1719.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1720 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1721 = callmethod(this, "x", [0]);
              var call1722 = callmethod(var_point,"x()y", [1, 1], call1721, new GraceNum(0));
              onSelf = true;
              var call1723 = callmethod(this, "isPointOver", [1], call1722);
              if (Grace_isTrue(call1723)) {
                lineNumber = 111
                lineNumber = 110
                var bool1724 = new GraceBoolean(true)
                return bool1724
              }
              lineNumber = 115
              var if1725 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1726 = callmethod(this, "x", [0]);
              var call1727 = callmethod(var_point,"x()y", [1, 1], call1726, var_canvasHeight);
              onSelf = true;
              var call1728 = callmethod(this, "isPointOver", [1], call1727);
              if (Grace_isTrue(call1728)) {
                lineNumber = 114
                lineNumber = 113
                var bool1729 = new GraceBoolean(true)
                return bool1729
              }
              lineNumber = 118
              var if1730 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1731 = callmethod(this, "y", [0]);
              var call1732 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1731);
              onSelf = true;
              var call1733 = callmethod(this, "isPointOver", [1], call1732);
              if (Grace_isTrue(call1733)) {
                lineNumber = 117
                lineNumber = 116
                var bool1734 = new GraceBoolean(true)
                return bool1734
              }
              lineNumber = 121
              var if1735 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1736 = callmethod(this, "y", [0]);
              var call1737 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1736);
              onSelf = true;
              var call1738 = callmethod(this, "isPointOver", [1], call1737);
              if (Grace_isTrue(call1738)) {
                lineNumber = 120
                lineNumber = 119
                var bool1739 = new GraceBoolean(true)
                return bool1739
              }
              lineNumber = 122
              lineNumber = 121
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
          obj1618.methods["touchingEdge"] = func1719;
          func1719.definitionLine = 108;
          func1719.definitionModule = "musical";
          var func1741 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1741.paramCounts[0])
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
              var if1742 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1743 = callmethod(this, "x", [0]);
              var call1744 = callmethod(var_point,"x()y", [1, 1], call1743, new GraceNum(0));
              onSelf = true;
              var call1745 = callmethod(this, "isPointOver", [1], call1744);
              if (Grace_isTrue(call1745)) {
                lineNumber = 127
                onSelf = true;
                var call1746 = callmethod(this, "bounceFrom", [1], var_top);
                if1742 = call1746;
              }
              lineNumber = 132
              var if1747 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1748 = callmethod(this, "x", [0]);
              var call1749 = callmethod(var_point,"x()y", [1, 1], call1748, var_canvasHeight);
              onSelf = true;
              var call1750 = callmethod(this, "isPointOver", [1], call1749);
              if (Grace_isTrue(call1750)) {
                lineNumber = 130
                onSelf = true;
                var call1751 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1747 = call1751;
              }
              lineNumber = 135
              var if1752 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1753 = callmethod(this, "y", [0]);
              var call1754 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1753);
              onSelf = true;
              var call1755 = callmethod(this, "isPointOver", [1], call1754);
              if (Grace_isTrue(call1755)) {
                lineNumber = 133
                onSelf = true;
                var call1756 = callmethod(this, "bounceFrom", [1], var_left);
                if1752 = call1756;
              }
              lineNumber = 138
              var if1757 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1758 = callmethod(this, "y", [0]);
              var call1759 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1758);
              onSelf = true;
              var call1760 = callmethod(this, "isPointOver", [1], call1759);
              if (Grace_isTrue(call1760)) {
                lineNumber = 136
                onSelf = true;
                var call1761 = callmethod(this, "bounceFrom", [1], var_right);
                if1757 = call1761;
              }
              lineNumber = 138
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
              block1762.className = 'block<musical:138>';
              block1762.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1763 = callmethod(this, "touchingEdge", [0]);
                return call1763;
              };
              lineNumber = 141
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
              block1764.className = 'block<musical:141>';
              block1764.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1765 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1765;
              };
              var call1766 = callmethod(Grace_prelude,"while()do", [1, 1], block1762, block1764);
              return call1766
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
          obj1618.methods["bounce"] = func1741;
          func1741.definitionLine = 123;
          func1741.definitionModule = "musical";
          var func1767 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1767.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1768 = var_done;
              lineNumber = 143
              var string1769 = new GraceString("left");
              var opresult1772 = callmethod(var_dir, "==", [1], string1769);
              if (Grace_isTrue(opresult1772)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1773 = callmethod(this, "angle", [0]);
                var diff1776 = callmethod(new GraceNum(360), "-", [1], call1773);
                onSelf = true;
                var call1777 = callmethod(this, "angle:=", [1], diff1776);
                if1768 = call1777;
              }
              lineNumber = 149
              var if1778 = var_done;
              lineNumber = 146
              var string1779 = new GraceString("right");
              var opresult1782 = callmethod(var_dir, "==", [1], string1779);
              if (Grace_isTrue(opresult1782)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1783 = callmethod(this, "angle", [0]);
                var diff1786 = callmethod(new GraceNum(360), "-", [1], call1783);
                onSelf = true;
                var call1787 = callmethod(this, "angle:=", [1], diff1786);
                if1778 = call1787;
              }
              lineNumber = 152
              var if1788 = var_done;
              lineNumber = 149
              var string1789 = new GraceString("top");
              var opresult1792 = callmethod(var_dir, "==", [1], string1789);
              if (Grace_isTrue(opresult1792)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1793 = callmethod(this, "angle", [0]);
                var diff1796 = callmethod(new GraceNum(180), "-", [1], call1793);
                onSelf = true;
                var call1797 = callmethod(this, "angle:=", [1], diff1796);
                if1788 = call1797;
              }
              lineNumber = 155
              var if1798 = var_done;
              lineNumber = 152
              var string1799 = new GraceString("bottom");
              var opresult1802 = callmethod(var_dir, "==", [1], string1799);
              if (Grace_isTrue(opresult1802)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1803 = callmethod(this, "angle", [0]);
                var diff1806 = callmethod(new GraceNum(180), "-", [1], call1803);
                onSelf = true;
                var call1807 = callmethod(this, "angle:=", [1], diff1806);
                if1798 = call1807;
              }
              lineNumber = 155
              onSelf = true;
              var call1808 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1809 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1809
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1767.paramCounts = [
            1,
          ];
          func1767.variableArities = [
            false,
          ];
          obj1618.methods["bounceFrom"] = func1767;
          func1767.definitionLine = 142;
          func1767.definitionModule = "musical";
          var func1810 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1810.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1811 = var_done;
              lineNumber = 159
              var call1812 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1814 = callmethod(this, "x", [0]);
              var opresult1816 = callmethod(call1814, ">", [1], call1812);
              if (Grace_isTrue(opresult1816)) {
                lineNumber = 160
                onSelf = true;
                var call1817 = callmethod(this, "bounceFrom", [1], var_left);
                if1811 = call1817;
              }
              lineNumber = 165
              var if1818 = var_done;
              lineNumber = 162
              var call1819 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1821 = callmethod(this, "x", [0]);
              var opresult1823 = callmethod(call1821, "<", [1], call1819);
              if (Grace_isTrue(opresult1823)) {
                lineNumber = 163
                onSelf = true;
                var call1824 = callmethod(this, "bounceFrom", [1], var_right);
                if1818 = call1824;
              }
              lineNumber = 165
              var block1825 = Grace_allocObject();
              block1825.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1825.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1825.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1825.methods["match"] = GraceBlock_match;
              block1825.methods["prefix?"] = GraceBlock_lift;
              block1825.receiver = this;
              block1825.className = 'block<musical:165>';
              block1825.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1826 = callmethod(this, "touching", [1], var_other);
                return call1826;
              };
              lineNumber = 168
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
              block1827.className = 'block<musical:168>';
              block1827.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1828 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1828;
              };
              var call1829 = callmethod(Grace_prelude,"while()do", [1, 1], block1825, block1827);
              return call1829
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1810.paramCounts = [
            1,
          ];
          func1810.variableArities = [
            false,
          ];
          obj1618.methods["bounceOff"] = func1810;
          func1810.definitionLine = 158;
          func1810.definitionModule = "musical";
          var func1830 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1830.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1831 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1832 = callmethod(this, "y", [0]);
              var call1833 = callmethod(var_point,"x()y", [1, 1], call1831, call1832);
              var call1834 = callmethod(var_other,"isPointOver", [1], call1833);
              return call1834
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1830.paramCounts = [
            1,
          ];
          func1830.variableArities = [
            false,
          ];
          obj1618.methods["touching"] = func1830;
          func1830.definitionLine = 169;
          func1830.definitionModule = "musical";
          var func1835 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1835.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1836 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1837 = callmethod(this, "y", [0]);
              var call1839 = callmethod(var_other,"y", [0]);
              var opresult1841 = callmethod(call1839, "!=", [1], call1837);
              onSelf = true;
              var call1843 = callmethod(this, "x", [0]);
              var call1845 = callmethod(var_other,"x", [0]);
              var opresult1847 = callmethod(call1845, "!=", [1], call1843);
              var opresult1849 = callmethod(opresult1847, "||", [1], opresult1841);
              if (Grace_isTrue(opresult1849)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1852 = callmethod(this, "x", [0]);
                var call1854 = callmethod(var_other,"x", [0]);
                var diff1856 = callmethod(call1854, "-", [1], call1852);
                onSelf = true;
                var call1857 = callmethod(this, "y", [0]);
                var call1859 = callmethod(var_other,"y", [0]);
                var diff1861 = callmethod(call1859, "-", [1], call1857);
                var call1862 = callmethod(var_trig,"atan2", [2], diff1856, diff1861);
                var prod1864 = callmethod(call1862, "*", [1], new GraceNum(180));
                var quotient1866 = callmethod(prod1864, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1867 = callmethod(this, "angle:=", [1], quotient1866);
                if1836 = call1867;
              }
              lineNumber = 176
              onSelf = true;
              var call1868 = callmethod(this, "normaliseAngle", [0]);
              return call1868
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1835.paramCounts = [
            1,
          ];
          func1835.variableArities = [
            false,
          ];
          obj1618.methods["face"] = func1835;
          func1835.definitionLine = 172;
          func1835.definitionModule = "musical";
          var func1869 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1869.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1870 = new GraceString("2d");
              var call1871 = callmethod(var_backingCanvas,"getContext", [1], string1870);
              onSelf = true;
              var call1872 = callmethod(this, "draw", [1], call1871);
              return call1872
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1869.paramCounts = [
            0,
          ];
          func1869.variableArities = [
            false,
          ];
          obj1618.methods["stamp"] = func1869;
          func1869.definitionLine = 178;
          func1869.definitionModule = "musical";
          sourceObject = obj1618;
          lineNumber = 49
          var call1873 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1874 = callmethod(call1873, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1875 = callmethod(call1874, "initialise", [0]);
          sourceObject = obj1618;
          lineNumber = 50
          var call1876 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1618;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1618;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1618;
          lineNumber = 53
          var call1877 = callmethod(var_collections,"list", [0]);
          var call1878 = callmethod(call1877,"new", [0]);
          obj1618.data["alwaysBlocks"] = call1878;
          var reader_musical_alwaysBlocks_1879 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1879.def = true;
          reader_musical_alwaysBlocks_1879.confidential = true;
          obj1618.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1879;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1878)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1618;
          lineNumber = 55
          lineNumber = 54
          var quotient1882 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1618.data["x"] = quotient1882;
          var reader_musical_x_1883 = function() {
            return this.data["x"];
          }
          obj1618.methods["x"] = reader_musical_x_1883;
          obj1618.data["x"] = quotient1882;
          var writer_musical_x_1883 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1618.methods["x:="] = writer_musical_x_1883;
          writer_musical_x_1883.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1882)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1618.mutable = true;
          sourceObject = obj1618;
          lineNumber = 56
          lineNumber = 55
          var quotient1886 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1618.data["y"] = quotient1886;
          var reader_musical_y_1887 = function() {
            return this.data["y"];
          }
          obj1618.methods["y"] = reader_musical_y_1887;
          obj1618.data["y"] = quotient1886;
          var writer_musical_y_1887 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1618.methods["y:="] = writer_musical_y_1887;
          writer_musical_y_1887.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1886)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1618.mutable = true;
          sourceObject = obj1618;
          lineNumber = 56
          onSelf = true;
          var call1888 = callmethod(this, "x", [0]);
          obj1618.data["destX"] = call1888;
          var reader_musical_destX_1889 = function() {
            return this.data["destX"];
          }
          obj1618.methods["destX"] = reader_musical_destX_1889;
          obj1618.data["destX"] = call1888;
          var writer_musical_destX_1889 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1618.methods["destX:="] = writer_musical_destX_1889;
          reader_musical_destX_1889.confidential = true;
          writer_musical_destX_1889.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1888)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1618.mutable = true;
          sourceObject = obj1618;
          lineNumber = 57
          onSelf = true;
          var call1890 = callmethod(this, "y", [0]);
          obj1618.data["destY"] = call1890;
          var reader_musical_destY_1891 = function() {
            return this.data["destY"];
          }
          obj1618.methods["destY"] = reader_musical_destY_1891;
          obj1618.data["destY"] = call1890;
          var writer_musical_destY_1891 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1618.methods["destY:="] = writer_musical_destY_1891;
          reader_musical_destY_1891.confidential = true;
          writer_musical_destY_1891.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1890)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1618.mutable = true;
          sourceObject = obj1618;
          lineNumber = 58
          obj1618.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1892 = function() {
            return this.data["angle"];
          }
          obj1618.methods["angle"] = reader_musical_angle_1892;
          obj1618.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1892 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1618.methods["angle:="] = writer_musical_angle_1892;
          reader_musical_angle_1892.confidential = true;
          writer_musical_angle_1892.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1618.mutable = true;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          sourceObject = obj1618;
          superDepth = origSuperDepth;
        }
        obj_init_1618.apply(inheritingObject, []);
        return obj1618
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1339.methods["new()object"] = func1617;
    var func1893 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1894 = new GraceString("class drawable");
        return string1894
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1893.paramCounts = [
    ];
    func1893.variableArities = [
    ];
    obj1339.methods["asDebugString"] = func1893;
    func1893.definitionLine = 48;
    func1893.definitionModule = "musical";
    sourceObject = obj1339;
    sourceObject = obj1339;
    superDepth = origSuperDepth;
  }
  obj_init_1339.apply(obj1339, []);
  var var_drawable = obj1339;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1895 = Grace_allocObject();
  obj1895.definitionModule = "musical";
  obj1895.definitionLine = 316;
  obj1895.outer = this;
  var reader_musical_outer_1896 = function() {
    return this.outer;
  }
  obj1895.methods["outer"] = reader_musical_outer_1896;
  function obj_init_1895() {
    var origSuperDepth = superDepth;
    superDepth = obj1895;
    obj1895.annotations = [];
    var func1897 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1897.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1898 = callmethod(this, "position", [0]);
        var call1899 = callmethod(call1898,"x", [0]);
        return call1899
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1897.paramCounts = [
      0,
    ];
    func1897.variableArities = [
      false,
    ];
    obj1895.methods["x"] = func1897;
    func1897.definitionLine = 318;
    func1897.definitionModule = "musical";
    var func1900 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1900.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1901 = callmethod(this, "position", [0]);
        var call1902 = callmethod(call1901,"y", [0]);
        return call1902
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1900.paramCounts = [
      0,
    ];
    func1900.variableArities = [
      false,
    ];
    obj1895.methods["y"] = func1900;
    func1900.definitionLine = 321;
    func1900.definitionModule = "musical";
    var func1903 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1903.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1904 = callmethod(this, "position", [0]);
        return call1904
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1903.paramCounts = [
      0,
    ];
    func1903.variableArities = [
      false,
    ];
    obj1895.methods["location"] = func1903;
    func1903.definitionLine = 324;
    func1903.definitionModule = "musical";
    sourceObject = obj1895;
    lineNumber = 317
    var call1905 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1895.data["position"] = call1905;
    var reader_musical_position_1906 = function() {
      return this.data["position"];
    }
    obj1895.methods["position"] = reader_musical_position_1906;
    obj1895.data["position"] = call1905;
    var writer_musical_position_1906 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1895.methods["position:="] = writer_musical_position_1906;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1905)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1895.mutable = true;
    sourceObject = obj1895;
    sourceObject = obj1895;
    sourceObject = obj1895;
    superDepth = origSuperDepth;
  }
  obj_init_1895.apply(obj1895, []);
  var var_mouse = obj1895;
  lineNumber = 322
  var func1907 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1907.paramCounts[0])
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
  func1907.paramCounts = [
    0,
  ];
  func1907.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1907;
  func1907.definitionLine = 322;
  func1907.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 409
  lineNumber = 472
  lineNumber = 514
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1908 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1908.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 514
      return var_octave
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1908.paramCounts = [
    0,
  ];
  func1908.variableArities = [
    false,
  ];
  this.methods["octave"] = func1908;
  func1908.definitionLine = 322;
  func1908.definitionModule = "musical";
  lineNumber = 322
  var func1909 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1909.paramCounts[0])
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
  func1909.paramCounts = [
    1,
  ];
  func1909.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1909;
  func1909.definitionLine = 322;
  func1909.definitionModule = "musical";
  lineNumber = 514;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 515
  var string1910 = new GraceString("4n");
  var var_timing = string1910;
  lineNumber = 322
  var func1911 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1911.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (timing)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 515
      return var_timing
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
  this.methods["timing"] = func1911;
  func1911.definitionLine = 322;
  func1911.definitionModule = "musical";
  lineNumber = 322
  var func1912 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1912.paramCounts[0])
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
  func1912.paramCounts = [
    1,
  ];
  func1912.variableArities = [
    false,
  ];
  this.methods["timing:="] = func1912;
  func1912.definitionLine = 322;
  func1912.definitionModule = "musical";
  lineNumber = 515;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_timing)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'timing' to be of type Unknown"))
  lineNumber = 516
  var call1913 = callmethod(new GraceNum(25),"prefix-", [0]);
  var var_volume = call1913;
  lineNumber = 322
  var func1914 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1914.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (volume)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 516
      return var_volume
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1914.paramCounts = [
    0,
  ];
  func1914.variableArities = [
    false,
  ];
  this.methods["volume"] = func1914;
  func1914.definitionLine = 322;
  func1914.definitionModule = "musical";
  lineNumber = 322
  var func1915 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1915.paramCounts[0])
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
  func1915.paramCounts = [
    1,
  ];
  func1915.variableArities = [
    false,
  ];
  this.methods["volume:="] = func1915;
  func1915.definitionLine = 322;
  func1915.definitionModule = "musical";
  lineNumber = 516;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_volume)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'volume' to be of type Unknown"))
  lineNumber = 517
  var var_playbackrate = new GraceNum(1);
  lineNumber = 322
  var func1916 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1916.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playbackrate)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 517
      return var_playbackrate
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1916.paramCounts = [
    0,
  ];
  func1916.variableArities = [
    false,
  ];
  this.methods["playbackrate"] = func1916;
  func1916.definitionLine = 322;
  func1916.definitionModule = "musical";
  lineNumber = 322
  var func1917 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1917.paramCounts[0])
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
  func1917.paramCounts = [
    1,
  ];
  func1917.variableArities = [
    false,
  ];
  this.methods["playbackrate:="] = func1917;
  func1917.definitionLine = 322;
  func1917.definitionModule = "musical";
  lineNumber = 517;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_playbackrate)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'playbackrate' to be of type Unknown"))
  lineNumber = 519
  lineNumber = 520
  lineNumber = 519
  var bool1918 = new GraceBoolean(false)
  var var_applyFlat = bool1918;
  lineNumber = 322
  var func1919 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1919.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 519
      return var_applyFlat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1919.paramCounts = [
    0,
  ];
  func1919.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1919;
  func1919.definitionLine = 322;
  func1919.definitionModule = "musical";
  lineNumber = 322
  var func1920 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1920.paramCounts[0])
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
  func1920.paramCounts = [
    1,
  ];
  func1920.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1920;
  func1920.definitionLine = 322;
  func1920.definitionModule = "musical";
  lineNumber = 520;
  moduleName = "musical";
  lineNumber = 519
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 522
  lineNumber = 520
  var bool1921 = new GraceBoolean(false)
  var var_applySharp = bool1921;
  lineNumber = 322
  var func1922 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1922.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 520
      return var_applySharp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1922.paramCounts = [
    0,
  ];
  func1922.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1922;
  func1922.definitionLine = 322;
  func1922.definitionModule = "musical";
  lineNumber = 322
  var func1923 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1923.paramCounts[0])
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
  func1923.paramCounts = [
    1,
  ];
  func1923.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1923;
  func1923.definitionLine = 322;
  func1923.definitionModule = "musical";
  lineNumber = 522;
  moduleName = "musical";
  lineNumber = 520
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 522
  lineNumber = 523
  lineNumber = 522
  var bool1924 = new GraceBoolean(false)
  var var_applyChorus = bool1924;
  lineNumber = 322
  var func1925 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1925.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 522
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1925.paramCounts = [
    0,
  ];
  func1925.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1925;
  func1925.definitionLine = 322;
  func1925.definitionModule = "musical";
  lineNumber = 322
  var func1926 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1926.paramCounts[0])
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
  func1926.paramCounts = [
    1,
  ];
  func1926.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1926;
  func1926.definitionLine = 322;
  func1926.definitionModule = "musical";
  lineNumber = 523;
  moduleName = "musical";
  lineNumber = 522
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 524
  lineNumber = 523
  var bool1927 = new GraceBoolean(false)
  var var_applyReverb = bool1927;
  lineNumber = 322
  var func1928 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1928.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 523
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1928.paramCounts = [
    0,
  ];
  func1928.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1928;
  func1928.definitionLine = 322;
  func1928.definitionModule = "musical";
  lineNumber = 322
  var func1929 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1929.paramCounts[0])
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
  func1929.paramCounts = [
    1,
  ];
  func1929.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1929;
  func1929.definitionLine = 322;
  func1929.definitionModule = "musical";
  lineNumber = 524;
  moduleName = "musical";
  lineNumber = 523
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 525
  lineNumber = 524
  var bool1930 = new GraceBoolean(false)
  var var_applyAutowah = bool1930;
  lineNumber = 322
  var func1931 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1931.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 524
      return var_applyAutowah
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1931.paramCounts = [
    0,
  ];
  func1931.variableArities = [
    false,
  ];
  this.methods["applyAutowah"] = func1931;
  func1931.definitionLine = 322;
  func1931.definitionModule = "musical";
  lineNumber = 322
  var func1932 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1932.paramCounts[0])
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
  func1932.paramCounts = [
    1,
  ];
  func1932.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1932;
  func1932.definitionLine = 322;
  func1932.definitionModule = "musical";
  lineNumber = 525;
  moduleName = "musical";
  lineNumber = 524
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 527
  lineNumber = 525
  var bool1933 = new GraceBoolean(false)
  var var_applyCheby = bool1933;
  lineNumber = 322
  var func1934 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1934.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 525
      return var_applyCheby
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1934.paramCounts = [
    0,
  ];
  func1934.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1934;
  func1934.definitionLine = 322;
  func1934.definitionModule = "musical";
  lineNumber = 322
  var func1935 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1935.paramCounts[0])
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
  func1935.paramCounts = [
    1,
  ];
  func1935.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1935;
  func1935.definitionLine = 322;
  func1935.definitionModule = "musical";
  lineNumber = 527;
  moduleName = "musical";
  lineNumber = 525
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 527
  lineNumber = 532
  lineNumber = 527
  var bool1936 = new GraceBoolean(true)
  var var_firstPass = bool1936;
  lineNumber = 322
  var func1937 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1937.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 527
      return var_firstPass
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1937.paramCounts = [
    0,
  ];
  func1937.variableArities = [
    false,
  ];
  this.methods["firstPass"] = func1937;
  func1937.definitionLine = 322;
  func1937.definitionModule = "musical";
  lineNumber = 322
  var func1938 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1938.paramCounts[0])
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
  func1938.paramCounts = [
    1,
  ];
  func1938.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1938;
  func1938.definitionLine = 322;
  func1938.definitionModule = "musical";
  lineNumber = 532;
  moduleName = "musical";
  lineNumber = 527
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 532
  lineNumber = 566
  lineNumber = 577
  lineNumber = 584
  lineNumber = 595
  lineNumber = 604
  lineNumber = 609
  lineNumber = 614
  lineNumber = 619
  lineNumber = 624
  lineNumber = 629
  lineNumber = 634
  lineNumber = 645
  lineNumber = 662
  lineNumber = 668
  lineNumber = 674
  lineNumber = 680
  lineNumber = 688
  lineNumber = 692
  lineNumber = 703
  lineNumber = 711
  lineNumber = 715
  lineNumber = 719
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "constructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n timing\n timing:=\n volume\n volume:=\n playbackrate\n playbackrate:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n Rest\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\n PlayBackRatePercentage()on\n Time()on\n quarter\n eighth\n sixteenth\n VolumePercentage()on\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:circle:\n bounceOff\n radius:=\n destY:=\n y:=\n destX\n destY\n face\n touchingEdge\n bounce\n mousedown\n step\n whenever()do\n colour:=\n moveTo\n destX:=\n x:=\n radius\n bounceFrom\n always\n jumpTo\n forward\n x\n y\n angle:=\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\nfresh:rectangle:\n bounceOff\n destY:=\n y:=\n destX\n destY\n face\n touchingEdge\n width:=\n bounce\n mousedown\n step\n whenever()do\n colour:=\n height:=\n height\n moveTo\n destX:=\n x:=\n bounceFrom\n always\n jumpTo\n forward\n asString\n x\n y\n angle:=\n width\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\nmethods-of:point.x()y:\n x\n y\n left\n down\n right\n up\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n bounceOff\n destY:=\n y:=\n destX\n destY\n face\n touchingEdge\n label:=\n bounce\n mousedown\n step\n whenever()do\n colour:=\n moveTo\n destX:=\n x:=\n bounceFrom\n always\n jumpTo\n forward\n x\n y\n angle:=\n label\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\nconfidential:\nconstructors-of:point:\n x()y\nmethods-of:drawable.new:\n bounceOff\n touching\n moveTo\n destX:=\n destY:=\n face\n bounce\n destX\n destY\n x:=\n y:=\n always\n jumpTo\n forward\n touchingEdge\n x\n y\n step\n angle:=\n mousedown\n isPointOver\n bounceFrom\n stamp\n angle\n whenever()do\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\nfresh:image:\n bounceOff\n destY:=\n y:=\n destX\n destY\n face\n touchingEdge\n width:=\n bounce\n imgTag\n mousedown\n step\n whenever()do\n url:=\n height:=\n url\n height\n moveTo\n destX:=\n x:=\n bounceFrom\n always\n jumpTo\n forward\n x\n y\n angle:=\n width\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n";
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
    "    // dom.window.console.log(\"moduleend\")",
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
    "//  - Stretch Goal: Being able to run individual components",
    "//  - is there a way to get access to data-serialiser-index, this would allow highlighting individual notes",
    "",
    "//DONE: ",
    "//  - rests: this can be accopmlished with null",
    "//  - live editing: adding in and changes happen in realtime if compiler",
    "//  - on delete, don't start playing if not already playing",
    "//  - dialects, checker see if we can check blocks, type checking, in dialect.js",
    "//  - volume/timing",
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
    "var volume := -25;",
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
    "    ",
    "    //constrain max volume",
    "    if(v > 100) then {",
    "        //max volume: 0dB",
    "        volume := 0 ",
    "    } else {",
    "        //constrain dB between -50 and 0",
    "        volume := -80 + (v/100)*50        ",
    "    }",
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
