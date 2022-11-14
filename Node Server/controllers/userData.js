
/// GET DATA API 

const getUserData = async (req, res) => {
    try {
      const getData = await PostUser.find();
      if (get4Data) {
        res.status(200).send({ success: true, msg: "User Found", data: getData });
      } else {
        res.status(200).send({ success: true, msg: "User Not Found" });
      }
    } catch (error) {
      res.status(400).send({ success: true, msg: "User Not Exicts" });
    }
  };

/// View User details

const viewProductDetails = async (req, res) => {
    try {
      const userId = req.params.id;
      const findDetails = await PostUser.findById(userId);
      res.status(200).send({
        success: true,
        msg: "findDetails User Details",
        data: findDetails,
      });
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
  };

  // Update USER Api 

  
const UpdateUser = async (req, res) => {
    try {
      const updateDetails = await PostUser.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log(updateDetails, "========updateDetails Details");
      if (updateDetails) {
        console.log(updateDetails, "updateDetails Details");
        res.status(200).send({
          success: true,
          msg: "updated User Details ",
          data: updateDetails,
        });
      } else {
        res.status(200).send({ success: true, msg: "user Not updated " });
      }
    } catch (error) {
      res.status(400).send({ success: true, msg: "Invalid  updated " });
      console.log(error);
    }
  };

  // DELETE USER

  const deleteUser = async (req, res) => {
    try {
      const data = await PostUser.deleteOne(
        { _id: req.params.id },
        { new: true }
      );
      res.status(200).send({ success: true, msg: "Delete User", data: data });
      // console.log(data, "User ID");
    } catch (error) {
      res.status(400).send("Invalid User");
      console.log(error);
    }
  };