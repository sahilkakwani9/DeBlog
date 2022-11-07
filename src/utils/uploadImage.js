import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from 'uuid';

async function storeFiles(file) {
    const client = new Web3Storage({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZENEM4NEY4NDM1RDUwQ2ZlNzcyMDcwQThBMTZEZDBmZmRBNTk2YmUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTc2MTkwNzI5MjQsIm5hbWUiOiJUZXN0VG9rZW4ifQ.r2j5GzLNPXyFStVTwO-0FGcJR-cWjo1Ida2Oh3ldaL4"
    })
    const ext = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${ext}`;
    const newFile = new File([file], fileName, { type: file.type });
    const cid = await client.put([newFile], {
        name: fileName,
    });
    const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
    return imageURI;
}
export default storeFiles;