const { createBranchService } = require("../services/branch.service");

const postCreateBranch = async (req, res) => {
  try {
    const { branch_name, address, list_screen, is_active } = req.body;
    const newBranch = await createBranchService({
      branch_name,
      address,
      list_screen,
      is_active,
    });
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  postCreateBranch,
};
