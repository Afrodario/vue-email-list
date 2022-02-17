const app = new Vue(
    {
        el: "#root",
        data: {

            addresses: []

        },


        mounted() {

            for (let i = 0; i < 10; i++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {

                    
                    this.addresses.push(response.data);
                    console.log(this.addresses)

                })

            }

        },
    
    }
)