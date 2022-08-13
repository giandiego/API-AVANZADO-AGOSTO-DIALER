import AMI from "../libs/ami";
import Leads from "../models/Leads";

//Crear Leads
export const CreateLeads = async (req, res) => {
  try {
    const s = req.body,
        leads = s.Leads;


    console.log("result => ",{leads:leads});
    //insertar en mongoose
    // const result = await Leads.create(leads);
    // console.log("result => ",result);

    res.status(200).json({
      success: true,
      message: "Leads creado correctamente",
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error al crear Leads",
    });
  }
};

//Asterisk
export const DialManager = async (req, res) => {
  try {
    const s = req.body,
      i = s.Data;

    if (!i || s.Action !== "DialManager" || !i.Phone || !i.Anexo) {
      throw new Error("Arguments are missing in your query.");
    }

    const DataAmi = {
      Action: "Originate",
      Channel: "Local/" + i.Phone + "@DIALER",
      Context: "test-manager",
      Exten: "s",
      Priority: 1,
      Async: true,
      CallerID: i.CallerID || "Asterisk Call Manager",
      variable: {
        anexo_llamar: i.Anexo,
      },
    };

    let action = await Llamar(DataAmi);
    console.log("action => ", action);

    res.json({
      success: true,
      message: `Vamos a realizar una llamada`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message || "Something goes wrong retrieving the DialManager",
    });
  }
};

//Llamamos
export const Llamar = async (DataAmi) => {
  return new Promise((resolve) => {
    AMI.action(DataAmi, (err, res) => {
      err
        ? (console.log("response error :", err.message), resolve(err.message))
        : resolve(res);
    });
  });
};
