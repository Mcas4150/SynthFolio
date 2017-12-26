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


    // var oscillator = function(frequency){
        // VCO
          var vco = context.createOscillator();
          vco.type = "sine";

          vco.start(0);

        // VCA

          var vca = context.createGain();
          vca.gain.value = 0;


        // LOWPASS FILTER

          lowpassFilter = context.createBiquadFilter({
            // type: lowpass,
            // q: .5,
            frequency: 500
          });

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
    vca.gain.value = .65;
  });
  document.addEventListener("keyup", function(){
    vca.gain.value = 0;
    $(".key").removeClass("pressed");
    $(".key").removeClass("blackpressed");
  });

 document.addEventListener("touchstart", function(){
    vca.gain.value = .65;
  });
  document.addEventListener("touchend", function(){
    vca.gain.value = 0;

  });



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
      case 51:
        vco.frequency.value = 523;
        $(".key20").addClass("pressed");
        break;
      case 69:
        vco.frequency.value = 554;
        $(".key21").addClass("pressed");
        break;
      case 52:
        vco.frequency.value = 587;
        $(".key22").addClass("pressed");
        break;
      case 82:
        vco.frequency.value = 622;
         $(".key23").addClass("pressed");
        break;
      case 84:
        vco.frequency.value = 659;
        $(".key24").addClass("pressed");
        break;
      case 54:
        vco.frequency.value = 698;
        $(".key25").addClass("pressed");
        break;
      case 89:
        vco.frequency.value = 749;
        $(".key26").addClass("pressed");
        break;
      case 55:
        vco.frequency.value = 783;
        $(".key27").addClass("pressed");
        break;
      case 85:
        vco.frequency.value = 830;
        $(".key28").addClass("pressed");
        break;
      case 56:
        vco.frequency.value = 880;
        $(".key29").addClass("pressed");
        break;
      case 73:
        vco.frequency.value = 932;
        $(".key30").addClass("pressed");
        break;
      default:
        vco.frequency.value = null;
        vca.gain.value = 0;
    }
    };

document.addEventListener("keydown", play);
document.addEventListener("touchstart", play);


//   var slider = document.getElementById("myRange");
// var output = document.getElementById("value");
// output.innerHTML = slider.value; // Display the default slider value
// lowpassFilter.frequency = slider.value*10;

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
//     lowpassFilter.frequency = this.value*10;
// }


});
