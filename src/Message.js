import React from "react"
import{
Radio,
RadioGroup,
FormControlLabel ,
FormControl ,
FormLabel,
Box
} from "@material-ui/core";

const Message = () => {
    const [value, setValue] = React.useState('String');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
return(
    <>
    <Box>   
    <textarea style={{border:`${2}px solid #0C75FF`,borderRadius:`${0.5}em`,height:`${20}vh`,width:`${70}%`}}></textarea>
    </Box>
<Box>
<FormControl component="fieldset">
      <FormLabel component="legend">How Did You Hear About us</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange}>
        <FormControlLabel
          value="Facebook"
          control={<Radio color="primary" />}
          label="Facebook"
        />
        <FormControlLabel
          value="Twitter"
          control={<Radio color="primary" />}
          label="Twitter"
        />
        <FormControlLabel value="Google" control={<Radio color="primary" />} label="Google" />
        <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Box>
    
  
   
    </>
)
}

export default Message;