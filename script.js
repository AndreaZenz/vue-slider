const app = new Vue({
    el: "#vueContainer",
    data: {
        images: [

            /*Indice'0*/
            "https://picsum.photos/600/400/?blur",

            /*Indice'1*/
            "https://picsum.photos/600/400?grayscale",

            /*Indice'2*/
            "https://picsum.photos/seed/picsum/600/400",

            /*Indice'3*/
            "https://picsum.photos/id/237/600/400",



        ],
        timer: null,
        currentIndex: 0,

    },
    mounted: function () {
        this.startSlide();

        
    },


    methods: {

        startSlide: function () {
            this.timer = setInterval(this.next, 3000);
        },

        next: function () {
            this.currentIndex += 1;
            if (this.currentIndex == this.images.length) {
                this.currentIndex = 0
            }
        },

        prev: function () {
            this.currentIndex -= 1;
            if (this.currentIndex == -1) {
                this.currentIndex = this.images.length - 1
            }
            console.log(this.currentIndex);
        },

        checkBall: function (index) {
            //Questa funzione deve fare in modo che i pallini riferiscano ad una determinata immagine in base al suo index
            this.currentIndex = index
        },
    },
    // computed: {
    //     currentImg: function () {
    //         return this.images[Math.abs(this.currentIndex) % this.images.length];
    //     }
    // }
});




