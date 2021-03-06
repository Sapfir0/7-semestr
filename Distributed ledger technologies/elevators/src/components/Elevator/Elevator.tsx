import React from "react";
import {Button, Header} from "semantic-ui-react";
import {elevatorSpeed, floorsCount} from "../../config/config";
import {ElevatorAction} from "./ElevatorAction";
import {ElevatorManager} from "../../services/ElevatorManager";
import {myContainer} from "../../config/inversify.config";
import {TYPES} from "../../typings/types";
import LightBulb from "../LightBulb/LightBulb";
import {Property} from "csstype";
import {ElevatorDispatcher} from "../../services/ElevatorDispatcher";
import "./elevator.css"
import {CSSTransition} from 'react-transition-group';


export interface IElevator {
    actions: ElevatorAction,
    elevators: ElevatorDispatcher
    elevatorId: number
}

export default class Elevator extends React.Component<IElevator> {

    render() {
        const buttons = []
        for (let i = 0; i < floorsCount; i++) {
            const isActiveButton = this.props.elevators.floorsQueue[this.props.elevatorId].data.find((floor) =>
                floor.toFloor === i + 1)?.calledFromElevator

            buttons.push(<Button
                size="mini"
                key={i + 1}
                content={i + 1}
                negative={isActiveButton}
                onClick={() => this.props.actions.changeElevatorFloor(this.props.elevatorId, i + 1)}
            />)
        }
        // const speedByFloor = `ease-in ${elevatorSpeed/1000}s`
        // console.log(speedByFloor)
        const className = this.props.elevators.elevators[this.props.elevatorId].isArrived ? 'elevatorAnimated' : 'elevator'
        return <div
                className={className}
                style={{
                    width: 150,
                    transition: "ease-in 0.3s",
                    marginTop: (floorsCount - this.props.elevators.getCurrentFloor(this.props.elevatorId)) * 120
                }}
            >

                <LightBulb currentFloor={this.props.elevators.getCurrentFloor(this.props.elevatorId)}/>
                <br/>
                {buttons}
            </div>

    }
}