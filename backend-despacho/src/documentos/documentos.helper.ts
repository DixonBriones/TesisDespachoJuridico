import * as fs from 'fs';

export const destinationDocument = (req, file, callback) => {
    const dest=`./uploads/documentos/${req.params.id}`
    fs.access(dest, function (error) {
      if (error) {
        //console.log("Directory does not exist.");
        return fs.mkdir(dest, (error) => callback(error, dest));
      } else {
        //console.log("Directory exists.");
        return callback(null, dest);
      }
    });
}

export const FileNameDocument = (req, file, callback)=> {
  const nombreOriginalSinExtension = file.originalname.replace('.pdf', '');
  callback(null,nombreOriginalSinExtension+'_'+Date.now()+'.pdf')
}
