/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


console.log('Hello World from Webpacker')

  $(document).ready(function() {
      var context = new (window.AudioContext || window.webkitAudioContext)();
      // var tuna = new Tuna(context);

      var analyser = context.createAnalyser(),
          master = context.createGain()
           a = d = r = 0.1, s = 1;
          master.gain.value = 1;
    // var oscillator = function(frequency){
        // VCO

          var vco = context.createOscillator();
          vco.type = "sine";
          vco.start(0);

        // VCA

          var vca = context.createGain();
          vca.gain.value = 0;

        // LOWPASS FILTER

          lowPassFilter = context.createBiquadFilter();
          lowPassFilter.type = "lowpass";


        //  Low Frequency Oscillator (LFO)
          var lfo = context.createOscillator();
              lfo.type = "sine";
              lfo.start(0);

              lfoGain = context.createGain();
              lfoGain.gain.value = 0;


        var Attack = document.querySelector('.attack'),
            Decay = document.querySelector('.decay'),
            Sustain = document.querySelector('.sustain'),
            Release = document.querySelector('.release'),
            Cutoff = document.querySelector('.cutoff'),
            Resonance = document.querySelector('.resonance'),
            LFOinput = document.querySelector('.lfo'),
            LFOintensity = document.querySelector('.intensity');




        // Connect
          vco.connect(lowPassFilter);
          lowPassFilter.connect(vca);
          lfo.connect(lfoGain);
          lfoGain.connect(vca.gain);
          vca.connect(master);

          master.connect(analyser);
          analyser.connect(context.destination);

        // Slider Controls
          Attack.oninput = function () {
             changeAttack(Attack.value);
          }

          Decay.oninput = function () {
              changeDecay(Decay.value);
          }

          Sustain.oninput = function () {
              changeSustain(Sustain.value);
          }

          Release.oninput = function () {
              changeRelease(Release.value);
          }

          // Cutoff.oninput = function(){
          //   changeCutoff(Cutoff.value);
          // }

          // Resonance.oninput = function(){
          //   changeResonance(Resonance.value);
          // }

          // LFOinput.oninput = function () {
          //   lfo.frequency.value = this.value;
          //   lfo.frequency.cancelScheduledValues(0);
          //   lfo.frequency.setValueAtTime(this.value, context.currentTime);
          // }

          // LFOintensity.oninput = function () {
          //     lfoGain.gain.value = this.value;
          //     lfoGain.gain.cancelScheduledValues(0);
          //     lfoGain.gain.setValueAtTime(this.value, context.currentTime);
          // }


          function changeAttack(val) {
               a = +val;
          }

          function changeDecay(val) {
              d = +val;
          }

          function changeSustain(val) {
              s = +val;
          }

          function changeRelease(val) {
              r = +val;
          }

          // function changeCutoff(val){
          //   lowPassFilter.frequency.value = val;
          // }

          // function changeResonance(val){
          //   lowPassFilter.Q.value = val;
          // }

        var masterGain = document.querySelector('.master-gain');
        masterGain.oninput = function (){
          changeMaster(masterGain.value);
        }

        function changeMaster(vol){
          master.gain.value = vol/100;
        }


        function envGenOn(vcaGain, a, d, s) {
            var now = context.currentTime;
            vcaGain.cancelScheduledValues(0);
            vcaGain.setValueAtTime(0, now);
            vcaGain.linearRampToValueAtTime(1, now + a);
            vcaGain.linearRampToValueAtTime(s, now + a + d);
        }

        function envGenOff(vcaGain, r) {
            var now = context.currentTime;
            vcaGain.cancelScheduledValues(0);
            vcaGain.setValueAtTime(vcaGain.value, now);
            vcaGain.linearRampToValueAtTime(0, now + r);
            // vcaGain.cancelScheduledValues(0);
            // vcaGain.setValueAtTime(vcaGain.value, now);
            // vcaGain.linearRampToValueAtTime(0, now + r);
        }

      $('.master-gain').knob(
        {
          'min':0,
          'max':100,
          'step':1,
          'width': 75,
          'height': 75,
          'angleOffset': 200,
          'angleArc': 320,
          'displayInput': false,
          'fgColor': "white",
          'bgColor': "#bbbbbc",
          'change': function (){
                changeMaster(masterGain.value);
              function changeMaster(vol){
                master.gain.value = vol/100;
              }
              }
        });

      $('.cutoff').knob(
        {
          'min':0,
          'max':1000,
          'step':5,
          'width': 42,
          'height': 42,
          'angleOffset': 200,
          'angleArc': 320,
          'displayInput': false,
          'fgColor': "white",
          'bgColor': "#bbbbbc",
          'change': function (){
                changeCutoff(Cutoff.value);
              function changeCutoff(val){
                 lowPassFilter.frequency.value = val;
              }
              }
        });

      $('.resonance').knob(
        {
          'min':0,
          'max':10,
          'step':0.05,
          'width': 42,
          'height': 42,
          'angleOffset': 200,
          'angleArc': 320,
          'displayInput': false,
          'fgColor': "white",
          'bgColor': "#bbbbbc",
          'change': function (){
                changeResonance(Resonance.value);
              function changeResonance(val){
                 lowPassFilter.Q.value = val;
              }
              }
        });

        $('.lfo').knob(
        {
          'min':0,
          'max':100,
          'step':1,
          'width': 42,
          'height': 42,
          'angleOffset': 200,
          'angleArc': 320,
          'displayInput': false,
          'fgColor': "white",
          'bgColor': "#bbbbbc",
          'change':  function ()
            {
              lfo.frequency.value = LFOinput.value;
              lfo.frequency.cancelScheduledValues(0);
              lfo.frequency.setValueAtTime(LFOinput.value, context.currentTime);
            }
        });

          $('.intensity').knob(
        {
          'min':0,
          'max':1,
          'step':0.05,
          'width': 42,
          'height': 42,
          'angleOffset': 200,
          'angleArc': 320,
          'displayInput': false,
          'fgColor': "white",
          'bgColor': "#bbbbbc",
          'change':  function () {
              lfoGain.gain.value = LFOintensity.value;
              lfoGain.gain.cancelScheduledValues(0);
              lfoGain.gain.setValueAtTime(LFOintensity.value, context.currentTime);
          }
        });




var canvas = document.querySelector('.visualizer');
var canvasCtx = canvas.getContext("2d");


  WIDTH = canvas.width;
  HEIGHT = canvas.height;

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);


function draw() {
  drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);
  canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();



};

