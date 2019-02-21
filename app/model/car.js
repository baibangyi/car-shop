module.exports = app => {
  const { Schema, Model } = app.mongoose;
  const carSchema = new Schema({
    carId: { type: String, required: true },
    manufacturers: { type: String, required: true },
    model: { type: String, required: true },
    logo: { type: String, required: false },
    picture: { type: String, required: false },
    guide_price: { type: String, required: false },
    owner_price: { type: String, required: true },
    color: { type: String, required: true },
    facturer_name: { type: String, required: false },
    owner_name: { type: String, required: true },
    owner_tpl: { type: String, required: true },
    level: { type: String, required: false },
    engine: { type: String, required: false },
    transmission_case: { type: String, required: false },
    car_structure: { type: String, required: false },
    max_speed: { type: String, required: false },
    oil_consumption: { type: String, required: false },
    create_time: { type: Date, required: true, default: Date.now }
  }, { timestamps: true });

  class Car extends Model {
  }

  carSchema.index({ create_time: -1}, { unique: true });
  return app.mongoose.model(Car, carSchema);

};