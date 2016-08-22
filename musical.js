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
      lineNumber = 421
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
      block866.className = 'block<musical:421>';
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
        lineNumber = 397
        lineNumber = 391
        var call880 = callmethod(var_canvas,"offsetHeight", [0]);
        var call882 = callmethod(var_canvas,"offsetTop", [0]);
        var call884 = callmethod(var_ev,"clientY", [0]);
        var diff886 = callmethod(call884, "-", [1], call882);
        var quotient888 = callmethod(diff886, "/", [1], call880);
        var prod890 = callmethod(quotient888, "*", [1], var_canvasHeight);
        var var_y = prod890;
        lineNumber = 397;
        moduleName = "musical";
        lineNumber = 391
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 411
        var if891 = var_done;
        lineNumber = 397
        if (Grace_isTrue(var_stopRunning)) {
          lineNumber = 398
          var string892 = new GraceString("if stopRunning");
          var call893 = callmethod(var_dom,"window", [0]);
          var call894 = callmethod(call893,"console", [0]);
          var call895 = callmethod(call894,"log", [1], string892);
          lineNumber = 400
          var call896 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 402
          lineNumber = 401
          var bool897 = new GraceBoolean(false)
          var_stopRunning = bool897;
          lineNumber = 402
          onSelf = true;
          var call898 = callmethod(this, "start", [0]);
          lineNumber = 403
          var call899 = callmethod(var_dom,"window", [0]);
          var call900 = callmethod(call899,"t_play", [0]);
          if891 = call900;
        } else {
          lineNumber = 405
          var string901 = new GraceString("if !stopRunning");
          var call902 = callmethod(var_dom,"window", [0]);
          var call903 = callmethod(call902,"console", [0]);
          var call904 = callmethod(call903,"log", [1], string901);
          lineNumber = 406
          var call905 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 407
          onSelf = true;
          var call906 = callmethod(this, "stop", [0]);
          if891 = call906;
        }
        lineNumber = 411
        var string907 = new GraceString("mousedown");
        var call908 = callmethod(var_dom,"window", [0]);
        var call909 = callmethod(call908,"console", [0]);
        var call910 = callmethod(call909,"log", [1], string907);
        lineNumber = 413
        var call911 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call911;
        lineNumber = 413;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 414
        lineNumber = 420
        var block912 = Grace_allocObject();
        block912.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block912.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block912.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block912.methods["match"] = GraceBlock_match;
        block912.methods["prefix?"] = GraceBlock_lift;
        block912.receiver = this;
        block912.className = 'block<musical:420>';
        block912.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 419
          var if913 = var_done;
          lineNumber = 415
          var call914 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call914)) {
            lineNumber = 416
            var call915 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 417
            var call916 = callmethod(var_ev,"preventDefault", [0]);
            if913 = call916;
          }
          return if913;
        };
        var call917 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block912);
        return call917;
      };
      var_mouseDownListener = block866;
      lineNumber = 421
      var string918 = new GraceString("mousedown");
      var call919 = callmethod(var_canvas,"addEventListener", [2], string918, var_mouseDownListener);
      return call919
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
  lineNumber = 423
  var func920 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func920.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 425
      lineNumber = 424
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
  func920.paramCounts = [
    1,
  ];
  func920.variableArities = [
    false,
  ];
  this.methods["background"] = func920;
  func920.definitionLine = 423;
  func920.definitionModule = "musical";
  lineNumber = 426
  var func921 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func921.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 427
      var call922 = callmethod(var_randomModule,"random", [0]);
      var prod925 = callmethod(var_n, "*", [1], call922);
      var call926 = callmethod(prod925,"truncate", [0]);
      return call926
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
  this.methods["random"] = func921;
  func921.definitionLine = 426;
  func921.definitionModule = "musical";
  lineNumber = 430
  var func927 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func927.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 442
      var if928 = var_done;
      lineNumber = 431
      var call929 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call929)) {
        lineNumber = 432
        var call930 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call930;
        lineNumber = 432;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 434
        lineNumber = 427
        lineNumber = 433
        var call931 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 434
        var call932 = callmethod(var_audio,"play", [0]);
        if928 = call932;
      } else {
        lineNumber = 436
        var string933 = new GraceString("audio");
        var call934 = callmethod(var_dom,"document", [0]);
        var call935 = callmethod(call934,"createElement", [1], string933);
        var var_audio = call935;
        lineNumber = 436;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 437
        var call936 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 439
        lineNumber = 436
        lineNumber = 438
        var call937 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 439
        var call938 = callmethod(var_audio,"load", [0]);
        lineNumber = 440
        var call939 = callmethod(var_audio,"play", [0]);
        if928 = call939;
      }
      return if928
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func927.paramCounts = [
    1,
  ];
  func927.variableArities = [
    false,
  ];
  this.methods["playSound"] = func927;
  func927.definitionLine = 430;
  func927.definitionModule = "musical";
  lineNumber = 443
  var func940 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func940.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 448
      var if941 = var_done;
      lineNumber = 444
      var call942 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call942)) {
        lineNumber = 445
        var call943 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call943;
        lineNumber = 445;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 446
        var call944 = callmethod(var_audio,"pause", [0]);
        if941 = call944;
      }
      return if941
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func940.paramCounts = [
    1,
  ];
  func940.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func940;
  func940.definitionLine = 443;
  func940.definitionModule = "musical";
  lineNumber = 449
  var func945 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func945.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 450
      onSelf = true;
      var call946 = callmethod(this, "initialise", [0]);
      lineNumber = 455
      lineNumber = 454
      var bool947 = new GraceBoolean(false)
      var_stopRunning = bool947;
      lineNumber = 455
      var string948 = new GraceString("canvas");
      var call949 = callmethod(var_dom,"document", [0]);
      var call950 = callmethod(call949,"createElement", [1], string948);
      var_backingCanvas = call950;
      lineNumber = 457
      lineNumber = 455
      lineNumber = 456
      var call951 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 458
      lineNumber = 455
      lineNumber = 457
      var call952 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 458
      var string953 = new GraceString("2d");
      var call954 = callmethod(var_backingCanvas,"getContext", [1], string953);
      var_backingContext = call954;
      lineNumber = 459
      var string955 = new GraceString("2d");
      var call956 = callmethod(var_canvas,"getContext", [1], string955);
      var var_mctx = call956;
      lineNumber = 459;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 460
      var block957 = Grace_allocObject();
      block957.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block957.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block957.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block957.methods["match"] = GraceBlock_match;
      block957.methods["prefix?"] = GraceBlock_lift;
      block957.receiver = this;
      block957.className = 'block<musical:460>';
      block957.real = function(
      ) {
        sourceObject = this;
        var call958 = callmethod(var_stopRunning,"prefix!", [0]);
        return call958;
      };
      lineNumber = 476
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
      block959.className = 'block<musical:476>';
      block959.real = function(
      ) {
        sourceObject = this;
        lineNumber = 461
        lineNumber = 464
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
        block960.className = 'block<musical:464>';
        block960.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 462
          var call961 = callmethod(var_obj,"step", [0]);
          return call961;
        };
        var call962 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block960);
        lineNumber = 464
        lineNumber = 467
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
        block963.className = 'block<musical:467>';
        block963.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 465
          var call964 = callmethod(var_step,"apply", [0]);
          return call964;
        };
        var call965 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block963);
        lineNumber = 468
        lineNumber = 465
        lineNumber = 467
        var call966 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 468
        var call967 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 469
        var call968 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 470
        lineNumber = 473
        var block969 = Grace_allocObject();
        block969.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block969.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block969.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block969.methods["match"] = GraceBlock_match;
        block969.methods["prefix?"] = GraceBlock_lift;
        block969.receiver = this;
        block969.className = 'block<musical:473>';
        block969.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 471
          var call970 = callmethod(var_obj,"draw", [1], var_mctx);
          return call970;
        };
        var call971 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block969);
        lineNumber = 474
        lineNumber = 465
        lineNumber = 473
        var string972 = new GraceString("red");
        var call973 = callmethod(var_mctx,"fillStyle:=", [1], string972);
        lineNumber = 474
        var quotient976 = callmethod(var_canvasWidth, "/", [1], new GraceNum(4));
        var quotient979 = callmethod(var_canvasHeight, "/", [1], new GraceNum(4));
        var quotient982 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
        var quotient985 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
        var call986 = callmethod(var_mctx,"fillRect", [4], quotient976, quotient979, quotient982, quotient985);
        return call986;
      };
      lineNumber = 460
      var call987 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block957, new GraceNum(10), block959);
      lineNumber = 477
      lineNumber = 465
      lineNumber = 476
      var string988 = new GraceString("green");
      var call989 = callmethod(var_mctx,"fillStyle:=", [1], string988);
      lineNumber = 477
      var quotient992 = callmethod(var_canvasWidth, "/", [1], new GraceNum(4));
      var quotient995 = callmethod(var_canvasHeight, "/", [1], new GraceNum(4));
      var quotient998 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient1001 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call1002 = callmethod(var_mctx,"fillRect", [4], quotient992, quotient995, quotient998, quotient1001);
      return call1002
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func945.paramCounts = [
    0,
  ];
  func945.variableArities = [
    false,
  ];
  this.methods["start"] = func945;
  func945.definitionLine = 449;
  func945.definitionModule = "musical";
  lineNumber = 480
  var func1003 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1003.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 486
      lineNumber = 481
      var bool1004 = new GraceBoolean(true)
      var_stopRunning = bool1004;
      lineNumber = 486
      var call1005 = callmethod(var_dom,"window", [0]);
      var call1006 = callmethod(call1005,"t_stop", [0]);
      lineNumber = 487
      var call1007 = callmethod(var_dom,"window", [0]);
      var call1008 = callmethod(call1007,"t_reset", [0]);
      return call1008
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
  this.methods["stop"] = func1003;
  func1003.definitionLine = 480;
  func1003.definitionModule = "musical";
  lineNumber = 489
  var func1009 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1009.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 490
      onSelf = true;
      var call1010 = callmethod(this, "start", [0]);
      lineNumber = 492
      var call1011 = callmethod(var_dom,"window", [0]);
      var call1012 = callmethod(call1011,"t_play", [0]);
      return call1012
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1009.paramCounts = [
    1,
  ];
  func1009.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func1009;
  func1009.definitionLine = 489;
  func1009.definitionModule = "musical";
  lineNumber = 537
  var func1013 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1013.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Note)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 542
      var if1014 = var_done;
      lineNumber = 538
      var bool1015 = new GraceBoolean(true)
      var opresult1018 = callmethod(var_applyFlat, "==", [1], bool1015);
      if (Grace_isTrue(opresult1018)) {
        lineNumber = 539
        var string1019 = new GraceString("");
        var string1022 = new GraceString("b");
        var string1025 = new GraceString("");
        var opresult1027 = callmethod(string1025, "++", [1], var_note);
        var opresult1029 = callmethod(opresult1027, "++", [1], string1022);
        var opresult1031 = callmethod(opresult1029, "++", [1], var_octave);
        var opresult1033 = callmethod(opresult1031, "++", [1], string1019);
        var call1034 = callmethod(var_dom,"window", [0]);
        var call1035 = callmethod(call1034,"t_add", [1], opresult1033);
        lineNumber = 541
        lineNumber = 540
        var string1036 = new GraceString("b");
        var string1039 = new GraceString("");
        var opresult1041 = callmethod(string1039, "++", [1], var_note);
        var opresult1043 = callmethod(opresult1041, "++", [1], string1036);
        return opresult1043
      }
      lineNumber = 546
      var if1044 = var_done;
      lineNumber = 542
      var bool1045 = new GraceBoolean(true)
      var opresult1048 = callmethod(var_applySharp, "==", [1], bool1045);
      if (Grace_isTrue(opresult1048)) {
        lineNumber = 543
        var string1049 = new GraceString("");
        var string1052 = new GraceString("#");
        var string1055 = new GraceString("");
        var opresult1057 = callmethod(string1055, "++", [1], var_note);
        var opresult1059 = callmethod(opresult1057, "++", [1], string1052);
        var opresult1061 = callmethod(opresult1059, "++", [1], var_octave);
        var opresult1063 = callmethod(opresult1061, "++", [1], string1049);
        var call1064 = callmethod(var_dom,"window", [0]);
        var call1065 = callmethod(call1064,"t_add", [1], opresult1063);
        lineNumber = 545
        lineNumber = 544
        var string1066 = new GraceString("#");
        var string1069 = new GraceString("");
        var opresult1071 = callmethod(string1069, "++", [1], var_note);
        var opresult1073 = callmethod(opresult1071, "++", [1], string1066);
        return opresult1073
      }
      lineNumber = 546
      var string1074 = new GraceString("");
      var string1077 = new GraceString("");
      var string1080 = new GraceString("");
      var opresult1082 = callmethod(string1080, "++", [1], var_note);
      var opresult1084 = callmethod(opresult1082, "++", [1], string1077);
      var opresult1086 = callmethod(opresult1084, "++", [1], var_octave);
      var opresult1088 = callmethod(opresult1086, "++", [1], string1074);
      var call1089 = callmethod(var_dom,"window", [0]);
      var call1090 = callmethod(call1089,"t_add", [1], opresult1088);
      lineNumber = 548
      lineNumber = 547
      var string1091 = new GraceString("");
      var string1094 = new GraceString("");
      var opresult1096 = callmethod(string1094, "++", [1], var_note);
      var opresult1098 = callmethod(opresult1096, "++", [1], string1091);
      return opresult1098
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
  this.methods["Note"] = func1013;
  func1013.definitionLine = 537;
  func1013.definitionModule = "musical";
  lineNumber = 550
  var func1099 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1099.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 551
      var string1100 = new GraceString("C");
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
  this.methods["C"] = func1099;
  func1099.definitionLine = 550;
  func1099.definitionModule = "musical";
  lineNumber = 553
  var func1102 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1102.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 554
      var string1103 = new GraceString("D");
      onSelf = true;
      var call1104 = callmethod(this, "Note", [1], string1103);
      return call1104
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
  this.methods["D"] = func1102;
  func1102.definitionLine = 553;
  func1102.definitionModule = "musical";
  lineNumber = 556
  var func1105 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1105.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 557
      var string1106 = new GraceString("E");
      onSelf = true;
      var call1107 = callmethod(this, "Note", [1], string1106);
      return call1107
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1105.paramCounts = [
    0,
  ];
  func1105.variableArities = [
    false,
  ];
  this.methods["E"] = func1105;
  func1105.definitionLine = 556;
  func1105.definitionModule = "musical";
  lineNumber = 559
  var func1108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 560
      var string1109 = new GraceString("F");
      onSelf = true;
      var call1110 = callmethod(this, "Note", [1], string1109);
      return call1110
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1108.paramCounts = [
    0,
  ];
  func1108.variableArities = [
    false,
  ];
  this.methods["F"] = func1108;
  func1108.definitionLine = 559;
  func1108.definitionModule = "musical";
  lineNumber = 562
  var func1111 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1111.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 563
      var string1112 = new GraceString("G");
      onSelf = true;
      var call1113 = callmethod(this, "Note", [1], string1112);
      return call1113
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1111.paramCounts = [
    0,
  ];
  func1111.variableArities = [
    false,
  ];
  this.methods["G"] = func1111;
  func1111.definitionLine = 562;
  func1111.definitionModule = "musical";
  lineNumber = 565
  var func1114 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1114.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 566
      var string1115 = new GraceString("A");
      onSelf = true;
      var call1116 = callmethod(this, "Note", [1], string1115);
      return call1116
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1114.paramCounts = [
    0,
  ];
  func1114.variableArities = [
    false,
  ];
  this.methods["A"] = func1114;
  func1114.definitionLine = 565;
  func1114.definitionModule = "musical";
  lineNumber = 568
  var func1117 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1117.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 569
      var string1118 = new GraceString("B");
      onSelf = true;
      var call1119 = callmethod(this, "Note", [1], string1118);
      return call1119
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1117.paramCounts = [
    0,
  ];
  func1117.variableArities = [
    false,
  ];
  this.methods["B"] = func1117;
  func1117.definitionLine = 568;
  func1117.definitionModule = "musical";
  lineNumber = 572
  var func1120 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1120.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (flat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 574
      lineNumber = 573
      var bool1121 = new GraceBoolean(true)
      var_applyFlat = bool1121;
      lineNumber = 575
      lineNumber = 574
      var call1122 = callmethod(var_note,"apply", [0]);
      var var_ret = call1122;
      lineNumber = 575;
      moduleName = "musical";
      lineNumber = 574
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 576
      lineNumber = 575
      var bool1123 = new GraceBoolean(false)
      var_applyFlat = bool1123;
      lineNumber = 577
      lineNumber = 576
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1120.paramCounts = [
    1,
  ];
  func1120.variableArities = [
    false,
  ];
  this.methods["flat"] = func1120;
  func1120.definitionLine = 572;
  func1120.definitionModule = "musical";
  lineNumber = 578
  var func1124 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1124.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 580
      lineNumber = 579
      var bool1125 = new GraceBoolean(true)
      var_applySharp = bool1125;
      lineNumber = 581
      lineNumber = 580
      var call1126 = callmethod(var_note,"apply", [0]);
      var var_ret = call1126;
      lineNumber = 581;
      moduleName = "musical";
      lineNumber = 580
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 582
      lineNumber = 581
      var bool1127 = new GraceBoolean(false)
      var_applySharp = bool1127;
      lineNumber = 583
      lineNumber = 582
      return var_ret
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1124.paramCounts = [
    1,
  ];
  func1124.variableArities = [
    false,
  ];
  this.methods["sharp"] = func1124;
  func1124.definitionLine = 578;
  func1124.definitionModule = "musical";
  lineNumber = 585
  var func1128 = function(argcv) {
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1128.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var var_notes = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func1128.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (on)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 587
      lineNumber = 586
      var var_oldOctave = var_octave;
      lineNumber = 587;
      moduleName = "musical";
      lineNumber = 586
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_oldOctave)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'oldOctave' to be of type Unknown"))
      lineNumber = 588
      lineNumber = 587
      var_octave = var_num;
      lineNumber = 589
      lineNumber = 588
      var call1129 = callmethod(var_notes,"apply", [0]);
      var var_ret = call1129;
      lineNumber = 589;
      moduleName = "musical";
      lineNumber = 588
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ret)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'ret' to be of type Unknown"))
      lineNumber = 590
      lineNumber = 589
      var_octave = var_oldOctave;
      lineNumber = 591
      lineNumber = 590
      return var_ret
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
    1,
  ];
  func1128.variableArities = [
    false,
    false,
  ];
  this.methods["octave()on"] = func1128;
  func1128.definitionLine = 585;
  func1128.definitionModule = "musical";
  lineNumber = 596
  var func1130 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1130.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 601
      var if1131 = var_done;
      lineNumber = 597
      var bool1132 = new GraceBoolean(true)
      var opresult1135 = callmethod(var_firstPass, "==", [1], bool1132);
      if (Grace_isTrue(opresult1135)) {
        lineNumber = 598
        var call1136 = callmethod(var_dom,"window", [0]);
        var call1137 = callmethod(call1136,"t_reset", [0]);
        lineNumber = 600
        lineNumber = 599
        var bool1138 = new GraceBoolean(false)
        var_firstPass = bool1138;
        if1131 = bool1138;
      }
      lineNumber = 601
      var call1139 = callmethod(var_dom,"window", [0]);
      var call1140 = callmethod(call1139,"t_init", [0]);
      lineNumber = 602
      var call1141 = callmethod(var_blocks,"apply", [0]);
      return call1141
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
  this.methods["Instrument"] = func1130;
  func1130.definitionLine = 596;
  func1130.definitionModule = "musical";
  lineNumber = 605
  var func1142 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1142.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 606
      onSelf = true;
      var call1143 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 607
      var call1144 = callmethod(var_dom,"window", [0]);
      var call1145 = callmethod(call1144,"t_synth_mono", [0]);
      return call1145
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
  this.methods["monoSynth"] = func1142;
  func1142.definitionLine = 605;
  func1142.definitionModule = "musical";
  lineNumber = 610
  var func1146 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1146.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 611
      onSelf = true;
      var call1147 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 612
      var call1148 = callmethod(var_dom,"window", [0]);
      var call1149 = callmethod(call1148,"t_synth_pluck", [0]);
      return call1149
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1146.paramCounts = [
    1,
  ];
  func1146.variableArities = [
    false,
  ];
  this.methods["pluckSynth"] = func1146;
  func1146.definitionLine = 610;
  func1146.definitionModule = "musical";
  lineNumber = 615
  var func1150 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1150.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 616
      onSelf = true;
      var call1151 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 617
      var call1152 = callmethod(var_dom,"window", [0]);
      var call1153 = callmethod(call1152,"t_synth_poly", [0]);
      return call1153
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
  this.methods["polySynth"] = func1150;
  func1150.definitionLine = 615;
  func1150.definitionModule = "musical";
  lineNumber = 620
  var func1154 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1154.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 621
      onSelf = true;
      var call1155 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 622
      var call1156 = callmethod(var_dom,"window", [0]);
      var call1157 = callmethod(call1156,"t_synth_fm", [0]);
      return call1157
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
  this.methods["fmSynth"] = func1154;
  func1154.definitionLine = 620;
  func1154.definitionModule = "musical";
  lineNumber = 625
  var func1158 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1158.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 626
      onSelf = true;
      var call1159 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 627
      var call1160 = callmethod(var_dom,"window", [0]);
      var call1161 = callmethod(call1160,"t_synth_membrane", [0]);
      return call1161
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
  this.methods["membraneSynth"] = func1158;
  func1158.definitionLine = 625;
  func1158.definitionModule = "musical";
  lineNumber = 630
  var func1162 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1162.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 631
      onSelf = true;
      var call1163 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 632
      var call1164 = callmethod(var_dom,"window", [0]);
      var call1165 = callmethod(call1164,"t_synth_duo", [0]);
      return call1165
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
  this.methods["duoSynth"] = func1162;
  func1162.definitionLine = 630;
  func1162.definitionModule = "musical";
  lineNumber = 635
  var func1166 = function(argcv) {
    var curarg = 1;
    var var_note = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1166.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (arpeggio)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 636
      var call1167 = callmethod(var_dom,"window", [0]);
      var call1168 = callmethod(call1167,"t_synth_arpeggio", [1], var_note);
      return call1168
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
  this.methods["arpeggio"] = func1166;
  func1166.definitionLine = 635;
  func1166.definitionModule = "musical";
  lineNumber = 642
  var func1169 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1169.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Effect)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 646
      var if1170 = var_done;
      lineNumber = 643
      var bool1171 = new GraceBoolean(true)
      var opresult1174 = callmethod(var_applyChorus, "==", [1], bool1171);
      if (Grace_isTrue(opresult1174)) {
        lineNumber = 644
        var call1175 = callmethod(var_dom,"window", [0]);
        var call1176 = callmethod(call1175,"t_effect_chorus", [0]);
        if1170 = call1176;
      }
      lineNumber = 649
      var if1177 = var_done;
      lineNumber = 646
      var bool1178 = new GraceBoolean(true)
      var opresult1181 = callmethod(var_applyReverb, "==", [1], bool1178);
      if (Grace_isTrue(opresult1181)) {
        lineNumber = 647
        var call1182 = callmethod(var_dom,"window", [0]);
        var call1183 = callmethod(call1182,"t_effect_reverb", [0]);
        if1177 = call1183;
      }
      lineNumber = 652
      var if1184 = var_done;
      lineNumber = 649
      var bool1185 = new GraceBoolean(true)
      var opresult1188 = callmethod(var_applyAutowah, "==", [1], bool1185);
      if (Grace_isTrue(opresult1188)) {
        lineNumber = 650
        var call1189 = callmethod(var_dom,"window", [0]);
        var call1190 = callmethod(call1189,"t_effect_autowah", [0]);
        if1184 = call1190;
      }
      lineNumber = 655
      var if1191 = var_done;
      lineNumber = 652
      var bool1192 = new GraceBoolean(true)
      var opresult1195 = callmethod(var_applyCheby, "==", [1], bool1192);
      if (Grace_isTrue(opresult1195)) {
        lineNumber = 653
        var call1196 = callmethod(var_dom,"window", [0]);
        var call1197 = callmethod(call1196,"t_effect_cheby", [0]);
        if1191 = call1197;
      }
      lineNumber = 655
      var call1198 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 656
      var call1199 = callmethod(var_dom,"window", [0]);
      var call1200 = callmethod(call1199,"t_effect_reset", [0]);
      return call1200
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
  this.methods["Effect"] = func1169;
  func1169.definitionLine = 642;
  func1169.definitionModule = "musical";
  lineNumber = 659
  var func1201 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1201.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Chorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 661
      lineNumber = 660
      var bool1202 = new GraceBoolean(true)
      var_applyChorus = bool1202;
      lineNumber = 661
      onSelf = true;
      var call1203 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 663
      lineNumber = 662
      var bool1204 = new GraceBoolean(false)
      var_applyChorus = bool1204;
      return bool1204
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
  this.methods["Chorus"] = func1201;
  func1201.definitionLine = 659;
  func1201.definitionModule = "musical";
  lineNumber = 665
  var func1205 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1205.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Reverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 667
      lineNumber = 666
      var bool1206 = new GraceBoolean(true)
      var_applyReverb = bool1206;
      lineNumber = 667
      onSelf = true;
      var call1207 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 669
      lineNumber = 668
      var bool1208 = new GraceBoolean(false)
      var_applyReverb = bool1208;
      return bool1208
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
  this.methods["Reverb"] = func1205;
  func1205.definitionLine = 665;
  func1205.definitionModule = "musical";
  lineNumber = 671
  var func1209 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1209.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Autowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 673
      lineNumber = 672
      var bool1210 = new GraceBoolean(true)
      var_applyAutowah = bool1210;
      lineNumber = 673
      onSelf = true;
      var call1211 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 675
      lineNumber = 674
      var bool1212 = new GraceBoolean(false)
      var_applyAutowah = bool1212;
      return bool1212
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
  this.methods["Autowah"] = func1209;
  func1209.definitionLine = 671;
  func1209.definitionModule = "musical";
  lineNumber = 677
  var func1213 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1213.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Cheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 679
      lineNumber = 678
      var bool1214 = new GraceBoolean(true)
      var_applyCheby = bool1214;
      lineNumber = 679
      onSelf = true;
      var call1215 = callmethod(this, "Effect", [1], var_blocks);
      lineNumber = 681
      lineNumber = 680
      var bool1216 = new GraceBoolean(false)
      var_applyCheby = bool1216;
      return bool1216
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
  this.methods["Cheby"] = func1213;
  func1213.definitionLine = 677;
  func1213.definitionModule = "musical";
  lineNumber = 685
  var func1217 = function(argcv) {
    var curarg = 1;
    var var_bpm = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1217.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SetBPM)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 686
      var call1218 = callmethod(var_dom,"window", [0]);
      var call1219 = callmethod(call1218,"t_bpm", [1], var_bpm);
      return call1219
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
  this.methods["SetBPM"] = func1217;
  func1217.definitionLine = 685;
  func1217.definitionModule = "musical";
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
  var call1220 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1220;
  this.data = call1220.data;
  this._value = call1220._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 686
  var func1221 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1221.paramCounts[0])
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
  func1221.paramCounts = [
    0,
  ];
  func1221.variableArities = [
    false,
  ];
  this.methods["document"] = func1221;
  func1221.definitionLine = 686;
  func1221.definitionModule = "musical";
  lineNumber = 686
  var func1222 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1222.paramCounts[0])
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
  func1222.paramCounts = [
    1,
  ];
  func1222.variableArities = [
    false,
  ];
  this.methods["document:="] = func1222;
  func1222.definitionLine = 686;
  func1222.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 686
  var func1223 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1223.paramCounts[0])
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
  func1223.paramCounts = [
    0,
  ];
  func1223.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1223;
  func1223.definitionLine = 686;
  func1223.definitionModule = "musical";
  lineNumber = 686
  var func1224 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1224.paramCounts[0])
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
  func1224.paramCounts = [
    1,
  ];
  func1224.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1224;
  func1224.definitionLine = 686;
  func1224.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 686
  var func1225 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1225.paramCounts[0])
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
  func1225.paramCounts = [
    0,
  ];
  func1225.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1225;
  func1225.definitionLine = 686;
  func1225.definitionModule = "musical";
  lineNumber = 686
  var func1226 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1226.paramCounts[0])
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
  func1226.paramCounts = [
    1,
  ];
  func1226.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1226;
  func1226.definitionLine = 686;
  func1226.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 686
  var func1227 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1227.paramCounts[0])
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
  func1227.paramCounts = [
    0,
  ];
  func1227.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1227;
  func1227.definitionLine = 686;
  func1227.definitionModule = "musical";
  lineNumber = 686
  var func1228 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1228.paramCounts[0])
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
  func1228.paramCounts = [
    1,
  ];
  func1228.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1228;
  func1228.definitionLine = 686;
  func1228.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 686
  var func1229 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1229.paramCounts[0])
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
  func1229.paramCounts = [
    0,
  ];
  func1229.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1229;
  func1229.definitionLine = 686;
  func1229.definitionModule = "musical";
  lineNumber = 686
  var func1230 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1230.paramCounts[0])
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
  func1230.paramCounts = [
    1,
  ];
  func1230.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1230;
  func1230.definitionLine = 686;
  func1230.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 686
  var func1231 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1231.paramCounts[0])
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
  func1231.paramCounts = [
    0,
  ];
  func1231.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1231;
  func1231.definitionLine = 686;
  func1231.definitionModule = "musical";
  lineNumber = 686
  var func1232 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1232.paramCounts[0])
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
  func1232.paramCounts = [
    1,
  ];
  func1232.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1232;
  func1232.definitionLine = 686;
  func1232.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1233 = callmethod(var_dom,"window", [0]);
  var call1234 = callmethod(call1233,"Math", [0]);
  var var_trig = call1234;
  var func1235 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1235.paramCounts[0])
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
  func1235.paramCounts = [
    0,
  ];
  func1235.variableArities = [
    false,
  ];
  this.methods["trig"] = func1235;
  func1235.definitionLine = 15;
  func1235.definitionModule = "musical";
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
  var func1236 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1236.paramCounts[0])
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
  func1236.paramCounts = [
    0,
  ];
  func1236.variableArities = [
    false,
  ];
  this.methods["PI"] = func1236;
  func1236.definitionLine = 15;
  func1236.definitionModule = "musical";
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
  var bool1237 = new GraceBoolean(false)
  var var_stopRunning = bool1237;
  lineNumber = 15
  var func1238 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1238.paramCounts[0])
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
  func1238.paramCounts = [
    0,
  ];
  func1238.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1238;
  func1238.definitionLine = 15;
  func1238.definitionModule = "musical";
  lineNumber = 15
  var func1239 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1239.paramCounts[0])
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
  func1239.paramCounts = [
    1,
  ];
  func1239.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1239;
  func1239.definitionLine = 15;
  func1239.definitionModule = "musical";
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
  var bool1240 = new GraceBoolean(false)
  var var_initialised = bool1240;
  lineNumber = 15
  var func1241 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1241.paramCounts[0])
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
  func1241.paramCounts = [
    0,
  ];
  func1241.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1241;
  func1241.definitionLine = 15;
  func1241.definitionModule = "musical";
  lineNumber = 15
  var func1242 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1242.paramCounts[0])
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
  func1242.paramCounts = [
    1,
  ];
  func1242.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1242;
  func1242.definitionLine = 15;
  func1242.definitionModule = "musical";
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
  var string1243 = new GraceString("white");
  var var_backgroundColour = string1243;
  lineNumber = 15
  var func1244 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1244.paramCounts[0])
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
  func1244.paramCounts = [
    0,
  ];
  func1244.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1244;
  func1244.definitionLine = 15;
  func1244.definitionModule = "musical";
  lineNumber = 15
  var func1245 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1245.paramCounts[0])
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
  func1245.paramCounts = [
    1,
  ];
  func1245.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1245;
  func1245.definitionLine = 15;
  func1245.definitionModule = "musical";
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
  var call1246 = callmethod(var_collections,"list", [0]);
  var call1247 = callmethod(call1246,"new", [0]);
  var var_registeredObjects = call1247;
  var func1248 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1248.paramCounts[0])
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
  func1248.paramCounts = [
    0,
  ];
  func1248.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1248;
  func1248.definitionLine = 21;
  func1248.definitionModule = "musical";
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
  var call1249 = callmethod(var_collections,"list", [0]);
  var call1250 = callmethod(call1249,"new", [0]);
  var var_stepBlocks = call1250;
  var func1251 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1251.paramCounts[0])
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
  func1251.paramCounts = [
    0,
  ];
  func1251.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1251;
  func1251.definitionLine = 22;
  func1251.definitionModule = "musical";
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
  var call1252 = callmethod(var_collections,"map", [0]);
  var call1253 = callmethod(call1252,"new", [0]);
  var var_audioTags = call1253;
  var func1254 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1254.paramCounts[0])
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
  func1254.paramCounts = [
    0,
  ];
  func1254.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1254;
  func1254.definitionLine = 23;
  func1254.definitionModule = "musical";
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
  var func1255 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1255.paramCounts[0])
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
  func1255.paramCounts = [
    0,
  ];
  func1255.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1255;
  func1255.definitionLine = 23;
  func1255.definitionModule = "musical";
  lineNumber = 23
  var func1256 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1256.paramCounts[0])
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
  func1256.paramCounts = [
    1,
  ];
  func1256.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1256;
  func1256.definitionLine = 23;
  func1256.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1257 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1257.paramCounts[0])
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
  func1257.paramCounts = [
    0,
  ];
  func1257.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1257;
  func1257.definitionLine = 23;
  func1257.definitionModule = "musical";
  lineNumber = 23
  var func1258 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1258.paramCounts[0])
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
  func1258.paramCounts = [
    1,
  ];
  func1258.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1258;
  func1258.definitionLine = 23;
  func1258.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1259 = new GraceString("left");
  var var_left = string1259;
  lineNumber = 23
  var func1260 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1260.paramCounts[0])
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
  func1260.paramCounts = [
    0,
  ];
  func1260.variableArities = [
    false,
  ];
  this.methods["left"] = func1260;
  func1260.definitionLine = 23;
  func1260.definitionModule = "musical";
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
  var string1261 = new GraceString("right");
  var var_right = string1261;
  lineNumber = 23
  var func1262 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1262.paramCounts[0])
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
  func1262.paramCounts = [
    0,
  ];
  func1262.variableArities = [
    false,
  ];
  this.methods["right"] = func1262;
  func1262.definitionLine = 23;
  func1262.definitionModule = "musical";
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
  var string1263 = new GraceString("top");
  var var_top = string1263;
  lineNumber = 23
  var func1264 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1264.paramCounts[0])
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
  func1264.paramCounts = [
    0,
  ];
  func1264.variableArities = [
    false,
  ];
  this.methods["top"] = func1264;
  func1264.definitionLine = 23;
  func1264.definitionModule = "musical";
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
  var string1265 = new GraceString("bottom");
  var var_bottom = string1265;
  lineNumber = 23
  var func1266 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1266.paramCounts[0])
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
  func1266.paramCounts = [
    0,
  ];
  func1266.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1266;
  func1266.definitionLine = 23;
  func1266.definitionModule = "musical";
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
  var func1267 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1267.paramCounts[0])
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
  func1267.paramCounts = [
    0,
  ];
  func1267.variableArities = [
    false,
  ];
  this.methods["centre"] = func1267;
  func1267.definitionLine = 23;
  func1267.definitionModule = "musical";
  lineNumber = 23
  var func1268 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1268.paramCounts[0])
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
  func1268.paramCounts = [
    1,
  ];
  func1268.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1268;
  func1268.definitionLine = 23;
  func1268.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1269 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1269.paramCounts[0])
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
  func1269.paramCounts = [
    0,
  ];
  func1269.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1269;
  func1269.definitionLine = 23;
  func1269.definitionModule = "musical";
  lineNumber = 23
  var func1270 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1270.paramCounts[0])
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
  func1270.paramCounts = [
    1,
  ];
  func1270.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1270;
  func1270.definitionLine = 23;
  func1270.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1271 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1271.paramCounts[0])
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
  func1271.paramCounts = [
    0,
  ];
  func1271.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1271;
  func1271.definitionLine = 23;
  func1271.definitionModule = "musical";
  lineNumber = 23
  var func1272 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1272.paramCounts[0])
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
  func1272.paramCounts = [
    1,
  ];
  func1272.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1272;
  func1272.definitionLine = 23;
  func1272.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1273 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1273.paramCounts[0])
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
  func1273.paramCounts = [
    0,
  ];
  func1273.variableArities = [
    false,
  ];
  this.methods["above"] = func1273;
  func1273.definitionLine = 23;
  func1273.definitionModule = "musical";
  lineNumber = 23
  var func1274 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1274.paramCounts[0])
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
  func1274.paramCounts = [
    1,
  ];
  func1274.variableArities = [
    false,
  ];
  this.methods["above:="] = func1274;
  func1274.definitionLine = 23;
  func1274.definitionModule = "musical";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1275 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1275.paramCounts[0])
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
  func1275.paramCounts = [
    0,
  ];
  func1275.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1275;
  func1275.definitionLine = 23;
  func1275.definitionModule = "musical";
  lineNumber = 23
  var func1276 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1276.paramCounts[0])
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
  func1276.paramCounts = [
    1,
  ];
  func1276.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1276;
  func1276.definitionLine = 23;
  func1276.definitionModule = "musical";
  lineNumber = 40
  var func1277 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1277.paramCounts[0])
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
  func1277.paramCounts = [
    0,
  ];
  func1277.variableArities = [
    false,
  ];
  this.methods["point"] = func1277;
  func1277.definitionLine = 40;
  func1277.definitionModule = "musical";
  var obj1278 = Grace_allocObject();
  obj1278.definitionModule = "musical";
  obj1278.definitionLine = 40;
  obj1278.outer = this;
  var reader_musical_outer_1279 = function() {
    return this.outer;
  }
  obj1278.methods["outer"] = reader_musical_outer_1279;
  function obj_init_1278() {
    var origSuperDepth = superDepth;
    superDepth = obj1278;
    obj1278.annotations = [];
    var func1280 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1280.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1280.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1281 = Grace_allocObject();
        obj1281.definitionModule = "musical";
        obj1281.definitionLine = 40;
        obj1281.outer = this;
        var reader_musical_outer_1282 = function() {
          return this.outer;
        }
        obj1281.methods["outer"] = reader_musical_outer_1282;
        function obj_init_1281() {
          var origSuperDepth = superDepth;
          superDepth = obj1281;
          obj1281.annotations = [];
          var func1283 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1285 = callmethod(this, "x", [0]);
              var diff1287 = callmethod(call1285, "-", [1], var_dx);
              onSelf = true;
              var call1288 = callmethod(this, "y", [0]);
              var call1289 = callmethod(var_point,"x()y", [1, 1], diff1287, call1288);
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
          obj1281.methods["left"] = func1283;
          func1283.definitionLine = 43;
          func1283.definitionModule = "musical";
          var func1290 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1292 = callmethod(this, "x", [0]);
              var opresult1294 = callmethod(call1292, "+", [1], var_dx);
              onSelf = true;
              var call1295 = callmethod(this, "y", [0]);
              var call1296 = callmethod(var_point,"x()y", [1, 1], opresult1294, call1295);
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
          obj1281.methods["right"] = func1290;
          func1290.definitionLine = 44;
          func1290.definitionModule = "musical";
          var func1297 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1298 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1300 = callmethod(this, "y", [0]);
              var diff1302 = callmethod(call1300, "-", [1], var_dy);
              var call1303 = callmethod(var_point,"x()y", [1, 1], call1298, diff1302);
              return call1303
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1297.paramCounts = [
            1,
          ];
          func1297.variableArities = [
            false,
          ];
          obj1281.methods["up"] = func1297;
          func1297.definitionLine = 45;
          func1297.definitionModule = "musical";
          var func1304 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1305 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1307 = callmethod(this, "y", [0]);
              var opresult1309 = callmethod(call1307, "+", [1], var_dy);
              var call1310 = callmethod(var_point,"x()y", [1, 1], call1305, opresult1309);
              return call1310
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
          obj1281.methods["down"] = func1304;
          func1304.definitionLine = 46;
          func1304.definitionModule = "musical";
          sourceObject = obj1281;
          lineNumber = 41
          obj1281.data["x"] = var_x__39__;
          var reader_musical_x_1311 = function() {
            return this.data["x"];
          }
          reader_musical_x_1311.def = true;
          obj1281.methods["x"] = reader_musical_x_1311;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1281;
          lineNumber = 42
          obj1281.data["y"] = var_y__39__;
          var reader_musical_y_1312 = function() {
            return this.data["y"];
          }
          reader_musical_y_1312.def = true;
          obj1281.methods["y"] = reader_musical_y_1312;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1281;
          sourceObject = obj1281;
          sourceObject = obj1281;
          sourceObject = obj1281;
          superDepth = origSuperDepth;
        }
        obj_init_1281.apply(obj1281, []);
        return obj1281
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
      1,
    ];
    func1280.variableArities = [
      false,
      false,
    ];
    obj1278.methods["x()y"] = func1280;
    func1280.definitionLine = 40;
    func1280.definitionModule = "musical";
    var func1313 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1314 = Grace_allocObject();
        obj1314.definitionModule = "musical";
        obj1314.definitionLine = 40;
        var inho1314 = inheritingObject;
        while (inho1314.superobj) inho1314 = inho1314.superobj;
        inho1314.superobj = obj1314;
        obj1314.data = inheritingObject.data;
        obj1314.outer = this;
        var reader_musical_outer_1315 = function() {
          return this.outer;
        }
        obj1314.methods["outer"] = reader_musical_outer_1315;
        function obj_init_1314() {
          var origSuperDepth = superDepth;
          superDepth = obj1314;
          obj1314.annotations = [];
          var func1316 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 43
              onSelf = true;
              var call1318 = callmethod(this, "x", [0]);
              var diff1320 = callmethod(call1318, "-", [1], var_dx);
              onSelf = true;
              var call1321 = callmethod(this, "y", [0]);
              var call1322 = callmethod(var_point,"x()y", [1, 1], diff1320, call1321);
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
          obj1314.methods["left"] = func1316;
          func1316.definitionLine = 43;
          func1316.definitionModule = "musical";
          var func1323 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1323.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 44
              onSelf = true;
              var call1325 = callmethod(this, "x", [0]);
              var opresult1327 = callmethod(call1325, "+", [1], var_dx);
              onSelf = true;
              var call1328 = callmethod(this, "y", [0]);
              var call1329 = callmethod(var_point,"x()y", [1, 1], opresult1327, call1328);
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
          obj1314.methods["right"] = func1323;
          func1323.definitionLine = 44;
          func1323.definitionModule = "musical";
          var func1330 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1330.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 45
              onSelf = true;
              var call1331 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1333 = callmethod(this, "y", [0]);
              var diff1335 = callmethod(call1333, "-", [1], var_dy);
              var call1336 = callmethod(var_point,"x()y", [1, 1], call1331, diff1335);
              return call1336
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1330.paramCounts = [
            1,
          ];
          func1330.variableArities = [
            false,
          ];
          obj1314.methods["up"] = func1330;
          func1330.definitionLine = 45;
          func1330.definitionModule = "musical";
          var func1337 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1337.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1338 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1340 = callmethod(this, "y", [0]);
              var opresult1342 = callmethod(call1340, "+", [1], var_dy);
              var call1343 = callmethod(var_point,"x()y", [1, 1], call1338, opresult1342);
              return call1343
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
          obj1314.methods["down"] = func1337;
          func1337.definitionLine = 46;
          func1337.definitionModule = "musical";
          sourceObject = obj1314;
          lineNumber = 41
          obj1314.data["x"] = var_x__39__;
          var reader_musical_x_1344 = function() {
            return this.data["x"];
          }
          reader_musical_x_1344.def = true;
          obj1314.methods["x"] = reader_musical_x_1344;
          lineNumber = 42;
          moduleName = "musical";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1314;
          lineNumber = 42
          obj1314.data["y"] = var_y__39__;
          var reader_musical_y_1345 = function() {
            return this.data["y"];
          }
          reader_musical_y_1345.def = true;
          obj1314.methods["y"] = reader_musical_y_1345;
          lineNumber = 43;
          moduleName = "musical";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1314;
          sourceObject = obj1314;
          sourceObject = obj1314;
          sourceObject = obj1314;
          superDepth = origSuperDepth;
        }
        obj_init_1314.apply(inheritingObject, []);
        return obj1314
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1278.methods["x()y()object"] = func1313;
    var func1346 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 40
        var string1347 = new GraceString("class point");
        return string1347
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1346.paramCounts = [
    ];
    func1346.variableArities = [
    ];
    obj1278.methods["asDebugString"] = func1346;
    func1346.definitionLine = 40;
    func1346.definitionModule = "musical";
    sourceObject = obj1278;
    sourceObject = obj1278;
    superDepth = origSuperDepth;
  }
  obj_init_1278.apply(obj1278, []);
  var var_point = obj1278;
  lineNumber = 48
  var func1348 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1348.paramCounts[0])
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
  func1348.paramCounts = [
    0,
  ];
  func1348.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1348;
  func1348.definitionLine = 48;
  func1348.definitionModule = "musical";
  var obj1349 = Grace_allocObject();
  obj1349.definitionModule = "musical";
  obj1349.definitionLine = 48;
  obj1349.outer = this;
  var reader_musical_outer_1350 = function() {
    return this.outer;
  }
  obj1349.methods["outer"] = reader_musical_outer_1350;
  function obj_init_1349() {
    var origSuperDepth = superDepth;
    superDepth = obj1349;
    obj1349.annotations = [];
    var func1351 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1351.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1352 = Grace_allocObject();
        obj1352.definitionModule = "musical";
        obj1352.definitionLine = 48;
        obj1352.outer = this;
        var reader_musical_outer_1353 = function() {
          return this.outer;
        }
        obj1352.methods["outer"] = reader_musical_outer_1353;
        function obj_init_1352() {
          var origSuperDepth = superDepth;
          superDepth = obj1352;
          obj1352.annotations = [];
          var func1354 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1354.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1355 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1356 = Grace_allocObject();
              block1356.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1356.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1356.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1356.methods["match"] = GraceBlock_match;
              block1356.methods["prefix?"] = GraceBlock_lift;
              block1356.receiver = this;
              block1356.className = 'block<musical:63>';
              block1356.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1357 = callmethod(var_b,"apply", [0]);
                return call1357;
              };
              var call1358 = callmethod(Grace_prelude,"for()do", [1, 1], call1355, block1356);
              lineNumber = 63
              onSelf = true;
              var call1359 = callmethod(this, "tick", [0]);
              return call1359
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1354.paramCounts = [
            0,
          ];
          func1354.variableArities = [
            false,
          ];
          obj1352.methods["step"] = func1354;
          func1354.definitionLine = 59;
          func1354.definitionModule = "musical";
          var func1360 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1360.paramCounts[0])
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
          func1360.paramCounts = [
            0,
          ];
          func1360.variableArities = [
            false,
          ];
          obj1352.methods["tick"] = func1360;
          func1360.definitionLine = 66;
          func1360.definitionModule = "musical";
          var func1361 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1361.paramCounts[0])
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
          func1361.paramCounts = [
            1,
          ];
          func1361.variableArities = [
            false,
          ];
          obj1352.methods["draw"] = func1361;
          func1361.definitionLine = 67;
          func1361.definitionModule = "musical";
          var func1362 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1362.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1363 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1364 = callmethod(this, "destX:=", [1], call1363);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1365 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1366 = callmethod(this, "destY:=", [1], call1365);
              return call1366
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
          obj1352.methods["moveTo"] = func1362;
          func1362.definitionLine = 68;
          func1362.definitionModule = "musical";
          var func1367 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1367.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1368 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1369 = callmethod(this, "x:=", [1], call1368);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1370 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1371 = callmethod(this, "y:=", [1], call1370);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1372 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1373 = callmethod(this, "destX:=", [1], call1372);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1374 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1375 = callmethod(this, "destY:=", [1], call1374);
              return call1375
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
          obj1352.methods["jumpTo"] = func1367;
          func1367.definitionLine = 72;
          func1367.definitionModule = "musical";
          var func1376 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1376.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1377 = new GraceBoolean(false)
              return bool1377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1376.paramCounts = [
            1,
          ];
          func1376.variableArities = [
            false,
          ];
          obj1352.methods["isPointOver"] = func1376;
          func1376.definitionLine = 78;
          func1376.definitionModule = "musical";
          var func1378 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1378.paramCounts[0])
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
          func1378.paramCounts = [
            0,
          ];
          func1378.variableArities = [
            false,
          ];
          obj1352.methods["mousedown"] = func1378;
          func1378.definitionLine = 79;
          func1378.definitionModule = "musical";
          var func1379 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1379.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1380 = callmethod(this, "alwaysBlocks", [0]);
              var call1381 = callmethod(call1380,"push", [1], var_b);
              return call1381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1379.paramCounts = [
            1,
          ];
          func1379.variableArities = [
            false,
          ];
          obj1352.methods["always"] = func1379;
          func1379.definitionLine = 80;
          func1379.definitionModule = "musical";
          var func1382 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1382.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
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
              block1383.className = 'block<musical:89>';
              block1383.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1384 = var_done;
                lineNumber = 85
                var call1385 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1385)) {
                  lineNumber = 86
                  var call1386 = callmethod(var_b,"apply", [0]);
                  if1384 = call1386;
                }
                return if1384;
              };
              onSelf = true;
              var call1387 = callmethod(this, "always", [1], block1383);
              return call1387
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1382.paramCounts = [
            1,
            1,
          ];
          func1382.variableArities = [
            false,
            false,
          ];
          obj1352.methods["whenever()do"] = func1382;
          func1382.definitionLine = 83;
          func1382.definitionModule = "musical";
          var func1388 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1388.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1392 = callmethod(this, "angle", [0]);
              var quotient1394 = callmethod(call1392, "/", [1], new GraceNum(180));
              var prod1396 = callmethod(quotient1394, "*", [1], var_PI);
              var call1397 = callmethod(var_trig,"cos", [1], prod1396);
              var prod1399 = callmethod(call1397, "*", [1], var_dist);
              var var_y__39__ = prod1399;
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
              var call1403 = callmethod(this, "angle", [0]);
              var quotient1405 = callmethod(call1403, "/", [1], new GraceNum(180));
              var prod1407 = callmethod(quotient1405, "*", [1], var_PI);
              var call1408 = callmethod(var_trig,"sin", [1], prod1407);
              var prod1410 = callmethod(call1408, "*", [1], var_dist);
              var var_x__39__ = prod1410;
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
              var call1412 = callmethod(this, "x", [0]);
              var opresult1414 = callmethod(call1412, "+", [1], var_x__39__);
              onSelf = true;
              var call1415 = callmethod(this, "x:=", [1], opresult1414);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1417 = callmethod(this, "y", [0]);
              var opresult1419 = callmethod(call1417, "+", [1], var_y__39__);
              onSelf = true;
              var call1420 = callmethod(this, "y:=", [1], opresult1419);
              return call1420
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1388.paramCounts = [
            1,
          ];
          func1388.variableArities = [
            false,
          ];
          obj1352.methods["forward"] = func1388;
          func1388.definitionLine = 90;
          func1388.definitionModule = "musical";
          var func1421 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1421.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1422 = Grace_allocObject();
              block1422.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1422.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1422.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1422.methods["match"] = GraceBlock_match;
              block1422.methods["prefix?"] = GraceBlock_lift;
              block1422.receiver = this;
              block1422.className = 'block<musical:97>';
              block1422.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1424 = callmethod(this, "angle", [0]);
                var opresult1426 = callmethod(call1424, "<", [1], new GraceNum(0));
                return opresult1426;
              };
              lineNumber = 100
              var block1427 = Grace_allocObject();
              block1427.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1427.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1427.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1427.methods["match"] = GraceBlock_match;
              block1427.methods["prefix?"] = GraceBlock_lift;
              block1427.receiver = this;
              block1427.className = 'block<musical:100>';
              block1427.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1429 = callmethod(this, "angle", [0]);
                var opresult1431 = callmethod(call1429, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1432 = callmethod(this, "angle:=", [1], opresult1431);
                return call1432;
              };
              var call1433 = callmethod(Grace_prelude,"while()do", [1, 1], block1422, block1427);
              lineNumber = 100
              var block1434 = Grace_allocObject();
              block1434.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1434.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1434.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1434.methods["match"] = GraceBlock_match;
              block1434.methods["prefix?"] = GraceBlock_lift;
              block1434.receiver = this;
              block1434.className = 'block<musical:100>';
              block1434.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1436 = callmethod(this, "angle", [0]);
                var opresult1438 = callmethod(call1436, ">", [1], new GraceNum(360));
                return opresult1438;
              };
              lineNumber = 103
              var block1439 = Grace_allocObject();
              block1439.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1439.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1439.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1439.methods["match"] = GraceBlock_match;
              block1439.methods["prefix?"] = GraceBlock_lift;
              block1439.receiver = this;
              block1439.className = 'block<musical:103>';
              block1439.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1441 = callmethod(this, "angle", [0]);
                var diff1443 = callmethod(call1441, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1444 = callmethod(this, "angle:=", [1], diff1443);
                return call1444;
              };
              var call1445 = callmethod(Grace_prelude,"while()do", [1, 1], block1434, block1439);
              return call1445
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1421.paramCounts = [
            0,
          ];
          func1421.variableArities = [
            false,
          ];
          obj1352.methods["normaliseAngle"] = func1421;
          func1421.definitionLine = 96;
          func1421.definitionModule = "musical";
          var func1446 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1446.paramCounts[0])
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
              var call1448 = callmethod(this, "angle", [0]);
              var opresult1450 = callmethod(call1448, "+", [1], var_degrees);
              onSelf = true;
              var call1451 = callmethod(this, "angle:=", [1], opresult1450);
              lineNumber = 106
              onSelf = true;
              var call1452 = callmethod(this, "normaliseAngle", [0]);
              return call1452
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1446.paramCounts = [
            1,
          ];
          func1446.variableArities = [
            false,
          ];
          obj1352.methods["turn"] = func1446;
          func1446.definitionLine = 104;
          func1446.definitionModule = "musical";
          var func1453 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1453.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1454 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1455 = callmethod(this, "x", [0]);
              var call1456 = callmethod(var_point,"x()y", [1, 1], call1455, new GraceNum(0));
              onSelf = true;
              var call1457 = callmethod(this, "isPointOver", [1], call1456);
              if (Grace_isTrue(call1457)) {
                lineNumber = 111
                lineNumber = 110
                var bool1458 = new GraceBoolean(true)
                return bool1458
              }
              lineNumber = 115
              var if1459 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1460 = callmethod(this, "x", [0]);
              var call1461 = callmethod(var_point,"x()y", [1, 1], call1460, var_canvasHeight);
              onSelf = true;
              var call1462 = callmethod(this, "isPointOver", [1], call1461);
              if (Grace_isTrue(call1462)) {
                lineNumber = 114
                lineNumber = 113
                var bool1463 = new GraceBoolean(true)
                return bool1463
              }
              lineNumber = 118
              var if1464 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1465 = callmethod(this, "y", [0]);
              var call1466 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1465);
              onSelf = true;
              var call1467 = callmethod(this, "isPointOver", [1], call1466);
              if (Grace_isTrue(call1467)) {
                lineNumber = 117
                lineNumber = 116
                var bool1468 = new GraceBoolean(true)
                return bool1468
              }
              lineNumber = 121
              var if1469 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1470 = callmethod(this, "y", [0]);
              var call1471 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1470);
              onSelf = true;
              var call1472 = callmethod(this, "isPointOver", [1], call1471);
              if (Grace_isTrue(call1472)) {
                lineNumber = 120
                lineNumber = 119
                var bool1473 = new GraceBoolean(true)
                return bool1473
              }
              lineNumber = 122
              lineNumber = 121
              var bool1474 = new GraceBoolean(false)
              return bool1474
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1453.paramCounts = [
            0,
          ];
          func1453.variableArities = [
            false,
          ];
          obj1352.methods["touchingEdge"] = func1453;
          func1453.definitionLine = 108;
          func1453.definitionModule = "musical";
          var func1475 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1475.paramCounts[0])
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
              var if1476 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1477 = callmethod(this, "x", [0]);
              var call1478 = callmethod(var_point,"x()y", [1, 1], call1477, new GraceNum(0));
              onSelf = true;
              var call1479 = callmethod(this, "isPointOver", [1], call1478);
              if (Grace_isTrue(call1479)) {
                lineNumber = 127
                onSelf = true;
                var call1480 = callmethod(this, "bounceFrom", [1], var_top);
                if1476 = call1480;
              }
              lineNumber = 132
              var if1481 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1482 = callmethod(this, "x", [0]);
              var call1483 = callmethod(var_point,"x()y", [1, 1], call1482, var_canvasHeight);
              onSelf = true;
              var call1484 = callmethod(this, "isPointOver", [1], call1483);
              if (Grace_isTrue(call1484)) {
                lineNumber = 130
                onSelf = true;
                var call1485 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1481 = call1485;
              }
              lineNumber = 135
              var if1486 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1487 = callmethod(this, "y", [0]);
              var call1488 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1487);
              onSelf = true;
              var call1489 = callmethod(this, "isPointOver", [1], call1488);
              if (Grace_isTrue(call1489)) {
                lineNumber = 133
                onSelf = true;
                var call1490 = callmethod(this, "bounceFrom", [1], var_left);
                if1486 = call1490;
              }
              lineNumber = 138
              var if1491 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1492 = callmethod(this, "y", [0]);
              var call1493 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1492);
              onSelf = true;
              var call1494 = callmethod(this, "isPointOver", [1], call1493);
              if (Grace_isTrue(call1494)) {
                lineNumber = 136
                onSelf = true;
                var call1495 = callmethod(this, "bounceFrom", [1], var_right);
                if1491 = call1495;
              }
              lineNumber = 138
              var block1496 = Grace_allocObject();
              block1496.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1496.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1496.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1496.methods["match"] = GraceBlock_match;
              block1496.methods["prefix?"] = GraceBlock_lift;
              block1496.receiver = this;
              block1496.className = 'block<musical:138>';
              block1496.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1497 = callmethod(this, "touchingEdge", [0]);
                return call1497;
              };
              lineNumber = 141
              var block1498 = Grace_allocObject();
              block1498.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1498.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1498.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1498.methods["match"] = GraceBlock_match;
              block1498.methods["prefix?"] = GraceBlock_lift;
              block1498.receiver = this;
              block1498.className = 'block<musical:141>';
              block1498.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1499 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1499;
              };
              var call1500 = callmethod(Grace_prelude,"while()do", [1, 1], block1496, block1498);
              return call1500
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1475.paramCounts = [
            0,
          ];
          func1475.variableArities = [
            false,
          ];
          obj1352.methods["bounce"] = func1475;
          func1475.definitionLine = 123;
          func1475.definitionModule = "musical";
          var func1501 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1501.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1502 = var_done;
              lineNumber = 143
              var string1503 = new GraceString("left");
              var opresult1506 = callmethod(var_dir, "==", [1], string1503);
              if (Grace_isTrue(opresult1506)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1507 = callmethod(this, "angle", [0]);
                var diff1510 = callmethod(new GraceNum(360), "-", [1], call1507);
                onSelf = true;
                var call1511 = callmethod(this, "angle:=", [1], diff1510);
                if1502 = call1511;
              }
              lineNumber = 149
              var if1512 = var_done;
              lineNumber = 146
              var string1513 = new GraceString("right");
              var opresult1516 = callmethod(var_dir, "==", [1], string1513);
              if (Grace_isTrue(opresult1516)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1517 = callmethod(this, "angle", [0]);
                var diff1520 = callmethod(new GraceNum(360), "-", [1], call1517);
                onSelf = true;
                var call1521 = callmethod(this, "angle:=", [1], diff1520);
                if1512 = call1521;
              }
              lineNumber = 152
              var if1522 = var_done;
              lineNumber = 149
              var string1523 = new GraceString("top");
              var opresult1526 = callmethod(var_dir, "==", [1], string1523);
              if (Grace_isTrue(opresult1526)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1527 = callmethod(this, "angle", [0]);
                var diff1530 = callmethod(new GraceNum(180), "-", [1], call1527);
                onSelf = true;
                var call1531 = callmethod(this, "angle:=", [1], diff1530);
                if1522 = call1531;
              }
              lineNumber = 155
              var if1532 = var_done;
              lineNumber = 152
              var string1533 = new GraceString("bottom");
              var opresult1536 = callmethod(var_dir, "==", [1], string1533);
              if (Grace_isTrue(opresult1536)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1537 = callmethod(this, "angle", [0]);
                var diff1540 = callmethod(new GraceNum(180), "-", [1], call1537);
                onSelf = true;
                var call1541 = callmethod(this, "angle:=", [1], diff1540);
                if1532 = call1541;
              }
              lineNumber = 155
              onSelf = true;
              var call1542 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1543 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1543
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1501.paramCounts = [
            1,
          ];
          func1501.variableArities = [
            false,
          ];
          obj1352.methods["bounceFrom"] = func1501;
          func1501.definitionLine = 142;
          func1501.definitionModule = "musical";
          var func1544 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1544.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1545 = var_done;
              lineNumber = 159
              var call1546 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1548 = callmethod(this, "x", [0]);
              var opresult1550 = callmethod(call1548, ">", [1], call1546);
              if (Grace_isTrue(opresult1550)) {
                lineNumber = 160
                onSelf = true;
                var call1551 = callmethod(this, "bounceFrom", [1], var_left);
                if1545 = call1551;
              }
              lineNumber = 165
              var if1552 = var_done;
              lineNumber = 162
              var call1553 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1555 = callmethod(this, "x", [0]);
              var opresult1557 = callmethod(call1555, "<", [1], call1553);
              if (Grace_isTrue(opresult1557)) {
                lineNumber = 163
                onSelf = true;
                var call1558 = callmethod(this, "bounceFrom", [1], var_right);
                if1552 = call1558;
              }
              lineNumber = 165
              var block1559 = Grace_allocObject();
              block1559.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1559.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1559.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1559.methods["match"] = GraceBlock_match;
              block1559.methods["prefix?"] = GraceBlock_lift;
              block1559.receiver = this;
              block1559.className = 'block<musical:165>';
              block1559.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1560 = callmethod(this, "touching", [1], var_other);
                return call1560;
              };
              lineNumber = 168
              var block1561 = Grace_allocObject();
              block1561.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1561.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1561.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1561.methods["match"] = GraceBlock_match;
              block1561.methods["prefix?"] = GraceBlock_lift;
              block1561.receiver = this;
              block1561.className = 'block<musical:168>';
              block1561.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1562 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1562;
              };
              var call1563 = callmethod(Grace_prelude,"while()do", [1, 1], block1559, block1561);
              return call1563
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1544.paramCounts = [
            1,
          ];
          func1544.variableArities = [
            false,
          ];
          obj1352.methods["bounceOff"] = func1544;
          func1544.definitionLine = 158;
          func1544.definitionModule = "musical";
          var func1564 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1564.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1565 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1566 = callmethod(this, "y", [0]);
              var call1567 = callmethod(var_point,"x()y", [1, 1], call1565, call1566);
              var call1568 = callmethod(var_other,"isPointOver", [1], call1567);
              return call1568
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1564.paramCounts = [
            1,
          ];
          func1564.variableArities = [
            false,
          ];
          obj1352.methods["touching"] = func1564;
          func1564.definitionLine = 169;
          func1564.definitionModule = "musical";
          var func1569 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1569.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1570 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1571 = callmethod(this, "y", [0]);
              var call1573 = callmethod(var_other,"y", [0]);
              var opresult1575 = callmethod(call1573, "!=", [1], call1571);
              onSelf = true;
              var call1577 = callmethod(this, "x", [0]);
              var call1579 = callmethod(var_other,"x", [0]);
              var opresult1581 = callmethod(call1579, "!=", [1], call1577);
              var opresult1583 = callmethod(opresult1581, "||", [1], opresult1575);
              if (Grace_isTrue(opresult1583)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1586 = callmethod(this, "x", [0]);
                var call1588 = callmethod(var_other,"x", [0]);
                var diff1590 = callmethod(call1588, "-", [1], call1586);
                onSelf = true;
                var call1591 = callmethod(this, "y", [0]);
                var call1593 = callmethod(var_other,"y", [0]);
                var diff1595 = callmethod(call1593, "-", [1], call1591);
                var call1596 = callmethod(var_trig,"atan2", [2], diff1590, diff1595);
                var prod1598 = callmethod(call1596, "*", [1], new GraceNum(180));
                var quotient1600 = callmethod(prod1598, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1601 = callmethod(this, "angle:=", [1], quotient1600);
                if1570 = call1601;
              }
              lineNumber = 176
              onSelf = true;
              var call1602 = callmethod(this, "normaliseAngle", [0]);
              return call1602
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1569.paramCounts = [
            1,
          ];
          func1569.variableArities = [
            false,
          ];
          obj1352.methods["face"] = func1569;
          func1569.definitionLine = 172;
          func1569.definitionModule = "musical";
          var func1603 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1604 = new GraceString("2d");
              var call1605 = callmethod(var_backingCanvas,"getContext", [1], string1604);
              onSelf = true;
              var call1606 = callmethod(this, "draw", [1], call1605);
              return call1606
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1603.paramCounts = [
            0,
          ];
          func1603.variableArities = [
            false,
          ];
          obj1352.methods["stamp"] = func1603;
          func1603.definitionLine = 178;
          func1603.definitionModule = "musical";
          sourceObject = obj1352;
          lineNumber = 49
          var call1607 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1608 = callmethod(call1607, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1609 = callmethod(call1608, "initialise", [0]);
          sourceObject = obj1352;
          lineNumber = 50
          var call1610 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1352;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1352;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1352;
          lineNumber = 53
          var call1611 = callmethod(var_collections,"list", [0]);
          var call1612 = callmethod(call1611,"new", [0]);
          obj1352.data["alwaysBlocks"] = call1612;
          var reader_musical_alwaysBlocks_1613 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1613.def = true;
          reader_musical_alwaysBlocks_1613.confidential = true;
          obj1352.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1613;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1612)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1352;
          lineNumber = 55
          lineNumber = 54
          var quotient1616 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1352.data["x"] = quotient1616;
          var reader_musical_x_1617 = function() {
            return this.data["x"];
          }
          obj1352.methods["x"] = reader_musical_x_1617;
          obj1352.data["x"] = quotient1616;
          var writer_musical_x_1617 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1352.methods["x:="] = writer_musical_x_1617;
          writer_musical_x_1617.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1616)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1352.mutable = true;
          sourceObject = obj1352;
          lineNumber = 56
          lineNumber = 55
          var quotient1620 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1352.data["y"] = quotient1620;
          var reader_musical_y_1621 = function() {
            return this.data["y"];
          }
          obj1352.methods["y"] = reader_musical_y_1621;
          obj1352.data["y"] = quotient1620;
          var writer_musical_y_1621 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1352.methods["y:="] = writer_musical_y_1621;
          writer_musical_y_1621.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1620)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1352.mutable = true;
          sourceObject = obj1352;
          lineNumber = 56
          onSelf = true;
          var call1622 = callmethod(this, "x", [0]);
          obj1352.data["destX"] = call1622;
          var reader_musical_destX_1623 = function() {
            return this.data["destX"];
          }
          obj1352.methods["destX"] = reader_musical_destX_1623;
          obj1352.data["destX"] = call1622;
          var writer_musical_destX_1623 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1352.methods["destX:="] = writer_musical_destX_1623;
          reader_musical_destX_1623.confidential = true;
          writer_musical_destX_1623.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1622)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1352.mutable = true;
          sourceObject = obj1352;
          lineNumber = 57
          onSelf = true;
          var call1624 = callmethod(this, "y", [0]);
          obj1352.data["destY"] = call1624;
          var reader_musical_destY_1625 = function() {
            return this.data["destY"];
          }
          obj1352.methods["destY"] = reader_musical_destY_1625;
          obj1352.data["destY"] = call1624;
          var writer_musical_destY_1625 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1352.methods["destY:="] = writer_musical_destY_1625;
          reader_musical_destY_1625.confidential = true;
          writer_musical_destY_1625.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1624)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1352.mutable = true;
          sourceObject = obj1352;
          lineNumber = 58
          obj1352.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1626 = function() {
            return this.data["angle"];
          }
          obj1352.methods["angle"] = reader_musical_angle_1626;
          obj1352.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1626 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1352.methods["angle:="] = writer_musical_angle_1626;
          reader_musical_angle_1626.confidential = true;
          writer_musical_angle_1626.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1352.mutable = true;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          sourceObject = obj1352;
          superDepth = origSuperDepth;
        }
        obj_init_1352.apply(obj1352, []);
        return obj1352
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1351.paramCounts = [
      0,
    ];
    func1351.variableArities = [
      false,
    ];
    obj1349.methods["new"] = func1351;
    func1351.definitionLine = 48;
    func1351.definitionModule = "musical";
    var func1627 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1628 = Grace_allocObject();
        obj1628.definitionModule = "musical";
        obj1628.definitionLine = 48;
        var inho1628 = inheritingObject;
        while (inho1628.superobj) inho1628 = inho1628.superobj;
        inho1628.superobj = obj1628;
        obj1628.data = inheritingObject.data;
        obj1628.outer = this;
        var reader_musical_outer_1629 = function() {
          return this.outer;
        }
        obj1628.methods["outer"] = reader_musical_outer_1629;
        function obj_init_1628() {
          var origSuperDepth = superDepth;
          superDepth = obj1628;
          obj1628.annotations = [];
          var func1630 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1630.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 60
              onSelf = true;
              var call1631 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1632 = Grace_allocObject();
              block1632.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1632.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1632.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1632.methods["match"] = GraceBlock_match;
              block1632.methods["prefix?"] = GraceBlock_lift;
              block1632.receiver = this;
              block1632.className = 'block<musical:63>';
              block1632.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1633 = callmethod(var_b,"apply", [0]);
                return call1633;
              };
              var call1634 = callmethod(Grace_prelude,"for()do", [1, 1], call1631, block1632);
              lineNumber = 63
              onSelf = true;
              var call1635 = callmethod(this, "tick", [0]);
              return call1635
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1630.paramCounts = [
            0,
          ];
          func1630.variableArities = [
            false,
          ];
          obj1628.methods["step"] = func1630;
          func1630.definitionLine = 59;
          func1630.definitionModule = "musical";
          var func1636 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1636.paramCounts[0])
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
          func1636.paramCounts = [
            0,
          ];
          func1636.variableArities = [
            false,
          ];
          obj1628.methods["tick"] = func1636;
          func1636.definitionLine = 66;
          func1636.definitionModule = "musical";
          var func1637 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1637.paramCounts[0])
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
          func1637.paramCounts = [
            1,
          ];
          func1637.variableArities = [
            false,
          ];
          obj1628.methods["draw"] = func1637;
          func1637.definitionLine = 67;
          func1637.definitionModule = "musical";
          var func1638 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 70
              lineNumber = 61
              lineNumber = 69
              var call1639 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1640 = callmethod(this, "destX:=", [1], call1639);
              lineNumber = 71
              lineNumber = 69
              lineNumber = 70
              var call1641 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1642 = callmethod(this, "destY:=", [1], call1641);
              return call1642
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
          obj1628.methods["moveTo"] = func1638;
          func1638.definitionLine = 68;
          func1638.definitionModule = "musical";
          var func1643 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 74
              lineNumber = 70
              lineNumber = 73
              var call1644 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1645 = callmethod(this, "x:=", [1], call1644);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              var call1646 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1647 = callmethod(this, "y:=", [1], call1646);
              lineNumber = 76
              lineNumber = 74
              lineNumber = 75
              onSelf = true;
              var call1648 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1649 = callmethod(this, "destX:=", [1], call1648);
              lineNumber = 77
              lineNumber = 74
              lineNumber = 76
              onSelf = true;
              var call1650 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1651 = callmethod(this, "destY:=", [1], call1650);
              return call1651
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
          obj1628.methods["jumpTo"] = func1643;
          func1643.definitionLine = 72;
          func1643.definitionModule = "musical";
          var func1652 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1652.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 78
              var bool1653 = new GraceBoolean(false)
              return bool1653
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1652.paramCounts = [
            1,
          ];
          func1652.variableArities = [
            false,
          ];
          obj1628.methods["isPointOver"] = func1652;
          func1652.definitionLine = 78;
          func1652.definitionModule = "musical";
          var func1654 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1654.paramCounts[0])
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
          func1654.paramCounts = [
            0,
          ];
          func1654.variableArities = [
            false,
          ];
          obj1628.methods["mousedown"] = func1654;
          func1654.definitionLine = 79;
          func1654.definitionModule = "musical";
          var func1655 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1655.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              onSelf = true;
              var call1656 = callmethod(this, "alwaysBlocks", [0]);
              var call1657 = callmethod(call1656,"push", [1], var_b);
              return call1657
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1655.paramCounts = [
            1,
          ];
          func1655.variableArities = [
            false,
          ];
          obj1628.methods["always"] = func1655;
          func1655.definitionLine = 80;
          func1655.definitionModule = "musical";
          var func1658 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1658.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1658.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              lineNumber = 89
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
              block1659.className = 'block<musical:89>';
              block1659.real = function(
              ) {
                sourceObject = this;
                lineNumber = 88
                var if1660 = var_done;
                lineNumber = 85
                var call1661 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1661)) {
                  lineNumber = 86
                  var call1662 = callmethod(var_b,"apply", [0]);
                  if1660 = call1662;
                }
                return if1660;
              };
              onSelf = true;
              var call1663 = callmethod(this, "always", [1], block1659);
              return call1663
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1658.paramCounts = [
            1,
            1,
          ];
          func1658.variableArities = [
            false,
            false,
          ];
          obj1628.methods["whenever()do"] = func1658;
          func1658.definitionLine = 83;
          func1658.definitionModule = "musical";
          var func1664 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1664.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1668 = callmethod(this, "angle", [0]);
              var quotient1670 = callmethod(call1668, "/", [1], new GraceNum(180));
              var prod1672 = callmethod(quotient1670, "*", [1], var_PI);
              var call1673 = callmethod(var_trig,"cos", [1], prod1672);
              var prod1675 = callmethod(call1673, "*", [1], var_dist);
              var var_y__39__ = prod1675;
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
              var call1679 = callmethod(this, "angle", [0]);
              var quotient1681 = callmethod(call1679, "/", [1], new GraceNum(180));
              var prod1683 = callmethod(quotient1681, "*", [1], var_PI);
              var call1684 = callmethod(var_trig,"sin", [1], prod1683);
              var prod1686 = callmethod(call1684, "*", [1], var_dist);
              var var_x__39__ = prod1686;
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
              var call1688 = callmethod(this, "x", [0]);
              var opresult1690 = callmethod(call1688, "+", [1], var_x__39__);
              onSelf = true;
              var call1691 = callmethod(this, "x:=", [1], opresult1690);
              lineNumber = 95
              lineNumber = 86
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1693 = callmethod(this, "y", [0]);
              var opresult1695 = callmethod(call1693, "+", [1], var_y__39__);
              onSelf = true;
              var call1696 = callmethod(this, "y:=", [1], opresult1695);
              return call1696
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1664.paramCounts = [
            1,
          ];
          func1664.variableArities = [
            false,
          ];
          obj1628.methods["forward"] = func1664;
          func1664.definitionLine = 90;
          func1664.definitionModule = "musical";
          var func1697 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1697.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 97
              var block1698 = Grace_allocObject();
              block1698.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1698.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1698.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1698.methods["match"] = GraceBlock_match;
              block1698.methods["prefix?"] = GraceBlock_lift;
              block1698.receiver = this;
              block1698.className = 'block<musical:97>';
              block1698.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1700 = callmethod(this, "angle", [0]);
                var opresult1702 = callmethod(call1700, "<", [1], new GraceNum(0));
                return opresult1702;
              };
              lineNumber = 100
              var block1703 = Grace_allocObject();
              block1703.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1703.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1703.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1703.methods["match"] = GraceBlock_match;
              block1703.methods["prefix?"] = GraceBlock_lift;
              block1703.receiver = this;
              block1703.className = 'block<musical:100>';
              block1703.real = function(
              ) {
                sourceObject = this;
                lineNumber = 99
                lineNumber = 86
                lineNumber = 99
                lineNumber = 98
                onSelf = true;
                var call1705 = callmethod(this, "angle", [0]);
                var opresult1707 = callmethod(call1705, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1708 = callmethod(this, "angle:=", [1], opresult1707);
                return call1708;
              };
              var call1709 = callmethod(Grace_prelude,"while()do", [1, 1], block1698, block1703);
              lineNumber = 100
              var block1710 = Grace_allocObject();
              block1710.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1710.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1710.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1710.methods["match"] = GraceBlock_match;
              block1710.methods["prefix?"] = GraceBlock_lift;
              block1710.receiver = this;
              block1710.className = 'block<musical:100>';
              block1710.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1712 = callmethod(this, "angle", [0]);
                var opresult1714 = callmethod(call1712, ">", [1], new GraceNum(360));
                return opresult1714;
              };
              lineNumber = 103
              var block1715 = Grace_allocObject();
              block1715.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1715.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1715.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1715.methods["match"] = GraceBlock_match;
              block1715.methods["prefix?"] = GraceBlock_lift;
              block1715.receiver = this;
              block1715.className = 'block<musical:103>';
              block1715.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 86
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1717 = callmethod(this, "angle", [0]);
                var diff1719 = callmethod(call1717, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1720 = callmethod(this, "angle:=", [1], diff1719);
                return call1720;
              };
              var call1721 = callmethod(Grace_prelude,"while()do", [1, 1], block1710, block1715);
              return call1721
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1697.paramCounts = [
            0,
          ];
          func1697.variableArities = [
            false,
          ];
          obj1628.methods["normaliseAngle"] = func1697;
          func1697.definitionLine = 96;
          func1697.definitionModule = "musical";
          var func1722 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1722.paramCounts[0])
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
              var call1724 = callmethod(this, "angle", [0]);
              var opresult1726 = callmethod(call1724, "+", [1], var_degrees);
              onSelf = true;
              var call1727 = callmethod(this, "angle:=", [1], opresult1726);
              lineNumber = 106
              onSelf = true;
              var call1728 = callmethod(this, "normaliseAngle", [0]);
              return call1728
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1722.paramCounts = [
            1,
          ];
          func1722.variableArities = [
            false,
          ];
          obj1628.methods["turn"] = func1722;
          func1722.definitionLine = 104;
          func1722.definitionModule = "musical";
          var func1729 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1729.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 112
              var if1730 = var_done;
              lineNumber = 109
              onSelf = true;
              var call1731 = callmethod(this, "x", [0]);
              var call1732 = callmethod(var_point,"x()y", [1, 1], call1731, new GraceNum(0));
              onSelf = true;
              var call1733 = callmethod(this, "isPointOver", [1], call1732);
              if (Grace_isTrue(call1733)) {
                lineNumber = 111
                lineNumber = 110
                var bool1734 = new GraceBoolean(true)
                return bool1734
              }
              lineNumber = 115
              var if1735 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1736 = callmethod(this, "x", [0]);
              var call1737 = callmethod(var_point,"x()y", [1, 1], call1736, var_canvasHeight);
              onSelf = true;
              var call1738 = callmethod(this, "isPointOver", [1], call1737);
              if (Grace_isTrue(call1738)) {
                lineNumber = 114
                lineNumber = 113
                var bool1739 = new GraceBoolean(true)
                return bool1739
              }
              lineNumber = 118
              var if1740 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1741 = callmethod(this, "y", [0]);
              var call1742 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1741);
              onSelf = true;
              var call1743 = callmethod(this, "isPointOver", [1], call1742);
              if (Grace_isTrue(call1743)) {
                lineNumber = 117
                lineNumber = 116
                var bool1744 = new GraceBoolean(true)
                return bool1744
              }
              lineNumber = 121
              var if1745 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1746 = callmethod(this, "y", [0]);
              var call1747 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1746);
              onSelf = true;
              var call1748 = callmethod(this, "isPointOver", [1], call1747);
              if (Grace_isTrue(call1748)) {
                lineNumber = 120
                lineNumber = 119
                var bool1749 = new GraceBoolean(true)
                return bool1749
              }
              lineNumber = 122
              lineNumber = 121
              var bool1750 = new GraceBoolean(false)
              return bool1750
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1729.paramCounts = [
            0,
          ];
          func1729.variableArities = [
            false,
          ];
          obj1628.methods["touchingEdge"] = func1729;
          func1729.definitionLine = 108;
          func1729.definitionModule = "musical";
          var func1751 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1751.paramCounts[0])
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
              var if1752 = var_done;
              lineNumber = 126
              onSelf = true;
              var call1753 = callmethod(this, "x", [0]);
              var call1754 = callmethod(var_point,"x()y", [1, 1], call1753, new GraceNum(0));
              onSelf = true;
              var call1755 = callmethod(this, "isPointOver", [1], call1754);
              if (Grace_isTrue(call1755)) {
                lineNumber = 127
                onSelf = true;
                var call1756 = callmethod(this, "bounceFrom", [1], var_top);
                if1752 = call1756;
              }
              lineNumber = 132
              var if1757 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1758 = callmethod(this, "x", [0]);
              var call1759 = callmethod(var_point,"x()y", [1, 1], call1758, var_canvasHeight);
              onSelf = true;
              var call1760 = callmethod(this, "isPointOver", [1], call1759);
              if (Grace_isTrue(call1760)) {
                lineNumber = 130
                onSelf = true;
                var call1761 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1757 = call1761;
              }
              lineNumber = 135
              var if1762 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1763 = callmethod(this, "y", [0]);
              var call1764 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1763);
              onSelf = true;
              var call1765 = callmethod(this, "isPointOver", [1], call1764);
              if (Grace_isTrue(call1765)) {
                lineNumber = 133
                onSelf = true;
                var call1766 = callmethod(this, "bounceFrom", [1], var_left);
                if1762 = call1766;
              }
              lineNumber = 138
              var if1767 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1768 = callmethod(this, "y", [0]);
              var call1769 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1768);
              onSelf = true;
              var call1770 = callmethod(this, "isPointOver", [1], call1769);
              if (Grace_isTrue(call1770)) {
                lineNumber = 136
                onSelf = true;
                var call1771 = callmethod(this, "bounceFrom", [1], var_right);
                if1767 = call1771;
              }
              lineNumber = 138
              var block1772 = Grace_allocObject();
              block1772.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1772.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1772.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1772.methods["match"] = GraceBlock_match;
              block1772.methods["prefix?"] = GraceBlock_lift;
              block1772.receiver = this;
              block1772.className = 'block<musical:138>';
              block1772.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1773 = callmethod(this, "touchingEdge", [0]);
                return call1773;
              };
              lineNumber = 141
              var block1774 = Grace_allocObject();
              block1774.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1774.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1774.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1774.methods["match"] = GraceBlock_match;
              block1774.methods["prefix?"] = GraceBlock_lift;
              block1774.receiver = this;
              block1774.className = 'block<musical:141>';
              block1774.real = function(
              ) {
                sourceObject = this;
                lineNumber = 139
                onSelf = true;
                var call1775 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1775;
              };
              var call1776 = callmethod(Grace_prelude,"while()do", [1, 1], block1772, block1774);
              return call1776
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1751.paramCounts = [
            0,
          ];
          func1751.variableArities = [
            false,
          ];
          obj1628.methods["bounce"] = func1751;
          func1751.definitionLine = 123;
          func1751.definitionModule = "musical";
          var func1777 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1777.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 146
              var if1778 = var_done;
              lineNumber = 143
              var string1779 = new GraceString("left");
              var opresult1782 = callmethod(var_dir, "==", [1], string1779);
              if (Grace_isTrue(opresult1782)) {
                lineNumber = 145
                lineNumber = 86
                lineNumber = 145
                lineNumber = 144
                onSelf = true;
                var call1783 = callmethod(this, "angle", [0]);
                var diff1786 = callmethod(new GraceNum(360), "-", [1], call1783);
                onSelf = true;
                var call1787 = callmethod(this, "angle:=", [1], diff1786);
                if1778 = call1787;
              }
              lineNumber = 149
              var if1788 = var_done;
              lineNumber = 146
              var string1789 = new GraceString("right");
              var opresult1792 = callmethod(var_dir, "==", [1], string1789);
              if (Grace_isTrue(opresult1792)) {
                lineNumber = 148
                lineNumber = 86
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1793 = callmethod(this, "angle", [0]);
                var diff1796 = callmethod(new GraceNum(360), "-", [1], call1793);
                onSelf = true;
                var call1797 = callmethod(this, "angle:=", [1], diff1796);
                if1788 = call1797;
              }
              lineNumber = 152
              var if1798 = var_done;
              lineNumber = 149
              var string1799 = new GraceString("top");
              var opresult1802 = callmethod(var_dir, "==", [1], string1799);
              if (Grace_isTrue(opresult1802)) {
                lineNumber = 151
                lineNumber = 86
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1803 = callmethod(this, "angle", [0]);
                var diff1806 = callmethod(new GraceNum(180), "-", [1], call1803);
                onSelf = true;
                var call1807 = callmethod(this, "angle:=", [1], diff1806);
                if1798 = call1807;
              }
              lineNumber = 155
              var if1808 = var_done;
              lineNumber = 152
              var string1809 = new GraceString("bottom");
              var opresult1812 = callmethod(var_dir, "==", [1], string1809);
              if (Grace_isTrue(opresult1812)) {
                lineNumber = 154
                lineNumber = 86
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1813 = callmethod(this, "angle", [0]);
                var diff1816 = callmethod(new GraceNum(180), "-", [1], call1813);
                onSelf = true;
                var call1817 = callmethod(this, "angle:=", [1], diff1816);
                if1808 = call1817;
              }
              lineNumber = 155
              onSelf = true;
              var call1818 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 156
              onSelf = true;
              var call1819 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1819
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1777.paramCounts = [
            1,
          ];
          func1777.variableArities = [
            false,
          ];
          obj1628.methods["bounceFrom"] = func1777;
          func1777.definitionLine = 142;
          func1777.definitionModule = "musical";
          var func1820 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1820.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 162
              var if1821 = var_done;
              lineNumber = 159
              var call1822 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1824 = callmethod(this, "x", [0]);
              var opresult1826 = callmethod(call1824, ">", [1], call1822);
              if (Grace_isTrue(opresult1826)) {
                lineNumber = 160
                onSelf = true;
                var call1827 = callmethod(this, "bounceFrom", [1], var_left);
                if1821 = call1827;
              }
              lineNumber = 165
              var if1828 = var_done;
              lineNumber = 162
              var call1829 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1831 = callmethod(this, "x", [0]);
              var opresult1833 = callmethod(call1831, "<", [1], call1829);
              if (Grace_isTrue(opresult1833)) {
                lineNumber = 163
                onSelf = true;
                var call1834 = callmethod(this, "bounceFrom", [1], var_right);
                if1828 = call1834;
              }
              lineNumber = 165
              var block1835 = Grace_allocObject();
              block1835.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1835.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1835.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1835.methods["match"] = GraceBlock_match;
              block1835.methods["prefix?"] = GraceBlock_lift;
              block1835.receiver = this;
              block1835.className = 'block<musical:165>';
              block1835.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1836 = callmethod(this, "touching", [1], var_other);
                return call1836;
              };
              lineNumber = 168
              var block1837 = Grace_allocObject();
              block1837.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1837.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1837.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1837.methods["match"] = GraceBlock_match;
              block1837.methods["prefix?"] = GraceBlock_lift;
              block1837.receiver = this;
              block1837.className = 'block<musical:168>';
              block1837.real = function(
              ) {
                sourceObject = this;
                lineNumber = 166
                onSelf = true;
                var call1838 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1838;
              };
              var call1839 = callmethod(Grace_prelude,"while()do", [1, 1], block1835, block1837);
              return call1839
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1820.paramCounts = [
            1,
          ];
          func1820.variableArities = [
            false,
          ];
          obj1628.methods["bounceOff"] = func1820;
          func1820.definitionLine = 158;
          func1820.definitionModule = "musical";
          var func1840 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1840.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 170
              onSelf = true;
              var call1841 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1842 = callmethod(this, "y", [0]);
              var call1843 = callmethod(var_point,"x()y", [1, 1], call1841, call1842);
              var call1844 = callmethod(var_other,"isPointOver", [1], call1843);
              return call1844
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1840.paramCounts = [
            1,
          ];
          func1840.variableArities = [
            false,
          ];
          obj1628.methods["touching"] = func1840;
          func1840.definitionLine = 169;
          func1840.definitionModule = "musical";
          var func1845 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1845.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 176
              var if1846 = var_done;
              lineNumber = 173
              onSelf = true;
              var call1847 = callmethod(this, "y", [0]);
              var call1849 = callmethod(var_other,"y", [0]);
              var opresult1851 = callmethod(call1849, "!=", [1], call1847);
              onSelf = true;
              var call1853 = callmethod(this, "x", [0]);
              var call1855 = callmethod(var_other,"x", [0]);
              var opresult1857 = callmethod(call1855, "!=", [1], call1853);
              var opresult1859 = callmethod(opresult1857, "||", [1], opresult1851);
              if (Grace_isTrue(opresult1859)) {
                lineNumber = 175
                lineNumber = 173
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call1862 = callmethod(this, "x", [0]);
                var call1864 = callmethod(var_other,"x", [0]);
                var diff1866 = callmethod(call1864, "-", [1], call1862);
                onSelf = true;
                var call1867 = callmethod(this, "y", [0]);
                var call1869 = callmethod(var_other,"y", [0]);
                var diff1871 = callmethod(call1869, "-", [1], call1867);
                var call1872 = callmethod(var_trig,"atan2", [2], diff1866, diff1871);
                var prod1874 = callmethod(call1872, "*", [1], new GraceNum(180));
                var quotient1876 = callmethod(prod1874, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1877 = callmethod(this, "angle:=", [1], quotient1876);
                if1846 = call1877;
              }
              lineNumber = 176
              onSelf = true;
              var call1878 = callmethod(this, "normaliseAngle", [0]);
              return call1878
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
          obj1628.methods["face"] = func1845;
          func1845.definitionLine = 172;
          func1845.definitionModule = "musical";
          var func1879 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1879.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var string1880 = new GraceString("2d");
              var call1881 = callmethod(var_backingCanvas,"getContext", [1], string1880);
              onSelf = true;
              var call1882 = callmethod(this, "draw", [1], call1881);
              return call1882
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
          obj1628.methods["stamp"] = func1879;
          func1879.definitionLine = 178;
          func1879.definitionModule = "musical";
          sourceObject = obj1628;
          lineNumber = 49
          var call1883 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1884 = callmethod(call1883, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1885 = callmethod(call1884, "initialise", [0]);
          sourceObject = obj1628;
          lineNumber = 50
          var call1886 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1628;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1628;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1628;
          lineNumber = 53
          var call1887 = callmethod(var_collections,"list", [0]);
          var call1888 = callmethod(call1887,"new", [0]);
          obj1628.data["alwaysBlocks"] = call1888;
          var reader_musical_alwaysBlocks_1889 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1889.def = true;
          reader_musical_alwaysBlocks_1889.confidential = true;
          obj1628.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1889;
          lineNumber = 54;
          moduleName = "musical";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1888)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1628;
          lineNumber = 55
          lineNumber = 54
          var quotient1892 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1628.data["x"] = quotient1892;
          var reader_musical_x_1893 = function() {
            return this.data["x"];
          }
          obj1628.methods["x"] = reader_musical_x_1893;
          obj1628.data["x"] = quotient1892;
          var writer_musical_x_1893 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1628.methods["x:="] = writer_musical_x_1893;
          writer_musical_x_1893.confidential = true;
          lineNumber = 55;
          moduleName = "musical";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1892)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1628.mutable = true;
          sourceObject = obj1628;
          lineNumber = 56
          lineNumber = 55
          var quotient1896 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1628.data["y"] = quotient1896;
          var reader_musical_y_1897 = function() {
            return this.data["y"];
          }
          obj1628.methods["y"] = reader_musical_y_1897;
          obj1628.data["y"] = quotient1896;
          var writer_musical_y_1897 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1628.methods["y:="] = writer_musical_y_1897;
          writer_musical_y_1897.confidential = true;
          lineNumber = 56;
          moduleName = "musical";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1896)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1628.mutable = true;
          sourceObject = obj1628;
          lineNumber = 56
          onSelf = true;
          var call1898 = callmethod(this, "x", [0]);
          obj1628.data["destX"] = call1898;
          var reader_musical_destX_1899 = function() {
            return this.data["destX"];
          }
          obj1628.methods["destX"] = reader_musical_destX_1899;
          obj1628.data["destX"] = call1898;
          var writer_musical_destX_1899 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1628.methods["destX:="] = writer_musical_destX_1899;
          reader_musical_destX_1899.confidential = true;
          writer_musical_destX_1899.confidential = true;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1898)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1628.mutable = true;
          sourceObject = obj1628;
          lineNumber = 57
          onSelf = true;
          var call1900 = callmethod(this, "y", [0]);
          obj1628.data["destY"] = call1900;
          var reader_musical_destY_1901 = function() {
            return this.data["destY"];
          }
          obj1628.methods["destY"] = reader_musical_destY_1901;
          obj1628.data["destY"] = call1900;
          var writer_musical_destY_1901 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1628.methods["destY:="] = writer_musical_destY_1901;
          reader_musical_destY_1901.confidential = true;
          writer_musical_destY_1901.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1900)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1628.mutable = true;
          sourceObject = obj1628;
          lineNumber = 58
          obj1628.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1902 = function() {
            return this.data["angle"];
          }
          obj1628.methods["angle"] = reader_musical_angle_1902;
          obj1628.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1902 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1628.methods["angle:="] = writer_musical_angle_1902;
          reader_musical_angle_1902.confidential = true;
          writer_musical_angle_1902.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1628.mutable = true;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          sourceObject = obj1628;
          superDepth = origSuperDepth;
        }
        obj_init_1628.apply(inheritingObject, []);
        return obj1628
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1349.methods["new()object"] = func1627;
    var func1903 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 48
        var string1904 = new GraceString("class drawable");
        return string1904
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1903.paramCounts = [
    ];
    func1903.variableArities = [
    ];
    obj1349.methods["asDebugString"] = func1903;
    func1903.definitionLine = 48;
    func1903.definitionModule = "musical";
    sourceObject = obj1349;
    sourceObject = obj1349;
    superDepth = origSuperDepth;
  }
  obj_init_1349.apply(obj1349, []);
  var var_drawable = obj1349;
  lineNumber = 183
  lineNumber = 220
  lineNumber = 256
  lineNumber = 299
  lineNumber = 316
  var obj1905 = Grace_allocObject();
  obj1905.definitionModule = "musical";
  obj1905.definitionLine = 316;
  obj1905.outer = this;
  var reader_musical_outer_1906 = function() {
    return this.outer;
  }
  obj1905.methods["outer"] = reader_musical_outer_1906;
  function obj_init_1905() {
    var origSuperDepth = superDepth;
    superDepth = obj1905;
    obj1905.annotations = [];
    var func1907 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1907.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 319
        onSelf = true;
        var call1908 = callmethod(this, "position", [0]);
        var call1909 = callmethod(call1908,"x", [0]);
        return call1909
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
    obj1905.methods["x"] = func1907;
    func1907.definitionLine = 318;
    func1907.definitionModule = "musical";
    var func1910 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1910.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1911 = callmethod(this, "position", [0]);
        var call1912 = callmethod(call1911,"y", [0]);
        return call1912
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
    obj1905.methods["y"] = func1910;
    func1910.definitionLine = 321;
    func1910.definitionModule = "musical";
    var func1913 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1913.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1914 = callmethod(this, "position", [0]);
        return call1914
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
    obj1905.methods["location"] = func1913;
    func1913.definitionLine = 324;
    func1913.definitionModule = "musical";
    sourceObject = obj1905;
    lineNumber = 317
    var call1915 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1905.data["position"] = call1915;
    var reader_musical_position_1916 = function() {
      return this.data["position"];
    }
    obj1905.methods["position"] = reader_musical_position_1916;
    obj1905.data["position"] = call1915;
    var writer_musical_position_1916 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1905.methods["position:="] = writer_musical_position_1916;
    lineNumber = 317;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1915)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1905.mutable = true;
    sourceObject = obj1905;
    sourceObject = obj1905;
    sourceObject = obj1905;
    superDepth = origSuperDepth;
  }
  obj_init_1905.apply(obj1905, []);
  var var_mouse = obj1905;
  lineNumber = 322
  var func1917 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1917.paramCounts[0])
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
  func1917.paramCounts = [
    0,
  ];
  func1917.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1917;
  func1917.definitionLine = 322;
  func1917.definitionModule = "musical";
  lineNumber = 316;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 426
  lineNumber = 489
  lineNumber = 522
  var var_octave = new GraceNum(4);
  lineNumber = 322
  var func1918 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1918.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (octave)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 522
      return var_octave
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
  this.methods["octave"] = func1918;
  func1918.definitionLine = 322;
  func1918.definitionModule = "musical";
  lineNumber = 322
  var func1919 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1919.paramCounts[0])
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
  func1919.paramCounts = [
    1,
  ];
  func1919.variableArities = [
    false,
  ];
  this.methods["octave:="] = func1919;
  func1919.definitionLine = 322;
  func1919.definitionModule = "musical";
  lineNumber = 522;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_octave)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'octave' to be of type Unknown"))
  lineNumber = 524
  lineNumber = 525
  lineNumber = 524
  var bool1920 = new GraceBoolean(false)
  var var_applyFlat = bool1920;
  lineNumber = 322
  var func1921 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1921.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyFlat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 524
      return var_applyFlat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1921.paramCounts = [
    0,
  ];
  func1921.variableArities = [
    false,
  ];
  this.methods["applyFlat"] = func1921;
  func1921.definitionLine = 322;
  func1921.definitionModule = "musical";
  lineNumber = 322
  var func1922 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1922.paramCounts[0])
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
  func1922.paramCounts = [
    1,
  ];
  func1922.variableArities = [
    false,
  ];
  this.methods["applyFlat:="] = func1922;
  func1922.definitionLine = 322;
  func1922.definitionModule = "musical";
  lineNumber = 525;
  moduleName = "musical";
  lineNumber = 524
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyFlat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyFlat' to be of type Unknown"))
  lineNumber = 527
  lineNumber = 525
  var bool1923 = new GraceBoolean(false)
  var var_applySharp = bool1923;
  lineNumber = 322
  var func1924 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1924.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applySharp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 525
      return var_applySharp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1924.paramCounts = [
    0,
  ];
  func1924.variableArities = [
    false,
  ];
  this.methods["applySharp"] = func1924;
  func1924.definitionLine = 322;
  func1924.definitionModule = "musical";
  lineNumber = 322
  var func1925 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1925.paramCounts[0])
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
  func1925.paramCounts = [
    1,
  ];
  func1925.variableArities = [
    false,
  ];
  this.methods["applySharp:="] = func1925;
  func1925.definitionLine = 322;
  func1925.definitionModule = "musical";
  lineNumber = 527;
  moduleName = "musical";
  lineNumber = 525
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applySharp)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applySharp' to be of type Unknown"))
  lineNumber = 527
  lineNumber = 528
  lineNumber = 527
  var bool1926 = new GraceBoolean(false)
  var var_applyChorus = bool1926;
  lineNumber = 322
  var func1927 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1927.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyChorus)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 527
      return var_applyChorus
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1927.paramCounts = [
    0,
  ];
  func1927.variableArities = [
    false,
  ];
  this.methods["applyChorus"] = func1927;
  func1927.definitionLine = 322;
  func1927.definitionModule = "musical";
  lineNumber = 322
  var func1928 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1928.paramCounts[0])
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
  func1928.paramCounts = [
    1,
  ];
  func1928.variableArities = [
    false,
  ];
  this.methods["applyChorus:="] = func1928;
  func1928.definitionLine = 322;
  func1928.definitionModule = "musical";
  lineNumber = 528;
  moduleName = "musical";
  lineNumber = 527
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyChorus)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyChorus' to be of type Unknown"))
  lineNumber = 529
  lineNumber = 528
  var bool1929 = new GraceBoolean(false)
  var var_applyReverb = bool1929;
  lineNumber = 322
  var func1930 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1930.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyReverb)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 528
      return var_applyReverb
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1930.paramCounts = [
    0,
  ];
  func1930.variableArities = [
    false,
  ];
  this.methods["applyReverb"] = func1930;
  func1930.definitionLine = 322;
  func1930.definitionModule = "musical";
  lineNumber = 322
  var func1931 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1931.paramCounts[0])
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
  func1931.paramCounts = [
    1,
  ];
  func1931.variableArities = [
    false,
  ];
  this.methods["applyReverb:="] = func1931;
  func1931.definitionLine = 322;
  func1931.definitionModule = "musical";
  lineNumber = 529;
  moduleName = "musical";
  lineNumber = 528
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyReverb)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyReverb' to be of type Unknown"))
  lineNumber = 530
  lineNumber = 529
  var bool1932 = new GraceBoolean(false)
  var var_applyAutowah = bool1932;
  lineNumber = 322
  var func1933 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1933.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyAutowah)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 529
      return var_applyAutowah
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1933.paramCounts = [
    0,
  ];
  func1933.variableArities = [
    false,
  ];
  this.methods["applyAutowah"] = func1933;
  func1933.definitionLine = 322;
  func1933.definitionModule = "musical";
  lineNumber = 322
  var func1934 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1934.paramCounts[0])
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
  func1934.paramCounts = [
    1,
  ];
  func1934.variableArities = [
    false,
  ];
  this.methods["applyAutowah:="] = func1934;
  func1934.definitionLine = 322;
  func1934.definitionModule = "musical";
  lineNumber = 530;
  moduleName = "musical";
  lineNumber = 529
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyAutowah)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyAutowah' to be of type Unknown"))
  lineNumber = 532
  lineNumber = 530
  var bool1935 = new GraceBoolean(false)
  var var_applyCheby = bool1935;
  lineNumber = 322
  var func1936 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1936.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (applyCheby)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 530
      return var_applyCheby
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1936.paramCounts = [
    0,
  ];
  func1936.variableArities = [
    false,
  ];
  this.methods["applyCheby"] = func1936;
  func1936.definitionLine = 322;
  func1936.definitionModule = "musical";
  lineNumber = 322
  var func1937 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1937.paramCounts[0])
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
  func1937.paramCounts = [
    1,
  ];
  func1937.variableArities = [
    false,
  ];
  this.methods["applyCheby:="] = func1937;
  func1937.definitionLine = 322;
  func1937.definitionModule = "musical";
  lineNumber = 532;
  moduleName = "musical";
  lineNumber = 530
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_applyCheby)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'applyCheby' to be of type Unknown"))
  lineNumber = 532
  lineNumber = 537
  lineNumber = 532
  var bool1938 = new GraceBoolean(true)
  var var_firstPass = bool1938;
  lineNumber = 322
  var func1939 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1939.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (firstPass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 532
      return var_firstPass
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1939.paramCounts = [
    0,
  ];
  func1939.variableArities = [
    false,
  ];
  this.methods["firstPass"] = func1939;
  func1939.definitionLine = 322;
  func1939.definitionModule = "musical";
  lineNumber = 322
  var func1940 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1940.paramCounts[0])
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
  func1940.paramCounts = [
    1,
  ];
  func1940.variableArities = [
    false,
  ];
  this.methods["firstPass:="] = func1940;
  func1940.definitionLine = 322;
  func1940.definitionModule = "musical";
  lineNumber = 537;
  moduleName = "musical";
  lineNumber = 532
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_firstPass)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'firstPass' to be of type Unknown"))
  lineNumber = 537
  lineNumber = 568
  lineNumber = 578
  lineNumber = 585
  lineNumber = 596
  lineNumber = 605
  lineNumber = 610
  lineNumber = 615
  lineNumber = 620
  lineNumber = 625
  lineNumber = 630
  lineNumber = 635
  lineNumber = 642
  lineNumber = 659
  lineNumber = 665
  lineNumber = 671
  lineNumber = 677
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "fresh:image:\n always\n url\n touchingEdge\n bounceOff\n imgTag\n step\n destX:=\n whenever()do\n destY\n x:=\n y:=\n normaliseAngle\n forward\n url:=\n angle:=\n mousedown\n isPointOver\n height\n destX\n bounce\n destY:=\n touching\n height:=\n turn\n tick\n draw\n alwaysBlocks\n width:=\n x\n y\n moveTo\n jumpTo\n width\n stamp\n angle\n face\n bounceFrom\nfresh-methods:\n rectangle\n circle\n image\n value\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\nconstructors-of:point:\n x()y\nmethods-of:point.x()y:\n up\n down\n x\n y\n left\n right\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n octave\n octave:=\n applyFlat\n applyFlat:=\n applySharp\n applySharp:=\n applyChorus\n applyChorus:=\n applyReverb\n applyReverb:=\n applyAutowah\n applyAutowah:=\n applyCheby\n applyCheby:=\n firstPass\n firstPass:=\n Note\n C\n D\n E\n F\n G\n A\n B\n flat\n sharp\n octave()on\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n arpeggio\n Effect\n Chorus\n Reverb\n Autowah\n Cheby\n SetBPM\nfresh:circle:\n always\n touchingEdge\n bounceOff\n step\n destX:=\n whenever()do\n destY\n colour:=\n x:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n mousedown\n isPointOver\n destX\n bounce\n destY:=\n touching\n turn\n tick\n draw\n alwaysBlocks\n jumpTo\n x\n y\n moveTo\n radius:=\n stamp\n angle\n radius\n face\n bounceFrom\nfresh:rectangle:\n always\n touchingEdge\n bounceOff\n step\n destX:=\n whenever()do\n destY\n colour:=\n x:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n mousedown\n isPointOver\n height\n destX\n bounce\n destY:=\n touching\n height:=\n turn\n tick\n draw\n alwaysBlocks\n asString\n width:=\n x\n y\n moveTo\n jumpTo\n width\n stamp\n angle\n face\n bounceFrom\nmethods-of:drawable.new:\n always\n touchingEdge\n whenever()do\n turn\n step\n destX:=\n destY:=\n touching\n bounceOff\n destX\n destY\n tick\n alwaysBlocks\n draw\n x:=\n y:=\n normaliseAngle\n bounce\n forward\n x\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n stamp\n angle\n face\n bounceFrom\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n always\n touchingEdge\n bounceOff\n step\n destX:=\n whenever()do\n destY\n colour:=\n x:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n mousedown\n isPointOver\n destX\n bounce\n destY:=\n touching\n turn\n tick\n draw\n alwaysBlocks\n label:=\n x\n y\n moveTo\n jumpTo\n label\n stamp\n angle\n face\n bounceFrom\nconfidential:\n";
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
    "        // ev.preventDefault",
    "        // stop",
    "        // }",
    "",
    "        if(stopRunning) then {",
    "            dom.window.console.log(\"if stopRunning\");",
    "",
    "            ev.preventDefault",
    "            stopRunning := false",
    "            start",
    "            dom.window.t_play();",
    "        } else {",
    "            dom.window.console.log(\"if !stopRunning\");",
    "            ev.preventDefault",
    "            stop",
    "        }",
    "",
    "",
    "        dom.window.console.log(\"mousedown\");",
    "",
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
    "",
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