draw();


    $('.key').mousedown(function(){
      envGenOn(vca.gain, a, d, s);
    });

    $('.key').mouseup(function() {

      envGenOff(vca.gain, r);
    });

   var mouseclick = function(key, frequency){
    $(key).mousedown(function(){
      vco.frequency.value = frequency;
    });

   };

   mouseclick(".key1", 174);
   mouseclick(".key2", 185);
   mouseclick(".key3", 196);
   mouseclick(".key4", 207);
   mouseclick(".key5", 220);
   mouseclick(".key6", 233);
   mouseclick(".key7", 247);
   mouseclick(".key8", 261);
   mouseclick(".key9", 277);
   mouseclick(".key10", 293);
   mouseclick(".key11", 311);
   mouseclick(".key12", 329);
   mouseclick(".key13", 349);
   mouseclick(".key14", 370);
   mouseclick(".key15", 392);
   mouseclick(".key16", 415);
   mouseclick(".key17", 440);
   mouseclick(".key18", 466);
   mouseclick(".key19", 494);
   mouseclick(".key20", 523);
   mouseclick(".key21", 554);
   mouseclick(".key22", 587);
   mouseclick(".key23", 622);
   mouseclick(".key24", 659);
   mouseclick(".key25", 698);
   mouseclick(".key26", 740);
   mouseclick(".key27", 784);
   mouseclick(".key28", 830);
   mouseclick(".key29", 880);
   mouseclick(".key30", 932);
   mouseclick(".key31", 988);

  document.addEventListener("keydown", function(){

    envGenOn(vca.gain, a, d, s);
  });
  document.addEventListener("keyup", function(){

    envGenOff(vca.gain, r);
    $(".key").removeClass("pressed");
    $(".key").removeClass("blackpressed");
  });

 document.addEventListener("touchstart", function(){
    vca.gain.value = .65;
  });
  document.addEventListener("touchend", function(){
    vca.gain.value = 0;

  });

  // var keyress = function(event, frequency, key){
  //   event.w.keypress(function(){
  //     $(key).addClass("pressed");
  //    vco.frequency.value = frequency;
  //   });

  // };



  // keyress(90, 174, ".key1");
  // keyress(83, 185, ".key2");


    var play = function(event){
    switch(event.which){
      case 90:
        vco.frequency.value = 174;
        $(".key1").addClass("pressed");
        break;
      case 83:
        vco.frequency.value = 185;
        $(".key2").addClass("blackpressed");
        break;
      case 88:
        vco.frequency.value = 196;
        $(".key3").addClass("pressed");
        break;
      case 68:
        vco.frequency.value = 207;
        $(".key4").addClass("blackpressed");
        break;
      case 67:
        vco.frequency.value = 220;
        $(".key5").addClass("pressed");
        break;
      case 70:
        vco.frequency.value = 233;
        $(".key6").addClass("blackpressed");
        break;
      case 86:
        vco.frequency.value = 246;
        $(".key7").addClass("pressed");
        break;
      case 66:
        vco.frequency.value = 261;
        $(".key8").addClass("pressed");
        break;
      case 72:
        vco.frequency.value = 277;
        $(".key9").addClass("pressed");
        break;
      case 78:
        vco.frequency.value = 293;
        $(".key10").addClass("pressed");
        break;
      case 74:
        vco.frequency.value = 311;
        $(".key11").addClass("pressed");
        break;
      case 77:
        vco.frequency.value = 329;
        $(".key12").addClass("pressed");
        break;
      case 188:
        vco.frequency.value = 349;
        $(".key13").addClass("pressed");
        break;
      case 76:
        vco.frequency.value = 369;
        $(".key14").addClass("pressed");
        break;
      case 190:
        vco.frequency.value = 391;
        $(".key15").addClass("pressed");
        break;
      case 186:
        vco.frequency.value = 415;
        $(".key16").addClass("pressed");
        break;
      case 191:
        vco.frequency.value = 440;
        $(".key17").addClass("pressed");
        break;
      case 81:
        vco.frequency.value = 466;
        $(".key18").addClass("pressed");
        break;
      case 87:
        vco.frequency.value = 493;
        $(".key19").addClass("pressed");
        break;
      case 69:
        vco.frequency.value = 523;
        $(".key20").addClass("pressed");
        break;
      case 52:
        vco.frequency.value = 554;
        $(".key21").addClass("pressed");
        break;
      case 82:
        vco.frequency.value = 587;
        $(".key22").addClass("pressed");
        break;
      case 53:
        vco.frequency.value = 622;
         $(".key23").addClass("pressed");
        break;
      case 84:
        vco.frequency.value = 659;
        $(".key24").addClass("pressed");
        break;
      case 89:
        vco.frequency.value = 698;
        $(".key25").addClass("pressed");
        break;
      case 55:
        vco.frequency.value = 749;
        $(".key26").addClass("pressed");
        break;
      case 85:
        vco.frequency.value = 783;
        $(".key27").addClass("pressed");
        break;
      case 56:
        vco.frequency.value = 830;
        $(".key28").addClass("pressed");
        break;
      case 73:
        vco.frequency.value = 880;
        $(".key29").addClass("pressed");
        break;
      case 57:
        vco.frequency.value = 932;
        $(".key30").addClass("pressed");
        break;
        case 79:
        vco.frequency.value = 988;
        $(".key31").addClass("pressed");
        break;
      default:
        vco.frequency.value = null;
        vca.gain.value = 0;
    }
    };

document.addEventListener("keydown", play);
document.addEventListener("touchstart", play);








 // Cutoff.oninput = function(){
          //   changeCutoff(Cutoff.value);
          // }
  // $(function(){
  //   var falseslider = $('#falseslider'),
  //       min = falseslider.attr('min'),
  //       max = falseslider.attr('max');

  //       falseslider.hide();

  //       $('#knobby').knobknob({
  //         snap : 10,
  //         value: 250,
  //         turn : function(ratio){
  //           // Changing the value of the hidden slider
  //           falseslider.val(Math.round(ratio*(max-min) + min));
  //           }

  //       });

  // });


// var contactWidth = document.getElementById('contact').offsetWidth;
// var oscilloscope = new Oscilloscope(context, analyser, contactWidth, 150);
// vca.connect(oscilloscope.analyser);




});
