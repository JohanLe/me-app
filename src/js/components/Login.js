import React from 'react';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        if(localStorage.getItem('user')){
            localStorage.setItem('user', "");
            window.location.replace("/");
        }
    }

    handleOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8333/auth/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then((res) => {
            return res.json();
        }).then((res)=>{
            console.log(res);
            console.log("Save token");
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('user', this.state.email);
            console.log(localStorage.getItem('jwt'));
           
            window.location.replace("/");
        })


    };

    render() {
        return (
            <div className="login_container">
                <form className="form_login" onSubmit={this.handleSubmit}>
                    <label className="input_label">
                        Email
                        <input
                            required
                            name="email"
                            type="email"
                            onChange={this.handleOnChange}
                        />
                    </label>

                    <label className="input_label">
                        Password
                        <input
                            required
                            name="password"
                            type="password"
                            onChange={this.handleOnChange}
                        />
                    </label>


                    <input name="register" type="Submit" defaultValue="Login" className="button_submit"/>

                </form>
            </div>
        )
    }
}


export default Login;