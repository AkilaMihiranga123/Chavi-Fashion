import React, {Component} from 'react';
import axios from 'axios';
import Header from "../../../components/Header/Header";

export default class AddStoreManager extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_Name: '',
            last_Name: '',
            email: '',
            gender: '',
            contact_Number: '',
            password: ''
        }
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

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const storeManager = {
            first_Name: this.state.first_Name,
            last_Name: this.state.last_Name,
            email: this.state.email,
            gender: this.state.gender,
            contact_Number: this.state.contact_Number,
            password: this.state.password
        }

        axios.post('http://localhost:5000/storeManager/add-store-manager', storeManager)
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
                            <h1 className="text-center mb-3">ADD NEW STORE MANAGER</h1>

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
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        className="form-control"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Add Store Manager</button><br/>
                                <a href="/store-managers-list" className="btn btn-danger btn-block">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}