# weather-forecast
 Este projeto é uma API responsável pelo consumo de outra API de previsão do tempo (https://openweathermap.org/forecast5). Nela ocorre a transformação dos dados de forma a obter as informações necessárias e formatar esses dados para serem consumidos pelo aplicativo movel.
 - Neste projeto é possível obter a previsão do tempo dos ultimos 5 dias passando como parâmetro o nome da cidade.
 - Optei por guardar o histórico das previsões das cidades pesquisadas no aplicativo móvel que vai consumir a api. Como não é uma página web a melhor opção é persistir o histórioco localmente no próprio dispositivo móvel.

## Dependências do projeto
- axios
- cors
- dotenv
- express

### Dependências de desenvolvimento do projeto
- eslint e prettier
- ts-node-dev: 
- typescript

### Configurações do ambiente de desenvolvimento
- Gerenciador de pacotes Yarn 
- Adicionar no VSCode (settings.json) a configuração para que o codigo seja formatado (eslint e prettier) ao salvar o arquivo. Segue abaixo a configuração:

```json 
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
```

### Estrutura do projeto
```bash
root
|--src
|  |--model
|  |--repositories
|  |--routes
|  |--services
|--server.ts
|--.env
```

### Linguagens e frameworks:
- NodeJS;
- TypeScript;

### Rotas disponíveis
- previsão do tempo dos ultimos 5 dias: http://localhost:3333/api/weather-forecast/5-days/:city
- API de terceiros: https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid={APIkey}

### Iniciar o servidor:
```bash
yarn start
```

## Arquivo de configurações de variáveis de ambiente
- Acidionar um arquivo .env na raiz do projeto com as seguintes variáveis

```env
KEY_API_OPENWEATHERMAP=
BASE_URL='https://api.openweathermap.org/data/2.5/forecast'
```

- Para criar sua KEY_API_OPENWEATHERMAP acesse o site [https://openweathermap.org/api]
e crie uma conta. Depois será possível criar sua propria chave.

- A variável BASE_URL, contém a rota principal usada para as requisições da nossa api.

## Bom trabalho!!! :rocket:
