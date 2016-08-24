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
      lineNumber = 468
      lineNumber = 464
      var bool986 = new GraceBoolean(true)
      var_stopRunning = bool986;
      lineNumber = 468
      var call987 = callmethod(var_dom,"window", [0]);
      var call988 = callmethod(call987,"t_stop", [0]);
      lineNumber = 469
      var call989 = callmethod(var_dom,"window", [0]);
      var call990 = callmethod(call989,"t_reset", [0]);
      return call990
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
  var func991 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func991.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 472
      onSelf = true;
      var call992 = callmethod(this, "start", [0]);
      lineNumber = 474
      var call993 = callmethod(var_dom,"window", [0]);
      var call994 = callmethod(call993,"t_play", [0]);
      return call994
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func991.paramCounts = [
    1,
  ];
  func991.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func991;
  func991.definitionLine = 471;
  func991.definitionModule = "musical";
  lineNumber = 521
  var func995 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func995.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 526
      var if996 = var_done;
      lineNumber = 522
      var bool997 = new GraceBoolean(true)
      var opresult1000 = callmethod(var_applyFlat, "==", [1], bool997);
      if (Grace_isTrue(opresult1000)) {
        lineNumber = 523
        var string1001 = new GraceString("");
        var string1004 = new GraceString("b");
        var string1007 = new GraceString("");
        var opresult1009 = callmethod(string1007, "++", [1], var_note);
        var opresult1011 = callmethod(opresult1009, "++", [1], string1004);
        var opresult1013 = callmethod(opresult1011, "++", [1], var_octave);
        var opresult1015 = callmethod(opresult1013, "++", [1], string1001);
        var call1016 = callmethod(var_dom,"window", [0]);
        var call1017 = callmethod(call1016,"t_add", [1], opresult1015);
        lineNumber = 525
        lineNumber = 524
        var string1018 = new GraceString("b");
        var string1021 = new GraceString("");
        var opresult1023 = callmethod(string1021, "++", [1], var_note);
        var opresult1025 = callmethod(opresult1023, "++", [1], string1018);
        return opresult1025
      }
      lineNumber = 530
      var if1026 = var_done;
      lineNumber = 526
      var bool1027 = new GraceBoolean(true)
      var opresult1030 = callmethod(var_applySharp, "==", [1], bool1027);
      if (Grace_isTrue(opresult1030)) {
        lineNumber = 527
        var string1031 = new GraceString("");
        var string1034 = new GraceString("#");
        var string1037 = new GraceString("");
        var opresult1039 = callmethod(string1037, "++", [1], var_note);
        var opresult1041 = callmethod(opresult1039, "++", [1], string1034);
        var opresult1043 = callmethod(opresult1041, "++", [1], var_octave);
        var opresult1045 = callmethod(opresult1043, "++", [1], string1031);
        var call1046 = callmethod(var_dom,"window", [0]);
        var call1047 = callmethod(call1046,"t_add", [1], opresult1045);
        lineNumber = 529
        lineNumber = 528
        var string1048 = new GraceString("#");
        var string1051 = new GraceString("");
        var opresult1053 = callmethod(string1051, "++", [1], var_note);
        var opresult1055 = callmethod(opresult1053, "++", [1], string1048);
        return opresult1055
      }
      lineNumber = 530
      var string1056 = new GraceString("");
      var string1059 = new GraceString("");
      var string1062 = new GraceString("");
      var opresult1064 = callmethod(string1062, "++", [1], var_note);
      var opresult1066 = callmethod(opresult1064, "++", [1], string1059);
      var opresult1068 = callmethod(opresult1066, "++", [1], var_octave);
      var opresult1070 = callmethod(opresult1068, "++", [1], string1056);
      var call1071 = callmethod(var_dom,"window", [0]);
      var call1072 = callmethod(call1071,"t_add", [1], opresult1070);
      lineNumber = 532
      lineNumber = 531
      var string1073 = new GraceString("");
      var string1076 = new GraceString("");
      var opresult1078 = callmethod(string1076, "++", [1], var_note);
      var opresult1080 = callmethod(opresult1078, "++", [1], string1073);
      return opresult1080
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
  this.methods["Note"] = func995;
  func995.definitionLine = 521;
  func995.definitionModule = "musical";
  lineNumber = 534
  var func1081 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1081.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 535
      var string1082 = new GraceString("C");
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
  this.methods["C"] = func1081;
  func1081.definitionLine = 534;
  func1081.definitionModule = "musical";
  lineNumber = 537
  var func1084 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1084.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 538
      var string1085 = new GraceString("D");
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
  this.methods["D"] = func1084;
  func1084.definitionLine = 537;
  func1084.definitionModule = "musical";
  lineNumber = 540
  var func1087 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1087.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 541
      var string1088 = new GraceString("E");
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
  this.methods["E"] = func1087;
  func1087.definitionLine = 540;
  func1087.definitionModule = "musical";
  lineNumber = 543
  var func1090 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1090.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 544
      var string1091 = new GraceString("F");
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
  this.methods["F"] = func1090;
  func1090.definitionLine = 543;
  func1090.definitionModule = "musical";
  lineNumber = 546
  var func1093 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1093.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 547
      var string1094 = new GraceString("G");
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
  this.methods["G"] = func1093;
  func1093.definitionLine = 546;
  func1093.definitionModule = "musical";
  lineNumber = 549
  var func1096 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1096.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 550
      var string1097 = new GraceString("A");
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
  this.methods["A"] = func1096;
  func1096.definitionLine = 549;
  func1096.definitionModule = "musical";
  lineNumber = 552
  var func1099 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1099.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 553
      var string1100 = new GraceString("B");
      onSelf = true;
      var call1101 = callmethod(this, "Note", [1], string1100);
      return call1101
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1099.paramCounts = [
    0,
  ];
  func1099.variableArities = [
    false,
  ];
  this.methods["B"] = func1099;
  func1099.definitionLine = 552;
  func1099.definitionModule = "musical";
  lineNumber = 555
  var func1102 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1102.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Rest)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 556
      var string1103 = new GraceString("null");
      var call1104 = callmethod(var_dom,"window", [0]);
      var call1105 = callmethod(call1104,"t_add", [1], string1103);
      lineNumber = 558
      lineNumber = 557
      var string1106 = new GraceString("Rest");
      return string1106
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1102.paramCounts = [
    0,
  ];
  func1102.variableArities = [
    false,
  ];
  this.methods["Rest"] = func1102;
  func1102.definitionLine = 555;
  func1102.definitionModule = "musical";
  lineNumber = 560
  var func1107 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1107.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 562
      lineNumber = 561
      var bool1108 = new GraceBoolean(true)
      var_applyFlat = bool1108;
      lineNumber = 563
      lineNumber = 562
      var call1109 = callmethod(var_note,"apply", [0]);
      var var_ret = call1109;
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
      var bool1110 = new GraceBoolean(false)
      var_applyFlat = bool1110;
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
  func1107.paramCounts = [
    1,
  ];
  func1107.variableArities = [
    false,
  ];
  this.methods["flat"] = func1107;
  func1107.definitionLine = 560;
  func1107.definitionModule = "musical";
  lineNumber = 566
  var func1111 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1111.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 568
      lineNumber = 567
      var bool1112 = new GraceBoolean(true)
      var_applySharp = bool1112;
      lineNumber = 569
      lineNumber = 568
      var call1113 = callmethod(var_note,"apply", [0]);
      var var_ret = call1113;
      lineNumber = 569;
      moduleName = "musical";
      lineNumber = 568
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 570
      lineNumber = 569
      var bool1114 = new GraceBoolean(false)
      var_applySharp = bool1114;
      lineNumber = 571
      lineNumber = 570
      return var_ret
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
  this.methods["sharp"] = func1111;
  func1111.definitionLine = 566;
  func1111.definitionModule = "musical";
  lineNumber = 573
  var func1115 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1115.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1115.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 575
      lineNumber = 574
      var var_oldOctave = var_octave;
      lineNumber = 575;
      moduleName = "musical";
      lineNumber = 574
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 576
      lineNumber = 575
      var_octave = var_num;
      lineNumber = 577
      lineNumber = 576
      var call1116 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1116;
      lineNumber = 577;
      moduleName = "musical";
      lineNumber = 576
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 578
      lineNumber = 577
      var_octave = var_oldOctave;
      lineNumber = 579
      lineNumber = 578
      return var_ret
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
    1,
  ];
  func1115.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1115;
  func1115.definitionLine = 573;
  func1115.definitionModule = "musical";
  lineNumber = 584
  var func1117 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1117.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 589
      var if1118 = var_done;
      lineNumber = 585
      var bool1119 = new GraceBoolean(true)
      var opresult1122 = callmethod(var_firstPass, "==", [1], bool1119);
      if (Grace_isTrue(opresult1122)) {
        lineNumber = 586
        var call1123 = callmethod(var_dom,"window", [0]);
        var call1124 = callmethod(call1123,"t_reset", [0]);
        lineNumber = 588
        lineNumber = 587
        var bool1125 = new GraceBoolean(false)
        var_firstPass = bool1125;
        if1118 = bool1125;
      }
      lineNumber = 589
      var call1126 = callmethod(var_dom,"window", [0]);
      var call1127 = callmethod(call1126,"t_init", [0]);
      lineNumber = 590
      var call1128 = callmethod(var_blocks,"apply", [0]);
      return call1128
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1117.paramCounts = [
    1,
  ];
  func1117.variableArities = [
    false,
  ];
  this.methods["Instrument"] = func1117;
  func1117.definitionLine = 584;
  func1117.definitionModule = "musical";
  lineNumber = 593
  var func1129 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1129.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 594
      onSelf = true;
      var call1130 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 595
      var call1131 = callmethod(var_dom,"window", [0]);
      var call1132 = callmethod(call1131,"t_synth_mono", [0]);
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
  this.methods["monoSynth"] = func1129;
  func1129.definitionLine = 593;
  func1129.definitionModule = "musical";
  lineNumber = 598
  var func1133 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1133.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 599
      onSelf = true;
      var call1134 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 600
      var call1135 = callmethod(var_dom,"window", [0]);
      var call1136 = callmethod(call1135,"t_synth_pluck", [0]);
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
  this.methods["pluckSynth"] = func1133;
  func1133.definitionLine = 598;
  func1133.definitionModule = "musical";
  lineNumber = 603
  var func1137 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1137.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 604
      onSelf = true;
      var call1138 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 605
      var call1139 = callmethod(var_dom,"window", [0]);
      var call1140 = callmethod(call1139,"t_synth_poly", [0]);
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
  this.methods["polySynth"] = func1137;
  func1137.definitionLine = 603;
  func1137.definitionModule = "musical";
  lineNumber = 608
  var func1141 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1141.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 609
      onSelf = true;
      var call1142 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 610
      var call1143 = callmethod(var_dom,"window", [0]);
      var call1144 = callmethod(call1143,"t_synth_fm", [0]);
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
  this.methods["fmSynth"] = func1141;
  func1141.definitionLine = 608;
  func1141.definitionModule = "musical";
  lineNumber = 613
  var func1145 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1145.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 614
      onSelf = true;
      var call1146 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 615
      var call1147 = callmethod(var_dom,"window", [0]);
      var call1148 = callmethod(call1147,"t_synth_membrane", [0]);
      return call1148
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
  this.methods["membraneSynth"] = func1145;
  func1145.definitionLine = 613;
  func1145.definitionModule = "musical";
  lineNumber = 618
  var func1149 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1149.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 619
      onSelf = true;
      var call1150 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 620
      var call1151 = callmethod(var_dom,"window", [0]);
      var call1152 = callmethod(call1151,"t_synth_duo", [0]);
      return call1152
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
  this.methods["duoSynth"] = func1149;
  func1149.definitionLine = 618;
  func1149.definitionModule = "musical";
  lineNumber = 623
  var func1153 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1153.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (arpeggio)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 624
      var call1154 = callmethod(var_dom,"window", [0]);
      var call1155 = callmethod(call1154,"t_synth_arpeggio", [1], var_note);
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
  this.methods["arpeggio"] = func1153;
  func1153.definitionLine = 623;
  func1153.definitionModule = "musical";
  lineNumber = 630
  var func1156 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1156.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 634
      var if1157 = var_done;
      lineNumber = 631
      var bool1158 = new GraceBoolean(true)
      var opresult1161 = callmethod(var_applyChorus, "==", [1], bool1158);
      if (Grace_isTrue(opresult1161)) {
        lineNumber = 632
        var call1162 = callmethod(var_dom,"window", [0]);
        var call1163 = callmethod(call1162,"t_effect_chorus", [0]);
        if1157 = call1163;
      }
      lineNumber = 637
      var if1164 = var_done;
      lineNumber = 634
      var bool1165 = new GraceBoolean(true)
      var opresult1168 = callmethod(var_applyReverb, "==", [1], bool1165);
      if (Grace_isTrue(opresult1168)) {
        lineNumber = 635
        var call1169 = callmethod(var_dom,"window", [0]);
        var call1170 = callmethod(call1169,"t_effect_reverb", [0]);
        if1164 = call1170;
      }
      lineNumber = 640
      var if1171 = var_done;
      lineNumber = 637
      var bool1172 = new GraceBoolean(true)
      var opresult1175 = callmethod(var_applyAutowah, "==", [1], bool1172);
      if (Grace_isTrue(opresult1175)) {
        lineNumber = 638
        var call1176 = callmethod(var_dom,"window", [0]);
        var call1177 = callmethod(call1176,"t_effect_autowah", [0]);
        if1171 = call1177;
      }
      lineNumber = 643
      var if1178 = var_done;
      lineNumber = 640
      var bool1179 = new GraceBoolean(true)
      var opresult1182 = callmethod(var_applyCheby, "==", [1], bool1179);
      if (Grace_isTrue(opresult1182)) {
        lineNumber = 641
        var call1183 = callmethod(var_dom,"window", [0]);
        var call1184 = callmethod(call1183,"t_effect_cheby", [0]);
        if1178 = call1184;
      }
      lineNumber = 643
      var call1185 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 644
      var call1186 = callmethod(var_dom,"window", [0]);
      var call1187 = callmethod(call1186,"t_effect_reset", [0]);
      return call1187
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
  this.methods["Effect"] = func1156;
  func1156.definitionLine = 630;
  func1156.definitionModule = "musical";
  lineNumber = 647
  var func1188 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1188.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 649
      lineNumber = 648
      var bool1189 = new GraceBoolean(true)
      var_applyChorus = bool1189;
      lineNumber = 649
      onSelf = true;
      var call1190 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 651
      lineNumber = 650
      var bool1191 = new GraceBoolean(false)
      var_applyChorus = bool1191;
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
  this.methods["Chorus"] = func1188;
  func1188.definitionLine = 647;
  func1188.definitionModule = "musical";
  lineNumber = 653
  var func1192 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1192.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 655
      lineNumber = 654
      var bool1193 = new GraceBoolean(true)
      var_applyReverb = bool1193;
      lineNumber = 655
      onSelf = true;
      var call1194 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 657
      lineNumber = 656
      var bool1195 = new GraceBoolean(false)
      var_applyReverb = bool1195;
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
  this.methods["Reverb"] = func1192;
  func1192.definitionLine = 653;
  func1192.definitionModule = "musical";
  lineNumber = 659
  var func1196 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1196.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 661
      lineNumber = 660
      var bool1197 = new GraceBoolean(true)
      var_applyAutowah = bool1197;
      lineNumber = 661
      onSelf = true;
      var call1198 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 663
      lineNumber = 662
      var bool1199 = new GraceBoolean(false)
      var_applyAutowah = bool1199;
      return bool1199
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
  this.methods["Autowah"] = func1196;
  func1196.definitionLine = 659;
  func1196.definitionModule = "musical";
  lineNumber = 665
  var func1200 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1200.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 667
      lineNumber = 666
      var bool1201 = new GraceBoolean(true)
      var_applyCheby = bool1201;
      lineNumber = 667
      onSelf = true;
      var call1202 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 669
      lineNumber = 668
      var bool1203 = new GraceBoolean(false)
      var_applyCheby = bool1203;
      return bool1203
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
  this.methods["Cheby"] = func1200;
  func1200.definitionLine = 665;
  func1200.definitionModule = "musical";
  lineNumber = 673
  var func1204 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1204.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 674
      var call1205 = callmethod(var_dom,"window", [0]);
      var call1206 = callmethod(call1205,"t_bpm", [1], var_bpm);
      return call1206
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
  this.methods["SetBPM"] = func1204;
  func1204.definitionLine = 673;
  func1204.definitionModule = "musical";
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
  var call1207 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1207;
  this.data = call1207.data;
  this._value = call1207._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 674
  var func1208 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    0,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["document"] = func1208;
  func1208.definitionLine = 674;
  func1208.definitionModule = "musical";
  lineNumber = 674
  var func1209 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    1,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["document:="] = func1209;
  func1209.definitionLine = 674;
  func1209.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 674
  var func1210 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    0,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1210;
  func1210.definitionLine = 674;
  func1210.definitionModule = "musical";
  lineNumber = 674
  var func1211 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1211.paramCounts[0])
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
  func1211.paramCounts = [
    1,
  ];
  func1211.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1211;
  func1211.definitionLine = 674;
  func1211.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 674
  var func1212 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1212.paramCounts[0])
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
  func1212.paramCounts = [
    0,
  ];
  func1212.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1212;
  func1212.definitionLine = 674;
  func1212.definitionModule = "musical";
  lineNumber = 674
  var func1213 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1213.paramCounts[0])
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
  func1213.paramCounts = [
    1,
  ];
  func1213.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1213;
  func1213.definitionLine = 674;
  func1213.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 674
  var func1214 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1214.paramCounts[0])
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
  func1214.paramCounts = [
    0,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1214;
  func1214.definitionLine = 674;
  func1214.definitionModule = "musical";
  lineNumber = 674
  var func1215 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    1,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1215;
  func1215.definitionLine = 674;
  func1215.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 674
  var func1216 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1216.paramCounts[0])
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
  func1216.paramCounts = [
    0,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1216;
  func1216.definitionLine = 674;
  func1216.definitionModule = "musical";
  lineNumber = 674
  var func1217 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    1,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1217;
  func1217.definitionLine = 674;
  func1217.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 674
  var func1218 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1218.paramCounts[0])
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
  func1218.paramCounts = [
    0,
  ];
  func1218.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1218;
  func1218.definitionLine = 674;
  func1218.definitionModule = "musical";
  lineNumber = 674
  var func1219 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1219.paramCounts[0])
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
  func1219.paramCounts = [
    1,
  ];
  func1219.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1219;
  func1219.definitionLine = 674;
  func1219.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1220 = callmethod(var_dom,"window", [0]);
  var call1221 = callmethod(call1220,"Math", [0]);
  var var_trig = call1221;
  var func1222 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1222.paramCounts[0])
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
  func1222.paramCounts = [
    0,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["trig"] = func1222;
  func1222.definitionLine = 15;
  func1222.definitionModule = "musical";
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
  var func1223 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    0,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["PI"] = func1223;
  func1223.definitionLine = 15;
  func1223.definitionModule = "musical";
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
  var bool1224 = new GraceBoolean(false)
  var var_stopRunning = bool1224;
  lineNumber = 15
  var func1225 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    0,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1225;
  func1225.definitionLine = 15;
  func1225.definitionModule = "musical";
  lineNumber = 15
  var func1226 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1226.paramCounts[0])
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
  func1226.paramCounts = [
    1,
  ];
  func1226.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1226;
  func1226.definitionLine = 15;
  func1226.definitionModule = "musical";
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
  var bool1227 = new GraceBoolean(false)
  var var_initialised = bool1227;
  lineNumber = 15
  var func1228 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    0,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1228;
  func1228.definitionLine = 15;
  func1228.definitionModule = "musical";
  lineNumber = 15
  var func1229 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    1,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1229;
  func1229.definitionLine = 15;
  func1229.definitionModule = "musical";
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
  var string1230 = new GraceString("white");
  var var_backgroundColour = string1230;
  lineNumber = 15
  var func1231 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1231.paramCounts[0])
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
  func1231.paramCounts = [
    0,
  ];
  func1231.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1231;
  func1231.definitionLine = 15;
  func1231.definitionModule = "musical";
  lineNumber = 15
  var func1232 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1232.paramCounts[0])
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
  func1232.paramCounts = [
    1,
  ];
  func1232.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1232;
  func1232.definitionLine = 15;
  func1232.definitionModule = "musical";
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
  var call1233 = callmethod(var_collections,"list", [0]);
  var call1234 = callmethod(call1233,"new", [0]);
  var var_registeredObjects = call1234;
  var func1235 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1235.paramCounts[0])
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
  func1235.paramCounts = [
    0,
  ];
  func1235.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1235;
  func1235.definitionLine = 21;
  func1235.definitionModule = "musical";
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
  var call1236 = callmethod(var_collections,"list", [0]);
  var call1237 = callmethod(call1236,"new", [0]);
  var var_stepBlocks = call1237;
  var func1238 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1238.paramCounts[0])
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
  func1238.paramCounts = [
    0,
  ];
  func1238.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1238;
  func1238.definitionLine = 22;
  func1238.definitionModule = "musical";
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
  var call1239 = callmethod(var_collections,"map", [0]);
  var call1240 = callmethod(call1239,"new", [0]);
  var var_audioTags = call1240;
  var func1241 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1241.paramCounts[0])
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
  func1241.paramCounts = [
    0,
  ];
  func1241.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1241;
  func1241.definitionLine = 23;
  func1241.definitionModule = "musical";
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
  var func1242 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1242.paramCounts[0])
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
  func1242.paramCounts = [
    0,
  ];
  func1242.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1242;
  func1242.definitionLine = 23;
  func1242.definitionModule = "musical";
  lineNumber = 23
  var func1243 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1243.paramCounts[0])
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
  func1243.paramCounts = [
    1,
  ];
  func1243.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1243;
  func1243.definitionLine = 23;
  func1243.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1244 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1244.paramCounts[0])
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
  func1244.paramCounts = [
    0,
  ];
  func1244.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1244;
  func1244.definitionLine = 23;
  func1244.definitionModule = "musical";
  lineNumber = 23
  var func1245 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1245.paramCounts[0])
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
  func1245.paramCounts = [
    1,
  ];
  func1245.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1245;
  func1245.definitionLine = 23;
  func1245.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1246 = new GraceString("left");
  var var_left = string1246;
  lineNumber = 23
  var func1247 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1247.paramCounts[0])
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
  func1247.paramCounts = [
    0,
  ];
  func1247.variableArities = [
    false,
  ];
  this.methods["left"] = func1247;
  func1247.definitionLine = 23;
  func1247.definitionModule = "musical";
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
  var string1248 = new GraceString("right");
  var var_right = string1248;
  lineNumber = 23
  var func1249 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1249.paramCounts[0])
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
  func1249.paramCounts = [
    0,
  ];
  func1249.variableArities = [
    false,
  ];
  this.methods["right"] = func1249;
  func1249.definitionLine = 23;
  func1249.definitionModule = "musical";
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
  var string1250 = new GraceString("top");
  var var_top = string1250;
  lineNumber = 23
  var func1251 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1251.paramCounts[0])
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
  func1251.paramCounts = [
    0,
  ];
  func1251.variableArities = [
    false,
  ];
  this.methods["top"] = func1251;
  func1251.definitionLine = 23;
  func1251.definitionModule = "musical";
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
  var string1252 = new GraceString("bottom");
  var var_bottom = string1252;
  lineNumber = 23
  var func1253 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1253.paramCounts[0])
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
  func1253.paramCounts = [
    0,
  ];
  func1253.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1253;
  func1253.definitionLine = 23;
  func1253.definitionModule = "musical";
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
  var func1254 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1254.paramCounts[0])
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
  func1254.paramCounts = [
    0,
  ];
  func1254.variableArities = [
    false,
  ];
  this.methods["centre"] = func1254;
  func1254.definitionLine = 23;
  func1254.definitionModule = "musical";
  lineNumber = 23
  var func1255 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1255.paramCounts[0])
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
  func1255.paramCounts = [
    1,
  ];
  func1255.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1255;
  func1255.definitionLine = 23;
  func1255.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1256 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1256.paramCounts[0])
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
  func1256.paramCounts = [
    0,
  ];
  func1256.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1256;
  func1256.definitionLine = 23;
  func1256.definitionModule = "musical";
  lineNumber = 23
  var func1257 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1257.paramCounts[0])
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
  func1257.paramCounts = [
    1,
  ];
  func1257.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1257;
  func1257.definitionLine = 23;
  func1257.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1258 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1258.paramCounts[0])
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
  func1258.paramCounts = [
    0,
  ];
  func1258.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1258;
  func1258.definitionLine = 23;
  func1258.definitionModule = "musical";
  lineNumber = 23
  var func1259 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1259.paramCounts[0])
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
  func1259.paramCounts = [
    1,
  ];
  func1259.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1259;
  func1259.definitionLine = 23;
  func1259.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1260 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1260.paramCounts[0])
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
  func1260.paramCounts = [
    0,
  ];
  func1260.variableArities = [
    false,
  ];
  this.methods["above"] = func1260;
  func1260.definitionLine = 23;
  func1260.definitionModule = "musical";
  lineNumber = 23
  var func1261 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1261.paramCounts[0])
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
  func1261.paramCounts = [
    1,
  ];
  func1261.variableArities = [
    false,
  ];
  this.methods["above:="] = func1261;
  func1261.definitionLine = 23;
  func1261.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1262 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1262.paramCounts[0])
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
  func1262.paramCounts = [
    0,
  ];
  func1262.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1262;
  func1262.definitionLine = 23;
  func1262.definitionModule = "musical";
  lineNumber = 23
  var func1263 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1263.paramCounts[0])
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
  func1263.paramCounts = [
    1,
  ];
  func1263.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1263;
  func1263.definitionLine = 23;
  func1263.definitionModule = "musical";
  lineNumber = 40
  var func1264 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1264.paramCounts[0])
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
  func1264.paramCounts = [
    0,
  ];
  func1264.variableArities = [
    false,
  ];
  this.methods["point"] = func1264;
  func1264.definitionLine = 40;
  func1264.definitionModule = "musical";
  var obj1265 = Grace_allocObject();
  obj1265.definitionModule = "musical";
  obj1265.definitionLine = 40;
  obj1265.outer = this;
  var reader_musical_outer_1266 = function() {
    return this.outer;
  }
  obj1265.methods["outer"] = reader_musical_outer_1266;
  function obj_init_1265() {
    var origSuperDepth = superDepth;
    superDepth = obj1265;
    obj1265.annotations = [];
    var func1267 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1267.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1267.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
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
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1272 = callmethod(this, "x", [0]);
              var diff1274 = callmethod(call1272, "-", [1], var_dx);
              onSelf = true;
              var call1275 = callmethod(this, "y", [0]);
              var call1276 = callmethod(var_point,"x()y", [1, 1], diff1274, call1275);
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
          obj1268.methods["left"] = func1270;
          func1270.definitionLine = 43;
          func1270.definitionModule = "musical";
          var func1277 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1279 = callmethod(this, "x", [0]);
              var opresult1281 = callmethod(call1279, "+", [1], var_dx);
              onSelf = true;
              var call1282 = callmethod(this, "y", [0]);
              var call1283 = callmethod(var_point,"x()y", [1, 1], opresult1281, call1282);
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
          obj1268.methods["right"] = func1277;
          func1277.definitionLine = 44;
          func1277.definitionModule = "musical";
          var func1284 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1285 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1287 = callmethod(this, "y", [0]);
              var diff1289 = callmethod(call1287, "-", [1], var_dy);
              var call1290 = callmethod(var_point,"x()y", [1, 1], call1285, diff1289);
              return call1290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1284.paramCounts = [
            1,
          ];
          func1284.variableArities = [
            false,
          ];
          obj1268.methods["up"] = func1284;
          func1284.definitionLine = 45;
          func1284.definitionModule = "musical";
          var func1291 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1292 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1294 = callmethod(this, "y", [0]);
              var opresult1296 = callmethod(call1294, "+", [1], var_dy);
              var call1297 = callmethod(var_point,"x()y", [1, 1], call1292, opresult1296);
              return call1297
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1291.paramCounts = [
            1,
          ];
          func1291.variableArities = [
            false,
          ];
          obj1268.methods["down"] = func1291;
          func1291.definitionLine = 46;
          func1291.definitionModule = "musical";
          sourceObject = obj1268;
          lineNumber = 41
          obj1268.data["x"] = var_x__39__;
          var reader_musical_x_1298 = function() {
            return this.data["x"];
          }
          reader_musical_x_1298.def = true;
          obj1268.methods["x"] = reader_musical_x_1298;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1268;
          lineNumber = 42
          obj1268.data["y"] = var_y__39__;
          var reader_musical_y_1299 = function() {
            return this.data["y"];
          }
          reader_musical_y_1299.def = true;
          obj1268.methods["y"] = reader_musical_y_1299;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1268;
          sourceObject = obj1268;
          sourceObject = obj1268;
          sourceObject = obj1268;
          superDepth = origSuperDepth;
        }
        obj_init_1268.apply(obj1268, []);
        return obj1268
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1267.paramCounts = [
      1,
      1,
    ];
    func1267.variableArities = [
      false,
      false,
    ];
    obj1265.methods["x()y"] = func1267;
    func1267.definitionLine = 40;
    func1267.definitionModule = "musical";
    var func1300 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1301 = Grace_allocObject();
        obj1301.definitionModule = "musical";
        obj1301.definitionLine = 40;
        var inho1301 = inheritingObject;
        while (inho1301.superobj) inho1301 = inho1301.superobj;
        inho1301.superobj = obj1301;
        obj1301.data = inheritingObject.data;
        obj1301.outer = this;
        var reader_musical_outer_1302 = function() {
          return this.outer;
        }
        obj1301.methods["outer"] = reader_musical_outer_1302;
        function obj_init_1301() {
          var origSuperDepth = superDepth;
          superDepth = obj1301;
          obj1301.annotations = [];
          var func1303 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1303.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1305 = callmethod(this, "x", [0]);
              var diff1307 = callmethod(call1305, "-", [1], var_dx);
              onSelf = true;
              var call1308 = callmethod(this, "y", [0]);
              var call1309 = callmethod(var_point,"x()y", [1, 1], diff1307, call1308);
              return call1309
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1303.paramCounts = [
            1,
          ];
          func1303.variableArities = [
            false,
          ];
          obj1301.methods["left"] = func1303;
          func1303.definitionLine = 43;
          func1303.definitionModule = "musical";
          var func1310 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1312 = callmethod(this, "x", [0]);
              var opresult1314 = callmethod(call1312, "+", [1], var_dx);
              onSelf = true;
              var call1315 = callmethod(this, "y", [0]);
              var call1316 = callmethod(var_point,"x()y", [1, 1], opresult1314, call1315);
              return call1316
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1310.paramCounts = [
            1,
          ];
          func1310.variableArities = [
            false,
          ];
          obj1301.methods["right"] = func1310;
          func1310.definitionLine = 44;
          func1310.definitionModule = "musical";
          var func1317 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1317.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1318 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1320 = callmethod(this, "y", [0]);
              var diff1322 = callmethod(call1320, "-", [1], var_dy);
              var call1323 = callmethod(var_point,"x()y", [1, 1], call1318, diff1322);
              return call1323
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1317.paramCounts = [
            1,
          ];
          func1317.variableArities = [
            false,
          ];
          obj1301.methods["up"] = func1317;
          func1317.definitionLine = 45;
          func1317.definitionModule = "musical";
          var func1324 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1324.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1325 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1327 = callmethod(this, "y", [0]);
              var opresult1329 = callmethod(call1327, "+", [1], var_dy);
              var call1330 = callmethod(var_point,"x()y", [1, 1], call1325, opresult1329);
              return call1330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1324.paramCounts = [
            1,
          ];
          func1324.variableArities = [
            false,
          ];
          obj1301.methods["down"] = func1324;
          func1324.definitionLine = 46;
          func1324.definitionModule = "musical";
          sourceObject = obj1301;
          lineNumber = 41
          obj1301.data["x"] = var_x__39__;
          var reader_musical_x_1331 = function() {
            return this.data["x"];
          }
          reader_musical_x_1331.def = true;
          obj1301.methods["x"] = reader_musical_x_1331;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1301;
          lineNumber = 42
          obj1301.data["y"] = var_y__39__;
          var reader_musical_y_1332 = function() {
            return this.data["y"];
          }
          reader_musical_y_1332.def = true;
          obj1301.methods["y"] = reader_musical_y_1332;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1301;
          sourceObject = obj1301;
          sourceObject = obj1301;
          sourceObject = obj1301;
          superDepth = origSuperDepth;
        }
        obj_init_1301.apply(inheritingObject, []);
        return obj1301
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1265.methods["x()y()object"] = func1300;
    var func1333 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1334 = new GraceString("class point");
        return string1334
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1333.paramCounts = [
    ];
    func1333.variableArities = [
    ];
    obj1265.methods["asDebugString"] = func1333;
    func1333.definitionLine = 40;
    func1333.definitionModule = "musical";
    sourceObject = obj1265;
    sourceObject = obj1265;
    superDepth = origSuperDepth;
  }
  obj_init_1265.apply(obj1265, []);
  var var_point = obj1265;
  lineNumber = 48
  var func1335 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1335.paramCounts[0])
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
  func1335.paramCounts = [
    0,
  ];
  func1335.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1335;
  func1335.definitionLine = 48;
  func1335.definitionModule = "musical";
  var obj1336 = Grace_allocObject();
  obj1336.definitionModule = "musical";
  obj1336.definitionLine = 48;
  obj1336.outer = this;
  var reader_musical_outer_1337 = function() {
    return this.outer;
  }
  obj1336.methods["outer"] = reader_musical_outer_1337;
  function obj_init_1336() {
    var origSuperDepth = superDepth;
    superDepth = obj1336;
    obj1336.annotations = [];
    var func1338 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1338.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
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
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1342 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1343 = Grace_allocObject();
              block1343.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1343.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1343.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1343.methods["match"] = GraceBlock_match;
              block1343.methods["prefix?"] = GraceBlock_lift;
              block1343.receiver = this;
              block1343.className = 'block<musical:63>';
              block1343.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1344 = callmethod(var_b,"apply", [0]);
                return call1344;
              };
              var call1345 = callmethod(Grace_prelude,"for()do", [1, 1], call1342, block1343);
              lineNumber = 63
              onSelf = true;
              var call1346 = callmethod(this, "tick", [0]);
              return call1346
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
          obj1339.methods["step"] = func1341;
          func1341.definitionLine = 59;
          func1341.definitionModule = "musical";
          var func1347 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1347.paramCounts[0])
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
          func1347.paramCounts = [
            0,
          ];
          func1347.variableArities = [
            false,
          ];
          obj1339.methods["tick"] = func1347;
          func1347.definitionLine = 66;
          func1347.definitionModule = "musical";
          var func1348 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1348.paramCounts[0])
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
          func1348.paramCounts = [
            1,
          ];
          func1348.variableArities = [
            false,
          ];
          obj1339.methods["draw"] = func1348;
          func1348.definitionLine = 67;
          func1348.definitionModule = "musical";
          var func1349 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1349.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1350 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1351 = callmethod(this, "destX:=", [1], call1350);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1352 = callmethod(var_p,"y", [0]);
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
          func1349.paramCounts = [
            1,
          ];
          func1349.variableArities = [
            false,
          ];
          obj1339.methods["moveTo"] = func1349;
          func1349.definitionLine = 68;
          func1349.definitionModule = "musical";
          var func1354 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1354.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1355 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1356 = callmethod(this, "x:=", [1], call1355);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1357 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1358 = callmethod(this, "y:=", [1], call1357);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1359 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1360 = callmethod(this, "destX:=", [1], call1359);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1361 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1362 = callmethod(this, "destY:=", [1], call1361);
              return call1362
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
          obj1339.methods["jumpTo"] = func1354;
          func1354.definitionLine = 72;
          func1354.definitionModule = "musical";
          var func1363 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1363.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1364 = new GraceBoolean(false)
              return bool1364
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1363.paramCounts = [
            1,
          ];
          func1363.variableArities = [
            false,
          ];
          obj1339.methods["isPointOver"] = func1363;
          func1363.definitionLine = 78;
          func1363.definitionModule = "musical";
          var func1365 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1365.paramCounts[0])
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
          func1365.paramCounts = [
            0,
          ];
          func1365.variableArities = [
            false,
          ];
          obj1339.methods["mousedown"] = func1365;
          func1365.definitionLine = 79;
          func1365.definitionModule = "musical";
          var func1366 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1367 = callmethod(this, "alwaysBlocks", [0]);
              var call1368 = callmethod(call1367,"push", [1], var_b);
              return call1368
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
          obj1339.methods["always"] = func1366;
          func1366.definitionLine = 80;
          func1366.definitionModule = "musical";
          var func1369 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1369.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1369.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1370 = Grace_allocObject();
              block1370.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1370.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1370.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1370.methods["match"] = GraceBlock_match;
              block1370.methods["prefix?"] = GraceBlock_lift;
              block1370.receiver = this;
              block1370.className = 'block<musical:89>';
              block1370.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1371 = var_done;
                lineNumber = 85
                var call1372 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1372)) {
                  lineNumber = 86
                  var call1373 = callmethod(var_b,"apply", [0]);
                  if1371 = call1373;
                }
                return if1371;
              };
              onSelf = true;
              var call1374 = callmethod(this, "always", [1], block1370);
              return call1374
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
            1,
          ];
          func1369.variableArities = [
            false,
            false,
          ];
          obj1339.methods["whenever()do"] = func1369;
          func1369.definitionLine = 83;
          func1369.definitionModule = "musical";
          var func1375 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1375.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1379 = callmethod(this, "angle", [0]);
              var quotient1381 = callmethod(call1379, "/", [1], new GraceNum(180));
              var prod1383 = callmethod(quotient1381, "*", [1], var_PI);
              var call1384 = callmethod(var_trig,"cos", [1], prod1383);
              var prod1386 = callmethod(call1384, "*", [1], var_dist);
              var var_y__39__ = prod1386;
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
              var call1390 = callmethod(this, "angle", [0]);
              var quotient1392 = callmethod(call1390, "/", [1], new GraceNum(180));
              var prod1394 = callmethod(quotient1392, "*", [1], var_PI);
              var call1395 = callmethod(var_trig,"sin", [1], prod1394);
              var prod1397 = callmethod(call1395, "*", [1], var_dist);
              var var_x__39__ = prod1397;
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
              var call1399 = callmethod(this, "x", [0]);
              var opresult1401 = callmethod(call1399, "+", [1], var_x__39__);
              onSelf = true;
              var call1402 = callmethod(this, "x:=", [1], opresult1401);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1404 = callmethod(this, "y", [0]);
              var opresult1406 = callmethod(call1404, "+", [1], var_y__39__);
              onSelf = true;
              var call1407 = callmethod(this, "y:=", [1], opresult1406);
              return call1407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1375.paramCounts = [
            1,
          ];
          func1375.variableArities = [
            false,
          ];
          obj1339.methods["forward"] = func1375;
          func1375.definitionLine = 90;
          func1375.definitionModule = "musical";
          var func1408 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1409 = Grace_allocObject();
              block1409.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1409.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1409.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1409.methods["match"] = GraceBlock_match;
              block1409.methods["prefix?"] = GraceBlock_lift;
              block1409.receiver = this;
              block1409.className = 'block<musical:97>';
              block1409.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1411 = callmethod(this, "angle", [0]);
                var opresult1413 = callmethod(call1411, "<", [1], new GraceNum(0));
                return opresult1413;
              };
              lineNumber = 100
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
              block1414.className = 'block<musical:100>';
              block1414.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1416 = callmethod(this, "angle", [0]);
                var opresult1418 = callmethod(call1416, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1419 = callmethod(this, "angle:=", [1], opresult1418);
                return call1419;
              };
              var call1420 = callmethod(Grace_prelude,"while()do", [1, 1], block1409, block1414);
              lineNumber = 100
              var block1421 = Grace_allocObject();
              block1421.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1421.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1421.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1421.methods["match"] = GraceBlock_match;
              block1421.methods["prefix?"] = GraceBlock_lift;
              block1421.receiver = this;
              block1421.className = 'block<musical:100>';
              block1421.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1423 = callmethod(this, "angle", [0]);
                var opresult1425 = callmethod(call1423, ">", [1], new GraceNum(360));
                return opresult1425;
              };
              lineNumber = 103
              var block1426 = Grace_allocObject();
              block1426.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1426.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1426.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1426.methods["match"] = GraceBlock_match;
              block1426.methods["prefix?"] = GraceBlock_lift;
              block1426.receiver = this;
              block1426.className = 'block<musical:103>';
              block1426.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1428 = callmethod(this, "angle", [0]);
                var diff1430 = callmethod(call1428, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1431 = callmethod(this, "angle:=", [1], diff1430);
                return call1431;
              };
              var call1432 = callmethod(Grace_prelude,"while()do", [1, 1], block1421, block1426);
              return call1432
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1408.paramCounts = [
            0,
          ];
          func1408.variableArities = [
            false,
          ];
          obj1339.methods["normaliseAngle"] = func1408;
          func1408.definitionLine = 96;
          func1408.definitionModule = "musical";
          var func1433 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1433.paramCounts[0])
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
              var call1435 = callmethod(this, "angle", [0]);
              var opresult1437 = callmethod(call1435, "+", [1], var_degrees);
              onSelf = true;
              var call1438 = callmethod(this, "angle:=", [1], opresult1437);
              lineNumber = 106
              onSelf = true;
              var call1439 = callmethod(this, "normaliseAngle", [0]);
              return call1439
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1433.paramCounts = [
            1,
          ];
          func1433.variableArities = [
            false,
          ];
          obj1339.methods["turn"] = func1433;
          func1433.definitionLine = 104;
          func1433.definitionModule = "musical";
          var func1440 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1440.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1441 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1442 = callmethod(this, "x", [0]);
              var call1443 = callmethod(var_point,"x()y", [1, 1], call1442, new GraceNum(0));
              onSelf = true;
              var call1444 = callmethod(this, "isPointOver", [1], call1443);
              if (Grace_isTrue(call1444)) {
                lineNumber = 111
                lineNumber = 110
                var bool1445 = new GraceBoolean(true)
                return bool1445
              }
              lineNumber = 115
              var if1446 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1447 = callmethod(this, "x", [0]);
              var call1448 = callmethod(var_point,"x()y", [1, 1], call1447, var_canvasHeight);
              onSelf = true;
              var call1449 = callmethod(this, "isPointOver", [1], call1448);
              if (Grace_isTrue(call1449)) {
                lineNumber = 114
                lineNumber = 113
                var bool1450 = new GraceBoolean(true)
                return bool1450
              }
              lineNumber = 118
              var if1451 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1452 = callmethod(this, "y", [0]);
              var call1453 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1452);
              onSelf = true;
              var call1454 = callmethod(this, "isPointOver", [1], call1453);
              if (Grace_isTrue(call1454)) {
                lineNumber = 117
                lineNumber = 116
                var bool1455 = new GraceBoolean(true)
                return bool1455
              }
              lineNumber = 121
              var if1456 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1457 = callmethod(this, "y", [0]);
              var call1458 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1457);
              onSelf = true;
              var call1459 = callmethod(this, "isPointOver", [1], call1458);
              if (Grace_isTrue(call1459)) {
                lineNumber = 120
                lineNumber = 119
                var bool1460 = new GraceBoolean(true)
                return bool1460
              }
              lineNumber = 122
              lineNumber = 121
              var bool1461 = new GraceBoolean(false)
              return bool1461
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1440.paramCounts = [
            0,
          ];
          func1440.variableArities = [
            false,
          ];
          obj1339.methods["touchingEdge"] = func1440;
          func1440.definitionLine = 108;
          func1440.definitionModule = "musical";
          var func1462 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1462.paramCounts[0])
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
              var if1463 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1464 = callmethod(this, "x", [0]);
              var call1465 = callmethod(var_point,"x()y", [1, 1], call1464, new GraceNum(0));
              onSelf = true;
              var call1466 = callmethod(this, "isPointOver", [1], call1465);
              if (Grace_isTrue(call1466)) {
                lineNumber = 127
                onSelf = true;
                var call1467 = callmethod(this, "bounceFrom", [1], var_top);
                if1463 = call1467;
              }
              lineNumber = 132
              var if1468 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1469 = callmethod(this, "x", [0]);
              var call1470 = callmethod(var_point,"x()y", [1, 1], call1469, var_canvasHeight);
              onSelf = true;
              var call1471 = callmethod(this, "isPointOver", [1], call1470);
              if (Grace_isTrue(call1471)) {
                lineNumber = 130
                onSelf = true;
                var call1472 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1468 = call1472;
              }
              lineNumber = 135
              var if1473 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1474 = callmethod(this, "y", [0]);
              var call1475 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1474);
              onSelf = true;
              var call1476 = callmethod(this, "isPointOver", [1], call1475);
              if (Grace_isTrue(call1476)) {
                lineNumber = 133
                onSelf = true;
                var call1477 = callmethod(this, "bounceFrom", [1], var_left);
                if1473 = call1477;
              }
              lineNumber = 138
              var if1478 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1479 = callmethod(this, "y", [0]);
              var call1480 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1479);
              onSelf = true;
              var call1481 = callmethod(this, "isPointOver", [1], call1480);
              if (Grace_isTrue(call1481)) {
                lineNumber = 136
                onSelf = true;
                var call1482 = callmethod(this, "bounceFrom", [1], var_right);
                if1478 = call1482;
              }
              lineNumber = 138
              var block1483 = Grace_allocObject();
              block1483.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1483.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1483.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1483.methods["match"] = GraceBlock_match;
              block1483.methods["prefix?"] = GraceBlock_lift;
              block1483.receiver = this;
              block1483.className = 'block<musical:138>';
              block1483.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1484 = callmethod(this, "touchingEdge", [0]);
                return call1484;
              };
              lineNumber = 141
              var block1485 = Grace_allocObject();
              block1485.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1485.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1485.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1485.methods["match"] = GraceBlock_match;
              block1485.methods["prefix?"] = GraceBlock_lift;
              block1485.receiver = this;
              block1485.className = 'block<musical:141>';
              block1485.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1486 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1486;
              };
              var call1487 = callmethod(Grace_prelude,"while()do", [1, 1], block1483, block1485);
              return call1487
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1462.paramCounts = [
            0,
          ];
          func1462.variableArities = [
            false,
          ];
          obj1339.methods["bounce"] = func1462;
          func1462.definitionLine = 123;
          func1462.definitionModule = "musical";
          var func1488 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1488.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1489 = var_done;
              lineNumber = 143
              var string1490 = new GraceString("left");
              var opresult1493 = callmethod(var_dir, "==", [1], string1490);
              if (Grace_isTrue(opresult1493)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1494 = callmethod(this, "angle", [0]);
                var diff1497 = callmethod(new GraceNum(360), "-", [1], call1494);
                onSelf = true;
                var call1498 = callmethod(this, "angle:=", [1], diff1497);
                if1489 = call1498;
              }
              lineNumber = 149
              var if1499 = var_done;
              lineNumber = 146
              var string1500 = new GraceString("right");
              var opresult1503 = callmethod(var_dir, "==", [1], string1500);
              if (Grace_isTrue(opresult1503)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1504 = callmethod(this, "angle", [0]);
                var diff1507 = callmethod(new GraceNum(360), "-", [1], call1504);
                onSelf = true;
                var call1508 = callmethod(this, "angle:=", [1], diff1507);
                if1499 = call1508;
              }
              lineNumber = 152
              var if1509 = var_done;
              lineNumber = 149
              var string1510 = new GraceString("top");
              var opresult1513 = callmethod(var_dir, "==", [1], string1510);
              if (Grace_isTrue(opresult1513)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1514 = callmethod(this, "angle", [0]);
                var diff1517 = callmethod(new GraceNum(180), "-", [1], call1514);
                onSelf = true;
                var call1518 = callmethod(this, "angle:=", [1], diff1517);
                if1509 = call1518;
              }
              lineNumber = 155
              var if1519 = var_done;
              lineNumber = 152
              var string1520 = new GraceString("bottom");
              var opresult1523 = callmethod(var_dir, "==", [1], string1520);
              if (Grace_isTrue(opresult1523)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1524 = callmethod(this, "angle", [0]);
                var diff1527 = callmethod(new GraceNum(180), "-", [1], call1524);
                onSelf = true;
                var call1528 = callmethod(this, "angle:=", [1], diff1527);
                if1519 = call1528;
              }
              lineNumber = 155
              onSelf = true;
              var call1529 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1530 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1530
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1488.paramCounts = [
            1,
          ];
          func1488.variableArities = [
            false,
          ];
          obj1339.methods["bounceFrom"] = func1488;
          func1488.definitionLine = 142;
          func1488.definitionModule = "musical";
          var func1531 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1531.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1532 = var_done;
              lineNumber = 159
              var call1533 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1535 = callmethod(this, "x", [0]);
              var opresult1537 = callmethod(call1535, ">", [1], call1533);
              if (Grace_isTrue(opresult1537)) {
                lineNumber = 160
                onSelf = true;
                var call1538 = callmethod(this, "bounceFrom", [1], var_left);
                if1532 = call1538;
              }
              lineNumber = 165
              var if1539 = var_done;
              lineNumber = 162
              var call1540 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1542 = callmethod(this, "x", [0]);
              var opresult1544 = callmethod(call1542, "<", [1], call1540);
              if (Grace_isTrue(opresult1544)) {
                lineNumber = 163
                onSelf = true;
                var call1545 = callmethod(this, "bounceFrom", [1], var_right);
                if1539 = call1545;
              }
              lineNumber = 165
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
              block1546.className = 'block<musical:165>';
              block1546.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1547 = callmethod(this, "touching", [1], var_other);
                return call1547;
              };
              lineNumber = 168
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
              block1548.className = 'block<musical:168>';
              block1548.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
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
          func1531.paramCounts = [
            1,
          ];
          func1531.variableArities = [
            false,
          ];
          obj1339.methods["bounceOff"] = func1531;
          func1531.definitionLine = 158;
          func1531.definitionModule = "musical";
          var func1551 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1551.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1552 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1553 = callmethod(this, "y", [0]);
              var call1554 = callmethod(var_point,"x()y", [1, 1], call1552, call1553);
              var call1555 = callmethod(var_other,"isPointOver", [1], call1554);
              return call1555
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
          obj1339.methods["touching"] = func1551;
          func1551.definitionLine = 169;
          func1551.definitionModule = "musical";
          var func1556 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1556.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1557 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1558 = callmethod(this, "y", [0]);
              var call1560 = callmethod(var_other,"y", [0]);
              var opresult1562 = callmethod(call1560, "!=", [1], call1558);
              onSelf = true;
              var call1564 = callmethod(this, "x", [0]);
              var call1566 = callmethod(var_other,"x", [0]);
              var opresult1568 = callmethod(call1566, "!=", [1], call1564);
              var opresult1570 = callmethod(opresult1568, "||", [1], opresult1562);
              if (Grace_isTrue(opresult1570)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1573 = callmethod(this, "x", [0]);
                var call1575 = callmethod(var_other,"x", [0]);
                var diff1577 = callmethod(call1575, "-", [1], call1573);
                onSelf = true;
                var call1578 = callmethod(this, "y", [0]);
                var call1580 = callmethod(var_other,"y", [0]);
                var diff1582 = callmethod(call1580, "-", [1], call1578);
                var call1583 = callmethod(var_trig,"atan2", [2], diff1577, diff1582);
                var prod1585 = callmethod(call1583, "*", [1], new GraceNum(180));
                var quotient1587 = callmethod(prod1585, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1588 = callmethod(this, "angle:=", [1], quotient1587);
                if1557 = call1588;
              }
              lineNumber = 176
              onSelf = true;
              var call1589 = callmethod(this, "normaliseAngle", [0]);
              return call1589
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1556.paramCounts = [
            1,
          ];
          func1556.variableArities = [
            false,
          ];
          obj1339.methods["face"] = func1556;
          func1556.definitionLine = 172;
          func1556.definitionModule = "musical";
          var func1590 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1590.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1591 = new GraceString("2d");
              var call1592 = callmethod(var_backingCanvas,"getContext", [1], string1591);
              onSelf = true;
              var call1593 = callmethod(this, "draw", [1], call1592);
              return call1593
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1590.paramCounts = [
            0,
          ];
          func1590.variableArities = [
            false,
          ];
          obj1339.methods["stamp"] = func1590;
          func1590.definitionLine = 178;
          func1590.definitionModule = "musical";
          sourceObject = obj1339;
          lineNumber = 49
          var call1594 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1595 = callmethod(call1594, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1596 = callmethod(call1595, "initialise", [0]);
          sourceObject = obj1339;
          lineNumber = 50
          var call1597 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1339;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1339;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1339;
          lineNumber = 53
          var call1598 = callmethod(var_collections,"list", [0]);
          var call1599 = callmethod(call1598,"new", [0]);
          obj1339.data["alwaysBlocks"] = call1599;
          var reader_musical_alwaysBlocks_1600 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1600.def = true;
          reader_musical_alwaysBlocks_1600.confidential = true;
          obj1339.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1600;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1599)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1339;
          lineNumber = 55
          lineNumber = 54
          var quotient1603 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1339.data["x"] = quotient1603;
          var reader_musical_x_1604 = function() {
            return this.data["x"];
          }
          obj1339.methods["x"] = reader_musical_x_1604;
          obj1339.data["x"] = quotient1603;
          var writer_musical_x_1604 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1339.methods["x:="] = writer_musical_x_1604;
          writer_musical_x_1604.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1603)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1339.mutable = true;
          sourceObject = obj1339;
          lineNumber = 56
          lineNumber = 55
          var quotient1607 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1339.data["y"] = quotient1607;
          var reader_musical_y_1608 = function() {
            return this.data["y"];
          }
          obj1339.methods["y"] = reader_musical_y_1608;
          obj1339.data["y"] = quotient1607;
          var writer_musical_y_1608 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1339.methods["y:="] = writer_musical_y_1608;
          writer_musical_y_1608.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1607)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1339.mutable = true;
          sourceObject = obj1339;
          lineNumber = 56
          onSelf = true;
          var call1609 = callmethod(this, "x", [0]);
          obj1339.data["destX"] = call1609;
          var reader_musical_destX_1610 = function() {
            return this.data["destX"];
          }
          obj1339.methods["destX"] = reader_musical_destX_1610;
          obj1339.data["destX"] = call1609;
          var writer_musical_destX_1610 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1339.methods["destX:="] = writer_musical_destX_1610;
          reader_musical_destX_1610.confidential = true;
          writer_musical_destX_1610.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1609)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1339.mutable = true;
          sourceObject = obj1339;
          lineNumber = 57
          onSelf = true;
          var call1611 = callmethod(this, "y", [0]);
          obj1339.data["destY"] = call1611;
          var reader_musical_destY_1612 = function() {
            return this.data["destY"];
          }
          obj1339.methods["destY"] = reader_musical_destY_1612;
          obj1339.data["destY"] = call1611;
          var writer_musical_destY_1612 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1339.methods["destY:="] = writer_musical_destY_1612;
          reader_musical_destY_1612.confidential = true;
          writer_musical_destY_1612.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1611)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1339.mutable = true;
          sourceObject = obj1339;
          lineNumber = 58
          obj1339.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1613 = function() {
            return this.data["angle"];
          }
          obj1339.methods["angle"] = reader_musical_angle_1613;
          obj1339.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1613 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1339.methods["angle:="] = writer_musical_angle_1613;
          reader_musical_angle_1613.confidential = true;
          writer_musical_angle_1613.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1339.mutable = true;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          sourceObject = obj1339;
          superDepth = origSuperDepth;
        }
        obj_init_1339.apply(obj1339, []);
        return obj1339
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
    obj1336.methods["new"] = func1338;
    func1338.definitionLine = 48;
    func1338.definitionModule = "musical";
    var func1614 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1615 = Grace_allocObject();
        obj1615.definitionModule = "musical";
        obj1615.definitionLine = 48;
        var inho1615 = inheritingObject;
        while (inho1615.superobj) inho1615 = inho1615.superobj;
        inho1615.superobj = obj1615;
        obj1615.data = inheritingObject.data;
        obj1615.outer = this;
        var reader_musical_outer_1616 = function() {
          return this.outer;
        }
        obj1615.methods["outer"] = reader_musical_outer_1616;
        function obj_init_1615() {
          var origSuperDepth = superDepth;
          superDepth = obj1615;
          obj1615.annotations = [];
          var func1617 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1618 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1619 = Grace_allocObject();
              block1619.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1619.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1619.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1619.methods["match"] = GraceBlock_match;
              block1619.methods["prefix?"] = GraceBlock_lift;
              block1619.receiver = this;
              block1619.className = 'block<musical:63>';
              block1619.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1620 = callmethod(var_b,"apply", [0]);
                return call1620;
              };
              var call1621 = callmethod(Grace_prelude,"for()do", [1, 1], call1618, block1619);
              lineNumber = 63
              onSelf = true;
              var call1622 = callmethod(this, "tick", [0]);
              return call1622
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1617.paramCounts = [
            0,
          ];
          func1617.variableArities = [
            false,
          ];
          obj1615.methods["step"] = func1617;
          func1617.definitionLine = 59;
          func1617.definitionModule = "musical";
          var func1623 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1623.paramCounts[0])
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
          func1623.paramCounts = [
            0,
          ];
          func1623.variableArities = [
            false,
          ];
          obj1615.methods["tick"] = func1623;
          func1623.definitionLine = 66;
          func1623.definitionModule = "musical";
          var func1624 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1624.paramCounts[0])
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
          func1624.paramCounts = [
            1,
          ];
          func1624.variableArities = [
            false,
          ];
          obj1615.methods["draw"] = func1624;
          func1624.definitionLine = 67;
          func1624.definitionModule = "musical";
          var func1625 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1626 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1627 = callmethod(this, "destX:=", [1], call1626);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1628 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1629 = callmethod(this, "destY:=", [1], call1628);
              return call1629
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1625.paramCounts = [
            1,
          ];
          func1625.variableArities = [
            false,
          ];
          obj1615.methods["moveTo"] = func1625;
          func1625.definitionLine = 68;
          func1625.definitionModule = "musical";
          var func1630 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1630.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1631 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1632 = callmethod(this, "x:=", [1], call1631);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1633 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1634 = callmethod(this, "y:=", [1], call1633);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1635 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1636 = callmethod(this, "destX:=", [1], call1635);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1637 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1638 = callmethod(this, "destY:=", [1], call1637);
              return call1638
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1630.paramCounts = [
            1,
          ];
          func1630.variableArities = [
            false,
          ];
          obj1615.methods["jumpTo"] = func1630;
          func1630.definitionLine = 72;
          func1630.definitionModule = "musical";
          var func1639 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1639.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1640 = new GraceBoolean(false)
              return bool1640
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1639.paramCounts = [
            1,
          ];
          func1639.variableArities = [
            false,
          ];
          obj1615.methods["isPointOver"] = func1639;
          func1639.definitionLine = 78;
          func1639.definitionModule = "musical";
          var func1641 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1641.paramCounts[0])
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
          func1641.paramCounts = [
            0,
          ];
          func1641.variableArities = [
            false,
          ];
          obj1615.methods["mousedown"] = func1641;
          func1641.definitionLine = 79;
          func1641.definitionModule = "musical";
          var func1642 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1643 = callmethod(this, "alwaysBlocks", [0]);
              var call1644 = callmethod(call1643,"push", [1], var_b);
              return call1644
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
          obj1615.methods["always"] = func1642;
          func1642.definitionLine = 80;
          func1642.definitionModule = "musical";
          var func1645 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1645.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1646 = Grace_allocObject();
              block1646.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1646.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1646.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1646.methods["match"] = GraceBlock_match;
              block1646.methods["prefix?"] = GraceBlock_lift;
              block1646.receiver = this;
              block1646.className = 'block<musical:89>';
              block1646.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1647 = var_done;
                lineNumber = 85
                var call1648 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1648)) {
                  lineNumber = 86
                  var call1649 = callmethod(var_b,"apply", [0]);
                  if1647 = call1649;
                }
                return if1647;
              };
              onSelf = true;
              var call1650 = callmethod(this, "always", [1], block1646);
              return call1650
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
            1,
          ];
          func1645.variableArities = [
            false,
            false,
          ];
          obj1615.methods["whenever()do"] = func1645;
          func1645.definitionLine = 83;
          func1645.definitionModule = "musical";
          var func1651 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1651.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1655 = callmethod(this, "angle", [0]);
              var quotient1657 = callmethod(call1655, "/", [1], new GraceNum(180));
              var prod1659 = callmethod(quotient1657, "*", [1], var_PI);
              var call1660 = callmethod(var_trig,"cos", [1], prod1659);
              var prod1662 = callmethod(call1660, "*", [1], var_dist);
              var var_y__39__ = prod1662;
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
              var call1666 = callmethod(this, "angle", [0]);
              var quotient1668 = callmethod(call1666, "/", [1], new GraceNum(180));
              var prod1670 = callmethod(quotient1668, "*", [1], var_PI);
              var call1671 = callmethod(var_trig,"sin", [1], prod1670);
              var prod1673 = callmethod(call1671, "*", [1], var_dist);
              var var_x__39__ = prod1673;
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
              var call1675 = callmethod(this, "x", [0]);
              var opresult1677 = callmethod(call1675, "+", [1], var_x__39__);
              onSelf = true;
              var call1678 = callmethod(this, "x:=", [1], opresult1677);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1680 = callmethod(this, "y", [0]);
              var opresult1682 = callmethod(call1680, "+", [1], var_y__39__);
              onSelf = true;
              var call1683 = callmethod(this, "y:=", [1], opresult1682);
              return call1683
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1651.paramCounts = [
            1,
          ];
          func1651.variableArities = [
            false,
          ];
          obj1615.methods["forward"] = func1651;
          func1651.definitionLine = 90;
          func1651.definitionModule = "musical";
          var func1684 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1684.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1685 = Grace_allocObject();
              block1685.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1685.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1685.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1685.methods["match"] = GraceBlock_match;
              block1685.methods["prefix?"] = GraceBlock_lift;
              block1685.receiver = this;
              block1685.className = 'block<musical:97>';
              block1685.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1687 = callmethod(this, "angle", [0]);
                var opresult1689 = callmethod(call1687, "<", [1], new GraceNum(0));
                return opresult1689;
              };
              lineNumber = 100
              var block1690 = Grace_allocObject();
              block1690.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1690.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1690.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1690.methods["match"] = GraceBlock_match;
              block1690.methods["prefix?"] = GraceBlock_lift;
              block1690.receiver = this;
              block1690.className = 'block<musical:100>';
              block1690.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1692 = callmethod(this, "angle", [0]);
                var opresult1694 = callmethod(call1692, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1695 = callmethod(this, "angle:=", [1], opresult1694);
                return call1695;
              };
              var call1696 = callmethod(Grace_prelude,"while()do", [1, 1], block1685, block1690);
              lineNumber = 100
              var block1697 = Grace_allocObject();
              block1697.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1697.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1697.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1697.methods["match"] = GraceBlock_match;
              block1697.methods["prefix?"] = GraceBlock_lift;
              block1697.receiver = this;
              block1697.className = 'block<musical:100>';
              block1697.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1699 = callmethod(this, "angle", [0]);
                var opresult1701 = callmethod(call1699, ">", [1], new GraceNum(360));
                return opresult1701;
              };
              lineNumber = 103
              var block1702 = Grace_allocObject();
              block1702.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1702.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1702.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1702.methods["match"] = GraceBlock_match;
              block1702.methods["prefix?"] = GraceBlock_lift;
              block1702.receiver = this;
              block1702.className = 'block<musical:103>';
              block1702.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1704 = callmethod(this, "angle", [0]);
                var diff1706 = callmethod(call1704, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1707 = callmethod(this, "angle:=", [1], diff1706);
                return call1707;
              };
              var call1708 = callmethod(Grace_prelude,"while()do", [1, 1], block1697, block1702);
              return call1708
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
          obj1615.methods["normaliseAngle"] = func1684;
          func1684.definitionLine = 96;
          func1684.definitionModule = "musical";
          var func1709 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1709.paramCounts[0])
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
              var call1711 = callmethod(this, "angle", [0]);
              var opresult1713 = callmethod(call1711, "+", [1], var_degrees);
              onSelf = true;
              var call1714 = callmethod(this, "angle:=", [1], opresult1713);
              lineNumber = 106
              onSelf = true;
              var call1715 = callmethod(this, "normaliseAngle", [0]);
              return call1715
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1709.paramCounts = [
            1,
          ];
          func1709.variableArities = [
            false,
          ];
          obj1615.methods["turn"] = func1709;
          func1709.definitionLine = 104;
          func1709.definitionModule = "musical";
          var func1716 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1716.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1717 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1718 = callmethod(this, "x", [0]);
              var call1719 = callmethod(var_point,"x()y", [1, 1], call1718, new GraceNum(0));
              onSelf = true;
              var call1720 = callmethod(this, "isPointOver", [1], call1719);
              if (Grace_isTrue(call1720)) {
                lineNumber = 111
                lineNumber = 110
                var bool1721 = new GraceBoolean(true)
                return bool1721
              }
              lineNumber = 115
              var if1722 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1723 = callmethod(this, "x", [0]);
              var call1724 = callmethod(var_point,"x()y", [1, 1], call1723, var_canvasHeight);
              onSelf = true;
              var call1725 = callmethod(this, "isPointOver", [1], call1724);
              if (Grace_isTrue(call1725)) {
                lineNumber = 114
                lineNumber = 113
                var bool1726 = new GraceBoolean(true)
                return bool1726
              }
              lineNumber = 118
              var if1727 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1728 = callmethod(this, "y", [0]);
              var call1729 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1728);
              onSelf = true;
              var call1730 = callmethod(this, "isPointOver", [1], call1729);
              if (Grace_isTrue(call1730)) {
                lineNumber = 117
                lineNumber = 116
                var bool1731 = new GraceBoolean(true)
                return bool1731
              }
              lineNumber = 121
              var if1732 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1733 = callmethod(this, "y", [0]);
              var call1734 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1733);
              onSelf = true;
              var call1735 = callmethod(this, "isPointOver", [1], call1734);
              if (Grace_isTrue(call1735)) {
                lineNumber = 120
                lineNumber = 119
                var bool1736 = new GraceBoolean(true)
                return bool1736
              }
              lineNumber = 122
              lineNumber = 121
              var bool1737 = new GraceBoolean(false)
              return bool1737
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1716.paramCounts = [
            0,
          ];
          func1716.variableArities = [
            false,
          ];
          obj1615.methods["touchingEdge"] = func1716;
          func1716.definitionLine = 108;
          func1716.definitionModule = "musical";
          var func1738 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1738.paramCounts[0])
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
              var if1739 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1740 = callmethod(this, "x", [0]);
              var call1741 = callmethod(var_point,"x()y", [1, 1], call1740, new GraceNum(0));
              onSelf = true;
              var call1742 = callmethod(this, "isPointOver", [1], call1741);
              if (Grace_isTrue(call1742)) {
                lineNumber = 127
                onSelf = true;
                var call1743 = callmethod(this, "bounceFrom", [1], var_top);
                if1739 = call1743;
              }
              lineNumber = 132
              var if1744 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1745 = callmethod(this, "x", [0]);
              var call1746 = callmethod(var_point,"x()y", [1, 1], call1745, var_canvasHeight);
              onSelf = true;
              var call1747 = callmethod(this, "isPointOver", [1], call1746);
              if (Grace_isTrue(call1747)) {
                lineNumber = 130
                onSelf = true;
                var call1748 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1744 = call1748;
              }
              lineNumber = 135
              var if1749 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1750 = callmethod(this, "y", [0]);
              var call1751 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1750);
              onSelf = true;
              var call1752 = callmethod(this, "isPointOver", [1], call1751);
              if (Grace_isTrue(call1752)) {
                lineNumber = 133
                onSelf = true;
                var call1753 = callmethod(this, "bounceFrom", [1], var_left);
                if1749 = call1753;
              }
              lineNumber = 138
              var if1754 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1755 = callmethod(this, "y", [0]);
              var call1756 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1755);
              onSelf = true;
              var call1757 = callmethod(this, "isPointOver", [1], call1756);
              if (Grace_isTrue(call1757)) {
                lineNumber = 136
                onSelf = true;
                var call1758 = callmethod(this, "bounceFrom", [1], var_right);
                if1754 = call1758;
              }
              lineNumber = 138
              var block1759 = Grace_allocObject();
              block1759.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1759.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1759.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1759.methods["match"] = GraceBlock_match;
              block1759.methods["prefix?"] = GraceBlock_lift;
              block1759.receiver = this;
              block1759.className = 'block<musical:138>';
              block1759.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1760 = callmethod(this, "touchingEdge", [0]);
                return call1760;
              };
              lineNumber = 141
              var block1761 = Grace_allocObject();
              block1761.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1761.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1761.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1761.methods["match"] = GraceBlock_match;
              block1761.methods["prefix?"] = GraceBlock_lift;
              block1761.receiver = this;
              block1761.className = 'block<musical:141>';
              block1761.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1762 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1762;
              };
              var call1763 = callmethod(Grace_prelude,"while()do", [1, 1], block1759, block1761);
              return call1763
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1738.paramCounts = [
            0,
          ];
          func1738.variableArities = [
            false,
          ];
          obj1615.methods["bounce"] = func1738;
          func1738.definitionLine = 123;
          func1738.definitionModule = "musical";
          var func1764 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1764.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1765 = var_done;
              lineNumber = 143
              var string1766 = new GraceString("left");
              var opresult1769 = callmethod(var_dir, "==", [1], string1766);
              if (Grace_isTrue(opresult1769)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1770 = callmethod(this, "angle", [0]);
                var diff1773 = callmethod(new GraceNum(360), "-", [1], call1770);
                onSelf = true;
                var call1774 = callmethod(this, "angle:=", [1], diff1773);
                if1765 = call1774;
              }
              lineNumber = 149
              var if1775 = var_done;
              lineNumber = 146
              var string1776 = new GraceString("right");
              var opresult1779 = callmethod(var_dir, "==", [1], string1776);
              if (Grace_isTrue(opresult1779)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1780 = callmethod(this, "angle", [0]);
                var diff1783 = callmethod(new GraceNum(360), "-", [1], call1780);
                onSelf = true;
                var call1784 = callmethod(this, "angle:=", [1], diff1783);
                if1775 = call1784;
              }
              lineNumber = 152
              var if1785 = var_done;
              lineNumber = 149
              var string1786 = new GraceString("top");
              var opresult1789 = callmethod(var_dir, "==", [1], string1786);
              if (Grace_isTrue(opresult1789)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1790 = callmethod(this, "angle", [0]);
                var diff1793 = callmethod(new GraceNum(180), "-", [1], call1790);
                onSelf = true;
                var call1794 = callmethod(this, "angle:=", [1], diff1793);
                if1785 = call1794;
              }
              lineNumber = 155
              var if1795 = var_done;
              lineNumber = 152
              var string1796 = new GraceString("bottom");
              var opresult1799 = callmethod(var_dir, "==", [1], string1796);
              if (Grace_isTrue(opresult1799)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1800 = callmethod(this, "angle", [0]);
                var diff1803 = callmethod(new GraceNum(180), "-", [1], call1800);
                onSelf = true;
                var call1804 = callmethod(this, "angle:=", [1], diff1803);
                if1795 = call1804;
              }
              lineNumber = 155
              onSelf = true;
              var call1805 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1806 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1806
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1764.paramCounts = [
            1,
          ];
          func1764.variableArities = [
            false,
          ];
          obj1615.methods["bounceFrom"] = func1764;
          func1764.definitionLine = 142;
          func1764.definitionModule = "musical";
          var func1807 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1807.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1808 = var_done;
              lineNumber = 159
              var call1809 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1811 = callmethod(this, "x", [0]);
              var opresult1813 = callmethod(call1811, ">", [1], call1809);
              if (Grace_isTrue(opresult1813)) {
                lineNumber = 160
                onSelf = true;
                var call1814 = callmethod(this, "bounceFrom", [1], var_left);
                if1808 = call1814;
              }
              lineNumber = 165
              var if1815 = var_done;
              lineNumber = 162
              var call1816 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1818 = callmethod(this, "x", [0]);
              var opresult1820 = callmethod(call1818, "<", [1], call1816);
              if (Grace_isTrue(opresult1820)) {
                lineNumber = 163
                onSelf = true;
                var call1821 = callmethod(this, "bounceFrom", [1], var_right);
                if1815 = call1821;
              }
              lineNumber = 165
              var block1822 = Grace_allocObject();
              block1822.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1822.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1822.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1822.methods["match"] = GraceBlock_match;
              block1822.methods["prefix?"] = GraceBlock_lift;
              block1822.receiver = this;
              block1822.className = 'block<musical:165>';
              block1822.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1823 = callmethod(this, "touching", [1], var_other);
                return call1823;
              };
              lineNumber = 168
              var block1824 = Grace_allocObject();
              block1824.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1824.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1824.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1824.methods["match"] = GraceBlock_match;
              block1824.methods["prefix?"] = GraceBlock_lift;
              block1824.receiver = this;
              block1824.className = 'block<musical:168>';
              block1824.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1825 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1825;
              };
              var call1826 = callmethod(Grace_prelude,"while()do", [1, 1], block1822, block1824);
              return call1826
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1807.paramCounts = [
            1,
          ];
          func1807.variableArities = [
            false,
          ];
          obj1615.methods["bounceOff"] = func1807;
          func1807.definitionLine = 158;
          func1807.definitionModule = "musical";
          var func1827 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1827.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1828 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1829 = callmethod(this, "y", [0]);
              var call1830 = callmethod(var_point,"x()y", [1, 1], call1828, call1829);
              var call1831 = callmethod(var_other,"isPointOver", [1], call1830);
              return call1831
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1827.paramCounts = [
            1,
          ];
          func1827.variableArities = [
            false,
          ];
          obj1615.methods["touching"] = func1827;
          func1827.definitionLine = 169;
          func1827.definitionModule = "musical";
          var func1832 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1832.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1833 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1834 = callmethod(this, "y", [0]);
              var call1836 = callmethod(var_other,"y", [0]);
              var opresult1838 = callmethod(call1836, "!=", [1], call1834);
              onSelf = true;
              var call1840 = callmethod(this, "x", [0]);
              var call1842 = callmethod(var_other,"x", [0]);
              var opresult1844 = callmethod(call1842, "!=", [1], call1840);
              var opresult1846 = callmethod(opresult1844, "||", [1], opresult1838);
              if (Grace_isTrue(opresult1846)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1849 = callmethod(this, "x", [0]);
                var call1851 = callmethod(var_other,"x", [0]);
                var diff1853 = callmethod(call1851, "-", [1], call1849);
                onSelf = true;
                var call1854 = callmethod(this, "y", [0]);
                var call1856 = callmethod(var_other,"y", [0]);
                var diff1858 = callmethod(call1856, "-", [1], call1854);
                var call1859 = callmethod(var_trig,"atan2", [2], diff1853, diff1858);
                var prod1861 = callmethod(call1859, "*", [1], new GraceNum(180));
                var quotient1863 = callmethod(prod1861, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1864 = callmethod(this, "angle:=", [1], quotient1863);
                if1833 = call1864;
              }
              lineNumber = 176
              onSelf = true;
              var call1865 = callmethod(this, "normaliseAngle", [0]);
              return call1865
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1832.paramCounts = [
            1,
          ];
          func1832.variableArities = [
            false,
          ];
          obj1615.methods["face"] = func1832;
          func1832.definitionLine = 172;
          func1832.definitionModule = "musical";
          var func1866 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1866.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1867 = new GraceString("2d");
              var call1868 = callmethod(var_backingCanvas,"getContext", [1], string1867);
              onSelf = true;
              var call1869 = callmethod(this, "draw", [1], call1868);
              return call1869
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1866.paramCounts = [
            0,
          ];
          func1866.variableArities = [
            false,
          ];
          obj1615.methods["stamp"] = func1866;
          func1866.definitionLine = 178;
          func1866.definitionModule = "musical";
          sourceObject = obj1615;
          lineNumber = 49
          var call1870 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1871 = callmethod(call1870, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1872 = callmethod(call1871, "initialise", [0]);
          sourceObject = obj1615;
          lineNumber = 50
          var call1873 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1615;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1615;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1615;
          lineNumber = 53
          var call1874 = callmethod(var_collections,"list", [0]);
          var call1875 = callmethod(call1874,"new", [0]);
          obj1615.data["alwaysBlocks"] = call1875;
          var reader_musical_alwaysBlocks_1876 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1876.def = true;
          reader_musical_alwaysBlocks_1876.confidential = true;
          obj1615.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1876;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1875)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1615;
          lineNumber = 55
          lineNumber = 54
          var quotient1879 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1615.data["x"] = quotient1879;
          var reader_musical_x_1880 = function() {
            return this.data["x"];
          }
          obj1615.methods["x"] = reader_musical_x_1880;
          obj1615.data["x"] = quotient1879;
          var writer_musical_x_1880 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1615.methods["x:="] = writer_musical_x_1880;
          writer_musical_x_1880.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1879)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1615.mutable = true;
          sourceObject = obj1615;
          lineNumber = 56
          lineNumber = 55
          var quotient1883 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1615.data["y"] = quotient1883;
          var reader_musical_y_1884 = function() {
            return this.data["y"];
          }
          obj1615.methods["y"] = reader_musical_y_1884;
          obj1615.data["y"] = quotient1883;
          var writer_musical_y_1884 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1615.methods["y:="] = writer_musical_y_1884;
          writer_musical_y_1884.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1883)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1615.mutable = true;
          sourceObject = obj1615;
          lineNumber = 56
          onSelf = true;
          var call1885 = callmethod(this, "x", [0]);
          obj1615.data["destX"] = call1885;
          var reader_musical_destX_1886 = function() {
            return this.data["destX"];
          }
          obj1615.methods["destX"] = reader_musical_destX_1886;
          obj1615.data["destX"] = call1885;
          var writer_musical_destX_1886 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1615.methods["destX:="] = writer_musical_destX_1886;
          reader_musical_destX_1886.confidential = true;
          writer_musical_destX_1886.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1885)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1615.mutable = true;
          sourceObject = obj1615;
          lineNumber = 57
          onSelf = true;
          var call1887 = callmethod(this, "y", [0]);
          obj1615.data["destY"] = call1887;
          var reader_musical_destY_1888 = function() {
            return this.data["destY"];
          }
          obj1615.methods["destY"] = reader_musical_destY_1888;
          obj1615.data["destY"] = call1887;
          var writer_musical_destY_1888 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1615.methods["destY:="] = writer_musical_destY_1888;
          reader_musical_destY_1888.confidential = true;
          writer_musical_destY_1888.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1887)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1615.mutable = true;
          sourceObject = obj1615;
          lineNumber = 58
          obj1615.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1889 = function() {
            return this.data["angle"];
          }
          obj1615.methods["angle"] = reader_musical_angle_1889;
          obj1615.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1889 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1615.methods["angle:="] = writer_musical_angle_1889;
          reader_musical_angle_1889.confidential = true;
          writer_musical_angle_1889.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1615.mutable = true;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          sourceObject = obj1615;
          superDepth = origSuperDepth;
        }
        obj_init_1615.apply(inheritingObject, []);
        return obj1615
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1336.methods["new()object"] = func1614;
    var func1890 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1891 = new GraceString("class drawable");
        return string1891
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1890.paramCounts = [
    ];
    func1890.variableArities = [
    ];
    obj1336.methods["asDebugString"] = func1890;
    func1890.definitionLine = 48;
    func1890.definitionModule = "musical";
    sourceObject = obj1336;
    sourceObject = obj1336;
    superDepth = origSuperDepth;
  }
  obj_init_1336.apply(obj1336, []);
  var var_drawable = obj1336;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1892 = Grace_allocObject();
  obj1892.definitionModule = "musical";
  obj1892.definitionLine = 316;
  obj1892.outer = this;
  var reader_musical_outer_1893 = function() {
    return this.outer;
  }
  obj1892.methods["outer"] = reader_musical_outer_1893;
  function obj_init_1892() {
    var origSuperDepth = superDepth;
    superDepth = obj1892;
    obj1892.annotations = [];
    var func1894 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1894.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1895 = callmethod(this, "position", [0]);
        var call1896 = callmethod(call1895,"x", [0]);
        return call1896
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1894.paramCounts = [
      0,
    ];
    func1894.variableArities = [
      false,
    ];
    obj1892.methods["x"] = func1894;
    func1894.definitionLine = 318;
    func1894.definitionModule = "musical";
    var func1897 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1897.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1898 = callmethod(this, "position", [0]);
        var call1899 = callmethod(call1898,"y", [0]);
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
    obj1892.methods["y"] = func1897;
    func1897.definitionLine = 321;
    func1897.definitionModule = "musical";
    var func1900 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1900.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1901 = callmethod(this, "position", [0]);
        return call1901
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
    obj1892.methods["location"] = func1900;
    func1900.definitionLine = 324;
    func1900.definitionModule = "musical";
    sourceObject = obj1892;
    lineNumber = 317
    var call1902 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1892.data["position"] = call1902;
    var reader_musical_position_1903 = function() {
      return this.data["position"];
    }
    obj1892.methods["position"] = reader_musical_position_1903;
    obj1892.data["position"] = call1902;
    var writer_musical_position_1903 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1892.methods["position:="] = writer_musical_position_1903;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1902)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1892.mutable = true;
    sourceObject = obj1892;
    sourceObject = obj1892;
    sourceObject = obj1892;
    superDepth = origSuperDepth;
  }
  obj_init_1892.apply(obj1892, []);
  var var_mouse = obj1892;
  lineNumber = 322
  var func1904 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1904.paramCounts[0])
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
  func1904.paramCounts = [
    0,
  ];
  func1904.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1904;
  func1904.definitionLine = 322;
  func1904.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 409
  lineNumber = 471
  lineNumber = 506
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1905 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1905.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 506
      return var_octave
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1905.paramCounts = [
    0,
  ];
  func1905.variableArities = [
    false,
  ];
  this.methods["octave"] = func1905;
  func1905.definitionLine = 322;
  func1905.definitionModule = "musical";
  lineNumber = 322
  var func1906 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1906.paramCounts[0])
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
  func1906.paramCounts = [
    1,
  ];
  func1906.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1906;
  func1906.definitionLine = 322;
  func1906.definitionModule = "musical";
  lineNumber = 506;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 508
  lineNumber = 509
  lineNumber = 508
  var bool1907 = new GraceBoolean(false)
  var var_applyFlat = bool1907;
  lineNumber = 322
  var func1908 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1908.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 508
      return var_applyFlat
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
  this.methods["applyFlat"] = func1908;
  func1908.definitionLine = 322;
  func1908.definitionModule = "musical";
  lineNumber = 322
  var func1909 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1909.paramCounts[0])
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
  func1909.paramCounts = [
    1,
  ];
  func1909.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1909;
  func1909.definitionLine = 322;
  func1909.definitionModule = "musical";
  lineNumber = 509;
  moduleName = "musical";
  lineNumber = 508
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 511
  lineNumber = 509
  var bool1910 = new GraceBoolean(false)
  var var_applySharp = bool1910;
  lineNumber = 322
  var func1911 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1911.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 509
      return var_applySharp
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
  this.methods["applySharp"] = func1911;
  func1911.definitionLine = 322;
  func1911.definitionModule = "musical";
  lineNumber = 322
  var func1912 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1912.paramCounts[0])
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
  func1912.paramCounts = [
    1,
  ];
  func1912.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1912;
  func1912.definitionLine = 322;
  func1912.definitionModule = "musical";
  lineNumber = 511;
  moduleName = "musical";
  lineNumber = 509
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 511
  lineNumber = 512
  lineNumber = 511
  var bool1913 = new GraceBoolean(false)
  var var_applyChorus = bool1913;
  lineNumber = 322
  var func1914 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1914.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 511
      return var_applyChorus
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
  this.methods["applyChorus"] = func1914;
  func1914.definitionLine = 322;
  func1914.definitionModule = "musical";
  lineNumber = 322
  var func1915 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1915.paramCounts[0])
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
  func1915.paramCounts = [
    1,
  ];
  func1915.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1915;
  func1915.definitionLine = 322;
  func1915.definitionModule = "musical";
  lineNumber = 512;
  moduleName = "musical";
  lineNumber = 511
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 513
  lineNumber = 512
  var bool1916 = new GraceBoolean(false)
  var var_applyReverb = bool1916;
  lineNumber = 322
  var func1917 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1917.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 512
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1917.paramCounts = [
    0,
  ];
  func1917.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1917;
  func1917.definitionLine = 322;
  func1917.definitionModule = "musical";
  lineNumber = 322
  var func1918 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1918.paramCounts[0])
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
  func1918.paramCounts = [
    1,
  ];
  func1918.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1918;
  func1918.definitionLine = 322;
  func1918.definitionModule = "musical";
  lineNumber = 513;
  moduleName = "musical";
  lineNumber = 512
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 514
  lineNumber = 513
  var bool1919 = new GraceBoolean(false)
  var var_applyAutowah = bool1919;
  lineNumber = 322
  var func1920 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1920.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 513
      return var_applyAutowah
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
  this.methods["applyAutowah"] = func1920;
  func1920.definitionLine = 322;
  func1920.definitionModule = "musical";
  lineNumber = 322
  var func1921 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1921.paramCounts[0])
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
  func1921.paramCounts = [
    1,
  ];
  func1921.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1921;
  func1921.definitionLine = 322;
  func1921.definitionModule = "musical";
  lineNumber = 514;
  moduleName = "musical";
  lineNumber = 513
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 516
  lineNumber = 514
  var bool1922 = new GraceBoolean(false)
  var var_applyCheby = bool1922;
  lineNumber = 322
  var func1923 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1923.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 514
      return var_applyCheby
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
  this.methods["applyCheby"] = func1923;
  func1923.definitionLine = 322;
  func1923.definitionModule = "musical";
  lineNumber = 322
  var func1924 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1924.paramCounts[0])
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
  func1924.paramCounts = [
    1,
  ];
  func1924.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1924;
  func1924.definitionLine = 322;
  func1924.definitionModule = "musical";
  lineNumber = 516;
  moduleName = "musical";
  lineNumber = 514
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 516
  lineNumber = 521
  lineNumber = 516
  var bool1925 = new GraceBoolean(true)
  var var_firstPass = bool1925;
  lineNumber = 322
  var func1926 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1926.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 516
      return var_firstPass
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
  this.methods["firstPass"] = func1926;
  func1926.definitionLine = 322;
  func1926.definitionModule = "musical";
  lineNumber = 322
  var func1927 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1927.paramCounts[0])
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
  func1927.paramCounts = [
    1,
  ];
  func1927.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1927;
  func1927.definitionLine = 322;
  func1927.definitionModule = "musical";
  lineNumber = 521;
  moduleName = "musical";
  lineNumber = 516
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 521
  lineNumber = 555
  lineNumber = 566
  lineNumber = 573
  lineNumber = 584
  lineNumber = 593
  lineNumber = 598
  lineNumber = 603
  lineNumber = 608
  lineNumber = 613
  lineNumber = 618
  lineNumber = 623
  lineNumber = 630
  lineNumber = 647
  lineNumber = 653
  lineNumber = 659
  lineNumber = 665
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "methods-of:point.x()y:\n up\n x\n y\n left\n right\n down\nfresh:image:\n width:=\n x\n y\n moveTo\n jumpTo\n width\n height\n stamp\n angle\n face\n bounceFrom\n always\n url\n touchingEdge\n bounceOff\n imgTag\n step\n destX:=\n height:=\n destX\n destY\n y:=\n normaliseAngle\n forward\n angle:=\n mousedown\n isPointOver\n whenever()do\n url:=\n bounce\n destY:=\n touching\n alwaysBlocks\n turn\n tick\n draw\n x:=\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n Rest\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:circle:\n x\n y\n moveTo\n jumpTo\n stamp\n angle\n radius\n face\n bounceFrom\n always\n radius:=\n touchingEdge\n bounceOff\n step\n destX:=\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n mousedown\n isPointOver\n whenever()do\n bounce\n destY:=\n touching\n alwaysBlocks\n turn\n tick\n draw\n x:=\nfresh:rectangle:\n width:=\n x\n y\n moveTo\n jumpTo\n width\n height\n stamp\n angle\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n asString\n step\n destX:=\n height:=\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n mousedown\n isPointOver\n whenever()do\n bounce\n destY:=\n touching\n alwaysBlocks\n turn\n tick\n draw\n x:=\nmethods-of:drawable.new:\n forward\n x\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n stamp\n angle\n whenever()do\n bounceFrom\n always\n turn\n touchingEdge\n bounceOff\n bounce\n step\n destX:=\n destY:=\n touching\n alwaysBlocks\n destX\n destY\n tick\n draw\n x:=\n y:=\n normaliseAngle\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n label:=\n x\n y\n moveTo\n jumpTo\n label\n stamp\n angle\n face\n bounceFrom\n always\n touchingEdge\n bounceOff\n step\n destX:=\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n mousedown\n isPointOver\n whenever()do\n bounce\n destY:=\n touching\n alwaysBlocks\n turn\n tick\n draw\n x:=\nconfidential:\nconstructors-of:point:\n x()y\n";
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
    "//  - rests: this can be accopmlished with null",
    "//  - ",
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
    "method Rest(){",
    "    dom.window.t_add(\"null\")",
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
