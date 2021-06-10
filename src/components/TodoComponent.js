import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTodo } from '../redux/todo/todoActions';
import Loading from './spinners/loading';


class TodoComponent extends Component {
    render() {
        return (
            <div className="Todo">
                {/* {this.props.todo.length === 0 ? <button onClick={this.props.fetchTodo}>Get todos</button> : null} */}
                {this.props.loading ? <Loading /> : null}
                <ul>
                    {this.props.todo.map(item => {
                        return (
                            <li key={item.id}>{item.title}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchTodo();
    }
    
}

const mapStateToProps = state => {
    return {
        todo: state.todo,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodo: () => dispatch(fetchTodo())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(TodoComponent);
