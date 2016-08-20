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
        return var_done
      }
      lineNumber = 515
      var if1015 = var_done;
      lineNumber = 511
      var bool1016 = new GraceBoolean(true)
      var opresult1019 = callmethod(var_applySharp, "==", [1], bool1016);
      if (Grace_isTrue(opresult1019)) {
        lineNumber = 512
        var string1020 = new GraceString("");
        var string1023 = new GraceString("#");
        var string1026 = new GraceString("");
        var opresult1028 = callmethod(string1026, "++", [1], var_note);
        var opresult1030 = callmethod(opresult1028, "++", [1], string1023);
        var opresult1032 = callmethod(opresult1030, "++", [1], var_octave);
        var opresult1034 = callmethod(opresult1032, "++", [1], string1020);
        var call1035 = callmethod(var_dom,"window", [0]);
        var call1036 = callmethod(call1035,"t_add", [1], opresult1034);
        lineNumber = 514
        return var_done
      }
      lineNumber = 515
      var string1037 = new GraceString("");
      var string1040 = new GraceString("");
      var string1043 = new GraceString("");
      var opresult1045 = callmethod(string1043, "++", [1], var_note);
      var opresult1047 = callmethod(opresult1045, "++", [1], string1040);
      var opresult1049 = callmethod(opresult1047, "++", [1], var_octave);
      var opresult1051 = callmethod(opresult1049, "++", [1], string1037);
      var call1052 = callmethod(var_dom,"window", [0]);
      var call1053 = callmethod(call1052,"t_add", [1], opresult1051);
      return call1053
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
  lineNumber = 518
  var func1054 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1054.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 519
      var string1055 = new GraceString("C");
      onSelf = true;
      var call1056 = callmethod(this, "Note", [1], string1055);
      return call1056
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1054.paramCounts = [
    0,
  ];
  func1054.variableArities = [
    false,
  ];
  this.methods["C"] = func1054;
  func1054.definitionLine = 518;
  func1054.definitionModule = "musical";
  lineNumber = 521
  var func1057 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1057.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 522
      var string1058 = new GraceString("D");
      onSelf = true;
      var call1059 = callmethod(this, "Note", [1], string1058);
      return call1059
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1057.paramCounts = [
    0,
  ];
  func1057.variableArities = [
    false,
  ];
  this.methods["D"] = func1057;
  func1057.definitionLine = 521;
  func1057.definitionModule = "musical";
  lineNumber = 524
  var func1060 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1060.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 525
      var string1061 = new GraceString("E");
      onSelf = true;
      var call1062 = callmethod(this, "Note", [1], string1061);
      return call1062
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1060.paramCounts = [
    0,
  ];
  func1060.variableArities = [
    false,
  ];
  this.methods["E"] = func1060;
  func1060.definitionLine = 524;
  func1060.definitionModule = "musical";
  lineNumber = 527
  var func1063 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1063.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 528
      var string1064 = new GraceString("F");
      onSelf = true;
      var call1065 = callmethod(this, "Note", [1], string1064);
      return call1065
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1063.paramCounts = [
    0,
  ];
  func1063.variableArities = [
    false,
  ];
  this.methods["F"] = func1063;
  func1063.definitionLine = 527;
  func1063.definitionModule = "musical";
  lineNumber = 530
  var func1066 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1066.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 531
      var string1067 = new GraceString("G");
      onSelf = true;
      var call1068 = callmethod(this, "Note", [1], string1067);
      return call1068
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1066.paramCounts = [
    0,
  ];
  func1066.variableArities = [
    false,
  ];
  this.methods["G"] = func1066;
  func1066.definitionLine = 530;
  func1066.definitionModule = "musical";
  lineNumber = 533
  var func1069 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1069.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 534
      var string1070 = new GraceString("A");
      onSelf = true;
      var call1071 = callmethod(this, "Note", [1], string1070);
      return call1071
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1069.paramCounts = [
    0,
  ];
  func1069.variableArities = [
    false,
  ];
  this.methods["A"] = func1069;
  func1069.definitionLine = 533;
  func1069.definitionModule = "musical";
  lineNumber = 536
  var func1072 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1072.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 537
      var string1073 = new GraceString("B");
      onSelf = true;
      var call1074 = callmethod(this, "Note", [1], string1073);
      return call1074
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1072.paramCounts = [
    0,
  ];
  func1072.variableArities = [
    false,
  ];
  this.methods["B"] = func1072;
  func1072.definitionLine = 536;
  func1072.definitionModule = "musical";
  lineNumber = 540
  var func1075 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1075.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 542
      lineNumber = 541
      var bool1076 = new GraceBoolean(true)
      var_applyFlat = bool1076;
      lineNumber = 542
      var call1077 = callmethod(var_note,"apply", [0]);
      lineNumber = 544
      lineNumber = 543
      var bool1078 = new GraceBoolean(false)
      var_applyFlat = bool1078;
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
  this.methods["flat"] = func1075;
  func1075.definitionLine = 540;
  func1075.definitionModule = "musical";
  lineNumber = 545
  var func1079 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1079.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 547
      lineNumber = 546
      var bool1080 = new GraceBoolean(true)
      var_applySharp = bool1080;
      lineNumber = 547
      var call1081 = callmethod(var_note,"apply", [0]);
      lineNumber = 549
      lineNumber = 548
      var bool1082 = new GraceBoolean(false)
      var_applySharp = bool1082;
      return bool1082
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
  ];
  func1079.variableArities = [
    false,
  ];
  this.methods["sharp"] = func1079;
  func1079.definitionLine = 545;
  func1079.definitionModule = "musical";
  lineNumber = 551
  var func1083 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1083.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1083.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 553
      lineNumber = 552
      var var_oldOctave = var_octave;
      lineNumber = 553;
      moduleName = "musical";
      lineNumber = 552
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 554
      lineNumber = 553
      var_octave = var_num;
      lineNumber = 554
      var call1084 = callmethod(var_notes,"apply", [0]);
      lineNumber = 556
      lineNumber = 555
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
  func1083.paramCounts = [
    1,
    1,
  ];
  func1083.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1083;
  func1083.definitionLine = 551;
  func1083.definitionModule = "musical";
  lineNumber = 561
  var func1085 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1085.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 566
      var if1086 = var_done;
      lineNumber = 562
      var bool1087 = new GraceBoolean(true)
      var opresult1090 = callmethod(var_firstPass, "==", [1], bool1087);
      if (Grace_isTrue(opresult1090)) {
        lineNumber = 563
        var call1091 = callmethod(var_dom,"window", [0]);
        var call1092 = callmethod(call1091,"t_reset", [0]);
        lineNumber = 565
        lineNumber = 564
        var bool1093 = new GraceBoolean(false)
        var_firstPass = bool1093;
        if1086 = bool1093;
      }
      lineNumber = 566
      var call1094 = callmethod(var_dom,"window", [0]);
      var call1095 = callmethod(call1094,"t_init", [0]);
      lineNumber = 567
      var call1096 = callmethod(var_blocks,"apply", [0]);
      return call1096
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
  this.methods["Instrument"] = func1085;
  func1085.definitionLine = 561;
  func1085.definitionModule = "musical";
  lineNumber = 570
  var func1097 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1097.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 571
      onSelf = true;
      var call1098 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 572
      var call1099 = callmethod(var_dom,"window", [0]);
      var call1100 = callmethod(call1099,"t_synth_mono", [0]);
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
  this.methods["monoSynth"] = func1097;
  func1097.definitionLine = 570;
  func1097.definitionModule = "musical";
  lineNumber = 575
  var func1101 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1101.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 576
      onSelf = true;
      var call1102 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 577
      var call1103 = callmethod(var_dom,"window", [0]);
      var call1104 = callmethod(call1103,"t_synth_pluck", [0]);
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
  this.methods["pluckSynth"] = func1101;
  func1101.definitionLine = 575;
  func1101.definitionModule = "musical";
  lineNumber = 580
  var func1105 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1105.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 581
      onSelf = true;
      var call1106 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 582
      var call1107 = callmethod(var_dom,"window", [0]);
      var call1108 = callmethod(call1107,"t_synth_poly", [0]);
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
  this.methods["polySynth"] = func1105;
  func1105.definitionLine = 580;
  func1105.definitionModule = "musical";
  lineNumber = 585
  var func1109 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1109.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 586
      onSelf = true;
      var call1110 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 587
      var call1111 = callmethod(var_dom,"window", [0]);
      var call1112 = callmethod(call1111,"t_synth_fm", [0]);
      return call1112
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
  this.methods["fmSynth"] = func1109;
  func1109.definitionLine = 585;
  func1109.definitionModule = "musical";
  lineNumber = 590
  var func1113 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1113.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 591
      onSelf = true;
      var call1114 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 592
      var call1115 = callmethod(var_dom,"window", [0]);
      var call1116 = callmethod(call1115,"t_synth_membrane", [0]);
      return call1116
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1113.paramCounts = [
    1,
  ];
  func1113.variableArities = [
    false,
  ];
  this.methods["membraneSynth"] = func1113;
  func1113.definitionLine = 590;
  func1113.definitionModule = "musical";
  lineNumber = 595
  var func1117 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1117.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 596
      onSelf = true;
      var call1118 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 597
      var call1119 = callmethod(var_dom,"window", [0]);
      var call1120 = callmethod(call1119,"t_synth_duo", [0]);
      return call1120
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
  this.methods["duoSynth"] = func1117;
  func1117.definitionLine = 595;
  func1117.definitionModule = "musical";
  lineNumber = 603
  var func1121 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1121.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 607
      var if1122 = var_done;
      lineNumber = 604
      var bool1123 = new GraceBoolean(true)
      var opresult1126 = callmethod(var_applyChorus, "==", [1], bool1123);
      if (Grace_isTrue(opresult1126)) {
        lineNumber = 605
        var call1127 = callmethod(var_dom,"window", [0]);
        var call1128 = callmethod(call1127,"t_effect_chorus", [0]);
        if1122 = call1128;
      }
      lineNumber = 610
      var if1129 = var_done;
      lineNumber = 607
      var bool1130 = new GraceBoolean(true)
      var opresult1133 = callmethod(var_applyReverb, "==", [1], bool1130);
      if (Grace_isTrue(opresult1133)) {
        lineNumber = 608
        var call1134 = callmethod(var_dom,"window", [0]);
        var call1135 = callmethod(call1134,"t_effect_reverb", [0]);
        if1129 = call1135;
      }
      lineNumber = 613
      var if1136 = var_done;
      lineNumber = 610
      var bool1137 = new GraceBoolean(true)
      var opresult1140 = callmethod(var_applyAutowah, "==", [1], bool1137);
      if (Grace_isTrue(opresult1140)) {
        lineNumber = 611
        var call1141 = callmethod(var_dom,"window", [0]);
        var call1142 = callmethod(call1141,"t_effect_autowah", [0]);
        if1136 = call1142;
      }
      lineNumber = 616
      var if1143 = var_done;
      lineNumber = 613
      var bool1144 = new GraceBoolean(true)
      var opresult1147 = callmethod(var_applyCheby, "==", [1], bool1144);
      if (Grace_isTrue(opresult1147)) {
        lineNumber = 614
        var call1148 = callmethod(var_dom,"window", [0]);
        var call1149 = callmethod(call1148,"t_effect_cheby", [0]);
        if1143 = call1149;
      }
      lineNumber = 616
      var call1150 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 617
      var call1151 = callmethod(var_dom,"window", [0]);
      var call1152 = callmethod(call1151,"t_effect_reset", [0]);
      return call1152
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
  this.methods["Effect"] = func1121;
  func1121.definitionLine = 603;
  func1121.definitionModule = "musical";
  lineNumber = 620
  var func1153 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1153.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 622
      lineNumber = 621
      var bool1154 = new GraceBoolean(true)
      var_applyChorus = bool1154;
      lineNumber = 622
      onSelf = true;
      var call1155 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 624
      lineNumber = 623
      var bool1156 = new GraceBoolean(false)
      var_applyChorus = bool1156;
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
  this.methods["Chorus"] = func1153;
  func1153.definitionLine = 620;
  func1153.definitionModule = "musical";
  lineNumber = 626
  var func1157 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1157.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 628
      lineNumber = 627
      var bool1158 = new GraceBoolean(true)
      var_applyReverb = bool1158;
      lineNumber = 628
      onSelf = true;
      var call1159 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 630
      lineNumber = 629
      var bool1160 = new GraceBoolean(false)
      var_applyReverb = bool1160;
      return bool1160
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
  this.methods["Reverb"] = func1157;
  func1157.definitionLine = 626;
  func1157.definitionModule = "musical";
  lineNumber = 632
  var func1161 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1161.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 634
      lineNumber = 633
      var bool1162 = new GraceBoolean(true)
      var_applyAutowah = bool1162;
      lineNumber = 634
      onSelf = true;
      var call1163 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 636
      lineNumber = 635
      var bool1164 = new GraceBoolean(false)
      var_applyAutowah = bool1164;
      return bool1164
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1161.paramCounts = [
    1,
  ];
  func1161.variableArities = [
    false,
  ];
  this.methods["Autowah"] = func1161;
  func1161.definitionLine = 632;
  func1161.definitionModule = "musical";
  lineNumber = 638
  var func1165 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1165.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 640
      lineNumber = 639
      var bool1166 = new GraceBoolean(true)
      var_applyCheby = bool1166;
      lineNumber = 640
      onSelf = true;
      var call1167 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 642
      lineNumber = 641
      var bool1168 = new GraceBoolean(false)
      var_applyCheby = bool1168;
      return bool1168
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1165.paramCounts = [
    1,
  ];
  func1165.variableArities = [
    false,
  ];
  this.methods["Cheby"] = func1165;
  func1165.definitionLine = 638;
  func1165.definitionModule = "musical";
  lineNumber = 646
  var func1169 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1169.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 647
      var call1170 = callmethod(var_dom,"window", [0]);
      var call1171 = callmethod(call1170,"t_bpm", [1], var_bpm);
      return call1171
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1169.paramCounts = [
    1,
  ];
  func1169.variableArities = [
    false,
  ];
  this.methods["SetBPM"] = func1169;
  func1169.definitionLine = 646;
  func1169.definitionModule = "musical";
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
  var call1172 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1172;
  this.data = call1172.data;
  this._value = call1172._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 647
  var func1173 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1173.paramCounts[0])
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
  func1173.paramCounts = [
    0,
  ];
  func1173.variableArities = [
    false,
  ];
  this.methods["document"] = func1173;
  func1173.definitionLine = 647;
  func1173.definitionModule = "musical";
  lineNumber = 647
  var func1174 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1174.paramCounts[0])
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
  func1174.paramCounts = [
    1,
  ];
  func1174.variableArities = [
    false,
  ];
  this.methods["document:="] = func1174;
  func1174.definitionLine = 647;
  func1174.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 647
  var func1175 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1175.paramCounts[0])
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
  func1175.paramCounts = [
    0,
  ];
  func1175.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1175;
  func1175.definitionLine = 647;
  func1175.definitionModule = "musical";
  lineNumber = 647
  var func1176 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1176.paramCounts[0])
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
  func1176.paramCounts = [
    1,
  ];
  func1176.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1176;
  func1176.definitionLine = 647;
  func1176.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 647
  var func1177 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1177.paramCounts[0])
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
  func1177.paramCounts = [
    0,
  ];
  func1177.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1177;
  func1177.definitionLine = 647;
  func1177.definitionModule = "musical";
  lineNumber = 647
  var func1178 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1178.paramCounts[0])
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
  func1178.paramCounts = [
    1,
  ];
  func1178.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1178;
  func1178.definitionLine = 647;
  func1178.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 647
  var func1179 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1179.paramCounts[0])
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
  func1179.paramCounts = [
    0,
  ];
  func1179.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1179;
  func1179.definitionLine = 647;
  func1179.definitionModule = "musical";
  lineNumber = 647
  var func1180 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1180.paramCounts[0])
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
  func1180.paramCounts = [
    1,
  ];
  func1180.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1180;
  func1180.definitionLine = 647;
  func1180.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 647
  var func1181 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1181.paramCounts[0])
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
  func1181.paramCounts = [
    0,
  ];
  func1181.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1181;
  func1181.definitionLine = 647;
  func1181.definitionModule = "musical";
  lineNumber = 647
  var func1182 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1182.paramCounts[0])
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
  func1182.paramCounts = [
    1,
  ];
  func1182.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1182;
  func1182.definitionLine = 647;
  func1182.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 647
  var func1183 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1183.paramCounts[0])
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
  func1183.paramCounts = [
    0,
  ];
  func1183.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1183;
  func1183.definitionLine = 647;
  func1183.definitionModule = "musical";
  lineNumber = 647
  var func1184 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1184.paramCounts[0])
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
  func1184.paramCounts = [
    1,
  ];
  func1184.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1184;
  func1184.definitionLine = 647;
  func1184.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1185 = callmethod(var_dom,"window", [0]);
  var call1186 = callmethod(call1185,"Math", [0]);
  var var_trig = call1186;
  var func1187 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1187.paramCounts[0])
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
  func1187.paramCounts = [
    0,
  ];
  func1187.variableArities = [
    false,
  ];
  this.methods["trig"] = func1187;
  func1187.definitionLine = 15;
  func1187.definitionModule = "musical";
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
  var func1188 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1188.paramCounts[0])
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
  func1188.paramCounts = [
    0,
  ];
  func1188.variableArities = [
    false,
  ];
  this.methods["PI"] = func1188;
  func1188.definitionLine = 15;
  func1188.definitionModule = "musical";
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
  var bool1189 = new GraceBoolean(false)
  var var_stopRunning = bool1189;
  lineNumber = 15
  var func1190 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1190.paramCounts[0])
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
  func1190.paramCounts = [
    0,
  ];
  func1190.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1190;
  func1190.definitionLine = 15;
  func1190.definitionModule = "musical";
  lineNumber = 15
  var func1191 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1191.paramCounts[0])
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
  func1191.paramCounts = [
    1,
  ];
  func1191.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1191;
  func1191.definitionLine = 15;
  func1191.definitionModule = "musical";
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
  var bool1192 = new GraceBoolean(false)
  var var_initialised = bool1192;
  lineNumber = 15
  var func1193 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1193.paramCounts[0])
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
  func1193.paramCounts = [
    0,
  ];
  func1193.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1193;
  func1193.definitionLine = 15;
  func1193.definitionModule = "musical";
  lineNumber = 15
  var func1194 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1194.paramCounts[0])
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
  func1194.paramCounts = [
    1,
  ];
  func1194.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1194;
  func1194.definitionLine = 15;
  func1194.definitionModule = "musical";
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
  var string1195 = new GraceString("white");
  var var_backgroundColour = string1195;
  lineNumber = 15
  var func1196 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1196.paramCounts[0])
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
  func1196.paramCounts = [
    0,
  ];
  func1196.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1196;
  func1196.definitionLine = 15;
  func1196.definitionModule = "musical";
  lineNumber = 15
  var func1197 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1197.paramCounts[0])
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
  func1197.paramCounts = [
    1,
  ];
  func1197.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1197;
  func1197.definitionLine = 15;
  func1197.definitionModule = "musical";
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
  var call1198 = callmethod(var_collections,"list", [0]);
  var call1199 = callmethod(call1198,"new", [0]);
  var var_registeredObjects = call1199;
  var func1200 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1200.paramCounts[0])
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
  func1200.paramCounts = [
    0,
  ];
  func1200.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1200;
  func1200.definitionLine = 21;
  func1200.definitionModule = "musical";
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
  var call1201 = callmethod(var_collections,"list", [0]);
  var call1202 = callmethod(call1201,"new", [0]);
  var var_stepBlocks = call1202;
  var func1203 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1203.paramCounts[0])
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
  func1203.paramCounts = [
    0,
  ];
  func1203.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1203;
  func1203.definitionLine = 22;
  func1203.definitionModule = "musical";
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
  var call1204 = callmethod(var_collections,"map", [0]);
  var call1205 = callmethod(call1204,"new", [0]);
  var var_audioTags = call1205;
  var func1206 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1206.paramCounts[0])
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
  func1206.paramCounts = [
    0,
  ];
  func1206.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1206;
  func1206.definitionLine = 23;
  func1206.definitionModule = "musical";
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
  var func1207 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1207.paramCounts[0])
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
  func1207.paramCounts = [
    0,
  ];
  func1207.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1207;
  func1207.definitionLine = 23;
  func1207.definitionModule = "musical";
  lineNumber = 23
  var func1208 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1208.paramCounts[0])
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
  func1208.paramCounts = [
    1,
  ];
  func1208.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1208;
  func1208.definitionLine = 23;
  func1208.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1209 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    0,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1209;
  func1209.definitionLine = 23;
  func1209.definitionModule = "musical";
  lineNumber = 23
  var func1210 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1210.paramCounts[0])
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
  func1210.paramCounts = [
    1,
  ];
  func1210.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1210;
  func1210.definitionLine = 23;
  func1210.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1211 = new GraceString("left");
  var var_left = string1211;
  lineNumber = 23
  var func1212 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1212.paramCounts[0])
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
  func1212.paramCounts = [
    0,
  ];
  func1212.variableArities = [
    false,
  ];
  this.methods["left"] = func1212;
  func1212.definitionLine = 23;
  func1212.definitionModule = "musical";
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
  var string1213 = new GraceString("right");
  var var_right = string1213;
  lineNumber = 23
  var func1214 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1214.paramCounts[0])
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
  func1214.paramCounts = [
    0,
  ];
  func1214.variableArities = [
    false,
  ];
  this.methods["right"] = func1214;
  func1214.definitionLine = 23;
  func1214.definitionModule = "musical";
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
  var string1215 = new GraceString("top");
  var var_top = string1215;
  lineNumber = 23
  var func1216 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1216.paramCounts[0])
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
  func1216.paramCounts = [
    0,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["top"] = func1216;
  func1216.definitionLine = 23;
  func1216.definitionModule = "musical";
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
  var string1217 = new GraceString("bottom");
  var var_bottom = string1217;
  lineNumber = 23
  var func1218 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1218.paramCounts[0])
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
  func1218.paramCounts = [
    0,
  ];
  func1218.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1218;
  func1218.definitionLine = 23;
  func1218.definitionModule = "musical";
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
  var func1219 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1219.paramCounts[0])
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
  func1219.paramCounts = [
    0,
  ];
  func1219.variableArities = [
    false,
  ];
  this.methods["centre"] = func1219;
  func1219.definitionLine = 23;
  func1219.definitionModule = "musical";
  lineNumber = 23
  var func1220 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1220.paramCounts[0])
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
  func1220.paramCounts = [
    1,
  ];
  func1220.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1220;
  func1220.definitionLine = 23;
  func1220.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1221 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    0,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1221;
  func1221.definitionLine = 23;
  func1221.definitionModule = "musical";
  lineNumber = 23
  var func1222 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1222.paramCounts[0])
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
  func1222.paramCounts = [
    1,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1222;
  func1222.definitionLine = 23;
  func1222.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1223 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    0,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1223;
  func1223.definitionLine = 23;
  func1223.definitionModule = "musical";
  lineNumber = 23
  var func1224 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1224.paramCounts[0])
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
  func1224.paramCounts = [
    1,
  ];
  func1224.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1224;
  func1224.definitionLine = 23;
  func1224.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1225 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    0,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["above"] = func1225;
  func1225.definitionLine = 23;
  func1225.definitionModule = "musical";
  lineNumber = 23
  var func1226 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1226.paramCounts[0])
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
  func1226.paramCounts = [
    1,
  ];
  func1226.variableArities = [
    false,
  ];
  this.methods["above:="] = func1226;
  func1226.definitionLine = 23;
  func1226.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1227 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1227.paramCounts[0])
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
  func1227.paramCounts = [
    0,
  ];
  func1227.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1227;
  func1227.definitionLine = 23;
  func1227.definitionModule = "musical";
  lineNumber = 23
  var func1228 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    1,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1228;
  func1228.definitionLine = 23;
  func1228.definitionModule = "musical";
  lineNumber = 40
  var func1229 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    0,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["point"] = func1229;
  func1229.definitionLine = 40;
  func1229.definitionModule = "musical";
  var obj1230 = Grace_allocObject();
  obj1230.definitionModule = "musical";
  obj1230.definitionLine = 40;
  obj1230.outer = this;
  var reader_musical_outer_1231 = function() {
    return this.outer;
  }
  obj1230.methods["outer"] = reader_musical_outer_1231;
  function obj_init_1230() {
    var origSuperDepth = superDepth;
    superDepth = obj1230;
    obj1230.annotations = [];
    var func1232 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1232.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1232.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1233 = Grace_allocObject();
        obj1233.definitionModule = "musical";
        obj1233.definitionLine = 40;
        obj1233.outer = this;
        var reader_musical_outer_1234 = function() {
          return this.outer;
        }
        obj1233.methods["outer"] = reader_musical_outer_1234;
        function obj_init_1233() {
          var origSuperDepth = superDepth;
          superDepth = obj1233;
          obj1233.annotations = [];
          var func1235 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1235.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1237 = callmethod(this, "x", [0]);
              var diff1239 = callmethod(call1237, "-", [1], var_dx);
              onSelf = true;
              var call1240 = callmethod(this, "y", [0]);
              var call1241 = callmethod(var_point,"x()y", [1, 1], diff1239, call1240);
              return call1241
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
          obj1233.methods["left"] = func1235;
          func1235.definitionLine = 43;
          func1235.definitionModule = "musical";
          var func1242 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1242.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1244 = callmethod(this, "x", [0]);
              var opresult1246 = callmethod(call1244, "+", [1], var_dx);
              onSelf = true;
              var call1247 = callmethod(this, "y", [0]);
              var call1248 = callmethod(var_point,"x()y", [1, 1], opresult1246, call1247);
              return call1248
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
          obj1233.methods["right"] = func1242;
          func1242.definitionLine = 44;
          func1242.definitionModule = "musical";
          var func1249 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1250 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1252 = callmethod(this, "y", [0]);
              var diff1254 = callmethod(call1252, "-", [1], var_dy);
              var call1255 = callmethod(var_point,"x()y", [1, 1], call1250, diff1254);
              return call1255
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
          obj1233.methods["up"] = func1249;
          func1249.definitionLine = 45;
          func1249.definitionModule = "musical";
          var func1256 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1256.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1257 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1259 = callmethod(this, "y", [0]);
              var opresult1261 = callmethod(call1259, "+", [1], var_dy);
              var call1262 = callmethod(var_point,"x()y", [1, 1], call1257, opresult1261);
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
          obj1233.methods["down"] = func1256;
          func1256.definitionLine = 46;
          func1256.definitionModule = "musical";
          sourceObject = obj1233;
          lineNumber = 41
          obj1233.data["x"] = var_x__39__;
          var reader_musical_x_1263 = function() {
            return this.data["x"];
          }
          reader_musical_x_1263.def = true;
          obj1233.methods["x"] = reader_musical_x_1263;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1233;
          lineNumber = 42
          obj1233.data["y"] = var_y__39__;
          var reader_musical_y_1264 = function() {
            return this.data["y"];
          }
          reader_musical_y_1264.def = true;
          obj1233.methods["y"] = reader_musical_y_1264;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1233;
          sourceObject = obj1233;
          sourceObject = obj1233;
          sourceObject = obj1233;
          superDepth = origSuperDepth;
        }
        obj_init_1233.apply(obj1233, []);
        return obj1233
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
      1,
    ];
    func1232.variableArities = [
      false,
      false,
    ];
    obj1230.methods["x()y"] = func1232;
    func1232.definitionLine = 40;
    func1232.definitionModule = "musical";
    var func1265 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1266 = Grace_allocObject();
        obj1266.definitionModule = "musical";
        obj1266.definitionLine = 40;
        var inho1266 = inheritingObject;
        while (inho1266.superobj) inho1266 = inho1266.superobj;
        inho1266.superobj = obj1266;
        obj1266.data = inheritingObject.data;
        obj1266.outer = this;
        var reader_musical_outer_1267 = function() {
          return this.outer;
        }
        obj1266.methods["outer"] = reader_musical_outer_1267;
        function obj_init_1266() {
          var origSuperDepth = superDepth;
          superDepth = obj1266;
          obj1266.annotations = [];
          var func1268 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1270 = callmethod(this, "x", [0]);
              var diff1272 = callmethod(call1270, "-", [1], var_dx);
              onSelf = true;
              var call1273 = callmethod(this, "y", [0]);
              var call1274 = callmethod(var_point,"x()y", [1, 1], diff1272, call1273);
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
          obj1266.methods["left"] = func1268;
          func1268.definitionLine = 43;
          func1268.definitionModule = "musical";
          var func1275 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1277 = callmethod(this, "x", [0]);
              var opresult1279 = callmethod(call1277, "+", [1], var_dx);
              onSelf = true;
              var call1280 = callmethod(this, "y", [0]);
              var call1281 = callmethod(var_point,"x()y", [1, 1], opresult1279, call1280);
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
          obj1266.methods["right"] = func1275;
          func1275.definitionLine = 44;
          func1275.definitionModule = "musical";
          var func1282 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1283 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1285 = callmethod(this, "y", [0]);
              var diff1287 = callmethod(call1285, "-", [1], var_dy);
              var call1288 = callmethod(var_point,"x()y", [1, 1], call1283, diff1287);
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
          obj1266.methods["up"] = func1282;
          func1282.definitionLine = 45;
          func1282.definitionModule = "musical";
          var func1289 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1290 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1292 = callmethod(this, "y", [0]);
              var opresult1294 = callmethod(call1292, "+", [1], var_dy);
              var call1295 = callmethod(var_point,"x()y", [1, 1], call1290, opresult1294);
              return call1295
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1289.paramCounts = [
            1,
          ];
          func1289.variableArities = [
            false,
          ];
          obj1266.methods["down"] = func1289;
          func1289.definitionLine = 46;
          func1289.definitionModule = "musical";
          sourceObject = obj1266;
          lineNumber = 41
          obj1266.data["x"] = var_x__39__;
          var reader_musical_x_1296 = function() {
            return this.data["x"];
          }
          reader_musical_x_1296.def = true;
          obj1266.methods["x"] = reader_musical_x_1296;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1266;
          lineNumber = 42
          obj1266.data["y"] = var_y__39__;
          var reader_musical_y_1297 = function() {
            return this.data["y"];
          }
          reader_musical_y_1297.def = true;
          obj1266.methods["y"] = reader_musical_y_1297;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1266;
          sourceObject = obj1266;
          sourceObject = obj1266;
          sourceObject = obj1266;
          superDepth = origSuperDepth;
        }
        obj_init_1266.apply(inheritingObject, []);
        return obj1266
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1230.methods["x()y()object"] = func1265;
    var func1298 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1299 = new GraceString("class point");
        return string1299
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1298.paramCounts = [
    ];
    func1298.variableArities = [
    ];
    obj1230.methods["asDebugString"] = func1298;
    func1298.definitionLine = 40;
    func1298.definitionModule = "musical";
    sourceObject = obj1230;
    sourceObject = obj1230;
    superDepth = origSuperDepth;
  }
  obj_init_1230.apply(obj1230, []);
  var var_point = obj1230;
  lineNumber = 48
  var func1300 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1300.paramCounts[0])
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
  func1300.paramCounts = [
    0,
  ];
  func1300.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1300;
  func1300.definitionLine = 48;
  func1300.definitionModule = "musical";
  var obj1301 = Grace_allocObject();
  obj1301.definitionModule = "musical";
  obj1301.definitionLine = 48;
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
      if (argcv[0] !=  func1303.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1304 = Grace_allocObject();
        obj1304.definitionModule = "musical";
        obj1304.definitionLine = 48;
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
            if (argcv[0] !=  func1306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1307 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
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
              block1308.className = 'block<musical:63>';
              block1308.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1309 = callmethod(var_b,"apply", [0]);
                return call1309;
              };
              var call1310 = callmethod(Grace_prelude,"for()do", [1, 1], call1307, block1308);
              lineNumber = 63
              onSelf = true;
              var call1311 = callmethod(this, "tick", [0]);
              return call1311
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1306.paramCounts = [
            0,
          ];
          func1306.variableArities = [
            false,
          ];
          obj1304.methods["step"] = func1306;
          func1306.definitionLine = 59;
          func1306.definitionModule = "musical";
          var func1312 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1312.paramCounts[0])
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
          func1312.paramCounts = [
            0,
          ];
          func1312.variableArities = [
            false,
          ];
          obj1304.methods["tick"] = func1312;
          func1312.definitionLine = 66;
          func1312.definitionModule = "musical";
          var func1313 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1313.paramCounts[0])
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
          func1313.paramCounts = [
            1,
          ];
          func1313.variableArities = [
            false,
          ];
          obj1304.methods["draw"] = func1313;
          func1313.definitionLine = 67;
          func1313.definitionModule = "musical";
          var func1314 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1314.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1315 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1316 = callmethod(this, "destX:=", [1], call1315);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1317 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1318 = callmethod(this, "destY:=", [1], call1317);
              return call1318
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
          obj1304.methods["moveTo"] = func1314;
          func1314.definitionLine = 68;
          func1314.definitionModule = "musical";
          var func1319 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1319.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1320 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1321 = callmethod(this, "x:=", [1], call1320);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1322 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1323 = callmethod(this, "y:=", [1], call1322);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1324 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1325 = callmethod(this, "destX:=", [1], call1324);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1326 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1327 = callmethod(this, "destY:=", [1], call1326);
              return call1327
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
          obj1304.methods["jumpTo"] = func1319;
          func1319.definitionLine = 72;
          func1319.definitionModule = "musical";
          var func1328 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1328.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1329 = new GraceBoolean(false)
              return bool1329
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
          obj1304.methods["isPointOver"] = func1328;
          func1328.definitionLine = 78;
          func1328.definitionModule = "musical";
          var func1330 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1330.paramCounts[0])
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
          func1330.paramCounts = [
            0,
          ];
          func1330.variableArities = [
            false,
          ];
          obj1304.methods["mousedown"] = func1330;
          func1330.definitionLine = 79;
          func1330.definitionModule = "musical";
          var func1331 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1332 = callmethod(this, "alwaysBlocks", [0]);
              var call1333 = callmethod(call1332,"push", [1], var_b);
              return call1333
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1331.paramCounts = [
            1,
          ];
          func1331.variableArities = [
            false,
          ];
          obj1304.methods["always"] = func1331;
          func1331.definitionLine = 80;
          func1331.definitionModule = "musical";
          var func1334 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1334.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1334.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
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
              block1335.className = 'block<musical:89>';
              block1335.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1336 = var_done;
                lineNumber = 85
                var call1337 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1337)) {
                  lineNumber = 86
                  var call1338 = callmethod(var_b,"apply", [0]);
                  if1336 = call1338;
                }
                return if1336;
              };
              onSelf = true;
              var call1339 = callmethod(this, "always", [1], block1335);
              return call1339
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1334.paramCounts = [
            1,
            1,
          ];
          func1334.variableArities = [
            false,
            false,
          ];
          obj1304.methods["whenever()do"] = func1334;
          func1334.definitionLine = 83;
          func1334.definitionModule = "musical";
          var func1340 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1344 = callmethod(this, "angle", [0]);
              var quotient1346 = callmethod(call1344, "/", [1], new GraceNum(180));
              var prod1348 = callmethod(quotient1346, "*", [1], var_PI);
              var call1349 = callmethod(var_trig,"cos", [1], prod1348);
              var prod1351 = callmethod(call1349, "*", [1], var_dist);
              var var_y__39__ = prod1351;
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
              var call1355 = callmethod(this, "angle", [0]);
              var quotient1357 = callmethod(call1355, "/", [1], new GraceNum(180));
              var prod1359 = callmethod(quotient1357, "*", [1], var_PI);
              var call1360 = callmethod(var_trig,"sin", [1], prod1359);
              var prod1362 = callmethod(call1360, "*", [1], var_dist);
              var var_x__39__ = prod1362;
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
              var call1364 = callmethod(this, "x", [0]);
              var opresult1366 = callmethod(call1364, "+", [1], var_x__39__);
              onSelf = true;
              var call1367 = callmethod(this, "x:=", [1], opresult1366);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1369 = callmethod(this, "y", [0]);
              var opresult1371 = callmethod(call1369, "+", [1], var_y__39__);
              onSelf = true;
              var call1372 = callmethod(this, "y:=", [1], opresult1371);
              return call1372
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
          obj1304.methods["forward"] = func1340;
          func1340.definitionLine = 90;
          func1340.definitionModule = "musical";
          var func1373 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1373.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
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
              block1374.className = 'block<musical:97>';
              block1374.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1376 = callmethod(this, "angle", [0]);
                var opresult1378 = callmethod(call1376, "<", [1], new GraceNum(0));
                return opresult1378;
              };
              lineNumber = 100
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
              block1379.className = 'block<musical:100>';
              block1379.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1381 = callmethod(this, "angle", [0]);
                var opresult1383 = callmethod(call1381, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1384 = callmethod(this, "angle:=", [1], opresult1383);
                return call1384;
              };
              var call1385 = callmethod(Grace_prelude,"while()do", [1, 1], block1374, block1379);
              lineNumber = 100
              var block1386 = Grace_allocObject();
              block1386.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1386.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1386.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1386.methods["match"] = GraceBlock_match;
              block1386.methods["prefix?"] = GraceBlock_lift;
              block1386.receiver = this;
              block1386.className = 'block<musical:100>';
              block1386.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1388 = callmethod(this, "angle", [0]);
                var opresult1390 = callmethod(call1388, ">", [1], new GraceNum(360));
                return opresult1390;
              };
              lineNumber = 103
              var block1391 = Grace_allocObject();
              block1391.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1391.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1391.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1391.methods["match"] = GraceBlock_match;
              block1391.methods["prefix?"] = GraceBlock_lift;
              block1391.receiver = this;
              block1391.className = 'block<musical:103>';
              block1391.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1393 = callmethod(this, "angle", [0]);
                var diff1395 = callmethod(call1393, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1396 = callmethod(this, "angle:=", [1], diff1395);
                return call1396;
              };
              var call1397 = callmethod(Grace_prelude,"while()do", [1, 1], block1386, block1391);
              return call1397
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1373.paramCounts = [
            0,
          ];
          func1373.variableArities = [
            false,
          ];
          obj1304.methods["normaliseAngle"] = func1373;
          func1373.definitionLine = 96;
          func1373.definitionModule = "musical";
          var func1398 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1398.paramCounts[0])
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
              var call1400 = callmethod(this, "angle", [0]);
              var opresult1402 = callmethod(call1400, "+", [1], var_degrees);
              onSelf = true;
              var call1403 = callmethod(this, "angle:=", [1], opresult1402);
              lineNumber = 106
              onSelf = true;
              var call1404 = callmethod(this, "normaliseAngle", [0]);
              return call1404
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1398.paramCounts = [
            1,
          ];
          func1398.variableArities = [
            false,
          ];
          obj1304.methods["turn"] = func1398;
          func1398.definitionLine = 104;
          func1398.definitionModule = "musical";
          var func1405 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1405.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1406 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1407 = callmethod(this, "x", [0]);
              var call1408 = callmethod(var_point,"x()y", [1, 1], call1407, new GraceNum(0));
              onSelf = true;
              var call1409 = callmethod(this, "isPointOver", [1], call1408);
              if (Grace_isTrue(call1409)) {
                lineNumber = 111
                lineNumber = 110
                var bool1410 = new GraceBoolean(true)
                return bool1410
              }
              lineNumber = 115
              var if1411 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1412 = callmethod(this, "x", [0]);
              var call1413 = callmethod(var_point,"x()y", [1, 1], call1412, var_canvasHeight);
              onSelf = true;
              var call1414 = callmethod(this, "isPointOver", [1], call1413);
              if (Grace_isTrue(call1414)) {
                lineNumber = 114
                lineNumber = 113
                var bool1415 = new GraceBoolean(true)
                return bool1415
              }
              lineNumber = 118
              var if1416 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1417 = callmethod(this, "y", [0]);
              var call1418 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1417);
              onSelf = true;
              var call1419 = callmethod(this, "isPointOver", [1], call1418);
              if (Grace_isTrue(call1419)) {
                lineNumber = 117
                lineNumber = 116
                var bool1420 = new GraceBoolean(true)
                return bool1420
              }
              lineNumber = 121
              var if1421 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1422 = callmethod(this, "y", [0]);
              var call1423 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1422);
              onSelf = true;
              var call1424 = callmethod(this, "isPointOver", [1], call1423);
              if (Grace_isTrue(call1424)) {
                lineNumber = 120
                lineNumber = 119
                var bool1425 = new GraceBoolean(true)
                return bool1425
              }
              lineNumber = 122
              lineNumber = 121
              var bool1426 = new GraceBoolean(false)
              return bool1426
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1405.paramCounts = [
            0,
          ];
          func1405.variableArities = [
            false,
          ];
          obj1304.methods["touchingEdge"] = func1405;
          func1405.definitionLine = 108;
          func1405.definitionModule = "musical";
          var func1427 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1427.paramCounts[0])
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
              var if1428 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1429 = callmethod(this, "x", [0]);
              var call1430 = callmethod(var_point,"x()y", [1, 1], call1429, new GraceNum(0));
              onSelf = true;
              var call1431 = callmethod(this, "isPointOver", [1], call1430);
              if (Grace_isTrue(call1431)) {
                lineNumber = 127
                onSelf = true;
                var call1432 = callmethod(this, "bounceFrom", [1], var_top);
                if1428 = call1432;
              }
              lineNumber = 132
              var if1433 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1434 = callmethod(this, "x", [0]);
              var call1435 = callmethod(var_point,"x()y", [1, 1], call1434, var_canvasHeight);
              onSelf = true;
              var call1436 = callmethod(this, "isPointOver", [1], call1435);
              if (Grace_isTrue(call1436)) {
                lineNumber = 130
                onSelf = true;
                var call1437 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1433 = call1437;
              }
              lineNumber = 135
              var if1438 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1439 = callmethod(this, "y", [0]);
              var call1440 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1439);
              onSelf = true;
              var call1441 = callmethod(this, "isPointOver", [1], call1440);
              if (Grace_isTrue(call1441)) {
                lineNumber = 133
                onSelf = true;
                var call1442 = callmethod(this, "bounceFrom", [1], var_left);
                if1438 = call1442;
              }
              lineNumber = 138
              var if1443 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1444 = callmethod(this, "y", [0]);
              var call1445 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1444);
              onSelf = true;
              var call1446 = callmethod(this, "isPointOver", [1], call1445);
              if (Grace_isTrue(call1446)) {
                lineNumber = 136
                onSelf = true;
                var call1447 = callmethod(this, "bounceFrom", [1], var_right);
                if1443 = call1447;
              }
              lineNumber = 138
              var block1448 = Grace_allocObject();
              block1448.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1448.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1448.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1448.methods["match"] = GraceBlock_match;
              block1448.methods["prefix?"] = GraceBlock_lift;
              block1448.receiver = this;
              block1448.className = 'block<musical:138>';
              block1448.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1449 = callmethod(this, "touchingEdge", [0]);
                return call1449;
              };
              lineNumber = 141
              var block1450 = Grace_allocObject();
              block1450.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1450.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1450.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1450.methods["match"] = GraceBlock_match;
              block1450.methods["prefix?"] = GraceBlock_lift;
              block1450.receiver = this;
              block1450.className = 'block<musical:141>';
              block1450.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1451 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1451;
              };
              var call1452 = callmethod(Grace_prelude,"while()do", [1, 1], block1448, block1450);
              return call1452
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1427.paramCounts = [
            0,
          ];
          func1427.variableArities = [
            false,
          ];
          obj1304.methods["bounce"] = func1427;
          func1427.definitionLine = 123;
          func1427.definitionModule = "musical";
          var func1453 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1453.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1454 = var_done;
              lineNumber = 143
              var string1455 = new GraceString("left");
              var opresult1458 = callmethod(var_dir, "==", [1], string1455);
              if (Grace_isTrue(opresult1458)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1459 = callmethod(this, "angle", [0]);
                var diff1462 = callmethod(new GraceNum(360), "-", [1], call1459);
                onSelf = true;
                var call1463 = callmethod(this, "angle:=", [1], diff1462);
                if1454 = call1463;
              }
              lineNumber = 149
              var if1464 = var_done;
              lineNumber = 146
              var string1465 = new GraceString("right");
              var opresult1468 = callmethod(var_dir, "==", [1], string1465);
              if (Grace_isTrue(opresult1468)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1469 = callmethod(this, "angle", [0]);
                var diff1472 = callmethod(new GraceNum(360), "-", [1], call1469);
                onSelf = true;
                var call1473 = callmethod(this, "angle:=", [1], diff1472);
                if1464 = call1473;
              }
              lineNumber = 152
              var if1474 = var_done;
              lineNumber = 149
              var string1475 = new GraceString("top");
              var opresult1478 = callmethod(var_dir, "==", [1], string1475);
              if (Grace_isTrue(opresult1478)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1479 = callmethod(this, "angle", [0]);
                var diff1482 = callmethod(new GraceNum(180), "-", [1], call1479);
                onSelf = true;
                var call1483 = callmethod(this, "angle:=", [1], diff1482);
                if1474 = call1483;
              }
              lineNumber = 155
              var if1484 = var_done;
              lineNumber = 152
              var string1485 = new GraceString("bottom");
              var opresult1488 = callmethod(var_dir, "==", [1], string1485);
              if (Grace_isTrue(opresult1488)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1489 = callmethod(this, "angle", [0]);
                var diff1492 = callmethod(new GraceNum(180), "-", [1], call1489);
                onSelf = true;
                var call1493 = callmethod(this, "angle:=", [1], diff1492);
                if1484 = call1493;
              }
              lineNumber = 155
              onSelf = true;
              var call1494 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1495 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1495
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1453.paramCounts = [
            1,
          ];
          func1453.variableArities = [
            false,
          ];
          obj1304.methods["bounceFrom"] = func1453;
          func1453.definitionLine = 142;
          func1453.definitionModule = "musical";
          var func1496 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1496.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1497 = var_done;
              lineNumber = 159
              var call1498 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1500 = callmethod(this, "x", [0]);
              var opresult1502 = callmethod(call1500, ">", [1], call1498);
              if (Grace_isTrue(opresult1502)) {
                lineNumber = 160
                onSelf = true;
                var call1503 = callmethod(this, "bounceFrom", [1], var_left);
                if1497 = call1503;
              }
              lineNumber = 165
              var if1504 = var_done;
              lineNumber = 162
              var call1505 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1507 = callmethod(this, "x", [0]);
              var opresult1509 = callmethod(call1507, "<", [1], call1505);
              if (Grace_isTrue(opresult1509)) {
                lineNumber = 163
                onSelf = true;
                var call1510 = callmethod(this, "bounceFrom", [1], var_right);
                if1504 = call1510;
              }
              lineNumber = 165
              var block1511 = Grace_allocObject();
              block1511.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1511.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1511.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1511.methods["match"] = GraceBlock_match;
              block1511.methods["prefix?"] = GraceBlock_lift;
              block1511.receiver = this;
              block1511.className = 'block<musical:165>';
              block1511.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1512 = callmethod(this, "touching", [1], var_other);
                return call1512;
              };
              lineNumber = 168
              var block1513 = Grace_allocObject();
              block1513.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1513.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1513.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1513.methods["match"] = GraceBlock_match;
              block1513.methods["prefix?"] = GraceBlock_lift;
              block1513.receiver = this;
              block1513.className = 'block<musical:168>';
              block1513.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1514 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1514;
              };
              var call1515 = callmethod(Grace_prelude,"while()do", [1, 1], block1511, block1513);
              return call1515
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
          obj1304.methods["bounceOff"] = func1496;
          func1496.definitionLine = 158;
          func1496.definitionModule = "musical";
          var func1516 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1516.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1517 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1518 = callmethod(this, "y", [0]);
              var call1519 = callmethod(var_point,"x()y", [1, 1], call1517, call1518);
              var call1520 = callmethod(var_other,"isPointOver", [1], call1519);
              return call1520
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1516.paramCounts = [
            1,
          ];
          func1516.variableArities = [
            false,
          ];
          obj1304.methods["touching"] = func1516;
          func1516.definitionLine = 169;
          func1516.definitionModule = "musical";
          var func1521 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1521.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1522 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1523 = callmethod(this, "y", [0]);
              var call1525 = callmethod(var_other,"y", [0]);
              var opresult1527 = callmethod(call1525, "!=", [1], call1523);
              onSelf = true;
              var call1529 = callmethod(this, "x", [0]);
              var call1531 = callmethod(var_other,"x", [0]);
              var opresult1533 = callmethod(call1531, "!=", [1], call1529);
              var opresult1535 = callmethod(opresult1533, "||", [1], opresult1527);
              if (Grace_isTrue(opresult1535)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1538 = callmethod(this, "x", [0]);
                var call1540 = callmethod(var_other,"x", [0]);
                var diff1542 = callmethod(call1540, "-", [1], call1538);
                onSelf = true;
                var call1543 = callmethod(this, "y", [0]);
                var call1545 = callmethod(var_other,"y", [0]);
                var diff1547 = callmethod(call1545, "-", [1], call1543);
                var call1548 = callmethod(var_trig,"atan2", [2], diff1542, diff1547);
                var prod1550 = callmethod(call1548, "*", [1], new GraceNum(180));
                var quotient1552 = callmethod(prod1550, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1553 = callmethod(this, "angle:=", [1], quotient1552);
                if1522 = call1553;
              }
              lineNumber = 176
              onSelf = true;
              var call1554 = callmethod(this, "normaliseAngle", [0]);
              return call1554
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1521.paramCounts = [
            1,
          ];
          func1521.variableArities = [
            false,
          ];
          obj1304.methods["face"] = func1521;
          func1521.definitionLine = 172;
          func1521.definitionModule = "musical";
          var func1555 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1555.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1556 = new GraceString("2d");
              var call1557 = callmethod(var_backingCanvas,"getContext", [1], string1556);
              onSelf = true;
              var call1558 = callmethod(this, "draw", [1], call1557);
              return call1558
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
          obj1304.methods["stamp"] = func1555;
          func1555.definitionLine = 178;
          func1555.definitionModule = "musical";
          sourceObject = obj1304;
          lineNumber = 49
          var call1559 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1560 = callmethod(call1559, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1561 = callmethod(call1560, "initialise", [0]);
          sourceObject = obj1304;
          lineNumber = 50
          var call1562 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1304;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1304;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1304;
          lineNumber = 53
          var call1563 = callmethod(var_collections,"list", [0]);
          var call1564 = callmethod(call1563,"new", [0]);
          obj1304.data["alwaysBlocks"] = call1564;
          var reader_musical_alwaysBlocks_1565 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1565.def = true;
          reader_musical_alwaysBlocks_1565.confidential = true;
          obj1304.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1565;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1564)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1304;
          lineNumber = 55
          lineNumber = 54
          var quotient1568 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1304.data["x"] = quotient1568;
          var reader_musical_x_1569 = function() {
            return this.data["x"];
          }
          obj1304.methods["x"] = reader_musical_x_1569;
          obj1304.data["x"] = quotient1568;
          var writer_musical_x_1569 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1304.methods["x:="] = writer_musical_x_1569;
          writer_musical_x_1569.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1568)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1304.mutable = true;
          sourceObject = obj1304;
          lineNumber = 56
          lineNumber = 55
          var quotient1572 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1304.data["y"] = quotient1572;
          var reader_musical_y_1573 = function() {
            return this.data["y"];
          }
          obj1304.methods["y"] = reader_musical_y_1573;
          obj1304.data["y"] = quotient1572;
          var writer_musical_y_1573 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1304.methods["y:="] = writer_musical_y_1573;
          writer_musical_y_1573.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1572)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1304.mutable = true;
          sourceObject = obj1304;
          lineNumber = 56
          onSelf = true;
          var call1574 = callmethod(this, "x", [0]);
          obj1304.data["destX"] = call1574;
          var reader_musical_destX_1575 = function() {
            return this.data["destX"];
          }
          obj1304.methods["destX"] = reader_musical_destX_1575;
          obj1304.data["destX"] = call1574;
          var writer_musical_destX_1575 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1304.methods["destX:="] = writer_musical_destX_1575;
          reader_musical_destX_1575.confidential = true;
          writer_musical_destX_1575.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1574)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1304.mutable = true;
          sourceObject = obj1304;
          lineNumber = 57
          onSelf = true;
          var call1576 = callmethod(this, "y", [0]);
          obj1304.data["destY"] = call1576;
          var reader_musical_destY_1577 = function() {
            return this.data["destY"];
          }
          obj1304.methods["destY"] = reader_musical_destY_1577;
          obj1304.data["destY"] = call1576;
          var writer_musical_destY_1577 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1304.methods["destY:="] = writer_musical_destY_1577;
          reader_musical_destY_1577.confidential = true;
          writer_musical_destY_1577.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1576)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1304.mutable = true;
          sourceObject = obj1304;
          lineNumber = 58
          obj1304.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1578 = function() {
            return this.data["angle"];
          }
          obj1304.methods["angle"] = reader_musical_angle_1578;
          obj1304.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1578 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1304.methods["angle:="] = writer_musical_angle_1578;
          reader_musical_angle_1578.confidential = true;
          writer_musical_angle_1578.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1304.mutable = true;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          sourceObject = obj1304;
          superDepth = origSuperDepth;
        }
        obj_init_1304.apply(obj1304, []);
        return obj1304
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
    obj1301.methods["new"] = func1303;
    func1303.definitionLine = 48;
    func1303.definitionModule = "musical";
    var func1579 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1580 = Grace_allocObject();
        obj1580.definitionModule = "musical";
        obj1580.definitionLine = 48;
        var inho1580 = inheritingObject;
        while (inho1580.superobj) inho1580 = inho1580.superobj;
        inho1580.superobj = obj1580;
        obj1580.data = inheritingObject.data;
        obj1580.outer = this;
        var reader_musical_outer_1581 = function() {
          return this.outer;
        }
        obj1580.methods["outer"] = reader_musical_outer_1581;
        function obj_init_1580() {
          var origSuperDepth = superDepth;
          superDepth = obj1580;
          obj1580.annotations = [];
          var func1582 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1582.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1583 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
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
              block1584.className = 'block<musical:63>';
              block1584.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1585 = callmethod(var_b,"apply", [0]);
                return call1585;
              };
              var call1586 = callmethod(Grace_prelude,"for()do", [1, 1], call1583, block1584);
              lineNumber = 63
              onSelf = true;
              var call1587 = callmethod(this, "tick", [0]);
              return call1587
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
          obj1580.methods["step"] = func1582;
          func1582.definitionLine = 59;
          func1582.definitionModule = "musical";
          var func1588 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1588.paramCounts[0])
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
          func1588.paramCounts = [
            0,
          ];
          func1588.variableArities = [
            false,
          ];
          obj1580.methods["tick"] = func1588;
          func1588.definitionLine = 66;
          func1588.definitionModule = "musical";
          var func1589 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1589.paramCounts[0])
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
          func1589.paramCounts = [
            1,
          ];
          func1589.variableArities = [
            false,
          ];
          obj1580.methods["draw"] = func1589;
          func1589.definitionLine = 67;
          func1589.definitionModule = "musical";
          var func1590 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1590.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1591 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1592 = callmethod(this, "destX:=", [1], call1591);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1593 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1594 = callmethod(this, "destY:=", [1], call1593);
              return call1594
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
          obj1580.methods["moveTo"] = func1590;
          func1590.definitionLine = 68;
          func1590.definitionModule = "musical";
          var func1595 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1595.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1596 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1597 = callmethod(this, "x:=", [1], call1596);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1598 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1599 = callmethod(this, "y:=", [1], call1598);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1600 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1601 = callmethod(this, "destX:=", [1], call1600);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1602 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1603 = callmethod(this, "destY:=", [1], call1602);
              return call1603
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
          obj1580.methods["jumpTo"] = func1595;
          func1595.definitionLine = 72;
          func1595.definitionModule = "musical";
          var func1604 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1605 = new GraceBoolean(false)
              return bool1605
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
          obj1580.methods["isPointOver"] = func1604;
          func1604.definitionLine = 78;
          func1604.definitionModule = "musical";
          var func1606 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1606.paramCounts[0])
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
          func1606.paramCounts = [
            0,
          ];
          func1606.variableArities = [
            false,
          ];
          obj1580.methods["mousedown"] = func1606;
          func1606.definitionLine = 79;
          func1606.definitionModule = "musical";
          var func1607 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1607.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1608 = callmethod(this, "alwaysBlocks", [0]);
              var call1609 = callmethod(call1608,"push", [1], var_b);
              return call1609
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1607.paramCounts = [
            1,
          ];
          func1607.variableArities = [
            false,
          ];
          obj1580.methods["always"] = func1607;
          func1607.definitionLine = 80;
          func1607.definitionModule = "musical";
          var func1610 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1610.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1610.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
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
              block1611.className = 'block<musical:89>';
              block1611.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1612 = var_done;
                lineNumber = 85
                var call1613 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1613)) {
                  lineNumber = 86
                  var call1614 = callmethod(var_b,"apply", [0]);
                  if1612 = call1614;
                }
                return if1612;
              };
              onSelf = true;
              var call1615 = callmethod(this, "always", [1], block1611);
              return call1615
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1610.paramCounts = [
            1,
            1,
          ];
          func1610.variableArities = [
            false,
            false,
          ];
          obj1580.methods["whenever()do"] = func1610;
          func1610.definitionLine = 83;
          func1610.definitionModule = "musical";
          var func1616 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1620 = callmethod(this, "angle", [0]);
              var quotient1622 = callmethod(call1620, "/", [1], new GraceNum(180));
              var prod1624 = callmethod(quotient1622, "*", [1], var_PI);
              var call1625 = callmethod(var_trig,"cos", [1], prod1624);
              var prod1627 = callmethod(call1625, "*", [1], var_dist);
              var var_y__39__ = prod1627;
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
              var call1631 = callmethod(this, "angle", [0]);
              var quotient1633 = callmethod(call1631, "/", [1], new GraceNum(180));
              var prod1635 = callmethod(quotient1633, "*", [1], var_PI);
              var call1636 = callmethod(var_trig,"sin", [1], prod1635);
              var prod1638 = callmethod(call1636, "*", [1], var_dist);
              var var_x__39__ = prod1638;
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
              var call1640 = callmethod(this, "x", [0]);
              var opresult1642 = callmethod(call1640, "+", [1], var_x__39__);
              onSelf = true;
              var call1643 = callmethod(this, "x:=", [1], opresult1642);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1645 = callmethod(this, "y", [0]);
              var opresult1647 = callmethod(call1645, "+", [1], var_y__39__);
              onSelf = true;
              var call1648 = callmethod(this, "y:=", [1], opresult1647);
              return call1648
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
          obj1580.methods["forward"] = func1616;
          func1616.definitionLine = 90;
          func1616.definitionModule = "musical";
          var func1649 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1649.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
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
              block1650.className = 'block<musical:97>';
              block1650.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1652 = callmethod(this, "angle", [0]);
                var opresult1654 = callmethod(call1652, "<", [1], new GraceNum(0));
                return opresult1654;
              };
              lineNumber = 100
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
              block1655.className = 'block<musical:100>';
              block1655.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1657 = callmethod(this, "angle", [0]);
                var opresult1659 = callmethod(call1657, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1660 = callmethod(this, "angle:=", [1], opresult1659);
                return call1660;
              };
              var call1661 = callmethod(Grace_prelude,"while()do", [1, 1], block1650, block1655);
              lineNumber = 100
              var block1662 = Grace_allocObject();
              block1662.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1662.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1662.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1662.methods["match"] = GraceBlock_match;
              block1662.methods["prefix?"] = GraceBlock_lift;
              block1662.receiver = this;
              block1662.className = 'block<musical:100>';
              block1662.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1664 = callmethod(this, "angle", [0]);
                var opresult1666 = callmethod(call1664, ">", [1], new GraceNum(360));
                return opresult1666;
              };
              lineNumber = 103
              var block1667 = Grace_allocObject();
              block1667.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1667.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1667.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1667.methods["match"] = GraceBlock_match;
              block1667.methods["prefix?"] = GraceBlock_lift;
              block1667.receiver = this;
              block1667.className = 'block<musical:103>';
              block1667.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1669 = callmethod(this, "angle", [0]);
                var diff1671 = callmethod(call1669, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1672 = callmethod(this, "angle:=", [1], diff1671);
                return call1672;
              };
              var call1673 = callmethod(Grace_prelude,"while()do", [1, 1], block1662, block1667);
              return call1673
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1649.paramCounts = [
            0,
          ];
          func1649.variableArities = [
            false,
          ];
          obj1580.methods["normaliseAngle"] = func1649;
          func1649.definitionLine = 96;
          func1649.definitionModule = "musical";
          var func1674 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1674.paramCounts[0])
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
              var call1676 = callmethod(this, "angle", [0]);
              var opresult1678 = callmethod(call1676, "+", [1], var_degrees);
              onSelf = true;
              var call1679 = callmethod(this, "angle:=", [1], opresult1678);
              lineNumber = 106
              onSelf = true;
              var call1680 = callmethod(this, "normaliseAngle", [0]);
              return call1680
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1674.paramCounts = [
            1,
          ];
          func1674.variableArities = [
            false,
          ];
          obj1580.methods["turn"] = func1674;
          func1674.definitionLine = 104;
          func1674.definitionModule = "musical";
          var func1681 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1681.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1682 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1683 = callmethod(this, "x", [0]);
              var call1684 = callmethod(var_point,"x()y", [1, 1], call1683, new GraceNum(0));
              onSelf = true;
              var call1685 = callmethod(this, "isPointOver", [1], call1684);
              if (Grace_isTrue(call1685)) {
                lineNumber = 111
                lineNumber = 110
                var bool1686 = new GraceBoolean(true)
                return bool1686
              }
              lineNumber = 115
              var if1687 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1688 = callmethod(this, "x", [0]);
              var call1689 = callmethod(var_point,"x()y", [1, 1], call1688, var_canvasHeight);
              onSelf = true;
              var call1690 = callmethod(this, "isPointOver", [1], call1689);
              if (Grace_isTrue(call1690)) {
                lineNumber = 114
                lineNumber = 113
                var bool1691 = new GraceBoolean(true)
                return bool1691
              }
              lineNumber = 118
              var if1692 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1693 = callmethod(this, "y", [0]);
              var call1694 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1693);
              onSelf = true;
              var call1695 = callmethod(this, "isPointOver", [1], call1694);
              if (Grace_isTrue(call1695)) {
                lineNumber = 117
                lineNumber = 116
                var bool1696 = new GraceBoolean(true)
                return bool1696
              }
              lineNumber = 121
              var if1697 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1698 = callmethod(this, "y", [0]);
              var call1699 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1698);
              onSelf = true;
              var call1700 = callmethod(this, "isPointOver", [1], call1699);
              if (Grace_isTrue(call1700)) {
                lineNumber = 120
                lineNumber = 119
                var bool1701 = new GraceBoolean(true)
                return bool1701
              }
              lineNumber = 122
              lineNumber = 121
              var bool1702 = new GraceBoolean(false)
              return bool1702
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
          obj1580.methods["touchingEdge"] = func1681;
          func1681.definitionLine = 108;
          func1681.definitionModule = "musical";
          var func1703 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1703.paramCounts[0])
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
              var if1704 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1705 = callmethod(this, "x", [0]);
              var call1706 = callmethod(var_point,"x()y", [1, 1], call1705, new GraceNum(0));
              onSelf = true;
              var call1707 = callmethod(this, "isPointOver", [1], call1706);
              if (Grace_isTrue(call1707)) {
                lineNumber = 127
                onSelf = true;
                var call1708 = callmethod(this, "bounceFrom", [1], var_top);
                if1704 = call1708;
              }
              lineNumber = 132
              var if1709 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1710 = callmethod(this, "x", [0]);
              var call1711 = callmethod(var_point,"x()y", [1, 1], call1710, var_canvasHeight);
              onSelf = true;
              var call1712 = callmethod(this, "isPointOver", [1], call1711);
              if (Grace_isTrue(call1712)) {
                lineNumber = 130
                onSelf = true;
                var call1713 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1709 = call1713;
              }
              lineNumber = 135
              var if1714 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1715 = callmethod(this, "y", [0]);
              var call1716 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1715);
              onSelf = true;
              var call1717 = callmethod(this, "isPointOver", [1], call1716);
              if (Grace_isTrue(call1717)) {
                lineNumber = 133
                onSelf = true;
                var call1718 = callmethod(this, "bounceFrom", [1], var_left);
                if1714 = call1718;
              }
              lineNumber = 138
              var if1719 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1720 = callmethod(this, "y", [0]);
              var call1721 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1720);
              onSelf = true;
              var call1722 = callmethod(this, "isPointOver", [1], call1721);
              if (Grace_isTrue(call1722)) {
                lineNumber = 136
                onSelf = true;
                var call1723 = callmethod(this, "bounceFrom", [1], var_right);
                if1719 = call1723;
              }
              lineNumber = 138
              var block1724 = Grace_allocObject();
              block1724.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1724.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1724.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1724.methods["match"] = GraceBlock_match;
              block1724.methods["prefix?"] = GraceBlock_lift;
              block1724.receiver = this;
              block1724.className = 'block<musical:138>';
              block1724.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1725 = callmethod(this, "touchingEdge", [0]);
                return call1725;
              };
              lineNumber = 141
              var block1726 = Grace_allocObject();
              block1726.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1726.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1726.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1726.methods["match"] = GraceBlock_match;
              block1726.methods["prefix?"] = GraceBlock_lift;
              block1726.receiver = this;
              block1726.className = 'block<musical:141>';
              block1726.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1727 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1727;
              };
              var call1728 = callmethod(Grace_prelude,"while()do", [1, 1], block1724, block1726);
              return call1728
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1703.paramCounts = [
            0,
          ];
          func1703.variableArities = [
            false,
          ];
          obj1580.methods["bounce"] = func1703;
          func1703.definitionLine = 123;
          func1703.definitionModule = "musical";
          var func1729 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1729.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1730 = var_done;
              lineNumber = 143
              var string1731 = new GraceString("left");
              var opresult1734 = callmethod(var_dir, "==", [1], string1731);
              if (Grace_isTrue(opresult1734)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1735 = callmethod(this, "angle", [0]);
                var diff1738 = callmethod(new GraceNum(360), "-", [1], call1735);
                onSelf = true;
                var call1739 = callmethod(this, "angle:=", [1], diff1738);
                if1730 = call1739;
              }
              lineNumber = 149
              var if1740 = var_done;
              lineNumber = 146
              var string1741 = new GraceString("right");
              var opresult1744 = callmethod(var_dir, "==", [1], string1741);
              if (Grace_isTrue(opresult1744)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1745 = callmethod(this, "angle", [0]);
                var diff1748 = callmethod(new GraceNum(360), "-", [1], call1745);
                onSelf = true;
                var call1749 = callmethod(this, "angle:=", [1], diff1748);
                if1740 = call1749;
              }
              lineNumber = 152
              var if1750 = var_done;
              lineNumber = 149
              var string1751 = new GraceString("top");
              var opresult1754 = callmethod(var_dir, "==", [1], string1751);
              if (Grace_isTrue(opresult1754)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1755 = callmethod(this, "angle", [0]);
                var diff1758 = callmethod(new GraceNum(180), "-", [1], call1755);
                onSelf = true;
                var call1759 = callmethod(this, "angle:=", [1], diff1758);
                if1750 = call1759;
              }
              lineNumber = 155
              var if1760 = var_done;
              lineNumber = 152
              var string1761 = new GraceString("bottom");
              var opresult1764 = callmethod(var_dir, "==", [1], string1761);
              if (Grace_isTrue(opresult1764)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1765 = callmethod(this, "angle", [0]);
                var diff1768 = callmethod(new GraceNum(180), "-", [1], call1765);
                onSelf = true;
                var call1769 = callmethod(this, "angle:=", [1], diff1768);
                if1760 = call1769;
              }
              lineNumber = 155
              onSelf = true;
              var call1770 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1771 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1771
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1729.paramCounts = [
            1,
          ];
          func1729.variableArities = [
            false,
          ];
          obj1580.methods["bounceFrom"] = func1729;
          func1729.definitionLine = 142;
          func1729.definitionModule = "musical";
          var func1772 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1772.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1773 = var_done;
              lineNumber = 159
              var call1774 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1776 = callmethod(this, "x", [0]);
              var opresult1778 = callmethod(call1776, ">", [1], call1774);
              if (Grace_isTrue(opresult1778)) {
                lineNumber = 160
                onSelf = true;
                var call1779 = callmethod(this, "bounceFrom", [1], var_left);
                if1773 = call1779;
              }
              lineNumber = 165
              var if1780 = var_done;
              lineNumber = 162
              var call1781 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1783 = callmethod(this, "x", [0]);
              var opresult1785 = callmethod(call1783, "<", [1], call1781);
              if (Grace_isTrue(opresult1785)) {
                lineNumber = 163
                onSelf = true;
                var call1786 = callmethod(this, "bounceFrom", [1], var_right);
                if1780 = call1786;
              }
              lineNumber = 165
              var block1787 = Grace_allocObject();
              block1787.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1787.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1787.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1787.methods["match"] = GraceBlock_match;
              block1787.methods["prefix?"] = GraceBlock_lift;
              block1787.receiver = this;
              block1787.className = 'block<musical:165>';
              block1787.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1788 = callmethod(this, "touching", [1], var_other);
                return call1788;
              };
              lineNumber = 168
              var block1789 = Grace_allocObject();
              block1789.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1789.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1789.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1789.methods["match"] = GraceBlock_match;
              block1789.methods["prefix?"] = GraceBlock_lift;
              block1789.receiver = this;
              block1789.className = 'block<musical:168>';
              block1789.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1790 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1790;
              };
              var call1791 = callmethod(Grace_prelude,"while()do", [1, 1], block1787, block1789);
              return call1791
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1772.paramCounts = [
            1,
          ];
          func1772.variableArities = [
            false,
          ];
          obj1580.methods["bounceOff"] = func1772;
          func1772.definitionLine = 158;
          func1772.definitionModule = "musical";
          var func1792 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1792.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1793 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1794 = callmethod(this, "y", [0]);
              var call1795 = callmethod(var_point,"x()y", [1, 1], call1793, call1794);
              var call1796 = callmethod(var_other,"isPointOver", [1], call1795);
              return call1796
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1792.paramCounts = [
            1,
          ];
          func1792.variableArities = [
            false,
          ];
          obj1580.methods["touching"] = func1792;
          func1792.definitionLine = 169;
          func1792.definitionModule = "musical";
          var func1797 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1797.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1798 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1799 = callmethod(this, "y", [0]);
              var call1801 = callmethod(var_other,"y", [0]);
              var opresult1803 = callmethod(call1801, "!=", [1], call1799);
              onSelf = true;
              var call1805 = callmethod(this, "x", [0]);
              var call1807 = callmethod(var_other,"x", [0]);
              var opresult1809 = callmethod(call1807, "!=", [1], call1805);
              var opresult1811 = callmethod(opresult1809, "||", [1], opresult1803);
              if (Grace_isTrue(opresult1811)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1814 = callmethod(this, "x", [0]);
                var call1816 = callmethod(var_other,"x", [0]);
                var diff1818 = callmethod(call1816, "-", [1], call1814);
                onSelf = true;
                var call1819 = callmethod(this, "y", [0]);
                var call1821 = callmethod(var_other,"y", [0]);
                var diff1823 = callmethod(call1821, "-", [1], call1819);
                var call1824 = callmethod(var_trig,"atan2", [2], diff1818, diff1823);
                var prod1826 = callmethod(call1824, "*", [1], new GraceNum(180));
                var quotient1828 = callmethod(prod1826, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1829 = callmethod(this, "angle:=", [1], quotient1828);
                if1798 = call1829;
              }
              lineNumber = 176
              onSelf = true;
              var call1830 = callmethod(this, "normaliseAngle", [0]);
              return call1830
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1797.paramCounts = [
            1,
          ];
          func1797.variableArities = [
            false,
          ];
          obj1580.methods["face"] = func1797;
          func1797.definitionLine = 172;
          func1797.definitionModule = "musical";
          var func1831 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1831.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1832 = new GraceString("2d");
              var call1833 = callmethod(var_backingCanvas,"getContext", [1], string1832);
              onSelf = true;
              var call1834 = callmethod(this, "draw", [1], call1833);
              return call1834
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1831.paramCounts = [
            0,
          ];
          func1831.variableArities = [
            false,
          ];
          obj1580.methods["stamp"] = func1831;
          func1831.definitionLine = 178;
          func1831.definitionModule = "musical";
          sourceObject = obj1580;
          lineNumber = 49
          var call1835 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1836 = callmethod(call1835, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1837 = callmethod(call1836, "initialise", [0]);
          sourceObject = obj1580;
          lineNumber = 50
          var call1838 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1580;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1580;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1580;
          lineNumber = 53
          var call1839 = callmethod(var_collections,"list", [0]);
          var call1840 = callmethod(call1839,"new", [0]);
          obj1580.data["alwaysBlocks"] = call1840;
          var reader_musical_alwaysBlocks_1841 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1841.def = true;
          reader_musical_alwaysBlocks_1841.confidential = true;
          obj1580.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1841;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1840)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1580;
          lineNumber = 55
          lineNumber = 54
          var quotient1844 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1580.data["x"] = quotient1844;
          var reader_musical_x_1845 = function() {
            return this.data["x"];
          }
          obj1580.methods["x"] = reader_musical_x_1845;
          obj1580.data["x"] = quotient1844;
          var writer_musical_x_1845 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1580.methods["x:="] = writer_musical_x_1845;
          writer_musical_x_1845.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1844)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1580.mutable = true;
          sourceObject = obj1580;
          lineNumber = 56
          lineNumber = 55
          var quotient1848 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1580.data["y"] = quotient1848;
          var reader_musical_y_1849 = function() {
            return this.data["y"];
          }
          obj1580.methods["y"] = reader_musical_y_1849;
          obj1580.data["y"] = quotient1848;
          var writer_musical_y_1849 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1580.methods["y:="] = writer_musical_y_1849;
          writer_musical_y_1849.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1848)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1580.mutable = true;
          sourceObject = obj1580;
          lineNumber = 56
          onSelf = true;
          var call1850 = callmethod(this, "x", [0]);
          obj1580.data["destX"] = call1850;
          var reader_musical_destX_1851 = function() {
            return this.data["destX"];
          }
          obj1580.methods["destX"] = reader_musical_destX_1851;
          obj1580.data["destX"] = call1850;
          var writer_musical_destX_1851 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1580.methods["destX:="] = writer_musical_destX_1851;
          reader_musical_destX_1851.confidential = true;
          writer_musical_destX_1851.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1850)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1580.mutable = true;
          sourceObject = obj1580;
          lineNumber = 57
          onSelf = true;
          var call1852 = callmethod(this, "y", [0]);
          obj1580.data["destY"] = call1852;
          var reader_musical_destY_1853 = function() {
            return this.data["destY"];
          }
          obj1580.methods["destY"] = reader_musical_destY_1853;
          obj1580.data["destY"] = call1852;
          var writer_musical_destY_1853 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1580.methods["destY:="] = writer_musical_destY_1853;
          reader_musical_destY_1853.confidential = true;
          writer_musical_destY_1853.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1852)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1580.mutable = true;
          sourceObject = obj1580;
          lineNumber = 58
          obj1580.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1854 = function() {
            return this.data["angle"];
          }
          obj1580.methods["angle"] = reader_musical_angle_1854;
          obj1580.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1854 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1580.methods["angle:="] = writer_musical_angle_1854;
          reader_musical_angle_1854.confidential = true;
          writer_musical_angle_1854.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1580.mutable = true;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          sourceObject = obj1580;
          superDepth = origSuperDepth;
        }
        obj_init_1580.apply(inheritingObject, []);
        return obj1580
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1301.methods["new()object"] = func1579;
    var func1855 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1856 = new GraceString("class drawable");
        return string1856
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1855.paramCounts = [
    ];
    func1855.variableArities = [
    ];
    obj1301.methods["asDebugString"] = func1855;
    func1855.definitionLine = 48;
    func1855.definitionModule = "musical";
    sourceObject = obj1301;
    sourceObject = obj1301;
    superDepth = origSuperDepth;
  }
  obj_init_1301.apply(obj1301, []);
  var var_drawable = obj1301;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1857 = Grace_allocObject();
  obj1857.definitionModule = "musical";
  obj1857.definitionLine = 316;
  obj1857.outer = this;
  var reader_musical_outer_1858 = function() {
    return this.outer;
  }
  obj1857.methods["outer"] = reader_musical_outer_1858;
  function obj_init_1857() {
    var origSuperDepth = superDepth;
    superDepth = obj1857;
    obj1857.annotations = [];
    var func1859 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1859.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1860 = callmethod(this, "position", [0]);
        var call1861 = callmethod(call1860,"x", [0]);
        return call1861
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
    obj1857.methods["x"] = func1859;
    func1859.definitionLine = 318;
    func1859.definitionModule = "musical";
    var func1862 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1862.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1863 = callmethod(this, "position", [0]);
        var call1864 = callmethod(call1863,"y", [0]);
        return call1864
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1862.paramCounts = [
      0,
    ];
    func1862.variableArities = [
      false,
    ];
    obj1857.methods["y"] = func1862;
    func1862.definitionLine = 321;
    func1862.definitionModule = "musical";
    var func1865 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1865.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1866 = callmethod(this, "position", [0]);
        return call1866
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
    obj1857.methods["location"] = func1865;
    func1865.definitionLine = 324;
    func1865.definitionModule = "musical";
    sourceObject = obj1857;
    lineNumber = 317
    var call1867 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1857.data["position"] = call1867;
    var reader_musical_position_1868 = function() {
      return this.data["position"];
    }
    obj1857.methods["position"] = reader_musical_position_1868;
    obj1857.data["position"] = call1867;
    var writer_musical_position_1868 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1857.methods["position:="] = writer_musical_position_1868;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1867)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1857.mutable = true;
    sourceObject = obj1857;
    sourceObject = obj1857;
    sourceObject = obj1857;
    superDepth = origSuperDepth;
  }
  obj_init_1857.apply(obj1857, []);
  var var_mouse = obj1857;
  lineNumber = 322
  var func1869 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1869.paramCounts[0])
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
  func1869.paramCounts = [
    0,
  ];
  func1869.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1869;
  func1869.definitionLine = 322;
  func1869.definitionModule = "musical";
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
  var func1870 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1870.paramCounts[0])
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
  func1870.paramCounts = [
    0,
  ];
  func1870.variableArities = [
    false,
  ];
  this.methods["octave"] = func1870;
  func1870.definitionLine = 322;
  func1870.definitionModule = "musical";
  lineNumber = 322
  var func1871 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1871.paramCounts[0])
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
  func1871.paramCounts = [
    1,
  ];
  func1871.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1871;
  func1871.definitionLine = 322;
  func1871.definitionModule = "musical";
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
  var bool1872 = new GraceBoolean(false)
  var var_applyFlat = bool1872;
  lineNumber = 322
  var func1873 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1873.paramCounts[0])
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
  func1873.paramCounts = [
    0,
  ];
  func1873.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1873;
  func1873.definitionLine = 322;
  func1873.definitionModule = "musical";
  lineNumber = 322
  var func1874 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1874.paramCounts[0])
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
  func1874.paramCounts = [
    1,
  ];
  func1874.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1874;
  func1874.definitionLine = 322;
  func1874.definitionModule = "musical";
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
  var bool1875 = new GraceBoolean(false)
  var var_applySharp = bool1875;
  lineNumber = 322
  var func1876 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1876.paramCounts[0])
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
  func1876.paramCounts = [
    0,
  ];
  func1876.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1876;
  func1876.definitionLine = 322;
  func1876.definitionModule = "musical";
  lineNumber = 322
  var func1877 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1877.paramCounts[0])
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
  func1877.paramCounts = [
    1,
  ];
  func1877.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1877;
  func1877.definitionLine = 322;
  func1877.definitionModule = "musical";
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
  var bool1878 = new GraceBoolean(false)
  var var_applyChorus = bool1878;
  lineNumber = 322
  var func1879 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1879.paramCounts[0])
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
  func1879.paramCounts = [
    0,
  ];
  func1879.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1879;
  func1879.definitionLine = 322;
  func1879.definitionModule = "musical";
  lineNumber = 322
  var func1880 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1880.paramCounts[0])
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
  func1880.paramCounts = [
    1,
  ];
  func1880.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1880;
  func1880.definitionLine = 322;
  func1880.definitionModule = "musical";
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
  var bool1881 = new GraceBoolean(false)
  var var_applyReverb = bool1881;
  lineNumber = 322
  var func1882 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1882.paramCounts[0])
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
  func1882.paramCounts = [
    0,
  ];
  func1882.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1882;
  func1882.definitionLine = 322;
  func1882.definitionModule = "musical";
  lineNumber = 322
  var func1883 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1883.paramCounts[0])
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
  func1883.paramCounts = [
    1,
  ];
  func1883.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1883;
  func1883.definitionLine = 322;
  func1883.definitionModule = "musical";
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
  var bool1884 = new GraceBoolean(false)
  var var_applyAutowah = bool1884;
  lineNumber = 322
  var func1885 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1885.paramCounts[0])
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
  func1885.paramCounts = [
    0,
  ];
  func1885.variableArities = [
    false,
  ];
  this.methods["applyAutowah"] = func1885;
  func1885.definitionLine = 322;
  func1885.definitionModule = "musical";
  lineNumber = 322
  var func1886 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1886.paramCounts[0])
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
  func1886.paramCounts = [
    1,
  ];
  func1886.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1886;
  func1886.definitionLine = 322;
  func1886.definitionModule = "musical";
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
  var bool1887 = new GraceBoolean(false)
  var var_applyCheby = bool1887;
  lineNumber = 322
  var func1888 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1888.paramCounts[0])
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
  func1888.paramCounts = [
    0,
  ];
  func1888.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1888;
  func1888.definitionLine = 322;
  func1888.definitionModule = "musical";
  lineNumber = 322
  var func1889 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1889.paramCounts[0])
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
  func1889.paramCounts = [
    1,
  ];
  func1889.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1889;
  func1889.definitionLine = 322;
  func1889.definitionModule = "musical";
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
  var bool1890 = new GraceBoolean(true)
  var var_firstPass = bool1890;
  lineNumber = 322
  var func1891 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1891.paramCounts[0])
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
  func1891.paramCounts = [
    0,
  ];
  func1891.variableArities = [
    false,
  ];
  this.methods["firstPass"] = func1891;
  func1891.definitionLine = 322;
  func1891.definitionModule = "musical";
  lineNumber = 322
  var func1892 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1892.paramCounts[0])
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
  func1892.paramCounts = [
    1,
  ];
  func1892.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1892;
  func1892.definitionLine = 322;
  func1892.definitionModule = "musical";
  lineNumber = 506;
  moduleName = "musical";
  lineNumber = 501
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 506
  lineNumber = 536
  lineNumber = 545
  lineNumber = 551
  lineNumber = 561
  lineNumber = 570
  lineNumber = 575
  lineNumber = 580
  lineNumber = 585
  lineNumber = 590
  lineNumber = 595
  lineNumber = 603
  lineNumber = 620
  lineNumber = 626
  lineNumber = 632
  lineNumber = 638
  lineNumber = 646
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "methods-of:point.x()y:\n x\n y\n left\n down\n right\n up\npath:\n musical\nconstructors-of:point:\n x()y\nmethods-of:drawable.new:\n whenever()do\n turn\n tick\n touching\n draw\n alwaysBlocks\n normaliseAngle\n bounceOff\n moveTo\n destX:=\n jumpTo\n destY:=\n bounce\n destX\n destY\n face\n x:=\n y:=\n always\n bounceFrom\n forward\n touchingEdge\n x\n y\n step\n angle:=\n mousedown\n isPointOver\n stamp\n angle\nconfidential:\nfresh:image:\n whenever()do\n height:=\n bounceOff\n height\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n touching\n width:=\n imgTag\n mousedown\n turn\n url:=\n tick\n draw\n alwaysBlocks\n normaliseAngle\n url\n destX:=\n bounce\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n width\n isPointOver\n stamp\n angle\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\nclasses:\n point\n drawable\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:value:\n whenever()do\n colour:=\n bounceOff\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n touching\n label:=\n mousedown\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n destX:=\n bounce\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n label\n isPointOver\n stamp\n angle\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nfresh:circle:\n whenever()do\n colour:=\n radius:=\n bounceOff\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n touching\n mousedown\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n destX:=\n bounce\n radius\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n isPointOver\n stamp\n angle\nfresh:rectangle:\n whenever()do\n colour:=\n height:=\n asString\n bounceOff\n height\n moveTo\n jumpTo\n destY:=\n destX\n destY\n x:=\n bounceFrom\n always\n touching\n width:=\n mousedown\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n destX:=\n bounce\n face\n y:=\n forward\n touchingEdge\n x\n y\n step\n angle:=\n width\n isPointOver\n stamp\n angle\n";
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
