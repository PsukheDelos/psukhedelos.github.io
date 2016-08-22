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
        lineNumber = 394
        onSelf = true;
        var call892 = callmethod(this, "stop", [0]);
        lineNumber = 396
        var call893 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call893;
        lineNumber = 396;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 397
        lineNumber = 403
        var block894 = Grace_allocObject();
        block894.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block894.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block894.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block894.methods["match"] = GraceBlock_match;
        block894.methods["prefix?"] = GraceBlock_lift;
        block894.receiver = this;
        block894.className = 'block<musical:403>';
        block894.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 402
          var if895 = var_done;
          lineNumber = 398
          var call896 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call896)) {
            lineNumber = 399
            var call897 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 400
            var call898 = callmethod(var_ev,"preventDefault", [0]);
            if895 = call898;
          }
          return if895;
        };
        var call899 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block894);
        return call899;
      };
      var_mouseDownListener = block866;
      lineNumber = 404
      var string900 = new GraceString("mousedown");
      var call901 = callmethod(var_canvas,"addEventListener", [2], string900, var_mouseDownListener);
      return call901
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
  var func902 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func902.paramCounts[0])
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
  func902.paramCounts = [
    1,
  ];
  func902.variableArities = [
    false,
  ];
  this.methods["background"] = func902;
  func902.definitionLine = 406;
  func902.definitionModule = "musical";
  lineNumber = 409
  var func903 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func903.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 410
      var call904 = callmethod(var_randomModule,"random", [0]);
      var prod907 = callmethod(var_n, "*", [1], call904);
      var call908 = callmethod(prod907,"truncate", [0]);
      return call908
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func903.paramCounts = [
    1,
  ];
  func903.variableArities = [
    false,
  ];
  this.methods["random"] = func903;
  func903.definitionLine = 409;
  func903.definitionModule = "musical";
  lineNumber = 413
  var func909 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func909.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 425
      var if910 = var_done;
      lineNumber = 414
      var call911 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call911)) {
        lineNumber = 415
        var call912 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call912;
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
        var call913 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 417
        var call914 = callmethod(var_audio,"play", [0]);
        if910 = call914;
      } else {
        lineNumber = 419
        var string915 = new GraceString("audio");
        var call916 = callmethod(var_dom,"document", [0]);
        var call917 = callmethod(call916,"createElement", [1], string915);
        var var_audio = call917;
        lineNumber = 419;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 420
        var call918 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 422
        lineNumber = 419
        lineNumber = 421
        var call919 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 422
        var call920 = callmethod(var_audio,"load", [0]);
        lineNumber = 423
        var call921 = callmethod(var_audio,"play", [0]);
        if910 = call921;
      }
      return if910
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func909.paramCounts = [
    1,
  ];
  func909.variableArities = [
    false,
  ];
  this.methods["playSound"] = func909;
  func909.definitionLine = 413;
  func909.definitionModule = "musical";
  lineNumber = 426
  var func922 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func922.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 431
      var if923 = var_done;
      lineNumber = 427
      var call924 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call924)) {
        lineNumber = 428
        var call925 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call925;
        lineNumber = 428;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 429
        var call926 = callmethod(var_audio,"pause", [0]);
        if923 = call926;
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
  this.methods["stopSound"] = func922;
  func922.definitionLine = 426;
  func922.definitionModule = "musical";
  lineNumber = 432
  var func927 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func927.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 433
      onSelf = true;
      var call928 = callmethod(this, "initialise", [0]);
      lineNumber = 438
      lineNumber = 437
      var bool929 = new GraceBoolean(false)
      var_stopRunning = bool929;
      lineNumber = 438
      var string930 = new GraceString("canvas");
      var call931 = callmethod(var_dom,"document", [0]);
      var call932 = callmethod(call931,"createElement", [1], string930);
      var_backingCanvas = call932;
      lineNumber = 440
      lineNumber = 438
      lineNumber = 439
      var call933 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 441
      lineNumber = 438
      lineNumber = 440
      var call934 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 441
      var string935 = new GraceString("2d");
      var call936 = callmethod(var_backingCanvas,"getContext", [1], string935);
      var_backingContext = call936;
      lineNumber = 442
      var string937 = new GraceString("2d");
      var call938 = callmethod(var_canvas,"getContext", [1], string937);
      var var_mctx = call938;
      lineNumber = 442;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 443
      var block939 = Grace_allocObject();
      block939.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block939.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block939.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block939.methods["match"] = GraceBlock_match;
      block939.methods["prefix?"] = GraceBlock_lift;
      block939.receiver = this;
      block939.className = 'block<musical:443>';
      block939.real = function(
      ) {
        sourceObject = this;
        var call940 = callmethod(var_stopRunning,"prefix!", [0]);
        return call940;
      };
      lineNumber = 459
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
      block941.className = 'block<musical:459>';
      block941.real = function(
      ) {
        sourceObject = this;
        lineNumber = 444
        lineNumber = 447
        var block942 = Grace_allocObject();
        block942.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block942.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block942.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block942.methods["match"] = GraceBlock_match;
        block942.methods["prefix?"] = GraceBlock_lift;
        block942.receiver = this;
        block942.className = 'block<musical:447>';
        block942.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 445
          var call943 = callmethod(var_obj,"step", [0]);
          return call943;
        };
        var call944 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block942);
        lineNumber = 447
        lineNumber = 450
        var block945 = Grace_allocObject();
        block945.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block945.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block945.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block945.methods["match"] = GraceBlock_match;
        block945.methods["prefix?"] = GraceBlock_lift;
        block945.receiver = this;
        block945.className = 'block<musical:450>';
        block945.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 448
          var call946 = callmethod(var_step,"apply", [0]);
          return call946;
        };
        var call947 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block945);
        lineNumber = 451
        lineNumber = 448
        lineNumber = 450
        var call948 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 451
        var call949 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 452
        var call950 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 453
        lineNumber = 456
        var block951 = Grace_allocObject();
        block951.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block951.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block951.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block951.methods["match"] = GraceBlock_match;
        block951.methods["prefix?"] = GraceBlock_lift;
        block951.receiver = this;
        block951.className = 'block<musical:456>';
        block951.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 454
          var call952 = callmethod(var_obj,"draw", [1], var_mctx);
          return call952;
        };
        var call953 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block951);
        lineNumber = 457
        lineNumber = 448
        lineNumber = 456
        var string954 = new GraceString("red");
        var call955 = callmethod(var_mctx,"fillStyle:=", [1], string954);
        lineNumber = 457
        var quotient958 = callmethod(var_canvasWidth, "/", [1], new GraceNum(4));
        var quotient961 = callmethod(var_canvasHeight, "/", [1], new GraceNum(4));
        var quotient964 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
        var quotient967 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
        var call968 = callmethod(var_mctx,"fillRect", [4], quotient958, quotient961, quotient964, quotient967);
        return call968;
      };
      lineNumber = 443
      var call969 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block939, new GraceNum(10), block941);
      lineNumber = 460
      lineNumber = 448
      lineNumber = 459
      var string970 = new GraceString("green");
      var call971 = callmethod(var_mctx,"fillStyle:=", [1], string970);
      lineNumber = 460
      var quotient974 = callmethod(var_canvasWidth, "/", [1], new GraceNum(4));
      var quotient977 = callmethod(var_canvasHeight, "/", [1], new GraceNum(4));
      var quotient980 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient983 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call984 = callmethod(var_mctx,"fillRect", [4], quotient974, quotient977, quotient980, quotient983);
      return call984
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func927.paramCounts = [
    0,
  ];
  func927.variableArities = [
    false,
  ];
  this.methods["start"] = func927;
  func927.definitionLine = 432;
  func927.definitionModule = "musical";
  lineNumber = 463
  var func985 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func985.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 465
      lineNumber = 464
      var bool986 = new GraceBoolean(true)
      var_stopRunning = bool986;
      lineNumber = 465
      var string987 = new GraceString("mousedown");
      var call988 = callmethod(var_canvas,"removeEventListener", [2], string987, var_mouseDownListener);
      lineNumber = 466
      var string989 = new GraceString("mousemove");
      var call990 = callmethod(var_canvas,"removeEventListener", [2], string989, var_mouseMoveListener);
      lineNumber = 468
      var call991 = callmethod(var_dom,"window", [0]);
      var call992 = callmethod(call991,"t_stop", [0]);
      lineNumber = 469
      var call993 = callmethod(var_dom,"window", [0]);
      var call994 = callmethod(call993,"t_reset", [0]);
      return call994
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func985.paramCounts = [
    0,
  ];
  func985.variableArities = [
    false,
  ];
  this.methods["stop"] = func985;
  func985.definitionLine = 463;
  func985.definitionModule = "musical";
  lineNumber = 471
  var func995 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func995.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 472
      onSelf = true;
      var call996 = callmethod(this, "start", [0]);
      lineNumber = 474
      var call997 = callmethod(var_dom,"window", [0]);
      var call998 = callmethod(call997,"t_play", [0]);
      return call998
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
  this.methods["atModuleEnd"] = func995;
  func995.definitionLine = 471;
  func995.definitionModule = "musical";
  lineNumber = 519
  var func999 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func999.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 524
      var if1000 = var_done;
      lineNumber = 520
      var bool1001 = new GraceBoolean(true)
      var opresult1004 = callmethod(var_applyFlat, "==", [1], bool1001);
      if (Grace_isTrue(opresult1004)) {
        lineNumber = 521
        var string1005 = new GraceString("");
        var string1008 = new GraceString("b");
        var string1011 = new GraceString("");
        var opresult1013 = callmethod(string1011, "++", [1], var_note);
        var opresult1015 = callmethod(opresult1013, "++", [1], string1008);
        var opresult1017 = callmethod(opresult1015, "++", [1], var_octave);
        var opresult1019 = callmethod(opresult1017, "++", [1], string1005);
        var call1020 = callmethod(var_dom,"window", [0]);
        var call1021 = callmethod(call1020,"t_add", [1], opresult1019);
        lineNumber = 523
        lineNumber = 522
        var string1022 = new GraceString("b");
        var string1025 = new GraceString("");
        var opresult1027 = callmethod(string1025, "++", [1], var_note);
        var opresult1029 = callmethod(opresult1027, "++", [1], string1022);
        return opresult1029
      }
      lineNumber = 528
      var if1030 = var_done;
      lineNumber = 524
      var bool1031 = new GraceBoolean(true)
      var opresult1034 = callmethod(var_applySharp, "==", [1], bool1031);
      if (Grace_isTrue(opresult1034)) {
        lineNumber = 525
        var string1035 = new GraceString("");
        var string1038 = new GraceString("#");
        var string1041 = new GraceString("");
        var opresult1043 = callmethod(string1041, "++", [1], var_note);
        var opresult1045 = callmethod(opresult1043, "++", [1], string1038);
        var opresult1047 = callmethod(opresult1045, "++", [1], var_octave);
        var opresult1049 = callmethod(opresult1047, "++", [1], string1035);
        var call1050 = callmethod(var_dom,"window", [0]);
        var call1051 = callmethod(call1050,"t_add", [1], opresult1049);
        lineNumber = 527
        lineNumber = 526
        var string1052 = new GraceString("#");
        var string1055 = new GraceString("");
        var opresult1057 = callmethod(string1055, "++", [1], var_note);
        var opresult1059 = callmethod(opresult1057, "++", [1], string1052);
        return opresult1059
      }
      lineNumber = 528
      var string1060 = new GraceString("");
      var string1063 = new GraceString("");
      var string1066 = new GraceString("");
      var opresult1068 = callmethod(string1066, "++", [1], var_note);
      var opresult1070 = callmethod(opresult1068, "++", [1], string1063);
      var opresult1072 = callmethod(opresult1070, "++", [1], var_octave);
      var opresult1074 = callmethod(opresult1072, "++", [1], string1060);
      var call1075 = callmethod(var_dom,"window", [0]);
      var call1076 = callmethod(call1075,"t_add", [1], opresult1074);
      lineNumber = 530
      lineNumber = 529
      var string1077 = new GraceString("");
      var string1080 = new GraceString("");
      var opresult1082 = callmethod(string1080, "++", [1], var_note);
      var opresult1084 = callmethod(opresult1082, "++", [1], string1077);
      return opresult1084
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
  this.methods["Note"] = func999;
  func999.definitionLine = 519;
  func999.definitionModule = "musical";
  lineNumber = 532
  var func1085 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1085.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 533
      var string1086 = new GraceString("C");
      onSelf = true;
      var call1087 = callmethod(this, "Note", [1], string1086);
      return call1087
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1085.paramCounts = [
    0,
  ];
  func1085.variableArities = [
    false,
  ];
  this.methods["C"] = func1085;
  func1085.definitionLine = 532;
  func1085.definitionModule = "musical";
  lineNumber = 535
  var func1088 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1088.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 536
      var string1089 = new GraceString("D");
      onSelf = true;
      var call1090 = callmethod(this, "Note", [1], string1089);
      return call1090
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1088.paramCounts = [
    0,
  ];
  func1088.variableArities = [
    false,
  ];
  this.methods["D"] = func1088;
  func1088.definitionLine = 535;
  func1088.definitionModule = "musical";
  lineNumber = 538
  var func1091 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1091.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 539
      var string1092 = new GraceString("E");
      onSelf = true;
      var call1093 = callmethod(this, "Note", [1], string1092);
      return call1093
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1091.paramCounts = [
    0,
  ];
  func1091.variableArities = [
    false,
  ];
  this.methods["E"] = func1091;
  func1091.definitionLine = 538;
  func1091.definitionModule = "musical";
  lineNumber = 541
  var func1094 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1094.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 542
      var string1095 = new GraceString("F");
      onSelf = true;
      var call1096 = callmethod(this, "Note", [1], string1095);
      return call1096
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1094.paramCounts = [
    0,
  ];
  func1094.variableArities = [
    false,
  ];
  this.methods["F"] = func1094;
  func1094.definitionLine = 541;
  func1094.definitionModule = "musical";
  lineNumber = 544
  var func1097 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1097.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 545
      var string1098 = new GraceString("G");
      onSelf = true;
      var call1099 = callmethod(this, "Note", [1], string1098);
      return call1099
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1097.paramCounts = [
    0,
  ];
  func1097.variableArities = [
    false,
  ];
  this.methods["G"] = func1097;
  func1097.definitionLine = 544;
  func1097.definitionModule = "musical";
  lineNumber = 547
  var func1100 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1100.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 548
      var string1101 = new GraceString("A");
      onSelf = true;
      var call1102 = callmethod(this, "Note", [1], string1101);
      return call1102
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1100.paramCounts = [
    0,
  ];
  func1100.variableArities = [
    false,
  ];
  this.methods["A"] = func1100;
  func1100.definitionLine = 547;
  func1100.definitionModule = "musical";
  lineNumber = 550
  var func1103 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1103.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 551
      var string1104 = new GraceString("B");
      onSelf = true;
      var call1105 = callmethod(this, "Note", [1], string1104);
      return call1105
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1103.paramCounts = [
    0,
  ];
  func1103.variableArities = [
    false,
  ];
  this.methods["B"] = func1103;
  func1103.definitionLine = 550;
  func1103.definitionModule = "musical";
  lineNumber = 554
  var func1106 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1106.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 556
      lineNumber = 555
      var bool1107 = new GraceBoolean(true)
      var_applyFlat = bool1107;
      lineNumber = 557
      lineNumber = 556
      var call1108 = callmethod(var_note,"apply", [0]);
      var var_ret = call1108;
      lineNumber = 557;
      moduleName = "musical";
      lineNumber = 556
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 558
      lineNumber = 557
      var bool1109 = new GraceBoolean(false)
      var_applyFlat = bool1109;
      lineNumber = 559
      lineNumber = 558
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1106.paramCounts = [
    1,
  ];
  func1106.variableArities = [
    false,
  ];
  this.methods["flat"] = func1106;
  func1106.definitionLine = 554;
  func1106.definitionModule = "musical";
  lineNumber = 560
  var func1110 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1110.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 562
      lineNumber = 561
      var bool1111 = new GraceBoolean(true)
      var_applySharp = bool1111;
      lineNumber = 563
      lineNumber = 562
      var call1112 = callmethod(var_note,"apply", [0]);
      var var_ret = call1112;
      lineNumber = 563;
      moduleName = "musical";
      lineNumber = 562
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 564
      lineNumber = 563
      var bool1113 = new GraceBoolean(false)
      var_applySharp = bool1113;
      lineNumber = 565
      lineNumber = 564
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1110.paramCounts = [
    1,
  ];
  func1110.variableArities = [
    false,
  ];
  this.methods["sharp"] = func1110;
  func1110.definitionLine = 560;
  func1110.definitionModule = "musical";
  lineNumber = 567
  var func1114 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1114.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1114.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 569
      lineNumber = 568
      var var_oldOctave = var_octave;
      lineNumber = 569;
      moduleName = "musical";
      lineNumber = 568
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 570
      lineNumber = 569
      var_octave = var_num;
      lineNumber = 571
      lineNumber = 570
      var call1115 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1115;
      lineNumber = 571;
      moduleName = "musical";
      lineNumber = 570
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 572
      lineNumber = 571
      var_octave = var_oldOctave;
      lineNumber = 573
      lineNumber = 572
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1114.paramCounts = [
    1,
    1,
  ];
  func1114.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1114;
  func1114.definitionLine = 567;
  func1114.definitionModule = "musical";
  lineNumber = 578
  var func1116 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1116.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 583
      var if1117 = var_done;
      lineNumber = 579
      var bool1118 = new GraceBoolean(true)
      var opresult1121 = callmethod(var_firstPass, "==", [1], bool1118);
      if (Grace_isTrue(opresult1121)) {
        lineNumber = 580
        var call1122 = callmethod(var_dom,"window", [0]);
        var call1123 = callmethod(call1122,"t_reset", [0]);
        lineNumber = 582
        lineNumber = 581
        var bool1124 = new GraceBoolean(false)
        var_firstPass = bool1124;
        if1117 = bool1124;
      }
      lineNumber = 583
      var call1125 = callmethod(var_dom,"window", [0]);
      var call1126 = callmethod(call1125,"t_init", [0]);
      lineNumber = 584
      var call1127 = callmethod(var_blocks,"apply", [0]);
      return call1127
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1116.paramCounts = [
    1,
  ];
  func1116.variableArities = [
    false,
  ];
  this.methods["Instrument"] = func1116;
  func1116.definitionLine = 578;
  func1116.definitionModule = "musical";
  lineNumber = 587
  var func1128 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1128.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 588
      onSelf = true;
      var call1129 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 589
      var call1130 = callmethod(var_dom,"window", [0]);
      var call1131 = callmethod(call1130,"t_synth_mono", [0]);
      return call1131
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1128.paramCounts = [
    1,
  ];
  func1128.variableArities = [
    false,
  ];
  this.methods["monoSynth"] = func1128;
  func1128.definitionLine = 587;
  func1128.definitionModule = "musical";
  lineNumber = 592
  var func1132 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1132.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 593
      onSelf = true;
      var call1133 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 594
      var call1134 = callmethod(var_dom,"window", [0]);
      var call1135 = callmethod(call1134,"t_synth_pluck", [0]);
      return call1135
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
  this.methods["pluckSynth"] = func1132;
  func1132.definitionLine = 592;
  func1132.definitionModule = "musical";
  lineNumber = 597
  var func1136 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1136.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 598
      onSelf = true;
      var call1137 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 599
      var call1138 = callmethod(var_dom,"window", [0]);
      var call1139 = callmethod(call1138,"t_synth_poly", [0]);
      return call1139
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
  this.methods["polySynth"] = func1136;
  func1136.definitionLine = 597;
  func1136.definitionModule = "musical";
  lineNumber = 602
  var func1140 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1140.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 603
      onSelf = true;
      var call1141 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 604
      var call1142 = callmethod(var_dom,"window", [0]);
      var call1143 = callmethod(call1142,"t_synth_fm", [0]);
      return call1143
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1140.paramCounts = [
    1,
  ];
  func1140.variableArities = [
    false,
  ];
  this.methods["fmSynth"] = func1140;
  func1140.definitionLine = 602;
  func1140.definitionModule = "musical";
  lineNumber = 607
  var func1144 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1144.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 608
      onSelf = true;
      var call1145 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 609
      var call1146 = callmethod(var_dom,"window", [0]);
      var call1147 = callmethod(call1146,"t_synth_membrane", [0]);
      return call1147
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
  this.methods["membraneSynth"] = func1144;
  func1144.definitionLine = 607;
  func1144.definitionModule = "musical";
  lineNumber = 612
  var func1148 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1148.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 613
      onSelf = true;
      var call1149 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 614
      var call1150 = callmethod(var_dom,"window", [0]);
      var call1151 = callmethod(call1150,"t_synth_duo", [0]);
      return call1151
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
  this.methods["duoSynth"] = func1148;
  func1148.definitionLine = 612;
  func1148.definitionModule = "musical";
  lineNumber = 617
  var func1152 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1152.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (arpeggio)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 618
      var call1153 = callmethod(var_dom,"window", [0]);
      var call1154 = callmethod(call1153,"t_synth_arpeggio", [1], var_note);
      return call1154
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
  this.methods["arpeggio"] = func1152;
  func1152.definitionLine = 617;
  func1152.definitionModule = "musical";
  lineNumber = 624
  var func1155 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1155.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 628
      var if1156 = var_done;
      lineNumber = 625
      var bool1157 = new GraceBoolean(true)
      var opresult1160 = callmethod(var_applyChorus, "==", [1], bool1157);
      if (Grace_isTrue(opresult1160)) {
        lineNumber = 626
        var call1161 = callmethod(var_dom,"window", [0]);
        var call1162 = callmethod(call1161,"t_effect_chorus", [0]);
        if1156 = call1162;
      }
      lineNumber = 631
      var if1163 = var_done;
      lineNumber = 628
      var bool1164 = new GraceBoolean(true)
      var opresult1167 = callmethod(var_applyReverb, "==", [1], bool1164);
      if (Grace_isTrue(opresult1167)) {
        lineNumber = 629
        var call1168 = callmethod(var_dom,"window", [0]);
        var call1169 = callmethod(call1168,"t_effect_reverb", [0]);
        if1163 = call1169;
      }
      lineNumber = 634
      var if1170 = var_done;
      lineNumber = 631
      var bool1171 = new GraceBoolean(true)
      var opresult1174 = callmethod(var_applyAutowah, "==", [1], bool1171);
      if (Grace_isTrue(opresult1174)) {
        lineNumber = 632
        var call1175 = callmethod(var_dom,"window", [0]);
        var call1176 = callmethod(call1175,"t_effect_autowah", [0]);
        if1170 = call1176;
      }
      lineNumber = 637
      var if1177 = var_done;
      lineNumber = 634
      var bool1178 = new GraceBoolean(true)
      var opresult1181 = callmethod(var_applyCheby, "==", [1], bool1178);
      if (Grace_isTrue(opresult1181)) {
        lineNumber = 635
        var call1182 = callmethod(var_dom,"window", [0]);
        var call1183 = callmethod(call1182,"t_effect_cheby", [0]);
        if1177 = call1183;
      }
      lineNumber = 637
      var call1184 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 638
      var call1185 = callmethod(var_dom,"window", [0]);
      var call1186 = callmethod(call1185,"t_effect_reset", [0]);
      return call1186
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1155.paramCounts = [
    1,
  ];
  func1155.variableArities = [
    false,
  ];
  this.methods["Effect"] = func1155;
  func1155.definitionLine = 624;
  func1155.definitionModule = "musical";
  lineNumber = 641
  var func1187 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1187.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 643
      lineNumber = 642
      var bool1188 = new GraceBoolean(true)
      var_applyChorus = bool1188;
      lineNumber = 643
      onSelf = true;
      var call1189 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 645
      lineNumber = 644
      var bool1190 = new GraceBoolean(false)
      var_applyChorus = bool1190;
      return bool1190
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1187.paramCounts = [
    1,
  ];
  func1187.variableArities = [
    false,
  ];
  this.methods["Chorus"] = func1187;
  func1187.definitionLine = 641;
  func1187.definitionModule = "musical";
  lineNumber = 647
  var func1191 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1191.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 649
      lineNumber = 648
      var bool1192 = new GraceBoolean(true)
      var_applyReverb = bool1192;
      lineNumber = 649
      onSelf = true;
      var call1193 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 651
      lineNumber = 650
      var bool1194 = new GraceBoolean(false)
      var_applyReverb = bool1194;
      return bool1194
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1191.paramCounts = [
    1,
  ];
  func1191.variableArities = [
    false,
  ];
  this.methods["Reverb"] = func1191;
  func1191.definitionLine = 647;
  func1191.definitionModule = "musical";
  lineNumber = 653
  var func1195 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1195.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 655
      lineNumber = 654
      var bool1196 = new GraceBoolean(true)
      var_applyAutowah = bool1196;
      lineNumber = 655
      onSelf = true;
      var call1197 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 657
      lineNumber = 656
      var bool1198 = new GraceBoolean(false)
      var_applyAutowah = bool1198;
      return bool1198
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1195.paramCounts = [
    1,
  ];
  func1195.variableArities = [
    false,
  ];
  this.methods["Autowah"] = func1195;
  func1195.definitionLine = 653;
  func1195.definitionModule = "musical";
  lineNumber = 659
  var func1199 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1199.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 661
      lineNumber = 660
      var bool1200 = new GraceBoolean(true)
      var_applyCheby = bool1200;
      lineNumber = 661
      onSelf = true;
      var call1201 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 663
      lineNumber = 662
      var bool1202 = new GraceBoolean(false)
      var_applyCheby = bool1202;
      return bool1202
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1199.paramCounts = [
    1,
  ];
  func1199.variableArities = [
    false,
  ];
  this.methods["Cheby"] = func1199;
  func1199.definitionLine = 659;
  func1199.definitionModule = "musical";
  lineNumber = 667
  var func1203 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1203.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 668
      var call1204 = callmethod(var_dom,"window", [0]);
      var call1205 = callmethod(call1204,"t_bpm", [1], var_bpm);
      return call1205
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1203.paramCounts = [
    1,
  ];
  func1203.variableArities = [
    false,
  ];
  this.methods["SetBPM"] = func1203;
  func1203.definitionLine = 667;
  func1203.definitionModule = "musical";
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
  var call1206 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1206;
  this.data = call1206.data;
  this._value = call1206._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 668
  var func1207 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1207.paramCounts[0])
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
  func1207.paramCounts = [
    0,
  ];
  func1207.variableArities = [
    false,
  ];
  this.methods["document"] = func1207;
  func1207.definitionLine = 668;
  func1207.definitionModule = "musical";
  lineNumber = 668
  var func1208 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    1,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["document:="] = func1208;
  func1208.definitionLine = 668;
  func1208.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 668
  var func1209 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    0,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1209;
  func1209.definitionLine = 668;
  func1209.definitionModule = "musical";
  lineNumber = 668
  var func1210 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    1,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1210;
  func1210.definitionLine = 668;
  func1210.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 668
  var func1211 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1211.paramCounts[0])
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
  func1211.paramCounts = [
    0,
  ];
  func1211.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1211;
  func1211.definitionLine = 668;
  func1211.definitionModule = "musical";
  lineNumber = 668
  var func1212 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1212.paramCounts[0])
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
  func1212.paramCounts = [
    1,
  ];
  func1212.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1212;
  func1212.definitionLine = 668;
  func1212.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 668
  var func1213 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1213.paramCounts[0])
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
  func1213.paramCounts = [
    0,
  ];
  func1213.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1213;
  func1213.definitionLine = 668;
  func1213.definitionModule = "musical";
  lineNumber = 668
  var func1214 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1214.paramCounts[0])
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
  func1214.paramCounts = [
    1,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1214;
  func1214.definitionLine = 668;
  func1214.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 668
  var func1215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    0,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1215;
  func1215.definitionLine = 668;
  func1215.definitionModule = "musical";
  lineNumber = 668
  var func1216 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1216.paramCounts[0])
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
  func1216.paramCounts = [
    1,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1216;
  func1216.definitionLine = 668;
  func1216.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 668
  var func1217 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    0,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1217;
  func1217.definitionLine = 668;
  func1217.definitionModule = "musical";
  lineNumber = 668
  var func1218 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1218.paramCounts[0])
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
  func1218.paramCounts = [
    1,
  ];
  func1218.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1218;
  func1218.definitionLine = 668;
  func1218.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1219 = callmethod(var_dom,"window", [0]);
  var call1220 = callmethod(call1219,"Math", [0]);
  var var_trig = call1220;
  var func1221 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    0,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["trig"] = func1221;
  func1221.definitionLine = 15;
  func1221.definitionModule = "musical";
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
  var func1222 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1222.paramCounts[0])
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
  func1222.paramCounts = [
    0,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["PI"] = func1222;
  func1222.definitionLine = 15;
  func1222.definitionModule = "musical";
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
  var bool1223 = new GraceBoolean(false)
  var var_stopRunning = bool1223;
  lineNumber = 15
  var func1224 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1224.paramCounts[0])
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
  func1224.paramCounts = [
    0,
  ];
  func1224.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1224;
  func1224.definitionLine = 15;
  func1224.definitionModule = "musical";
  lineNumber = 15
  var func1225 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    1,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1225;
  func1225.definitionLine = 15;
  func1225.definitionModule = "musical";
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
  var bool1226 = new GraceBoolean(false)
  var var_initialised = bool1226;
  lineNumber = 15
  var func1227 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1227.paramCounts[0])
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
  func1227.paramCounts = [
    0,
  ];
  func1227.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1227;
  func1227.definitionLine = 15;
  func1227.definitionModule = "musical";
  lineNumber = 15
  var func1228 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    1,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1228;
  func1228.definitionLine = 15;
  func1228.definitionModule = "musical";
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
  var string1229 = new GraceString("white");
  var var_backgroundColour = string1229;
  lineNumber = 15
  var func1230 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1230.paramCounts[0])
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
  func1230.paramCounts = [
    0,
  ];
  func1230.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1230;
  func1230.definitionLine = 15;
  func1230.definitionModule = "musical";
  lineNumber = 15
  var func1231 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1231.paramCounts[0])
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
  func1231.paramCounts = [
    1,
  ];
  func1231.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1231;
  func1231.definitionLine = 15;
  func1231.definitionModule = "musical";
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
  var call1232 = callmethod(var_collections,"list", [0]);
  var call1233 = callmethod(call1232,"new", [0]);
  var var_registeredObjects = call1233;
  var func1234 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1234.paramCounts[0])
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
  func1234.paramCounts = [
    0,
  ];
  func1234.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1234;
  func1234.definitionLine = 21;
  func1234.definitionModule = "musical";
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
  var call1235 = callmethod(var_collections,"list", [0]);
  var call1236 = callmethod(call1235,"new", [0]);
  var var_stepBlocks = call1236;
  var func1237 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1237.paramCounts[0])
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
  func1237.paramCounts = [
    0,
  ];
  func1237.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1237;
  func1237.definitionLine = 22;
  func1237.definitionModule = "musical";
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
  var call1238 = callmethod(var_collections,"map", [0]);
  var call1239 = callmethod(call1238,"new", [0]);
  var var_audioTags = call1239;
  var func1240 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1240.paramCounts[0])
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
  func1240.paramCounts = [
    0,
  ];
  func1240.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1240;
  func1240.definitionLine = 23;
  func1240.definitionModule = "musical";
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
  var func1241 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1241.paramCounts[0])
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
  func1241.paramCounts = [
    0,
  ];
  func1241.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1241;
  func1241.definitionLine = 23;
  func1241.definitionModule = "musical";
  lineNumber = 23
  var func1242 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1242.paramCounts[0])
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
  func1242.paramCounts = [
    1,
  ];
  func1242.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1242;
  func1242.definitionLine = 23;
  func1242.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1243 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1243.paramCounts[0])
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
  func1243.paramCounts = [
    0,
  ];
  func1243.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1243;
  func1243.definitionLine = 23;
  func1243.definitionModule = "musical";
  lineNumber = 23
  var func1244 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1244.paramCounts[0])
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
  func1244.paramCounts = [
    1,
  ];
  func1244.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1244;
  func1244.definitionLine = 23;
  func1244.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1245 = new GraceString("left");
  var var_left = string1245;
  lineNumber = 23
  var func1246 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1246.paramCounts[0])
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
  func1246.paramCounts = [
    0,
  ];
  func1246.variableArities = [
    false,
  ];
  this.methods["left"] = func1246;
  func1246.definitionLine = 23;
  func1246.definitionModule = "musical";
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
  var string1247 = new GraceString("right");
  var var_right = string1247;
  lineNumber = 23
  var func1248 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1248.paramCounts[0])
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
  func1248.paramCounts = [
    0,
  ];
  func1248.variableArities = [
    false,
  ];
  this.methods["right"] = func1248;
  func1248.definitionLine = 23;
  func1248.definitionModule = "musical";
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
  var string1249 = new GraceString("top");
  var var_top = string1249;
  lineNumber = 23
  var func1250 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1250.paramCounts[0])
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
  func1250.paramCounts = [
    0,
  ];
  func1250.variableArities = [
    false,
  ];
  this.methods["top"] = func1250;
  func1250.definitionLine = 23;
  func1250.definitionModule = "musical";
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
  var string1251 = new GraceString("bottom");
  var var_bottom = string1251;
  lineNumber = 23
  var func1252 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1252.paramCounts[0])
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
  func1252.paramCounts = [
    0,
  ];
  func1252.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1252;
  func1252.definitionLine = 23;
  func1252.definitionModule = "musical";
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
  var func1253 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1253.paramCounts[0])
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
  func1253.paramCounts = [
    0,
  ];
  func1253.variableArities = [
    false,
  ];
  this.methods["centre"] = func1253;
  func1253.definitionLine = 23;
  func1253.definitionModule = "musical";
  lineNumber = 23
  var func1254 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1254.paramCounts[0])
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
  func1254.paramCounts = [
    1,
  ];
  func1254.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1254;
  func1254.definitionLine = 23;
  func1254.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1255 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1255.paramCounts[0])
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
  func1255.paramCounts = [
    0,
  ];
  func1255.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1255;
  func1255.definitionLine = 23;
  func1255.definitionModule = "musical";
  lineNumber = 23
  var func1256 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1256.paramCounts[0])
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
  func1256.paramCounts = [
    1,
  ];
  func1256.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1256;
  func1256.definitionLine = 23;
  func1256.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1257 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1257.paramCounts[0])
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
  func1257.paramCounts = [
    0,
  ];
  func1257.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1257;
  func1257.definitionLine = 23;
  func1257.definitionModule = "musical";
  lineNumber = 23
  var func1258 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1258.paramCounts[0])
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
  func1258.paramCounts = [
    1,
  ];
  func1258.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1258;
  func1258.definitionLine = 23;
  func1258.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1259 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1259.paramCounts[0])
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
  func1259.paramCounts = [
    0,
  ];
  func1259.variableArities = [
    false,
  ];
  this.methods["above"] = func1259;
  func1259.definitionLine = 23;
  func1259.definitionModule = "musical";
  lineNumber = 23
  var func1260 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1260.paramCounts[0])
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
  func1260.paramCounts = [
    1,
  ];
  func1260.variableArities = [
    false,
  ];
  this.methods["above:="] = func1260;
  func1260.definitionLine = 23;
  func1260.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1261 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1261.paramCounts[0])
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
  func1261.paramCounts = [
    0,
  ];
  func1261.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1261;
  func1261.definitionLine = 23;
  func1261.definitionModule = "musical";
  lineNumber = 23
  var func1262 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1262.paramCounts[0])
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
  func1262.paramCounts = [
    1,
  ];
  func1262.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1262;
  func1262.definitionLine = 23;
  func1262.definitionModule = "musical";
  lineNumber = 40
  var func1263 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1263.paramCounts[0])
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
  func1263.paramCounts = [
    0,
  ];
  func1263.variableArities = [
    false,
  ];
  this.methods["point"] = func1263;
  func1263.definitionLine = 40;
  func1263.definitionModule = "musical";
  var obj1264 = Grace_allocObject();
  obj1264.definitionModule = "musical";
  obj1264.definitionLine = 40;
  obj1264.outer = this;
  var reader_musical_outer_1265 = function() {
    return this.outer;
  }
  obj1264.methods["outer"] = reader_musical_outer_1265;
  function obj_init_1264() {
    var origSuperDepth = superDepth;
    superDepth = obj1264;
    obj1264.annotations = [];
    var func1266 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1266.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1266.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1267 = Grace_allocObject();
        obj1267.definitionModule = "musical";
        obj1267.definitionLine = 40;
        obj1267.outer = this;
        var reader_musical_outer_1268 = function() {
          return this.outer;
        }
        obj1267.methods["outer"] = reader_musical_outer_1268;
        function obj_init_1267() {
          var origSuperDepth = superDepth;
          superDepth = obj1267;
          obj1267.annotations = [];
          var func1269 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1271 = callmethod(this, "x", [0]);
              var diff1273 = callmethod(call1271, "-", [1], var_dx);
              onSelf = true;
              var call1274 = callmethod(this, "y", [0]);
              var call1275 = callmethod(var_point,"x()y", [1, 1], diff1273, call1274);
              return call1275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1269.paramCounts = [
            1,
          ];
          func1269.variableArities = [
            false,
          ];
          obj1267.methods["left"] = func1269;
          func1269.definitionLine = 43;
          func1269.definitionModule = "musical";
          var func1276 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1278 = callmethod(this, "x", [0]);
              var opresult1280 = callmethod(call1278, "+", [1], var_dx);
              onSelf = true;
              var call1281 = callmethod(this, "y", [0]);
              var call1282 = callmethod(var_point,"x()y", [1, 1], opresult1280, call1281);
              return call1282
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1276.paramCounts = [
            1,
          ];
          func1276.variableArities = [
            false,
          ];
          obj1267.methods["right"] = func1276;
          func1276.definitionLine = 44;
          func1276.definitionModule = "musical";
          var func1283 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1284 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1286 = callmethod(this, "y", [0]);
              var diff1288 = callmethod(call1286, "-", [1], var_dy);
              var call1289 = callmethod(var_point,"x()y", [1, 1], call1284, diff1288);
              return call1289
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1283.paramCounts = [
            1,
          ];
          func1283.variableArities = [
            false,
          ];
          obj1267.methods["up"] = func1283;
          func1283.definitionLine = 45;
          func1283.definitionModule = "musical";
          var func1290 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1291 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1293 = callmethod(this, "y", [0]);
              var opresult1295 = callmethod(call1293, "+", [1], var_dy);
              var call1296 = callmethod(var_point,"x()y", [1, 1], call1291, opresult1295);
              return call1296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1290.paramCounts = [
            1,
          ];
          func1290.variableArities = [
            false,
          ];
          obj1267.methods["down"] = func1290;
          func1290.definitionLine = 46;
          func1290.definitionModule = "musical";
          sourceObject = obj1267;
          lineNumber = 41
          obj1267.data["x"] = var_x__39__;
          var reader_musical_x_1297 = function() {
            return this.data["x"];
          }
          reader_musical_x_1297.def = true;
          obj1267.methods["x"] = reader_musical_x_1297;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1267;
          lineNumber = 42
          obj1267.data["y"] = var_y__39__;
          var reader_musical_y_1298 = function() {
            return this.data["y"];
          }
          reader_musical_y_1298.def = true;
          obj1267.methods["y"] = reader_musical_y_1298;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1267;
          sourceObject = obj1267;
          sourceObject = obj1267;
          sourceObject = obj1267;
          superDepth = origSuperDepth;
        }
        obj_init_1267.apply(obj1267, []);
        return obj1267
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
      1,
    ];
    func1266.variableArities = [
      false,
      false,
    ];
    obj1264.methods["x()y"] = func1266;
    func1266.definitionLine = 40;
    func1266.definitionModule = "musical";
    var func1299 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1300 = Grace_allocObject();
        obj1300.definitionModule = "musical";
        obj1300.definitionLine = 40;
        var inho1300 = inheritingObject;
        while (inho1300.superobj) inho1300 = inho1300.superobj;
        inho1300.superobj = obj1300;
        obj1300.data = inheritingObject.data;
        obj1300.outer = this;
        var reader_musical_outer_1301 = function() {
          return this.outer;
        }
        obj1300.methods["outer"] = reader_musical_outer_1301;
        function obj_init_1300() {
          var origSuperDepth = superDepth;
          superDepth = obj1300;
          obj1300.annotations = [];
          var func1302 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1304 = callmethod(this, "x", [0]);
              var diff1306 = callmethod(call1304, "-", [1], var_dx);
              onSelf = true;
              var call1307 = callmethod(this, "y", [0]);
              var call1308 = callmethod(var_point,"x()y", [1, 1], diff1306, call1307);
              return call1308
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
          obj1300.methods["left"] = func1302;
          func1302.definitionLine = 43;
          func1302.definitionModule = "musical";
          var func1309 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1311 = callmethod(this, "x", [0]);
              var opresult1313 = callmethod(call1311, "+", [1], var_dx);
              onSelf = true;
              var call1314 = callmethod(this, "y", [0]);
              var call1315 = callmethod(var_point,"x()y", [1, 1], opresult1313, call1314);
              return call1315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1309.paramCounts = [
            1,
          ];
          func1309.variableArities = [
            false,
          ];
          obj1300.methods["right"] = func1309;
          func1309.definitionLine = 44;
          func1309.definitionModule = "musical";
          var func1316 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1317 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1319 = callmethod(this, "y", [0]);
              var diff1321 = callmethod(call1319, "-", [1], var_dy);
              var call1322 = callmethod(var_point,"x()y", [1, 1], call1317, diff1321);
              return call1322
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
          obj1300.methods["up"] = func1316;
          func1316.definitionLine = 45;
          func1316.definitionModule = "musical";
          var func1323 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1323.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1324 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1326 = callmethod(this, "y", [0]);
              var opresult1328 = callmethod(call1326, "+", [1], var_dy);
              var call1329 = callmethod(var_point,"x()y", [1, 1], call1324, opresult1328);
              return call1329
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1323.paramCounts = [
            1,
          ];
          func1323.variableArities = [
            false,
          ];
          obj1300.methods["down"] = func1323;
          func1323.definitionLine = 46;
          func1323.definitionModule = "musical";
          sourceObject = obj1300;
          lineNumber = 41
          obj1300.data["x"] = var_x__39__;
          var reader_musical_x_1330 = function() {
            return this.data["x"];
          }
          reader_musical_x_1330.def = true;
          obj1300.methods["x"] = reader_musical_x_1330;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1300;
          lineNumber = 42
          obj1300.data["y"] = var_y__39__;
          var reader_musical_y_1331 = function() {
            return this.data["y"];
          }
          reader_musical_y_1331.def = true;
          obj1300.methods["y"] = reader_musical_y_1331;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1300;
          sourceObject = obj1300;
          sourceObject = obj1300;
          sourceObject = obj1300;
          superDepth = origSuperDepth;
        }
        obj_init_1300.apply(inheritingObject, []);
        return obj1300
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1264.methods["x()y()object"] = func1299;
    var func1332 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1333 = new GraceString("class point");
        return string1333
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1332.paramCounts = [
    ];
    func1332.variableArities = [
    ];
    obj1264.methods["asDebugString"] = func1332;
    func1332.definitionLine = 40;
    func1332.definitionModule = "musical";
    sourceObject = obj1264;
    sourceObject = obj1264;
    superDepth = origSuperDepth;
  }
  obj_init_1264.apply(obj1264, []);
  var var_point = obj1264;
  lineNumber = 48
  var func1334 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1334.paramCounts[0])
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
  func1334.paramCounts = [
    0,
  ];
  func1334.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1334;
  func1334.definitionLine = 48;
  func1334.definitionModule = "musical";
  var obj1335 = Grace_allocObject();
  obj1335.definitionModule = "musical";
  obj1335.definitionLine = 48;
  obj1335.outer = this;
  var reader_musical_outer_1336 = function() {
    return this.outer;
  }
  obj1335.methods["outer"] = reader_musical_outer_1336;
  function obj_init_1335() {
    var origSuperDepth = superDepth;
    superDepth = obj1335;
    obj1335.annotations = [];
    var func1337 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1337.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1338 = Grace_allocObject();
        obj1338.definitionModule = "musical";
        obj1338.definitionLine = 48;
        obj1338.outer = this;
        var reader_musical_outer_1339 = function() {
          return this.outer;
        }
        obj1338.methods["outer"] = reader_musical_outer_1339;
        function obj_init_1338() {
          var origSuperDepth = superDepth;
          superDepth = obj1338;
          obj1338.annotations = [];
          var func1340 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1341 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1342 = Grace_allocObject();
              block1342.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1342.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1342.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1342.methods["match"] = GraceBlock_match;
              block1342.methods["prefix?"] = GraceBlock_lift;
              block1342.receiver = this;
              block1342.className = 'block<musical:63>';
              block1342.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1343 = callmethod(var_b,"apply", [0]);
                return call1343;
              };
              var call1344 = callmethod(Grace_prelude,"for()do", [1, 1], call1341, block1342);
              lineNumber = 63
              onSelf = true;
              var call1345 = callmethod(this, "tick", [0]);
              return call1345
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1340.paramCounts = [
            0,
          ];
          func1340.variableArities = [
            false,
          ];
          obj1338.methods["step"] = func1340;
          func1340.definitionLine = 59;
          func1340.definitionModule = "musical";
          var func1346 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1346.paramCounts[0])
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
          func1346.paramCounts = [
            0,
          ];
          func1346.variableArities = [
            false,
          ];
          obj1338.methods["tick"] = func1346;
          func1346.definitionLine = 66;
          func1346.definitionModule = "musical";
          var func1347 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1347.paramCounts[0])
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
          func1347.paramCounts = [
            1,
          ];
          func1347.variableArities = [
            false,
          ];
          obj1338.methods["draw"] = func1347;
          func1347.definitionLine = 67;
          func1347.definitionModule = "musical";
          var func1348 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1348.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1349 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1350 = callmethod(this, "destX:=", [1], call1349);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1351 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1352 = callmethod(this, "destY:=", [1], call1351);
              return call1352
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1348.paramCounts = [
            1,
          ];
          func1348.variableArities = [
            false,
          ];
          obj1338.methods["moveTo"] = func1348;
          func1348.definitionLine = 68;
          func1348.definitionModule = "musical";
          var func1353 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1353.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1354 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1355 = callmethod(this, "x:=", [1], call1354);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1356 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1357 = callmethod(this, "y:=", [1], call1356);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1358 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1359 = callmethod(this, "destX:=", [1], call1358);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1360 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1361 = callmethod(this, "destY:=", [1], call1360);
              return call1361
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1353.paramCounts = [
            1,
          ];
          func1353.variableArities = [
            false,
          ];
          obj1338.methods["jumpTo"] = func1353;
          func1353.definitionLine = 72;
          func1353.definitionModule = "musical";
          var func1362 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1362.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1363 = new GraceBoolean(false)
              return bool1363
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1362.paramCounts = [
            1,
          ];
          func1362.variableArities = [
            false,
          ];
          obj1338.methods["isPointOver"] = func1362;
          func1362.definitionLine = 78;
          func1362.definitionModule = "musical";
          var func1364 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1364.paramCounts[0])
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
          func1364.paramCounts = [
            0,
          ];
          func1364.variableArities = [
            false,
          ];
          obj1338.methods["mousedown"] = func1364;
          func1364.definitionLine = 79;
          func1364.definitionModule = "musical";
          var func1365 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1365.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1366 = callmethod(this, "alwaysBlocks", [0]);
              var call1367 = callmethod(call1366,"push", [1], var_b);
              return call1367
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1365.paramCounts = [
            1,
          ];
          func1365.variableArities = [
            false,
          ];
          obj1338.methods["always"] = func1365;
          func1365.definitionLine = 80;
          func1365.definitionModule = "musical";
          var func1368 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1368.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1369 = Grace_allocObject();
              block1369.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1369.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1369.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1369.methods["match"] = GraceBlock_match;
              block1369.methods["prefix?"] = GraceBlock_lift;
              block1369.receiver = this;
              block1369.className = 'block<musical:89>';
              block1369.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1370 = var_done;
                lineNumber = 85
                var call1371 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1371)) {
                  lineNumber = 86
                  var call1372 = callmethod(var_b,"apply", [0]);
                  if1370 = call1372;
                }
                return if1370;
              };
              onSelf = true;
              var call1373 = callmethod(this, "always", [1], block1369);
              return call1373
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1368.paramCounts = [
            1,
            1,
          ];
          func1368.variableArities = [
            false,
            false,
          ];
          obj1338.methods["whenever()do"] = func1368;
          func1368.definitionLine = 83;
          func1368.definitionModule = "musical";
          var func1374 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1378 = callmethod(this, "angle", [0]);
              var quotient1380 = callmethod(call1378, "/", [1], new GraceNum(180));
              var prod1382 = callmethod(quotient1380, "*", [1], var_PI);
              var call1383 = callmethod(var_trig,"cos", [1], prod1382);
              var prod1385 = callmethod(call1383, "*", [1], var_dist);
              var var_y__39__ = prod1385;
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
              var call1389 = callmethod(this, "angle", [0]);
              var quotient1391 = callmethod(call1389, "/", [1], new GraceNum(180));
              var prod1393 = callmethod(quotient1391, "*", [1], var_PI);
              var call1394 = callmethod(var_trig,"sin", [1], prod1393);
              var prod1396 = callmethod(call1394, "*", [1], var_dist);
              var var_x__39__ = prod1396;
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
              var call1398 = callmethod(this, "x", [0]);
              var opresult1400 = callmethod(call1398, "+", [1], var_x__39__);
              onSelf = true;
              var call1401 = callmethod(this, "x:=", [1], opresult1400);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1403 = callmethod(this, "y", [0]);
              var opresult1405 = callmethod(call1403, "+", [1], var_y__39__);
              onSelf = true;
              var call1406 = callmethod(this, "y:=", [1], opresult1405);
              return call1406
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1374.paramCounts = [
            1,
          ];
          func1374.variableArities = [
            false,
          ];
          obj1338.methods["forward"] = func1374;
          func1374.definitionLine = 90;
          func1374.definitionModule = "musical";
          var func1407 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1407.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1408 = Grace_allocObject();
              block1408.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1408.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1408.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1408.methods["match"] = GraceBlock_match;
              block1408.methods["prefix?"] = GraceBlock_lift;
              block1408.receiver = this;
              block1408.className = 'block<musical:97>';
              block1408.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1410 = callmethod(this, "angle", [0]);
                var opresult1412 = callmethod(call1410, "<", [1], new GraceNum(0));
                return opresult1412;
              };
              lineNumber = 100
              var block1413 = Grace_allocObject();
              block1413.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1413.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1413.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1413.methods["match"] = GraceBlock_match;
              block1413.methods["prefix?"] = GraceBlock_lift;
              block1413.receiver = this;
              block1413.className = 'block<musical:100>';
              block1413.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1415 = callmethod(this, "angle", [0]);
                var opresult1417 = callmethod(call1415, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1418 = callmethod(this, "angle:=", [1], opresult1417);
                return call1418;
              };
              var call1419 = callmethod(Grace_prelude,"while()do", [1, 1], block1408, block1413);
              lineNumber = 100
              var block1420 = Grace_allocObject();
              block1420.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1420.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1420.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1420.methods["match"] = GraceBlock_match;
              block1420.methods["prefix?"] = GraceBlock_lift;
              block1420.receiver = this;
              block1420.className = 'block<musical:100>';
              block1420.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1422 = callmethod(this, "angle", [0]);
                var opresult1424 = callmethod(call1422, ">", [1], new GraceNum(360));
                return opresult1424;
              };
              lineNumber = 103
              var block1425 = Grace_allocObject();
              block1425.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1425.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1425.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1425.methods["match"] = GraceBlock_match;
              block1425.methods["prefix?"] = GraceBlock_lift;
              block1425.receiver = this;
              block1425.className = 'block<musical:103>';
              block1425.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1427 = callmethod(this, "angle", [0]);
                var diff1429 = callmethod(call1427, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1430 = callmethod(this, "angle:=", [1], diff1429);
                return call1430;
              };
              var call1431 = callmethod(Grace_prelude,"while()do", [1, 1], block1420, block1425);
              return call1431
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
          obj1338.methods["normaliseAngle"] = func1407;
          func1407.definitionLine = 96;
          func1407.definitionModule = "musical";
          var func1432 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1432.paramCounts[0])
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
              var call1434 = callmethod(this, "angle", [0]);
              var opresult1436 = callmethod(call1434, "+", [1], var_degrees);
              onSelf = true;
              var call1437 = callmethod(this, "angle:=", [1], opresult1436);
              lineNumber = 106
              onSelf = true;
              var call1438 = callmethod(this, "normaliseAngle", [0]);
              return call1438
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
          ];
          func1432.variableArities = [
            false,
          ];
          obj1338.methods["turn"] = func1432;
          func1432.definitionLine = 104;
          func1432.definitionModule = "musical";
          var func1439 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1439.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1440 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1441 = callmethod(this, "x", [0]);
              var call1442 = callmethod(var_point,"x()y", [1, 1], call1441, new GraceNum(0));
              onSelf = true;
              var call1443 = callmethod(this, "isPointOver", [1], call1442);
              if (Grace_isTrue(call1443)) {
                lineNumber = 111
                lineNumber = 110
                var bool1444 = new GraceBoolean(true)
                return bool1444
              }
              lineNumber = 115
              var if1445 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1446 = callmethod(this, "x", [0]);
              var call1447 = callmethod(var_point,"x()y", [1, 1], call1446, var_canvasHeight);
              onSelf = true;
              var call1448 = callmethod(this, "isPointOver", [1], call1447);
              if (Grace_isTrue(call1448)) {
                lineNumber = 114
                lineNumber = 113
                var bool1449 = new GraceBoolean(true)
                return bool1449
              }
              lineNumber = 118
              var if1450 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1451 = callmethod(this, "y", [0]);
              var call1452 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1451);
              onSelf = true;
              var call1453 = callmethod(this, "isPointOver", [1], call1452);
              if (Grace_isTrue(call1453)) {
                lineNumber = 117
                lineNumber = 116
                var bool1454 = new GraceBoolean(true)
                return bool1454
              }
              lineNumber = 121
              var if1455 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1456 = callmethod(this, "y", [0]);
              var call1457 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1456);
              onSelf = true;
              var call1458 = callmethod(this, "isPointOver", [1], call1457);
              if (Grace_isTrue(call1458)) {
                lineNumber = 120
                lineNumber = 119
                var bool1459 = new GraceBoolean(true)
                return bool1459
              }
              lineNumber = 122
              lineNumber = 121
              var bool1460 = new GraceBoolean(false)
              return bool1460
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1439.paramCounts = [
            0,
          ];
          func1439.variableArities = [
            false,
          ];
          obj1338.methods["touchingEdge"] = func1439;
          func1439.definitionLine = 108;
          func1439.definitionModule = "musical";
          var func1461 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1461.paramCounts[0])
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
              var if1462 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1463 = callmethod(this, "x", [0]);
              var call1464 = callmethod(var_point,"x()y", [1, 1], call1463, new GraceNum(0));
              onSelf = true;
              var call1465 = callmethod(this, "isPointOver", [1], call1464);
              if (Grace_isTrue(call1465)) {
                lineNumber = 127
                onSelf = true;
                var call1466 = callmethod(this, "bounceFrom", [1], var_top);
                if1462 = call1466;
              }
              lineNumber = 132
              var if1467 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1468 = callmethod(this, "x", [0]);
              var call1469 = callmethod(var_point,"x()y", [1, 1], call1468, var_canvasHeight);
              onSelf = true;
              var call1470 = callmethod(this, "isPointOver", [1], call1469);
              if (Grace_isTrue(call1470)) {
                lineNumber = 130
                onSelf = true;
                var call1471 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1467 = call1471;
              }
              lineNumber = 135
              var if1472 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1473 = callmethod(this, "y", [0]);
              var call1474 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1473);
              onSelf = true;
              var call1475 = callmethod(this, "isPointOver", [1], call1474);
              if (Grace_isTrue(call1475)) {
                lineNumber = 133
                onSelf = true;
                var call1476 = callmethod(this, "bounceFrom", [1], var_left);
                if1472 = call1476;
              }
              lineNumber = 138
              var if1477 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1478 = callmethod(this, "y", [0]);
              var call1479 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1478);
              onSelf = true;
              var call1480 = callmethod(this, "isPointOver", [1], call1479);
              if (Grace_isTrue(call1480)) {
                lineNumber = 136
                onSelf = true;
                var call1481 = callmethod(this, "bounceFrom", [1], var_right);
                if1477 = call1481;
              }
              lineNumber = 138
              var block1482 = Grace_allocObject();
              block1482.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1482.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1482.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1482.methods["match"] = GraceBlock_match;
              block1482.methods["prefix?"] = GraceBlock_lift;
              block1482.receiver = this;
              block1482.className = 'block<musical:138>';
              block1482.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1483 = callmethod(this, "touchingEdge", [0]);
                return call1483;
              };
              lineNumber = 141
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
              block1484.className = 'block<musical:141>';
              block1484.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1485 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1485;
              };
              var call1486 = callmethod(Grace_prelude,"while()do", [1, 1], block1482, block1484);
              return call1486
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1461.paramCounts = [
            0,
          ];
          func1461.variableArities = [
            false,
          ];
          obj1338.methods["bounce"] = func1461;
          func1461.definitionLine = 123;
          func1461.definitionModule = "musical";
          var func1487 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1487.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1488 = var_done;
              lineNumber = 143
              var string1489 = new GraceString("left");
              var opresult1492 = callmethod(var_dir, "==", [1], string1489);
              if (Grace_isTrue(opresult1492)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1493 = callmethod(this, "angle", [0]);
                var diff1496 = callmethod(new GraceNum(360), "-", [1], call1493);
                onSelf = true;
                var call1497 = callmethod(this, "angle:=", [1], diff1496);
                if1488 = call1497;
              }
              lineNumber = 149
              var if1498 = var_done;
              lineNumber = 146
              var string1499 = new GraceString("right");
              var opresult1502 = callmethod(var_dir, "==", [1], string1499);
              if (Grace_isTrue(opresult1502)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1503 = callmethod(this, "angle", [0]);
                var diff1506 = callmethod(new GraceNum(360), "-", [1], call1503);
                onSelf = true;
                var call1507 = callmethod(this, "angle:=", [1], diff1506);
                if1498 = call1507;
              }
              lineNumber = 152
              var if1508 = var_done;
              lineNumber = 149
              var string1509 = new GraceString("top");
              var opresult1512 = callmethod(var_dir, "==", [1], string1509);
              if (Grace_isTrue(opresult1512)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1513 = callmethod(this, "angle", [0]);
                var diff1516 = callmethod(new GraceNum(180), "-", [1], call1513);
                onSelf = true;
                var call1517 = callmethod(this, "angle:=", [1], diff1516);
                if1508 = call1517;
              }
              lineNumber = 155
              var if1518 = var_done;
              lineNumber = 152
              var string1519 = new GraceString("bottom");
              var opresult1522 = callmethod(var_dir, "==", [1], string1519);
              if (Grace_isTrue(opresult1522)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1523 = callmethod(this, "angle", [0]);
                var diff1526 = callmethod(new GraceNum(180), "-", [1], call1523);
                onSelf = true;
                var call1527 = callmethod(this, "angle:=", [1], diff1526);
                if1518 = call1527;
              }
              lineNumber = 155
              onSelf = true;
              var call1528 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1529 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1529
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1487.paramCounts = [
            1,
          ];
          func1487.variableArities = [
            false,
          ];
          obj1338.methods["bounceFrom"] = func1487;
          func1487.definitionLine = 142;
          func1487.definitionModule = "musical";
          var func1530 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1530.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1531 = var_done;
              lineNumber = 159
              var call1532 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1534 = callmethod(this, "x", [0]);
              var opresult1536 = callmethod(call1534, ">", [1], call1532);
              if (Grace_isTrue(opresult1536)) {
                lineNumber = 160
                onSelf = true;
                var call1537 = callmethod(this, "bounceFrom", [1], var_left);
                if1531 = call1537;
              }
              lineNumber = 165
              var if1538 = var_done;
              lineNumber = 162
              var call1539 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1541 = callmethod(this, "x", [0]);
              var opresult1543 = callmethod(call1541, "<", [1], call1539);
              if (Grace_isTrue(opresult1543)) {
                lineNumber = 163
                onSelf = true;
                var call1544 = callmethod(this, "bounceFrom", [1], var_right);
                if1538 = call1544;
              }
              lineNumber = 165
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
              block1545.className = 'block<musical:165>';
              block1545.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1546 = callmethod(this, "touching", [1], var_other);
                return call1546;
              };
              lineNumber = 168
              var block1547 = Grace_allocObject();
              block1547.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1547.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1547.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1547.methods["match"] = GraceBlock_match;
              block1547.methods["prefix?"] = GraceBlock_lift;
              block1547.receiver = this;
              block1547.className = 'block<musical:168>';
              block1547.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1548 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1548;
              };
              var call1549 = callmethod(Grace_prelude,"while()do", [1, 1], block1545, block1547);
              return call1549
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1530.paramCounts = [
            1,
          ];
          func1530.variableArities = [
            false,
          ];
          obj1338.methods["bounceOff"] = func1530;
          func1530.definitionLine = 158;
          func1530.definitionModule = "musical";
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
              lineNumber = 170
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
          obj1338.methods["touching"] = func1550;
          func1550.definitionLine = 169;
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
              lineNumber = 176
              var if1556 = var_done;
              lineNumber = 173
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
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
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
              lineNumber = 176
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
          obj1338.methods["face"] = func1555;
          func1555.definitionLine = 172;
          func1555.definitionModule = "musical";
          var func1589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
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
          obj1338.methods["stamp"] = func1589;
          func1589.definitionLine = 178;
          func1589.definitionModule = "musical";
          sourceObject = obj1338;
          lineNumber = 49
          var call1593 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1594 = callmethod(call1593, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1595 = callmethod(call1594, "initialise", [0]);
          sourceObject = obj1338;
          lineNumber = 50
          var call1596 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1338;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1338;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1338;
          lineNumber = 53
          var call1597 = callmethod(var_collections,"list", [0]);
          var call1598 = callmethod(call1597,"new", [0]);
          obj1338.data["alwaysBlocks"] = call1598;
          var reader_musical_alwaysBlocks_1599 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1599.def = true;
          reader_musical_alwaysBlocks_1599.confidential = true;
          obj1338.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1599;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1598)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1338;
          lineNumber = 55
          lineNumber = 54
          var quotient1602 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1338.data["x"] = quotient1602;
          var reader_musical_x_1603 = function() {
            return this.data["x"];
          }
          obj1338.methods["x"] = reader_musical_x_1603;
          obj1338.data["x"] = quotient1602;
          var writer_musical_x_1603 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1338.methods["x:="] = writer_musical_x_1603;
          writer_musical_x_1603.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1602)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1338.mutable = true;
          sourceObject = obj1338;
          lineNumber = 56
          lineNumber = 55
          var quotient1606 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1338.data["y"] = quotient1606;
          var reader_musical_y_1607 = function() {
            return this.data["y"];
          }
          obj1338.methods["y"] = reader_musical_y_1607;
          obj1338.data["y"] = quotient1606;
          var writer_musical_y_1607 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1338.methods["y:="] = writer_musical_y_1607;
          writer_musical_y_1607.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1606)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1338.mutable = true;
          sourceObject = obj1338;
          lineNumber = 56
          onSelf = true;
          var call1608 = callmethod(this, "x", [0]);
          obj1338.data["destX"] = call1608;
          var reader_musical_destX_1609 = function() {
            return this.data["destX"];
          }
          obj1338.methods["destX"] = reader_musical_destX_1609;
          obj1338.data["destX"] = call1608;
          var writer_musical_destX_1609 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1338.methods["destX:="] = writer_musical_destX_1609;
          reader_musical_destX_1609.confidential = true;
          writer_musical_destX_1609.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1608)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1338.mutable = true;
          sourceObject = obj1338;
          lineNumber = 57
          onSelf = true;
          var call1610 = callmethod(this, "y", [0]);
          obj1338.data["destY"] = call1610;
          var reader_musical_destY_1611 = function() {
            return this.data["destY"];
          }
          obj1338.methods["destY"] = reader_musical_destY_1611;
          obj1338.data["destY"] = call1610;
          var writer_musical_destY_1611 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1338.methods["destY:="] = writer_musical_destY_1611;
          reader_musical_destY_1611.confidential = true;
          writer_musical_destY_1611.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1338.mutable = true;
          sourceObject = obj1338;
          lineNumber = 58
          obj1338.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1612 = function() {
            return this.data["angle"];
          }
          obj1338.methods["angle"] = reader_musical_angle_1612;
          obj1338.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1612 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1338.methods["angle:="] = writer_musical_angle_1612;
          reader_musical_angle_1612.confidential = true;
          writer_musical_angle_1612.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1338.mutable = true;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          sourceObject = obj1338;
          superDepth = origSuperDepth;
        }
        obj_init_1338.apply(obj1338, []);
        return obj1338
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1337.paramCounts = [
      0,
    ];
    func1337.variableArities = [
      false,
    ];
    obj1335.methods["new"] = func1337;
    func1337.definitionLine = 48;
    func1337.definitionModule = "musical";
    var func1613 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1614 = Grace_allocObject();
        obj1614.definitionModule = "musical";
        obj1614.definitionLine = 48;
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
              lineNumber = 60
              onSelf = true;
              var call1617 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
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
              block1618.className = 'block<musical:63>';
              block1618.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1619 = callmethod(var_b,"apply", [0]);
                return call1619;
              };
              var call1620 = callmethod(Grace_prelude,"for()do", [1, 1], call1617, block1618);
              lineNumber = 63
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
          func1616.definitionLine = 59;
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
          func1622.definitionLine = 66;
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
          func1623.definitionLine = 67;
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
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1625 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1626 = callmethod(this, "destX:=", [1], call1625);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
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
          func1624.definitionLine = 68;
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
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1630 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1631 = callmethod(this, "x:=", [1], call1630);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1632 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1633 = callmethod(this, "y:=", [1], call1632);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1634 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1635 = callmethod(this, "destX:=", [1], call1634);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
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
          func1629.definitionLine = 72;
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
              lineNumber = 78
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
          func1638.definitionLine = 78;
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
          func1640.definitionLine = 79;
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
              lineNumber = 81
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
          func1641.definitionLine = 80;
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
              lineNumber = 84
              lineNumber = 89
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
              block1645.className = 'block<musical:89>';
              block1645.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1646 = var_done;
                lineNumber = 85
                var call1647 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1647)) {
                  lineNumber = 86
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
          func1644.definitionLine = 83;
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
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1654 = callmethod(this, "angle", [0]);
              var quotient1656 = callmethod(call1654, "/", [1], new GraceNum(180));
              var prod1658 = callmethod(quotient1656, "*", [1], var_PI);
              var call1659 = callmethod(var_trig,"cos", [1], prod1658);
              var prod1661 = callmethod(call1659, "*", [1], var_dist);
              var var_y__39__ = prod1661;
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
              var call1665 = callmethod(this, "angle", [0]);
              var quotient1667 = callmethod(call1665, "/", [1], new GraceNum(180));
              var prod1669 = callmethod(quotient1667, "*", [1], var_PI);
              var call1670 = callmethod(var_trig,"sin", [1], prod1669);
              var prod1672 = callmethod(call1670, "*", [1], var_dist);
              var var_x__39__ = prod1672;
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
              var call1674 = callmethod(this, "x", [0]);
              var opresult1676 = callmethod(call1674, "+", [1], var_x__39__);
              onSelf = true;
              var call1677 = callmethod(this, "x:=", [1], opresult1676);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
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
          func1650.definitionLine = 90;
          func1650.definitionModule = "musical";
          var func1683 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1683.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
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
              block1684.className = 'block<musical:97>';
              block1684.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1686 = callmethod(this, "angle", [0]);
                var opresult1688 = callmethod(call1686, "<", [1], new GraceNum(0));
                return opresult1688;
              };
              lineNumber = 100
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
              block1689.className = 'block<musical:100>';
              block1689.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1691 = callmethod(this, "angle", [0]);
                var opresult1693 = callmethod(call1691, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1694 = callmethod(this, "angle:=", [1], opresult1693);
                return call1694;
              };
              var call1695 = callmethod(Grace_prelude,"while()do", [1, 1], block1684, block1689);
              lineNumber = 100
              var block1696 = Grace_allocObject();
              block1696.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1696.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1696.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1696.methods["match"] = GraceBlock_match;
              block1696.methods["prefix?"] = GraceBlock_lift;
              block1696.receiver = this;
              block1696.className = 'block<musical:100>';
              block1696.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1698 = callmethod(this, "angle", [0]);
                var opresult1700 = callmethod(call1698, ">", [1], new GraceNum(360));
                return opresult1700;
              };
              lineNumber = 103
              var block1701 = Grace_allocObject();
              block1701.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1701.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1701.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1701.methods["match"] = GraceBlock_match;
              block1701.methods["prefix?"] = GraceBlock_lift;
              block1701.receiver = this;
              block1701.className = 'block<musical:103>';
              block1701.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1703 = callmethod(this, "angle", [0]);
                var diff1705 = callmethod(call1703, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1706 = callmethod(this, "angle:=", [1], diff1705);
                return call1706;
              };
              var call1707 = callmethod(Grace_prelude,"while()do", [1, 1], block1696, block1701);
              return call1707
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
          func1683.definitionLine = 96;
          func1683.definitionModule = "musical";
          var func1708 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1708.paramCounts[0])
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
              var call1710 = callmethod(this, "angle", [0]);
              var opresult1712 = callmethod(call1710, "+", [1], var_degrees);
              onSelf = true;
              var call1713 = callmethod(this, "angle:=", [1], opresult1712);
              lineNumber = 106
              onSelf = true;
              var call1714 = callmethod(this, "normaliseAngle", [0]);
              return call1714
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1708.paramCounts = [
            1,
          ];
          func1708.variableArities = [
            false,
          ];
          obj1614.methods["turn"] = func1708;
          func1708.definitionLine = 104;
          func1708.definitionModule = "musical";
          var func1715 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1715.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1716 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1717 = callmethod(this, "x", [0]);
              var call1718 = callmethod(var_point,"x()y", [1, 1], call1717, new GraceNum(0));
              onSelf = true;
              var call1719 = callmethod(this, "isPointOver", [1], call1718);
              if (Grace_isTrue(call1719)) {
                lineNumber = 111
                lineNumber = 110
                var bool1720 = new GraceBoolean(true)
                return bool1720
              }
              lineNumber = 115
              var if1721 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1722 = callmethod(this, "x", [0]);
              var call1723 = callmethod(var_point,"x()y", [1, 1], call1722, var_canvasHeight);
              onSelf = true;
              var call1724 = callmethod(this, "isPointOver", [1], call1723);
              if (Grace_isTrue(call1724)) {
                lineNumber = 114
                lineNumber = 113
                var bool1725 = new GraceBoolean(true)
                return bool1725
              }
              lineNumber = 118
              var if1726 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1727 = callmethod(this, "y", [0]);
              var call1728 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1727);
              onSelf = true;
              var call1729 = callmethod(this, "isPointOver", [1], call1728);
              if (Grace_isTrue(call1729)) {
                lineNumber = 117
                lineNumber = 116
                var bool1730 = new GraceBoolean(true)
                return bool1730
              }
              lineNumber = 121
              var if1731 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1732 = callmethod(this, "y", [0]);
              var call1733 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1732);
              onSelf = true;
              var call1734 = callmethod(this, "isPointOver", [1], call1733);
              if (Grace_isTrue(call1734)) {
                lineNumber = 120
                lineNumber = 119
                var bool1735 = new GraceBoolean(true)
                return bool1735
              }
              lineNumber = 122
              lineNumber = 121
              var bool1736 = new GraceBoolean(false)
              return bool1736
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1715.paramCounts = [
            0,
          ];
          func1715.variableArities = [
            false,
          ];
          obj1614.methods["touchingEdge"] = func1715;
          func1715.definitionLine = 108;
          func1715.definitionModule = "musical";
          var func1737 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1737.paramCounts[0])
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
              var if1738 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1739 = callmethod(this, "x", [0]);
              var call1740 = callmethod(var_point,"x()y", [1, 1], call1739, new GraceNum(0));
              onSelf = true;
              var call1741 = callmethod(this, "isPointOver", [1], call1740);
              if (Grace_isTrue(call1741)) {
                lineNumber = 127
                onSelf = true;
                var call1742 = callmethod(this, "bounceFrom", [1], var_top);
                if1738 = call1742;
              }
              lineNumber = 132
              var if1743 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1744 = callmethod(this, "x", [0]);
              var call1745 = callmethod(var_point,"x()y", [1, 1], call1744, var_canvasHeight);
              onSelf = true;
              var call1746 = callmethod(this, "isPointOver", [1], call1745);
              if (Grace_isTrue(call1746)) {
                lineNumber = 130
                onSelf = true;
                var call1747 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1743 = call1747;
              }
              lineNumber = 135
              var if1748 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1749 = callmethod(this, "y", [0]);
              var call1750 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1749);
              onSelf = true;
              var call1751 = callmethod(this, "isPointOver", [1], call1750);
              if (Grace_isTrue(call1751)) {
                lineNumber = 133
                onSelf = true;
                var call1752 = callmethod(this, "bounceFrom", [1], var_left);
                if1748 = call1752;
              }
              lineNumber = 138
              var if1753 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1754 = callmethod(this, "y", [0]);
              var call1755 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1754);
              onSelf = true;
              var call1756 = callmethod(this, "isPointOver", [1], call1755);
              if (Grace_isTrue(call1756)) {
                lineNumber = 136
                onSelf = true;
                var call1757 = callmethod(this, "bounceFrom", [1], var_right);
                if1753 = call1757;
              }
              lineNumber = 138
              var block1758 = Grace_allocObject();
              block1758.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1758.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1758.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1758.methods["match"] = GraceBlock_match;
              block1758.methods["prefix?"] = GraceBlock_lift;
              block1758.receiver = this;
              block1758.className = 'block<musical:138>';
              block1758.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1759 = callmethod(this, "touchingEdge", [0]);
                return call1759;
              };
              lineNumber = 141
              var block1760 = Grace_allocObject();
              block1760.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1760.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1760.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1760.methods["match"] = GraceBlock_match;
              block1760.methods["prefix?"] = GraceBlock_lift;
              block1760.receiver = this;
              block1760.className = 'block<musical:141>';
              block1760.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1761 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1761;
              };
              var call1762 = callmethod(Grace_prelude,"while()do", [1, 1], block1758, block1760);
              return call1762
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1737.paramCounts = [
            0,
          ];
          func1737.variableArities = [
            false,
          ];
          obj1614.methods["bounce"] = func1737;
          func1737.definitionLine = 123;
          func1737.definitionModule = "musical";
          var func1763 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1763.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1764 = var_done;
              lineNumber = 143
              var string1765 = new GraceString("left");
              var opresult1768 = callmethod(var_dir, "==", [1], string1765);
              if (Grace_isTrue(opresult1768)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1769 = callmethod(this, "angle", [0]);
                var diff1772 = callmethod(new GraceNum(360), "-", [1], call1769);
                onSelf = true;
                var call1773 = callmethod(this, "angle:=", [1], diff1772);
                if1764 = call1773;
              }
              lineNumber = 149
              var if1774 = var_done;
              lineNumber = 146
              var string1775 = new GraceString("right");
              var opresult1778 = callmethod(var_dir, "==", [1], string1775);
              if (Grace_isTrue(opresult1778)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1779 = callmethod(this, "angle", [0]);
                var diff1782 = callmethod(new GraceNum(360), "-", [1], call1779);
                onSelf = true;
                var call1783 = callmethod(this, "angle:=", [1], diff1782);
                if1774 = call1783;
              }
              lineNumber = 152
              var if1784 = var_done;
              lineNumber = 149
              var string1785 = new GraceString("top");
              var opresult1788 = callmethod(var_dir, "==", [1], string1785);
              if (Grace_isTrue(opresult1788)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1789 = callmethod(this, "angle", [0]);
                var diff1792 = callmethod(new GraceNum(180), "-", [1], call1789);
                onSelf = true;
                var call1793 = callmethod(this, "angle:=", [1], diff1792);
                if1784 = call1793;
              }
              lineNumber = 155
              var if1794 = var_done;
              lineNumber = 152
              var string1795 = new GraceString("bottom");
              var opresult1798 = callmethod(var_dir, "==", [1], string1795);
              if (Grace_isTrue(opresult1798)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1799 = callmethod(this, "angle", [0]);
                var diff1802 = callmethod(new GraceNum(180), "-", [1], call1799);
                onSelf = true;
                var call1803 = callmethod(this, "angle:=", [1], diff1802);
                if1794 = call1803;
              }
              lineNumber = 155
              onSelf = true;
              var call1804 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1805 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1763.paramCounts = [
            1,
          ];
          func1763.variableArities = [
            false,
          ];
          obj1614.methods["bounceFrom"] = func1763;
          func1763.definitionLine = 142;
          func1763.definitionModule = "musical";
          var func1806 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1806.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1807 = var_done;
              lineNumber = 159
              var call1808 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1810 = callmethod(this, "x", [0]);
              var opresult1812 = callmethod(call1810, ">", [1], call1808);
              if (Grace_isTrue(opresult1812)) {
                lineNumber = 160
                onSelf = true;
                var call1813 = callmethod(this, "bounceFrom", [1], var_left);
                if1807 = call1813;
              }
              lineNumber = 165
              var if1814 = var_done;
              lineNumber = 162
              var call1815 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1817 = callmethod(this, "x", [0]);
              var opresult1819 = callmethod(call1817, "<", [1], call1815);
              if (Grace_isTrue(opresult1819)) {
                lineNumber = 163
                onSelf = true;
                var call1820 = callmethod(this, "bounceFrom", [1], var_right);
                if1814 = call1820;
              }
              lineNumber = 165
              var block1821 = Grace_allocObject();
              block1821.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1821.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1821.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1821.methods["match"] = GraceBlock_match;
              block1821.methods["prefix?"] = GraceBlock_lift;
              block1821.receiver = this;
              block1821.className = 'block<musical:165>';
              block1821.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1822 = callmethod(this, "touching", [1], var_other);
                return call1822;
              };
              lineNumber = 168
              var block1823 = Grace_allocObject();
              block1823.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1823.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1823.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1823.methods["match"] = GraceBlock_match;
              block1823.methods["prefix?"] = GraceBlock_lift;
              block1823.receiver = this;
              block1823.className = 'block<musical:168>';
              block1823.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1824 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1824;
              };
              var call1825 = callmethod(Grace_prelude,"while()do", [1, 1], block1821, block1823);
              return call1825
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1806.paramCounts = [
            1,
          ];
          func1806.variableArities = [
            false,
          ];
          obj1614.methods["bounceOff"] = func1806;
          func1806.definitionLine = 158;
          func1806.definitionModule = "musical";
          var func1826 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1826.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1827 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1828 = callmethod(this, "y", [0]);
              var call1829 = callmethod(var_point,"x()y", [1, 1], call1827, call1828);
              var call1830 = callmethod(var_other,"isPointOver", [1], call1829);
              return call1830
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1826.paramCounts = [
            1,
          ];
          func1826.variableArities = [
            false,
          ];
          obj1614.methods["touching"] = func1826;
          func1826.definitionLine = 169;
          func1826.definitionModule = "musical";
          var func1831 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1831.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1832 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1833 = callmethod(this, "y", [0]);
              var call1835 = callmethod(var_other,"y", [0]);
              var opresult1837 = callmethod(call1835, "!=", [1], call1833);
              onSelf = true;
              var call1839 = callmethod(this, "x", [0]);
              var call1841 = callmethod(var_other,"x", [0]);
              var opresult1843 = callmethod(call1841, "!=", [1], call1839);
              var opresult1845 = callmethod(opresult1843, "||", [1], opresult1837);
              if (Grace_isTrue(opresult1845)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1848 = callmethod(this, "x", [0]);
                var call1850 = callmethod(var_other,"x", [0]);
                var diff1852 = callmethod(call1850, "-", [1], call1848);
                onSelf = true;
                var call1853 = callmethod(this, "y", [0]);
                var call1855 = callmethod(var_other,"y", [0]);
                var diff1857 = callmethod(call1855, "-", [1], call1853);
                var call1858 = callmethod(var_trig,"atan2", [2], diff1852, diff1857);
                var prod1860 = callmethod(call1858, "*", [1], new GraceNum(180));
                var quotient1862 = callmethod(prod1860, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1863 = callmethod(this, "angle:=", [1], quotient1862);
                if1832 = call1863;
              }
              lineNumber = 176
              onSelf = true;
              var call1864 = callmethod(this, "normaliseAngle", [0]);
              return call1864
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1831.paramCounts = [
            1,
          ];
          func1831.variableArities = [
            false,
          ];
          obj1614.methods["face"] = func1831;
          func1831.definitionLine = 172;
          func1831.definitionModule = "musical";
          var func1865 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1865.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1866 = new GraceString("2d");
              var call1867 = callmethod(var_backingCanvas,"getContext", [1], string1866);
              onSelf = true;
              var call1868 = callmethod(this, "draw", [1], call1867);
              return call1868
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1865.paramCounts = [
            0,
          ];
          func1865.variableArities = [
            false,
          ];
          obj1614.methods["stamp"] = func1865;
          func1865.definitionLine = 178;
          func1865.definitionModule = "musical";
          sourceObject = obj1614;
          lineNumber = 49
          var call1869 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1870 = callmethod(call1869, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1871 = callmethod(call1870, "initialise", [0]);
          sourceObject = obj1614;
          lineNumber = 50
          var call1872 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1614;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1614;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1614;
          lineNumber = 53
          var call1873 = callmethod(var_collections,"list", [0]);
          var call1874 = callmethod(call1873,"new", [0]);
          obj1614.data["alwaysBlocks"] = call1874;
          var reader_musical_alwaysBlocks_1875 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1875.def = true;
          reader_musical_alwaysBlocks_1875.confidential = true;
          obj1614.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1875;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1874)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1614;
          lineNumber = 55
          lineNumber = 54
          var quotient1878 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1614.data["x"] = quotient1878;
          var reader_musical_x_1879 = function() {
            return this.data["x"];
          }
          obj1614.methods["x"] = reader_musical_x_1879;
          obj1614.data["x"] = quotient1878;
          var writer_musical_x_1879 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1614.methods["x:="] = writer_musical_x_1879;
          writer_musical_x_1879.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1878)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 56
          lineNumber = 55
          var quotient1882 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1614.data["y"] = quotient1882;
          var reader_musical_y_1883 = function() {
            return this.data["y"];
          }
          obj1614.methods["y"] = reader_musical_y_1883;
          obj1614.data["y"] = quotient1882;
          var writer_musical_y_1883 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1614.methods["y:="] = writer_musical_y_1883;
          writer_musical_y_1883.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1882)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 56
          onSelf = true;
          var call1884 = callmethod(this, "x", [0]);
          obj1614.data["destX"] = call1884;
          var reader_musical_destX_1885 = function() {
            return this.data["destX"];
          }
          obj1614.methods["destX"] = reader_musical_destX_1885;
          obj1614.data["destX"] = call1884;
          var writer_musical_destX_1885 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1614.methods["destX:="] = writer_musical_destX_1885;
          reader_musical_destX_1885.confidential = true;
          writer_musical_destX_1885.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1884)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 57
          onSelf = true;
          var call1886 = callmethod(this, "y", [0]);
          obj1614.data["destY"] = call1886;
          var reader_musical_destY_1887 = function() {
            return this.data["destY"];
          }
          obj1614.methods["destY"] = reader_musical_destY_1887;
          obj1614.data["destY"] = call1886;
          var writer_musical_destY_1887 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1614.methods["destY:="] = writer_musical_destY_1887;
          reader_musical_destY_1887.confidential = true;
          writer_musical_destY_1887.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1886)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1614.mutable = true;
          sourceObject = obj1614;
          lineNumber = 58
          obj1614.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1888 = function() {
            return this.data["angle"];
          }
          obj1614.methods["angle"] = reader_musical_angle_1888;
          obj1614.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1888 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1614.methods["angle:="] = writer_musical_angle_1888;
          reader_musical_angle_1888.confidential = true;
          writer_musical_angle_1888.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
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
    obj1335.methods["new()object"] = func1613;
    var func1889 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1890 = new GraceString("class drawable");
        return string1890
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1889.paramCounts = [
    ];
    func1889.variableArities = [
    ];
    obj1335.methods["asDebugString"] = func1889;
    func1889.definitionLine = 48;
    func1889.definitionModule = "musical";
    sourceObject = obj1335;
    sourceObject = obj1335;
    superDepth = origSuperDepth;
  }
  obj_init_1335.apply(obj1335, []);
  var var_drawable = obj1335;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1891 = Grace_allocObject();
  obj1891.definitionModule = "musical";
  obj1891.definitionLine = 316;
  obj1891.outer = this;
  var reader_musical_outer_1892 = function() {
    return this.outer;
  }
  obj1891.methods["outer"] = reader_musical_outer_1892;
  function obj_init_1891() {
    var origSuperDepth = superDepth;
    superDepth = obj1891;
    obj1891.annotations = [];
    var func1893 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1893.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1894 = callmethod(this, "position", [0]);
        var call1895 = callmethod(call1894,"x", [0]);
        return call1895
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1893.paramCounts = [
      0,
    ];
    func1893.variableArities = [
      false,
    ];
    obj1891.methods["x"] = func1893;
    func1893.definitionLine = 318;
    func1893.definitionModule = "musical";
    var func1896 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1896.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1897 = callmethod(this, "position", [0]);
        var call1898 = callmethod(call1897,"y", [0]);
        return call1898
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1896.paramCounts = [
      0,
    ];
    func1896.variableArities = [
      false,
    ];
    obj1891.methods["y"] = func1896;
    func1896.definitionLine = 321;
    func1896.definitionModule = "musical";
    var func1899 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1899.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1900 = callmethod(this, "position", [0]);
        return call1900
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1899.paramCounts = [
      0,
    ];
    func1899.variableArities = [
      false,
    ];
    obj1891.methods["location"] = func1899;
    func1899.definitionLine = 324;
    func1899.definitionModule = "musical";
    sourceObject = obj1891;
    lineNumber = 317
    var call1901 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1891.data["position"] = call1901;
    var reader_musical_position_1902 = function() {
      return this.data["position"];
    }
    obj1891.methods["position"] = reader_musical_position_1902;
    obj1891.data["position"] = call1901;
    var writer_musical_position_1902 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1891.methods["position:="] = writer_musical_position_1902;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1901)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1891.mutable = true;
    sourceObject = obj1891;
    sourceObject = obj1891;
    sourceObject = obj1891;
    superDepth = origSuperDepth;
  }
  obj_init_1891.apply(obj1891, []);
  var var_mouse = obj1891;
  lineNumber = 322
  var func1903 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1903.paramCounts[0])
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
  func1903.paramCounts = [
    0,
  ];
  func1903.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1903;
  func1903.definitionLine = 322;
  func1903.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 409
  lineNumber = 471
  lineNumber = 504
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1904 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1904.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 504
      return var_octave
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
  this.methods["octave"] = func1904;
  func1904.definitionLine = 322;
  func1904.definitionModule = "musical";
  lineNumber = 322
  var func1905 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1905.paramCounts[0])
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
  func1905.paramCounts = [
    1,
  ];
  func1905.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1905;
  func1905.definitionLine = 322;
  func1905.definitionModule = "musical";
  lineNumber = 504;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 506
  lineNumber = 507
  lineNumber = 506
  var bool1906 = new GraceBoolean(false)
  var var_applyFlat = bool1906;
  lineNumber = 322
  var func1907 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1907.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 506
      return var_applyFlat
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
  this.methods["applyFlat"] = func1907;
  func1907.definitionLine = 322;
  func1907.definitionModule = "musical";
  lineNumber = 322
  var func1908 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1908.paramCounts[0])
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
  func1908.paramCounts = [
    1,
  ];
  func1908.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1908;
  func1908.definitionLine = 322;
  func1908.definitionModule = "musical";
  lineNumber = 507;
  moduleName = "musical";
  lineNumber = 506
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 509
  lineNumber = 507
  var bool1909 = new GraceBoolean(false)
  var var_applySharp = bool1909;
  lineNumber = 322
  var func1910 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1910.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 507
      return var_applySharp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1910.paramCounts = [
    0,
  ];
  func1910.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1910;
  func1910.definitionLine = 322;
  func1910.definitionModule = "musical";
  lineNumber = 322
  var func1911 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1911.paramCounts[0])
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
  func1911.paramCounts = [
    1,
  ];
  func1911.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1911;
  func1911.definitionLine = 322;
  func1911.definitionModule = "musical";
  lineNumber = 509;
  moduleName = "musical";
  lineNumber = 507
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 509
  lineNumber = 510
  lineNumber = 509
  var bool1912 = new GraceBoolean(false)
  var var_applyChorus = bool1912;
  lineNumber = 322
  var func1913 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1913.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 509
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1913.paramCounts = [
    0,
  ];
  func1913.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1913;
  func1913.definitionLine = 322;
  func1913.definitionModule = "musical";
  lineNumber = 322
  var func1914 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1914.paramCounts[0])
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
  func1914.paramCounts = [
    1,
  ];
  func1914.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1914;
  func1914.definitionLine = 322;
  func1914.definitionModule = "musical";
  lineNumber = 510;
  moduleName = "musical";
  lineNumber = 509
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 511
  lineNumber = 510
  var bool1915 = new GraceBoolean(false)
  var var_applyReverb = bool1915;
  lineNumber = 322
  var func1916 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1916.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 510
      return var_applyReverb
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
  this.methods["applyReverb"] = func1916;
  func1916.definitionLine = 322;
  func1916.definitionModule = "musical";
  lineNumber = 322
  var func1917 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1917.paramCounts[0])
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
  func1917.paramCounts = [
    1,
  ];
  func1917.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1917;
  func1917.definitionLine = 322;
  func1917.definitionModule = "musical";
  lineNumber = 511;
  moduleName = "musical";
  lineNumber = 510
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 512
  lineNumber = 511
  var bool1918 = new GraceBoolean(false)
  var var_applyAutowah = bool1918;
  lineNumber = 322
  var func1919 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1919.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 511
      return var_applyAutowah
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
  this.methods["applyAutowah"] = func1919;
  func1919.definitionLine = 322;
  func1919.definitionModule = "musical";
  lineNumber = 322
  var func1920 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1920.paramCounts[0])
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
  func1920.paramCounts = [
    1,
  ];
  func1920.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1920;
  func1920.definitionLine = 322;
  func1920.definitionModule = "musical";
  lineNumber = 512;
  moduleName = "musical";
  lineNumber = 511
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 514
  lineNumber = 512
  var bool1921 = new GraceBoolean(false)
  var var_applyCheby = bool1921;
  lineNumber = 322
  var func1922 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1922.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 512
      return var_applyCheby
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
  this.methods["applyCheby"] = func1922;
  func1922.definitionLine = 322;
  func1922.definitionModule = "musical";
  lineNumber = 322
  var func1923 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1923.paramCounts[0])
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
  func1923.paramCounts = [
    1,
  ];
  func1923.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1923;
  func1923.definitionLine = 322;
  func1923.definitionModule = "musical";
  lineNumber = 514;
  moduleName = "musical";
  lineNumber = 512
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 514
  lineNumber = 519
  lineNumber = 514
  var bool1924 = new GraceBoolean(true)
  var var_firstPass = bool1924;
  lineNumber = 322
  var func1925 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1925.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 514
      return var_firstPass
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
  this.methods["firstPass"] = func1925;
  func1925.definitionLine = 322;
  func1925.definitionModule = "musical";
  lineNumber = 322
  var func1926 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1926.paramCounts[0])
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
  func1926.paramCounts = [
    1,
  ];
  func1926.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1926;
  func1926.definitionLine = 322;
  func1926.definitionModule = "musical";
  lineNumber = 519;
  moduleName = "musical";
  lineNumber = 514
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 519
  lineNumber = 550
  lineNumber = 560
  lineNumber = 567
  lineNumber = 578
  lineNumber = 587
  lineNumber = 592
  lineNumber = 597
  lineNumber = 602
  lineNumber = 607
  lineNumber = 612
  lineNumber = 617
  lineNumber = 624
  lineNumber = 641
  lineNumber = 647
  lineNumber = 653
  lineNumber = 659
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "fresh:image:\n destX:=\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n width\n isPointOver\n stamp\n angle\n whenever()do\n height:=\n bounceOff\n height\n moveTo\n touching\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n width:=\n imgTag\n mousedown\n turn\n url:=\n tick\n bounce\n draw\n alwaysBlocks\n normaliseAngle\n url\nconstructors-of:point:\n x()y\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:drawable.new:\n bounceFrom\n bounceOff\n moveTo\n touching\n jumpTo\n destY:=\n face\n destX\n destY\n x:=\n y:=\n always\n forward\n destX:=\n x\n y\n touchingEdge\n step\n angle:=\n mousedown\n isPointOver\n stamp\n angle\n whenever()do\n turn\n tick\n bounce\n draw\n alwaysBlocks\n normaliseAngle\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:circle:\n colour\n destX:=\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n isPointOver\n stamp\n angle\n whenever()do\n colour:=\n bounceOff\n moveTo\n touching\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n radius:=\n mousedown\n turn\n tick\n normaliseAngle\n bounce\n draw\n alwaysBlocks\n radius\nfresh:rectangle:\n colour\n destX:=\n face\n y:=\n forward\n touchingEdge\n x\n y\n asString\n step\n angle:=\n width\n isPointOver\n stamp\n angle\n whenever()do\n colour:=\n height:=\n bounceOff\n height\n moveTo\n touching\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n width:=\n mousedown\n turn\n tick\n bounce\n draw\n alwaysBlocks\n normaliseAngle\nmethods-of:point.x()y:\n up\n x\n y\n left\n right\n down\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n colour\n destX:=\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n label\n isPointOver\n stamp\n angle\n whenever()do\n colour:=\n bounceOff\n moveTo\n touching\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n label:=\n mousedown\n turn\n tick\n bounce\n draw\n alwaysBlocks\n normaliseAngle\nconfidential:\n";
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
    "        stop",
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
    "    // dom.window.console.log(\"start\");",
    "    // dom.window.console.log(\"start\");",
    "",
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
    "        mctx.fillRect(canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)",
    "    }",
    "    mctx.fillStyle := \"green\"",
    "    mctx.fillRect(canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)",
    "",
    "}",
    "method stop {",
    "    stopRunning := true",
    "    canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
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
    "//  - Should rouge notes be played by a default instrument or just ignored?",
    "//  - Can I contrain number parameters? For example, from 0 - 100?",
    "//  - Adjust amount of Effect",
    "//  - Allowing picking of instruments for arpeggio ",
    "//  - Volume",
    "//  - Add timing of instruments 4n/8n/16n",
    "//  - Can't get pre configured grace files to load properly",
    "//  - Constraints, making sure can't make bad code",
    "//  - Stretch Goal: Being able to run individual components",
    "//  - numbers automatically in there??",
    "//  - a number input already in there??",
    "//  - can i stop people putting things into holes",
    "",
    "",
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
    "var firstPass := true",
    "",
    "// * Notes",
    "// ******************",
    "",
    "method Note(note){",
    "    if (applyFlat == true) then {",
    "        dom.window.t_add(\"{note}b{octave}\")",
    "        return \"{note}b\"",
    "    }",
    "    if (applySharp == true) then {",
    "        dom.window.t_add(\"{note}#{octave}\")",
    "        return \"{note}#\"",
    "    }",
    "    dom.window.t_add(\"{note}{octave}\")",
    "    return \"{note}\"",
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
    "    dom.window.t_synth_mono()",
    "}",
    "",
    "method pluckSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_pluck()",
    "}",
    "",
    "method polySynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_poly()",
    "}",
    "",
    "method fmSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_fm()",
    "}",
    "",
    "method membraneSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_membrane()",
    "}",
    "",
    "method duoSynth(blocks){",
    "    Instrument(blocks)",
    "    dom.window.t_synth_duo()",
    "}",
    "",
    "method arpeggio(note){",
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
    "",
  ];
}
