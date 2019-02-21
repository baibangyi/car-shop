module.exports = app => {
    const { Schema, Model } = app.mongoose;
    const userSchema = new Schema({
        userId: { type: String, required: true },
        userName: { type: String, required: true },
        password: { type: String, required: true },
        nick_name: { type: String, required: false },
        create_time: { type: Date, required: true, default: Date.now }
    }, { timestamps: true });
  
    class User extends Model {
    }
  
    userSchema.index({ create_time: -1}, { unique: true });
    return app.mongoose.model(User, userSchema);
  
  };