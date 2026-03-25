//1
// const carro = {
// marca: "Toyota",
// modelo: "Corolla",
//     ano: 2022,
//          falar: function(){
//         console.log();
//     },
// };
// console.log(carro.modelo);

//2
// const aluno = {
//     nome: "Lauany",
//     idade: 16,
//     falar: function(){
//         console.log("Olá, meu nome é " + this.nome);
//     },
// };
// aluno.idade = 18
// console.log("é " + aluno.idade);

//3
// const produto = {
//     nome: "calça",
//     preco: 150
// };

// console.log("O produto " + produto.nome + " custa R$ " + produto.preco);

//4
// const pessoa = {
//     nome: "Lauany"
// };
// pessoa.idade = 16;

// console.log(pessoa.nome);
// console.log(pessoa.idade);

// console.log(pessoa["nome"]);
// console.log(pessoa["idade"]);

//5
// const pessoa = {
//     nome: "Lauany",
//     idade: 16,
//     falar: function(){
//         console.log("Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos");
//     },
// };
// pessoa.falar();

//6
// const pessoa = {
//   marca: "Toyota",
//   modelo: "Corolla",
//   ano: 2015,
//   falar: function () {
//     console.log(
//       "Carro: " + this.marca + "-" + this.ano
//     );
//   },
// };
// pessoa.falar();


//7
// let produto = {
//     nome: "Camiseta",
//     preco: 50
// };

// produto.preco = 80;
// console.log(produto);

// console.log("O produto " + produto.nome + " custa R$ " + produto.preco);


//8
// let aluno = {
//     nome: "lauany"
// };

// aluno.nota= 7 ;

// console.log(aluno);
// console.log(aluno.nome);     
// console.log(aluno["nota"]); 


//9
// let pessoa = {
//     falar: function() {
//         console.log("Olá!");
//     }
// };

// pessoa.falar();


//11
// let pessoa2 = {
//     nome: "LAuany",
//     falar: function() {
//         console.log("Meu nome é " + this.nome);
//     }
// };

// pessoa2.falar();


//12
// const produto = {
//     nome: "Tênis",
//     preco: 200,
//     desconto: function(porcentagem) {
//         const valorDesconto = this.preco * (porcentagem / 100);
//         this.preco -= valorDesconto;
//     }
// };

// produto.desconto(10);

// console.log("Produto:", produto.nome);
// console.log("Preço com desconto: R$", produto.preco.toFixed(2));


//13
// let aluno2 = {
//     nome: "Carlos",
//     notas: [7, 8, 9]
// };

// console.log(aluno2.notas);


//14
// const pessoa = {
//     nome: "LAuany",
//     idade: 16,
//     cidade: "Caxias do Sul"
// };

// for (let prop in pessoa) {
//     console.log(prop + ": " + pessoa[prop]);
// }


//15
// let aluno3 = {
//     nome: "Lauany",
//     notas: [9, 7, 8],
//     media: function() {
//         let soma = 0;
//         for (let n of this.notas) {
//             soma += n;
//         }
//         return soma / this.notas.length;
//     }
// };

// console.log(aluno3.media());


//16
// let alunos = [
//     { nome: "Ana", nota: 8 },
//     { nome: "João", nota: 5 },
//     { nome: "Pedro", nota: 7 }
// ];

// let aprovados = alunos.filter(a => a.nota >= 7);
// console.log(aprovados);


//17
// let contaBancaria = {
//     saldo: 1000,
//     depositar: function(valor) {
//         this.saldo += valor;
//     },
//     sacar: function(valor) {
//         this.saldo -= valor;
//     }
// };

// contaBancaria.depositar(500);
// contaBancaria.sacar(200);
// console.log(contaBancaria.saldo);


//18
// let usuario = {
//     nome: "Lauany",
//     logado: false,
//     login: function() {
//         this.logado = true;
//     },
//     logout: function() {
//         this.logado = false;
//     }
// };

// console.log(usuario.logado); 

// usuario.login();
// console.log(usuario.logado); 


// usuario.logout();
// console.log(usuario.logado); 



//19
// let pessoa3 = {
//     nome: "Ana",
//     endereco: {
//         cidade: "Caxias do Sul",
//         estado: "RS"
//     }
// };

// console.log(pessoa3.endereco.cidade);


//20
// let produtos = [
//     { nome: "Celular", preco: 1500 },
//     { nome: "Mouse", preco: 50 },
//     { nome: "Teclado", preco: 200 }
// ];

// let caros = produtos.filter(p => p.preco > 100);
// console.log(caros);


//20
// let sistema = {
//     usuarios: [],

//     adicionarUsuario: function(nome) {
//         if (!this.usuarios.includes(nome)) {
//             this.usuarios.push(nome);
//         } else {
//             console.log("Usuário já existe");
//         }
//     },

//     listarUsuarios: function() {
//         console.log(this.usuarios);
//     }
// };

// sistema.adicionarUsuario("Ana");
// sistema.adicionarUsuario("Ana");
// sistema.listarUsuarios();


//21
// let carrinho = {
//     produtos: [],

//     adicionar: function(produto) {
//         this.produtos.push(produto);
//     },

//     remover: function(nome) {
//         this.produtos = this.produtos.filter(p => p.nome !== nome);
//     },

//     total: function() {
//         let soma = 0;
//         for (let p of this.produtos) {
//             soma += p.preco;
//         }
//         return soma;
//     }
// };

// carrinho.adicionar({ nome: "Camisa", preco: 50 });
// carrinho.adicionar({ nome: "Tênis", preco: 200 });
// console.log(carrinho.total());


//22
// let escola = {
//     alunos: [],

//     adicionarAluno: function(nome, notas) {
//         this.alunos.push({ nome, notas });
//     },

//     media: function(aluno) {
//         let soma = aluno.notas.reduce((a, b) => a + b, 0);
//         return soma / aluno.notas.length;
//     },

//     aprovados: function() {
//         return this.alunos.filter(a => this.media(a) >= 7);
//     }
// };

// escola.adicionarAluno("Ana", [8, 7, 9]);
// escola.adicionarAluno("João", [5, 6, 4]);

// console.log(escola.aprovados());


//23
// let banco = {
//     contas: [],

//     criarConta: function(nome, saldo) {
//         this.contas.push({ nome, saldo });
//     },

//     transferir: function(origem, destino, valor) {
//         let contaOrigem = this.contas.find(c => c.nome === origem);
//         let contaDestino = this.contas.find(c => c.nome === destino);

//         if (contaOrigem && contaDestino) {
//             if (contaOrigem.saldo >= valor) {
//                 contaOrigem.saldo -= valor;
//                 contaDestino.saldo += valor;
//             } else {
//                 console.log("Saldo insuficiente");
//             }
//         }
//     }
// };

// banco.criarConta("Ana", 1000);
// banco.criarConta("João", 500);

// banco.transferir("Ana", "João", 200);

// console.log(banco.contas);
