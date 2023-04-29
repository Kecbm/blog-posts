# Hello world em Kotlin

A linguagem de programação **Kotlin** foi criada em 2011 pela **JetBrains** e pode ser utilizada para desenvolver __aplicativos Andoid__.

Vamos dar o primeiro passo nos estudos de Kotlin imprimindo o __Hello, world__ na tela. Para isso acesse o [Palayground Kotlin](https://developer.android.com/training/kotlinplayground?hl=pt-br), que executa os códigos escritos em Kotlin diretamente do navegador.

Ao acessá-lo, teremos o código que imprime o Hello, world! escrito:

~~~kotlin
fun main() {
    println("Hello, world!")
}
~~~

Ao clicar no botão executar, teremos a frase como retorno:

>Hello, world!

Também podemos imprimir diversas frases de uma única vez, basta repetir o comando `println`. Copie o exemplo a seguir e cole no [Palayground Kotlin](https://developer.android.com/training/kotlinplayground?hl=pt-br):

~~~kotlin
fun main() {
    println("Kotlin é recomendado")
    println("para o desenvolvimento")
    println("de aplicativos Android")
}
~~~

Após clicar em executar, teremos o seguinte retorno:

>Kotlin é recomendado
>para o desenvolvimento
>de aplicativos Android

Além do comando `println` também temos o `print` que pode ser utilizado para imprimir frases em Kotlin. A diferença entre os dois é que o `println`imprime a frase em uma nova linha e o `print` imprime o conteúdo em uma única linha. Vamos observar o comportamento dos dois comandos com o exemplo a seguir:

~~~kotlin
fun main() {
    println("Meu nome é Klecianny")
    print("E eu tenho ")
    print("27 anos.")
    print(" Atualmente estudo desenvolvimento Android")
}
~~~

Executando o código temos:

>Meu nome é Klecianny
>E eu tenho 27 anos. Atualmente estudo desenvolvimento Android

Quando utilizamos o `print` para imprimir uma frase, podemos quebrar a linha com `\n`. Aplicando o `\n` nas frases do exemplo anterior:

~~~kotlin
fun main() {
    println("Meu nome é Klecianny")
    print("\n E eu tenho ")
    print("\n 27 anos.")
    print("\n Atualmente estudo desenvolvimento Android")
}
~~~

Agora a saída será:

>Meu nome é Klecianny
>
> E eu tenho 
> 27 anos.
> Atualmente estudo desenvolvimento Android

Também é possível imprimir uma linha em branco, para isso utilizamos o seguinte código:

~~~kotlin
fun main() {
    println("A próxima linha está em branco:")
    println("")
    println("E aqui termina o conteúdo.")
}
~~~

>A próxima linha está em branco:
>
>E aqui termina o conteúdo.

Podemos destacar o que uma linha de código faz utilizando um comentário. Para adicionar um comentário no código basta inserir `//` e em seguida o comentário desejado, como segue o exemplo:

~~~kotlin
fun main() {
    println("Obrigada por ler meu post!")

    //  Imprime uma linha em branco
    println("")

    println("Até a próxima :D")
}
~~~

>Obrigada por ler meu post!
>
>Até a próxima :D