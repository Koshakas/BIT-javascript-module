document.querySelector("button").addEventListener("click", e => {
  fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(photo => {
        const div = document.createElement("div");
        div.classList.add("gallery_img");

        const pic = document.createElement("img");
        pic.setAttribute("src", `https://picsum.photos/id/${photo.id}/200/300`);

        const link = document.createElement("a");
        link.setAttribute("href", photo.download_url);
        link.setAttribute("target", "_blank");
        link.appendChild(pic);

        div.appendChild(link);
        document.body.appendChild(div);

        const caption = document.createElement("div");
        caption.classList.add("caption");
        caption.appendChild(document.createTextNode(photo.author));
        div.appendChild(caption);
      });
    });
});
