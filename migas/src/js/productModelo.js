export default class productModelo {
    id;
    nombre;
    category;
    image;
    info;
    instructions;


    constructor(id,
         nombre,
         category,
         image, 
         info,
         instructions) 
    {
        this.id = id;
        this.nombre = nombre;
        this.category = category;
        this.image = image;
        this.info = info;
        this.instructions = instructions;
    }
}
 