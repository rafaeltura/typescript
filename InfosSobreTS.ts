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