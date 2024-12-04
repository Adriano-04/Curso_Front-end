function Dispositivo(modelo,marca, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    this.listagem = function() {
        console.log(`Modelo: ${modelo} Marca: ${marca} Ano: ${ano}`)
    }
}


function Celulares(modelo, marca, ano, tipo) {
    Dispositivo.call(this, modelo, marca, ano)
    this.tipo = tipo;

}

function Notebooks(modelo, marca, ano, tipo) {
    Dispositivo.call(this, modelo ,marca, ano)
    this.tipo = tipo;

}

const dispositivo1 = new Celulares('S23', "samsung", '2023' , 'celular');
const dispositivo2 = new Notebooks('Nitro v15', 'Acer', '2024','notebook');
const dispositivo3 = new Celulares('Iphone 15', 'Apple', '2023', 'celular');


console.log(dispositivo3.listagem())