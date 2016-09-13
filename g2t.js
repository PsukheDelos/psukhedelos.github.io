"use strict"
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
console.clear(); 

// ************************
// * Grace to Tone.js Shim 
// ************************
// * Variables  
// ******************
var debug = false;

var sequence = [];
var instruments = [];
var sequences = [];

// var seq_id = 0;

var playing = false;

//Timing
Tone.Transport.bpm.value = 300;
// var timing = "4n";

// //Volume
// var volume = 0;

//Effects
var applyChorus = false;
var applyReverb = false;
var applyAutowah = false;
var applyCheby = false;

//Visualiser
//analyse the frequency/amplitude of the incoming signal  
var fft = new Tone.Analyser("fft", 32);
//get the waveform data for the audio
var waveform = new Tone.Analyser("waveform", 1024);

// * Declarations
// ******************

// ******* Effects ********
var chorus = new Tone.Chorus()
	.receive("chorus")
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

var cheby = new Tone.Chebyshev(50)
	.receive("cheby")
	.toMaster();

// * Control 
// ******************

function t_init(){
	sequence = [];
}

function t_add(note,id){
  // console.log("hi");
    // console.log(n.dataset.serialiserIndex);
  // console.log(note);
  // console.log($('[data-serialiser-index][data-types="Note"]').attr('data-serialiser-index'));
  // console.log(grace_id++);
	if(note=="null"){
		sequence.push({id:id});
	} else {
		sequence.push({note:note, id:id});
	}
  // console.log(sequence);
}

function t_play() {
  // player.start();

	// Tone.Transport.pause();
	Tone.Transport.start();
  playing = true;
}

function t_stop(){
	Tone.Transport.stop();
	sequence = [];
  t_reset();
  playing = false;
  Tone.Transport.bpm.value = 300;
}

function t_reset(){

  Tone.Transport.cancel(0);

  if(instruments.length > 0){
    for (var i = instruments.length - 1; i >= 0; i--) {
      instruments[i].disconnect();
    }
  }

  if(sequences.length > 0){
    for (var i = sequences.length - 1; i >= 0; i--) {
      sequences[i].removeAll();
    }
  }

  instruments = [];
  sequences = [];
}


// * Instruments 
// ******************

function t_synth_mono(timing, vol, rate){
  // console.log("mono");
  var mono = new Tone.MonoSynth().fan(fft, waveform).toMaster();
  mono.volume.value = vol-15;
  var seq_id = sequences.length;

  var monoSeq = new Tone.Sequence(function(time, note){
    
    var d = $('[grace-id='+note.id+']');

    if(note.seq==null){
      note.seq = seq_id;
    } 

    $('.highlighted[seq="'+note.seq+'"]').removeClass('highlighted');

    d.attr('seq',note.seq);
    d.addClass('highlighted');
    if(note.note){
  	 mono.triggerAttackRelease(note.note, timing, time);
    }
  }, sequence ).start(0);

  monoSeq.playbackRate = rate;

  instruments.push(mono);
  sequences.push(monoSeq);

  applyEffects(mono);
}

function t_synth_pluck(timing, vol, rate){
	var pluck = new Tone.PluckSynth().fan(fft, waveform).toMaster();
  pluck.volume.value = vol;
  var seq_id = sequences.length;
	var pluckSeq = new Tone.Sequence(function(time, note){

    var d = $('[grace-id='+note.id+']');

    if(note.seq==null){
      note.seq = seq_id;
    } 

    $('.highlighted[seq="'+note.seq+'"]').removeClass('highlighted');

    d.attr('seq',note.seq);
    d.addClass('highlighted');
    if(note.note){
      pluck.triggerAttackRelease(note.note, timing, time);
    }
	}, sequence ).start(0);

  pluckSeq.playbackRate = rate;

	instruments.push(pluck);
	sequences.push(pluckSeq);
	applyEffects(pluck);
}

