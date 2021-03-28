//Будем рассматривать канцелярские приборы: карандаш, ручка, каллиграфическая ручка.
//У каждого прибора разный пищущий механизм и в зависимости от этого механизма будет
// производиться его "замена"


class Context{
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    public makeSmthToWrite():void{
        console.log('We have a problem!');
        this.strategy.doAlgorithm();
        console.log('We dont have a problem anymore!' )
    }
}

interface Strategy{
    doAlgorithm():void;
}

class PencilStrategy implements Strategy{
    public doAlgorithm():void {
        console.log('Заточить карандаш ');
    }
}

class PenStrategy implements Strategy{
    public doAlgorithm(): void{
        console.log('Поменять Стержень ');
    }
}

class CalligraphyPenStrategy implements Strategy{
    public doAlgorithm(): void {
        console.log('Заполнить чернилами ');
    }
}

//Пусть у нас будет ручка
const pen = new Context(new PenStrategy());
pen.makeSmthToWrite();

//теперь возьмем карандаш
const pencil = new Context(new PencilStrategy());
pencil.makeSmthToWrite();

//пусть ручка станет каллиграфической
pen.setStrategy(new CalligraphyPenStrategy());
pen.makeSmthToWrite();
