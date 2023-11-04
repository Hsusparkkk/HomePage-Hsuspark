function convertCSVToTXT() {
    const input = document.getElementById("csvFileInput");
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const csvData = event.target.result;
        const textDecoder = new TextDecoder("utf-8");
        const decodedData = textDecoder.decode(new Uint8Array(csvData));

        const lines = decodedData.split("\n");
        const txtData = lines
          .map((line) => {
            const [question, answer] = line.split(",");
            const textarea  = document.querySelector("#textareaID")
            
            const temp = `"${question}":"${answer}"`

            textarea.innerHTML+=temp
            return temp;
          })
          .join(",");

        const blob = new Blob([txtData], { type: "text/plain; charset=utf-8" });
        const url = URL.createObjectURL(blob);
        
        const manuBlock = document.querySelector("#manuBlock")
        manuBlock.classList.add("fadeIn")
        const downloadLink = document.getElementById("downloadLink");
        downloadLink.href = url;
        downloadLink.download = "output.txt";
        downloadLink.style.display = "block";
      };
      reader.readAsArrayBuffer(file);
    }
  }