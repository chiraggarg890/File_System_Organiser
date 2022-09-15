function organizeFn(dirPath)
{
  //  console.log("Organize command Implemented for", dirPath);
  //1.Input-> directory path given
  let destPath;
  if(dirPath== undefined)
  {
   // console.log("Kindly enter the Path");
   destPath=process.cwd();
    return;
  }
  else
  {
      let doesExist=fs.existsSync(dirPath);
      if(doesExist)
      {
//2. Create-> organised files->directory
 destPath=path.join(dirPath,"organised_files");
if(fs.existsSync(destPath)==false)
{
    fs.mkdirSync(destPath);
}

      }
      else
      {
        console.log("Kindly enter the correct Path");
    return;
      }
  }
  organizeHelper(dirPath,destPath);
  
  
  
}

function organizeHelper(src,dest)
{
    //3. identify categories of all the files present in that input directory
  let childNames=  fs.readdirSync(src);
  //console.log(childNames);
  for(let i=0;i<childNames.length;i++)
  {
   let childAddress= path.join(src,childNames[i]);
   let isFile=fs.lstatSync(childAddress).isFile();
   if(isFile)
   {
   // console.log(childNames[i]);
   let category = getCategory(childNames[i]);
   console.log(childNames[i], "belongs to --> ", category);
 // 4. copy / cut  files to that organized directory inside of any of category folder 
 sendFiles(childAddress, dest, category);
   }
  }
}
function sendFiles(srcFilePath, dest, category) {
    // 
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);

}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);// to remove dot
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}
module.exports = {
    organizeKey: organizeFn
}