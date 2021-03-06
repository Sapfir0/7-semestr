import React from "react";
import { useParams } from "react-router-dom";
import {
    Card, Container, Dropdown, Form, Grid, GridColumn, GridRow,
    Header,
    Icon,
    Input,
    Message,
    MessageContent,
    Progress, Radio,
    Table,
    TableCell,
    TableRow
} from "semantic-ui-react";
import {getDataById, groups} from "../../data";
import BaseTableLayout from "../Base/BaseTableLayout";
import {HeadersBaseSettings} from "../../Typings/TableTypes";
import {CompanyDTO, GroupCompanyDTO, PersonalCompanyDetailDTO} from "../../Typings/Common";
import {MainHeader} from "../Header";
import {getOptions} from "../../utils";



export function CompanySettings() {
    const { id } = useParams();
    const data = getDataById(id)!


    return <Container className="upper">

        <Header>{data.location}</Header>

        <Grid columns={2}>
            <GridRow>
                <GridColumn>
                    <Header as={'h4'}>{'group' in data ? data.group : data.user.name} </Header>
                </GridColumn>
                <GridColumn>
                    <Card className="shadowCard" >
                        Дата кампании
                        <Input>{data.date} </Input>
                    </Card>
                </GridColumn>
            </GridRow>

        </Grid>



        Рекомендации:
        <Message positive={true}>
            <MessageContent>
                <Icon name="check circle outline" color="green" />
                Алгоритм работает корректно, настройка не требуется.
            </MessageContent>
        </Message>


        Настройки алгоритма (изменять на свой риск, может повлиять на действия клиента)

        <br />
        <Container  className="checkboxFormFields" />

        <Form className="checkboxFormFields">
            <Form.Field>
                <Radio
                    label='Учитывать историческое посещение этого места'
                    name='radioGroup'
                    checked={data.settings.isHistoricalVisit}
                    value=""
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Не учитывать'
                    name='radioGroup'
                    value=''
                    checked={!data.settings.isHistoricalVisit}
                />
            </Form.Field>
        </Form>

        <Form className="checkboxFormFields">
            <Form.Field>
                <Radio
                    label='Учитывать посещение этого места внутри группы'
                    checked={data.settings.isGroupVisit}
                    name='radioGroup'
                    value=""
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Не учитывать'
                    name='radioGroup'
                    value=''
                    checked={!data.settings.isGroupVisit}

                />
            </Form.Field>
        </Form>

        <Form className="checkboxFormFields">
            <Form.Field>
                <Radio
                    label='Анализировать поиск по агрегаторам'
                    checked={data.settings.isAggregatorUse}
                    name='radioGroup'
                    value=""
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Не учитывать'
                    name='radioGroup'
                    value=''
                    checked={!data.settings.isAggregatorUse}
                />
            </Form.Field>
        </Form>

        <Form className="checkboxFormFields">
            <Form.Field>
                <Radio
                    label='Включить подтверждение'
                    checked={data.settings.isConfirmNeeded}
                    name='radioGroup'
                    value=""
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Выключить, подтверждение не требуется'
                    name='radioGroup'
                    value=''
                    checked={!data.settings.isConfirmNeeded}
                />
            </Form.Field>
        </Form>

    </Container>
}