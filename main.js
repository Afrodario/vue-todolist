const app = new Vue(
    {
        el: "#root",
        data: {
            newAlbum: "",
            albums: [
                {
                  text: "Rhythm Nation 1814",
                  done: true  
                },
                {
                    text: "Ray of Light",
                    done: true  
                  },
                {
                    text: "Sign o' the Times",
                    done: true  
                },
                {
                    text: "Dangerous",
                    done: false  
                }
            ]
        },

        methods: {
            cancel(index) {
                this.albums.splice(index, 1);
            },

            addAlbum() {
                this.albums.push({text: this.newAlbum, done: false});
                this.newAlbum = "";
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