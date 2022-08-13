import { Schema, model } from "mongoose";
const leadsSchema = new Schema(
  {
    leads: [
      {
        phone: { type: String, required: true },
        anexo: { type: String, required: true },
        callerId: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("Leads", leadsSchema);