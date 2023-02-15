# Symbols & Iterator

_Легенда_

Для поддержки логики необходимо сделать объекты класса Team(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```
Реализуйте итератор в классе Team, который по одному выдаёт персонажей (объекты типа Character).

[![Build status](https://ci.appveyor.com/api/projects/status/lj4b3y7u9at1fkvs/branch/main?svg=true)](https://ci.appveyor.com/project/IPL1987/ajs-symbols-iterator/branch/main)
