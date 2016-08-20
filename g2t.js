"use strict"

// ************************
// * Grace to Tone.js Shim 
// ************************

// * Variables  
// ******************
var debug = false;

var sequence = [];
var instruments = [];

Tone.Transport.bpm.value = 90;

// * Declarations
// ******************

// ******* Effects ********
var chorus = new Tone.Chorus()
	.receive("chorus")
	.toMaster();

var cheby = new Tone.Chebyshev(50)
	.receive("cheby")
	.toMaster();

var reverb = new Tone.Freeverb(0.9, 4000)
	.receive("reverb")
	.toMaster();

var autoWah = new Tone.AutoWah()
	.receive("autowah")
	.toMaster()
	.set({
		"baseFrequency" : 100,
		"octaves" : 4,
		"sensitivity" : 0,
		"Q" : 2,
		"gain" : 10,
		"follower" : {
			"attack" : 0.05,
			"release" : 0.2
		}
	});

// * Control 
// ******************

function t_init(){
	sequence = [];
}

function t_add(note){
	sequence.push(note);
}

function t_play() {
	Tone.Transport.start();
}

function t_stop(){
	Tone.Transport.stop();
	sequence = [];
}


// * Instruments 
// ******************

function t_synth_mono(){
	var mono = new Tone.MonoSynth().toMaster();

	var monoSeq = new Tone.Sequence(function(time, note){
		mono.triggerAttackRelease(note, "8n", time);
	}, sequence ).start(0);
}

function t_synth_pluck(){
	var pluck = new Tone.PluckSynth().toMaster();

	var pluckSeq = new Tone.Sequence(function(time, note){
		pluck.triggerAttackRelease(note, "8n", time);
	}, sequence ).start(0);
}

function t_synth_poly(){
	var poly = new Tone.PolySynth().toMaster();

	var polySeq = new Tone.Sequence(function(time, note){
		poly.triggerAttackRelease(note, "8n", time);
	}, sequence ).start(0);
}

function t_synth_fm(){
	var fm = new Tone.FMSynth().toMaster();

	var fmSeq = new Tone.Sequence(function(time, note){
		fm.triggerAttackRelease(note, "8n", time);
	}, sequence ).start(0);
}

function t_synth_membrane(){
	var membrane = new Tone.MembraneSynth().toMaster();

	var membraneSeq = new Tone.Sequence(function(time, note){
		membrane.triggerAttackRelease(note, "8n", time);
	}, sequence ).start(0);
}

function t_synth_duo(){
	var duo = new Tone.DuoSynth().toMaster();

	var duoSeq = new Tone.Sequence(function(time, note){
		duo.triggerAttackRelease(note, "8n", time);
	}, sequence ).start(0);
}

// * Effects 
// ******************

function t_effect_chorus(){
	
}

function t_effect_reverb(){

}

function t_effect_autowah(){

}

function t_effect_cheby(){

}


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