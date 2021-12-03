# weather-forecast
 Este projeto é uma API responsável pelo consumo de outra API de previsão do tempo (https://openweathermap.org/forecast5)

## Dependências do projeto
- axios
- cors
- dotenv
- express

## Dependências de desenvolvimento do projeto
- eslint e prettier: responsável pela padronização do código fonte
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

## Bom trabalho!!! :rocket:
