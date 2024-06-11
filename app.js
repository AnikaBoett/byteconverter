Vue.createApp({
    data() {
        return {
            B_amount: "0 B",
            Mb_amount: "0 Mb",
            inputKilo: "",
            inputBytes: "",
        };
    },
    methods: {
        KToB: function() {
            //multiply by 1024
            this.B_amount = this.inputKilo * 1000 + " B";
            this.inputKilo = "";
        },

        BToMB: function (color) {
            //divide by 1,048,576
            this.Mb_amount = this.inputBytes / 125000 + " Mb";
            this.inputBytes = "";
        },

    },
    created: function() {
        console.log("Vue app opened");

    }
}).mount("#app");