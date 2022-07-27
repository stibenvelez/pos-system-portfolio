import multer from "multer";

const config = {
    mimetype: "image/jpg",
    storage: multer.diskStorage({
        filename: (req, file, cb) => {
            if (!file.originalname) {
                return cb(null, true);
            } 
            cb(null, `${file.originalname}`);
        },
        destination: (req, file, cb) => {
            cb(null, "public/products/images/");
        },
        fileFilter: (req, file, cb) => {
            if (file.mimetype !== "image/jpg") {
                return cb(null, true);
            } 
            console.log("hubo un error cargando la imagen");
            cb(null, false);
            
        },
    }),
};

const upload = multer(config).single("image");

export const uploadImage = (req, res, next) => {
    upload(req, res, async (error) => {
        if (error) {
            res.status(400).json({ msg: "Error al subir la imagen" });
            return;
        } else {
            next();
        }
    });
};
