

function SignUpInfo({formData, setFormData}){


    return (<>
            <div className="sign-up-container">
                <input type="email" placeholder="Email.." value={formData.email}
                onChange={(event) => setFormData({...formData, email: event.target.value})} />
                <input type="password" placeholder="Password.." />
                <input type="confirmPassword" placeholder="Confrim Password.." />
            </div>
        </>)
}

export default SignUpInfo