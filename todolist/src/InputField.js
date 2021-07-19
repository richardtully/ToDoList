// import HandleSubmit from "./handleSubmit";

import HandleSubmit from "./handleSubmit";



function InputField() {
    // const handleSubmit = new HandleSubmit()

    // const onSubmit = data => {
    //     console.log(data)
    // }
    // console.log(value)
    return (
        // <form onSubmit = {handleSubmit.onSubmit(value)}>
        <form onSubmit = {console.log('')}>
            <label>
                <input type="text" name="name" />
            </label>
            <input type="submit" value={HandleSubmit.submitted}/>
        </form>
    )

}



export default InputField;