# Инструменты   
[VS extensions](https://marketplace.visualstudio.com/items?itemName=AzBlockchain.azure-blockchain)



# Создание проекта   

**Создание базового проекта**  
`Ctrl+Shift+P` -> `>new solidity project` и выбираем дирректорию где бдует находиться проект.



# Исправление возможных проблем  

**Изменение версии компилятора**  
`Ctrl+Shift+P` -> `>change workspace compiler version` и выбираем ту которая указана в `truffle-config.js`.


# Разработка и дебаг

## Truffle

**truffle** - это среда разработки, основанная на языке Solidity, которая упрощает процесс создания и управления децентрализованными приложениями (Dapp). Он написан на Javascript и поддерживает компиляцию, развертывание и тестирование смарт-контрактов.  

**Установка пакета**
`npm install -g truffle`  

**Команды:**
`truffle` - Проверка установленного пакета truffle  
`truffle create contract ExampleContract` - создать контракт  
`truffle create migration ExampleMigration` - создать миграцию  
`truffle create test ExampleContract` - создать тест  

`truffle migrate --network MY_NETWORK_NAME` - миграция контрактов выбранной сети  
`truffle develop` - поднять тестовое окружение (лучше использовать console с выбранной сетью)   
`truffle networks` - показывает развернутые контракты сети
`truffle networks --clean` - очищает развернутые контракты не именованной сети (в других случаях нужно удалить контракты в кроне проекта в папке build).  
`truffle console` - вывод в консоль если используем GUI (перед этим запустить ganache-cli --networkId 1337, где networkId это id сети)  

`truffle(development)> compile` - компиляция  
`truffle(development)> migrate` - миграция  
`truffle(development)> migrate --reset ` - запустить пере-миграцию всех контрактов
`truffle(development)> test` - тест  
`truffle(development)> .exit` - выход  
`truffle(development)> await web3.eth.getBlock("latest")` - просмотреть данные по последнему блоку  


**Ссылки**
(Кодовая база(boilerplate) для разных стеков технологий)[https://trufflesuite.com/boxes/]  
(Truffle Box for Angular)[https://trufflesuite.com/boxes/angular-truffle-box/]  
(Написание тестов)[https://habr.com/ru/post/321362/]  
(Вкратце про truffle)[https://habr.com/ru/post/348656/]  
(Список команд)[https://trufflesuite.com/docs/truffle/reference/truffle-commands.html]  
(Сжатый курс по блокчейну от microsoft)[https://docs.microsoft.com/ru-ru/learn/paths/ethereum-blockchain-development/]  

## Ganache  

**Ganache** - это  клиент блокчена Ethereum. Есть версия с интерфесом [Ganache GUI](https://trufflesuite.com/ganache/). Является частью набора инструментов разработки Ethereum от Truffle, представляет собой версию Ganache для командной строки. 

**Установка пакета**  
`npm install -g ganache-cli`

**Команды**    
`ganache-cli` - запуск сети с параметрами по умолчанию   
`ganache-cli --networkId 1337` - запуск сети по id  
`ganache -p 8545` - изменение порта для ganache  

**Ссылки**  
(Ganache git)[https://github.com/trufflesuite/ganache]


## OpenZeppelin  

**OpenZeppelin** - набор библиотек для часто используемых паттернов в смарт контрактах.  

**Установка пакетов через npm** (этот содержал более новые версии пакетов)  
```
$ npm init -y
$ npm install -E zeppelin-solidity
```
```
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
```
**Установка пакетов через EthPM**  
```
$ truffle install zeppelin
```
```
import ‘zeppelin/contracts/ownership/Ownable.sol’;
```