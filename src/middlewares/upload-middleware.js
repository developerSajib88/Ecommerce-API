const multer = require("multer");
const path = require("path");

const uploadTo = (folderName = "") => {
  const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
      callBack(null, `uploads/${folderName}/`);
    },
    filename: function (req, file, callBack) {
      callBack(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  return multer({ storage: storage });
};

module.exports = uploadTo;
