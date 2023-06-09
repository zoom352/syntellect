import {action, makeAutoObservable, observable} from "mobx"
import { observer } from "mobx-react"
import {getCountryByName} from "../api/apiService";

class InputForm {
    inputControlLeft = ""
    inputControlRight = ""

    constructor() {
        makeAutoObservable(this)
    }

    setInputControlLeft(value: string) {
        this.inputControlLeft = value
    }

    setInputControlRight(value: string) {
        this.inputControlRight = value
    }
}

export default new InputForm()
