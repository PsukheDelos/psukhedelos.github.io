function gracecode_musical () {
  this.definitionModule = "musical";
  this.definitionLine = 0;
  lineNumber = 186
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rectangle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 187
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "musical";
      obj1.definitionLine = 187;
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
            lineNumber = 194
            lineNumber = 1
            lineNumber = 193
            onSelf = true;
            var call4 = callmethod(this, "colour", [0]);
            var call5 = callmethod(var_ctx,"fillStyle:=", [1], call4);
            lineNumber = 194
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
        func3.definitionLine = 192;
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
            lineNumber = 200
            var if26 = var_done;
            lineNumber = 197
            onSelf = true;
            var call28 = callmethod(this, "width", [0]);
            var quotient30 = callmethod(call28, "/", [1], new GraceNum(2));
            onSelf = true;
            var call32 = callmethod(this, "x", [0]);
            var diff34 = callmethod(call32, "-", [1], quotient30);
            var call36 = callmethod(var_p,"x", [0]);
            var opresult38 = callmethod(call36, "<", [1], diff34);
            if (Grace_isTrue(opresult38)) {
              lineNumber = 199
              lineNumber = 198
              var bool39 = new GraceBoolean(false)
              return bool39
            }
            lineNumber = 203
            var if40 = var_done;
            lineNumber = 200
            onSelf = true;
            var call42 = callmethod(this, "width", [0]);
            var quotient44 = callmethod(call42, "/", [1], new GraceNum(2));
            onSelf = true;
            var call46 = callmethod(this, "x", [0]);
            var opresult48 = callmethod(call46, "+", [1], quotient44);
            var call50 = callmethod(var_p,"x", [0]);
            var opresult52 = callmethod(call50, ">", [1], opresult48);
            if (Grace_isTrue(opresult52)) {
              lineNumber = 202
              lineNumber = 201
              var bool53 = new GraceBoolean(false)
              return bool53
            }
            lineNumber = 206
            var if54 = var_done;
            lineNumber = 203
            onSelf = true;
            var call56 = callmethod(this, "height", [0]);
            var quotient58 = callmethod(call56, "/", [1], new GraceNum(2));
            onSelf = true;
            var call60 = callmethod(this, "y", [0]);
            var diff62 = callmethod(call60, "-", [1], quotient58);
            var call64 = callmethod(var_p,"y", [0]);
            var opresult66 = callmethod(call64, "<", [1], diff62);
            if (Grace_isTrue(opresult66)) {
              lineNumber = 205
              lineNumber = 204
              var bool67 = new GraceBoolean(false)
              return bool67
            }
            lineNumber = 209
            var if68 = var_done;
            lineNumber = 206
            onSelf = true;
            var call70 = callmethod(this, "height", [0]);
            var quotient72 = callmethod(call70, "/", [1], new GraceNum(2));
            onSelf = true;
            var call74 = callmethod(this, "y", [0]);
            var opresult76 = callmethod(call74, "+", [1], quotient72);
            var call78 = callmethod(var_p,"y", [0]);
            var opresult80 = callmethod(call78, ">", [1], opresult76);
            if (Grace_isTrue(opresult80)) {
              lineNumber = 208
              lineNumber = 207
              var bool81 = new GraceBoolean(false)
              return bool81
            }
            lineNumber = 210
            lineNumber = 209
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
        func25.definitionLine = 196;
        func25.definitionModule = "musical";
        var func83 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func83.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 213
            lineNumber = 212
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
        func83.definitionLine = 211;
        func83.definitionModule = "musical";
        sourceObject = obj1;
        lineNumber = 188
        var call85 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj1.superobj = call85;
        obj1._value = call85._value;
        sourceObject = obj1;
        lineNumber = 189
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
        lineNumber = 190;
        moduleName = "musical";
        lineNumber = 189
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 190
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
        lineNumber = 191;
        moduleName = "musical";
        lineNumber = 190
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 191
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
        lineNumber = 192;
        moduleName = "musical";
        lineNumber = 191
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
  func0.definitionLine = 186;
  func0.definitionModule = "musical";
  var func90 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj91 = Grace_allocObject();
      obj91.definitionModule = "musical";
      obj91.definitionLine = 187;
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
            lineNumber = 194
            lineNumber = 206
            lineNumber = 193
            onSelf = true;
            var call94 = callmethod(this, "colour", [0]);
            var call95 = callmethod(var_ctx,"fillStyle:=", [1], call94);
            lineNumber = 194
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
        func93.definitionLine = 192;
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
            lineNumber = 200
            var if116 = var_done;
            lineNumber = 197
            onSelf = true;
            var call118 = callmethod(this, "width", [0]);
            var quotient120 = callmethod(call118, "/", [1], new GraceNum(2));
            onSelf = true;
            var call122 = callmethod(this, "x", [0]);
            var diff124 = callmethod(call122, "-", [1], quotient120);
            var call126 = callmethod(var_p,"x", [0]);
            var opresult128 = callmethod(call126, "<", [1], diff124);
            if (Grace_isTrue(opresult128)) {
              lineNumber = 199
              lineNumber = 198
              var bool129 = new GraceBoolean(false)
              return bool129
            }
            lineNumber = 203
            var if130 = var_done;
            lineNumber = 200
            onSelf = true;
            var call132 = callmethod(this, "width", [0]);
            var quotient134 = callmethod(call132, "/", [1], new GraceNum(2));
            onSelf = true;
            var call136 = callmethod(this, "x", [0]);
            var opresult138 = callmethod(call136, "+", [1], quotient134);
            var call140 = callmethod(var_p,"x", [0]);
            var opresult142 = callmethod(call140, ">", [1], opresult138);
            if (Grace_isTrue(opresult142)) {
              lineNumber = 202
              lineNumber = 201
              var bool143 = new GraceBoolean(false)
              return bool143
            }
            lineNumber = 206
            var if144 = var_done;
            lineNumber = 203
            onSelf = true;
            var call146 = callmethod(this, "height", [0]);
            var quotient148 = callmethod(call146, "/", [1], new GraceNum(2));
            onSelf = true;
            var call150 = callmethod(this, "y", [0]);
            var diff152 = callmethod(call150, "-", [1], quotient148);
            var call154 = callmethod(var_p,"y", [0]);
            var opresult156 = callmethod(call154, "<", [1], diff152);
            if (Grace_isTrue(opresult156)) {
              lineNumber = 205
              lineNumber = 204
              var bool157 = new GraceBoolean(false)
              return bool157
            }
            lineNumber = 209
            var if158 = var_done;
            lineNumber = 206
            onSelf = true;
            var call160 = callmethod(this, "height", [0]);
            var quotient162 = callmethod(call160, "/", [1], new GraceNum(2));
            onSelf = true;
            var call164 = callmethod(this, "y", [0]);
            var opresult166 = callmethod(call164, "+", [1], quotient162);
            var call168 = callmethod(var_p,"y", [0]);
            var opresult170 = callmethod(call168, ">", [1], opresult166);
            if (Grace_isTrue(opresult170)) {
              lineNumber = 208
              lineNumber = 207
              var bool171 = new GraceBoolean(false)
              return bool171
            }
            lineNumber = 210
            lineNumber = 209
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
        func115.definitionLine = 196;
        func115.definitionModule = "musical";
        var func173 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func173.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "musical";
          try {
            lineNumber = 213
            lineNumber = 212
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
        func173.definitionLine = 211;
        func173.definitionModule = "musical";
        sourceObject = obj91;
        lineNumber = 188
        var call175 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj91.superobj = call175;
        obj91._value = call175._value;
        sourceObject = obj91;
        lineNumber = 189
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
        lineNumber = 190;
        moduleName = "musical";
        lineNumber = 189
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 190
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
        lineNumber = 191;
        moduleName = "musical";
        lineNumber = 190
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 191
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
        lineNumber = 192;
        moduleName = "musical";
        lineNumber = 191
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
  lineNumber = 223
  var type180 = new GraceType("SniffCircle");
  var var_SniffCircle = type180;
  type180.typeMethods.push("x");
  type180.typeMethods.push("y");
  type180.typeMethods.push("radius");
  type180.typeMethods.push("colour");
  lineNumber = 206
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
  func181.definitionLine = 206;
  func181.definitionModule = "musical";
  var type_SniffCircle = var_SniffCircle;
  lineNumber = 223
  var func182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func182.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (circle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 224
      var obj183 = Grace_allocObject();
      obj183.definitionModule = "musical";
      obj183.definitionLine = 224;
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
            lineNumber = 230
            lineNumber = 206
            lineNumber = 229
            onSelf = true;
            var call186 = callmethod(this, "colour", [0]);
            var call187 = callmethod(var_ctx,"fillStyle:=", [1], call186);
            lineNumber = 230
            var call188 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 231
            onSelf = true;
            var call189 = callmethod(this, "x", [0]);
            onSelf = true;
            var call190 = callmethod(this, "y", [0]);
            onSelf = true;
            var call191 = callmethod(this, "radius", [0]);
            var call192 = callmethod(var_ctx,"arc", [5], call189, call190, call191, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 232
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
        func185.definitionLine = 228;
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
            lineNumber = 236
            lineNumber = 235
            onSelf = true;
            var call195 = callmethod(this, "x", [0]);
            var call197 = callmethod(var_p,"x", [0]);
            var diff199 = callmethod(call197, "-", [1], call195);
            var var_dx = diff199;
            lineNumber = 236;
            moduleName = "musical";
            lineNumber = 235
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 237
            lineNumber = 236
            onSelf = true;
            var call200 = callmethod(this, "y", [0]);
            var call202 = callmethod(var_p,"y", [0]);
            var diff204 = callmethod(call202, "-", [1], call200);
            var var_dy = diff204;
            lineNumber = 237;
            moduleName = "musical";
            lineNumber = 236
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 238
            lineNumber = 237
            var prod208 = callmethod(var_dy, "*", [1], var_dy);
            var prod212 = callmethod(var_dx, "*", [1], var_dx);
            var opresult214 = callmethod(prod212, "+", [1], prod208);
            var opresult216 = callmethod(opresult214, "^", [1], new GraceNum(0.5));
            var var_dist = opresult216;
            lineNumber = 238;
            moduleName = "musical";
            lineNumber = 237
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 241
            var if217 = var_done;
            lineNumber = 238
            onSelf = true;
            var call218 = callmethod(this, "radius", [0]);
            var opresult221 = callmethod(var_dist, "<=", [1], call218);
            if (Grace_isTrue(opresult221)) {
              lineNumber = 240
              lineNumber = 239
              var bool222 = new GraceBoolean(true)
              return bool222
            }
            lineNumber = 242
            lineNumber = 241
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
        func194.definitionLine = 234;
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
            lineNumber = 254
            var if225 = var_done;
            lineNumber = 244
            var call226 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call226)) {
              lineNumber = 246
              lineNumber = 245
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
              lineNumber = 246;
              moduleName = "musical";
              lineNumber = 245
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 249
              var if246 = var_done;
              lineNumber = 246
              var opresult249 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult249)) {
                lineNumber = 248
                lineNumber = 247
                var bool250 = new GraceBoolean(true)
                return bool250
              }
              lineNumber = 252
              var if251 = var_done;
              lineNumber = 249
              onSelf = true;
              var call252 = callmethod(this, "radius", [0]);
              var call254 = callmethod(var_other,"radius", [0]);
              var opresult256 = callmethod(call254, "+", [1], call252);
              var opresult260 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult262 = callmethod(opresult260, "<", [1], opresult256);
              if (Grace_isTrue(opresult262)) {
                lineNumber = 251
                lineNumber = 250
                var bool263 = new GraceBoolean(true)
                return bool263
              }
              lineNumber = 253
              lineNumber = 252
              var bool264 = new GraceBoolean(false)
              return bool264
            }
            lineNumber = 254
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
        func224.definitionLine = 243;
        func224.definitionModule = "musical";
        sourceObject = obj183;
        lineNumber = 225
        var call266 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj183.superobj = call266;
        obj183._value = call266._value;
        sourceObject = obj183;
        lineNumber = 226
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
        lineNumber = 227;
        moduleName = "musical";
        lineNumber = 226
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        lineNumber = 227
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
        lineNumber = 228;
        moduleName = "musical";
        lineNumber = 227
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
  func182.definitionLine = 223;
  func182.definitionModule = "musical";
  var func270 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj271 = Grace_allocObject();
      obj271.definitionModule = "musical";
      obj271.definitionLine = 224;
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
            lineNumber = 230
            lineNumber = 249
            lineNumber = 229
            onSelf = true;
            var call274 = callmethod(this, "colour", [0]);
            var call275 = callmethod(var_ctx,"fillStyle:=", [1], call274);
            lineNumber = 230
            var call276 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 231
            onSelf = true;
            var call277 = callmethod(this, "x", [0]);
            onSelf = true;
            var call278 = callmethod(this, "y", [0]);
            onSelf = true;
            var call279 = callmethod(this, "radius", [0]);
            var call280 = callmethod(var_ctx,"arc", [5], call277, call278, call279, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 232
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
        func273.definitionLine = 228;
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
            lineNumber = 236
            lineNumber = 235
            onSelf = true;
            var call283 = callmethod(this, "x", [0]);
            var call285 = callmethod(var_p,"x", [0]);
            var diff287 = callmethod(call285, "-", [1], call283);
            var var_dx = diff287;
            lineNumber = 236;
            moduleName = "musical";
            lineNumber = 235
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 237
            lineNumber = 236
            onSelf = true;
            var call288 = callmethod(this, "y", [0]);
            var call290 = callmethod(var_p,"y", [0]);
            var diff292 = callmethod(call290, "-", [1], call288);
            var var_dy = diff292;
            lineNumber = 237;
            moduleName = "musical";
            lineNumber = 236
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 238
            lineNumber = 237
            var prod296 = callmethod(var_dy, "*", [1], var_dy);
            var prod300 = callmethod(var_dx, "*", [1], var_dx);
            var opresult302 = callmethod(prod300, "+", [1], prod296);
            var opresult304 = callmethod(opresult302, "^", [1], new GraceNum(0.5));
            var var_dist = opresult304;
            lineNumber = 238;
            moduleName = "musical";
            lineNumber = 237
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 241
            var if305 = var_done;
            lineNumber = 238
            onSelf = true;
            var call306 = callmethod(this, "radius", [0]);
            var opresult309 = callmethod(var_dist, "<=", [1], call306);
            if (Grace_isTrue(opresult309)) {
              lineNumber = 240
              lineNumber = 239
              var bool310 = new GraceBoolean(true)
              return bool310
            }
            lineNumber = 242
            lineNumber = 241
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
        func282.definitionLine = 234;
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
            lineNumber = 254
            var if313 = var_done;
            lineNumber = 244
            var call314 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call314)) {
              lineNumber = 246
              lineNumber = 245
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
              lineNumber = 246;
              moduleName = "musical";
              lineNumber = 245
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 249
              var if334 = var_done;
              lineNumber = 246
              var opresult337 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult337)) {
                lineNumber = 248
                lineNumber = 247
                var bool338 = new GraceBoolean(true)
                return bool338
              }
              lineNumber = 252
              var if339 = var_done;
              lineNumber = 249
              onSelf = true;
              var call340 = callmethod(this, "radius", [0]);
              var call342 = callmethod(var_other,"radius", [0]);
              var opresult344 = callmethod(call342, "+", [1], call340);
              var opresult348 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult350 = callmethod(opresult348, "<", [1], opresult344);
              if (Grace_isTrue(opresult350)) {
                lineNumber = 251
                lineNumber = 250
                var bool351 = new GraceBoolean(true)
                return bool351
              }
              lineNumber = 253
              lineNumber = 252
              var bool352 = new GraceBoolean(false)
              return bool352
            }
            lineNumber = 254
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
        func312.definitionLine = 243;
        func312.definitionModule = "musical";
        sourceObject = obj271;
        lineNumber = 225
        var call354 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj271.superobj = call354;
        obj271._value = call354._value;
        sourceObject = obj271;
        lineNumber = 226
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
        lineNumber = 227;
        moduleName = "musical";
        lineNumber = 226
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        lineNumber = 227
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
        lineNumber = 228;
        moduleName = "musical";
        lineNumber = 227
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
  lineNumber = 259
  var func358 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func358.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 260
      var obj359 = Grace_allocObject();
      obj359.definitionModule = "musical";
      obj359.definitionLine = 260;
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
            lineNumber = 266
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
        func361.definitionLine = 265;
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
            lineNumber = 270
            lineNumber = 266
            lineNumber = 269
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
        func364.definitionLine = 268;
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
            lineNumber = 272
            var call368 = callmethod(var_ctx,"save", [0]);
            lineNumber = 273
            onSelf = true;
            var call369 = callmethod(this, "x", [0]);
            onSelf = true;
            var call370 = callmethod(this, "y", [0]);
            var call371 = callmethod(var_ctx,"translate", [2], call369, call370);
            lineNumber = 274
            onSelf = true;
            var call375 = callmethod(this, "angle", [0]);
            var opresult377 = callmethod(call375, "+", [1], new GraceNum(180));
            var call378 = callmethod(opresult377,"prefix-", [0]);
            var quotient380 = callmethod(call378, "/", [1], new GraceNum(180));
            var prod382 = callmethod(quotient380, "*", [1], new GraceNum(3.1415));
            var call383 = callmethod(var_ctx,"rotate", [1], prod382);
            lineNumber = 275
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
            lineNumber = 276
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
        func367.definitionLine = 271;
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
            lineNumber = 281
            onSelf = true;
            var call403 = callmethod(this, "angle", [0]);
            var opresult405 = callmethod(call403, "+", [1], new GraceNum(180));
            var call406 = callmethod(opresult405,"prefix-", [0]);
            var quotient408 = callmethod(call406, "/", [1], new GraceNum(180));
            var prod410 = callmethod(quotient408, "*", [1], new GraceNum(3.1415));
            var call411 = callmethod(var_trig,"cos", [1], prod410);
            var var_c = call411;
            lineNumber = 281;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 282
            onSelf = true;
            var call415 = callmethod(this, "angle", [0]);
            var opresult417 = callmethod(call415, "+", [1], new GraceNum(180));
            var call418 = callmethod(opresult417,"prefix-", [0]);
            var quotient420 = callmethod(call418, "/", [1], new GraceNum(180));
            var prod422 = callmethod(quotient420, "*", [1], new GraceNum(3.1415));
            var call423 = callmethod(var_trig,"sin", [1], prod422);
            var var_s = call423;
            lineNumber = 282;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 284
            lineNumber = 283
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
            lineNumber = 284;
            moduleName = "musical";
            lineNumber = 283
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 285
            lineNumber = 284
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
            lineNumber = 285;
            moduleName = "musical";
            lineNumber = 284
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 288
            var if462 = var_done;
            lineNumber = 285
            onSelf = true;
            var call464 = callmethod(this, "width", [0]);
            var call465 = callmethod(call464,"prefix-", [0]);
            var quotient467 = callmethod(call465, "/", [1], new GraceNum(2));
            var opresult470 = callmethod(var_rotatedX, "<", [1], quotient467);
            if (Grace_isTrue(opresult470)) {
              lineNumber = 287
              lineNumber = 286
              var bool471 = new GraceBoolean(false)
              return bool471
            }
            lineNumber = 291
            var if472 = var_done;
            lineNumber = 288
            onSelf = true;
            var call474 = callmethod(this, "width", [0]);
            var quotient476 = callmethod(call474, "/", [1], new GraceNum(2));
            var opresult479 = callmethod(var_rotatedX, ">", [1], quotient476);
            if (Grace_isTrue(opresult479)) {
              lineNumber = 290
              lineNumber = 289
              var bool480 = new GraceBoolean(false)
              return bool480
            }
            lineNumber = 294
            var if481 = var_done;
            lineNumber = 291
            onSelf = true;
            var call483 = callmethod(this, "height", [0]);
            var call484 = callmethod(call483,"prefix-", [0]);
            var quotient486 = callmethod(call484, "/", [1], new GraceNum(2));
            var opresult489 = callmethod(var_rotatedY, "<", [1], quotient486);
            if (Grace_isTrue(opresult489)) {
              lineNumber = 293
              lineNumber = 292
              var bool490 = new GraceBoolean(false)
              return bool490
            }
            lineNumber = 297
            var if491 = var_done;
            lineNumber = 294
            onSelf = true;
            var call493 = callmethod(this, "height", [0]);
            var quotient495 = callmethod(call493, "/", [1], new GraceNum(2));
            var opresult498 = callmethod(var_rotatedY, ">", [1], quotient495);
            if (Grace_isTrue(opresult498)) {
              lineNumber = 296
              lineNumber = 295
              var bool499 = new GraceBoolean(false)
              return bool499
            }
            lineNumber = 298
            lineNumber = 297
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
        func399.definitionLine = 278;
        func399.definitionModule = "musical";
        sourceObject = obj359;
        lineNumber = 261
        var call501 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj359.superobj = call501;
        obj359._value = call501._value;
        sourceObject = obj359;
        lineNumber = 262
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
        lineNumber = 263;
        moduleName = "musical";
        lineNumber = 262
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 263
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
        lineNumber = 264;
        moduleName = "musical";
        lineNumber = 263
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 264
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
        lineNumber = 264;
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
  func358.definitionLine = 259;
  func358.definitionModule = "musical";
  var func508 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj509 = Grace_allocObject();
      obj509.definitionModule = "musical";
      obj509.definitionLine = 260;
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
            lineNumber = 266
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
        func511.definitionLine = 265;
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
            lineNumber = 270
            lineNumber = 266
            lineNumber = 269
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
        func514.definitionLine = 268;
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
            lineNumber = 272
            var call518 = callmethod(var_ctx,"save", [0]);
            lineNumber = 273
            onSelf = true;
            var call519 = callmethod(this, "x", [0]);
            onSelf = true;
            var call520 = callmethod(this, "y", [0]);
            var call521 = callmethod(var_ctx,"translate", [2], call519, call520);
            lineNumber = 274
            onSelf = true;
            var call525 = callmethod(this, "angle", [0]);
            var opresult527 = callmethod(call525, "+", [1], new GraceNum(180));
            var call528 = callmethod(opresult527,"prefix-", [0]);
            var quotient530 = callmethod(call528, "/", [1], new GraceNum(180));
            var prod532 = callmethod(quotient530, "*", [1], new GraceNum(3.1415));
            var call533 = callmethod(var_ctx,"rotate", [1], prod532);
            lineNumber = 275
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
            lineNumber = 276
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
        func517.definitionLine = 271;
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
            lineNumber = 281
            onSelf = true;
            var call553 = callmethod(this, "angle", [0]);
            var opresult555 = callmethod(call553, "+", [1], new GraceNum(180));
            var call556 = callmethod(opresult555,"prefix-", [0]);
            var quotient558 = callmethod(call556, "/", [1], new GraceNum(180));
            var prod560 = callmethod(quotient558, "*", [1], new GraceNum(3.1415));
            var call561 = callmethod(var_trig,"cos", [1], prod560);
            var var_c = call561;
            lineNumber = 281;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 282
            onSelf = true;
            var call565 = callmethod(this, "angle", [0]);
            var opresult567 = callmethod(call565, "+", [1], new GraceNum(180));
            var call568 = callmethod(opresult567,"prefix-", [0]);
            var quotient570 = callmethod(call568, "/", [1], new GraceNum(180));
            var prod572 = callmethod(quotient570, "*", [1], new GraceNum(3.1415));
            var call573 = callmethod(var_trig,"sin", [1], prod572);
            var var_s = call573;
            lineNumber = 282;
            moduleName = "musical";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 284
            lineNumber = 283
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
            lineNumber = 284;
            moduleName = "musical";
            lineNumber = 283
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 285
            lineNumber = 284
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
            lineNumber = 285;
            moduleName = "musical";
            lineNumber = 284
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 288
            var if612 = var_done;
            lineNumber = 285
            onSelf = true;
            var call614 = callmethod(this, "width", [0]);
            var call615 = callmethod(call614,"prefix-", [0]);
            var quotient617 = callmethod(call615, "/", [1], new GraceNum(2));
            var opresult620 = callmethod(var_rotatedX, "<", [1], quotient617);
            if (Grace_isTrue(opresult620)) {
              lineNumber = 287
              lineNumber = 286
              var bool621 = new GraceBoolean(false)
              return bool621
            }
            lineNumber = 291
            var if622 = var_done;
            lineNumber = 288
            onSelf = true;
            var call624 = callmethod(this, "width", [0]);
            var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
            var opresult629 = callmethod(var_rotatedX, ">", [1], quotient626);
            if (Grace_isTrue(opresult629)) {
              lineNumber = 290
              lineNumber = 289
              var bool630 = new GraceBoolean(false)
              return bool630
            }
            lineNumber = 294
            var if631 = var_done;
            lineNumber = 291
            onSelf = true;
            var call633 = callmethod(this, "height", [0]);
            var call634 = callmethod(call633,"prefix-", [0]);
            var quotient636 = callmethod(call634, "/", [1], new GraceNum(2));
            var opresult639 = callmethod(var_rotatedY, "<", [1], quotient636);
            if (Grace_isTrue(opresult639)) {
              lineNumber = 293
              lineNumber = 292
              var bool640 = new GraceBoolean(false)
              return bool640
            }
            lineNumber = 297
            var if641 = var_done;
            lineNumber = 294
            onSelf = true;
            var call643 = callmethod(this, "height", [0]);
            var quotient645 = callmethod(call643, "/", [1], new GraceNum(2));
            var opresult648 = callmethod(var_rotatedY, ">", [1], quotient645);
            if (Grace_isTrue(opresult648)) {
              lineNumber = 296
              lineNumber = 295
              var bool649 = new GraceBoolean(false)
              return bool649
            }
            lineNumber = 298
            lineNumber = 297
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
        func549.definitionLine = 278;
        func549.definitionModule = "musical";
        sourceObject = obj509;
        lineNumber = 261
        var call651 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj509.superobj = call651;
        obj509._value = call651._value;
        sourceObject = obj509;
        lineNumber = 262
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
        lineNumber = 263;
        moduleName = "musical";
        lineNumber = 262
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 263
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
        lineNumber = 264;
        moduleName = "musical";
        lineNumber = 263
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 264
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
        lineNumber = 264;
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
  lineNumber = 302
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
      lineNumber = 303
      var obj659 = Grace_allocObject();
      obj659.definitionModule = "musical";
      obj659.definitionLine = 303;
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
            lineNumber = 309
            lineNumber = 264
            lineNumber = 308
            onSelf = true;
            var call662 = callmethod(this, "colour", [0]);
            var call663 = callmethod(var_ctx,"fillStyle:=", [1], call662);
            lineNumber = 310
            lineNumber = 264
            lineNumber = 309
            var string664 = new GraceString("20px sans-serif");
            var call665 = callmethod(var_ctx,"font:=", [1], string664);
            lineNumber = 315
            var if666 = var_done;
            lineNumber = 310
            var string667 = new GraceString("");
            onSelf = true;
            var call669 = callmethod(this, "label", [0]);
            var opresult671 = callmethod(call669, "!=", [1], string667);
            if (Grace_isTrue(opresult671)) {
              lineNumber = 311
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
              lineNumber = 313
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
        func661.definitionLine = 307;
        func661.definitionModule = "musical";
        sourceObject = obj659;
        lineNumber = 304
        var call704 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj659.superobj = call704;
        obj659._value = call704._value;
        sourceObject = obj659;
        lineNumber = 305
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
        lineNumber = 306;
        moduleName = "musical";
        lineNumber = 305
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string705)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        lineNumber = 306
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
        lineNumber = 307;
        moduleName = "musical";
        lineNumber = 306
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
  func658.definitionLine = 302;
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
      obj710.definitionLine = 303;
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
            lineNumber = 309
            lineNumber = 313
            lineNumber = 308
            onSelf = true;
            var call713 = callmethod(this, "colour", [0]);
            var call714 = callmethod(var_ctx,"fillStyle:=", [1], call713);
            lineNumber = 310
            lineNumber = 313
            lineNumber = 309
            var string715 = new GraceString("20px sans-serif");
            var call716 = callmethod(var_ctx,"font:=", [1], string715);
            lineNumber = 315
            var if717 = var_done;
            lineNumber = 310
            var string718 = new GraceString("");
            onSelf = true;
            var call720 = callmethod(this, "label", [0]);
            var opresult722 = callmethod(call720, "!=", [1], string718);
            if (Grace_isTrue(opresult722)) {
              lineNumber = 311
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
              lineNumber = 313
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
        func712.definitionLine = 307;
        func712.definitionModule = "musical";
        sourceObject = obj710;
        lineNumber = 304
        var call755 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj710.superobj = call755;
        obj710._value = call755._value;
        sourceObject = obj710;
        lineNumber = 305
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
        lineNumber = 306;
        moduleName = "musical";
        lineNumber = 305
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string756)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        lineNumber = 306
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
        lineNumber = 307;
        moduleName = "musical";
        lineNumber = 306
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
  lineNumber = 332
  var func760 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func760.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 333
      var string761 = new GraceString("2d");
      var call762 = callmethod(var_backingCanvas,"getContext", [1], string761);
      var var_ctx = call762;
      lineNumber = 333;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ctx' to be of type Unknown"))
      lineNumber = 335
      lineNumber = 313
      lineNumber = 334
      var call763 = callmethod(var_ctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 335
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
  func760.definitionLine = 332;
  func760.definitionModule = "musical";
  lineNumber = 337
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
      lineNumber = 341
      lineNumber = 340
      var var_count = new GraceNum(0);
      lineNumber = 341;
      moduleName = "musical";
      lineNumber = 340
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_count)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'count' to be of type Unknown"))
      lineNumber = 341
      lineNumber = 358
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
      block766.className = 'block<musical:358>';
      block766.real = function(
        var_b
      ) {
        sourceObject = this;
        lineNumber = 343
        lineNumber = 342
        var opresult769 = callmethod(var_count, "+", [1], new GraceNum(1));
        var_count = opresult769;
        lineNumber = 343
        var string770 = new GraceString("blocks");
        var call771 = callmethod(var_dom,"window", [0]);
        var call772 = callmethod(call771,"console", [0]);
        var call773 = callmethod(call772,"log", [1], string770);
        lineNumber = 344
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
  func765.definitionLine = 337;
  func765.definitionModule = "musical";
  lineNumber = 359
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
      lineNumber = 360
      lineNumber = 362
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
      block779.className = 'block<musical:362>';
      block779.real = function(
      ) {
        sourceObject = this;
        var if780 = var_done;
        lineNumber = 361
        var call781 = callmethod(var_c,"apply", [0]);
        if (Grace_isTrue(call781)) {
          var call782 = callmethod(var_b,"apply", [0]);
          if780 = call782;
        }
        return if780;
      };
      lineNumber = 360
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
  func778.definitionLine = 359;
  func778.definitionModule = "musical";
  lineNumber = 364
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
      lineNumber = 366
      lineNumber = 365
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
  func784.definitionLine = 364;
  func784.definitionModule = "musical";
  lineNumber = 367
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
      lineNumber = 368
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
  func807.definitionLine = 367;
  func807.definitionModule = "musical";
  lineNumber = 370
  var func809 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func809.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 374
      var if810 = var_done;
      lineNumber = 371
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 373
        lineNumber = 372
        var bool811 = new GraceBoolean(false)
        return bool811
      }
      lineNumber = 375
      lineNumber = 374
      var bool812 = new GraceBoolean(true)
      var_initialised = bool812;
      lineNumber = 376
      lineNumber = 375
      var call813 = callmethod(var_dom,"document", [0]);
      var_document = call813;
      lineNumber = 376
      var string814 = new GraceString("standard-canvas");
      var call815 = callmethod(var_document,"getElementById", [1], string814);
      var_canvas = call815;
      lineNumber = 378
      lineNumber = 377
      var call816 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call816;
      lineNumber = 379
      lineNumber = 378
      var call817 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call817;
      lineNumber = 379
      var quotient820 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient823 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call824 = callmethod(var_point,"x()y", [1, 1], quotient820, quotient823);
      var_centre = call824;
      lineNumber = 380
      var quotient827 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call828 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient827);
      var_leftCentre = call828;
      lineNumber = 381
      var quotient831 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call832 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient831);
      var_rightCentre = call832;
      lineNumber = 385
      lineNumber = 378
      lineNumber = 382
      var call833 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 390
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
      block834.className = 'block<musical:390>';
      block834.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 387
        lineNumber = 386
        var call836 = callmethod(var_canvas,"offsetWidth", [0]);
        var call838 = callmethod(var_canvas,"offsetLeft", [0]);
        var call840 = callmethod(var_ev,"clientX", [0]);
        var diff842 = callmethod(call840, "-", [1], call838);
        var quotient844 = callmethod(diff842, "/", [1], call836);
        var prod846 = callmethod(quotient844, "*", [1], var_canvasHeight);
        var var_x = prod846;
        lineNumber = 387;
        moduleName = "musical";
        lineNumber = 386
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 388
        lineNumber = 387
        var call848 = callmethod(var_canvas,"offsetHeight", [0]);
        var call851 = callmethod(var_canvas,"offsetTop", [0]);
        var call853 = callmethod(var_ev,"clientY", [0]);
        var diff855 = callmethod(call853, "-", [1], call851);
        var diff857 = callmethod(diff855, "-", [1], new GraceNum(7));
        var quotient859 = callmethod(diff857, "/", [1], call848);
        var prod861 = callmethod(quotient859, "*", [1], var_canvasHeight);
        var var_y = prod861;
        lineNumber = 388;
        moduleName = "musical";
        lineNumber = 387
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 388
        lineNumber = 387
        lineNumber = 388
        var call862 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call863 = callmethod(var_mouse,"position:=", [1], call862);
        return call863;
      };
      var_mouseMoveListener = block834;
      lineNumber = 390
      var string864 = new GraceString("mousemove");
      var call865 = callmethod(var_canvas,"addEventListener", [2], string864, var_mouseMoveListener);
      lineNumber = 406
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
      block866.className = 'block<musical:406>';
      block866.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 393
        lineNumber = 392
        var call868 = callmethod(var_canvas,"offsetWidth", [0]);
        var call870 = callmethod(var_canvas,"offsetLeft", [0]);
        var call872 = callmethod(var_ev,"clientX", [0]);
        var diff874 = callmethod(call872, "-", [1], call870);
        var quotient876 = callmethod(diff874, "/", [1], call868);
        var prod878 = callmethod(quotient876, "*", [1], var_canvasHeight);
        var var_x = prod878;
        lineNumber = 393;
        moduleName = "musical";
        lineNumber = 392
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 394
        lineNumber = 393
        var call880 = callmethod(var_canvas,"offsetHeight", [0]);
        var call882 = callmethod(var_canvas,"offsetTop", [0]);
        var call884 = callmethod(var_ev,"clientY", [0]);
        var diff886 = callmethod(call884, "-", [1], call882);
        var quotient888 = callmethod(diff886, "/", [1], call880);
        var prod890 = callmethod(quotient888, "*", [1], var_canvasHeight);
        var var_y = prod890;
        lineNumber = 394;
        moduleName = "musical";
        lineNumber = 393
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 398
        var if891 = var_done;
        lineNumber = 394
        var opresult894 = callmethod(var_y, "<", [1], new GraceNum(20));
        var diff898 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var opresult901 = callmethod(var_x, ">", [1], diff898);
        var opresult903 = callmethod(opresult901, "&&", [1], opresult894);
        if (Grace_isTrue(opresult903)) {
          lineNumber = 395
          var call904 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 396
          onSelf = true;
          var call905 = callmethod(this, "stop", [0]);
          if891 = call905;
        }
        lineNumber = 398
        var call906 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call906;
        lineNumber = 398;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 399
        lineNumber = 405
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
        block907.className = 'block<musical:405>';
        block907.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 404
          var if908 = var_done;
          lineNumber = 400
          var call909 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call909)) {
            lineNumber = 401
            var call910 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 402
            var call911 = callmethod(var_ev,"preventDefault", [0]);
            if908 = call911;
          }
          return if908;
        };
        var call912 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block907);
        return call912;
      };
      var_mouseDownListener = block866;
      lineNumber = 406
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
  func809.definitionLine = 370;
  func809.definitionModule = "musical";
  lineNumber = 408
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
      lineNumber = 410
      lineNumber = 409
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
  func915.definitionLine = 408;
  func915.definitionModule = "musical";
  lineNumber = 411
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
      lineNumber = 412
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
  func916.definitionLine = 411;
  func916.definitionModule = "musical";
  lineNumber = 415
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
      lineNumber = 427
      var if923 = var_done;
      lineNumber = 416
      var call924 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call924)) {
        lineNumber = 417
        var call925 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call925;
        lineNumber = 417;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 419
        lineNumber = 412
        lineNumber = 418
        var call926 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 419
        var call927 = callmethod(var_audio,"play", [0]);
        if923 = call927;
      } else {
        lineNumber = 421
        var string928 = new GraceString("audio");
        var call929 = callmethod(var_dom,"document", [0]);
        var call930 = callmethod(call929,"createElement", [1], string928);
        var var_audio = call930;
        lineNumber = 421;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 422
        var call931 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 424
        lineNumber = 421
        lineNumber = 423
        var call932 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 424
        var call933 = callmethod(var_audio,"load", [0]);
        lineNumber = 425
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
  func922.definitionLine = 415;
  func922.definitionModule = "musical";
  lineNumber = 428
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
      lineNumber = 433
      var if936 = var_done;
      lineNumber = 429
      var call937 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call937)) {
        lineNumber = 430
        var call938 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call938;
        lineNumber = 430;
        moduleName = "musical";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 431
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
  func935.definitionLine = 428;
  func935.definitionModule = "musical";
  lineNumber = 434
  var func940 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func940.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 435
      onSelf = true;
      var call941 = callmethod(this, "initialise", [0]);
      lineNumber = 436
      var string942 = new GraceString("start");
      var call943 = callmethod(var_dom,"window", [0]);
      var call944 = callmethod(call943,"console", [0]);
      var call945 = callmethod(call944,"log", [1], string942);
      lineNumber = 438
      lineNumber = 437
      var bool946 = new GraceBoolean(false)
      var_stopRunning = bool946;
      lineNumber = 438
      var string947 = new GraceString("canvas");
      var call948 = callmethod(var_dom,"document", [0]);
      var call949 = callmethod(call948,"createElement", [1], string947);
      var_backingCanvas = call949;
      lineNumber = 440
      lineNumber = 438
      lineNumber = 439
      var call950 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 441
      lineNumber = 438
      lineNumber = 440
      var call951 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 441
      var string952 = new GraceString("2d");
      var call953 = callmethod(var_backingCanvas,"getContext", [1], string952);
      var_backingContext = call953;
      lineNumber = 442
      var string954 = new GraceString("2d");
      var call955 = callmethod(var_canvas,"getContext", [1], string954);
      var var_mctx = call955;
      lineNumber = 442;
      moduleName = "musical";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 443
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
      block956.className = 'block<musical:443>';
      block956.real = function(
      ) {
        sourceObject = this;
        var call957 = callmethod(var_stopRunning,"prefix!", [0]);
        return call957;
      };
      lineNumber = 460
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
      block958.className = 'block<musical:460>';
      block958.real = function(
      ) {
        sourceObject = this;
        lineNumber = 444
        lineNumber = 447
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
        block959.className = 'block<musical:447>';
        block959.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 445
          var call960 = callmethod(var_obj,"step", [0]);
          return call960;
        };
        var call961 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block959);
        lineNumber = 447
        lineNumber = 450
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
        block962.className = 'block<musical:450>';
        block962.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 448
          var call963 = callmethod(var_step,"apply", [0]);
          return call963;
        };
        var call964 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block962);
        lineNumber = 451
        lineNumber = 448
        lineNumber = 450
        var call965 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 451
        var call966 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 452
        var call967 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 453
        lineNumber = 456
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
        block968.className = 'block<musical:456>';
        block968.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 454
          var call969 = callmethod(var_obj,"draw", [1], var_mctx);
          return call969;
        };
        var call970 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block968);
        lineNumber = 457
        lineNumber = 448
        lineNumber = 456
        var string971 = new GraceString("red");
        var call972 = callmethod(var_mctx,"fillStyle:=", [1], string971);
        lineNumber = 457
        var diff975 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call976 = callmethod(var_mctx,"fillRect", [4], diff975, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call976;
      };
      lineNumber = 443
      var call977 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block956, new GraceNum(10), block958);
      lineNumber = 460
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
  func940.definitionLine = 434;
  func940.definitionModule = "musical";
  lineNumber = 463
  var func980 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func980.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 465
      lineNumber = 464
      var bool981 = new GraceBoolean(true)
      var_stopRunning = bool981;
      lineNumber = 465
      var string982 = new GraceString("mousedown");
      var call983 = callmethod(var_canvas,"removeEventListener", [2], string982, var_mouseDownListener);
      lineNumber = 466
      var string984 = new GraceString("mousemove");
      var call985 = callmethod(var_canvas,"removeEventListener", [2], string984, var_mouseMoveListener);
      lineNumber = 468
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
  func980.definitionLine = 463;
  func980.definitionModule = "musical";
  lineNumber = 470
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
      lineNumber = 471
      onSelf = true;
      var call989 = callmethod(this, "start", [0]);
      lineNumber = 473
      var call990 = callmethod(var_dom,"window", [0]);
      var call991 = callmethod(call990,"t_play", [0]);
      lineNumber = 474
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
  func988.definitionLine = 470;
  func988.definitionModule = "musical";
  lineNumber = 484
  var func996 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func996.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (A)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 485
      var string997 = new GraceString("a1");
      var call998 = callmethod(var_dom,"window", [0]);
      var call999 = callmethod(call998,"t_add", [1], string997);
      return call999
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func996.paramCounts = [
    0,
  ];
  func996.variableArities = [
    false,
  ];
  this.methods["A"] = func996;
  func996.definitionLine = 484;
  func996.definitionModule = "musical";
  lineNumber = 487
  var func1000 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1000.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (B)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 488
      var string1001 = new GraceString("b1");
      var call1002 = callmethod(var_dom,"window", [0]);
      var call1003 = callmethod(call1002,"t_add", [1], string1001);
      return call1003
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1000.paramCounts = [
    0,
  ];
  func1000.variableArities = [
    false,
  ];
  this.methods["B"] = func1000;
  func1000.definitionLine = 487;
  func1000.definitionModule = "musical";
  lineNumber = 490
  var func1004 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1004.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (C)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 491
      var string1005 = new GraceString("c1");
      var call1006 = callmethod(var_dom,"window", [0]);
      var call1007 = callmethod(call1006,"t_add", [1], string1005);
      return call1007
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1004.paramCounts = [
    0,
  ];
  func1004.variableArities = [
    false,
  ];
  this.methods["C"] = func1004;
  func1004.definitionLine = 490;
  func1004.definitionModule = "musical";
  lineNumber = 493
  var func1008 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1008.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (D)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 494
      var string1009 = new GraceString("d1");
      var call1010 = callmethod(var_dom,"window", [0]);
      var call1011 = callmethod(call1010,"t_add", [1], string1009);
      return call1011
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1008.paramCounts = [
    0,
  ];
  func1008.variableArities = [
    false,
  ];
  this.methods["D"] = func1008;
  func1008.definitionLine = 493;
  func1008.definitionModule = "musical";
  lineNumber = 496
  var func1012 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1012.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (E)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 497
      var string1013 = new GraceString("e1");
      var call1014 = callmethod(var_dom,"window", [0]);
      var call1015 = callmethod(call1014,"t_add", [1], string1013);
      return call1015
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1012.paramCounts = [
    0,
  ];
  func1012.variableArities = [
    false,
  ];
  this.methods["E"] = func1012;
  func1012.definitionLine = 496;
  func1012.definitionModule = "musical";
  lineNumber = 499
  var func1016 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1016.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (F)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 500
      var string1017 = new GraceString("f1");
      var call1018 = callmethod(var_dom,"window", [0]);
      var call1019 = callmethod(call1018,"t_add", [1], string1017);
      return call1019
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1016.paramCounts = [
    0,
  ];
  func1016.variableArities = [
    false,
  ];
  this.methods["F"] = func1016;
  func1016.definitionLine = 499;
  func1016.definitionModule = "musical";
  lineNumber = 502
  var func1020 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1020.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (G)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 503
      var string1021 = new GraceString("g1");
      var call1022 = callmethod(var_dom,"window", [0]);
      var call1023 = callmethod(call1022,"t_add", [1], string1021);
      return call1023
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1020.paramCounts = [
    0,
  ];
  func1020.variableArities = [
    false,
  ];
  this.methods["G"] = func1020;
  func1020.definitionLine = 502;
  func1020.definitionModule = "musical";
  lineNumber = 508
  var func1024 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1024.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Instrument)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 509
      var call1025 = callmethod(var_dom,"window", [0]);
      var call1026 = callmethod(call1025,"t_init", [0]);
      lineNumber = 511
      lineNumber = 510
      var bool1027 = new GraceBoolean(true)
      var_playing = bool1027;
      lineNumber = 511
      var call1028 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 513
      lineNumber = 512
      var bool1029 = new GraceBoolean(false)
      var_playing = bool1029;
      return bool1029
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1024.paramCounts = [
    1,
  ];
  func1024.variableArities = [
    false,
  ];
  this.methods["Instrument"] = func1024;
  func1024.definitionLine = 508;
  func1024.definitionModule = "musical";
  lineNumber = 515
  var func1030 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1030.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (monoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 516
      onSelf = true;
      var call1031 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 517
      var call1032 = callmethod(var_dom,"window", [0]);
      var call1033 = callmethod(call1032,"t_synth_mono", [0]);
      return call1033
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1030.paramCounts = [
    1,
  ];
  func1030.variableArities = [
    false,
  ];
  this.methods["monoSynth"] = func1030;
  func1030.definitionLine = 515;
  func1030.definitionModule = "musical";
  lineNumber = 520
  var func1034 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1034.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pluckSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 521
      onSelf = true;
      var call1035 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 522
      var call1036 = callmethod(var_dom,"window", [0]);
      var call1037 = callmethod(call1036,"t_synth_pluck", [0]);
      return call1037
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1034.paramCounts = [
    1,
  ];
  func1034.variableArities = [
    false,
  ];
  this.methods["pluckSynth"] = func1034;
  func1034.definitionLine = 520;
  func1034.definitionModule = "musical";
  lineNumber = 525
  var func1038 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1038.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (polySynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 526
      onSelf = true;
      var call1039 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 527
      var call1040 = callmethod(var_dom,"window", [0]);
      var call1041 = callmethod(call1040,"t_synth_poly", [0]);
      return call1041
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1038.paramCounts = [
    1,
  ];
  func1038.variableArities = [
    false,
  ];
  this.methods["polySynth"] = func1038;
  func1038.definitionLine = 525;
  func1038.definitionModule = "musical";
  lineNumber = 530
  var func1042 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1042.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (fmSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 531
      onSelf = true;
      var call1043 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 532
      var call1044 = callmethod(var_dom,"window", [0]);
      var call1045 = callmethod(call1044,"t_synth_fm", [0]);
      return call1045
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1042.paramCounts = [
    1,
  ];
  func1042.variableArities = [
    false,
  ];
  this.methods["fmSynth"] = func1042;
  func1042.definitionLine = 530;
  func1042.definitionModule = "musical";
  lineNumber = 535
  var func1046 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1046.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (membraneSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 536
      onSelf = true;
      var call1047 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 537
      var call1048 = callmethod(var_dom,"window", [0]);
      var call1049 = callmethod(call1048,"t_synth_membrane", [0]);
      return call1049
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1046.paramCounts = [
    1,
  ];
  func1046.variableArities = [
    false,
  ];
  this.methods["membraneSynth"] = func1046;
  func1046.definitionLine = 535;
  func1046.definitionModule = "musical";
  lineNumber = 540
  var func1050 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1050.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (duoSynth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 541
      onSelf = true;
      var call1051 = callmethod(this, "Instrument", [1], var_blocks);
      lineNumber = 542
      var call1052 = callmethod(var_dom,"window", [0]);
      var call1053 = callmethod(call1052,"t_synth_duo", [0]);
      return call1053
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
  this.methods["duoSynth"] = func1050;
  func1050.definitionLine = 540;
  func1050.definitionModule = "musical";
  lineNumber = 546
  var func1054 = function(argcv) {
    var curarg = 1;
    var var_blocks = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1054.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bass)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 547
      var call1055 = callmethod(var_dom,"window", [0]);
      var call1056 = callmethod(call1055,"t_init", [0]);
      lineNumber = 549
      lineNumber = 548
      var bool1057 = new GraceBoolean(true)
      var_playing = bool1057;
      lineNumber = 549
      var call1058 = callmethod(var_blocks,"apply", [0]);
      lineNumber = 552
      lineNumber = 550
      var bool1059 = new GraceBoolean(false)
      var_playing = bool1059;
      lineNumber = 552
      var call1060 = callmethod(var_dom,"window", [0]);
      var call1061 = callmethod(call1060,"t_bass", [0]);
      lineNumber = 554
      var string1062 = new GraceString("func: play");
      var call1063 = callmethod(var_dom,"window", [0]);
      var call1064 = callmethod(call1063,"console", [0]);
      var call1065 = callmethod(call1064,"log", [1], string1062);
      return call1065
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1054.paramCounts = [
    1,
  ];
  func1054.variableArities = [
    false,
  ];
  this.methods["bass"] = func1054;
  func1054.definitionLine = 546;
  func1054.definitionModule = "musical";
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
  var call1066 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call1066;
  this.data = call1066.data;
  this._value = call1066._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 554
  var func1067 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1067.paramCounts[0])
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
  func1067.paramCounts = [
    0,
  ];
  func1067.variableArities = [
    false,
  ];
  this.methods["document"] = func1067;
  func1067.definitionLine = 554;
  func1067.definitionModule = "musical";
  lineNumber = 554
  var func1068 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1068.paramCounts[0])
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
  func1068.paramCounts = [
    1,
  ];
  func1068.variableArities = [
    false,
  ];
  this.methods["document:="] = func1068;
  func1068.definitionLine = 554;
  func1068.definitionModule = "musical";
  lineNumber = 10
  var var_canvas;
  lineNumber = 554
  var func1069 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1069.paramCounts[0])
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
  func1069.paramCounts = [
    0,
  ];
  func1069.variableArities = [
    false,
  ];
  this.methods["canvas"] = func1069;
  func1069.definitionLine = 554;
  func1069.definitionModule = "musical";
  lineNumber = 554
  var func1070 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1070.paramCounts[0])
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
  func1070.paramCounts = [
    1,
  ];
  func1070.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func1070;
  func1070.definitionLine = 554;
  func1070.definitionModule = "musical";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 554
  var func1071 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1071.paramCounts[0])
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
  func1071.paramCounts = [
    0,
  ];
  func1071.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func1071;
  func1071.definitionLine = 554;
  func1071.definitionModule = "musical";
  lineNumber = 554
  var func1072 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1072.paramCounts[0])
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
  func1072.paramCounts = [
    1,
  ];
  func1072.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func1072;
  func1072.definitionLine = 554;
  func1072.definitionModule = "musical";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 554
  var func1073 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1073.paramCounts[0])
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
  func1073.paramCounts = [
    0,
  ];
  func1073.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1073;
  func1073.definitionLine = 554;
  func1073.definitionModule = "musical";
  lineNumber = 554
  var func1074 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1074.paramCounts[0])
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
  func1074.paramCounts = [
    1,
  ];
  func1074.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1074;
  func1074.definitionLine = 554;
  func1074.definitionModule = "musical";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 554
  var func1075 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1075.paramCounts[0])
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
  func1075.paramCounts = [
    0,
  ];
  func1075.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1075;
  func1075.definitionLine = 554;
  func1075.definitionModule = "musical";
  lineNumber = 554
  var func1076 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1076.paramCounts[0])
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
  func1076.paramCounts = [
    1,
  ];
  func1076.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1076;
  func1076.definitionLine = 554;
  func1076.definitionModule = "musical";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 554
  var func1077 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1077.paramCounts[0])
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
  func1077.paramCounts = [
    0,
  ];
  func1077.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1077;
  func1077.definitionLine = 554;
  func1077.definitionModule = "musical";
  lineNumber = 554
  var func1078 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1078.paramCounts[0])
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
  func1078.paramCounts = [
    1,
  ];
  func1078.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1078;
  func1078.definitionLine = 554;
  func1078.definitionModule = "musical";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1079 = callmethod(var_dom,"window", [0]);
  var call1080 = callmethod(call1079,"Math", [0]);
  var var_trig = call1080;
  var func1081 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1081.paramCounts[0])
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
  func1081.paramCounts = [
    0,
  ];
  func1081.variableArities = [
    false,
  ];
  this.methods["trig"] = func1081;
  func1081.definitionLine = 15;
  func1081.definitionModule = "musical";
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
  var func1082 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1082.paramCounts[0])
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
  func1082.paramCounts = [
    0,
  ];
  func1082.variableArities = [
    false,
  ];
  this.methods["PI"] = func1082;
  func1082.definitionLine = 15;
  func1082.definitionModule = "musical";
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
  var bool1083 = new GraceBoolean(false)
  var var_stopRunning = bool1083;
  lineNumber = 15
  var func1084 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1084.paramCounts[0])
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
  func1084.paramCounts = [
    0,
  ];
  func1084.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1084;
  func1084.definitionLine = 15;
  func1084.definitionModule = "musical";
  lineNumber = 15
  var func1085 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1085.paramCounts[0])
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
  func1085.paramCounts = [
    1,
  ];
  func1085.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1085;
  func1085.definitionLine = 15;
  func1085.definitionModule = "musical";
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
  var bool1086 = new GraceBoolean(false)
  var var_initialised = bool1086;
  lineNumber = 15
  var func1087 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1087.paramCounts[0])
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
  func1087.paramCounts = [
    0,
  ];
  func1087.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1087;
  func1087.definitionLine = 15;
  func1087.definitionModule = "musical";
  lineNumber = 15
  var func1088 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1088.paramCounts[0])
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
  func1088.paramCounts = [
    1,
  ];
  func1088.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1088;
  func1088.definitionLine = 15;
  func1088.definitionModule = "musical";
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
  var string1089 = new GraceString("white");
  var var_backgroundColour = string1089;
  lineNumber = 15
  var func1090 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1090.paramCounts[0])
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
  func1090.paramCounts = [
    0,
  ];
  func1090.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1090;
  func1090.definitionLine = 15;
  func1090.definitionModule = "musical";
  lineNumber = 15
  var func1091 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1091.paramCounts[0])
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
  func1091.paramCounts = [
    1,
  ];
  func1091.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1091;
  func1091.definitionLine = 15;
  func1091.definitionModule = "musical";
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
  var call1092 = callmethod(var_collections,"list", [0]);
  var call1093 = callmethod(call1092,"new", [0]);
  var var_registeredObjects = call1093;
  var func1094 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1094.paramCounts[0])
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
  func1094.paramCounts = [
    0,
  ];
  func1094.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1094;
  func1094.definitionLine = 21;
  func1094.definitionModule = "musical";
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
  var call1095 = callmethod(var_collections,"list", [0]);
  var call1096 = callmethod(call1095,"new", [0]);
  var var_stepBlocks = call1096;
  var func1097 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1097.paramCounts[0])
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
  func1097.paramCounts = [
    0,
  ];
  func1097.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1097;
  func1097.definitionLine = 22;
  func1097.definitionModule = "musical";
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
  var call1098 = callmethod(var_collections,"map", [0]);
  var call1099 = callmethod(call1098,"new", [0]);
  var var_audioTags = call1099;
  var func1100 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1100.paramCounts[0])
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
  func1100.paramCounts = [
    0,
  ];
  func1100.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1100;
  func1100.definitionLine = 23;
  func1100.definitionModule = "musical";
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
  var func1101 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1101.paramCounts[0])
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
  func1101.paramCounts = [
    0,
  ];
  func1101.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1101;
  func1101.definitionLine = 23;
  func1101.definitionModule = "musical";
  lineNumber = 23
  var func1102 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1102.paramCounts[0])
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
  func1102.paramCounts = [
    1,
  ];
  func1102.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1102;
  func1102.definitionLine = 23;
  func1102.definitionModule = "musical";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1103 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1103.paramCounts[0])
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
  func1103.paramCounts = [
    0,
  ];
  func1103.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1103;
  func1103.definitionLine = 23;
  func1103.definitionModule = "musical";
  lineNumber = 23
  var func1104 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1104.paramCounts[0])
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
  func1104.paramCounts = [
    1,
  ];
  func1104.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1104;
  func1104.definitionLine = 23;
  func1104.definitionModule = "musical";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1105 = new GraceString("left");
  var var_left = string1105;
  lineNumber = 23
  var func1106 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1106.paramCounts[0])
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
  func1106.paramCounts = [
    0,
  ];
  func1106.variableArities = [
    false,
  ];
  this.methods["left"] = func1106;
  func1106.definitionLine = 23;
  func1106.definitionModule = "musical";
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
  var string1107 = new GraceString("right");
  var var_right = string1107;
  lineNumber = 23
  var func1108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1108.paramCounts[0])
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
  func1108.paramCounts = [
    0,
  ];
  func1108.variableArities = [
    false,
  ];
  this.methods["right"] = func1108;
  func1108.definitionLine = 23;
  func1108.definitionModule = "musical";
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
  var string1109 = new GraceString("top");
  var var_top = string1109;
  lineNumber = 23
  var func1110 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1110.paramCounts[0])
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
  func1110.paramCounts = [
    0,
  ];
  func1110.variableArities = [
    false,
  ];
  this.methods["top"] = func1110;
  func1110.definitionLine = 23;
  func1110.definitionModule = "musical";
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
  var string1111 = new GraceString("bottom");
  var var_bottom = string1111;
  lineNumber = 23
  var func1112 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1112.paramCounts[0])
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
  func1112.paramCounts = [
    0,
  ];
  func1112.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1112;
  func1112.definitionLine = 23;
  func1112.definitionModule = "musical";
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
  var func1113 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1113.paramCounts[0])
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
  func1113.paramCounts = [
    0,
  ];
  func1113.variableArities = [
    false,
  ];
  this.methods["centre"] = func1113;
  func1113.definitionLine = 23;
  func1113.definitionModule = "musical";
  lineNumber = 23
  var func1114 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1114.paramCounts[0])
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
  func1114.paramCounts = [
    1,
  ];
  func1114.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1114;
  func1114.definitionLine = 23;
  func1114.definitionModule = "musical";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1115 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1115.paramCounts[0])
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
  func1115.paramCounts = [
    0,
  ];
  func1115.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1115;
  func1115.definitionLine = 23;
  func1115.definitionModule = "musical";
  lineNumber = 23
  var func1116 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1116.paramCounts[0])
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
  func1116.paramCounts = [
    1,
  ];
  func1116.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1116;
  func1116.definitionLine = 23;
  func1116.definitionModule = "musical";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1117 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1117.paramCounts[0])
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
  func1117.paramCounts = [
    0,
  ];
  func1117.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1117;
  func1117.definitionLine = 23;
  func1117.definitionModule = "musical";
  lineNumber = 23
  var func1118 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1118.paramCounts[0])
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
  func1118.paramCounts = [
    1,
  ];
  func1118.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1118;
  func1118.definitionLine = 23;
  func1118.definitionModule = "musical";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1119 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1119.paramCounts[0])
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
  func1119.paramCounts = [
    0,
  ];
  func1119.variableArities = [
    false,
  ];
  this.methods["above"] = func1119;
  func1119.definitionLine = 23;
  func1119.definitionModule = "musical";
  lineNumber = 23
  var func1120 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1120.paramCounts[0])
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
  func1120.paramCounts = [
    1,
  ];
  func1120.variableArities = [
    false,
  ];
  this.methods["above:="] = func1120;
  func1120.definitionLine = 23;
  func1120.definitionModule = "musical";
  lineNumber = 41
  var var___916__;
  lineNumber = 23
  var func1121 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1121.paramCounts[0])
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
  func1121.paramCounts = [
    0,
  ];
  func1121.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1121;
  func1121.definitionLine = 23;
  func1121.definitionModule = "musical";
  lineNumber = 23
  var func1122 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1122.paramCounts[0])
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
  func1122.paramCounts = [
    1,
  ];
  func1122.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1122;
  func1122.definitionLine = 23;
  func1122.definitionModule = "musical";
  lineNumber = 41
  lineNumber = 43
  lineNumber = 41
  var bool1123 = new GraceBoolean(false)
  var var_playing = bool1123;
  lineNumber = 23
  var func1124 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1124.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playing)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 41
      return var_playing
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1124.paramCounts = [
    0,
  ];
  func1124.variableArities = [
    false,
  ];
  this.methods["playing"] = func1124;
  func1124.definitionLine = 23;
  func1124.definitionModule = "musical";
  lineNumber = 23
  var func1125 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1125.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playing:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      var_playing = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
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
  this.methods["playing:="] = func1125;
  func1125.definitionLine = 23;
  func1125.definitionModule = "musical";
  lineNumber = 43;
  moduleName = "musical";
  lineNumber = 41
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_playing)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'playing' to be of type Unknown"))
  lineNumber = 43
  var func1126 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1126.paramCounts[0])
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
  func1126.paramCounts = [
    0,
  ];
  func1126.variableArities = [
    false,
  ];
  this.methods["point"] = func1126;
  func1126.definitionLine = 43;
  func1126.definitionModule = "musical";
  var obj1127 = Grace_allocObject();
  obj1127.definitionModule = "musical";
  obj1127.definitionLine = 43;
  obj1127.outer = this;
  var reader_musical_outer_1128 = function() {
    return this.outer;
  }
  obj1127.methods["outer"] = reader_musical_outer_1128;
  function obj_init_1127() {
    var origSuperDepth = superDepth;
    superDepth = obj1127;
    obj1127.annotations = [];
    var func1129 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1129.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1129.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1130 = Grace_allocObject();
        obj1130.definitionModule = "musical";
        obj1130.definitionLine = 43;
        obj1130.outer = this;
        var reader_musical_outer_1131 = function() {
          return this.outer;
        }
        obj1130.methods["outer"] = reader_musical_outer_1131;
        function obj_init_1130() {
          var origSuperDepth = superDepth;
          superDepth = obj1130;
          obj1130.annotations = [];
          var func1132 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1132.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1134 = callmethod(this, "x", [0]);
              var diff1136 = callmethod(call1134, "-", [1], var_dx);
              onSelf = true;
              var call1137 = callmethod(this, "y", [0]);
              var call1138 = callmethod(var_point,"x()y", [1, 1], diff1136, call1137);
              return call1138
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
          obj1130.methods["left"] = func1132;
          func1132.definitionLine = 46;
          func1132.definitionModule = "musical";
          var func1139 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1139.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 47
              onSelf = true;
              var call1141 = callmethod(this, "x", [0]);
              var opresult1143 = callmethod(call1141, "+", [1], var_dx);
              onSelf = true;
              var call1144 = callmethod(this, "y", [0]);
              var call1145 = callmethod(var_point,"x()y", [1, 1], opresult1143, call1144);
              return call1145
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1139.paramCounts = [
            1,
          ];
          func1139.variableArities = [
            false,
          ];
          obj1130.methods["right"] = func1139;
          func1139.definitionLine = 47;
          func1139.definitionModule = "musical";
          var func1146 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1146.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 48
              onSelf = true;
              var call1147 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1149 = callmethod(this, "y", [0]);
              var diff1151 = callmethod(call1149, "-", [1], var_dy);
              var call1152 = callmethod(var_point,"x()y", [1, 1], call1147, diff1151);
              return call1152
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
          obj1130.methods["up"] = func1146;
          func1146.definitionLine = 48;
          func1146.definitionModule = "musical";
          var func1153 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1153.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 49
              onSelf = true;
              var call1154 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1156 = callmethod(this, "y", [0]);
              var opresult1158 = callmethod(call1156, "+", [1], var_dy);
              var call1159 = callmethod(var_point,"x()y", [1, 1], call1154, opresult1158);
              return call1159
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
          obj1130.methods["down"] = func1153;
          func1153.definitionLine = 49;
          func1153.definitionModule = "musical";
          sourceObject = obj1130;
          lineNumber = 44
          obj1130.data["x"] = var_x__39__;
          var reader_musical_x_1160 = function() {
            return this.data["x"];
          }
          reader_musical_x_1160.def = true;
          obj1130.methods["x"] = reader_musical_x_1160;
          lineNumber = 45;
          moduleName = "musical";
          lineNumber = 44
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1130;
          lineNumber = 45
          obj1130.data["y"] = var_y__39__;
          var reader_musical_y_1161 = function() {
            return this.data["y"];
          }
          reader_musical_y_1161.def = true;
          obj1130.methods["y"] = reader_musical_y_1161;
          lineNumber = 46;
          moduleName = "musical";
          lineNumber = 45
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1130;
          sourceObject = obj1130;
          sourceObject = obj1130;
          sourceObject = obj1130;
          superDepth = origSuperDepth;
        }
        obj_init_1130.apply(obj1130, []);
        return obj1130
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
      1,
    ];
    func1129.variableArities = [
      false,
      false,
    ];
    obj1127.methods["x()y"] = func1129;
    func1129.definitionLine = 43;
    func1129.definitionModule = "musical";
    var func1162 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1163 = Grace_allocObject();
        obj1163.definitionModule = "musical";
        obj1163.definitionLine = 43;
        var inho1163 = inheritingObject;
        while (inho1163.superobj) inho1163 = inho1163.superobj;
        inho1163.superobj = obj1163;
        obj1163.data = inheritingObject.data;
        obj1163.outer = this;
        var reader_musical_outer_1164 = function() {
          return this.outer;
        }
        obj1163.methods["outer"] = reader_musical_outer_1164;
        function obj_init_1163() {
          var origSuperDepth = superDepth;
          superDepth = obj1163;
          obj1163.annotations = [];
          var func1165 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1165.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 46
              onSelf = true;
              var call1167 = callmethod(this, "x", [0]);
              var diff1169 = callmethod(call1167, "-", [1], var_dx);
              onSelf = true;
              var call1170 = callmethod(this, "y", [0]);
              var call1171 = callmethod(var_point,"x()y", [1, 1], diff1169, call1170);
              return call1171
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
          obj1163.methods["left"] = func1165;
          func1165.definitionLine = 46;
          func1165.definitionModule = "musical";
          var func1172 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 47
              onSelf = true;
              var call1174 = callmethod(this, "x", [0]);
              var opresult1176 = callmethod(call1174, "+", [1], var_dx);
              onSelf = true;
              var call1177 = callmethod(this, "y", [0]);
              var call1178 = callmethod(var_point,"x()y", [1, 1], opresult1176, call1177);
              return call1178
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
          obj1163.methods["right"] = func1172;
          func1172.definitionLine = 47;
          func1172.definitionModule = "musical";
          var func1179 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1179.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 48
              onSelf = true;
              var call1180 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1182 = callmethod(this, "y", [0]);
              var diff1184 = callmethod(call1182, "-", [1], var_dy);
              var call1185 = callmethod(var_point,"x()y", [1, 1], call1180, diff1184);
              return call1185
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
          obj1163.methods["up"] = func1179;
          func1179.definitionLine = 48;
          func1179.definitionModule = "musical";
          var func1186 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 49
              onSelf = true;
              var call1187 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1189 = callmethod(this, "y", [0]);
              var opresult1191 = callmethod(call1189, "+", [1], var_dy);
              var call1192 = callmethod(var_point,"x()y", [1, 1], call1187, opresult1191);
              return call1192
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
          ];
          func1186.variableArities = [
            false,
          ];
          obj1163.methods["down"] = func1186;
          func1186.definitionLine = 49;
          func1186.definitionModule = "musical";
          sourceObject = obj1163;
          lineNumber = 44
          obj1163.data["x"] = var_x__39__;
          var reader_musical_x_1193 = function() {
            return this.data["x"];
          }
          reader_musical_x_1193.def = true;
          obj1163.methods["x"] = reader_musical_x_1193;
          lineNumber = 45;
          moduleName = "musical";
          lineNumber = 44
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1163;
          lineNumber = 45
          obj1163.data["y"] = var_y__39__;
          var reader_musical_y_1194 = function() {
            return this.data["y"];
          }
          reader_musical_y_1194.def = true;
          obj1163.methods["y"] = reader_musical_y_1194;
          lineNumber = 46;
          moduleName = "musical";
          lineNumber = 45
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1163;
          sourceObject = obj1163;
          sourceObject = obj1163;
          sourceObject = obj1163;
          superDepth = origSuperDepth;
        }
        obj_init_1163.apply(inheritingObject, []);
        return obj1163
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1127.methods["x()y()object"] = func1162;
    var func1195 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 43
        var string1196 = new GraceString("class point");
        return string1196
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1195.paramCounts = [
    ];
    func1195.variableArities = [
    ];
    obj1127.methods["asDebugString"] = func1195;
    func1195.definitionLine = 43;
    func1195.definitionModule = "musical";
    sourceObject = obj1127;
    sourceObject = obj1127;
    superDepth = origSuperDepth;
  }
  obj_init_1127.apply(obj1127, []);
  var var_point = obj1127;
  lineNumber = 51
  var func1197 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1197.paramCounts[0])
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
  func1197.paramCounts = [
    0,
  ];
  func1197.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1197;
  func1197.definitionLine = 51;
  func1197.definitionModule = "musical";
  var obj1198 = Grace_allocObject();
  obj1198.definitionModule = "musical";
  obj1198.definitionLine = 51;
  obj1198.outer = this;
  var reader_musical_outer_1199 = function() {
    return this.outer;
  }
  obj1198.methods["outer"] = reader_musical_outer_1199;
  function obj_init_1198() {
    var origSuperDepth = superDepth;
    superDepth = obj1198;
    obj1198.annotations = [];
    var func1200 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1200.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        var obj1201 = Grace_allocObject();
        obj1201.definitionModule = "musical";
        obj1201.definitionLine = 51;
        obj1201.outer = this;
        var reader_musical_outer_1202 = function() {
          return this.outer;
        }
        obj1201.methods["outer"] = reader_musical_outer_1202;
        function obj_init_1201() {
          var origSuperDepth = superDepth;
          superDepth = obj1201;
          obj1201.annotations = [];
          var func1203 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1203.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 63
              onSelf = true;
              var call1204 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 66
              var block1205 = Grace_allocObject();
              block1205.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1205.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1205.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1205.methods["match"] = GraceBlock_match;
              block1205.methods["prefix?"] = GraceBlock_lift;
              block1205.receiver = this;
              block1205.className = 'block<musical:66>';
              block1205.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 64
                var call1206 = callmethod(var_b,"apply", [0]);
                return call1206;
              };
              var call1207 = callmethod(Grace_prelude,"for()do", [1, 1], call1204, block1205);
              lineNumber = 66
              onSelf = true;
              var call1208 = callmethod(this, "tick", [0]);
              return call1208
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
          obj1201.methods["step"] = func1203;
          func1203.definitionLine = 62;
          func1203.definitionModule = "musical";
          var func1209 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1209.paramCounts[0])
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
          func1209.paramCounts = [
            0,
          ];
          func1209.variableArities = [
            false,
          ];
          obj1201.methods["tick"] = func1209;
          func1209.definitionLine = 69;
          func1209.definitionModule = "musical";
          var func1210 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1210.paramCounts[0])
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
          func1210.paramCounts = [
            1,
          ];
          func1210.variableArities = [
            false,
          ];
          obj1201.methods["draw"] = func1210;
          func1210.definitionLine = 70;
          func1210.definitionModule = "musical";
          var func1211 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1211.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 73
              lineNumber = 64
              lineNumber = 72
              var call1212 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1213 = callmethod(this, "destX:=", [1], call1212);
              lineNumber = 74
              lineNumber = 72
              lineNumber = 73
              var call1214 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1215 = callmethod(this, "destY:=", [1], call1214);
              return call1215
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
          obj1201.methods["moveTo"] = func1211;
          func1211.definitionLine = 71;
          func1211.definitionModule = "musical";
          var func1216 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 77
              lineNumber = 73
              lineNumber = 76
              var call1217 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1218 = callmethod(this, "x:=", [1], call1217);
              lineNumber = 78
              lineNumber = 76
              lineNumber = 77
              var call1219 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1220 = callmethod(this, "y:=", [1], call1219);
              lineNumber = 79
              lineNumber = 77
              lineNumber = 78
              onSelf = true;
              var call1221 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1222 = callmethod(this, "destX:=", [1], call1221);
              lineNumber = 80
              lineNumber = 77
              lineNumber = 79
              onSelf = true;
              var call1223 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1224 = callmethod(this, "destY:=", [1], call1223);
              return call1224
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
          obj1201.methods["jumpTo"] = func1216;
          func1216.definitionLine = 75;
          func1216.definitionModule = "musical";
          var func1225 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              var bool1226 = new GraceBoolean(false)
              return bool1226
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
          obj1201.methods["isPointOver"] = func1225;
          func1225.definitionLine = 81;
          func1225.definitionModule = "musical";
          var func1227 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1227.paramCounts[0])
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
          func1227.paramCounts = [
            0,
          ];
          func1227.variableArities = [
            false,
          ];
          obj1201.methods["mousedown"] = func1227;
          func1227.definitionLine = 82;
          func1227.definitionModule = "musical";
          var func1228 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              onSelf = true;
              var call1229 = callmethod(this, "alwaysBlocks", [0]);
              var call1230 = callmethod(call1229,"push", [1], var_b);
              return call1230
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
          obj1201.methods["always"] = func1228;
          func1228.definitionLine = 83;
          func1228.definitionModule = "musical";
          var func1231 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1231.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1231.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 87
              lineNumber = 92
              var block1232 = Grace_allocObject();
              block1232.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1232.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1232.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1232.methods["match"] = GraceBlock_match;
              block1232.methods["prefix?"] = GraceBlock_lift;
              block1232.receiver = this;
              block1232.className = 'block<musical:92>';
              block1232.real = function(
              ) {
                sourceObject = this;
                lineNumber = 91
                var if1233 = var_done;
                lineNumber = 88
                var call1234 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1234)) {
                  lineNumber = 89
                  var call1235 = callmethod(var_b,"apply", [0]);
                  if1233 = call1235;
                }
                return if1233;
              };
              onSelf = true;
              var call1236 = callmethod(this, "always", [1], block1232);
              return call1236
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
            1,
          ];
          func1231.variableArities = [
            false,
            false,
          ];
          obj1201.methods["whenever()do"] = func1231;
          func1231.definitionLine = 86;
          func1231.definitionModule = "musical";
          var func1237 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1237.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1241 = callmethod(this, "angle", [0]);
              var quotient1243 = callmethod(call1241, "/", [1], new GraceNum(180));
              var prod1245 = callmethod(quotient1243, "*", [1], var_PI);
              var call1246 = callmethod(var_trig,"cos", [1], prod1245);
              var prod1248 = callmethod(call1246, "*", [1], var_dist);
              var var_y__39__ = prod1248;
              lineNumber = 95;
              moduleName = "musical";
              lineNumber = 94
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call1252 = callmethod(this, "angle", [0]);
              var quotient1254 = callmethod(call1252, "/", [1], new GraceNum(180));
              var prod1256 = callmethod(quotient1254, "*", [1], var_PI);
              var call1257 = callmethod(var_trig,"sin", [1], prod1256);
              var prod1259 = callmethod(call1257, "*", [1], var_dist);
              var var_x__39__ = prod1259;
              lineNumber = 96;
              moduleName = "musical";
              lineNumber = 95
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 97
              lineNumber = 89
              lineNumber = 97
              lineNumber = 96
              onSelf = true;
              var call1261 = callmethod(this, "x", [0]);
              var opresult1263 = callmethod(call1261, "+", [1], var_x__39__);
              onSelf = true;
              var call1264 = callmethod(this, "x:=", [1], opresult1263);
              lineNumber = 98
              lineNumber = 89
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call1266 = callmethod(this, "y", [0]);
              var opresult1268 = callmethod(call1266, "+", [1], var_y__39__);
              onSelf = true;
              var call1269 = callmethod(this, "y:=", [1], opresult1268);
              return call1269
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
          obj1201.methods["forward"] = func1237;
          func1237.definitionLine = 93;
          func1237.definitionModule = "musical";
          var func1270 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 100
              var block1271 = Grace_allocObject();
              block1271.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1271.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1271.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1271.methods["match"] = GraceBlock_match;
              block1271.methods["prefix?"] = GraceBlock_lift;
              block1271.receiver = this;
              block1271.className = 'block<musical:100>';
              block1271.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1273 = callmethod(this, "angle", [0]);
                var opresult1275 = callmethod(call1273, "<", [1], new GraceNum(0));
                return opresult1275;
              };
              lineNumber = 103
              var block1276 = Grace_allocObject();
              block1276.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1276.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1276.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1276.methods["match"] = GraceBlock_match;
              block1276.methods["prefix?"] = GraceBlock_lift;
              block1276.receiver = this;
              block1276.className = 'block<musical:103>';
              block1276.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 89
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1278 = callmethod(this, "angle", [0]);
                var opresult1280 = callmethod(call1278, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1281 = callmethod(this, "angle:=", [1], opresult1280);
                return call1281;
              };
              var call1282 = callmethod(Grace_prelude,"while()do", [1, 1], block1271, block1276);
              lineNumber = 103
              var block1283 = Grace_allocObject();
              block1283.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1283.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1283.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1283.methods["match"] = GraceBlock_match;
              block1283.methods["prefix?"] = GraceBlock_lift;
              block1283.receiver = this;
              block1283.className = 'block<musical:103>';
              block1283.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1285 = callmethod(this, "angle", [0]);
                var opresult1287 = callmethod(call1285, ">", [1], new GraceNum(360));
                return opresult1287;
              };
              lineNumber = 106
              var block1288 = Grace_allocObject();
              block1288.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1288.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1288.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1288.methods["match"] = GraceBlock_match;
              block1288.methods["prefix?"] = GraceBlock_lift;
              block1288.receiver = this;
              block1288.className = 'block<musical:106>';
              block1288.real = function(
              ) {
                sourceObject = this;
                lineNumber = 105
                lineNumber = 89
                lineNumber = 105
                lineNumber = 104
                onSelf = true;
                var call1290 = callmethod(this, "angle", [0]);
                var diff1292 = callmethod(call1290, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1293 = callmethod(this, "angle:=", [1], diff1292);
                return call1293;
              };
              var call1294 = callmethod(Grace_prelude,"while()do", [1, 1], block1283, block1288);
              return call1294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1270.paramCounts = [
            0,
          ];
          func1270.variableArities = [
            false,
          ];
          obj1201.methods["normaliseAngle"] = func1270;
          func1270.definitionLine = 99;
          func1270.definitionModule = "musical";
          var func1295 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 109
              lineNumber = 89
              lineNumber = 109
              lineNumber = 108
              onSelf = true;
              var call1297 = callmethod(this, "angle", [0]);
              var opresult1299 = callmethod(call1297, "+", [1], var_degrees);
              onSelf = true;
              var call1300 = callmethod(this, "angle:=", [1], opresult1299);
              lineNumber = 109
              onSelf = true;
              var call1301 = callmethod(this, "normaliseAngle", [0]);
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
          obj1201.methods["turn"] = func1295;
          func1295.definitionLine = 107;
          func1295.definitionModule = "musical";
          var func1302 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 115
              var if1303 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1304 = callmethod(this, "x", [0]);
              var call1305 = callmethod(var_point,"x()y", [1, 1], call1304, new GraceNum(0));
              onSelf = true;
              var call1306 = callmethod(this, "isPointOver", [1], call1305);
              if (Grace_isTrue(call1306)) {
                lineNumber = 114
                lineNumber = 113
                var bool1307 = new GraceBoolean(true)
                return bool1307
              }
              lineNumber = 118
              var if1308 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1309 = callmethod(this, "x", [0]);
              var call1310 = callmethod(var_point,"x()y", [1, 1], call1309, var_canvasHeight);
              onSelf = true;
              var call1311 = callmethod(this, "isPointOver", [1], call1310);
              if (Grace_isTrue(call1311)) {
                lineNumber = 117
                lineNumber = 116
                var bool1312 = new GraceBoolean(true)
                return bool1312
              }
              lineNumber = 121
              var if1313 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1314 = callmethod(this, "y", [0]);
              var call1315 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1314);
              onSelf = true;
              var call1316 = callmethod(this, "isPointOver", [1], call1315);
              if (Grace_isTrue(call1316)) {
                lineNumber = 120
                lineNumber = 119
                var bool1317 = new GraceBoolean(true)
                return bool1317
              }
              lineNumber = 124
              var if1318 = var_done;
              lineNumber = 121
              onSelf = true;
              var call1319 = callmethod(this, "y", [0]);
              var call1320 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1319);
              onSelf = true;
              var call1321 = callmethod(this, "isPointOver", [1], call1320);
              if (Grace_isTrue(call1321)) {
                lineNumber = 123
                lineNumber = 122
                var bool1322 = new GraceBoolean(true)
                return bool1322
              }
              lineNumber = 125
              lineNumber = 124
              var bool1323 = new GraceBoolean(false)
              return bool1323
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1302.paramCounts = [
            0,
          ];
          func1302.variableArities = [
            false,
          ];
          obj1201.methods["touchingEdge"] = func1302;
          func1302.definitionLine = 111;
          func1302.definitionModule = "musical";
          var func1324 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1324.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 128
              lineNumber = 127
              var var_dx = new GraceNum(0);
              lineNumber = 128;
              moduleName = "musical";
              lineNumber = 127
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 129
              lineNumber = 128
              var var_dy = new GraceNum(0);
              lineNumber = 129;
              moduleName = "musical";
              lineNumber = 128
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 132
              var if1325 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1326 = callmethod(this, "x", [0]);
              var call1327 = callmethod(var_point,"x()y", [1, 1], call1326, new GraceNum(0));
              onSelf = true;
              var call1328 = callmethod(this, "isPointOver", [1], call1327);
              if (Grace_isTrue(call1328)) {
                lineNumber = 130
                onSelf = true;
                var call1329 = callmethod(this, "bounceFrom", [1], var_top);
                if1325 = call1329;
              }
              lineNumber = 135
              var if1330 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1331 = callmethod(this, "x", [0]);
              var call1332 = callmethod(var_point,"x()y", [1, 1], call1331, var_canvasHeight);
              onSelf = true;
              var call1333 = callmethod(this, "isPointOver", [1], call1332);
              if (Grace_isTrue(call1333)) {
                lineNumber = 133
                onSelf = true;
                var call1334 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1330 = call1334;
              }
              lineNumber = 138
              var if1335 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1336 = callmethod(this, "y", [0]);
              var call1337 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1336);
              onSelf = true;
              var call1338 = callmethod(this, "isPointOver", [1], call1337);
              if (Grace_isTrue(call1338)) {
                lineNumber = 136
                onSelf = true;
                var call1339 = callmethod(this, "bounceFrom", [1], var_left);
                if1335 = call1339;
              }
              lineNumber = 141
              var if1340 = var_done;
              lineNumber = 138
              onSelf = true;
              var call1341 = callmethod(this, "y", [0]);
              var call1342 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1341);
              onSelf = true;
              var call1343 = callmethod(this, "isPointOver", [1], call1342);
              if (Grace_isTrue(call1343)) {
                lineNumber = 139
                onSelf = true;
                var call1344 = callmethod(this, "bounceFrom", [1], var_right);
                if1340 = call1344;
              }
              lineNumber = 141
              var block1345 = Grace_allocObject();
              block1345.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1345.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1345.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1345.methods["match"] = GraceBlock_match;
              block1345.methods["prefix?"] = GraceBlock_lift;
              block1345.receiver = this;
              block1345.className = 'block<musical:141>';
              block1345.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1346 = callmethod(this, "touchingEdge", [0]);
                return call1346;
              };
              lineNumber = 144
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
              block1347.className = 'block<musical:144>';
              block1347.real = function(
              ) {
                sourceObject = this;
                lineNumber = 142
                onSelf = true;
                var call1348 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1348;
              };
              var call1349 = callmethod(Grace_prelude,"while()do", [1, 1], block1345, block1347);
              return call1349
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1324.paramCounts = [
            0,
          ];
          func1324.variableArities = [
            false,
          ];
          obj1201.methods["bounce"] = func1324;
          func1324.definitionLine = 126;
          func1324.definitionModule = "musical";
          var func1350 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1350.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 149
              var if1351 = var_done;
              lineNumber = 146
              var string1352 = new GraceString("left");
              var opresult1355 = callmethod(var_dir, "==", [1], string1352);
              if (Grace_isTrue(opresult1355)) {
                lineNumber = 148
                lineNumber = 89
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1356 = callmethod(this, "angle", [0]);
                var diff1359 = callmethod(new GraceNum(360), "-", [1], call1356);
                onSelf = true;
                var call1360 = callmethod(this, "angle:=", [1], diff1359);
                if1351 = call1360;
              }
              lineNumber = 152
              var if1361 = var_done;
              lineNumber = 149
              var string1362 = new GraceString("right");
              var opresult1365 = callmethod(var_dir, "==", [1], string1362);
              if (Grace_isTrue(opresult1365)) {
                lineNumber = 151
                lineNumber = 89
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1366 = callmethod(this, "angle", [0]);
                var diff1369 = callmethod(new GraceNum(360), "-", [1], call1366);
                onSelf = true;
                var call1370 = callmethod(this, "angle:=", [1], diff1369);
                if1361 = call1370;
              }
              lineNumber = 155
              var if1371 = var_done;
              lineNumber = 152
              var string1372 = new GraceString("top");
              var opresult1375 = callmethod(var_dir, "==", [1], string1372);
              if (Grace_isTrue(opresult1375)) {
                lineNumber = 154
                lineNumber = 89
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1376 = callmethod(this, "angle", [0]);
                var diff1379 = callmethod(new GraceNum(180), "-", [1], call1376);
                onSelf = true;
                var call1380 = callmethod(this, "angle:=", [1], diff1379);
                if1371 = call1380;
              }
              lineNumber = 158
              var if1381 = var_done;
              lineNumber = 155
              var string1382 = new GraceString("bottom");
              var opresult1385 = callmethod(var_dir, "==", [1], string1382);
              if (Grace_isTrue(opresult1385)) {
                lineNumber = 157
                lineNumber = 89
                lineNumber = 157
                lineNumber = 156
                onSelf = true;
                var call1386 = callmethod(this, "angle", [0]);
                var diff1389 = callmethod(new GraceNum(180), "-", [1], call1386);
                onSelf = true;
                var call1390 = callmethod(this, "angle:=", [1], diff1389);
                if1381 = call1390;
              }
              lineNumber = 158
              onSelf = true;
              var call1391 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 159
              onSelf = true;
              var call1392 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1392
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1350.paramCounts = [
            1,
          ];
          func1350.variableArities = [
            false,
          ];
          obj1201.methods["bounceFrom"] = func1350;
          func1350.definitionLine = 145;
          func1350.definitionModule = "musical";
          var func1393 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1393.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 165
              var if1394 = var_done;
              lineNumber = 162
              var call1395 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1397 = callmethod(this, "x", [0]);
              var opresult1399 = callmethod(call1397, ">", [1], call1395);
              if (Grace_isTrue(opresult1399)) {
                lineNumber = 163
                onSelf = true;
                var call1400 = callmethod(this, "bounceFrom", [1], var_left);
                if1394 = call1400;
              }
              lineNumber = 168
              var if1401 = var_done;
              lineNumber = 165
              var call1402 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1404 = callmethod(this, "x", [0]);
              var opresult1406 = callmethod(call1404, "<", [1], call1402);
              if (Grace_isTrue(opresult1406)) {
                lineNumber = 166
                onSelf = true;
                var call1407 = callmethod(this, "bounceFrom", [1], var_right);
                if1401 = call1407;
              }
              lineNumber = 168
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
              block1408.className = 'block<musical:168>';
              block1408.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1409 = callmethod(this, "touching", [1], var_other);
                return call1409;
              };
              lineNumber = 171
              var block1410 = Grace_allocObject();
              block1410.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1410.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1410.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1410.methods["match"] = GraceBlock_match;
              block1410.methods["prefix?"] = GraceBlock_lift;
              block1410.receiver = this;
              block1410.className = 'block<musical:171>';
              block1410.real = function(
              ) {
                sourceObject = this;
                lineNumber = 169
                onSelf = true;
                var call1411 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1411;
              };
              var call1412 = callmethod(Grace_prelude,"while()do", [1, 1], block1408, block1410);
              return call1412
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1393.paramCounts = [
            1,
          ];
          func1393.variableArities = [
            false,
          ];
          obj1201.methods["bounceOff"] = func1393;
          func1393.definitionLine = 161;
          func1393.definitionModule = "musical";
          var func1413 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1413.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 173
              onSelf = true;
              var call1414 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1415 = callmethod(this, "y", [0]);
              var call1416 = callmethod(var_point,"x()y", [1, 1], call1414, call1415);
              var call1417 = callmethod(var_other,"isPointOver", [1], call1416);
              return call1417
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1413.paramCounts = [
            1,
          ];
          func1413.variableArities = [
            false,
          ];
          obj1201.methods["touching"] = func1413;
          func1413.definitionLine = 172;
          func1413.definitionModule = "musical";
          var func1418 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1418.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var if1419 = var_done;
              lineNumber = 176
              onSelf = true;
              var call1420 = callmethod(this, "y", [0]);
              var call1422 = callmethod(var_other,"y", [0]);
              var opresult1424 = callmethod(call1422, "!=", [1], call1420);
              onSelf = true;
              var call1426 = callmethod(this, "x", [0]);
              var call1428 = callmethod(var_other,"x", [0]);
              var opresult1430 = callmethod(call1428, "!=", [1], call1426);
              var opresult1432 = callmethod(opresult1430, "||", [1], opresult1424);
              if (Grace_isTrue(opresult1432)) {
                lineNumber = 178
                lineNumber = 176
                lineNumber = 178
                lineNumber = 177
                onSelf = true;
                var call1435 = callmethod(this, "x", [0]);
                var call1437 = callmethod(var_other,"x", [0]);
                var diff1439 = callmethod(call1437, "-", [1], call1435);
                onSelf = true;
                var call1440 = callmethod(this, "y", [0]);
                var call1442 = callmethod(var_other,"y", [0]);
                var diff1444 = callmethod(call1442, "-", [1], call1440);
                var call1445 = callmethod(var_trig,"atan2", [2], diff1439, diff1444);
                var prod1447 = callmethod(call1445, "*", [1], new GraceNum(180));
                var quotient1449 = callmethod(prod1447, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1450 = callmethod(this, "angle:=", [1], quotient1449);
                if1419 = call1450;
              }
              lineNumber = 179
              onSelf = true;
              var call1451 = callmethod(this, "normaliseAngle", [0]);
              return call1451
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1418.paramCounts = [
            1,
          ];
          func1418.variableArities = [
            false,
          ];
          obj1201.methods["face"] = func1418;
          func1418.definitionLine = 175;
          func1418.definitionModule = "musical";
          var func1452 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1452.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 182
              var string1453 = new GraceString("2d");
              var call1454 = callmethod(var_backingCanvas,"getContext", [1], string1453);
              onSelf = true;
              var call1455 = callmethod(this, "draw", [1], call1454);
              return call1455
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1452.paramCounts = [
            0,
          ];
          func1452.variableArities = [
            false,
          ];
          obj1201.methods["stamp"] = func1452;
          func1452.definitionLine = 181;
          func1452.definitionModule = "musical";
          sourceObject = obj1201;
          lineNumber = 52
          var call1456 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1457 = callmethod(call1456, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1458 = callmethod(call1457, "initialise", [0]);
          sourceObject = obj1201;
          lineNumber = 53
          var call1459 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1201;
          lineNumber = 55
          lineNumber = 54
          var_above = this;
          sourceObject = obj1201;
          lineNumber = 56
          lineNumber = 55
          var___916__ = this;
          sourceObject = obj1201;
          lineNumber = 56
          var call1460 = callmethod(var_collections,"list", [0]);
          var call1461 = callmethod(call1460,"new", [0]);
          obj1201.data["alwaysBlocks"] = call1461;
          var reader_musical_alwaysBlocks_1462 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1462.def = true;
          reader_musical_alwaysBlocks_1462.confidential = true;
          obj1201.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1462;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1461)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1201;
          lineNumber = 58
          lineNumber = 57
          var quotient1465 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1201.data["x"] = quotient1465;
          var reader_musical_x_1466 = function() {
            return this.data["x"];
          }
          obj1201.methods["x"] = reader_musical_x_1466;
          obj1201.data["x"] = quotient1465;
          var writer_musical_x_1466 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1201.methods["x:="] = writer_musical_x_1466;
          writer_musical_x_1466.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1465)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1201.mutable = true;
          sourceObject = obj1201;
          lineNumber = 59
          lineNumber = 58
          var quotient1469 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1201.data["y"] = quotient1469;
          var reader_musical_y_1470 = function() {
            return this.data["y"];
          }
          obj1201.methods["y"] = reader_musical_y_1470;
          obj1201.data["y"] = quotient1469;
          var writer_musical_y_1470 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1201.methods["y:="] = writer_musical_y_1470;
          writer_musical_y_1470.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1469)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1201.mutable = true;
          sourceObject = obj1201;
          lineNumber = 59
          onSelf = true;
          var call1471 = callmethod(this, "x", [0]);
          obj1201.data["destX"] = call1471;
          var reader_musical_destX_1472 = function() {
            return this.data["destX"];
          }
          obj1201.methods["destX"] = reader_musical_destX_1472;
          obj1201.data["destX"] = call1471;
          var writer_musical_destX_1472 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1201.methods["destX:="] = writer_musical_destX_1472;
          reader_musical_destX_1472.confidential = true;
          writer_musical_destX_1472.confidential = true;
          lineNumber = 60;
          moduleName = "musical";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1471)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1201.mutable = true;
          sourceObject = obj1201;
          lineNumber = 60
          onSelf = true;
          var call1473 = callmethod(this, "y", [0]);
          obj1201.data["destY"] = call1473;
          var reader_musical_destY_1474 = function() {
            return this.data["destY"];
          }
          obj1201.methods["destY"] = reader_musical_destY_1474;
          obj1201.data["destY"] = call1473;
          var writer_musical_destY_1474 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1201.methods["destY:="] = writer_musical_destY_1474;
          reader_musical_destY_1474.confidential = true;
          writer_musical_destY_1474.confidential = true;
          lineNumber = 61;
          moduleName = "musical";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1473)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1201.mutable = true;
          sourceObject = obj1201;
          lineNumber = 61
          obj1201.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1475 = function() {
            return this.data["angle"];
          }
          obj1201.methods["angle"] = reader_musical_angle_1475;
          obj1201.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1475 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1201.methods["angle:="] = writer_musical_angle_1475;
          reader_musical_angle_1475.confidential = true;
          writer_musical_angle_1475.confidential = true;
          lineNumber = 62;
          moduleName = "musical";
          lineNumber = 61
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1201.mutable = true;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          sourceObject = obj1201;
          superDepth = origSuperDepth;
        }
        obj_init_1201.apply(obj1201, []);
        return obj1201
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
    obj1198.methods["new"] = func1200;
    func1200.definitionLine = 51;
    func1200.definitionModule = "musical";
    var func1476 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1477 = Grace_allocObject();
        obj1477.definitionModule = "musical";
        obj1477.definitionLine = 51;
        var inho1477 = inheritingObject;
        while (inho1477.superobj) inho1477 = inho1477.superobj;
        inho1477.superobj = obj1477;
        obj1477.data = inheritingObject.data;
        obj1477.outer = this;
        var reader_musical_outer_1478 = function() {
          return this.outer;
        }
        obj1477.methods["outer"] = reader_musical_outer_1478;
        function obj_init_1477() {
          var origSuperDepth = superDepth;
          superDepth = obj1477;
          obj1477.annotations = [];
          var func1479 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1479.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 63
              onSelf = true;
              var call1480 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 66
              var block1481 = Grace_allocObject();
              block1481.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1481.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1481.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1481.methods["match"] = GraceBlock_match;
              block1481.methods["prefix?"] = GraceBlock_lift;
              block1481.receiver = this;
              block1481.className = 'block<musical:66>';
              block1481.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 64
                var call1482 = callmethod(var_b,"apply", [0]);
                return call1482;
              };
              var call1483 = callmethod(Grace_prelude,"for()do", [1, 1], call1480, block1481);
              lineNumber = 66
              onSelf = true;
              var call1484 = callmethod(this, "tick", [0]);
              return call1484
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1479.paramCounts = [
            0,
          ];
          func1479.variableArities = [
            false,
          ];
          obj1477.methods["step"] = func1479;
          func1479.definitionLine = 62;
          func1479.definitionModule = "musical";
          var func1485 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1485.paramCounts[0])
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
          func1485.paramCounts = [
            0,
          ];
          func1485.variableArities = [
            false,
          ];
          obj1477.methods["tick"] = func1485;
          func1485.definitionLine = 69;
          func1485.definitionModule = "musical";
          var func1486 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1486.paramCounts[0])
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
          func1486.paramCounts = [
            1,
          ];
          func1486.variableArities = [
            false,
          ];
          obj1477.methods["draw"] = func1486;
          func1486.definitionLine = 70;
          func1486.definitionModule = "musical";
          var func1487 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1487.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 73
              lineNumber = 64
              lineNumber = 72
              var call1488 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1489 = callmethod(this, "destX:=", [1], call1488);
              lineNumber = 74
              lineNumber = 72
              lineNumber = 73
              var call1490 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1491 = callmethod(this, "destY:=", [1], call1490);
              return call1491
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
          obj1477.methods["moveTo"] = func1487;
          func1487.definitionLine = 71;
          func1487.definitionModule = "musical";
          var func1492 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1492.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 77
              lineNumber = 73
              lineNumber = 76
              var call1493 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1494 = callmethod(this, "x:=", [1], call1493);
              lineNumber = 78
              lineNumber = 76
              lineNumber = 77
              var call1495 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1496 = callmethod(this, "y:=", [1], call1495);
              lineNumber = 79
              lineNumber = 77
              lineNumber = 78
              onSelf = true;
              var call1497 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1498 = callmethod(this, "destX:=", [1], call1497);
              lineNumber = 80
              lineNumber = 77
              lineNumber = 79
              onSelf = true;
              var call1499 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1500 = callmethod(this, "destY:=", [1], call1499);
              return call1500
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1492.paramCounts = [
            1,
          ];
          func1492.variableArities = [
            false,
          ];
          obj1477.methods["jumpTo"] = func1492;
          func1492.definitionLine = 75;
          func1492.definitionModule = "musical";
          var func1501 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1501.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 81
              var bool1502 = new GraceBoolean(false)
              return bool1502
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
          obj1477.methods["isPointOver"] = func1501;
          func1501.definitionLine = 81;
          func1501.definitionModule = "musical";
          var func1503 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1503.paramCounts[0])
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
          func1503.paramCounts = [
            0,
          ];
          func1503.variableArities = [
            false,
          ];
          obj1477.methods["mousedown"] = func1503;
          func1503.definitionLine = 82;
          func1503.definitionModule = "musical";
          var func1504 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1504.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 84
              onSelf = true;
              var call1505 = callmethod(this, "alwaysBlocks", [0]);
              var call1506 = callmethod(call1505,"push", [1], var_b);
              return call1506
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
          obj1477.methods["always"] = func1504;
          func1504.definitionLine = 83;
          func1504.definitionModule = "musical";
          var func1507 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1507.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1507.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 87
              lineNumber = 92
              var block1508 = Grace_allocObject();
              block1508.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1508.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1508.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1508.methods["match"] = GraceBlock_match;
              block1508.methods["prefix?"] = GraceBlock_lift;
              block1508.receiver = this;
              block1508.className = 'block<musical:92>';
              block1508.real = function(
              ) {
                sourceObject = this;
                lineNumber = 91
                var if1509 = var_done;
                lineNumber = 88
                var call1510 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1510)) {
                  lineNumber = 89
                  var call1511 = callmethod(var_b,"apply", [0]);
                  if1509 = call1511;
                }
                return if1509;
              };
              onSelf = true;
              var call1512 = callmethod(this, "always", [1], block1508);
              return call1512
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1507.paramCounts = [
            1,
            1,
          ];
          func1507.variableArities = [
            false,
            false,
          ];
          obj1477.methods["whenever()do"] = func1507;
          func1507.definitionLine = 86;
          func1507.definitionModule = "musical";
          var func1513 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1513.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call1517 = callmethod(this, "angle", [0]);
              var quotient1519 = callmethod(call1517, "/", [1], new GraceNum(180));
              var prod1521 = callmethod(quotient1519, "*", [1], var_PI);
              var call1522 = callmethod(var_trig,"cos", [1], prod1521);
              var prod1524 = callmethod(call1522, "*", [1], var_dist);
              var var_y__39__ = prod1524;
              lineNumber = 95;
              moduleName = "musical";
              lineNumber = 94
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call1528 = callmethod(this, "angle", [0]);
              var quotient1530 = callmethod(call1528, "/", [1], new GraceNum(180));
              var prod1532 = callmethod(quotient1530, "*", [1], var_PI);
              var call1533 = callmethod(var_trig,"sin", [1], prod1532);
              var prod1535 = callmethod(call1533, "*", [1], var_dist);
              var var_x__39__ = prod1535;
              lineNumber = 96;
              moduleName = "musical";
              lineNumber = 95
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 97
              lineNumber = 89
              lineNumber = 97
              lineNumber = 96
              onSelf = true;
              var call1537 = callmethod(this, "x", [0]);
              var opresult1539 = callmethod(call1537, "+", [1], var_x__39__);
              onSelf = true;
              var call1540 = callmethod(this, "x:=", [1], opresult1539);
              lineNumber = 98
              lineNumber = 89
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call1542 = callmethod(this, "y", [0]);
              var opresult1544 = callmethod(call1542, "+", [1], var_y__39__);
              onSelf = true;
              var call1545 = callmethod(this, "y:=", [1], opresult1544);
              return call1545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1513.paramCounts = [
            1,
          ];
          func1513.variableArities = [
            false,
          ];
          obj1477.methods["forward"] = func1513;
          func1513.definitionLine = 93;
          func1513.definitionModule = "musical";
          var func1546 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1546.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 100
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
              block1547.className = 'block<musical:100>';
              block1547.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1549 = callmethod(this, "angle", [0]);
                var opresult1551 = callmethod(call1549, "<", [1], new GraceNum(0));
                return opresult1551;
              };
              lineNumber = 103
              var block1552 = Grace_allocObject();
              block1552.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1552.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1552.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1552.methods["match"] = GraceBlock_match;
              block1552.methods["prefix?"] = GraceBlock_lift;
              block1552.receiver = this;
              block1552.className = 'block<musical:103>';
              block1552.real = function(
              ) {
                sourceObject = this;
                lineNumber = 102
                lineNumber = 89
                lineNumber = 102
                lineNumber = 101
                onSelf = true;
                var call1554 = callmethod(this, "angle", [0]);
                var opresult1556 = callmethod(call1554, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1557 = callmethod(this, "angle:=", [1], opresult1556);
                return call1557;
              };
              var call1558 = callmethod(Grace_prelude,"while()do", [1, 1], block1547, block1552);
              lineNumber = 103
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
              block1559.className = 'block<musical:103>';
              block1559.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1561 = callmethod(this, "angle", [0]);
                var opresult1563 = callmethod(call1561, ">", [1], new GraceNum(360));
                return opresult1563;
              };
              lineNumber = 106
              var block1564 = Grace_allocObject();
              block1564.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1564.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1564.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1564.methods["match"] = GraceBlock_match;
              block1564.methods["prefix?"] = GraceBlock_lift;
              block1564.receiver = this;
              block1564.className = 'block<musical:106>';
              block1564.real = function(
              ) {
                sourceObject = this;
                lineNumber = 105
                lineNumber = 89
                lineNumber = 105
                lineNumber = 104
                onSelf = true;
                var call1566 = callmethod(this, "angle", [0]);
                var diff1568 = callmethod(call1566, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1569 = callmethod(this, "angle:=", [1], diff1568);
                return call1569;
              };
              var call1570 = callmethod(Grace_prelude,"while()do", [1, 1], block1559, block1564);
              return call1570
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1546.paramCounts = [
            0,
          ];
          func1546.variableArities = [
            false,
          ];
          obj1477.methods["normaliseAngle"] = func1546;
          func1546.definitionLine = 99;
          func1546.definitionModule = "musical";
          var func1571 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1571.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 109
              lineNumber = 89
              lineNumber = 109
              lineNumber = 108
              onSelf = true;
              var call1573 = callmethod(this, "angle", [0]);
              var opresult1575 = callmethod(call1573, "+", [1], var_degrees);
              onSelf = true;
              var call1576 = callmethod(this, "angle:=", [1], opresult1575);
              lineNumber = 109
              onSelf = true;
              var call1577 = callmethod(this, "normaliseAngle", [0]);
              return call1577
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1571.paramCounts = [
            1,
          ];
          func1571.variableArities = [
            false,
          ];
          obj1477.methods["turn"] = func1571;
          func1571.definitionLine = 107;
          func1571.definitionModule = "musical";
          var func1578 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1578.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 115
              var if1579 = var_done;
              lineNumber = 112
              onSelf = true;
              var call1580 = callmethod(this, "x", [0]);
              var call1581 = callmethod(var_point,"x()y", [1, 1], call1580, new GraceNum(0));
              onSelf = true;
              var call1582 = callmethod(this, "isPointOver", [1], call1581);
              if (Grace_isTrue(call1582)) {
                lineNumber = 114
                lineNumber = 113
                var bool1583 = new GraceBoolean(true)
                return bool1583
              }
              lineNumber = 118
              var if1584 = var_done;
              lineNumber = 115
              onSelf = true;
              var call1585 = callmethod(this, "x", [0]);
              var call1586 = callmethod(var_point,"x()y", [1, 1], call1585, var_canvasHeight);
              onSelf = true;
              var call1587 = callmethod(this, "isPointOver", [1], call1586);
              if (Grace_isTrue(call1587)) {
                lineNumber = 117
                lineNumber = 116
                var bool1588 = new GraceBoolean(true)
                return bool1588
              }
              lineNumber = 121
              var if1589 = var_done;
              lineNumber = 118
              onSelf = true;
              var call1590 = callmethod(this, "y", [0]);
              var call1591 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1590);
              onSelf = true;
              var call1592 = callmethod(this, "isPointOver", [1], call1591);
              if (Grace_isTrue(call1592)) {
                lineNumber = 120
                lineNumber = 119
                var bool1593 = new GraceBoolean(true)
                return bool1593
              }
              lineNumber = 124
              var if1594 = var_done;
              lineNumber = 121
              onSelf = true;
              var call1595 = callmethod(this, "y", [0]);
              var call1596 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1595);
              onSelf = true;
              var call1597 = callmethod(this, "isPointOver", [1], call1596);
              if (Grace_isTrue(call1597)) {
                lineNumber = 123
                lineNumber = 122
                var bool1598 = new GraceBoolean(true)
                return bool1598
              }
              lineNumber = 125
              lineNumber = 124
              var bool1599 = new GraceBoolean(false)
              return bool1599
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1578.paramCounts = [
            0,
          ];
          func1578.variableArities = [
            false,
          ];
          obj1477.methods["touchingEdge"] = func1578;
          func1578.definitionLine = 111;
          func1578.definitionModule = "musical";
          var func1600 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 128
              lineNumber = 127
              var var_dx = new GraceNum(0);
              lineNumber = 128;
              moduleName = "musical";
              lineNumber = 127
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 129
              lineNumber = 128
              var var_dy = new GraceNum(0);
              lineNumber = 129;
              moduleName = "musical";
              lineNumber = 128
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 132
              var if1601 = var_done;
              lineNumber = 129
              onSelf = true;
              var call1602 = callmethod(this, "x", [0]);
              var call1603 = callmethod(var_point,"x()y", [1, 1], call1602, new GraceNum(0));
              onSelf = true;
              var call1604 = callmethod(this, "isPointOver", [1], call1603);
              if (Grace_isTrue(call1604)) {
                lineNumber = 130
                onSelf = true;
                var call1605 = callmethod(this, "bounceFrom", [1], var_top);
                if1601 = call1605;
              }
              lineNumber = 135
              var if1606 = var_done;
              lineNumber = 132
              onSelf = true;
              var call1607 = callmethod(this, "x", [0]);
              var call1608 = callmethod(var_point,"x()y", [1, 1], call1607, var_canvasHeight);
              onSelf = true;
              var call1609 = callmethod(this, "isPointOver", [1], call1608);
              if (Grace_isTrue(call1609)) {
                lineNumber = 133
                onSelf = true;
                var call1610 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1606 = call1610;
              }
              lineNumber = 138
              var if1611 = var_done;
              lineNumber = 135
              onSelf = true;
              var call1612 = callmethod(this, "y", [0]);
              var call1613 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1612);
              onSelf = true;
              var call1614 = callmethod(this, "isPointOver", [1], call1613);
              if (Grace_isTrue(call1614)) {
                lineNumber = 136
                onSelf = true;
                var call1615 = callmethod(this, "bounceFrom", [1], var_left);
                if1611 = call1615;
              }
              lineNumber = 141
              var if1616 = var_done;
              lineNumber = 138
              onSelf = true;
              var call1617 = callmethod(this, "y", [0]);
              var call1618 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1617);
              onSelf = true;
              var call1619 = callmethod(this, "isPointOver", [1], call1618);
              if (Grace_isTrue(call1619)) {
                lineNumber = 139
                onSelf = true;
                var call1620 = callmethod(this, "bounceFrom", [1], var_right);
                if1616 = call1620;
              }
              lineNumber = 141
              var block1621 = Grace_allocObject();
              block1621.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1621.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1621.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1621.methods["match"] = GraceBlock_match;
              block1621.methods["prefix?"] = GraceBlock_lift;
              block1621.receiver = this;
              block1621.className = 'block<musical:141>';
              block1621.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1622 = callmethod(this, "touchingEdge", [0]);
                return call1622;
              };
              lineNumber = 144
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
              block1623.className = 'block<musical:144>';
              block1623.real = function(
              ) {
                sourceObject = this;
                lineNumber = 142
                onSelf = true;
                var call1624 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1624;
              };
              var call1625 = callmethod(Grace_prelude,"while()do", [1, 1], block1621, block1623);
              return call1625
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1600.paramCounts = [
            0,
          ];
          func1600.variableArities = [
            false,
          ];
          obj1477.methods["bounce"] = func1600;
          func1600.definitionLine = 126;
          func1600.definitionModule = "musical";
          var func1626 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1626.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 149
              var if1627 = var_done;
              lineNumber = 146
              var string1628 = new GraceString("left");
              var opresult1631 = callmethod(var_dir, "==", [1], string1628);
              if (Grace_isTrue(opresult1631)) {
                lineNumber = 148
                lineNumber = 89
                lineNumber = 148
                lineNumber = 147
                onSelf = true;
                var call1632 = callmethod(this, "angle", [0]);
                var diff1635 = callmethod(new GraceNum(360), "-", [1], call1632);
                onSelf = true;
                var call1636 = callmethod(this, "angle:=", [1], diff1635);
                if1627 = call1636;
              }
              lineNumber = 152
              var if1637 = var_done;
              lineNumber = 149
              var string1638 = new GraceString("right");
              var opresult1641 = callmethod(var_dir, "==", [1], string1638);
              if (Grace_isTrue(opresult1641)) {
                lineNumber = 151
                lineNumber = 89
                lineNumber = 151
                lineNumber = 150
                onSelf = true;
                var call1642 = callmethod(this, "angle", [0]);
                var diff1645 = callmethod(new GraceNum(360), "-", [1], call1642);
                onSelf = true;
                var call1646 = callmethod(this, "angle:=", [1], diff1645);
                if1637 = call1646;
              }
              lineNumber = 155
              var if1647 = var_done;
              lineNumber = 152
              var string1648 = new GraceString("top");
              var opresult1651 = callmethod(var_dir, "==", [1], string1648);
              if (Grace_isTrue(opresult1651)) {
                lineNumber = 154
                lineNumber = 89
                lineNumber = 154
                lineNumber = 153
                onSelf = true;
                var call1652 = callmethod(this, "angle", [0]);
                var diff1655 = callmethod(new GraceNum(180), "-", [1], call1652);
                onSelf = true;
                var call1656 = callmethod(this, "angle:=", [1], diff1655);
                if1647 = call1656;
              }
              lineNumber = 158
              var if1657 = var_done;
              lineNumber = 155
              var string1658 = new GraceString("bottom");
              var opresult1661 = callmethod(var_dir, "==", [1], string1658);
              if (Grace_isTrue(opresult1661)) {
                lineNumber = 157
                lineNumber = 89
                lineNumber = 157
                lineNumber = 156
                onSelf = true;
                var call1662 = callmethod(this, "angle", [0]);
                var diff1665 = callmethod(new GraceNum(180), "-", [1], call1662);
                onSelf = true;
                var call1666 = callmethod(this, "angle:=", [1], diff1665);
                if1657 = call1666;
              }
              lineNumber = 158
              onSelf = true;
              var call1667 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 159
              onSelf = true;
              var call1668 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1668
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1626.paramCounts = [
            1,
          ];
          func1626.variableArities = [
            false,
          ];
          obj1477.methods["bounceFrom"] = func1626;
          func1626.definitionLine = 145;
          func1626.definitionModule = "musical";
          var func1669 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1669.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 165
              var if1670 = var_done;
              lineNumber = 162
              var call1671 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1673 = callmethod(this, "x", [0]);
              var opresult1675 = callmethod(call1673, ">", [1], call1671);
              if (Grace_isTrue(opresult1675)) {
                lineNumber = 163
                onSelf = true;
                var call1676 = callmethod(this, "bounceFrom", [1], var_left);
                if1670 = call1676;
              }
              lineNumber = 168
              var if1677 = var_done;
              lineNumber = 165
              var call1678 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1680 = callmethod(this, "x", [0]);
              var opresult1682 = callmethod(call1680, "<", [1], call1678);
              if (Grace_isTrue(opresult1682)) {
                lineNumber = 166
                onSelf = true;
                var call1683 = callmethod(this, "bounceFrom", [1], var_right);
                if1677 = call1683;
              }
              lineNumber = 168
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
              block1684.className = 'block<musical:168>';
              block1684.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1685 = callmethod(this, "touching", [1], var_other);
                return call1685;
              };
              lineNumber = 171
              var block1686 = Grace_allocObject();
              block1686.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1686.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1686.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1686.methods["match"] = GraceBlock_match;
              block1686.methods["prefix?"] = GraceBlock_lift;
              block1686.receiver = this;
              block1686.className = 'block<musical:171>';
              block1686.real = function(
              ) {
                sourceObject = this;
                lineNumber = 169
                onSelf = true;
                var call1687 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1687;
              };
              var call1688 = callmethod(Grace_prelude,"while()do", [1, 1], block1684, block1686);
              return call1688
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1669.paramCounts = [
            1,
          ];
          func1669.variableArities = [
            false,
          ];
          obj1477.methods["bounceOff"] = func1669;
          func1669.definitionLine = 161;
          func1669.definitionModule = "musical";
          var func1689 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1689.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 173
              onSelf = true;
              var call1690 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1691 = callmethod(this, "y", [0]);
              var call1692 = callmethod(var_point,"x()y", [1, 1], call1690, call1691);
              var call1693 = callmethod(var_other,"isPointOver", [1], call1692);
              return call1693
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1689.paramCounts = [
            1,
          ];
          func1689.variableArities = [
            false,
          ];
          obj1477.methods["touching"] = func1689;
          func1689.definitionLine = 172;
          func1689.definitionModule = "musical";
          var func1694 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1694.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 179
              var if1695 = var_done;
              lineNumber = 176
              onSelf = true;
              var call1696 = callmethod(this, "y", [0]);
              var call1698 = callmethod(var_other,"y", [0]);
              var opresult1700 = callmethod(call1698, "!=", [1], call1696);
              onSelf = true;
              var call1702 = callmethod(this, "x", [0]);
              var call1704 = callmethod(var_other,"x", [0]);
              var opresult1706 = callmethod(call1704, "!=", [1], call1702);
              var opresult1708 = callmethod(opresult1706, "||", [1], opresult1700);
              if (Grace_isTrue(opresult1708)) {
                lineNumber = 178
                lineNumber = 176
                lineNumber = 178
                lineNumber = 177
                onSelf = true;
                var call1711 = callmethod(this, "x", [0]);
                var call1713 = callmethod(var_other,"x", [0]);
                var diff1715 = callmethod(call1713, "-", [1], call1711);
                onSelf = true;
                var call1716 = callmethod(this, "y", [0]);
                var call1718 = callmethod(var_other,"y", [0]);
                var diff1720 = callmethod(call1718, "-", [1], call1716);
                var call1721 = callmethod(var_trig,"atan2", [2], diff1715, diff1720);
                var prod1723 = callmethod(call1721, "*", [1], new GraceNum(180));
                var quotient1725 = callmethod(prod1723, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1726 = callmethod(this, "angle:=", [1], quotient1725);
                if1695 = call1726;
              }
              lineNumber = 179
              onSelf = true;
              var call1727 = callmethod(this, "normaliseAngle", [0]);
              return call1727
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1694.paramCounts = [
            1,
          ];
          func1694.variableArities = [
            false,
          ];
          obj1477.methods["face"] = func1694;
          func1694.definitionLine = 175;
          func1694.definitionModule = "musical";
          var func1728 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1728.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "musical";
            try {
              lineNumber = 182
              var string1729 = new GraceString("2d");
              var call1730 = callmethod(var_backingCanvas,"getContext", [1], string1729);
              onSelf = true;
              var call1731 = callmethod(this, "draw", [1], call1730);
              return call1731
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1728.paramCounts = [
            0,
          ];
          func1728.variableArities = [
            false,
          ];
          obj1477.methods["stamp"] = func1728;
          func1728.definitionLine = 181;
          func1728.definitionModule = "musical";
          sourceObject = obj1477;
          lineNumber = 52
          var call1732 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1733 = callmethod(call1732, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1734 = callmethod(call1733, "initialise", [0]);
          sourceObject = obj1477;
          lineNumber = 53
          var call1735 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1477;
          lineNumber = 55
          lineNumber = 54
          var_above = this;
          sourceObject = obj1477;
          lineNumber = 56
          lineNumber = 55
          var___916__ = this;
          sourceObject = obj1477;
          lineNumber = 56
          var call1736 = callmethod(var_collections,"list", [0]);
          var call1737 = callmethod(call1736,"new", [0]);
          obj1477.data["alwaysBlocks"] = call1737;
          var reader_musical_alwaysBlocks_1738 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_musical_alwaysBlocks_1738.def = true;
          reader_musical_alwaysBlocks_1738.confidential = true;
          obj1477.methods["alwaysBlocks"] = reader_musical_alwaysBlocks_1738;
          lineNumber = 57;
          moduleName = "musical";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1737)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1477;
          lineNumber = 58
          lineNumber = 57
          var quotient1741 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1477.data["x"] = quotient1741;
          var reader_musical_x_1742 = function() {
            return this.data["x"];
          }
          obj1477.methods["x"] = reader_musical_x_1742;
          obj1477.data["x"] = quotient1741;
          var writer_musical_x_1742 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1477.methods["x:="] = writer_musical_x_1742;
          writer_musical_x_1742.confidential = true;
          lineNumber = 58;
          moduleName = "musical";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1741)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1477.mutable = true;
          sourceObject = obj1477;
          lineNumber = 59
          lineNumber = 58
          var quotient1745 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1477.data["y"] = quotient1745;
          var reader_musical_y_1746 = function() {
            return this.data["y"];
          }
          obj1477.methods["y"] = reader_musical_y_1746;
          obj1477.data["y"] = quotient1745;
          var writer_musical_y_1746 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1477.methods["y:="] = writer_musical_y_1746;
          writer_musical_y_1746.confidential = true;
          lineNumber = 59;
          moduleName = "musical";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1745)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1477.mutable = true;
          sourceObject = obj1477;
          lineNumber = 59
          onSelf = true;
          var call1747 = callmethod(this, "x", [0]);
          obj1477.data["destX"] = call1747;
          var reader_musical_destX_1748 = function() {
            return this.data["destX"];
          }
          obj1477.methods["destX"] = reader_musical_destX_1748;
          obj1477.data["destX"] = call1747;
          var writer_musical_destX_1748 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1477.methods["destX:="] = writer_musical_destX_1748;
          reader_musical_destX_1748.confidential = true;
          writer_musical_destX_1748.confidential = true;
          lineNumber = 60;
          moduleName = "musical";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1747)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1477.mutable = true;
          sourceObject = obj1477;
          lineNumber = 60
          onSelf = true;
          var call1749 = callmethod(this, "y", [0]);
          obj1477.data["destY"] = call1749;
          var reader_musical_destY_1750 = function() {
            return this.data["destY"];
          }
          obj1477.methods["destY"] = reader_musical_destY_1750;
          obj1477.data["destY"] = call1749;
          var writer_musical_destY_1750 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1477.methods["destY:="] = writer_musical_destY_1750;
          reader_musical_destY_1750.confidential = true;
          writer_musical_destY_1750.confidential = true;
          lineNumber = 61;
          moduleName = "musical";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1749)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1477.mutable = true;
          sourceObject = obj1477;
          lineNumber = 61
          obj1477.data["angle"] = new GraceNum(180);
          var reader_musical_angle_1751 = function() {
            return this.data["angle"];
          }
          obj1477.methods["angle"] = reader_musical_angle_1751;
          obj1477.data["angle"] = new GraceNum(180);
          var writer_musical_angle_1751 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1477.methods["angle:="] = writer_musical_angle_1751;
          reader_musical_angle_1751.confidential = true;
          writer_musical_angle_1751.confidential = true;
          lineNumber = 62;
          moduleName = "musical";
          lineNumber = 61
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1477.mutable = true;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          sourceObject = obj1477;
          superDepth = origSuperDepth;
        }
        obj_init_1477.apply(inheritingObject, []);
        return obj1477
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1198.methods["new()object"] = func1476;
    var func1752 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 51
        var string1753 = new GraceString("class drawable");
        return string1753
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1752.paramCounts = [
    ];
    func1752.variableArities = [
    ];
    obj1198.methods["asDebugString"] = func1752;
    func1752.definitionLine = 51;
    func1752.definitionModule = "musical";
    sourceObject = obj1198;
    sourceObject = obj1198;
    superDepth = origSuperDepth;
  }
  obj_init_1198.apply(obj1198, []);
  var var_drawable = obj1198;
  lineNumber = 186
  lineNumber = 223
  lineNumber = 259
  lineNumber = 302
  lineNumber = 319
  var obj1754 = Grace_allocObject();
  obj1754.definitionModule = "musical";
  obj1754.definitionLine = 319;
  obj1754.outer = this;
  var reader_musical_outer_1755 = function() {
    return this.outer;
  }
  obj1754.methods["outer"] = reader_musical_outer_1755;
  function obj_init_1754() {
    var origSuperDepth = superDepth;
    superDepth = obj1754;
    obj1754.annotations = [];
    var func1756 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1756.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 322
        onSelf = true;
        var call1757 = callmethod(this, "position", [0]);
        var call1758 = callmethod(call1757,"x", [0]);
        return call1758
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1756.paramCounts = [
      0,
    ];
    func1756.variableArities = [
      false,
    ];
    obj1754.methods["x"] = func1756;
    func1756.definitionLine = 321;
    func1756.definitionModule = "musical";
    var func1759 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1759.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 325
        onSelf = true;
        var call1760 = callmethod(this, "position", [0]);
        var call1761 = callmethod(call1760,"y", [0]);
        return call1761
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1759.paramCounts = [
      0,
    ];
    func1759.variableArities = [
      false,
    ];
    obj1754.methods["y"] = func1759;
    func1759.definitionLine = 324;
    func1759.definitionModule = "musical";
    var func1762 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1762.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "musical";
      try {
        lineNumber = 328
        onSelf = true;
        var call1763 = callmethod(this, "position", [0]);
        return call1763
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1762.paramCounts = [
      0,
    ];
    func1762.variableArities = [
      false,
    ];
    obj1754.methods["location"] = func1762;
    func1762.definitionLine = 327;
    func1762.definitionModule = "musical";
    sourceObject = obj1754;
    lineNumber = 320
    var call1764 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1754.data["position"] = call1764;
    var reader_musical_position_1765 = function() {
      return this.data["position"];
    }
    obj1754.methods["position"] = reader_musical_position_1765;
    obj1754.data["position"] = call1764;
    var writer_musical_position_1765 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1754.methods["position:="] = writer_musical_position_1765;
    lineNumber = 320;
    moduleName = "musical";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1764)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1754.mutable = true;
    sourceObject = obj1754;
    sourceObject = obj1754;
    sourceObject = obj1754;
    superDepth = origSuperDepth;
  }
  obj_init_1754.apply(obj1754, []);
  var var_mouse = obj1754;
  lineNumber = 325
  var func1766 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1766.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "musical";
    try {
      lineNumber = 319
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1766.paramCounts = [
    0,
  ];
  func1766.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1766;
  func1766.definitionLine = 325;
  func1766.definitionModule = "musical";
  lineNumber = 319;
  moduleName = "musical";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 411
  lineNumber = 470
  lineNumber = 502
  lineNumber = 508
  lineNumber = 515
  lineNumber = 520
  lineNumber = 525
  lineNumber = 530
  lineNumber = 535
  lineNumber = 540
  lineNumber = 546
  return this;
}
gracecode_musical.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['musical'] = "fresh:image:\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n url:=\n face\n bounceFrom\n always\n touchingEdge\n imgTag\n step\n destY:=\n whenever()do\n x:=\n height:=\n normaliseAngle\n width:=\n x\n y\n width\n stamp\n angle\n url\n turn\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\nconstructors-of:drawable:\n new\nconstructors-of:point:\n x()y\nmodules:\n mgcollections\n StandardPrelude\npublic:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n playing\n playing:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n playSound\n stopSound\n start\n stop\n atModuleEnd\n A\n B\n C\n D\n E\n F\n G\n Instrument\n monoSynth\n pluckSynth\n polySynth\n fmSynth\n membraneSynth\n duoSynth\n bass\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:circle:\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n radius\n face\n bounceFrom\n always\n touchingEdge\n radius:=\n step\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n x\n y\n stamp\n angle\n turn\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\nmethods-of:point.x()y:\n down\n up\n x\n y\n left\n right\nfresh:rectangle:\n forward\n height\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\n colour:=\n x:=\n height:=\n normaliseAngle\n colour\n width:=\n x\n y\n width\n stamp\n angle\n asString\n turn\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\nmethods-of:drawable.new:\n forward\n x\n y\n moveTo\n bounceOff\n angle:=\n jumpTo\n mousedown\n isPointOver\n stamp\n angle\n face\n bounceFrom\n always\n alwaysBlocks\n whenever()do\n turn\n bounce\n step\n touchingEdge\n destX:=\n destY:=\n touching\n destX\n destY\n tick\n draw\n x:=\n y:=\n normaliseAngle\npath:\n musical\nclasses:\n point\n drawable\nfresh:value:\n forward\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n face\n bounceFrom\n always\n touchingEdge\n step\n destY:=\n whenever()do\n colour:=\n x:=\n normaliseAngle\n colour\n label:=\n x\n y\n label\n stamp\n angle\n turn\n bounceOff\n bounce\n destX:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\nconfidential:\n";
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
    "//Graceful Music",
    "var playing := false",
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
    "//Notes",
    "method A(){",
    "    dom.window.t_add(\"a1\")",
    "}",
    "method B(){",
    "    dom.window.t_add(\"b1\")",
    "}",
    "method C(){",
    "    dom.window.t_add(\"c1\")",
    "}",
    "method D(){",
    "    dom.window.t_add(\"d1\")",
    "}",
    "method E(){",
    "    dom.window.t_add(\"e1\")",
    "}",
    "method F(){",
    "    dom.window.t_add(\"f1\")",
    "}",
    "method G(){",
    "    dom.window.t_add(\"g1\")",
    "}",
    "",
    "//Instruments",
    "",
    "method Instrument(blocks){",
    "    dom.window.t_init()",
    "    playing := true",
    "    blocks.apply",
    "    playing := false",
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
    "",
    "method bass(blocks) {",
    "    dom.window.t_init()",
    "    playing := true",
    "    blocks.apply",
    "    playing := false",
    "",
    "    dom.window.t_bass()",
    "    ",
    "    dom.window.console.log(\"func: play\")",
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
    "}",
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
