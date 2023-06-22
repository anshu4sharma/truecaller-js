import truecallerjs from "truecallerjs";
import fs from "fs";
async function bulkSearch(number) {
  var countryCode = "IN";
  // change this to your installation id from truecallerjs installationid 
  var installationId = "a1i0f--gDpULYV1FOf6------gtacRftV..............."
  var response = await truecallerjs.bulkSearch(
    number,
    countryCode,
    installationId
  );
  console.log(response);
  fs.writeFile("output.json", JSON.stringify(response), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

}

let string = "";
for (let i = 0; i <= 9999; i++) {
  // +919900000186 to +919999999186 
  const number = `+9199${i.toString().padStart(4, "0")}0186`;
  if (i === 9999) {
    string += number;
  } else {
    string += number + ",";
  }
}

bulkSearch(string)



// truecallerjs code 

//  behind the seen code of truecallerjs 
// https://www.npmjs.com/package/truecallerjs?activeTab=code
// 