import {useState, FC, useEffect} from 'react';
import {Form, Input, Select} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';


const MySelect: FC = ({selectParams, number, setCount}) => {
    const [param, setParam] = useState('Не указано')
    const selectTitle = selectParams[0].title
    const selectDescription = selectParams[0].description || ''
    const selectData = selectParams[1]
    const numberList = number ? String(number) : '';

    useEffect(() => {
        console.log(param)
        if (!isNaN(+param)) {
            setCount(+param);
        }
    }, [param])


    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            gap: '10px',
            justifyContent: 'end',
        }}>
            <Form.Item
                label={`${selectTitle} ${numberList}`}
                name={`${selectTitle}${numberList}`}
                tooltip={selectDescription.length > 0 ? {title: selectDescription, icon: <InfoCircleOutlined/>} : null}
                rules={[{required: true, message: 'Необходимо указать'}]}
                style={{width: '100%'}}
            >
                <Select
                    placeholder="Выберите"
                    optionFilterProp="children"
                    options={selectData}
                    value={param}
                    onChange={(value) => setParam(value)}
                />
            </Form.Item>
            {param === "Другое" &&
                <Form.Item name={`${selectTitle}-другое`} rules={[{required: true, message: 'Необходимо указать'}]}
                           style={{
                               width: '100%',
                           }}>
                    <Input placeholder="Другое"/>
                </Form.Item>
            }
        </div>
    )
}

export default MySelect