function t_synth_poly(timing, vol, rate){
	var poly = new Tone.PolySynth().fan(fft, waveform).toMaster();
  // console.log(vol);
  poly.volume.value = vol;
  var seq_id = sequences.length;

	var polySeq = new Tone.Sequence(function(time, note){

    var d = $('[grace-id='+note.id+']');

    if(note.seq==null){
      note.seq = seq_id;
    } 

    $('.highlighted[seq="'+note.seq+'"]').removeClass('highlighted');

    d.attr('seq',note.seq);
    d.addClass('highlighted');
    if(note.note){
		  poly.triggerAttackRelease(note.note, timing, time);
    }
	}, sequence).start(0);

  polySeq.playbackRate = rate;
	// polySeq.loop = 1;
	instruments.push(poly);
	sequences.push(polySeq);

	applyEffects(poly);

}

function t_synth_fm(timing, vol, rate){
	var fm = new Tone.FMSynth().fan(fft, waveform).toMaster();
  fm.volume.value = vol;
  var seq_id = sequences.length;

	var fmSeq = new Tone.Sequence(function(time, note){

    var d = $('[grace-id='+note.id+']');

    if(note.seq==null){
      note.seq = seq_id;
    } 

    $('.highlighted[seq="'+note.seq+'"]').removeClass('highlighted');

    d.attr('seq',note.seq);
    d.addClass('highlighted');
    if(note.note){
		  fm.triggerAttackRelease(note.note, timing, time);
    }
	}, sequence );
  // .start(0);

  fmSeq.playbackRate = rate;
  // fmSeq.loop = true;
  fmSeq.start(0);
  // fmSeq.start(2);
  // fmSeq.stop(2);
  // fmSeq.loopStart = Tone.TransportTime(1);
	instruments.push(fm);
	sequences.push(fmSeq);

	applyEffects(fm);
}

function t_synth_membrane(timing, vol, rate){
	var membrane = new Tone.MembraneSynth().fan(fft, waveform).toMaster();
  membrane.volume.value = vol;
  var seq_id = sequences.length;

	var membraneSeq = new Tone.Sequence(function(time, note){

    var d = $('[grace-id='+note.id+']');

    if(note.seq==null){
      note.seq = seq_id;
    } 

    $('.highlighted[seq="'+note.seq+'"]').removeClass('highlighted');

    d.attr('seq',note.seq);
    d.addClass('highlighted');
    if(note.note){
		  membrane.triggerAttackRelease(note.note, timing, time);
    }
	}, sequence ).start(0);

  membraneSeq.playbackRate = rate;


	instruments.push(membrane);
	sequences.push(membraneSeq);

	applyEffects(membrane);
}

function t_synth_duo(timing, vol, rate){
	var duo = new Tone.DuoSynth().fan(fft, waveform).toMaster();
  duo.volume.value = vol;
  var seq_id = sequences.length;

	var duoSeq = new Tone.Sequence(function(time, note){

    var d = $('[grace-id='+note.id+']');

    if(note.seq==null){
      note.seq = seq_id;
    } 

    $('.highlighted[seq="'+note.seq+'"]').removeClass('highlighted');

    d.attr('seq',note.seq);
    d.addClass('highlighted');
    
    if(note.note){
		  duo.triggerAttackRelease(note.note, timing, time);
    }
	}, sequence );

  duoSeq.playbackRate = rate;
  duoSeq.loop = true;
  duoSeq.start(0);

	instruments.push(duo);
	sequences.push(duoSeq);
	
	applyEffects(duo);
}



// * Effects 
// ******************

function applyEffects(instrument){
	if(applyChorus){
		var chorusSend = instrument.send("chorus", -Infinity);
		chorusSend.gain.value = 1.0;
	}
	if(applyReverb){
		var chorusSend = instrument.send("reverb", -Infinity);
		chorusSend.gain.value = 1.0;
	}
	if(applyAutowah){
		var chorusSend = instrument.send("autowah", -Infinity);
		chorusSend.gain.value = 1.0;
	}
	if(applyCheby){
		var chorusSend = instrument.send("cheby", -Infinity);
		chorusSend.gain.value = 1.0;
	}
}

function t_effect_chorus(){
	applyChorus = true;
}

function t_effect_reverb(){
	applyReverb = true;
}

function t_effect_autowah(){
	applyAutowah = true;
}

function t_effect_cheby(){
	applyReverb = true;
}

function t_effect_reset(){
	applyChorus = false;
	applyReverb = false;
	applyAutowah = false;
	applyCheby = false;
}


// * Timing
// ******************
function t_bpm(bpm){
  if(bpm==0){
    Tone.Transport.bpm.value = null;
  } else {
    Tone.Transport.bpm.value = bpm;
  }
}

