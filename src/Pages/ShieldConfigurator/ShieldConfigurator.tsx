import {useState} from 'react'
import {Button, Divider, Form, Row, Steps, Input} from 'antd';
import SelectBlock from "../../Components/SelectBlock";
import {parameters} from "./configurationData";

const {TextArea} = Input

const ShieldConfigurator = () => {
    const [form] = Form.useForm();
    const [currentStep, setCurrentStep] = useState(0)
    const [resetCounter, setResetCounter] = useState(0)

    const onFinish = (values: any) => {
        setCurrentStep((step) => step + 1)
        console.log(values)
    };
    const onReset = () => {
        form.resetFields();
        setResetCounter(resetCounter + 1)
    };

    return (
        <>
            <Steps
                current={currentStep}
                onChange={(value) => setCurrentStep(value)}
                style={{marginBottom: '30px'}}
                items={[
                    {
                        title: 'Шаг 1',
                        description: 'Выберите параметры шкафа',
                    },
                    {
                        title: 'Шаг 2',
                        description: 'Укажите дополнительные данные',
                    },
                    {
                        title: 'Шаг 3',
                        description: 'Укажие контактные данные',
                    },
                ]}
            />

            <Row>
                <Form
                    form={form}
                    name="control-hooks"
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        width: '100%',
                    }}
                >
                    {currentStep === 0 &&
                        <>
                            <div style={{marginBottom: '20px'}}>
                                {
                                    Object.keys(parameters).map(params => (
                                        <SelectBlock
                                            key={params}
                                            resetCounter={resetCounter}
                                            blockData={parameters[params]}/>
                                    ))
                                }
                            </div>
                            <Button type="primary" htmlType="submit">
                                Отправить
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Очистить
                            </Button>
                        </>
                    }
                    {currentStep === 1 &&
                        <>
                            <Divider orientation="center">Укажите дополнительную информацию</Divider>
                            <TextArea style={{marginBottom: '30px'}} rows={4}
                                      placeholder="максимальная длина 250 символов" maxLength={250}/>
                            <Button type="primary" htmlType="submit">
                                Отправить
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Очистить
                            </Button>
                        </>
                    }
                    {currentStep === 2 &&
                        <img style={{width: '100%'}}
                             src="https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg" alt=""/>
                    }
                </Form>
            </Row>
        </>
    )
}

export default ShieldConfigurator
