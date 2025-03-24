import { useState } from "react"
import SignUpInfo from "./SignUpInfo.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import OtherInfo from "./OtherInfo.jsx";
import { m } from "framer-motion";


function Form(){

    const [page, setPage] = useState(1);

    const FormTitles = ['Sign up', 'Personal Info', 'Other']

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        userName: '',
        nationality: '',
        other: '',
    })

    function PageDisplay() {

        if(page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        }else if(page === 1){
            return <PersonalInfo />
        }
        else{
            return <OtherInfo />
        }
    }

    return (
        <>
        <div className="form">
            <div className="progressbar">
                <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%"
                    : "100%"
                }}></div>
                <div className="Formcontinue">
                    <div className="header">
                        <h1>{FormTitles[page]}</h1>
                    </div>
                    <div className="body"> 
                        {PageDisplay()}
                    </div>
                    <div className="footer ">
                        <button disabled={page == 0}
                        onClick={()=> 
                            {setPage((currPage) => currPage - 1);}
                            }
                        >Prev</button>
                        {/* <input type="button" name="Preve" /> */}
                        <button disabled={page == FormTitles.length -1}
                         onClick={()=> 
                            {setPage((currPage) => currPage + 1);}
                            }>
        {page === FormTitles.length - 1 ? "Submit" : "Next"}    
                            </button>
                    </div>
                </div>
            </div>
            
         </div>
        </>
    )
}

export default Form