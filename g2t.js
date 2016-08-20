"use strict"

//grace to tone shim

var debug = false;
// /*
//  KICK
//  */
// var kick = new Tone.MembraneSynth({
// 	"envelope" : {
// 		"sustain" : 0,
// 		"attack" : 0.02,
// 		"decay" : 0.8
// 	},
// 	"octaves" : 10
// }).toMaster();

// var kickPart = new Tone.Loop(function(time){
// 	kick.triggerAttackRelease("C2", "8n", time);
// }, "2n").start(0);


// /*
//  SNARE
//  */
// var snare = new Tone.NoiseSynth({
// 	"volume" : -5,
// 	"envelope" : {
// 		"attack" : 0.001,
// 		"decay" : 0.2,
// 		"sustain" : 0
// 	},
// 	"filterEnvelope" : {
// 		"attack" : 0.001,
// 		"decay" : 0.1,
// 		"sustain" : 0
// 	}
// }).toMaster();

// var snarePart = new Tone.Loop(function(time){
// 	snare.triggerAttack(time);
// }, "2n").start("4n");


/**
 *  PIANO
 */
		var piano = new Tone.PolySynth(4, Tone.Synth, {
			"volume" : -8,
			// "oscillator" : {
			// 	"partials" : [1, 2, 1],
			// }//,
			// "portamento" : 0.05
		}).toMaster()

		var cChord = ["C4"];
		var eChord = ["E4"];
		var fChord = ["F4"];
		var gChord = ["G4"];

		// var pianoPart = new Tone.Part(function(time, chord){
		// 	piano.triggerAttackRelease(chord, "8n", time);
		// }, [

		// 	["0:1:1", cChord],
		// 	["0:2", eChord],
		// 	["0:3", fChord],
		// 	["0:4", gChord]

		// 	// ["0:1", cChord], 
		// 	// ["0:1:3", dChord], 
		// 	// ["0:2:2", cChord], 
		// 	// ["0:3", cChord], 
		// 	// ["0:3:2", gChord]

		// 	]

		// ).start(0);

		// pianoPart.loop = true;
		// pianoPart.loopEnd = "1m";
		// pianoPart.humanize = true;


		// var piano = new Tone.PolySynth(4, Tone.Synth, {
		// 	"volume" : -8
		// 	// ,
		// 	// "oscillator" : {
		// 	// 	"partials" : [1, 2, 1],
		// 	// },
		// 	// "portamento" : 0.05
		// }).toMaster()

		// var pianoPart = new Tone.Sequence(function(time, note){
		// 	piano.triggerAttackRelease(note, "16n", time);
		// }, 

		// ["c1", "e1", "f1", "g1"]

		// // ["C2", ["C3", ["C3", "D2"]], "E2", ["D2", "A1"]]


		// ).start(0);

		/*
		 BASS
		 */
		// var bass = new Tone.MonoSynth({
		// 	"volume" : -10,
		// 	// "envelope" : {
		// 	// 	"attack" : 0.1,
		// 	// 	"decay" : 0.3,
		// 	// 	"release" : 2,
		// 	// },
		// 	"filterEnvelope" : {
		// 		"attack" : 0.001,
		// 		"decay" : 0.01,
		// 		"sustain" : 0.5,
		// 		"baseFrequency" : 200,
		// 		"octaves" : 2.6
		// 	}
		// }).toMaster();

		// var bassPart = new Tone.Sequence(function(time, note){
		// 	bass.triggerAttackRelease(note, "8n", time);
		// }, 

		// ["c1", "e1", "f1", "g1"]



		// ).start(0);

		// bassPart.probability = 0.9;

		//set the transport 
		Tone.Transport.bpm.value = 90;
		// Tone.Transport.start();


var seq = [];

function t_init(){
	seq = [];
}

function t_add(note){
	// console.log("t_add: " + note);
	// console.log(seq);
	seq.push(note);
	// console.log(seq);
}

// var bass = new Tone.MonoSynth({
// 	"volume" : -10,
// 	// "envelope" : {
// 	// 	"attack" : 0.1,
// 	// 	"decay" : 0.3,
// 	// 	"release" : 2,
// 	// },
// 	"filterEnvelope" : {
// 		"attack" : 0.001,
// 		"decay" : 0.01,
// 		"sustain" : 0.5,
// 		"baseFrequency" : 200,
// 		"octaves" : 2.6
// 	}
// }).toMaster();

