

function aud_play_pause() {
                        var myAudio = document.getElementById("myAudio");
 
                        if (myAudio.paused) {
                            myAudio.play();
                            $('.stop').css('display', 'none');
                            $('.play').css('display', 'block');
                            
                        } else {
                            myAudio.pause();
                            $('.stop').css('display', 'block');
                            $('.play').css('display', 'none');
                            
                        }
                    }
 
     