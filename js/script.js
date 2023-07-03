const {createApp} = Vue;

createApp ({
    data(){
        return{
            count: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    clickImmagine: false,
                    isPointer: false
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    clickImmagine: false,
                    isPointer: false
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    clickImmagine: false,
                    isPointer: false
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    clickImmagine: false,
                    isPointer: false
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    clickImmagine: false,
                    isPointer: false
                }
            ]
        }
    },

    

    methods: {
        
        nextButton(){
            if (this.count < (this.slides.length - 1)){
                this.count++ ;
            }
            else{
                this.count = 0;
            }
        },
        prevButton(){
            if (this.count > 0){
                this.count-- ;
            }
            else{
                this.count = (this.slides.length - 1);
            }
        },

        // BONUS 1:
        changeSlide(index) {
            this.count = index;
        },

        addPointerClass(index) {
            this.slides[index].isPointer = true;
        },
          removePointerClass(index) {
            this.slides[index].isPointer = false;
        },
    }
    
}).mount('#app');