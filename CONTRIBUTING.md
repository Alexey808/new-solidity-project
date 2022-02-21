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
`$ truffle create contract ExampleContract` - создать контракт  
`$ truffle create migration ExampleMigration` - создать миграцию  
`$ truffle create test ExampleContract` - создать тест  
`truffle develop` - поднять тестовое окружение  
`truffle(develop)> compile` - компиляция  
`truffle(develop)> migrate` - миграция  
`truffle(develop)> test` - тест  
`truffle(develop)> .exit` - выход  
`truffle(development)> migrate --reset ` - 
`$ truffle console` - вывод в консоль если используем GUI 



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

**Проверка установленного пакета truffle**  
`truffle`  

**Команды**    
`truffle compile`  
`truffle migrate`  
`truffle test`  

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