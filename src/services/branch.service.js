const Branch = require("../models/branch.model");

const createBranchService = async (branch) => {
  try {
    return await Branch.create(branch);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createBranchService,
};
