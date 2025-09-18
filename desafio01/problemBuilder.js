//TODOclass Lanche {
  constructor(pao, carne, queijo, salada, molho) {
    this.pao = pao;
    this.carne = carne;
    this.queijo = queijo;
    this.salada = salada;
    this.molho = molho;
  }

  show() {
    console.log("Lanche:", {
      pao: this.pao,
      carne: this.carne,
      queijo: this.queijo,
      salada: this.salada,
      molho: this.molho,
    });
  }

}

class LancheBuilder {
  constructor(){
    this.lanche =new Lanche();
  }
  setPao() {
    this.lanche.pao = true;
    return this;
  }
  setCarne(){
    this.lanche.carne = true;
    return this;
  }
   setQueijo(){
    this.lanche.queijo = true;
    return this;
  }
   setSalada(){
    this.lanche.salada = true;
    return this;
  }
   setMolho(){
    this.lanche.molho = true;
    return this;
  }
  build() {
    return this.lanche;
  }
}

class LancheDirector{
  static buildLanchepadrao(){
    return new LancheBuilder()
    .setCarne()
    .setMolho()
    .setQueijo()
    .build
  }
  static buildPaoComBerro() {
    return new LancheBuilder()
    .setPao()
    .build
    
    }
  }


const lancheSimples = LancheDirector.buildPaoComBerro
const lancheCompleto = LancheDirector.buildLanchepadrao

lancheSimples.show();
lancheCompleto.show();