// var bassPart = new Tone.Sequence(function(time, note){
// 	console.log(note);
// 	bass.triggerAttackRelease(note, "8n", time);
// }, 

// seq

// ).start(0);

var bass = new Tone.MonoSynth();
var bassPart;

var instruments = [];

var inst = [];

function t_bass(){

	console.log("bass: " + seq);

	instruments[0] = "test";
	console.log(instruments[0]);


	// bass.dispose();
	// if(bassPart!=null){
	// 	bassPart = bassPart.dispose();
	// }

	bass = new Tone.MonoSynth({
		"volume" : -10,
		"filterEnvelope" : {
			"attack" : 0.001,
			"decay" : 0.01,
			"sustain" : 0.5,
			"baseFrequency" : 200,
			"octaves" : 2.6
		}
	}).toMaster();

	bass.triggerRelease();


	var bassPart = new Tone.Sequence(function(time, note){
		bass.triggerAttackRelease(note, "8n", time);
	}, 

	seq

	).start(0);

}



function t_play() {
	Tone.Transport.start();
}

function bass_reset(){
	// bass = bass.dispose();
}

function t_stop(){
	// bass.dispose();
	// console.log("t_stop");
	Tone.Transport.stop();
	// Tone.Master.reset();
	seq = [];
}

// /*
//  KICK
//  */
// var kick = new Tone.DrumSynth({
// 	"envelope" : {
// 		"sustain" : 0,
// 		"attack" : 0.02,
// 		"decay" : 0.8
// 	},
// 	"octaves" : 10
// }).toMaster();

// var kickPart = new Tone.Loop(function(time){
// 	kick.triggerAttackRelease("C2", "8n", time);
// }, "2n").start(0);


// /*
//  SNARE
//  */
// var snare = new Tone.MetalSynth({
// 	"volume" : -5,
// 	"envelope" : {
// 		"attack" : 0.001,
// 		"decay" : 0.2,
// 		"sustain" : 0
// 	},
// 	"filterEnvelope" : {
// 		"attack" : 0.001,
// 		"decay" : 0.1,
// 		"sustain" : 0
// 	}
// }).toMaster();

// var snarePart = new Tone.Loop(function(time){
// 	snare.triggerAttack(time);
// }, "2n").start("4n");


// var synth = new Tone.AMSynth().toMaster();
// synth.triggerAttackRelease("C4", "4n");

// *
//  *  PIANO
 
// var piano = new Tone.PolySynth(4, Tone.SimpleSynth, {
// 	"volume" : -8,
// 	"oscillator" : {
// 		"partials" : [1, 2, 1],
// 	},
// 	"portamento" : 0.05
// }).toMaster()

// var cChord = ["C4", "E4", "G4", "B4"];
// var dChord = ["D4", "F4", "A4", "C5"];
// var gChord = ["B3", "D4", "E4", "A4"];

// var pianoPart = new Tone.Part(function(time, chord){
// 	piano.triggerAttackRelease(chord, "8n", time);
// }, [["0:0:2", cChord], ["0:1", cChord], ["0:1:3", dChord], ["0:2:2", cChord], ["0:3", cChord], ["0:3:2", gChord]]).start("2m");

// pianoPart.loop = true;
// pianoPart.loopEnd = "1m";
// pianoPart.humanize = true;



/*
 BASS
 */
//  var phaser = new Tone.Phaser({
// 	"frequency" : 15, 
// 	"octaves" : 8, 
// 	"baseFrequency" : 100
// }).toMaster();
// var bass = new Tone.MembraneSynth(
// 	{
// 	"volume" : 5
// 	// ,
// 	// new Tone.Phaser();
// 	// "envelope" : {
// 	// 	"attack" : 0.1,
// 	// 	"decay" : 0.3,
// 	// 	"release" : 2,
// 	// }
// 	// ,
// 	// "filterEnvelope" : {
// 	// 	"attack" : 0.001,
// 	// 	"decay" : 0.01,
// 	// 	"sustain" : 0.5,
// 	// 	"baseFrequency" : 200,
// 	// 	"octaves" : 2.6
// 	// }
// }
// ).connect(phaser);

// var phaser = new Tone.Phaser({
// 	"frequency" : 15, 
// 	"octaves" : 5, 
// 	"baseFrequency" : 1000
// }).toMaster();
// var synth = new Tone.FMSynth().connect(phaser);

