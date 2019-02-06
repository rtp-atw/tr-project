import React, { Component } from 'react';
import Button from "../../components/button";
import './style.scss';

export default class HomePage extends Component {
    state = {
        onShow: [0,1,2],
        positionItem: []
    }
    componentDidMount() {
        const pos = []
        cars.forEach((_ ,i) => {
            pos.push(i)
        })

        this.setState({
            positionItem: pos
        })
    }
    itemPosition = () => {
        const { positionItem } = this.state
        let lastElement = positionItem.length - 1
        const t = positionItem.shift()
        positionItem.unshift(positionItem.pop())
        positionItem.splice(lastElement, 0, t);
        console.log(positionItem)
        return positionItem
    }
    leftClick = () => {
        const { onShow, postionItem } = this.state
        let lastElement = onShow.length - 1
        let nextShow = onShow[lastElement] + 1
        if (nextShow <= cars.length -1) {
            onShow.shift()
            this.setState({
                onShow: onShow.concat(nextShow),
                postionItem: onShow[lastElement] === 2 ? this.itemPosition() : postionItem
            })
        } else {
            nextShow = 0
            onShow.shift()
            onShow.splice(lastElement, 0, nextShow);
            this.setState({
                onShow: onShow,
                postionItem: this.itemPosition()
            })
        }
    }
    render() {
        const { onShow,positionItem } = this.state
        return (
            <div>
                <div className="container">
                <button onClick={this.leftClick}>left</button>
                    <div className="car-card">
                        {cars.map((item,i) => {
                            let style = {
                                order: positionItem[i]
                            }
                            return (
                                <div className={`${onShow.includes(i) ? 'list-item list-item--active' : 'list-item' }`} style={style}>
                                    <div classNameName="card">
                                        <p>{item}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const cars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
]