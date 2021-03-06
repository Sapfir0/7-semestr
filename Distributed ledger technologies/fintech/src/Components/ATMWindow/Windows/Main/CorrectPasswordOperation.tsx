import { ATMStore } from 'Components/ATM/ATMStore';
import { observer } from 'mobx-react';
import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { openWithdrawMoneyWindowOperation } from '../../../../typings/Operations';

export interface ICorrectPasswordOperation {
    domainStore: ATMStore
}

@observer
export class CorrectPasswordOperation extends React.Component<ICorrectPasswordOperation> {
    render() {
        return (
            <Container textAlign={"left"}>
                
                <Button content={1} onClick={() => this.props.domainStore.openWithdrawWindow()} /> Снять деньги 
                <br />
                <Button content={2} disabled={true} /> Внести деньги
                <br />
                <Button content={3} onClick={() => this.props.domainStore.openBalanceOperation()} /> Посмотреть остаток
                <br />
                <Button content={4} onClick={() => this.props.domainStore.openSendMoneyOperation()} /> Перевести на счет
                <br />

            </Container>
        );
    }
}

