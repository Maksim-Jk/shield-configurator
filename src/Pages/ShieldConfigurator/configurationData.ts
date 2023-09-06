export const parameters = {
    ventilators: [{
        title: 'Вентиляторы',
        description: ''
    },
        {
            count: [{
                title: 'Количество вентиляторов',
                description: 'Выберите количество вентиляторов подключаемых к шкафу'
            }, [{title: '1', value: '1'}, {title: '2', value: '2'}], {
                power: [{title: 'Мощность вентилятора', description: 'Выберите мощность вентилятора'}, [
                    {title: 'до 4 кВт', value: 'до 4 кВт'},
                    {title: 'до 15 кВт', value: 'до 15 кВт'},
                    {title: 'до 30 кВт', value: 'до 30 кВт'},
                    {title: 'до 50 кВт', value: 'до 50 кВт'},
                ]],
                voltage: [{title: 'Напряжение вентилятора', description: 'В зависимости от напряжения'}, [
                    {title: '230В', value: '230В'},
                    {title: '380В', value: '380В'},
                ]],
                smoothStart: [{title: 'Плавный старт вентилятора', description: 'Необходимость плавного старта'}, [
                    {title: 'Нет', value: 'Нет'},
                    {title: 'Частотный преобразователь', value: 'Частотный преобразователь'},
                    {title: 'Устройство плавного пуска', value: 'Устройство плавного пуска'},
                ]],
            }],
            electricHeater: [{
                title: 'Электрический отопитель',
                description: 'Применяется для подпора в зону безопасности'
            }, [
                {title: 'Нет', value: 'Нет'},
                {title: 'Да', value: 'Да'},
            ]]
        }],
    valves: [{title: 'Клапаны', description: ''}, {
        count: [{title: 'Количество', description: 'Количество клапанов подключаемых к шкафу'}, [
            {title: '0', value: '0'},
            {title: '1', value: '1'},
            {title: '2', value: '2'},
            {title: '3', value: '3'},
            {title: 'Другое', value: 'Другое'},
        ]],
        voltage: [{title: 'Напряжение клапанов', description: 'В зависимости от напряжения'}, [
            {title: '230В', value: '230В'},
            {title: '24В', value: '24В'},
        ]],
        electricHeater: [{
            title: 'Подогрев клапанов',
            description: 'Применяется для подпора в зону безопасности'
        }, [
            {title: 'Нет', value: 'Нет'},
            {title: 'Да', value: 'Да'},
        ]]
    }],
    cabinetParams: [{title: 'Параметры шкафа', description: 'Дополнительные параметры'}, {
        reserveInput: [{title: 'Резервный ввод', description: 'Выберите мощность вентилятора'}, [
            {title: 'Нет', value: 'Нет'},
            {title: 'Да', value: 'Да'},
        ]],
        IP: [{title: 'Степень защиты', description: 'IP31 - лалала, IP54 - для улицы'}, [
            {title: 'IP31', value: 'IP31'},
            {title: 'IP54', value: 'IP54'},
            {title: 'Другое', value: 'Другое'},]],
        integration: [{
            title: 'Интеграция',
            description: 'Интеграция путем установки в шкаф оборудования соответствующего производителя'
        }, [
            {title: 'Rubetek, ПЛС', value: 'Rubetek, ПЛС'},
            {title: 'Bolid, ДПЛС', value: 'Bolid, ДПЛС'},
            {title: 'Rubezh, АЛС', value: 'Rubezh, АЛС'},
            {title: 'Другое', value: 'Другое'},
        ]]
    }
    ]
}