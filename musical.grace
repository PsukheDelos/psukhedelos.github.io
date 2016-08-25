import "mgcollections" as collections
import "dom" as dom
import "math" as randomModule

import "StandardPrelude" as sp
inherits sp.new

var document
var canvas
var backingCanvas
var backingContext
var mouseDownListener
var mouseMoveListener

def trig = dom.window.Math
def PI = 3.14159

var stopRunning := false
var initialised := false
var backgroundColour := "white"
def registeredObjects = collections.list.new
def stepBlocks = collections.list.new
def audioTags = collections.map.new

var canvasWidth
var canvasHeight

def left = "left"
def right = "right"
def top = "top"
def bottom = "bottom"

var centre
var leftCentre
var rightCentre

var above
var Δ

class point.x(x')y(y') {
    def x is public = x'
    def y is public = y'
    method left(dx) { point.x(x - dx)y(y) }
    method right(dx) { point.x(x + dx)y(y) }
    method up(dy) { point.x(x)y(y - dy) }
    method down(dy) { point.x(x)y(y + dy) }
}
class drawable.new {
    initialise
    registeredObjects.push(self)
    above := self
    Δ := self
    def alwaysBlocks = collections.list.new
    var x is readable := canvasWidth / 2
    var y is readable := canvasHeight / 2
    var destX := x
    var destY := y
    var angle := 180
    method step {
        for (alwaysBlocks) do {b->
            b.apply
        }
        tick

    }
    method tick {}
    method draw(ctx) {}
    method moveTo(p) {
        destX := p.x
        destY := p.y
    }
    method jumpTo(p) {
        x := p.x
        y := p.y
        destX := x
        destY := y
    }
    method isPointOver(p) { false }
    method mousedown {}
    method always(b) {
        alwaysBlocks.push(b)
    }
    method whenever(cond)do(b) {
        always {
            if (cond.apply) then {
                b.apply
            }
        }
    }
    method forward(dist) {
        def y' = trig.cos(angle / 180 * PI) * dist
        def x' = trig.sin(angle / 180 * PI) * dist
        x := x + x'
        y := y + y'
    }
    method normaliseAngle {
        while {angle < 0} do {
            angle := angle + 360
        }
        while {angle > 360} do {
            angle := angle - 360
        }
    }
    method turn(degrees) {
        angle := angle + degrees
        normaliseAngle
    }
    method touchingEdge {
        if (isPointOver(point.x(x)y(0))) then {
            return true
        }
        if (isPointOver(point.x(x)y(canvasHeight))) then {
            return true
        }
        if (isPointOver(point.x(0)y(y))) then {
            return true
        }
        if (isPointOver(point.x(canvasWidth)y(y))) then {
            return true
        }
        return false
    }
    method bounce {
        var dx := 0
        var dy := 0
        if (isPointOver(point.x(x)y(0))) then {
            bounceFrom(top)
        }
        if (isPointOver(point.x(x)y(canvasHeight))) then {
            bounceFrom(bottom)
        }
        if (isPointOver(point.x(0)y(y))) then {
            bounceFrom(left)
        }
        if (isPointOver(point.x(canvasWidth)y(y))) then {
            bounceFrom(right)
        }
        while { touchingEdge } do {
            forward 1
        }
    }
    method bounceFrom(dir) {
        if (dir == "left") then {
            angle := 360 - angle
        }
        if (dir == "right") then {
            angle := 360 - angle
        }
        if (dir == "top") then {
            angle := 180 - angle
        }
        if (dir == "bottom") then {
            angle := 180 - angle
        }
        normaliseAngle
        forward 2
    }
    method bounceOff(other) {
        if (x > other.x) then {
            bounceFrom(left)
        }
        if (x < other.x) then {
            bounceFrom(right)
        }
        while { touching(other) } do {
            forward 1
        }
    }
    method touching(other) {
        other.isPointOver(point.x(x)y(y))
    }
    method face(other) {
        if ((other.x != x) || (other.y != y)) then {
            angle := trig.atan2(other.x - x, other.y - y) * 180 / 3.1415
        }
        normaliseAngle
    }
    method stamp {
        draw(backingCanvas.getContext("2d"))
    }
}

