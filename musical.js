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
      lineNumber = 629
      var if1120 = var_done;
      lineNumber = 625
      var bool1121 = new GraceBoolean(true)
      var opresult1124 = callmethod(var_firstPass, "==", [1], bool1121);
      if (Grace_isTrue(opresult1124)) {
        lineNumber = 626
        var call1125 = callmethod(var_dom,"window", [0]);
        var call1126 = callmethod(call1125,"t_reset", [0]);
        lineNumber = 628
        lineNumber = 627
        var bool1127 = new GraceBoolean(false)
        var_firstPass = bool1127;
        if1120 = bool1127;
      }
      lineNumber = 629
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
  func1119.definitionLine = 624;
  func1119.definitionModule = "musical";
  lineNumber = 635
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
      lineNumber = 639
      var if1131 = var_done;
      lineNumber = 636
      var bool1132 = new GraceBoolean(true)
      var opresult1135 = callmethod(var_applyChorus, "==", [1], bool1132);
      if (Grace_isTrue(opresult1135)) {
        lineNumber = 637
        var call1136 = callmethod(var_dom,"window", [0]);
        var call1137 = callmethod(call1136,"t_effect_chorus", [0]);
        if1131 = call1137;
      }
      lineNumber = 642
      var if1138 = var_done;
      lineNumber = 639
      var bool1139 = new GraceBoolean(true)
      var opresult1142 = callmethod(var_applyReverb, "==", [1], bool1139);
      if (Grace_isTrue(opresult1142)) {
        lineNumber = 640
        var call1143 = callmethod(var_dom,"window", [0]);
        var call1144 = callmethod(call1143,"t_effect_reverb", [0]);
        if1138 = call1144;
      }
      lineNumber = 645
      var if1145 = var_done;
      lineNumber = 642
      var bool1146 = new GraceBoolean(true)
      var opresult1149 = callmethod(var_applyAutowah, "==", [1], bool1146);
      if (Grace_isTrue(opresult1149)) {
        lineNumber = 643
        var call1150 = callmethod(var_dom,"window", [0]);
        var call1151 = callmethod(call1150,"t_effect_autowah", [0]);
        if1145 = call1151;
      }
      lineNumber = 648
      var if1152 = var_done;
      lineNumber = 645
      var bool1153 = new GraceBoolean(true)
      var opresult1156 = callmethod(var_applyCheby, "==", [1], bool1153);
      if (Grace_isTrue(opresult1156)) {
        lineNumber = 646
        var call1157 = callmethod(var_dom,"window", [0]);
        var call1158 = callmethod(call1157,"t_effect_cheby", [0]);
        if1152 = call1158;
      }
      lineNumber = 648
      var call1159 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 649
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
  func1130.definitionLine = 635;
  func1130.definitionModule = "musical";
  lineNumber = 652
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
      lineNumber = 654
      lineNumber = 653
      var bool1163 = new GraceBoolean(true)
      var_applyChorus = bool1163;
      lineNumber = 654
      onSelf = true;
      var call1164 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 656
      lineNumber = 655
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
  func1162.definitionLine = 652;
  func1162.definitionModule = "musical";
  lineNumber = 658
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
      lineNumber = 660
      lineNumber = 659
      var bool1167 = new GraceBoolean(true)
      var_applyReverb = bool1167;
      lineNumber = 660
      onSelf = true;
      var call1168 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 662
      lineNumber = 661
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
  func1166.definitionLine = 658;
  func1166.definitionModule = "musical";
  lineNumber = 664
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
      lineNumber = 666
      lineNumber = 665
      var bool1171 = new GraceBoolean(true)
      var_applyAutowah = bool1171;
      lineNumber = 666
      onSelf = true;
      var call1172 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 668
      lineNumber = 667
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
  func1170.definitionLine = 664;
  func1170.definitionModule = "musical";
  lineNumber = 670
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
      lineNumber = 672
      lineNumber = 671
      var bool1175 = new GraceBoolean(true)
      var_applyCheby = bool1175;
      lineNumber = 672
      onSelf = true;
      var call1176 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 674
      lineNumber = 673
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
  func1174.definitionLine = 670;
  func1174.definitionModule = "musical";
  lineNumber = 678
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
      lineNumber = 679
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
  func1178.definitionLine = 678;
  func1178.definitionModule = "musical";
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
  var call1181 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1181;
  this.data = call1181.data;
  this._value = call1181._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 679
  var func1182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1182.paramCounts[0])
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
  func1182.paramCounts = [
    0,
  ];
  func1182.variableArities = [
    false,
  ];
  this.methods["document"] = func1182;
  func1182.definitionLine = 679;
  func1182.definitionModule = "musical";
  lineNumber = 679
  var func1183 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1183.paramCounts[0])
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
  func1183.paramCounts = [
    1,
  ];
  func1183.variableArities = [
    false,
  ];
  this.methods["document:="] = func1183;
  func1183.definitionLine = 679;
  func1183.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 679
  var func1184 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1184.paramCounts[0])
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
  func1184.paramCounts = [
    0,
  ];
  func1184.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1184;
  func1184.definitionLine = 679;
  func1184.definitionModule = "musical";
  lineNumber = 679
  var func1185 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1185.paramCounts[0])
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
  func1185.paramCounts = [
    1,
  ];
  func1185.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1185;
  func1185.definitionLine = 679;
  func1185.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 679
  var func1186 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1186.paramCounts[0])
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
  func1186.paramCounts = [
    0,
  ];
  func1186.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1186;
  func1186.definitionLine = 679;
  func1186.definitionModule = "musical";
  lineNumber = 679
  var func1187 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1187.paramCounts[0])
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
  func1187.paramCounts = [
    1,
  ];
  func1187.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1187;
  func1187.definitionLine = 679;
  func1187.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 679
  var func1188 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1188.paramCounts[0])
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
  func1188.paramCounts = [
    0,
  ];
  func1188.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1188;
  func1188.definitionLine = 679;
  func1188.definitionModule = "musical";
  lineNumber = 679
  var func1189 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1189.paramCounts[0])
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
  func1189.paramCounts = [
    1,
  ];
  func1189.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1189;
  func1189.definitionLine = 679;
  func1189.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 679
  var func1190 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1190.paramCounts[0])
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
  func1190.paramCounts = [
    0,
  ];
  func1190.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1190;
  func1190.definitionLine = 679;
  func1190.definitionModule = "musical";
  lineNumber = 679
  var func1191 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1191.paramCounts[0])
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
  func1191.paramCounts = [
    1,
  ];
  func1191.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1191;
  func1191.definitionLine = 679;
  func1191.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 679
  var func1192 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1192.paramCounts[0])
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
  func1192.paramCounts = [
    0,
  ];
  func1192.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1192;
  func1192.definitionLine = 679;
  func1192.definitionModule = "musical";
  lineNumber = 679
  var func1193 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1193.paramCounts[0])
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
  func1193.paramCounts = [
    1,
  ];
  func1193.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1193;
  func1193.definitionLine = 679;
  func1193.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1194 = callmethod(var_dom,"window", [0]);
  var call1195 = callmethod(call1194,"Math", [0]);
  var var_trig = call1195;
  var func1196 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1196.paramCounts[0])
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
  func1196.paramCounts = [
    0,
  ];
  func1196.variableArities = [
    false,
  ];
  this.methods["trig"] = func1196;
  func1196.definitionLine = 15;
  func1196.definitionModule = "musical";
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
  var func1197 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1197.paramCounts[0])
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
  func1197.paramCounts = [
    0,
  ];
  func1197.variableArities = [
    false,
  ];
  this.methods["PI"] = func1197;
  func1197.definitionLine = 15;
  func1197.definitionModule = "musical";
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
  var bool1198 = new GraceBoolean(false)
  var var_stopRunning = bool1198;
  lineNumber = 15
  var func1199 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1199.paramCounts[0])
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
  func1199.paramCounts = [
    0,
  ];
  func1199.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1199;
  func1199.definitionLine = 15;
  func1199.definitionModule = "musical";
  lineNumber = 15
  var func1200 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1200.paramCounts[0])
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
  func1200.paramCounts = [
    1,
  ];
  func1200.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1200;
  func1200.definitionLine = 15;
  func1200.definitionModule = "musical";
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
  var bool1201 = new GraceBoolean(false)
  var var_initialised = bool1201;
  lineNumber = 15
  var func1202 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1202.paramCounts[0])
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
  func1202.paramCounts = [
    0,
  ];
  func1202.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1202;
  func1202.definitionLine = 15;
  func1202.definitionModule = "musical";
  lineNumber = 15
  var func1203 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1203.paramCounts[0])
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
  func1203.paramCounts = [
    1,
  ];
  func1203.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1203;
  func1203.definitionLine = 15;
  func1203.definitionModule = "musical";
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
  var string1204 = new GraceString("white");
  var var_backgroundColour = string1204;
  lineNumber = 15
  var func1205 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1205.paramCounts[0])
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
  func1205.paramCounts = [
    0,
  ];
  func1205.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1205;
  func1205.definitionLine = 15;
  func1205.definitionModule = "musical";
  lineNumber = 15
  var func1206 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1206.paramCounts[0])
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
  func1206.paramCounts = [
    1,
  ];
  func1206.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1206;
  func1206.definitionLine = 15;
  func1206.definitionModule = "musical";
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
  var call1207 = callmethod(var_collections,"list", [0]);
  var call1208 = callmethod(call1207,"new", [0]);
  var var_registeredObjects = call1208;
  var func1209 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1209.paramCounts[0])
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
  func1209.paramCounts = [
    0,
  ];
  func1209.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1209;
  func1209.definitionLine = 21;
  func1209.definitionModule = "musical";
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
  var call1210 = callmethod(var_collections,"list", [0]);
  var call1211 = callmethod(call1210,"new", [0]);
  var var_stepBlocks = call1211;
  var func1212 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1212.paramCounts[0])
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
  func1212.paramCounts = [
    0,
  ];
  func1212.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1212;
  func1212.definitionLine = 22;
  func1212.definitionModule = "musical";
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
  var call1213 = callmethod(var_collections,"map", [0]);
  var call1214 = callmethod(call1213,"new", [0]);
  var var_audioTags = call1214;
  var func1215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1215.paramCounts[0])
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
  func1215.paramCounts = [
    0,
  ];
  func1215.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1215;
  func1215.definitionLine = 23;
  func1215.definitionModule = "musical";
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
  var func1216 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1216.paramCounts[0])
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
  func1216.paramCounts = [
    0,
  ];
  func1216.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1216;
  func1216.definitionLine = 23;
  func1216.definitionModule = "musical";
  lineNumber = 23
  var func1217 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1217.paramCounts[0])
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
  func1217.paramCounts = [
    1,
  ];
  func1217.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1217;
  func1217.definitionLine = 23;
  func1217.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1218 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1218.paramCounts[0])
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
  func1218.paramCounts = [
    0,
  ];
  func1218.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1218;
  func1218.definitionLine = 23;
  func1218.definitionModule = "musical";
  lineNumber = 23
  var func1219 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1219.paramCounts[0])
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
  func1219.paramCounts = [
    1,
  ];
  func1219.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1219;
  func1219.definitionLine = 23;
  func1219.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1220 = new GraceString("left");
  var var_left = string1220;
  lineNumber = 23
  var func1221 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    0,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["left"] = func1221;
  func1221.definitionLine = 23;
  func1221.definitionModule = "musical";
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
  var string1222 = new GraceString("right");
  var var_right = string1222;
  lineNumber = 23
  var func1223 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    0,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["right"] = func1223;
  func1223.definitionLine = 23;
  func1223.definitionModule = "musical";
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
  var string1224 = new GraceString("top");
  var var_top = string1224;
  lineNumber = 23
  var func1225 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    0,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["top"] = func1225;
  func1225.definitionLine = 23;
  func1225.definitionModule = "musical";
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
  var string1226 = new GraceString("bottom");
  var var_bottom = string1226;
  lineNumber = 23
  var func1227 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1227.paramCounts[0])
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
  func1227.paramCounts = [
    0,
  ];
  func1227.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1227;
  func1227.definitionLine = 23;
  func1227.definitionModule = "musical";
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
  var func1228 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    0,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["centre"] = func1228;
  func1228.definitionLine = 23;
  func1228.definitionModule = "musical";
  lineNumber = 23
  var func1229 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    1,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1229;
  func1229.definitionLine = 23;
  func1229.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1230 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1230.paramCounts[0])
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
  func1230.paramCounts = [
    0,
  ];
  func1230.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1230;
  func1230.definitionLine = 23;
  func1230.definitionModule = "musical";
  lineNumber = 23
  var func1231 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1231.paramCounts[0])
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
  func1231.paramCounts = [
    1,
  ];
  func1231.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1231;
  func1231.definitionLine = 23;
  func1231.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1232 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1232.paramCounts[0])
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
  func1232.paramCounts = [
    0,
  ];
  func1232.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1232;
  func1232.definitionLine = 23;
  func1232.definitionModule = "musical";
  lineNumber = 23
  var func1233 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1233.paramCounts[0])
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
  func1233.paramCounts = [
    1,
  ];
  func1233.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1233;
  func1233.definitionLine = 23;
  func1233.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1234 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1234.paramCounts[0])
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
  func1234.paramCounts = [
    0,
  ];
  func1234.variableArities = [
    false,
  ];
  this.methods["above"] = func1234;
  func1234.definitionLine = 23;
  func1234.definitionModule = "musical";
  lineNumber = 23
  var func1235 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1235.paramCounts[0])
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
  func1235.paramCounts = [
    1,
  ];
  func1235.variableArities = [
    false,
  ];
  this.methods["above:="] = func1235;
  func1235.definitionLine = 23;
  func1235.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1236 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1236.paramCounts[0])
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
  func1236.paramCounts = [
    0,
  ];
  func1236.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1236;
  func1236.definitionLine = 23;
  func1236.definitionModule = "musical";
  lineNumber = 23
  var func1237 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1237.paramCounts[0])
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
  func1237.paramCounts = [
    1,
  ];
  func1237.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1237;
  func1237.definitionLine = 23;
  func1237.definitionModule = "musical";
  lineNumber = 40
  var func1238 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1238.paramCounts[0])
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
  func1238.paramCounts = [
    0,
  ];
  func1238.variableArities = [
    false,
  ];
  this.methods["point"] = func1238;
  func1238.definitionLine = 40;
  func1238.definitionModule = "musical";
  var obj1239 = Grace_allocObject();
  obj1239.definitionModule = "musical";
  obj1239.definitionLine = 40;
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
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1241.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1241.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1242 = Grace_allocObject();
        obj1242.definitionModule = "musical";
        obj1242.definitionLine = 40;
        obj1242.outer = this;
        var reader_musical_outer_1243 = function() {
          return this.outer;
        }
        obj1242.methods["outer"] = reader_musical_outer_1243;
        function obj_init_1242() {
          var origSuperDepth = superDepth;
          superDepth = obj1242;
          obj1242.annotations = [];
          var func1244 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1246 = callmethod(this, "x", [0]);
              var diff1248 = callmethod(call1246, "-", [1], var_dx);
              onSelf = true;
              var call1249 = callmethod(this, "y", [0]);
              var call1250 = callmethod(var_point,"x()y", [1, 1], diff1248, call1249);
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
          obj1242.methods["left"] = func1244;
          func1244.definitionLine = 43;
          func1244.definitionModule = "musical";
          var func1251 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1253 = callmethod(this, "x", [0]);
              var opresult1255 = callmethod(call1253, "+", [1], var_dx);
              onSelf = true;
              var call1256 = callmethod(this, "y", [0]);
              var call1257 = callmethod(var_point,"x()y", [1, 1], opresult1255, call1256);
              return call1257
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
          obj1242.methods["right"] = func1251;
          func1251.definitionLine = 44;
          func1251.definitionModule = "musical";
          var func1258 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1258.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1259 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1261 = callmethod(this, "y", [0]);
              var diff1263 = callmethod(call1261, "-", [1], var_dy);
              var call1264 = callmethod(var_point,"x()y", [1, 1], call1259, diff1263);
              return call1264
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
          obj1242.methods["up"] = func1258;
          func1258.definitionLine = 45;
          func1258.definitionModule = "musical";
          var func1265 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1266 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1268 = callmethod(this, "y", [0]);
              var opresult1270 = callmethod(call1268, "+", [1], var_dy);
              var call1271 = callmethod(var_point,"x()y", [1, 1], call1266, opresult1270);
              return call1271
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1265.paramCounts = [
            1,
          ];
          func1265.variableArities = [
            false,
          ];
          obj1242.methods["down"] = func1265;
          func1265.definitionLine = 46;
          func1265.definitionModule = "musical";
          sourceObject = obj1242;
          lineNumber = 41
          obj1242.data["x"] = var_x__39__;
          var reader_musical_x_1272 = function() {
            return this.data["x"];
          }
          reader_musical_x_1272.def = true;
          obj1242.methods["x"] = reader_musical_x_1272;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1242;
          lineNumber = 42
          obj1242.data["y"] = var_y__39__;
          var reader_musical_y_1273 = function() {
            return this.data["y"];
          }
          reader_musical_y_1273.def = true;
          obj1242.methods["y"] = reader_musical_y_1273;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1242;
          sourceObject = obj1242;
          sourceObject = obj1242;
          sourceObject = obj1242;
          superDepth = origSuperDepth;
        }
        obj_init_1242.apply(obj1242, []);
        return obj1242
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
      1,
    ];
    func1241.variableArities = [
      false,
      false,
    ];
    obj1239.methods["x()y"] = func1241;
    func1241.definitionLine = 40;
    func1241.definitionModule = "musical";
    var func1274 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1275 = Grace_allocObject();
        obj1275.definitionModule = "musical";
        obj1275.definitionLine = 40;
        var inho1275 = inheritingObject;
        while (inho1275.superobj) inho1275 = inho1275.superobj;
        inho1275.superobj = obj1275;
        obj1275.data = inheritingObject.data;
        obj1275.outer = this;
        var reader_musical_outer_1276 = function() {
          return this.outer;
        }
        obj1275.methods["outer"] = reader_musical_outer_1276;
        function obj_init_1275() {
          var origSuperDepth = superDepth;
          superDepth = obj1275;
          obj1275.annotations = [];
          var func1277 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1279 = callmethod(this, "x", [0]);
              var diff1281 = callmethod(call1279, "-", [1], var_dx);
              onSelf = true;
              var call1282 = callmethod(this, "y", [0]);
              var call1283 = callmethod(var_point,"x()y", [1, 1], diff1281, call1282);
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
          obj1275.methods["left"] = func1277;
          func1277.definitionLine = 43;
          func1277.definitionModule = "musical";
          var func1284 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1286 = callmethod(this, "x", [0]);
              var opresult1288 = callmethod(call1286, "+", [1], var_dx);
              onSelf = true;
              var call1289 = callmethod(this, "y", [0]);
              var call1290 = callmethod(var_point,"x()y", [1, 1], opresult1288, call1289);
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
          obj1275.methods["right"] = func1284;
          func1284.definitionLine = 44;
          func1284.definitionModule = "musical";
          var func1291 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1292 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1294 = callmethod(this, "y", [0]);
              var diff1296 = callmethod(call1294, "-", [1], var_dy);
              var call1297 = callmethod(var_point,"x()y", [1, 1], call1292, diff1296);
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
          obj1275.methods["up"] = func1291;
          func1291.definitionLine = 45;
          func1291.definitionModule = "musical";
          var func1298 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1299 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1301 = callmethod(this, "y", [0]);
              var opresult1303 = callmethod(call1301, "+", [1], var_dy);
              var call1304 = callmethod(var_point,"x()y", [1, 1], call1299, opresult1303);
              return call1304
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1298.paramCounts = [
            1,
          ];
          func1298.variableArities = [
            false,
          ];
          obj1275.methods["down"] = func1298;
          func1298.definitionLine = 46;
          func1298.definitionModule = "musical";
          sourceObject = obj1275;
          lineNumber = 41
          obj1275.data["x"] = var_x__39__;
          var reader_musical_x_1305 = function() {
            return this.data["x"];
          }
          reader_musical_x_1305.def = true;
          obj1275.methods["x"] = reader_musical_x_1305;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1275;
          lineNumber = 42
          obj1275.data["y"] = var_y__39__;
          var reader_musical_y_1306 = function() {
            return this.data["y"];
          }
          reader_musical_y_1306.def = true;
          obj1275.methods["y"] = reader_musical_y_1306;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1275;
          sourceObject = obj1275;
          sourceObject = obj1275;
          sourceObject = obj1275;
          superDepth = origSuperDepth;
        }
        obj_init_1275.apply(inheritingObject, []);
        return obj1275
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1239.methods["x()y()object"] = func1274;
    var func1307 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1308 = new GraceString("class point");
        return string1308
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1307.paramCounts = [
    ];
    func1307.variableArities = [
    ];
    obj1239.methods["asDebugString"] = func1307;
    func1307.definitionLine = 40;
    func1307.definitionModule = "musical";
    sourceObject = obj1239;
    sourceObject = obj1239;
    superDepth = origSuperDepth;
  }
  obj_init_1239.apply(obj1239, []);
  var var_point = obj1239;
  lineNumber = 48
  var func1309 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1309.paramCounts[0])
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
  func1309.paramCounts = [
    0,
  ];
  func1309.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1309;
  func1309.definitionLine = 48;
  func1309.definitionModule = "musical";
  var obj1310 = Grace_allocObject();
  obj1310.definitionModule = "musical";
  obj1310.definitionLine = 48;
  obj1310.outer = this;
  var reader_musical_outer_1311 = function() {
    return this.outer;
  }
  obj1310.methods["outer"] = reader_musical_outer_1311;
  function obj_init_1310() {
    var origSuperDepth = superDepth;
    superDepth = obj1310;
    obj1310.annotations = [];
    var func1312 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1312.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1313 = Grace_allocObject();
        obj1313.definitionModule = "musical";
        obj1313.definitionLine = 48;
        obj1313.outer = this;
        var reader_musical_outer_1314 = function() {
          return this.outer;
        }
        obj1313.methods["outer"] = reader_musical_outer_1314;
        function obj_init_1313() {
          var origSuperDepth = superDepth;
          superDepth = obj1313;
          obj1313.annotations = [];
          var func1315 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1316 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1317 = Grace_allocObject();
              block1317.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1317.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1317.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1317.methods["match"] = GraceBlock_match;
              block1317.methods["prefix?"] = GraceBlock_lift;
              block1317.receiver = this;
              block1317.className = 'block<musical:63>';
              block1317.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1318 = callmethod(var_b,"apply", [0]);
                return call1318;
              };
              var call1319 = callmethod(Grace_prelude,"for()do", [1, 1], call1316, block1317);
              lineNumber = 63
              onSelf = true;
              var call1320 = callmethod(this, "tick", [0]);
              return call1320
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1315.paramCounts = [
            0,
          ];
          func1315.variableArities = [
            false,
          ];
          obj1313.methods["step"] = func1315;
          func1315.definitionLine = 59;
          func1315.definitionModule = "musical";
          var func1321 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1321.paramCounts[0])
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
          func1321.paramCounts = [
            0,
          ];
          func1321.variableArities = [
            false,
          ];
          obj1313.methods["tick"] = func1321;
          func1321.definitionLine = 66;
          func1321.definitionModule = "musical";
          var func1322 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1322.paramCounts[0])
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
          func1322.paramCounts = [
            1,
          ];
          func1322.variableArities = [
            false,
          ];
          obj1313.methods["draw"] = func1322;
          func1322.definitionLine = 67;
          func1322.definitionModule = "musical";
          var func1323 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1323.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1324 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1325 = callmethod(this, "destX:=", [1], call1324);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1326 = callmethod(var_p,"y", [0]);
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
          func1323.paramCounts = [
            1,
          ];
          func1323.variableArities = [
            false,
          ];
          obj1313.methods["moveTo"] = func1323;
          func1323.definitionLine = 68;
          func1323.definitionModule = "musical";
          var func1328 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1328.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1329 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1330 = callmethod(this, "x:=", [1], call1329);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1331 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1332 = callmethod(this, "y:=", [1], call1331);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1333 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1334 = callmethod(this, "destX:=", [1], call1333);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1335 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1336 = callmethod(this, "destY:=", [1], call1335);
              return call1336
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
          obj1313.methods["jumpTo"] = func1328;
          func1328.definitionLine = 72;
          func1328.definitionModule = "musical";
          var func1337 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1337.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1338 = new GraceBoolean(false)
              return bool1338
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1337.paramCounts = [
            1,
          ];
          func1337.variableArities = [
            false,
          ];
          obj1313.methods["isPointOver"] = func1337;
          func1337.definitionLine = 78;
          func1337.definitionModule = "musical";
          var func1339 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1339.paramCounts[0])
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
          func1339.paramCounts = [
            0,
          ];
          func1339.variableArities = [
            false,
          ];
          obj1313.methods["mousedown"] = func1339;
          func1339.definitionLine = 79;
          func1339.definitionModule = "musical";
          var func1340 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1341 = callmethod(this, "alwaysBlocks", [0]);
              var call1342 = callmethod(call1341,"push", [1], var_b);
              return call1342
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
          obj1313.methods["always"] = func1340;
          func1340.definitionLine = 80;
          func1340.definitionModule = "musical";
          var func1343 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1343.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1343.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1344 = Grace_allocObject();
              block1344.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1344.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1344.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1344.methods["match"] = GraceBlock_match;
              block1344.methods["prefix?"] = GraceBlock_lift;
              block1344.receiver = this;
              block1344.className = 'block<musical:89>';
              block1344.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1345 = var_done;
                lineNumber = 85
                var call1346 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1346)) {
                  lineNumber = 86
                  var call1347 = callmethod(var_b,"apply", [0]);
                  if1345 = call1347;
                }
                return if1345;
              };
              onSelf = true;
              var call1348 = callmethod(this, "always", [1], block1344);
              return call1348
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
            1,
          ];
          func1343.variableArities = [
            false,
            false,
          ];
          obj1313.methods["whenever()do"] = func1343;
          func1343.definitionLine = 83;
          func1343.definitionModule = "musical";
          var func1349 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1349.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1353 = callmethod(this, "angle", [0]);
              var quotient1355 = callmethod(call1353, "/", [1], new GraceNum(180));
              var prod1357 = callmethod(quotient1355, "*", [1], var_PI);
              var call1358 = callmethod(var_trig,"cos", [1], prod1357);
              var prod1360 = callmethod(call1358, "*", [1], var_dist);
              var var_y__39__ = prod1360;
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
              var call1364 = callmethod(this, "angle", [0]);
              var quotient1366 = callmethod(call1364, "/", [1], new GraceNum(180));
              var prod1368 = callmethod(quotient1366, "*", [1], var_PI);
              var call1369 = callmethod(var_trig,"sin", [1], prod1368);
              var prod1371 = callmethod(call1369, "*", [1], var_dist);
              var var_x__39__ = prod1371;
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
              var call1373 = callmethod(this, "x", [0]);
              var opresult1375 = callmethod(call1373, "+", [1], var_x__39__);
              onSelf = true;
              var call1376 = callmethod(this, "x:=", [1], opresult1375);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1378 = callmethod(this, "y", [0]);
              var opresult1380 = callmethod(call1378, "+", [1], var_y__39__);
              onSelf = true;
              var call1381 = callmethod(this, "y:=", [1], opresult1380);
              return call1381
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
          obj1313.methods["forward"] = func1349;
          func1349.definitionLine = 90;
          func1349.definitionModule = "musical";
          var func1382 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1383 = Grace_allocObject();
              block1383.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1383.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1383.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1383.methods["match"] = GraceBlock_match;
              block1383.methods["prefix?"] = GraceBlock_lift;
              block1383.receiver = this;
              block1383.className = 'block<musical:97>';
              block1383.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1385 = callmethod(this, "angle", [0]);
                var opresult1387 = callmethod(call1385, "<", [1], new GraceNum(0));
                return opresult1387;
              };
              lineNumber = 100
              var block1388 = Grace_allocObject();
              block1388.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1388.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1388.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1388.methods["match"] = GraceBlock_match;
              block1388.methods["prefix?"] = GraceBlock_lift;
              block1388.receiver = this;
              block1388.className = 'block<musical:100>';
              block1388.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1390 = callmethod(this, "angle", [0]);
                var opresult1392 = callmethod(call1390, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1393 = callmethod(this, "angle:=", [1], opresult1392);
                return call1393;
              };
              var call1394 = callmethod(Grace_prelude,"while()do", [1, 1], block1383, block1388);
              lineNumber = 100
              var block1395 = Grace_allocObject();
              block1395.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1395.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1395.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1395.methods["match"] = GraceBlock_match;
              block1395.methods["prefix?"] = GraceBlock_lift;
              block1395.receiver = this;
              block1395.className = 'block<musical:100>';
              block1395.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1397 = callmethod(this, "angle", [0]);
                var opresult1399 = callmethod(call1397, ">", [1], new GraceNum(360));
                return opresult1399;
              };
              lineNumber = 103
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
              block1400.className = 'block<musical:103>';
              block1400.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1402 = callmethod(this, "angle", [0]);
                var diff1404 = callmethod(call1402, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1405 = callmethod(this, "angle:=", [1], diff1404);
                return call1405;
              };
              var call1406 = callmethod(Grace_prelude,"while()do", [1, 1], block1395, block1400);
              return call1406
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1382.paramCounts = [
            0,
          ];
          func1382.variableArities = [
            false,
          ];
          obj1313.methods["normaliseAngle"] = func1382;
          func1382.definitionLine = 96;
          func1382.definitionModule = "musical";
          var func1407 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1407.paramCounts[0])
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
              var call1409 = callmethod(this, "angle", [0]);
              var opresult1411 = callmethod(call1409, "+", [1], var_degrees);
              onSelf = true;
              var call1412 = callmethod(this, "angle:=", [1], opresult1411);
              lineNumber = 106
              onSelf = true;
              var call1413 = callmethod(this, "normaliseAngle", [0]);
              return call1413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1407.paramCounts = [
            1,
          ];
          func1407.variableArities = [
            false,
          ];
          obj1313.methods["turn"] = func1407;
          func1407.definitionLine = 104;
          func1407.definitionModule = "musical";
          var func1414 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1415 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1416 = callmethod(this, "x", [0]);
              var call1417 = callmethod(var_point,"x()y", [1, 1], call1416, new GraceNum(0));
              onSelf = true;
              var call1418 = callmethod(this, "isPointOver", [1], call1417);
              if (Grace_isTrue(call1418)) {
                lineNumber = 111
                lineNumber = 110
                var bool1419 = new GraceBoolean(true)
                return bool1419
              }
              lineNumber = 115
              var if1420 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1421 = callmethod(this, "x", [0]);
              var call1422 = callmethod(var_point,"x()y", [1, 1], call1421, var_canvasHeight);
              onSelf = true;
              var call1423 = callmethod(this, "isPointOver", [1], call1422);
              if (Grace_isTrue(call1423)) {
                lineNumber = 114
                lineNumber = 113
                var bool1424 = new GraceBoolean(true)
                return bool1424
              }
              lineNumber = 118
              var if1425 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1426 = callmethod(this, "y", [0]);
              var call1427 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1426);
              onSelf = true;
              var call1428 = callmethod(this, "isPointOver", [1], call1427);
              if (Grace_isTrue(call1428)) {
                lineNumber = 117
                lineNumber = 116
                var bool1429 = new GraceBoolean(true)
                return bool1429
              }
              lineNumber = 121
              var if1430 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1431 = callmethod(this, "y", [0]);
              var call1432 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1431);
              onSelf = true;
              var call1433 = callmethod(this, "isPointOver", [1], call1432);
              if (Grace_isTrue(call1433)) {
                lineNumber = 120
                lineNumber = 119
                var bool1434 = new GraceBoolean(true)
                return bool1434
              }
              lineNumber = 122
              lineNumber = 121
              var bool1435 = new GraceBoolean(false)
              return bool1435
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1414.paramCounts = [
            0,
          ];
          func1414.variableArities = [
            false,
          ];
          obj1313.methods["touchingEdge"] = func1414;
          func1414.definitionLine = 108;
          func1414.definitionModule = "musical";
          var func1436 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1436.paramCounts[0])
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
              var if1437 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1438 = callmethod(this, "x", [0]);
              var call1439 = callmethod(var_point,"x()y", [1, 1], call1438, new GraceNum(0));
              onSelf = true;
              var call1440 = callmethod(this, "isPointOver", [1], call1439);
              if (Grace_isTrue(call1440)) {
                lineNumber = 127
                onSelf = true;
                var call1441 = callmethod(this, "bounceFrom", [1], var_top);
                if1437 = call1441;
              }
              lineNumber = 132
              var if1442 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1443 = callmethod(this, "x", [0]);
              var call1444 = callmethod(var_point,"x()y", [1, 1], call1443, var_canvasHeight);
              onSelf = true;
              var call1445 = callmethod(this, "isPointOver", [1], call1444);
              if (Grace_isTrue(call1445)) {
                lineNumber = 130
                onSelf = true;
                var call1446 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1442 = call1446;
              }
              lineNumber = 135
              var if1447 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1448 = callmethod(this, "y", [0]);
              var call1449 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1448);
              onSelf = true;
              var call1450 = callmethod(this, "isPointOver", [1], call1449);
              if (Grace_isTrue(call1450)) {
                lineNumber = 133
                onSelf = true;
                var call1451 = callmethod(this, "bounceFrom", [1], var_left);
                if1447 = call1451;
              }
              lineNumber = 138
              var if1452 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1453 = callmethod(this, "y", [0]);
              var call1454 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1453);
              onSelf = true;
              var call1455 = callmethod(this, "isPointOver", [1], call1454);
              if (Grace_isTrue(call1455)) {
                lineNumber = 136
                onSelf = true;
                var call1456 = callmethod(this, "bounceFrom", [1], var_right);
                if1452 = call1456;
              }
              lineNumber = 138
              var block1457 = Grace_allocObject();
              block1457.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1457.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1457.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1457.methods["match"] = GraceBlock_match;
              block1457.methods["prefix?"] = GraceBlock_lift;
              block1457.receiver = this;
              block1457.className = 'block<musical:138>';
              block1457.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1458 = callmethod(this, "touchingEdge", [0]);
                return call1458;
              };
              lineNumber = 141
              var block1459 = Grace_allocObject();
              block1459.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1459.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1459.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1459.methods["match"] = GraceBlock_match;
              block1459.methods["prefix?"] = GraceBlock_lift;
              block1459.receiver = this;
              block1459.className = 'block<musical:141>';
              block1459.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1460 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1460;
              };
              var call1461 = callmethod(Grace_prelude,"while()do", [1, 1], block1457, block1459);
              return call1461
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1436.paramCounts = [
            0,
          ];
          func1436.variableArities = [
            false,
          ];
          obj1313.methods["bounce"] = func1436;
          func1436.definitionLine = 123;
          func1436.definitionModule = "musical";
          var func1462 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1462.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1463 = var_done;
              lineNumber = 143
              var string1464 = new GraceString("left");
              var opresult1467 = callmethod(var_dir, "==", [1], string1464);
              if (Grace_isTrue(opresult1467)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1468 = callmethod(this, "angle", [0]);
                var diff1471 = callmethod(new GraceNum(360), "-", [1], call1468);
                onSelf = true;
                var call1472 = callmethod(this, "angle:=", [1], diff1471);
                if1463 = call1472;
              }
              lineNumber = 149
              var if1473 = var_done;
              lineNumber = 146
              var string1474 = new GraceString("right");
              var opresult1477 = callmethod(var_dir, "==", [1], string1474);
              if (Grace_isTrue(opresult1477)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1478 = callmethod(this, "angle", [0]);
                var diff1481 = callmethod(new GraceNum(360), "-", [1], call1478);
                onSelf = true;
                var call1482 = callmethod(this, "angle:=", [1], diff1481);
                if1473 = call1482;
              }
              lineNumber = 152
              var if1483 = var_done;
              lineNumber = 149
              var string1484 = new GraceString("top");
              var opresult1487 = callmethod(var_dir, "==", [1], string1484);
              if (Grace_isTrue(opresult1487)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1488 = callmethod(this, "angle", [0]);
                var diff1491 = callmethod(new GraceNum(180), "-", [1], call1488);
                onSelf = true;
                var call1492 = callmethod(this, "angle:=", [1], diff1491);
                if1483 = call1492;
              }
              lineNumber = 155
              var if1493 = var_done;
              lineNumber = 152
              var string1494 = new GraceString("bottom");
              var opresult1497 = callmethod(var_dir, "==", [1], string1494);
              if (Grace_isTrue(opresult1497)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1498 = callmethod(this, "angle", [0]);
                var diff1501 = callmethod(new GraceNum(180), "-", [1], call1498);
                onSelf = true;
                var call1502 = callmethod(this, "angle:=", [1], diff1501);
                if1493 = call1502;
              }
              lineNumber = 155
              onSelf = true;
              var call1503 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1504 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1504
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1462.paramCounts = [
            1,
          ];
          func1462.variableArities = [
            false,
          ];
          obj1313.methods["bounceFrom"] = func1462;
          func1462.definitionLine = 142;
          func1462.definitionModule = "musical";
          var func1505 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1505.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1506 = var_done;
              lineNumber = 159
              var call1507 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1509 = callmethod(this, "x", [0]);
              var opresult1511 = callmethod(call1509, ">", [1], call1507);
              if (Grace_isTrue(opresult1511)) {
                lineNumber = 160
                onSelf = true;
                var call1512 = callmethod(this, "bounceFrom", [1], var_left);
                if1506 = call1512;
              }
              lineNumber = 165
              var if1513 = var_done;
              lineNumber = 162
              var call1514 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1516 = callmethod(this, "x", [0]);
              var opresult1518 = callmethod(call1516, "<", [1], call1514);
              if (Grace_isTrue(opresult1518)) {
                lineNumber = 163
                onSelf = true;
                var call1519 = callmethod(this, "bounceFrom", [1], var_right);
                if1513 = call1519;
              }
              lineNumber = 165
              var block1520 = Grace_allocObject();
              block1520.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1520.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1520.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1520.methods["match"] = GraceBlock_match;
              block1520.methods["prefix?"] = GraceBlock_lift;
              block1520.receiver = this;
              block1520.className = 'block<musical:165>';
              block1520.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1521 = callmethod(this, "touching", [1], var_other);
                return call1521;
              };
              lineNumber = 168
              var block1522 = Grace_allocObject();
              block1522.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1522.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1522.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1522.methods["match"] = GraceBlock_match;
              block1522.methods["prefix?"] = GraceBlock_lift;
              block1522.receiver = this;
              block1522.className = 'block<musical:168>';
              block1522.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1523 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1523;
              };
              var call1524 = callmethod(Grace_prelude,"while()do", [1, 1], block1520, block1522);
              return call1524
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1505.paramCounts = [
            1,
          ];
          func1505.variableArities = [
            false,
          ];
          obj1313.methods["bounceOff"] = func1505;
          func1505.definitionLine = 158;
          func1505.definitionModule = "musical";
          var func1525 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1525.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1526 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1527 = callmethod(this, "y", [0]);
              var call1528 = callmethod(var_point,"x()y", [1, 1], call1526, call1527);
              var call1529 = callmethod(var_other,"isPointOver", [1], call1528);
              return call1529
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1525.paramCounts = [
            1,
          ];
          func1525.variableArities = [
            false,
          ];
          obj1313.methods["touching"] = func1525;
          func1525.definitionLine = 169;
          func1525.definitionModule = "musical";
          var func1530 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1530.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1531 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1532 = callmethod(this, "y", [0]);
              var call1534 = callmethod(var_other,"y", [0]);
              var opresult1536 = callmethod(call1534, "!=", [1], call1532);
              onSelf = true;
              var call1538 = callmethod(this, "x", [0]);
              var call1540 = callmethod(var_other,"x", [0]);
              var opresult1542 = callmethod(call1540, "!=", [1], call1538);
              var opresult1544 = callmethod(opresult1542, "||", [1], opresult1536);
              if (Grace_isTrue(opresult1544)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1547 = callmethod(this, "x", [0]);
                var call1549 = callmethod(var_other,"x", [0]);
                var diff1551 = callmethod(call1549, "-", [1], call1547);
                onSelf = true;
                var call1552 = callmethod(this, "y", [0]);
                var call1554 = callmethod(var_other,"y", [0]);
                var diff1556 = callmethod(call1554, "-", [1], call1552);
                var call1557 = callmethod(var_trig,"atan2", [2], diff1551, diff1556);
                var prod1559 = callmethod(call1557, "*", [1], new GraceNum(180));
                var quotient1561 = callmethod(prod1559, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1562 = callmethod(this, "angle:=", [1], quotient1561);
                if1531 = call1562;
              }
              lineNumber = 176
              onSelf = true;
              var call1563 = callmethod(this, "normaliseAngle", [0]);
              return call1563
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
          obj1313.methods["face"] = func1530;
          func1530.definitionLine = 172;
          func1530.definitionModule = "musical";
          var func1564 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1564.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1565 = new GraceString("2d");
              var call1566 = callmethod(var_backingCanvas,"getContext", [1], string1565);
              onSelf = true;
              var call1567 = callmethod(this, "draw", [1], call1566);
              return call1567
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1564.paramCounts = [
            0,
          ];
          func1564.variableArities = [
            false,
          ];
          obj1313.methods["stamp"] = func1564;
          func1564.definitionLine = 178;
          func1564.definitionModule = "musical";
          sourceObject = obj1313;
          lineNumber = 49
          var call1568 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1569 = callmethod(call1568, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1570 = callmethod(call1569, "initialise", [0]);
          sourceObject = obj1313;
          lineNumber = 50
          var call1571 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1313;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1313;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1313;
          lineNumber = 53
          var call1572 = callmethod(var_collections,"list", [0]);
          var call1573 = callmethod(call1572,"new", [0]);
          obj1313.data["alwaysBlocks"] = call1573;
          var reader_musical_alwaysBlocks_1574 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1574.def = true;
          reader_musical_alwaysBlocks_1574.confidential = true;
          obj1313.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1574;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1573)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1313;
          lineNumber = 55
          lineNumber = 54
          var quotient1577 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1313.data["x"] = quotient1577;
          var reader_musical_x_1578 = function() {
            return this.data["x"];
          }
          obj1313.methods["x"] = reader_musical_x_1578;
          obj1313.data["x"] = quotient1577;
          var writer_musical_x_1578 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1313.methods["x:="] = writer_musical_x_1578;
          writer_musical_x_1578.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1577)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1313.mutable = true;
          sourceObject = obj1313;
          lineNumber = 56
          lineNumber = 55
          var quotient1581 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1313.data["y"] = quotient1581;
          var reader_musical_y_1582 = function() {
            return this.data["y"];
          }
          obj1313.methods["y"] = reader_musical_y_1582;
          obj1313.data["y"] = quotient1581;
          var writer_musical_y_1582 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1313.methods["y:="] = writer_musical_y_1582;
          writer_musical_y_1582.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1581)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1313.mutable = true;
          sourceObject = obj1313;
          lineNumber = 56
          onSelf = true;
          var call1583 = callmethod(this, "x", [0]);
          obj1313.data["destX"] = call1583;
          var reader_musical_destX_1584 = function() {
            return this.data["destX"];
          }
          obj1313.methods["destX"] = reader_musical_destX_1584;
          obj1313.data["destX"] = call1583;
          var writer_musical_destX_1584 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1313.methods["destX:="] = writer_musical_destX_1584;
          reader_musical_destX_1584.confidential = true;
          writer_musical_destX_1584.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1583)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1313.mutable = true;
          sourceObject = obj1313;
          lineNumber = 57
          onSelf = true;
          var call1585 = callmethod(this, "y", [0]);
          obj1313.data["destY"] = call1585;
          var reader_musical_destY_1586 = function() {
            return this.data["destY"];
          }
          obj1313.methods["destY"] = reader_musical_destY_1586;
          obj1313.data["destY"] = call1585;
          var writer_musical_destY_1586 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1313.methods["destY:="] = writer_musical_destY_1586;
          reader_musical_destY_1586.confidential = true;
          writer_musical_destY_1586.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1585)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1313.mutable = true;
          sourceObject = obj1313;
          lineNumber = 58
          obj1313.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1587 = function() {
            return this.data["angle"];
          }
          obj1313.methods["angle"] = reader_musical_angle_1587;
          obj1313.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1587 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1313.methods["angle:="] = writer_musical_angle_1587;
          reader_musical_angle_1587.confidential = true;
          writer_musical_angle_1587.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1313.mutable = true;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          sourceObject = obj1313;
          superDepth = origSuperDepth;
        }
        obj_init_1313.apply(obj1313, []);
        return obj1313
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
    obj1310.methods["new"] = func1312;
    func1312.definitionLine = 48;
    func1312.definitionModule = "musical";
    var func1588 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1589 = Grace_allocObject();
        obj1589.definitionModule = "musical";
        obj1589.definitionLine = 48;
        var inho1589 = inheritingObject;
        while (inho1589.superobj) inho1589 = inho1589.superobj;
        inho1589.superobj = obj1589;
        obj1589.data = inheritingObject.data;
        obj1589.outer = this;
        var reader_musical_outer_1590 = function() {
          return this.outer;
        }
        obj1589.methods["outer"] = reader_musical_outer_1590;
        function obj_init_1589() {
          var origSuperDepth = superDepth;
          superDepth = obj1589;
          obj1589.annotations = [];
          var func1591 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1592 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1593 = Grace_allocObject();
              block1593.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1593.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1593.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1593.methods["match"] = GraceBlock_match;
              block1593.methods["prefix?"] = GraceBlock_lift;
              block1593.receiver = this;
              block1593.className = 'block<musical:63>';
              block1593.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1594 = callmethod(var_b,"apply", [0]);
                return call1594;
              };
              var call1595 = callmethod(Grace_prelude,"for()do", [1, 1], call1592, block1593);
              lineNumber = 63
              onSelf = true;
              var call1596 = callmethod(this, "tick", [0]);
              return call1596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1591.paramCounts = [
            0,
          ];
          func1591.variableArities = [
            false,
          ];
          obj1589.methods["step"] = func1591;
          func1591.definitionLine = 59;
          func1591.definitionModule = "musical";
          var func1597 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1597.paramCounts[0])
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
          func1597.paramCounts = [
            0,
          ];
          func1597.variableArities = [
            false,
          ];
          obj1589.methods["tick"] = func1597;
          func1597.definitionLine = 66;
          func1597.definitionModule = "musical";
          var func1598 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1598.paramCounts[0])
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
          func1598.paramCounts = [
            1,
          ];
          func1598.variableArities = [
            false,
          ];
          obj1589.methods["draw"] = func1598;
          func1598.definitionLine = 67;
          func1598.definitionModule = "musical";
          var func1599 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1599.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1600 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1601 = callmethod(this, "destX:=", [1], call1600);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1602 = callmethod(var_p,"y", [0]);
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
          func1599.paramCounts = [
            1,
          ];
          func1599.variableArities = [
            false,
          ];
          obj1589.methods["moveTo"] = func1599;
          func1599.definitionLine = 68;
          func1599.definitionModule = "musical";
          var func1604 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1605 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1606 = callmethod(this, "x:=", [1], call1605);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1607 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1608 = callmethod(this, "y:=", [1], call1607);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1609 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1610 = callmethod(this, "destX:=", [1], call1609);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1611 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1612 = callmethod(this, "destY:=", [1], call1611);
              return call1612
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
          obj1589.methods["jumpTo"] = func1604;
          func1604.definitionLine = 72;
          func1604.definitionModule = "musical";
          var func1613 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1613.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1614 = new GraceBoolean(false)
              return bool1614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1613.paramCounts = [
            1,
          ];
          func1613.variableArities = [
            false,
          ];
          obj1589.methods["isPointOver"] = func1613;
          func1613.definitionLine = 78;
          func1613.definitionModule = "musical";
          var func1615 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1615.paramCounts[0])
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
          func1615.paramCounts = [
            0,
          ];
          func1615.variableArities = [
            false,
          ];
          obj1589.methods["mousedown"] = func1615;
          func1615.definitionLine = 79;
          func1615.definitionModule = "musical";
          var func1616 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1617 = callmethod(this, "alwaysBlocks", [0]);
              var call1618 = callmethod(call1617,"push", [1], var_b);
              return call1618
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
          obj1589.methods["always"] = func1616;
          func1616.definitionLine = 80;
          func1616.definitionModule = "musical";
          var func1619 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1619.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1619.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
              var block1620 = Grace_allocObject();
              block1620.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1620.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1620.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1620.methods["match"] = GraceBlock_match;
              block1620.methods["prefix?"] = GraceBlock_lift;
              block1620.receiver = this;
              block1620.className = 'block<musical:89>';
              block1620.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1621 = var_done;
                lineNumber = 85
                var call1622 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1622)) {
                  lineNumber = 86
                  var call1623 = callmethod(var_b,"apply", [0]);
                  if1621 = call1623;
                }
                return if1621;
              };
              onSelf = true;
              var call1624 = callmethod(this, "always", [1], block1620);
              return call1624
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
            1,
          ];
          func1619.variableArities = [
            false,
            false,
          ];
          obj1589.methods["whenever()do"] = func1619;
          func1619.definitionLine = 83;
          func1619.definitionModule = "musical";
          var func1625 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1629 = callmethod(this, "angle", [0]);
              var quotient1631 = callmethod(call1629, "/", [1], new GraceNum(180));
              var prod1633 = callmethod(quotient1631, "*", [1], var_PI);
              var call1634 = callmethod(var_trig,"cos", [1], prod1633);
              var prod1636 = callmethod(call1634, "*", [1], var_dist);
              var var_y__39__ = prod1636;
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
              var call1640 = callmethod(this, "angle", [0]);
              var quotient1642 = callmethod(call1640, "/", [1], new GraceNum(180));
              var prod1644 = callmethod(quotient1642, "*", [1], var_PI);
              var call1645 = callmethod(var_trig,"sin", [1], prod1644);
              var prod1647 = callmethod(call1645, "*", [1], var_dist);
              var var_x__39__ = prod1647;
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
              var call1649 = callmethod(this, "x", [0]);
              var opresult1651 = callmethod(call1649, "+", [1], var_x__39__);
              onSelf = true;
              var call1652 = callmethod(this, "x:=", [1], opresult1651);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1654 = callmethod(this, "y", [0]);
              var opresult1656 = callmethod(call1654, "+", [1], var_y__39__);
              onSelf = true;
              var call1657 = callmethod(this, "y:=", [1], opresult1656);
              return call1657
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
          obj1589.methods["forward"] = func1625;
          func1625.definitionLine = 90;
          func1625.definitionModule = "musical";
          var func1658 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1658.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1659 = Grace_allocObject();
              block1659.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1659.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1659.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1659.methods["match"] = GraceBlock_match;
              block1659.methods["prefix?"] = GraceBlock_lift;
              block1659.receiver = this;
              block1659.className = 'block<musical:97>';
              block1659.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1661 = callmethod(this, "angle", [0]);
                var opresult1663 = callmethod(call1661, "<", [1], new GraceNum(0));
                return opresult1663;
              };
              lineNumber = 100
              var block1664 = Grace_allocObject();
              block1664.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1664.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1664.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1664.methods["match"] = GraceBlock_match;
              block1664.methods["prefix?"] = GraceBlock_lift;
              block1664.receiver = this;
              block1664.className = 'block<musical:100>';
              block1664.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1666 = callmethod(this, "angle", [0]);
                var opresult1668 = callmethod(call1666, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1669 = callmethod(this, "angle:=", [1], opresult1668);
                return call1669;
              };
              var call1670 = callmethod(Grace_prelude,"while()do", [1, 1], block1659, block1664);
              lineNumber = 100
              var block1671 = Grace_allocObject();
              block1671.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1671.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1671.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1671.methods["match"] = GraceBlock_match;
              block1671.methods["prefix?"] = GraceBlock_lift;
              block1671.receiver = this;
              block1671.className = 'block<musical:100>';
              block1671.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1673 = callmethod(this, "angle", [0]);
                var opresult1675 = callmethod(call1673, ">", [1], new GraceNum(360));
                return opresult1675;
              };
              lineNumber = 103
              var block1676 = Grace_allocObject();
              block1676.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1676.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1676.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1676.methods["match"] = GraceBlock_match;
              block1676.methods["prefix?"] = GraceBlock_lift;
              block1676.receiver = this;
              block1676.className = 'block<musical:103>';
              block1676.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1678 = callmethod(this, "angle", [0]);
                var diff1680 = callmethod(call1678, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1681 = callmethod(this, "angle:=", [1], diff1680);
                return call1681;
              };
              var call1682 = callmethod(Grace_prelude,"while()do", [1, 1], block1671, block1676);
              return call1682
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1658.paramCounts = [
            0,
          ];
          func1658.variableArities = [
            false,
          ];
          obj1589.methods["normaliseAngle"] = func1658;
          func1658.definitionLine = 96;
          func1658.definitionModule = "musical";
          var func1683 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1683.paramCounts[0])
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
              var call1685 = callmethod(this, "angle", [0]);
              var opresult1687 = callmethod(call1685, "+", [1], var_degrees);
              onSelf = true;
              var call1688 = callmethod(this, "angle:=", [1], opresult1687);
              lineNumber = 106
              onSelf = true;
              var call1689 = callmethod(this, "normaliseAngle", [0]);
              return call1689
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1683.paramCounts = [
            1,
          ];
          func1683.variableArities = [
            false,
          ];
          obj1589.methods["turn"] = func1683;
          func1683.definitionLine = 104;
          func1683.definitionModule = "musical";
          var func1690 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1690.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1691 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1692 = callmethod(this, "x", [0]);
              var call1693 = callmethod(var_point,"x()y", [1, 1], call1692, new GraceNum(0));
              onSelf = true;
              var call1694 = callmethod(this, "isPointOver", [1], call1693);
              if (Grace_isTrue(call1694)) {
                lineNumber = 111
                lineNumber = 110
                var bool1695 = new GraceBoolean(true)
                return bool1695
              }
              lineNumber = 115
              var if1696 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1697 = callmethod(this, "x", [0]);
              var call1698 = callmethod(var_point,"x()y", [1, 1], call1697, var_canvasHeight);
              onSelf = true;
              var call1699 = callmethod(this, "isPointOver", [1], call1698);
              if (Grace_isTrue(call1699)) {
                lineNumber = 114
                lineNumber = 113
                var bool1700 = new GraceBoolean(true)
                return bool1700
              }
              lineNumber = 118
              var if1701 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1702 = callmethod(this, "y", [0]);
              var call1703 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1702);
              onSelf = true;
              var call1704 = callmethod(this, "isPointOver", [1], call1703);
              if (Grace_isTrue(call1704)) {
                lineNumber = 117
                lineNumber = 116
                var bool1705 = new GraceBoolean(true)
                return bool1705
              }
              lineNumber = 121
              var if1706 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1707 = callmethod(this, "y", [0]);
              var call1708 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1707);
              onSelf = true;
              var call1709 = callmethod(this, "isPointOver", [1], call1708);
              if (Grace_isTrue(call1709)) {
                lineNumber = 120
                lineNumber = 119
                var bool1710 = new GraceBoolean(true)
                return bool1710
              }
              lineNumber = 122
              lineNumber = 121
              var bool1711 = new GraceBoolean(false)
              return bool1711
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1690.paramCounts = [
            0,
          ];
          func1690.variableArities = [
            false,
          ];
          obj1589.methods["touchingEdge"] = func1690;
          func1690.definitionLine = 108;
          func1690.definitionModule = "musical";
          var func1712 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1712.paramCounts[0])
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
              var if1713 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1714 = callmethod(this, "x", [0]);
              var call1715 = callmethod(var_point,"x()y", [1, 1], call1714, new GraceNum(0));
              onSelf = true;
              var call1716 = callmethod(this, "isPointOver", [1], call1715);
              if (Grace_isTrue(call1716)) {
                lineNumber = 127
                onSelf = true;
                var call1717 = callmethod(this, "bounceFrom", [1], var_top);
                if1713 = call1717;
              }
              lineNumber = 132
              var if1718 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1719 = callmethod(this, "x", [0]);
              var call1720 = callmethod(var_point,"x()y", [1, 1], call1719, var_canvasHeight);
              onSelf = true;
              var call1721 = callmethod(this, "isPointOver", [1], call1720);
              if (Grace_isTrue(call1721)) {
                lineNumber = 130
                onSelf = true;
                var call1722 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1718 = call1722;
              }
              lineNumber = 135
              var if1723 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1724 = callmethod(this, "y", [0]);
              var call1725 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1724);
              onSelf = true;
              var call1726 = callmethod(this, "isPointOver", [1], call1725);
              if (Grace_isTrue(call1726)) {
                lineNumber = 133
                onSelf = true;
                var call1727 = callmethod(this, "bounceFrom", [1], var_left);
                if1723 = call1727;
              }
              lineNumber = 138
              var if1728 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1729 = callmethod(this, "y", [0]);
              var call1730 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1729);
              onSelf = true;
              var call1731 = callmethod(this, "isPointOver", [1], call1730);
              if (Grace_isTrue(call1731)) {
                lineNumber = 136
                onSelf = true;
                var call1732 = callmethod(this, "bounceFrom", [1], var_right);
                if1728 = call1732;
              }
              lineNumber = 138
              var block1733 = Grace_allocObject();
              block1733.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1733.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1733.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1733.methods["match"] = GraceBlock_match;
              block1733.methods["prefix?"] = GraceBlock_lift;
              block1733.receiver = this;
              block1733.className = 'block<musical:138>';
              block1733.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1734 = callmethod(this, "touchingEdge", [0]);
                return call1734;
              };
              lineNumber = 141
              var block1735 = Grace_allocObject();
              block1735.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1735.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1735.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1735.methods["match"] = GraceBlock_match;
              block1735.methods["prefix?"] = GraceBlock_lift;
              block1735.receiver = this;
              block1735.className = 'block<musical:141>';
              block1735.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1736 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1736;
              };
              var call1737 = callmethod(Grace_prelude,"while()do", [1, 1], block1733, block1735);
              return call1737
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1712.paramCounts = [
            0,
          ];
          func1712.variableArities = [
            false,
          ];
          obj1589.methods["bounce"] = func1712;
          func1712.definitionLine = 123;
          func1712.definitionModule = "musical";
          var func1738 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1738.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1739 = var_done;
              lineNumber = 143
              var string1740 = new GraceString("left");
              var opresult1743 = callmethod(var_dir, "==", [1], string1740);
              if (Grace_isTrue(opresult1743)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1744 = callmethod(this, "angle", [0]);
                var diff1747 = callmethod(new GraceNum(360), "-", [1], call1744);
                onSelf = true;
                var call1748 = callmethod(this, "angle:=", [1], diff1747);
                if1739 = call1748;
              }
              lineNumber = 149
              var if1749 = var_done;
              lineNumber = 146
              var string1750 = new GraceString("right");
              var opresult1753 = callmethod(var_dir, "==", [1], string1750);
              if (Grace_isTrue(opresult1753)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1754 = callmethod(this, "angle", [0]);
                var diff1757 = callmethod(new GraceNum(360), "-", [1], call1754);
                onSelf = true;
                var call1758 = callmethod(this, "angle:=", [1], diff1757);
                if1749 = call1758;
              }
              lineNumber = 152
              var if1759 = var_done;
              lineNumber = 149
              var string1760 = new GraceString("top");
              var opresult1763 = callmethod(var_dir, "==", [1], string1760);
              if (Grace_isTrue(opresult1763)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1764 = callmethod(this, "angle", [0]);
                var diff1767 = callmethod(new GraceNum(180), "-", [1], call1764);
                onSelf = true;
                var call1768 = callmethod(this, "angle:=", [1], diff1767);
                if1759 = call1768;
              }
              lineNumber = 155
              var if1769 = var_done;
              lineNumber = 152
              var string1770 = new GraceString("bottom");
              var opresult1773 = callmethod(var_dir, "==", [1], string1770);
              if (Grace_isTrue(opresult1773)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1774 = callmethod(this, "angle", [0]);
                var diff1777 = callmethod(new GraceNum(180), "-", [1], call1774);
                onSelf = true;
                var call1778 = callmethod(this, "angle:=", [1], diff1777);
                if1769 = call1778;
              }
              lineNumber = 155
              onSelf = true;
              var call1779 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1780 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1780
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1738.paramCounts = [
            1,
          ];
          func1738.variableArities = [
            false,
          ];
          obj1589.methods["bounceFrom"] = func1738;
          func1738.definitionLine = 142;
          func1738.definitionModule = "musical";
          var func1781 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1781.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1782 = var_done;
              lineNumber = 159
              var call1783 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1785 = callmethod(this, "x", [0]);
              var opresult1787 = callmethod(call1785, ">", [1], call1783);
              if (Grace_isTrue(opresult1787)) {
                lineNumber = 160
                onSelf = true;
                var call1788 = callmethod(this, "bounceFrom", [1], var_left);
                if1782 = call1788;
              }
              lineNumber = 165
              var if1789 = var_done;
              lineNumber = 162
              var call1790 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1792 = callmethod(this, "x", [0]);
              var opresult1794 = callmethod(call1792, "<", [1], call1790);
              if (Grace_isTrue(opresult1794)) {
                lineNumber = 163
                onSelf = true;
                var call1795 = callmethod(this, "bounceFrom", [1], var_right);
                if1789 = call1795;
              }
              lineNumber = 165
              var block1796 = Grace_allocObject();
              block1796.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1796.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1796.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1796.methods["match"] = GraceBlock_match;
              block1796.methods["prefix?"] = GraceBlock_lift;
              block1796.receiver = this;
              block1796.className = 'block<musical:165>';
              block1796.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1797 = callmethod(this, "touching", [1], var_other);
                return call1797;
              };
              lineNumber = 168
              var block1798 = Grace_allocObject();
              block1798.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1798.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1798.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1798.methods["match"] = GraceBlock_match;
              block1798.methods["prefix?"] = GraceBlock_lift;
              block1798.receiver = this;
              block1798.className = 'block<musical:168>';
              block1798.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1799 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1799;
              };
              var call1800 = callmethod(Grace_prelude,"while()do", [1, 1], block1796, block1798);
              return call1800
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1781.paramCounts = [
            1,
          ];
          func1781.variableArities = [
            false,
          ];
          obj1589.methods["bounceOff"] = func1781;
          func1781.definitionLine = 158;
          func1781.definitionModule = "musical";
          var func1801 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1801.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1802 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1803 = callmethod(this, "y", [0]);
              var call1804 = callmethod(var_point,"x()y", [1, 1], call1802, call1803);
              var call1805 = callmethod(var_other,"isPointOver", [1], call1804);
              return call1805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1801.paramCounts = [
            1,
          ];
          func1801.variableArities = [
            false,
          ];
          obj1589.methods["touching"] = func1801;
          func1801.definitionLine = 169;
          func1801.definitionModule = "musical";
          var func1806 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1806.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1807 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1808 = callmethod(this, "y", [0]);
              var call1810 = callmethod(var_other,"y", [0]);
              var opresult1812 = callmethod(call1810, "!=", [1], call1808);
              onSelf = true;
              var call1814 = callmethod(this, "x", [0]);
              var call1816 = callmethod(var_other,"x", [0]);
              var opresult1818 = callmethod(call1816, "!=", [1], call1814);
              var opresult1820 = callmethod(opresult1818, "||", [1], opresult1812);
              if (Grace_isTrue(opresult1820)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1823 = callmethod(this, "x", [0]);
                var call1825 = callmethod(var_other,"x", [0]);
                var diff1827 = callmethod(call1825, "-", [1], call1823);
                onSelf = true;
                var call1828 = callmethod(this, "y", [0]);
                var call1830 = callmethod(var_other,"y", [0]);
                var diff1832 = callmethod(call1830, "-", [1], call1828);
                var call1833 = callmethod(var_trig,"atan2", [2], diff1827, diff1832);
                var prod1835 = callmethod(call1833, "*", [1], new GraceNum(180));
                var quotient1837 = callmethod(prod1835, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1838 = callmethod(this, "angle:=", [1], quotient1837);
                if1807 = call1838;
              }
              lineNumber = 176
              onSelf = true;
              var call1839 = callmethod(this, "normaliseAngle", [0]);
              return call1839
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
          obj1589.methods["face"] = func1806;
          func1806.definitionLine = 172;
          func1806.definitionModule = "musical";
          var func1840 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1840.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1841 = new GraceString("2d");
              var call1842 = callmethod(var_backingCanvas,"getContext", [1], string1841);
              onSelf = true;
              var call1843 = callmethod(this, "draw", [1], call1842);
              return call1843
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1840.paramCounts = [
            0,
          ];
          func1840.variableArities = [
            false,
          ];
          obj1589.methods["stamp"] = func1840;
          func1840.definitionLine = 178;
          func1840.definitionModule = "musical";
          sourceObject = obj1589;
          lineNumber = 49
          var call1844 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1845 = callmethod(call1844, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1846 = callmethod(call1845, "initialise", [0]);
          sourceObject = obj1589;
          lineNumber = 50
          var call1847 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1589;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1589;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1589;
          lineNumber = 53
          var call1848 = callmethod(var_collections,"list", [0]);
          var call1849 = callmethod(call1848,"new", [0]);
          obj1589.data["alwaysBlocks"] = call1849;
          var reader_musical_alwaysBlocks_1850 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1850.def = true;
          reader_musical_alwaysBlocks_1850.confidential = true;
          obj1589.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1850;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1849)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1589;
          lineNumber = 55
          lineNumber = 54
          var quotient1853 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1589.data["x"] = quotient1853;
          var reader_musical_x_1854 = function() {
            return this.data["x"];
          }
          obj1589.methods["x"] = reader_musical_x_1854;
          obj1589.data["x"] = quotient1853;
          var writer_musical_x_1854 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1589.methods["x:="] = writer_musical_x_1854;
          writer_musical_x_1854.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1853)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1589.mutable = true;
          sourceObject = obj1589;
          lineNumber = 56
          lineNumber = 55
          var quotient1857 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1589.data["y"] = quotient1857;
          var reader_musical_y_1858 = function() {
            return this.data["y"];
          }
          obj1589.methods["y"] = reader_musical_y_1858;
          obj1589.data["y"] = quotient1857;
          var writer_musical_y_1858 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1589.methods["y:="] = writer_musical_y_1858;
          writer_musical_y_1858.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1857)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1589.mutable = true;
          sourceObject = obj1589;
          lineNumber = 56
          onSelf = true;
          var call1859 = callmethod(this, "x", [0]);
          obj1589.data["destX"] = call1859;
          var reader_musical_destX_1860 = function() {
            return this.data["destX"];
          }
          obj1589.methods["destX"] = reader_musical_destX_1860;
          obj1589.data["destX"] = call1859;
          var writer_musical_destX_1860 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1589.methods["destX:="] = writer_musical_destX_1860;
          reader_musical_destX_1860.confidential = true;
          writer_musical_destX_1860.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1859)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1589.mutable = true;
          sourceObject = obj1589;
          lineNumber = 57
          onSelf = true;
          var call1861 = callmethod(this, "y", [0]);
          obj1589.data["destY"] = call1861;
          var reader_musical_destY_1862 = function() {
            return this.data["destY"];
          }
          obj1589.methods["destY"] = reader_musical_destY_1862;
          obj1589.data["destY"] = call1861;
          var writer_musical_destY_1862 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1589.methods["destY:="] = writer_musical_destY_1862;
          reader_musical_destY_1862.confidential = true;
          writer_musical_destY_1862.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1861)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1589.mutable = true;
          sourceObject = obj1589;
          lineNumber = 58
          obj1589.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1863 = function() {
            return this.data["angle"];
          }
          obj1589.methods["angle"] = reader_musical_angle_1863;
          obj1589.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1863 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1589.methods["angle:="] = writer_musical_angle_1863;
          reader_musical_angle_1863.confidential = true;
          writer_musical_angle_1863.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1589.mutable = true;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          sourceObject = obj1589;
          superDepth = origSuperDepth;
        }
        obj_init_1589.apply(inheritingObject, []);
        return obj1589
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1310.methods["new()object"] = func1588;
    var func1864 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1865 = new GraceString("class drawable");
        return string1865
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1864.paramCounts = [
    ];
    func1864.variableArities = [
    ];
    obj1310.methods["asDebugString"] = func1864;
    func1864.definitionLine = 48;
    func1864.definitionModule = "musical";
    sourceObject = obj1310;
    sourceObject = obj1310;
    superDepth = origSuperDepth;
  }
  obj_init_1310.apply(obj1310, []);
  var var_drawable = obj1310;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1866 = Grace_allocObject();
  obj1866.definitionModule = "musical";
  obj1866.definitionLine = 316;
  obj1866.outer = this;
  var reader_musical_outer_1867 = function() {
    return this.outer;
  }
  obj1866.methods["outer"] = reader_musical_outer_1867;
  function obj_init_1866() {
    var origSuperDepth = superDepth;
    superDepth = obj1866;
    obj1866.annotations = [];
    var func1868 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1868.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1869 = callmethod(this, "position", [0]);
        var call1870 = callmethod(call1869,"x", [0]);
        return call1870
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1868.paramCounts = [
      0,
    ];
    func1868.variableArities = [
      false,
    ];
    obj1866.methods["x"] = func1868;
    func1868.definitionLine = 318;
    func1868.definitionModule = "musical";
    var func1871 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1871.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1872 = callmethod(this, "position", [0]);
        var call1873 = callmethod(call1872,"y", [0]);
        return call1873
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
    obj1866.methods["y"] = func1871;
    func1871.definitionLine = 321;
    func1871.definitionModule = "musical";
    var func1874 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1874.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1875 = callmethod(this, "position", [0]);
        return call1875
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
    obj1866.methods["location"] = func1874;
    func1874.definitionLine = 324;
    func1874.definitionModule = "musical";
    sourceObject = obj1866;
    lineNumber = 317
    var call1876 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1866.data["position"] = call1876;
    var reader_musical_position_1877 = function() {
      return this.data["position"];
    }
    obj1866.methods["position"] = reader_musical_position_1877;
    obj1866.data["position"] = call1876;
    var writer_musical_position_1877 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1866.methods["position:="] = writer_musical_position_1877;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1876)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1866.mutable = true;
    sourceObject = obj1866;
    sourceObject = obj1866;
    sourceObject = obj1866;
    superDepth = origSuperDepth;
  }
  obj_init_1866.apply(obj1866, []);
  var var_mouse = obj1866;
  lineNumber = 322
  var func1878 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1878.paramCounts[0])
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
  func1878.paramCounts = [
    0,
  ];
  func1878.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1878;
  func1878.definitionLine = 322;
  func1878.definitionModule = "musical";
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
  var func1879 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1879.paramCounts[0])
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
  func1879.paramCounts = [
    0,
  ];
  func1879.variableArities = [
    false,
  ];
  this.methods["octave"] = func1879;
  func1879.definitionLine = 322;
  func1879.definitionModule = "musical";
  lineNumber = 322
  var func1880 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1880.paramCounts[0])
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
  func1880.paramCounts = [
    1,
  ];
  func1880.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1880;
  func1880.definitionLine = 322;
  func1880.definitionModule = "musical";
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
  var bool1881 = new GraceBoolean(false)
  var var_applyFlat = bool1881;
  lineNumber = 322
  var func1882 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1882.paramCounts[0])
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
  func1882.paramCounts = [
    0,
  ];
  func1882.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1882;
  func1882.definitionLine = 322;
  func1882.definitionModule = "musical";
  lineNumber = 322
  var func1883 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1883.paramCounts[0])
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
  func1883.paramCounts = [
    1,
  ];
  func1883.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1883;
  func1883.definitionLine = 322;
  func1883.definitionModule = "musical";
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
  var bool1884 = new GraceBoolean(false)
  var var_applySharp = bool1884;
  lineNumber = 322
  var func1885 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1885.paramCounts[0])
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
  func1885.paramCounts = [
    0,
  ];
  func1885.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1885;
  func1885.definitionLine = 322;
  func1885.definitionModule = "musical";
  lineNumber = 322
  var func1886 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1886.paramCounts[0])
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
  func1886.paramCounts = [
    1,
  ];
  func1886.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1886;
  func1886.definitionLine = 322;
  func1886.definitionModule = "musical";
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
  var bool1887 = new GraceBoolean(false)
  var var_applyChorus = bool1887;
  lineNumber = 322
  var func1888 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1888.paramCounts[0])
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
  func1888.paramCounts = [
    0,
  ];
  func1888.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1888;
  func1888.definitionLine = 322;
  func1888.definitionModule = "musical";
  lineNumber = 322
  var func1889 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1889.paramCounts[0])
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
  func1889.paramCounts = [
    1,
  ];
  func1889.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1889;
  func1889.definitionLine = 322;
  func1889.definitionModule = "musical";
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
  var bool1890 = new GraceBoolean(false)
  var var_applyReverb = bool1890;
  lineNumber = 322
  var func1891 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1891.paramCounts[0])
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
  func1891.paramCounts = [
    0,
  ];
  func1891.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1891;
  func1891.definitionLine = 322;
  func1891.definitionModule = "musical";
  lineNumber = 322
  var func1892 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1892.paramCounts[0])
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
  func1892.paramCounts = [
    1,
  ];
  func1892.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1892;
  func1892.definitionLine = 322;
  func1892.definitionModule = "musical";
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
  var bool1893 = new GraceBoolean(false)
  var var_applyAutowah = bool1893;
  lineNumber = 322
  var func1894 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1894.paramCounts[0])
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
  func1894.paramCounts = [
    0,
  ];
  func1894.variableArities = [
    false,
  ];
  this.methods["applyAutowah"] = func1894;
  func1894.definitionLine = 322;
  func1894.definitionModule = "musical";
  lineNumber = 322
  var func1895 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1895.paramCounts[0])
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
  func1895.paramCounts = [
    1,
  ];
  func1895.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1895;
  func1895.definitionLine = 322;
  func1895.definitionModule = "musical";
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
  var bool1896 = new GraceBoolean(false)
  var var_applyCheby = bool1896;
  lineNumber = 322
  var func1897 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1897.paramCounts[0])
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
  func1897.paramCounts = [
    0,
  ];
  func1897.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1897;
  func1897.definitionLine = 322;
  func1897.definitionModule = "musical";
  lineNumber = 322
  var func1898 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1898.paramCounts[0])
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
  func1898.paramCounts = [
    1,
  ];
  func1898.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1898;
  func1898.definitionLine = 322;
  func1898.definitionModule = "musical";
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
  var bool1899 = new GraceBoolean(true)
  var var_firstPass = bool1899;
  lineNumber = 322
  var func1900 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1900.paramCounts[0])
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
  func1900.paramCounts = [
    0,
  ];
  func1900.variableArities = [
    false,
  ];
  this.methods["firstPass"] = func1900;
  func1900.definitionLine = 322;
  func1900.definitionModule = "musical";
  lineNumber = 322
  var func1901 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1901.paramCounts[0])
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
  func1901.paramCounts = [
    1,
  ];
  func1901.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1901;
  func1901.definitionLine = 322;
  func1901.definitionModule = "musical";
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
  lineNumber = 635
  lineNumber = 652
  lineNumber = 658
  lineNumber = 664
  lineNumber = 670
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "methods-of:point.x()y:\n left\n down\n right\n up\n x\n y\nmethods-of:drawable.new:\n x:=\n y:=\n always\n forward\n touchingEdge\n x\n y\n face\n step\n bounceFrom\n angle:=\n mousedown\n isPointOver\n stamp\n angle\n whenever()do\n turn\n destX:=\n tick\n draw\n alwaysBlocks\n normaliseAngle\n bounceOff\n moveTo\n jumpTo\n destY:=\n bounce\n touching\n destX\n destY\npath:\n musical\nconstructors-of:point:\n x()y\nfresh:value:\n face\n touchingEdge\n label:=\n x:=\n step\n mousedown\n whenever()do\n destX:=\n colour:=\n moveTo\n jumpTo\n bounce\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n label\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n bounceOff\n destY:=\n destX\n destY\nconfidential:\nconstructors-of:drawable:\n new\nfresh:image:\n face\n touchingEdge\n width:=\n x:=\n step\n mousedown\n whenever()do\n destX:=\n url:=\n height:=\n url\n height\n moveTo\n jumpTo\n bounce\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n width\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n bounceOff\n imgTag\n destY:=\n destX\n destY\nclasses:\n point\n drawable\nfresh-methods:\n rectangle\n circle\n image\n value\nmodules:\n StandardPrelude\n mgcollections\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n Rest\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nfresh:circle:\n face\n touchingEdge\n x:=\n step\n mousedown\n whenever()do\n destX:=\n colour:=\n moveTo\n jumpTo\n bounce\n radius\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n bounceOff\n radius:=\n destY:=\n destX\n destY\nfresh:rectangle:\n face\n touchingEdge\n width:=\n x:=\n step\n mousedown\n whenever()do\n destX:=\n colour:=\n height:=\n asString\n height\n moveTo\n jumpTo\n bounce\n y:=\n always\n forward\n x\n y\n bounceFrom\n angle:=\n width\n touching\n isPointOver\n stamp\n angle\n turn\n tick\n draw\n alwaysBlocks\n normaliseAngle\n colour\n bounceOff\n destY:=\n destX\n destY\n";
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
    "",
  ];
}