//use an array of objects as long as the object has a "time" attribute
// var part = new Tone.Part(function(time, value){
// 	//the value is an object which contains both the note and the velocity
// 	bass.triggerAttackRelease(value.note, "8n", time, value.velocity);
// }, [{"time" : 0, "note" : "C3", "velocity": 0.9}, 
// 	   {"time" : "0:2", "note" : "C4", "velocity": 0.5}
// ]).start(0);

// var part = new Tone.Part(function(time, note){
// 	//the notes given as the second element in the array
// 	//will be passed in as the second argument
// 	bass.triggerAttackRelease(note, "16n", time);
// }, [[0, "C2"], ["0:2", "C3"], ["0:3:2", "G2"]]).start(0);


// var bassPart = new Tone.Sequence(
// 	function(time, note){
// 		bass.triggerAttackRelease(note, "16n", time);
// 	}, 
// 	// ["C2","C3","C4"]
	// ["C2", [["C3","D2"],"C2", "C3", "D2"], "E2", ["D2", "A1"]]
// ).start(0);


// bassPart.probability = 0.9;

// new Tone.OmniOscillator ().start(0);

//create an autofilter and start it's LFO
// var autoFilter = new Tone.AutoFilter("4n").toMaster().start();
// var phaser = new Tone.Phaser({
// 	"frequency" : 15, 
// 	"octaves" : 5, 
// 	"baseFrequency" : 1000
// }).toMaster();
// //route an oscillator through the filter and start it
// // var oscillator = new Tone.Oscillator().connect(autoFilter).start();

// var bass = new Tone.MembraneSynth(
// 	{
// 		"volume" : 5
// 	}
// )

// /* 
// 	so can have the idea of a sequence which takes in a series of notes
// 	below is a basic sequence
// */

// var seq = new Tone.Sequence(function(time, note){
// 	console.log(note);
// //straight quarter notes
// }, ["C4", "E4", "G4", "A4"], "4n");







// .connect(autoFilter)
// // ;
// .connect(phaser)
// ;
// var bassPart = new Tone.Sequence(
// 	function(time, note){
// 		bass.triggerAttackRelease(note, "16n", time);
// 	}, 
// 	["C2", [["C3","D2"],"C2", "C3", "D2"], "E2", ["D2", "A1"]]
// ).start(0);

// set the transport 
// Tone.Transport.bpm.value = 90;
// Tone.Transport.start();







//commented out timbre stuff

// T.soundfont.setInstrument(1);
// var myVar = setInterval(myTimer, 300);
// var note = 50;
// var up = true;
// function myTimer() {
// 	console.log(note);
// 	if(up){
// 		note++;
// 	} else {
// 		note--;
// 	}
// 	T.soundfont.play(note, true);
// 	if (note > 60){
// 		up = false;
// 	}
// 	if (note < 50){
// 		up = true;
// 	}
// }

// type Song = {
// 	play(ctx : Context)
// }

// type Context = {
// 	modifyNote(note : Number) -> Number
// 	currentInstrument -> Number
// }

