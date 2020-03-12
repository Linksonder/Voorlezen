/** Future: Import files */
import './router';
import BookListComponent from './book-list';
import BookDetailsComponent from './book-details';
import soundService from './sound-service';
import ComponentFactory from './lib/componentFactory';

export default function app(){

  soundService.open().then(soundService => {
    let factory = new ComponentFactory([

    ]);
  
    let router = document.createElement("router-outlet");
    document.querySelector('#app').appendChild(router);
    router.init(factory);
  })


  // function showAudio(sound){

  //   console.log(sound);
  //   let container = document.createElement('div');
  //   container.className = 'audio';
  
  //   let title = document.createElement('h5');
  //   title.innerText = sound.id;
  //   container.appendChild(title);
  
  
  //   let audio = document.createElement('audio');
  //   audio.src = URL.createObjectURL(sound.blob);
  //   audio.controls = true;
  //   container.appendChild(audio);
  
  //   // audioDownload.href = recordedAudio.src;
  //   // audioDownload.download = "audio.mp3";
  //   // audioDownload.innerHTML = "Download";
  
  //   document.getElementById('sounds').appendChild(container);
  
  // }
  
  // function storeAudio(blob){
    
  //   let id = document.querySelector("#id").value;
  //   soundService.addSound(id, blob).then((sound) => {
  //     showAudio(sound);
  //   })
  // }
  
  
  // function startRecording() {
  //   startRecord.disabled = true;
  //   stopRecord.disabled = false;
  //   audio = [];
  //   recordedAudio.controls = false;
  //   rec.start();
  // }
  
  // function stopRecording() {
  //   startRecord.disabled = false;
  //   stopRecord.disabled = true;
  //   rec.stop();
  // }
  
  // function init() {
  
  //   if (!navigator.mediaDevices) {
  //     console.log("Sorry, getUserMedia is not supported");
  //     return;
  //   }
    
  
  //   navigator.mediaDevices.getUserMedia({ audio: true })
  //     .then(stream => {
  //       rec = new MediaRecorder(stream);
  //       rec.ondataavailable = e => {
  //         audio.push(e.data);
  //         if (rec.state == "inactive") {
  //           let blob = new Blob(audio, {
  //             type: "audio/x-mpeg-3"
  //           });
  
  //           storeAudio(blob);
  //         }
  //       };
  //     }).catch(e => console.log(e));
  
  //   //open DB
  //   soundService.open().then(() => {
  //     soundService.getAllSounds().then(sounds => {
  //       console.log(sounds);
  //       sounds.forEach(s => showAudio(s));
  //     })
  //   })
  // }
  
  //window.addEventListener("DOMContentLoaded", init, false);
  
}
