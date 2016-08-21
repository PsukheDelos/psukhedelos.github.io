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
      lineNumber = 368
      var string810 = new GraceString("initialise");
      var call811 = callmethod(var_dom,"window", [0]);
      var call812 = callmethod(call811,"console", [0]);
      var call813 = callmethod(call812,"log", [1], string810);
      lineNumber = 372
      var if814 = var_done;
      lineNumber = 369
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 371
        lineNumber = 370
        var bool815 = new GraceBoolean(false)
        return bool815
      }
      lineNumber = 373
      lineNumber = 372
      var bool816 = new GraceBoolean(true)
      var_initialised = bool816;
      lineNumber = 374
      lineNumber = 373
      var call817 = callmethod(var_dom,"document", [0]);
      var_document = call817;
      lineNumber = 374
      var string818 = new GraceString("standard-canvas");
      var call819 = callmethod(var_document,"getElementById", [1], string818);
      var_canvas = call819;
      lineNumber = 376
      lineNumber = 375
      var call820 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call820;
      lineNumber = 377
      lineNumber = 376
      var call821 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call821;
      lineNumber = 377
      var quotient824 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient827 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call828 = callmethod(var_point,"x()y", [1, 1], quotient824, quotient827);
      var_centre = call828;
      lineNumber = 378
      var quotient831 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call832 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient831);
      var_leftCentre = call832;
      lineNumber = 379
      var quotient835 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call836 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient835);
      var_rightCentre = call836;
      lineNumber = 383
      lineNumber = 376
      lineNumber = 380
      var call837 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 388
      var block838 = Grace_allocObject();
      block838.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block838.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block838.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block838.methods["match"] = GraceBlock_match;
      block838.methods["prefix?"] = GraceBlock_lift;
      block838.receiver = this;
      block838.className = 'block<musical:388>';
      block838.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 385
        lineNumber = 384
        var call840 = callmethod(var_canvas,"offsetWidth", [0]);
        var call842 = callmethod(var_canvas,"offsetLeft", [0]);
        var call844 = callmethod(var_ev,"clientX", [0]);
        var diff846 = callmethod(call844, "-", [1], call842);
        var quotient848 = callmethod(diff846, "/", [1], call840);
        var prod850 = callmethod(quotient848, "*", [1], var_canvasHeight);
        var var_x = prod850;
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
        var call852 = callmethod(var_canvas,"offsetHeight", [0]);
        var call855 = callmethod(var_canvas,"offsetTop", [0]);
        var call857 = callmethod(var_ev,"clientY", [0]);
        var diff859 = callmethod(call857, "-", [1], call855);
        var diff861 = callmethod(diff859, "-", [1], new GraceNum(7));
        var quotient863 = callmethod(diff861, "/", [1], call852);
        var prod865 = callmethod(quotient863, "*", [1], var_canvasHeight);
        var var_y = prod865;
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
        var call866 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call867 = callmethod(var_mouse,"position:=", [1], call866);
        return call867;
      };
      var_mouseMoveListener = block838;
      lineNumber = 388
      var string868 = new GraceString("mousemove");
      var call869 = callmethod(var_canvas,"addEventListener", [2], string868, var_mouseMoveListener);
      lineNumber = 404
      var block870 = Grace_allocObject();
      block870.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block870.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block870.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block870.methods["match"] = GraceBlock_match;
      block870.methods["prefix?"] = GraceBlock_lift;
      block870.receiver = this;
      block870.className = 'block<musical:404>';
      block870.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 391
        lineNumber = 390
        var call872 = callmethod(var_canvas,"offsetWidth", [0]);
        var call874 = callmethod(var_canvas,"offsetLeft", [0]);
        var call876 = callmethod(var_ev,"clientX", [0]);
        var diff878 = callmethod(call876, "-", [1], call874);
        var quotient880 = callmethod(diff878, "/", [1], call872);
        var prod882 = callmethod(quotient880, "*", [1], var_canvasHeight);
        var var_x = prod882;
        lineNumber = 391;
        moduleName = "musical";
        lineNumber = 390
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 392
        lineNumber = 391
        var call884 = callmethod(var_canvas,"offsetHeight", [0]);
        var call886 = callmethod(var_canvas,"offsetTop", [0]);
        var call888 = callmethod(var_ev,"clientY", [0]);
        var diff890 = callmethod(call888, "-", [1], call886);
        var quotient892 = callmethod(diff890, "/", [1], call884);
        var prod894 = callmethod(quotient892, "*", [1], var_canvasHeight);
        var var_y = prod894;
        lineNumber = 392;
        moduleName = "musical";
        lineNumber = 391
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 396
        var if895 = var_done;
        lineNumber = 392
        var opresult898 = callmethod(var_y, "<", [1], new GraceNum(20));
        var diff902 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var opresult905 = callmethod(var_x, ">", [1], diff902);
        var opresult907 = callmethod(opresult905, "&&", [1], opresult898);
        if (Grace_isTrue(opresult907)) {
          lineNumber = 393
          var call908 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 394
          onSelf = true;
          var call909 = callmethod(this, "stop", [0]);
          if895 = call909;
        }
        lineNumber = 396
        var call910 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call910;
        lineNumber = 396;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 397
        lineNumber = 403
        var block911 = Grace_allocObject();
        block911.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block911.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block911.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block911.methods["match"] = GraceBlock_match;
        block911.methods["prefix?"] = GraceBlock_lift;
        block911.receiver = this;
        block911.className = 'block<musical:403>';
        block911.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 402
          var if912 = var_done;
          lineNumber = 398
          var call913 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call913)) {
            lineNumber = 399
            var call914 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 400
            var call915 = callmethod(var_ev,"preventDefault", [0]);
            if912 = call915;
          }
          return if912;
        };
        var call916 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block911);
        return call916;
      };
      var_mouseDownListener = block870;
      lineNumber = 404
      var string917 = new GraceString("mousedown");
      var call918 = callmethod(var_canvas,"addEventListener", [2], string917, var_mouseDownListener);
      return call918
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
  var func919 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func919.paramCounts[0])
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
  func919.paramCounts = [
    1,
  ];
  func919.variableArities = [
    false,
  ];
  this.methods["background"] = func919;
  func919.definitionLine = 406;
  func919.definitionModule = "musical";
  lineNumber = 409
  var func920 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func920.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 410
      var call921 = callmethod(var_randomModule,"random", [0]);
      var prod924 = callmethod(var_n, "*", [1], call921);
      var call925 = callmethod(prod924,"truncate", [0]);
      return call925
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func920.paramCounts = [
    1,
  ];
  func920.variableArities = [
    false,
  ];
  this.methods["random"] = func920;
  func920.definitionLine = 409;
  func920.definitionModule = "musical";
  lineNumber = 413
  var func926 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func926.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 425
      var if927 = var_done;
      lineNumber = 414
      var call928 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call928)) {
        lineNumber = 415
        var call929 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call929;
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
        var call930 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 417
        var call931 = callmethod(var_audio,"play", [0]);
        if927 = call931;
      } else {
        lineNumber = 419
        var string932 = new GraceString("audio");
        var call933 = callmethod(var_dom,"document", [0]);
        var call934 = callmethod(call933,"createElement", [1], string932);
        var var_audio = call934;
        lineNumber = 419;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 420
        var call935 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 422
        lineNumber = 419
        lineNumber = 421
        var call936 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 422
        var call937 = callmethod(var_audio,"load", [0]);
        lineNumber = 423
        var call938 = callmethod(var_audio,"play", [0]);
        if927 = call938;
      }
      return if927
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func926.paramCounts = [
    1,
  ];
  func926.variableArities = [
    false,
  ];
  this.methods["playSound"] = func926;
  func926.definitionLine = 413;
  func926.definitionModule = "musical";
  lineNumber = 426
  var func939 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func939.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 431
      var if940 = var_done;
      lineNumber = 427
      var call941 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call941)) {
        lineNumber = 428
        var call942 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call942;
        lineNumber = 428;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 429
        var call943 = callmethod(var_audio,"pause", [0]);
        if940 = call943;
      }
      return if940
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func939.paramCounts = [
    1,
  ];
  func939.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func939;
  func939.definitionLine = 426;
  func939.definitionModule = "musical";
  lineNumber = 432
  var func944 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func944.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 433
      onSelf = true;
      var call945 = callmethod(this, "initialise", [0]);
      lineNumber = 435
      var string946 = new GraceString("start");
      var call947 = callmethod(var_dom,"window", [0]);
      var call948 = callmethod(call947,"console", [0]);
      var call949 = callmethod(call948,"log", [1], string946);
      lineNumber = 438
      lineNumber = 437
      var bool950 = new GraceBoolean(false)
      var_stopRunning = bool950;
      lineNumber = 438
      var string951 = new GraceString("canvas");
      var call952 = callmethod(var_dom,"document", [0]);
      var call953 = callmethod(call952,"createElement", [1], string951);
      var_backingCanvas = call953;
      lineNumber = 440
      lineNumber = 438
      lineNumber = 439
      var call954 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 441
      lineNumber = 438
      lineNumber = 440
      var call955 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 441
      var string956 = new GraceString("2d");
      var call957 = callmethod(var_backingCanvas,"getContext", [1], string956);
      var_backingContext = call957;
      lineNumber = 442
      var string958 = new GraceString("2d");
      var call959 = callmethod(var_canvas,"getContext", [1], string958);
      var var_mctx = call959;
      lineNumber = 442;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 443
      var block960 = Grace_allocObject();
      block960.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block960.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block960.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block960.methods["match"] = GraceBlock_match;
      block960.methods["prefix?"] = GraceBlock_lift;
      block960.receiver = this;
      block960.className = 'block<musical:443>';
      block960.real = function(
      ) {
        sourceObject = this;
        var call961 = callmethod(var_stopRunning,"prefix!", [0]);
        return call961;
      };
      lineNumber = 460
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
      block962.className = 'block<musical:460>';
      block962.real = function(
      ) {
        sourceObject = this;
        lineNumber = 444
        lineNumber = 447
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
        block963.className = 'block<musical:447>';
        block963.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 445
          var call964 = callmethod(var_obj,"step", [0]);
          return call964;
        };
        var call965 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block963);
        lineNumber = 447
        lineNumber = 450
        var block966 = Grace_allocObject();
        block966.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block966.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block966.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block966.methods["match"] = GraceBlock_match;
        block966.methods["prefix?"] = GraceBlock_lift;
        block966.receiver = this;
        block966.className = 'block<musical:450>';
        block966.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 448
          var call967 = callmethod(var_step,"apply", [0]);
          return call967;
        };
        var call968 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block966);
        lineNumber = 451
        lineNumber = 448
        lineNumber = 450
        var call969 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 451
        var call970 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 452
        var call971 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 453
        lineNumber = 456
        var block972 = Grace_allocObject();
        block972.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block972.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block972.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block972.methods["match"] = GraceBlock_match;
        block972.methods["prefix?"] = GraceBlock_lift;
        block972.receiver = this;
        block972.className = 'block<musical:456>';
        block972.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 454
          var call973 = callmethod(var_obj,"draw", [1], var_mctx);
          return call973;
        };
        var call974 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block972);
        lineNumber = 457
        lineNumber = 448
        lineNumber = 456
        var string975 = new GraceString("red");
        var call976 = callmethod(var_mctx,"fillStyle:=", [1], string975);
        lineNumber = 457
        var diff979 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call980 = callmethod(var_mctx,"fillRect", [4], diff979, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call980;
      };
      lineNumber = 443
      var call981 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block960, new GraceNum(10), block962);
      return call981
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func944.paramCounts = [
    0,
  ];
  func944.variableArities = [
    false,
  ];
  this.methods["start"] = func944;
  func944.definitionLine = 432;
  func944.definitionModule = "musical";
  lineNumber = 461
  var func982 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func982.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 463
      lineNumber = 462
      var bool983 = new GraceBoolean(true)
      var_stopRunning = bool983;
      lineNumber = 463
      var string984 = new GraceString("mousedown");
      var call985 = callmethod(var_canvas,"removeEventListener", [2], string984, var_mouseDownListener);
      lineNumber = 464
      var string986 = new GraceString("mousemove");
      var call987 = callmethod(var_canvas,"removeEventListener", [2], string986, var_mouseMoveListener);
      return call987
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func982.paramCounts = [
    0,
  ];
  func982.variableArities = [
    false,
  ];
  this.methods["stop"] = func982;
  func982.definitionLine = 461;
  func982.definitionModule = "musical";
  lineNumber = 468
  var func988 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func988.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 469
      onSelf = true;
      var call989 = callmethod(this, "start", [0]);
      lineNumber = 471
      var call990 = callmethod(var_dom,"window", [0]);
      var call991 = callmethod(call990,"t_play", [0]);
      return call991
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
  this.methods["atModuleEnd"] = func988;
  func988.definitionLine = 468;
  func988.definitionModule = "musical";
  lineNumber = 506
  var func992 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func992.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 511
      var if993 = var_done;
      lineNumber = 507
      var bool994 = new GraceBoolean(true)
      var opresult997 = callmethod(var_applyFlat, "==", [1], bool994);
      if (Grace_isTrue(opresult997)) {
        lineNumber = 508
        var string998 = new GraceString("");
        var string1001 = new GraceString("b");
        var string1004 = new GraceString("");
        var opresult1006 = callmethod(string1004, "++", [1], var_note);
        var opresult1008 = callmethod(opresult1006, "++", [1], string1001);
        var opresult1010 = callmethod(opresult1008, "++", [1], var_octave);
        var opresult1012 = callmethod(opresult1010, "++", [1], string998);
        var call1013 = callmethod(var_dom,"window", [0]);
        var call1014 = callmethod(call1013,"t_add", [1], opresult1012);
        lineNumber = 510
        lineNumber = 509
        var string1015 = new GraceString("b");
        var string1018 = new GraceString("");
        var opresult1020 = callmethod(string1018, "++", [1], var_note);
        var opresult1022 = callmethod(opresult1020, "++", [1], string1015);
        return opresult1022
      }
      lineNumber = 515
      var if1023 = var_done;
      lineNumber = 511
      var bool1024 = new GraceBoolean(true)
      var opresult1027 = callmethod(var_applySharp, "==", [1], bool1024);
      if (Grace_isTrue(opresult1027)) {
        lineNumber = 512
        var string1028 = new GraceString("");
        var string1031 = new GraceString("#");
        var string1034 = new GraceString("");
        var opresult1036 = callmethod(string1034, "++", [1], var_note);
        var opresult1038 = callmethod(opresult1036, "++", [1], string1031);
        var opresult1040 = callmethod(opresult1038, "++", [1], var_octave);
        var opresult1042 = callmethod(opresult1040, "++", [1], string1028);
        var call1043 = callmethod(var_dom,"window", [0]);
        var call1044 = callmethod(call1043,"t_add", [1], opresult1042);
        lineNumber = 514
        lineNumber = 513
        var string1045 = new GraceString("#");
        var string1048 = new GraceString("");
        var opresult1050 = callmethod(string1048, "++", [1], var_note);
        var opresult1052 = callmethod(opresult1050, "++", [1], string1045);
        return opresult1052
      }
      lineNumber = 515
      var string1053 = new GraceString("");
      var string1056 = new GraceString("");
      var string1059 = new GraceString("");
      var opresult1061 = callmethod(string1059, "++", [1], var_note);
      var opresult1063 = callmethod(opresult1061, "++", [1], string1056);
      var opresult1065 = callmethod(opresult1063, "++", [1], var_octave);
      var opresult1067 = callmethod(opresult1065, "++", [1], string1053);
      var call1068 = callmethod(var_dom,"window", [0]);
      var call1069 = callmethod(call1068,"t_add", [1], opresult1067);
      lineNumber = 517
      lineNumber = 516
      var string1070 = new GraceString("");
      var string1073 = new GraceString("");
      var opresult1075 = callmethod(string1073, "++", [1], var_note);
      var opresult1077 = callmethod(opresult1075, "++", [1], string1070);
      return opresult1077
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
  this.methods["Note"] = func992;
  func992.definitionLine = 506;
  func992.definitionModule = "musical";
  lineNumber = 519
  var func1078 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1078.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 520
      var string1079 = new GraceString("C");
      onSelf = true;
      var call1080 = callmethod(this, "Note", [1], string1079);
      return call1080
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1078.paramCounts = [
    0,
  ];
  func1078.variableArities = [
    false,
  ];
  this.methods["C"] = func1078;
  func1078.definitionLine = 519;
  func1078.definitionModule = "musical";
  lineNumber = 522
  var func1081 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1081.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 523
      var string1082 = new GraceString("D");
      onSelf = true;
      var call1083 = callmethod(this, "Note", [1], string1082);
      return call1083
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1081.paramCounts = [
    0,
  ];
  func1081.variableArities = [
    false,
  ];
  this.methods["D"] = func1081;
  func1081.definitionLine = 522;
  func1081.definitionModule = "musical";
  lineNumber = 525
  var func1084 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1084.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 526
      var string1085 = new GraceString("E");
      onSelf = true;
      var call1086 = callmethod(this, "Note", [1], string1085);
      return call1086
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1084.paramCounts = [
    0,
  ];
  func1084.variableArities = [
    false,
  ];
  this.methods["E"] = func1084;
  func1084.definitionLine = 525;
  func1084.definitionModule = "musical";
  lineNumber = 528
  var func1087 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1087.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 529
      var string1088 = new GraceString("F");
      onSelf = true;
      var call1089 = callmethod(this, "Note", [1], string1088);
      return call1089
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1087.paramCounts = [
    0,
  ];
  func1087.variableArities = [
    false,
  ];
  this.methods["F"] = func1087;
  func1087.definitionLine = 528;
  func1087.definitionModule = "musical";
  lineNumber = 531
  var func1090 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1090.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 532
      var string1091 = new GraceString("G");
      onSelf = true;
      var call1092 = callmethod(this, "Note", [1], string1091);
      return call1092
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1090.paramCounts = [
    0,
  ];
  func1090.variableArities = [
    false,
  ];
  this.methods["G"] = func1090;
  func1090.definitionLine = 531;
  func1090.definitionModule = "musical";
  lineNumber = 534
  var func1093 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1093.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 535
      var string1094 = new GraceString("A");
      onSelf = true;
      var call1095 = callmethod(this, "Note", [1], string1094);
      return call1095
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1093.paramCounts = [
    0,
  ];
  func1093.variableArities = [
    false,
  ];
  this.methods["A"] = func1093;
  func1093.definitionLine = 534;
  func1093.definitionModule = "musical";
  lineNumber = 537
  var func1096 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1096.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 538
      var string1097 = new GraceString("B");
      onSelf = true;
      var call1098 = callmethod(this, "Note", [1], string1097);
      return call1098
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1096.paramCounts = [
    0,
  ];
  func1096.variableArities = [
    false,
  ];
  this.methods["B"] = func1096;
  func1096.definitionLine = 537;
  func1096.definitionModule = "musical";
  lineNumber = 541
  var func1099 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1099.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 543
      lineNumber = 542
      var bool1100 = new GraceBoolean(true)
      var_applyFlat = bool1100;
      lineNumber = 544
      lineNumber = 543
      var call1101 = callmethod(var_note,"apply", [0]);
      var var_ret = call1101;
      lineNumber = 544;
      moduleName = "musical";
      lineNumber = 543
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 545
      lineNumber = 544
      var bool1102 = new GraceBoolean(false)
      var_applyFlat = bool1102;
      lineNumber = 546
      lineNumber = 545
      return var_ret
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
  this.methods["flat"] = func1099;
  func1099.definitionLine = 541;
  func1099.definitionModule = "musical";
  lineNumber = 547
  var func1103 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1103.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 549
      lineNumber = 548
      var bool1104 = new GraceBoolean(true)
      var_applySharp = bool1104;
      lineNumber = 550
      lineNumber = 549
      var call1105 = callmethod(var_note,"apply", [0]);
      var var_ret = call1105;
      lineNumber = 550;
      moduleName = "musical";
      lineNumber = 549
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 551
      lineNumber = 550
      var bool1106 = new GraceBoolean(false)
      var_applySharp = bool1106;
      lineNumber = 552
      lineNumber = 551
      return var_ret
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
  this.methods["sharp"] = func1103;
  func1103.definitionLine = 547;
  func1103.definitionModule = "musical";
  lineNumber = 554
  var func1107 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1107.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1107.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 556
      lineNumber = 555
      var var_oldOctave = var_octave;
      lineNumber = 556;
      moduleName = "musical";
      lineNumber = 555
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 557
      lineNumber = 556
      var_octave = var_num;
      lineNumber = 558
      lineNumber = 557
      var call1108 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1108;
      lineNumber = 558;
      moduleName = "musical";
      lineNumber = 557
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 559
      lineNumber = 558
      var_octave = var_oldOctave;
      lineNumber = 560
      lineNumber = 559
      return var_ret
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
    1,
  ];
  func1107.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1107;
  func1107.definitionLine = 554;
  func1107.definitionModule = "musical";
  lineNumber = 565
  var func1109 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1109.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 570
      var if1110 = var_done;
      lineNumber = 566
      var bool1111 = new GraceBoolean(true)
      var opresult1114 = callmethod(var_firstPass, "==", [1], bool1111);
      if (Grace_isTrue(opresult1114)) {
        lineNumber = 567
        var call1115 = callmethod(var_dom,"window", [0]);
        var call1116 = callmethod(call1115,"t_reset", [0]);
        lineNumber = 569
        lineNumber = 568
        var bool1117 = new GraceBoolean(false)
        var_firstPass = bool1117;
        if1110 = bool1117;
      }
      lineNumber = 570
      var call1118 = callmethod(var_dom,"window", [0]);
      var call1119 = callmethod(call1118,"t_init", [0]);
      lineNumber = 571
      var call1120 = callmethod(var_blocks,"apply", [0]);
      return call1120
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
  this.methods["Instrument"] = func1109;
  func1109.definitionLine = 565;
  func1109.definitionModule = "musical";
  lineNumber = 574
  var func1121 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1121.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 575
      onSelf = true;
      var call1122 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 576
      var call1123 = callmethod(var_dom,"window", [0]);
      var call1124 = callmethod(call1123,"t_synth_mono", [0]);
      return call1124
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1121.paramCounts = [
    1,
  ];
  func1121.variableArities = [
    false,
  ];
  this.methods["monoSynth"] = func1121;
  func1121.definitionLine = 574;
  func1121.definitionModule = "musical";
  lineNumber = 579
  var func1125 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1125.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 580
      onSelf = true;
      var call1126 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 581
      var call1127 = callmethod(var_dom,"window", [0]);
      var call1128 = callmethod(call1127,"t_synth_pluck", [0]);
      return call1128
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1125.paramCounts = [
    1,
  ];
  func1125.variableArities = [
    false,
  ];
  this.methods["pluckSynth"] = func1125;
  func1125.definitionLine = 579;
  func1125.definitionModule = "musical";
  lineNumber = 584
  var func1129 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1129.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 585
      onSelf = true;
      var call1130 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 586
      var call1131 = callmethod(var_dom,"window", [0]);
      var call1132 = callmethod(call1131,"t_synth_poly", [0]);
      return call1132
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1129.paramCounts = [
    1,
  ];
  func1129.variableArities = [
    false,
  ];
  this.methods["polySynth"] = func1129;
  func1129.definitionLine = 584;
  func1129.definitionModule = "musical";
  lineNumber = 589
  var func1133 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1133.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 590
      onSelf = true;
      var call1134 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 591
      var call1135 = callmethod(var_dom,"window", [0]);
      var call1136 = callmethod(call1135,"t_synth_fm", [0]);
      return call1136
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
  this.methods["fmSynth"] = func1133;
  func1133.definitionLine = 589;
  func1133.definitionModule = "musical";
  lineNumber = 594
  var func1137 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1137.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 595
      onSelf = true;
      var call1138 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 596
      var call1139 = callmethod(var_dom,"window", [0]);
      var call1140 = callmethod(call1139,"t_synth_membrane", [0]);
      return call1140
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1137.paramCounts = [
    1,
  ];
  func1137.variableArities = [
    false,
  ];
  this.methods["membraneSynth"] = func1137;
  func1137.definitionLine = 594;
  func1137.definitionModule = "musical";
  lineNumber = 599
  var func1141 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1141.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 600
      onSelf = true;
      var call1142 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 601
      var call1143 = callmethod(var_dom,"window", [0]);
      var call1144 = callmethod(call1143,"t_synth_duo", [0]);
      return call1144
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
  this.methods["duoSynth"] = func1141;
  func1141.definitionLine = 599;
  func1141.definitionModule = "musical";
  lineNumber = 604
  var func1145 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1145.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (arpeggio)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 605
      var call1146 = callmethod(var_dom,"window", [0]);
      var call1147 = callmethod(call1146,"t_synth_arpeggio", [1], var_note);
      return call1147
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
  this.methods["arpeggio"] = func1145;
  func1145.definitionLine = 604;
  func1145.definitionModule = "musical";
  lineNumber = 611
  var func1148 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1148.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 615
      var if1149 = var_done;
      lineNumber = 612
      var bool1150 = new GraceBoolean(true)
      var opresult1153 = callmethod(var_applyChorus, "==", [1], bool1150);
      if (Grace_isTrue(opresult1153)) {
        lineNumber = 613
        var call1154 = callmethod(var_dom,"window", [0]);
        var call1155 = callmethod(call1154,"t_effect_chorus", [0]);
        if1149 = call1155;
      }
      lineNumber = 618
      var if1156 = var_done;
      lineNumber = 615
      var bool1157 = new GraceBoolean(true)
      var opresult1160 = callmethod(var_applyReverb, "==", [1], bool1157);
      if (Grace_isTrue(opresult1160)) {
        lineNumber = 616
        var call1161 = callmethod(var_dom,"window", [0]);
        var call1162 = callmethod(call1161,"t_effect_reverb", [0]);
        if1156 = call1162;
      }
      lineNumber = 621
      var if1163 = var_done;
      lineNumber = 618
      var bool1164 = new GraceBoolean(true)
      var opresult1167 = callmethod(var_applyAutowah, "==", [1], bool1164);
      if (Grace_isTrue(opresult1167)) {
        lineNumber = 619
        var call1168 = callmethod(var_dom,"window", [0]);
        var call1169 = callmethod(call1168,"t_effect_autowah", [0]);
        if1163 = call1169;
      }
      lineNumber = 624
      var if1170 = var_done;
      lineNumber = 621
      var bool1171 = new GraceBoolean(true)
      var opresult1174 = callmethod(var_applyCheby, "==", [1], bool1171);
      if (Grace_isTrue(opresult1174)) {
        lineNumber = 622
        var call1175 = callmethod(var_dom,"window", [0]);
        var call1176 = callmethod(call1175,"t_effect_cheby", [0]);
        if1170 = call1176;
      }
      lineNumber = 624
      var call1177 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 625
      var call1178 = callmethod(var_dom,"window", [0]);
      var call1179 = callmethod(call1178,"t_effect_reset", [0]);
      return call1179
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
  this.methods["Effect"] = func1148;
  func1148.definitionLine = 611;
  func1148.definitionModule = "musical";
  lineNumber = 628
  var func1180 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1180.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 630
      lineNumber = 629
      var bool1181 = new GraceBoolean(true)
      var_applyChorus = bool1181;
      lineNumber = 630
      onSelf = true;
      var call1182 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 632
      lineNumber = 631
      var bool1183 = new GraceBoolean(false)
      var_applyChorus = bool1183;
      return bool1183
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1180.paramCounts = [
    1,
  ];
  func1180.variableArities = [
    false,
  ];
  this.methods["Chorus"] = func1180;
  func1180.definitionLine = 628;
  func1180.definitionModule = "musical";
  lineNumber = 634
  var func1184 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1184.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 636
      lineNumber = 635
      var bool1185 = new GraceBoolean(true)
      var_applyReverb = bool1185;
      lineNumber = 636
      onSelf = true;
      var call1186 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 638
      lineNumber = 637
      var bool1187 = new GraceBoolean(false)
      var_applyReverb = bool1187;
      return bool1187
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1184.paramCounts = [
    1,
  ];
  func1184.variableArities = [
    false,
  ];
  this.methods["Reverb"] = func1184;
  func1184.definitionLine = 634;
  func1184.definitionModule = "musical";
  lineNumber = 640
  var func1188 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1188.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 642
      lineNumber = 641
      var bool1189 = new GraceBoolean(true)
      var_applyAutowah = bool1189;
      lineNumber = 642
      onSelf = true;
      var call1190 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 644
      lineNumber = 643
      var bool1191 = new GraceBoolean(false)
      var_applyAutowah = bool1191;
      return bool1191
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1188.paramCounts = [
    1,
  ];
  func1188.variableArities = [
    false,
  ];
  this.methods["Autowah"] = func1188;
  func1188.definitionLine = 640;
  func1188.definitionModule = "musical";
  lineNumber = 646
  var func1192 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1192.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 648
      lineNumber = 647
      var bool1193 = new GraceBoolean(true)
      var_applyCheby = bool1193;
      lineNumber = 648
      onSelf = true;
      var call1194 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 650
      lineNumber = 649
      var bool1195 = new GraceBoolean(false)
      var_applyCheby = bool1195;
      return bool1195
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1192.paramCounts = [
    1,
  ];
  func1192.variableArities = [
    false,
  ];
  this.methods["Cheby"] = func1192;
  func1192.definitionLine = 646;
  func1192.definitionModule = "musical";
  lineNumber = 654
  var func1196 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1196.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 655
      var call1197 = callmethod(var_dom,"window", [0]);
      var call1198 = callmethod(call1197,"t_bpm", [1], var_bpm);
      return call1198
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
  this.methods["SetBPM"] = func1196;
  func1196.definitionLine = 654;
  func1196.definitionModule = "musical";
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
  var call1199 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1199;
  this.data = call1199.data;
  this._value = call1199._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 655
  var func1200 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1200.paramCounts[0])
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
  func1200.paramCounts = [
    0,
  ];
  func1200.variableArities = [
    false,
  ];
  this.methods["document"] = func1200;
  func1200.definitionLine = 655;
  func1200.definitionModule = "musical";
  lineNumber = 655
  var func1201 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1201.paramCounts[0])
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
  func1201.paramCounts = [
    1,
  ];
  func1201.variableArities = [
    false,
  ];
  this.methods["document:="] = func1201;
  func1201.definitionLine = 655;
  func1201.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 655
  var func1202 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1202.paramCounts[0])
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
  func1202.paramCounts = [
    0,
  ];
  func1202.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1202;
  func1202.definitionLine = 655;
  func1202.definitionModule = "musical";
  lineNumber = 655
  var func1203 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1203.paramCounts[0])
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
  func1203.paramCounts = [
    1,
  ];
  func1203.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1203;
  func1203.definitionLine = 655;
  func1203.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 655
  var func1204 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1204.paramCounts[0])
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
  func1204.paramCounts = [
    0,
  ];
  func1204.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1204;
  func1204.definitionLine = 655;
  func1204.definitionModule = "musical";
  lineNumber = 655
  var func1205 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1205.paramCounts[0])
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
  func1205.paramCounts = [
    1,
  ];
  func1205.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1205;
  func1205.definitionLine = 655;
  func1205.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 655
  var func1206 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1206.paramCounts[0])
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
  func1206.paramCounts = [
    0,
  ];
  func1206.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1206;
  func1206.definitionLine = 655;
  func1206.definitionModule = "musical";
  lineNumber = 655
  var func1207 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1207.paramCounts[0])
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
  func1207.paramCounts = [
    1,
  ];
  func1207.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1207;
  func1207.definitionLine = 655;
  func1207.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 655
  var func1208 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    0,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1208;
  func1208.definitionLine = 655;
  func1208.definitionModule = "musical";
  lineNumber = 655
  var func1209 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    1,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1209;
  func1209.definitionLine = 655;
  func1209.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 655
  var func1210 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    0,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1210;
  func1210.definitionLine = 655;
  func1210.definitionModule = "musical";
  lineNumber = 655
  var func1211 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1211.paramCounts[0])
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
  func1211.paramCounts = [
    1,
  ];
  func1211.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1211;
  func1211.definitionLine = 655;
  func1211.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1212 = callmethod(var_dom,"window", [0]);
  var call1213 = callmethod(call1212,"Math", [0]);
  var var_trig = call1213;
  var func1214 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1214.paramCounts[0])
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
  func1214.paramCounts = [
    0,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["trig"] = func1214;
  func1214.definitionLine = 15;
  func1214.definitionModule = "musical";
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
  var func1215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    0,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["PI"] = func1215;
  func1215.definitionLine = 15;
  func1215.definitionModule = "musical";
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
  var bool1216 = new GraceBoolean(false)
  var var_stopRunning = bool1216;
  lineNumber = 15
  var func1217 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    0,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1217;
  func1217.definitionLine = 15;
  func1217.definitionModule = "musical";
  lineNumber = 15
  var func1218 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1218.paramCounts[0])
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
  func1218.paramCounts = [
    1,
  ];
  func1218.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1218;
  func1218.definitionLine = 15;
  func1218.definitionModule = "musical";
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
  var bool1219 = new GraceBoolean(false)
  var var_initialised = bool1219;
  lineNumber = 15
  var func1220 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1220.paramCounts[0])
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
  func1220.paramCounts = [
    0,
  ];
  func1220.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1220;
  func1220.definitionLine = 15;
  func1220.definitionModule = "musical";
  lineNumber = 15
  var func1221 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    1,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1221;
  func1221.definitionLine = 15;
  func1221.definitionModule = "musical";
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
  var string1222 = new GraceString("white");
  var var_backgroundColour = string1222;
  lineNumber = 15
  var func1223 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    0,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1223;
  func1223.definitionLine = 15;
  func1223.definitionModule = "musical";
  lineNumber = 15
  var func1224 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1224.paramCounts[0])
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
  func1224.paramCounts = [
    1,
  ];
  func1224.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1224;
  func1224.definitionLine = 15;
  func1224.definitionModule = "musical";
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
  var call1225 = callmethod(var_collections,"list", [0]);
  var call1226 = callmethod(call1225,"new", [0]);
  var var_registeredObjects = call1226;
  var func1227 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1227.paramCounts[0])
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
  func1227.paramCounts = [
    0,
  ];
  func1227.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1227;
  func1227.definitionLine = 21;
  func1227.definitionModule = "musical";
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
  var call1228 = callmethod(var_collections,"list", [0]);
  var call1229 = callmethod(call1228,"new", [0]);
  var var_stepBlocks = call1229;
  var func1230 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1230.paramCounts[0])
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
  func1230.paramCounts = [
    0,
  ];
  func1230.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1230;
  func1230.definitionLine = 22;
  func1230.definitionModule = "musical";
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
  var call1231 = callmethod(var_collections,"map", [0]);
  var call1232 = callmethod(call1231,"new", [0]);
  var var_audioTags = call1232;
  var func1233 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1233.paramCounts[0])
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
  func1233.paramCounts = [
    0,
  ];
  func1233.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1233;
  func1233.definitionLine = 23;
  func1233.definitionModule = "musical";
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
  var func1234 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1234.paramCounts[0])
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
  func1234.paramCounts = [
    0,
  ];
  func1234.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1234;
  func1234.definitionLine = 23;
  func1234.definitionModule = "musical";
  lineNumber = 23
  var func1235 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1235.paramCounts[0])
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
  func1235.paramCounts = [
    1,
  ];
  func1235.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1235;
  func1235.definitionLine = 23;
  func1235.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1236 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1236.paramCounts[0])
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
  func1236.paramCounts = [
    0,
  ];
  func1236.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1236;
  func1236.definitionLine = 23;
  func1236.definitionModule = "musical";
  lineNumber = 23
  var func1237 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1237.paramCounts[0])
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
  func1237.paramCounts = [
    1,
  ];
  func1237.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1237;
  func1237.definitionLine = 23;
  func1237.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1238 = new GraceString("left");
  var var_left = string1238;
  lineNumber = 23
  var func1239 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1239.paramCounts[0])
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
  func1239.paramCounts = [
    0,
  ];
  func1239.variableArities = [
    false,
  ];
  this.methods["left"] = func1239;
  func1239.definitionLine = 23;
  func1239.definitionModule = "musical";
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
  var string1240 = new GraceString("right");
  var var_right = string1240;
  lineNumber = 23
  var func1241 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1241.paramCounts[0])
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
  func1241.paramCounts = [
    0,
  ];
  func1241.variableArities = [
    false,
  ];
  this.methods["right"] = func1241;
  func1241.definitionLine = 23;
  func1241.definitionModule = "musical";
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
  var string1242 = new GraceString("top");
  var var_top = string1242;
  lineNumber = 23
  var func1243 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1243.paramCounts[0])
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
  func1243.paramCounts = [
    0,
  ];
  func1243.variableArities = [
    false,
  ];
  this.methods["top"] = func1243;
  func1243.definitionLine = 23;
  func1243.definitionModule = "musical";
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
  var string1244 = new GraceString("bottom");
  var var_bottom = string1244;
  lineNumber = 23
  var func1245 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1245.paramCounts[0])
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
  func1245.paramCounts = [
    0,
  ];
  func1245.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1245;
  func1245.definitionLine = 23;
  func1245.definitionModule = "musical";
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
  var func1246 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1246.paramCounts[0])
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
  func1246.paramCounts = [
    0,
  ];
  func1246.variableArities = [
    false,
  ];
  this.methods["centre"] = func1246;
  func1246.definitionLine = 23;
  func1246.definitionModule = "musical";
  lineNumber = 23
  var func1247 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1247.paramCounts[0])
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
  func1247.paramCounts = [
    1,
  ];
  func1247.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1247;
  func1247.definitionLine = 23;
  func1247.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1248 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1248.paramCounts[0])
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
  func1248.paramCounts = [
    0,
  ];
  func1248.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1248;
  func1248.definitionLine = 23;
  func1248.definitionModule = "musical";
  lineNumber = 23
  var func1249 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1249.paramCounts[0])
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
  func1249.paramCounts = [
    1,
  ];
  func1249.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1249;
  func1249.definitionLine = 23;
  func1249.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1250 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1250.paramCounts[0])
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
  func1250.paramCounts = [
    0,
  ];
  func1250.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1250;
  func1250.definitionLine = 23;
  func1250.definitionModule = "musical";
  lineNumber = 23
  var func1251 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1251.paramCounts[0])
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
  func1251.paramCounts = [
    1,
  ];
  func1251.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1251;
  func1251.definitionLine = 23;
  func1251.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1252 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1252.paramCounts[0])
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
  func1252.paramCounts = [
    0,
  ];
  func1252.variableArities = [
    false,
  ];
  this.methods["above"] = func1252;
  func1252.definitionLine = 23;
  func1252.definitionModule = "musical";
  lineNumber = 23
  var func1253 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1253.paramCounts[0])
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
  func1253.paramCounts = [
    1,
  ];
  func1253.variableArities = [
    false,
  ];
  this.methods["above:="] = func1253;
  func1253.definitionLine = 23;
  func1253.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1254 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1254.paramCounts[0])
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
  func1254.paramCounts = [
    0,
  ];
  func1254.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1254;
  func1254.definitionLine = 23;
  func1254.definitionModule = "musical";
  lineNumber = 23
  var func1255 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1255.paramCounts[0])
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
  func1255.paramCounts = [
    1,
  ];
  func1255.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1255;
  func1255.definitionLine = 23;
  func1255.definitionModule = "musical";
  lineNumber = 40
  var func1256 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1256.paramCounts[0])
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
  func1256.paramCounts = [
    0,
  ];
  func1256.variableArities = [
    false,
  ];
  this.methods["point"] = func1256;
  func1256.definitionLine = 40;
  func1256.definitionModule = "musical";
  var obj1257 = Grace_allocObject();
  obj1257.definitionModule = "musical";
  obj1257.definitionLine = 40;
  obj1257.outer = this;
  var reader_musical_outer_1258 = function() {
    return this.outer;
  }
  obj1257.methods["outer"] = reader_musical_outer_1258;
  function obj_init_1257() {
    var origSuperDepth = superDepth;
    superDepth = obj1257;
    obj1257.annotations = [];
    var func1259 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1259.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1259.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1260 = Grace_allocObject();
        obj1260.definitionModule = "musical";
        obj1260.definitionLine = 40;
        obj1260.outer = this;
        var reader_musical_outer_1261 = function() {
          return this.outer;
        }
        obj1260.methods["outer"] = reader_musical_outer_1261;
        function obj_init_1260() {
          var origSuperDepth = superDepth;
          superDepth = obj1260;
          obj1260.annotations = [];
          var func1262 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1264 = callmethod(this, "x", [0]);
              var diff1266 = callmethod(call1264, "-", [1], var_dx);
              onSelf = true;
              var call1267 = callmethod(this, "y", [0]);
              var call1268 = callmethod(var_point,"x()y", [1, 1], diff1266, call1267);
              return call1268
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
          obj1260.methods["left"] = func1262;
          func1262.definitionLine = 43;
          func1262.definitionModule = "musical";
          var func1269 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1271 = callmethod(this, "x", [0]);
              var opresult1273 = callmethod(call1271, "+", [1], var_dx);
              onSelf = true;
              var call1274 = callmethod(this, "y", [0]);
              var call1275 = callmethod(var_point,"x()y", [1, 1], opresult1273, call1274);
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
          obj1260.methods["right"] = func1269;
          func1269.definitionLine = 44;
          func1269.definitionModule = "musical";
          var func1276 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1277 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1279 = callmethod(this, "y", [0]);
              var diff1281 = callmethod(call1279, "-", [1], var_dy);
              var call1282 = callmethod(var_point,"x()y", [1, 1], call1277, diff1281);
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
          obj1260.methods["up"] = func1276;
          func1276.definitionLine = 45;
          func1276.definitionModule = "musical";
          var func1283 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1284 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1286 = callmethod(this, "y", [0]);
              var opresult1288 = callmethod(call1286, "+", [1], var_dy);
              var call1289 = callmethod(var_point,"x()y", [1, 1], call1284, opresult1288);
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
          obj1260.methods["down"] = func1283;
          func1283.definitionLine = 46;
          func1283.definitionModule = "musical";
          sourceObject = obj1260;
          lineNumber = 41
          obj1260.data["x"] = var_x__39__;
          var reader_musical_x_1290 = function() {
            return this.data["x"];
          }
          reader_musical_x_1290.def = true;
          obj1260.methods["x"] = reader_musical_x_1290;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1260;
          lineNumber = 42
          obj1260.data["y"] = var_y__39__;
          var reader_musical_y_1291 = function() {
            return this.data["y"];
          }
          reader_musical_y_1291.def = true;
          obj1260.methods["y"] = reader_musical_y_1291;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1260;
          sourceObject = obj1260;
          sourceObject = obj1260;
          sourceObject = obj1260;
          superDepth = origSuperDepth;
        }
        obj_init_1260.apply(obj1260, []);
        return obj1260
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1259.paramCounts = [
      1,
      1,
    ];
    func1259.variableArities = [
      false,
      false,
    ];
    obj1257.methods["x()y"] = func1259;
    func1259.definitionLine = 40;
    func1259.definitionModule = "musical";
    var func1292 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1293 = Grace_allocObject();
        obj1293.definitionModule = "musical";
        obj1293.definitionLine = 40;
        var inho1293 = inheritingObject;
        while (inho1293.superobj) inho1293 = inho1293.superobj;
        inho1293.superobj = obj1293;
        obj1293.data = inheritingObject.data;
        obj1293.outer = this;
        var reader_musical_outer_1294 = function() {
          return this.outer;
        }
        obj1293.methods["outer"] = reader_musical_outer_1294;
        function obj_init_1293() {
          var origSuperDepth = superDepth;
          superDepth = obj1293;
          obj1293.annotations = [];
          var func1295 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1297 = callmethod(this, "x", [0]);
              var diff1299 = callmethod(call1297, "-", [1], var_dx);
              onSelf = true;
              var call1300 = callmethod(this, "y", [0]);
              var call1301 = callmethod(var_point,"x()y", [1, 1], diff1299, call1300);
              return call1301
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1295.paramCounts = [
            1,
          ];
          func1295.variableArities = [
            false,
          ];
          obj1293.methods["left"] = func1295;
          func1295.definitionLine = 43;
          func1295.definitionModule = "musical";
          var func1302 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1304 = callmethod(this, "x", [0]);
              var opresult1306 = callmethod(call1304, "+", [1], var_dx);
              onSelf = true;
              var call1307 = callmethod(this, "y", [0]);
              var call1308 = callmethod(var_point,"x()y", [1, 1], opresult1306, call1307);
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
          obj1293.methods["right"] = func1302;
          func1302.definitionLine = 44;
          func1302.definitionModule = "musical";
          var func1309 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1310 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1312 = callmethod(this, "y", [0]);
              var diff1314 = callmethod(call1312, "-", [1], var_dy);
              var call1315 = callmethod(var_point,"x()y", [1, 1], call1310, diff1314);
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
          obj1293.methods["up"] = func1309;
          func1309.definitionLine = 45;
          func1309.definitionModule = "musical";
          var func1316 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1317 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1319 = callmethod(this, "y", [0]);
              var opresult1321 = callmethod(call1319, "+", [1], var_dy);
              var call1322 = callmethod(var_point,"x()y", [1, 1], call1317, opresult1321);
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
          obj1293.methods["down"] = func1316;
          func1316.definitionLine = 46;
          func1316.definitionModule = "musical";
          sourceObject = obj1293;
          lineNumber = 41
          obj1293.data["x"] = var_x__39__;
          var reader_musical_x_1323 = function() {
            return this.data["x"];
          }
          reader_musical_x_1323.def = true;
          obj1293.methods["x"] = reader_musical_x_1323;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1293;
          lineNumber = 42
          obj1293.data["y"] = var_y__39__;
          var reader_musical_y_1324 = function() {
            return this.data["y"];
          }
          reader_musical_y_1324.def = true;
          obj1293.methods["y"] = reader_musical_y_1324;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1293;
          sourceObject = obj1293;
          sourceObject = obj1293;
          sourceObject = obj1293;
          superDepth = origSuperDepth;
        }
        obj_init_1293.apply(inheritingObject, []);
        return obj1293
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1257.methods["x()y()object"] = func1292;
    var func1325 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1326 = new GraceString("class point");
        return string1326
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1325.paramCounts = [
    ];
    func1325.variableArities = [
    ];
    obj1257.methods["asDebugString"] = func1325;
    func1325.definitionLine = 40;
    func1325.definitionModule = "musical";
    sourceObject = obj1257;
    sourceObject = obj1257;
    superDepth = origSuperDepth;
  }
  obj_init_1257.apply(obj1257, []);
  var var_point = obj1257;
  lineNumber = 48
  var func1327 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1327.paramCounts[0])
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
  func1327.paramCounts = [
    0,
  ];
  func1327.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1327;
  func1327.definitionLine = 48;
  func1327.definitionModule = "musical";
  var obj1328 = Grace_allocObject();
  obj1328.definitionModule = "musical";
  obj1328.definitionLine = 48;
  obj1328.outer = this;
  var reader_musical_outer_1329 = function() {
    return this.outer;
  }
  obj1328.methods["outer"] = reader_musical_outer_1329;
  function obj_init_1328() {
    var origSuperDepth = superDepth;
    superDepth = obj1328;
    obj1328.annotations = [];
    var func1330 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1330.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1331 = Grace_allocObject();
        obj1331.definitionModule = "musical";
        obj1331.definitionLine = 48;
        obj1331.outer = this;
        var reader_musical_outer_1332 = function() {
          return this.outer;
        }
        obj1331.methods["outer"] = reader_musical_outer_1332;
        function obj_init_1331() {
          var origSuperDepth = superDepth;
          superDepth = obj1331;
          obj1331.annotations = [];
          var func1333 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1333.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1334 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
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
              block1335.className = 'block<musical:63>';
              block1335.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1336 = callmethod(var_b,"apply", [0]);
                return call1336;
              };
              var call1337 = callmethod(Grace_prelude,"for()do", [1, 1], call1334, block1335);
              lineNumber = 63
              onSelf = true;
              var call1338 = callmethod(this, "tick", [0]);
              return call1338
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1333.paramCounts = [
            0,
          ];
          func1333.variableArities = [
            false,
          ];
          obj1331.methods["step"] = func1333;
          func1333.definitionLine = 59;
          func1333.definitionModule = "musical";
          var func1339 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1339.paramCounts[0])
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
          func1339.paramCounts = [
            0,
          ];
          func1339.variableArities = [
            false,
          ];
          obj1331.methods["tick"] = func1339;
          func1339.definitionLine = 66;
          func1339.definitionModule = "musical";
          var func1340 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1340.paramCounts[0])
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
          func1340.paramCounts = [
            1,
          ];
          func1340.variableArities = [
            false,
          ];
          obj1331.methods["draw"] = func1340;
          func1340.definitionLine = 67;
          func1340.definitionModule = "musical";
          var func1341 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1341.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1342 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1343 = callmethod(this, "destX:=", [1], call1342);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1344 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1345 = callmethod(this, "destY:=", [1], call1344);
              return call1345
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1341.paramCounts = [
            1,
          ];
          func1341.variableArities = [
            false,
          ];
          obj1331.methods["moveTo"] = func1341;
          func1341.definitionLine = 68;
          func1341.definitionModule = "musical";
          var func1346 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1346.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1347 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1348 = callmethod(this, "x:=", [1], call1347);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1349 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1350 = callmethod(this, "y:=", [1], call1349);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1351 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1352 = callmethod(this, "destX:=", [1], call1351);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1353 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1354 = callmethod(this, "destY:=", [1], call1353);
              return call1354
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1346.paramCounts = [
            1,
          ];
          func1346.variableArities = [
            false,
          ];
          obj1331.methods["jumpTo"] = func1346;
          func1346.definitionLine = 72;
          func1346.definitionModule = "musical";
          var func1355 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1355.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1356 = new GraceBoolean(false)
              return bool1356
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1355.paramCounts = [
            1,
          ];
          func1355.variableArities = [
            false,
          ];
          obj1331.methods["isPointOver"] = func1355;
          func1355.definitionLine = 78;
          func1355.definitionModule = "musical";
          var func1357 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1357.paramCounts[0])
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
          func1357.paramCounts = [
            0,
          ];
          func1357.variableArities = [
            false,
          ];
          obj1331.methods["mousedown"] = func1357;
          func1357.definitionLine = 79;
          func1357.definitionModule = "musical";
          var func1358 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1358.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1359 = callmethod(this, "alwaysBlocks", [0]);
              var call1360 = callmethod(call1359,"push", [1], var_b);
              return call1360
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1358.paramCounts = [
            1,
          ];
          func1358.variableArities = [
            false,
          ];
          obj1331.methods["always"] = func1358;
          func1358.definitionLine = 80;
          func1358.definitionModule = "musical";
          var func1361 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1361.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1361.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
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
              block1362.className = 'block<musical:89>';
              block1362.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1363 = var_done;
                lineNumber = 85
                var call1364 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1364)) {
                  lineNumber = 86
                  var call1365 = callmethod(var_b,"apply", [0]);
                  if1363 = call1365;
                }
                return if1363;
              };
              onSelf = true;
              var call1366 = callmethod(this, "always", [1], block1362);
              return call1366
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1361.paramCounts = [
            1,
            1,
          ];
          func1361.variableArities = [
            false,
            false,
          ];
          obj1331.methods["whenever()do"] = func1361;
          func1361.definitionLine = 83;
          func1361.definitionModule = "musical";
          var func1367 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1367.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1371 = callmethod(this, "angle", [0]);
              var quotient1373 = callmethod(call1371, "/", [1], new GraceNum(180));
              var prod1375 = callmethod(quotient1373, "*", [1], var_PI);
              var call1376 = callmethod(var_trig,"cos", [1], prod1375);
              var prod1378 = callmethod(call1376, "*", [1], var_dist);
              var var_y__39__ = prod1378;
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
              var call1382 = callmethod(this, "angle", [0]);
              var quotient1384 = callmethod(call1382, "/", [1], new GraceNum(180));
              var prod1386 = callmethod(quotient1384, "*", [1], var_PI);
              var call1387 = callmethod(var_trig,"sin", [1], prod1386);
              var prod1389 = callmethod(call1387, "*", [1], var_dist);
              var var_x__39__ = prod1389;
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
              var call1391 = callmethod(this, "x", [0]);
              var opresult1393 = callmethod(call1391, "+", [1], var_x__39__);
              onSelf = true;
              var call1394 = callmethod(this, "x:=", [1], opresult1393);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1396 = callmethod(this, "y", [0]);
              var opresult1398 = callmethod(call1396, "+", [1], var_y__39__);
              onSelf = true;
              var call1399 = callmethod(this, "y:=", [1], opresult1398);
              return call1399
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1367.paramCounts = [
            1,
          ];
          func1367.variableArities = [
            false,
          ];
          obj1331.methods["forward"] = func1367;
          func1367.definitionLine = 90;
          func1367.definitionModule = "musical";
          var func1400 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1400.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1401 = Grace_allocObject();
              block1401.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1401.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1401.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1401.methods["match"] = GraceBlock_match;
              block1401.methods["prefix?"] = GraceBlock_lift;
              block1401.receiver = this;
              block1401.className = 'block<musical:97>';
              block1401.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1403 = callmethod(this, "angle", [0]);
                var opresult1405 = callmethod(call1403, "<", [1], new GraceNum(0));
                return opresult1405;
              };
              lineNumber = 100
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
              block1406.className = 'block<musical:100>';
              block1406.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1408 = callmethod(this, "angle", [0]);
                var opresult1410 = callmethod(call1408, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1411 = callmethod(this, "angle:=", [1], opresult1410);
                return call1411;
              };
              var call1412 = callmethod(Grace_prelude,"while()do", [1, 1], block1401, block1406);
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
                onSelf = true;
                var call1415 = callmethod(this, "angle", [0]);
                var opresult1417 = callmethod(call1415, ">", [1], new GraceNum(360));
                return opresult1417;
              };
              lineNumber = 103
              var block1418 = Grace_allocObject();
              block1418.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1418.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1418.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1418.methods["match"] = GraceBlock_match;
              block1418.methods["prefix?"] = GraceBlock_lift;
              block1418.receiver = this;
              block1418.className = 'block<musical:103>';
              block1418.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1420 = callmethod(this, "angle", [0]);
                var diff1422 = callmethod(call1420, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1423 = callmethod(this, "angle:=", [1], diff1422);
                return call1423;
              };
              var call1424 = callmethod(Grace_prelude,"while()do", [1, 1], block1413, block1418);
              return call1424
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1400.paramCounts = [
            0,
          ];
          func1400.variableArities = [
            false,
          ];
          obj1331.methods["normaliseAngle"] = func1400;
          func1400.definitionLine = 96;
          func1400.definitionModule = "musical";
          var func1425 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1425.paramCounts[0])
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
              var call1427 = callmethod(this, "angle", [0]);
              var opresult1429 = callmethod(call1427, "+", [1], var_degrees);
              onSelf = true;
              var call1430 = callmethod(this, "angle:=", [1], opresult1429);
              lineNumber = 106
              onSelf = true;
              var call1431 = callmethod(this, "normaliseAngle", [0]);
              return call1431
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1425.paramCounts = [
            1,
          ];
          func1425.variableArities = [
            false,
          ];
          obj1331.methods["turn"] = func1425;
          func1425.definitionLine = 104;
          func1425.definitionModule = "musical";
          var func1432 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1432.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1433 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1434 = callmethod(this, "x", [0]);
              var call1435 = callmethod(var_point,"x()y", [1, 1], call1434, new GraceNum(0));
              onSelf = true;
              var call1436 = callmethod(this, "isPointOver", [1], call1435);
              if (Grace_isTrue(call1436)) {
                lineNumber = 111
                lineNumber = 110
                var bool1437 = new GraceBoolean(true)
                return bool1437
              }
              lineNumber = 115
              var if1438 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1439 = callmethod(this, "x", [0]);
              var call1440 = callmethod(var_point,"x()y", [1, 1], call1439, var_canvasHeight);
              onSelf = true;
              var call1441 = callmethod(this, "isPointOver", [1], call1440);
              if (Grace_isTrue(call1441)) {
                lineNumber = 114
                lineNumber = 113
                var bool1442 = new GraceBoolean(true)
                return bool1442
              }
              lineNumber = 118
              var if1443 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1444 = callmethod(this, "y", [0]);
              var call1445 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1444);
              onSelf = true;
              var call1446 = callmethod(this, "isPointOver", [1], call1445);
              if (Grace_isTrue(call1446)) {
                lineNumber = 117
                lineNumber = 116
                var bool1447 = new GraceBoolean(true)
                return bool1447
              }
              lineNumber = 121
              var if1448 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1449 = callmethod(this, "y", [0]);
              var call1450 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1449);
              onSelf = true;
              var call1451 = callmethod(this, "isPointOver", [1], call1450);
              if (Grace_isTrue(call1451)) {
                lineNumber = 120
                lineNumber = 119
                var bool1452 = new GraceBoolean(true)
                return bool1452
              }
              lineNumber = 122
              lineNumber = 121
              var bool1453 = new GraceBoolean(false)
              return bool1453
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1432.paramCounts = [
            0,
          ];
          func1432.variableArities = [
            false,
          ];
          obj1331.methods["touchingEdge"] = func1432;
          func1432.definitionLine = 108;
          func1432.definitionModule = "musical";
          var func1454 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1454.paramCounts[0])
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
              var if1455 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1456 = callmethod(this, "x", [0]);
              var call1457 = callmethod(var_point,"x()y", [1, 1], call1456, new GraceNum(0));
              onSelf = true;
              var call1458 = callmethod(this, "isPointOver", [1], call1457);
              if (Grace_isTrue(call1458)) {
                lineNumber = 127
                onSelf = true;
                var call1459 = callmethod(this, "bounceFrom", [1], var_top);
                if1455 = call1459;
              }
              lineNumber = 132
              var if1460 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1461 = callmethod(this, "x", [0]);
              var call1462 = callmethod(var_point,"x()y", [1, 1], call1461, var_canvasHeight);
              onSelf = true;
              var call1463 = callmethod(this, "isPointOver", [1], call1462);
              if (Grace_isTrue(call1463)) {
                lineNumber = 130
                onSelf = true;
                var call1464 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1460 = call1464;
              }
              lineNumber = 135
              var if1465 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1466 = callmethod(this, "y", [0]);
              var call1467 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1466);
              onSelf = true;
              var call1468 = callmethod(this, "isPointOver", [1], call1467);
              if (Grace_isTrue(call1468)) {
                lineNumber = 133
                onSelf = true;
                var call1469 = callmethod(this, "bounceFrom", [1], var_left);
                if1465 = call1469;
              }
              lineNumber = 138
              var if1470 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1471 = callmethod(this, "y", [0]);
              var call1472 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1471);
              onSelf = true;
              var call1473 = callmethod(this, "isPointOver", [1], call1472);
              if (Grace_isTrue(call1473)) {
                lineNumber = 136
                onSelf = true;
                var call1474 = callmethod(this, "bounceFrom", [1], var_right);
                if1470 = call1474;
              }
              lineNumber = 138
              var block1475 = Grace_allocObject();
              block1475.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1475.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1475.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1475.methods["match"] = GraceBlock_match;
              block1475.methods["prefix?"] = GraceBlock_lift;
              block1475.receiver = this;
              block1475.className = 'block<musical:138>';
              block1475.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1476 = callmethod(this, "touchingEdge", [0]);
                return call1476;
              };
              lineNumber = 141
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
              block1477.className = 'block<musical:141>';
              block1477.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1478 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1478;
              };
              var call1479 = callmethod(Grace_prelude,"while()do", [1, 1], block1475, block1477);
              return call1479
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1454.paramCounts = [
            0,
          ];
          func1454.variableArities = [
            false,
          ];
          obj1331.methods["bounce"] = func1454;
          func1454.definitionLine = 123;
          func1454.definitionModule = "musical";
          var func1480 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1480.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1481 = var_done;
              lineNumber = 143
              var string1482 = new GraceString("left");
              var opresult1485 = callmethod(var_dir, "==", [1], string1482);
              if (Grace_isTrue(opresult1485)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1486 = callmethod(this, "angle", [0]);
                var diff1489 = callmethod(new GraceNum(360), "-", [1], call1486);
                onSelf = true;
                var call1490 = callmethod(this, "angle:=", [1], diff1489);
                if1481 = call1490;
              }
              lineNumber = 149
              var if1491 = var_done;
              lineNumber = 146
              var string1492 = new GraceString("right");
              var opresult1495 = callmethod(var_dir, "==", [1], string1492);
              if (Grace_isTrue(opresult1495)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1496 = callmethod(this, "angle", [0]);
                var diff1499 = callmethod(new GraceNum(360), "-", [1], call1496);
                onSelf = true;
                var call1500 = callmethod(this, "angle:=", [1], diff1499);
                if1491 = call1500;
              }
              lineNumber = 152
              var if1501 = var_done;
              lineNumber = 149
              var string1502 = new GraceString("top");
              var opresult1505 = callmethod(var_dir, "==", [1], string1502);
              if (Grace_isTrue(opresult1505)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1506 = callmethod(this, "angle", [0]);
                var diff1509 = callmethod(new GraceNum(180), "-", [1], call1506);
                onSelf = true;
                var call1510 = callmethod(this, "angle:=", [1], diff1509);
                if1501 = call1510;
              }
              lineNumber = 155
              var if1511 = var_done;
              lineNumber = 152
              var string1512 = new GraceString("bottom");
              var opresult1515 = callmethod(var_dir, "==", [1], string1512);
              if (Grace_isTrue(opresult1515)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1516 = callmethod(this, "angle", [0]);
                var diff1519 = callmethod(new GraceNum(180), "-", [1], call1516);
                onSelf = true;
                var call1520 = callmethod(this, "angle:=", [1], diff1519);
                if1511 = call1520;
              }
              lineNumber = 155
              onSelf = true;
              var call1521 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1522 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1522
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1480.paramCounts = [
            1,
          ];
          func1480.variableArities = [
            false,
          ];
          obj1331.methods["bounceFrom"] = func1480;
          func1480.definitionLine = 142;
          func1480.definitionModule = "musical";
          var func1523 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1523.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1524 = var_done;
              lineNumber = 159
              var call1525 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1527 = callmethod(this, "x", [0]);
              var opresult1529 = callmethod(call1527, ">", [1], call1525);
              if (Grace_isTrue(opresult1529)) {
                lineNumber = 160
                onSelf = true;
                var call1530 = callmethod(this, "bounceFrom", [1], var_left);
                if1524 = call1530;
              }
              lineNumber = 165
              var if1531 = var_done;
              lineNumber = 162
              var call1532 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1534 = callmethod(this, "x", [0]);
              var opresult1536 = callmethod(call1534, "<", [1], call1532);
              if (Grace_isTrue(opresult1536)) {
                lineNumber = 163
                onSelf = true;
                var call1537 = callmethod(this, "bounceFrom", [1], var_right);
                if1531 = call1537;
              }
              lineNumber = 165
              var block1538 = Grace_allocObject();
              block1538.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1538.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1538.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1538.methods["match"] = GraceBlock_match;
              block1538.methods["prefix?"] = GraceBlock_lift;
              block1538.receiver = this;
              block1538.className = 'block<musical:165>';
              block1538.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1539 = callmethod(this, "touching", [1], var_other);
                return call1539;
              };
              lineNumber = 168
              var block1540 = Grace_allocObject();
              block1540.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1540.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1540.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1540.methods["match"] = GraceBlock_match;
              block1540.methods["prefix?"] = GraceBlock_lift;
              block1540.receiver = this;
              block1540.className = 'block<musical:168>';
              block1540.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1541 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1541;
              };
              var call1542 = callmethod(Grace_prelude,"while()do", [1, 1], block1538, block1540);
              return call1542
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1523.paramCounts = [
            1,
          ];
          func1523.variableArities = [
            false,
          ];
          obj1331.methods["bounceOff"] = func1523;
          func1523.definitionLine = 158;
          func1523.definitionModule = "musical";
          var func1543 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1544 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1545 = callmethod(this, "y", [0]);
              var call1546 = callmethod(var_point,"x()y", [1, 1], call1544, call1545);
              var call1547 = callmethod(var_other,"isPointOver", [1], call1546);
              return call1547
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1543.paramCounts = [
            1,
          ];
          func1543.variableArities = [
            false,
          ];
          obj1331.methods["touching"] = func1543;
          func1543.definitionLine = 169;
          func1543.definitionModule = "musical";
          var func1548 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1548.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1549 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1550 = callmethod(this, "y", [0]);
              var call1552 = callmethod(var_other,"y", [0]);
              var opresult1554 = callmethod(call1552, "!=", [1], call1550);
              onSelf = true;
              var call1556 = callmethod(this, "x", [0]);
              var call1558 = callmethod(var_other,"x", [0]);
              var opresult1560 = callmethod(call1558, "!=", [1], call1556);
              var opresult1562 = callmethod(opresult1560, "||", [1], opresult1554);
              if (Grace_isTrue(opresult1562)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1565 = callmethod(this, "x", [0]);
                var call1567 = callmethod(var_other,"x", [0]);
                var diff1569 = callmethod(call1567, "-", [1], call1565);
                onSelf = true;
                var call1570 = callmethod(this, "y", [0]);
                var call1572 = callmethod(var_other,"y", [0]);
                var diff1574 = callmethod(call1572, "-", [1], call1570);
                var call1575 = callmethod(var_trig,"atan2", [2], diff1569, diff1574);
                var prod1577 = callmethod(call1575, "*", [1], new GraceNum(180));
                var quotient1579 = callmethod(prod1577, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1580 = callmethod(this, "angle:=", [1], quotient1579);
                if1549 = call1580;
              }
              lineNumber = 176
              onSelf = true;
              var call1581 = callmethod(this, "normaliseAngle", [0]);
              return call1581
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
          obj1331.methods["face"] = func1548;
          func1548.definitionLine = 172;
          func1548.definitionModule = "musical";
          var func1582 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1582.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1583 = new GraceString("2d");
              var call1584 = callmethod(var_backingCanvas,"getContext", [1], string1583);
              onSelf = true;
              var call1585 = callmethod(this, "draw", [1], call1584);
              return call1585
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1582.paramCounts = [
            0,
          ];
          func1582.variableArities = [
            false,
          ];
          obj1331.methods["stamp"] = func1582;
          func1582.definitionLine = 178;
          func1582.definitionModule = "musical";
          sourceObject = obj1331;
          lineNumber = 49
          var call1586 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1587 = callmethod(call1586, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1588 = callmethod(call1587, "initialise", [0]);
          sourceObject = obj1331;
          lineNumber = 50
          var call1589 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1331;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1331;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1331;
          lineNumber = 53
          var call1590 = callmethod(var_collections,"list", [0]);
          var call1591 = callmethod(call1590,"new", [0]);
          obj1331.data["alwaysBlocks"] = call1591;
          var reader_musical_alwaysBlocks_1592 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1592.def = true;
          reader_musical_alwaysBlocks_1592.confidential = true;
          obj1331.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1592;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1591)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1331;
          lineNumber = 55
          lineNumber = 54
          var quotient1595 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1331.data["x"] = quotient1595;
          var reader_musical_x_1596 = function() {
            return this.data["x"];
          }
          obj1331.methods["x"] = reader_musical_x_1596;
          obj1331.data["x"] = quotient1595;
          var writer_musical_x_1596 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1331.methods["x:="] = writer_musical_x_1596;
          writer_musical_x_1596.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1595)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1331.mutable = true;
          sourceObject = obj1331;
          lineNumber = 56
          lineNumber = 55
          var quotient1599 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1331.data["y"] = quotient1599;
          var reader_musical_y_1600 = function() {
            return this.data["y"];
          }
          obj1331.methods["y"] = reader_musical_y_1600;
          obj1331.data["y"] = quotient1599;
          var writer_musical_y_1600 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1331.methods["y:="] = writer_musical_y_1600;
          writer_musical_y_1600.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1599)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1331.mutable = true;
          sourceObject = obj1331;
          lineNumber = 56
          onSelf = true;
          var call1601 = callmethod(this, "x", [0]);
          obj1331.data["destX"] = call1601;
          var reader_musical_destX_1602 = function() {
            return this.data["destX"];
          }
          obj1331.methods["destX"] = reader_musical_destX_1602;
          obj1331.data["destX"] = call1601;
          var writer_musical_destX_1602 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1331.methods["destX:="] = writer_musical_destX_1602;
          reader_musical_destX_1602.confidential = true;
          writer_musical_destX_1602.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1601)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1331.mutable = true;
          sourceObject = obj1331;
          lineNumber = 57
          onSelf = true;
          var call1603 = callmethod(this, "y", [0]);
          obj1331.data["destY"] = call1603;
          var reader_musical_destY_1604 = function() {
            return this.data["destY"];
          }
          obj1331.methods["destY"] = reader_musical_destY_1604;
          obj1331.data["destY"] = call1603;
          var writer_musical_destY_1604 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1331.methods["destY:="] = writer_musical_destY_1604;
          reader_musical_destY_1604.confidential = true;
          writer_musical_destY_1604.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1603)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1331.mutable = true;
          sourceObject = obj1331;
          lineNumber = 58
          obj1331.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1605 = function() {
            return this.data["angle"];
          }
          obj1331.methods["angle"] = reader_musical_angle_1605;
          obj1331.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1605 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1331.methods["angle:="] = writer_musical_angle_1605;
          reader_musical_angle_1605.confidential = true;
          writer_musical_angle_1605.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1331.mutable = true;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          sourceObject = obj1331;
          superDepth = origSuperDepth;
        }
        obj_init_1331.apply(obj1331, []);
        return obj1331
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1330.paramCounts = [
      0,
    ];
    func1330.variableArities = [
      false,
    ];
    obj1328.methods["new"] = func1330;
    func1330.definitionLine = 48;
    func1330.definitionModule = "musical";
    var func1606 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1607 = Grace_allocObject();
        obj1607.definitionModule = "musical";
        obj1607.definitionLine = 48;
        var inho1607 = inheritingObject;
        while (inho1607.superobj) inho1607 = inho1607.superobj;
        inho1607.superobj = obj1607;
        obj1607.data = inheritingObject.data;
        obj1607.outer = this;
        var reader_musical_outer_1608 = function() {
          return this.outer;
        }
        obj1607.methods["outer"] = reader_musical_outer_1608;
        function obj_init_1607() {
          var origSuperDepth = superDepth;
          superDepth = obj1607;
          obj1607.annotations = [];
          var func1609 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1609.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1610 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
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
              block1611.className = 'block<musical:63>';
              block1611.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1612 = callmethod(var_b,"apply", [0]);
                return call1612;
              };
              var call1613 = callmethod(Grace_prelude,"for()do", [1, 1], call1610, block1611);
              lineNumber = 63
              onSelf = true;
              var call1614 = callmethod(this, "tick", [0]);
              return call1614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1609.paramCounts = [
            0,
          ];
          func1609.variableArities = [
            false,
          ];
          obj1607.methods["step"] = func1609;
          func1609.definitionLine = 59;
          func1609.definitionModule = "musical";
          var func1615 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1615.paramCounts[0])
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
          func1615.paramCounts = [
            0,
          ];
          func1615.variableArities = [
            false,
          ];
          obj1607.methods["tick"] = func1615;
          func1615.definitionLine = 66;
          func1615.definitionModule = "musical";
          var func1616 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1616.paramCounts[0])
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
          func1616.paramCounts = [
            1,
          ];
          func1616.variableArities = [
            false,
          ];
          obj1607.methods["draw"] = func1616;
          func1616.definitionLine = 67;
          func1616.definitionModule = "musical";
          var func1617 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1618 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1619 = callmethod(this, "destX:=", [1], call1618);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1620 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1621 = callmethod(this, "destY:=", [1], call1620);
              return call1621
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1617.paramCounts = [
            1,
          ];
          func1617.variableArities = [
            false,
          ];
          obj1607.methods["moveTo"] = func1617;
          func1617.definitionLine = 68;
          func1617.definitionModule = "musical";
          var func1622 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1622.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1623 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1624 = callmethod(this, "x:=", [1], call1623);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1625 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1626 = callmethod(this, "y:=", [1], call1625);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1627 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1628 = callmethod(this, "destX:=", [1], call1627);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1629 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1630 = callmethod(this, "destY:=", [1], call1629);
              return call1630
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1622.paramCounts = [
            1,
          ];
          func1622.variableArities = [
            false,
          ];
          obj1607.methods["jumpTo"] = func1622;
          func1622.definitionLine = 72;
          func1622.definitionModule = "musical";
          var func1631 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1632 = new GraceBoolean(false)
              return bool1632
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1631.paramCounts = [
            1,
          ];
          func1631.variableArities = [
            false,
          ];
          obj1607.methods["isPointOver"] = func1631;
          func1631.definitionLine = 78;
          func1631.definitionModule = "musical";
          var func1633 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1633.paramCounts[0])
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
          func1633.paramCounts = [
            0,
          ];
          func1633.variableArities = [
            false,
          ];
          obj1607.methods["mousedown"] = func1633;
          func1633.definitionLine = 79;
          func1633.definitionModule = "musical";
          var func1634 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1634.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1635 = callmethod(this, "alwaysBlocks", [0]);
              var call1636 = callmethod(call1635,"push", [1], var_b);
              return call1636
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1634.paramCounts = [
            1,
          ];
          func1634.variableArities = [
            false,
          ];
          obj1607.methods["always"] = func1634;
          func1634.definitionLine = 80;
          func1634.definitionModule = "musical";
          var func1637 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1637.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1637.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
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
              block1638.className = 'block<musical:89>';
              block1638.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1639 = var_done;
                lineNumber = 85
                var call1640 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1640)) {
                  lineNumber = 86
                  var call1641 = callmethod(var_b,"apply", [0]);
                  if1639 = call1641;
                }
                return if1639;
              };
              onSelf = true;
              var call1642 = callmethod(this, "always", [1], block1638);
              return call1642
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1637.paramCounts = [
            1,
            1,
          ];
          func1637.variableArities = [
            false,
            false,
          ];
          obj1607.methods["whenever()do"] = func1637;
          func1637.definitionLine = 83;
          func1637.definitionModule = "musical";
          var func1643 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1647 = callmethod(this, "angle", [0]);
              var quotient1649 = callmethod(call1647, "/", [1], new GraceNum(180));
              var prod1651 = callmethod(quotient1649, "*", [1], var_PI);
              var call1652 = callmethod(var_trig,"cos", [1], prod1651);
              var prod1654 = callmethod(call1652, "*", [1], var_dist);
              var var_y__39__ = prod1654;
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
              var call1658 = callmethod(this, "angle", [0]);
              var quotient1660 = callmethod(call1658, "/", [1], new GraceNum(180));
              var prod1662 = callmethod(quotient1660, "*", [1], var_PI);
              var call1663 = callmethod(var_trig,"sin", [1], prod1662);
              var prod1665 = callmethod(call1663, "*", [1], var_dist);
              var var_x__39__ = prod1665;
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
              var call1667 = callmethod(this, "x", [0]);
              var opresult1669 = callmethod(call1667, "+", [1], var_x__39__);
              onSelf = true;
              var call1670 = callmethod(this, "x:=", [1], opresult1669);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1672 = callmethod(this, "y", [0]);
              var opresult1674 = callmethod(call1672, "+", [1], var_y__39__);
              onSelf = true;
              var call1675 = callmethod(this, "y:=", [1], opresult1674);
              return call1675
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1643.paramCounts = [
            1,
          ];
          func1643.variableArities = [
            false,
          ];
          obj1607.methods["forward"] = func1643;
          func1643.definitionLine = 90;
          func1643.definitionModule = "musical";
          var func1676 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1676.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1677 = Grace_allocObject();
              block1677.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1677.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1677.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1677.methods["match"] = GraceBlock_match;
              block1677.methods["prefix?"] = GraceBlock_lift;
              block1677.receiver = this;
              block1677.className = 'block<musical:97>';
              block1677.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1679 = callmethod(this, "angle", [0]);
                var opresult1681 = callmethod(call1679, "<", [1], new GraceNum(0));
                return opresult1681;
              };
              lineNumber = 100
              var block1682 = Grace_allocObject();
              block1682.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1682.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1682.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1682.methods["match"] = GraceBlock_match;
              block1682.methods["prefix?"] = GraceBlock_lift;
              block1682.receiver = this;
              block1682.className = 'block<musical:100>';
              block1682.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1684 = callmethod(this, "angle", [0]);
                var opresult1686 = callmethod(call1684, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1687 = callmethod(this, "angle:=", [1], opresult1686);
                return call1687;
              };
              var call1688 = callmethod(Grace_prelude,"while()do", [1, 1], block1677, block1682);
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
                onSelf = true;
                var call1691 = callmethod(this, "angle", [0]);
                var opresult1693 = callmethod(call1691, ">", [1], new GraceNum(360));
                return opresult1693;
              };
              lineNumber = 103
              var block1694 = Grace_allocObject();
              block1694.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1694.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1694.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1694.methods["match"] = GraceBlock_match;
              block1694.methods["prefix?"] = GraceBlock_lift;
              block1694.receiver = this;
              block1694.className = 'block<musical:103>';
              block1694.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1696 = callmethod(this, "angle", [0]);
                var diff1698 = callmethod(call1696, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1699 = callmethod(this, "angle:=", [1], diff1698);
                return call1699;
              };
              var call1700 = callmethod(Grace_prelude,"while()do", [1, 1], block1689, block1694);
              return call1700
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1676.paramCounts = [
            0,
          ];
          func1676.variableArities = [
            false,
          ];
          obj1607.methods["normaliseAngle"] = func1676;
          func1676.definitionLine = 96;
          func1676.definitionModule = "musical";
          var func1701 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1701.paramCounts[0])
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
              var call1703 = callmethod(this, "angle", [0]);
              var opresult1705 = callmethod(call1703, "+", [1], var_degrees);
              onSelf = true;
              var call1706 = callmethod(this, "angle:=", [1], opresult1705);
              lineNumber = 106
              onSelf = true;
              var call1707 = callmethod(this, "normaliseAngle", [0]);
              return call1707
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1701.paramCounts = [
            1,
          ];
          func1701.variableArities = [
            false,
          ];
          obj1607.methods["turn"] = func1701;
          func1701.definitionLine = 104;
          func1701.definitionModule = "musical";
          var func1708 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1708.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1709 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1710 = callmethod(this, "x", [0]);
              var call1711 = callmethod(var_point,"x()y", [1, 1], call1710, new GraceNum(0));
              onSelf = true;
              var call1712 = callmethod(this, "isPointOver", [1], call1711);
              if (Grace_isTrue(call1712)) {
                lineNumber = 111
                lineNumber = 110
                var bool1713 = new GraceBoolean(true)
                return bool1713
              }
              lineNumber = 115
              var if1714 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1715 = callmethod(this, "x", [0]);
              var call1716 = callmethod(var_point,"x()y", [1, 1], call1715, var_canvasHeight);
              onSelf = true;
              var call1717 = callmethod(this, "isPointOver", [1], call1716);
              if (Grace_isTrue(call1717)) {
                lineNumber = 114
                lineNumber = 113
                var bool1718 = new GraceBoolean(true)
                return bool1718
              }
              lineNumber = 118
              var if1719 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1720 = callmethod(this, "y", [0]);
              var call1721 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1720);
              onSelf = true;
              var call1722 = callmethod(this, "isPointOver", [1], call1721);
              if (Grace_isTrue(call1722)) {
                lineNumber = 117
                lineNumber = 116
                var bool1723 = new GraceBoolean(true)
                return bool1723
              }
              lineNumber = 121
              var if1724 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1725 = callmethod(this, "y", [0]);
              var call1726 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1725);
              onSelf = true;
              var call1727 = callmethod(this, "isPointOver", [1], call1726);
              if (Grace_isTrue(call1727)) {
                lineNumber = 120
                lineNumber = 119
                var bool1728 = new GraceBoolean(true)
                return bool1728
              }
              lineNumber = 122
              lineNumber = 121
              var bool1729 = new GraceBoolean(false)
              return bool1729
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1708.paramCounts = [
            0,
          ];
          func1708.variableArities = [
            false,
          ];
          obj1607.methods["touchingEdge"] = func1708;
          func1708.definitionLine = 108;
          func1708.definitionModule = "musical";
          var func1730 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1730.paramCounts[0])
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
              var if1731 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1732 = callmethod(this, "x", [0]);
              var call1733 = callmethod(var_point,"x()y", [1, 1], call1732, new GraceNum(0));
              onSelf = true;
              var call1734 = callmethod(this, "isPointOver", [1], call1733);
              if (Grace_isTrue(call1734)) {
                lineNumber = 127
                onSelf = true;
                var call1735 = callmethod(this, "bounceFrom", [1], var_top);
                if1731 = call1735;
              }
              lineNumber = 132
              var if1736 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1737 = callmethod(this, "x", [0]);
              var call1738 = callmethod(var_point,"x()y", [1, 1], call1737, var_canvasHeight);
              onSelf = true;
              var call1739 = callmethod(this, "isPointOver", [1], call1738);
              if (Grace_isTrue(call1739)) {
                lineNumber = 130
                onSelf = true;
                var call1740 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1736 = call1740;
              }
              lineNumber = 135
              var if1741 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1742 = callmethod(this, "y", [0]);
              var call1743 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1742);
              onSelf = true;
              var call1744 = callmethod(this, "isPointOver", [1], call1743);
              if (Grace_isTrue(call1744)) {
                lineNumber = 133
                onSelf = true;
                var call1745 = callmethod(this, "bounceFrom", [1], var_left);
                if1741 = call1745;
              }
              lineNumber = 138
              var if1746 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1747 = callmethod(this, "y", [0]);
              var call1748 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1747);
              onSelf = true;
              var call1749 = callmethod(this, "isPointOver", [1], call1748);
              if (Grace_isTrue(call1749)) {
                lineNumber = 136
                onSelf = true;
                var call1750 = callmethod(this, "bounceFrom", [1], var_right);
                if1746 = call1750;
              }
              lineNumber = 138
              var block1751 = Grace_allocObject();
              block1751.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1751.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1751.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1751.methods["match"] = GraceBlock_match;
              block1751.methods["prefix?"] = GraceBlock_lift;
              block1751.receiver = this;
              block1751.className = 'block<musical:138>';
              block1751.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1752 = callmethod(this, "touchingEdge", [0]);
                return call1752;
              };
              lineNumber = 141
              var block1753 = Grace_allocObject();
              block1753.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1753.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1753.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1753.methods["match"] = GraceBlock_match;
              block1753.methods["prefix?"] = GraceBlock_lift;
              block1753.receiver = this;
              block1753.className = 'block<musical:141>';
              block1753.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1754 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1754;
              };
              var call1755 = callmethod(Grace_prelude,"while()do", [1, 1], block1751, block1753);
              return call1755
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1730.paramCounts = [
            0,
          ];
          func1730.variableArities = [
            false,
          ];
          obj1607.methods["bounce"] = func1730;
          func1730.definitionLine = 123;
          func1730.definitionModule = "musical";
          var func1756 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1756.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1757 = var_done;
              lineNumber = 143
              var string1758 = new GraceString("left");
              var opresult1761 = callmethod(var_dir, "==", [1], string1758);
              if (Grace_isTrue(opresult1761)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1762 = callmethod(this, "angle", [0]);
                var diff1765 = callmethod(new GraceNum(360), "-", [1], call1762);
                onSelf = true;
                var call1766 = callmethod(this, "angle:=", [1], diff1765);
                if1757 = call1766;
              }
              lineNumber = 149
              var if1767 = var_done;
              lineNumber = 146
              var string1768 = new GraceString("right");
              var opresult1771 = callmethod(var_dir, "==", [1], string1768);
              if (Grace_isTrue(opresult1771)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1772 = callmethod(this, "angle", [0]);
                var diff1775 = callmethod(new GraceNum(360), "-", [1], call1772);
                onSelf = true;
                var call1776 = callmethod(this, "angle:=", [1], diff1775);
                if1767 = call1776;
              }
              lineNumber = 152
              var if1777 = var_done;
              lineNumber = 149
              var string1778 = new GraceString("top");
              var opresult1781 = callmethod(var_dir, "==", [1], string1778);
              if (Grace_isTrue(opresult1781)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1782 = callmethod(this, "angle", [0]);
                var diff1785 = callmethod(new GraceNum(180), "-", [1], call1782);
                onSelf = true;
                var call1786 = callmethod(this, "angle:=", [1], diff1785);
                if1777 = call1786;
              }
              lineNumber = 155
              var if1787 = var_done;
              lineNumber = 152
              var string1788 = new GraceString("bottom");
              var opresult1791 = callmethod(var_dir, "==", [1], string1788);
              if (Grace_isTrue(opresult1791)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1792 = callmethod(this, "angle", [0]);
                var diff1795 = callmethod(new GraceNum(180), "-", [1], call1792);
                onSelf = true;
                var call1796 = callmethod(this, "angle:=", [1], diff1795);
                if1787 = call1796;
              }
              lineNumber = 155
              onSelf = true;
              var call1797 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1798 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1798
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1756.paramCounts = [
            1,
          ];
          func1756.variableArities = [
            false,
          ];
          obj1607.methods["bounceFrom"] = func1756;
          func1756.definitionLine = 142;
          func1756.definitionModule = "musical";
          var func1799 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1799.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1800 = var_done;
              lineNumber = 159
              var call1801 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1803 = callmethod(this, "x", [0]);
              var opresult1805 = callmethod(call1803, ">", [1], call1801);
              if (Grace_isTrue(opresult1805)) {
                lineNumber = 160
                onSelf = true;
                var call1806 = callmethod(this, "bounceFrom", [1], var_left);
                if1800 = call1806;
              }
              lineNumber = 165
              var if1807 = var_done;
              lineNumber = 162
              var call1808 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1810 = callmethod(this, "x", [0]);
              var opresult1812 = callmethod(call1810, "<", [1], call1808);
              if (Grace_isTrue(opresult1812)) {
                lineNumber = 163
                onSelf = true;
                var call1813 = callmethod(this, "bounceFrom", [1], var_right);
                if1807 = call1813;
              }
              lineNumber = 165
              var block1814 = Grace_allocObject();
              block1814.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1814.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1814.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1814.methods["match"] = GraceBlock_match;
              block1814.methods["prefix?"] = GraceBlock_lift;
              block1814.receiver = this;
              block1814.className = 'block<musical:165>';
              block1814.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1815 = callmethod(this, "touching", [1], var_other);
                return call1815;
              };
              lineNumber = 168
              var block1816 = Grace_allocObject();
              block1816.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1816.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1816.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1816.methods["match"] = GraceBlock_match;
              block1816.methods["prefix?"] = GraceBlock_lift;
              block1816.receiver = this;
              block1816.className = 'block<musical:168>';
              block1816.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1817 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1817;
              };
              var call1818 = callmethod(Grace_prelude,"while()do", [1, 1], block1814, block1816);
              return call1818
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1799.paramCounts = [
            1,
          ];
          func1799.variableArities = [
            false,
          ];
          obj1607.methods["bounceOff"] = func1799;
          func1799.definitionLine = 158;
          func1799.definitionModule = "musical";
          var func1819 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1819.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1820 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1821 = callmethod(this, "y", [0]);
              var call1822 = callmethod(var_point,"x()y", [1, 1], call1820, call1821);
              var call1823 = callmethod(var_other,"isPointOver", [1], call1822);
              return call1823
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1819.paramCounts = [
            1,
          ];
          func1819.variableArities = [
            false,
          ];
          obj1607.methods["touching"] = func1819;
          func1819.definitionLine = 169;
          func1819.definitionModule = "musical";
          var func1824 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1824.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1825 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1826 = callmethod(this, "y", [0]);
              var call1828 = callmethod(var_other,"y", [0]);
              var opresult1830 = callmethod(call1828, "!=", [1], call1826);
              onSelf = true;
              var call1832 = callmethod(this, "x", [0]);
              var call1834 = callmethod(var_other,"x", [0]);
              var opresult1836 = callmethod(call1834, "!=", [1], call1832);
              var opresult1838 = callmethod(opresult1836, "||", [1], opresult1830);
              if (Grace_isTrue(opresult1838)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1841 = callmethod(this, "x", [0]);
                var call1843 = callmethod(var_other,"x", [0]);
                var diff1845 = callmethod(call1843, "-", [1], call1841);
                onSelf = true;
                var call1846 = callmethod(this, "y", [0]);
                var call1848 = callmethod(var_other,"y", [0]);
                var diff1850 = callmethod(call1848, "-", [1], call1846);
                var call1851 = callmethod(var_trig,"atan2", [2], diff1845, diff1850);
                var prod1853 = callmethod(call1851, "*", [1], new GraceNum(180));
                var quotient1855 = callmethod(prod1853, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1856 = callmethod(this, "angle:=", [1], quotient1855);
                if1825 = call1856;
              }
              lineNumber = 176
              onSelf = true;
              var call1857 = callmethod(this, "normaliseAngle", [0]);
              return call1857
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1824.paramCounts = [
            1,
          ];
          func1824.variableArities = [
            false,
          ];
          obj1607.methods["face"] = func1824;
          func1824.definitionLine = 172;
          func1824.definitionModule = "musical";
          var func1858 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1858.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1859 = new GraceString("2d");
              var call1860 = callmethod(var_backingCanvas,"getContext", [1], string1859);
              onSelf = true;
              var call1861 = callmethod(this, "draw", [1], call1860);
              return call1861
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
          obj1607.methods["stamp"] = func1858;
          func1858.definitionLine = 178;
          func1858.definitionModule = "musical";
          sourceObject = obj1607;
          lineNumber = 49
          var call1862 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1863 = callmethod(call1862, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1864 = callmethod(call1863, "initialise", [0]);
          sourceObject = obj1607;
          lineNumber = 50
          var call1865 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1607;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1607;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1607;
          lineNumber = 53
          var call1866 = callmethod(var_collections,"list", [0]);
          var call1867 = callmethod(call1866,"new", [0]);
          obj1607.data["alwaysBlocks"] = call1867;
          var reader_musical_alwaysBlocks_1868 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1868.def = true;
          reader_musical_alwaysBlocks_1868.confidential = true;
          obj1607.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1868;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1867)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1607;
          lineNumber = 55
          lineNumber = 54
          var quotient1871 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1607.data["x"] = quotient1871;
          var reader_musical_x_1872 = function() {
            return this.data["x"];
          }
          obj1607.methods["x"] = reader_musical_x_1872;
          obj1607.data["x"] = quotient1871;
          var writer_musical_x_1872 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1607.methods["x:="] = writer_musical_x_1872;
          writer_musical_x_1872.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1871)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1607.mutable = true;
          sourceObject = obj1607;
          lineNumber = 56
          lineNumber = 55
          var quotient1875 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1607.data["y"] = quotient1875;
          var reader_musical_y_1876 = function() {
            return this.data["y"];
          }
          obj1607.methods["y"] = reader_musical_y_1876;
          obj1607.data["y"] = quotient1875;
          var writer_musical_y_1876 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1607.methods["y:="] = writer_musical_y_1876;
          writer_musical_y_1876.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1875)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1607.mutable = true;
          sourceObject = obj1607;
          lineNumber = 56
          onSelf = true;
          var call1877 = callmethod(this, "x", [0]);
          obj1607.data["destX"] = call1877;
          var reader_musical_destX_1878 = function() {
            return this.data["destX"];
          }
          obj1607.methods["destX"] = reader_musical_destX_1878;
          obj1607.data["destX"] = call1877;
          var writer_musical_destX_1878 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1607.methods["destX:="] = writer_musical_destX_1878;
          reader_musical_destX_1878.confidential = true;
          writer_musical_destX_1878.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1877)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1607.mutable = true;
          sourceObject = obj1607;
          lineNumber = 57
          onSelf = true;
          var call1879 = callmethod(this, "y", [0]);
          obj1607.data["destY"] = call1879;
          var reader_musical_destY_1880 = function() {
            return this.data["destY"];
          }
          obj1607.methods["destY"] = reader_musical_destY_1880;
          obj1607.data["destY"] = call1879;
          var writer_musical_destY_1880 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1607.methods["destY:="] = writer_musical_destY_1880;
          reader_musical_destY_1880.confidential = true;
          writer_musical_destY_1880.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1879)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1607.mutable = true;
          sourceObject = obj1607;
          lineNumber = 58
          obj1607.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1881 = function() {
            return this.data["angle"];
          }
          obj1607.methods["angle"] = reader_musical_angle_1881;
          obj1607.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1881 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1607.methods["angle:="] = writer_musical_angle_1881;
          reader_musical_angle_1881.confidential = true;
          writer_musical_angle_1881.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1607.mutable = true;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          sourceObject = obj1607;
          superDepth = origSuperDepth;
        }
        obj_init_1607.apply(inheritingObject, []);
        return obj1607
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1328.methods["new()object"] = func1606;
    var func1882 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1883 = new GraceString("class drawable");
        return string1883
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1882.paramCounts = [
    ];
    func1882.variableArities = [
    ];
    obj1328.methods["asDebugString"] = func1882;
    func1882.definitionLine = 48;
    func1882.definitionModule = "musical";
    sourceObject = obj1328;
    sourceObject = obj1328;
    superDepth = origSuperDepth;
  }
  obj_init_1328.apply(obj1328, []);
  var var_drawable = obj1328;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1884 = Grace_allocObject();
  obj1884.definitionModule = "musical";
  obj1884.definitionLine = 316;
  obj1884.outer = this;
  var reader_musical_outer_1885 = function() {
    return this.outer;
  }
  obj1884.methods["outer"] = reader_musical_outer_1885;
  function obj_init_1884() {
    var origSuperDepth = superDepth;
    superDepth = obj1884;
    obj1884.annotations = [];
    var func1886 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1886.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1887 = callmethod(this, "position", [0]);
        var call1888 = callmethod(call1887,"x", [0]);
        return call1888
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1886.paramCounts = [
      0,
    ];
    func1886.variableArities = [
      false,
    ];
    obj1884.methods["x"] = func1886;
    func1886.definitionLine = 318;
    func1886.definitionModule = "musical";
    var func1889 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1889.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1890 = callmethod(this, "position", [0]);
        var call1891 = callmethod(call1890,"y", [0]);
        return call1891
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1889.paramCounts = [
      0,
    ];
    func1889.variableArities = [
      false,
    ];
    obj1884.methods["y"] = func1889;
    func1889.definitionLine = 321;
    func1889.definitionModule = "musical";
    var func1892 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1892.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1893 = callmethod(this, "position", [0]);
        return call1893
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1892.paramCounts = [
      0,
    ];
    func1892.variableArities = [
      false,
    ];
    obj1884.methods["location"] = func1892;
    func1892.definitionLine = 324;
    func1892.definitionModule = "musical";
    sourceObject = obj1884;
    lineNumber = 317
    var call1894 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1884.data["position"] = call1894;
    var reader_musical_position_1895 = function() {
      return this.data["position"];
    }
    obj1884.methods["position"] = reader_musical_position_1895;
    obj1884.data["position"] = call1894;
    var writer_musical_position_1895 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1884.methods["position:="] = writer_musical_position_1895;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1894)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1884.mutable = true;
    sourceObject = obj1884;
    sourceObject = obj1884;
    sourceObject = obj1884;
    superDepth = origSuperDepth;
  }
  obj_init_1884.apply(obj1884, []);
  var var_mouse = obj1884;
  lineNumber = 322
  var func1896 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1896.paramCounts[0])
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
  func1896.paramCounts = [
    0,
  ];
  func1896.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1896;
  func1896.definitionLine = 322;
  func1896.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 409
  lineNumber = 468
  lineNumber = 491
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1897 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1897.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 491
      return var_octave
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
  this.methods["octave"] = func1897;
  func1897.definitionLine = 322;
  func1897.definitionModule = "musical";
  lineNumber = 322
  var func1898 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1898.paramCounts[0])
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
  func1898.paramCounts = [
    1,
  ];
  func1898.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1898;
  func1898.definitionLine = 322;
  func1898.definitionModule = "musical";
  lineNumber = 491;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 493
  lineNumber = 494
  lineNumber = 493
  var bool1899 = new GraceBoolean(false)
  var var_applyFlat = bool1899;
  lineNumber = 322
  var func1900 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1900.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 493
      return var_applyFlat
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
  this.methods["applyFlat"] = func1900;
  func1900.definitionLine = 322;
  func1900.definitionModule = "musical";
  lineNumber = 322
  var func1901 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1901.paramCounts[0])
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
  func1901.paramCounts = [
    1,
  ];
  func1901.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1901;
  func1901.definitionLine = 322;
  func1901.definitionModule = "musical";
  lineNumber = 494;
  moduleName = "musical";
  lineNumber = 493
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 496
  lineNumber = 494
  var bool1902 = new GraceBoolean(false)
  var var_applySharp = bool1902;
  lineNumber = 322
  var func1903 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1903.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 494
      return var_applySharp
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
  this.methods["applySharp"] = func1903;
  func1903.definitionLine = 322;
  func1903.definitionModule = "musical";
  lineNumber = 322
  var func1904 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1904.paramCounts[0])
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
  func1904.paramCounts = [
    1,
  ];
  func1904.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1904;
  func1904.definitionLine = 322;
  func1904.definitionModule = "musical";
  lineNumber = 496;
  moduleName = "musical";
  lineNumber = 494
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 496
  lineNumber = 497
  lineNumber = 496
  var bool1905 = new GraceBoolean(false)
  var var_applyChorus = bool1905;
  lineNumber = 322
  var func1906 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1906.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 496
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1906.paramCounts = [
    0,
  ];
  func1906.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1906;
  func1906.definitionLine = 322;
  func1906.definitionModule = "musical";
  lineNumber = 322
  var func1907 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1907.paramCounts[0])
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
  func1907.paramCounts = [
    1,
  ];
  func1907.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1907;
  func1907.definitionLine = 322;
  func1907.definitionModule = "musical";
  lineNumber = 497;
  moduleName = "musical";
  lineNumber = 496
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 498
  lineNumber = 497
  var bool1908 = new GraceBoolean(false)
  var var_applyReverb = bool1908;
  lineNumber = 322
  var func1909 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1909.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 497
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1909.paramCounts = [
    0,
  ];
  func1909.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1909;
  func1909.definitionLine = 322;
  func1909.definitionModule = "musical";
  lineNumber = 322
  var func1910 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1910.paramCounts[0])
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
  func1910.paramCounts = [
    1,
  ];
  func1910.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1910;
  func1910.definitionLine = 322;
  func1910.definitionModule = "musical";
  lineNumber = 498;
  moduleName = "musical";
  lineNumber = 497
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 499
  lineNumber = 498
  var bool1911 = new GraceBoolean(false)
  var var_applyAutowah = bool1911;
  lineNumber = 322
  var func1912 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1912.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 498
      return var_applyAutowah
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
  this.methods["applyAutowah"] = func1912;
  func1912.definitionLine = 322;
  func1912.definitionModule = "musical";
  lineNumber = 322
  var func1913 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1913.paramCounts[0])
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
  func1913.paramCounts = [
    1,
  ];
  func1913.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1913;
  func1913.definitionLine = 322;
  func1913.definitionModule = "musical";
  lineNumber = 499;
  moduleName = "musical";
  lineNumber = 498
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 501
  lineNumber = 499
  var bool1914 = new GraceBoolean(false)
  var var_applyCheby = bool1914;
  lineNumber = 322
  var func1915 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1915.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 499
      return var_applyCheby
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
  this.methods["applyCheby"] = func1915;
  func1915.definitionLine = 322;
  func1915.definitionModule = "musical";
  lineNumber = 322
  var func1916 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1916.paramCounts[0])
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
  func1916.paramCounts = [
    1,
  ];
  func1916.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1916;
  func1916.definitionLine = 322;
  func1916.definitionModule = "musical";
  lineNumber = 501;
  moduleName = "musical";
  lineNumber = 499
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 501
  lineNumber = 506
  lineNumber = 501
  var bool1917 = new GraceBoolean(true)
  var var_firstPass = bool1917;
  lineNumber = 322
  var func1918 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1918.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 501
      return var_firstPass
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
  this.methods["firstPass"] = func1918;
  func1918.definitionLine = 322;
  func1918.definitionModule = "musical";
  lineNumber = 322
  var func1919 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1919.paramCounts[0])
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
  func1919.paramCounts = [
    1,
  ];
  func1919.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1919;
  func1919.definitionLine = 322;
  func1919.definitionModule = "musical";
  lineNumber = 506;
  moduleName = "musical";
  lineNumber = 501
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 506
  lineNumber = 537
  lineNumber = 547
  lineNumber = 554
  lineNumber = 565
  lineNumber = 574
  lineNumber = 579
  lineNumber = 584
  lineNumber = 589
  lineNumber = 594
  lineNumber = 599
  lineNumber = 604
  lineNumber = 611
  lineNumber = 628
  lineNumber = 634
  lineNumber = 640
  lineNumber = 646
  lineNumber = 654
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "public:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nconstructors-of:point:\n x()y\nmethods-of:point.x()y:\n down\n up\n x\n y\n left\n right\nfresh:circle:\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n x\n y\n turn\n radius:=\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n radius\n face\n bounceFrom\n always\n touchingEdge\n step\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:rectangle:\n destY:=\n whenever()do\n colour:=\n x:=\n height:=\n normaliseAngle\n colour\n width:=\n x\n y\n turn\n width\n asString\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n bounceFrom\n always\n touchingEdge\n step\nmethods-of:drawable.new:\n destX:=\n destY:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n normaliseAngle\n bounceFrom\n forward\n x\n y\n moveTo\n whenever()do\n turn\n angle:=\n jumpTo\n mousedown\n isPointOver\n stamp\n angle\n bounceOff\n face\n x:=\n always\n touchingEdge\n bounce\n step\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n label:=\n x\n y\n turn\n label\n stamp\n angle\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n bounceFrom\n always\n touchingEdge\n step\nconfidential:\nfresh:image:\n destY:=\n whenever()do\n x:=\n height:=\n normaliseAngle\n width:=\n x\n y\n turn\n width\n stamp\n angle\n url\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n url:=\n face\n bounceFrom\n always\n touchingEdge\n imgTag\n step\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\n";
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
    "    dom.window.console.log(\"initialise\")",
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
    "    dom.window.console.log(\"start\");",
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
    "        mctx.fillRect(canvasWidth - 20, 0, 20, 20)",
    "    }",
    "",
    "}",
    "method stop {",
    "    stopRunning := true",
    "    canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "    //Graceful Music",
    "    // dom.window.t_stop();",
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
    "//  - Can I change tile Colours?",
    "//  - Should rouge notes be played by a default instrument or just ignored?",
    "//  - Can I contrain number parameters? For example, from 0 - 100?",
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