method rectangle {
    object {
        inherits drawable.new
        var width := 100
        var height := 50
        var colour := "blue"
        method draw(ctx) {
            ctx.fillStyle := colour
            ctx.fillRect(x - width / 2, y - height / 2, width, height)
        }
        method isPointOver(p) {
            if (p.x < (x - width / 2)) then {
                return false
            }
            if (p.x > (x + width / 2)) then {
                return false
            }
            if (p.y < (y - height / 2)) then {
                return false
            }
            if (p.y > (y + height / 2)) then {
                return false
            }
            return true
        }
        method asString {
            return "rectangle"
        }
    }
}

type SniffCircle = {
    x -> Number
    y -> Number
    radius -> Number
    colour -> String
}
method circle {
    object {
        inherits drawable.new
        var radius is readable := 25
        var colour is readable := "green"
        method draw(ctx) {
            ctx.fillStyle := colour
            ctx.beginPath
            ctx.arc(x, y, radius, 0, 6.283)
            ctx.fill
        }
        method isPointOver(p) {
            def dx = (p.x - x)
            def dy = (p.y - y)
            def dist = (dx * dx + dy * dy) ^ 0.5
            if (dist <= radius) then {
                return true
            }
            return false
        }
        method touching(other) {
            if (SniffCircle.match(other)) then {
                def n2 = (((x - other.x) ^ 2) + ((y - other.y) ^ 2))
                if (n2 == 0) then {
                    return true
                }
                if ((n2 ^ 0.5) < (other.radius + radius)) then {
                    return true
                }
                return false
            }
            super.touching(other)
        }
    }
}

method image {
    object {
        inherits drawable.new
        var width := 64
        var height := 64
        def imgTag = dom.document.createElement("img")
        method url {
            imgTag.src
        }
        method url:=(s) {
            imgTag.src := s
        }
        method draw(ctx) {
            ctx.save
            ctx.translate(x, y)
            ctx.rotate(-(angle + 180) / 180 * 3.1415)
            ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)
            ctx.restore
        }
        method isPointOver(p) {
            // Rotate p and express it relative to (x, y), then just
            // check whether it's within the bounds of the rectangle.
            def c = trig.cos(-(angle + 180) / 180 * 3.1415)
            def s = trig.sin(-(angle + 180) / 180 * 3.1415)
            def rotatedX = c * (p.x - x) - s * (p.y - y)
            def rotatedY = s * (p.x - x) + c * (p.y - y)
            if (rotatedX < (-width / 2)) then {
                return false
            }
            if (rotatedX > (width / 2)) then {
                return false
            }
            if (rotatedY < (-height / 2)) then {
                return false
            }
            if (rotatedY > (height / 2)) then {
                return false
            }
            return true
        }
    }
}

method value(b) {
    object {
        inherits drawable.new
        var colour := "blue"
        var label := ""
        method draw(ctx) {
            ctx.fillStyle := colour
            ctx.font := "20px sans-serif"
            if (label != "") then {
                ctx.fillText("{label} {b.apply}", x, y)
            } else {
                ctx.fillText("{b.apply}", x, y)
            }
        }
    }
}

def mouse = object {
    var position is public := point.x(0)y(0)
    method x {
        position.x
    }
    method y {
        position.y
    }
    method location {
        position
    }
}

