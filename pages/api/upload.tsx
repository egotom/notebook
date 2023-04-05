import { File } from "formidable"
import Formidable from "formidable-serverless"
import fs from "fs";
// import { join } from 'path';
// const imgsDir = join(process.cwd(), 'public/assets/blog/')
const imgsDir = 'public/assets/blog/'
export const config = {
  api: {bodyParser: false}
};

export default function async (req, res) {
  // return new Promise(async (resolve, reject) => {
  //   const form = new Formidable.IncomingForm({
  //     multiples: true,
  //     keepExtensions: true,
  //   });

    // form.on("file", (name: string, file: File) => {
    //     const data = fs.readFileSync(file.path);
    //     fs.writeFileSync(`public/assets/blog/${file.name}`, data);
    //     fs.unlinkSync(file.path);
    //   }).on("aborted", () => {
    //     reject(res.status(500).json('Aborted'))  
    //   }).on("end", () => {
    //     resolve(res.status(200).json('done'));
    //   });
  //   form.on("file", (name: string, file: File) => console.log("fp"))
  //   form.on("title", (name: string, title: string) => console.log(title,"title---------------"))
  //   await form.parse(req);
  // });
  const form = new Formidable.IncomingForm({
    multiples: true,
    keepExtensions: true,
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(err.httpCode || 400).json(err);
      return;
    }
    // console.log(fields, files)
    const dir = imgsDir+fields.title.replaceAll(" ","-")
    const file = `${dir}/${files.file.name}`
    if(!fs.existsSync(dir))
      fs.mkdirSync(dir)
    const data = fs.readFileSync(files.file.path);
    fs.writeFileSync(file, data);
    fs.unlinkSync(files.file.path);
    res.status(200).json({ file:file.replace("public/",'/') });
  });
}
