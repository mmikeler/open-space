document.addEventListener('DOMContentLoaded', function(){
    let [
        time,
        power,
        money,
        end,
        addMoneyCount,
        usePowerCount
    ] = [
        document.getElementById('timer'),
        document.getElementById('power'),
        document.getElementById('money'),
        1, // Кол-во минут на таймере
        10, // Добавляется валюты
        10, // Тратиться силы
    ]

    document.addEventListener('click', function(e){
        const target = e.target;
        if(target.id === 'start'){
            timer();
        }
    })
    
    function timer(){
        let length = end*60-1;
        usePower();
        const count = setInterval(() => {
            let seconds = length%60 // Получаем секунды
            let minutes = length/60%60 // Получаем минуты

            if(seconds < 10)
                seconds = '0' + seconds

            // Условие если время закончилось то...
            if (length <= 0) {
                // Таймер удаляется
                clearInterval(count);
                addMoney();
            } else { // Иначе
                // Создаём строку с выводом времени
                let strTimer = `${Math.trunc(minutes)}:${seconds}`;
                // Выводим строку в блок для показа таймера
                time.innerHTML = strTimer;
            }
            --length; // Уменьшаем таймер
        }, 1000)
    }

    function addMoney(){
        let prevMoney = money.innerText;
        let nextMoney = +prevMoney + addMoneyCount;

        if(nextMoney < 100 && nextMoney >= 10)
            nextMoney = '0' + nextMoney

        money.innerText = nextMoney;
        time.innerText = '0:00'
    }

    function usePower(){
        let prevPower = power.innerText;
        power.innerText = +prevPower - usePowerCount; 
    }
})