method clear {
    def ctx = backingCanvas.getContext("2d")
    ctx.fillStyle := backgroundColour
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}
method always(blocks) {
    // dom.window.console.log("always")
    // blocks.apply
    var count := 0
    for (blocks) do {b->
        count := count + 1
        dom.window.console.log("blocks")
        dom.window.console.log(count)
    }
    // stopRunning := false
    // dom.while { !stopRunning } waiting 10 do {
    //     dom.window.console.log("dom.while")
    //     for (registeredObjects) do {obj->
    //         dom.window.console.log("registeredObjects")
    //         obj.step
    //     }
    //     for (blocks) do {step->
    //         dom.window.console.log("blocks");
    //         step.apply
    //     }
    // }
}
method whenever(c)do(b) {
    stepBlocks.push({
        if (c.apply) then { b.apply }
    })
}
method hue(h)saturation(s)lightness(l) {
    return "hsl({h}, {s}%, {l}%)"
}
method h(h)s(s)l(l) {
    hue(h)saturation(s)lightness(l)
}
method initialise {
    // dom.window.console.log("initialise")
    if (initialised) then {
        return false
    }
    initialised := true
    document := dom.document
    canvas := document.getElementById("standard-canvas")
    canvasWidth := canvas.width
    canvasHeight := canvas.height
    centre := point.x(canvasWidth / 2)y(canvasHeight / 2)
    leftCentre := point.x(0)y(canvasHeight / 2)
    rightCentre := point.x(canvasWidth)y(canvasHeight / 2)
    mouse.position := centre
    // Save the listener functions so that we can remove them
    // later on.
    mouseMoveListener := { ev ->
        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight
        def y = (ev.clientY - canvas.offsetTop - 7) / canvas.offsetHeight * canvasHeight
        mouse.position := point.x(x)y(y)
    }
    canvas.addEventListener("mousemove", mouseMoveListener)
    mouseDownListener := { ev ->
        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight
        def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight
        // if ((x > (canvasWidth - 20)) && (y < 20)) then {
        ev.preventDefault
        // stop
        // }
        def p = point.x(x)y(y)
        for (registeredObjects) do {obj->
            if (obj.isPointOver(p)) then {
                obj.mousedown
                ev.preventDefault
            }
        }
    }
    canvas.addEventListener("mousedown", mouseDownListener)
}
method background(col) {
    backgroundColour := col
}
method random(n) {
    (n * randomModule.random).truncate
}

method playSound(url) {
    if (audioTags.contains(url)) then {
        def audio = audioTags.get(url)
        audio.currentTime := 0
        audio.play
    } else {
        def audio = dom.document.createElement "audio"
        audioTags.put(url, audio)
        audio.src := url
        audio.load
        audio.play
    }
}
method stopSound(url) {
    if (audioTags.contains(url)) then {
        def audio = audioTags.get(url)
        audio.pause
    }
}
method start {
    initialise

    stopRunning := false
    backingCanvas := dom.document.createElement("canvas")
    backingCanvas.height := canvasHeight
    backingCanvas.width := canvasWidth
    backingContext := backingCanvas.getContext("2d")
    def mctx = canvas.getContext("2d")
    mctx.fillStyle := backgroundColour
    mctx.fillRect(0, 0, canvasWidth, canvasHeight)
    mctx.drawImage(backingCanvas, 0, 0)
    dom.while { !stopRunning } waiting 10 do {
        for (registeredObjects) do {obj->
            obj.step
        }
        for (stepBlocks) do {step->
            step.apply
        }
        // mctx.fillStyle := backgroundColour
        // mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        // mctx.drawImage(backingCanvas, 0, 0)
        // for (registeredObjects) do {obj->
        //     obj.draw(mctx)
        // }
        // mctx.fillStyle := "red"
        // mctx.fillRect(canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)
    }
    // mctx.fillStyle := "green"
    // mctx.fillRect(canvasWidth/4, canvasHeight/4, canvasWidth/2, canvasHeight/2)

}
method stop {
    stopRunning := true
    // canvas.removeEventListener("mousedown", mouseDownListener)
    // canvas.removeEventListener("mousemove", mouseMoveListener)
    //Graceful Music
    dom.window.t_stop();
    dom.window.t_reset();
}
method atModuleEnd(module) {
    start
    //Graceful Music
    dom.window.t_play();
    // dom.window.console.log("moduleend")
}



// ******************
// * Graceful Music *
// ******************

// * Improvements
// ******************
//  - Should rouge notes be played by a default instrument or just ignored?
//  - Can I contrain number parameters? For example, from 0 - 100?
//  - Adjust amount of Effect
//  - Allowing picking of instruments for arpeggio 
//  - Volume
//  - Add timing of instruments 4n/8n/16n
//  - Can't get pre configured grace files to load properly
//  - Constraints, making sure can't make bad code
//  - Stretch Goal: Being able to run individual components
//  - numbers automatically in there??
//  - a number input already in there??
//  - can i stop people putting things into holes