//http://localhost:8000/#JTdCJTIyY2h1bmtzJTIyJTNBJTVCJTdCJTIydHlwZSUyMiUzQSUyMmNodW5rJTIyJTJDJTIyeCUyMiUzQSUyMjkycHglMjIlMkMlMjJ5JTIyJTNBJTIyODdweCUyMiUyQyUyMmJvZHklMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIyZGVmZGVjJTIyJTJDJTIybmFtZSUyMiUzQSUyMmElMjIlMkMlMjJ2YWx1ZSUyMiUzQSU3QiUyMnR5cGUlMjIlM0ElMjJzZWxmY2FsbCUyMiUyQyUyMm5hbWUlMjIlM0ElMjJ0aGVuJTIyJTJDJTIyYXJncyUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJkaWFsZWN0LW1ldGhvZCUyMiUyQyUyMm5hbWUlMjIlM0ElMjJub3RlJTIyJTJDJTIycGFydHMlMjIlM0ElNUIlNUIlN0IlMjJ0eXBlJTIyJTNBJTIybnVtYmVyJTIyJTJDJTIydmFsdWUlMjIlM0ElMjIxMDAlMjIlN0QlNUQlNUQlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIyZGlhbGVjdC1tZXRob2QlMjIlMkMlMjJuYW1lJTIyJTNBJTIybm90ZSUyMiUyQyUyMnBhcnRzJTIyJTNBJTVCJTVCJTdCJTIydHlwZSUyMiUzQSUyMm51bWJlciUyMiUyQyUyMnZhbHVlJTIyJTNBJTIyMTAyJTIyJTdEJTVEJTVEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmRpYWxlY3QtbWV0aG9kJTIyJTJDJTIybmFtZSUyMiUzQSUyMm5vdGUlMjIlMkMlMjJwYXJ0cyUyMiUzQSU1QiU1QiU3QiUyMnR5cGUlMjIlM0ElMjJudW1iZXIlMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMjEwNCUyMiU3RCU1RCU1RCU3RCU1RCUyQyUyMmlzUmVxdWVzdCUyMiUzQXRydWUlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIyc2VsZmNhbGwlMjIlMkMlMjJuYW1lJTIyJTNBJTIycGxheSUyMiUyQyUyMmFyZ3MlMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIyc2VsZmNhbGwlMjIlMkMlMjJuYW1lJTIyJTNBJTIydGhlbiUyMiUyQyUyMmFyZ3MlMjIlM0ElNUIlN0IlMjJ0eXBlJTIyJTNBJTIydmFyJTIyJTJDJTIydmFsdWUlMjIlM0ElMjJhJTIyJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnNlbGZjYWxsJTIyJTJDJTIybmFtZSUyMiUzQSUyMnJhaXNlT2N0YXZlJTIyJTJDJTIyYXJncyUyMiUzQSU1QiU3QiUyMnR5cGUlMjIlM0ElMjJ2YXIlMjIlMkMlMjJ2YWx1ZSUyMiUzQSUyMmElMjIlN0QlNUQlMkMlMjJpc1JlcXVlc3QlMjIlM0F0cnVlJTdEJTJDbnVsbCUyQ251bGwlMkNudWxsJTJDbnVsbCUyQ251bGwlMkNudWxsJTJDbnVsbCUyQ251bGwlMkNudWxsJTVEJTJDJTIyaXNSZXF1ZXN0JTIyJTNBdHJ1ZSU3RCU1RCUyQyUyMmlzUmVxdWVzdCUyMiUzQXRydWUlN0QlNUQlN0QlNUQlMkMlMjJkaWFsZWN0JTIyJTNBJTIybXVzaWNhbCUyMiU3RA==


/**
	Timbre.js
**/



// function defaultContext() {
// 	return {
// 		currentInstrument: 1,
// 		noteTransform: 0
// 	};
// }

// function t_play(song) {
// 	song.play(defaultContext());
// }

// function t_note(note){
// 	T.soundfont.setInstrument(0);
// 	T.soundfont.play(note, true);

// 	if(debug){
// 		console.log("t_note: " + "")
// 	}

// 	return new Note();
// }

// function Note() {
// 	//note for so many beats
// }

// Note.prototype.play = function (ctx) {
// 	T.soundfont.setInstrument(1);
// 	T.soundfont.play(note, true);
// };

// function t_c() {
// 	return new Note(80);
// }

// function t_d() {
// 	return new Note(82);
// }

// function Note(id) {
// 	this.id = id;
// }

// Note.prototype.play = function (ctx) {
// 	var note = this.id + ctx.noteTransform;
// 	T.soundfont.setInstrument(ctx.currentInstrument);
// 	T.soundfont.play(note, true);
// };

// function sharp(song) {
// 	return new ToneShift(1, song);
// }

// function flat(song) {
// 	return new ToneShift(-1, song);
// }

// function raiseOctave(song) {
// 	return new ToneShift(13, song);
// }

// function lowerOctave(song) {
// 	return new ToneShift(-13, song);
// }

// function ToneShift(amount, song) {
// 	this.amount = amount;
// 	this.song = song;
// }

// ToneShift.prototype.play = function (ctx) {
// 	var tmp = ctx.noteTransform;
// 	ctx.noteTransform += this.amount;
// 	this.song.play(ctx);
// 	ctx.noteTransform = tmp;
// }

// function t_piano(song) {
// 	return new Instrument(1, song);
// }

// function Instrument(id, song) {
// 	this.id = id;
// 	this.song = song;
// }

// Instrument.prototype.play = function (ctx) {
// 	var tmp = ctx.currentInstrument;
// 	ctx.currentInstrument = this.id;
// 	this.song.play(ctx);
// 	ctx.currentInstrument = tmp;
// };

