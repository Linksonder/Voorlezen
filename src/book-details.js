import soundService from './sound-service'

class BookDetails extends HTMLElement {

    constructor(){
        super();

    }

    init(soundService){

        let name = this.getAttribute('name');
        this.book = JSON.parse(localStorage.getItem(name)) || {
            name: name,
            chapters: [
                "hoofdstuk_1"
            ]
        };

        //title
        let title = document.createElement('h1');
        title.innerText =  this.book.name;
        this.appendChild(title);

        //chapter-list
        this.chapterscontainer = document.createElement('div');
        this.chapterscontainer.className = "chapter-list";
        this.appendChild(this.chapterscontainer);

        //add button
        let add = document.createElement('button');
        add.innerText = '+';
        add.addEventListener('click', () => { this.addChapter()});
        this.appendChild(add);

        this.renderChapters();
    }

    addChapter() {

    }

    renderChapters(){
        if(!this.book.chapters)
            return;

        this.book.chapters.forEach(c => {
            soundService.getSound(c).then(sound => {
                this.showAudio(sound);
            })
        })
    }

    showAudio(sound){

        let chapter = document.createElement('div');
        chapter.className = 'chapter';

        let title = document.createElement('h5');
        title.innerText = sound.id;
        chapter.appendChild(title);


        let audio = document.createElement('audio');
        audio.src = URL.createObjectURL(sound.blob);
        audio.controls = true;
        chapter.appendChild(audio);

        // audioDownload.href = recordedAudio.src;
        // audioDownload.download = "audio.mp3";
        // audioDownload.innerHTML = "Download";

        this.chapterscontainer.appendChild(chapter);

      }
}

customElements.define('book-details', BookDetails);
