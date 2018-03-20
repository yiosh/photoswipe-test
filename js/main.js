const galleryBtn = document.getElementById("gallery");

galleryBtn.addEventListener("click", showGallery);

function showGallery() {
  var pswpElement = document.querySelectorAll(".pswp")[0];

  // build items array
  var items = [
    {
      src:
        "http://www.asyouwishweddings.ca/wp-content/uploads/2017/09/asyouwishweddings-niagara-on-the-lake-wedding-kurtz-orchards-iryna-brendan-45.jpg",
      w: 3600,
      h: 2400
    },
    {
      src:
        "https://cdn.vox-cdn.com/thumbor/ENzipj2qxWBX83-Y_lDjezPA-ws=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8632849/image___Filmatography_for_Sarah_Haywood_Weddings___Celebrations_copy_3.jpg",
      w: 1168,
      h: 655
    },
    {
      src:
        "https://cdn.vox-cdn.com/thumbor/SM09wCy4vw1_YiplywJTP7t7RHE=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8632493/image___Greg_Finck_for_Sarah_Haywood_Wedding_Design_1098_copy.jpg",
      w: 1168,
      h: 655
    }
  ];

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    items,
    options
  );
  gallery.init();
}
