# Desafio 1 - Maratona Full Cycle

## Instalação e preparação do ambiente

O primeiro passo para que você consiga acompanhar muito bem a Maratona é ter o seu ambiente de desenvolvimento pronto para conseguir simular tudo que te apresentaremos nos próximos vídeos. Nesse ponto o que você deve fazer como desafio nesse momento será:

1. Instalar a Go Lang
2. Printar um "Olá Mundo" utilizando Go Lang
3. Instalar o Docker em seu computador
4. Gerar e publicar uma imagem no Dockerhub do executável do programa "Olá Mundo".
5. Postar nos comentários do vídeo a URL da sua imagem para que possamos executar o seu "Olá Mundo"

> Dica Importante: Desenvolvemos um Guia Rápido de Docker e de Go Lang. Ambos estão no [Canal do Telegram](https://t.me/devfullcycle). Para acessar e baixar, [clique aqui](https://t.me/devfullcycle)

# Desafio 2 

## Adicionar um endpoint no Microsserviço "Drivers" 

Adicione mais um endpoint no Microsserviço drivers onde é possível buscar as informações de um driver pelo ID.

O formado do endpoint deve ser: /drivers/{id} do driver.

Compile o programa e o disponibilize em uma imagem Docker. 
Isso significa que poderemos testar seu programa acessando:

```
docker run -p8081:8081 seu-user-no-docker-hub/sua-imagem
```

Ao acessar no browser: http://localhost/drivers/45688cd6-7a27-4a7b-89c5-a9b604eefe2f

Teremos o resultado:

```json
{
	"uuid": "45688cd6-7a27-4a7b-89c5-a9b604eefe2f",
	"name": "Wesley"
}
```

Informe na área de comentários da Maratona Desafio 2 com o endereço da sua imagem docker.

# Desafio 3

## Crie uma nova rota no Nest.js para Maratona

Utilizando uma instalação do Nest.js, crie uma rota: "/maratona".
Ao acessar essa rota, uma mensagem de forma randômica deve aparecer no seguinte padrão.

Hello <palavra randômica>

### Instruções
1.	Utilize pelo menos 5 palavras randômicas.
2. Para cada refresh no browser, uma palavra diferente deve aparecer.
3. Fique livre para escolher a palavra, mas seja cordial.
4. A função para gerar a palavra randômica deve vir de um __serviço__ definido no Nest.js.
5. Gere uma imagem Docker e a disponibilize no Docker Hub. 

__Observação:__ A aplicação deve rodar na porta 8080.

> Informe sua imagem na área de comentários da Maratona.

# Desafio 4

## Integração contínua

Baseado no conteúdo da [Aula ao Vivo 2](http://maratona.fullcycle.com.br/aula-ao-vivo-02.html), faça:

1.	Crie um simples teste unitário realizando alguma validação no microsserviço de simulador
2. Utilizando o Github Actions, crie um processo que quando um push ou uma pull request for criada em seu repositório, o processo de integração contínua é executado rodando o teste unitário e o build do microsserviço.

> Informe na área de comentários o link direto para o GitHub Actions do repositório provando que o processo foi executado.