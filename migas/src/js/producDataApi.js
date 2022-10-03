export default class productDataApi{

    constructor(){
        this.url = "../assets/products.json/producMigas.json"
    }

    async getAllData(){
        try{
            const response = await fetch(this.url)
            const producMigas = await response.json()
            return producMigas      
        } catch (error) {
            console.log('Error : ' + error)
        }
    }
}