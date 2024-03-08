
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req, res) =>{
    const id = req.params.id

    try {

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id, 
             {$set: req.body},
             {new: true}
          );

        res
          .status(200)
          .json({
            success: true, 
            message: "Successfully updated", 
            data: updatedDoctor,
        });
        
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
        
    }
}

export const deletDoctor = async(req, res) =>{
    const id = req.params.id

    try {

       await Doctor.findByIdAndDelete(
            id, 
             
          );

        res
          .status(200)
          .json({
            success:true, 
            message:"Successfully deleted", 
           
        });
        
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delet" });
        
    }
}

export const getSingleDoctor = async(req, res) =>{
    const id = req.params.id

    try {
        const doctors = await Doctor.findById(id).select("-password");

        res
          .status(200)
          .json({
            success:true, 
            message:"Doctor found", 
            data:doctors,
        });
        
    } catch (err) {
        res.status(404).json({ success: false, message: "No Doctor found" });
        
    }
}

export const getAllDoctor = async(req, res) =>{
    const id = req.params.id

    try {

        const {query} = req.query
        let doctors;

        if(query){
            doctors = await Doctor.find({
                isApproved:'approved', 
                $or:[
                    { name: { $regex: query , $options: "i"} }, 
                    {specialization: { $regex: query , $options: "i"} }],
        }).select("-password");
        } else{

             doctors = await Doctor.find({ isApproved:'approved'}).select("-password");

        }


        

        res
          .status(200)
          .json({
            success:true, 
            message:"Doctors found", 
            data:doctors,
        });
        
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
        
    }
}