// function t_timing(t){
//   timing = t;
// }

// * Arpeggios
// ******************

// @TODO: Need to insert proper credits here for adapting Apreggiator Code Pen


/**
 * MusicalScale
 * generate a scale of music
 * http://codepen.io/jakealbaugh/pen/NrdEYL/
 *
 * @param key {String} 
     the root of the key. flats will be converted to sharps.
       C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 * @param mode {String} 
     desired mode.
       ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian, 
     can also pass in:
       major, minor, melodic, harmonic
 *
 * @return {Object}
     _scale: scale info
     key: the scale key
     mode: the scale mode id
     notes: an array of notes
       step: index of note in key
       note: the actual note
       rel_octave: 0 || 1, in root octave or next
       triad: major, minor, diminished, or augmented triad for this note
         interval: I, ii, etc
         type: min, maj, dim, aug
         notes: array of notes in the triad
           note: the note
           rel_octave: 0 || 1 || 2, relative to key root octave
 */

var MusicalScale = function () {
  function MusicalScale(params) {
    _classCallCheck(this, MusicalScale);

    this.dict = this._loadDictionary();
    var errors = this._errors(params);
    if (errors) return;
    this.updateScale = this.pubUpdateScale;

    this._loadScale(params);
  }

  MusicalScale.prototype.pubUpdateScale = function pubUpdateScale(params) {
    var errors = this._errors(params);
    if (errors) return;
    this._loadScale(params);
  };

  MusicalScale.prototype._loadScale = function _loadScale(params) {
    // clean up the key param
    this.key = this._paramKey(params.key);
    // set the mode
    this.mode = params.mode;
    this.notes = [];
    this._scale = this.dict.scales[this._paramMode(this.mode)];

    // notes to cycle through
    var keys = this.dict.keys;
    // starting index for key loop
    var offset = keys.indexOf(this.key);
    for (var s = 0; s < this._scale.steps.length; s++) {
      var step = this._scale.steps[s];
      var idx = (offset + step) % keys.length;
      // relative octave. 0 = same as root, 1 = next ocave up
      var rel_octave = offset + step > keys.length - 1 ? 1 : 0;
      // generate the relative triads
      var triad = this._genTriad(s, idx, rel_octave, this._scale.triads[s]);
      // define the note
      var note = { step: s, note: keys[idx], rel_octave: rel_octave, triad: triad };
      // add the note
      this.notes.push(note);
    }
  };

  // create a chord of notes based on chord type

  MusicalScale.prototype._genTriad = function _genTriad(s, offset, octave, t) {
    // get the steps for this chord type
    var steps = this.dict.triads[t];
    // instantiate the chord
    var chord = { type: t, interval: this._intervalFromType(s, t), notes: [] };
    // load the notes
    var keys = this.dict.keys;
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      var idx = (offset + step) % keys.length;
      // relative octave to base
      var rel_octave = offset + step > keys.length - 1 ? octave + 1 : octave;
      // define the note
      chord.notes.push({ note: keys[idx], rel_octave: rel_octave });
    }
    return chord;
  };

  // proper interval notation from the step and type

  MusicalScale.prototype._intervalFromType = function _intervalFromType(step, type) {
    var steps = 'i ii iii iv v vi vii'.split(' ');
    var s = steps[step];
    switch (type) {
      case 'maj':
        s = s.toUpperCase();break;
      case 'min':
        s = s;break;
      case 'aug':
        s = s.toUpperCase() + '+';break;
      case 'dim':
        s = s + '°';break;
    }
    return s;
  };

  MusicalScale.prototype._errors = function _errors(params) {
    if (this.dict.keys.indexOf(params.key) === -1) {
      if (Object.keys(this.dict.flat_sharp).indexOf(params.key) === -1) {
        return console.error(params.key + ' is an invalid key. ' + this.dict.keys.join(', '));
      }
    } else if (this.dict.modes.indexOf(params.mode) === -1) {
      return console.error(params.mode + ' is an invalid mode. ' + this.dict.modes.join(', '));
    } else {
      return false;
    }
  };

  MusicalScale.prototype._loadDictionary = function _loadDictionary() {
    return {
      keys: 'C C# D D# E F F# G G# A A# B'.split(' '),
      scales: {
        ion: {
          name: 'Ionian',
          steps: this._genSteps('W W H W W W H'),
          dominance: [3, 0, 1, 0, 2, 0, 1],
          triads: this._genTriads(0)
        },
        dor: {
          name: 'Dorian',
          steps: this._genSteps('W H W W W H W'),
          dominance: [3, 0, 1, 0, 2, 2, 1],
          triads: this._genTriads(1)
        },
        phr: {
          name: 'Phrygian',
          steps: this._genSteps('H W W W H W W'),
          dominance: [3, 2, 1, 0, 2, 0, 1],
          triads: this._genTriads(2)
        },
        lyd: {
          name: 'Lydian',
          steps: this._genSteps('W W W H W W H'),
          dominance: [3, 0, 1, 2, 2, 0, 1],
          triads: this._genTriads(3)
        },
        mix: {
          name: 'Mixolydian',
          steps: this._genSteps('W W H W W H W'),
          dominance: [3, 0, 1, 0, 2, 0, 2],
          triads: this._genTriads(4)
        },
        aeo: {
          name: 'Aeolian',
          steps: this._genSteps('W H W W H W W'),
          dominance: [3, 0, 1, 0, 2, 0, 1],
          triads: this._genTriads(5)
        },
        loc: {
          name: 'Locrian',
          steps: this._genSteps('H W W H W W W'),
          dominance: [3, 0, 1, 0, 3, 0, 0],
          triads: this._genTriads(6)
        },
        mel: {
          name: 'Melodic Minor',
          steps: this._genSteps('W H W W W W H'),
          dominance: [3, 0, 1, 0, 3, 0, 0],
          triads: 'min min aug maj maj dim dim'.split(' ')
        },
        har: {
          name: 'Harmonic Minor',
          steps: this._genSteps('W H W W H WH H'),
          dominance: [3, 0, 1, 0, 3, 0, 0],
          triads: 'min dim aug min maj maj dim'.split(' ')
        }
      },
      modes: ['ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'aeolian', 'locrian', 'major', 'minor', 'melodic', 'harmonic'],
      flat_sharp: {
        Cb: 'B',
        Db: 'C#',
        Eb: 'D#',
        Fb: 'E',
        Gb: 'F#',
        Ab: 'G#',
        Bb: 'A#'
      },
      triads: {
        maj: [0, 4, 7],
        min: [0, 3, 7],
        dim: [0, 3, 6],
        aug: [0, 4, 8]
      }
    };
  };

  MusicalScale.prototype._paramMode = function _paramMode(mode) {
    return {
      minor: 'aeo',
      major: 'ion',
      ionian: 'ion',
      dorian: 'dor',
      phrygian: 'phr',
      lydian: 'lyd',
      mixolydian: 'mix',
      aeolian: 'aeo',
      locrian: 'loc',
      melodic: 'mel',
      harmonic: 'har'
    }[mode];
  };

  MusicalScale.prototype._paramKey = function _paramKey(key) {
    if (this.dict.flat_sharp[key]) return this.dict.flat_sharp[key];
    return key;
  };

  MusicalScale.prototype._genTriads = function _genTriads(offset) {
    // this is ionian, each mode bumps up one offset.
    var base = 'maj min min maj maj min dim'.split(' ');
    var triads = [];
    for (var i = 0; i < base.length; i++) {
      triads.push(base[(i + offset) % base.length]);
    }
    return triads;
  };

  MusicalScale.prototype._genSteps = function _genSteps(steps_str) {
    var arr = steps_str.split(' ');
    var steps = [0];
    var step = 0;
    for (var i = 0; i < arr.length - 1; i++) {
      var inc = 0;
      switch (arr[i]) {
        case 'W':
          inc = 2;break;
        case 'H':
          inc = 1;break;
        case 'WH':
          inc = 3;break;
      }
      step += inc;
      steps.push(step);
    }
    return steps;
  };

  return MusicalScale;
}();

