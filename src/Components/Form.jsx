
//************comp focntionnele
import { useState } from 'react';


function Form(props) {

    return (
        <div>
           
            <form >
                <div>
                    <label htmlFor="firstname" style={{ color: 'black' }} >{props.labelle}</label>
                    <input 
                        type="text" 
                        name={props.namee} 
                        placeholder="Enter your first name" style={{ backgroundColor: 'white' }}
                    />
                    
                </div>
     
            </form>
        </div>
    );
}
 export default Form;

