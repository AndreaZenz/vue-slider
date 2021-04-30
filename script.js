const app = new Vue({
    el: "#vueContainer",
    data: {
        images: [

            /*Indice'0*/
            "https:pixabay.com/get/g7131923fa7f3484f85713b01cc57cbc02ace4326c05d57bc2146febe3947c66f18f67b3377ca17b6e6d06469f2f0c075_640.jpg",

            /*Indice'1*/
            "https://pixabay.com/get/g4856ec046cc237914c623f538b4590d9d3917b7ecd40c8a4b1debaedb941aea5fbe752fb0a0478c8d0a65f8dc24bcead_640.jpg",

            /*Indice'2*/
            "https://pixabay.com/get/gec120356006bccc43484a8175a74a39de478f87b98322434a3e94a46d849b2481d82d5f0eaa5e452abbc3dc0ac0b6ae5_640.jpg",

            /*Indice'3*/
            "https://pixabay.com/get/g448c5c42969adbdef4fdc50bbac4bee4460be3d9d8075e9cce050f898d3dcc4df526232906df670614ecd25e9a0fd3db_640.jpg",



        ],
        timer: null,
        currentIndex: 0,

    },

    methods: {

        startSlide: function () {
            this.timer = setInterval(this.next, 3000);
        },

        next: function () {
            this.currentIndex += 1;
            if(this.currentIndex == this.images.length){
                this.currentIndex = 0
            }
        },

        prev: function () {
            this.currentIndex -= 1;
            if(this.currentIndex == -1){
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




