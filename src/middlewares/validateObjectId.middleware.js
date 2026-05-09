import mongoose from 'mongoose';

/**
 * TODO: Validate MongoDB ObjectId
 *
 * 1. Check if req.params.id is a valid MongoDB ObjectId
 *    Use: mongoose.Types.ObjectId.isValid(req.params.id)
 * 2. If invalid: return 400 with { error: { message: 'Invalid id format' } }
 * 3. If valid: call next()
 */
export function validateObjectId(req, res, next) {
  // Your code here
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: { message: 'Invalid id format' } });
  }
  next();
    
}
