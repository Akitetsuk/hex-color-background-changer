// Implementar solución aquí

Vue.createApp({
    data() {
        return {
            bgColor: '#FFFFFF'
        }
    },
    methods: {
        updateRandomColor() {          
            this.bgColor = this.generateRandomColor();;
        },
        generateRandomColor() {            
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255); 
            return (`rgb(${red}, ${green}, ${blue})`);       
    }
}
}).mount('#app')


