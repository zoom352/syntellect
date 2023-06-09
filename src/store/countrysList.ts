import {makeAutoObservable} from "mobx"
import {getCountryByName} from "../api/apiService"


type ButtonItem = {
    name: string;
    flag: string
    fullName: string
}

class CountrysList {
    countrys: ButtonItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchCountry(inputValue: string) {
        const countryData: ButtonItem[] = await getCountryByName(inputValue)
        this.countrys = countryData.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        )
    }
}

export default new CountrysList()
