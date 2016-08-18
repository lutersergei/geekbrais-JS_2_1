function CounterField(selector) {
    var container = document.querySelector(selector);
    var input = document.createElement('input');
    this.incrementStep = 1;
    this.decrementStep = 1;
    this.minValue = undefined;
    this.maxValue = undefined;
    input.onkeydown = function (event)
    {
        if (((event.keyCode<48)||(event.keyCode>57)) && (event.keyCode !== 8) && ((event.keyCode<96)||(event.keyCode>105)))
        {
            // console.log(event.keyCode);
            event.preventDefault();
        }
        // console.log(this.value);
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
        // console.log(self.minValue , self.maxValue);
        if ((self.minValue === undefined) && (self.maxValue === undefined))
        {
            // console.log('undefined');
            return value;
        }
        //Проверка на правильность введеный минимум и максимум значений
        if (self.minValue >= self.maxValue)
        {
            return value;
        }
        if (self.minValue !== undefined)
        {
            // console.log('min');
            if (value < self.minValue) value = self.minValue;
        }
        if (self.maxValue !== undefined)
        {
            // console.log('max');
            if (value > self.maxValue) value = self.maxValue;
        }
        return value;
    }
}

var counterfield_1 = new CounterField('#counterfield_1');

var counterfield_2 = new CounterField('#counterfield_2');
counterfield_2.incrementStep = 10;
counterfield_2.decrementStep = 10;
counterfield_2.minValue = 0;
counterfield_2.maxValue = 60;