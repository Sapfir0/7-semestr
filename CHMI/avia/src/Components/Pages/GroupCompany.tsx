import React from "react";
import {getDataById} from "../../data";
import {Link, useParams} from "react-router-dom";
import {Card, Container, Grid, GridColumn, GridRow, Header, Image, Input} from "semantic-ui-react";
import {ClientRoutes} from "../../Config/Config";
import {GroupCompanyDTO} from "../../Typings/Common";

export function GroupCompany() {
    const { id } = useParams();
    const data = getDataById(id) as GroupCompanyDTO
    console.log(data)

    return <Container className="upper">
        {/*Статистика кампании*/}
        <Grid columns={2}>
           <GridRow>
               <GridColumn>
                   <Header>{data.location} </Header>
               </GridColumn>
               <GridColumn>
                   <Link to={ClientRoutes.companyParticipants.get(id)} >Посмотреть участников кампании</Link>
               </GridColumn>
           </GridRow>
            <GridRow>
                <GridColumn>
                    {data.group}
                </GridColumn>
                <GridColumn>
                    <Card>
                        Дата кампании
                        <Input>{data.date} </Input>
                    </Card>
                </GridColumn>
            </GridRow>

            <GridRow>
                <GridColumn>
                    <Image src="https://sun9-75.userapi.com/impg/wKVCGuHI6qhso8znxNfkF_0nY0EigisSC_drcw/O-28uiXH-JE.jpg?size=482x313&quality=96&proxy=1&sign=7f2bcf4283acc0c4c2b94600786d9366&type=album" />

                    <Image src="https://sun7-9.userapi.com/impg/f07vxn__Cl9OPQ03v-HNozB0724U3sqzWkZELg/ItF78iHCm-E.jpg?size=393x290&quality=96&proxy=1&sign=9c2874e76ed4b02e900ac8f436b7404c&type=album" />
                </GridColumn>
                <GridColumn>
                    Рекомендации:
                    <br />
                    Разработчики оформили мало покупок, нужно что-то изменить.

                </GridColumn>
            </GridRow>


        </Grid>


    </Container>
}