module.exports = app => {
    const { Schema, Model } = app.mongoose;
    const conversationSchema = new Schema({
        conversationId: { type: String, required: true },
        author: { type: String, required: true },
        manufacturers: { type: String, required: true },
        model: { type: String, required: true },
        decs: { type: String, required: true },
        create_time: { type: Date, required: true, default: Date.now }
    }, { timestamps: true });
  
    class Conversation extends Model {
    }
  
    conversationSchema.index({ create_time: -1}, { unique: true });
    return app.mongoose.model(Conversation, conversationSchema);
  
  };