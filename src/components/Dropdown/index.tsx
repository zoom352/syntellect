import React, {useEffect, useState} from 'react';
import './index.css'
import { observer } from 'mobx-react'
import CountrysList from "../../store/countrysList";

type DropdownProps = {
    limitList: number
}

const Dropdown = observer((props: DropdownProps) => {
    const {limitList} = props
    const [inputValue, setInputValue] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        if (inputValue){
          CountrysList.fetchCountry(inputValue)
        }
    }, [inputValue])

    const handleInputChange = (event: any) => {
        const value = event.target.value
        setInputValue(value)
        setIsDropdownOpen(true)
    }

    const handleOptionSelect = (option: any) => {
        setInputValue(option);
        setIsDropdownOpen(false);
    }

    const handleDropdownToggle = () => {
        setTimeout(() => {
            setIsDropdownOpen(!isDropdownOpen);
        }, 200);
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleDropdownToggle}
                onBlur={handleDropdownToggle}
            />
            {isDropdownOpen && inputValue && (
                <div className="dropdown-list">
                    {CountrysList.countrys.slice(0, limitList).map((item) => {
                        return (
                            <div style={{display: "flex"}} onClick={() => handleOptionSelect(item.name)}>
                                <img style={{marginTop: "10px"}} width="40px" height="50px" src={item.flag}/>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <p key={item.name}>
                                        {item.name}
                                    </p>
                                    <p className="subTitle">{item.fullName}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
})


export default Dropdown