;

/**
  ArpeggioPatterns
  http://codepen.io/jakealbaugh/pen/PzpzEO/
  returns arrays of arpeggio patterns for a given length of notes
  @param steps {Integer} number of steps
  @return {Object}
    patterns: {Array} of arpeggiated index patterns
 */

var ArpeggioPatterns = function () {
  function ArpeggioPatterns(params) {
    _classCallCheck(this, ArpeggioPatterns);

    this.steps = params.steps;
    this._loadPatterns();
    this.updatePatterns = this.pubUpdatePatterns;
  }

  ArpeggioPatterns.prototype.pubUpdatePatterns = function pubUpdatePatterns(params) {
    this.steps = params.steps;
    this._loadPatterns();
  };

  ArpeggioPatterns.prototype._loadPatterns = function _loadPatterns() {
    this.arr = [];
    this.patterns = [];
    for (var i = 0; i < this.steps; i++) {
      this.arr.push(i);
    }
    this._used = [];
    this.permutations = this._permute(this.arr);
    this.looped = this._loop();
    this.patterns = {
      straight: this.permutations,
      looped: this.looped
    };
  };

  ArpeggioPatterns.prototype._permute = function _permute(input, permutations) {
    permutations = permutations || [];
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      this._used.push(ch);
      if (input.length === 0) {
        permutations.push(this._used.slice());
      }
      this._permute(input, permutations);
      input.splice(i, 0, ch);
      this._used.pop();
    }
    return permutations;
  };

  ArpeggioPatterns.prototype._loop = function _loop() {
    var looped = [];
    for (var p = 0; p < this.permutations.length; p++) {
      var perm = this.permutations[p];
      var arr = Array.from(perm);
      for (var x = 1; x < perm.length - 1; x++) {
        arr.push(perm[perm.length - 1 - x]);
      }
      looped.push(arr);
    }
    return looped;
  };

  return ArpeggioPatterns;
}();

