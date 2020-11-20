import { observer } from "mobx-react";
import React from "react";
import { Button, Grid, GridColumn, GridRow } from "semantic-ui-react";
import { ATMKeyboardStore } from "./ATMKeyboardStore";
import {ATMStore} from "../ATM/ATMStore";

export interface IATMKeyboard {
    domainStore: ATMStore
}

@observer
export class ATMKeyboard extends React.Component<IATMKeyboard> {
    
    
    onSubmit = () => {

    }


    onClear = () => {
        this.props.domainStore.keyboardStore.clearPinCode()
    }

    onPressNumberButton = (buttonId: number) => () => {
        this.props.domainStore.addNumberToPinCode(buttonId)
    }

    onPressCancel = () => {
        this.props.domainStore.onCancelPressed()
    }

    render() {

        return <Grid className='ATMKeyboard'>

            <GridRow>
                {[1, 2, 3].map((num) => (
                    <Button key={num} onClick={this.onPressNumberButton(num)}>{num}</Button>
                ))}

                <Button content="Отмена" onClick={this.onPressCancel} negative={true} />
            </GridRow>
            <GridRow>
                {[4, 5, 6].map((num) => (
                    <Button key={num} onClick={this.onPressNumberButton(num)}>{num}</Button>
                ))}
                <Button content="Сброс" onClick={this.onClear} color={'yellow'} />

            </GridRow>
            <GridRow>
                {[7, 8, 9].map((num) => (
                    <Button key={num} onClick={this.onPressNumberButton(num)}>{num}</Button>
                ))}
                <Button />

            </GridRow>
            <GridRow>
                {['*', 0, '00'].map(num => (
                    <Button key={num}>{num}</Button>
                )) } 
                <Button content="Ввод" positive={true} onClick={this.onSubmit} />
            </GridRow>

        </Grid>;
    }
}