const PrRating = require("../../models/ProgramRating");

exports.ProgramRating = async (req, res) => {
  try {
    const data = {
      score: req.body.score,
      programId: req.body.programId,
    };
    const ProgramRating = await new PrRating(data);
    await ProgramRating.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: "add all feilds" });
  }
};
