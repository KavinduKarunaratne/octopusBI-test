import { useNavigate } from "react-router-dom"
import { useState } from "react"

function LoginPage () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
      setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
      setPassword(event.target.value)
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        console.log(email)
        console.log(password)
        if (email == 'owner@gmail.com' && password == '123') {
            navigate('/owner')
        }
        if (email == 'customer@gmail.com' && password == '123') {
            navigate('/customer')
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmission}>
                <input onChange={handleChangeEmail} type="text" placeholder="Email" />
                <input onChange={handleChangePassword} type="text" placeholder="Password" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default LoginPage;