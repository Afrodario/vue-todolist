const app = new Vue(
    {
        el: "#root",
        data: {
            newAlbum: "",
            newArtist: "",
            albums: [
                {
                  text: "Rhythm Nation 1814",
                  artist: "Janet Jackson",
                  done: true  
                },
                {
                    text: "Ray of Light",
                    artist: "Madonna",
                    done: true  
                  },
                {
                    text: "Sign o' the Times",
                    artist: "Prince",
                    done: true  
                },
                {
                    text: "Dangerous",
                    artist: "Michael Jackson",
                    done: false  
                }
            ]
        },

        methods: {
            cancel(index) {
                this.albums.splice(index, 1);
            },

            addAlbum() {
                if (this.newAlbum == "" || this.newArtist == "") {
                    alert("Uno o più campi sono vuoti")
                } else {
                    this.albums.push({text: this.newAlbum, artist: this.newArtist, done: false});
                    this.newAlbum = "";
                    this.newArtist = "";
                }
            },

            doneNow(index) {
                console.log(this.albums[index].done);

                if (this.albums[index].done == false) {
                    this.albums[index].done = true;
                } else {
                    this.albums[index].done = false;
                }
            }
            
        }
    }
);