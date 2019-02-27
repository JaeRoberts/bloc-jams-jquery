class Helper {

  playPauseAndUpdate(song) => {
    if (player.playState !== 'playing') {
      return;
    }

    helper.playPauseAndUpdate.call(song);

    const totalTime = player.getDuration();
    $('#time-control .total-time').text(totalTime);
  };
}

const helper = new Helper();
