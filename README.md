## Servlets + Arrays(dados)

# Tipos de estrutura de dados usados:

    # MAP:
         Usei a estrutura de dados Map para guardar os caracteres e posições da palavra escolhida para o jogo, pois eu tinha não só de saber quais caracteres é que a palavra tinha, mas também as suas posições. Para este ponto podia ter usado também uma Lista com um tuplo de caracteres e integer, mas iria dificultar bastante a procura na lista, o que é facilitado com o Map.

    # List:
        Usei a estrutura de dados Lista para guardar as tentativas de caracteres e tentativas de palavras que não foram corretas, deste modo a prevenir que o utilizador fosse tentar a mesma palavra ou o mesmo caracter e gastsse uma tentativa em vão. Para além disso, estas listas eram enviadas para o frontend para que o utilizador pudesse ter informação de que palavras/caracteres usou.
        Usei Listas também para os models da Palavra e Categoria, pois estes dois têm uma relação m: n, deste modo podia guardar a lista de categorias que a palavra tinha.

    # Set:
        Usei Set para o model de dificuldade, pois uma dificuldade pode ter várias palavras e deste modo conseguia obter todas as palavras para cada dificuldade.

## Servlets + ligação a BD

    Para este code challenge usei uma arquitetura MVC (Model View Controller), deste modo as minhas chamadas à base de dados estavam na controller layer e usando o data JPA do Spring boot, a maior parte das querys já estavam criadas, apenas tive que adicionar algumas de pedidos específicos. A ligação a BD era feita com o hibernate, e a sua configuração está no ficheiro  aplication.properties. Na Layer Model era onde eram especificadas as tabelas e suas respetivas colunas e relações. 
    A Base de Dados, é feita em MySQL e tinha quatro tabelas:
                                                           # palavras: onde guardo as palavras e as suas dificuldades.
                                                           # categorias: onde guardo as categorias;
                                                           # dificuldade: onde guardo as dificuldades.
                                                           # palavras_categorias: onde guardo os ids das palavras com os ids das suas respetivas categorias


##  Servlets + Hibernate

    O hibernate foi usado para a ligação à base de dados, e as respetivas configurações na camada models, as querys eram criadas automaticamente, e para tal tive de criar um repositório e estender JpaRepository, para querys especificas apenas tive de adicionar no repositório e JPA query com a minha custom query. O hibernate facilitou bastante todo o trabalho que tinha a ver com as ligações à base de dados.

## Spring + Hibernate

    A integração entre o Spring e o Hibernate foi feita com o Spring initializr, onde me foram adicionadas automaticamente as dependências necessárias.
    A configuração com a base de dados foi feita no ficheiro aplication.properties onde tem as definições base para a ligação com a base de dados.
    A partir da camada controllers eram chamados métodos do Data JPA, que faziam a ligação a base de dados.

