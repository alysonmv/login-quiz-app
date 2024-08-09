const data = [
    {
        category: "Linguagens de Programação",
        questions: [
            {
                question: "Qual linguagem é conhecida por sua simplicidade e legibilidade?",
                options: [
                    "Python",
                    "Java",
                    "C++"
                ],
                answer: "Python",
                tip: "Dica: Essa linguagem utiliza indentação para definir blocos de código."
            },
            {
                question: "Qual linguagem é amplamente usada para desenvolvimento web e é executada no lado do cliente?",
                options: [
                    "Ruby",
                    "JavaScript",
                    "C#"
                ],
                answer: "JavaScript",
                tip: "Dica: Essa linguagem permite a criação de interatividade nas páginas web."
            },
            {
                question: "Qual linguagem é comumente usada para desenvolvimento de aplicativos móveis nativos para iOS?",
                options: [
                    "Kotlin",
                    "Swift",
                    "Objective-C"
                ],
                answer: "Swift",
                tip: "Dica: Essa linguagem foi introduzida pela Apple para o desenvolvimento iOS."
            },
            {
                question: "Qual linguagem é frequentemente usada para programação de sistemas e jogos?",
                options: [
                    "Python",
                    "C++",
                    "Ruby"
                ],
                answer: "C++",
                tip: "Dica: Essa linguagem oferece um alto nível de controle e desempenho."
            },
            {
                question: "Qual linguagem é usada comumente para desenvolvimento de aplicações empresariais?",
                options: [
                    "Java",
                    "C#",
                    "PHP"
                ],
                answer: "Java",
                tip: "Dica: Essa linguagem é conhecida por sua portabilidade e grande ecossistema."
            },
            {
                question: "Qual linguagem é usada para análise de dados e aprendizado de máquina?",
                options: [
                    "R",
                    "Python",
                    "Julia"
                ],
                answer: "Python",
                tip: "Dica: Essa linguagem tem muitas bibliotecas populares para análise de dados e IA."
            }
        ],
    },
    {
        category: "Estruturas de Dados",
        questions: [
            {
                question: "Qual estrutura de dados garante que o primeiro elemento adicionado é o primeiro a ser removido?",
                options: [
                    "Fila",
                    "Pilha",
                    "Lista Ligada"
                ],
                answer: "Fila",
                tip: "Dica: Pense em uma fila de pessoas esperando em um caixa."
            },
            {
                question: "Qual estrutura de dados é composta por um conjunto de nós onde cada nó aponta para o próximo nó na sequência?",
                options: [
                    "Árvore Binária",
                    "Lista Ligada",
                    "Grafo"
                ],
                answer: "Lista Ligada",
                tip: "Dica: Essa estrutura pode ser simples ou duplamente encadeada."
            },
            {
                question: "Qual estrutura de dados organiza seus elementos em pares de chave-valor?",
                options: [
                    "Fila",
                    "Pilha",
                    "Tabela Hash"
                ],
                answer: "Tabela Hash",
                tip: "Dica: Essa estrutura é eficiente para busca e recuperação de dados."
            },
            {
                question: "Qual estrutura de dados mantém uma coleção de elementos exclusivos?",
                options: [
                    "Conjunto",
                    "Fila de Prioridade",
                    "Pilha"
                ],
                answer: "Conjunto",
                tip: "Dica: Os elementos não se repetem nessa estrutura."
            },
            {
                question: "Qual estrutura de dados segue a abordagem LIFO (Last In, First Out)?",
                options: [
                    "Pilha",
                    "Fila",
                    "Árvore Binária"
                ],
                answer: "Pilha",
                tip: "Dica: Pense em uma pilha de pratos."
            },
            {
                question: "Qual estrutura de dados é uma coleção ordenada de elementos, onde a inserção e a exclusão ocorrem no final?",
                options: [
                    "Fila de Prioridade",
                    "Fila",
                    "Pilha"
                ],
                answer: "Fila de Prioridade",
                tip: "Dica: Elementos com maior prioridade são retirados primeiro."
            }
        ],
    },
    {
        category: "Algoritmos",
        questions: [
            {
                question: "Qual algoritmo de ordenação é conhecido por sua eficiência em grandes conjuntos de dados e usa a estratégia 'dividir para conquistar'?",
                options: [
                    "Quick Sort",
                    "Bubble Sort",
                    "Insertion Sort"
                ],
                answer: "Quick Sort",
                tip: "Dica: Esse algoritmo escolhe um elemento 'pivô' para dividir o conjunto."
            },
            {
                question: "Qual algoritmo é usado para encontrar um item em uma coleção ordenada?",
                options: [
                    "Binary Search",
                    "Linear Search",
                    "Depth-First Search"
                ],
                answer: "Binary Search",
                tip: "Dica: Esse algoritmo divide a busca pela metade a cada passo."
            },
            {
                question: "Qual algoritmo é usado para encontrar o caminho mais curto entre dois vértices em um grafo?",
                options: [
                    "Dijkstra's",
                    "Breadth-First Search",
                    "Merge Sort"
                ],
                answer: "Dijkstra's",
                tip: "Dica: Esse algoritmo funciona bem para grafos com pesos não negativos."
            },
            {
                question: "Qual algoritmo é usado para combinar dois conjuntos ordenados em um único conjunto ordenado?",
                options: [
                    "Merge Sort",
                    "Quick Sort",
                    "Insertion Sort"
                ],
                answer: "Merge Sort",
                tip: "Dica: Esse algoritmo combina os conjuntos de forma recursiva."
            },
            {
                question: "Qual algoritmo é usado para percorrer todos os vértices de um grafo de forma sistemática?",
                options: [
                    "Depth-First Search",
                    "Breadth-First Search",
                    "Dijkstra's"
                ],
                answer: "Depth-First Search",
                tip: "Dica: Esse algoritmo explora o máximo possível ao longo de um caminho antes de retroceder."
            },
            {
                question: "Qual algoritmo é usado para encontrar o menor elemento em um conjunto de dados?",
                options: [
                    "Merge Sort",
                    "Binary Search",
                    "Selection Sort"
                ],
                answer: "Selection Sort",
                tip: "Dica: Esse algoritmo itera pela lista várias vezes, selecionando o menor elemento em cada iteração."
            }
        ],
    },
    {
        category: "Paradigmas de Programação",
        questions: [
            {
                question: "Qual paradigma de programação se concentra em declarar o que o programa deve realizar, em vez de como fazê-lo?",
                options: [
                    "Programação Funcional",
                    "Programação Orientada a Objetos",
                    "Programação Procedural"
                ],
                answer: "Programação Funcional",
                tip: "Dica: Esse paradigma trata as computações como avaliações de funções matemáticas."
            },
            {
                question: "Qual paradigma de programação organiza o código em objetos que podem trocar mensagens entre si?",
                options: [
                    "Programação Funcional",
                    "Programação Orientada a Objetos",
                    "Programação Procedural"
                ],
                answer: "Programação Orientada a Objetos",
                tip: "Dica: Nesse paradigma, os objetos são as unidades principais de estruturação do código."
            },
            {
                question: "Qual paradigma de programação se concentra na sequência de procedimentos a serem executados?",
                options: [
                    "Programação Funcional",
                    "Programação Orientada a Objetos",
                    "Programação Procedural"
                ],
                answer: "Programação Procedural",
                tip: "Dica: Esse paradigma é baseado na ideia de dividir o programa em funções."
            },
            {
                question: "Qual paradigma de programação enfatiza a imutabilidade dos dados e funções puras?",
                options: [
                    "Programação Funcional",
                    "Programação Orientada a Objetos",
                    "Programação Procedural"
                ],
                answer: "Programação Funcional",
                tip: "Dica: Nesse paradigma, as funções não têm efeitos colaterais e sempre produzem o mesmo resultado para os mesmos inputs."
            },
            {
                question: "Qual paradigma de programação trata os problemas como a composição de funções matemáticas?",
                options: [
                    "Programação Funcional",
                    "Programação Orientada a Objetos",
                    "Lógica de Programação"
                ],
                answer: "Programação Funcional",
                tip: "Dica: Esse paradigma se concentra em transformar dados de entrada em saídas por meio de funções."
            },
            {
                question: "Qual paradigma de programação se concentra na representação de fatos e regras para a resolução de problemas?",
                options: [
                    "Lógica de Programação",
                    "Programação Orientada a Objetos",
                    "Programação Procedural"
                ],
                answer: "Lógica de Programação",
                tip: "Dica: Nesse paradigma, os programas são construídos a partir de declarações lógicas."
            }
        ],
    }
];

export default data;
