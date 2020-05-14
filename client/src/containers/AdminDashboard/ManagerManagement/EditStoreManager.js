import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';

export default class EditStoreManager extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_Name: '',
            last_Name: '',
            email: '',
            gender: '',
            contact_Number: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/storeManager/'+this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({
                    first_Name: response.data.data.first_Name,
                    last_Name: response.data.data.last_Name,
                    email: response.data.data.email,
                    gender: response.data.data.gender,
                    contact_Number: response.data.data.contact_Number
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeFirstName(e) {
        this.setState({
            first_Name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_Name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeContactNumber(e) {
        this.setState({
            contact_Number: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const admin = {
            first_Name: this.state.first_Name,
            last_Name: this.state.last_Name,
            email: this.state.email,
            gender: this.state.gender,
            contact_Number: this.state.contact_Number
        }

        axios.post('http://localhost:5000/storeManager/update/'+this.props.match.params.id, admin)
            .then(res => console.log(res.data));

        window.location = '/store-managers-list';
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="row mt-5">
                    <div className="col-md-4 m-auto">
                        <div className="card card-body">
                            <h1 className="text-center mb-3">UPDATE STORE MANAGER</h1>

                            <form onSubmit={this.onSubmit} autoComplete="off">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="first_Name"
                                        value={this.state.first_Name}
                                        onChange={this.onChangeFirstName}
                                        className="form-control"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="last_Name"
                                        value={this.state.last_Name}
                                        onChange={this.onChangeLastName}
                                        className="form-control"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        className="form-control"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="gender"
                                        value={this.state.gender}
                                        onChange={this.onChangeGender}
                                        className="form-control"
                                        placeholder="Enter Gender"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="contact_Number"
                                        value={this.state.contact_Number}
                                        onChange={this.onChangeContactNumber}
                                        className="form-control"
                                        placeholder="Enter Contact Number"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Update Store Manager</button><br/>
                                <a href="/store-managers-list" className="btn btn-danger btn-block">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}