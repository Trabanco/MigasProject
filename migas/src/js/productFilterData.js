import productModel from "./productModelo.js";
import productDataApi from "./producDataApi.js";
import productModelo from "./productModelo.js";
export default class productFilterData{
    myProductArray = []
    constructor(){
        this.repository = new productDataApi()
    }
    async getData(){
        const data = await this.repository.getAllData()
        data.forEach(myProductlData => {
            if (myProductData.biography.publisher == "Migas Product") {
                this.myProductArray.push(myProductlData = new productModelo(
                    myProductData.id,
                    myProductData.nombre,
                    myProductData.category,
                    myProductData.image,
                    myProductData.info,
                    myProductData.instructions)); 
            }
        });
        return this.myProductArray;
    }
}