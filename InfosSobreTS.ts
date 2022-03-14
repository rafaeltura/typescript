/**
 * TYPESCRIPT
 */

    //Linguagem de programação baseada no Javascript, com código aberto e criada pela Microsoft.
    //Typescript não roda diretamente no navegador, ou seja, ele precisa ser transpilado para javascript para que os navegadores consigam interpretar.
    //é uma forma de criar um código melhor, ou seja, consegue prever erros que poderão acontecer. Será um código mais seguro.
    //Código Tipado.

/**
 * INSTALAR TSC
 */
    //sudo npm install -g typescript
    //tsc --init (para criar uma pasta de configuração do ts no projeto desejado, mas para isso precisa estar na pasta do projeto.)

/**
 * EXECUTAR TSC
 */
    // tsc caminho_do_arquivoTS
    // OU
    // tsc src/caminho_do_arquivoTS --outDir (enviar o cód compilado para outra pasta) public/

    // Em ambas situações o tsc irá compilar o JS mesmo tendo erro, para evitar a compilação de arquivos ts com erros, usa-se, a flag --noEmitOnError no final.

/**
 * TYPES PRIMITIVOS
 */
    //boolean, number, string, object, any
    //Com arrays: string[], number[], any[], ...
    //Após o nome da variável é realizada a tipagem dela:
        let nome: string = "Rafael";
        let ar1: string[] = ["um", "dois"];
        let ar2: any[] = ["um", 2, false];
    
    //Nos params e nos retornos das functions tbm há possibilidade em tipar, any, void, string, number....
        function capitalize(nome: string): string{
            return nome.charAt(0).toUpperCase() + nome.substring(1);
        }
        console.log(capitalize("rafael"));
        console.log(capitalize(90)); //erro
        let a: number = capitalize("rafael"); //erro

    //Contextual Typing em funções anônimas
        //Significa que o TS vai verificar o contexto do código e irá tipar sem precisar que o dev faça isso
        let nomes = ["Ana", "Maria", "Rafael", "José"];

        nomes.forEach( function(nome) { console.log(nome.toUpperCase)});

    //Types em Object
        //no parametro da function, por exemplo, é possível definir como deve ser o object recebido
        //propriedades opcionais: outro? : string
        let user = {
            nome: 'Rafael',
            idade: 100,
            outro: 'teste'
        }

        function resumo (usuario: {nome: string, idade: number, outro?: string}): string{
            return `Opa, ${usuario.nome}, sua idade ${usuario.idade}! ${usuario.outro ? 'Obs.:' + usuario.outro : ''}`;
        }

        resumo(user);
    
    //Union Types
        //multiplos tipos, ou com opções do tipo que pode ser
        //
        let idade: number | string = 90;
        idade = "90";

        function mostrarIdade( idade: number | string ): void {
            console.log( idade );
        }

        mostrarIdade( idade );

    //Types e Interfaces
        //Há possibilidade em criar seus próprios TYPES:
            //comumente usado PascalCase para a nomenclatura;
            //Uma vez criado não possibilita add novas chaves como ocorra na interface;
            //Geralmente criados types próprios para quando um type é replicavel em outros locais do código e ou quando se quer simplificar e organizar o código (normalmente com object);
                type Idade = string | number;

                type ObjectUser = {
                    nome: string,
                    idade: Idade,
                    cpf: number
                }

                let age: Idade = '20';

                function showAge(i: Idade): Idade{
                    return i;
                }
                //==========
        
            //Tbm Interfaces:
                //Também com PascalCase na nomenclatura, e basicamente usado só para objects
                    //possibilidade duplicar a interface, add outras chaves

                interface User {
                    nome: string,
                    idade: Idade
                }
                
                interface User {
                    cpf: number,
                    status: boolean,
                }
                let u: User;
    
    //Types Assertions
        //
        let ag1 = document.querySelector("#idade"); //Irá atribuir um type HtmlElement no ag1;
        ag1.value; //Nesse caso, o erro ocorre pq o ag1 é um HtmlElement e value só existe em types HtmlInputElement, mas o código está certo, porém, o TS não tem certeza se isso vai funcionar, para isso, ajudamos ele especificando com um alias após o querySelector ;
        let ag2 = document.querySelector("#idade") as HTMLInputElement;
        ag2.value;
    
    //Types Literais
    
    let nome2: "Rafael" | "Marina" = "Rafael";
    nome2 = "João";

    function mostrarTexto( texto: string, align: "center" | "left"): string{
        return `${texto}; align=${align}`;
    }
    console.log(mostrarTexto('texto texto', 'center'));
    console.log(mostrarTexto('texto texto', 'right'));

    //Inferência Literal
        //ocorre quando está sendo enviado, por exemplo, algum argumento para a function e que não se tem a garantia que o type bate com o que é esperado na function, ou seja, no exemplo abaixo,
    function fazerRequisicao(url: string, method: "GET" | "POST"){
        //...
    }

    let req: {url: string, method: "GET" | "POST"} = {url: "www.google.com.br", method: "GET"};

    fazerRequisicao(req.url, req.method);

    //Type para functions
        type MathFunction = (n1: number, n2: number) => number;
        const SOMAR: MathFunction = (n1, n2) => n1+n2;;
        SOMAR(1, 4);

    //Retorno VOID
        //Retorno void nada mais é informar que uma function irá cumprir o papel dela e ela não irá retornar nada;
        //Caso seja um type definido com void, então poderá ter retorno ou não. Ou seja, irá ter uma informação para quem a chamar para não esperar um retorno.