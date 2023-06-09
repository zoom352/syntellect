import React from "react";
import Button from "../../UI/button";

type InputChangeHandler = (value: string) => void;

type TextControlProps = {
    text: string
    setText: InputChangeHandler
    leftButtons: Array<any>
    rightButtons: Array<any>
}

const TextControl = (props: TextControlProps) => {
    const {
        text,
        setText,
        leftButtons,
        rightButtons
    } = props

    const handleButtonClick = (callback: () => void) => {
        if (callback && typeof callback === 'function') {
            callback();
        }
    }

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px"
        }}>
            <div style={{display: "flex", gap: "10px"}}>
                {leftButtons.map((button, index) => (
                    <Button
                        title={button.text}
                        key={index}
                        onClick={() => handleButtonClick(button.callback)}
                    />
                ))}
            </div>
            <div>
                <input
                    value={text}
                    onChange={onChangeText}
                />
            </div>
            <div>
                {rightButtons.map((button: any, index: any) => (
                    <Button
                        title={button.text}
                        key={index}
                        onClick={() => handleButtonClick(button.callback)}
                    />
                ))}
            </div>
        </div>
    )
}

export default TextControl
