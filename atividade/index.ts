import MaterialDeLeituraInterface from "./material-de-leitura.interface";

class Livro implements MaterialDeLeituraInterface {
  titulo: string;
  autor: string;
  numeroPagina: number;

  constructor(titulo: string, autor: string, numeroPagina: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPagina = numeroPagina;
  }

  exibirDetalhes() {
    console.log(
      `Título: ${this.titulo} - Autor: ${this.autor} - Número de páginas: ${this.numeroPagina}`
    );
  }
}

const book = new Livro("A hora da estrela", "Clarisse Lispector", 340);
//console.log(book);

class Revista implements MaterialDeLeituraInterface {
  titulo: string;
  autor: string;
  edicao: number;

  constructor(titulo: string, autor: string, edicao: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.edicao = edicao;
  }

  exibirDetalhes() {
    console.log(
      `Título: ${this.titulo} - Autor: ${this.autor} - Edição: ${this.edicao}`
    );
  }
}

const magazine = new Revista("Rolling Stone", "GMagazine", 661);
//console.log(magazine);

class Artigo implements MaterialDeLeituraInterface {
  titulo: string;
  autor: string;
  dataPublicacao: Date;

  constructor(titulo: string, autor: string, dataPublicacao: Date) {
    this.titulo = titulo;
    this.autor = autor;
    this.dataPublicacao = dataPublicacao;
  }

  exibirDetalhes() {
    console.log(
      `Título: ${this.titulo} - Autor: ${
        this.autor
      } - Data de publicação: ${this.dataPublicacao.toDateString()}`
    );
  }
}

const article = new Artigo(
  "Uma corporeidade para a naturologia",
  "Luana B Gouveia",
  new Date(2019, 9, 25)
);
//console.log(article);

book.exibirDetalhes();
magazine.exibirDetalhes();
article.exibirDetalhes();
