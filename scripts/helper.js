class Helper {
playPauseAndUpdate(song) => {
  if(player.playState !== 'playing') {return;}

  $('total-time input').on('input', function (event){
    helper.playPauseAndUpdate(song);
  });

  const totalTime = player.getDuration();
  $('#time-control .total-time').text(totalTime);

  });
}

const helper = new Helper();
