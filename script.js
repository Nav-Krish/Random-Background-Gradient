document.getElementById("generateBtn").addEventListener("click", () => {
    async function generateColor() {
        var url = "https://x-colors.yurace.pro/api/random/?number=3";
        var color = await fetch(url)
        var data = await color.json()
        console.log(data)

        var gradColors = []
        for (var i = 0; i < data.length; i++) {
            gradColors.push(data[i].hex)
        }
        console.log(gradColors)

        let block = document.getElementById("colorBlock")
        var grad = "linear-gradient(to right, " + gradColors.join(",") + " )";
        console.log(grad)
        block.style.background =grad
    }
    generateColor()
})