function showAudio(sound){

  console.log(sound);
  let audio = document.createElement('audio');
  audio.src = URL.createObjectURL(sound.blob);
  audio.controls = true;
  // audioDownload.href = recordedAudio.src;
  // audioDownload.download = "audio.mp3";
  // audioDownload.innerHTML = "Download";

  document.getElementById('sounds').appendChild(audio);

}

function storeAudio(blob){
  
  let id = document.querySelector("#id").value;
  soundService.addSound(id, blob).then((sound) => {
    //showSound(sound);
  })
}


function startRecording() {
  startRecord.disabled = true;
  stopRecord.disabled = false;
  audio = [];
  recordedAudio.controls = false;
  rec.start();
}

function stopRecording() {
  startRecord.disabled = false;
  stopRecord.disabled = true;
  rec.stop();
}

navigator.mediaDevices
  .getUserMedia({
    audio: true
  })
  .then(stream => {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
      audio.push(e.data);
      if (rec.state == "inactive") {
        let blob = new Blob(audio, {
          type: "audio/x-mpeg-3"
        });

        storeAudio(blob);
       
        //submit(blob);
      }
    };
  })
  .catch(e => console.log(e));

function init() {
  soundService.open().then(() => {
    soundService.getAllSounds().then(sounds => {
      console.log(sounds);
      sounds.forEach(s => showAudio(s));
    })
  })
}

window.addEventListener("DOMContentLoaded", init, false);
