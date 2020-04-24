import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("This is awkward... Names are required"),
    size: yup
        .string(),
    Caviar: yup.boolean(true || false),
    GoldFlakes: yup.boolean(true || false),
    Escargots: yup.boolean(true || false),
    Cheese: yup.boolean(true || false),
    SpecialInstruction: yup.string("")
})


const Form = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [formState, setFormState] =useState({
        name: "",
        size: "Small",
        SpecialInstruction:"",


    });

    const [errors, setErrors] =useState({
        name: "",
        size: "",
        SpecialInstruction:""

    });

    const [post, setPost] = useState([]);

    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => {
            setButtonDisabled(!valid);
        });

    },[formState])

    const formSubmit = event => {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                console.log(res)
                setPost([post, res.data]);

            setFormState({
                name: "",
                size: "",
                SpecialInstruction:""

            });
        })
        .catch(err => console.log(err.response))
    }

    const validateChange = event => {
        yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [event.target.name]: ""
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [event.target.name]:err.errors[0]
            });
        });
    }
    const inputChange = event => {
        event.persist();
        const newFormData ={
            ...formState,
            [event.target.name]:
                event.target.type ==="checkbox"? event.target.checked : event.target.value
        };

        validateChange(event);
        setFormState(newFormData);
    }

    return (
        <div className="form">
            <form onSubmit={formSubmit}>
            <label htmlFor="name">
            <h3>Your Name:</h3>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={inputChange}
            />
            </label>
            <div className='errors' id="errors">
                {errors.name}
            </div>
            <label htmlFor="size">
            <h3>Size:</h3>
            <select 
                id="size" 
                name="size" 
                onChange={inputChange}
            >
                <option value="Small">Select Size:</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
            </select>
            </label>
            <h3>Toppings:</h3>
            <label htmlFor="Caviar">Caviar
                <input 
                    type="checkbox"
                    name="Caviar"
                    checked={formState.Caviar}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="GoldFlakes">Gold Flakes
                <input 
                    type="checkbox"
                    name="GoldFlakes"
                    checked={formState.GoldFlakes}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="Escargots">Escargots
                <input 
                    type="checkbox"
                    name="Escargots"
                    checked={formState.Escargots}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="Cheese">Cheese
                <input 
                    type="checkbox"
                    name="Cheese"
                    checked={formState.Cheese}
                    onChange={inputChange}
                />
            </label>
            <br />
            <label htmlFor="SpecialInstruction">
                <h4>Comment (optional)</h4>
                <textarea 
                    name="SpecialInstruction"
                    value={formState.address}
                    onChange={inputChange}
                />
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button className="submit" data-cy="submit" disabled={buttonDisabled}>Send Order</button>
        </form>
        </div>
    )
}

export default Form