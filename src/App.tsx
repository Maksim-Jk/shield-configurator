import './App.css'
import ShieldConfigurator from "./Pages/ShieldConfigurator/ShieldConfigurator";
import {ConfigProvider} from "antd";


function App() {

    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#f9621d',
                    borderRadius: 10,
                    controlHeight: 36,
                    // Alias Token
                    colorBgContainer: '#fff',
                },
            }}
        >
            <ShieldConfigurator/>
        </ConfigProvider>
    )
}

export default App
