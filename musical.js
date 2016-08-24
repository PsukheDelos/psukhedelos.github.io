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
  lineNumber = 522
  var func961 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func961.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 527
      var if962 = var_done;
      lineNumber = 523
      var bool963 = new GraceBoolean(true)
      var opresult966 = callmethod(var_applyFlat, "==", [1], bool963);
      if (Grace_isTrue(opresult966)) {
        lineNumber = 524
        var string967 = new GraceString("");
        var string970 = new GraceString("b");
        var string973 = new GraceString("");
        var opresult975 = callmethod(string973, "++", [1], var_note);
        var opresult977 = callmethod(opresult975, "++", [1], string970);
        var opresult979 = callmethod(opresult977, "++", [1], var_octave);
        var opresult981 = callmethod(opresult979, "++", [1], string967);
        var call982 = callmethod(var_dom,"window", [0]);
        var call983 = callmethod(call982,"t_add", [1], opresult981);
        lineNumber = 526
        lineNumber = 525
        var string984 = new GraceString("b");
        var string987 = new GraceString("");
        var opresult989 = callmethod(string987, "++", [1], var_note);
        var opresult991 = callmethod(opresult989, "++", [1], string984);
        return opresult991
      }
      lineNumber = 531
      var if992 = var_done;
      lineNumber = 527
      var bool993 = new GraceBoolean(true)
      var opresult996 = callmethod(var_applySharp, "==", [1], bool993);
      if (Grace_isTrue(opresult996)) {
        lineNumber = 528
        var string997 = new GraceString("");
        var string1000 = new GraceString("#");
        var string1003 = new GraceString("");
        var opresult1005 = callmethod(string1003, "++", [1], var_note);
        var opresult1007 = callmethod(opresult1005, "++", [1], string1000);
        var opresult1009 = callmethod(opresult1007, "++", [1], var_octave);
        var opresult1011 = callmethod(opresult1009, "++", [1], string997);
        var call1012 = callmethod(var_dom,"window", [0]);
        var call1013 = callmethod(call1012,"t_add", [1], opresult1011);
        lineNumber = 530
        lineNumber = 529
        var string1014 = new GraceString("#");
        var string1017 = new GraceString("");
        var opresult1019 = callmethod(string1017, "++", [1], var_note);
        var opresult1021 = callmethod(opresult1019, "++", [1], string1014);
        return opresult1021
      }
      lineNumber = 531
      var string1022 = new GraceString("");
      var string1025 = new GraceString("");
      var string1028 = new GraceString("");
      var opresult1030 = callmethod(string1028, "++", [1], var_note);
      var opresult1032 = callmethod(opresult1030, "++", [1], string1025);
      var opresult1034 = callmethod(opresult1032, "++", [1], var_octave);
      var opresult1036 = callmethod(opresult1034, "++", [1], string1022);
      var call1037 = callmethod(var_dom,"window", [0]);
      var call1038 = callmethod(call1037,"t_add", [1], opresult1036);
      lineNumber = 533
      lineNumber = 532
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
    1,
  ];
  func961.variableArities = [
    false,
  ];
  this.methods["Note"] = func961;
  func961.definitionLine = 522;
  func961.definitionModule = "musical";
  lineNumber = 535
  var func1047 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1047.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 536
      var string1048 = new GraceString("C");
      onSelf = true;
      var call1049 = callmethod(this, "Note", [1], string1048);
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
    0,
  ];
  func1047.variableArities = [
    false,
  ];
  this.methods["C"] = func1047;
  func1047.definitionLine = 535;
  func1047.definitionModule = "musical";
  lineNumber = 538
  var func1050 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1050.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 539
      var string1051 = new GraceString("D");
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
  this.methods["D"] = func1050;
  func1050.definitionLine = 538;
  func1050.definitionModule = "musical";
  lineNumber = 541
  var func1053 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1053.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 542
      var string1054 = new GraceString("E");
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
  this.methods["E"] = func1053;
  func1053.definitionLine = 541;
  func1053.definitionModule = "musical";
  lineNumber = 544
  var func1056 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1056.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 545
      var string1057 = new GraceString("F");
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
  this.methods["F"] = func1056;
  func1056.definitionLine = 544;
  func1056.definitionModule = "musical";
  lineNumber = 547
  var func1059 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1059.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 548
      var string1060 = new GraceString("G");
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
  this.methods["G"] = func1059;
  func1059.definitionLine = 547;
  func1059.definitionModule = "musical";
  lineNumber = 550
  var func1062 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1062.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 551
      var string1063 = new GraceString("A");
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
  this.methods["A"] = func1062;
  func1062.definitionLine = 550;
  func1062.definitionModule = "musical";
  lineNumber = 553
  var func1065 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1065.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 554
      var string1066 = new GraceString("B");
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
  this.methods["B"] = func1065;
  func1065.definitionLine = 553;
  func1065.definitionModule = "musical";
  lineNumber = 556
  var func1068 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1068.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Rest)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 557
      var string1069 = new GraceString("null");
      var call1070 = callmethod(var_dom,"window", [0]);
      var call1071 = callmethod(call1070,"t_add", [1], string1069);
      lineNumber = 559
      lineNumber = 558
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
    0,
  ];
  func1068.variableArities = [
    false,
  ];
  this.methods["Rest"] = func1068;
  func1068.definitionLine = 556;
  func1068.definitionModule = "musical";
  lineNumber = 561
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
      lineNumber = 563
      lineNumber = 562
      var bool1074 = new GraceBoolean(true)
      var_applyFlat = bool1074;
      lineNumber = 564
      lineNumber = 563
      var call1075 = callmethod(var_note,"apply", [0]);
      var var_ret = call1075;
      lineNumber = 564;
      moduleName = "musical";
      lineNumber = 563
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 565
      lineNumber = 564
      var bool1076 = new GraceBoolean(false)
      var_applyFlat = bool1076;
      lineNumber = 566
      lineNumber = 565
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
  func1073.definitionLine = 561;
  func1073.definitionModule = "musical";
  lineNumber = 567
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
      lineNumber = 569
      lineNumber = 568
      var bool1078 = new GraceBoolean(true)
      var_applySharp = bool1078;
      lineNumber = 570
      lineNumber = 569
      var call1079 = callmethod(var_note,"apply", [0]);
      var var_ret = call1079;
      lineNumber = 570;
      moduleName = "musical";
      lineNumber = 569
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 571
      lineNumber = 570
      var bool1080 = new GraceBoolean(false)
      var_applySharp = bool1080;
      lineNumber = 572
      lineNumber = 571
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
  func1077.definitionLine = 567;
  func1077.definitionModule = "musical";
  lineNumber = 574
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
      lineNumber = 576
      lineNumber = 575
      var var_oldOctave = var_octave;
      lineNumber = 576;
      moduleName = "musical";
      lineNumber = 575
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 577
      lineNumber = 576
      var_octave = var_num;
      lineNumber = 578
      lineNumber = 577
      var call1082 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1082;
      lineNumber = 578;
      moduleName = "musical";
      lineNumber = 577
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 579
      lineNumber = 578
      var_octave = var_oldOctave;
      lineNumber = 580
      lineNumber = 579
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
  func1081.definitionLine = 574;
  func1081.definitionModule = "musical";
  lineNumber = 585
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
      lineNumber = 590
      var if1084 = var_done;
      lineNumber = 586
      var bool1085 = new GraceBoolean(true)
      var opresult1088 = callmethod(var_firstPass, "==", [1], bool1085);
      if (Grace_isTrue(opresult1088)) {
        lineNumber = 587
        var call1089 = callmethod(var_dom,"window", [0]);
        var call1090 = callmethod(call1089,"t_reset", [0]);
        lineNumber = 589
        lineNumber = 588
        var bool1091 = new GraceBoolean(false)
        var_firstPass = bool1091;
        if1084 = bool1091;
      }
      lineNumber = 590
      var call1092 = callmethod(var_dom,"window", [0]);
      var call1093 = callmethod(call1092,"t_init", [0]);
      lineNumber = 591
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
  func1083.definitionLine = 585;
  func1083.definitionModule = "musical";
  lineNumber = 594
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
      lineNumber = 595
      onSelf = true;
      var call1096 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 596
      var call1097 = callmethod(var_dom,"window", [0]);
      var call1098 = callmethod(call1097,"t_synth_mono", [0]);
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
  func1095.definitionLine = 594;
  func1095.definitionModule = "musical";
  lineNumber = 599
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
      lineNumber = 600
      onSelf = true;
      var call1100 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 601
      var call1101 = callmethod(var_dom,"window", [0]);
      var call1102 = callmethod(call1101,"t_synth_pluck", [0]);
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
  func1099.definitionLine = 599;
  func1099.definitionModule = "musical";
  lineNumber = 604
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
      lineNumber = 605
      onSelf = true;
      var call1104 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 606
      var call1105 = callmethod(var_dom,"window", [0]);
      var call1106 = callmethod(call1105,"t_synth_poly", [0]);
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
  func1103.definitionLine = 604;
  func1103.definitionModule = "musical";
  lineNumber = 609
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
      lineNumber = 610
      onSelf = true;
      var call1108 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 611
      var call1109 = callmethod(var_dom,"window", [0]);
      var call1110 = callmethod(call1109,"t_synth_fm", [0]);
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
  func1107.definitionLine = 609;
  func1107.definitionModule = "musical";
  lineNumber = 614
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
      lineNumber = 615
      onSelf = true;
      var call1112 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 616
      var call1113 = callmethod(var_dom,"window", [0]);
      var call1114 = callmethod(call1113,"t_synth_membrane", [0]);
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
  func1111.definitionLine = 614;
  func1111.definitionModule = "musical";
  lineNumber = 619
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
      lineNumber = 620
      onSelf = true;
      var call1116 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 621
      var call1117 = callmethod(var_dom,"window", [0]);
      var call1118 = callmethod(call1117,"t_synth_duo", [0]);
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
  func1115.definitionLine = 619;
  func1115.definitionModule = "musical";
  lineNumber = 624
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
      lineNumber = 625
      var call1120 = callmethod(var_dom,"window", [0]);
      var call1121 = callmethod(call1120,"t_synth_arpeggio", [1], var_note);
      return call1121
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
  func1119.definitionLine = 624;
  func1119.definitionModule = "musical";
  lineNumber = 631
  var func1122 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1122.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 635
      var if1123 = var_done;
      lineNumber = 632
      var bool1124 = new GraceBoolean(true)
      var opresult1127 = callmethod(var_applyChorus, "==", [1], bool1124);
      if (Grace_isTrue(opresult1127)) {
        lineNumber = 633
        var call1128 = callmethod(var_dom,"window", [0]);
        var call1129 = callmethod(call1128,"t_effect_chorus", [0]);
        if1123 = call1129;
      }
      lineNumber = 638
      var if1130 = var_done;
      lineNumber = 635
      var bool1131 = new GraceBoolean(true)
      var opresult1134 = callmethod(var_applyReverb, "==", [1], bool1131);
      if (Grace_isTrue(opresult1134)) {
        lineNumber = 636
        var call1135 = callmethod(var_dom,"window", [0]);
        var call1136 = callmethod(call1135,"t_effect_reverb", [0]);
        if1130 = call1136;
      }
      lineNumber = 641
      var if1137 = var_done;
      lineNumber = 638
      var bool1138 = new GraceBoolean(true)
      var opresult1141 = callmethod(var_applyAutowah, "==", [1], bool1138);
      if (Grace_isTrue(opresult1141)) {
        lineNumber = 639
        var call1142 = callmethod(var_dom,"window", [0]);
        var call1143 = callmethod(call1142,"t_effect_autowah", [0]);
        if1137 = call1143;
      }
      lineNumber = 644
      var if1144 = var_done;
      lineNumber = 641
      var bool1145 = new GraceBoolean(true)
      var opresult1148 = callmethod(var_applyCheby, "==", [1], bool1145);
      if (Grace_isTrue(opresult1148)) {
        lineNumber = 642
        var call1149 = callmethod(var_dom,"window", [0]);
        var call1150 = callmethod(call1149,"t_effect_cheby", [0]);
        if1144 = call1150;
      }
      lineNumber = 644
      var call1151 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 645
      var call1152 = callmethod(var_dom,"window", [0]);
      var call1153 = callmethod(call1152,"t_effect_reset", [0]);
      return call1153
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1122.paramCounts = [
    1,
  ];
  func1122.variableArities = [
    false,
  ];
  this.methods["Effect"] = func1122;
  func1122.definitionLine = 631;
  func1122.definitionModule = "musical";
  lineNumber = 648
  var func1154 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1154.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 650
      lineNumber = 649
      var bool1155 = new GraceBoolean(true)
      var_applyChorus = bool1155;
      lineNumber = 650
      onSelf = true;
      var call1156 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 652
      lineNumber = 651
      var bool1157 = new GraceBoolean(false)
      var_applyChorus = bool1157;
      return bool1157
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1154.paramCounts = [
    1,
  ];
  func1154.variableArities = [
    false,
  ];
  this.methods["Chorus"] = func1154;
  func1154.definitionLine = 648;
  func1154.definitionModule = "musical";
  lineNumber = 654
  var func1158 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1158.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 656
      lineNumber = 655
      var bool1159 = new GraceBoolean(true)
      var_applyReverb = bool1159;
      lineNumber = 656
      onSelf = true;
      var call1160 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 658
      lineNumber = 657
      var bool1161 = new GraceBoolean(false)
      var_applyReverb = bool1161;
      return bool1161
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1158.paramCounts = [
    1,
  ];
  func1158.variableArities = [
    false,
  ];
  this.methods["Reverb"] = func1158;
  func1158.definitionLine = 654;
  func1158.definitionModule = "musical";
  lineNumber = 660
  var func1162 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1162.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 662
      lineNumber = 661
      var bool1163 = new GraceBoolean(true)
      var_applyAutowah = bool1163;
      lineNumber = 662
      onSelf = true;
      var call1164 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 664
      lineNumber = 663
      var bool1165 = new GraceBoolean(false)
      var_applyAutowah = bool1165;
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
  this.methods["Autowah"] = func1162;
  func1162.definitionLine = 660;
  func1162.definitionModule = "musical";
  lineNumber = 666
  var func1166 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1166.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 668
      lineNumber = 667
      var bool1167 = new GraceBoolean(true)
      var_applyCheby = bool1167;
      lineNumber = 668
      onSelf = true;
      var call1168 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 670
      lineNumber = 669
      var bool1169 = new GraceBoolean(false)
      var_applyCheby = bool1169;
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
  this.methods["Cheby"] = func1166;
  func1166.definitionLine = 666;
  func1166.definitionModule = "musical";
  lineNumber = 674
  var func1170 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1170.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 675
      var call1171 = callmethod(var_dom,"window", [0]);
      var call1172 = callmethod(call1171,"t_bpm", [1], var_bpm);
      return call1172
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
  this.methods["SetBPM"] = func1170;
  func1170.definitionLine = 674;
  func1170.definitionModule = "musical";
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
  var call1173 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1173;
  this.data = call1173.data;
  this._value = call1173._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 675
  var func1174 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1174.paramCounts[0])
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
  func1174.paramCounts = [
    0,
  ];
  func1174.variableArities = [
    false,
  ];
  this.methods["document"] = func1174;
  func1174.definitionLine = 675;
  func1174.definitionModule = "musical";
  lineNumber = 675
  var func1175 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1175.paramCounts[0])
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
  func1175.paramCounts = [
    1,
  ];
  func1175.variableArities = [
    false,
  ];
  this.methods["document:="] = func1175;
  func1175.definitionLine = 675;
  func1175.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 675
  var func1176 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1176.paramCounts[0])
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
  func1176.paramCounts = [
    0,
  ];
  func1176.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1176;
  func1176.definitionLine = 675;
  func1176.definitionModule = "musical";
  lineNumber = 675
  var func1177 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1177.paramCounts[0])
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
  func1177.paramCounts = [
    1,
  ];
  func1177.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1177;
  func1177.definitionLine = 675;
  func1177.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 675
  var func1178 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1178.paramCounts[0])
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
  func1178.paramCounts = [
    0,
  ];
  func1178.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1178;
  func1178.definitionLine = 675;
  func1178.definitionModule = "musical";
  lineNumber = 675
  var func1179 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1179.paramCounts[0])
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
  func1179.paramCounts = [
    1,
  ];
  func1179.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1179;
  func1179.definitionLine = 675;
  func1179.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 675
  var func1180 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1180.paramCounts[0])
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
  func1180.paramCounts = [
    0,
  ];
  func1180.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1180;
  func1180.definitionLine = 675;
  func1180.definitionModule = "musical";
  lineNumber = 675
  var func1181 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1181.paramCounts[0])
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
  func1181.paramCounts = [
    1,
  ];
  func1181.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1181;
  func1181.definitionLine = 675;
  func1181.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 675
  var func1182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1182.paramCounts[0])
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
  func1182.paramCounts = [
    0,
  ];
  func1182.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1182;
  func1182.definitionLine = 675;
  func1182.definitionModule = "musical";
  lineNumber = 675
  var func1183 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1183.paramCounts[0])
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
  func1183.paramCounts = [
    1,
  ];
  func1183.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1183;
  func1183.definitionLine = 675;
  func1183.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 675
  var func1184 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1184.paramCounts[0])
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
  func1184.paramCounts = [
    0,
  ];
  func1184.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1184;
  func1184.definitionLine = 675;
  func1184.definitionModule = "musical";
  lineNumber = 675
  var func1185 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1185.paramCounts[0])
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
  func1185.paramCounts = [
    1,
  ];
  func1185.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1185;
  func1185.definitionLine = 675;
  func1185.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1186 = callmethod(var_dom,"window", [0]);
  var call1187 = callmethod(call1186,"Math", [0]);
  var var_trig = call1187;
  var func1188 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1188.paramCounts[0])
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
  func1188.paramCounts = [
    0,
  ];
  func1188.variableArities = [
    false,
  ];
  this.methods["trig"] = func1188;
  func1188.definitionLine = 15;
  func1188.definitionModule = "musical";
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
  var func1189 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1189.paramCounts[0])
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
  func1189.paramCounts = [
    0,
  ];
  func1189.variableArities = [
    false,
  ];
  this.methods["PI"] = func1189;
  func1189.definitionLine = 15;
  func1189.definitionModule = "musical";
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
  var bool1190 = new GraceBoolean(false)
  var var_stopRunning = bool1190;
  lineNumber = 15
  var func1191 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1191.paramCounts[0])
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
  func1191.paramCounts = [
    0,
  ];
  func1191.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1191;
  func1191.definitionLine = 15;
  func1191.definitionModule = "musical";
  lineNumber = 15
  var func1192 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1192.paramCounts[0])
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
  func1192.paramCounts = [
    1,
  ];
  func1192.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1192;
  func1192.definitionLine = 15;
  func1192.definitionModule = "musical";
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
  var bool1193 = new GraceBoolean(false)
  var var_initialised = bool1193;
  lineNumber = 15
  var func1194 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1194.paramCounts[0])
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
  func1194.paramCounts = [
    0,
  ];
  func1194.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1194;
  func1194.definitionLine = 15;
  func1194.definitionModule = "musical";
  lineNumber = 15
  var func1195 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1195.paramCounts[0])
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
  func1195.paramCounts = [
    1,
  ];
  func1195.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1195;
  func1195.definitionLine = 15;
  func1195.definitionModule = "musical";
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
  var string1196 = new GraceString("white");
  var var_backgroundColour = string1196;
  lineNumber = 15
  var func1197 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1197.paramCounts[0])
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
  func1197.paramCounts = [
    0,
  ];
  func1197.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1197;
  func1197.definitionLine = 15;
  func1197.definitionModule = "musical";
  lineNumber = 15
  var func1198 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1198.paramCounts[0])
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
  func1198.paramCounts = [
    1,
  ];
  func1198.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1198;
  func1198.definitionLine = 15;
  func1198.definitionModule = "musical";
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
  var call1199 = callmethod(var_collections,"list", [0]);
  var call1200 = callmethod(call1199,"new", [0]);
  var var_registeredObjects = call1200;
  var func1201 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1201.paramCounts[0])
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
  func1201.paramCounts = [
    0,
  ];
  func1201.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1201;
  func1201.definitionLine = 21;
  func1201.definitionModule = "musical";
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
  var call1202 = callmethod(var_collections,"list", [0]);
  var call1203 = callmethod(call1202,"new", [0]);
  var var_stepBlocks = call1203;
  var func1204 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1204.paramCounts[0])
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
  func1204.paramCounts = [
    0,
  ];
  func1204.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1204;
  func1204.definitionLine = 22;
  func1204.definitionModule = "musical";
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
  var call1205 = callmethod(var_collections,"map", [0]);
  var call1206 = callmethod(call1205,"new", [0]);
  var var_audioTags = call1206;
  var func1207 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1207.paramCounts[0])
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
  func1207.paramCounts = [
    0,
  ];
  func1207.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1207;
  func1207.definitionLine = 23;
  func1207.definitionModule = "musical";
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
  var func1208 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    0,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1208;
  func1208.definitionLine = 23;
  func1208.definitionModule = "musical";
  lineNumber = 23
  var func1209 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    1,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1209;
  func1209.definitionLine = 23;
  func1209.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1210 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    0,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1210;
  func1210.definitionLine = 23;
  func1210.definitionModule = "musical";
  lineNumber = 23
  var func1211 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1211.paramCounts[0])
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
  func1211.paramCounts = [
    1,
  ];
  func1211.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1211;
  func1211.definitionLine = 23;
  func1211.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1212 = new GraceString("left");
  var var_left = string1212;
  lineNumber = 23
  var func1213 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1213.paramCounts[0])
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
  func1213.paramCounts = [
    0,
  ];
  func1213.variableArities = [
    false,
  ];
  this.methods["left"] = func1213;
  func1213.definitionLine = 23;
  func1213.definitionModule = "musical";
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
  var string1214 = new GraceString("right");
  var var_right = string1214;
  lineNumber = 23
  var func1215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    0,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["right"] = func1215;
  func1215.definitionLine = 23;
  func1215.definitionModule = "musical";
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
  var string1216 = new GraceString("top");
  var var_top = string1216;
  lineNumber = 23
  var func1217 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    0,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["top"] = func1217;
  func1217.definitionLine = 23;
  func1217.definitionModule = "musical";
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
  var string1218 = new GraceString("bottom");
  var var_bottom = string1218;
  lineNumber = 23
  var func1219 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1219.paramCounts[0])
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
  func1219.paramCounts = [
    0,
  ];
  func1219.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1219;
  func1219.definitionLine = 23;
  func1219.definitionModule = "musical";
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
  var func1220 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1220.paramCounts[0])
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
  func1220.paramCounts = [
    0,
  ];
  func1220.variableArities = [
    false,
  ];
  this.methods["centre"] = func1220;
  func1220.definitionLine = 23;
  func1220.definitionModule = "musical";
  lineNumber = 23
  var func1221 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    1,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1221;
  func1221.definitionLine = 23;
  func1221.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1222 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1222.paramCounts[0])
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
  func1222.paramCounts = [
    0,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1222;
  func1222.definitionLine = 23;
  func1222.definitionModule = "musical";
  lineNumber = 23
  var func1223 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    1,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1223;
  func1223.definitionLine = 23;
  func1223.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1224 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1224.paramCounts[0])
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
  func1224.paramCounts = [
    0,
  ];
  func1224.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1224;
  func1224.definitionLine = 23;
  func1224.definitionModule = "musical";
  lineNumber = 23
  var func1225 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    1,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1225;
  func1225.definitionLine = 23;
  func1225.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1226 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1226.paramCounts[0])
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
  func1226.paramCounts = [
    0,
  ];
  func1226.variableArities = [
    false,
  ];
  this.methods["above"] = func1226;
  func1226.definitionLine = 23;
  func1226.definitionModule = "musical";
  lineNumber = 23
  var func1227 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1227.paramCounts[0])
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
  func1227.paramCounts = [
    1,
  ];
  func1227.variableArities = [
    false,
  ];
  this.methods["above:="] = func1227;
  func1227.definitionLine = 23;
  func1227.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1228 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    0,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1228;
  func1228.definitionLine = 23;
  func1228.definitionModule = "musical";
  lineNumber = 23
  var func1229 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    1,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1229;
  func1229.definitionLine = 23;
  func1229.definitionModule = "musical";
  lineNumber = 40
  var func1230 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1230.paramCounts[0])
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
  func1230.paramCounts = [
    0,
  ];
  func1230.variableArities = [
    false,
  ];
  this.methods["point"] = func1230;
  func1230.definitionLine = 40;
  func1230.definitionModule = "musical";
  var obj1231 = Grace_allocObject();
  obj1231.definitionModule = "musical";
  obj1231.definitionLine = 40;
  obj1231.outer = this;
  var reader_musical_outer_1232 = function() {
    return this.outer;
  }
  obj1231.methods["outer"] = reader_musical_outer_1232;
  function obj_init_1231() {
    var origSuperDepth = superDepth;
    superDepth = obj1231;
    obj1231.annotations = [];
    var func1233 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1233.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1233.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1234 = Grace_allocObject();
        obj1234.definitionModule = "musical";
        obj1234.definitionLine = 40;
        obj1234.outer = this;
        var reader_musical_outer_1235 = function() {
          return this.outer;
        }
        obj1234.methods["outer"] = reader_musical_outer_1235;
        function obj_init_1234() {
          var origSuperDepth = superDepth;
          superDepth = obj1234;
          obj1234.annotations = [];
          var func1236 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1236.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1238 = callmethod(this, "x", [0]);
              var diff1240 = callmethod(call1238, "-", [1], var_dx);
              onSelf = true;
              var call1241 = callmethod(this, "y", [0]);
              var call1242 = callmethod(var_point,"x()y", [1, 1], diff1240, call1241);
              return call1242
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
          obj1234.methods["left"] = func1236;
          func1236.definitionLine = 43;
          func1236.definitionModule = "musical";
          var func1243 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1243.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1245 = callmethod(this, "x", [0]);
              var opresult1247 = callmethod(call1245, "+", [1], var_dx);
              onSelf = true;
              var call1248 = callmethod(this, "y", [0]);
              var call1249 = callmethod(var_point,"x()y", [1, 1], opresult1247, call1248);
              return call1249
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
          obj1234.methods["right"] = func1243;
          func1243.definitionLine = 44;
          func1243.definitionModule = "musical";
          var func1250 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1250.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1251 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1253 = callmethod(this, "y", [0]);
              var diff1255 = callmethod(call1253, "-", [1], var_dy);
              var call1256 = callmethod(var_point,"x()y", [1, 1], call1251, diff1255);
              return call1256
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
          obj1234.methods["up"] = func1250;
          func1250.definitionLine = 45;
          func1250.definitionModule = "musical";
          var func1257 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1258 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1260 = callmethod(this, "y", [0]);
              var opresult1262 = callmethod(call1260, "+", [1], var_dy);
              var call1263 = callmethod(var_point,"x()y", [1, 1], call1258, opresult1262);
              return call1263
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
          obj1234.methods["down"] = func1257;
          func1257.definitionLine = 46;
          func1257.definitionModule = "musical";
          sourceObject = obj1234;
          lineNumber = 41
          obj1234.data["x"] = var_x__39__;
          var reader_musical_x_1264 = function() {
            return this.data["x"];
          }
          reader_musical_x_1264.def = true;
          obj1234.methods["x"] = reader_musical_x_1264;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1234;
          lineNumber = 42
          obj1234.data["y"] = var_y__39__;
          var reader_musical_y_1265 = function() {
            return this.data["y"];
          }
          reader_musical_y_1265.def = true;
          obj1234.methods["y"] = reader_musical_y_1265;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1234;
          sourceObject = obj1234;
          sourceObject = obj1234;
          sourceObject = obj1234;
          superDepth = origSuperDepth;
        }
        obj_init_1234.apply(obj1234, []);
        return obj1234
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1233.paramCounts = [
      1,
      1,
    ];
    func1233.variableArities = [
      false,
      false,
    ];
    obj1231.methods["x()y"] = func1233;
    func1233.definitionLine = 40;
    func1233.definitionModule = "musical";
    var func1266 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1267 = Grace_allocObject();
        obj1267.definitionModule = "musical";
        obj1267.definitionLine = 40;
        var inho1267 = inheritingObject;
        while (inho1267.superobj) inho1267 = inho1267.superobj;
        inho1267.superobj = obj1267;
        obj1267.data = inheritingObject.data;
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
        obj_init_1267.apply(inheritingObject, []);
        return obj1267
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1231.methods["x()y()object"] = func1266;
    var func1299 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1300 = new GraceString("class point");
        return string1300
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1299.paramCounts = [
    ];
    func1299.variableArities = [
    ];
    obj1231.methods["asDebugString"] = func1299;
    func1299.definitionLine = 40;
    func1299.definitionModule = "musical";
    sourceObject = obj1231;
    sourceObject = obj1231;
    superDepth = origSuperDepth;
  }
  obj_init_1231.apply(obj1231, []);
  var var_point = obj1231;
  lineNumber = 48
  var func1301 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1301.paramCounts[0])
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
  func1301.paramCounts = [
    0,
  ];
  func1301.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1301;
  func1301.definitionLine = 48;
  func1301.definitionModule = "musical";
  var obj1302 = Grace_allocObject();
  obj1302.definitionModule = "musical";
  obj1302.definitionLine = 48;
  obj1302.outer = this;
  var reader_musical_outer_1303 = function() {
    return this.outer;
  }
  obj1302.methods["outer"] = reader_musical_outer_1303;
  function obj_init_1302() {
    var origSuperDepth = superDepth;
    superDepth = obj1302;
    obj1302.annotations = [];
    var func1304 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1304.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1305 = Grace_allocObject();
        obj1305.definitionModule = "musical";
        obj1305.definitionLine = 48;
        obj1305.outer = this;
        var reader_musical_outer_1306 = function() {
          return this.outer;
        }
        obj1305.methods["outer"] = reader_musical_outer_1306;
        function obj_init_1305() {
          var origSuperDepth = superDepth;
          superDepth = obj1305;
          obj1305.annotations = [];
          var func1307 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1308 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1309 = Grace_allocObject();
              block1309.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1309.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1309.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1309.methods["match"] = GraceBlock_match;
              block1309.methods["prefix?"] = GraceBlock_lift;
              block1309.receiver = this;
              block1309.className = 'block<musical:63>';
              block1309.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1310 = callmethod(var_b,"apply", [0]);
                return call1310;
              };
              var call1311 = callmethod(Grace_prelude,"for()do", [1, 1], call1308, block1309);
              lineNumber = 63
              onSelf = true;
              var call1312 = callmethod(this, "tick", [0]);
              return call1312
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1307.paramCounts = [
            0,
          ];
          func1307.variableArities = [
            false,
          ];
          obj1305.methods["step"] = func1307;
          func1307.definitionLine = 59;
          func1307.definitionModule = "musical";
          var func1313 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1313.paramCounts[0])
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
          func1313.paramCounts = [
            0,
          ];
          func1313.variableArities = [
            false,
          ];
          obj1305.methods["tick"] = func1313;
          func1313.definitionLine = 66;
          func1313.definitionModule = "musical";
          var func1314 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1314.paramCounts[0])
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
          func1314.paramCounts = [
            1,
          ];
          func1314.variableArities = [
            false,
          ];
          obj1305.methods["draw"] = func1314;
          func1314.definitionLine = 67;
          func1314.definitionModule = "musical";
          var func1315 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1316 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1317 = callmethod(this, "destX:=", [1], call1316);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1318 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1319 = callmethod(this, "destY:=", [1], call1318);
              return call1319
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
          obj1305.methods["moveTo"] = func1315;
          func1315.definitionLine = 68;
          func1315.definitionModule = "musical";
          var func1320 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1321 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1322 = callmethod(this, "x:=", [1], call1321);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1323 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1324 = callmethod(this, "y:=", [1], call1323);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1325 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1326 = callmethod(this, "destX:=", [1], call1325);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1327 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1328 = callmethod(this, "destY:=", [1], call1327);
              return call1328
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
          obj1305.methods["jumpTo"] = func1320;
          func1320.definitionLine = 72;
          func1320.definitionModule = "musical";
          var func1329 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1330 = new GraceBoolean(false)
              return bool1330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1329.paramCounts = [
            1,
          ];
          func1329.variableArities = [
            false,
          ];
          obj1305.methods["isPointOver"] = func1329;
          func1329.definitionLine = 78;
          func1329.definitionModule = "musical";
          var func1331 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1331.paramCounts[0])
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
          func1331.paramCounts = [
            0,
          ];
          func1331.variableArities = [
            false,
          ];
          obj1305.methods["mousedown"] = func1331;
          func1331.definitionLine = 79;
          func1331.definitionModule = "musical";
          var func1332 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1332.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1333 = callmethod(this, "alwaysBlocks", [0]);
              var call1334 = callmethod(call1333,"push", [1], var_b);
              return call1334
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1332.paramCounts = [
            1,
          ];
          func1332.variableArities = [
            false,
          ];
          obj1305.methods["always"] = func1332;
          func1332.definitionLine = 80;
          func1332.definitionModule = "musical";
          var func1335 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1335.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1336 = Grace_allocObject();
              block1336.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1336.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1336.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1336.methods["match"] = GraceBlock_match;
              block1336.methods["prefix?"] = GraceBlock_lift;
              block1336.receiver = this;
              block1336.className = 'block<musical:89>';
              block1336.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1337 = var_done;
                lineNumber = 85
                var call1338 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1338)) {
                  lineNumber = 86
                  var call1339 = callmethod(var_b,"apply", [0]);
                  if1337 = call1339;
                }
                return if1337;
              };
              onSelf = true;
              var call1340 = callmethod(this, "always", [1], block1336);
              return call1340
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
            1,
          ];
          func1335.variableArities = [
            false,
            false,
          ];
          obj1305.methods["whenever()do"] = func1335;
          func1335.definitionLine = 83;
          func1335.definitionModule = "musical";
          var func1341 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1341.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1345 = callmethod(this, "angle", [0]);
              var quotient1347 = callmethod(call1345, "/", [1], new GraceNum(180));
              var prod1349 = callmethod(quotient1347, "*", [1], var_PI);
              var call1350 = callmethod(var_trig,"cos", [1], prod1349);
              var prod1352 = callmethod(call1350, "*", [1], var_dist);
              var var_y__39__ = prod1352;
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
              var call1356 = callmethod(this, "angle", [0]);
              var quotient1358 = callmethod(call1356, "/", [1], new GraceNum(180));
              var prod1360 = callmethod(quotient1358, "*", [1], var_PI);
              var call1361 = callmethod(var_trig,"sin", [1], prod1360);
              var prod1363 = callmethod(call1361, "*", [1], var_dist);
              var var_x__39__ = prod1363;
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
              var call1365 = callmethod(this, "x", [0]);
              var opresult1367 = callmethod(call1365, "+", [1], var_x__39__);
              onSelf = true;
              var call1368 = callmethod(this, "x:=", [1], opresult1367);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1370 = callmethod(this, "y", [0]);
              var opresult1372 = callmethod(call1370, "+", [1], var_y__39__);
              onSelf = true;
              var call1373 = callmethod(this, "y:=", [1], opresult1372);
              return call1373
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
          obj1305.methods["forward"] = func1341;
          func1341.definitionLine = 90;
          func1341.definitionModule = "musical";
          var func1374 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1375 = Grace_allocObject();
              block1375.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1375.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1375.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1375.methods["match"] = GraceBlock_match;
              block1375.methods["prefix?"] = GraceBlock_lift;
              block1375.receiver = this;
              block1375.className = 'block<musical:97>';
              block1375.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1377 = callmethod(this, "angle", [0]);
                var opresult1379 = callmethod(call1377, "<", [1], new GraceNum(0));
                return opresult1379;
              };
              lineNumber = 100
              var block1380 = Grace_allocObject();
              block1380.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1380.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1380.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1380.methods["match"] = GraceBlock_match;
              block1380.methods["prefix?"] = GraceBlock_lift;
              block1380.receiver = this;
              block1380.className = 'block<musical:100>';
              block1380.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1382 = callmethod(this, "angle", [0]);
                var opresult1384 = callmethod(call1382, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1385 = callmethod(this, "angle:=", [1], opresult1384);
                return call1385;
              };
              var call1386 = callmethod(Grace_prelude,"while()do", [1, 1], block1375, block1380);
              lineNumber = 100
              var block1387 = Grace_allocObject();
              block1387.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1387.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1387.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1387.methods["match"] = GraceBlock_match;
              block1387.methods["prefix?"] = GraceBlock_lift;
              block1387.receiver = this;
              block1387.className = 'block<musical:100>';
              block1387.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1389 = callmethod(this, "angle", [0]);
                var opresult1391 = callmethod(call1389, ">", [1], new GraceNum(360));
                return opresult1391;
              };
              lineNumber = 103
              var block1392 = Grace_allocObject();
              block1392.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1392.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1392.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1392.methods["match"] = GraceBlock_match;
              block1392.methods["prefix?"] = GraceBlock_lift;
              block1392.receiver = this;
              block1392.className = 'block<musical:103>';
              block1392.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1394 = callmethod(this, "angle", [0]);
                var diff1396 = callmethod(call1394, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1397 = callmethod(this, "angle:=", [1], diff1396);
                return call1397;
              };
              var call1398 = callmethod(Grace_prelude,"while()do", [1, 1], block1387, block1392);
              return call1398
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
          obj1305.methods["normaliseAngle"] = func1374;
          func1374.definitionLine = 96;
          func1374.definitionModule = "musical";
          var func1399 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1399.paramCounts[0])
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
              var call1401 = callmethod(this, "angle", [0]);
              var opresult1403 = callmethod(call1401, "+", [1], var_degrees);
              onSelf = true;
              var call1404 = callmethod(this, "angle:=", [1], opresult1403);
              lineNumber = 106
              onSelf = true;
              var call1405 = callmethod(this, "normaliseAngle", [0]);
              return call1405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1399.paramCounts = [
            1,
          ];
          func1399.variableArities = [
            false,
          ];
          obj1305.methods["turn"] = func1399;
          func1399.definitionLine = 104;
          func1399.definitionModule = "musical";
          var func1406 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1407 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1408 = callmethod(this, "x", [0]);
              var call1409 = callmethod(var_point,"x()y", [1, 1], call1408, new GraceNum(0));
              onSelf = true;
              var call1410 = callmethod(this, "isPointOver", [1], call1409);
              if (Grace_isTrue(call1410)) {
                lineNumber = 111
                lineNumber = 110
                var bool1411 = new GraceBoolean(true)
                return bool1411
              }
              lineNumber = 115
              var if1412 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1413 = callmethod(this, "x", [0]);
              var call1414 = callmethod(var_point,"x()y", [1, 1], call1413, var_canvasHeight);
              onSelf = true;
              var call1415 = callmethod(this, "isPointOver", [1], call1414);
              if (Grace_isTrue(call1415)) {
                lineNumber = 114
                lineNumber = 113
                var bool1416 = new GraceBoolean(true)
                return bool1416
              }
              lineNumber = 118
              var if1417 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1418 = callmethod(this, "y", [0]);
              var call1419 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1418);
              onSelf = true;
              var call1420 = callmethod(this, "isPointOver", [1], call1419);
              if (Grace_isTrue(call1420)) {
                lineNumber = 117
                lineNumber = 116
                var bool1421 = new GraceBoolean(true)
                return bool1421
              }
              lineNumber = 121
              var if1422 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1423 = callmethod(this, "y", [0]);
              var call1424 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1423);
              onSelf = true;
              var call1425 = callmethod(this, "isPointOver", [1], call1424);
              if (Grace_isTrue(call1425)) {
                lineNumber = 120
                lineNumber = 119
                var bool1426 = new GraceBoolean(true)
                return bool1426
              }
              lineNumber = 122
              lineNumber = 121
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
          func1406.paramCounts = [
            0,
          ];
          func1406.variableArities = [
            false,
          ];
          obj1305.methods["touchingEdge"] = func1406;
          func1406.definitionLine = 108;
          func1406.definitionModule = "musical";
          var func1428 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1428.paramCounts[0])
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
              var if1429 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1430 = callmethod(this, "x", [0]);
              var call1431 = callmethod(var_point,"x()y", [1, 1], call1430, new GraceNum(0));
              onSelf = true;
              var call1432 = callmethod(this, "isPointOver", [1], call1431);
              if (Grace_isTrue(call1432)) {
                lineNumber = 127
                onSelf = true;
                var call1433 = callmethod(this, "bounceFrom", [1], var_top);
                if1429 = call1433;
              }
              lineNumber = 132
              var if1434 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1435 = callmethod(this, "x", [0]);
              var call1436 = callmethod(var_point,"x()y", [1, 1], call1435, var_canvasHeight);
              onSelf = true;
              var call1437 = callmethod(this, "isPointOver", [1], call1436);
              if (Grace_isTrue(call1437)) {
                lineNumber = 130
                onSelf = true;
                var call1438 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1434 = call1438;
              }
              lineNumber = 135
              var if1439 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1440 = callmethod(this, "y", [0]);
              var call1441 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1440);
              onSelf = true;
              var call1442 = callmethod(this, "isPointOver", [1], call1441);
              if (Grace_isTrue(call1442)) {
                lineNumber = 133
                onSelf = true;
                var call1443 = callmethod(this, "bounceFrom", [1], var_left);
                if1439 = call1443;
              }
              lineNumber = 138
              var if1444 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1445 = callmethod(this, "y", [0]);
              var call1446 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1445);
              onSelf = true;
              var call1447 = callmethod(this, "isPointOver", [1], call1446);
              if (Grace_isTrue(call1447)) {
                lineNumber = 136
                onSelf = true;
                var call1448 = callmethod(this, "bounceFrom", [1], var_right);
                if1444 = call1448;
              }
              lineNumber = 138
              var block1449 = Grace_allocObject();
              block1449.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1449.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1449.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1449.methods["match"] = GraceBlock_match;
              block1449.methods["prefix?"] = GraceBlock_lift;
              block1449.receiver = this;
              block1449.className = 'block<musical:138>';
              block1449.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1450 = callmethod(this, "touchingEdge", [0]);
                return call1450;
              };
              lineNumber = 141
              var block1451 = Grace_allocObject();
              block1451.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1451.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1451.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1451.methods["match"] = GraceBlock_match;
              block1451.methods["prefix?"] = GraceBlock_lift;
              block1451.receiver = this;
              block1451.className = 'block<musical:141>';
              block1451.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1452 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1452;
              };
              var call1453 = callmethod(Grace_prelude,"while()do", [1, 1], block1449, block1451);
              return call1453
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
          obj1305.methods["bounce"] = func1428;
          func1428.definitionLine = 123;
          func1428.definitionModule = "musical";
          var func1454 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1454.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1455 = var_done;
              lineNumber = 143
              var string1456 = new GraceString("left");
              var opresult1459 = callmethod(var_dir, "==", [1], string1456);
              if (Grace_isTrue(opresult1459)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1460 = callmethod(this, "angle", [0]);
                var diff1463 = callmethod(new GraceNum(360), "-", [1], call1460);
                onSelf = true;
                var call1464 = callmethod(this, "angle:=", [1], diff1463);
                if1455 = call1464;
              }
              lineNumber = 149
              var if1465 = var_done;
              lineNumber = 146
              var string1466 = new GraceString("right");
              var opresult1469 = callmethod(var_dir, "==", [1], string1466);
              if (Grace_isTrue(opresult1469)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1470 = callmethod(this, "angle", [0]);
                var diff1473 = callmethod(new GraceNum(360), "-", [1], call1470);
                onSelf = true;
                var call1474 = callmethod(this, "angle:=", [1], diff1473);
                if1465 = call1474;
              }
              lineNumber = 152
              var if1475 = var_done;
              lineNumber = 149
              var string1476 = new GraceString("top");
              var opresult1479 = callmethod(var_dir, "==", [1], string1476);
              if (Grace_isTrue(opresult1479)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1480 = callmethod(this, "angle", [0]);
                var diff1483 = callmethod(new GraceNum(180), "-", [1], call1480);
                onSelf = true;
                var call1484 = callmethod(this, "angle:=", [1], diff1483);
                if1475 = call1484;
              }
              lineNumber = 155
              var if1485 = var_done;
              lineNumber = 152
              var string1486 = new GraceString("bottom");
              var opresult1489 = callmethod(var_dir, "==", [1], string1486);
              if (Grace_isTrue(opresult1489)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1490 = callmethod(this, "angle", [0]);
                var diff1493 = callmethod(new GraceNum(180), "-", [1], call1490);
                onSelf = true;
                var call1494 = callmethod(this, "angle:=", [1], diff1493);
                if1485 = call1494;
              }
              lineNumber = 155
              onSelf = true;
              var call1495 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1496 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1496
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1454.paramCounts = [
            1,
          ];
          func1454.variableArities = [
            false,
          ];
          obj1305.methods["bounceFrom"] = func1454;
          func1454.definitionLine = 142;
          func1454.definitionModule = "musical";
          var func1497 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1497.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1498 = var_done;
              lineNumber = 159
              var call1499 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1501 = callmethod(this, "x", [0]);
              var opresult1503 = callmethod(call1501, ">", [1], call1499);
              if (Grace_isTrue(opresult1503)) {
                lineNumber = 160
                onSelf = true;
                var call1504 = callmethod(this, "bounceFrom", [1], var_left);
                if1498 = call1504;
              }
              lineNumber = 165
              var if1505 = var_done;
              lineNumber = 162
              var call1506 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1508 = callmethod(this, "x", [0]);
              var opresult1510 = callmethod(call1508, "<", [1], call1506);
              if (Grace_isTrue(opresult1510)) {
                lineNumber = 163
                onSelf = true;
                var call1511 = callmethod(this, "bounceFrom", [1], var_right);
                if1505 = call1511;
              }
              lineNumber = 165
              var block1512 = Grace_allocObject();
              block1512.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1512.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1512.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1512.methods["match"] = GraceBlock_match;
              block1512.methods["prefix?"] = GraceBlock_lift;
              block1512.receiver = this;
              block1512.className = 'block<musical:165>';
              block1512.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1513 = callmethod(this, "touching", [1], var_other);
                return call1513;
              };
              lineNumber = 168
              var block1514 = Grace_allocObject();
              block1514.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1514.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1514.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1514.methods["match"] = GraceBlock_match;
              block1514.methods["prefix?"] = GraceBlock_lift;
              block1514.receiver = this;
              block1514.className = 'block<musical:168>';
              block1514.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1515 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1515;
              };
              var call1516 = callmethod(Grace_prelude,"while()do", [1, 1], block1512, block1514);
              return call1516
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1497.paramCounts = [
            1,
          ];
          func1497.variableArities = [
            false,
          ];
          obj1305.methods["bounceOff"] = func1497;
          func1497.definitionLine = 158;
          func1497.definitionModule = "musical";
          var func1517 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1517.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1518 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1519 = callmethod(this, "y", [0]);
              var call1520 = callmethod(var_point,"x()y", [1, 1], call1518, call1519);
              var call1521 = callmethod(var_other,"isPointOver", [1], call1520);
              return call1521
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1517.paramCounts = [
            1,
          ];
          func1517.variableArities = [
            false,
          ];
          obj1305.methods["touching"] = func1517;
          func1517.definitionLine = 169;
          func1517.definitionModule = "musical";
          var func1522 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1522.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1523 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1524 = callmethod(this, "y", [0]);
              var call1526 = callmethod(var_other,"y", [0]);
              var opresult1528 = callmethod(call1526, "!=", [1], call1524);
              onSelf = true;
              var call1530 = callmethod(this, "x", [0]);
              var call1532 = callmethod(var_other,"x", [0]);
              var opresult1534 = callmethod(call1532, "!=", [1], call1530);
              var opresult1536 = callmethod(opresult1534, "||", [1], opresult1528);
              if (Grace_isTrue(opresult1536)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1539 = callmethod(this, "x", [0]);
                var call1541 = callmethod(var_other,"x", [0]);
                var diff1543 = callmethod(call1541, "-", [1], call1539);
                onSelf = true;
                var call1544 = callmethod(this, "y", [0]);
                var call1546 = callmethod(var_other,"y", [0]);
                var diff1548 = callmethod(call1546, "-", [1], call1544);
                var call1549 = callmethod(var_trig,"atan2", [2], diff1543, diff1548);
                var prod1551 = callmethod(call1549, "*", [1], new GraceNum(180));
                var quotient1553 = callmethod(prod1551, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1554 = callmethod(this, "angle:=", [1], quotient1553);
                if1523 = call1554;
              }
              lineNumber = 176
              onSelf = true;
              var call1555 = callmethod(this, "normaliseAngle", [0]);
              return call1555
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1522.paramCounts = [
            1,
          ];
          func1522.variableArities = [
            false,
          ];
          obj1305.methods["face"] = func1522;
          func1522.definitionLine = 172;
          func1522.definitionModule = "musical";
          var func1556 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1556.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1557 = new GraceString("2d");
              var call1558 = callmethod(var_backingCanvas,"getContext", [1], string1557);
              onSelf = true;
              var call1559 = callmethod(this, "draw", [1], call1558);
              return call1559
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1556.paramCounts = [
            0,
          ];
          func1556.variableArities = [
            false,
          ];
          obj1305.methods["stamp"] = func1556;
          func1556.definitionLine = 178;
          func1556.definitionModule = "musical";
          sourceObject = obj1305;
          lineNumber = 49
          var call1560 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1561 = callmethod(call1560, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1562 = callmethod(call1561, "initialise", [0]);
          sourceObject = obj1305;
          lineNumber = 50
          var call1563 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1305;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1305;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1305;
          lineNumber = 53
          var call1564 = callmethod(var_collections,"list", [0]);
          var call1565 = callmethod(call1564,"new", [0]);
          obj1305.data["alwaysBlocks"] = call1565;
          var reader_musical_alwaysBlocks_1566 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1566.def = true;
          reader_musical_alwaysBlocks_1566.confidential = true;
          obj1305.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1566;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1565)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1305;
          lineNumber = 55
          lineNumber = 54
          var quotient1569 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1305.data["x"] = quotient1569;
          var reader_musical_x_1570 = function() {
            return this.data["x"];
          }
          obj1305.methods["x"] = reader_musical_x_1570;
          obj1305.data["x"] = quotient1569;
          var writer_musical_x_1570 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1305.methods["x:="] = writer_musical_x_1570;
          writer_musical_x_1570.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1569)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1305.mutable = true;
          sourceObject = obj1305;
          lineNumber = 56
          lineNumber = 55
          var quotient1573 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1305.data["y"] = quotient1573;
          var reader_musical_y_1574 = function() {
            return this.data["y"];
          }
          obj1305.methods["y"] = reader_musical_y_1574;
          obj1305.data["y"] = quotient1573;
          var writer_musical_y_1574 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1305.methods["y:="] = writer_musical_y_1574;
          writer_musical_y_1574.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1573)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1305.mutable = true;
          sourceObject = obj1305;
          lineNumber = 56
          onSelf = true;
          var call1575 = callmethod(this, "x", [0]);
          obj1305.data["destX"] = call1575;
          var reader_musical_destX_1576 = function() {
            return this.data["destX"];
          }
          obj1305.methods["destX"] = reader_musical_destX_1576;
          obj1305.data["destX"] = call1575;
          var writer_musical_destX_1576 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1305.methods["destX:="] = writer_musical_destX_1576;
          reader_musical_destX_1576.confidential = true;
          writer_musical_destX_1576.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1575)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1305.mutable = true;
          sourceObject = obj1305;
          lineNumber = 57
          onSelf = true;
          var call1577 = callmethod(this, "y", [0]);
          obj1305.data["destY"] = call1577;
          var reader_musical_destY_1578 = function() {
            return this.data["destY"];
          }
          obj1305.methods["destY"] = reader_musical_destY_1578;
          obj1305.data["destY"] = call1577;
          var writer_musical_destY_1578 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1305.methods["destY:="] = writer_musical_destY_1578;
          reader_musical_destY_1578.confidential = true;
          writer_musical_destY_1578.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1577)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1305.mutable = true;
          sourceObject = obj1305;
          lineNumber = 58
          obj1305.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1579 = function() {
            return this.data["angle"];
          }
          obj1305.methods["angle"] = reader_musical_angle_1579;
          obj1305.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1579 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1305.methods["angle:="] = writer_musical_angle_1579;
          reader_musical_angle_1579.confidential = true;
          writer_musical_angle_1579.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1305.mutable = true;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          sourceObject = obj1305;
          superDepth = origSuperDepth;
        }
        obj_init_1305.apply(obj1305, []);
        return obj1305
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1304.paramCounts = [
      0,
    ];
    func1304.variableArities = [
      false,
    ];
    obj1302.methods["new"] = func1304;
    func1304.definitionLine = 48;
    func1304.definitionModule = "musical";
    var func1580 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1581 = Grace_allocObject();
        obj1581.definitionModule = "musical";
        obj1581.definitionLine = 48;
        var inho1581 = inheritingObject;
        while (inho1581.superobj) inho1581 = inho1581.superobj;
        inho1581.superobj = obj1581;
        obj1581.data = inheritingObject.data;
        obj1581.outer = this;
        var reader_musical_outer_1582 = function() {
          return this.outer;
        }
        obj1581.methods["outer"] = reader_musical_outer_1582;
        function obj_init_1581() {
          var origSuperDepth = superDepth;
          superDepth = obj1581;
          obj1581.annotations = [];
          var func1583 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1583.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1584 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1585 = Grace_allocObject();
              block1585.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1585.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1585.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1585.methods["match"] = GraceBlock_match;
              block1585.methods["prefix?"] = GraceBlock_lift;
              block1585.receiver = this;
              block1585.className = 'block<musical:63>';
              block1585.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1586 = callmethod(var_b,"apply", [0]);
                return call1586;
              };
              var call1587 = callmethod(Grace_prelude,"for()do", [1, 1], call1584, block1585);
              lineNumber = 63
              onSelf = true;
              var call1588 = callmethod(this, "tick", [0]);
              return call1588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1583.paramCounts = [
            0,
          ];
          func1583.variableArities = [
            false,
          ];
          obj1581.methods["step"] = func1583;
          func1583.definitionLine = 59;
          func1583.definitionModule = "musical";
          var func1589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1589.paramCounts[0])
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
          func1589.paramCounts = [
            0,
          ];
          func1589.variableArities = [
            false,
          ];
          obj1581.methods["tick"] = func1589;
          func1589.definitionLine = 66;
          func1589.definitionModule = "musical";
          var func1590 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1590.paramCounts[0])
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
          func1590.paramCounts = [
            1,
          ];
          func1590.variableArities = [
            false,
          ];
          obj1581.methods["draw"] = func1590;
          func1590.definitionLine = 67;
          func1590.definitionModule = "musical";
          var func1591 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1592 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1593 = callmethod(this, "destX:=", [1], call1592);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1594 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1595 = callmethod(this, "destY:=", [1], call1594);
              return call1595
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
          obj1581.methods["moveTo"] = func1591;
          func1591.definitionLine = 68;
          func1591.definitionModule = "musical";
          var func1596 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1596.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1597 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1598 = callmethod(this, "x:=", [1], call1597);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1599 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1600 = callmethod(this, "y:=", [1], call1599);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1601 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1602 = callmethod(this, "destX:=", [1], call1601);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1603 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1604 = callmethod(this, "destY:=", [1], call1603);
              return call1604
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1596.paramCounts = [
            1,
          ];
          func1596.variableArities = [
            false,
          ];
          obj1581.methods["jumpTo"] = func1596;
          func1596.definitionLine = 72;
          func1596.definitionModule = "musical";
          var func1605 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1605.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1606 = new GraceBoolean(false)
              return bool1606
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1605.paramCounts = [
            1,
          ];
          func1605.variableArities = [
            false,
          ];
          obj1581.methods["isPointOver"] = func1605;
          func1605.definitionLine = 78;
          func1605.definitionModule = "musical";
          var func1607 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1607.paramCounts[0])
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
          func1607.paramCounts = [
            0,
          ];
          func1607.variableArities = [
            false,
          ];
          obj1581.methods["mousedown"] = func1607;
          func1607.definitionLine = 79;
          func1607.definitionModule = "musical";
          var func1608 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1609 = callmethod(this, "alwaysBlocks", [0]);
              var call1610 = callmethod(call1609,"push", [1], var_b);
              return call1610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1608.paramCounts = [
            1,
          ];
          func1608.variableArities = [
            false,
          ];
          obj1581.methods["always"] = func1608;
          func1608.definitionLine = 80;
          func1608.definitionModule = "musical";
          var func1611 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1611.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1611.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1612 = Grace_allocObject();
              block1612.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1612.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1612.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1612.methods["match"] = GraceBlock_match;
              block1612.methods["prefix?"] = GraceBlock_lift;
              block1612.receiver = this;
              block1612.className = 'block<musical:89>';
              block1612.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1613 = var_done;
                lineNumber = 85
                var call1614 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1614)) {
                  lineNumber = 86
                  var call1615 = callmethod(var_b,"apply", [0]);
                  if1613 = call1615;
                }
                return if1613;
              };
              onSelf = true;
              var call1616 = callmethod(this, "always", [1], block1612);
              return call1616
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
            1,
          ];
          func1611.variableArities = [
            false,
            false,
          ];
          obj1581.methods["whenever()do"] = func1611;
          func1611.definitionLine = 83;
          func1611.definitionModule = "musical";
          var func1617 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1621 = callmethod(this, "angle", [0]);
              var quotient1623 = callmethod(call1621, "/", [1], new GraceNum(180));
              var prod1625 = callmethod(quotient1623, "*", [1], var_PI);
              var call1626 = callmethod(var_trig,"cos", [1], prod1625);
              var prod1628 = callmethod(call1626, "*", [1], var_dist);
              var var_y__39__ = prod1628;
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
              var call1632 = callmethod(this, "angle", [0]);
              var quotient1634 = callmethod(call1632, "/", [1], new GraceNum(180));
              var prod1636 = callmethod(quotient1634, "*", [1], var_PI);
              var call1637 = callmethod(var_trig,"sin", [1], prod1636);
              var prod1639 = callmethod(call1637, "*", [1], var_dist);
              var var_x__39__ = prod1639;
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
              var call1641 = callmethod(this, "x", [0]);
              var opresult1643 = callmethod(call1641, "+", [1], var_x__39__);
              onSelf = true;
              var call1644 = callmethod(this, "x:=", [1], opresult1643);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1646 = callmethod(this, "y", [0]);
              var opresult1648 = callmethod(call1646, "+", [1], var_y__39__);
              onSelf = true;
              var call1649 = callmethod(this, "y:=", [1], opresult1648);
              return call1649
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
          obj1581.methods["forward"] = func1617;
          func1617.definitionLine = 90;
          func1617.definitionModule = "musical";
          var func1650 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1650.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1651 = Grace_allocObject();
              block1651.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1651.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1651.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1651.methods["match"] = GraceBlock_match;
              block1651.methods["prefix?"] = GraceBlock_lift;
              block1651.receiver = this;
              block1651.className = 'block<musical:97>';
              block1651.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1653 = callmethod(this, "angle", [0]);
                var opresult1655 = callmethod(call1653, "<", [1], new GraceNum(0));
                return opresult1655;
              };
              lineNumber = 100
              var block1656 = Grace_allocObject();
              block1656.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1656.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1656.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1656.methods["match"] = GraceBlock_match;
              block1656.methods["prefix?"] = GraceBlock_lift;
              block1656.receiver = this;
              block1656.className = 'block<musical:100>';
              block1656.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1658 = callmethod(this, "angle", [0]);
                var opresult1660 = callmethod(call1658, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1661 = callmethod(this, "angle:=", [1], opresult1660);
                return call1661;
              };
              var call1662 = callmethod(Grace_prelude,"while()do", [1, 1], block1651, block1656);
              lineNumber = 100
              var block1663 = Grace_allocObject();
              block1663.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1663.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1663.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1663.methods["match"] = GraceBlock_match;
              block1663.methods["prefix?"] = GraceBlock_lift;
              block1663.receiver = this;
              block1663.className = 'block<musical:100>';
              block1663.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1665 = callmethod(this, "angle", [0]);
                var opresult1667 = callmethod(call1665, ">", [1], new GraceNum(360));
                return opresult1667;
              };
              lineNumber = 103
              var block1668 = Grace_allocObject();
              block1668.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1668.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1668.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1668.methods["match"] = GraceBlock_match;
              block1668.methods["prefix?"] = GraceBlock_lift;
              block1668.receiver = this;
              block1668.className = 'block<musical:103>';
              block1668.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1670 = callmethod(this, "angle", [0]);
                var diff1672 = callmethod(call1670, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1673 = callmethod(this, "angle:=", [1], diff1672);
                return call1673;
              };
              var call1674 = callmethod(Grace_prelude,"while()do", [1, 1], block1663, block1668);
              return call1674
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
          obj1581.methods["normaliseAngle"] = func1650;
          func1650.definitionLine = 96;
          func1650.definitionModule = "musical";
          var func1675 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1675.paramCounts[0])
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
              var call1677 = callmethod(this, "angle", [0]);
              var opresult1679 = callmethod(call1677, "+", [1], var_degrees);
              onSelf = true;
              var call1680 = callmethod(this, "angle:=", [1], opresult1679);
              lineNumber = 106
              onSelf = true;
              var call1681 = callmethod(this, "normaliseAngle", [0]);
              return call1681
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1675.paramCounts = [
            1,
          ];
          func1675.variableArities = [
            false,
          ];
          obj1581.methods["turn"] = func1675;
          func1675.definitionLine = 104;
          func1675.definitionModule = "musical";
          var func1682 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1682.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1683 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1684 = callmethod(this, "x", [0]);
              var call1685 = callmethod(var_point,"x()y", [1, 1], call1684, new GraceNum(0));
              onSelf = true;
              var call1686 = callmethod(this, "isPointOver", [1], call1685);
              if (Grace_isTrue(call1686)) {
                lineNumber = 111
                lineNumber = 110
                var bool1687 = new GraceBoolean(true)
                return bool1687
              }
              lineNumber = 115
              var if1688 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1689 = callmethod(this, "x", [0]);
              var call1690 = callmethod(var_point,"x()y", [1, 1], call1689, var_canvasHeight);
              onSelf = true;
              var call1691 = callmethod(this, "isPointOver", [1], call1690);
              if (Grace_isTrue(call1691)) {
                lineNumber = 114
                lineNumber = 113
                var bool1692 = new GraceBoolean(true)
                return bool1692
              }
              lineNumber = 118
              var if1693 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1694 = callmethod(this, "y", [0]);
              var call1695 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1694);
              onSelf = true;
              var call1696 = callmethod(this, "isPointOver", [1], call1695);
              if (Grace_isTrue(call1696)) {
                lineNumber = 117
                lineNumber = 116
                var bool1697 = new GraceBoolean(true)
                return bool1697
              }
              lineNumber = 121
              var if1698 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1699 = callmethod(this, "y", [0]);
              var call1700 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1699);
              onSelf = true;
              var call1701 = callmethod(this, "isPointOver", [1], call1700);
              if (Grace_isTrue(call1701)) {
                lineNumber = 120
                lineNumber = 119
                var bool1702 = new GraceBoolean(true)
                return bool1702
              }
              lineNumber = 122
              lineNumber = 121
              var bool1703 = new GraceBoolean(false)
              return bool1703
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1682.paramCounts = [
            0,
          ];
          func1682.variableArities = [
            false,
          ];
          obj1581.methods["touchingEdge"] = func1682;
          func1682.definitionLine = 108;
          func1682.definitionModule = "musical";
          var func1704 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1704.paramCounts[0])
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
              var if1705 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1706 = callmethod(this, "x", [0]);
              var call1707 = callmethod(var_point,"x()y", [1, 1], call1706, new GraceNum(0));
              onSelf = true;
              var call1708 = callmethod(this, "isPointOver", [1], call1707);
              if (Grace_isTrue(call1708)) {
                lineNumber = 127
                onSelf = true;
                var call1709 = callmethod(this, "bounceFrom", [1], var_top);
                if1705 = call1709;
              }
              lineNumber = 132
              var if1710 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1711 = callmethod(this, "x", [0]);
              var call1712 = callmethod(var_point,"x()y", [1, 1], call1711, var_canvasHeight);
              onSelf = true;
              var call1713 = callmethod(this, "isPointOver", [1], call1712);
              if (Grace_isTrue(call1713)) {
                lineNumber = 130
                onSelf = true;
                var call1714 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1710 = call1714;
              }
              lineNumber = 135
              var if1715 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1716 = callmethod(this, "y", [0]);
              var call1717 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1716);
              onSelf = true;
              var call1718 = callmethod(this, "isPointOver", [1], call1717);
              if (Grace_isTrue(call1718)) {
                lineNumber = 133
                onSelf = true;
                var call1719 = callmethod(this, "bounceFrom", [1], var_left);
                if1715 = call1719;
              }
              lineNumber = 138
              var if1720 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1721 = callmethod(this, "y", [0]);
              var call1722 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1721);
              onSelf = true;
              var call1723 = callmethod(this, "isPointOver", [1], call1722);
              if (Grace_isTrue(call1723)) {
                lineNumber = 136
                onSelf = true;
                var call1724 = callmethod(this, "bounceFrom", [1], var_right);
                if1720 = call1724;
              }
              lineNumber = 138
              var block1725 = Grace_allocObject();
              block1725.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1725.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1725.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1725.methods["match"] = GraceBlock_match;
              block1725.methods["prefix?"] = GraceBlock_lift;
              block1725.receiver = this;
              block1725.className = 'block<musical:138>';
              block1725.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1726 = callmethod(this, "touchingEdge", [0]);
                return call1726;
              };
              lineNumber = 141
              var block1727 = Grace_allocObject();
              block1727.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1727.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1727.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1727.methods["match"] = GraceBlock_match;
              block1727.methods["prefix?"] = GraceBlock_lift;
              block1727.receiver = this;
              block1727.className = 'block<musical:141>';
              block1727.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1728 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1728;
              };
              var call1729 = callmethod(Grace_prelude,"while()do", [1, 1], block1725, block1727);
              return call1729
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1704.paramCounts = [
            0,
          ];
          func1704.variableArities = [
            false,
          ];
          obj1581.methods["bounce"] = func1704;
          func1704.definitionLine = 123;
          func1704.definitionModule = "musical";
          var func1730 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1730.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1731 = var_done;
              lineNumber = 143
              var string1732 = new GraceString("left");
              var opresult1735 = callmethod(var_dir, "==", [1], string1732);
              if (Grace_isTrue(opresult1735)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1736 = callmethod(this, "angle", [0]);
                var diff1739 = callmethod(new GraceNum(360), "-", [1], call1736);
                onSelf = true;
                var call1740 = callmethod(this, "angle:=", [1], diff1739);
                if1731 = call1740;
              }
              lineNumber = 149
              var if1741 = var_done;
              lineNumber = 146
              var string1742 = new GraceString("right");
              var opresult1745 = callmethod(var_dir, "==", [1], string1742);
              if (Grace_isTrue(opresult1745)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1746 = callmethod(this, "angle", [0]);
                var diff1749 = callmethod(new GraceNum(360), "-", [1], call1746);
                onSelf = true;
                var call1750 = callmethod(this, "angle:=", [1], diff1749);
                if1741 = call1750;
              }
              lineNumber = 152
              var if1751 = var_done;
              lineNumber = 149
              var string1752 = new GraceString("top");
              var opresult1755 = callmethod(var_dir, "==", [1], string1752);
              if (Grace_isTrue(opresult1755)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1756 = callmethod(this, "angle", [0]);
                var diff1759 = callmethod(new GraceNum(180), "-", [1], call1756);
                onSelf = true;
                var call1760 = callmethod(this, "angle:=", [1], diff1759);
                if1751 = call1760;
              }
              lineNumber = 155
              var if1761 = var_done;
              lineNumber = 152
              var string1762 = new GraceString("bottom");
              var opresult1765 = callmethod(var_dir, "==", [1], string1762);
              if (Grace_isTrue(opresult1765)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1766 = callmethod(this, "angle", [0]);
                var diff1769 = callmethod(new GraceNum(180), "-", [1], call1766);
                onSelf = true;
                var call1770 = callmethod(this, "angle:=", [1], diff1769);
                if1761 = call1770;
              }
              lineNumber = 155
              onSelf = true;
              var call1771 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1772 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1772
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1730.paramCounts = [
            1,
          ];
          func1730.variableArities = [
            false,
          ];
          obj1581.methods["bounceFrom"] = func1730;
          func1730.definitionLine = 142;
          func1730.definitionModule = "musical";
          var func1773 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1773.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1774 = var_done;
              lineNumber = 159
              var call1775 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1777 = callmethod(this, "x", [0]);
              var opresult1779 = callmethod(call1777, ">", [1], call1775);
              if (Grace_isTrue(opresult1779)) {
                lineNumber = 160
                onSelf = true;
                var call1780 = callmethod(this, "bounceFrom", [1], var_left);
                if1774 = call1780;
              }
              lineNumber = 165
              var if1781 = var_done;
              lineNumber = 162
              var call1782 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1784 = callmethod(this, "x", [0]);
              var opresult1786 = callmethod(call1784, "<", [1], call1782);
              if (Grace_isTrue(opresult1786)) {
                lineNumber = 163
                onSelf = true;
                var call1787 = callmethod(this, "bounceFrom", [1], var_right);
                if1781 = call1787;
              }
              lineNumber = 165
              var block1788 = Grace_allocObject();
              block1788.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1788.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1788.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1788.methods["match"] = GraceBlock_match;
              block1788.methods["prefix?"] = GraceBlock_lift;
              block1788.receiver = this;
              block1788.className = 'block<musical:165>';
              block1788.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1789 = callmethod(this, "touching", [1], var_other);
                return call1789;
              };
              lineNumber = 168
              var block1790 = Grace_allocObject();
              block1790.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1790.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1790.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1790.methods["match"] = GraceBlock_match;
              block1790.methods["prefix?"] = GraceBlock_lift;
              block1790.receiver = this;
              block1790.className = 'block<musical:168>';
              block1790.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1791 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1791;
              };
              var call1792 = callmethod(Grace_prelude,"while()do", [1, 1], block1788, block1790);
              return call1792
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1773.paramCounts = [
            1,
          ];
          func1773.variableArities = [
            false,
          ];
          obj1581.methods["bounceOff"] = func1773;
          func1773.definitionLine = 158;
          func1773.definitionModule = "musical";
          var func1793 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1793.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1794 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1795 = callmethod(this, "y", [0]);
              var call1796 = callmethod(var_point,"x()y", [1, 1], call1794, call1795);
              var call1797 = callmethod(var_other,"isPointOver", [1], call1796);
              return call1797
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1793.paramCounts = [
            1,
          ];
          func1793.variableArities = [
            false,
          ];
          obj1581.methods["touching"] = func1793;
          func1793.definitionLine = 169;
          func1793.definitionModule = "musical";
          var func1798 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1798.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1799 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1800 = callmethod(this, "y", [0]);
              var call1802 = callmethod(var_other,"y", [0]);
              var opresult1804 = callmethod(call1802, "!=", [1], call1800);
              onSelf = true;
              var call1806 = callmethod(this, "x", [0]);
              var call1808 = callmethod(var_other,"x", [0]);
              var opresult1810 = callmethod(call1808, "!=", [1], call1806);
              var opresult1812 = callmethod(opresult1810, "||", [1], opresult1804);
              if (Grace_isTrue(opresult1812)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1815 = callmethod(this, "x", [0]);
                var call1817 = callmethod(var_other,"x", [0]);
                var diff1819 = callmethod(call1817, "-", [1], call1815);
                onSelf = true;
                var call1820 = callmethod(this, "y", [0]);
                var call1822 = callmethod(var_other,"y", [0]);
                var diff1824 = callmethod(call1822, "-", [1], call1820);
                var call1825 = callmethod(var_trig,"atan2", [2], diff1819, diff1824);
                var prod1827 = callmethod(call1825, "*", [1], new GraceNum(180));
                var quotient1829 = callmethod(prod1827, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1830 = callmethod(this, "angle:=", [1], quotient1829);
                if1799 = call1830;
              }
              lineNumber = 176
              onSelf = true;
              var call1831 = callmethod(this, "normaliseAngle", [0]);
              return call1831
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1798.paramCounts = [
            1,
          ];
          func1798.variableArities = [
            false,
          ];
          obj1581.methods["face"] = func1798;
          func1798.definitionLine = 172;
          func1798.definitionModule = "musical";
          var func1832 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1832.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1833 = new GraceString("2d");
              var call1834 = callmethod(var_backingCanvas,"getContext", [1], string1833);
              onSelf = true;
              var call1835 = callmethod(this, "draw", [1], call1834);
              return call1835
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1832.paramCounts = [
            0,
          ];
          func1832.variableArities = [
            false,
          ];
          obj1581.methods["stamp"] = func1832;
          func1832.definitionLine = 178;
          func1832.definitionModule = "musical";
          sourceObject = obj1581;
          lineNumber = 49
          var call1836 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1837 = callmethod(call1836, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1838 = callmethod(call1837, "initialise", [0]);
          sourceObject = obj1581;
          lineNumber = 50
          var call1839 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1581;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1581;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1581;
          lineNumber = 53
          var call1840 = callmethod(var_collections,"list", [0]);
          var call1841 = callmethod(call1840,"new", [0]);
          obj1581.data["alwaysBlocks"] = call1841;
          var reader_musical_alwaysBlocks_1842 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1842.def = true;
          reader_musical_alwaysBlocks_1842.confidential = true;
          obj1581.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1842;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1841)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1581;
          lineNumber = 55
          lineNumber = 54
          var quotient1845 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1581.data["x"] = quotient1845;
          var reader_musical_x_1846 = function() {
            return this.data["x"];
          }
          obj1581.methods["x"] = reader_musical_x_1846;
          obj1581.data["x"] = quotient1845;
          var writer_musical_x_1846 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1581.methods["x:="] = writer_musical_x_1846;
          writer_musical_x_1846.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1845)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1581.mutable = true;
          sourceObject = obj1581;
          lineNumber = 56
          lineNumber = 55
          var quotient1849 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1581.data["y"] = quotient1849;
          var reader_musical_y_1850 = function() {
            return this.data["y"];
          }
          obj1581.methods["y"] = reader_musical_y_1850;
          obj1581.data["y"] = quotient1849;
          var writer_musical_y_1850 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1581.methods["y:="] = writer_musical_y_1850;
          writer_musical_y_1850.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1849)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1581.mutable = true;
          sourceObject = obj1581;
          lineNumber = 56
          onSelf = true;
          var call1851 = callmethod(this, "x", [0]);
          obj1581.data["destX"] = call1851;
          var reader_musical_destX_1852 = function() {
            return this.data["destX"];
          }
          obj1581.methods["destX"] = reader_musical_destX_1852;
          obj1581.data["destX"] = call1851;
          var writer_musical_destX_1852 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1581.methods["destX:="] = writer_musical_destX_1852;
          reader_musical_destX_1852.confidential = true;
          writer_musical_destX_1852.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1851)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1581.mutable = true;
          sourceObject = obj1581;
          lineNumber = 57
          onSelf = true;
          var call1853 = callmethod(this, "y", [0]);
          obj1581.data["destY"] = call1853;
          var reader_musical_destY_1854 = function() {
            return this.data["destY"];
          }
          obj1581.methods["destY"] = reader_musical_destY_1854;
          obj1581.data["destY"] = call1853;
          var writer_musical_destY_1854 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1581.methods["destY:="] = writer_musical_destY_1854;
          reader_musical_destY_1854.confidential = true;
          writer_musical_destY_1854.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1853)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1581.mutable = true;
          sourceObject = obj1581;
          lineNumber = 58
          obj1581.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1855 = function() {
            return this.data["angle"];
          }
          obj1581.methods["angle"] = reader_musical_angle_1855;
          obj1581.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1855 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1581.methods["angle:="] = writer_musical_angle_1855;
          reader_musical_angle_1855.confidential = true;
          writer_musical_angle_1855.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1581.mutable = true;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          sourceObject = obj1581;
          superDepth = origSuperDepth;
        }
        obj_init_1581.apply(inheritingObject, []);
        return obj1581
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1302.methods["new()object"] = func1580;
    var func1856 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1857 = new GraceString("class drawable");
        return string1857
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1856.paramCounts = [
    ];
    func1856.variableArities = [
    ];
    obj1302.methods["asDebugString"] = func1856;
    func1856.definitionLine = 48;
    func1856.definitionModule = "musical";
    sourceObject = obj1302;
    sourceObject = obj1302;
    superDepth = origSuperDepth;
  }
  obj_init_1302.apply(obj1302, []);
  var var_drawable = obj1302;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1858 = Grace_allocObject();
  obj1858.definitionModule = "musical";
  obj1858.definitionLine = 316;
  obj1858.outer = this;
  var reader_musical_outer_1859 = function() {
    return this.outer;
  }
  obj1858.methods["outer"] = reader_musical_outer_1859;
  function obj_init_1858() {
    var origSuperDepth = superDepth;
    superDepth = obj1858;
    obj1858.annotations = [];
    var func1860 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1860.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1861 = callmethod(this, "position", [0]);
        var call1862 = callmethod(call1861,"x", [0]);
        return call1862
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1860.paramCounts = [
      0,
    ];
    func1860.variableArities = [
      false,
    ];
    obj1858.methods["x"] = func1860;
    func1860.definitionLine = 318;
    func1860.definitionModule = "musical";
    var func1863 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1863.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1864 = callmethod(this, "position", [0]);
        var call1865 = callmethod(call1864,"y", [0]);
        return call1865
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1863.paramCounts = [
      0,
    ];
    func1863.variableArities = [
      false,
    ];
    obj1858.methods["y"] = func1863;
    func1863.definitionLine = 321;
    func1863.definitionModule = "musical";
    var func1866 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1866.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1867 = callmethod(this, "position", [0]);
        return call1867
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
    obj1858.methods["location"] = func1866;
    func1866.definitionLine = 324;
    func1866.definitionModule = "musical";
    sourceObject = obj1858;
    lineNumber = 317
    var call1868 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1858.data["position"] = call1868;
    var reader_musical_position_1869 = function() {
      return this.data["position"];
    }
    obj1858.methods["position"] = reader_musical_position_1869;
    obj1858.data["position"] = call1868;
    var writer_musical_position_1869 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1858.methods["position:="] = writer_musical_position_1869;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1868)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1858.mutable = true;
    sourceObject = obj1858;
    sourceObject = obj1858;
    sourceObject = obj1858;
    superDepth = origSuperDepth;
  }
  obj_init_1858.apply(obj1858, []);
  var var_mouse = obj1858;
  lineNumber = 322
  var func1870 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1870.paramCounts[0])
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
  func1870.paramCounts = [
    0,
  ];
  func1870.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1870;
  func1870.definitionLine = 322;
  func1870.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 409
  lineNumber = 472
  lineNumber = 507
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1871 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1871.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 507
      return var_octave
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1871.paramCounts = [
    0,
  ];
  func1871.variableArities = [
    false,
  ];
  this.methods["octave"] = func1871;
  func1871.definitionLine = 322;
  func1871.definitionModule = "musical";
  lineNumber = 322
  var func1872 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1872.paramCounts[0])
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
  func1872.paramCounts = [
    1,
  ];
  func1872.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1872;
  func1872.definitionLine = 322;
  func1872.definitionModule = "musical";
  lineNumber = 507;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 509
  lineNumber = 510
  lineNumber = 509
  var bool1873 = new GraceBoolean(false)
  var var_applyFlat = bool1873;
  lineNumber = 322
  var func1874 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1874.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 509
      return var_applyFlat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1874.paramCounts = [
    0,
  ];
  func1874.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1874;
  func1874.definitionLine = 322;
  func1874.definitionModule = "musical";
  lineNumber = 322
  var func1875 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1875.paramCounts[0])
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
  func1875.paramCounts = [
    1,
  ];
  func1875.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1875;
  func1875.definitionLine = 322;
  func1875.definitionModule = "musical";
  lineNumber = 510;
  moduleName = "musical";
  lineNumber = 509
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 512
  lineNumber = 510
  var bool1876 = new GraceBoolean(false)
  var var_applySharp = bool1876;
  lineNumber = 322
  var func1877 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1877.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 510
      return var_applySharp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1877.paramCounts = [
    0,
  ];
  func1877.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1877;
  func1877.definitionLine = 322;
  func1877.definitionModule = "musical";
  lineNumber = 322
  var func1878 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1878.paramCounts[0])
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
  func1878.paramCounts = [
    1,
  ];
  func1878.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1878;
  func1878.definitionLine = 322;
  func1878.definitionModule = "musical";
  lineNumber = 512;
  moduleName = "musical";
  lineNumber = 510
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 512
  lineNumber = 513
  lineNumber = 512
  var bool1879 = new GraceBoolean(false)
  var var_applyChorus = bool1879;
  lineNumber = 322
  var func1880 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1880.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 512
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1880.paramCounts = [
    0,
  ];
  func1880.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1880;
  func1880.definitionLine = 322;
  func1880.definitionModule = "musical";
  lineNumber = 322
  var func1881 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1881.paramCounts[0])
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
  func1881.paramCounts = [
    1,
  ];
  func1881.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1881;
  func1881.definitionLine = 322;
  func1881.definitionModule = "musical";
  lineNumber = 513;
  moduleName = "musical";
  lineNumber = 512
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 514
  lineNumber = 513
  var bool1882 = new GraceBoolean(false)
  var var_applyReverb = bool1882;
  lineNumber = 322
  var func1883 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1883.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 513
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1883.paramCounts = [
    0,
  ];
  func1883.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1883;
  func1883.definitionLine = 322;
  func1883.definitionModule = "musical";
  lineNumber = 322
  var func1884 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1884.paramCounts[0])
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
  func1884.paramCounts = [
    1,
  ];
  func1884.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1884;
  func1884.definitionLine = 322;
  func1884.definitionModule = "musical";
  lineNumber = 514;
  moduleName = "musical";
  lineNumber = 513
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 515
  lineNumber = 514
  var bool1885 = new GraceBoolean(false)
  var var_applyAutowah = bool1885;
  lineNumber = 322
  var func1886 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1886.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 514
      return var_applyAutowah
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
  this.methods["applyAutowah"] = func1886;
  func1886.definitionLine = 322;
  func1886.definitionModule = "musical";
  lineNumber = 322
  var func1887 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1887.paramCounts[0])
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
  func1887.paramCounts = [
    1,
  ];
  func1887.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1887;
  func1887.definitionLine = 322;
  func1887.definitionModule = "musical";
  lineNumber = 515;
  moduleName = "musical";
  lineNumber = 514
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 517
  lineNumber = 515
  var bool1888 = new GraceBoolean(false)
  var var_applyCheby = bool1888;
  lineNumber = 322
  var func1889 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1889.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 515
      return var_applyCheby
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
  this.methods["applyCheby"] = func1889;
  func1889.definitionLine = 322;
  func1889.definitionModule = "musical";
  lineNumber = 322
  var func1890 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1890.paramCounts[0])
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
  func1890.paramCounts = [
    1,
  ];
  func1890.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1890;
  func1890.definitionLine = 322;
  func1890.definitionModule = "musical";
  lineNumber = 517;
  moduleName = "musical";
  lineNumber = 515
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 517
  lineNumber = 522
  lineNumber = 517
  var bool1891 = new GraceBoolean(true)
  var var_firstPass = bool1891;
  lineNumber = 322
  var func1892 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1892.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 517
      return var_firstPass
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
  this.methods["firstPass"] = func1892;
  func1892.definitionLine = 322;
  func1892.definitionModule = "musical";
  lineNumber = 322
  var func1893 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1893.paramCounts[0])
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
  func1893.paramCounts = [
    1,
  ];
  func1893.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1893;
  func1893.definitionLine = 322;
  func1893.definitionModule = "musical";
  lineNumber = 522;
  moduleName = "musical";
  lineNumber = 517
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 522
  lineNumber = 556
  lineNumber = 567
  lineNumber = 574
  lineNumber = 585
  lineNumber = 594
  lineNumber = 599
  lineNumber = 604
  lineNumber = 609
  lineNumber = 614
  lineNumber = 619
  lineNumber = 624
  lineNumber = 631
  lineNumber = 648
  lineNumber = 654
  lineNumber = 660
  lineNumber = 666
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "fresh:rectangle:\n destX:=\n asString\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n width\n isPointOver\n stamp\n angle\n whenever()do\n colour:=\n touching\n height:=\n bounceOff\n height\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n width:=\n bounce\n mousedown\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\nconstructors-of:point:\n x()y\nfresh:circle:\n destX:=\n radius:=\n touching\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n isPointOver\n stamp\n angle\n whenever()do\n colour:=\n mousedown\n bounceOff\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n bounce\n radius\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n Rest\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nmethods-of:point.x()y:\n right\n down\n up\n x\n y\n left\nmethods-of:drawable.new:\n destX:=\n destY:=\n jumpTo\n destX\n destY\n x:=\n y:=\n always\n forward\n touchingEdge\n x\n y\n step\n bounce\n angle:=\n mousedown\n isPointOver\n stamp\n angle\n whenever()do\n turn\n tick\n touching\n draw\n alwaysBlocks\n normaliseAngle\n face\n bounceOff\n bounceFrom\n moveTo\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n destX:=\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n label\n isPointOver\n stamp\n angle\n whenever()do\n colour:=\n touching\n bounceOff\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n label:=\n bounce\n mousedown\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\nconfidential:\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:image:\n destX:=\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n width\n isPointOver\n stamp\n angle\n whenever()do\n touching\n height:=\n bounceOff\n height\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n width:=\n imgTag\n bounce\n mousedown\n turn\n url:=\n tick\n draw\n alwaysBlocks\n normaliseAngle\n url\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\n";
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
