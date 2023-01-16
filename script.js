// Your JS code here.

  function slideInOnScroll() {
    // Get all images on the page
    const images = document.querySelectorAll("img");

    // Get current scroll position
    const scrollPosition = window.scrollY;

    // Iterate over each image
    images.forEach(image => {
      // Get the position of the image on the page
      const imagePosition = image.offsetTop;

      // Check if the current scroll position is greater than the position of the image
      if (scrollPosition > imagePosition) {
        // Add the 'active' class to the image
        image.classList.add("active");
      } else {
        // Remove the 'active' class from the image
        image.classList.remove("active");
      }
    });
  }

  // Pass the slideInOnScroll function to a debounce function
  const debouncedSlideInOnScroll = debounce(slideInOnScroll, 50);

  // Add the debounced function as an event listener for the scroll event
  window.addEventListener("scroll", debouncedSlideInOnScroll);

