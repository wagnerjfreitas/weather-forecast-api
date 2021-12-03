# weather-forecast
 Este projeto é uma API responsável pelo consumo de outra API de previsão do tempo (https://openweathermap.org/forecast5)

## Dependências do projeto
- axios
- cors
- dotenv
- express

## Dependências de desenvolvimento do projeto
- eslint e prettier
- ts-node-dev: 
- typescript

## Estrutura do projeto
```bash
root
|--src
|  |--routes
|  |--services
|--server.ts
|--.env
```

##### Linguagens e frameworks:
- NodeJS;
- TypeScript;

##### Rotas disponíveis
- previsão do tempo dos ultimos 5 dias: http://localhost:3333/api/weather-forecast/5-days/:city
- API de terceiros: https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid={APIkey}

#### Execute o seguinte comando para executar o servidor:
```bash
yarn ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts
```


## Bom trabalho!!! :rocket:
