import React, {Component} from 'react'

export default class Message extends Component {

    state = {
        messages:[
            // {id:1, title:'message001'},
            // {id:3, title:'message003'},
            // {id:5, title:'message005'}
        ]
    }

    //发送ajax请求
    componentDidMount() {
        // 模拟发送ajax请求，异步获取数据
        setTimeout(() =>{
            const messages = [
                {id:1, title:'message001'},
                {id:3, title:'message003'},
                {id:5, title:'message005'}
            ]

            // 更新状态
            this.setState({messages})

        }, 1000)

    }

    render(){

        return(
            <ul>
                {
                    this.state.messages.map((m, index) => (
                        <li>
                            <a href='???'>{m.title}</a>
                        </li>
                    ))
                }
            </ul>

        )
    }
}