;

function t_synth_arpeggio(note){
	var chords = [0, 2, 6, 3, 4, 2, 5, 1];
	var ms_key = note;
	var ms_mode = 'major';
	var ap_steps = 6;
	var ap_pattern_type = 'straight'; // || 'looped'
	var ap_pattern_id = 0;
	var player = {
	  chord_step: 0,
	  octave_base: 4,
	  arp_repeat: 2,
	  bass_on: false,
	  triad_step: 0,
	  step: 0,
	  playing: false,
	  bpm: 135
	};

	var chord_count = chords.length;
	var MS = new MusicalScale({ key: ms_key, mode: ms_mode });
	var AP = new ArpeggioPatterns({ steps: ap_steps });

	var arpeggio = AP.patterns[ap_pattern_type][ap_pattern_id];

	// Load Synths
	var channel = {
	  master: new Tone.Gain(0.7),
	  treb: new Tone.Gain(0.7),
	  bass: new Tone.Gain(0.8)
	};
	var fx = {
	  distortion: new Tone.Distortion(0.8),
	  reverb: new Tone.Freeverb(0.1, 3000),
	  delay: new Tone.PingPongDelay('16n', 0.1)
	};
	var synths = {
	  treb: new Tone.PolySynth(1, Tone.SimpleAM),
	  bass: new Tone.DuoSynth()
	};

	instruments.push(synths.treb);
	instruments.push(synths.bass);

	synths.bass.vibratoAmount.value = 0.1;
	synths.bass.harmonicity.value = 1.5;
	synths.bass.voice0.oscillator.type = 'triangle';
	synths.bass.voice0.envelope.attack = 0.05;
	synths.bass.voice1.oscillator.type = 'triangle';
	synths.bass.voice1.envelope.attack = 0.05;

	// fx mixes
	fx.distortion.wet.value = 0.2;
	fx.reverb.wet.value = 0.2;
	fx.delay.wet.value = 0.3;
	// gain levels
	channel.master.fan(fft, waveform).toMaster();
	channel.treb.connect(channel.master);
	channel.bass.connect(channel.master);
	// fx chains
	synths.treb.chain(fx.delay, fx.reverb, channel.treb);
	synths.bass.chain(fx.distortion, channel.bass);

	//Load Transport

	Tone.Transport.scheduleRepeat(function (time) {
	  var curr_chord = player.chord_step % chord_count;

	  var prev = document.querySelector('.chord > div.active');
	  if (prev) prev.classList.remove('active');
	  var curr = document.querySelector('.chord > div:nth-of-type(' + (curr_chord + 1) + ')');
	  if (curr) curr.classList.add('active');

	  var chord = MS.notes[chords[curr_chord]];

	  // finding the current note
	  var notes = chord.triad.notes;

	  var _loop2 = function _loop2(i) {
	    notes = notes.concat(notes.map(function (n) {
	      return { note: n.note, rel_octave: n.rel_octave + (i + 1) };
	    }));
	  };

	  for (var i = 0; i < Math.ceil(ap_steps / 3); i++) {
	    _loop2(i);
	  }
	  var note = notes[arpeggio[player.step % arpeggio.length]];

	  // setting bass notes
	  var bass_o = chord.rel_octave + 2;
	  var bass_1 = chord.note + bass_o;

	  // slappin da bass
	  if (!player.bass_on) {
	    player.bass_on = true;
	    synths.bass.triggerAttack(bass_1);
	  }

	  // bump the step
	  player.step++;

	  // changing chords
	  if (player.step % (arpeggio.length * player.arp_repeat) === 0) {
		player.chord_step++;
	    player.bass_on = false;
	    synths.bass.triggerRelease();
		player.triad_step++;
	  }
	  // arpin'
	  var note_ref = '' + note.note + (note.rel_octave + player.octave_base);
	  // _this2._utilActiveNoteClassToggle([note_ref.replace('#', 'is')], 'active-t');
	  synths.treb.triggerAttackRelease(note_ref, '16n');
	}, '16n');

}