//  - rests: this can be accopmlished with null
//  - live editing: adding in and changes happen in realtime if compiler
//  - on delete, don't start playing if not already playing
//  - dialects, checker see if we can check blocks, type checking, in dialect.js
//  - volume/timing

// - look at engineering requirements, sample reports, and evaluation story
// - justify why you're doing these things
// - match scratch music 
// - setting up requirements, 1-6, everything refers back to those goals
// - think about how to structure report to make the case that it's engineering
// - artifact submission in week 9, to resolve any issues
// - mandatatory draft submission between week 7 and week 9
// - solid complete draft by end of week 9
// - week 7 when back

// * Variables
// ******************

var octave := 4;

var applyFlat := false
var applySharp := false

var applyChorus := false
var applyReverb := false
var applyAutowah := false
var applyCheby := false

var firstPass := true

// * Notes
// ******************

method Note(note){
    if (applyFlat == true) then {
        dom.window.t_add("{note}b{octave}")
        return "{note}b"
    }
    if (applySharp == true) then {
        dom.window.t_add("{note}#{octave}")
        return "{note}#"
    }
    dom.window.t_add("{note}{octave}")
    return "{note}"
}

method C(){
    Note("C")
}
method D(){
    Note("D")
}
method E(){
    Note("E")
}
method F(){
    Note("F")
}
method G(){
    Note("G")
}
method A(){
    Note("A")
}
method B(){
    Note("B")
}
method Rest(){
    dom.window.t_add("null")
    return "Rest"
}

method flat(note){
    applyFlat := true
    var ret := note.apply
    applyFlat := false
    return ret 
}
method sharp(note){
    applySharp := true
    var ret := note.apply
    applySharp := false
    return ret
}

method octave(num)on(notes){
    var oldOctave := octave
    octave := num
    var ret := notes.apply
    octave := oldOctave
    return ret
}

// * Instruments
// ******************

method Instrument(blocks){
    if (firstPass == true) then {
        dom.window.t_reset()
        firstPass := false
    }
    dom.window.t_init()
    blocks.apply
}

method monoSynth(blocks){
    Instrument(blocks)
    dom.window.t_synth_mono()
}

method pluckSynth(blocks){
    Instrument(blocks)
    dom.window.t_synth_pluck()
}

method polySynth(blocks){
    Instrument(blocks)
    dom.window.t_synth_poly()
}

method fmSynth(blocks){
    Instrument(blocks)
    dom.window.t_synth_fm()
}

method membraneSynth(blocks){
    Instrument(blocks)
    dom.window.t_synth_membrane()
}

method duoSynth(blocks){
    Instrument(blocks)
    dom.window.t_synth_duo()
}

method arpeggio(note){
    if (firstPass == true) then {
        dom.window.t_reset()
        firstPass := false
    }
    dom.window.t_synth_arpeggio(note);
}

// * Effects
// ******************

method Effect(blocks){
    if (applyChorus == true) then {
        dom.window.t_effect_chorus()
    }
    if (applyReverb == true) then {
        dom.window.t_effect_reverb()
    }
    if (applyAutowah == true) then {
        dom.window.t_effect_autowah()
    }
    if (applyCheby == true) then {
        dom.window.t_effect_cheby()
    }
    blocks.apply
    dom.window.t_effect_reset()
}

method Chorus(blocks){
    applyChorus := true
    Effect(blocks)
    applyChorus := false
}

method Reverb(blocks){
    applyReverb := true
    Effect(blocks)
    applyReverb := false
}

method Autowah(blocks){
    applyAutowah := true
    Effect(blocks)
    applyAutowah := false
}

method Cheby(blocks){
    applyCheby := true
    Effect(blocks)
    applyCheby := false
}

// * Timing
// ******************
method SetBPM(bpm){
    dom.window.t_bpm(bpm);
}

method time(num)on(notes){
    
    // var oldOctave := octave
    // octave := num
    // var ret := notes.apply
    // octave := oldOctave
    // return ret
}
