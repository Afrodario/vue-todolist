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
                this.albums.push({text: this.newAlbum});
            }
        }
    }
);