// Tone.Transport.start();




//drawing the FFT
var fftContext = $("<canvas>",{
  "id" : "fft"
}).insertAfter("#canvas").get(0).getContext("2d");

function drawFFT(values){
  fftContext.clearRect(0, 0, canvasWidth, canvasHeight);
  var barWidth = canvasWidth / fft.size;
  for (var i = 0, len = values.length; i < len; i++){
    var val = values[i] / 255;
    var x = canvasWidth * (i / len);
    var y = val * canvasHeight * 2;
    fftContext.fillStyle = "rgba(255, 0, 0, " + val + ")";
    fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight * 2);
  }
}

//the waveform data
var waveContext = $("<canvas>", {
  "id" : "waveform"
}).insertAfter("#canvas").get(0).getContext("2d");
var waveformGradient;

function drawWaveform(values){
  //draw the waveform
  waveContext.clearRect(0, 0, canvasWidth, canvasHeight);
  var values = waveform.analyse();
  waveContext.beginPath();
  waveContext.lineJoin = "round";
  waveContext.lineWidth = 3;
  waveContext.strokeStyle = waveformGradient;
  waveContext.moveTo(0, (values[0] / 255) * canvasHeight);
  for (var i = 1, len = values.length; i < len; i++){
    var val = values[i] / 255;
    var x = canvasWidth * (i / len);
    var y = val * canvasHeight;
    waveContext.lineTo(x, y);
  }
  waveContext.stroke();
}

//size the canvases
var canvasWidth, canvasHeight;

function sizeCanvases(){
  canvasWidth = $("#fft").width();
  canvasHeight = $("#fft").height();
  waveContext.canvas.width = canvasWidth;
  fftContext.canvas.width = canvasWidth;
  waveContext.canvas.height = canvasHeight;
  fftContext.canvas.height = canvasHeight;

  //make the gradient
  waveformGradient = waveContext.createLinearGradient(0, 0, canvasWidth, canvasHeight);
  waveformGradient.addColorStop(0, "#ff0000");
  waveformGradient.addColorStop(1, "#ffff00");   
}

sizeCanvases();
$(window).resize(sizeCanvases);

function loop(){
  requestAnimationFrame(loop);
  //get the fft data and draw it
  var fftValues = fft.analyse();
  drawFFT(fftValues);
  //get the waveform valeus and draw it
  var waveformValues = waveform.analyse();
  drawWaveform(waveformValues);
}
loop();

/*
 * Extra Functionality
 */
  // $('<div>test</div>').insertAfter($('#category-bar').children(':input[value="Notes"]'));

