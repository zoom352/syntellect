import React from 'react'
import { observer } from 'mobx-react'
import './App.css'
import TextControl from './components/TextControl'
import InputForm from './store/inputControls'
import InputViewModel from './viewmodels/InputViewModel'
import Dropdown from "./components/Dropdown";


const viewModel = new InputViewModel(InputForm)

type ButtonItem = {
    text: string;
    callback: () => void;
}

const App = observer(() => {

    const controlTextLeftButtons: ButtonItem[] = [
        { text: 'Clear', callback: () => viewModel.handleClearClick() },
        { text: 'Hello World', callback: () => viewModel.handleHelloWorldClick() },
    ]

    const controlEmptyRightButtons: any = []

    const controlLeftButtons: ButtonItem[] = [
        { text: 'Number', callback: () => viewModel.handleNumberClick() },
    ]

    const controlRightButtons: ButtonItem[] = [
        { text: 'Alert', callback: () => viewModel.handleAlertClick() },
    ]

    return (
        <div className="app">
            <h1>Контрол с кнопками</h1>
            <div className="mainControlText">
                <TextControl
                    leftButtons={controlTextLeftButtons}
                    rightButtons={controlEmptyRightButtons}
                    text={InputForm.inputControlLeft}
                    setText={value => InputForm.setInputControlLeft(value)}
                />
                <TextControl
                    leftButtons={controlLeftButtons}
                    rightButtons={controlRightButtons}
                    text={InputForm.inputControlRight}
                    setText={value => InputForm.setInputControlRight(value)}
                />
            </div>
            <h1>Контрол-автокомплит</h1>
            <div className="mainControlDropDown">
                <Dropdown
                    limitList={3}
                />
                <Dropdown
                    limitList={10}
                />
            </div>
        </div>
    )
})

export default App
