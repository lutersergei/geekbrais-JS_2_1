function CounterField(selector, options) {
    var container = document.querySelector(selector);
    var input = document.createElement('input');
    if (options === undefined) options = {};
    this.incrementStep = options.incrementStep;
    if (this.incrementStep === undefined)
    {
        this.incrementStep = 1;
    }
    this.decrementStep = options.decrementStep;
    if (this.decrementStep === undefined)
    {
        this.decrementStep = 1;
    }
    this.minValue = options.minValue;
    this.maxValue = options.maxValue;
    input.onkeydown = function (event)
    {
        if (((event.keyCode<48)||(event.keyCode>57)) && (event.keyCode !== 8) && ((event.keyCode<96)||(event.keyCode>105)))
        {
            event.preventDefault();
        }
    };
    input.setAttribute('type', 'text');
    var buttonPlus  = document.createElement('button');
    buttonPlus.innerHTML = '+';
    var buttonMinus  = document.createElement('button');
    buttonMinus.innerHTML = '-';
    buttonPlus.onclick = increment;
    buttonMinus.onclick = decrement;
    container.appendChild(input);
    container.appendChild(buttonPlus);
    container.appendChild(buttonMinus);
    var self = this;
    function increment () {
        input.value = +input.value + self.incrementStep;
        input.value = checkValue(input.value);
    }
    function decrement () {
        input.value = +input.value - self.decrementStep;
        input.value = checkValue(input.value);
    }
    function checkValue(value) {
        if ((self.minValue === undefined) && (self.maxValue === undefined))
        {
            return value;
        }
        //Проверка на правильность введеный минимум и максимум значений
        if (self.minValue >= self.maxValue)
        {
            return value;
        }
        if (self.minValue !== undefined)
        {
            if (value < self.minValue) value = self.minValue;
        }
        if (self.maxValue !== undefined)
        {
            if (value > self.maxValue) value = self.maxValue;
        }
        return value;
    }
}

var counterfield_1 = new CounterField('#counterfield_1');

var counterfield_2 = new CounterField('#counterfield_2', {incrementStep: 10, decrementStep: 10, minValue: 0, maxValue: 60});