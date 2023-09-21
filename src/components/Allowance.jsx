/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
  } from "@mui/material";

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

const Allowance = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const handleAllowances = (e) => {
        e.preventDefault();
        const form = e.target;
        const salary = form.salary.value;
        const holidays = form.holidays.value;
        const welfare = form.welfare.value;
        const training = form.training.value;
        const qualification = form.qualification.value;
        const workingHour = form.hour.value;
        const maternity = form.maternity.value;
        const housing = form.housing.value;
        const allowance = form.allowance.value;
        const stock = form.stock.value;
        const job = form.job.value;
        const mentor = form.mentor.value;
        const career = form.career.value;
        const data = {
          salary,
          holidays,
          welfare,
          training,
          qualification,
          workingHour,
          maternity,
          housing,
          allowance,
          stock,
          job,
          mentor,
          career
        };
        console.log(data);
        localStorage.setItem("allowance", JSON.stringify(data));
        handleClose()
      };
    return (
        <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
            
              <Box
                sx={style}
                className="outline-none border rounded overflow-scroll h-[90%]"
              >
                
                <h1 className="font-semibold mb-6 text-2xl">Allowances</h1>
                <form className="space-y-3" onSubmit={handleAllowances}>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      Salary System Based On Meritocracy
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="salary"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      120 Or More Annual Holidays
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="holidays"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      Generous Welfare Benefits
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="welfare"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      Enhanced Education And Training
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="training"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      Support System For Acquiring Qualification
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="qualification"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      Reduced Working Hours System
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="hour"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                      Maternity Care Leave System
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="maternity"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                    Company Housing / Rent Subsidy
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="housing"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                    Family Allowance
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="allowance"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                    Employee Stock Ownership
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="stock"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel required id="demo-row-radio-buttons-group-label">
                    Side Job Available
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="job"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    Mentor System
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="mentor"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="flex items-center justify-between">
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    Career Consulting
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="career"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </div>
                  <div className="text-center m-6">
                    <Button
                      type="submit"
                      className="w-[25%]"
                      variant="contained"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </Box>
            </Modal>
    );
};

export default Allowance;