// function then() {
// 	return new Sequence(Array.prototype.slice.call(arguments));
// }

// function Sequence(songs) {
// 	this.songs = songs;
// }

// Sequence.prototype.play = function (ctx) {
// 	// Play in order.
// }

// function all() {
// 	return new Together(Array.prototype.slice.call(arguments));
// }

// function Together(songs) {
// 	this.songs = songs;
// }

// Together.prototype.play = function (ctx) {
// 	for (var i = 0; i < this.songs.length; i++) {
// 		this.songs[i].play(ctx);
// 	}
// }

// function t_bpm(bpm){
// 	timbre.bpm = bpm;
// }

// function t_sin(freq_mul) {
// 	freq_mul = freq_mul.split(",");
// 	T("sin", {freq:Number(freq_mul[0]), mul:Number(freq_mul[1])}).play();
// }

// function t_reset(){
// 	timbre.reset();
// }

// function t_pause(){
// 	timbre.pause();
// }

// function t_play(){
// 	timbre.play();
// }

// function t_gymnopedie(){
// 	var mml0, mml1;
// 	var env   = T("adsr", {d:3000, s:0, r:600});
// 	var synth = T("SynthDef", {mul:0.45, poly:8});

// 	synth.def = function(opts) {
// 	  var op1 = T("sin", {freq:opts.freq*6, fb:0.25, mul:0.4});
// 	  var op2 = T("sin", {freq:opts.freq, phase:op1, mul:opts.velocity/128});
// 	  return env.clone().append(op2).on("ended", opts.doneAction).bang();
// 	};

// 	var master = synth;
// 	var mod    = T("sin", {freq:2, add:3200, mul:800, kr:1});
// 	master = T("eq", {params:{lf:[800, 0.5, -2], mf:[6400, 0.5, 4]}}, master);
// 	master = T("phaser", {freq:mod, Q:2, steps:4}, master);
// 	master = T("delay", {time:"BPM60 L16", fb:0.65, mix:0.25}, master);

// 	mml0 = "t60 l4 v6 q2 o3";
// 	mml0 += "[ [g < b0<d0f+2>> d <a0<c+0f+2>>]8 ";
// 	mml0 += "f+ <a0<c+0f+2>>> b<<b0<d0f+2>> e<g0b2> e<b0<d0g2>> d<f0a0<d2>>";
// 	mml0 += ">a<<a0<c0e2>> d<g0b0<e2>> d<d0g0b0<e2>> d<c0e0a0<d2>> d<c0f+0a0<d2>>";
// 	mml0 += "d<a0<c0f2>> d<a0<c0e2>> d<d0g0b0<e2>> d<c0e0a0<d2>> d<c0f+0a0<d2>>";
// 	mml0 += "| e<b0<e0g2>> f+<a0<c+0f+2>>> b<<b0<d0f+2>> e<<c+0e0a2>> e<a0<c+0f+0a2>>";
// 	mml0 += "eb0<a0<d>e0b0<d0g>> a0<g2.> d0a0<d2.> ]";
// 	mml0 += "e<b0<e0g2>> e<a0<d0f0a2>> e<a0<c0f2>> e<<c0e0a2>> e<a0<c0f0a2>>";
// 	mml0 += "eb0<a0<d>e0b0<d0g>> a0<g2.> d0a0<d2.>";

// 	mml1 = "t60 v14 l4 o6";
// 	mml1 += "[ r2. r2. r2. r2.";
// 	mml1 += "rf+a gf+c+ >b<c+d >a2. f+2.& f+2.& f+2.& f+2.< rf+a gf+c+ >b<c+d >a2.<";
// 	mml1 += "c+2. f+2. >e2.&e2.&e2.";
// 	mml1 += "ab<c ed>b< dc>b< d2.& d2d";
// 	mml1 += "efg acd ed>b <d2.& d2d";
// 	mml1 += "| g2. f+2.> bab< c+de c+de>";
// 	mml1 += "f+2. c0e0a0<c2.> d0f+0a0<d2. ]";
// 	mml1 += "g2. f2.> b<cf edc edc>";
// 	mml1 += "f2. c0e0a0<c2.> d0f0a0<d2.";

// 	T("mml", {mml:[mml0, mml1]}, synth).on("ended", function() {
// 	  this.stop();
// 	}).set({buddies:master}).start();
// }