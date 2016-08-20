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
      lineNumber = 433
      var string942 = new GraceString("start");
      var call943 = callmethod(var_dom,"window", [0]);
      var call944 = callmethod(call943,"console", [0]);
      var call945 = callmethod(call944,"log", [1], string942);
      lineNumber = 435
      lineNumber = 434
      var bool946 = new GraceBoolean(false)
      var_stopRunning = bool946;
      lineNumber = 435
      var string947 = new GraceString("canvas");
      var call948 = callmethod(var_dom,"document", [0]);
      var call949 = callmethod(call948,"createElement", [1], string947);
      var_backingCanvas = call949;
      lineNumber = 437
      lineNumber = 435
      lineNumber = 436
      var call950 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 438
      lineNumber = 435
      lineNumber = 437
      var call951 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 438
      var string952 = new GraceString("2d");
      var call953 = callmethod(var_backingCanvas,"getContext", [1], string952);
      var_backingContext = call953;
      lineNumber = 439
      var string954 = new GraceString("2d");
      var call955 = callmethod(var_canvas,"getContext", [1], string954);
      var var_mctx = call955;
      lineNumber = 439;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 440
      var block956 = Grace_allocObject();
      block956.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block956.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block956.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block956.methods["match"] = GraceBlock_match;
      block956.methods["prefix?"] = GraceBlock_lift;
      block956.receiver = this;
      block956.className = 'block<musical:440>';
      block956.real = function(
      ) {
        sourceObject = this;
        var call957 = callmethod(var_stopRunning,"prefix!", [0]);
        return call957;
      };
      lineNumber = 457
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
      block958.className = 'block<musical:457>';
      block958.real = function(
      ) {
        sourceObject = this;
        lineNumber = 441
        lineNumber = 444
        var block959 = Grace_allocObject();
        block959.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block959.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block959.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block959.methods["match"] = GraceBlock_match;
        block959.methods["prefix?"] = GraceBlock_lift;
        block959.receiver = this;
        block959.className = 'block<musical:444>';
        block959.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 442
          var call960 = callmethod(var_obj,"step", [0]);
          return call960;
        };
        var call961 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block959);
        lineNumber = 444
        lineNumber = 447
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
        block962.className = 'block<musical:447>';
        block962.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 445
          var call963 = callmethod(var_step,"apply", [0]);
          return call963;
        };
        var call964 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block962);
        lineNumber = 448
        lineNumber = 445
        lineNumber = 447
        var call965 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 448
        var call966 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 449
        var call967 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 450
        lineNumber = 453
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
        block968.className = 'block<musical:453>';
        block968.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 451
          var call969 = callmethod(var_obj,"draw", [1], var_mctx);
          return call969;
        };
        var call970 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block968);
        lineNumber = 454
        lineNumber = 445
        lineNumber = 453
        var string971 = new GraceString("red");
        var call972 = callmethod(var_mctx,"fillStyle:=", [1], string971);
        lineNumber = 454
        var diff975 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call976 = callmethod(var_mctx,"fillRect", [4], diff975, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call976;
      };
      lineNumber = 440
      var call977 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block956, new GraceNum(10), block958);
      lineNumber = 457
      var call978 = callmethod(var_dom,"window", [0]);
      var call979 = callmethod(call978,"t_stop", [0]);
      return call979
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
  var func980 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func980.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 462
      lineNumber = 461
      var bool981 = new GraceBoolean(true)
      var_stopRunning = bool981;
      lineNumber = 462
      var string982 = new GraceString("mousedown");
      var call983 = callmethod(var_canvas,"removeEventListener", [2], string982, var_mouseDownListener);
      lineNumber = 463
      var string984 = new GraceString("mousemove");
      var call985 = callmethod(var_canvas,"removeEventListener", [2], string984, var_mouseMoveListener);
      lineNumber = 465
      var call986 = callmethod(var_dom,"window", [0]);
      var call987 = callmethod(call986,"t_stop", [0]);
      return call987
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func980.paramCounts = [
    0,
  ];
  func980.variableArities = [
    false,
  ];
  this.methods["stop"] = func980;
  func980.definitionLine = 460;
  func980.definitionModule = "musical";
  lineNumber = 467
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
      lineNumber = 468
      onSelf = true;
      var call989 = callmethod(this, "start", [0]);
      lineNumber = 470
      var call990 = callmethod(var_dom,"window", [0]);
      var call991 = callmethod(call990,"t_play", [0]);
      lineNumber = 471
      var string992 = new GraceString("moduleend");
      var call993 = callmethod(var_dom,"window", [0]);
      var call994 = callmethod(call993,"console", [0]);
      var call995 = callmethod(call994,"log", [1], string992);
      return call995
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
  func988.definitionLine = 467;
  func988.definitionModule = "musical";
  lineNumber = 494
  var func996 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func996.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 499
      var if997 = var_done;
      lineNumber = 495
      var bool998 = new GraceBoolean(true)
      var opresult1001 = callmethod(var_applyFlat, "==", [1], bool998);
      if (Grace_isTrue(opresult1001)) {
        lineNumber = 496
        var string1002 = new GraceString("b4");
        var string1005 = new GraceString("");
        var opresult1007 = callmethod(string1005, "++", [1], var_note);
        var opresult1009 = callmethod(opresult1007, "++", [1], string1002);
        var call1010 = callmethod(var_dom,"window", [0]);
        var call1011 = callmethod(call1010,"t_add", [1], opresult1009);
        lineNumber = 498
        return var_done
      }
      lineNumber = 503
      var if1012 = var_done;
      lineNumber = 499
      var bool1013 = new GraceBoolean(true)
      var opresult1016 = callmethod(var_applySharp, "==", [1], bool1013);
      if (Grace_isTrue(opresult1016)) {
        lineNumber = 500
        var string1017 = new GraceString("####4");
        var string1020 = new GraceString("");
        var opresult1022 = callmethod(string1020, "++", [1], var_note);
        var opresult1024 = callmethod(opresult1022, "++", [1], string1017);
        var call1025 = callmethod(var_dom,"window", [0]);
        var call1026 = callmethod(call1025,"t_add", [1], opresult1024);
        lineNumber = 502
        return var_done
      }
      lineNumber = 503
      var string1027 = new GraceString("4");
      var string1030 = new GraceString("");
      var opresult1032 = callmethod(string1030, "++", [1], var_note);
      var opresult1034 = callmethod(opresult1032, "++", [1], string1027);
      var call1035 = callmethod(var_dom,"window", [0]);
      var call1036 = callmethod(call1035,"t_add", [1], opresult1034);
      return call1036
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
  this.methods["Note"] = func996;
  func996.definitionLine = 494;
  func996.definitionModule = "musical";
  lineNumber = 506
  var func1037 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1037.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 507
      var string1038 = new GraceString("C");
      onSelf = true;
      var call1039 = callmethod(this, "Note", [1], string1038);
      return call1039
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
  this.methods["C"] = func1037;
  func1037.definitionLine = 506;
  func1037.definitionModule = "musical";
  lineNumber = 509
  var func1040 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1040.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 510
      var string1041 = new GraceString("D");
      onSelf = true;
      var call1042 = callmethod(this, "Note", [1], string1041);
      return call1042
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
  this.methods["D"] = func1040;
  func1040.definitionLine = 509;
  func1040.definitionModule = "musical";
  lineNumber = 512
  var func1043 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1043.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 513
      var string1044 = new GraceString("E");
      onSelf = true;
      var call1045 = callmethod(this, "Note", [1], string1044);
      return call1045
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
  this.methods["E"] = func1043;
  func1043.definitionLine = 512;
  func1043.definitionModule = "musical";
  lineNumber = 515
  var func1046 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1046.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 516
      var string1047 = new GraceString("F");
      onSelf = true;
      var call1048 = callmethod(this, "Note", [1], string1047);
      return call1048
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
  this.methods["F"] = func1046;
  func1046.definitionLine = 515;
  func1046.definitionModule = "musical";
  lineNumber = 518
  var func1049 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1049.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 519
      var string1050 = new GraceString("G");
      onSelf = true;
      var call1051 = callmethod(this, "Note", [1], string1050);
      return call1051
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
  this.methods["G"] = func1049;
  func1049.definitionLine = 518;
  func1049.definitionModule = "musical";
  lineNumber = 521
  var func1052 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1052.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 522
      var string1053 = new GraceString("A");
      onSelf = true;
      var call1054 = callmethod(this, "Note", [1], string1053);
      return call1054
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1052.paramCounts = [
    0,
  ];
  func1052.variableArities = [
    false,
  ];
  this.methods["A"] = func1052;
  func1052.definitionLine = 521;
  func1052.definitionModule = "musical";
  lineNumber = 524
  var func1055 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1055.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 525
      var string1056 = new GraceString("B");
      onSelf = true;
      var call1057 = callmethod(this, "Note", [1], string1056);
      return call1057
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1055.paramCounts = [
    0,
  ];
  func1055.variableArities = [
    false,
  ];
  this.methods["B"] = func1055;
  func1055.definitionLine = 524;
  func1055.definitionModule = "musical";
  lineNumber = 528
  var func1058 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1058.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 530
      lineNumber = 529
      var bool1059 = new GraceBoolean(true)
      var_applyFlat = bool1059;
      lineNumber = 530
      var call1060 = callmethod(var_note,"apply", [0]);
      lineNumber = 532
      lineNumber = 531
      var bool1061 = new GraceBoolean(false)
      var_applyFlat = bool1061;
      return bool1061
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1058.paramCounts = [
    1,
  ];
  func1058.variableArities = [
    false,
  ];
  this.methods["flat"] = func1058;
  func1058.definitionLine = 528;
  func1058.definitionModule = "musical";
  lineNumber = 533
  var func1062 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1062.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 535
      lineNumber = 534
      var bool1063 = new GraceBoolean(true)
      var_applySharp = bool1063;
      lineNumber = 535
      var call1064 = callmethod(var_note,"apply", [0]);
      lineNumber = 537
      lineNumber = 536
      var bool1065 = new GraceBoolean(false)
      var_applySharp = bool1065;
      return bool1065
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
  this.methods["sharp"] = func1062;
  func1062.definitionLine = 533;
  func1062.definitionModule = "musical";
  lineNumber = 542
  var func1066 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1066.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 543
      var call1067 = callmethod(var_dom,"window", [0]);
      var call1068 = callmethod(call1067,"t_init", [0]);
      lineNumber = 544
      var call1069 = callmethod(var_blocks,"apply", [0]);
      return call1069
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1066.paramCounts = [
    1,
  ];
  func1066.variableArities = [
    false,
  ];
  this.methods["Instrument"] = func1066;
  func1066.definitionLine = 542;
  func1066.definitionModule = "musical";
  lineNumber = 547
  var func1070 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1070.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 548
      onSelf = true;
      var call1071 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 549
      var call1072 = callmethod(var_dom,"window", [0]);
      var call1073 = callmethod(call1072,"t_synth_mono", [0]);
      return call1073
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1070.paramCounts = [
    1,
  ];
  func1070.variableArities = [
    false,
  ];
  this.methods["monoSynth"] = func1070;
  func1070.definitionLine = 547;
  func1070.definitionModule = "musical";
  lineNumber = 552
  var func1074 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1074.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 553
      onSelf = true;
      var call1075 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 554
      var call1076 = callmethod(var_dom,"window", [0]);
      var call1077 = callmethod(call1076,"t_synth_pluck", [0]);
      return call1077
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1074.paramCounts = [
    1,
  ];
  func1074.variableArities = [
    false,
  ];
  this.methods["pluckSynth"] = func1074;
  func1074.definitionLine = 552;
  func1074.definitionModule = "musical";
  lineNumber = 557
  var func1078 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1078.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 558
      onSelf = true;
      var call1079 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 559
      var call1080 = callmethod(var_dom,"window", [0]);
      var call1081 = callmethod(call1080,"t_synth_poly", [0]);
      return call1081
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
  this.methods["polySynth"] = func1078;
  func1078.definitionLine = 557;
  func1078.definitionModule = "musical";
  lineNumber = 562
  var func1082 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1082.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 563
      onSelf = true;
      var call1083 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 564
      var call1084 = callmethod(var_dom,"window", [0]);
      var call1085 = callmethod(call1084,"t_synth_fm", [0]);
      return call1085
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1082.paramCounts = [
    1,
  ];
  func1082.variableArities = [
    false,
  ];
  this.methods["fmSynth"] = func1082;
  func1082.definitionLine = 562;
  func1082.definitionModule = "musical";
  lineNumber = 567
  var func1086 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1086.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 568
      onSelf = true;
      var call1087 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 569
      var call1088 = callmethod(var_dom,"window", [0]);
      var call1089 = callmethod(call1088,"t_synth_membrane", [0]);
      return call1089
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1086.paramCounts = [
    1,
  ];
  func1086.variableArities = [
    false,
  ];
  this.methods["membraneSynth"] = func1086;
  func1086.definitionLine = 567;
  func1086.definitionModule = "musical";
  lineNumber = 572
  var func1090 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1090.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 573
      onSelf = true;
      var call1091 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 574
      var call1092 = callmethod(var_dom,"window", [0]);
      var call1093 = callmethod(call1092,"t_synth_duo", [0]);
      return call1093
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
  this.methods["duoSynth"] = func1090;
  func1090.definitionLine = 572;
  func1090.definitionModule = "musical";
  lineNumber = 580
  var func1094 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1094.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 584
      var if1095 = var_done;
      lineNumber = 581
      var bool1096 = new GraceBoolean(true)
      var opresult1099 = callmethod(var_applyChorus, "==", [1], bool1096);
      if (Grace_isTrue(opresult1099)) {
        lineNumber = 582
        var call1100 = callmethod(var_dom,"window", [0]);
        var call1101 = callmethod(call1100,"t_effect_chorus", [0]);
        if1095 = call1101;
      }
      lineNumber = 587
      var if1102 = var_done;
      lineNumber = 584
      var bool1103 = new GraceBoolean(true)
      var opresult1106 = callmethod(var_applyReverb, "==", [1], bool1103);
      if (Grace_isTrue(opresult1106)) {
        lineNumber = 585
        var call1107 = callmethod(var_dom,"window", [0]);
        var call1108 = callmethod(call1107,"t_effect_reverb", [0]);
        if1102 = call1108;
      }
      lineNumber = 590
      var if1109 = var_done;
      lineNumber = 587
      var bool1110 = new GraceBoolean(true)
      var opresult1113 = callmethod(var_applyAutowah, "==", [1], bool1110);
      if (Grace_isTrue(opresult1113)) {
        lineNumber = 588
        var call1114 = callmethod(var_dom,"window", [0]);
        var call1115 = callmethod(call1114,"t_effect_autowah", [0]);
        if1109 = call1115;
      }
      lineNumber = 593
      var if1116 = var_done;
      lineNumber = 590
      var bool1117 = new GraceBoolean(true)
      var opresult1120 = callmethod(var_applyCheby, "==", [1], bool1117);
      if (Grace_isTrue(opresult1120)) {
        lineNumber = 591
        var call1121 = callmethod(var_dom,"window", [0]);
        var call1122 = callmethod(call1121,"t_effect_cheby", [0]);
        if1116 = call1122;
      }
      lineNumber = 593
      var call1123 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 594
      var call1124 = callmethod(var_dom,"window", [0]);
      var call1125 = callmethod(call1124,"t_effect_reset", [0]);
      return call1125
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
  this.methods["Effect"] = func1094;
  func1094.definitionLine = 580;
  func1094.definitionModule = "musical";
  lineNumber = 597
  var func1126 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1126.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 599
      lineNumber = 598
      var bool1127 = new GraceBoolean(true)
      var_applyChorus = bool1127;
      lineNumber = 599
      onSelf = true;
      var call1128 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 601
      lineNumber = 600
      var bool1129 = new GraceBoolean(false)
      var_applyChorus = bool1129;
      return bool1129
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1126.paramCounts = [
    1,
  ];
  func1126.variableArities = [
    false,
  ];
  this.methods["Chorus"] = func1126;
  func1126.definitionLine = 597;
  func1126.definitionModule = "musical";
  lineNumber = 603
  var func1130 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1130.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 605
      lineNumber = 604
      var bool1131 = new GraceBoolean(true)
      var_applyReverb = bool1131;
      lineNumber = 605
      onSelf = true;
      var call1132 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 607
      lineNumber = 606
      var bool1133 = new GraceBoolean(false)
      var_applyReverb = bool1133;
      return bool1133
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
  this.methods["Reverb"] = func1130;
  func1130.definitionLine = 603;
  func1130.definitionModule = "musical";
  lineNumber = 609
  var func1134 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1134.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 611
      lineNumber = 610
      var bool1135 = new GraceBoolean(true)
      var_applyAutowah = bool1135;
      lineNumber = 611
      onSelf = true;
      var call1136 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 613
      lineNumber = 612
      var bool1137 = new GraceBoolean(false)
      var_applyAutowah = bool1137;
      return bool1137
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1134.paramCounts = [
    1,
  ];
  func1134.variableArities = [
    false,
  ];
  this.methods["Autowah"] = func1134;
  func1134.definitionLine = 609;
  func1134.definitionModule = "musical";
  lineNumber = 615
  var func1138 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1138.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 617
      lineNumber = 616
      var bool1139 = new GraceBoolean(true)
      var_applyCheby = bool1139;
      lineNumber = 617
      onSelf = true;
      var call1140 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 619
      lineNumber = 618
      var bool1141 = new GraceBoolean(false)
      var_applyCheby = bool1141;
      return bool1141
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
  this.methods["Cheby"] = func1138;
  func1138.definitionLine = 615;
  func1138.definitionModule = "musical";
  lineNumber = 623
  var func1142 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1142.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 624
      var call1143 = callmethod(var_dom,"window", [0]);
      var call1144 = callmethod(call1143,"t_bpm", [1], var_bpm);
      return call1144
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1142.paramCounts = [
    1,
  ];
  func1142.variableArities = [
    false,
  ];
  this.methods["SetBPM"] = func1142;
  func1142.definitionLine = 623;
  func1142.definitionModule = "musical";
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
  var call1145 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1145;
  this.data = call1145.data;
  this._value = call1145._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 624
  var func1146 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1146.paramCounts[0])
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
  func1146.paramCounts = [
    0,
  ];
  func1146.variableArities = [
    false,
  ];
  this.methods["document"] = func1146;
  func1146.definitionLine = 624;
  func1146.definitionModule = "musical";
  lineNumber = 624
  var func1147 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1147.paramCounts[0])
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
  func1147.paramCounts = [
    1,
  ];
  func1147.variableArities = [
    false,
  ];
  this.methods["document:="] = func1147;
  func1147.definitionLine = 624;
  func1147.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 624
  var func1148 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1148.paramCounts[0])
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
  func1148.paramCounts = [
    0,
  ];
  func1148.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1148;
  func1148.definitionLine = 624;
  func1148.definitionModule = "musical";
  lineNumber = 624
  var func1149 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1149.paramCounts[0])
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
  func1149.paramCounts = [
    1,
  ];
  func1149.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1149;
  func1149.definitionLine = 624;
  func1149.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 624
  var func1150 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1150.paramCounts[0])
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
  func1150.paramCounts = [
    0,
  ];
  func1150.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1150;
  func1150.definitionLine = 624;
  func1150.definitionModule = "musical";
  lineNumber = 624
  var func1151 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1151.paramCounts[0])
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
  func1151.paramCounts = [
    1,
  ];
  func1151.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1151;
  func1151.definitionLine = 624;
  func1151.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 624
  var func1152 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1152.paramCounts[0])
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
  func1152.paramCounts = [
    0,
  ];
  func1152.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1152;
  func1152.definitionLine = 624;
  func1152.definitionModule = "musical";
  lineNumber = 624
  var func1153 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1153.paramCounts[0])
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
  func1153.paramCounts = [
    1,
  ];
  func1153.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1153;
  func1153.definitionLine = 624;
  func1153.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 624
  var func1154 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1154.paramCounts[0])
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
  func1154.paramCounts = [
    0,
  ];
  func1154.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1154;
  func1154.definitionLine = 624;
  func1154.definitionModule = "musical";
  lineNumber = 624
  var func1155 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1155.paramCounts[0])
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
  func1155.paramCounts = [
    1,
  ];
  func1155.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1155;
  func1155.definitionLine = 624;
  func1155.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 624
  var func1156 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1156.paramCounts[0])
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
  func1156.paramCounts = [
    0,
  ];
  func1156.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1156;
  func1156.definitionLine = 624;
  func1156.definitionModule = "musical";
  lineNumber = 624
  var func1157 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1157.paramCounts[0])
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
  func1157.paramCounts = [
    1,
  ];
  func1157.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1157;
  func1157.definitionLine = 624;
  func1157.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1158 = callmethod(var_dom,"window", [0]);
  var call1159 = callmethod(call1158,"Math", [0]);
  var var_trig = call1159;
  var func1160 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1160.paramCounts[0])
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
  func1160.paramCounts = [
    0,
  ];
  func1160.variableArities = [
    false,
  ];
  this.methods["trig"] = func1160;
  func1160.definitionLine = 15;
  func1160.definitionModule = "musical";
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
  var func1161 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1161.paramCounts[0])
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
  func1161.paramCounts = [
    0,
  ];
  func1161.variableArities = [
    false,
  ];
  this.methods["PI"] = func1161;
  func1161.definitionLine = 15;
  func1161.definitionModule = "musical";
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
  var bool1162 = new GraceBoolean(false)
  var var_stopRunning = bool1162;
  lineNumber = 15
  var func1163 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1163.paramCounts[0])
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
  func1163.paramCounts = [
    0,
  ];
  func1163.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1163;
  func1163.definitionLine = 15;
  func1163.definitionModule = "musical";
  lineNumber = 15
  var func1164 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1164.paramCounts[0])
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
  func1164.paramCounts = [
    1,
  ];
  func1164.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1164;
  func1164.definitionLine = 15;
  func1164.definitionModule = "musical";
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
  var bool1165 = new GraceBoolean(false)
  var var_initialised = bool1165;
  lineNumber = 15
  var func1166 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1166.paramCounts[0])
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
  func1166.paramCounts = [
    0,
  ];
  func1166.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1166;
  func1166.definitionLine = 15;
  func1166.definitionModule = "musical";
  lineNumber = 15
  var func1167 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1167.paramCounts[0])
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
  func1167.paramCounts = [
    1,
  ];
  func1167.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1167;
  func1167.definitionLine = 15;
  func1167.definitionModule = "musical";
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
  var string1168 = new GraceString("white");
  var var_backgroundColour = string1168;
  lineNumber = 15
  var func1169 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1169.paramCounts[0])
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
  func1169.paramCounts = [
    0,
  ];
  func1169.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1169;
  func1169.definitionLine = 15;
  func1169.definitionModule = "musical";
  lineNumber = 15
  var func1170 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1170.paramCounts[0])
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
  func1170.paramCounts = [
    1,
  ];
  func1170.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1170;
  func1170.definitionLine = 15;
  func1170.definitionModule = "musical";
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
  var call1171 = callmethod(var_collections,"list", [0]);
  var call1172 = callmethod(call1171,"new", [0]);
  var var_registeredObjects = call1172;
  var func1173 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1173.paramCounts[0])
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
  func1173.paramCounts = [
    0,
  ];
  func1173.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1173;
  func1173.definitionLine = 21;
  func1173.definitionModule = "musical";
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
  var call1174 = callmethod(var_collections,"list", [0]);
  var call1175 = callmethod(call1174,"new", [0]);
  var var_stepBlocks = call1175;
  var func1176 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1176.paramCounts[0])
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
  func1176.paramCounts = [
    0,
  ];
  func1176.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1176;
  func1176.definitionLine = 22;
  func1176.definitionModule = "musical";
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
  var call1177 = callmethod(var_collections,"map", [0]);
  var call1178 = callmethod(call1177,"new", [0]);
  var var_audioTags = call1178;
  var func1179 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1179.paramCounts[0])
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
  func1179.paramCounts = [
    0,
  ];
  func1179.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1179;
  func1179.definitionLine = 23;
  func1179.definitionModule = "musical";
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
  var func1180 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1180.paramCounts[0])
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
  func1180.paramCounts = [
    0,
  ];
  func1180.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1180;
  func1180.definitionLine = 23;
  func1180.definitionModule = "musical";
  lineNumber = 23
  var func1181 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1181.paramCounts[0])
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
  func1181.paramCounts = [
    1,
  ];
  func1181.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1181;
  func1181.definitionLine = 23;
  func1181.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1182.paramCounts[0])
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
  func1182.paramCounts = [
    0,
  ];
  func1182.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1182;
  func1182.definitionLine = 23;
  func1182.definitionModule = "musical";
  lineNumber = 23
  var func1183 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1183.paramCounts[0])
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
  func1183.paramCounts = [
    1,
  ];
  func1183.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1183;
  func1183.definitionLine = 23;
  func1183.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1184 = new GraceString("left");
  var var_left = string1184;
  lineNumber = 23
  var func1185 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1185.paramCounts[0])
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
  func1185.paramCounts = [
    0,
  ];
  func1185.variableArities = [
    false,
  ];
  this.methods["left"] = func1185;
  func1185.definitionLine = 23;
  func1185.definitionModule = "musical";
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
  var string1186 = new GraceString("right");
  var var_right = string1186;
  lineNumber = 23
  var func1187 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1187.paramCounts[0])
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
  func1187.paramCounts = [
    0,
  ];
  func1187.variableArities = [
    false,
  ];
  this.methods["right"] = func1187;
  func1187.definitionLine = 23;
  func1187.definitionModule = "musical";
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
  var string1188 = new GraceString("top");
  var var_top = string1188;
  lineNumber = 23
  var func1189 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1189.paramCounts[0])
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
  func1189.paramCounts = [
    0,
  ];
  func1189.variableArities = [
    false,
  ];
  this.methods["top"] = func1189;
  func1189.definitionLine = 23;
  func1189.definitionModule = "musical";
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
  var string1190 = new GraceString("bottom");
  var var_bottom = string1190;
  lineNumber = 23
  var func1191 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1191.paramCounts[0])
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
  func1191.paramCounts = [
    0,
  ];
  func1191.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1191;
  func1191.definitionLine = 23;
  func1191.definitionModule = "musical";
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
  var func1192 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1192.paramCounts[0])
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
  func1192.paramCounts = [
    0,
  ];
  func1192.variableArities = [
    false,
  ];
  this.methods["centre"] = func1192;
  func1192.definitionLine = 23;
  func1192.definitionModule = "musical";
  lineNumber = 23
  var func1193 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1193.paramCounts[0])
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
  func1193.paramCounts = [
    1,
  ];
  func1193.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1193;
  func1193.definitionLine = 23;
  func1193.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1194 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1194.paramCounts[0])
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
  func1194.paramCounts = [
    0,
  ];
  func1194.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1194;
  func1194.definitionLine = 23;
  func1194.definitionModule = "musical";
  lineNumber = 23
  var func1195 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1195.paramCounts[0])
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
  func1195.paramCounts = [
    1,
  ];
  func1195.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1195;
  func1195.definitionLine = 23;
  func1195.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1196 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1196.paramCounts[0])
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
  func1196.paramCounts = [
    0,
  ];
  func1196.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1196;
  func1196.definitionLine = 23;
  func1196.definitionModule = "musical";
  lineNumber = 23
  var func1197 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1197.paramCounts[0])
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
  func1197.paramCounts = [
    1,
  ];
  func1197.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1197;
  func1197.definitionLine = 23;
  func1197.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1198 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1198.paramCounts[0])
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
  func1198.paramCounts = [
    0,
  ];
  func1198.variableArities = [
    false,
  ];
  this.methods["above"] = func1198;
  func1198.definitionLine = 23;
  func1198.definitionModule = "musical";
  lineNumber = 23
  var func1199 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1199.paramCounts[0])
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
  func1199.paramCounts = [
    1,
  ];
  func1199.variableArities = [
    false,
  ];
  this.methods["above:="] = func1199;
  func1199.definitionLine = 23;
  func1199.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1200 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1200.paramCounts[0])
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
  func1200.paramCounts = [
    0,
  ];
  func1200.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1200;
  func1200.definitionLine = 23;
  func1200.definitionModule = "musical";
  lineNumber = 23
  var func1201 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1201.paramCounts[0])
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
  func1201.paramCounts = [
    1,
  ];
  func1201.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1201;
  func1201.definitionLine = 23;
  func1201.definitionModule = "musical";
  lineNumber = 40
  var func1202 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1202.paramCounts[0])
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
  func1202.paramCounts = [
    0,
  ];
  func1202.variableArities = [
    false,
  ];
  this.methods["point"] = func1202;
  func1202.definitionLine = 40;
  func1202.definitionModule = "musical";
  var obj1203 = Grace_allocObject();
  obj1203.definitionModule = "musical";
  obj1203.definitionLine = 40;
  obj1203.outer = this;
  var reader_musical_outer_1204 = function() {
    return this.outer;
  }
  obj1203.methods["outer"] = reader_musical_outer_1204;
  function obj_init_1203() {
    var origSuperDepth = superDepth;
    superDepth = obj1203;
    obj1203.annotations = [];
    var func1205 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1205.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1205.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1206 = Grace_allocObject();
        obj1206.definitionModule = "musical";
        obj1206.definitionLine = 40;
        obj1206.outer = this;
        var reader_musical_outer_1207 = function() {
          return this.outer;
        }
        obj1206.methods["outer"] = reader_musical_outer_1207;
        function obj_init_1206() {
          var origSuperDepth = superDepth;
          superDepth = obj1206;
          obj1206.annotations = [];
          var func1208 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1210 = callmethod(this, "x", [0]);
              var diff1212 = callmethod(call1210, "-", [1], var_dx);
              onSelf = true;
              var call1213 = callmethod(this, "y", [0]);
              var call1214 = callmethod(var_point,"x()y", [1, 1], diff1212, call1213);
              return call1214
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
          obj1206.methods["left"] = func1208;
          func1208.definitionLine = 43;
          func1208.definitionModule = "musical";
          var func1215 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1215.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1217 = callmethod(this, "x", [0]);
              var opresult1219 = callmethod(call1217, "+", [1], var_dx);
              onSelf = true;
              var call1220 = callmethod(this, "y", [0]);
              var call1221 = callmethod(var_point,"x()y", [1, 1], opresult1219, call1220);
              return call1221
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
          obj1206.methods["right"] = func1215;
          func1215.definitionLine = 44;
          func1215.definitionModule = "musical";
          var func1222 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1222.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1223 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1225 = callmethod(this, "y", [0]);
              var diff1227 = callmethod(call1225, "-", [1], var_dy);
              var call1228 = callmethod(var_point,"x()y", [1, 1], call1223, diff1227);
              return call1228
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
          obj1206.methods["up"] = func1222;
          func1222.definitionLine = 45;
          func1222.definitionModule = "musical";
          var func1229 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1229.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1230 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1232 = callmethod(this, "y", [0]);
              var opresult1234 = callmethod(call1232, "+", [1], var_dy);
              var call1235 = callmethod(var_point,"x()y", [1, 1], call1230, opresult1234);
              return call1235
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
          obj1206.methods["down"] = func1229;
          func1229.definitionLine = 46;
          func1229.definitionModule = "musical";
          sourceObject = obj1206;
          lineNumber = 41
          obj1206.data["x"] = var_x__39__;
          var reader_musical_x_1236 = function() {
            return this.data["x"];
          }
          reader_musical_x_1236.def = true;
          obj1206.methods["x"] = reader_musical_x_1236;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1206;
          lineNumber = 42
          obj1206.data["y"] = var_y__39__;
          var reader_musical_y_1237 = function() {
            return this.data["y"];
          }
          reader_musical_y_1237.def = true;
          obj1206.methods["y"] = reader_musical_y_1237;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1206;
          sourceObject = obj1206;
          sourceObject = obj1206;
          sourceObject = obj1206;
          superDepth = origSuperDepth;
        }
        obj_init_1206.apply(obj1206, []);
        return obj1206
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
      1,
    ];
    func1205.variableArities = [
      false,
      false,
    ];
    obj1203.methods["x()y"] = func1205;
    func1205.definitionLine = 40;
    func1205.definitionModule = "musical";
    var func1238 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1239 = Grace_allocObject();
        obj1239.definitionModule = "musical";
        obj1239.definitionLine = 40;
        var inho1239 = inheritingObject;
        while (inho1239.superobj) inho1239 = inho1239.superobj;
        inho1239.superobj = obj1239;
        obj1239.data = inheritingObject.data;
        obj1239.outer = this;
        var reader_musical_outer_1240 = function() {
          return this.outer;
        }
        obj1239.methods["outer"] = reader_musical_outer_1240;
        function obj_init_1239() {
          var origSuperDepth = superDepth;
          superDepth = obj1239;
          obj1239.annotations = [];
          var func1241 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1241.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1243 = callmethod(this, "x", [0]);
              var diff1245 = callmethod(call1243, "-", [1], var_dx);
              onSelf = true;
              var call1246 = callmethod(this, "y", [0]);
              var call1247 = callmethod(var_point,"x()y", [1, 1], diff1245, call1246);
              return call1247
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1241.paramCounts = [
            1,
          ];
          func1241.variableArities = [
            false,
          ];
          obj1239.methods["left"] = func1241;
          func1241.definitionLine = 43;
          func1241.definitionModule = "musical";
          var func1248 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1250 = callmethod(this, "x", [0]);
              var opresult1252 = callmethod(call1250, "+", [1], var_dx);
              onSelf = true;
              var call1253 = callmethod(this, "y", [0]);
              var call1254 = callmethod(var_point,"x()y", [1, 1], opresult1252, call1253);
              return call1254
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
          obj1239.methods["right"] = func1248;
          func1248.definitionLine = 44;
          func1248.definitionModule = "musical";
          var func1255 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1255.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1256 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1258 = callmethod(this, "y", [0]);
              var diff1260 = callmethod(call1258, "-", [1], var_dy);
              var call1261 = callmethod(var_point,"x()y", [1, 1], call1256, diff1260);
              return call1261
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
          obj1239.methods["up"] = func1255;
          func1255.definitionLine = 45;
          func1255.definitionModule = "musical";
          var func1262 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1263 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1265 = callmethod(this, "y", [0]);
              var opresult1267 = callmethod(call1265, "+", [1], var_dy);
              var call1268 = callmethod(var_point,"x()y", [1, 1], call1263, opresult1267);
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
          obj1239.methods["down"] = func1262;
          func1262.definitionLine = 46;
          func1262.definitionModule = "musical";
          sourceObject = obj1239;
          lineNumber = 41
          obj1239.data["x"] = var_x__39__;
          var reader_musical_x_1269 = function() {
            return this.data["x"];
          }
          reader_musical_x_1269.def = true;
          obj1239.methods["x"] = reader_musical_x_1269;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1239;
          lineNumber = 42
          obj1239.data["y"] = var_y__39__;
          var reader_musical_y_1270 = function() {
            return this.data["y"];
          }
          reader_musical_y_1270.def = true;
          obj1239.methods["y"] = reader_musical_y_1270;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1239;
          sourceObject = obj1239;
          sourceObject = obj1239;
          sourceObject = obj1239;
          superDepth = origSuperDepth;
        }
        obj_init_1239.apply(inheritingObject, []);
        return obj1239
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1203.methods["x()y()object"] = func1238;
    var func1271 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1272 = new GraceString("class point");
        return string1272
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1271.paramCounts = [
    ];
    func1271.variableArities = [
    ];
    obj1203.methods["asDebugString"] = func1271;
    func1271.definitionLine = 40;
    func1271.definitionModule = "musical";
    sourceObject = obj1203;
    sourceObject = obj1203;
    superDepth = origSuperDepth;
  }
  obj_init_1203.apply(obj1203, []);
  var var_point = obj1203;
  lineNumber = 48
  var func1273 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1273.paramCounts[0])
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
  func1273.paramCounts = [
    0,
  ];
  func1273.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1273;
  func1273.definitionLine = 48;
  func1273.definitionModule = "musical";
  var obj1274 = Grace_allocObject();
  obj1274.definitionModule = "musical";
  obj1274.definitionLine = 48;
  obj1274.outer = this;
  var reader_musical_outer_1275 = function() {
    return this.outer;
  }
  obj1274.methods["outer"] = reader_musical_outer_1275;
  function obj_init_1274() {
    var origSuperDepth = superDepth;
    superDepth = obj1274;
    obj1274.annotations = [];
    var func1276 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1276.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1277 = Grace_allocObject();
        obj1277.definitionModule = "musical";
        obj1277.definitionLine = 48;
        obj1277.outer = this;
        var reader_musical_outer_1278 = function() {
          return this.outer;
        }
        obj1277.methods["outer"] = reader_musical_outer_1278;
        function obj_init_1277() {
          var origSuperDepth = superDepth;
          superDepth = obj1277;
          obj1277.annotations = [];
          var func1279 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1280 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1281 = Grace_allocObject();
              block1281.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1281.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1281.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1281.methods["match"] = GraceBlock_match;
              block1281.methods["prefix?"] = GraceBlock_lift;
              block1281.receiver = this;
              block1281.className = 'block<musical:63>';
              block1281.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1282 = callmethod(var_b,"apply", [0]);
                return call1282;
              };
              var call1283 = callmethod(Grace_prelude,"for()do", [1, 1], call1280, block1281);
              lineNumber = 63
              onSelf = true;
              var call1284 = callmethod(this, "tick", [0]);
              return call1284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1279.paramCounts = [
            0,
          ];
          func1279.variableArities = [
            false,
          ];
          obj1277.methods["step"] = func1279;
          func1279.definitionLine = 59;
          func1279.definitionModule = "musical";
          var func1285 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1285.paramCounts[0])
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
          func1285.paramCounts = [
            0,
          ];
          func1285.variableArities = [
            false,
          ];
          obj1277.methods["tick"] = func1285;
          func1285.definitionLine = 66;
          func1285.definitionModule = "musical";
          var func1286 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1286.paramCounts[0])
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
          func1286.paramCounts = [
            1,
          ];
          func1286.variableArities = [
            false,
          ];
          obj1277.methods["draw"] = func1286;
          func1286.definitionLine = 67;
          func1286.definitionModule = "musical";
          var func1287 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1288 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1289 = callmethod(this, "destX:=", [1], call1288);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1290 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1291 = callmethod(this, "destY:=", [1], call1290);
              return call1291
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
          obj1277.methods["moveTo"] = func1287;
          func1287.definitionLine = 68;
          func1287.definitionModule = "musical";
          var func1292 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1293 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1294 = callmethod(this, "x:=", [1], call1293);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1295 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1296 = callmethod(this, "y:=", [1], call1295);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1297 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1298 = callmethod(this, "destX:=", [1], call1297);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1299 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1300 = callmethod(this, "destY:=", [1], call1299);
              return call1300
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1292.paramCounts = [
            1,
          ];
          func1292.variableArities = [
            false,
          ];
          obj1277.methods["jumpTo"] = func1292;
          func1292.definitionLine = 72;
          func1292.definitionModule = "musical";
          var func1301 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1302 = new GraceBoolean(false)
              return bool1302
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
          obj1277.methods["isPointOver"] = func1301;
          func1301.definitionLine = 78;
          func1301.definitionModule = "musical";
          var func1303 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1303.paramCounts[0])
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
          func1303.paramCounts = [
            0,
          ];
          func1303.variableArities = [
            false,
          ];
          obj1277.methods["mousedown"] = func1303;
          func1303.definitionLine = 79;
          func1303.definitionModule = "musical";
          var func1304 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1305 = callmethod(this, "alwaysBlocks", [0]);
              var call1306 = callmethod(call1305,"push", [1], var_b);
              return call1306
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1304.paramCounts = [
            1,
          ];
          func1304.variableArities = [
            false,
          ];
          obj1277.methods["always"] = func1304;
          func1304.definitionLine = 80;
          func1304.definitionModule = "musical";
          var func1307 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1307.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1308 = Grace_allocObject();
              block1308.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1308.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1308.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1308.methods["match"] = GraceBlock_match;
              block1308.methods["prefix?"] = GraceBlock_lift;
              block1308.receiver = this;
              block1308.className = 'block<musical:89>';
              block1308.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1309 = var_done;
                lineNumber = 85
                var call1310 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1310)) {
                  lineNumber = 86
                  var call1311 = callmethod(var_b,"apply", [0]);
                  if1309 = call1311;
                }
                return if1309;
              };
              onSelf = true;
              var call1312 = callmethod(this, "always", [1], block1308);
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
            1,
            1,
          ];
          func1307.variableArities = [
            false,
            false,
          ];
          obj1277.methods["whenever()do"] = func1307;
          func1307.definitionLine = 83;
          func1307.definitionModule = "musical";
          var func1313 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1313.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1317 = callmethod(this, "angle", [0]);
              var quotient1319 = callmethod(call1317, "/", [1], new GraceNum(180));
              var prod1321 = callmethod(quotient1319, "*", [1], var_PI);
              var call1322 = callmethod(var_trig,"cos", [1], prod1321);
              var prod1324 = callmethod(call1322, "*", [1], var_dist);
              var var_y__39__ = prod1324;
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
              var call1328 = callmethod(this, "angle", [0]);
              var quotient1330 = callmethod(call1328, "/", [1], new GraceNum(180));
              var prod1332 = callmethod(quotient1330, "*", [1], var_PI);
              var call1333 = callmethod(var_trig,"sin", [1], prod1332);
              var prod1335 = callmethod(call1333, "*", [1], var_dist);
              var var_x__39__ = prod1335;
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
              var call1337 = callmethod(this, "x", [0]);
              var opresult1339 = callmethod(call1337, "+", [1], var_x__39__);
              onSelf = true;
              var call1340 = callmethod(this, "x:=", [1], opresult1339);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1342 = callmethod(this, "y", [0]);
              var opresult1344 = callmethod(call1342, "+", [1], var_y__39__);
              onSelf = true;
              var call1345 = callmethod(this, "y:=", [1], opresult1344);
              return call1345
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
          obj1277.methods["forward"] = func1313;
          func1313.definitionLine = 90;
          func1313.definitionModule = "musical";
          var func1346 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1346.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1347 = Grace_allocObject();
              block1347.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1347.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1347.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1347.methods["match"] = GraceBlock_match;
              block1347.methods["prefix?"] = GraceBlock_lift;
              block1347.receiver = this;
              block1347.className = 'block<musical:97>';
              block1347.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1349 = callmethod(this, "angle", [0]);
                var opresult1351 = callmethod(call1349, "<", [1], new GraceNum(0));
                return opresult1351;
              };
              lineNumber = 100
              var block1352 = Grace_allocObject();
              block1352.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1352.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1352.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1352.methods["match"] = GraceBlock_match;
              block1352.methods["prefix?"] = GraceBlock_lift;
              block1352.receiver = this;
              block1352.className = 'block<musical:100>';
              block1352.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1354 = callmethod(this, "angle", [0]);
                var opresult1356 = callmethod(call1354, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1357 = callmethod(this, "angle:=", [1], opresult1356);
                return call1357;
              };
              var call1358 = callmethod(Grace_prelude,"while()do", [1, 1], block1347, block1352);
              lineNumber = 100
              var block1359 = Grace_allocObject();
              block1359.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1359.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1359.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1359.methods["match"] = GraceBlock_match;
              block1359.methods["prefix?"] = GraceBlock_lift;
              block1359.receiver = this;
              block1359.className = 'block<musical:100>';
              block1359.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1361 = callmethod(this, "angle", [0]);
                var opresult1363 = callmethod(call1361, ">", [1], new GraceNum(360));
                return opresult1363;
              };
              lineNumber = 103
              var block1364 = Grace_allocObject();
              block1364.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1364.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1364.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1364.methods["match"] = GraceBlock_match;
              block1364.methods["prefix?"] = GraceBlock_lift;
              block1364.receiver = this;
              block1364.className = 'block<musical:103>';
              block1364.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1366 = callmethod(this, "angle", [0]);
                var diff1368 = callmethod(call1366, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1369 = callmethod(this, "angle:=", [1], diff1368);
                return call1369;
              };
              var call1370 = callmethod(Grace_prelude,"while()do", [1, 1], block1359, block1364);
              return call1370
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
          obj1277.methods["normaliseAngle"] = func1346;
          func1346.definitionLine = 96;
          func1346.definitionModule = "musical";
          var func1371 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1371.paramCounts[0])
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
              var call1373 = callmethod(this, "angle", [0]);
              var opresult1375 = callmethod(call1373, "+", [1], var_degrees);
              onSelf = true;
              var call1376 = callmethod(this, "angle:=", [1], opresult1375);
              lineNumber = 106
              onSelf = true;
              var call1377 = callmethod(this, "normaliseAngle", [0]);
              return call1377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1371.paramCounts = [
            1,
          ];
          func1371.variableArities = [
            false,
          ];
          obj1277.methods["turn"] = func1371;
          func1371.definitionLine = 104;
          func1371.definitionModule = "musical";
          var func1378 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1379 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1380 = callmethod(this, "x", [0]);
              var call1381 = callmethod(var_point,"x()y", [1, 1], call1380, new GraceNum(0));
              onSelf = true;
              var call1382 = callmethod(this, "isPointOver", [1], call1381);
              if (Grace_isTrue(call1382)) {
                lineNumber = 111
                lineNumber = 110
                var bool1383 = new GraceBoolean(true)
                return bool1383
              }
              lineNumber = 115
              var if1384 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1385 = callmethod(this, "x", [0]);
              var call1386 = callmethod(var_point,"x()y", [1, 1], call1385, var_canvasHeight);
              onSelf = true;
              var call1387 = callmethod(this, "isPointOver", [1], call1386);
              if (Grace_isTrue(call1387)) {
                lineNumber = 114
                lineNumber = 113
                var bool1388 = new GraceBoolean(true)
                return bool1388
              }
              lineNumber = 118
              var if1389 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1390 = callmethod(this, "y", [0]);
              var call1391 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1390);
              onSelf = true;
              var call1392 = callmethod(this, "isPointOver", [1], call1391);
              if (Grace_isTrue(call1392)) {
                lineNumber = 117
                lineNumber = 116
                var bool1393 = new GraceBoolean(true)
                return bool1393
              }
              lineNumber = 121
              var if1394 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1395 = callmethod(this, "y", [0]);
              var call1396 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1395);
              onSelf = true;
              var call1397 = callmethod(this, "isPointOver", [1], call1396);
              if (Grace_isTrue(call1397)) {
                lineNumber = 120
                lineNumber = 119
                var bool1398 = new GraceBoolean(true)
                return bool1398
              }
              lineNumber = 122
              lineNumber = 121
              var bool1399 = new GraceBoolean(false)
              return bool1399
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1378.paramCounts = [
            0,
          ];
          func1378.variableArities = [
            false,
          ];
          obj1277.methods["touchingEdge"] = func1378;
          func1378.definitionLine = 108;
          func1378.definitionModule = "musical";
          var func1400 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1400.paramCounts[0])
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
              var if1401 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1402 = callmethod(this, "x", [0]);
              var call1403 = callmethod(var_point,"x()y", [1, 1], call1402, new GraceNum(0));
              onSelf = true;
              var call1404 = callmethod(this, "isPointOver", [1], call1403);
              if (Grace_isTrue(call1404)) {
                lineNumber = 127
                onSelf = true;
                var call1405 = callmethod(this, "bounceFrom", [1], var_top);
                if1401 = call1405;
              }
              lineNumber = 132
              var if1406 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1407 = callmethod(this, "x", [0]);
              var call1408 = callmethod(var_point,"x()y", [1, 1], call1407, var_canvasHeight);
              onSelf = true;
              var call1409 = callmethod(this, "isPointOver", [1], call1408);
              if (Grace_isTrue(call1409)) {
                lineNumber = 130
                onSelf = true;
                var call1410 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1406 = call1410;
              }
              lineNumber = 135
              var if1411 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1412 = callmethod(this, "y", [0]);
              var call1413 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1412);
              onSelf = true;
              var call1414 = callmethod(this, "isPointOver", [1], call1413);
              if (Grace_isTrue(call1414)) {
                lineNumber = 133
                onSelf = true;
                var call1415 = callmethod(this, "bounceFrom", [1], var_left);
                if1411 = call1415;
              }
              lineNumber = 138
              var if1416 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1417 = callmethod(this, "y", [0]);
              var call1418 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1417);
              onSelf = true;
              var call1419 = callmethod(this, "isPointOver", [1], call1418);
              if (Grace_isTrue(call1419)) {
                lineNumber = 136
                onSelf = true;
                var call1420 = callmethod(this, "bounceFrom", [1], var_right);
                if1416 = call1420;
              }
              lineNumber = 138
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
              block1421.className = 'block<musical:138>';
              block1421.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1422 = callmethod(this, "touchingEdge", [0]);
                return call1422;
              };
              lineNumber = 141
              var block1423 = Grace_allocObject();
              block1423.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1423.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1423.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1423.methods["match"] = GraceBlock_match;
              block1423.methods["prefix?"] = GraceBlock_lift;
              block1423.receiver = this;
              block1423.className = 'block<musical:141>';
              block1423.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1424 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1424;
              };
              var call1425 = callmethod(Grace_prelude,"while()do", [1, 1], block1421, block1423);
              return call1425
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
          obj1277.methods["bounce"] = func1400;
          func1400.definitionLine = 123;
          func1400.definitionModule = "musical";
          var func1426 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1426.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1427 = var_done;
              lineNumber = 143
              var string1428 = new GraceString("left");
              var opresult1431 = callmethod(var_dir, "==", [1], string1428);
              if (Grace_isTrue(opresult1431)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1432 = callmethod(this, "angle", [0]);
                var diff1435 = callmethod(new GraceNum(360), "-", [1], call1432);
                onSelf = true;
                var call1436 = callmethod(this, "angle:=", [1], diff1435);
                if1427 = call1436;
              }
              lineNumber = 149
              var if1437 = var_done;
              lineNumber = 146
              var string1438 = new GraceString("right");
              var opresult1441 = callmethod(var_dir, "==", [1], string1438);
              if (Grace_isTrue(opresult1441)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1442 = callmethod(this, "angle", [0]);
                var diff1445 = callmethod(new GraceNum(360), "-", [1], call1442);
                onSelf = true;
                var call1446 = callmethod(this, "angle:=", [1], diff1445);
                if1437 = call1446;
              }
              lineNumber = 152
              var if1447 = var_done;
              lineNumber = 149
              var string1448 = new GraceString("top");
              var opresult1451 = callmethod(var_dir, "==", [1], string1448);
              if (Grace_isTrue(opresult1451)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1452 = callmethod(this, "angle", [0]);
                var diff1455 = callmethod(new GraceNum(180), "-", [1], call1452);
                onSelf = true;
                var call1456 = callmethod(this, "angle:=", [1], diff1455);
                if1447 = call1456;
              }
              lineNumber = 155
              var if1457 = var_done;
              lineNumber = 152
              var string1458 = new GraceString("bottom");
              var opresult1461 = callmethod(var_dir, "==", [1], string1458);
              if (Grace_isTrue(opresult1461)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1462 = callmethod(this, "angle", [0]);
                var diff1465 = callmethod(new GraceNum(180), "-", [1], call1462);
                onSelf = true;
                var call1466 = callmethod(this, "angle:=", [1], diff1465);
                if1457 = call1466;
              }
              lineNumber = 155
              onSelf = true;
              var call1467 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1468 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1468
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
          obj1277.methods["bounceFrom"] = func1426;
          func1426.definitionLine = 142;
          func1426.definitionModule = "musical";
          var func1469 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1469.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1470 = var_done;
              lineNumber = 159
              var call1471 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1473 = callmethod(this, "x", [0]);
              var opresult1475 = callmethod(call1473, ">", [1], call1471);
              if (Grace_isTrue(opresult1475)) {
                lineNumber = 160
                onSelf = true;
                var call1476 = callmethod(this, "bounceFrom", [1], var_left);
                if1470 = call1476;
              }
              lineNumber = 165
              var if1477 = var_done;
              lineNumber = 162
              var call1478 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1480 = callmethod(this, "x", [0]);
              var opresult1482 = callmethod(call1480, "<", [1], call1478);
              if (Grace_isTrue(opresult1482)) {
                lineNumber = 163
                onSelf = true;
                var call1483 = callmethod(this, "bounceFrom", [1], var_right);
                if1477 = call1483;
              }
              lineNumber = 165
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
              block1484.className = 'block<musical:165>';
              block1484.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1485 = callmethod(this, "touching", [1], var_other);
                return call1485;
              };
              lineNumber = 168
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
              block1486.className = 'block<musical:168>';
              block1486.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1487 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1487;
              };
              var call1488 = callmethod(Grace_prelude,"while()do", [1, 1], block1484, block1486);
              return call1488
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1469.paramCounts = [
            1,
          ];
          func1469.variableArities = [
            false,
          ];
          obj1277.methods["bounceOff"] = func1469;
          func1469.definitionLine = 158;
          func1469.definitionModule = "musical";
          var func1489 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1489.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1490 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1491 = callmethod(this, "y", [0]);
              var call1492 = callmethod(var_point,"x()y", [1, 1], call1490, call1491);
              var call1493 = callmethod(var_other,"isPointOver", [1], call1492);
              return call1493
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1489.paramCounts = [
            1,
          ];
          func1489.variableArities = [
            false,
          ];
          obj1277.methods["touching"] = func1489;
          func1489.definitionLine = 169;
          func1489.definitionModule = "musical";
          var func1494 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1494.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1495 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1496 = callmethod(this, "y", [0]);
              var call1498 = callmethod(var_other,"y", [0]);
              var opresult1500 = callmethod(call1498, "!=", [1], call1496);
              onSelf = true;
              var call1502 = callmethod(this, "x", [0]);
              var call1504 = callmethod(var_other,"x", [0]);
              var opresult1506 = callmethod(call1504, "!=", [1], call1502);
              var opresult1508 = callmethod(opresult1506, "||", [1], opresult1500);
              if (Grace_isTrue(opresult1508)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1511 = callmethod(this, "x", [0]);
                var call1513 = callmethod(var_other,"x", [0]);
                var diff1515 = callmethod(call1513, "-", [1], call1511);
                onSelf = true;
                var call1516 = callmethod(this, "y", [0]);
                var call1518 = callmethod(var_other,"y", [0]);
                var diff1520 = callmethod(call1518, "-", [1], call1516);
                var call1521 = callmethod(var_trig,"atan2", [2], diff1515, diff1520);
                var prod1523 = callmethod(call1521, "*", [1], new GraceNum(180));
                var quotient1525 = callmethod(prod1523, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1526 = callmethod(this, "angle:=", [1], quotient1525);
                if1495 = call1526;
              }
              lineNumber = 176
              onSelf = true;
              var call1527 = callmethod(this, "normaliseAngle", [0]);
              return call1527
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1494.paramCounts = [
            1,
          ];
          func1494.variableArities = [
            false,
          ];
          obj1277.methods["face"] = func1494;
          func1494.definitionLine = 172;
          func1494.definitionModule = "musical";
          var func1528 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1528.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1529 = new GraceString("2d");
              var call1530 = callmethod(var_backingCanvas,"getContext", [1], string1529);
              onSelf = true;
              var call1531 = callmethod(this, "draw", [1], call1530);
              return call1531
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1528.paramCounts = [
            0,
          ];
          func1528.variableArities = [
            false,
          ];
          obj1277.methods["stamp"] = func1528;
          func1528.definitionLine = 178;
          func1528.definitionModule = "musical";
          sourceObject = obj1277;
          lineNumber = 49
          var call1532 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1533 = callmethod(call1532, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1534 = callmethod(call1533, "initialise", [0]);
          sourceObject = obj1277;
          lineNumber = 50
          var call1535 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1277;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1277;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1277;
          lineNumber = 53
          var call1536 = callmethod(var_collections,"list", [0]);
          var call1537 = callmethod(call1536,"new", [0]);
          obj1277.data["alwaysBlocks"] = call1537;
          var reader_musical_alwaysBlocks_1538 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1538.def = true;
          reader_musical_alwaysBlocks_1538.confidential = true;
          obj1277.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1538;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1537)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1277;
          lineNumber = 55
          lineNumber = 54
          var quotient1541 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1277.data["x"] = quotient1541;
          var reader_musical_x_1542 = function() {
            return this.data["x"];
          }
          obj1277.methods["x"] = reader_musical_x_1542;
          obj1277.data["x"] = quotient1541;
          var writer_musical_x_1542 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1277.methods["x:="] = writer_musical_x_1542;
          writer_musical_x_1542.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1541)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1277.mutable = true;
          sourceObject = obj1277;
          lineNumber = 56
          lineNumber = 55
          var quotient1545 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1277.data["y"] = quotient1545;
          var reader_musical_y_1546 = function() {
            return this.data["y"];
          }
          obj1277.methods["y"] = reader_musical_y_1546;
          obj1277.data["y"] = quotient1545;
          var writer_musical_y_1546 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1277.methods["y:="] = writer_musical_y_1546;
          writer_musical_y_1546.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1545)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1277.mutable = true;
          sourceObject = obj1277;
          lineNumber = 56
          onSelf = true;
          var call1547 = callmethod(this, "x", [0]);
          obj1277.data["destX"] = call1547;
          var reader_musical_destX_1548 = function() {
            return this.data["destX"];
          }
          obj1277.methods["destX"] = reader_musical_destX_1548;
          obj1277.data["destX"] = call1547;
          var writer_musical_destX_1548 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1277.methods["destX:="] = writer_musical_destX_1548;
          reader_musical_destX_1548.confidential = true;
          writer_musical_destX_1548.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1547)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1277.mutable = true;
          sourceObject = obj1277;
          lineNumber = 57
          onSelf = true;
          var call1549 = callmethod(this, "y", [0]);
          obj1277.data["destY"] = call1549;
          var reader_musical_destY_1550 = function() {
            return this.data["destY"];
          }
          obj1277.methods["destY"] = reader_musical_destY_1550;
          obj1277.data["destY"] = call1549;
          var writer_musical_destY_1550 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1277.methods["destY:="] = writer_musical_destY_1550;
          reader_musical_destY_1550.confidential = true;
          writer_musical_destY_1550.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1549)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1277.mutable = true;
          sourceObject = obj1277;
          lineNumber = 58
          obj1277.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1551 = function() {
            return this.data["angle"];
          }
          obj1277.methods["angle"] = reader_musical_angle_1551;
          obj1277.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1551 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1277.methods["angle:="] = writer_musical_angle_1551;
          reader_musical_angle_1551.confidential = true;
          writer_musical_angle_1551.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1277.mutable = true;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          sourceObject = obj1277;
          superDepth = origSuperDepth;
        }
        obj_init_1277.apply(obj1277, []);
        return obj1277
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1276.paramCounts = [
      0,
    ];
    func1276.variableArities = [
      false,
    ];
    obj1274.methods["new"] = func1276;
    func1276.definitionLine = 48;
    func1276.definitionModule = "musical";
    var func1552 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1553 = Grace_allocObject();
        obj1553.definitionModule = "musical";
        obj1553.definitionLine = 48;
        var inho1553 = inheritingObject;
        while (inho1553.superobj) inho1553 = inho1553.superobj;
        inho1553.superobj = obj1553;
        obj1553.data = inheritingObject.data;
        obj1553.outer = this;
        var reader_musical_outer_1554 = function() {
          return this.outer;
        }
        obj1553.methods["outer"] = reader_musical_outer_1554;
        function obj_init_1553() {
          var origSuperDepth = superDepth;
          superDepth = obj1553;
          obj1553.annotations = [];
          var func1555 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1555.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1556 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1557 = Grace_allocObject();
              block1557.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1557.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1557.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1557.methods["match"] = GraceBlock_match;
              block1557.methods["prefix?"] = GraceBlock_lift;
              block1557.receiver = this;
              block1557.className = 'block<musical:63>';
              block1557.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1558 = callmethod(var_b,"apply", [0]);
                return call1558;
              };
              var call1559 = callmethod(Grace_prelude,"for()do", [1, 1], call1556, block1557);
              lineNumber = 63
              onSelf = true;
              var call1560 = callmethod(this, "tick", [0]);
              return call1560
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1555.paramCounts = [
            0,
          ];
          func1555.variableArities = [
            false,
          ];
          obj1553.methods["step"] = func1555;
          func1555.definitionLine = 59;
          func1555.definitionModule = "musical";
          var func1561 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1561.paramCounts[0])
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
          func1561.paramCounts = [
            0,
          ];
          func1561.variableArities = [
            false,
          ];
          obj1553.methods["tick"] = func1561;
          func1561.definitionLine = 66;
          func1561.definitionModule = "musical";
          var func1562 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1562.paramCounts[0])
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
          func1562.paramCounts = [
            1,
          ];
          func1562.variableArities = [
            false,
          ];
          obj1553.methods["draw"] = func1562;
          func1562.definitionLine = 67;
          func1562.definitionModule = "musical";
          var func1563 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1563.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1564 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1565 = callmethod(this, "destX:=", [1], call1564);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1566 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1567 = callmethod(this, "destY:=", [1], call1566);
              return call1567
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1563.paramCounts = [
            1,
          ];
          func1563.variableArities = [
            false,
          ];
          obj1553.methods["moveTo"] = func1563;
          func1563.definitionLine = 68;
          func1563.definitionModule = "musical";
          var func1568 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1568.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1569 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1570 = callmethod(this, "x:=", [1], call1569);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1571 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1572 = callmethod(this, "y:=", [1], call1571);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1573 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1574 = callmethod(this, "destX:=", [1], call1573);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1575 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1576 = callmethod(this, "destY:=", [1], call1575);
              return call1576
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1568.paramCounts = [
            1,
          ];
          func1568.variableArities = [
            false,
          ];
          obj1553.methods["jumpTo"] = func1568;
          func1568.definitionLine = 72;
          func1568.definitionModule = "musical";
          var func1577 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1577.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1578 = new GraceBoolean(false)
              return bool1578
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
          obj1553.methods["isPointOver"] = func1577;
          func1577.definitionLine = 78;
          func1577.definitionModule = "musical";
          var func1579 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1579.paramCounts[0])
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
          func1579.paramCounts = [
            0,
          ];
          func1579.variableArities = [
            false,
          ];
          obj1553.methods["mousedown"] = func1579;
          func1579.definitionLine = 79;
          func1579.definitionModule = "musical";
          var func1580 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1580.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1581 = callmethod(this, "alwaysBlocks", [0]);
              var call1582 = callmethod(call1581,"push", [1], var_b);
              return call1582
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1580.paramCounts = [
            1,
          ];
          func1580.variableArities = [
            false,
          ];
          obj1553.methods["always"] = func1580;
          func1580.definitionLine = 80;
          func1580.definitionModule = "musical";
          var func1583 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1583.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1583.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1584 = Grace_allocObject();
              block1584.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1584.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1584.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1584.methods["match"] = GraceBlock_match;
              block1584.methods["prefix?"] = GraceBlock_lift;
              block1584.receiver = this;
              block1584.className = 'block<musical:89>';
              block1584.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1585 = var_done;
                lineNumber = 85
                var call1586 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1586)) {
                  lineNumber = 86
                  var call1587 = callmethod(var_b,"apply", [0]);
                  if1585 = call1587;
                }
                return if1585;
              };
              onSelf = true;
              var call1588 = callmethod(this, "always", [1], block1584);
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
            1,
            1,
          ];
          func1583.variableArities = [
            false,
            false,
          ];
          obj1553.methods["whenever()do"] = func1583;
          func1583.definitionLine = 83;
          func1583.definitionModule = "musical";
          var func1589 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1593 = callmethod(this, "angle", [0]);
              var quotient1595 = callmethod(call1593, "/", [1], new GraceNum(180));
              var prod1597 = callmethod(quotient1595, "*", [1], var_PI);
              var call1598 = callmethod(var_trig,"cos", [1], prod1597);
              var prod1600 = callmethod(call1598, "*", [1], var_dist);
              var var_y__39__ = prod1600;
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
              var call1604 = callmethod(this, "angle", [0]);
              var quotient1606 = callmethod(call1604, "/", [1], new GraceNum(180));
              var prod1608 = callmethod(quotient1606, "*", [1], var_PI);
              var call1609 = callmethod(var_trig,"sin", [1], prod1608);
              var prod1611 = callmethod(call1609, "*", [1], var_dist);
              var var_x__39__ = prod1611;
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
              var call1613 = callmethod(this, "x", [0]);
              var opresult1615 = callmethod(call1613, "+", [1], var_x__39__);
              onSelf = true;
              var call1616 = callmethod(this, "x:=", [1], opresult1615);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1618 = callmethod(this, "y", [0]);
              var opresult1620 = callmethod(call1618, "+", [1], var_y__39__);
              onSelf = true;
              var call1621 = callmethod(this, "y:=", [1], opresult1620);
              return call1621
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1589.paramCounts = [
            1,
          ];
          func1589.variableArities = [
            false,
          ];
          obj1553.methods["forward"] = func1589;
          func1589.definitionLine = 90;
          func1589.definitionModule = "musical";
          var func1622 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1622.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1623 = Grace_allocObject();
              block1623.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1623.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1623.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1623.methods["match"] = GraceBlock_match;
              block1623.methods["prefix?"] = GraceBlock_lift;
              block1623.receiver = this;
              block1623.className = 'block<musical:97>';
              block1623.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1625 = callmethod(this, "angle", [0]);
                var opresult1627 = callmethod(call1625, "<", [1], new GraceNum(0));
                return opresult1627;
              };
              lineNumber = 100
              var block1628 = Grace_allocObject();
              block1628.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1628.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1628.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1628.methods["match"] = GraceBlock_match;
              block1628.methods["prefix?"] = GraceBlock_lift;
              block1628.receiver = this;
              block1628.className = 'block<musical:100>';
              block1628.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1630 = callmethod(this, "angle", [0]);
                var opresult1632 = callmethod(call1630, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1633 = callmethod(this, "angle:=", [1], opresult1632);
                return call1633;
              };
              var call1634 = callmethod(Grace_prelude,"while()do", [1, 1], block1623, block1628);
              lineNumber = 100
              var block1635 = Grace_allocObject();
              block1635.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1635.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1635.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1635.methods["match"] = GraceBlock_match;
              block1635.methods["prefix?"] = GraceBlock_lift;
              block1635.receiver = this;
              block1635.className = 'block<musical:100>';
              block1635.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1637 = callmethod(this, "angle", [0]);
                var opresult1639 = callmethod(call1637, ">", [1], new GraceNum(360));
                return opresult1639;
              };
              lineNumber = 103
              var block1640 = Grace_allocObject();
              block1640.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1640.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1640.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1640.methods["match"] = GraceBlock_match;
              block1640.methods["prefix?"] = GraceBlock_lift;
              block1640.receiver = this;
              block1640.className = 'block<musical:103>';
              block1640.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1642 = callmethod(this, "angle", [0]);
                var diff1644 = callmethod(call1642, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1645 = callmethod(this, "angle:=", [1], diff1644);
                return call1645;
              };
              var call1646 = callmethod(Grace_prelude,"while()do", [1, 1], block1635, block1640);
              return call1646
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
          obj1553.methods["normaliseAngle"] = func1622;
          func1622.definitionLine = 96;
          func1622.definitionModule = "musical";
          var func1647 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1647.paramCounts[0])
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
              var call1649 = callmethod(this, "angle", [0]);
              var opresult1651 = callmethod(call1649, "+", [1], var_degrees);
              onSelf = true;
              var call1652 = callmethod(this, "angle:=", [1], opresult1651);
              lineNumber = 106
              onSelf = true;
              var call1653 = callmethod(this, "normaliseAngle", [0]);
              return call1653
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1647.paramCounts = [
            1,
          ];
          func1647.variableArities = [
            false,
          ];
          obj1553.methods["turn"] = func1647;
          func1647.definitionLine = 104;
          func1647.definitionModule = "musical";
          var func1654 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1654.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1655 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1656 = callmethod(this, "x", [0]);
              var call1657 = callmethod(var_point,"x()y", [1, 1], call1656, new GraceNum(0));
              onSelf = true;
              var call1658 = callmethod(this, "isPointOver", [1], call1657);
              if (Grace_isTrue(call1658)) {
                lineNumber = 111
                lineNumber = 110
                var bool1659 = new GraceBoolean(true)
                return bool1659
              }
              lineNumber = 115
              var if1660 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1661 = callmethod(this, "x", [0]);
              var call1662 = callmethod(var_point,"x()y", [1, 1], call1661, var_canvasHeight);
              onSelf = true;
              var call1663 = callmethod(this, "isPointOver", [1], call1662);
              if (Grace_isTrue(call1663)) {
                lineNumber = 114
                lineNumber = 113
                var bool1664 = new GraceBoolean(true)
                return bool1664
              }
              lineNumber = 118
              var if1665 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1666 = callmethod(this, "y", [0]);
              var call1667 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1666);
              onSelf = true;
              var call1668 = callmethod(this, "isPointOver", [1], call1667);
              if (Grace_isTrue(call1668)) {
                lineNumber = 117
                lineNumber = 116
                var bool1669 = new GraceBoolean(true)
                return bool1669
              }
              lineNumber = 121
              var if1670 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1671 = callmethod(this, "y", [0]);
              var call1672 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1671);
              onSelf = true;
              var call1673 = callmethod(this, "isPointOver", [1], call1672);
              if (Grace_isTrue(call1673)) {
                lineNumber = 120
                lineNumber = 119
                var bool1674 = new GraceBoolean(true)
                return bool1674
              }
              lineNumber = 122
              lineNumber = 121
              var bool1675 = new GraceBoolean(false)
              return bool1675
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1654.paramCounts = [
            0,
          ];
          func1654.variableArities = [
            false,
          ];
          obj1553.methods["touchingEdge"] = func1654;
          func1654.definitionLine = 108;
          func1654.definitionModule = "musical";
          var func1676 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1676.paramCounts[0])
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
              var if1677 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1678 = callmethod(this, "x", [0]);
              var call1679 = callmethod(var_point,"x()y", [1, 1], call1678, new GraceNum(0));
              onSelf = true;
              var call1680 = callmethod(this, "isPointOver", [1], call1679);
              if (Grace_isTrue(call1680)) {
                lineNumber = 127
                onSelf = true;
                var call1681 = callmethod(this, "bounceFrom", [1], var_top);
                if1677 = call1681;
              }
              lineNumber = 132
              var if1682 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1683 = callmethod(this, "x", [0]);
              var call1684 = callmethod(var_point,"x()y", [1, 1], call1683, var_canvasHeight);
              onSelf = true;
              var call1685 = callmethod(this, "isPointOver", [1], call1684);
              if (Grace_isTrue(call1685)) {
                lineNumber = 130
                onSelf = true;
                var call1686 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1682 = call1686;
              }
              lineNumber = 135
              var if1687 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1688 = callmethod(this, "y", [0]);
              var call1689 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1688);
              onSelf = true;
              var call1690 = callmethod(this, "isPointOver", [1], call1689);
              if (Grace_isTrue(call1690)) {
                lineNumber = 133
                onSelf = true;
                var call1691 = callmethod(this, "bounceFrom", [1], var_left);
                if1687 = call1691;
              }
              lineNumber = 138
              var if1692 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1693 = callmethod(this, "y", [0]);
              var call1694 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1693);
              onSelf = true;
              var call1695 = callmethod(this, "isPointOver", [1], call1694);
              if (Grace_isTrue(call1695)) {
                lineNumber = 136
                onSelf = true;
                var call1696 = callmethod(this, "bounceFrom", [1], var_right);
                if1692 = call1696;
              }
              lineNumber = 138
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
              block1697.className = 'block<musical:138>';
              block1697.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1698 = callmethod(this, "touchingEdge", [0]);
                return call1698;
              };
              lineNumber = 141
              var block1699 = Grace_allocObject();
              block1699.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1699.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1699.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1699.methods["match"] = GraceBlock_match;
              block1699.methods["prefix?"] = GraceBlock_lift;
              block1699.receiver = this;
              block1699.className = 'block<musical:141>';
              block1699.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1700 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1700;
              };
              var call1701 = callmethod(Grace_prelude,"while()do", [1, 1], block1697, block1699);
              return call1701
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
          obj1553.methods["bounce"] = func1676;
          func1676.definitionLine = 123;
          func1676.definitionModule = "musical";
          var func1702 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1702.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1703 = var_done;
              lineNumber = 143
              var string1704 = new GraceString("left");
              var opresult1707 = callmethod(var_dir, "==", [1], string1704);
              if (Grace_isTrue(opresult1707)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1708 = callmethod(this, "angle", [0]);
                var diff1711 = callmethod(new GraceNum(360), "-", [1], call1708);
                onSelf = true;
                var call1712 = callmethod(this, "angle:=", [1], diff1711);
                if1703 = call1712;
              }
              lineNumber = 149
              var if1713 = var_done;
              lineNumber = 146
              var string1714 = new GraceString("right");
              var opresult1717 = callmethod(var_dir, "==", [1], string1714);
              if (Grace_isTrue(opresult1717)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1718 = callmethod(this, "angle", [0]);
                var diff1721 = callmethod(new GraceNum(360), "-", [1], call1718);
                onSelf = true;
                var call1722 = callmethod(this, "angle:=", [1], diff1721);
                if1713 = call1722;
              }
              lineNumber = 152
              var if1723 = var_done;
              lineNumber = 149
              var string1724 = new GraceString("top");
              var opresult1727 = callmethod(var_dir, "==", [1], string1724);
              if (Grace_isTrue(opresult1727)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1728 = callmethod(this, "angle", [0]);
                var diff1731 = callmethod(new GraceNum(180), "-", [1], call1728);
                onSelf = true;
                var call1732 = callmethod(this, "angle:=", [1], diff1731);
                if1723 = call1732;
              }
              lineNumber = 155
              var if1733 = var_done;
              lineNumber = 152
              var string1734 = new GraceString("bottom");
              var opresult1737 = callmethod(var_dir, "==", [1], string1734);
              if (Grace_isTrue(opresult1737)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1738 = callmethod(this, "angle", [0]);
                var diff1741 = callmethod(new GraceNum(180), "-", [1], call1738);
                onSelf = true;
                var call1742 = callmethod(this, "angle:=", [1], diff1741);
                if1733 = call1742;
              }
              lineNumber = 155
              onSelf = true;
              var call1743 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1744 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1744
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1702.paramCounts = [
            1,
          ];
          func1702.variableArities = [
            false,
          ];
          obj1553.methods["bounceFrom"] = func1702;
          func1702.definitionLine = 142;
          func1702.definitionModule = "musical";
          var func1745 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1745.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1746 = var_done;
              lineNumber = 159
              var call1747 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1749 = callmethod(this, "x", [0]);
              var opresult1751 = callmethod(call1749, ">", [1], call1747);
              if (Grace_isTrue(opresult1751)) {
                lineNumber = 160
                onSelf = true;
                var call1752 = callmethod(this, "bounceFrom", [1], var_left);
                if1746 = call1752;
              }
              lineNumber = 165
              var if1753 = var_done;
              lineNumber = 162
              var call1754 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1756 = callmethod(this, "x", [0]);
              var opresult1758 = callmethod(call1756, "<", [1], call1754);
              if (Grace_isTrue(opresult1758)) {
                lineNumber = 163
                onSelf = true;
                var call1759 = callmethod(this, "bounceFrom", [1], var_right);
                if1753 = call1759;
              }
              lineNumber = 165
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
              block1760.className = 'block<musical:165>';
              block1760.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1761 = callmethod(this, "touching", [1], var_other);
                return call1761;
              };
              lineNumber = 168
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
              block1762.className = 'block<musical:168>';
              block1762.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1763 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1763;
              };
              var call1764 = callmethod(Grace_prelude,"while()do", [1, 1], block1760, block1762);
              return call1764
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1745.paramCounts = [
            1,
          ];
          func1745.variableArities = [
            false,
          ];
          obj1553.methods["bounceOff"] = func1745;
          func1745.definitionLine = 158;
          func1745.definitionModule = "musical";
          var func1765 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1765.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1766 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1767 = callmethod(this, "y", [0]);
              var call1768 = callmethod(var_point,"x()y", [1, 1], call1766, call1767);
              var call1769 = callmethod(var_other,"isPointOver", [1], call1768);
              return call1769
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1765.paramCounts = [
            1,
          ];
          func1765.variableArities = [
            false,
          ];
          obj1553.methods["touching"] = func1765;
          func1765.definitionLine = 169;
          func1765.definitionModule = "musical";
          var func1770 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1770.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1771 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1772 = callmethod(this, "y", [0]);
              var call1774 = callmethod(var_other,"y", [0]);
              var opresult1776 = callmethod(call1774, "!=", [1], call1772);
              onSelf = true;
              var call1778 = callmethod(this, "x", [0]);
              var call1780 = callmethod(var_other,"x", [0]);
              var opresult1782 = callmethod(call1780, "!=", [1], call1778);
              var opresult1784 = callmethod(opresult1782, "||", [1], opresult1776);
              if (Grace_isTrue(opresult1784)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1787 = callmethod(this, "x", [0]);
                var call1789 = callmethod(var_other,"x", [0]);
                var diff1791 = callmethod(call1789, "-", [1], call1787);
                onSelf = true;
                var call1792 = callmethod(this, "y", [0]);
                var call1794 = callmethod(var_other,"y", [0]);
                var diff1796 = callmethod(call1794, "-", [1], call1792);
                var call1797 = callmethod(var_trig,"atan2", [2], diff1791, diff1796);
                var prod1799 = callmethod(call1797, "*", [1], new GraceNum(180));
                var quotient1801 = callmethod(prod1799, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1802 = callmethod(this, "angle:=", [1], quotient1801);
                if1771 = call1802;
              }
              lineNumber = 176
              onSelf = true;
              var call1803 = callmethod(this, "normaliseAngle", [0]);
              return call1803
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1770.paramCounts = [
            1,
          ];
          func1770.variableArities = [
            false,
          ];
          obj1553.methods["face"] = func1770;
          func1770.definitionLine = 172;
          func1770.definitionModule = "musical";
          var func1804 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1804.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1805 = new GraceString("2d");
              var call1806 = callmethod(var_backingCanvas,"getContext", [1], string1805);
              onSelf = true;
              var call1807 = callmethod(this, "draw", [1], call1806);
              return call1807
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1804.paramCounts = [
            0,
          ];
          func1804.variableArities = [
            false,
          ];
          obj1553.methods["stamp"] = func1804;
          func1804.definitionLine = 178;
          func1804.definitionModule = "musical";
          sourceObject = obj1553;
          lineNumber = 49
          var call1808 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1809 = callmethod(call1808, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1810 = callmethod(call1809, "initialise", [0]);
          sourceObject = obj1553;
          lineNumber = 50
          var call1811 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1553;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1553;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1553;
          lineNumber = 53
          var call1812 = callmethod(var_collections,"list", [0]);
          var call1813 = callmethod(call1812,"new", [0]);
          obj1553.data["alwaysBlocks"] = call1813;
          var reader_musical_alwaysBlocks_1814 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1814.def = true;
          reader_musical_alwaysBlocks_1814.confidential = true;
          obj1553.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1814;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1813)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1553;
          lineNumber = 55
          lineNumber = 54
          var quotient1817 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1553.data["x"] = quotient1817;
          var reader_musical_x_1818 = function() {
            return this.data["x"];
          }
          obj1553.methods["x"] = reader_musical_x_1818;
          obj1553.data["x"] = quotient1817;
          var writer_musical_x_1818 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1553.methods["x:="] = writer_musical_x_1818;
          writer_musical_x_1818.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1817)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1553.mutable = true;
          sourceObject = obj1553;
          lineNumber = 56
          lineNumber = 55
          var quotient1821 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1553.data["y"] = quotient1821;
          var reader_musical_y_1822 = function() {
            return this.data["y"];
          }
          obj1553.methods["y"] = reader_musical_y_1822;
          obj1553.data["y"] = quotient1821;
          var writer_musical_y_1822 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1553.methods["y:="] = writer_musical_y_1822;
          writer_musical_y_1822.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1821)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1553.mutable = true;
          sourceObject = obj1553;
          lineNumber = 56
          onSelf = true;
          var call1823 = callmethod(this, "x", [0]);
          obj1553.data["destX"] = call1823;
          var reader_musical_destX_1824 = function() {
            return this.data["destX"];
          }
          obj1553.methods["destX"] = reader_musical_destX_1824;
          obj1553.data["destX"] = call1823;
          var writer_musical_destX_1824 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1553.methods["destX:="] = writer_musical_destX_1824;
          reader_musical_destX_1824.confidential = true;
          writer_musical_destX_1824.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1823)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1553.mutable = true;
          sourceObject = obj1553;
          lineNumber = 57
          onSelf = true;
          var call1825 = callmethod(this, "y", [0]);
          obj1553.data["destY"] = call1825;
          var reader_musical_destY_1826 = function() {
            return this.data["destY"];
          }
          obj1553.methods["destY"] = reader_musical_destY_1826;
          obj1553.data["destY"] = call1825;
          var writer_musical_destY_1826 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1553.methods["destY:="] = writer_musical_destY_1826;
          reader_musical_destY_1826.confidential = true;
          writer_musical_destY_1826.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1825)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1553.mutable = true;
          sourceObject = obj1553;
          lineNumber = 58
          obj1553.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1827 = function() {
            return this.data["angle"];
          }
          obj1553.methods["angle"] = reader_musical_angle_1827;
          obj1553.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1827 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1553.methods["angle:="] = writer_musical_angle_1827;
          reader_musical_angle_1827.confidential = true;
          writer_musical_angle_1827.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1553.mutable = true;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          sourceObject = obj1553;
          superDepth = origSuperDepth;
        }
        obj_init_1553.apply(inheritingObject, []);
        return obj1553
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1274.methods["new()object"] = func1552;
    var func1828 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1829 = new GraceString("class drawable");
        return string1829
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1828.paramCounts = [
    ];
    func1828.variableArities = [
    ];
    obj1274.methods["asDebugString"] = func1828;
    func1828.definitionLine = 48;
    func1828.definitionModule = "musical";
    sourceObject = obj1274;
    sourceObject = obj1274;
    superDepth = origSuperDepth;
  }
  obj_init_1274.apply(obj1274, []);
  var var_drawable = obj1274;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1830 = Grace_allocObject();
  obj1830.definitionModule = "musical";
  obj1830.definitionLine = 316;
  obj1830.outer = this;
  var reader_musical_outer_1831 = function() {
    return this.outer;
  }
  obj1830.methods["outer"] = reader_musical_outer_1831;
  function obj_init_1830() {
    var origSuperDepth = superDepth;
    superDepth = obj1830;
    obj1830.annotations = [];
    var func1832 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1832.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1833 = callmethod(this, "position", [0]);
        var call1834 = callmethod(call1833,"x", [0]);
        return call1834
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
    obj1830.methods["x"] = func1832;
    func1832.definitionLine = 318;
    func1832.definitionModule = "musical";
    var func1835 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1835.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1836 = callmethod(this, "position", [0]);
        var call1837 = callmethod(call1836,"y", [0]);
        return call1837
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1835.paramCounts = [
      0,
    ];
    func1835.variableArities = [
      false,
    ];
    obj1830.methods["y"] = func1835;
    func1835.definitionLine = 321;
    func1835.definitionModule = "musical";
    var func1838 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1838.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1839 = callmethod(this, "position", [0]);
        return call1839
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1838.paramCounts = [
      0,
    ];
    func1838.variableArities = [
      false,
    ];
    obj1830.methods["location"] = func1838;
    func1838.definitionLine = 324;
    func1838.definitionModule = "musical";
    sourceObject = obj1830;
    lineNumber = 317
    var call1840 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1830.data["position"] = call1840;
    var reader_musical_position_1841 = function() {
      return this.data["position"];
    }
    obj1830.methods["position"] = reader_musical_position_1841;
    obj1830.data["position"] = call1840;
    var writer_musical_position_1841 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1830.methods["position:="] = writer_musical_position_1841;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1840)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1830.mutable = true;
    sourceObject = obj1830;
    sourceObject = obj1830;
    sourceObject = obj1830;
    superDepth = origSuperDepth;
  }
  obj_init_1830.apply(obj1830, []);
  var var_mouse = obj1830;
  lineNumber = 322
  var func1842 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1842.paramCounts[0])
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
  func1842.paramCounts = [
    0,
  ];
  func1842.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1842;
  func1842.definitionLine = 322;
  func1842.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 408
  lineNumber = 467
  lineNumber = 484
  lineNumber = 483
  var bool1843 = new GraceBoolean(false)
  var var_applyFlat = bool1843;
  lineNumber = 322
  var func1844 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1844.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 483
      return var_applyFlat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1844.paramCounts = [
    0,
  ];
  func1844.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1844;
  func1844.definitionLine = 322;
  func1844.definitionModule = "musical";
  lineNumber = 322
  var func1845 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1845.paramCounts[0])
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
  func1845.paramCounts = [
    1,
  ];
  func1845.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1845;
  func1845.definitionLine = 322;
  func1845.definitionModule = "musical";
  lineNumber = 484;
  moduleName = "musical";
  lineNumber = 483
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 486
  lineNumber = 484
  var bool1846 = new GraceBoolean(false)
  var var_applySharp = bool1846;
  lineNumber = 322
  var func1847 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1847.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 484
      return var_applySharp
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
  this.methods["applySharp"] = func1847;
  func1847.definitionLine = 322;
  func1847.definitionModule = "musical";
  lineNumber = 322
  var func1848 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1848.paramCounts[0])
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
  func1848.paramCounts = [
    1,
  ];
  func1848.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1848;
  func1848.definitionLine = 322;
  func1848.definitionModule = "musical";
  lineNumber = 486;
  moduleName = "musical";
  lineNumber = 484
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 486
  lineNumber = 487
  lineNumber = 486
  var bool1849 = new GraceBoolean(false)
  var var_applyChorus = bool1849;
  lineNumber = 322
  var func1850 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1850.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 486
      return var_applyChorus
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
  this.methods["applyChorus"] = func1850;
  func1850.definitionLine = 322;
  func1850.definitionModule = "musical";
  lineNumber = 322
  var func1851 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1851.paramCounts[0])
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
  func1851.paramCounts = [
    1,
  ];
  func1851.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1851;
  func1851.definitionLine = 322;
  func1851.definitionModule = "musical";
  lineNumber = 487;
  moduleName = "musical";
  lineNumber = 486
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 488
  lineNumber = 487
  var bool1852 = new GraceBoolean(false)
  var var_applyReverb = bool1852;
  lineNumber = 322
  var func1853 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1853.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 487
      return var_applyReverb
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
  this.methods["applyReverb"] = func1853;
  func1853.definitionLine = 322;
  func1853.definitionModule = "musical";
  lineNumber = 322
  var func1854 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1854.paramCounts[0])
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
  func1854.paramCounts = [
    1,
  ];
  func1854.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1854;
  func1854.definitionLine = 322;
  func1854.definitionModule = "musical";
  lineNumber = 488;
  moduleName = "musical";
  lineNumber = 487
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 489
  lineNumber = 488
  var bool1855 = new GraceBoolean(false)
  var var_applyAutowah = bool1855;
  lineNumber = 322
  var func1856 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1856.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 488
      return var_applyAutowah
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1856.paramCounts = [
    0,
  ];
  func1856.variableArities = [
    false,
  ];
  this.methods["applyAutowah"] = func1856;
  func1856.definitionLine = 322;
  func1856.definitionModule = "musical";
  lineNumber = 322
  var func1857 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1857.paramCounts[0])
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
  func1857.paramCounts = [
    1,
  ];
  func1857.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1857;
  func1857.definitionLine = 322;
  func1857.definitionModule = "musical";
  lineNumber = 489;
  moduleName = "musical";
  lineNumber = 488
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 494
  lineNumber = 489
  var bool1858 = new GraceBoolean(false)
  var var_applyCheby = bool1858;
  lineNumber = 322
  var func1859 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1859.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 489
      return var_applyCheby
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1859.paramCounts = [
    0,
  ];
  func1859.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1859;
  func1859.definitionLine = 322;
  func1859.definitionModule = "musical";
  lineNumber = 322
  var func1860 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1860.paramCounts[0])
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
  func1860.paramCounts = [
    1,
  ];
  func1860.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1860;
  func1860.definitionLine = 322;
  func1860.definitionModule = "musical";
  lineNumber = 494;
  moduleName = "musical";
  lineNumber = 489
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 494
  lineNumber = 524
  lineNumber = 533
  lineNumber = 542
  lineNumber = 547
  lineNumber = 552
  lineNumber = 557
  lineNumber = 562
  lineNumber = 567
  lineNumber = 572
  lineNumber = 580
  lineNumber = 597
  lineNumber = 603
  lineNumber = 609
  lineNumber = 615
  lineNumber = 623
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "methods-of:point.x()y:\n left\n down\n right\n up\n x\n y\nmethods-of:drawable.new:\n x:=\n y:=\n always\n forward\n touchingEdge\n x\n y\n face\n step\n bounceFrom\n angle:=\n mousedown\n isPointOver\n stamp\n angle\n whenever()do\n turn\n destX:=\n tick\n draw\n alwaysBlocks\n normaliseAngle\n bounceOff\n moveTo\n jumpTo\n destY:=\n bounce\n touching\n destX\n destY\npath:\n musical\nconstructors-of:point:\n x()y\nfresh:value:\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n label\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n bounceOff\n destY:=\n destX\n destY\n face\n touchingEdge\n label:=\n x:=\n step\n mousedown\n whenever()do\n destX:=\n colour:=\n moveTo\n jumpTo\n bounce\nconfidential:\nconstructors-of:drawable:\n new\nfresh:image:\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n width\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n bounceOff\n imgTag\n destY:=\n destX\n destY\n face\n touchingEdge\n width:=\n x:=\n step\n mousedown\n whenever()do\n destX:=\n url:=\n height:=\n url\n height\n moveTo\n jumpTo\n bounce\nclasses:\n point\n drawable\nfresh-methods:\n rectangle\n circle\n image\n value\nmodules:\n StandardPrelude\n mgcollections\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n Note\n C\n D\n E\n F\n G\n A\n B\n flat\n sharp\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nfresh:circle:\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n bounceOff\n radius:=\n destY:=\n destX\n destY\n face\n touchingEdge\n x:=\n step\n mousedown\n whenever()do\n destX:=\n colour:=\n moveTo\n jumpTo\n bounce\n radius\nfresh:rectangle:\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n width\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n bounceOff\n destY:=\n destX\n destY\n face\n touchingEdge\n width:=\n x:=\n step\n mousedown\n whenever()do\n destX:=\n colour:=\n height:=\n asString\n height\n moveTo\n jumpTo\n bounce\n";
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
    "    dom.window.console.log(\"start\");",
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
    "    dom.window.console.log(\"moduleend\")",
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
    "        dom.window.t_add(\"{note}b4\")",
    "        return",
    "    }",
    "    if (applySharp == true) then {",
    "        dom.window.t_add(\"{note}####4\")",
    "        return",
    "    }",
    "    dom.window.t_add(\"{note}4\")",
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
