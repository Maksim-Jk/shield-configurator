import {useState, FC, useEffect} from 'react';
import {Card, Divider} from 'antd';
import MySelect from "./MySelect";

const SelectBlock: FC = ({blockData, resetCounter}) => {
    const blockInfo = blockData[0];
    const blockParams = blockData[1];
    const additionalData = blockParams.count ? blockParams.count[2] : null;
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)
    }, [resetCounter])


    return (
        <>
            <Divider orientation="center">{blockInfo.title}</Divider>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',


            }}>
                <div style={{
                    width: '100%', maxWidth: '800px',
                    display: 'flex',
                    gap: '30px',
                    justifyContent: 'center',
                }}>
                    {Object.keys(blockParams).map(selectParams => (
                        <MySelect key={selectParams[0]} setCount={setCount} selectParams={blockParams[selectParams]}/>
                    ))}
                </div>
                {additionalData &&
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center',
                    }}>
                        {Array.from({length: count}, (_, i) => (
                            <Card key={i}>
                                {Object.keys(additionalData).map(key => (
                                    <MySelect key={key} number={String(i + 1)} selectParams={additionalData[key]}/>
                                ))}
                            </Card>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}

export default SelectBlock
