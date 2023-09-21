import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate();
    const handleSaveData = (e) => {
      e.preventDefault();
      const form = e.target;
      const businessDescription = form.description.value;
      const philosophy = form.philosophy.value;
      const companyName = form.companyName.value;
      const industry = form.industry.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const location = form.location.value;
      const website = form.website.value;
      const workingHour = form.hour.value;
      const date = form.date.value;
      const capital = form.capital.value;
      const representative = form.represent.value;
      const branch = form.branch.value;
      const employees = form.employees.value;
      const sales = form.sales.value;
      const profit = form.profit.value;
      const averageAge = form.age.value;
      const stock = form.stock.value;
      const linkedin = form.linkedin.value;
      const twitter = form.twitter.value;
      const facebook = form.facebook.value;
      const instagram = form.instagram.value;
      const youtube = form.youtube.value;
      const foreignOwned = form.foreign.value;
      const data = {
        businessDescription,
        philosophy,
        companyName,
        industry,
        email,
        phone,
        location,
        website,
        workingHour,
        date,
        capital,
        representative,
        branch,
        employees,
        sales,
        profit,
        averageAge,
        stock,
        linkedin,
        twitter,
        facebook,
        instagram,
        youtube,
        foreignOwned
      };
      console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      navigate('/')
    };
  return (
    <form className="w-[95%] mx-auto" onSubmit={handleSaveData}>
      <div className="mt-8 flex gap-6">
        <TextField
          className="w-1/2"
          required
          id="outlined-multiline-static"
          label="Business Description"
          name="description"
          multiline
          rows={4}
        />
        <TextField
          className="w-1/2"
          id="outlined-multiline-static"
          label="Corporate Philosophy"
          name="philosophy"
          multiline
          rows={4}
        />
      </div>
      <div className="grid grid-cols-3 gap-8 w-full mt-8">
        <TextField
          id="outlined-basic"
          label="Company Name"
          name="companyName"
          required
        />
        <TextField id="outlined-basic" label="Industry" name="industry" />
        <TextField
          id="outlined-basic"
          type="email"
          label="Mail ID"
          name="email"
          required
        />
        <TextField id="outlined-basic" label="Phone No" name="phone" required />
        <TextField
          id="outlined-basic"
          label="Location"
          name="location"
          required
        />
        <TextField id="outlined-basic" label="Website" name="website" />
        <TextField
          id="outlined-basic"
          label="Working Hour"
          name="hour"
          required
        />
        <TextField type="date" id="outlined-basic" name="date" required />
        <TextField
          id="outlined-basic"
          label="Initial Capital"
          name="capital"
          required
        />
        <TextField
          id="outlined-basic"
          label="Representative"
          name="represent"
          required
        />
        <TextField id="outlined-basic" label="Branch" name="branch" required />
        <TextField
          id="outlined-basic"
          label="Number of Employees"
          type="number"
          name="employees"
          required
        />
        <TextField
          id="outlined-basic"
          label="Sales Revenue"
          type="number"
          name="sales"
          required
        />
        <TextField
          id="outlined-basic"
          label="Operation Profit"
          type="number"
          name="profit"
          required
        />
        <TextField
          id="outlined-basic"
          label="Average Age of Employees"
          type="number"
          name="age"
        />
        <TextField
          id="outlined-basic"
          label="Stock"
          type="number"
          name="stock"
        />
        <TextField id="outlined-basic" label="LinkedIn Link" name="linkedin" />
        <TextField id="outlined-basic" label="Twitter Link" name="twitter" />
        <TextField id="outlined-basic" label="Facebook Link" name="facebook" />
        <TextField
          id="outlined-basic"
          label="Instagram Link"
          name="instagram"
        />
        <TextField id="outlined-basic" label="Youtube Link" name="youtube" />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Foreign Owned
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="foreign"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="text-center m-6">
        <Button type="submit" className="w-[25%]" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
};

export default Register;
