import InputForm from "../store/inputControls";

type InputControl = (value: string) => void;

type InputForm = {
    setInputControlLeft: InputControl
    setInputControlRight: InputControl
    inputControlRight: number
    inputControlLeft: string
}

class InputViewModel {
    InputForm: InputForm

    constructor(InputForm: any) {
        this.InputForm = InputForm
    }

    handleClearClick() {
        this.InputForm.setInputControlLeft("")
    }

    handleHelloWorldClick() {
        this.InputForm.setInputControlLeft("Hello world")
    }

    handleAlertClick() {
        this.InputForm.inputControlRight && window.alert(this.InputForm.inputControlRight)
    }

    handleNumberClick() {
        if (!isNaN(this.InputForm.inputControlRight) && this.InputForm.inputControlRight) {
            window.alert(this.InputForm.inputControlRight)
        }
    }
}

export default InputViewModel
