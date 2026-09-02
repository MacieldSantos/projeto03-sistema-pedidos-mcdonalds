// Classe (Referencia)
class McOferta {
    constructor(numeroPedido, numero, lanche, batataTamanho, refrigeranteTamanho) {
        this.numeroPedido = numeroPedido;
        this.numero = numero;
        this.lanche = lanche;
        this.batataTamanho = batataTamanho;
        this.refrigeranteTamanho = refrigeranteTamanho;
    }

    // Metodo para clonar e realizar uma copia:
    clone() {
        return new McOferta(
            this.numeroPedido, 
            this.numero, 
            this.lanche, 
            this.batataTamanho, 
            this.refrigeranteTamanho);
    }
}

// Classe GerenciaMcOferta para gerenciar instâncias de McOferta:
class GerenciaMcOferta{
    constructor(){
        this.mcOfertas = {};
    }

    // Add uma nova McOferta ao dicioario McOferta:
    addMcOferta(numeroPedido, numero, lanche, batataTamanho, refrigeranteTamanho){
        const mcOferta = new McOferta(numeroPedido, numero, lanche, batataTamanho, refrigeranteTamanho);
        this.mcOfertas[numero] = mcOferta;
    }

    // Solicita uma McOferta pelo número e retorna uma cópia dela:
    getMcOfertaByNumero(numero){
        const mcOfertaOriginal = this.mcOfertas[numero];
        if(mcOfertaOriginal){
            return mcOfertaOriginal.clone();
        }else{
            return null;
        }
    }
}

// Criando uma instancia de GerenciaMcOferta:
const gerencia = new GerenciaMcOferta();

// Add McOfertas:
gerencia.addMcOferta(0, 1, 'Big Mac', 'batata média', 'refrigerante médio');
gerencia.addMcOferta(0, 2, 'Quarteirão com Queijo', 'batata média', 'refrigerante médio');
gerencia.addMcOferta(0, 3, 'McChicken', 'batata média', 'refrigerante médio');
gerencia.addMcOferta(0, 4, 'Cheddar McMelt', 'batata média', 'refrigerante médio');
gerencia.addMcOferta(0, 5, 'Quarteirão Duplo com Queijo', 'batata média', 'refrigerante médio');

// Clonando McOfertas e modificando:
const mcOfertaClone1 = gerencia.getMcOfertaByNumero(1);
const mcOfertaClone2 = gerencia.getMcOfertaByNumero(3);
const mcOfertaClone3 = gerencia.getMcOfertaByNumero(5);

if(mcOfertaClone1){
    mcOfertaClone1.numeroPedido = "100";
    mcOfertaClone1.batataTamanho = "batata grande";
    mcOfertaClone1.refrigeranteTamanho = "refrigerante grande";
}

if(mcOfertaClone2){
    mcOfertaClone2.numeroPedido = "101";
    mcOfertaClone2.batataTamanho = "batata pequena";
    mcOfertaClone2.refrigeranteTamanho = "refrigerante pequeno";
}

if(mcOfertaClone3){
    mcOfertaClone3.numeroPedido = "102";
    mcOfertaClone3.batataTamanho = "batata grande";
    mcOfertaClone3.refrigeranteTamanho = "refrigerante pequeno";
}

// Imprimindo as McOfertas:
console.log("McOfertas Originais=====================================================")
console.log(gerencia.getMcOfertaByNumero(1));
console.log(gerencia.getMcOfertaByNumero(2));
console.log(gerencia.getMcOfertaByNumero(3));
console.log(gerencia.getMcOfertaByNumero(4));
console.log(gerencia.getMcOfertaByNumero(5));

console.log("McOfertas Clonadas=====================================================")
console.log(mcOfertaClone1);
console.log(mcOfertaClone2);
console.log(mcOfertaClone3);