var timer = 0;
$(document).ready(function () {

  //recompile when someone changes text in a text field
   $('[type="text"]').keyup(function () { 
      if(playing){
        timer++;
        // alert("hi");
        //only recompile if someone has not typed for 500ms
        setTimeout(function() {
             timer--;
             if(timer==0){
              t_stop();
              t_reset();
              go();
             }
        }, 500);
      }
   });

   // $('#toolbox .tile.dialect-method[data-types="Instrument Membrane"]').append("div");

   // $( "<p>Test</p>" ).insertAfter( ".category-bar[Value=Notes]" );

   // console.log($("#category-bar[value='Notes'"));
   // console.log($('#category-bar :input[value="Notes"]'));
   // console.log();
   // console.log($('#category-bar').children(':input[value="Notes"]')[0]);
  // console.log($('#category-bar').children(':input[value="Notes"]'));
   // $(".category-bar").detach().appendTo('#DestinationContainerNode')
   // var test2 = test.first();
   // test2 = test2.append("<div>test</div>");
   // console.log(test2);
   // test.append("<div>hey</div>");
// $('#toolbox.tile.dialect-method[data-types="Instrument Membrane"]:first').append("<div>hey</div>");
// var test2 = $('#toolbox.tile.dialect-method[data-types="Instrument Membrane"]:first');
// console.log(test); //console.log(test2); console.log(test==test2);
// $('#toolbox .tile.dialect-method[data-types="Instrument Membrane"]').append("<div>hey</div>");
   // .append("<p>Test</p>");

  //Constrain BPM to being 1 and above
  // $("[data-types='Global BPM']" ).find('input').each(function(index){
  //   console.log($(this));
  // });;

});
// $('#toolbox .tile.dialect-method[data-types="Instrument Membrane"]').append("<div>hey</div>");

// console.log($('#toolbox .tile.dialect-method[data-types="Instrument Membrane"]'));
// $( "input" ).each(function()
// {
//   console.log($(this));
//   $(this).on('input',function(e){
//      alert('Changed!')
//     });
// });
// $(".tile.number").children().on('input',function(e){
//      alert('Changed!')
//     });
//  // .on('input',function(e){
//  //     alert('Changed!')
//  //    });

// var vf = new Vex.Flow.Factory({
//   renderer: {selector: 'boo', width: 500, height: 200}
// });

// var score = vf.EasyScore();
// var system = vf.System();

// system.addStave({
//   voices: [
//     score.voice(score.notes('C#5, B4, A4, G#4', {stem: 'up'}))
//   ]
// }).addClef('treble').addTimeSignature('4/4');

// vf.draw();


// var notes = [
//   // A quarter-note C.
//   new VF.StaveNote({ keys: ["c/4"], duration: "q" }),

//   // A quarter-note D.
//   new VF.StaveNote({ keys: ["d/4"], duration: "q" }),

//   // A quarter-note rest. Note that the key (b/4) specifies the vertical
//   // position of the rest.
//   new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),

//   // A C-Major chord.
//   new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
// ];

// // Create a voice in 4/4 and add above notes
// var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
// voice.addTickables(notes);

// // Format and justify the notes to 400 pixels.
// var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

// // Render voice
// voice.draw(context, stave);


    /* The Plain and Easy code to be rendered */
    // var data = "@data:'BFGA/";
    // /* Create the Verovio toolkit instance */
    // var vrvToolkit = new verovio.toolkit();
    //  Render the data and insert it as content of the #output div 
    // document.getElementById("output").innerHTML = vrvToolkit.renderData( 
    //     data, 
    //     JSON.stringify({ inputFormat: 'pae' }) 
    // );


//       var canvas = $("#boo")[0];
//       var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);

//       var ctx = renderer.getContext();
//       var stave = new Vex.Flow.Stave(10, 0, 500);
//       stave.addClef("treble").setContext(ctx).draw();

//       //notes
//       // Create the notes
//       var notesA = [
//         new Vex.Flow.StaveNote({ keys: ["c/1"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["c/2"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["c/3"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["g/4"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "q" }),
//         new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "q" }),
//       ];

//       var voiceA = getVoice(notesA);

//       // Create a voice in 4/4
     
//       // Format and justify the notes to 500 pixels
//       var formatter = new Vex.Flow.Formatter().
//         joinVoices([voiceA]).format([voiceA], 250);

//       // Render voice
//       voiceA.draw(ctx, stave);

// function getVoice(notes)
// {
//       var voice = new Vex.Flow.Voice({
//         num_beats: 8,
//         beat_value: 4,
//         resolution: Vex.Flow.RESOLUTION
//       });

//       // Add notes to voice
//       voice.addTickables(notes);  
//       return voice;

// }












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