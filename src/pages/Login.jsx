import React from 'react'

const roles = [
    'Central',
    'District',
    'Human',
    'Chief',
    'Legacy',
    'Lead',
    'International',
    'Regional',
    'Principal',
    'Corporate',
    'Dynamic',
    'Investor',
    'Future',
    'Forward',
    'Customer',
    'Senior',
    'Global',
    'Direct',
    'Product',
];

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
    }

    componentDidMount() {
        this.props.logout();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center fill-height">
                    <div className="card p-4 col-lg-6 col-md-6 col-10">
                        <form onSubmit={this.login}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Роль</label>
                                <select className="custom-select" name="role">
                                    {this.getOptions()}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    getOptions() {
        return roles.map(role => 
            <option value={role} key={role}>{role}</option>
        )
    }

    login(e) {
        e.preventDefault();
        const role = new FormData(e.target).get('role');
        this.props.login(role);
        this.props.history.push('/messages')
    }
}