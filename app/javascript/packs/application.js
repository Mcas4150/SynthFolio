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

  // VCO
    var vco = context.createOscillator();
    vco.type = "sine";
    vco.frequency.value = 440;
    vco.start(0);

  // VCA

    var vca = context.createGain();
    vca.gain.value = 0;


  // LOWPASS FILTER

    lowpassFilter = context.createBiquadFilter({
      // type: lowpass,
      // q: .5,
      frequency: 300
    });



  // CHORUS
  //   var chorus = new tuna.Chorus({
  //   rate: 1.5,
  //   feedback: 0.2,
  //   delay: 0.0045,
  //   bypass: 0
  // });



  // Connect
    vco.connect(lowpassFilter);
    lowpassFilter.connect(vca);

    vca.connect(context.destination);



    $('.key').mousedown(function(){
      vca.gain.value = .8;
    });

    $('.key').mouseup(function() {
      vca.gain.value = 0;
    });



     $('.key1').mousedown(function(){
      vco.frequency.value = 174;
    });

    $('.key2').mousedown(function(){
      vco.frequency.value = 185;
    });

    $('.key3').mousedown(function(){
      vco.frequency.value = 196;
    });

    $('.key5').mousedown(function(){
      vco.frequency.value = 207;
    });

    $('.key6').mousedown(function(){
      vco.frequency.value = 220;
    });

    $('.key7').mousedown(function(){
      vco.frequency.value = 233;
    });

    $('.key8').mousedown(function(){
      vco.frequency.value = 246;
    });

    $('.key9').mousedown(function(){
      vco.frequency.value = 261;
    });

    $('.key10').mousedown(function(){
      vco.frequency.value = 277;
    });

    $('.key11').mousedown(function(){
      vco.frequency.value = 293;
    });

    $('.key12').mousedown(function(){
      vco.frequency.value = 311;
    });

    $('.key13').mousedown(function(){
      vco.frequency.value = 329;
    });

  $('.key14').mousedown(function(){
      vco.frequency.value = 349;
    });

  $('.key15').mousedown(function(){
      vco.frequency.value = 369;
    });

  $('.key16').mousedown(function(){
      vco.frequency.value = 391;
    });

    $('.key17').mousedown(function(){
      vco.frequency.value = 415;
    });

    $('.key18').mousedown(function(){
      vco.frequency.value = 440;
    });

    $('.key19').mousedown(function(){
      vco.frequency.value = 466;
    });

  $('.key20').mousedown(function(){
      vco.frequency.value = 493;
    });

  $('.key21').mousedown(function(){
      vco.frequency.value = 523;
    });
      $('.key22').mousedown(function(){
      vco.frequency.value = 554;
    });

    $('.key23').mousedown(function(){
      vco.frequency.value = 587;
    });

  $('.key24').mousedown(function(){
      vco.frequency.value = 622;
    });

  $('.key25').mousedown(function(){
      vco.frequency.value = 659;
    });

  $('.key26').mousedown(function(){
      vco.frequency.value = 698;
    });

    $('.key27').mousedown(function(){
      vco.frequency.value = 740;
    });

    $('.key28').mousedown(function(){
      vco.frequency.value = 783;
    });

    $('.key29').mousedown(function(){
      vco.frequency.value = 830;
    });

  $('.key30').mousedown(function(){
      vco.frequency.value = 880;
    });

  $('.key31').mousedown(function(){
      vco.frequency.value = 932;
    });









});
